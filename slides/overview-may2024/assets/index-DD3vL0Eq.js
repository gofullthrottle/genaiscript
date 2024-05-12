const __vite__fileDeps=["assets/slidev/1-vDQSZUfa.js","assets/modules/vue-DBmxtNSw.js","assets/slidev/context-C6iT5q7C.js","assets/modules/shiki-D90nNId7.js","assets/modules/shiki-BSchMNmt.css","assets/2-BDynR_7k.js","assets/slidev/VClick-CP2AQGJ4.js","assets/posw-B3GmNw70.js","assets/slidev/two-cols-header-HTwGRYi-.js","assets/two-cols-header-DTF_BoaY.css","assets/3-RuN3V-Fp.js","assets/slidev/4-DMzPOtPf.js","assets/slidev/image-right-btTkVrJU.js","assets/slidev/5-Bj-YbFmm.js","assets/slidev/CodeBlockWrapper-CYh5E1lA.js","assets/modules/unplugin-icons-CAr7x4nG.js","assets/plug-in-CV3-DuDM.js","assets/slidev/6-BLvERuUU.js","assets/7-CfjepJox.js","assets/slidev/8-Po-6Q1yi.js","assets/slidev/9-CQGywK-u.js","assets/slidev/default-Dpl8JUTN.js","assets/slidev/10-DhFXW0tI.js","assets/slidev/Mermaid-BB1slbD8.js","assets/modules/file-saver-EUMWMpoS.js","assets/slidev/11-Blwqy9d8.js","assets/slidev/12-39zUhMYj.js","assets/slidev/13--HxgQjE8.js","assets/slidev/14-CWM51Ktm.js","assets/slidev/15-UgD5NSUY.js","assets/slidev/16-Dpq9-t0q.js","assets/slidev/17-BhQv2fGZ.js","assets/slidev/18-VkCZ_lpW.js","assets/slidev/19-BU0yvex7.js","assets/slidev/20-BBn17x9L.js","assets/21-BMGsPwGX.js","assets/slidev/22-C2VL6-Wu.js","assets/slidev/23-D8qdzRnB.js","assets/slidev/24-BHicZElf.js","assets/slidev/25-BFY6uxKK.js","assets/slidev/26-BfVmBOvl.js","assets/27-CQ-f5uWV.js","assets/slidev/entry-BWGXzUAL.js","assets/entry-DFVZucWk.css","assets/slidev/overview-Dc7NPNc_.js","assets/slidev/DrawingPreview-D661nhd9.js","assets/DrawingPreview-B_1g_kmH.css","assets/slidev/IconButton-BTHfonLJ.js","assets/slidev/NoteDisplay-SnQeAFhr.js","assets/NoteDisplay-C6AkVv8T.css","assets/slidev/ClicksSlider-DINL0QQT.js","assets/ClicksSlider-DYpxHk94.css","assets/slidev/notes-DmjmGX7K.js","assets/slidev/presenter-Dow4NX2a.js","assets/slidev/ContextMenu-8-XLi3yn.js","assets/ContextMenu-CvLg4A9z.css","assets/slidev/DrawingControls-BSRW1hin.js","assets/DrawingControls-C5T1oZL5.css","assets/presenter-D8Ttzx6l.css","assets/slidev/play-KI-X4gjV.js","assets/play-CoA43pdi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{t as x,y as h,n as It,z as Qs,A as Ln,B as ds,C as Ke,D as Y,E as Zs,G as Xs,H as ea,I as fs,J as b,K as ta,L as na,o as ps,b as sa,M as An,N as Ht,O as aa,P as hs,Q as ia,R as ra,S as ee,T as ms,U as Gt,d as oa,r as la,c as ca,V as ua,W as da,X as fa,Y as pa,Z as ha,_ as ma,$ as ga,a0 as ya,a1 as va,a2 as wa,a3 as ka,a4 as ba,a5 as Sa,u as _a}from"./modules/vue-DBmxtNSw.js";import{T as La}from"./modules/shiki-D90nNId7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function dt(t,e,n){return Math.min(n,Math.max(e,t))}function Aa(...t){return Ca(t).reduce((e,n)=>e+n,0)}function Ma(t){return t=t??[],Array.isArray(t)?t:[t]}function Ca(t){return Ma(t).flat(1)}function xa(t){return Array.from(new Set(t))}function Hn(...t){let e,n,s;t.length===1?(e=0,s=1,[n]=t):[e,n,s=1]=t;const a=[];let i=e;for(;i<n;)a.push(i),i+=s||1;return a}function Ta(t){return t!=null}function Ia(t,e){return Object.fromEntries(Object.entries(t).map(([n,s])=>e(n,s)).filter(Ta))}function tl(t){return Object.keys(t).forEach(e=>t[e]===void 0?delete t[e]:{}),t}const R={theme:"default",title:"GenAIScript",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:"local",monacoTypesAdditionalPackages:[],monacoRunAdditionalDeps:[],download:!1,export:{},info:`<h2>GenAIScript</h2>
<p>Scripting for Generative AI.<br/>
<a href="https://microsoft.github.io/genaiscript/" target="_blank">Docs</a> | <a href="https://github.com/microsoft/genaiscript/" target="_blank">GitHub</a></p>
`,highlighter:"shiki",twoslash:!0,lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},editor:!0,class:"text-center",mdc:!0,layout:"center"},nl="build",gs=x(R.aspectRatio??16/9),Oa=x(R.canvasWidth??980),sl=h(()=>Math.ceil(Oa.value/gs.value)),Da=h(()=>Ia(R.themeConfig||{},(t,e)=>[`--slidev-theme-${t}`,e])),Kt=R.titleTemplate.replace("%s",R.title||"Slidev");function cn(t,e={},n){for(const s in t){const a=t[s],i=n?`${n}:${s}`:s;typeof a=="object"&&a!==null?cn(a,e,i):typeof a=="function"&&(e[i]=a)}return e}const Ea={run:t=>t()},$a=()=>Ea,ys=typeof console.createTask<"u"?console.createTask:$a;function Ra(t,e){const n=e.shift(),s=ys(n);return t.reduce((a,i)=>a.then(()=>s.run(()=>i(...e))),Promise.resolve())}function Pa(t,e){const n=e.shift(),s=ys(n);return Promise.all(t.map(a=>s.run(()=>a(...e))))}function Qt(t,e){for(const n of[...t])n(e)}class Na{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const a=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let r=i.message;r||(r=`${a} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,a=(...i)=>(typeof s=="function"&&s(),s=void 0,a=void 0,n(...i));return s=this.hook(e,a),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const a of s)this.hook(e,a)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=cn(e),s=Object.keys(n).map(a=>this.hook(a,n[a]));return()=>{for(const a of s.splice(0,s.length))a()}}removeHooks(e){const n=cn(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Ra,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Pa,e,...n)}callHookWith(e,n,...s){const a=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Qt(this._before,a);const i=e(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&a&&Qt(this._after,a)}):(this._after&&a&&Qt(this._after,a),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Wa(){return new Na}function ja(t){return Array.isArray(t)?t:[t]}const Fa=["title","titleTemplate","script","style","noscript"],bt=["base","meta","link","style","script","noscript"],Ha=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Ga=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],vs=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],za=typeof window<"u";function Mn(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Gn(t){return t._h||Mn(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function ws(t,e){const{props:n,tag:s}=t;if(Ga.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const a=["id"];s==="meta"&&a.push("name","property","http-equiv");for(const i of a)if(typeof n[i]<"u"){const r=String(n[i]);return`${s}:${i}:${r}`}return!1}function zn(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function Va(t,e,n){const s={tag:t,props:await ks(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return vs.forEach(a=>{const i=typeof s.props[a]<"u"?s.props[a]:n[a];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(a)||Fa.includes(s.tag))&&(s[a==="children"?"innerHTML":a]=i),delete s.props[a])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(a=>({...s,props:{...s.props,content:a}})):s}function qa(t,e){var s;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,a])=>a).map(([a,i])=>t==="style"?`${a}:${i}`:a)),(s=Array.isArray(e)?e.join(n):e)==null?void 0:s.split(n).filter(a=>a.trim()).filter(Boolean).join(n)}async function ks(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=qa(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!vs.includes(n)){const s=String(t[n]),a=n.startsWith("data-");s==="true"||s===""?t[n]=a?"true":!0:t[n]||(a&&s==="false"?t[n]="false":delete t[n])}}return t}const Ba=10;async function Ua(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,s])=>typeof s<"u"&&Ha.includes(n)).forEach(([n,s])=>{const a=ja(s);e.push(...a.map(i=>Va(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,s)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<Ba)+s,n))}const Vn={base:-10,title:10},qn={critical:-80,high:-10,low:20};function Ot(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in Vn&&(e=Vn[t.tag]),typeof n=="string"&&n in qn?e+qn[n]:e)}const Ja=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Bn=["onload","onerror","onabort","onprogress","onloadstart"],ie="%separator";function St(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function s(r){let o;return["s","pageTitle"].includes(r)?o=e.pageTitle:r.includes(".")?o=r.split(".").reduce((l,c)=>l&&l[c]||void 0,e):o=e[r],typeof o<"u"?(o||"").replace(/"/g,'\\"'):!1}let a=t;try{a=decodeURI(t)}catch{}return(a.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const o=s(r.slice(1));typeof o=="string"&&(t=t.replace(new RegExp(`\\${r}(\\W|$)`,"g"),(l,c)=>`${o}${c}`).trim())}),t.includes(ie)&&(t.endsWith(ie)&&(t=t.slice(0,-ie.length).trim()),t.startsWith(ie)&&(t=t.slice(ie.length).trim()),t=t.replace(new RegExp(`\\${ie}\\s*\\${ie}`,"g"),ie),t=St(t,{separator:n},n)),t}async function Ya(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const a=(await t.resolveTags()).map(d=>({tag:d,id:bt.includes(d.tag)?Gn(d):d.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const d of["body","head"]){const f=(u=n[d])==null?void 0:u.children,p=[];for(const m of[...f].filter(g=>bt.includes(g.tagName.toLowerCase()))){const g={tag:m.tagName.toLowerCase(),props:await ks(m.getAttributeNames().reduce((w,k)=>({...w,[k]:m.getAttribute(k)}),{})),innerHTML:m.innerHTML};let y=1,v=ws(g);for(;v&&p.find(w=>w._d===v);)v=`${v}:${y++}`;g._d=v||void 0,p.push(g),i.elMap[m.getAttribute("data-hid")||Gn(g)]=m}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function r(d,f,p){const m=`${d}:${f}`;i.sideEffects[m]=p,delete i.pendingSideEffects[m]}function o({id:d,$el:f,tag:p}){const m=p.tag.endsWith("Attrs");i.elMap[d]=f,m||(["textContent","innerHTML"].forEach(g=>{p[g]&&p[g]!==f[g]&&(f[g]=p[g])}),r(d,"el",()=>{var g;(g=i.elMap[d])==null||g.remove(),delete i.elMap[d]}));for(const[g,y]of Object.entries(p._eventHandlers||{}))f.getAttribute(`data-${g}`)!==""&&((p.tag==="bodyAttrs"?n.defaultView:f).addEventListener(g.replace("on",""),y.bind(f)),f.setAttribute(`data-${g}`,""));Object.entries(p.props).forEach(([g,y])=>{const v=`attr:${g}`;if(g==="class")for(const w of(y||"").split(" ").filter(Boolean))m&&r(d,`${v}:${w}`,()=>f.classList.remove(w)),!f.classList.contains(w)&&f.classList.add(w);else if(g==="style")for(const w of(y||"").split(";").filter(Boolean)){const[k,...S]=w.split(":").map(A=>A.trim());r(d,`${v}:${w}:${k}`,()=>{f.style.removeProperty(k)}),f.style.setProperty(k,S.join(":"))}else f.getAttribute(g)!==y&&f.setAttribute(g,y===!0?"":String(y)),m&&r(d,v,()=>f.removeAttribute(g))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of a){const{tag:f,shouldRender:p,id:m}=d;if(p){if(f.tag==="title"){n.title=f.textContent;continue}d.$el=d.$el||i.elMap[m],d.$el?o(d):bt.includes(f.tag)&&l.push(d)}}for(const d of l){const f=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),o(d),c[f]=c[f]||n.createDocumentFragment(),c[f].appendChild(d.$el)}for(const d of a)await t.hooks.callHook("dom:renderTag",d,n,r);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose),Object.values(i.pendingSideEffects).forEach(d=>d()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:a})}async function Ka(t,e={}){const n=e.delayFn||(s=>setTimeout(s,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(s=>n(async()=>{await Ya(t,e),delete t._domUpdatePromise,s()}))}function Qa(t){return e=>{var s,a;const n=((a=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:a.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){Ka(i,t)}}}}}const Za=["templateParams","htmlAttrs","bodyAttrs"],Xa={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(s=>{t.props[s]&&(t.key=t.props[s],delete t.props[s])});const n=ws(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(s=>{const a=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,i=e[a];if(i){let o=s==null?void 0:s.tagDuplicateStrategy;if(!o&&Za.includes(s.tag)&&(o="merge"),o==="merge"){const l=i.props;["class","style"].forEach(c=>{l[c]&&(s.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),s.props[c]=`${l[c]} ${s.props[c]}`):s.props[c]=l[c])}),e[a].props={...l,...s.props};return}else if(s._e===i._e){i._duped=i._duped||[],s._d=`${i._d}:${i._duped.length+1}`,i._duped.push(s);return}else if(Ot(s)>Ot(i))return}const r=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(bt.includes(s.tag)&&r===0){delete e[a];return}e[a]=s});const n=[];Object.values(e).forEach(s=>{const a=s._duped;delete s._duped,n.push(s),a&&n.push(...a)}),t.tags=n,t.tags=t.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},ei={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},ti=["script","link","bodyAttrs"],ni=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(s=>ti.includes(s.tag)))Object.entries(n.props).forEach(([s,a])=>{s.startsWith("on")&&typeof a=="function"&&(t.ssr&&Bn.includes(s)?n.props[s]=`this.dataset.${s}fired = true`:delete n.props[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=a)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Mn(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var s,a;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(r=>Bn.some(o=>`${o}fired`===r))){const r=i.replace("fired","");(a=(s=n._eventHandlers)==null?void 0:s[r])==null||a.call(e,new Event(r.replace("on","")))}}}}),si=["link","style","script","noscript"],ai={hooks:{"tag:normalise":({tag:t})=>{t.key&&si.includes(t.tag)&&(t.props["data-hid"]=t._h=Mn(t.key))}}},ii={hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(a=>a._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of Ja)for(const a of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(a.tagPriority.replace(n,""));typeof i<"u"&&(a._p=i+s)}t.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>Ot(n)-Ot(s))}}},ri={meta:"content",link:"href",htmlAttrs:"lang"},oi=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e,s=(o=n.find(l=>l.tag==="title"))==null?void 0:o.textContent,a=n.findIndex(l=>l.tag==="templateParams"),i=a!==-1?n[a].props:{},r=i.separator||"|";delete i.separator,i.pageTitle=St(i.pageTitle||s||"",i,r);for(const l of n.filter(c=>c.processTemplateParams!==!1)){const c=ri[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=St(l.props[c],i,r):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=St(l[u],i,r))})}t._templateParams=i,t._separator=r,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),li={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(a=>a.tag==="titleTemplate");const s=e.findIndex(a=>a.tag==="title");if(s!==-1&&n!==-1){const a=zn(e[n].textContent,e[s].textContent);a!==null?e[s].textContent=a||e[s].textContent:delete e[s]}else if(n!==-1){const a=zn(e[n].textContent);a!==null&&(e[n].textContent=a,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},ci={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let bs;function ui(t={}){const e=di(t);return e.use(Qa()),bs=e}function Un(t,e){return!t||t==="server"&&e||t==="client"&&!e}function di(t={}){const e=Wa();e.addHooks(t.hooks||{}),t.document=t.document||(za?document:void 0);const n=!t.document,s=()=>{o.dirty=!0,e.callHook("entries:updated",o)};let a=0,i=[];const r=[],o={plugins:r,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const c=typeof l=="function"?l(o):l;(!c.key||!r.some(u=>u.key===c.key))&&(r.push(c),Un(c.mode,n)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:a++,input:l,...c};return Un(u.mode,n)&&(i.push(u),s()),{dispose(){i=i.filter(d=>d._i!==u._i),e.callHook("entries:updated",o),s()},patch(d){i=i.map(f=>(f._i===u._i&&(f.input=u.input=d),f)),s()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const d of await Ua(c)){const f={tag:d,entry:c,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[Xa,ei,ni,ai,ii,oi,li,ci,...(t==null?void 0:t.plugins)||[]].forEach(l=>o.use(l)),o.hooks.callHook("init",o),o}function fi(){return bs}const pi=Qs.startsWith("3");function hi(t){return typeof t=="function"?t():Ln(t)}function Dt(t,e=""){if(t instanceof Promise)return t;const n=hi(t);return!t||!n?n:Array.isArray(n)?n.map(s=>Dt(s,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>s==="titleTemplate"||s.startsWith("on")?[s,Ln(a)]:[s,Dt(a,s)])):n}const mi={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Dt(e.input)}}},Ss="usehead";function gi(t){return{install(n){pi&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Ss,t))}}.install}function yi(t={}){t.domDelayFn=t.domDelayFn||(n=>It(()=>setTimeout(()=>n(),0)));const e=ui(t);return e.use(mi),e.install=gi(e),e}const Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yn="__unhead_injection_handler__";function vi(){if(Yn in Jn)return Jn[Yn]();const t=ds(Ss);return t||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),t||fi()}function wi(t,e={}){const n=e.head||vi();if(n)return n.ssr?n.push(t,e):ki(n,t,e)}function ki(t,e,n={}){const s=x(!1),a=x({});Ke(()=>{a.value=s.value?{}:Dt(e)});const i=t.push(a.value,n);return Y(a,o=>{i.patch(o)}),fs()&&(Zs(()=>{i.dispose()}),Xs(()=>{s.value=!0}),ea(()=>{s.value=!1})),i}function _s(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function K(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!1})}const je=b({page:0,clicks:0});let bi=[],Si=[];K(je,"$syncUp",!0);K(je,"$syncDown",!0);K(je,"$paused",!1);K(je,"$onSet",t=>bi.push(t));K(je,"$onPatch",t=>Si.push(t));_s();K(je,"$patch",async()=>!1);function Ls(t,e,n=!1){const s=[];let a=!1,i=!1,r,o;const l=b(e);function c(p){s.push(p)}function u(p,m){l[p]!==m&&(clearTimeout(r),a=!0,l[p]=m,r=setTimeout(()=>a=!1,0))}function d(p){a||(clearTimeout(o),i=!0,Object.entries(p).forEach(([m,g])=>{l[m]=g}),o=setTimeout(()=>i=!1,0))}function f(p){let m;n?n&&window.addEventListener("storage",y=>{y&&y.key===p&&y.newValue&&d(JSON.parse(y.newValue))}):(m=new BroadcastChannel(p),m.addEventListener("message",y=>d(y.data)));function g(){!n&&m&&!i?m.postMessage(ta(l)):n&&!i&&window.localStorage.setItem(p,JSON.stringify(l)),a||s.forEach(y=>y(l))}if(Y(l,g,{deep:!0,flush:"sync"}),n){const y=window.localStorage.getItem(p);y&&d(JSON.parse(y))}}return{init:f,onPatch:c,patch:u,state:l}}const{init:_i,onPatch:Li,patch:nt,state:al}=Ls(je,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Fe=b({});let Ai=[],Mi=[];K(Fe,"$syncUp",!0);K(Fe,"$syncDown",!0);K(Fe,"$paused",!1);K(Fe,"$onSet",t=>Ai.push(t));K(Fe,"$onPatch",t=>Mi.push(t));_s();K(Fe,"$patch",async()=>!1);const{init:Ci,onPatch:il,patch:rl,state:ol}=Ls(Fe,{},!1),zt="$$slidev-clicks-context",Cn="$$slidev-page",As="$$slidev-slide-element",xi="$$slidev-slide-scale",Ti="$$slidev-context",ll="$$slidev-route",xn="$$slidev-render-context",Ii="$$slidev-fontmatter",Oi="$$slidev-slide-zoom",_t="slidev-vclick-target",st="slidev-vclick-hidden",at="slidev-vclick-fade",Zt="slidev-vclick-hidden-explicitly",Xt="slidev-vclick-current",en="slidev-vclick-prior",Lt=999999,Di=["localhost","127.0.0.1"],Ei=["clicks","clicksStart","disabled","hide","hideInToc","layout","level","preload","routeAlias","src","title","transition","zoom","dragPos"],cl=[...Ei,"theme","titleTemplate","info","author","keywords","presenter","download","exportFilename","export","highlighter","lineNumbers","monaco","monacoTypesSource","monacoTypesAdditionalPackages","monacoRunAdditionalDeps","remoteAssets","selectable","record","colorSchema","routerMode","aspectRatio","canvasWidth","themeConfig","favicon","plantUmlServer","fonts","defaults","drawings","htmlAttrs","mdc","contextMenu"],Tn=x(!1),In=Symbol.for("yaml.alias"),$i=Symbol.for("yaml.document"),We=Symbol.for("yaml.map"),Ms=Symbol.for("yaml.pair"),On=Symbol.for("yaml.scalar"),ht=Symbol.for("yaml.seq"),se=Symbol.for("yaml.node.type"),Ze=t=>!!t&&typeof t=="object"&&t[se]===In,Vt=t=>!!t&&typeof t=="object"&&t[se]===$i,Cs=t=>!!t&&typeof t=="object"&&t[se]===We,G=t=>!!t&&typeof t=="object"&&t[se]===Ms,F=t=>!!t&&typeof t=="object"&&t[se]===On,Dn=t=>!!t&&typeof t=="object"&&t[se]===ht;function U(t){if(t&&typeof t=="object")switch(t[se]){case We:case ht:return!0}return!1}function q(t){if(t&&typeof t=="object")switch(t[se]){case In:case We:case On:case ht:return!0}return!1}const Ri=t=>(F(t)||U(t))&&!!t.anchor,Re=Symbol("break visit"),Pi=Symbol("skip children"),lt=Symbol("remove node");function ft(t,e){const n=Ni(e);Vt(t)?Be(null,t.contents,n,Object.freeze([t]))===lt&&(t.contents=null):Be(null,t,n,Object.freeze([]))}ft.BREAK=Re;ft.SKIP=Pi;ft.REMOVE=lt;function Be(t,e,n,s){const a=Wi(t,e,n,s);if(q(a)||G(a))return ji(t,s,a),Be(t,a,n,s);if(typeof a!="symbol"){if(U(e)){s=Object.freeze(s.concat(e));for(let i=0;i<e.items.length;++i){const r=Be(i,e.items[i],n,s);if(typeof r=="number")i=r-1;else{if(r===Re)return Re;r===lt&&(e.items.splice(i,1),i-=1)}}}else if(G(e)){s=Object.freeze(s.concat(e));const i=Be("key",e.key,n,s);if(i===Re)return Re;i===lt&&(e.key=null);const r=Be("value",e.value,n,s);if(r===Re)return Re;r===lt&&(e.value=null)}}return a}function Ni(t){return typeof t=="object"&&(t.Collection||t.Node||t.Value)?Object.assign({Alias:t.Node,Map:t.Node,Scalar:t.Node,Seq:t.Node},t.Value&&{Map:t.Value,Scalar:t.Value,Seq:t.Value},t.Collection&&{Map:t.Collection,Seq:t.Collection},t):t}function Wi(t,e,n,s){var a,i,r,o,l;if(typeof n=="function")return n(t,e,s);if(Cs(e))return(a=n.Map)==null?void 0:a.call(n,t,e,s);if(Dn(e))return(i=n.Seq)==null?void 0:i.call(n,t,e,s);if(G(e))return(r=n.Pair)==null?void 0:r.call(n,t,e,s);if(F(e))return(o=n.Scalar)==null?void 0:o.call(n,t,e,s);if(Ze(e))return(l=n.Alias)==null?void 0:l.call(n,t,e,s)}function ji(t,e,n){const s=e[e.length-1];if(U(s))s.items[t]=n;else if(G(s))t==="key"?s.key=n:s.value=n;else if(Vt(s))s.contents=n;else{const a=Ze(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${a} parent`)}}function xs(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;throw new Error(n)}return!0}function ot(t,e,n,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let a=0,i=s.length;a<i;++a){const r=s[a],o=ot(t,s,String(a),r);o===void 0?delete s[a]:o!==r&&(s[a]=o)}else if(s instanceof Map)for(const a of Array.from(s.keys())){const i=s.get(a),r=ot(t,s,a,i);r===void 0?s.delete(a):r!==i&&s.set(a,r)}else if(s instanceof Set)for(const a of Array.from(s)){const i=ot(t,s,a,a);i===void 0?s.delete(a):i!==a&&(s.delete(a),s.add(i))}else for(const[a,i]of Object.entries(s)){const r=ot(t,s,a,i);r===void 0?delete s[a]:r!==i&&(s[a]=r)}return t.call(e,n,s)}function X(t,e,n){if(Array.isArray(t))return t.map((s,a)=>X(s,String(a),n));if(t&&typeof t.toJSON=="function"){if(!n||!Ri(t))return t.toJSON(e,n);const s={aliasCount:0,count:1,res:void 0};n.anchors.set(t,s),n.onCreate=i=>{s.res=i,delete n.onCreate};const a=t.toJSON(e,n);return n.onCreate&&n.onCreate(a),a}return typeof t=="bigint"&&!(n!=null&&n.keep)?Number(t):t}class En{constructor(e){Object.defineProperty(this,se,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:n,maxAliasCount:s,onAnchor:a,reviver:i}={}){if(!Vt(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},o=X(this,"",r);if(typeof a=="function")for(const{count:l,res:c}of r.anchors.values())a(c,l);return typeof i=="function"?ot(i,{"":o},"",o):o}}class Fi extends En{constructor(e){super(In),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let n;return ft(e,{Node:(s,a)=>{if(a===this)return ft.BREAK;a.anchor===this.source&&(n=a)}}),n}toJSON(e,n){if(!n)return{source:this.source};const{anchors:s,doc:a,maxAliasCount:i}=n,r=this.resolve(a);if(!r){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let o=s.get(r);if(o||(X(r,null,n),o=s.get(r)),!o||o.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=At(a,r,s)),o.count*o.aliasCount>i)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return o.res}toString(e,n,s){const a=`*${this.source}`;if(e){if(xs(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${a} `}return a}}function At(t,e,n){if(Ze(e)){const s=e.resolve(t),a=n&&s&&n.get(s);return a?a.count*a.aliasCount:0}else if(U(e)){let s=0;for(const a of e.items){const i=At(t,a,n);i>s&&(s=i)}return s}else if(G(e)){const s=At(t,e.key,n),a=At(t,e.value,n);return Math.max(s,a)}return 1}const Ts=t=>!t||typeof t!="function"&&typeof t!="object";class W extends En{constructor(e){super(On),this.value=e}toJSON(e,n){return n!=null&&n.keep?this.value:X(this.value,e,n)}toString(){return String(this.value)}}W.BLOCK_FOLDED="BLOCK_FOLDED";W.BLOCK_LITERAL="BLOCK_LITERAL";W.PLAIN="PLAIN";W.QUOTE_DOUBLE="QUOTE_DOUBLE";W.QUOTE_SINGLE="QUOTE_SINGLE";function Hi(t,e,n){return n.find(s=>{var a;return((a=s.identify)==null?void 0:a.call(s,t))&&!s.format})}function Et(t,e,n){var d,f,p;if(Vt(t)&&(t=t.contents),q(t))return t;if(G(t)){const m=(f=(d=n.schema[We]).createNode)==null?void 0:f.call(d,n.schema,null,n);return m.items.push(t),m}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt<"u"&&t instanceof BigInt)&&(t=t.valueOf());const{aliasDuplicateObjects:s,onAnchor:a,onTagObj:i,schema:r,sourceObjects:o}=n;let l;if(s&&t&&typeof t=="object"){if(l=o.get(t),l)return l.anchor||(l.anchor=a(t)),new Fi(l.anchor);l={anchor:null,node:null},o.set(t,l)}let c=Hi(t,e,r.tags);if(!c){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object"){const m=new W(t);return l&&(l.node=m),m}c=t instanceof Map?r[We]:Symbol.iterator in Object(t)?r[ht]:r[We]}i&&(i(c),delete n.onTagObj);const u=c!=null&&c.createNode?c.createNode(n.schema,t,n):typeof((p=c==null?void 0:c.nodeClass)==null?void 0:p.from)=="function"?c.nodeClass.from(n.schema,t,n):new W(t);return c.default||(u.tag=c.tag),l&&(l.node=u),u}function Kn(t,e,n){let s=n;for(let a=e.length-1;a>=0;--a){const i=e[a];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const r=[];r[i]=s,s=r}else s=new Map([[i,s]])}return Et(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:t,sourceObjects:new Map})}const Gi=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class $n extends En{constructor(e,n){super(e),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(e){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(n.schema=e),n.items=n.items.map(s=>q(s)||G(s)?s.clone(e):s),this.range&&(n.range=this.range.slice()),n}addIn(e,n){if(Gi(e))this.add(n);else{const[s,...a]=e,i=this.get(s,!0);if(U(i))i.addIn(a,n);else if(i===void 0&&this.schema)this.set(s,Kn(this.schema,a,n));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${a}`)}}deleteIn(e){const[n,...s]=e;if(s.length===0)return this.delete(n);const a=this.get(n,!0);if(U(a))return a.deleteIn(s);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}getIn(e,n){const[s,...a]=e,i=this.get(s,!0);return a.length===0?!n&&F(i)?i.value:i:U(i)?i.getIn(a,n):void 0}hasAllNullValues(e){return this.items.every(n=>{if(!G(n))return!1;const s=n.value;return s==null||e&&F(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[n,...s]=e;if(s.length===0)return this.has(n);const a=this.get(n,!0);return U(a)?a.hasIn(s):!1}setIn(e,n){const[s,...a]=e;if(a.length===0)this.set(s,n);else{const i=this.get(s,!0);if(U(i))i.setIn(a,n);else if(i===void 0&&this.schema)this.set(s,Kn(this.schema,a,n));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${a}`)}}}$n.maxFlowStringSingleLineLength=60;const zi=t=>t.replace(/^(?!$)(?: $)?/gm,"#");function pt(t,e){return/^\n+$/.test(t)?t.substring(1):e?t.replace(/^(?! *$)/gm,e):t}const Ue=(t,e,n)=>t.endsWith(`
`)?pt(n,e):n.includes(`
`)?`
`+pt(n,e):(t.endsWith(" ")?"":" ")+n,Is="flow",un="block",Mt="quoted";function qt(t,e,n="flow",{indentAtStart:s,lineWidth:a=80,minContentWidth:i=20,onFold:r,onOverflow:o}={}){if(!a||a<0)return t;const l=Math.max(1+i,1+a-e.length);if(t.length<=l)return t;const c=[],u={};let d=a-e.length;typeof s=="number"&&(s>a-Math.max(2,i)?c.push(0):d=a-s);let f,p,m=!1,g=-1,y=-1,v=-1;n===un&&(g=Qn(t,g,e.length),g!==-1&&(d=g+l));for(let k;k=t[g+=1];){if(n===Mt&&k==="\\"){switch(y=g,t[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}v=g}if(k===`
`)n===un&&(g=Qn(t,g,e.length)),d=g+e.length+l,f=void 0;else{if(k===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const S=t[g+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(f=g)}if(g>=d)if(f)c.push(f),d=f+l,f=void 0;else if(n===Mt){for(;p===" "||p==="	";)p=k,k=t[g+=1],m=!0;const S=g>v+1?g-2:y-1;if(u[S])return t;c.push(S),u[S]=!0,d=S+l,f=void 0}else m=!0}p=k}if(m&&o&&o(),c.length===0)return t;r&&r();let w=t.slice(0,c[0]);for(let k=0;k<c.length;++k){const S=c[k],A=c[k+1]||t.length;S===0?w=`
${e}${t.slice(0,A)}`:(n===Mt&&u[S]&&(w+=`${t[S]}\\`),w+=`
${e}${t.slice(S+1,A)}`)}return w}function Qn(t,e,n){let s=e,a=e+1,i=t[a];for(;i===" "||i==="	";)if(e<a+n)i=t[++e];else{do i=t[++e];while(i&&i!==`
`);s=e,a=e+1,i=t[a]}return s}const Bt=(t,e)=>({indentAtStart:e?t.indent.length:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),Ut=t=>/^(%|---|\.\.\.)/m.test(t);function Vi(t,e,n){if(!e||e<0)return!1;const s=e-n,a=t.length;if(a<=s)return!1;for(let i=0,r=0;i<a;++i)if(t[i]===`
`){if(i-r>s)return!0;if(r=i+1,a-r<=s)return!1}return!0}function ct(t,e){const n=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return n;const{implicitKey:s}=e,a=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(Ut(t)?"  ":"");let r="",o=0;for(let l=0,c=n[l];c;c=n[++l])if(c===" "&&n[l+1]==="\\"&&n[l+2]==="n"&&(r+=n.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(n[l+1]){case"u":{r+=n.slice(o,l);const u=n.substr(l+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=n.substr(l,6)}l+=5,o=l+1}break;case"n":if(s||n[l+2]==='"'||n.length<a)l+=1;else{for(r+=n.slice(o,l)+`

`;n[l+2]==="\\"&&n[l+3]==="n"&&n[l+4]!=='"';)r+=`
`,l+=2;r+=i,n[l+2]===" "&&(r+="\\"),l+=1,o=l+1}break;default:l+=1}return r=o?r+n.slice(o):n,s?r:qt(r,i,Mt,Bt(e,!1))}function dn(t,e){if(e.options.singleQuote===!1||e.implicitKey&&t.includes(`
`)||/[ \t]\n|\n[ \t]/.test(t))return ct(t,e);const n=e.indent||(Ut(t)?"  ":""),s="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return e.implicitKey?s:qt(s,n,Is,Bt(e,!1))}function Je(t,e){const{singleQuote:n}=e.options;let s;if(n===!1)s=ct;else{const a=t.includes('"'),i=t.includes("'");a&&!i?s=dn:i&&!a?s=ct:s=n?dn:ct}return s(t,e)}let fn;try{fn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{fn=/\n+(?!\n|$)/g}function Ct({comment:t,type:e,value:n},s,a,i){const{blockQuote:r,commentString:o,lineWidth:l}=s.options;if(!r||/\n[\t ]+$/.test(n)||/^\s*$/.test(n))return Je(n,s);const c=s.indent||(s.forceBlockIndent||Ut(n)?"  ":""),u=r==="literal"?!0:r==="folded"||e===W.BLOCK_FOLDED?!1:e===W.BLOCK_LITERAL?!0:!Vi(n,l,c.length);if(!n)return u?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){const L=n[f-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let p=n.substring(f);const m=p.indexOf(`
`);m===-1?d="-":n===p||m!==p.length-1?(d="+",i&&i()):d="",p&&(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(fn,`$&${c}`));let g=!1,y,v=-1;for(y=0;y<n.length;++y){const L=n[y];if(L===" ")g=!0;else if(L===`
`)v=y;else break}let w=n.substring(0,v<y?v+1:y);w&&(n=n.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let S=(u?"|":">")+(g?c?"2":"1":"")+d;if(t&&(S+=" "+o(t.replace(/ ?[\r\n]+/g," ")),a&&a()),u)return n=n.replace(/\n+/g,`$&${c}`),`${S}
${c}${w}${n}${p}`;n=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);const A=qt(`${w}${n}${p}`,c,un,Bt(s,!0));return`${S}
${c}${A}`}function qi(t,e,n,s){const{type:a,value:i}=t,{actualString:r,implicitKey:o,indent:l,indentStep:c,inFlow:u}=e;if(o&&i.includes(`
`)||u&&/[[\]{},]/.test(i))return Je(i,e);if(!i||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return o||u||!i.includes(`
`)?Je(i,e):Ct(t,e,n,s);if(!o&&!u&&a!==W.PLAIN&&i.includes(`
`))return Ct(t,e,n,s);if(Ut(i)){if(l==="")return e.forceBlockIndent=!0,Ct(t,e,n,s);if(o&&l===c)return Je(i,e)}const d=i.replace(/\n+/g,`$&
${l}`);if(r){const f=g=>{var y;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((y=g.test)==null?void 0:y.test(d))},{compat:p,tags:m}=e.doc.schema;if(m.some(f)||p!=null&&p.some(f))return Je(i,e)}return o?d:qt(d,l,Is,Bt(e,!1))}function Bi(t,e,n,s){const{implicitKey:a,inFlow:i}=e,r=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:o}=t;o!==W.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(o=W.QUOTE_DOUBLE);const l=u=>{switch(u){case W.BLOCK_FOLDED:case W.BLOCK_LITERAL:return a||i?Je(r.value,e):Ct(r,e,n,s);case W.QUOTE_DOUBLE:return ct(r.value,e);case W.QUOTE_SINGLE:return dn(r.value,e);case W.PLAIN:return qi(r,e,n,s);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:u,defaultStringType:d}=e.options,f=a&&u||d;if(c=l(f),c===null)throw new Error(`Unsupported default string type ${f}`)}return c}function Ui(t,e){const n=Object.assign({blockQuote:!0,commentString:zi,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},t.schema.toStringOptions,e);let s;switch(n.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:t,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:s,options:n}}function Ji(t,e){var a;if(e.tag){const i=t.filter(r=>r.tag===e.tag);if(i.length>0)return i.find(r=>r.format===e.format)??i[0]}let n,s;if(F(e)){s=e.value;const i=t.filter(r=>{var o;return(o=r.identify)==null?void 0:o.call(r,s)});n=i.find(r=>r.format===e.format)??i.find(r=>!r.format)}else s=e,n=t.find(i=>i.nodeClass&&s instanceof i.nodeClass);if(!n){const i=((a=s==null?void 0:s.constructor)==null?void 0:a.name)??typeof s;throw new Error(`Tag not resolved for ${i} value`)}return n}function Yi(t,e,{anchors:n,doc:s}){if(!s.directives)return"";const a=[],i=(F(t)||U(t))&&t.anchor;i&&xs(i)&&(n.add(i),a.push(`&${i}`));const r=t.tag?t.tag:e.default?null:e.tag;return r&&a.push(s.directives.tagString(r)),a.join(" ")}function $t(t,e,n,s){var l;if(G(t))return t.toString(e,n,s);if(Ze(t)){if(e.doc.directives)return t.toString(e);if((l=e.resolvedAliases)!=null&&l.has(t))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(t):e.resolvedAliases=new Set([t]),t=t.resolve(e.doc)}let a;const i=q(t)?t:e.doc.createNode(t,{onTagObj:c=>a=c});a||(a=Ji(e.doc.schema.tags,i));const r=Yi(i,a,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);const o=typeof a.stringify=="function"?a.stringify(i,e,n,s):F(i)?Bi(i,e,n,s):i.toString(e,n,s);return r?F(i)||o[0]==="{"||o[0]==="["?`${r} ${o}`:`${r}
${e.indent}${o}`:o}function Ki({key:t,value:e},n,s,a){const{allNullValues:i,doc:r,indent:o,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:d}}=n;let f=q(t)&&t.comment||null;if(d){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(U(t)){const T="With simple keys, collection cannot be used as a key value";throw new Error(T)}}let p=!d&&(!t||f&&e==null&&!n.inFlow||U(t)||(F(t)?t.type===W.BLOCK_FOLDED||t.type===W.BLOCK_LITERAL:typeof t=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(d||!i),indent:o+l});let m=!1,g=!1,y=$t(t,n,()=>m=!0,()=>g=!0);if(!p&&!n.inFlow&&y.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(n.inFlow){if(i||e==null)return m&&s&&s(),y===""?"?":p?`? ${y}`:y}else if(i&&!d||e==null&&p)return y=`? ${y}`,f&&!m?y+=Ue(y,n.indent,c(f)):g&&a&&a(),y;m&&(f=null),p?(f&&(y+=Ue(y,n.indent,c(f))),y=`? ${y}
${o}:`):(y=`${y}:`,f&&(y+=Ue(y,n.indent,c(f))));let v,w,k;q(e)?(v=!!e.spaceBefore,w=e.commentBefore,k=e.comment):(v=!1,w=null,k=null,e&&typeof e=="object"&&(e=r.createNode(e))),n.implicitKey=!1,!p&&!f&&F(e)&&(n.indentAtStart=y.length+1),g=!1,!u&&l.length>=2&&!n.inFlow&&!p&&Dn(e)&&!e.flow&&!e.tag&&!e.anchor&&(n.indent=n.indent.substring(2));let S=!1;const A=$t(e,n,()=>S=!0,()=>g=!0);let L=" ";if(f||v||w){if(L=v?`
`:"",w){const T=c(w);L+=`
${pt(T,n.indent)}`}A===""&&!n.inFlow?L===`
`&&(L=`

`):L+=`
${n.indent}`}else if(!p&&U(e)){const T=A[0],D=A.indexOf(`
`),$=D!==-1,H=n.inFlow??e.flow??e.items.length===0;if($||!H){let te=!1;if($&&(T==="&"||T==="!")){let C=A.indexOf(" ");T==="&"&&C!==-1&&C<D&&A[C+1]==="!"&&(C=A.indexOf(" ",C+1)),(C===-1||D<C)&&(te=!0)}te||(L=`
${n.indent}`)}}else(A===""||A[0]===`
`)&&(L="");return y+=L+A,n.inFlow?S&&s&&s():k&&!S?y+=Ue(y,n.indent,c(k)):g&&a&&a(),y}function Qi(t,e){(t==="debug"||t==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const Zn="<<";function Os(t,e,{key:n,value:s}){if(t!=null&&t.doc.schema.merge&&Zi(n))if(s=Ze(s)?s.resolve(t.doc):s,Dn(s))for(const a of s.items)tn(t,e,a);else if(Array.isArray(s))for(const a of s)tn(t,e,a);else tn(t,e,s);else{const a=X(n,"",t);if(e instanceof Map)e.set(a,X(s,a,t));else if(e instanceof Set)e.add(a);else{const i=Xi(n,a,t),r=X(s,i,t);i in e?Object.defineProperty(e,i,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[i]=r}}return e}const Zi=t=>t===Zn||F(t)&&t.value===Zn&&(!t.type||t.type===W.PLAIN);function tn(t,e,n){const s=t&&Ze(n)?n.resolve(t.doc):n;if(!Cs(s))throw new Error("Merge sources must be maps or map aliases");const a=s.toJSON(null,t,Map);for(const[i,r]of a)e instanceof Map?e.has(i)||e.set(i,r):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function Xi(t,e,n){if(e===null)return"";if(typeof e!="object")return String(e);if(q(t)&&(n!=null&&n.doc)){const s=Ui(n.doc,{});s.anchors=new Set;for(const i of n.anchors.keys())s.anchors.add(i.anchor);s.inFlow=!0,s.inStringifyKey=!0;const a=t.toString(s);if(!n.mapKeyWarned){let i=JSON.stringify(a);i.length>40&&(i=i.substring(0,36)+'..."'),Qi(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return a}return JSON.stringify(e)}function Rn(t,e,n){const s=Et(t,void 0,n),a=Et(e,void 0,n);return new ae(s,a)}class ae{constructor(e,n=null){Object.defineProperty(this,se,{value:Ms}),this.key=e,this.value=n}clone(e){let{key:n,value:s}=this;return q(n)&&(n=n.clone(e)),q(s)&&(s=s.clone(e)),new ae(n,s)}toJSON(e,n){const s=n!=null&&n.mapAsMap?new Map:{};return Os(n,s,this)}toString(e,n,s){return e!=null&&e.doc?Ki(this,e,n,s):JSON.stringify(this)}}function Ds(t,e,n){return(e.inFlow??t.flow?tr:er)(t,e,n)}function er({comment:t,items:e},n,{blockItemPrefix:s,flowChars:a,itemIndent:i,onChompKeep:r,onComment:o}){const{indent:l,options:{commentString:c}}=n,u=Object.assign({},n,{indent:i,type:null});let d=!1;const f=[];for(let m=0;m<e.length;++m){const g=e[m];let y=null;if(q(g))!d&&g.spaceBefore&&f.push(""),Rt(n,f,g.commentBefore,d),g.comment&&(y=g.comment);else if(G(g)){const w=q(g.key)?g.key:null;w&&(!d&&w.spaceBefore&&f.push(""),Rt(n,f,w.commentBefore,d))}d=!1;let v=$t(g,u,()=>y=null,()=>d=!0);y&&(v+=Ue(v,i,c(y))),d&&y&&(d=!1),f.push(s+v)}let p;if(f.length===0)p=a.start+a.end;else{p=f[0];for(let m=1;m<f.length;++m){const g=f[m];p+=g?`
${l}${g}`:`
`}}return t?(p+=`
`+pt(c(t),l),o&&o()):d&&r&&r(),p}function tr({items:t},e,{flowChars:n,itemIndent:s}){const{indent:a,indentStep:i,flowCollectionPadding:r,options:{commentString:o}}=e;s+=i;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,u=0;const d=[];for(let m=0;m<t.length;++m){const g=t[m];let y=null;if(q(g))g.spaceBefore&&d.push(""),Rt(e,d,g.commentBefore,!1),g.comment&&(y=g.comment);else if(G(g)){const w=q(g.key)?g.key:null;w&&(w.spaceBefore&&d.push(""),Rt(e,d,w.commentBefore,!1),w.comment&&(c=!0));const k=q(g.value)?g.value:null;k?(k.comment&&(y=k.comment),k.commentBefore&&(c=!0)):g.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(c=!0);let v=$t(g,l,()=>y=null);m<t.length-1&&(v+=","),y&&(v+=Ue(v,s,o(y))),!c&&(d.length>u||v.includes(`
`))&&(c=!0),d.push(v),u=d.length}const{start:f,end:p}=n;if(d.length===0)return f+p;if(!c){const m=d.reduce((g,y)=>g+y.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=f;for(const g of d)m+=g?`
${i}${a}${g}`:`
`;return`${m}
${a}${p}`}else return`${f}${r}${d.join(" ")}${r}${p}`}function Rt({indent:t,options:{commentString:e}},n,s,a){if(s&&a&&(s=s.replace(/^\n+/,"")),s){const i=pt(e(s),t);n.push(i.trimStart())}}function Ne(t,e){const n=F(e)?e.value:e;for(const s of t)if(G(s)&&(s.key===e||s.key===n||F(s.key)&&s.key.value===n))return s}class Ve extends $n{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(We,e),this.items=[]}static from(e,n,s){const{keepUndefined:a,replacer:i}=s,r=new this(e),o=(l,c)=>{if(typeof i=="function")c=i.call(n,l,c);else if(Array.isArray(i)&&!i.includes(l))return;(c!==void 0||a)&&r.items.push(Rn(l,c,s))};if(n instanceof Map)for(const[l,c]of n)o(l,c);else if(n&&typeof n=="object")for(const l of Object.keys(n))o(l,n[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,n){var r;let s;G(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new ae(e,e==null?void 0:e.value):s=new ae(e.key,e.value);const a=Ne(this.items,s.key),i=(r=this.schema)==null?void 0:r.sortMapEntries;if(a){if(!n)throw new Error(`Key ${s.key} already set`);F(a.value)&&Ts(s.value)?a.value.value=s.value:a.value=s.value}else if(i){const o=this.items.findIndex(l=>i(s,l)<0);o===-1?this.items.push(s):this.items.splice(o,0,s)}else this.items.push(s)}delete(e){const n=Ne(this.items,e);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(e,n){const s=Ne(this.items,e),a=s==null?void 0:s.value;return(!n&&F(a)?a.value:a)??void 0}has(e){return!!Ne(this.items,e)}set(e,n){this.add(new ae(e,n),!0)}toJSON(e,n,s){const a=s?new s:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(a);for(const i of this.items)Os(n,a,i);return a}toString(e,n,s){if(!e)return JSON.stringify(this);for(const a of this.items)if(!G(a))throw new Error(`Map items must all be pairs; found ${JSON.stringify(a)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Ds(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:n})}}class Es extends $n{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(ht,e),this.items=[]}add(e){this.items.push(e)}delete(e){const n=gt(e);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(e,n){const s=gt(e);if(typeof s!="number")return;const a=this.items[s];return!n&&F(a)?a.value:a}has(e){const n=gt(e);return typeof n=="number"&&n<this.items.length}set(e,n){const s=gt(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const a=this.items[s];F(a)&&Ts(n)?a.value=n:this.items[s]=n}toJSON(e,n){const s=[];n!=null&&n.onCreate&&n.onCreate(s);let a=0;for(const i of this.items)s.push(X(i,String(a++),n));return s}toString(e,n,s){return e?Ds(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:n}):JSON.stringify(this)}static from(e,n,s){const{replacer:a}=s,i=new this(e);if(n&&Symbol.iterator in Object(n)){let r=0;for(let o of n){if(typeof a=="function"){const l=n instanceof Set?o:String(r++);o=a.call(n,l,o)}i.items.push(Et(o,void 0,s))}}return i}}function gt(t){let e=F(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function nr(t,e,n){const{replacer:s}=n,a=new Es(t);a.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof s=="function"&&(r=s.call(e,String(i++),r));let o,l;if(Array.isArray(r))if(r.length===2)o=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const c=Object.keys(r);if(c.length===1)o=c[0],l=r[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=r;a.items.push(Rn(o,l,n))}return a}class Pn extends Es{constructor(){super(),this.add=Ve.prototype.add.bind(this),this.delete=Ve.prototype.delete.bind(this),this.get=Ve.prototype.get.bind(this),this.has=Ve.prototype.has.bind(this),this.set=Ve.prototype.set.bind(this),this.tag=Pn.tag}toJSON(e,n){if(!n)return super.toJSON(e);const s=new Map;n!=null&&n.onCreate&&n.onCreate(s);for(const a of this.items){let i,r;if(G(a)?(i=X(a.key,"",n),r=X(a.value,i,n)):i=X(a,"",n),s.has(i))throw new Error("Ordered maps must not include duplicate keys");s.set(i,r)}return s}static from(e,n,s){const a=nr(e,n,s),i=new this;return i.items=a.items,i}}Pn.tag="tag:yaml.org,2002:omap";class Nn extends Ve{constructor(e){super(e),this.tag=Nn.tag}add(e){let n;G(e)?n=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?n=new ae(e.key,null):n=new ae(e,null),Ne(this.items,n.key)||this.items.push(n)}get(e,n){const s=Ne(this.items,e);return!n&&G(s)?F(s.key)?s.key.value:s.key:s}set(e,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const s=Ne(this.items,e);s&&!n?this.items.splice(this.items.indexOf(s),1):!s&&n&&this.items.push(new ae(e))}toJSON(e,n){return super.toJSON(e,n,Set)}toString(e,n,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),n,s);throw new Error("Set items must all have null values")}static from(e,n,s){const{replacer:a}=s,i=new this(e);if(n&&Symbol.iterator in Object(n))for(let r of n)typeof a=="function"&&(r=a.call(n,r,r)),i.items.push(Rn(r,null,s));return i}}Nn.tag="tag:yaml.org,2002:set";function sr(t,e){if(!e||e==="all"||e==="*")return Hn(1,t+1);if(e==="none")return[];const n=[];for(const s of e.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[a,i]=s.split("-",2);n.push(...Hn(+a,i?+i+1:t+1))}return xa(n).filter(s=>s<=t).sort((s,a)=>s-a)}function ul(){const t=x(Date.now()),e=na({interval:1e3}),n=h(()=>{const a=(e.value-t.value)/1e3,i=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${i}`});function s(){t.value=e.value}return{timer:n,resetTimer:s}}function Wn(t=5){const e=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=n.length;for(let a=0;a<t;a++)e.push(n.charAt(Math.floor(Math.random()*s)));return e.join("")}function dl(t,e,n,s){const a=sr(e+n-1,t);for(let i=0;i<e;i++){const r=s(i),o=a.includes(i+n);for(const l of r)l.classList.toggle("slidev-code-highlighted",o),l.classList.toggle("slidev-code-dishonored",!o),l.classList.toggle("highlighted",o),l.classList.toggle("dishonored",!o)}}const ar="modulepreload",ir=function(t){return"/genaiscript/slides/overview-may2024/"+t},Xn={},M=function(e,n,s){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.all(n.map(o=>{if(o=ir(o),o in Xn)return;Xn[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":ar,l||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return a.then(()=>e()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})},$s=(t,e)=>{const n=t.__vccOpts||t;for(const[s,a]of e)n[s]=a;return n},rr={},or={class:"px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono"};function lr(t,e){return ps(),sa("div",or," An error occurred on this slide. Check the terminal for more information. ")}const cr=$s(rr,[["render",lr],["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/layouts/error.vue"]]),O=Object.freeze(Object.defineProperty({__proto__:null,default:cr},Symbol.toStringTag,{value:"Module"})),le=b({theme:"default",title:"GenAIScript",titleTemplate:"%s",favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",info:`## GenAIScript
Scripting for Generative AI.<br/>
[Docs](https://microsoft.github.io/genaiscript/) | [GitHub](https://github.com/microsoft/genaiscript/)
`,class:"text-center",highlighter:"shiki",drawings:{persist:!1},mdc:!0,layout:"center"}),ur=b({layout:h(()=>le.layout),transition:h(()=>le.transition),class:h(()=>le.class),clicks:h(()=>le.clicks),name:h(()=>le.name),preload:h(()=>le.preload),slide:{index:0,content:"",note:"",title:"GenAIScript",noteHTML:"",raw:"",frontmatter:le,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",start:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),ce=b({layout:"two-cols-header",backgroundSize:"20em 70%"}),dr=b({layout:h(()=>ce.layout),transition:h(()=>ce.transition),class:h(()=>ce.class),clicks:h(()=>ce.clicks),name:h(()=>ce.name),preload:h(()=>ce.preload),slide:{index:1,importChain:[{raw:`---
src: pages/aisw-intro2.md
---
`,content:"",frontmatter:{src:"pages/aisw-intro2.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/aisw-intro2.md"},frontmatterRaw:`src: pages/aisw-intro2.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:1,start:42,contentStart:45,end:46,imports:[{raw:`---
layout: two-cols-header
backgroundSize: 20em 70%
---

# AI Requires Us to Rethink Software

::left::

![](/posw.png)

::right::

<v-click>

![](/aisw.png)

</v-click>`,title:"AI Requires Us to Rethink Software",level:1,content:`# AI Requires Us to Rethink Software

::left::

![](/posw.png)

::right::

<v-click>

![](/aisw.png)

</v-click>`,frontmatter:{layout:"two-cols-header",backgroundSize:"20em 70%"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"two-cols-header",backgroundSize:"20em 70%"},frontmatterRaw:`layout: two-cols-header
backgroundSize: 20em 70%
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2.md",index:0,start:0,contentStart:4,end:18}]}],content:"",note:"",title:"AI Requires Us to Rethink Software",level:1,noteHTML:"",raw:"",frontmatter:ce,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2.md",start:0,id:1,no:2},__clicksContext:null,__preloaded:!1}),ue=b({layout:"two-cols-header",backgroundSize:"20em 70%"}),fr=b({layout:h(()=>ue.layout),transition:h(()=>ue.transition),class:h(()=>ue.class),clicks:h(()=>ue.clicks),name:h(()=>ue.name),preload:h(()=>ue.preload),slide:{index:2,importChain:[{raw:`---
src: pages/aisw-intro2-p10.md
---
`,content:"",frontmatter:{src:"pages/aisw-intro2-p10.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/aisw-intro2-p10.md"},frontmatterRaw:`src: pages/aisw-intro2-p10.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:2,start:46,contentStart:49,end:50,imports:[{raw:`---
layout: two-cols-header
backgroundSize: 20em 70%
---

# AI Requires Us to Rethink Software

::left::

![](/posw.png)

::right::

![](/aisw-p10.png)
`,title:"AI Requires Us to Rethink Software",level:1,content:`# AI Requires Us to Rethink Software

::left::

![](/posw.png)

::right::

![](/aisw-p10.png)`,frontmatter:{layout:"two-cols-header",backgroundSize:"20em 70%"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"two-cols-header",backgroundSize:"20em 70%"},frontmatterRaw:`layout: two-cols-header
backgroundSize: 20em 70%
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2-p10.md",index:0,start:0,contentStart:4,end:15}]}],content:"",note:"",title:"AI Requires Us to Rethink Software",level:1,noteHTML:"",raw:"",frontmatter:ue,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2-p10.md",start:0,id:2,no:3},__clicksContext:null,__preloaded:!1}),de=b({layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"}),pr=b({layout:h(()=>de.layout),transition:h(()=>de.transition),class:h(()=>de.class),clicks:h(()=>de.clicks),name:h(()=>de.name),preload:h(()=>de.preload),slide:{index:3,importChain:[{raw:`---
src: pages/vision.md
---
`,content:"",frontmatter:{src:"pages/vision.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vision.md"},frontmatterRaw:`src: pages/vision.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:3,start:50,contentStart:53,end:54,imports:[{raw:`---
layout: image-right
image: /script-pl.png
backgroundSize: 75%

---
# Empower Users with AI-Enhanced Scripts
##

### Scripting languages have had enormous impact
- csh, bash, Perl, JavaScript, Python, etc. 

&nbsp;
### Current languages **not AI aware**
- They use AI via libraries, packages, etc.

<v-click>

&nbsp;
### In GenAIScript, LLM is first-class component
- With the leverage of JavaScript

</v-click>`,title:"Empower Users with AI-Enhanced Scripts",level:1,content:`# Empower Users with AI-Enhanced Scripts
##

### Scripting languages have had enormous impact
- csh, bash, Perl, JavaScript, Python, etc. 

&nbsp;
### Current languages **not AI aware**
- They use AI via libraries, packages, etc.

<v-click>

&nbsp;
### In GenAIScript, LLM is first-class component
- With the leverage of JavaScript

</v-click>`,frontmatter:{layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"},frontmatterRaw:`layout: image-right
image: /script-pl.png
backgroundSize: 75%

`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",index:0,start:0,contentStart:6,end:23}]}],content:"",note:"",title:"Empower Users with AI-Enhanced Scripts",level:1,noteHTML:"",raw:"",frontmatter:de,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",start:0,id:3,no:4},__clicksContext:null,__preloaded:!1}),fe=b({layout:"two-cols-header"}),hr=b({layout:h(()=>fe.layout),transition:h(()=>fe.transition),class:h(()=>fe.class),clicks:h(()=>fe.clicks),name:h(()=>fe.name),preload:h(()=>fe.preload),slide:{index:4,importChain:[{raw:`---
src: pages/example-gpt-v.md
---
`,content:"",frontmatter:{src:"pages/example-gpt-v.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/example-gpt-v.md"},frontmatterRaw:`src: pages/example-gpt-v.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:4,start:54,contentStart:57,end:58,imports:[{raw:`---
layout: two-cols-header
---
# GenAIScript Example: Translate Any Diagram to Text

::left::

![](/plug-in.png)

::right::

<v-click>

\`\`\`js
script({
    title: "explain-diagram",
    description: "Given an image of a diagram,
    explain what it contains",
    model: "gpt-4-turbo-v",
})

defImages(env.files)

$\`You are a helpful assistant. Your goal 
is to look at the image provided and write 
a description of what it contains. You 
should infer the context of the diagram, 
and write a thorough description of what 
the diagram is illustrating.\`
\`\`\`

</v-click>
`,title:"GenAIScript Example: Translate Any Diagram to Text",level:1,content:`# GenAIScript Example: Translate Any Diagram to Text

::left::

![](/plug-in.png)

::right::

<v-click>

\`\`\`js
script({
    title: "explain-diagram",
    description: "Given an image of a diagram,
    explain what it contains",
    model: "gpt-4-turbo-v",
})

defImages(env.files)

$\`You are a helpful assistant. Your goal 
is to look at the image provided and write 
a description of what it contains. You 
should infer the context of the diagram, 
and write a thorough description of what 
the diagram is illustrating.\`
\`\`\`

</v-click>`,frontmatter:{layout:"two-cols-header"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"two-cols-header"},frontmatterRaw:`layout: two-cols-header
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v.md",index:0,start:0,contentStart:3,end:33}]}],content:"",note:"",title:"GenAIScript Example: Translate Any Diagram to Text",level:1,noteHTML:"",raw:"",frontmatter:fe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v.md",start:0,id:4,no:5},__clicksContext:null,__preloaded:!1}),pe=b({layout:"two-cols-header",backgroundSize:"20em 70%"}),mr=b({layout:h(()=>pe.layout),transition:h(()=>pe.transition),class:h(()=>pe.class),clicks:h(()=>pe.clicks),name:h(()=>pe.name),preload:h(()=>pe.preload),slide:{index:5,importChain:[{raw:`---
src: pages/example-gpt-v-result.md
---
`,content:"",frontmatter:{src:"pages/example-gpt-v-result.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/example-gpt-v-result.md"},frontmatterRaw:`src: pages/example-gpt-v-result.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:5,start:58,contentStart:61,end:62,imports:[{raw:`---
layout: two-cols-header
backgroundSize: 20em 70%
---

# Example: Script Result

::left::

![](/plug-in.png)

::right::


\`The diagram illustrates the process flow of an AI system in charge of invoking software (SW), highlighting the key difference that AI is responsible for initiating the software. The process is broken down into several stages: Initialization, Run plugin, Process result, Repeat, and Generate final answer.\`

\`During Initialization, the Language Learning Model (LLM) selects a plugin from a list. This list, along with user prompts and system prompts, is informed by training data, which is represented by a striped rectangle.\`

\`In the Run plugin phase, ...\`
`,title:"Example: Script Result",level:1,content:`# Example: Script Result

::left::

![](/plug-in.png)

::right::


\`The diagram illustrates the process flow of an AI system in charge of invoking software (SW), highlighting the key difference that AI is responsible for initiating the software. The process is broken down into several stages: Initialization, Run plugin, Process result, Repeat, and Generate final answer.\`

\`During Initialization, the Language Learning Model (LLM) selects a plugin from a list. This list, along with user prompts and system prompts, is informed by training data, which is represented by a striped rectangle.\`

\`In the Run plugin phase, ...\``,frontmatter:{layout:"two-cols-header",backgroundSize:"20em 70%"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"two-cols-header",backgroundSize:"20em 70%"},frontmatterRaw:`layout: two-cols-header
backgroundSize: 20em 70%
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v-result.md",index:0,start:0,contentStart:4,end:20}]}],content:"",note:"",title:"Example: Script Result",level:1,noteHTML:"",raw:"",frontmatter:pe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v-result.md",start:0,id:5,no:6},__clicksContext:null,__preloaded:!1}),he=b({layout:"two-cols-header"}),gr=b({layout:h(()=>he.layout),transition:h(()=>he.transition),class:h(()=>he.class),clicks:h(()=>he.clicks),name:h(()=>he.name),preload:h(()=>he.preload),slide:{index:6,importChain:[{raw:`---
src: pages/alt-text-deploy.md
---
`,content:"",frontmatter:{src:"pages/alt-text-deploy.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/alt-text-deploy.md"},frontmatterRaw:`src: pages/alt-text-deploy.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:6,start:62,contentStart:65,end:66,imports:[{raw:`---
layout: two-cols-header
---

# Script Automation for Alt-Text


::left::

## Image Alt-Text Script

\`\`\`js
script({
    title: "Image Alt Text generator",
    model: "gpt-4-turbo-v",
})

const file = env.files[0]

// skip if alt-text file already exists
const txt = await workspace.readText(file.filename + ".txt")

// context
defImages(file)
// task
$\`You are an expert in assistive technology. You will analyze each image
and generate a description alt text for the image.

Save the alt text in a file called "\${file.filename + ".txt"}".
\`
\`\`\`

::right::

<v-click>

## Deployed in GenAIScript Repo - Nightly Builds
![](/alt-text-deploy.png)

</v-click>
`,title:"Script Automation for Alt-Text",level:1,content:`# Script Automation for Alt-Text


::left::

## Image Alt-Text Script

\`\`\`js
script({
    title: "Image Alt Text generator",
    model: "gpt-4-turbo-v",
})

const file = env.files[0]

// skip if alt-text file already exists
const txt = await workspace.readText(file.filename + ".txt")

// context
defImages(file)
// task
$\`You are an expert in assistive technology. You will analyze each image
and generate a description alt text for the image.

Save the alt text in a file called "\${file.filename + ".txt"}".
\`
\`\`\`

::right::

<v-click>

## Deployed in GenAIScript Repo - Nightly Builds
![](/alt-text-deploy.png)

</v-click>`,frontmatter:{layout:"two-cols-header"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"two-cols-header"},frontmatterRaw:`layout: two-cols-header
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/alt-text-deploy.md",index:0,start:0,contentStart:3,end:41}]}],content:"",note:"",title:"Script Automation for Alt-Text",level:1,noteHTML:"",raw:"",frontmatter:he,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/alt-text-deploy.md",start:0,id:6,no:7},__clicksContext:null,__preloaded:!1}),me=b({layout:"two-cols-header"}),yr=b({layout:h(()=>me.layout),transition:h(()=>me.transition),class:h(()=>me.class),clicks:h(()=>me.clicks),name:h(()=>me.name),preload:h(()=>me.preload),slide:{index:7,importChain:[{raw:`---
src: pages/langchain-summarize.md
---
`,content:"",frontmatter:{src:"pages/langchain-summarize.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/langchain-summarize.md"},frontmatterRaw:`src: pages/langchain-summarize.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:7,start:66,contentStart:69,end:70,imports:[{raw:`---
layout: two-cols-header
---

# Summarize: Langchain vs GenAIScript
Map-reduce summarization


::left::

## Python w/ langchain

- Summarize already predefined
\`\`\`python
from langchain.chains.summarize import load_summarize_chain

# Split the source text
text_splitter = CharacterTextSplitter()
texts = text_splitter.split_text(source_text)

# Create Document objects for the texts (max 3 pages)
docs = [Document(page_content=t) for t in texts[:3]]

# Initialize the OpenAI module, load and run the summarize chain
llm = OpenAI(temperature=0, openai_api_key=openai_api_key)
chain = load_summarize_chain(llm, chain_type="map_reduce")
summary = chain.run(docs)

\`\`\`

::right::

<v-click>

## GenAIScript
- Use JS language constructs

\`\`\`js
script({ temperature: 0 }) // model settings
// map each file to its summary
for (const file of env.files.slice(0, 3)) {
    // run 3.5 generate summary of a single file
    const { text } = await runPrompt((_) => { 
            _.def("FILE", file)
            _.$\`Summarize FILE. Be concise.\` 
        }, { model: "gpt-3.5-turbo" })
    // save the summary in the main prompt
    // as a AI variable
    def("FILE", { filename: file.filename, content: text })
}
// reduce all summaries to a single summary
$\`Summarize all the FILE.\`
\`\`\`

</v-click>
`,title:"Summarize: Langchain vs GenAIScript",level:1,content:`# Summarize: Langchain vs GenAIScript
Map-reduce summarization


::left::

## Python w/ langchain

- Summarize already predefined
\`\`\`python
from langchain.chains.summarize import load_summarize_chain

# Split the source text
text_splitter = CharacterTextSplitter()
texts = text_splitter.split_text(source_text)

# Create Document objects for the texts (max 3 pages)
docs = [Document(page_content=t) for t in texts[:3]]

# Initialize the OpenAI module, load and run the summarize chain
llm = OpenAI(temperature=0, openai_api_key=openai_api_key)
chain = load_summarize_chain(llm, chain_type="map_reduce")
summary = chain.run(docs)

\`\`\`

::right::

<v-click>

## GenAIScript
- Use JS language constructs

\`\`\`js
script({ temperature: 0 }) // model settings
// map each file to its summary
for (const file of env.files.slice(0, 3)) {
    // run 3.5 generate summary of a single file
    const { text } = await runPrompt((_) => { 
            _.def("FILE", file)
            _.$\`Summarize FILE. Be concise.\` 
        }, { model: "gpt-3.5-turbo" })
    // save the summary in the main prompt
    // as a AI variable
    def("FILE", { filename: file.filename, content: text })
}
// reduce all summaries to a single summary
$\`Summarize all the FILE.\`
\`\`\`

</v-click>`,frontmatter:{layout:"two-cols-header"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"two-cols-header"},frontmatterRaw:`layout: two-cols-header
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/langchain-summarize.md",index:0,start:0,contentStart:3,end:56}]}],content:"",note:"",title:"Summarize: Langchain vs GenAIScript",level:1,noteHTML:"",raw:"",frontmatter:me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/langchain-summarize.md",start:0,id:7,no:8},__clicksContext:null,__preloaded:!1}),ge=b({}),vr=b({layout:h(()=>ge.layout),transition:h(()=>ge.transition),class:h(()=>ge.class),clicks:h(()=>ge.clicks),name:h(()=>ge.name),preload:h(()=>ge.preload),slide:{index:8,importChain:[{raw:`---
src: pages/script.md
---
`,content:"",frontmatter:{src:"pages/script.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script.md"},frontmatterRaw:`src: pages/script.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:8,start:70,contentStart:73,end:74,imports:[{raw:`
# Generative AI Scripting
Generate a LLM prompt by executing a JS script.

<v-click>

\`\`\`js
// define the context
const file = def("FILE", env.files, { endsWith: ".pdf" })
// define data structure
const schema = defSchema("DATA", 
    { type: "array", items: { type: "string" } })
// assign the task
$\`Analyze \${file} and extract data to JSON using the \${schema} schema.\`
\`\`\`

</v-click>

<v-click>

- **It Is Just JavaScript(TM)**
- **\`$...\`** writes to the prompt, **\`def\`** defines a "variable" + various builtin parsers and utilities
- Fast development loop in Visual Studio Code + command line

</v-click>


<v-click>

\`\`\`\`txt
FILE lorem.pdf:
Lorem Ipsum ...

DATA:
type Data = string[]

Analyze FILE and extract data to JSON using the DATA schema.
\`\`\`\`

</v-click>`,title:"Generative AI Scripting",level:1,content:`# Generative AI Scripting
Generate a LLM prompt by executing a JS script.

<v-click>

\`\`\`js
// define the context
const file = def("FILE", env.files, { endsWith: ".pdf" })
// define data structure
const schema = defSchema("DATA", 
    { type: "array", items: { type: "string" } })
// assign the task
$\`Analyze \${file} and extract data to JSON using the \${schema} schema.\`
\`\`\`

</v-click>

<v-click>

- **It Is Just JavaScript(TM)**
- **\`$...\`** writes to the prompt, **\`def\`** defines a "variable" + various builtin parsers and utilities
- Fast development loop in Visual Studio Code + command line

</v-click>


<v-click>

\`\`\`\`txt
FILE lorem.pdf:
Lorem Ipsum ...

DATA:
type Data = string[]

Analyze FILE and extract data to JSON using the DATA schema.
\`\`\`\`

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",index:0,start:0,contentStart:0,end:40}]}],content:"",note:"",title:"Generative AI Scripting",level:1,noteHTML:"",raw:"",frontmatter:ge,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",start:0,id:8,no:9},__clicksContext:null,__preloaded:!1}),ye=b({}),wr=b({layout:h(()=>ye.layout),transition:h(()=>ye.transition),class:h(()=>ye.class),clicks:h(()=>ye.clicks),name:h(()=>ye.name),preload:h(()=>ye.preload),slide:{index:9,importChain:[{raw:`---
src: pages/script-prompt.md
---
`,content:"",frontmatter:{src:"pages/script-prompt.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-prompt.md"},frontmatterRaw:`src: pages/script-prompt.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:9,start:74,contentStart:77,end:78,imports:[{raw:`
# Context x Script = Prompt

- user starts script on files in VSCode/CLI
- script generates prompt (user and system messages)
- invocation of LLM API with messages + access token (from \`.env\` or environment variables).

\`\`\`mermaid

stateDiagram
  direction LR
    [*] --> context
    context: files (text, PDF, DOCX, ...)
    script : user script (.genai.js)
    prompt : prompt (system+user messages)
    system: system script (system.*.genai.js)
    context --> script
    note right of context : Users selects files in VSCode/CLI.
    script --> prompt
    system --> prompt
    note left of system: Teach LLM about micro-formats.
    prompt --> response : LLM (OpenAI Chat API)
    response: response (raw text)
\`\`\`
`,title:"Context x Script = Prompt",level:1,content:`# Context x Script = Prompt

- user starts script on files in VSCode/CLI
- script generates prompt (user and system messages)
- invocation of LLM API with messages + access token (from \`.env\` or environment variables).

\`\`\`mermaid

stateDiagram
  direction LR
    [*] --> context
    context: files (text, PDF, DOCX, ...)
    script : user script (.genai.js)
    prompt : prompt (system+user messages)
    system: system script (system.*.genai.js)
    context --> script
    note right of context : Users selects files in VSCode/CLI.
    script --> prompt
    system --> prompt
    note left of system: Teach LLM about micro-formats.
    prompt --> response : LLM (OpenAI Chat API)
    response: response (raw text)
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"Context x Script = Prompt",level:1,noteHTML:"",raw:"",frontmatter:ye,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",start:0,id:9,no:10},__clicksContext:null,__preloaded:!1}),ve=b({}),kr=b({layout:h(()=>ve.layout),transition:h(()=>ve.transition),class:h(()=>ve.class),clicks:h(()=>ve.clicks),name:h(()=>ve.name),preload:h(()=>ve.preload),slide:{index:10,importChain:[{raw:`---
src: pages/system-scripts.md
---
`,content:"",frontmatter:{src:"pages/system-scripts.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/system-scripts.md"},frontmatterRaw:`src: pages/system-scripts.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:10,start:78,contentStart:81,end:82,imports:[{raw:`# System Scripts and Microformats

Teach the LLM how to format response for files, special formats, register tools ...

- \`system.files.genai.js\`
\`\`\`js
system({ title: "File generation" })
$\`When generating or updating files you will use the following syntax:\`
...
\`\`\`

- \`system.diff.genai.js\`
\`\`\`js
system({ title: "Diff generation", lineNumbers: true,})
$\`The DIFF format should be used to generate diff changes on files: 
- added lines MUST start with +
- deleted lines MUST start with -
- deleted lines MUST exist in the original file (do not invent deleted lines)
- added lines MUST not exist in the original file
...
\`\`\`
`,title:"System Scripts and Microformats",level:1,content:`# System Scripts and Microformats

Teach the LLM how to format response for files, special formats, register tools ...

- \`system.files.genai.js\`
\`\`\`js
system({ title: "File generation" })
$\`When generating or updating files you will use the following syntax:\`
...
\`\`\`

- \`system.diff.genai.js\`
\`\`\`js
system({ title: "Diff generation", lineNumbers: true,})
$\`The DIFF format should be used to generate diff changes on files: 
- added lines MUST start with +
- deleted lines MUST start with -
- deleted lines MUST exist in the original file (do not invent deleted lines)
- added lines MUST not exist in the original file
...
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"System Scripts and Microformats",level:1,noteHTML:"",raw:"",frontmatter:ve,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",start:0,id:10,no:11},__clicksContext:null,__preloaded:!1}),we=b({}),br=b({layout:h(()=>we.layout),transition:h(()=>we.transition),class:h(()=>we.class),clicks:h(()=>we.clicks),name:h(()=>we.name),preload:h(()=>we.preload),slide:{index:11,importChain:[{raw:`---
src: pages/response-processing.md
---
`,content:"",frontmatter:{src:"pages/response-processing.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/response-processing.md"},frontmatterRaw:`src: pages/response-processing.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:11,start:82,contentStart:85,end:86,imports:[{raw:`

# Response x Parsers = Files + Data

- parse file edits (as refactoring preview in VSCode)
- parse diagnostics (error, warning, note)
- parse data + schema validation + error repair

\`\`\`mermaid {scale:0.8}

stateDiagram
  direction LR
    response: response (text)
    files: files (workspace edits)
    data: data (JSON, YAML, CSV, ...)
    annotations: annotations (error, warning, ...)
    note right of data: Schema validation\\nData repair
    note right of files: Full, diff\\nRefactoring preview
    note right of annotations: GitHub Actions,\\nGitHub Security Alerts,\\nVSCode diagnostics, ...
    [*] --> response
    response --> files
    files --> data
    response --> annotations
\`\`\``,title:"Response x Parsers = Files + Data",level:1,content:`# Response x Parsers = Files + Data

- parse file edits (as refactoring preview in VSCode)
- parse diagnostics (error, warning, note)
- parse data + schema validation + error repair

\`\`\`mermaid {scale:0.8}

stateDiagram
  direction LR
    response: response (text)
    files: files (workspace edits)
    data: data (JSON, YAML, CSV, ...)
    annotations: annotations (error, warning, ...)
    note right of data: Schema validation\\nData repair
    note right of files: Full, diff\\nRefactoring preview
    note right of annotations: GitHub Actions,\\nGitHub Security Alerts,\\nVSCode diagnostics, ...
    [*] --> response
    response --> files
    files --> data
    response --> annotations
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Response x Parsers = Files + Data",level:1,noteHTML:"",raw:"",frontmatter:we,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",start:0,id:11,no:12},__clicksContext:null,__preloaded:!1}),ke=b({}),Sr=b({layout:h(()=>ke.layout),transition:h(()=>ke.transition),class:h(()=>ke.class),clicks:h(()=>ke.clicks),name:h(()=>ke.name),preload:h(()=>ke.preload),slide:{index:12,importChain:[{raw:`---
src: pages/vscode.md
---
`,content:"",frontmatter:{src:"pages/vscode.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vscode.md"},frontmatterRaw:`src: pages/vscode.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:12,start:86,contentStart:89,end:90,imports:[{raw:`# Dev Experience

## VSCode 

<v-click>

- Run: command from file/folder/editor
- Debugger: launch script through CLI
- Trace: document provider + markdown preview
- Authentication: from \`.env\` file or environment

</v-click>

## Command Line

<v-click>

- Use your favorite code editor (Emacs, vi, etc.)
- Uses Node.js

\`\`\`
npx genaiscript scripts create [script]
npx genaiscript run [script] [...files]
\`\`\`

- CI/CD  friendly

</v-click>`,title:"Dev Experience",level:1,content:`# Dev Experience

## VSCode 

<v-click>

- Run: command from file/folder/editor
- Debugger: launch script through CLI
- Trace: document provider + markdown preview
- Authentication: from \`.env\` file or environment

</v-click>

## Command Line

<v-click>

- Use your favorite code editor (Emacs, vi, etc.)
- Uses Node.js

\`\`\`
npx genaiscript scripts create [script]
npx genaiscript run [script] [...files]
\`\`\`

- CI/CD  friendly

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",index:0,start:0,contentStart:0,end:28}]}],content:"",note:"",title:"Dev Experience",level:1,noteHTML:"",raw:"",frontmatter:ke,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",start:0,id:12,no:13},__clicksContext:null,__preloaded:!1}),be=b({}),_r=b({layout:h(()=>be.layout),transition:h(()=>be.transition),class:h(()=>be.class),clicks:h(()=>be.clicks),name:h(()=>be.name),preload:h(()=>be.preload),slide:{index:13,importChain:[{raw:`---
src: pages/image-alt-text.md
---
`,content:"",frontmatter:{src:"pages/image-alt-text.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/image-alt-text.md"},frontmatterRaw:`src: pages/image-alt-text.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:13,start:90,contentStart:93,end:94,imports:[{raw:`# Example: Image Alt Text Generator

Poor alt text descriptions...

\`\`\`html
<img src="..." alt="An image" /> 😦😦😦
\`\`\`

GenAI to the rescue!

-   Tell the LLM to generate an alt text description

\`\`\`js
const file = env.files[0]
defImages(file)
$\`You are an expert in assistive technology. You will analyze each image
and generate a description alt text for the image.\`
\`\`\`

-   Generate files using the format defined in "system.files"

\`\`\`js
$\`Save the alt text in a file called "\${file.filename + ".txt"}".\`
\`\`\`

-   cancel if the alt text file already exists

\`\`\`js
const { content } = await workspace.readText(file.filename + ".txt")
if (content) cancel("Alt text file already exists")
\`\`\`
`,title:"Example: Image Alt Text Generator",level:1,content:`# Example: Image Alt Text Generator

Poor alt text descriptions...

\`\`\`html
<img src="..." alt="An image" /> 😦😦😦
\`\`\`

GenAI to the rescue!

-   Tell the LLM to generate an alt text description

\`\`\`js
const file = env.files[0]
defImages(file)
$\`You are an expert in assistive technology. You will analyze each image
and generate a description alt text for the image.\`
\`\`\`

-   Generate files using the format defined in "system.files"

\`\`\`js
$\`Save the alt text in a file called "\${file.filename + ".txt"}".\`
\`\`\`

-   cancel if the alt text file already exists

\`\`\`js
const { content } = await workspace.readText(file.filename + ".txt")
if (content) cancel("Alt text file already exists")
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",index:0,start:0,contentStart:0,end:32}]}],content:"",note:"",title:"Example: Image Alt Text Generator",level:1,noteHTML:"",raw:"",frontmatter:be,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",start:0,id:13,no:14},__clicksContext:null,__preloaded:!1}),Se=b({}),Lr=b({layout:h(()=>Se.layout),transition:h(()=>Se.transition),class:h(()=>Se.class),clicks:h(()=>Se.clicks),name:h(()=>Se.name),preload:h(()=>Se.preload),slide:{index:14,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:14,start:94,contentStart:97,end:98,imports:[{raw:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\`
`,title:"Example: Translating MakeCode",level:1,content:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:0,start:0,contentStart:0,end:28},{raw:'\n## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````\n',title:"Develop the script in VSCode",level:2,content:'## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````',frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:1,start:29,contentStart:29,end:58},{raw:`
## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\`
`,title:"Automate with the CLI",level:2,content:`## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Example: Translating MakeCode",level:1,noteHTML:"",raw:"",frontmatter:Se,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:0,id:14,no:15},__clicksContext:null,__preloaded:!1}),_e=b({}),Ar=b({layout:h(()=>_e.layout),transition:h(()=>_e.transition),class:h(()=>_e.class),clicks:h(()=>_e.clicks),name:h(()=>_e.name),preload:h(()=>_e.preload),slide:{index:15,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:14,start:94,contentStart:97,end:98,imports:[{raw:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\`
`,title:"Example: Translating MakeCode",level:1,content:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:0,start:0,contentStart:0,end:28},{raw:'\n## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````\n',title:"Develop the script in VSCode",level:2,content:'## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````',frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:1,start:29,contentStart:29,end:58},{raw:`
## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\`
`,title:"Automate with the CLI",level:2,content:`## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Develop the script in VSCode",level:2,noteHTML:"",raw:"",frontmatter:_e,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:29,id:15,no:16},__clicksContext:null,__preloaded:!1}),Le=b({}),Mr=b({layout:h(()=>Le.layout),transition:h(()=>Le.transition),class:h(()=>Le.class),clicks:h(()=>Le.clicks),name:h(()=>Le.name),preload:h(()=>Le.preload),slide:{index:16,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:14,start:94,contentStart:97,end:98,imports:[{raw:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\`
`,title:"Example: Translating MakeCode",level:1,content:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:0,start:0,contentStart:0,end:28},{raw:'\n## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````\n',title:"Develop the script in VSCode",level:2,content:'## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````',frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:1,start:29,contentStart:29,end:58},{raw:`
## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\`
`,title:"Automate with the CLI",level:2,content:`## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Automate with the CLI",level:2,noteHTML:"",raw:"",frontmatter:Le,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:59,id:16,no:17},__clicksContext:null,__preloaded:!1}),Ae=b({layout:"image-right",image:"/makecode-translate-view.png",backgroundSize:"contain"}),Cr=b({layout:h(()=>Ae.layout),transition:h(()=>Ae.transition),class:h(()=>Ae.class),clicks:h(()=>Ae.clicks),name:h(()=>Ae.name),preload:h(()=>Ae.preload),slide:{index:17,importChain:[{raw:`---
src: pages/makecode-timeline.md
---
`,content:"",frontmatter:{src:"pages/makecode-timeline.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-timeline.md"},frontmatterRaw:`src: pages/makecode-timeline.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:15,start:98,contentStart:101,end:102,imports:[{raw:`---
layout: image-right

# the image source
image: /makecode-translate-view.png
backgroundSize: contain
---
## Timeline and Feedback 
##
&nbsp;
#### First day: Peli wrote and debugged script
&nbsp;
#### Second day: deployed script and ran it over files in MakeCode repo generating 1000+ translations
&nbsp;
#### Third day: Human translator (in Germany) reviewed results, pull request: 7 edits + updated script
&nbsp;
#### Fourth day: German translations go live
`,title:"Timeline and Feedback",level:2,content:`## Timeline and Feedback 
##
&nbsp;
#### First day: Peli wrote and debugged script
&nbsp;
#### Second day: deployed script and ran it over files in MakeCode repo generating 1000+ translations
&nbsp;
#### Third day: Human translator (in Germany) reviewed results, pull request: 7 edits + updated script
&nbsp;
#### Fourth day: German translations go live`,frontmatter:{layout:"image-right",image:"/makecode-translate-view.png",backgroundSize:"contain"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"image-right",image:"/makecode-translate-view.png",backgroundSize:"contain"},frontmatterRaw:`layout: image-right

# the image source
image: /makecode-translate-view.png
backgroundSize: contain
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-timeline.md",index:0,start:0,contentStart:7,end:18}]}],content:"",note:"",title:"Timeline and Feedback",level:2,noteHTML:"",raw:"",frontmatter:Ae,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-timeline.md",start:0,id:17,no:18},__clicksContext:null,__preloaded:!1}),Me=b({}),xr=b({layout:h(()=>Me.layout),transition:h(()=>Me.transition),class:h(()=>Me.class),clicks:h(()=>Me.clicks),name:h(()=>Me.name),preload:h(()=>Me.preload),slide:{index:18,importChain:[{raw:`---
src: pages/script-vs-agent.md
---
`,content:"",frontmatter:{src:"pages/script-vs-agent.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-vs-agent.md"},frontmatterRaw:`src: pages/script-vs-agent.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:16,start:102,contentStart:105,end:106,imports:[{raw:`# GenAIScript and Agents
&nbsp;
### GenAIScript is a **GLUE** language, **NOT** an agent framework
- Goal to leverage, not reinvent (e.g., we connect to OpenAI functions)
- Focus on adapters into/out of LLM
- Agility is key value - keep up with rapid ecosystem evolution

&nbsp;
### Major differences
- GenAIScript has a **static** orchestration graph
    - You know  when the LLM is called and with what arguments
- GenAIScript applies LLMs in a **targeted** way, 
embedding the results into existing automation
- We bound the use of the LLM to a specific single request

`,title:"GenAIScript and Agents",level:1,content:`# GenAIScript and Agents
&nbsp;
### GenAIScript is a **GLUE** language, **NOT** an agent framework
- Goal to leverage, not reinvent (e.g., we connect to OpenAI functions)
- Focus on adapters into/out of LLM
- Agility is key value - keep up with rapid ecosystem evolution

&nbsp;
### Major differences
- GenAIScript has a **static** orchestration graph
    - You know  when the LLM is called and with what arguments
- GenAIScript applies LLMs in a **targeted** way, 
embedding the results into existing automation
- We bound the use of the LLM to a specific single request`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-vs-agent.md",index:0,start:0,contentStart:0,end:16}]}],content:"",note:"",title:"GenAIScript and Agents",level:1,noteHTML:"",raw:"",frontmatter:Me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-vs-agent.md",start:0,id:18,no:19},__clicksContext:null,__preloaded:!1}),Ce=b({}),Tr=b({layout:h(()=>Ce.layout),transition:h(()=>Ce.transition),class:h(()=>Ce.class),clicks:h(()=>Ce.clicks),name:h(()=>Ce.name),preload:h(()=>Ce.preload),slide:{index:19,importChain:[{raw:`---
src: pages/research-topics.md
---
`,content:"",frontmatter:{src:"pages/research-topics.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/research-topics.md"},frontmatterRaw:`src: pages/research-topics.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:17,start:106,contentStart:109,end:110,imports:[{raw:`# Research Challenges for GenAIScript
&nbsp;
- Giving the LLM appropriate context
    -
    - How to deal with limited context window?
    - What inputs are most important?

- Rethinking types and parameterization
    -
    - What is the "type" of an GenAIScript function?
    - How to define acceptable composition?

- Optimizing the use of the LLM
    -
    - Picking the right model for the job

- Ensuring Responsible AI qualities (security, privacy, etc.)
    -
    - Ensuring correct generations
    - Verifying correct generations



`,title:"Research Challenges for GenAIScript",level:1,content:`# Research Challenges for GenAIScript
&nbsp;
- Giving the LLM appropriate context
    -
    - How to deal with limited context window?
    - What inputs are most important?

- Rethinking types and parameterization
    -
    - What is the "type" of an GenAIScript function?
    - How to define acceptable composition?

- Optimizing the use of the LLM
    -
    - Picking the right model for the job

- Ensuring Responsible AI qualities (security, privacy, etc.)
    -
    - Ensuring correct generations
    - Verifying correct generations`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/research-topics.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Research Challenges for GenAIScript",level:1,noteHTML:"",raw:"",frontmatter:Ce,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/research-topics.md",start:0,id:19,no:20},__clicksContext:null,__preloaded:!1}),xe=b({}),Ir=b({layout:h(()=>xe.layout),transition:h(()=>xe.transition),class:h(()=>xe.class),clicks:h(()=>xe.clicks),name:h(()=>xe.name),preload:h(()=>xe.preload),slide:{index:20,importChain:[{raw:`---
src: pages/stack-2.md
---
`,content:"",frontmatter:{src:"pages/stack-2.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/stack-2.md"},frontmatterRaw:`src: pages/stack-2.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:18,start:110,contentStart:113,end:114,imports:[{raw:`<p></p>

![](/system-stack-2.png)
#### See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/`,title:"See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/",level:4,content:`<p></p>

![](/system-stack-2.png)
#### See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2.md",index:0,start:0,contentStart:0,end:4}]}],content:"",note:"",title:"See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/",level:4,noteHTML:"",raw:"",frontmatter:xe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2.md",start:0,id:20,no:21},__clicksContext:null,__preloaded:!1}),Te=b({}),Or=b({layout:h(()=>Te.layout),transition:h(()=>Te.transition),class:h(()=>Te.class),clicks:h(()=>Te.clicks),name:h(()=>Te.name),preload:h(()=>Te.preload),slide:{index:21,importChain:[{raw:`---
src: pages/stack-2-elements.md
---
`,content:"",frontmatter:{src:"pages/stack-2-elements.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/stack-2-elements.md"},frontmatterRaw:`src: pages/stack-2-elements.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:19,start:114,contentStart:117,end:118,imports:[{raw:`# Components of System Stack 2.0
##
&nbsp;
- LLM inference engine: OpenAI, vLLM, etc.
    - 
&nbsp;
- AI Controller 
    -
    - Example AICI (Microsoft)
    - Controls LLM generation 1 token at a time
    - Enables constraints like JSON format or return a substring of input
    
&nbsp;
- AI runtime / language
    -
    - Individual prompt: Guidance (Microsoft)
    - Coordinated services: GenAIScript`,title:"Components of System Stack 2.0",level:1,content:`# Components of System Stack 2.0
##
&nbsp;
- LLM inference engine: OpenAI, vLLM, etc.
    - 
&nbsp;
- AI Controller 
    -
    - Example AICI (Microsoft)
    - Controls LLM generation 1 token at a time
    - Enables constraints like JSON format or return a substring of input
    
&nbsp;
- AI runtime / language
    -
    - Individual prompt: Guidance (Microsoft)
    - Coordinated services: GenAIScript`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2-elements.md",index:0,start:0,contentStart:0,end:17}]}],content:"",note:"",title:"Components of System Stack 2.0",level:1,noteHTML:"",raw:"",frontmatter:Te,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2-elements.md",start:0,id:21,no:22},__clicksContext:null,__preloaded:!1}),Ie=b({}),Dr=b({layout:h(()=>Ie.layout),transition:h(()=>Ie.transition),class:h(()=>Ie.class),clicks:h(()=>Ie.clicks),name:h(()=>Ie.name),preload:h(()=>Ie.preload),slide:{index:22,importChain:[{raw:`---
src: pages/summary.md
---
`,content:"",frontmatter:{src:"pages/summary.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/summary.md"},frontmatterRaw:`src: pages/summary.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:20,start:118,contentStart:121,end:122,imports:[{raw:`# Summary: GenAISCript Goals

- Make writing scripts that use AI easier for programmers and non-programmers
    -

<br/>

- Support scripts that are easy to write, debug, test, and deploy
    -
<br/>

- Continually integrate evolving AI software ecosystem
    - 
<br/>

- Enable research in evolving AI Software programming language features and abstractions
    -
<br/>



`,title:"Summary: GenAISCript Goals",level:1,content:`# Summary: GenAISCript Goals

- Make writing scripts that use AI easier for programmers and non-programmers
    -

<br/>

- Support scripts that are easy to write, debug, test, and deploy
    -
<br/>

- Continually integrate evolving AI software ecosystem
    - 
<br/>

- Enable research in evolving AI Software programming language features and abstractions
    -
<br/>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/summary.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"Summary: GenAISCript Goals",level:1,noteHTML:"",raw:"",frontmatter:Ie,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/summary.md",start:0,id:22,no:23},__clicksContext:null,__preloaded:!1}),Oe=b({}),Er=b({layout:h(()=>Oe.layout),transition:h(()=>Oe.transition),class:h(()=>Oe.class),clicks:h(()=>Oe.clicks),name:h(()=>Oe.name),preload:h(()=>Oe.preload),slide:{index:23,importChain:[{raw:`---
src: pages/questions.md
---
`,content:"",frontmatter:{src:"pages/questions.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/questions.md"},frontmatterRaw:`src: pages/questions.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:21,start:122,contentStart:125,end:126,imports:[{raw:`# Questions?
##

- Download VSCode extension from the marketplace today!
    - 

<br/>

- Visit https://aka.ms/GenAIScript 
    -
<br/>


`,title:"Questions?",level:1,content:`# Questions?
##

- Download VSCode extension from the marketplace today!
    - 

<br/>

- Visit https://aka.ms/GenAIScript 
    -
<br/>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/questions.md",index:0,start:0,contentStart:0,end:14}]}],content:"",note:"",title:"Questions?",level:1,noteHTML:"",raw:"",frontmatter:Oe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/questions.md",start:0,id:23,no:24},__clicksContext:null,__preloaded:!1}),De=b({}),$r=b({layout:h(()=>De.layout),transition:h(()=>De.transition),class:h(()=>De.class),clicks:h(()=>De.clicks),name:h(()=>De.name),preload:h(()=>De.preload),slide:{index:24,importChain:[{raw:`---
src: pages/backup.md
---


`,content:"",frontmatter:{src:"pages/backup.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/backup.md"},frontmatterRaw:`src: pages/backup.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:22,start:126,contentStart:129,end:132,imports:[{raw:`# Backup Slides
`,title:"Backup Slides",level:1,content:"# Backup Slides",frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/backup.md",index:0,start:0,contentStart:0,end:2}]}],content:"",note:"",title:"Backup Slides",level:1,noteHTML:"",raw:"",frontmatter:De,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/backup.md",start:0,id:24,no:25},__clicksContext:null,__preloaded:!1}),Ee=b({}),Rr=b({layout:h(()=>Ee.layout),transition:h(()=>Ee.transition),class:h(()=>Ee.class),clicks:h(()=>Ee.clicks),name:h(()=>Ee.name),preload:h(()=>Ee.preload),slide:{index:25,importChain:[{raw:`---
src: pages/tla-plus.md
---
`,content:"",frontmatter:{src:"pages/tla-plus.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/tla-plus.md"},frontmatterRaw:`src: pages/tla-plus.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:23,start:132,contentStart:135,end:136,imports:[{raw:`# Example: TLA+ Linter

[TLA+](https://lamport.azurewebsites.net/tla/tla.html) is a high-level language for modeling programs and systems--especially
concurrent and distributed ones. **TLA+ does not come with a traditional linter or formatter.**

\`\`\`txt
  define {
    (*
      The passMsg operator is not implementable -at least not without using extra synchronization- because it atomically reads a message
      from the nic's in-buffer and writes to its out-buffer!
    *)
    passMsg(net, from, oldMsg, to, newMsg) == [ net EXCEPT ![from] = BagRemove(@, oldMsg), ![to] = BagAdd(@, newMsg) ]
\`\`\`

\`\`\`js
def("TLA+", env.files.filter(f => f.filename.endsWith(".tla")), {lineNumbers: true})
$\`You are an expert at TLA+/TLAPLUS. Your task is to check if the prose comments and their TLA+ declarations and definitions are syntactically and semantically consistent!!!
Explain any consistencies and inconsistencies you may find.  Report inconsistent and consistent pairs in a single ANNOTATION section.
## TLA+ Syntax Hints
- A formula [A]_v is called a temporal formula, and is shorthand for the formula A \\/ v' = v.  In other words, the formula is true if A is true or if the value of v remains unchanged.  Usually v is a tuple of the spec's variables.
- The symbol \\\`#\\\` is alternative syntax used for inequality in TLA+; the other symbol is \\\`/=\\".
\`\`\`

\`\`\`yaml
- name: Run GenAIscript on the TLA+ specs that are added in this pull request.
  run: npx --yes genaiscript run tlAI-Linter.genai.js $(git diff --name-only HEAD^ | grep '.tla') -oa results.sarif
- name: Upload SARIF file
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
\`\`\``,title:"Example: TLA+ Linter",level:1,content:`# Example: TLA+ Linter

[TLA+](https://lamport.azurewebsites.net/tla/tla.html) is a high-level language for modeling programs and systems--especially
concurrent and distributed ones. **TLA+ does not come with a traditional linter or formatter.**

\`\`\`txt
  define {
    (*
      The passMsg operator is not implementable -at least not without using extra synchronization- because it atomically reads a message
      from the nic's in-buffer and writes to its out-buffer!
    *)
    passMsg(net, from, oldMsg, to, newMsg) == [ net EXCEPT ![from] = BagRemove(@, oldMsg), ![to] = BagAdd(@, newMsg) ]
\`\`\`

\`\`\`js
def("TLA+", env.files.filter(f => f.filename.endsWith(".tla")), {lineNumbers: true})
$\`You are an expert at TLA+/TLAPLUS. Your task is to check if the prose comments and their TLA+ declarations and definitions are syntactically and semantically consistent!!!
Explain any consistencies and inconsistencies you may find.  Report inconsistent and consistent pairs in a single ANNOTATION section.
## TLA+ Syntax Hints
- A formula [A]_v is called a temporal formula, and is shorthand for the formula A \\/ v' = v.  In other words, the formula is true if A is true or if the value of v remains unchanged.  Usually v is a tuple of the spec's variables.
- The symbol \\\`#\\\` is alternative syntax used for inequality in TLA+; the other symbol is \\\`/=\\".
\`\`\`

\`\`\`yaml
- name: Run GenAIscript on the TLA+ specs that are added in this pull request.
  run: npx --yes genaiscript run tlAI-Linter.genai.js $(git diff --name-only HEAD^ | grep '.tla') -oa results.sarif
- name: Upload SARIF file
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",index:0,start:0,contentStart:0,end:31}]}],content:"",note:"",title:"Example: TLA+ Linter",level:1,noteHTML:"",raw:"",frontmatter:Ee,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",start:0,id:25,no:26},__clicksContext:null,__preloaded:!1}),$e=b({layout:"trace"}),Pr=b({layout:h(()=>$e.layout),transition:h(()=>$e.transition),class:h(()=>$e.class),clicks:h(()=>$e.clicks),name:h(()=>$e.name),preload:h(()=>$e.preload),slide:{index:26,importChain:[{raw:`---
src: pages/hockey-trace.md
---`,content:"",frontmatter:{src:"pages/hockey-trace.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/hockey-trace.md"},frontmatterRaw:`src: pages/hockey-trace.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-overview-may2024.md",index:24,start:136,contentStart:139,end:139,imports:[{raw:`---
layout: trace
---

# Hockey line assigment

<div class="rounded border border-gray-500 p-4">

## Step 1: Generate the lines.

### Reasoning:

1. **Identify unique positions**: We need to ensure that each line has a player for each position (LD, RD, C, LW, RW). We'll start by identifying players with unique preferred positions to fill those spots first.

2. **Assign players to their preferred positions**: Players with a single preferred position or with less common combinations will be easier to place without conflicts.

3. **Balance skill levels**: We'll aim to distribute players with different skill levels across the lines to maintain balance.

4. **Minimize the number of lines**: We'll try to use the minimum number of lines to ensure every player plays at least once.

5. **Position consistency**: Once a player is assigned to a position in one line, they must play the same position in any other line they are part of.

6. **Skill level difference**: We'll ensure that the total skill level difference between any two lines is not more than 4.

7. **Distribute skilled players**: We'll avoid putting all high-skilled players in one line.

### Initial Line Assignments:

- **Line 1**: High-skilled players
- **Line 2**: Medium to low-skilled players
- **Line 3**: Remaining players (if necessary)

### Assigning Players to Line 1:

- LD: LDRD2 (Skill 2)
- RD: RWRD3 (Skill 3)
- C: C3 (Skill 3)
- LW: LW3 (Skill 3)
- RW: RW1 (Skill 1)

Total skill: 12

### Assigning Players to Line 2:

- LD: RWD2 (Skill 2)
- RD: N3 (Skill 3, No Preference)
- C: CW1 (Skill 1)
- LW: W3 (Skill 3)
- RW: RW1 (Duplicate, Skill 1)

Total skill: 10

### Assigning Players to Line 3:

- LD: N1 (Skill 1, No Preference)
- RD: N3_2 (Skill 2, No Preference)
- C: CW3 (Skill 3)
- LW: CLW3 (Skill 3)
- RW: RWD2 (Duplicate, Skill 2)

Total skill: 11

### Observations:

- RW1 is listed twice, which violates the rule that a player must play in the same position in all lines. We need to adjust this.
- We have not used all players yet, so we need to ensure that every player is included in at least one line.

### Adjustments:

- Replace RW1 in Line 2 with a player who has not been assigned yet and can play RW.
- Ensure all players are included in at least one line while maintaining position consistency and skill level balance.

### Adjusted Line Assignments:

- **Line 1**: Unchanged
- **Line 2**: Replace RW1 with another player who can play RW and has not been assigned yet.
- **Line 3**: Ensure all remaining players are included.

### Adjusted Line 2:

- LD: RWD2 (Skill 2)
- RD: N3 (Skill 3, No Preference)
- C: CW1 (Skill 1)
- LW: W3 (Skill 3)
- RW: RWD2 (Duplicate, Skill 2)

Total skill: 11

### Adjusted Line 3:

- LD: N1 (Skill 1, No Preference)
- RD: N3_2 (Skill 2, No Preference)
- C: CW3 (Skill 3)
- LW: CLW3 (Skill 3)
- RW: RW1 (Skill 1)

Total skill: 10

### Final Observations:

- All players are now included in at least one line.
- No player is playing more than one position across different lines.
- Skill levels are balanced, with no line having a total skill level difference of more than 4 compared to any other line.

## Step 2: Rule validation

### Rule Validation:

1. **Every player plays at least once**: All players are included in the lines.
2. **Position consistency**: Each player maintains the same position in all lines they are part of.
3. **Skill level balance**: The skill level difference between lines is within the allowed range.
4. **Player distribution**: Skilled players are distributed across lines.

### Validation Results:

All rules appear to be satisfied with the current line assignments.

## Step 3: Output

\`\`\`yaml
- score: 12
  LD: LDRD2
  RD: RWRD3
  C: C3
  LW: LW3
  RW: RW1
- score: 11
  LD: RWD2
  RD: N3
  C: CW1
  LW: W3
  RW: RWD2
- score: 10
  LD: N1
  RD: N3_2
  C: CW3
  LW: CLW3
  RW: RW1
\`\`\`

\`\`\`yaml
- name: CW3
  position: C
- name: C3
  position: C
- name: CW1
  position: C
- name: CLW3
  position: LW
- name: LW3
  position: LW
- name: RW1
  position: RW
- name: W3
  position: LW
- name: RWRD3
  position: RD
- name: RWD2
  position: LD
- name: LDRD2
  position: LD
- name: N1
  position: LD
- name: N3
  position: RD
- name: N3_2
  position: RD
\`\`\`

Note: The above output assumes that the adjusted line assignments are correct and that no further validation is required. If any rule is found to be violated, we would need to revisit the line assignments.    

</div>`,title:"Hockey line assigment",level:1,content:`# Hockey line assigment

<div class="rounded border border-gray-500 p-4">

## Step 1: Generate the lines.

### Reasoning:

1. **Identify unique positions**: We need to ensure that each line has a player for each position (LD, RD, C, LW, RW). We'll start by identifying players with unique preferred positions to fill those spots first.

2. **Assign players to their preferred positions**: Players with a single preferred position or with less common combinations will be easier to place without conflicts.

3. **Balance skill levels**: We'll aim to distribute players with different skill levels across the lines to maintain balance.

4. **Minimize the number of lines**: We'll try to use the minimum number of lines to ensure every player plays at least once.

5. **Position consistency**: Once a player is assigned to a position in one line, they must play the same position in any other line they are part of.

6. **Skill level difference**: We'll ensure that the total skill level difference between any two lines is not more than 4.

7. **Distribute skilled players**: We'll avoid putting all high-skilled players in one line.

### Initial Line Assignments:

- **Line 1**: High-skilled players
- **Line 2**: Medium to low-skilled players
- **Line 3**: Remaining players (if necessary)

### Assigning Players to Line 1:

- LD: LDRD2 (Skill 2)
- RD: RWRD3 (Skill 3)
- C: C3 (Skill 3)
- LW: LW3 (Skill 3)
- RW: RW1 (Skill 1)

Total skill: 12

### Assigning Players to Line 2:

- LD: RWD2 (Skill 2)
- RD: N3 (Skill 3, No Preference)
- C: CW1 (Skill 1)
- LW: W3 (Skill 3)
- RW: RW1 (Duplicate, Skill 1)

Total skill: 10

### Assigning Players to Line 3:

- LD: N1 (Skill 1, No Preference)
- RD: N3_2 (Skill 2, No Preference)
- C: CW3 (Skill 3)
- LW: CLW3 (Skill 3)
- RW: RWD2 (Duplicate, Skill 2)

Total skill: 11

### Observations:

- RW1 is listed twice, which violates the rule that a player must play in the same position in all lines. We need to adjust this.
- We have not used all players yet, so we need to ensure that every player is included in at least one line.

### Adjustments:

- Replace RW1 in Line 2 with a player who has not been assigned yet and can play RW.
- Ensure all players are included in at least one line while maintaining position consistency and skill level balance.

### Adjusted Line Assignments:

- **Line 1**: Unchanged
- **Line 2**: Replace RW1 with another player who can play RW and has not been assigned yet.
- **Line 3**: Ensure all remaining players are included.

### Adjusted Line 2:

- LD: RWD2 (Skill 2)
- RD: N3 (Skill 3, No Preference)
- C: CW1 (Skill 1)
- LW: W3 (Skill 3)
- RW: RWD2 (Duplicate, Skill 2)

Total skill: 11

### Adjusted Line 3:

- LD: N1 (Skill 1, No Preference)
- RD: N3_2 (Skill 2, No Preference)
- C: CW3 (Skill 3)
- LW: CLW3 (Skill 3)
- RW: RW1 (Skill 1)

Total skill: 10

### Final Observations:

- All players are now included in at least one line.
- No player is playing more than one position across different lines.
- Skill levels are balanced, with no line having a total skill level difference of more than 4 compared to any other line.

## Step 2: Rule validation

### Rule Validation:

1. **Every player plays at least once**: All players are included in the lines.
2. **Position consistency**: Each player maintains the same position in all lines they are part of.
3. **Skill level balance**: The skill level difference between lines is within the allowed range.
4. **Player distribution**: Skilled players are distributed across lines.

### Validation Results:

All rules appear to be satisfied with the current line assignments.

## Step 3: Output

\`\`\`yaml
- score: 12
  LD: LDRD2
  RD: RWRD3
  C: C3
  LW: LW3
  RW: RW1
- score: 11
  LD: RWD2
  RD: N3
  C: CW1
  LW: W3
  RW: RWD2
- score: 10
  LD: N1
  RD: N3_2
  C: CW3
  LW: CLW3
  RW: RW1
\`\`\`

\`\`\`yaml
- name: CW3
  position: C
- name: C3
  position: C
- name: CW1
  position: C
- name: CLW3
  position: LW
- name: LW3
  position: LW
- name: RW1
  position: RW
- name: W3
  position: LW
- name: RWRD3
  position: RD
- name: RWD2
  position: LD
- name: LDRD2
  position: LD
- name: N1
  position: LD
- name: N3
  position: RD
- name: N3_2
  position: RD
\`\`\`

Note: The above output assumes that the adjusted line assignments are correct and that no further validation is required. If any rule is found to be violated, we would need to revisit the line assignments.    

</div>`,frontmatter:{layout:"trace"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"trace"},frontmatterRaw:`layout: trace
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/hockey-trace.md",index:0,start:0,contentStart:3,end:172}]}],content:"",note:"",title:"Hockey line assigment",level:1,noteHTML:"",raw:"",frontmatter:$e,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/hockey-trace.md",start:0,id:26,no:27},__clicksContext:null,__preloaded:!1}),Nr=[{no:1,meta:ur,component:async()=>{try{return await M(()=>import("./slidev/1-vDQSZUfa.js"),__vite__mapDeps([0,1,2,3,4]))}catch(t){return console.error("Failed to load slide 1:",t),O}}},{no:2,meta:dr,component:async()=>{try{return await M(()=>import("./2-BDynR_7k.js"),__vite__mapDeps([5,6,1,2,7,8,9,3,4]))}catch(t){return console.error("Failed to load slide 2:",t),O}}},{no:3,meta:fr,component:async()=>{try{return await M(()=>import("./3-RuN3V-Fp.js"),__vite__mapDeps([10,1,7,8,9,2,3,4]))}catch(t){return console.error("Failed to load slide 3:",t),O}}},{no:4,meta:pr,component:async()=>{try{return await M(()=>import("./slidev/4-DMzPOtPf.js"),__vite__mapDeps([11,6,1,2,12,3,4]))}catch(t){return console.error("Failed to load slide 4:",t),O}}},{no:5,meta:hr,component:async()=>{try{return await M(()=>import("./slidev/5-Bj-YbFmm.js"),__vite__mapDeps([13,6,1,2,14,15,16,8,9,3,4]))}catch(t){return console.error("Failed to load slide 5:",t),O}}},{no:6,meta:mr,component:async()=>{try{return await M(()=>import("./slidev/6-BLvERuUU.js"),__vite__mapDeps([17,1,16,8,9,2,3,4]))}catch(t){return console.error("Failed to load slide 6:",t),O}}},{no:7,meta:gr,component:async()=>{try{return await M(()=>import("./7-CfjepJox.js"),__vite__mapDeps([18,6,1,2,14,15,8,9,3,4]))}catch(t){return console.error("Failed to load slide 7:",t),O}}},{no:8,meta:yr,component:async()=>{try{return await M(()=>import("./slidev/8-Po-6Q1yi.js"),__vite__mapDeps([19,6,1,2,14,15,8,9,3,4]))}catch(t){return console.error("Failed to load slide 8:",t),O}}},{no:9,meta:vr,component:async()=>{try{return await M(()=>import("./slidev/9-CQGywK-u.js"),__vite__mapDeps([20,6,1,2,14,15,21,3,4]))}catch(t){return console.error("Failed to load slide 9:",t),O}}},{no:10,meta:wr,component:async()=>{try{return await M(()=>import("./slidev/10-DhFXW0tI.js"),__vite__mapDeps([22,23,1,24,21,2,3,4]))}catch(t){return console.error("Failed to load slide 10:",t),O}}},{no:11,meta:kr,component:async()=>{try{return await M(()=>import("./slidev/11-Blwqy9d8.js"),__vite__mapDeps([25,14,15,1,2,21,3,4]))}catch(t){return console.error("Failed to load slide 11:",t),O}}},{no:12,meta:br,component:async()=>{try{return await M(()=>import("./slidev/12-39zUhMYj.js"),__vite__mapDeps([26,23,1,24,21,2,3,4]))}catch(t){return console.error("Failed to load slide 12:",t),O}}},{no:13,meta:Sr,component:async()=>{try{return await M(()=>import("./slidev/13--HxgQjE8.js"),__vite__mapDeps([27,6,1,2,21,3,4]))}catch(t){return console.error("Failed to load slide 13:",t),O}}},{no:14,meta:_r,component:async()=>{try{return await M(()=>import("./slidev/14-CWM51Ktm.js"),__vite__mapDeps([28,14,15,1,2,21,3,4]))}catch(t){return console.error("Failed to load slide 14:",t),O}}},{no:15,meta:Lr,component:async()=>{try{return await M(()=>import("./slidev/15-UgD5NSUY.js"),__vite__mapDeps([29,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 15:",t),O}}},{no:16,meta:Ar,component:async()=>{try{return await M(()=>import("./slidev/16-Dpq9-t0q.js"),__vite__mapDeps([30,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 16:",t),O}}},{no:17,meta:Mr,component:async()=>{try{return await M(()=>import("./slidev/17-BhQv2fGZ.js"),__vite__mapDeps([31,14,15,1,2,21,3,4]))}catch(t){return console.error("Failed to load slide 17:",t),O}}},{no:18,meta:Cr,component:async()=>{try{return await M(()=>import("./slidev/18-VkCZ_lpW.js"),__vite__mapDeps([32,1,12,2,3,4]))}catch(t){return console.error("Failed to load slide 18:",t),O}}},{no:19,meta:xr,component:async()=>{try{return await M(()=>import("./slidev/19-BU0yvex7.js"),__vite__mapDeps([33,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 19:",t),O}}},{no:20,meta:Tr,component:async()=>{try{return await M(()=>import("./slidev/20-BBn17x9L.js"),__vite__mapDeps([34,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 20:",t),O}}},{no:21,meta:Ir,component:async()=>{try{return await M(()=>import("./21-BMGsPwGX.js"),__vite__mapDeps([35,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 21:",t),O}}},{no:22,meta:Or,component:async()=>{try{return await M(()=>import("./slidev/22-C2VL6-Wu.js"),__vite__mapDeps([36,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 22:",t),O}}},{no:23,meta:Dr,component:async()=>{try{return await M(()=>import("./slidev/23-D8qdzRnB.js"),__vite__mapDeps([37,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 23:",t),O}}},{no:24,meta:Er,component:async()=>{try{return await M(()=>import("./slidev/24-BHicZElf.js"),__vite__mapDeps([38,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 24:",t),O}}},{no:25,meta:$r,component:async()=>{try{return await M(()=>import("./slidev/25-BFY6uxKK.js"),__vite__mapDeps([39,1,21,2,3,4]))}catch(t){return console.error("Failed to load slide 25:",t),O}}},{no:26,meta:Rr,component:async()=>{try{return await M(()=>import("./slidev/26-BfVmBOvl.js"),__vite__mapDeps([40,14,15,1,2,21,3,4]))}catch(t){return console.error("Failed to load slide 26:",t),O}}},{no:27,meta:Pr,component:async()=>{try{return await M(()=>import("./27-CQ-f5uWV.js"),__vite__mapDeps([41,14,15,1,2,3,4]))}catch(t){return console.error("Failed to load slide 27:",t),O}}}],ne=An(Nr);function Jt(t){return ne.value.find(e=>{var n;return e.no===+t||((n=e.meta.slide)==null?void 0:n.frontmatter.routeAlias)===t})}function Ye(t,e){var s;(typeof t=="number"||typeof t=="string")&&(t=Jt(t));const n=((s=t.meta.slide)==null?void 0:s.frontmatter.routeAlias)??t.no;return e?`/presenter/${n}`:`/${n}`}function Wr(t,e,{mode:n="replace"}={}){const s=Ht();return h({get(){const a=s.currentRoute.value.query[t];return a==null?e:Array.isArray(a)?a.filter(Boolean):a},set(a){It(()=>{(s.currentRoute.value.query[t]??(e==null?void 0:e.toString()))!==a.toString()&&s[Ln(n)]({query:{...s.currentRoute.value.query,[t]:`${a}`===e?void 0:a}})})}})}const pn=x(0);function hn(t){if(t===!1||t==="false")return null;if(t==null||t===!0||t==="true")return"+1";if(typeof t=="string"&&"+-".includes(t[0]))return t;const e=+t;return Number.isNaN(e)?(console.error(`Invalid "at" prop value: ${t}`),null):e}function jr(t){return Array.isArray(t)?[hn(t[0]),hn(t[1])]:null}function Rs(t,e=0,n){const s={get current(){return dt(+t.value,e,s.total)},set current(a){t.value=dt(+a,e,s.total)},clicksStart:e,relativeOffsets:new Map,maxMap:aa(new Map),onMounted(){},calculateSince(a,i=1){const r=hn(a);if(r==null)return null;let o,l,c;if(typeof r=="string"){const u=s.currentOffset,d=+r;o=u+d,l=u+d+i-1,c=d+i-1}else o=r,l=r+i-1,c=0;return{start:o,end:+Number.POSITIVE_INFINITY,max:l,delta:c,currentOffset:h(()=>s.current-o),isCurrent:h(()=>s.current===o),isActive:h(()=>s.current>=o)}},calculateRange(a){const i=jr(a);if(i==null)return null;const[r,o]=i;let l,c,u;return typeof r=="string"?(l=s.currentOffset+ +r,u=+r):(l=r,u=0),typeof o=="string"?(c=l+ +o,u+=+o):c=o,{start:l,end:c,max:c,delta:u,currentOffset:h(()=>s.current-l),isCurrent:h(()=>s.current===l),isActive:h(()=>l<=s.current&&s.current<c)}},calculate(a){return Array.isArray(a)?s.calculateRange(a):s.calculateSince(a)},register(a,i){if(!i)return;const{delta:r,max:o}=i;s.relativeOffsets.set(a,r),s.maxMap.set(a,o)},unregister(a){s.relativeOffsets.delete(a),s.maxMap.delete(a)},get currentOffset(){return pn.value,Aa(...s.relativeOffsets.values())},get total(){return pn.value,n??Math.max(0,...s.maxMap.values())}};return s}function Fr(t,e=0){var s,a;const n=((s=t==null?void 0:t.meta.slide)==null?void 0:s.frontmatter.clicksStart)??0;return Rs(x(Math.max(e,n)),n,(a=t==null?void 0:t.meta)==null?void 0:a.clicks)}const Hr={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Gr(t,e=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let n=t.name.includes("|")?t.name:Hr[t.name]||t.name;if(n.includes("|")){const[s,a]=n.split("|").map(i=>i.trim());n=e?a:s}if(n)return{...t,name:n}}function zr(t,e,n){var a,i;let s=t>0?(a=n==null?void 0:n.meta)==null?void 0:a.transition:(i=e==null?void 0:e.meta)==null?void 0:i.transition;return s||(s=R.transition),Gr(s,t<0)}function Ps(t,e,n=1){var a,i,r,o,l,c,u,d,f;const s=(i=(a=e.meta)==null?void 0:a.slide)==null?void 0:i.level;s&&s>n&&t.length>0?Ps(t[t.length-1].children,e,n+1):t.push({no:e.no,children:[],level:n,path:Ye(((o=(r=e.meta.slide)==null?void 0:r.frontmatter)==null?void 0:o.routeAlias)??e.no,!1),hideInToc:!!((u=(c=(l=e.meta)==null?void 0:l.slide)==null?void 0:c.frontmatter)!=null&&u.hideInToc),title:(f=(d=e.meta)==null?void 0:d.slide)==null?void 0:f.title})}function Ns(t,e,n=!1,s,a){return t.map(i=>{const r={...i,active:i.no===(a==null?void 0:a.value),hasActiveParent:n};return r.children.length>0&&(r.children=Ns(r.children,e,r.active||r.hasActiveParent,r,a)),s&&(r.active||r.activeParent)&&(s.activeParent=!0),r})}function Ws(t,e=1){return t.filter(n=>!n.hideInToc).map(n=>({...n,children:Ws(n.children,e+1)}))}function Vr(t,e,n){const s=h(()=>t.value.filter(i=>{var r,o;return(o=(r=i.meta)==null?void 0:r.slide)==null?void 0:o.title}).reduce((i,r)=>(Ps(i,r),i),[])),a=h(()=>Ns(s.value,n.value,void 0,void 0,e));return h(()=>Ws(a.value))}function qr(t,e,n=x(0),s,a,i){const r=h(()=>ne.value.length),o=x(0),l=x(0),c=h(()=>Ye(t.value,s.value)),u=h(()=>t.value.no),d=h(()=>{var P;return((P=t.value.meta)==null?void 0:P.layout)||(u.value===1?"cover":"default")}),f=h(()=>e.value.current),p=h(()=>e.value.clicksStart),m=h(()=>e.value.total),g=h(()=>ne.value[Math.min(ne.value.length,u.value+1)-1]),y=h(()=>ne.value[Math.max(1,u.value-1)-1]),v=h(()=>u.value<ne.value.length||f.value<m.value),w=h(()=>u.value>1||f.value>0),k=h(()=>zr(o.value,t.value,y.value));Y(t,(P,j)=>{o.value=P.no-j.no});async function S(P){return!1}const A=Vr(ne,u,t);async function L(){l.value=1,m.value<=n.value?await D():n.value+=1}async function T(){l.value=-1,n.value<=p.value?await $(!0):n.value-=1}async function D(P=!1){l.value=1,await C(Math.min(u.value+1,ne.value.length),P&&!a.value?Lt:void 0)}async function $(P=!1){l.value=-1,await C(Math.max(1,u.value-1),P&&!a.value?Lt:void 0)}function H(){return C(1)}function te(){return C(r.value)}async function C(P,j=0,oe=!1){var Xe,et,tt;Tn.value=!1;const Q=u.value!==P,He=j!==n.value,I=(Xe=Jt(P))==null?void 0:Xe.meta,Ge=((et=I==null?void 0:I.slide)==null?void 0:et.frontmatter.clicksStart)??0;j=dt(j,Ge,((tt=I==null?void 0:I.__clicksContext)==null?void 0:tt.total)??Lt),(oe||Q||He)&&await(i==null?void 0:i.push({path:Ye(P,s.value),query:{...i.currentRoute.value.query,clicks:j===0?void 0:j.toString(),embedded:location.search.includes("embedded")?"true":void 0}}))}function E(){i==null||i.push({path:Ye(u.value,!0),query:{...i.currentRoute.value.query}})}function N(){i==null||i.push({path:Ye(u.value,!1),query:{...i.currentRoute.value.query}})}return{slides:ne,total:r,currentPath:c,currentSlideNo:u,currentPage:u,currentSlideRoute:t,currentLayout:d,currentTransition:k,clicksDirection:l,nextRoute:g,prevRoute:y,clicksContext:e,clicks:f,clicksStart:p,clicksTotal:m,hasNext:v,hasPrev:w,tocTree:A,navDirection:o,openInEditor:S,next:L,prev:T,go:C,goLast:te,goFirst:H,nextSlide:D,prevSlide:$,enterPresenter:E,exitPresenter:N}}const Br=hs(()=>{const t=Ht(),e=h(()=>t.currentRoute.value),n=h(()=>(t.currentRoute.value.query,new URLSearchParams(location.search))),s=h(()=>n.value.has("print")),a=h(()=>n.value.get("print")==="clicks"),i=h(()=>n.value.has("embedded")),r=h(()=>e.value.name==="play"),o=h(()=>e.value.name==="presenter"),l=h(()=>e.value.name==="notes"),c=h(()=>!o.value&&(!R.remote||n.value.get("password")===R.remote)),u=ia(r,o),d=h(()=>{var v;return u.value?((v=Jt(e.value.params.no))==null?void 0:v.no)??1:1}),f=h(()=>ne.value[d.value-1]),p=Wr("clicks","0"),m=h(()=>y(f.value)),g=h({get(){let v=+(p.value||0);return Number.isNaN(v)&&(v=0),v},set(v){Tn.value=!1,p.value=v.toString()}});function y(v){var S,A;if((S=v==null?void 0:v.meta)!=null&&S.__clicksContext)return v.meta.__clicksContext;const w=v.no,k=Rs(h({get(){return d.value===w?Math.max(+(p.value??0),k.clicksStart):d.value>w?Lt:k.clicksStart},set(L){d.value===w&&(p.value=dt(L,k.clicksStart,k.total).toString())}}),((A=v==null?void 0:v.meta.slide)==null?void 0:A.frontmatter.clicksStart)??0,v==null?void 0:v.meta.clicks);return k.onMounted=()=>{d.value===w&&(p.value=dt(+p.value,k.clicksStart,k.total).toString())},v!=null&&v.meta&&(v.meta.__clicksContext=k),k}return{router:t,currentRoute:e,isPrintMode:s,isPrintWithClicks:a,isEmbedded:i,isPlaying:r,isPresenter:o,isNotesViewer:l,isPresenterAvailable:c,hasPrimarySlide:u,currentSlideNo:d,currentSlideRoute:f,clicksContext:m,queryClicksRaw:p,queryClicks:g,getPrimaryClicks:y}}),mn=hs(()=>{const t=Br(),e=Ht(),n=qr(t.currentSlideRoute,t.clicksContext,t.queryClicks,t.isPresenter,t.isPrintMode,e);return Y([n.total,t.currentRoute],async()=>{const s=t.currentRoute.value.params.no;t.hasPrimarySlide.value&&!Jt(s)&&(s&&s!=="index.html"?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:"pre",immediate:!0}),{...n,...t}}),es=ra(),nn=ee("slidev-color-schema","auto"),ts=h(()=>R.colorSchema!=="auto"),js=h({get(){return ts.value?R.colorSchema==="dark":nn.value==="auto"?es.value:nn.value==="dark"},set(t){ts.value||(nn.value=t===es.value?"auto":t?"dark":"light")}}),fl=ms(js);Gt&&Y(js,t=>{const e=document.querySelector("html");e.classList.toggle("dark",t),e.classList.toggle("light",!t)},{immediate:!0});const Ur=[];function Jr(){const t=fs().appContext.app,e=b({nav:mn(),configs:R,themeConfigs:h(()=>R.themeConfig)});t.provide(xn,x("none")),t.provide(Ti,e),t.provide(Cn,h(()=>e.nav.currentSlideNo)),t.provide(zt,An(Fr()));for(const u of Ur)u();const{clicksContext:n,currentSlideNo:s,hasPrimarySlide:a,isNotesViewer:i,isPresenter:r}=mn();wi({title:Kt,htmlAttrs:R.htmlAttrs}),_i(`${Kt} - shared`),Ci(`${Kt} - drawings`);const o=`${location.origin}_${Wn()}`;function l(){i.value||!r.value&&!Di.includes(location.host.split(":")[0])||(r.value?(nt("page",+s.value),nt("clicks",n.value.current)):(nt("viewerPage",+s.value),nt("viewerClicks",n.value.current)),nt("lastUpdate",{id:o,type:r.value?"presenter":"viewer",time:new Date().getTime()}))}const c=Ht();c.afterEach(l),Y(n,l),Li(u=>{var d;a.value&&((d=u.lastUpdate)==null?void 0:d.type)==="presenter"&&(+u.page!=+s.value||+n.value.current!=+u.clicks)&&(Tn.value=!1,c.replace({path:Ye(u.page,r.value),query:{...c.currentRoute.value.query,clicks:u.clicks||0}}))})}const Yr=oa({__name:"App",setup(t){return Jr(),Ke(()=>{for(const[e,n]of Object.entries(Da.value))document.body.style.setProperty(e,n.toString())}),(e,n)=>{const s=la("RouterView");return ps(),ca(s)}}}),Kr=$s(Yr,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/App.vue"]]);function pl(t,e=""){var a,i;const n=["slidev-page",e],s=(i=(a=t==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:i.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}async function hl(){const{saveAs:t}=await M(()=>import("./modules/file-saver-EUMWMpoS.js").then(e=>e.F),[]);t(typeof R.download=="string"?R.download:R.exportFilename?`${R.exportFilename}.pdf`:"/genaiscript/slides/overview-may2024/slidev-exported.pdf",`${R.title}.pdf`)}function Qe(t,e,n){var s;return((s=t.instance)==null?void 0:s.$).provides[e]??n}function Qr(){return{install(t){t.directive("click",{name:"v-click",mounted(e,n){const s=xt(e,n,n.value);s!=null&&(e.classList.toggle(_t,!0),e.dataset.slidevClicksStart=String(s.start),Number.isFinite(s.end)&&(e.dataset.slidevClicksEnd=String(s.end)),e.watchStopHandle=Ke(()=>{const a=s.isActive.value,i=s.isCurrent.value,r=a&&!i;s.flagHide?(e.classList.toggle(s.flagFade?at:st,a),e.classList.toggle(Zt,a)):e.classList.toggle(s.flagFade?at:st,!a),e.classList.toggle(Xt,i),e.classList.toggle(en,r)}))},unmounted:sn}),t.directive("after",{name:"v-after",mounted(e,n){const s=xt(e,n,"+0");s!=null&&(e.classList.toggle(_t,!0),e.watchStopHandle=Ke(()=>{const a=s.isActive.value,i=s.isCurrent.value,r=a&&!i;s.flagHide?(e.classList.toggle(s.flagFade?at:st,a),e.classList.toggle(Zt,a)):e.classList.toggle(s.flagFade?at:st,!a),e.classList.toggle(Xt,i),e.classList.toggle(en,r)}))},unmounted:sn}),t.directive("click-hide",{name:"v-click-hide",mounted(e,n){const s=xt(e,n,n.value,!0);s!=null&&(e.classList.toggle(_t,!0),e.watchStopHandle=Ke(()=>{const a=s.isActive.value,i=s.isCurrent.value,r=a&&!i;e.classList.toggle(s.flagFade?at:st,a),e.classList.toggle(Zt,a),e.classList.toggle(Xt,i),e.classList.toggle(en,r)}))},unmounted:sn})}}}const Fs=new Map;function xt(t,e,n,s=!1){var d;const a=(d=Qe(e,zt))==null?void 0:d.value;if(!t||!a)return null;const i=s||e.modifiers.hide!==!1&&e.modifiers.hide!=null,r=e.modifiers.fade!==!1&&e.modifiers.fade!=null,o=a.calculate(n);if(!o)return null;a.register(t,o);const l=h(()=>i?!o.isActive.value:o.isActive.value),c=h(()=>l.value?"shown":Number.isFinite(o.end)?a.current<o.start?"before":"after":i?"after":"before"),u={...o,isShown:l,visibilityState:c,flagFade:r,flagHide:i};return Fs.set(t,u),u}function sn(t,e){var s,a;t.classList.toggle(_t,!1);const n=(s=Qe(e,zt))==null?void 0:s.value;n==null||n.unregister(t),(a=t.watchStopHandle)==null||a.call(t)}function Hs(){return Math.floor(Math.random()*2**31)}class Zr{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function gn(t,e,n){if(t&&t.length){const[s,a]=e,i=Math.PI/180*n,r=Math.cos(i),o=Math.sin(i);for(const l of t){const[c,u]=l;l[0]=(c-s)*r-(u-a)*o+s,l[1]=(c-s)*o+(u-a)*r+a}}}function Xr(t,e,n){const s=[];t.forEach(a=>s.push(...a)),gn(s,e,n)}function eo(t,e){return t[0]===e[0]&&t[1]===e[1]}function to(t,e,n,s=1){const a=n,i=Math.max(e,.1),r=t[0]&&t[0][0]&&typeof t[0][0]=="number"?[t]:t,o=[0,0];if(a)for(const c of r)gn(c,o,a);const l=no(r,i,s);if(a){for(const c of r)gn(c,o,-a);Xr(l,o,-a)}return l}function no(t,e,n){const s=[];for(const c of t){const u=[...c];eo(u[0],u[u.length-1])||u.push([u[0][0],u[0][1]]),u.length>2&&s.push(u)}const a=[];e=Math.max(e,.1);const i=[];for(const c of s)for(let u=0;u<c.length-1;u++){const d=c[u],f=c[u+1];if(d[1]!==f[1]){const p=Math.min(d[1],f[1]);i.push({ymin:p,ymax:Math.max(d[1],f[1]),x:p===d[1]?d[0]:f[0],islope:(f[0]-d[0])/(f[1]-d[1])})}}if(i.sort((c,u)=>c.ymin<u.ymin?-1:c.ymin>u.ymin?1:c.x<u.x?-1:c.x>u.x?1:c.ymax===u.ymax?0:(c.ymax-u.ymax)/Math.abs(c.ymax-u.ymax)),!i.length)return a;let r=[],o=i[0].ymin,l=0;for(;r.length||i.length;){if(i.length){let c=-1;for(let d=0;d<i.length&&!(i[d].ymin>o);d++)c=d;i.splice(0,c+1).forEach(d=>{r.push({s:o,edge:d})})}if(r=r.filter(c=>!(c.edge.ymax<=o)),r.sort((c,u)=>c.edge.x===u.edge.x?0:(c.edge.x-u.edge.x)/Math.abs(c.edge.x-u.edge.x)),(n!==1||l%e===0)&&r.length>1)for(let c=0;c<r.length;c=c+2){const u=c+1;if(u>=r.length)break;const d=r[c].edge,f=r[u].edge;a.push([[Math.round(d.x),o],[Math.round(f.x),o]])}o+=n,r.forEach(c=>{c.edge.x=c.edge.x+n*c.edge.islope}),l++}return a}function mt(t,e){var n;const s=e.hachureAngle+90;let a=e.hachureGap;a<0&&(a=e.strokeWidth*4),a=Math.round(Math.max(a,.1));let i=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(i=a),to(t,a,s,i||1)}class jn{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const s=mt(e,n);return{type:"fillSketch",ops:this.renderLines(s,n)}}renderLines(e,n){const s=[];for(const a of e)s.push(...this.helper.doubleLineOps(a[0][0],a[0][1],a[1][0],a[1][1],n));return s}}function Yt(t){const e=t[0],n=t[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class so extends jn{fillPolygons(e,n){let s=n.hachureGap;s<0&&(s=n.strokeWidth*4),s=Math.max(s,.1);const a=Object.assign({},n,{hachureGap:s}),i=mt(e,a),r=Math.PI/180*n.hachureAngle,o=[],l=s*.5*Math.cos(r),c=s*.5*Math.sin(r);for(const[d,f]of i)Yt([d,f])&&o.push([[d[0]-l,d[1]+c],[...f]],[[d[0]+l,d[1]-c],[...f]]);return{type:"fillSketch",ops:this.renderLines(o,n)}}}class ao extends jn{fillPolygons(e,n){const s=this._fillPolygons(e,n),a=Object.assign({},n,{hachureAngle:n.hachureAngle+90}),i=this._fillPolygons(e,a);return s.ops=s.ops.concat(i.ops),s}}class io{constructor(e){this.helper=e}fillPolygons(e,n){n=Object.assign({},n,{hachureAngle:0});const s=mt(e,n);return this.dotsOnLines(s,n)}dotsOnLines(e,n){const s=[];let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);let i=n.fillWeight;i<0&&(i=n.strokeWidth/2);const r=a/4;for(const o of e){const l=Yt(o),c=l/a,u=Math.ceil(c)-1,d=l-u*a,f=(o[0][0]+o[1][0])/2-a/4,p=Math.min(o[0][1],o[1][1]);for(let m=0;m<u;m++){const g=p+d+m*a,y=f-r+Math.random()*2*r,v=g-r+Math.random()*2*r,w=this.helper.ellipse(y,v,i,i,n);s.push(...w.ops)}}return{type:"fillSketch",ops:s}}}class ro{constructor(e){this.helper=e}fillPolygons(e,n){const s=mt(e,n);return{type:"fillSketch",ops:this.dashedLine(s,n)}}dashedLine(e,n){const s=n.dashOffset<0?n.hachureGap<0?n.strokeWidth*4:n.hachureGap:n.dashOffset,a=n.dashGap<0?n.hachureGap<0?n.strokeWidth*4:n.hachureGap:n.dashGap,i=[];return e.forEach(r=>{const o=Yt(r),l=Math.floor(o/(s+a)),c=(o+a-l*(s+a))/2;let u=r[0],d=r[1];u[0]>d[0]&&(u=r[1],d=r[0]);const f=Math.atan((d[1]-u[1])/(d[0]-u[0]));for(let p=0;p<l;p++){const m=p*(s+a),g=m+s,y=[u[0]+m*Math.cos(f)+c*Math.cos(f),u[1]+m*Math.sin(f)+c*Math.sin(f)],v=[u[0]+g*Math.cos(f)+c*Math.cos(f),u[1]+g*Math.sin(f)+c*Math.sin(f)];i.push(...this.helper.doubleLineOps(y[0],y[1],v[0],v[1],n))}}),i}}class oo{constructor(e){this.helper=e}fillPolygons(e,n){const s=n.hachureGap<0?n.strokeWidth*4:n.hachureGap,a=n.zigzagOffset<0?s:n.zigzagOffset;n=Object.assign({},n,{hachureGap:s+a});const i=mt(e,n);return{type:"fillSketch",ops:this.zigzagLines(i,a,n)}}zigzagLines(e,n,s){const a=[];return e.forEach(i=>{const r=Yt(i),o=Math.round(r/(2*n));let l=i[0],c=i[1];l[0]>c[0]&&(l=i[1],c=i[0]);const u=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let d=0;d<o;d++){const f=d*2*n,p=(d+1)*2*n,m=Math.sqrt(2*Math.pow(n,2)),g=[l[0]+f*Math.cos(u),l[1]+f*Math.sin(u)],y=[l[0]+p*Math.cos(u),l[1]+p*Math.sin(u)],v=[g[0]+m*Math.cos(u+Math.PI/4),g[1]+m*Math.sin(u+Math.PI/4)];a.push(...this.helper.doubleLineOps(g[0],g[1],v[0],v[1],s),...this.helper.doubleLineOps(v[0],v[1],y[0],y[1],s))}}),a}}const z={};function lo(t,e){let n=t.fillStyle||"hachure";if(!z[n])switch(n){case"zigzag":z[n]||(z[n]=new so(e));break;case"cross-hatch":z[n]||(z[n]=new ao(e));break;case"dots":z[n]||(z[n]=new io(e));break;case"dashed":z[n]||(z[n]=new ro(e));break;case"zigzag-line":z[n]||(z[n]=new oo(e));break;case"hachure":default:n="hachure",z[n]||(z[n]=new jn(e));break}return z[n]}const co=0,yn=1,Gs=2,yt={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function uo(t){const e=new Array;for(;t!=="";)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:co,text:RegExp.$1},t=t.substr(RegExp.$1.length);else if(t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))e[e.length]={type:yn,text:`${parseFloat(RegExp.$1)}`},t=t.substr(RegExp.$1.length);else return[];return e[e.length]={type:Gs,text:""},e}function an(t,e){return t.type===e}function Fn(t){const e=[],n=uo(t);let s="BOD",a=0,i=n[a];for(;!an(i,Gs);){let r=0;const o=[];if(s==="BOD")if(i.text==="M"||i.text==="m")a++,r=yt[i.text],s=i.text;else return Fn("M0,0"+t);else an(i,yn)?r=yt[s]:(a++,r=yt[i.text],s=i.text);if(a+r<n.length){for(let l=a;l<a+r;l++){const c=n[l];if(an(c,yn))o[o.length]=+c.text;else throw new Error("Param not a number: "+s+","+c.text)}if(typeof yt[s]=="number"){const l={key:s,data:o};e.push(l),a+=r,i=n[a],s==="M"&&(s="L"),s==="m"&&(s="l")}else throw new Error("Bad segment: "+s)}else throw new Error("Path data ended short")}return e}function zs(t){let e=0,n=0,s=0,a=0;const i=[];for(const{key:r,data:o}of t)switch(r){case"M":i.push({key:"M",data:[...o]}),[e,n]=o,[s,a]=o;break;case"m":e+=o[0],n+=o[1],i.push({key:"M",data:[e,n]}),s=e,a=n;break;case"L":i.push({key:"L",data:[...o]}),[e,n]=o;break;case"l":e+=o[0],n+=o[1],i.push({key:"L",data:[e,n]});break;case"C":i.push({key:"C",data:[...o]}),e=o[4],n=o[5];break;case"c":{const l=o.map((c,u)=>u%2?c+n:c+e);i.push({key:"C",data:l}),e=l[4],n=l[5];break}case"Q":i.push({key:"Q",data:[...o]}),e=o[2],n=o[3];break;case"q":{const l=o.map((c,u)=>u%2?c+n:c+e);i.push({key:"Q",data:l}),e=l[2],n=l[3];break}case"A":i.push({key:"A",data:[...o]}),e=o[5],n=o[6];break;case"a":e+=o[5],n+=o[6],i.push({key:"A",data:[o[0],o[1],o[2],o[3],o[4],e,n]});break;case"H":i.push({key:"H",data:[...o]}),e=o[0];break;case"h":e+=o[0],i.push({key:"H",data:[e]});break;case"V":i.push({key:"V",data:[...o]}),n=o[0];break;case"v":n+=o[0],i.push({key:"V",data:[n]});break;case"S":i.push({key:"S",data:[...o]}),e=o[2],n=o[3];break;case"s":{const l=o.map((c,u)=>u%2?c+n:c+e);i.push({key:"S",data:l}),e=l[2],n=l[3];break}case"T":i.push({key:"T",data:[...o]}),e=o[0],n=o[1];break;case"t":e+=o[0],n+=o[1],i.push({key:"T",data:[e,n]});break;case"Z":case"z":i.push({key:"Z",data:[]}),e=s,n=a;break}return i}function Vs(t){const e=[];let n="",s=0,a=0,i=0,r=0,o=0,l=0;for(const{key:c,data:u}of t){switch(c){case"M":e.push({key:"M",data:[...u]}),[s,a]=u,[i,r]=u;break;case"C":e.push({key:"C",data:[...u]}),s=u[4],a=u[5],o=u[2],l=u[3];break;case"L":e.push({key:"L",data:[...u]}),[s,a]=u;break;case"H":s=u[0],e.push({key:"L",data:[s,a]});break;case"V":a=u[0],e.push({key:"L",data:[s,a]});break;case"S":{let d=0,f=0;n==="C"||n==="S"?(d=s+(s-o),f=a+(a-l)):(d=s,f=a),e.push({key:"C",data:[d,f,...u]}),o=u[0],l=u[1],s=u[2],a=u[3];break}case"T":{const[d,f]=u;let p=0,m=0;n==="Q"||n==="T"?(p=s+(s-o),m=a+(a-l)):(p=s,m=a);const g=s+2*(p-s)/3,y=a+2*(m-a)/3,v=d+2*(p-d)/3,w=f+2*(m-f)/3;e.push({key:"C",data:[g,y,v,w,d,f]}),o=p,l=m,s=d,a=f;break}case"Q":{const[d,f,p,m]=u,g=s+2*(d-s)/3,y=a+2*(f-a)/3,v=p+2*(d-p)/3,w=m+2*(f-m)/3;e.push({key:"C",data:[g,y,v,w,p,m]}),o=d,l=f,s=p,a=m;break}case"A":{const d=Math.abs(u[0]),f=Math.abs(u[1]),p=u[2],m=u[3],g=u[4],y=u[5],v=u[6];d===0||f===0?(e.push({key:"C",data:[s,a,y,v,y,v]}),s=y,a=v):(s!==y||a!==v)&&(qs(s,a,y,v,d,f,p,m,g).forEach(function(k){e.push({key:"C",data:k})}),s=y,a=v);break}case"Z":e.push({key:"Z",data:[]}),s=i,a=r;break}n=c}return e}function fo(t){return Math.PI*t/180}function it(t,e,n){const s=t*Math.cos(n)-e*Math.sin(n),a=t*Math.sin(n)+e*Math.cos(n);return[s,a]}function qs(t,e,n,s,a,i,r,o,l,c){const u=fo(r);let d=[],f=0,p=0,m=0,g=0;if(c)[f,p,m,g]=c;else{[t,e]=it(t,e,-u),[n,s]=it(n,s,-u);const C=(t-n)/2,E=(e-s)/2;let N=C*C/(a*a)+E*E/(i*i);N>1&&(N=Math.sqrt(N),a=N*a,i=N*i);const P=o===l?-1:1,j=a*a,oe=i*i,Q=j*oe-j*E*E-oe*C*C,He=j*E*E+oe*C*C,I=P*Math.sqrt(Math.abs(Q/He));m=I*a*E/i+(t+n)/2,g=I*-i*C/a+(e+s)/2,f=Math.asin(parseFloat(((e-g)/i).toFixed(9))),p=Math.asin(parseFloat(((s-g)/i).toFixed(9))),t<m&&(f=Math.PI-f),n<m&&(p=Math.PI-p),f<0&&(f=Math.PI*2+f),p<0&&(p=Math.PI*2+p),l&&f>p&&(f=f-Math.PI*2),!l&&p>f&&(p=p-Math.PI*2)}let y=p-f;if(Math.abs(y)>Math.PI*120/180){const C=p,E=n,N=s;l&&p>f?p=f+Math.PI*120/180*1:p=f+Math.PI*120/180*-1,n=m+a*Math.cos(p),s=g+i*Math.sin(p),d=qs(n,s,E,N,a,i,r,0,l,[p,C,m,g])}y=p-f;const v=Math.cos(f),w=Math.sin(f),k=Math.cos(p),S=Math.sin(p),A=Math.tan(y/4),L=4/3*a*A,T=4/3*i*A,D=[t,e],$=[t+L*w,e-T*v],H=[n+L*S,s-T*k],te=[n,s];if($[0]=2*D[0]-$[0],$[1]=2*D[1]-$[1],c)return[$,H,te].concat(d);{d=[$,H,te].concat(d);const C=[];for(let E=0;E<d.length;E+=3){const N=it(d[E][0],d[E][1],u),P=it(d[E+1][0],d[E+1][1],u),j=it(d[E+2][0],d[E+2][1],u);C.push([N[0],N[1],P[0],P[1],j[0],j[1]])}return C}}const po={randOffset:go,randOffsetWithRange:yo,ellipse:vn,doubleLineOps:vo};function J(t,e,n,s,a){return{type:"path",ops:re(t,e,n,s,a)}}function ut(t,e,n){const s=(t||[]).length;if(s>2){const a=[];for(let i=0;i<s-1;i++)a.push(...re(t[i][0],t[i][1],t[i+1][0],t[i+1][1],n));return e&&a.push(...re(t[s-1][0],t[s-1][1],t[0][0],t[0][1],n)),{type:"path",ops:a}}else if(s===2)return J(t[0][0],t[0][1],t[1][0],t[1][1],n);return{type:"path",ops:[]}}function ho(t,e){return ut(t,!0,e)}function Bs(t,e,n,s,a){const i=[[t,e],[t+n,e],[t+n,e+s],[t,e+s]];return ho(i,a)}function ns(t,e){if(t.length){const s=typeof t[0][0]=="number"?[t]:t,a=vt(s[0],1*(1+e.roughness*.2),e),i=e.disableMultiStroke?[]:vt(s[0],1.5*(1+e.roughness*.22),is(e));for(let r=1;r<s.length;r++){const o=s[r];if(o.length){const l=vt(o,1*(1+e.roughness*.2),e),c=e.disableMultiStroke?[]:vt(o,1.5*(1+e.roughness*.22),is(e));for(const u of l)u.op!=="move"&&a.push(u);for(const u of c)u.op!=="move"&&i.push(u)}}return{type:"path",ops:a.concat(i)}}return{type:"path",ops:[]}}function vn(t,e,n,s,a){const i=Us(n,s,a);return wn(t,e,a,i).opset}function Us(t,e,n){const s=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),a=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*s)),i=Math.PI*2/a;let r=Math.abs(t/2),o=Math.abs(e/2);const l=1-n.curveFitting;return r+=_(r*l,n),o+=_(o*l,n),{increment:i,rx:r,ry:o}}function wn(t,e,n,s){const[a,i]=rs(s.increment,t,e,s.rx,s.ry,1,s.increment*Pt(.1,Pt(.4,1,n),n),n);let r=Nt(a,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[o]=rs(s.increment,t,e,s.rx,s.ry,1.5,0,n),l=Nt(o,null,n);r=r.concat(l)}return{estimatedPoints:i,opset:{type:"path",ops:r}}}function ss(t,e,n,s,a,i,r,o,l){const c=t,u=e;let d=Math.abs(n/2),f=Math.abs(s/2);d+=_(d*.01,l),f+=_(f*.01,l);let p=a,m=i;for(;p<0;)p+=Math.PI*2,m+=Math.PI*2;m-p>Math.PI*2&&(p=0,m=Math.PI*2);const g=Math.PI*2/l.curveStepCount,y=Math.min(g/2,(m-p)/2),v=os(y,c,u,d,f,p,m,1,l);if(!l.disableMultiStroke){const w=os(y,c,u,d,f,p,m,1.5,l);v.push(...w)}return r&&(o?v.push(...re(c,u,c+d*Math.cos(p),u+f*Math.sin(p),l),...re(c,u,c+d*Math.cos(m),u+f*Math.sin(m),l)):v.push({op:"lineTo",data:[c,u]},{op:"lineTo",data:[c+d*Math.cos(p),u+f*Math.sin(p)]})),{type:"path",ops:v}}function as(t,e){const n=Vs(zs(Fn(t))),s=[];let a=[0,0],i=[0,0];for(const{key:r,data:o}of n)switch(r){case"M":{i=[o[0],o[1]],a=[o[0],o[1]];break}case"L":s.push(...re(i[0],i[1],o[0],o[1],e)),i=[o[0],o[1]];break;case"C":{const[l,c,u,d,f,p]=o;s.push(...wo(l,c,u,d,f,p,i,e)),i=[f,p];break}case"Z":s.push(...re(i[0],i[1],a[0],a[1],e)),i=[a[0],a[1]];break}return{type:"path",ops:s}}function rn(t,e){const n=[];for(const s of t)if(s.length){const a=e.maxRandomnessOffset||0,i=s.length;if(i>2){n.push({op:"move",data:[s[0][0]+_(a,e),s[0][1]+_(a,e)]});for(let r=1;r<i;r++)n.push({op:"lineTo",data:[s[r][0]+_(a,e),s[r][1]+_(a,e)]})}}return{type:"fillPath",ops:n}}function qe(t,e){return lo(e,po).fillPolygons(t,e)}function mo(t,e,n,s,a,i,r){const o=t,l=e;let c=Math.abs(n/2),u=Math.abs(s/2);c+=_(c*.01,r),u+=_(u*.01,r);let d=a,f=i;for(;d<0;)d+=Math.PI*2,f+=Math.PI*2;f-d>Math.PI*2&&(d=0,f=Math.PI*2);const p=(f-d)/r.curveStepCount,m=[];for(let g=d;g<=f;g=g+p)m.push([o+c*Math.cos(g),l+u*Math.sin(g)]);return m.push([o+c*Math.cos(f),l+u*Math.sin(f)]),m.push([o,l]),qe([m],r)}function go(t,e){return _(t,e)}function yo(t,e,n){return Pt(t,e,n)}function vo(t,e,n,s,a){return re(t,e,n,s,a,!0)}function is(t){const e=Object.assign({},t);return e.randomizer=void 0,t.seed&&(e.seed=t.seed+1),e}function Js(t){return t.randomizer||(t.randomizer=new Zr(t.seed||0)),t.randomizer.next()}function Pt(t,e,n,s=1){return n.roughness*s*(Js(n)*(e-t)+t)}function _(t,e,n=1){return Pt(-t,t,e,n)}function re(t,e,n,s,a,i=!1){const r=i?a.disableMultiStrokeFill:a.disableMultiStroke,o=kn(t,e,n,s,a,!0,!1);if(r)return o;const l=kn(t,e,n,s,a,!0,!0);return o.concat(l)}function kn(t,e,n,s,a,i,r){const o=Math.pow(t-n,2)+Math.pow(e-s,2),l=Math.sqrt(o);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let u=a.maxRandomnessOffset||0;u*u*100>o&&(u=l/10);const d=u/2,f=.2+Js(a)*.2;let p=a.bowing*a.maxRandomnessOffset*(s-e)/200,m=a.bowing*a.maxRandomnessOffset*(t-n)/200;p=_(p,a,c),m=_(m,a,c);const g=[],y=()=>_(d,a,c),v=()=>_(u,a,c),w=a.preserveVertices;return r?g.push({op:"move",data:[t+(w?0:y()),e+(w?0:y())]}):g.push({op:"move",data:[t+(w?0:_(u,a,c)),e+(w?0:_(u,a,c))]}),r?g.push({op:"bcurveTo",data:[p+t+(n-t)*f+y(),m+e+(s-e)*f+y(),p+t+2*(n-t)*f+y(),m+e+2*(s-e)*f+y(),n+(w?0:y()),s+(w?0:y())]}):g.push({op:"bcurveTo",data:[p+t+(n-t)*f+v(),m+e+(s-e)*f+v(),p+t+2*(n-t)*f+v(),m+e+2*(s-e)*f+v(),n+(w?0:v()),s+(w?0:v())]}),g}function vt(t,e,n){if(!t.length)return[];const s=[];s.push([t[0][0]+_(e,n),t[0][1]+_(e,n)]),s.push([t[0][0]+_(e,n),t[0][1]+_(e,n)]);for(let a=1;a<t.length;a++)s.push([t[a][0]+_(e,n),t[a][1]+_(e,n)]),a===t.length-1&&s.push([t[a][0]+_(e,n),t[a][1]+_(e,n)]);return Nt(s,null,n)}function Nt(t,e,n){const s=t.length,a=[];if(s>3){const i=[],r=1-n.curveTightness;a.push({op:"move",data:[t[1][0],t[1][1]]});for(let o=1;o+2<s;o++){const l=t[o];i[0]=[l[0],l[1]],i[1]=[l[0]+(r*t[o+1][0]-r*t[o-1][0])/6,l[1]+(r*t[o+1][1]-r*t[o-1][1])/6],i[2]=[t[o+1][0]+(r*t[o][0]-r*t[o+2][0])/6,t[o+1][1]+(r*t[o][1]-r*t[o+2][1])/6],i[3]=[t[o+1][0],t[o+1][1]],a.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],i[3][1]]})}}else s===3?(a.push({op:"move",data:[t[1][0],t[1][1]]}),a.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):s===2&&a.push(...kn(t[0][0],t[0][1],t[1][0],t[1][1],n,!0,!0));return a}function rs(t,e,n,s,a,i,r,o){const l=o.roughness===0,c=[],u=[];if(l){t=t/4,u.push([e+s*Math.cos(-t),n+a*Math.sin(-t)]);for(let d=0;d<=Math.PI*2;d=d+t){const f=[e+s*Math.cos(d),n+a*Math.sin(d)];c.push(f),u.push(f)}u.push([e+s*Math.cos(0),n+a*Math.sin(0)]),u.push([e+s*Math.cos(t),n+a*Math.sin(t)])}else{const d=_(.5,o)-Math.PI/2;u.push([_(i,o)+e+.9*s*Math.cos(d-t),_(i,o)+n+.9*a*Math.sin(d-t)]);const f=Math.PI*2+d-.01;for(let p=d;p<f;p=p+t){const m=[_(i,o)+e+s*Math.cos(p),_(i,o)+n+a*Math.sin(p)];c.push(m),u.push(m)}u.push([_(i,o)+e+s*Math.cos(d+Math.PI*2+r*.5),_(i,o)+n+a*Math.sin(d+Math.PI*2+r*.5)]),u.push([_(i,o)+e+.98*s*Math.cos(d+r),_(i,o)+n+.98*a*Math.sin(d+r)]),u.push([_(i,o)+e+.9*s*Math.cos(d+r*.5),_(i,o)+n+.9*a*Math.sin(d+r*.5)])}return[u,c]}function os(t,e,n,s,a,i,r,o,l){const c=i+_(.1,l),u=[];u.push([_(o,l)+e+.9*s*Math.cos(c-t),_(o,l)+n+.9*a*Math.sin(c-t)]);for(let d=c;d<=r;d=d+t)u.push([_(o,l)+e+s*Math.cos(d),_(o,l)+n+a*Math.sin(d)]);return u.push([e+s*Math.cos(r),n+a*Math.sin(r)]),u.push([e+s*Math.cos(r),n+a*Math.sin(r)]),Nt(u,null,l)}function wo(t,e,n,s,a,i,r,o){const l=[],c=[o.maxRandomnessOffset||1,(o.maxRandomnessOffset||1)+.3];let u=[0,0];const d=o.disableMultiStroke?1:2,f=o.preserveVertices;for(let p=0;p<d;p++)p===0?l.push({op:"move",data:[r[0],r[1]]}):l.push({op:"move",data:[r[0]+(f?0:_(c[0],o)),r[1]+(f?0:_(c[0],o))]}),u=f?[a,i]:[a+_(c[p],o),i+_(c[p],o)],l.push({op:"bcurveTo",data:[t+_(c[p],o),e+_(c[p],o),n+_(c[p],o),s+_(c[p],o),u[0],u[1]]});return l}function rt(t){return[...t]}function ls(t,e=0){const n=t.length;if(n<3)throw new Error("A curve must have at least three points.");const s=[];if(n===3)s.push(rt(t[0]),rt(t[1]),rt(t[2]),rt(t[2]));else{const a=[];a.push(t[0],t[0]);for(let o=1;o<t.length;o++)a.push(t[o]),o===t.length-1&&a.push(t[o]);const i=[],r=1-e;s.push(rt(a[0]));for(let o=1;o+2<a.length;o++){const l=a[o];i[0]=[l[0],l[1]],i[1]=[l[0]+(r*a[o+1][0]-r*a[o-1][0])/6,l[1]+(r*a[o+1][1]-r*a[o-1][1])/6],i[2]=[a[o+1][0]+(r*a[o][0]-r*a[o+2][0])/6,a[o+1][1]+(r*a[o][1]-r*a[o+2][1])/6],i[3]=[a[o+1][0],a[o+1][1]],s.push(i[1],i[2],i[3])}}return s}function ko(t,e){return Math.sqrt(Tt(t,e))}function Tt(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function bo(t,e,n){const s=Tt(e,n);if(s===0)return Tt(t,e);let a=((t[0]-e[0])*(n[0]-e[0])+(t[1]-e[1])*(n[1]-e[1]))/s;return a=Math.max(0,Math.min(1,a)),Tt(t,Pe(e,n,a))}function Pe(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n]}function So(t,e){const n=t[e+0],s=t[e+1],a=t[e+2],i=t[e+3];let r=3*s[0]-2*n[0]-i[0];r*=r;let o=3*s[1]-2*n[1]-i[1];o*=o;let l=3*a[0]-2*i[0]-n[0];l*=l;let c=3*a[1]-2*i[1]-n[1];return c*=c,r<l&&(r=l),o<c&&(o=c),r+o}function bn(t,e,n,s){const a=s||[];if(So(t,e)<n){const i=t[e+0];a.length?ko(a[a.length-1],i)>1&&a.push(i):a.push(i),a.push(t[e+3])}else{const r=t[e+0],o=t[e+1],l=t[e+2],c=t[e+3],u=Pe(r,o,.5),d=Pe(o,l,.5),f=Pe(l,c,.5),p=Pe(u,d,.5),m=Pe(d,f,.5),g=Pe(p,m,.5);bn([r,u,p,g],0,n,a),bn([g,m,f,c],0,n,a)}return a}function _o(t,e){return Wt(t,0,t.length,e)}function Wt(t,e,n,s,a){const i=a||[],r=t[e],o=t[n-1];let l=0,c=1;for(let u=e+1;u<n-1;++u){const d=bo(t[u],r,o);d>l&&(l=d,c=u)}return Math.sqrt(l)>s?(Wt(t,e,c+1,s,i),Wt(t,c,n,s,i)):(i.length||i.push(r),i.push(o)),i}function Sn(t,e=.15,n){const s=[],a=(t.length-1)/3;for(let i=0;i<a;i++){const r=i*3;bn(t,r,e,s)}return n&&n>0?Wt(s,0,s.length,n):s}function Lo(t,e,n){const s=Fn(t),a=Vs(zs(s)),i=[];let r=[],o=[0,0],l=[];const c=()=>{l.length>=4&&r.push(...Sn(l,e)),l=[]},u=()=>{c(),r.length&&(i.push(r),r=[])};for(const{key:f,data:p}of a)switch(f){case"M":u(),o=[p[0],p[1]],r.push(o);break;case"L":c(),r.push([p[0],p[1]]);break;case"C":if(!l.length){const m=r.length?r[r.length-1]:o;l.push([m[0],m[1]])}l.push([p[0],p[1]]),l.push([p[2],p[3]]),l.push([p[4],p[5]]);break;case"Z":c(),r.push([o[0],o[1]]);break}if(u(),!n)return i;const d=[];for(const f of i){const p=_o(f,n);p.length&&d.push(p)}return d}const B="none";class Ao{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Hs()}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,n,s){return{shape:e,sets:n||[],options:s||this.defaultOptions}}line(e,n,s,a,i){const r=this._o(i);return this._d("line",[J(e,n,s,a,r)],r)}rectangle(e,n,s,a,i){const r=this._o(i),o=[],l=Bs(e,n,s,a,r);if(r.fill){const c=[[e,n],[e+s,n],[e+s,n+a],[e,n+a]];r.fillStyle==="solid"?o.push(rn([c],r)):o.push(qe([c],r))}return r.stroke!==B&&o.push(l),this._d("rectangle",o,r)}ellipse(e,n,s,a,i){const r=this._o(i),o=[],l=Us(s,a,r),c=wn(e,n,r,l);if(r.fill)if(r.fillStyle==="solid"){const u=wn(e,n,r,l).opset;u.type="fillPath",o.push(u)}else o.push(qe([c.estimatedPoints],r));return r.stroke!==B&&o.push(c.opset),this._d("ellipse",o,r)}circle(e,n,s,a){const i=this.ellipse(e,n,s,s,a);return i.shape="circle",i}linearPath(e,n){const s=this._o(n);return this._d("linearPath",[ut(e,!1,s)],s)}arc(e,n,s,a,i,r,o=!1,l){const c=this._o(l),u=[],d=ss(e,n,s,a,i,r,o,!0,c);if(o&&c.fill)if(c.fillStyle==="solid"){const f=Object.assign({},c);f.disableMultiStroke=!0;const p=ss(e,n,s,a,i,r,!0,!1,f);p.type="fillPath",u.push(p)}else u.push(mo(e,n,s,a,i,r,c));return c.stroke!==B&&u.push(d),this._d("arc",u,c)}curve(e,n){const s=this._o(n),a=[],i=ns(e,s);if(s.fill&&s.fill!==B)if(s.fillStyle==="solid"){const r=ns(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));a.push({type:"fillPath",ops:this._mergedShape(r.ops)})}else{const r=[],o=e;if(o.length){const c=typeof o[0][0]=="number"?[o]:o;for(const u of c)u.length<3?r.push(...u):u.length===3?r.push(...Sn(ls([u[0],u[0],u[1],u[2]]),10,(1+s.roughness)/2)):r.push(...Sn(ls(u),10,(1+s.roughness)/2))}r.length&&a.push(qe([r],s))}return s.stroke!==B&&a.push(i),this._d("curve",a,s)}polygon(e,n){const s=this._o(n),a=[],i=ut(e,!0,s);return s.fill&&(s.fillStyle==="solid"?a.push(rn([e],s)):a.push(qe([e],s))),s.stroke!==B&&a.push(i),this._d("polygon",a,s)}path(e,n){const s=this._o(n),a=[];if(!e)return this._d("path",a,s);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const i=s.fill&&s.fill!=="transparent"&&s.fill!==B,r=s.stroke!==B,o=!!(s.simplification&&s.simplification<1),l=o?4-4*(s.simplification||1):(1+s.roughness)/2,c=Lo(e,1,l),u=as(e,s);if(i)if(s.fillStyle==="solid")if(c.length===1){const d=as(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));a.push({type:"fillPath",ops:this._mergedShape(d.ops)})}else a.push(rn(c,s));else a.push(qe(c,s));return r&&(o?c.forEach(d=>{a.push(ut(d,!1,s))}):a.push(u)),this._d("path",a,s)}opsToPath(e,n){let s="";for(const a of e.ops){const i=typeof n=="number"&&n>=0?a.data.map(r=>+r.toFixed(n)):a.data;switch(a.op){case"move":s+=`M${i[0]} ${i[1]} `;break;case"bcurveTo":s+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":s+=`L${i[0]} ${i[1]} `;break}}return s.trim()}toPaths(e){const n=e.sets||[],s=e.options||this.defaultOptions,a=[];for(const i of n){let r=null;switch(i.type){case"path":r={d:this.opsToPath(i),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:B};break;case"fillPath":r={d:this.opsToPath(i),stroke:B,strokeWidth:0,fill:s.fill||B};break;case"fillSketch":r=this.fillSketch(i,s);break}r&&a.push(r)}return a}fillSketch(e,n){let s=n.fillWeight;return s<0&&(s=n.strokeWidth/2),{d:this.opsToPath(e),stroke:n.fill||B,strokeWidth:s,fill:B}}_mergedShape(e){return e.filter((n,s)=>s===0?!0:n.op!=="move")}}const Ys="http://www.w3.org/2000/svg",Mo=800;let on=null;function Co(){return on||(on=new Ao().defaultOptions),on}function ln(t,e,n){return{...Co(),maxRandomnessOffset:2,roughness:t==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,disableMultiStroke:t!=="double",disableMultiStrokeFill:!1,seed:e,...n}}function xo(t){const e=t.padding;if(e||e===0){if(typeof e=="number")return[e,e,e,e];if(Array.isArray(e)){const n=e;if(n.length)switch(n.length){case 4:return[...n];case 1:return[n[0],n[0],n[0],n[0]];case 2:return[...n,...n];case 3:return[...n,n[1]];default:return[n[0],n[1],n[2],n[3]]}}}return[5,5,5,5]}function To(t,e,n,s,a,i){const r=[];let o=n.strokeWidth||2;const l=xo(n),c=n.animate===void 0?!0:!!n.animate,u=n.iterations||2,d=n.rtl?1:0,f=ln("single",i,n);switch(n.type){case"underline":{const p=e.y+e.h+l[2];for(let m=d;m<u+d;m++)m%2?r.push(J(e.x+e.w,p,e.x,p,f)):r.push(J(e.x,p,e.x+e.w,p,f));break}case"strike-through":{const p=e.y+e.h/2;for(let m=d;m<u+d;m++)m%2?r.push(J(e.x+e.w,p,e.x,p,f)):r.push(J(e.x,p,e.x+e.w,p,f));break}case"box":{const p=e.x-l[3],m=e.y-l[0],g=e.w+(l[1]+l[3]),y=e.h+(l[0]+l[2]);for(let v=0;v<u;v++)r.push(Bs(p,m,g,y,f));break}case"bracket":{const p=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:["right"],m=e.x-l[3]*2,g=e.x+e.w+l[1]*2,y=e.y-l[0]*2,v=e.y+e.h+l[2]*2;for(const w of p){let k;switch(w){case"bottom":k=[[m,e.y+e.h],[m,v],[g,v],[g,e.y+e.h]];break;case"top":k=[[m,e.y],[m,y],[g,y],[g,e.y]];break;case"left":k=[[e.x,y],[m,y],[m,v],[e.x,v]];break;case"right":k=[[e.x+e.w,y],[g,y],[g,v],[e.x+e.w,v]];break}k&&r.push(ut(k,!1,f))}break}case"crossed-off":{const p=e.x,m=e.y,g=p+e.w,y=m+e.h;for(let v=d;v<u+d;v++)v%2?r.push(J(g,y,p,m,f)):r.push(J(p,m,g,y,f));for(let v=d;v<u+d;v++)v%2?r.push(J(p,y,g,m,f)):r.push(J(g,m,p,y,f));break}case"circle":{const p=ln("double",i,n),m=e.w+(l[1]+l[3]),g=e.h+(l[0]+l[2]),y=e.x-l[3]+m/2,v=e.y-l[0]+g/2,w=Math.floor(u/2),k=u-w*2;for(let S=0;S<w;S++)r.push(vn(y,v,m,g,p));for(let S=0;S<k;S++)r.push(vn(y,v,m,g,f));break}case"highlight":{const p=ln("highlight",i,n);o=e.h*.95;const m=e.y+e.h/2;for(let g=d;g<u+d;g++)g%2?r.push(J(e.x+e.w,m,e.x,m,p)):r.push(J(e.x,m,e.x+e.w,m,p));break}}if(r.length){const p=Io(r),m=[],g=[];let y=0;const v=(w,k,S)=>w.setAttribute(k,S);for(const w of p){const k=document.createElementNS(Ys,"path");if(v(k,"d",w),v(k,"fill","none"),v(k,"stroke",n.color||"currentColor"),v(k,"stroke-width",`${o}`),n.opacity!==void 0&&v(k,"style",`opacity:${n.opacity}`),c){const S=k.getTotalLength();m.push(S),y+=S}t.appendChild(k),g.push(k)}if(c){let w=0;for(let k=0;k<g.length;k++){const S=g[k],A=m[k],L=y?a*(A/y):0,T=s+w,D=S.style;D.strokeDashoffset=`${A}`,D.strokeDasharray=`${A}`,D.animation=`rough-notation-dash ${L}ms ease-out ${T}ms forwards`,w+=L}return cs(a+s)}}return cs(0)}function cs(t){return new Promise(e=>setTimeout(e,t))}function Io(t){const e=[];for(const n of t){let s="";for(const a of n.ops){const i=a.data;switch(a.op){case"move":s.trim()&&e.push(s.trim()),s=`M${i[0]} ${i[1]} `;break;case"bcurveTo":s+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":s+=`L${i[0]} ${i[1]} `;break}}s.trim()&&e.push(s.trim())}return e}function Oo(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}var Do=Object.defineProperty,Eo=(t,e,n)=>e in t?Do(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e,n)=>(Eo(t,typeof e!="symbol"?e+"":e,n),n);class $o{constructor(e,n){Z(this,"_state","unattached"),Z(this,"_config"),Z(this,"_resizing",!1),Z(this,"_ro"),Z(this,"_seed",Hs()),Z(this,"_e"),Z(this,"_svg"),Z(this,"_lastSizes",[]),Z(this,"_animationDelay",0),Z(this,"_resizeListener",()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))}),Z(this,"pendingRefresh"),this._e=e,this._config=JSON.parse(JSON.stringify(n)),this.attach()}getConfig(e){return this._config[e]}setConfig(e,n){this._config[e]!==n&&(this._config[e]=n,this.refresh())}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get class(){return this._config.class}set class(e){this._config.class!==e&&(this._config.class=e,this._svg&&this._svg.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" ")))}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){Oo();const e=this._svg=document.createElementNS(Ys,"svg");e.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" "));const n=e.style;n.position="absolute",n.top="0",n.left="0",n.overflow="visible",n.pointerEvents="none",n.width="100px",n.height="100px";const s=this._config.type==="highlight";if(this._e.insertAdjacentElement(s?"beforebegin":"afterend",e),this._state="not-showing",s){const a=window.getComputedStyle(this._e).position;(!a||a==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const n of e)n.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length===this._lastSizes.length){for(let n=0;n<e.length;n++)if(!this.isSameRect(e[n],this._lastSizes[n]))return!0}else return!0}return!1}isSameRect(e,n){const s=(a,i)=>Math.round(a)===Math.round(i);return s(e.x,n.x)&&s(e.y,n.y)&&s(e.w,n.w)&&s(e.h,n.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}async show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&await this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&await this.render(this._svg,!1);break}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}async render(e,n){let s=this._config;n&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const a=this.rects();let i=0;a.forEach(c=>i+=c.w);const r=s.animationDuration||Mo;let o=0;const l=[];for(let c=0;c<a.length;c++){const u=a[c],d=r*(u.w/i);l.push(To(e,a[c],s,o+this._animationDelay+(this._config.delay||0),d,this._seed)),o+=d}return this._lastSizes=a,this._state="showing",await Promise.all(l)}rects(){const e=[];if(this._svg)if(this._config.multiline){const n=this._e.getClientRects();for(let s=0;s<n.length;s++)e.push(this.svgRect(this._svg,n[s]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,n){const s=e.getBoundingClientRect(),a=n;return{x:(a.x||a.left)-(s.x||s.left),y:(a.y||a.top)-(s.y||s.top),w:a.width,h:a.height}}}function Ro(t,e){return new $o(t,e)}function V(t,e){return t.class=[t.class,e].filter(Boolean).join(" "),t}const us={box:t=>Object.assign(t,{type:"box"}),circle:t=>Object.assign(t,{type:"circle"}),underline:t=>Object.assign(t,{type:"underline"}),highlight:t=>Object.assign(t,{type:"highlight"}),"strike-through":t=>Object.assign(t,{type:"strike-through"}),"crossed-off":t=>Object.assign(t,{type:"crossed-off"}),bracket:t=>Object.assign(t,{type:"bracket"}),strike:t=>Object.assign(t,{type:"strike-through"}),cross:t=>Object.assign(t,{type:"crossed-off"}),crossed:t=>Object.assign(t,{type:"crossed-off"}),linethrough:t=>Object.assign(t,{type:"strike-through"}),"line-through":t=>Object.assign(t,{type:"strike-through"}),black:t=>V(t,"text-black"),blue:t=>V(t,"text-blue"),cyan:t=>V(t,"text-cyan"),gray:t=>V(t,"text-gray"),green:t=>V(t,"text-green"),indigo:t=>V(t,"text-indigo"),lime:t=>V(t,"text-lime"),orange:t=>V(t,"text-orange"),pink:t=>V(t,"text-pink"),purple:t=>V(t,"text-purple"),red:t=>V(t,"text-red"),teal:t=>V(t,"text-teal"),white:t=>V(t,"text-white"),yellow:t=>V(t,"text-yellow")},Po=[[/^delay-?(\d+)?$/,(t,e,n)=>{const s=(t[1]?Number.parseInt(t[1]):n)||300;return e.delay=s,e}],[/^(?:op|opacity)-?(\d+)?$/,(t,e,n)=>{const s=(t[1]?Number.parseInt(t[1]):n)||100;return e.opacity=s/100,e}]];function No(){return{install(t){t.directive("mark",{name:"v-mark",mounted:(e,n)=>{const s=h(()=>{const r=typeof n.value=="object"&&!Array.isArray(n.value)?{...n.value}:{at:n.value};let o={at:r.at};const l=Object.entries(n.modifiers).filter(([u,d])=>{if(us[u])return o=us[u](o,d),!1;for(const[f,p]of Po){const m=u.match(f);if(m)return o=p(m,o,d),!1}return!0});l.length&&console.warn("[Slidev] Invalid modifiers for v-mark:",l);const c={...o,...r};return c.type||(c.type="underline"),c}),a=Ro(e,s.value),i=xt(e,n,s.value.at);if(!i){a.show();return}e.watchStopHandle=Ke(()=>{let r;s.value.class&&(a.class=s.value.class),s.value.color&&(a.color=s.value.color);const o=s.value.at;o===!0?r=!0:o===!1?r=!1:r=i.isActive.value,r!=null&&(r?a.show():a.hide())})},unmounted:e=>{var n;(n=e.watchStopHandle)==null||n.call(e)}})}}}const ml=x(!1),gl=x(!1),yl=x(!1),Wo=x(!1),vl=x(!0),wl=ua({xs:460,...ma}),jt=da(),kl=fa(),bl=h(()=>jt.height.value-jt.width.value/gs.value>120),Sl=pa(Gt?document.body:null),_n=ha(),_l=h(()=>{var t,e;return["INPUT","TEXTAREA"].includes(((t=_n.value)==null?void 0:t.tagName)||"")||((e=_n.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),Ll=h(()=>{var t;return["BUTTON","A"].includes(((t=_n.value)==null?void 0:t.tagName)||"")});ee("slidev-camera","default",{listenToStorageChanges:!1});ee("slidev-mic","default",{listenToStorageChanges:!1});const jo=ee("slidev-scale",0),Al=ee("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),Fo=ee("slidev-show-editor",!1,{listenToStorageChanges:!1}),Ho=ee("slidev-editor-vertical",!1,{listenToStorageChanges:!1}),Go=ee("slidev-editor-width",Gt?window.innerWidth*.4:318,{listenToStorageChanges:!1}),zo=ee("slidev-editor-height",Gt?window.innerHeight*.4:300,{listenToStorageChanges:!1}),wt=An(null),Ft=ee("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),kt=ee("slidev-presenter-layout",1,{listenToStorageChanges:!1});function Ml(){kt.value=kt.value+1,kt.value>2&&(kt.value=1)}function Cl(){Ft.value=Math.min(2,Ft.value+.1)}function xl(){Ft.value=Math.max(.5,Ft.value-.1)}const Tl=ms(Wo);function Vo(t=ds(As,x())){const e=ga(t),n=Y([Fo,Ho,Go,zo,jo,jt.width,jt.height],()=>{setTimeout(e.update,300)},{flush:"post",immediate:!0});return{...e,stop:n}}function qo(t){return()=>{}}function Bo(t,e,n){var He;function s(I){return t?Qe(t,I):wa(I)}const a=s(xn),i=s(Ii)??{},r=s(Cn),o=h(()=>qo(r.value)),l=s(xi)??x(1),c=s(Oi)??x(1),{left:u,top:d,stop:f}=Vo(s(As)??x()),p=["slide","presenter"].includes(a.value);let m=t?"directive":"prop",g=Wn(),y;if(Array.isArray(e)?y=e:typeof e=="string"&&e.includes(",")?y=e.split(",").map(Number):e!=null&&(m="frontmatter",g=`${e}`,e=(He=i==null?void 0:i.dragPos)==null?void 0:He[g],y=e==null?void 0:e.split(",").map(Number)),m!=="frontmatter"&&!n)throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");const v=[f],w=e!=null&&!Number.isFinite(y==null?void 0:y[3]);y??(y=[Number.NaN,Number.NaN,0]);const k=x(y[2]),S=x(y[0]+y[2]/2),A=x(y[4]??0),L=h(()=>A.value*Math.PI/180),T=h(()=>Math.sin(L.value)),D=h(()=>Math.cos(L.value)),$=x(),H=x({left:0,top:0,width:0,height:0}),te=x(0);function C(){const I=$.value.getBoundingClientRect();H.value={left:I.left/c.value,top:I.top/c.value,width:I.width/c.value,height:I.height/c.value},te.value=(H.value.width+H.value.height)/l.value/(Math.abs(T.value)+Math.abs(D.value))-k.value}v.push(Y(k,C,{flush:"post"}));const E=x(y[3]??0),N=h({get:()=>(w?te.value:E.value)||0,set:I=>!w&&(E.value=I)}),P=x(y[1]),j=h({get:()=>P.value+N.value/2,set:I=>P.value=I-N.value/2}),oe=h(()=>Number.isFinite(S.value)?{position:"absolute",zIndex:100,left:`${S.value-k.value/2}px`,top:`${j.value-N.value/2}px`,width:`${k.value}px`,height:w?void 0:`${N.value}px`,transformOrigin:"center center",transform:`rotate(${A.value}deg)`}:{position:"absolute",zIndex:100});v.push(Y([S,j,k,N,A],([I,Ge,Xe,et,tt])=>{let ze=[I-Xe/2,Ge-et/2,Xe].map(Math.round).join();w?ze+=m==="directive"?",NaN":",_":ze+=`,${Math.round(et)}`,Math.round(tt)!==0&&(ze+=`,${Math.round(tt)}`),m==="directive"&&(ze=`[${ze}]`),o.value(g,ze,m,n)}));const Q={id:g,dataSource:m,markdownSource:n,zoom:c,autoHeight:w,x0:S,y0:j,width:k,height:N,rotate:A,container:$,containerStyle:oe,watchStopHandles:v,dragging:h(()=>wt.value===Q),mounted(){p&&(C(),e||setTimeout(()=>{C(),S.value=(H.value.left+H.value.width/2-u.value)/l.value,j.value=(H.value.top-d.value)/l.value,k.value=H.value.width/l.value,N.value=H.value.height/l.value},100))},unmounted(){p&&Q.stopDragging()},startDragging(){C(),wt.value=Q},stopDragging(){wt.value===Q&&(wt.value=null)}};return v.push(ya($,I=>{const Ge=document.querySelector("#drag-control-container");Ge&&I.target&&Ge.contains(I.target)||Q.stopDragging()}),Y(va(),I=>{I||Q.stopDragging()})),Q}function Uo(){return{install(t){t.directive("drag",{name:"v-drag",created(e,n,s){var i;const a=Bo(n,n.value,(i=s.props)==null?void 0:i.markdownSource);s.props&&(s.props={...s.props},delete s.props.markdownSource),a.container.value=e,e.draggingState=a,e.dataset.dragId=a.id,a.watchStopHandles.push(Y(a.containerStyle,r=>{for(const[o,l]of Object.entries(r))l&&(e.style[o]=l)},{immediate:!0})),e.addEventListener("dblclick",a.startDragging)},mounted(e){e.draggingState.mounted()},unmounted(e){const n=e.draggingState;n.unmounted(),e.removeEventListener("dblclick",n.startDragging),n.watchStopHandles.forEach(s=>s())}})}}}function Jo(){return{install(t){const e=ka();t.directive("motion",{name:"v-motion",mounted(n,s,a,i){var k,S,A;const r=Qe(s,zt),o=Qe(s,Cn),l=Qe(s,xn),{currentPage:c,clicks:u,isPrintMode:d}=mn(),f=a.props={...a.props},p={...f.initial,...(k=f.variants)==null?void 0:k["slidev-initial"]},m={...f.enter,...(S=f.variants)==null?void 0:S["slidev-enter"]},g={...f.leave,...(A=f.variants)==null?void 0:A["slidev-leave"]};delete f.initial,delete f.enter,delete f.leave;const y=`${Wn()}-`,v=[];for(const L of Object.keys(f))if(L.startsWith("click-")){const T=L.slice(6),D=T.includes("-")?T.split("-").map(Number):+T,$=y+T;v.push({id:$,at:D,variant:{...f[L]},info:r==null?void 0:r.value.calculate(D)}),delete f[L]}v.sort((L,T)=>(Array.isArray(L.at)?L.at[0]:L.at)-(Array.isArray(T.at)?T.at[0]:T.at)),e.created(n,s,a,i),e.mounted(n,s,a,i);const w=n.motionInstance;w.clickIds=v.map(L=>L.id),w.set(p),w.watchStopHandle=Y([o,c,u].filter(Boolean),()=>{var T;const L=((T=Fs.get(n))==null?void 0:T.visibilityState.value)??"shown";if(!(r!=null&&r.value)||!["slide","presenter"].includes((l==null?void 0:l.value)??"")){const D={...p,...m};for(const{variant:$}of v)Object.assign(D,$);w.set(D)}else if(d.value||(o==null?void 0:o.value)===c.value)if(L==="shown"){const D={...p,...m};for(const{variant:$,info:H}of v)(!H||H.isActive.value)&&Object.assign(D,$);d.value?w.set(D):w.apply(D)}else w.apply(L==="before"?p:g);else w.apply(((o==null?void 0:o.value)??-1)>c.value?p:g)},{immediate:!0})},unmounted(n){n.motionInstance.watchStopHandle()}})}}}const Yo=[];function Ko(){const t=[];{let e=function(n){if(!R.remote||R.remote===n.query.password)return!0;if(R.remote&&n.query.password===void 0){const s=prompt("Enter password");if(R.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};t.push({name:"entry",path:"/entry",component:()=>M(()=>import("./slidev/entry-BWGXzUAL.js"),__vite__mapDeps([42,15,1,3,4,43]))},{name:"overview",path:"/overview",component:()=>M(()=>import("./slidev/overview-Dc7NPNc_.js"),__vite__mapDeps([44,15,1,45,46,47,48,49,50,51,3,4]))},{name:"notes",path:"/notes",component:()=>M(()=>import("./slidev/notes-DmjmGX7K.js"),__vite__mapDeps([52,15,1,48,49,47,3,4])),beforeEnter:e},{name:"presenter",path:"/presenter/:no",component:()=>M(()=>import("./slidev/presenter-Dow4NX2a.js"),__vite__mapDeps([53,15,1,54,45,46,47,2,3,4,55,48,49,56,57,50,51,58])),beforeEnter:e},{path:"/presenter",redirect:{path:"/presenter/1"}})}return t.push({name:"play",path:"/:no",component:()=>M(()=>import("./slidev/play-KI-X4gjV.js"),__vite__mapDeps([59,1,54,45,46,15,47,2,3,4,55,60]))},{path:"",redirect:{path:"/1"}}),Yo.reduce((e,n)=>n(e),t)}const Qo=[];async function Zo(t){function e(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}e(),window.addEventListener("resize",e);const n=ba({history:Sa("/genaiscript/slides/overview-may2024/"),routes:Ko()});t.use(n),t.use(yi()),t.use(Qr()),t.use(No()),t.use(Uo()),t.use(Jo()),t.use(La,{container:"#twoslash-container"});const s={app:t,router:n};It(()=>{n.afterEach(async()=>{await It(),pn.value+=1})});for(const a of Qo)await a(s)}const Ks=_a(Kr);Zo(Ks);Ks.mount("#app");export{xn as $,jt as A,Ho as B,Lt as C,ne as D,wt as E,Wo as F,Tl as G,yl as H,kl as I,hl as J,vl as K,Ll as L,_l as M,nl as N,jo as O,wl as P,_n as Q,Ml as R,Jt as S,xi as T,Vo as U,Tn as V,gs as W,As as X,ll as Y,Cn as Z,$s as _,mn as a,zt as a0,Oi as a1,pl as a2,ol as a3,rl as a4,il as a5,le as a6,ce as a7,ue as a8,de as a9,Ii as aA,cl as aB,Ei as aC,st as aD,dl as aE,Ee as aF,$e as aG,fe as aa,pe as ab,he as ac,me as ad,ge as ae,ye as af,ve as ag,we as ah,tl as ai,Wn as aj,ke as ak,hn as al,Ma as am,be as an,Se as ao,_e as ap,Le as aq,Ae as ar,Me as as,Ce as at,xe as au,Te as av,Ie as aw,Oe as ax,De as ay,Ti as az,js as b,Fr as c,al as d,ul as e,Sl as f,Ye as g,Al as h,ts as i,Fo as j,Ft as k,Cl as l,xl as m,dt as n,R as o,kt as p,M as q,Hn as r,Kt as s,fl as t,wi as u,ml as v,gl as w,Oa as x,sl as y,bl as z};