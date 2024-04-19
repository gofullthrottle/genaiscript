import { Fragment, PromptTemplate } from "./ast"
import { assert, normalizeFloat, normalizeInt, normalizeString } from "./util"
import { MarkdownTrace } from "./trace"
import { isCancelError } from "./error"
import { estimateTokens } from "./tokens"
import { DEFAULT_MODEL, DEFAULT_TEMPERATURE, SYSTEM_FENCE } from "./constants"
import { PromptImage, renderPromptNode } from "./promptdom"
import { RunTemplateOptions, createPromptContext } from "./promptcontext"
import { evalPrompt } from "./evalprompt"
import { AICIRequest, renderAICI } from "./aici"
import {
    ChatCompletionAssistantMessageParam,
    ChatCompletionMessageParam,
    ChatCompletionSystemMessageParam,
    toChatCompletionUserMessage,
} from "./chat"
import { importPrompt } from "./importprompt"
import { lookupMime } from "./mime"

const defaultTopP: number = undefined
const defaultSeed: number = undefined
const defaultMaxTokens: number = undefined

export interface FragmentTransformResponse extends PromptGenerationOutput {
    /**
     * Summary of the output generated by the LLM
     */
    summary?: string

    /**
     * The env variables sent to the prompt
     */
    vars: Partial<ExpansionVariables>

    /**
     * Expanded prompt text
     */
    prompt: ChatCompletionMessageParam[]

    /**
     * Zero or more edits to apply.
     */
    edits: Edits[]

    /**
     * Parsed source annotations
     */
    annotations: Diagnostic[]

    /**
     * ChangeLog sections
     */
    changelogs: string[]

    /**
     * MD-formatted trace.
     */
    trace: string

    /**
     * Error message if any
     */
    error?: unknown

    /**
     * Run label if provided
     */
    label?: string

    /**
     * GenAIScript version
     */
    version: string
}

async function callExpander(
    r: PromptTemplate,
    vars: ExpansionVariables,
    trace: MarkdownTrace,
    options: RunTemplateOptions
) {
    const model = r.model || DEFAULT_MODEL
    const ctx = createPromptContext(vars, trace, options, model)

    let success = true
    let logs = ""
    let text = ""
    let assistantText = ""
    let images: PromptImage[] = []
    let schemas: Record<string, JSONSchema> = {}
    let functions: ChatFunctionCallback[] = []
    let fileMerges: FileMergeHandler[] = []
    let outputProcessors: PromptOutputProcessorHandler[] = []
    let aici: AICIRequest

    const logCb = (msg: any) => {
        logs += msg + "\n"
    }

    try {
        if (/^export\s+default\s+/m.test(r.jsSource)) {
            if (!/\.mjs$/i.test(r.filename))
                throw new Error("export default requires .mjs file")
            await importPrompt(ctx, r, { logCb })
        } else {
            await evalPrompt(ctx, r, {
                sourceMaps: true,
                logCb,
            })
        }
        const node = ctx.node
        if (!r.aici) {
            const {
                prompt,
                assistantPrompt,
                images: imgs,
                errors,
                schemas: schs,
                functions: fns,
                fileMerges: fms,
                outputProcessors: ops,
            } = await renderPromptNode(model, node, { trace })
            text = prompt
            assistantText = assistantPrompt
            images = imgs
            schemas = schs
            functions = fns
            fileMerges = fms
            outputProcessors = ops
            if (errors) for (const error of errors) trace.error(``, error)
        } else {
            const tmp = await renderAICI(r.id.replace(/[^a-z0-9_]/gi, ""), node)
            outputProcessors = tmp.outputProcessors
            aici = tmp.aici
        }
    } catch (e) {
        success = false
        if (isCancelError(e)) {
            trace.log(`cancelled: ${(e as Error).message}`)
            // null is cancelled
            success = null
        } else {
            const m = /at eval.*<anonymous>:(\d+):(\d+)/.exec(e.stack)
            const info = m
                ? ` at prompt line ${m[1]}, column ${m[2]}`
                : e.message || ""
            trace.error(info, e)
        }
    }

    return {
        logs,
        success,
        text,
        assistantText,
        images,
        schemas,
        functions,
        fileMerges,
        outputProcessors,
        aici,
    }
}

function traceEnv(
    model: string,
    trace: MarkdownTrace,
    env: ExpansionVariables
) {
    trace.startDetails("🏡 env")
    const files = env.files || []
    if (files.length) {
        trace.startDetails("💾 files")
        for (const file of env.files || []) {
            const { filename = "", label = "" } = file
            if (trace.content) {
                const tokens = estimateTokens(model, trace.content)
                trace.startDetails(`${filename} ${label}, ${tokens}t`)
                trace.fence(file.content, lookupMime(filename))
                trace.endDetails()
            } else trace.item(`${filename} ${label}`)
        }
        trace.endDetails()
    }
    const vars = Object.entries(env.vars || {})
    if (vars.length) {
        trace.startDetails("🧮 vars")
        for (const [k, v] of vars) {
            trace.itemValue(k, v)
        }
        trace.endDetails()
    }
    const secrets = Object.keys(env.secrets || {})
    if (secrets.length) {
        trace.itemValue(`🔐 secrets`, secrets.join(", "))
    }
    trace.endDetails()
}

function resolveSystems(template: PromptTemplate) {
    const { jsSource } = template
    const systems = (template.system ?? []).slice(0)
    if (template.system === undefined) {
        const useSchema = /defschema/i.test(jsSource)
        systems.push("system")
        systems.push("system.explanations")
        // select file expansion type
        if (/diff/i.test(jsSource)) systems.push("system.diff")
        else if (/changelog/i.test(jsSource)) systems.push("system.changelog")
        else {
            systems.push("system.files")
            if (useSchema) systems.push("system.files_schema")
        }
        if (useSchema) systems.push("system.schema")
        if (/annotations?/i.test(jsSource)) systems.push("system.annotations")
    }
    return systems
}

export async function expandTemplate(
    template: PromptTemplate,
    fragment: Fragment,
    options: RunTemplateOptions,
    env: ExpansionVariables,
    trace: MarkdownTrace
) {
    options = { ...(options || {}) }
    const cancellationToken = options?.cancellationToken
    const { jsSource } = template

    trace.detailsFenced("📄 spec", env.spec.content, "markdown")

    const systems = resolveSystems(template)
    const model =
        options.model ??
        normalizeString(env.vars["model"]) ??
        template.model ??
        DEFAULT_MODEL
    const systemTemplates = systems.map((s) =>
        fragment.file.project.getTemplate(s)
    )
    // update options
    options.lineNumbers =
        options.lineNumbers ??
        template.lineNumbers ??
        systemTemplates.some((s) => s?.lineNumbers)
    const temperature =
        options.temperature ??
        normalizeFloat(env.vars["temperature"]) ??
        template.temperature ??
        DEFAULT_TEMPERATURE
    const topP =
        options.topP ??
        normalizeFloat(env.vars["top_p"]) ??
        template.topP ??
        defaultTopP
    const max_tokens =
        options.maxTokens ??
        normalizeInt(env.vars["maxTokens"]) ??
        template.maxTokens ??
        defaultMaxTokens
    let seed =
        options.seed ??
        normalizeInt(env.vars["seed"]) ??
        template.seed ??
        defaultSeed
    if (seed !== undefined) seed = seed >> 0

    trace.startDetails("💾 script")

    trace.itemValue(`model`, model)
    trace.itemValue(`temperature`, temperature)
    trace.itemValue(`top_p`, topP)
    trace.itemValue(`max tokens`, max_tokens)

    traceEnv(model, trace, env)

    trace.startDetails("🧬 prompt")
    trace.detailsFenced("📓 script source", template.jsSource, "js")

    const prompt = await callExpander(template, env, trace, options)
    const expanded = prompt.text
    const images = prompt.images
    const schemas = prompt.schemas
    const functions = prompt.functions
    const fileMerges = prompt.fileMerges
    const outputProcessors = prompt.outputProcessors

    if (prompt.logs?.length) trace.details("📝 console.log", prompt.logs)
    if (prompt.text) {
        trace.itemValue(`tokens`, estimateTokens(model, expanded))
        trace.fence(prompt.text, "markdown")
    }
    if (prompt.aici) trace.fence(prompt.aici, "yaml")
    trace.endDetails()

    let success = prompt.success
    if (success === null)
        // cancelled
        return { success }

    if (cancellationToken?.isCancellationRequested) return { success: null }

    let responseType = template.responseType
    const systemMessage: ChatCompletionSystemMessageParam = {
        role: "system",
        content: "",
    }
    const messages: ChatCompletionMessageParam[] = []
    if (prompt.text)
        messages.push(toChatCompletionUserMessage(prompt.text, prompt.images))
    if (prompt.aici) messages.push(prompt.aici)

    for (let i = 0; i < systems.length && success; ++i) {
        if (cancellationToken?.isCancellationRequested) return { success: null }

        let systemTemplate = systems[i]
        let system = fragment.file.project.getTemplate(systemTemplate)
        if (!system) {
            if (systemTemplate) trace.error(`\`${systemTemplate}\` not found\n`)
            if (i > 0) continue
            systemTemplate = "system"
            system = fragment.file.project.getTemplate(systemTemplate)
            assert(!!system)
        }

        trace.startDetails(`👾 ${systemTemplate}`)
        const sysr = await callExpander(system, env, trace, options)
        success = sysr.success
        responseType = responseType ?? system.responseType
        if (success === null) return { success }
        else if (!success) break

        if (sysr.images) images.push(...sysr.images)
        if (sysr.schemas) Object.assign(schemas, sysr.schemas)
        if (sysr.functions) functions.push(...sysr.functions)
        if (sysr.fileMerges) fileMerges.push(...sysr.fileMerges)
        if (sysr.outputProcessors) outputProcessors.push(...outputProcessors)
        if (sysr.logs?.length) trace.details("📝 console.log", sysr.logs)
        if (sysr.text) {
            systemMessage.content += SYSTEM_FENCE + "\n" + sysr.text + "\n"
            trace.item(
                `tokens: ${estimateTokens(model || template.model || DEFAULT_MODEL, sysr.text)}`
            )
            trace.fence(sysr.text, "markdown")
        }
        if (sysr.aici) {
            trace.fence(sysr.aici, "yaml")
            messages.push(sysr.aici)
        }

        trace.detailsFenced("js", system.jsSource, "js")
        trace.endDetails()
    }

    if (systemMessage.content) messages.unshift(systemMessage)

    if (prompt.assistantText) {
        trace.detailsFenced("🤖 assistant", prompt.assistantText, "markdown")
        const assistantMessage: ChatCompletionAssistantMessageParam = {
            role: "assistant",
            content: prompt.assistantText,
        }
        messages.push(assistantMessage)
    }

    trace.endDetails()

    return {
        messages,
        images,
        schemas,
        functions,
        success,
        model,
        temperature,
        topP,
        max_tokens,
        seed,
        responseType,
        fileMerges,
        outputProcessors,
    }
}
