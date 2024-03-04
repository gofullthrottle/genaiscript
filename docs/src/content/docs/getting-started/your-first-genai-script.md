---
title: Your first GenAI script
sidebar:
    order: 3
---

GenAIScript use stylized JavaScript with minimal syntax. They are stored as files (`genaiscript/*.genai.js`) in your project. The execution of a genaiscript creates the prompt that will be sent to the LLM.

:::tip
Use the `GenAiScript: Create new script...` command in the command palette to create a new script.
:::

## the Metadata

A script must start with a call to the `script` function that provides metadata about the script
and the model. The metadata is used to display the script in the UI and configure the LLM model.

```js
// the metadata
script({
    title: "Technical proofreading",
    description: "Reviews the text as a tech writer.",
})
```

## the Context

GenAIScript exposes the context through the `env` variable. The context is implicitely defined by the location you start executing the script.

-   you can right click on a folder and the `env.files` will contain all the files nested in that folder.
-   you can right click on or in a file and the `env.files` will contain only that file.
-   you can define [spec](/genaisrc/reference/spec) files to define a context
-   you can run the script using the [command line interface](/genaisrc/reference/cli) and specify content of `env.files` in the CLI arguments.

```js
// the context
def("FILES", env.files)
```

The `def` function inlines the content of `env.files` in the final prompt in a LLM friendly way. It also has a number of additional options to control precisely how the content should be inlined.

```js
def("FILES", env.files, {
    // line numbers help with generating diffs
    lineNumber: true,
    // filter .md files only
    endsWith: ".md",
})
```

## the Task

The `$` function is used to build the prompt text. The `$` renders and writes the text to the prompt. You can reference the LLM variable defined with `def` freely in the text as well.

```js
// the task
$`You are an expert technical writer and proofreader.

Review the documents in FILE and report the 5 most important issues.`
```

:::tip
Use the **Trace** to review the each transformation step of the script execution. Ultimately,
the final prompt sent to the LLM is the "truth" of what the LLM model will do.
:::

## Next steps