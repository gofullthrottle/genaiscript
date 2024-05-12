const __vite__fileDeps=["assets/slidev/1-Fstva2_G.js","assets/modules/vue-BpohPuJT.js","assets/slidev/context-C_SI2GUo.js","assets/modules/shiki-BGRm4NX1.js","assets/modules/shiki-BSchMNmt.css","assets/2-CT67uu6k.js","assets/slidev/VClick-VRR1KLDy.js","assets/posw-CLMpY-Gv.js","assets/slidev/two-cols-header-CUiEfKGT.js","assets/two-cols-header-DTF_BoaY.css","assets/3-Dy4Sd85X.js","assets/slidev/4-B4ulG6mK.js","assets/slidev/image-right-_uHCyDvW.js","assets/slidev/layoutHelper-B_tnmwyI.js","assets/slidev/5-Ca8Ozvvt.js","assets/slidev/CodeBlockWrapper-C_YRP1Uc.js","assets/modules/unplugin-icons-DMPJ6RbJ.js","assets/plug-in-phwnhgX0.js","assets/slidev/6-KId2ZV0e.js","assets/7-Ldi_GrdN.js","assets/slidev/8-D1474aYd.js","assets/slidev/9-BFBWFfFW.js","assets/slidev/default-BZqqKo2v.js","assets/10-zChmdYlH.js","assets/slidev/11-npqr-Xis.js","assets/slidev/12-B8RNFNsf.js","assets/slidev/13-AzO1im9D.js","assets/slidev/14-DnvMJLbO.js","assets/slidev/15-DPSZW5dZ.js","assets/slidev/16-MngBg_po.js","assets/slidev/17-DHK3WUkh.js","assets/slidev/18-C_XLbrrG.js","assets/slidev/19-z6LZr_e8.js","assets/slidev/20-gR2ZfWie.js","assets/slidev/21-B23rkNPO.js","assets/22-DxF2ioOl.js","assets/slidev/entry-oWLj88St.js","assets/entry-DFVZucWk.css","assets/slidev/overview-rc1U7bIh.js","assets/slidev/DrawingPreview-ch0b0xJS.js","assets/DrawingPreview-B_1g_kmH.css","assets/slidev/IconButton-DvrnuV7C.js","assets/slidev/NoteDisplay-DWVCMCQ5.js","assets/NoteDisplay-C6AkVv8T.css","assets/slidev/ClicksSlider-CHJDTWJ2.js","assets/ClicksSlider-DYpxHk94.css","assets/slidev/notes-BVTNQE-h.js","assets/slidev/presenter-BLhW5MwM.js","assets/slidev/ContextMenu-CK6G6knD.js","assets/ContextMenu-CvLg4A9z.css","assets/slidev/DrawingControls-uzjkuTlF.js","assets/DrawingControls-C5T1oZL5.css","assets/presenter-D8Ttzx6l.css","assets/slidev/play-_uaXBb79.js","assets/play-CoA43pdi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{t as C,y as h,n as Mt,z as Us,A as wn,B as rs,C as Be,D as J,E as qs,G as Ks,H as Js,I as os,J as _,K as Ys,L as Qs,o as ls,b as Zs,M as vn,N as xt,O as Xs,P as cs,Q as ea,R as ta,S as ee,T as us,U as Wt,d as na,r as sa,c as aa,V as ia,W as ra,X as oa,Y as la,Z as ca,_ as ua,$ as da,a0 as fa,a1 as pa,a2 as ha,a3 as ma,a4 as ga,a5 as ya,u as ka}from"./modules/vue-BpohPuJT.js";import{T as wa}from"./modules/shiki-BGRm4NX1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function rt(n,e,t){return Math.min(t,Math.max(e,n))}function va(...n){return Sa(n).reduce((e,t)=>e+t,0)}function ba(n){return n=n??[],Array.isArray(n)?n:[n]}function Sa(n){return ba(n).flat(1)}function _a(n){return Array.from(new Set(n))}function xn(...n){let e,t,s;n.length===1?(e=0,s=1,[t]=n):[e,t,s=1]=n;const a=[];let i=e;for(;i<t;)a.push(i),i+=s||1;return a}function La(n){return n!=null}function Ma(n,e){return Object.fromEntries(Object.entries(n).map(([t,s])=>e(t,s)).filter(La))}const I={theme:"default",title:"GenAIScript",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:"local",monacoTypesAdditionalPackages:[],monacoRunAdditionalDeps:[],download:!1,export:{},info:`<h2>GenAIScript</h2>
<p>Scripting for Generative AI.<br/>
<a href="https://microsoft.github.io/genaiscript/" target="_blank">Docs</a> | <a href="https://github.com/microsoft/genaiscript/" target="_blank">GitHub</a></p>
`,highlighter:"shiki",twoslash:!0,lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},editor:!0,class:"text-center",mdc:!0,layout:"center"},Bo="build",ds=C(I.aspectRatio??16/9),Aa=C(I.canvasWidth??980),Uo=h(()=>Math.ceil(Aa.value/ds.value)),Ca=h(()=>Ma(I.themeConfig||{},(n,e)=>[`--slidev-theme-${n}`,e])),Bt=I.titleTemplate.replace("%s",I.title||"Slidev");function sn(n,e={},t){for(const s in n){const a=n[s],i=t?`${t}:${s}`:s;typeof a=="object"&&a!==null?sn(a,e,i):typeof a=="function"&&(e[i]=a)}return e}const Ta={run:n=>n()},Oa=()=>Ta,fs=typeof console.createTask<"u"?console.createTask:Oa;function Ra(n,e){const t=e.shift(),s=fs(t);return n.reduce((a,i)=>a.then(()=>s.run(()=>i(...e))),Promise.resolve())}function Ea(n,e){const t=e.shift(),s=fs(t);return Promise.all(n.map(a=>s.run(()=>a(...e))))}function Ut(n,e){for(const t of[...n])t(e)}class Pa{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||typeof t!="function")return()=>{};const a=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let r=i.message;r||(r=`${a} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,a=(...i)=>(typeof s=="function"&&s(),s=void 0,a=void 0,t(...i));return s=this.hook(e,a),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const s=this._hooks[e]||[];delete this._hooks[e];for(const a of s)this.hook(e,a)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=sn(e),s=Object.keys(t).map(a=>this.hook(a,t[a]));return()=>{for(const a of s.splice(0,s.length))a()}}removeHooks(e){const t=sn(e);for(const s in t)this.removeHook(s,t[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Ra,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(Ea,e,...t)}callHookWith(e,t,...s){const a=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&Ut(this._before,a);const i=e(t in this._hooks?[...this._hooks[t]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&a&&Ut(this._after,a)}):(this._after&&a&&Ut(this._after,a),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function $a(){return new Pa}function Da(n){return Array.isArray(n)?n:[n]}const Ia=["title","titleTemplate","script","style","noscript"],gt=["base","meta","link","style","script","noscript"],xa=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Wa=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],ps=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Na=typeof window<"u";function bn(n){let e=9;for(let t=0;t<n.length;)e=Math.imul(e^n.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Wn(n){return n._h||bn(n._d?n._d:`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function hs(n,e){const{props:t,tag:s}=n;if(Wa.includes(s))return s;if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const a=["id"];s==="meta"&&a.push("name","property","http-equiv");for(const i of a)if(typeof t[i]<"u"){const r=String(t[i]);return`${s}:${i}:${r}`}return!1}function Nn(n,e){return n==null?e||null:typeof n=="function"?n(e):n}async function ja(n,e,t){const s={tag:n,props:await ms(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(n)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(n))};return ps.forEach(a=>{const i=typeof s.props[a]<"u"?s.props[a]:t[a];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(a)||Ia.includes(s.tag))&&(s[a==="children"?"innerHTML":a]=i),delete s.props[a])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(a=>({...s,props:{...s.props,content:a}})):s}function Ha(n,e){var s;const t=n==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,a])=>a).map(([a,i])=>n==="style"?`${a}:${i}`:a)),(s=Array.isArray(e)?e.join(t):e)==null?void 0:s.split(t).filter(a=>a.trim()).filter(Boolean).join(t)}async function ms(n,e){for(const t of Object.keys(n)){if(["class","style"].includes(t)){n[t]=Ha(t,n[t]);continue}if(n[t]instanceof Promise&&(n[t]=await n[t]),!e&&!ps.includes(t)){const s=String(n[t]),a=t.startsWith("data-");s==="true"||s===""?n[t]=a?"true":!0:n[t]||(a&&s==="false"?n[t]="false":delete n[t])}}return n}const Fa=10;async function Ga(n){const e=[];return Object.entries(n.resolvedInput).filter(([t,s])=>typeof s<"u"&&xa.includes(t)).forEach(([t,s])=>{const a=Da(s);e.push(...a.map(i=>ja(t,i,n)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,s)=>(t._e=n._i,n.mode&&(t._m=n.mode),t._p=(n._i<<Fa)+s,t))}const jn={base:-10,title:10},Hn={critical:-80,high:-10,low:20};function At(n){let e=100;const t=n.tagPriority;return typeof t=="number"?t:(n.tag==="meta"?(n.props["http-equiv"]==="content-security-policy"&&(e=-30),n.props.charset&&(e=-20),n.props.name==="viewport"&&(e=-15)):n.tag==="link"&&n.props.rel==="preconnect"?e=20:n.tag in jn&&(e=jn[n.tag]),typeof t=="string"&&t in Hn?e+Hn[t]:e)}const za=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Fn=["onload","onerror","onabort","onprogress","onloadstart"],ie="%separator";function yt(n,e,t){if(typeof n!="string"||!n.includes("%"))return n;function s(r){let o;return["s","pageTitle"].includes(r)?o=e.pageTitle:r.includes(".")?o=r.split(".").reduce((l,c)=>l&&l[c]||void 0,e):o=e[r],typeof o<"u"?(o||"").replace(/"/g,'\\"'):!1}let a=n;try{a=decodeURI(n)}catch{}return(a.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const o=s(r.slice(1));typeof o=="string"&&(n=n.replace(new RegExp(`\\${r}(\\W|$)`,"g"),(l,c)=>`${o}${c}`).trim())}),n.includes(ie)&&(n.endsWith(ie)&&(n=n.slice(0,-ie.length).trim()),n.startsWith(ie)&&(n=n.slice(ie.length).trim()),n=n.replace(new RegExp(`\\${ie}\\s*\\${ie}`,"g"),ie),n=yt(n,{separator:t},t)),n}async function Va(n,e={}){var u;const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const s={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const a=(await n.resolveTags()).map(d=>({tag:d,id:gt.includes(d.tag)?Wn(d):d.tag,shouldRender:!0}));let i=n._dom;if(!i){i={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};for(const d of["body","head"]){const f=(u=t[d])==null?void 0:u.children,p=[];for(const m of[...f].filter(g=>gt.includes(g.tagName.toLowerCase()))){const g={tag:m.tagName.toLowerCase(),props:await ms(m.getAttributeNames().reduce((w,v)=>({...w,[v]:m.getAttribute(v)}),{})),innerHTML:m.innerHTML};let y=1,k=hs(g);for(;k&&p.find(w=>w._d===k);)k=`${k}:${y++}`;g._d=k||void 0,p.push(g),i.elMap[m.getAttribute("data-hid")||Wn(g)]=m}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function r(d,f,p){const m=`${d}:${f}`;i.sideEffects[m]=p,delete i.pendingSideEffects[m]}function o({id:d,$el:f,tag:p}){const m=p.tag.endsWith("Attrs");i.elMap[d]=f,m||(["textContent","innerHTML"].forEach(g=>{p[g]&&p[g]!==f[g]&&(f[g]=p[g])}),r(d,"el",()=>{var g;(g=i.elMap[d])==null||g.remove(),delete i.elMap[d]}));for(const[g,y]of Object.entries(p._eventHandlers||{}))f.getAttribute(`data-${g}`)!==""&&((p.tag==="bodyAttrs"?t.defaultView:f).addEventListener(g.replace("on",""),y.bind(f)),f.setAttribute(`data-${g}`,""));Object.entries(p.props).forEach(([g,y])=>{const k=`attr:${g}`;if(g==="class")for(const w of(y||"").split(" ").filter(Boolean))m&&r(d,`${k}:${w}`,()=>f.classList.remove(w)),!f.classList.contains(w)&&f.classList.add(w);else if(g==="style")for(const w of(y||"").split(";").filter(Boolean)){const[v,...b]=w.split(":").map(M=>M.trim());r(d,`${k}:${w}:${v}`,()=>{f.style.removeProperty(v)}),f.style.setProperty(v,b.join(":"))}else f.getAttribute(g)!==y&&f.setAttribute(g,y===!0?"":String(y)),m&&r(d,k,()=>f.removeAttribute(g))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of a){const{tag:f,shouldRender:p,id:m}=d;if(p){if(f.tag==="title"){t.title=f.textContent;continue}d.$el=d.$el||i.elMap[m],d.$el?o(d):gt.includes(f.tag)&&l.push(d)}}for(const d of l){const f=d.tag.tagPosition||"head";d.$el=t.createElement(d.tag.tag),o(d),c[f]=c[f]||t.createDocumentFragment(),c[f].appendChild(d.$el)}for(const d of a)await n.hooks.callHook("dom:renderTag",d,t,r);c.head&&t.head.appendChild(c.head),c.bodyOpen&&t.body.insertBefore(c.bodyOpen,t.body.firstChild),c.bodyClose&&t.body.appendChild(c.bodyClose),Object.values(i.pendingSideEffects).forEach(d=>d()),n._dom=i,n.dirty=!1,await n.hooks.callHook("dom:rendered",{renders:a})}async function Ba(n,e={}){const t=e.delayFn||(s=>setTimeout(s,10));return n._domUpdatePromise=n._domUpdatePromise||new Promise(s=>t(async()=>{await Va(n,e),delete n._domUpdatePromise,s()}))}function Ua(n){return e=>{var s,a;const t=((a=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:a.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":function(i){Ba(i,n)}}}}}const qa=["templateParams","htmlAttrs","bodyAttrs"],Ka={hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(s=>{n.props[s]&&(n.key=n.props[s],delete n.props[s])});const t=hs(n)||(n.key?`${n.tag}:${n.key}`:!1);t&&(n._d=t)},"tags:resolve":function(n){const e={};n.tags.forEach(s=>{const a=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,i=e[a];if(i){let o=s==null?void 0:s.tagDuplicateStrategy;if(!o&&qa.includes(s.tag)&&(o="merge"),o==="merge"){const l=i.props;["class","style"].forEach(c=>{l[c]&&(s.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),s.props[c]=`${l[c]} ${s.props[c]}`):s.props[c]=l[c])}),e[a].props={...l,...s.props};return}else if(s._e===i._e){i._duped=i._duped||[],s._d=`${i._d}:${i._duped.length+1}`,i._duped.push(s);return}else if(At(s)>At(i))return}const r=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(gt.includes(s.tag)&&r===0){delete e[a];return}e[a]=s});const t=[];Object.values(e).forEach(s=>{const a=s._duped;delete s._duped,t.push(s),a&&t.push(...a)}),n.tags=t,n.tags=n.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},Ja={mode:"server",hooks:{"tags:resolve":function(n){const e={};n.tags.filter(t=>["titleTemplate","templateParams","title"].includes(t.tag)&&t._m==="server").forEach(t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props}),Object.keys(e).length&&n.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Ya=["script","link","bodyAttrs"],Qa=n=>({hooks:{"tags:resolve":function(e){for(const t of e.tags.filter(s=>Ya.includes(s.tag)))Object.entries(t.props).forEach(([s,a])=>{s.startsWith("on")&&typeof a=="function"&&(n.ssr&&Fn.includes(s)?t.props[s]=`this.dataset.${s}fired = true`:delete t.props[s],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[s]=a)}),n.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||bn(t.props.src||t.props.href))},"dom:renderTag":function({$el:e,tag:t}){var s,a;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(r=>Fn.some(o=>`${o}fired`===r))){const r=i.replace("fired","");(a=(s=t._eventHandlers)==null?void 0:s[r])==null||a.call(e,new Event(r.replace("on","")))}}}}),Za=["link","style","script","noscript"],Xa={hooks:{"tag:normalise":({tag:n})=>{n.key&&Za.includes(n.tag)&&(n.props["data-hid"]=n._h=bn(n.key))}}},ei={hooks:{"tags:resolve":n=>{const e=t=>{var s;return(s=n.tags.find(a=>a._d===t))==null?void 0:s._p};for(const{prefix:t,offset:s}of za)for(const a of n.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(t))){const i=e(a.tagPriority.replace(t,""));typeof i<"u"&&(a._p=i+s)}n.tags.sort((t,s)=>t._p-s._p).sort((t,s)=>At(t)-At(s))}}},ti={meta:"content",link:"href",htmlAttrs:"lang"},ni=n=>({hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,s=(o=t.find(l=>l.tag==="title"))==null?void 0:o.textContent,a=t.findIndex(l=>l.tag==="templateParams"),i=a!==-1?t[a].props:{},r=i.separator||"|";delete i.separator,i.pageTitle=yt(i.pageTitle||s||"",i,r);for(const l of t.filter(c=>c.processTemplateParams!==!1)){const c=ti[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=yt(l.props[c],i,r):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=yt(l[u],i,r))})}n._templateParams=i,n._separator=r,e.tags=t.filter(l=>l.tag!=="templateParams")}}}),si={hooks:{"tags:resolve":n=>{const{tags:e}=n;let t=e.findIndex(a=>a.tag==="titleTemplate");const s=e.findIndex(a=>a.tag==="title");if(s!==-1&&t!==-1){const a=Nn(e[t].textContent,e[s].textContent);a!==null?e[s].textContent=a||e[s].textContent:delete e[s]}else if(t!==-1){const a=Nn(e[t].textContent);a!==null&&(e[t].textContent=a,e[t].tag="title",t=-1)}t!==-1&&delete e[t],n.tags=e.filter(Boolean)}}},ai={hooks:{"tags:afterResolve":function(n){for(const e of n.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let gs;function ii(n={}){const e=ri(n);return e.use(Ua()),gs=e}function Gn(n,e){return!n||n==="server"&&e||n==="client"&&!e}function ri(n={}){const e=$a();e.addHooks(n.hooks||{}),n.document=n.document||(Na?document:void 0);const t=!n.document,s=()=>{o.dirty=!0,e.callHook("entries:updated",o)};let a=0,i=[];const r=[],o={plugins:r,dirty:!1,resolvedOptions:n,hooks:e,headEntries(){return i},use(l){const c=typeof l=="function"?l(o):l;(!c.key||!r.some(u=>u.key===c.key))&&(r.push(c),Gn(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:a++,input:l,...c};return Gn(u.mode,t)&&(i.push(u),s()),{dispose(){i=i.filter(d=>d._i!==u._i),e.callHook("entries:updated",o),s()},patch(d){i=i.map(f=>(f._i===u._i&&(f.input=u.input=d),f)),s()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const d of await Ga(c)){const f={tag:d,entry:c,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[Ka,Ja,Qa,Xa,ei,ni,si,ai,...(n==null?void 0:n.plugins)||[]].forEach(l=>o.use(l)),o.hooks.callHook("init",o),o}function oi(){return gs}const li=Us.startsWith("3");function ci(n){return typeof n=="function"?n():wn(n)}function Ct(n,e=""){if(n instanceof Promise)return n;const t=ci(n);return!n||!t?t:Array.isArray(t)?t.map(s=>Ct(s,e)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([s,a])=>s==="titleTemplate"||s.startsWith("on")?[s,wn(a)]:[s,Ct(a,s)])):t}const ui={hooks:{"entries:resolve":function(n){for(const e of n.entries)e.resolvedInput=Ct(e.input)}}},ys="usehead";function di(n){return{install(t){li&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(ys,n))}}.install}function fi(n={}){n.domDelayFn=n.domDelayFn||(t=>Mt(()=>setTimeout(()=>t(),0)));const e=ii(n);return e.use(ui),e.install=di(e),e}const zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vn="__unhead_injection_handler__";function pi(){if(Vn in zn)return zn[Vn]();const n=rs(ys);return n||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),n||oi()}function hi(n,e={}){const t=e.head||pi();if(t)return t.ssr?t.push(n,e):mi(t,n,e)}function mi(n,e,t={}){const s=C(!1),a=C({});Be(()=>{a.value=s.value?{}:Ct(e)});const i=n.push(a.value,t);return J(a,o=>{i.patch(o)}),os()&&(qs(()=>{i.dispose()}),Ks(()=>{s.value=!0}),Js(()=>{s.value=!1})),i}function ks(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Y(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!1})}const De=_({page:0,clicks:0});let gi=[],yi=[];Y(De,"$syncUp",!0);Y(De,"$syncDown",!0);Y(De,"$paused",!1);Y(De,"$onSet",n=>gi.push(n));Y(De,"$onPatch",n=>yi.push(n));ks();Y(De,"$patch",async()=>!1);function ws(n,e,t=!1){const s=[];let a=!1,i=!1,r,o;const l=_(e);function c(p){s.push(p)}function u(p,m){l[p]!==m&&(clearTimeout(r),a=!0,l[p]=m,r=setTimeout(()=>a=!1,0))}function d(p){a||(clearTimeout(o),i=!0,Object.entries(p).forEach(([m,g])=>{l[m]=g}),o=setTimeout(()=>i=!1,0))}function f(p){let m;t?t&&window.addEventListener("storage",y=>{y&&y.key===p&&y.newValue&&d(JSON.parse(y.newValue))}):(m=new BroadcastChannel(p),m.addEventListener("message",y=>d(y.data)));function g(){!t&&m&&!i?m.postMessage(Ys(l)):t&&!i&&window.localStorage.setItem(p,JSON.stringify(l)),a||s.forEach(y=>y(l))}if(J(l,g,{deep:!0,flush:"sync"}),t){const y=window.localStorage.getItem(p);y&&d(JSON.parse(y))}}return{init:f,onPatch:c,patch:u,state:l}}const{init:ki,onPatch:wi,patch:Qe,state:qo}=ws(De,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ie=_({});let vi=[],bi=[];Y(Ie,"$syncUp",!0);Y(Ie,"$syncDown",!0);Y(Ie,"$paused",!1);Y(Ie,"$onSet",n=>vi.push(n));Y(Ie,"$onPatch",n=>bi.push(n));ks();Y(Ie,"$patch",async()=>!1);const{init:Si,onPatch:Ko,patch:Jo,state:Yo}=ws(Ie,{},!1),Nt="$$slidev-clicks-context",Sn="$$slidev-page",vs="$$slidev-slide-element",_i="$$slidev-slide-scale",Li="$$slidev-context",Qo="$$slidev-route",_n="$$slidev-render-context",Mi="$$slidev-fontmatter",Ai="$$slidev-slide-zoom",kt="slidev-vclick-target",Ze="slidev-vclick-hidden",Xe="slidev-vclick-fade",qt="slidev-vclick-hidden-explicitly",Kt="slidev-vclick-current",Jt="slidev-vclick-prior",wt=999999,Ci=["localhost","127.0.0.1"],Ti=["clicks","clicksStart","disabled","hide","hideInToc","layout","level","preload","routeAlias","src","title","transition","zoom","dragPos"],Zo=[...Ti,"theme","titleTemplate","info","author","keywords","presenter","download","exportFilename","export","highlighter","lineNumbers","monaco","monacoTypesSource","monacoTypesAdditionalPackages","monacoRunAdditionalDeps","remoteAssets","selectable","record","colorSchema","routerMode","aspectRatio","canvasWidth","themeConfig","favicon","plantUmlServer","fonts","defaults","drawings","htmlAttrs","mdc","contextMenu"],Ln=C(!1),Mn=Symbol.for("yaml.alias"),Oi=Symbol.for("yaml.document"),$e=Symbol.for("yaml.map"),bs=Symbol.for("yaml.pair"),An=Symbol.for("yaml.scalar"),ct=Symbol.for("yaml.seq"),se=Symbol.for("yaml.node.type"),qe=n=>!!n&&typeof n=="object"&&n[se]===Mn,jt=n=>!!n&&typeof n=="object"&&n[se]===Oi,Ss=n=>!!n&&typeof n=="object"&&n[se]===$e,G=n=>!!n&&typeof n=="object"&&n[se]===bs,H=n=>!!n&&typeof n=="object"&&n[se]===An,Cn=n=>!!n&&typeof n=="object"&&n[se]===ct;function q(n){if(n&&typeof n=="object")switch(n[se]){case $e:case ct:return!0}return!1}function B(n){if(n&&typeof n=="object")switch(n[se]){case Mn:case $e:case An:case ct:return!0}return!1}const Ri=n=>(H(n)||q(n))&&!!n.anchor,Re=Symbol("break visit"),Ei=Symbol("skip children"),st=Symbol("remove node");function ot(n,e){const t=Pi(e);jt(n)?Fe(null,n.contents,t,Object.freeze([n]))===st&&(n.contents=null):Fe(null,n,t,Object.freeze([]))}ot.BREAK=Re;ot.SKIP=Ei;ot.REMOVE=st;function Fe(n,e,t,s){const a=$i(n,e,t,s);if(B(a)||G(a))return Di(n,s,a),Fe(n,a,t,s);if(typeof a!="symbol"){if(q(e)){s=Object.freeze(s.concat(e));for(let i=0;i<e.items.length;++i){const r=Fe(i,e.items[i],t,s);if(typeof r=="number")i=r-1;else{if(r===Re)return Re;r===st&&(e.items.splice(i,1),i-=1)}}}else if(G(e)){s=Object.freeze(s.concat(e));const i=Fe("key",e.key,t,s);if(i===Re)return Re;i===st&&(e.key=null);const r=Fe("value",e.value,t,s);if(r===Re)return Re;r===st&&(e.value=null)}}return a}function Pi(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function $i(n,e,t,s){var a,i,r,o,l;if(typeof t=="function")return t(n,e,s);if(Ss(e))return(a=t.Map)==null?void 0:a.call(t,n,e,s);if(Cn(e))return(i=t.Seq)==null?void 0:i.call(t,n,e,s);if(G(e))return(r=t.Pair)==null?void 0:r.call(t,n,e,s);if(H(e))return(o=t.Scalar)==null?void 0:o.call(t,n,e,s);if(qe(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,s)}function Di(n,e,t){const s=e[e.length-1];if(q(s))s.items[n]=t;else if(G(s))n==="key"?s.key=t:s.value=t;else if(jt(s))s.contents=t;else{const a=qe(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${a} parent`)}}function _s(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function nt(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let a=0,i=s.length;a<i;++a){const r=s[a],o=nt(n,s,String(a),r);o===void 0?delete s[a]:o!==r&&(s[a]=o)}else if(s instanceof Map)for(const a of Array.from(s.keys())){const i=s.get(a),r=nt(n,s,a,i);r===void 0?s.delete(a):r!==i&&s.set(a,r)}else if(s instanceof Set)for(const a of Array.from(s)){const i=nt(n,s,a,a);i===void 0?s.delete(a):i!==a&&(s.delete(a),s.add(i))}else for(const[a,i]of Object.entries(s)){const r=nt(n,s,a,i);r===void 0?delete s[a]:r!==i&&(s[a]=r)}return n.call(e,t,s)}function X(n,e,t){if(Array.isArray(n))return n.map((s,a)=>X(s,String(a),t));if(n&&typeof n.toJSON=="function"){if(!t||!Ri(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=i=>{s.res=i,delete t.onCreate};const a=n.toJSON(e,t);return t.onCreate&&t.onCreate(a),a}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class Tn{constructor(e){Object.defineProperty(this,se,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:a,reviver:i}={}){if(!jt(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},o=X(this,"",r);if(typeof a=="function")for(const{count:l,res:c}of r.anchors.values())a(c,l);return typeof i=="function"?nt(i,{"":o},"",o):o}}class Ii extends Tn{constructor(e){super(Mn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return ot(e,{Node:(s,a)=>{if(a===this)return ot.BREAK;a.anchor===this.source&&(t=a)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:a,maxAliasCount:i}=t,r=this.resolve(a);if(!r){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let o=s.get(r);if(o||(X(r,null,t),o=s.get(r)),!o||o.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=vt(a,r,s)),o.count*o.aliasCount>i)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return o.res}toString(e,t,s){const a=`*${this.source}`;if(e){if(_s(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${a} `}return a}}function vt(n,e,t){if(qe(e)){const s=e.resolve(n),a=t&&s&&t.get(s);return a?a.count*a.aliasCount:0}else if(q(e)){let s=0;for(const a of e.items){const i=vt(n,a,t);i>s&&(s=i)}return s}else if(G(e)){const s=vt(n,e.key,t),a=vt(n,e.value,t);return Math.max(s,a)}return 1}const Ls=n=>!n||typeof n!="function"&&typeof n!="object";class N extends Tn{constructor(e){super(An),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:X(this.value,e,t)}toString(){return String(this.value)}}N.BLOCK_FOLDED="BLOCK_FOLDED";N.BLOCK_LITERAL="BLOCK_LITERAL";N.PLAIN="PLAIN";N.QUOTE_DOUBLE="QUOTE_DOUBLE";N.QUOTE_SINGLE="QUOTE_SINGLE";function xi(n,e,t){return t.find(s=>{var a;return((a=s.identify)==null?void 0:a.call(s,n))&&!s.format})}function Tt(n,e,t){var d,f,p;if(jt(n)&&(n=n.contents),B(n))return n;if(G(n)){const m=(f=(d=t.schema[$e]).createNode)==null?void 0:f.call(d,t.schema,null,t);return m.items.push(n),m}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:a,onTagObj:i,schema:r,sourceObjects:o}=t;let l;if(s&&n&&typeof n=="object"){if(l=o.get(n),l)return l.anchor||(l.anchor=a(n)),new Ii(l.anchor);l={anchor:null,node:null},o.set(n,l)}let c=xi(n,e,r.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const m=new N(n);return l&&(l.node=m),m}c=n instanceof Map?r[$e]:Symbol.iterator in Object(n)?r[ct]:r[$e]}i&&(i(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((p=c==null?void 0:c.nodeClass)==null?void 0:p.from)=="function"?c.nodeClass.from(t.schema,n,t):new N(n);return c.default||(u.tag=c.tag),l&&(l.node=u),u}function Bn(n,e,t){let s=t;for(let a=e.length-1;a>=0;--a){const i=e[a];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const r=[];r[i]=s,s=r}else s=new Map([[i,s]])}return Tt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Wi=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class On extends Tn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>B(s)||G(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Wi(e))this.add(t);else{const[s,...a]=e,i=this.get(s,!0);if(q(i))i.addIn(a,t);else if(i===void 0&&this.schema)this.set(s,Bn(this.schema,a,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${a}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const a=this.get(t,!0);if(q(a))return a.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...a]=e,i=this.get(s,!0);return a.length===0?!t&&H(i)?i.value:i:q(i)?i.getIn(a,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!G(t))return!1;const s=t.value;return s==null||e&&H(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const a=this.get(t,!0);return q(a)?a.hasIn(s):!1}setIn(e,t){const[s,...a]=e;if(a.length===0)this.set(s,t);else{const i=this.get(s,!0);if(q(i))i.setIn(a,t);else if(i===void 0&&this.schema)this.set(s,Bn(this.schema,a,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${a}`)}}}On.maxFlowStringSingleLineLength=60;const Ni=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function lt(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Ge=(n,e,t)=>n.endsWith(`
`)?lt(t,e):t.includes(`
`)?`
`+lt(t,e):(n.endsWith(" ")?"":" ")+t,Ms="flow",an="block",bt="quoted";function Ht(n,e,t="flow",{indentAtStart:s,lineWidth:a=80,minContentWidth:i=20,onFold:r,onOverflow:o}={}){if(!a||a<0)return n;const l=Math.max(1+i,1+a-e.length);if(n.length<=l)return n;const c=[],u={};let d=a-e.length;typeof s=="number"&&(s>a-Math.max(2,i)?c.push(0):d=a-s);let f,p,m=!1,g=-1,y=-1,k=-1;t===an&&(g=Un(n,g,e.length),g!==-1&&(d=g+l));for(let v;v=n[g+=1];){if(t===bt&&v==="\\"){switch(y=g,n[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}k=g}if(v===`
`)t===an&&(g=Un(n,g,e.length)),d=g+e.length+l,f=void 0;else{if(v===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const b=n[g+1];b&&b!==" "&&b!==`
`&&b!=="	"&&(f=g)}if(g>=d)if(f)c.push(f),d=f+l,f=void 0;else if(t===bt){for(;p===" "||p==="	";)p=v,v=n[g+=1],m=!0;const b=g>k+1?g-2:y-1;if(u[b])return n;c.push(b),u[b]=!0,d=b+l,f=void 0}else m=!0}p=v}if(m&&o&&o(),c.length===0)return n;r&&r();let w=n.slice(0,c[0]);for(let v=0;v<c.length;++v){const b=c[v],M=c[v+1]||n.length;b===0?w=`
${e}${n.slice(0,M)}`:(t===bt&&u[b]&&(w+=`${n[b]}\\`),w+=`
${e}${n.slice(b+1,M)}`)}return w}function Un(n,e,t){let s=e,a=e+1,i=n[a];for(;i===" "||i==="	";)if(e<a+t)i=n[++e];else{do i=n[++e];while(i&&i!==`
`);s=e,a=e+1,i=n[a]}return s}const Ft=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Gt=n=>/^(%|---|\.\.\.)/m.test(n);function ji(n,e,t){if(!e||e<0)return!1;const s=e-t,a=n.length;if(a<=s)return!1;for(let i=0,r=0;i<a;++i)if(n[i]===`
`){if(i-r>s)return!0;if(r=i+1,a-r<=s)return!1}return!0}function at(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,a=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(Gt(n)?"  ":"");let r="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(r+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{r+=t.slice(o,l);const u=t.substr(l+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<a)l+=1;else{for(r+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)r+=`
`,l+=2;r+=i,t[l+2]===" "&&(r+="\\"),l+=1,o=l+1}break;default:l+=1}return r=o?r+t.slice(o):t,s?r:Ht(r,i,bt,Ft(e,!1))}function rn(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return at(n,e);const t=e.indent||(Gt(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:Ht(s,t,Ms,Ft(e,!1))}function ze(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=at;else{const a=n.includes('"'),i=n.includes("'");a&&!i?s=rn:i&&!a?s=at:s=t?rn:at}return s(n,e)}let on;try{on=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{on=/\n+(?!\n|$)/g}function St({comment:n,type:e,value:t},s,a,i){const{blockQuote:r,commentString:o,lineWidth:l}=s.options;if(!r||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return ze(t,s);const c=s.indent||(s.forceBlockIndent||Gt(t)?"  ":""),u=r==="literal"?!0:r==="folded"||e===N.BLOCK_FOLDED?!1:e===N.BLOCK_LITERAL?!0:!ji(t,l,c.length);if(!t)return u?`|
`:`>
`;let d,f;for(f=t.length;f>0;--f){const L=t[f-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let p=t.substring(f);const m=p.indexOf(`
`);m===-1?d="-":t===p||m!==p.length-1?(d="+",i&&i()):d="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(on,`$&${c}`));let g=!1,y,k=-1;for(y=0;y<t.length;++y){const L=t[y];if(L===" ")g=!0;else if(L===`
`)k=y;else break}let w=t.substring(0,k<y?k+1:y);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let b=(u?"|":">")+(g?c?"2":"1":"")+d;if(n&&(b+=" "+o(n.replace(/ ?[\r\n]+/g," ")),a&&a()),u)return t=t.replace(/\n+/g,`$&${c}`),`${b}
${c}${w}${t}${p}`;t=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);const M=Ht(`${w}${t}${p}`,c,an,Ft(s,!0));return`${b}
${c}${M}`}function Hi(n,e,t,s){const{type:a,value:i}=n,{actualString:r,implicitKey:o,indent:l,indentStep:c,inFlow:u}=e;if(o&&i.includes(`
`)||u&&/[[\]{},]/.test(i))return ze(i,e);if(!i||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return o||u||!i.includes(`
`)?ze(i,e):St(n,e,t,s);if(!o&&!u&&a!==N.PLAIN&&i.includes(`
`))return St(n,e,t,s);if(Gt(i)){if(l==="")return e.forceBlockIndent=!0,St(n,e,t,s);if(o&&l===c)return ze(i,e)}const d=i.replace(/\n+/g,`$&
${l}`);if(r){const f=g=>{var y;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((y=g.test)==null?void 0:y.test(d))},{compat:p,tags:m}=e.doc.schema;if(m.some(f)||p!=null&&p.some(f))return ze(i,e)}return o?d:Ht(d,l,Ms,Ft(e,!1))}function Fi(n,e,t,s){const{implicitKey:a,inFlow:i}=e,r=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:o}=n;o!==N.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(o=N.QUOTE_DOUBLE);const l=u=>{switch(u){case N.BLOCK_FOLDED:case N.BLOCK_LITERAL:return a||i?ze(r.value,e):St(r,e,t,s);case N.QUOTE_DOUBLE:return at(r.value,e);case N.QUOTE_SINGLE:return rn(r.value,e);case N.PLAIN:return Hi(r,e,t,s);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:u,defaultStringType:d}=e.options,f=a&&u||d;if(c=l(f),c===null)throw new Error(`Unsupported default string type ${f}`)}return c}function Gi(n,e){const t=Object.assign({blockQuote:!0,commentString:Ni,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function zi(n,e){var a;if(e.tag){const i=n.filter(r=>r.tag===e.tag);if(i.length>0)return i.find(r=>r.format===e.format)??i[0]}let t,s;if(H(e)){s=e.value;const i=n.filter(r=>{var o;return(o=r.identify)==null?void 0:o.call(r,s)});t=i.find(r=>r.format===e.format)??i.find(r=>!r.format)}else s=e,t=n.find(i=>i.nodeClass&&s instanceof i.nodeClass);if(!t){const i=((a=s==null?void 0:s.constructor)==null?void 0:a.name)??typeof s;throw new Error(`Tag not resolved for ${i} value`)}return t}function Vi(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const a=[],i=(H(n)||q(n))&&n.anchor;i&&_s(i)&&(t.add(i),a.push(`&${i}`));const r=n.tag?n.tag:e.default?null:e.tag;return r&&a.push(s.directives.tagString(r)),a.join(" ")}function Ot(n,e,t,s){var l;if(G(n))return n.toString(e,t,s);if(qe(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let a;const i=B(n)?n:e.doc.createNode(n,{onTagObj:c=>a=c});a||(a=zi(e.doc.schema.tags,i));const r=Vi(i,a,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);const o=typeof a.stringify=="function"?a.stringify(i,e,t,s):H(i)?Fi(i,e,t,s):i.toString(e,t,s);return r?H(i)||o[0]==="{"||o[0]==="["?`${r} ${o}`:`${r}
${e.indent}${o}`:o}function Bi({key:n,value:e},t,s,a){const{allNullValues:i,doc:r,indent:o,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:d}}=t;let f=B(n)&&n.comment||null;if(d){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(q(n)){const T="With simple keys, collection cannot be used as a key value";throw new Error(T)}}let p=!d&&(!n||f&&e==null&&!t.inFlow||q(n)||(H(n)?n.type===N.BLOCK_FOLDED||n.type===N.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(d||!i),indent:o+l});let m=!1,g=!1,y=Ot(n,t,()=>m=!0,()=>g=!0);if(!p&&!t.inFlow&&y.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(i||e==null)return m&&s&&s(),y===""?"?":p?`? ${y}`:y}else if(i&&!d||e==null&&p)return y=`? ${y}`,f&&!m?y+=Ge(y,t.indent,c(f)):g&&a&&a(),y;m&&(f=null),p?(f&&(y+=Ge(y,t.indent,c(f))),y=`? ${y}
${o}:`):(y=`${y}:`,f&&(y+=Ge(y,t.indent,c(f))));let k,w,v;B(e)?(k=!!e.spaceBefore,w=e.commentBefore,v=e.comment):(k=!1,w=null,v=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!p&&!f&&H(e)&&(t.indentAtStart=y.length+1),g=!1,!u&&l.length>=2&&!t.inFlow&&!p&&Cn(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let b=!1;const M=Ot(e,t,()=>b=!0,()=>g=!0);let L=" ";if(f||k||w){if(L=k?`
`:"",w){const T=c(w);L+=`
${lt(T,t.indent)}`}M===""&&!t.inFlow?L===`
`&&(L=`

`):L+=`
${t.indent}`}else if(!p&&q(e)){const T=M[0],E=M.indexOf(`
`),$=E!==-1,F=t.inFlow??e.flow??e.items.length===0;if($||!F){let te=!1;if($&&(T==="&"||T==="!")){let A=M.indexOf(" ");T==="&"&&A!==-1&&A<E&&M[A+1]==="!"&&(A=M.indexOf(" ",A+1)),(A===-1||E<A)&&(te=!0)}te||(L=`
${t.indent}`)}}else(M===""||M[0]===`
`)&&(L="");return y+=L+M,t.inFlow?b&&s&&s():v&&!b?y+=Ge(y,t.indent,c(v)):g&&a&&a(),y}function Ui(n,e){(n==="debug"||n==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const qn="<<";function As(n,e,{key:t,value:s}){if(n!=null&&n.doc.schema.merge&&qi(t))if(s=qe(s)?s.resolve(n.doc):s,Cn(s))for(const a of s.items)Yt(n,e,a);else if(Array.isArray(s))for(const a of s)Yt(n,e,a);else Yt(n,e,s);else{const a=X(t,"",n);if(e instanceof Map)e.set(a,X(s,a,n));else if(e instanceof Set)e.add(a);else{const i=Ki(t,a,n),r=X(s,i,n);i in e?Object.defineProperty(e,i,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[i]=r}}return e}const qi=n=>n===qn||H(n)&&n.value===qn&&(!n.type||n.type===N.PLAIN);function Yt(n,e,t){const s=n&&qe(t)?t.resolve(n.doc):t;if(!Ss(s))throw new Error("Merge sources must be maps or map aliases");const a=s.toJSON(null,n,Map);for(const[i,r]of a)e instanceof Map?e.has(i)||e.set(i,r):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function Ki(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(B(n)&&(t!=null&&t.doc)){const s=Gi(t.doc,{});s.anchors=new Set;for(const i of t.anchors.keys())s.anchors.add(i.anchor);s.inFlow=!0,s.inStringifyKey=!0;const a=n.toString(s);if(!t.mapKeyWarned){let i=JSON.stringify(a);i.length>40&&(i=i.substring(0,36)+'..."'),Ui(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return a}return JSON.stringify(e)}function Rn(n,e,t){const s=Tt(n,void 0,t),a=Tt(e,void 0,t);return new ae(s,a)}class ae{constructor(e,t=null){Object.defineProperty(this,se,{value:bs}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return B(t)&&(t=t.clone(e)),B(s)&&(s=s.clone(e)),new ae(t,s)}toJSON(e,t){const s=t!=null&&t.mapAsMap?new Map:{};return As(t,s,this)}toString(e,t,s){return e!=null&&e.doc?Bi(this,e,t,s):JSON.stringify(this)}}function Cs(n,e,t){return(e.inFlow??n.flow?Yi:Ji)(n,e,t)}function Ji({comment:n,items:e},t,{blockItemPrefix:s,flowChars:a,itemIndent:i,onChompKeep:r,onComment:o}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:i,type:null});let d=!1;const f=[];for(let m=0;m<e.length;++m){const g=e[m];let y=null;if(B(g))!d&&g.spaceBefore&&f.push(""),Rt(t,f,g.commentBefore,d),g.comment&&(y=g.comment);else if(G(g)){const w=B(g.key)?g.key:null;w&&(!d&&w.spaceBefore&&f.push(""),Rt(t,f,w.commentBefore,d))}d=!1;let k=Ot(g,u,()=>y=null,()=>d=!0);y&&(k+=Ge(k,i,c(y))),d&&y&&(d=!1),f.push(s+k)}let p;if(f.length===0)p=a.start+a.end;else{p=f[0];for(let m=1;m<f.length;++m){const g=f[m];p+=g?`
${l}${g}`:`
`}}return n?(p+=`
`+lt(c(n),l),o&&o()):d&&r&&r(),p}function Yi({items:n},e,{flowChars:t,itemIndent:s}){const{indent:a,indentStep:i,flowCollectionPadding:r,options:{commentString:o}}=e;s+=i;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,u=0;const d=[];for(let m=0;m<n.length;++m){const g=n[m];let y=null;if(B(g))g.spaceBefore&&d.push(""),Rt(e,d,g.commentBefore,!1),g.comment&&(y=g.comment);else if(G(g)){const w=B(g.key)?g.key:null;w&&(w.spaceBefore&&d.push(""),Rt(e,d,w.commentBefore,!1),w.comment&&(c=!0));const v=B(g.value)?g.value:null;v?(v.comment&&(y=v.comment),v.commentBefore&&(c=!0)):g.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(c=!0);let k=Ot(g,l,()=>y=null);m<n.length-1&&(k+=","),y&&(k+=Ge(k,s,o(y))),!c&&(d.length>u||k.includes(`
`))&&(c=!0),d.push(k),u=d.length}const{start:f,end:p}=t;if(d.length===0)return f+p;if(!c){const m=d.reduce((g,y)=>g+y.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=f;for(const g of d)m+=g?`
${i}${a}${g}`:`
`;return`${m}
${a}${p}`}else return`${f}${r}${d.join(" ")}${r}${p}`}function Rt({indent:n,options:{commentString:e}},t,s,a){if(s&&a&&(s=s.replace(/^\n+/,"")),s){const i=lt(e(s),n);t.push(i.trimStart())}}function Pe(n,e){const t=H(e)?e.value:e;for(const s of n)if(G(s)&&(s.key===e||s.key===t||H(s.key)&&s.key.value===t))return s}class je extends On{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super($e,e),this.items=[]}static from(e,t,s){const{keepUndefined:a,replacer:i}=s,r=new this(e),o=(l,c)=>{if(typeof i=="function")c=i.call(t,l,c);else if(Array.isArray(i)&&!i.includes(l))return;(c!==void 0||a)&&r.items.push(Rn(l,c,s))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){var r;let s;G(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new ae(e,e==null?void 0:e.value):s=new ae(e.key,e.value);const a=Pe(this.items,s.key),i=(r=this.schema)==null?void 0:r.sortMapEntries;if(a){if(!t)throw new Error(`Key ${s.key} already set`);H(a.value)&&Ls(s.value)?a.value.value=s.value:a.value=s.value}else if(i){const o=this.items.findIndex(l=>i(s,l)<0);o===-1?this.items.push(s):this.items.splice(o,0,s)}else this.items.push(s)}delete(e){const t=Pe(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=Pe(this.items,e),a=s==null?void 0:s.value;return(!t&&H(a)?a.value:a)??void 0}has(e){return!!Pe(this.items,e)}set(e,t){this.add(new ae(e,t),!0)}toJSON(e,t,s){const a=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(a);for(const i of this.items)As(t,a,i);return a}toString(e,t,s){if(!e)return JSON.stringify(this);for(const a of this.items)if(!G(a))throw new Error(`Map items must all be pairs; found ${JSON.stringify(a)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Cs(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}class Ts extends On{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(ct,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=dt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=dt(e);if(typeof s!="number")return;const a=this.items[s];return!t&&H(a)?a.value:a}has(e){const t=dt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=dt(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const a=this.items[s];H(a)&&Ls(t)?a.value=t:this.items[s]=t}toJSON(e,t){const s=[];t!=null&&t.onCreate&&t.onCreate(s);let a=0;for(const i of this.items)s.push(X(i,String(a++),t));return s}toString(e,t,s){return e?Cs(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:a}=s,i=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let o of t){if(typeof a=="function"){const l=t instanceof Set?o:String(r++);o=a.call(t,l,o)}i.items.push(Tt(o,void 0,s))}}return i}}function dt(n){let e=H(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Qi(n,e,t){const{replacer:s}=t,a=new Ts(n);a.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof s=="function"&&(r=s.call(e,String(i++),r));let o,l;if(Array.isArray(r))if(r.length===2)o=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const c=Object.keys(r);if(c.length===1)o=c[0],l=r[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=r;a.items.push(Rn(o,l,t))}return a}class En extends Ts{constructor(){super(),this.add=je.prototype.add.bind(this),this.delete=je.prototype.delete.bind(this),this.get=je.prototype.get.bind(this),this.has=je.prototype.has.bind(this),this.set=je.prototype.set.bind(this),this.tag=En.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(const a of this.items){let i,r;if(G(a)?(i=X(a.key,"",t),r=X(a.value,i,t)):i=X(a,"",t),s.has(i))throw new Error("Ordered maps must not include duplicate keys");s.set(i,r)}return s}static from(e,t,s){const a=Qi(e,t,s),i=new this;return i.items=a.items,i}}En.tag="tag:yaml.org,2002:omap";class Pn extends je{constructor(e){super(e),this.tag=Pn.tag}add(e){let t;G(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ae(e.key,null):t=new ae(e,null),Pe(this.items,t.key)||this.items.push(t)}get(e,t){const s=Pe(this.items,e);return!t&&G(s)?H(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=Pe(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new ae(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:a}=s,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof a=="function"&&(r=a.call(t,r,r)),i.items.push(Rn(r,null,s));return i}}Pn.tag="tag:yaml.org,2002:set";function Zi(n,e){if(!e||e==="all"||e==="*")return xn(1,n+1);if(e==="none")return[];const t=[];for(const s of e.split(/[,;]/g))if(!s.includes("-"))t.push(+s);else{const[a,i]=s.split("-",2);t.push(...xn(+a,i?+i+1:n+1))}return _a(t).filter(s=>s<=n).sort((s,a)=>s-a)}function Xo(){const n=C(Date.now()),e=Qs({interval:1e3}),t=h(()=>{const a=(e.value-n.value)/1e3,i=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${i}`});function s(){n.value=e.value}return{timer:t,resetTimer:s}}function $n(n=5){const e=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=t.length;for(let a=0;a<n;a++)e.push(t.charAt(Math.floor(Math.random()*s)));return e.join("")}function el(n,e,t,s){const a=Zi(e+t-1,n);for(let i=0;i<e;i++){const r=s(i),o=a.includes(i+t);for(const l of r)l.classList.toggle("slidev-code-highlighted",o),l.classList.toggle("slidev-code-dishonored",!o),l.classList.toggle("highlighted",o),l.classList.toggle("dishonored",!o)}}const Xi="modulepreload",er=function(n){return"/genaiscript/slides/pnw-plse-may2024/"+n},Kn={},R=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.all(t.map(o=>{if(o=er(o),o in Kn)return;Kn[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Xi,l||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return a.then(()=>e()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})},Os=(n,e)=>{const t=n.__vccOpts||n;for(const[s,a]of e)t[s]=a;return t},tr={},nr={class:"px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono"};function sr(n,e){return ls(),Zs("div",nr," An error occurred on this slide. Check the terminal for more information. ")}const ar=Os(tr,[["render",sr],["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/layouts/error.vue"]]),D=Object.freeze(Object.defineProperty({__proto__:null,default:ar},Symbol.toStringTag,{value:"Module"})),le=_({theme:"default",title:"GenAIScript",titleTemplate:"%s",favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",info:`## GenAIScript
Scripting for Generative AI.<br/>
[Docs](https://microsoft.github.io/genaiscript/) | [GitHub](https://github.com/microsoft/genaiscript/)
`,class:"text-center",highlighter:"shiki",drawings:{persist:!1},mdc:!0,layout:"center"}),ir=_({layout:h(()=>le.layout),transition:h(()=>le.transition),class:h(()=>le.class),clicks:h(()=>le.clicks),name:h(()=>le.name),preload:h(()=>le.preload),slide:{index:0,content:"",note:"",title:"GenAIScript",noteHTML:"",raw:"",frontmatter:le,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",start:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),ce=_({layout:"two-cols-header",backgroundSize:"20em 70%"}),rr=_({layout:h(()=>ce.layout),transition:h(()=>ce.transition),class:h(()=>ce.class),clicks:h(()=>ce.clicks),name:h(()=>ce.name),preload:h(()=>ce.preload),slide:{index:1,importChain:[{raw:`---
src: pages/aisw-intro2.md
---
`,content:"",frontmatter:{src:"pages/aisw-intro2.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/aisw-intro2.md"},frontmatterRaw:`src: pages/aisw-intro2.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:1,start:43,contentStart:46,end:47,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2.md",index:0,start:0,contentStart:4,end:18}]}],content:"",note:"",title:"AI Requires Us to Rethink Software",level:1,noteHTML:"",raw:"",frontmatter:ce,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2.md",start:0,id:1,no:2},__clicksContext:null,__preloaded:!1}),ue=_({layout:"two-cols-header",backgroundSize:"20em 70%"}),or=_({layout:h(()=>ue.layout),transition:h(()=>ue.transition),class:h(()=>ue.class),clicks:h(()=>ue.clicks),name:h(()=>ue.name),preload:h(()=>ue.preload),slide:{index:2,importChain:[{raw:`---
src: pages/aisw-intro2-p10.md
---
`,content:"",frontmatter:{src:"pages/aisw-intro2-p10.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/aisw-intro2-p10.md"},frontmatterRaw:`src: pages/aisw-intro2-p10.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:2,start:47,contentStart:50,end:51,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2-p10.md",index:0,start:0,contentStart:4,end:15}]}],content:"",note:"",title:"AI Requires Us to Rethink Software",level:1,noteHTML:"",raw:"",frontmatter:ue,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro2-p10.md",start:0,id:2,no:3},__clicksContext:null,__preloaded:!1}),de=_({layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"}),lr=_({layout:h(()=>de.layout),transition:h(()=>de.transition),class:h(()=>de.class),clicks:h(()=>de.clicks),name:h(()=>de.name),preload:h(()=>de.preload),slide:{index:3,importChain:[{raw:`---
src: pages/vision.md
---
`,content:"",frontmatter:{src:"pages/vision.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vision.md"},frontmatterRaw:`src: pages/vision.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:3,start:51,contentStart:54,end:55,imports:[{raw:`---
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

`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",index:0,start:0,contentStart:6,end:23}]}],content:"",note:"",title:"Empower Users with AI-Enhanced Scripts",level:1,noteHTML:"",raw:"",frontmatter:de,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",start:0,id:3,no:4},__clicksContext:null,__preloaded:!1}),fe=_({layout:"two-cols-header"}),cr=_({layout:h(()=>fe.layout),transition:h(()=>fe.transition),class:h(()=>fe.class),clicks:h(()=>fe.clicks),name:h(()=>fe.name),preload:h(()=>fe.preload),slide:{index:4,importChain:[{raw:`---
src: pages/example-gpt-v.md
---
`,content:"",frontmatter:{src:"pages/example-gpt-v.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/example-gpt-v.md"},frontmatterRaw:`src: pages/example-gpt-v.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:4,start:55,contentStart:58,end:59,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v.md",index:0,start:0,contentStart:3,end:33}]}],content:"",note:"",title:"GenAIScript Example: Translate Any Diagram to Text",level:1,noteHTML:"",raw:"",frontmatter:fe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v.md",start:0,id:4,no:5},__clicksContext:null,__preloaded:!1}),pe=_({layout:"two-cols-header",backgroundSize:"20em 70%"}),ur=_({layout:h(()=>pe.layout),transition:h(()=>pe.transition),class:h(()=>pe.class),clicks:h(()=>pe.clicks),name:h(()=>pe.name),preload:h(()=>pe.preload),slide:{index:5,importChain:[{raw:`---
src: pages/example-gpt-v-result.md
---
`,content:"",frontmatter:{src:"pages/example-gpt-v-result.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/example-gpt-v-result.md"},frontmatterRaw:`src: pages/example-gpt-v-result.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:5,start:59,contentStart:62,end:63,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v-result.md",index:0,start:0,contentStart:4,end:20}]}],content:"",note:"",title:"Example: Script Result",level:1,noteHTML:"",raw:"",frontmatter:pe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v-result.md",start:0,id:5,no:6},__clicksContext:null,__preloaded:!1}),he=_({layout:"two-cols-header"}),dr=_({layout:h(()=>he.layout),transition:h(()=>he.transition),class:h(()=>he.class),clicks:h(()=>he.clicks),name:h(()=>he.name),preload:h(()=>he.preload),slide:{index:6,importChain:[{raw:`---
src: pages/alt-text-deploy.md
---
`,content:"",frontmatter:{src:"pages/alt-text-deploy.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/alt-text-deploy.md"},frontmatterRaw:`src: pages/alt-text-deploy.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:6,start:63,contentStart:66,end:67,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/alt-text-deploy.md",index:0,start:0,contentStart:3,end:41}]}],content:"",note:"",title:"Script Automation for Alt-Text",level:1,noteHTML:"",raw:"",frontmatter:he,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/alt-text-deploy.md",start:0,id:6,no:7},__clicksContext:null,__preloaded:!1}),me=_({layout:"image-left",image:"/genaiscript-flow.png",backgroundSize:"100%"}),fr=_({layout:h(()=>me.layout),transition:h(()=>me.transition),class:h(()=>me.class),clicks:h(()=>me.clicks),name:h(()=>me.name),preload:h(()=>me.preload),slide:{index:7,importChain:[{raw:`---
src: pages/abstractions.md
---
`,content:"",frontmatter:{src:"pages/abstractions.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/abstractions.md"},frontmatterRaw:`src: pages/abstractions.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:7,start:67,contentStart:70,end:71,imports:[{raw:`---
layout: image-left
image: /genaiscript-flow.png
backgroundSize:  100%
---

# Key Script Elements

## Variables
- \`def\`defines context, variables in prompt
    -


## Easy to integrate context
- Support for numerous file types(.md, .docx, .pdf, ...)
    -

## Output specifications

-  Train LLM about "microformats"
    -
-  Runtime parses output
    -



`,title:"Key Script Elements",level:1,content:`# Key Script Elements

## Variables
- \`def\`defines context, variables in prompt
    -


## Easy to integrate context
- Support for numerous file types(.md, .docx, .pdf, ...)
    -

## Output specifications

-  Train LLM about "microformats"
    -
-  Runtime parses output
    -`,frontmatter:{layout:"image-left",image:"/genaiscript-flow.png",backgroundSize:"100%"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"image-left",image:"/genaiscript-flow.png",backgroundSize:"100%"},frontmatterRaw:`layout: image-left
image: /genaiscript-flow.png
backgroundSize:  100%
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/abstractions.md",index:0,start:0,contentStart:5,end:27}]}],content:"",note:"",title:"Key Script Elements",level:1,noteHTML:"",raw:"",frontmatter:me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/abstractions.md",start:0,id:7,no:8},__clicksContext:null,__preloaded:!1}),ge=_({}),pr=_({layout:h(()=>ge.layout),transition:h(()=>ge.transition),class:h(()=>ge.class),clicks:h(()=>ge.clicks),name:h(()=>ge.name),preload:h(()=>ge.preload),slide:{index:8,importChain:[{raw:`---
src: pages/other-features.md
---
`,content:"",frontmatter:{src:"pages/other-features.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/other-features.md"},frontmatterRaw:`src: pages/other-features.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:8,start:71,contentStart:74,end:75,imports:[{raw:`#  Other Features of GenAIScript

- Extensive support/integration with VS Code 
    -

<br/>

-  Support for debugging LLM trace
    -
<br/>

- Export script to command line, automation integration (like GitHub actions)
    -
<br/>

- Supports multiple LLMs, including local SLMs like phi3
    - 
<br/>

- Support for declaring/running tests
    -
<br/>

- Able to define/check output schemas (JSON, etc.)
    -
<br/>


`,title:"Other Features of GenAIScript",level:1,content:`#  Other Features of GenAIScript

- Extensive support/integration with VS Code 
    -

<br/>

-  Support for debugging LLM trace
    -
<br/>

- Export script to command line, automation integration (like GitHub actions)
    -
<br/>

- Supports multiple LLMs, including local SLMs like phi3
    - 
<br/>

- Support for declaring/running tests
    -
<br/>

- Able to define/check output schemas (JSON, etc.)
    -
<br/>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/other-features.md",index:0,start:0,contentStart:0,end:29}]}],content:"",note:"",title:"Other Features of GenAIScript",level:1,noteHTML:"",raw:"",frontmatter:ge,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/other-features.md",start:0,id:8,no:9},__clicksContext:null,__preloaded:!1}),ye=_({}),hr=_({layout:h(()=>ye.layout),transition:h(()=>ye.transition),class:h(()=>ye.class),clicks:h(()=>ye.clicks),name:h(()=>ye.name),preload:h(()=>ye.preload),slide:{index:9,importChain:[{raw:`---
src: pages/stack-2.md
---
`,content:"",frontmatter:{src:"pages/stack-2.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/stack-2.md"},frontmatterRaw:`src: pages/stack-2.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:9,start:75,contentStart:78,end:79,imports:[{raw:`<p></p>

![](/system-stack-2.png)
#### See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/`,title:"See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/",level:4,content:`<p></p>

![](/system-stack-2.png)
#### See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2.md",index:0,start:0,contentStart:0,end:4}]}],content:"",note:"",title:"See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/",level:4,noteHTML:"",raw:"",frontmatter:ye,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2.md",start:0,id:9,no:10},__clicksContext:null,__preloaded:!1}),ke=_({}),mr=_({layout:h(()=>ke.layout),transition:h(()=>ke.transition),class:h(()=>ke.class),clicks:h(()=>ke.clicks),name:h(()=>ke.name),preload:h(()=>ke.preload),slide:{index:10,importChain:[{raw:`---
src: pages/research-topics.md
---
`,content:"",frontmatter:{src:"pages/research-topics.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/research-topics.md"},frontmatterRaw:`src: pages/research-topics.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:10,start:79,contentStart:82,end:83,imports:[{raw:`# Research Challenges for GenAIScript
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
    - Verifying correct generations`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/research-topics.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Research Challenges for GenAIScript",level:1,noteHTML:"",raw:"",frontmatter:ke,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/research-topics.md",start:0,id:10,no:11},__clicksContext:null,__preloaded:!1}),we=_({}),gr=_({layout:h(()=>we.layout),transition:h(()=>we.transition),class:h(()=>we.class),clicks:h(()=>we.clicks),name:h(()=>we.name),preload:h(()=>we.preload),slide:{index:11,importChain:[{raw:`---
src: pages/summary.md
---

`,content:"",frontmatter:{src:"pages/summary.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/summary.md"},frontmatterRaw:`src: pages/summary.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:11,start:83,contentStart:86,end:88,imports:[{raw:`# Summary: GenAISCript Goals

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
<br/>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/summary.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"Summary: GenAISCript Goals",level:1,noteHTML:"",raw:"",frontmatter:we,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/summary.md",start:0,id:11,no:12},__clicksContext:null,__preloaded:!1}),ve=_({}),yr=_({layout:h(()=>ve.layout),transition:h(()=>ve.transition),class:h(()=>ve.class),clicks:h(()=>ve.clicks),name:h(()=>ve.name),preload:h(()=>ve.preload),slide:{index:12,importChain:[{raw:`---
src: pages/plse-match.md
---
`,content:"",frontmatter:{src:"pages/plse-match.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/plse-match.md"},frontmatterRaw:`src: pages/plse-match.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:12,start:88,contentStart:91,end:92,imports:[{raw:`

# Script - Who Should Talk to Who at PNW PLSE 2024

+ Manaal Basha (University of British Columbia) should talk to Sarah Fakhoury (Microsoft Research) about AI-assisted software development.
+ Laura Israel (Portland State University) should talk to Gabriel Ebner (Microsoft Research) about formal methods in programming.
+ Ian Kariniemi (Portland State University) should talk to Ben Zorn (Microsoft) about program analysis.
+ Marie Salomon (University of British Columbia) should talk to Shuvendu Lahiri (Microsoft Research) about AI for software development.
+ Amy Zhu (University of Washington) should talk to Paulette Koronkevich (University of British Columbia) about novel applications of programming languages.
+ Steve Ko (Simon Fraser University) should talk to Patrice Godefroid (Lacework) about software verification.
+ Jin Yang (Intel Labs) should talk to Finn Hackett (University of British Columbia) about hardware and software codesign.
+ Gus Smith (University of Washington) should talk to Yihong Zhang (University of Washington) about program synthesis.
+ Avery Laird (University of Toronto) should talk to Michal Moskal (Microsoft Research) about program translation.
+ Rui Ge (University of British Columbia) should talk to Jon Howell (VMWare Research Group) about formal verification.
+ Fatemah Fard (University of British Columbia) should talk to Stefan Heule (Uber Inc.) about knowledge transfer in code intelligence.
+ Sirui Lu (University of Washington) should talk to Brad Chamberlain (Hewlett Packard Enterprise (HPE)) about code synthesis for distributed computing.
+ Finn Hackett (University of British Columbia) should talk to Wolfram Schulte (SDF labs) about bridging design and implementation.
+ Andres Paz (University of Washington) should talk to Shauvik Roy Choudhary (Uber Inc.) about quantum computing and its applications in software engineering.
+ Ivan Beschastnikh (University of British Columbia) should talk to Alexandra Michael (University of Washington) about software development patterns.`,title:"Script - Who Should Talk to Who at PNW PLSE 2024",level:1,content:`# Script - Who Should Talk to Who at PNW PLSE 2024

+ Manaal Basha (University of British Columbia) should talk to Sarah Fakhoury (Microsoft Research) about AI-assisted software development.
+ Laura Israel (Portland State University) should talk to Gabriel Ebner (Microsoft Research) about formal methods in programming.
+ Ian Kariniemi (Portland State University) should talk to Ben Zorn (Microsoft) about program analysis.
+ Marie Salomon (University of British Columbia) should talk to Shuvendu Lahiri (Microsoft Research) about AI for software development.
+ Amy Zhu (University of Washington) should talk to Paulette Koronkevich (University of British Columbia) about novel applications of programming languages.
+ Steve Ko (Simon Fraser University) should talk to Patrice Godefroid (Lacework) about software verification.
+ Jin Yang (Intel Labs) should talk to Finn Hackett (University of British Columbia) about hardware and software codesign.
+ Gus Smith (University of Washington) should talk to Yihong Zhang (University of Washington) about program synthesis.
+ Avery Laird (University of Toronto) should talk to Michal Moskal (Microsoft Research) about program translation.
+ Rui Ge (University of British Columbia) should talk to Jon Howell (VMWare Research Group) about formal verification.
+ Fatemah Fard (University of British Columbia) should talk to Stefan Heule (Uber Inc.) about knowledge transfer in code intelligence.
+ Sirui Lu (University of Washington) should talk to Brad Chamberlain (Hewlett Packard Enterprise (HPE)) about code synthesis for distributed computing.
+ Finn Hackett (University of British Columbia) should talk to Wolfram Schulte (SDF labs) about bridging design and implementation.
+ Andres Paz (University of Washington) should talk to Shauvik Roy Choudhary (Uber Inc.) about quantum computing and its applications in software engineering.
+ Ivan Beschastnikh (University of British Columbia) should talk to Alexandra Michael (University of Washington) about software development patterns.`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/plse-match.md",index:0,start:0,contentStart:0,end:19}]}],content:"",note:"",title:"Script - Who Should Talk to Who at PNW PLSE 2024",level:1,noteHTML:"",raw:"",frontmatter:ve,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/plse-match.md",start:0,id:12,no:13},__clicksContext:null,__preloaded:!1}),be=_({}),kr=_({layout:h(()=>be.layout),transition:h(()=>be.transition),class:h(()=>be.class),clicks:h(()=>be.clicks),name:h(()=>be.name),preload:h(()=>be.preload),slide:{index:13,importChain:[{raw:`---
src: pages/questions.md
---
`,content:"",frontmatter:{src:"pages/questions.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/questions.md"},frontmatterRaw:`src: pages/questions.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:13,start:92,contentStart:95,end:96,imports:[{raw:`# Questions?
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
<br/>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/questions.md",index:0,start:0,contentStart:0,end:14}]}],content:"",note:"",title:"Questions?",level:1,noteHTML:"",raw:"",frontmatter:be,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/questions.md",start:0,id:13,no:14},__clicksContext:null,__preloaded:!1}),Se=_({}),wr=_({layout:h(()=>Se.layout),transition:h(()=>Se.transition),class:h(()=>Se.class),clicks:h(()=>Se.clicks),name:h(()=>Se.name),preload:h(()=>Se.preload),slide:{index:14,importChain:[{raw:`---
src: pages/backup.md
---
`,content:"",frontmatter:{src:"pages/backup.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/backup.md"},frontmatterRaw:`src: pages/backup.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:14,start:96,contentStart:99,end:100,imports:[{raw:`# Backup Slides
`,title:"Backup Slides",level:1,content:"# Backup Slides",frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/backup.md",index:0,start:0,contentStart:0,end:2}]}],content:"",note:"",title:"Backup Slides",level:1,noteHTML:"",raw:"",frontmatter:Se,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/backup.md",start:0,id:14,no:15},__clicksContext:null,__preloaded:!1}),_e=_({}),vr=_({layout:h(()=>_e.layout),transition:h(()=>_e.transition),class:h(()=>_e.class),clicks:h(()=>_e.clicks),name:h(()=>_e.name),preload:h(()=>_e.preload),slide:{index:15,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:15,start:100,contentStart:103,end:104,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Example: Translating MakeCode",level:1,noteHTML:"",raw:"",frontmatter:_e,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:0,id:15,no:16},__clicksContext:null,__preloaded:!1}),Le=_({}),br=_({layout:h(()=>Le.layout),transition:h(()=>Le.transition),class:h(()=>Le.class),clicks:h(()=>Le.clicks),name:h(()=>Le.name),preload:h(()=>Le.preload),slide:{index:16,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:15,start:100,contentStart:103,end:104,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Develop the script in VSCode",level:2,noteHTML:"",raw:"",frontmatter:Le,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:29,id:16,no:17},__clicksContext:null,__preloaded:!1}),Me=_({}),Sr=_({layout:h(()=>Me.layout),transition:h(()=>Me.transition),class:h(()=>Me.class),clicks:h(()=>Me.clicks),name:h(()=>Me.name),preload:h(()=>Me.preload),slide:{index:17,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:15,start:100,contentStart:103,end:104,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Automate with the CLI",level:2,noteHTML:"",raw:"",frontmatter:Me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:59,id:17,no:18},__clicksContext:null,__preloaded:!1}),Ae=_({layout:"image-right",image:"/makecode-translate-view.png",backgroundSize:"contain"}),_r=_({layout:h(()=>Ae.layout),transition:h(()=>Ae.transition),class:h(()=>Ae.class),clicks:h(()=>Ae.clicks),name:h(()=>Ae.name),preload:h(()=>Ae.preload),slide:{index:18,importChain:[{raw:`---
src: pages/makecode-timeline.md
---
`,content:"",frontmatter:{src:"pages/makecode-timeline.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-timeline.md"},frontmatterRaw:`src: pages/makecode-timeline.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:16,start:104,contentStart:107,end:108,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-timeline.md",index:0,start:0,contentStart:7,end:18}]}],content:"",note:"",title:"Timeline and Feedback",level:2,noteHTML:"",raw:"",frontmatter:Ae,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-timeline.md",start:0,id:18,no:19},__clicksContext:null,__preloaded:!1}),Ce=_({}),Lr=_({layout:h(()=>Ce.layout),transition:h(()=>Ce.transition),class:h(()=>Ce.class),clicks:h(()=>Ce.clicks),name:h(()=>Ce.name),preload:h(()=>Ce.preload),slide:{index:19,importChain:[{raw:`---
src: pages/script-vs-agent.md
---
`,content:"",frontmatter:{src:"pages/script-vs-agent.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-vs-agent.md"},frontmatterRaw:`src: pages/script-vs-agent.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:17,start:108,contentStart:111,end:112,imports:[{raw:`# GenAIScript and Agents
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
- We bound the use of the LLM to a specific single request`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-vs-agent.md",index:0,start:0,contentStart:0,end:16}]}],content:"",note:"",title:"GenAIScript and Agents",level:1,noteHTML:"",raw:"",frontmatter:Ce,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-vs-agent.md",start:0,id:19,no:20},__clicksContext:null,__preloaded:!1}),Te=_({}),Mr=_({layout:h(()=>Te.layout),transition:h(()=>Te.transition),class:h(()=>Te.class),clicks:h(()=>Te.clicks),name:h(()=>Te.name),preload:h(()=>Te.preload),slide:{index:20,importChain:[{raw:`---
src: pages/tla-plus.md
---
`,content:"",frontmatter:{src:"pages/tla-plus.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/tla-plus.md"},frontmatterRaw:`src: pages/tla-plus.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:18,start:112,contentStart:115,end:116,imports:[{raw:`# Example: TLA+ Linter

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",index:0,start:0,contentStart:0,end:31}]}],content:"",note:"",title:"Example: TLA+ Linter",level:1,noteHTML:"",raw:"",frontmatter:Te,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",start:0,id:20,no:21},__clicksContext:null,__preloaded:!1}),Oe=_({layout:"trace"}),Ar=_({layout:h(()=>Oe.layout),transition:h(()=>Oe.transition),class:h(()=>Oe.class),clicks:h(()=>Oe.clicks),name:h(()=>Oe.name),preload:h(()=>Oe.preload),slide:{index:21,importChain:[{raw:`---
src: pages/hockey-trace.md
---`,content:"",frontmatter:{src:"pages/hockey-trace.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/hockey-trace.md"},frontmatterRaw:`src: pages/hockey-trace.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-pnw-plse-may2024.md",index:19,start:116,contentStart:119,end:119,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/hockey-trace.md",index:0,start:0,contentStart:3,end:172}]}],content:"",note:"",title:"Hockey line assigment",level:1,noteHTML:"",raw:"",frontmatter:Oe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/hockey-trace.md",start:0,id:21,no:22},__clicksContext:null,__preloaded:!1}),Cr=[{no:1,meta:ir,component:async()=>{try{return await R(()=>import("./slidev/1-Fstva2_G.js"),__vite__mapDeps([0,1,2,3,4]))}catch(n){return console.error("Failed to load slide 1:",n),D}}},{no:2,meta:rr,component:async()=>{try{return await R(()=>import("./2-CT67uu6k.js"),__vite__mapDeps([5,6,1,2,7,8,9,3,4]))}catch(n){return console.error("Failed to load slide 2:",n),D}}},{no:3,meta:or,component:async()=>{try{return await R(()=>import("./3-Dy4Sd85X.js"),__vite__mapDeps([10,1,7,8,9,2,3,4]))}catch(n){return console.error("Failed to load slide 3:",n),D}}},{no:4,meta:lr,component:async()=>{try{return await R(()=>import("./slidev/4-B4ulG6mK.js"),__vite__mapDeps([11,6,1,2,12,13,3,4]))}catch(n){return console.error("Failed to load slide 4:",n),D}}},{no:5,meta:cr,component:async()=>{try{return await R(()=>import("./slidev/5-Ca8Ozvvt.js"),__vite__mapDeps([14,6,1,2,15,16,17,8,9,3,4]))}catch(n){return console.error("Failed to load slide 5:",n),D}}},{no:6,meta:ur,component:async()=>{try{return await R(()=>import("./slidev/6-KId2ZV0e.js"),__vite__mapDeps([18,1,17,8,9,2,3,4]))}catch(n){return console.error("Failed to load slide 6:",n),D}}},{no:7,meta:dr,component:async()=>{try{return await R(()=>import("./7-Ldi_GrdN.js"),__vite__mapDeps([19,6,1,2,15,16,8,9,3,4]))}catch(n){return console.error("Failed to load slide 7:",n),D}}},{no:8,meta:fr,component:async()=>{try{return await R(()=>import("./slidev/8-D1474aYd.js"),__vite__mapDeps([20,1,13,2,3,4]))}catch(n){return console.error("Failed to load slide 8:",n),D}}},{no:9,meta:pr,component:async()=>{try{return await R(()=>import("./slidev/9-BFBWFfFW.js"),__vite__mapDeps([21,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 9:",n),D}}},{no:10,meta:hr,component:async()=>{try{return await R(()=>import("./10-zChmdYlH.js"),__vite__mapDeps([23,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 10:",n),D}}},{no:11,meta:mr,component:async()=>{try{return await R(()=>import("./slidev/11-npqr-Xis.js"),__vite__mapDeps([24,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 11:",n),D}}},{no:12,meta:gr,component:async()=>{try{return await R(()=>import("./slidev/12-B8RNFNsf.js"),__vite__mapDeps([25,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 12:",n),D}}},{no:13,meta:yr,component:async()=>{try{return await R(()=>import("./slidev/13-AzO1im9D.js"),__vite__mapDeps([26,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 13:",n),D}}},{no:14,meta:kr,component:async()=>{try{return await R(()=>import("./slidev/14-DnvMJLbO.js"),__vite__mapDeps([27,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 14:",n),D}}},{no:15,meta:wr,component:async()=>{try{return await R(()=>import("./slidev/15-DPSZW5dZ.js"),__vite__mapDeps([28,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 15:",n),D}}},{no:16,meta:vr,component:async()=>{try{return await R(()=>import("./slidev/16-MngBg_po.js"),__vite__mapDeps([29,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 16:",n),D}}},{no:17,meta:br,component:async()=>{try{return await R(()=>import("./slidev/17-DHK3WUkh.js"),__vite__mapDeps([30,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 17:",n),D}}},{no:18,meta:Sr,component:async()=>{try{return await R(()=>import("./slidev/18-C_XLbrrG.js"),__vite__mapDeps([31,15,16,1,2,22,3,4]))}catch(n){return console.error("Failed to load slide 18:",n),D}}},{no:19,meta:_r,component:async()=>{try{return await R(()=>import("./slidev/19-z6LZr_e8.js"),__vite__mapDeps([32,1,12,13,2,3,4]))}catch(n){return console.error("Failed to load slide 19:",n),D}}},{no:20,meta:Lr,component:async()=>{try{return await R(()=>import("./slidev/20-gR2ZfWie.js"),__vite__mapDeps([33,1,22,2,3,4]))}catch(n){return console.error("Failed to load slide 20:",n),D}}},{no:21,meta:Mr,component:async()=>{try{return await R(()=>import("./slidev/21-B23rkNPO.js"),__vite__mapDeps([34,15,16,1,2,22,3,4]))}catch(n){return console.error("Failed to load slide 21:",n),D}}},{no:22,meta:Ar,component:async()=>{try{return await R(()=>import("./22-DxF2ioOl.js"),__vite__mapDeps([35,15,16,1,2,3,4]))}catch(n){return console.error("Failed to load slide 22:",n),D}}}],ne=vn(Cr);function zt(n){return ne.value.find(e=>{var t;return e.no===+n||((t=e.meta.slide)==null?void 0:t.frontmatter.routeAlias)===n})}function Ve(n,e){var s;(typeof n=="number"||typeof n=="string")&&(n=zt(n));const t=((s=n.meta.slide)==null?void 0:s.frontmatter.routeAlias)??n.no;return e?`/presenter/${t}`:`/${t}`}function Tr(n,e,{mode:t="replace"}={}){const s=xt();return h({get(){const a=s.currentRoute.value.query[n];return a==null?e:Array.isArray(a)?a.filter(Boolean):a},set(a){Mt(()=>{(s.currentRoute.value.query[n]??(e==null?void 0:e.toString()))!==a.toString()&&s[wn(t)]({query:{...s.currentRoute.value.query,[n]:`${a}`===e?void 0:a}})})}})}const ln=C(0);function cn(n){if(n===!1||n==="false")return null;if(n==null||n===!0||n==="true")return"+1";if(typeof n=="string"&&"+-".includes(n[0]))return n;const e=+n;return Number.isNaN(e)?(console.error(`Invalid "at" prop value: ${n}`),null):e}function Or(n){return Array.isArray(n)?[cn(n[0]),cn(n[1])]:null}function Rs(n,e=0,t){const s={get current(){return rt(+n.value,e,s.total)},set current(a){n.value=rt(+a,e,s.total)},clicksStart:e,relativeOffsets:new Map,maxMap:Xs(new Map),onMounted(){},calculateSince(a,i=1){const r=cn(a);if(r==null)return null;let o,l,c;if(typeof r=="string"){const u=s.currentOffset,d=+r;o=u+d,l=u+d+i-1,c=d+i-1}else o=r,l=r+i-1,c=0;return{start:o,end:+Number.POSITIVE_INFINITY,max:l,delta:c,currentOffset:h(()=>s.current-o),isCurrent:h(()=>s.current===o),isActive:h(()=>s.current>=o)}},calculateRange(a){const i=Or(a);if(i==null)return null;const[r,o]=i;let l,c,u;return typeof r=="string"?(l=s.currentOffset+ +r,u=+r):(l=r,u=0),typeof o=="string"?(c=l+ +o,u+=+o):c=o,{start:l,end:c,max:c,delta:u,currentOffset:h(()=>s.current-l),isCurrent:h(()=>s.current===l),isActive:h(()=>l<=s.current&&s.current<c)}},calculate(a){return Array.isArray(a)?s.calculateRange(a):s.calculateSince(a)},register(a,i){if(!i)return;const{delta:r,max:o}=i;s.relativeOffsets.set(a,r),s.maxMap.set(a,o)},unregister(a){s.relativeOffsets.delete(a),s.maxMap.delete(a)},get currentOffset(){return ln.value,va(...s.relativeOffsets.values())},get total(){return ln.value,t??Math.max(0,...s.maxMap.values())}};return s}function Rr(n,e=0){var s,a;const t=((s=n==null?void 0:n.meta.slide)==null?void 0:s.frontmatter.clicksStart)??0;return Rs(C(Math.max(e,t)),t,(a=n==null?void 0:n.meta)==null?void 0:a.clicks)}const Er={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Pr(n,e=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let t=n.name.includes("|")?n.name:Er[n.name]||n.name;if(t.includes("|")){const[s,a]=t.split("|").map(i=>i.trim());t=e?a:s}if(t)return{...n,name:t}}function $r(n,e,t){var a,i;let s=n>0?(a=t==null?void 0:t.meta)==null?void 0:a.transition:(i=e==null?void 0:e.meta)==null?void 0:i.transition;return s||(s=I.transition),Pr(s,n<0)}function Es(n,e,t=1){var a,i,r,o,l,c,u,d,f;const s=(i=(a=e.meta)==null?void 0:a.slide)==null?void 0:i.level;s&&s>t&&n.length>0?Es(n[n.length-1].children,e,t+1):n.push({no:e.no,children:[],level:t,path:Ve(((o=(r=e.meta.slide)==null?void 0:r.frontmatter)==null?void 0:o.routeAlias)??e.no,!1),hideInToc:!!((u=(c=(l=e.meta)==null?void 0:l.slide)==null?void 0:c.frontmatter)!=null&&u.hideInToc),title:(f=(d=e.meta)==null?void 0:d.slide)==null?void 0:f.title})}function Ps(n,e,t=!1,s,a){return n.map(i=>{const r={...i,active:i.no===(a==null?void 0:a.value),hasActiveParent:t};return r.children.length>0&&(r.children=Ps(r.children,e,r.active||r.hasActiveParent,r,a)),s&&(r.active||r.activeParent)&&(s.activeParent=!0),r})}function $s(n,e=1){return n.filter(t=>!t.hideInToc).map(t=>({...t,children:$s(t.children,e+1)}))}function Dr(n,e,t){const s=h(()=>n.value.filter(i=>{var r,o;return(o=(r=i.meta)==null?void 0:r.slide)==null?void 0:o.title}).reduce((i,r)=>(Es(i,r),i),[])),a=h(()=>Ps(s.value,t.value,void 0,void 0,e));return h(()=>$s(a.value))}function Ir(n,e,t=C(0),s,a,i){const r=h(()=>ne.value.length),o=C(0),l=C(0),c=h(()=>Ve(n.value,s.value)),u=h(()=>n.value.no),d=h(()=>{var x;return((x=n.value.meta)==null?void 0:x.layout)||(u.value===1?"cover":"default")}),f=h(()=>e.value.current),p=h(()=>e.value.clicksStart),m=h(()=>e.value.total),g=h(()=>ne.value[Math.min(ne.value.length,u.value+1)-1]),y=h(()=>ne.value[Math.max(1,u.value-1)-1]),k=h(()=>u.value<ne.value.length||f.value<m.value),w=h(()=>u.value>1||f.value>0),v=h(()=>$r(o.value,n.value,y.value));J(n,(x,j)=>{o.value=x.no-j.no});async function b(x){return!1}const M=Dr(ne,u,n);async function L(){l.value=1,m.value<=t.value?await E():t.value+=1}async function T(){l.value=-1,t.value<=p.value?await $(!0):t.value-=1}async function E(x=!1){l.value=1,await A(Math.min(u.value+1,ne.value.length),x&&!a.value?wt:void 0)}async function $(x=!1){l.value=-1,await A(Math.max(1,u.value-1),x&&!a.value?wt:void 0)}function F(){return A(1)}function te(){return A(r.value)}async function A(x,j=0,oe=!1){var Ke,Je,Ye;Ln.value=!1;const Q=u.value!==x,xe=j!==t.value,O=(Ke=zt(x))==null?void 0:Ke.meta,We=((Je=O==null?void 0:O.slide)==null?void 0:Je.frontmatter.clicksStart)??0;j=rt(j,We,((Ye=O==null?void 0:O.__clicksContext)==null?void 0:Ye.total)??wt),(oe||Q||xe)&&await(i==null?void 0:i.push({path:Ve(x,s.value),query:{...i.currentRoute.value.query,clicks:j===0?void 0:j.toString(),embedded:location.search.includes("embedded")?"true":void 0}}))}function P(){i==null||i.push({path:Ve(u.value,!0),query:{...i.currentRoute.value.query}})}function W(){i==null||i.push({path:Ve(u.value,!1),query:{...i.currentRoute.value.query}})}return{slides:ne,total:r,currentPath:c,currentSlideNo:u,currentPage:u,currentSlideRoute:n,currentLayout:d,currentTransition:v,clicksDirection:l,nextRoute:g,prevRoute:y,clicksContext:e,clicks:f,clicksStart:p,clicksTotal:m,hasNext:k,hasPrev:w,tocTree:M,navDirection:o,openInEditor:b,next:L,prev:T,go:A,goLast:te,goFirst:F,nextSlide:E,prevSlide:$,enterPresenter:P,exitPresenter:W}}const xr=cs(()=>{const n=xt(),e=h(()=>n.currentRoute.value),t=h(()=>(n.currentRoute.value.query,new URLSearchParams(location.search))),s=h(()=>t.value.has("print")),a=h(()=>t.value.get("print")==="clicks"),i=h(()=>t.value.has("embedded")),r=h(()=>e.value.name==="play"),o=h(()=>e.value.name==="presenter"),l=h(()=>e.value.name==="notes"),c=h(()=>!o.value&&(!I.remote||t.value.get("password")===I.remote)),u=ea(r,o),d=h(()=>{var k;return u.value?((k=zt(e.value.params.no))==null?void 0:k.no)??1:1}),f=h(()=>ne.value[d.value-1]),p=Tr("clicks","0"),m=h(()=>y(f.value)),g=h({get(){let k=+(p.value||0);return Number.isNaN(k)&&(k=0),k},set(k){Ln.value=!1,p.value=k.toString()}});function y(k){var b,M;if((b=k==null?void 0:k.meta)!=null&&b.__clicksContext)return k.meta.__clicksContext;const w=k.no,v=Rs(h({get(){return d.value===w?Math.max(+(p.value??0),v.clicksStart):d.value>w?wt:v.clicksStart},set(L){d.value===w&&(p.value=rt(L,v.clicksStart,v.total).toString())}}),((M=k==null?void 0:k.meta.slide)==null?void 0:M.frontmatter.clicksStart)??0,k==null?void 0:k.meta.clicks);return v.onMounted=()=>{d.value===w&&(p.value=rt(+p.value,v.clicksStart,v.total).toString())},k!=null&&k.meta&&(k.meta.__clicksContext=v),v}return{router:n,currentRoute:e,isPrintMode:s,isPrintWithClicks:a,isEmbedded:i,isPlaying:r,isPresenter:o,isNotesViewer:l,isPresenterAvailable:c,hasPrimarySlide:u,currentSlideNo:d,currentSlideRoute:f,clicksContext:m,queryClicksRaw:p,queryClicks:g,getPrimaryClicks:y}}),un=cs(()=>{const n=xr(),e=xt(),t=Ir(n.currentSlideRoute,n.clicksContext,n.queryClicks,n.isPresenter,n.isPrintMode,e);return J([t.total,n.currentRoute],async()=>{const s=n.currentRoute.value.params.no;n.hasPrimarySlide.value&&!zt(s)&&(s&&s!=="index.html"?await t.go(t.total.value,0,!0):await t.go(1,0,!0))},{flush:"pre",immediate:!0}),{...t,...n}}),Jn=ta(),Qt=ee("slidev-color-schema","auto"),Yn=h(()=>I.colorSchema!=="auto"),Ds=h({get(){return Yn.value?I.colorSchema==="dark":Qt.value==="auto"?Jn.value:Qt.value==="dark"},set(n){Yn.value||(Qt.value=n===Jn.value?"auto":n?"dark":"light")}}),tl=us(Ds);Wt&&J(Ds,n=>{const e=document.querySelector("html");e.classList.toggle("dark",n),e.classList.toggle("light",!n)},{immediate:!0});const Wr=[];function Nr(){const n=os().appContext.app,e=_({nav:un(),configs:I,themeConfigs:h(()=>I.themeConfig)});n.provide(_n,C("none")),n.provide(Li,e),n.provide(Sn,h(()=>e.nav.currentSlideNo)),n.provide(Nt,vn(Rr()));for(const u of Wr)u();const{clicksContext:t,currentSlideNo:s,hasPrimarySlide:a,isNotesViewer:i,isPresenter:r}=un();hi({title:Bt,htmlAttrs:I.htmlAttrs}),ki(`${Bt} - shared`),Si(`${Bt} - drawings`);const o=`${location.origin}_${$n()}`;function l(){i.value||!r.value&&!Ci.includes(location.host.split(":")[0])||(r.value?(Qe("page",+s.value),Qe("clicks",t.value.current)):(Qe("viewerPage",+s.value),Qe("viewerClicks",t.value.current)),Qe("lastUpdate",{id:o,type:r.value?"presenter":"viewer",time:new Date().getTime()}))}const c=xt();c.afterEach(l),J(t,l),wi(u=>{var d;a.value&&((d=u.lastUpdate)==null?void 0:d.type)==="presenter"&&(+u.page!=+s.value||+t.value.current!=+u.clicks)&&(Ln.value=!1,c.replace({path:Ve(u.page,r.value),query:{...c.currentRoute.value.query,clicks:u.clicks||0}}))})}const jr=na({__name:"App",setup(n){return Nr(),Be(()=>{for(const[e,t]of Object.entries(Ca.value))document.body.style.setProperty(e,t.toString())}),(e,t)=>{const s=sa("RouterView");return ls(),aa(s)}}}),Hr=Os(jr,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/App.vue"]]);function nl(n,e=""){var a,i;const t=["slidev-page",e],s=(i=(a=n==null?void 0:n.meta)==null?void 0:a.slide)==null?void 0:i.no;return s!=null&&t.push(`slidev-page-${s}`),t.filter(Boolean).join(" ")}async function sl(){const{saveAs:n}=await R(()=>import("./modules/file-saver-CvNQQnEe.js").then(e=>e.F),[]);n(typeof I.download=="string"?I.download:I.exportFilename?`${I.exportFilename}.pdf`:"/genaiscript/slides/pnw-plse-may2024/slidev-exported.pdf",`${I.title}.pdf`)}function Ue(n,e,t){var s;return((s=n.instance)==null?void 0:s.$).provides[e]??t}function Fr(){return{install(n){n.directive("click",{name:"v-click",mounted(e,t){const s=_t(e,t,t.value);s!=null&&(e.classList.toggle(kt,!0),e.dataset.slidevClicksStart=String(s.start),Number.isFinite(s.end)&&(e.dataset.slidevClicksEnd=String(s.end)),e.watchStopHandle=Be(()=>{const a=s.isActive.value,i=s.isCurrent.value,r=a&&!i;s.flagHide?(e.classList.toggle(s.flagFade?Xe:Ze,a),e.classList.toggle(qt,a)):e.classList.toggle(s.flagFade?Xe:Ze,!a),e.classList.toggle(Kt,i),e.classList.toggle(Jt,r)}))},unmounted:Zt}),n.directive("after",{name:"v-after",mounted(e,t){const s=_t(e,t,"+0");s!=null&&(e.classList.toggle(kt,!0),e.watchStopHandle=Be(()=>{const a=s.isActive.value,i=s.isCurrent.value,r=a&&!i;s.flagHide?(e.classList.toggle(s.flagFade?Xe:Ze,a),e.classList.toggle(qt,a)):e.classList.toggle(s.flagFade?Xe:Ze,!a),e.classList.toggle(Kt,i),e.classList.toggle(Jt,r)}))},unmounted:Zt}),n.directive("click-hide",{name:"v-click-hide",mounted(e,t){const s=_t(e,t,t.value,!0);s!=null&&(e.classList.toggle(kt,!0),e.watchStopHandle=Be(()=>{const a=s.isActive.value,i=s.isCurrent.value,r=a&&!i;e.classList.toggle(s.flagFade?Xe:Ze,a),e.classList.toggle(qt,a),e.classList.toggle(Kt,i),e.classList.toggle(Jt,r)}))},unmounted:Zt})}}}const Is=new Map;function _t(n,e,t,s=!1){var d;const a=(d=Ue(e,Nt))==null?void 0:d.value;if(!n||!a)return null;const i=s||e.modifiers.hide!==!1&&e.modifiers.hide!=null,r=e.modifiers.fade!==!1&&e.modifiers.fade!=null,o=a.calculate(t);if(!o)return null;a.register(n,o);const l=h(()=>i?!o.isActive.value:o.isActive.value),c=h(()=>l.value?"shown":Number.isFinite(o.end)?a.current<o.start?"before":"after":i?"after":"before"),u={...o,isShown:l,visibilityState:c,flagFade:r,flagHide:i};return Is.set(n,u),u}function Zt(n,e){var s,a;n.classList.toggle(kt,!1);const t=(s=Ue(e,Nt))==null?void 0:s.value;t==null||t.unregister(n),(a=n.watchStopHandle)==null||a.call(n)}function xs(){return Math.floor(Math.random()*2**31)}class Gr{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function dn(n,e,t){if(n&&n.length){const[s,a]=e,i=Math.PI/180*t,r=Math.cos(i),o=Math.sin(i);for(const l of n){const[c,u]=l;l[0]=(c-s)*r-(u-a)*o+s,l[1]=(c-s)*o+(u-a)*r+a}}}function zr(n,e,t){const s=[];n.forEach(a=>s.push(...a)),dn(s,e,t)}function Vr(n,e){return n[0]===e[0]&&n[1]===e[1]}function Br(n,e,t,s=1){const a=t,i=Math.max(e,.1),r=n[0]&&n[0][0]&&typeof n[0][0]=="number"?[n]:n,o=[0,0];if(a)for(const c of r)dn(c,o,a);const l=Ur(r,i,s);if(a){for(const c of r)dn(c,o,-a);zr(l,o,-a)}return l}function Ur(n,e,t){const s=[];for(const c of n){const u=[...c];Vr(u[0],u[u.length-1])||u.push([u[0][0],u[0][1]]),u.length>2&&s.push(u)}const a=[];e=Math.max(e,.1);const i=[];for(const c of s)for(let u=0;u<c.length-1;u++){const d=c[u],f=c[u+1];if(d[1]!==f[1]){const p=Math.min(d[1],f[1]);i.push({ymin:p,ymax:Math.max(d[1],f[1]),x:p===d[1]?d[0]:f[0],islope:(f[0]-d[0])/(f[1]-d[1])})}}if(i.sort((c,u)=>c.ymin<u.ymin?-1:c.ymin>u.ymin?1:c.x<u.x?-1:c.x>u.x?1:c.ymax===u.ymax?0:(c.ymax-u.ymax)/Math.abs(c.ymax-u.ymax)),!i.length)return a;let r=[],o=i[0].ymin,l=0;for(;r.length||i.length;){if(i.length){let c=-1;for(let d=0;d<i.length&&!(i[d].ymin>o);d++)c=d;i.splice(0,c+1).forEach(d=>{r.push({s:o,edge:d})})}if(r=r.filter(c=>!(c.edge.ymax<=o)),r.sort((c,u)=>c.edge.x===u.edge.x?0:(c.edge.x-u.edge.x)/Math.abs(c.edge.x-u.edge.x)),(t!==1||l%e===0)&&r.length>1)for(let c=0;c<r.length;c=c+2){const u=c+1;if(u>=r.length)break;const d=r[c].edge,f=r[u].edge;a.push([[Math.round(d.x),o],[Math.round(f.x),o]])}o+=t,r.forEach(c=>{c.edge.x=c.edge.x+t*c.edge.islope}),l++}return a}function ut(n,e){var t;const s=e.hachureAngle+90;let a=e.hachureGap;a<0&&(a=e.strokeWidth*4),a=Math.round(Math.max(a,.1));let i=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(i=a),Br(n,a,s,i||1)}class Dn{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const s=ut(e,t);return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){const s=[];for(const a of e)s.push(...this.helper.doubleLineOps(a[0][0],a[0][1],a[1][0],a[1][1],t));return s}}function Vt(n){const e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class qr extends Dn{fillPolygons(e,t){let s=t.hachureGap;s<0&&(s=t.strokeWidth*4),s=Math.max(s,.1);const a=Object.assign({},t,{hachureGap:s}),i=ut(e,a),r=Math.PI/180*t.hachureAngle,o=[],l=s*.5*Math.cos(r),c=s*.5*Math.sin(r);for(const[d,f]of i)Vt([d,f])&&o.push([[d[0]-l,d[1]+c],[...f]],[[d[0]+l,d[1]-c],[...f]]);return{type:"fillSketch",ops:this.renderLines(o,t)}}}class Kr extends Dn{fillPolygons(e,t){const s=this._fillPolygons(e,t),a=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),i=this._fillPolygons(e,a);return s.ops=s.ops.concat(i.ops),s}}class Jr{constructor(e){this.helper=e}fillPolygons(e,t){t=Object.assign({},t,{hachureAngle:0});const s=ut(e,t);return this.dotsOnLines(s,t)}dotsOnLines(e,t){const s=[];let a=t.hachureGap;a<0&&(a=t.strokeWidth*4),a=Math.max(a,.1);let i=t.fillWeight;i<0&&(i=t.strokeWidth/2);const r=a/4;for(const o of e){const l=Vt(o),c=l/a,u=Math.ceil(c)-1,d=l-u*a,f=(o[0][0]+o[1][0])/2-a/4,p=Math.min(o[0][1],o[1][1]);for(let m=0;m<u;m++){const g=p+d+m*a,y=f-r+Math.random()*2*r,k=g-r+Math.random()*2*r,w=this.helper.ellipse(y,k,i,i,t);s.push(...w.ops)}}return{type:"fillSketch",ops:s}}}class Yr{constructor(e){this.helper=e}fillPolygons(e,t){const s=ut(e,t);return{type:"fillSketch",ops:this.dashedLine(s,t)}}dashedLine(e,t){const s=t.dashOffset<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashOffset,a=t.dashGap<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashGap,i=[];return e.forEach(r=>{const o=Vt(r),l=Math.floor(o/(s+a)),c=(o+a-l*(s+a))/2;let u=r[0],d=r[1];u[0]>d[0]&&(u=r[1],d=r[0]);const f=Math.atan((d[1]-u[1])/(d[0]-u[0]));for(let p=0;p<l;p++){const m=p*(s+a),g=m+s,y=[u[0]+m*Math.cos(f)+c*Math.cos(f),u[1]+m*Math.sin(f)+c*Math.sin(f)],k=[u[0]+g*Math.cos(f)+c*Math.cos(f),u[1]+g*Math.sin(f)+c*Math.sin(f)];i.push(...this.helper.doubleLineOps(y[0],y[1],k[0],k[1],t))}}),i}}class Qr{constructor(e){this.helper=e}fillPolygons(e,t){const s=t.hachureGap<0?t.strokeWidth*4:t.hachureGap,a=t.zigzagOffset<0?s:t.zigzagOffset;t=Object.assign({},t,{hachureGap:s+a});const i=ut(e,t);return{type:"fillSketch",ops:this.zigzagLines(i,a,t)}}zigzagLines(e,t,s){const a=[];return e.forEach(i=>{const r=Vt(i),o=Math.round(r/(2*t));let l=i[0],c=i[1];l[0]>c[0]&&(l=i[1],c=i[0]);const u=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let d=0;d<o;d++){const f=d*2*t,p=(d+1)*2*t,m=Math.sqrt(2*Math.pow(t,2)),g=[l[0]+f*Math.cos(u),l[1]+f*Math.sin(u)],y=[l[0]+p*Math.cos(u),l[1]+p*Math.sin(u)],k=[g[0]+m*Math.cos(u+Math.PI/4),g[1]+m*Math.sin(u+Math.PI/4)];a.push(...this.helper.doubleLineOps(g[0],g[1],k[0],k[1],s),...this.helper.doubleLineOps(k[0],k[1],y[0],y[1],s))}}),a}}const z={};function Zr(n,e){let t=n.fillStyle||"hachure";if(!z[t])switch(t){case"zigzag":z[t]||(z[t]=new qr(e));break;case"cross-hatch":z[t]||(z[t]=new Kr(e));break;case"dots":z[t]||(z[t]=new Jr(e));break;case"dashed":z[t]||(z[t]=new Yr(e));break;case"zigzag-line":z[t]||(z[t]=new Qr(e));break;case"hachure":default:t="hachure",z[t]||(z[t]=new Dn(e));break}return z[t]}const Xr=0,fn=1,Ws=2,ft={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function eo(n){const e=new Array;for(;n!=="";)if(n.match(/^([ \t\r\n,]+)/))n=n.substr(RegExp.$1.length);else if(n.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:Xr,text:RegExp.$1},n=n.substr(RegExp.$1.length);else if(n.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))e[e.length]={type:fn,text:`${parseFloat(RegExp.$1)}`},n=n.substr(RegExp.$1.length);else return[];return e[e.length]={type:Ws,text:""},e}function Xt(n,e){return n.type===e}function In(n){const e=[],t=eo(n);let s="BOD",a=0,i=t[a];for(;!Xt(i,Ws);){let r=0;const o=[];if(s==="BOD")if(i.text==="M"||i.text==="m")a++,r=ft[i.text],s=i.text;else return In("M0,0"+n);else Xt(i,fn)?r=ft[s]:(a++,r=ft[i.text],s=i.text);if(a+r<t.length){for(let l=a;l<a+r;l++){const c=t[l];if(Xt(c,fn))o[o.length]=+c.text;else throw new Error("Param not a number: "+s+","+c.text)}if(typeof ft[s]=="number"){const l={key:s,data:o};e.push(l),a+=r,i=t[a],s==="M"&&(s="L"),s==="m"&&(s="l")}else throw new Error("Bad segment: "+s)}else throw new Error("Path data ended short")}return e}function Ns(n){let e=0,t=0,s=0,a=0;const i=[];for(const{key:r,data:o}of n)switch(r){case"M":i.push({key:"M",data:[...o]}),[e,t]=o,[s,a]=o;break;case"m":e+=o[0],t+=o[1],i.push({key:"M",data:[e,t]}),s=e,a=t;break;case"L":i.push({key:"L",data:[...o]}),[e,t]=o;break;case"l":e+=o[0],t+=o[1],i.push({key:"L",data:[e,t]});break;case"C":i.push({key:"C",data:[...o]}),e=o[4],t=o[5];break;case"c":{const l=o.map((c,u)=>u%2?c+t:c+e);i.push({key:"C",data:l}),e=l[4],t=l[5];break}case"Q":i.push({key:"Q",data:[...o]}),e=o[2],t=o[3];break;case"q":{const l=o.map((c,u)=>u%2?c+t:c+e);i.push({key:"Q",data:l}),e=l[2],t=l[3];break}case"A":i.push({key:"A",data:[...o]}),e=o[5],t=o[6];break;case"a":e+=o[5],t+=o[6],i.push({key:"A",data:[o[0],o[1],o[2],o[3],o[4],e,t]});break;case"H":i.push({key:"H",data:[...o]}),e=o[0];break;case"h":e+=o[0],i.push({key:"H",data:[e]});break;case"V":i.push({key:"V",data:[...o]}),t=o[0];break;case"v":t+=o[0],i.push({key:"V",data:[t]});break;case"S":i.push({key:"S",data:[...o]}),e=o[2],t=o[3];break;case"s":{const l=o.map((c,u)=>u%2?c+t:c+e);i.push({key:"S",data:l}),e=l[2],t=l[3];break}case"T":i.push({key:"T",data:[...o]}),e=o[0],t=o[1];break;case"t":e+=o[0],t+=o[1],i.push({key:"T",data:[e,t]});break;case"Z":case"z":i.push({key:"Z",data:[]}),e=s,t=a;break}return i}function js(n){const e=[];let t="",s=0,a=0,i=0,r=0,o=0,l=0;for(const{key:c,data:u}of n){switch(c){case"M":e.push({key:"M",data:[...u]}),[s,a]=u,[i,r]=u;break;case"C":e.push({key:"C",data:[...u]}),s=u[4],a=u[5],o=u[2],l=u[3];break;case"L":e.push({key:"L",data:[...u]}),[s,a]=u;break;case"H":s=u[0],e.push({key:"L",data:[s,a]});break;case"V":a=u[0],e.push({key:"L",data:[s,a]});break;case"S":{let d=0,f=0;t==="C"||t==="S"?(d=s+(s-o),f=a+(a-l)):(d=s,f=a),e.push({key:"C",data:[d,f,...u]}),o=u[0],l=u[1],s=u[2],a=u[3];break}case"T":{const[d,f]=u;let p=0,m=0;t==="Q"||t==="T"?(p=s+(s-o),m=a+(a-l)):(p=s,m=a);const g=s+2*(p-s)/3,y=a+2*(m-a)/3,k=d+2*(p-d)/3,w=f+2*(m-f)/3;e.push({key:"C",data:[g,y,k,w,d,f]}),o=p,l=m,s=d,a=f;break}case"Q":{const[d,f,p,m]=u,g=s+2*(d-s)/3,y=a+2*(f-a)/3,k=p+2*(d-p)/3,w=m+2*(f-m)/3;e.push({key:"C",data:[g,y,k,w,p,m]}),o=d,l=f,s=p,a=m;break}case"A":{const d=Math.abs(u[0]),f=Math.abs(u[1]),p=u[2],m=u[3],g=u[4],y=u[5],k=u[6];d===0||f===0?(e.push({key:"C",data:[s,a,y,k,y,k]}),s=y,a=k):(s!==y||a!==k)&&(Hs(s,a,y,k,d,f,p,m,g).forEach(function(v){e.push({key:"C",data:v})}),s=y,a=k);break}case"Z":e.push({key:"Z",data:[]}),s=i,a=r;break}t=c}return e}function to(n){return Math.PI*n/180}function et(n,e,t){const s=n*Math.cos(t)-e*Math.sin(t),a=n*Math.sin(t)+e*Math.cos(t);return[s,a]}function Hs(n,e,t,s,a,i,r,o,l,c){const u=to(r);let d=[],f=0,p=0,m=0,g=0;if(c)[f,p,m,g]=c;else{[n,e]=et(n,e,-u),[t,s]=et(t,s,-u);const A=(n-t)/2,P=(e-s)/2;let W=A*A/(a*a)+P*P/(i*i);W>1&&(W=Math.sqrt(W),a=W*a,i=W*i);const x=o===l?-1:1,j=a*a,oe=i*i,Q=j*oe-j*P*P-oe*A*A,xe=j*P*P+oe*A*A,O=x*Math.sqrt(Math.abs(Q/xe));m=O*a*P/i+(n+t)/2,g=O*-i*A/a+(e+s)/2,f=Math.asin(parseFloat(((e-g)/i).toFixed(9))),p=Math.asin(parseFloat(((s-g)/i).toFixed(9))),n<m&&(f=Math.PI-f),t<m&&(p=Math.PI-p),f<0&&(f=Math.PI*2+f),p<0&&(p=Math.PI*2+p),l&&f>p&&(f=f-Math.PI*2),!l&&p>f&&(p=p-Math.PI*2)}let y=p-f;if(Math.abs(y)>Math.PI*120/180){const A=p,P=t,W=s;l&&p>f?p=f+Math.PI*120/180*1:p=f+Math.PI*120/180*-1,t=m+a*Math.cos(p),s=g+i*Math.sin(p),d=Hs(t,s,P,W,a,i,r,0,l,[p,A,m,g])}y=p-f;const k=Math.cos(f),w=Math.sin(f),v=Math.cos(p),b=Math.sin(p),M=Math.tan(y/4),L=4/3*a*M,T=4/3*i*M,E=[n,e],$=[n+L*w,e-T*k],F=[t+L*b,s-T*v],te=[t,s];if($[0]=2*E[0]-$[0],$[1]=2*E[1]-$[1],c)return[$,F,te].concat(d);{d=[$,F,te].concat(d);const A=[];for(let P=0;P<d.length;P+=3){const W=et(d[P][0],d[P][1],u),x=et(d[P+1][0],d[P+1][1],u),j=et(d[P+2][0],d[P+2][1],u);A.push([W[0],W[1],x[0],x[1],j[0],j[1]])}return A}}const no={randOffset:io,randOffsetWithRange:ro,ellipse:pn,doubleLineOps:oo};function K(n,e,t,s,a){return{type:"path",ops:re(n,e,t,s,a)}}function it(n,e,t){const s=(n||[]).length;if(s>2){const a=[];for(let i=0;i<s-1;i++)a.push(...re(n[i][0],n[i][1],n[i+1][0],n[i+1][1],t));return e&&a.push(...re(n[s-1][0],n[s-1][1],n[0][0],n[0][1],t)),{type:"path",ops:a}}else if(s===2)return K(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function so(n,e){return it(n,!0,e)}function Fs(n,e,t,s,a){const i=[[n,e],[n+t,e],[n+t,e+s],[n,e+s]];return so(i,a)}function Qn(n,e){if(n.length){const s=typeof n[0][0]=="number"?[n]:n,a=pt(s[0],1*(1+e.roughness*.2),e),i=e.disableMultiStroke?[]:pt(s[0],1.5*(1+e.roughness*.22),es(e));for(let r=1;r<s.length;r++){const o=s[r];if(o.length){const l=pt(o,1*(1+e.roughness*.2),e),c=e.disableMultiStroke?[]:pt(o,1.5*(1+e.roughness*.22),es(e));for(const u of l)u.op!=="move"&&a.push(u);for(const u of c)u.op!=="move"&&i.push(u)}}return{type:"path",ops:a.concat(i)}}return{type:"path",ops:[]}}function pn(n,e,t,s,a){const i=Gs(t,s,a);return hn(n,e,a,i).opset}function Gs(n,e,t){const s=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),a=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*s)),i=Math.PI*2/a;let r=Math.abs(n/2),o=Math.abs(e/2);const l=1-t.curveFitting;return r+=S(r*l,t),o+=S(o*l,t),{increment:i,rx:r,ry:o}}function hn(n,e,t,s){const[a,i]=ts(s.increment,n,e,s.rx,s.ry,1,s.increment*Et(.1,Et(.4,1,t),t),t);let r=Pt(a,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[o]=ts(s.increment,n,e,s.rx,s.ry,1.5,0,t),l=Pt(o,null,t);r=r.concat(l)}return{estimatedPoints:i,opset:{type:"path",ops:r}}}function Zn(n,e,t,s,a,i,r,o,l){const c=n,u=e;let d=Math.abs(t/2),f=Math.abs(s/2);d+=S(d*.01,l),f+=S(f*.01,l);let p=a,m=i;for(;p<0;)p+=Math.PI*2,m+=Math.PI*2;m-p>Math.PI*2&&(p=0,m=Math.PI*2);const g=Math.PI*2/l.curveStepCount,y=Math.min(g/2,(m-p)/2),k=ns(y,c,u,d,f,p,m,1,l);if(!l.disableMultiStroke){const w=ns(y,c,u,d,f,p,m,1.5,l);k.push(...w)}return r&&(o?k.push(...re(c,u,c+d*Math.cos(p),u+f*Math.sin(p),l),...re(c,u,c+d*Math.cos(m),u+f*Math.sin(m),l)):k.push({op:"lineTo",data:[c,u]},{op:"lineTo",data:[c+d*Math.cos(p),u+f*Math.sin(p)]})),{type:"path",ops:k}}function Xn(n,e){const t=js(Ns(In(n))),s=[];let a=[0,0],i=[0,0];for(const{key:r,data:o}of t)switch(r){case"M":{i=[o[0],o[1]],a=[o[0],o[1]];break}case"L":s.push(...re(i[0],i[1],o[0],o[1],e)),i=[o[0],o[1]];break;case"C":{const[l,c,u,d,f,p]=o;s.push(...lo(l,c,u,d,f,p,i,e)),i=[f,p];break}case"Z":s.push(...re(i[0],i[1],a[0],a[1],e)),i=[a[0],a[1]];break}return{type:"path",ops:s}}function en(n,e){const t=[];for(const s of n)if(s.length){const a=e.maxRandomnessOffset||0,i=s.length;if(i>2){t.push({op:"move",data:[s[0][0]+S(a,e),s[0][1]+S(a,e)]});for(let r=1;r<i;r++)t.push({op:"lineTo",data:[s[r][0]+S(a,e),s[r][1]+S(a,e)]})}}return{type:"fillPath",ops:t}}function He(n,e){return Zr(e,no).fillPolygons(n,e)}function ao(n,e,t,s,a,i,r){const o=n,l=e;let c=Math.abs(t/2),u=Math.abs(s/2);c+=S(c*.01,r),u+=S(u*.01,r);let d=a,f=i;for(;d<0;)d+=Math.PI*2,f+=Math.PI*2;f-d>Math.PI*2&&(d=0,f=Math.PI*2);const p=(f-d)/r.curveStepCount,m=[];for(let g=d;g<=f;g=g+p)m.push([o+c*Math.cos(g),l+u*Math.sin(g)]);return m.push([o+c*Math.cos(f),l+u*Math.sin(f)]),m.push([o,l]),He([m],r)}function io(n,e){return S(n,e)}function ro(n,e,t){return Et(n,e,t)}function oo(n,e,t,s,a){return re(n,e,t,s,a,!0)}function es(n){const e=Object.assign({},n);return e.randomizer=void 0,n.seed&&(e.seed=n.seed+1),e}function zs(n){return n.randomizer||(n.randomizer=new Gr(n.seed||0)),n.randomizer.next()}function Et(n,e,t,s=1){return t.roughness*s*(zs(t)*(e-n)+n)}function S(n,e,t=1){return Et(-n,n,e,t)}function re(n,e,t,s,a,i=!1){const r=i?a.disableMultiStrokeFill:a.disableMultiStroke,o=mn(n,e,t,s,a,!0,!1);if(r)return o;const l=mn(n,e,t,s,a,!0,!0);return o.concat(l)}function mn(n,e,t,s,a,i,r){const o=Math.pow(n-t,2)+Math.pow(e-s,2),l=Math.sqrt(o);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let u=a.maxRandomnessOffset||0;u*u*100>o&&(u=l/10);const d=u/2,f=.2+zs(a)*.2;let p=a.bowing*a.maxRandomnessOffset*(s-e)/200,m=a.bowing*a.maxRandomnessOffset*(n-t)/200;p=S(p,a,c),m=S(m,a,c);const g=[],y=()=>S(d,a,c),k=()=>S(u,a,c),w=a.preserveVertices;return r?g.push({op:"move",data:[n+(w?0:y()),e+(w?0:y())]}):g.push({op:"move",data:[n+(w?0:S(u,a,c)),e+(w?0:S(u,a,c))]}),r?g.push({op:"bcurveTo",data:[p+n+(t-n)*f+y(),m+e+(s-e)*f+y(),p+n+2*(t-n)*f+y(),m+e+2*(s-e)*f+y(),t+(w?0:y()),s+(w?0:y())]}):g.push({op:"bcurveTo",data:[p+n+(t-n)*f+k(),m+e+(s-e)*f+k(),p+n+2*(t-n)*f+k(),m+e+2*(s-e)*f+k(),t+(w?0:k()),s+(w?0:k())]}),g}function pt(n,e,t){if(!n.length)return[];const s=[];s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]),s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]);for(let a=1;a<n.length;a++)s.push([n[a][0]+S(e,t),n[a][1]+S(e,t)]),a===n.length-1&&s.push([n[a][0]+S(e,t),n[a][1]+S(e,t)]);return Pt(s,null,t)}function Pt(n,e,t){const s=n.length,a=[];if(s>3){const i=[],r=1-t.curveTightness;a.push({op:"move",data:[n[1][0],n[1][1]]});for(let o=1;o+2<s;o++){const l=n[o];i[0]=[l[0],l[1]],i[1]=[l[0]+(r*n[o+1][0]-r*n[o-1][0])/6,l[1]+(r*n[o+1][1]-r*n[o-1][1])/6],i[2]=[n[o+1][0]+(r*n[o][0]-r*n[o+2][0])/6,n[o+1][1]+(r*n[o][1]-r*n[o+2][1])/6],i[3]=[n[o+1][0],n[o+1][1]],a.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],i[3][1]]})}}else s===3?(a.push({op:"move",data:[n[1][0],n[1][1]]}),a.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):s===2&&a.push(...mn(n[0][0],n[0][1],n[1][0],n[1][1],t,!0,!0));return a}function ts(n,e,t,s,a,i,r,o){const l=o.roughness===0,c=[],u=[];if(l){n=n/4,u.push([e+s*Math.cos(-n),t+a*Math.sin(-n)]);for(let d=0;d<=Math.PI*2;d=d+n){const f=[e+s*Math.cos(d),t+a*Math.sin(d)];c.push(f),u.push(f)}u.push([e+s*Math.cos(0),t+a*Math.sin(0)]),u.push([e+s*Math.cos(n),t+a*Math.sin(n)])}else{const d=S(.5,o)-Math.PI/2;u.push([S(i,o)+e+.9*s*Math.cos(d-n),S(i,o)+t+.9*a*Math.sin(d-n)]);const f=Math.PI*2+d-.01;for(let p=d;p<f;p=p+n){const m=[S(i,o)+e+s*Math.cos(p),S(i,o)+t+a*Math.sin(p)];c.push(m),u.push(m)}u.push([S(i,o)+e+s*Math.cos(d+Math.PI*2+r*.5),S(i,o)+t+a*Math.sin(d+Math.PI*2+r*.5)]),u.push([S(i,o)+e+.98*s*Math.cos(d+r),S(i,o)+t+.98*a*Math.sin(d+r)]),u.push([S(i,o)+e+.9*s*Math.cos(d+r*.5),S(i,o)+t+.9*a*Math.sin(d+r*.5)])}return[u,c]}function ns(n,e,t,s,a,i,r,o,l){const c=i+S(.1,l),u=[];u.push([S(o,l)+e+.9*s*Math.cos(c-n),S(o,l)+t+.9*a*Math.sin(c-n)]);for(let d=c;d<=r;d=d+n)u.push([S(o,l)+e+s*Math.cos(d),S(o,l)+t+a*Math.sin(d)]);return u.push([e+s*Math.cos(r),t+a*Math.sin(r)]),u.push([e+s*Math.cos(r),t+a*Math.sin(r)]),Pt(u,null,l)}function lo(n,e,t,s,a,i,r,o){const l=[],c=[o.maxRandomnessOffset||1,(o.maxRandomnessOffset||1)+.3];let u=[0,0];const d=o.disableMultiStroke?1:2,f=o.preserveVertices;for(let p=0;p<d;p++)p===0?l.push({op:"move",data:[r[0],r[1]]}):l.push({op:"move",data:[r[0]+(f?0:S(c[0],o)),r[1]+(f?0:S(c[0],o))]}),u=f?[a,i]:[a+S(c[p],o),i+S(c[p],o)],l.push({op:"bcurveTo",data:[n+S(c[p],o),e+S(c[p],o),t+S(c[p],o),s+S(c[p],o),u[0],u[1]]});return l}function tt(n){return[...n]}function ss(n,e=0){const t=n.length;if(t<3)throw new Error("A curve must have at least three points.");const s=[];if(t===3)s.push(tt(n[0]),tt(n[1]),tt(n[2]),tt(n[2]));else{const a=[];a.push(n[0],n[0]);for(let o=1;o<n.length;o++)a.push(n[o]),o===n.length-1&&a.push(n[o]);const i=[],r=1-e;s.push(tt(a[0]));for(let o=1;o+2<a.length;o++){const l=a[o];i[0]=[l[0],l[1]],i[1]=[l[0]+(r*a[o+1][0]-r*a[o-1][0])/6,l[1]+(r*a[o+1][1]-r*a[o-1][1])/6],i[2]=[a[o+1][0]+(r*a[o][0]-r*a[o+2][0])/6,a[o+1][1]+(r*a[o][1]-r*a[o+2][1])/6],i[3]=[a[o+1][0],a[o+1][1]],s.push(i[1],i[2],i[3])}}return s}function co(n,e){return Math.sqrt(Lt(n,e))}function Lt(n,e){return Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)}function uo(n,e,t){const s=Lt(e,t);if(s===0)return Lt(n,e);let a=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/s;return a=Math.max(0,Math.min(1,a)),Lt(n,Ee(e,t,a))}function Ee(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t]}function fo(n,e){const t=n[e+0],s=n[e+1],a=n[e+2],i=n[e+3];let r=3*s[0]-2*t[0]-i[0];r*=r;let o=3*s[1]-2*t[1]-i[1];o*=o;let l=3*a[0]-2*i[0]-t[0];l*=l;let c=3*a[1]-2*i[1]-t[1];return c*=c,r<l&&(r=l),o<c&&(o=c),r+o}function gn(n,e,t,s){const a=s||[];if(fo(n,e)<t){const i=n[e+0];a.length?co(a[a.length-1],i)>1&&a.push(i):a.push(i),a.push(n[e+3])}else{const r=n[e+0],o=n[e+1],l=n[e+2],c=n[e+3],u=Ee(r,o,.5),d=Ee(o,l,.5),f=Ee(l,c,.5),p=Ee(u,d,.5),m=Ee(d,f,.5),g=Ee(p,m,.5);gn([r,u,p,g],0,t,a),gn([g,m,f,c],0,t,a)}return a}function po(n,e){return $t(n,0,n.length,e)}function $t(n,e,t,s,a){const i=a||[],r=n[e],o=n[t-1];let l=0,c=1;for(let u=e+1;u<t-1;++u){const d=uo(n[u],r,o);d>l&&(l=d,c=u)}return Math.sqrt(l)>s?($t(n,e,c+1,s,i),$t(n,c,t,s,i)):(i.length||i.push(r),i.push(o)),i}function yn(n,e=.15,t){const s=[],a=(n.length-1)/3;for(let i=0;i<a;i++){const r=i*3;gn(n,r,e,s)}return t&&t>0?$t(s,0,s.length,t):s}function ho(n,e,t){const s=In(n),a=js(Ns(s)),i=[];let r=[],o=[0,0],l=[];const c=()=>{l.length>=4&&r.push(...yn(l,e)),l=[]},u=()=>{c(),r.length&&(i.push(r),r=[])};for(const{key:f,data:p}of a)switch(f){case"M":u(),o=[p[0],p[1]],r.push(o);break;case"L":c(),r.push([p[0],p[1]]);break;case"C":if(!l.length){const m=r.length?r[r.length-1]:o;l.push([m[0],m[1]])}l.push([p[0],p[1]]),l.push([p[2],p[3]]),l.push([p[4],p[5]]);break;case"Z":c(),r.push([o[0],o[1]]);break}if(u(),!t)return i;const d=[];for(const f of i){const p=po(f,t);p.length&&d.push(p)}return d}const U="none";class mo{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return xs()}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,s){return{shape:e,sets:t||[],options:s||this.defaultOptions}}line(e,t,s,a,i){const r=this._o(i);return this._d("line",[K(e,t,s,a,r)],r)}rectangle(e,t,s,a,i){const r=this._o(i),o=[],l=Fs(e,t,s,a,r);if(r.fill){const c=[[e,t],[e+s,t],[e+s,t+a],[e,t+a]];r.fillStyle==="solid"?o.push(en([c],r)):o.push(He([c],r))}return r.stroke!==U&&o.push(l),this._d("rectangle",o,r)}ellipse(e,t,s,a,i){const r=this._o(i),o=[],l=Gs(s,a,r),c=hn(e,t,r,l);if(r.fill)if(r.fillStyle==="solid"){const u=hn(e,t,r,l).opset;u.type="fillPath",o.push(u)}else o.push(He([c.estimatedPoints],r));return r.stroke!==U&&o.push(c.opset),this._d("ellipse",o,r)}circle(e,t,s,a){const i=this.ellipse(e,t,s,s,a);return i.shape="circle",i}linearPath(e,t){const s=this._o(t);return this._d("linearPath",[it(e,!1,s)],s)}arc(e,t,s,a,i,r,o=!1,l){const c=this._o(l),u=[],d=Zn(e,t,s,a,i,r,o,!0,c);if(o&&c.fill)if(c.fillStyle==="solid"){const f=Object.assign({},c);f.disableMultiStroke=!0;const p=Zn(e,t,s,a,i,r,!0,!1,f);p.type="fillPath",u.push(p)}else u.push(ao(e,t,s,a,i,r,c));return c.stroke!==U&&u.push(d),this._d("arc",u,c)}curve(e,t){const s=this._o(t),a=[],i=Qn(e,s);if(s.fill&&s.fill!==U)if(s.fillStyle==="solid"){const r=Qn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));a.push({type:"fillPath",ops:this._mergedShape(r.ops)})}else{const r=[],o=e;if(o.length){const c=typeof o[0][0]=="number"?[o]:o;for(const u of c)u.length<3?r.push(...u):u.length===3?r.push(...yn(ss([u[0],u[0],u[1],u[2]]),10,(1+s.roughness)/2)):r.push(...yn(ss(u),10,(1+s.roughness)/2))}r.length&&a.push(He([r],s))}return s.stroke!==U&&a.push(i),this._d("curve",a,s)}polygon(e,t){const s=this._o(t),a=[],i=it(e,!0,s);return s.fill&&(s.fillStyle==="solid"?a.push(en([e],s)):a.push(He([e],s))),s.stroke!==U&&a.push(i),this._d("polygon",a,s)}path(e,t){const s=this._o(t),a=[];if(!e)return this._d("path",a,s);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const i=s.fill&&s.fill!=="transparent"&&s.fill!==U,r=s.stroke!==U,o=!!(s.simplification&&s.simplification<1),l=o?4-4*(s.simplification||1):(1+s.roughness)/2,c=ho(e,1,l),u=Xn(e,s);if(i)if(s.fillStyle==="solid")if(c.length===1){const d=Xn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));a.push({type:"fillPath",ops:this._mergedShape(d.ops)})}else a.push(en(c,s));else a.push(He(c,s));return r&&(o?c.forEach(d=>{a.push(it(d,!1,s))}):a.push(u)),this._d("path",a,s)}opsToPath(e,t){let s="";for(const a of e.ops){const i=typeof t=="number"&&t>=0?a.data.map(r=>+r.toFixed(t)):a.data;switch(a.op){case"move":s+=`M${i[0]} ${i[1]} `;break;case"bcurveTo":s+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":s+=`L${i[0]} ${i[1]} `;break}}return s.trim()}toPaths(e){const t=e.sets||[],s=e.options||this.defaultOptions,a=[];for(const i of t){let r=null;switch(i.type){case"path":r={d:this.opsToPath(i),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:U};break;case"fillPath":r={d:this.opsToPath(i),stroke:U,strokeWidth:0,fill:s.fill||U};break;case"fillSketch":r=this.fillSketch(i,s);break}r&&a.push(r)}return a}fillSketch(e,t){let s=t.fillWeight;return s<0&&(s=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||U,strokeWidth:s,fill:U}}_mergedShape(e){return e.filter((t,s)=>s===0?!0:t.op!=="move")}}const Vs="http://www.w3.org/2000/svg",go=800;let tn=null;function yo(){return tn||(tn=new mo().defaultOptions),tn}function nn(n,e,t){return{...yo(),maxRandomnessOffset:2,roughness:n==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,disableMultiStroke:n!=="double",disableMultiStrokeFill:!1,seed:e,...t}}function ko(n){const e=n.padding;if(e||e===0){if(typeof e=="number")return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}function wo(n,e,t,s,a,i){const r=[];let o=t.strokeWidth||2;const l=ko(t),c=t.animate===void 0?!0:!!t.animate,u=t.iterations||2,d=t.rtl?1:0,f=nn("single",i,t);switch(t.type){case"underline":{const p=e.y+e.h+l[2];for(let m=d;m<u+d;m++)m%2?r.push(K(e.x+e.w,p,e.x,p,f)):r.push(K(e.x,p,e.x+e.w,p,f));break}case"strike-through":{const p=e.y+e.h/2;for(let m=d;m<u+d;m++)m%2?r.push(K(e.x+e.w,p,e.x,p,f)):r.push(K(e.x,p,e.x+e.w,p,f));break}case"box":{const p=e.x-l[3],m=e.y-l[0],g=e.w+(l[1]+l[3]),y=e.h+(l[0]+l[2]);for(let k=0;k<u;k++)r.push(Fs(p,m,g,y,f));break}case"bracket":{const p=Array.isArray(t.brackets)?t.brackets:t.brackets?[t.brackets]:["right"],m=e.x-l[3]*2,g=e.x+e.w+l[1]*2,y=e.y-l[0]*2,k=e.y+e.h+l[2]*2;for(const w of p){let v;switch(w){case"bottom":v=[[m,e.y+e.h],[m,k],[g,k],[g,e.y+e.h]];break;case"top":v=[[m,e.y],[m,y],[g,y],[g,e.y]];break;case"left":v=[[e.x,y],[m,y],[m,k],[e.x,k]];break;case"right":v=[[e.x+e.w,y],[g,y],[g,k],[e.x+e.w,k]];break}v&&r.push(it(v,!1,f))}break}case"crossed-off":{const p=e.x,m=e.y,g=p+e.w,y=m+e.h;for(let k=d;k<u+d;k++)k%2?r.push(K(g,y,p,m,f)):r.push(K(p,m,g,y,f));for(let k=d;k<u+d;k++)k%2?r.push(K(p,y,g,m,f)):r.push(K(g,m,p,y,f));break}case"circle":{const p=nn("double",i,t),m=e.w+(l[1]+l[3]),g=e.h+(l[0]+l[2]),y=e.x-l[3]+m/2,k=e.y-l[0]+g/2,w=Math.floor(u/2),v=u-w*2;for(let b=0;b<w;b++)r.push(pn(y,k,m,g,p));for(let b=0;b<v;b++)r.push(pn(y,k,m,g,f));break}case"highlight":{const p=nn("highlight",i,t);o=e.h*.95;const m=e.y+e.h/2;for(let g=d;g<u+d;g++)g%2?r.push(K(e.x+e.w,m,e.x,m,p)):r.push(K(e.x,m,e.x+e.w,m,p));break}}if(r.length){const p=vo(r),m=[],g=[];let y=0;const k=(w,v,b)=>w.setAttribute(v,b);for(const w of p){const v=document.createElementNS(Vs,"path");if(k(v,"d",w),k(v,"fill","none"),k(v,"stroke",t.color||"currentColor"),k(v,"stroke-width",`${o}`),t.opacity!==void 0&&k(v,"style",`opacity:${t.opacity}`),c){const b=v.getTotalLength();m.push(b),y+=b}n.appendChild(v),g.push(v)}if(c){let w=0;for(let v=0;v<g.length;v++){const b=g[v],M=m[v],L=y?a*(M/y):0,T=s+w,E=b.style;E.strokeDashoffset=`${M}`,E.strokeDasharray=`${M}`,E.animation=`rough-notation-dash ${L}ms ease-out ${T}ms forwards`,w+=L}return as(a+s)}}return as(0)}function as(n){return new Promise(e=>setTimeout(e,n))}function vo(n){const e=[];for(const t of n){let s="";for(const a of t.ops){const i=a.data;switch(a.op){case"move":s.trim()&&e.push(s.trim()),s=`M${i[0]} ${i[1]} `;break;case"bcurveTo":s+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":s+=`L${i[0]} ${i[1]} `;break}}s.trim()&&e.push(s.trim())}return e}function bo(){if(!window.__rno_kf_s){const n=window.__rno_kf_s=document.createElement("style");n.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(n)}}var So=Object.defineProperty,_o=(n,e,t)=>e in n?So(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Z=(n,e,t)=>(_o(n,typeof e!="symbol"?e+"":e,t),t);class Lo{constructor(e,t){Z(this,"_state","unattached"),Z(this,"_config"),Z(this,"_resizing",!1),Z(this,"_ro"),Z(this,"_seed",xs()),Z(this,"_e"),Z(this,"_svg"),Z(this,"_lastSizes",[]),Z(this,"_animationDelay",0),Z(this,"_resizeListener",()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))}),Z(this,"pendingRefresh"),this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}getConfig(e){return this._config[e]}setConfig(e,t){this._config[e]!==t&&(this._config[e]=t,this.refresh())}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get class(){return this._config.class}set class(e){this._config.class!==e&&(this._config.class=e,this._svg&&this._svg.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" ")))}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){bo();const e=this._svg=document.createElementNS(Vs,"svg");e.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" "));const t=e.style;t.position="absolute",t.top="0",t.left="0",t.overflow="visible",t.pointerEvents="none",t.width="100px",t.height="100px";const s=this._config.type==="highlight";if(this._e.insertAdjacentElement(s?"beforebegin":"afterend",e),this._state="not-showing",s){const a=window.getComputedStyle(this._e).position;(!a||a==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length===this._lastSizes.length){for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}else return!0}return!1}isSameRect(e,t){const s=(a,i)=>Math.round(a)===Math.round(i);return s(e.x,t.x)&&s(e.y,t.y)&&s(e.w,t.w)&&s(e.h,t.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}async show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&await this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&await this.render(this._svg,!1);break}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}async render(e,t){let s=this._config;t&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const a=this.rects();let i=0;a.forEach(c=>i+=c.w);const r=s.animationDuration||go;let o=0;const l=[];for(let c=0;c<a.length;c++){const u=a[c],d=r*(u.w/i);l.push(wo(e,a[c],s,o+this._animationDelay+(this._config.delay||0),d,this._seed)),o+=d}return this._lastSizes=a,this._state="showing",await Promise.all(l)}rects(){const e=[];if(this._svg)if(this._config.multiline){const t=this._e.getClientRects();for(let s=0;s<t.length;s++)e.push(this.svgRect(this._svg,t[s]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){const s=e.getBoundingClientRect(),a=t;return{x:(a.x||a.left)-(s.x||s.left),y:(a.y||a.top)-(s.y||s.top),w:a.width,h:a.height}}}function Mo(n,e){return new Lo(n,e)}function V(n,e){return n.class=[n.class,e].filter(Boolean).join(" "),n}const is={box:n=>Object.assign(n,{type:"box"}),circle:n=>Object.assign(n,{type:"circle"}),underline:n=>Object.assign(n,{type:"underline"}),highlight:n=>Object.assign(n,{type:"highlight"}),"strike-through":n=>Object.assign(n,{type:"strike-through"}),"crossed-off":n=>Object.assign(n,{type:"crossed-off"}),bracket:n=>Object.assign(n,{type:"bracket"}),strike:n=>Object.assign(n,{type:"strike-through"}),cross:n=>Object.assign(n,{type:"crossed-off"}),crossed:n=>Object.assign(n,{type:"crossed-off"}),linethrough:n=>Object.assign(n,{type:"strike-through"}),"line-through":n=>Object.assign(n,{type:"strike-through"}),black:n=>V(n,"text-black"),blue:n=>V(n,"text-blue"),cyan:n=>V(n,"text-cyan"),gray:n=>V(n,"text-gray"),green:n=>V(n,"text-green"),indigo:n=>V(n,"text-indigo"),lime:n=>V(n,"text-lime"),orange:n=>V(n,"text-orange"),pink:n=>V(n,"text-pink"),purple:n=>V(n,"text-purple"),red:n=>V(n,"text-red"),teal:n=>V(n,"text-teal"),white:n=>V(n,"text-white"),yellow:n=>V(n,"text-yellow")},Ao=[[/^delay-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||300;return e.delay=s,e}],[/^(?:op|opacity)-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||100;return e.opacity=s/100,e}]];function Co(){return{install(n){n.directive("mark",{name:"v-mark",mounted:(e,t)=>{const s=h(()=>{const r=typeof t.value=="object"&&!Array.isArray(t.value)?{...t.value}:{at:t.value};let o={at:r.at};const l=Object.entries(t.modifiers).filter(([u,d])=>{if(is[u])return o=is[u](o,d),!1;for(const[f,p]of Ao){const m=u.match(f);if(m)return o=p(m,o,d),!1}return!0});l.length&&console.warn("[Slidev] Invalid modifiers for v-mark:",l);const c={...o,...r};return c.type||(c.type="underline"),c}),a=Mo(e,s.value),i=_t(e,t,s.value.at);if(!i){a.show();return}e.watchStopHandle=Be(()=>{let r;s.value.class&&(a.class=s.value.class),s.value.color&&(a.color=s.value.color);const o=s.value.at;o===!0?r=!0:o===!1?r=!1:r=i.isActive.value,r!=null&&(r?a.show():a.hide())})},unmounted:e=>{var t;(t=e.watchStopHandle)==null||t.call(e)}})}}}const al=C(!1),il=C(!1),rl=C(!1),To=C(!1),ol=C(!0),ll=ia({xs:460,...ua}),Dt=ra(),cl=oa(),ul=h(()=>Dt.height.value-Dt.width.value/ds.value>120),dl=la(Wt?document.body:null),kn=ca(),fl=h(()=>{var n,e;return["INPUT","TEXTAREA"].includes(((n=kn.value)==null?void 0:n.tagName)||"")||((e=kn.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),pl=h(()=>{var n;return["BUTTON","A"].includes(((n=kn.value)==null?void 0:n.tagName)||"")});ee("slidev-camera","default",{listenToStorageChanges:!1});ee("slidev-mic","default",{listenToStorageChanges:!1});const Oo=ee("slidev-scale",0),hl=ee("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),Ro=ee("slidev-show-editor",!1,{listenToStorageChanges:!1}),Eo=ee("slidev-editor-vertical",!1,{listenToStorageChanges:!1}),Po=ee("slidev-editor-width",Wt?window.innerWidth*.4:318,{listenToStorageChanges:!1}),$o=ee("slidev-editor-height",Wt?window.innerHeight*.4:300,{listenToStorageChanges:!1}),ht=vn(null),It=ee("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),mt=ee("slidev-presenter-layout",1,{listenToStorageChanges:!1});function ml(){mt.value=mt.value+1,mt.value>2&&(mt.value=1)}function gl(){It.value=Math.min(2,It.value+.1)}function yl(){It.value=Math.max(.5,It.value-.1)}const kl=us(To);function Do(n=rs(vs,C())){const e=da(n),t=J([Ro,Eo,Po,$o,Oo,Dt.width,Dt.height],()=>{setTimeout(e.update,300)},{flush:"post",immediate:!0});return{...e,stop:t}}function Io(n){return()=>{}}function xo(n,e,t){var xe;function s(O){return n?Ue(n,O):ha(O)}const a=s(_n),i=s(Mi)??{},r=s(Sn),o=h(()=>Io(r.value)),l=s(_i)??C(1),c=s(Ai)??C(1),{left:u,top:d,stop:f}=Do(s(vs)??C()),p=["slide","presenter"].includes(a.value);let m=n?"directive":"prop",g=$n(),y;if(Array.isArray(e)?y=e:typeof e=="string"&&e.includes(",")?y=e.split(",").map(Number):e!=null&&(m="frontmatter",g=`${e}`,e=(xe=i==null?void 0:i.dragPos)==null?void 0:xe[g],y=e==null?void 0:e.split(",").map(Number)),m!=="frontmatter"&&!t)throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");const k=[f],w=e!=null&&!Number.isFinite(y==null?void 0:y[3]);y??(y=[Number.NaN,Number.NaN,0]);const v=C(y[2]),b=C(y[0]+y[2]/2),M=C(y[4]??0),L=h(()=>M.value*Math.PI/180),T=h(()=>Math.sin(L.value)),E=h(()=>Math.cos(L.value)),$=C(),F=C({left:0,top:0,width:0,height:0}),te=C(0);function A(){const O=$.value.getBoundingClientRect();F.value={left:O.left/c.value,top:O.top/c.value,width:O.width/c.value,height:O.height/c.value},te.value=(F.value.width+F.value.height)/l.value/(Math.abs(T.value)+Math.abs(E.value))-v.value}k.push(J(v,A,{flush:"post"}));const P=C(y[3]??0),W=h({get:()=>(w?te.value:P.value)||0,set:O=>!w&&(P.value=O)}),x=C(y[1]),j=h({get:()=>x.value+W.value/2,set:O=>x.value=O-W.value/2}),oe=h(()=>Number.isFinite(b.value)?{position:"absolute",zIndex:100,left:`${b.value-v.value/2}px`,top:`${j.value-W.value/2}px`,width:`${v.value}px`,height:w?void 0:`${W.value}px`,transformOrigin:"center center",transform:`rotate(${M.value}deg)`}:{position:"absolute",zIndex:100});k.push(J([b,j,v,W,M],([O,We,Ke,Je,Ye])=>{let Ne=[O-Ke/2,We-Je/2,Ke].map(Math.round).join();w?Ne+=m==="directive"?",NaN":",_":Ne+=`,${Math.round(Je)}`,Math.round(Ye)!==0&&(Ne+=`,${Math.round(Ye)}`),m==="directive"&&(Ne=`[${Ne}]`),o.value(g,Ne,m,t)}));const Q={id:g,dataSource:m,markdownSource:t,zoom:c,autoHeight:w,x0:b,y0:j,width:v,height:W,rotate:M,container:$,containerStyle:oe,watchStopHandles:k,dragging:h(()=>ht.value===Q),mounted(){p&&(A(),e||setTimeout(()=>{A(),b.value=(F.value.left+F.value.width/2-u.value)/l.value,j.value=(F.value.top-d.value)/l.value,v.value=F.value.width/l.value,W.value=F.value.height/l.value},100))},unmounted(){p&&Q.stopDragging()},startDragging(){A(),ht.value=Q},stopDragging(){ht.value===Q&&(ht.value=null)}};return k.push(fa($,O=>{const We=document.querySelector("#drag-control-container");We&&O.target&&We.contains(O.target)||Q.stopDragging()}),J(pa(),O=>{O||Q.stopDragging()})),Q}function Wo(){return{install(n){n.directive("drag",{name:"v-drag",created(e,t,s){var i;const a=xo(t,t.value,(i=s.props)==null?void 0:i.markdownSource);s.props&&(s.props={...s.props},delete s.props.markdownSource),a.container.value=e,e.draggingState=a,e.dataset.dragId=a.id,a.watchStopHandles.push(J(a.containerStyle,r=>{for(const[o,l]of Object.entries(r))l&&(e.style[o]=l)},{immediate:!0})),e.addEventListener("dblclick",a.startDragging)},mounted(e){e.draggingState.mounted()},unmounted(e){const t=e.draggingState;t.unmounted(),e.removeEventListener("dblclick",t.startDragging),t.watchStopHandles.forEach(s=>s())}})}}}function No(){return{install(n){const e=ma();n.directive("motion",{name:"v-motion",mounted(t,s,a,i){var v,b,M;const r=Ue(s,Nt),o=Ue(s,Sn),l=Ue(s,_n),{currentPage:c,clicks:u,isPrintMode:d}=un(),f=a.props={...a.props},p={...f.initial,...(v=f.variants)==null?void 0:v["slidev-initial"]},m={...f.enter,...(b=f.variants)==null?void 0:b["slidev-enter"]},g={...f.leave,...(M=f.variants)==null?void 0:M["slidev-leave"]};delete f.initial,delete f.enter,delete f.leave;const y=`${$n()}-`,k=[];for(const L of Object.keys(f))if(L.startsWith("click-")){const T=L.slice(6),E=T.includes("-")?T.split("-").map(Number):+T,$=y+T;k.push({id:$,at:E,variant:{...f[L]},info:r==null?void 0:r.value.calculate(E)}),delete f[L]}k.sort((L,T)=>(Array.isArray(L.at)?L.at[0]:L.at)-(Array.isArray(T.at)?T.at[0]:T.at)),e.created(t,s,a,i),e.mounted(t,s,a,i);const w=t.motionInstance;w.clickIds=k.map(L=>L.id),w.set(p),w.watchStopHandle=J([o,c,u].filter(Boolean),()=>{var T;const L=((T=Is.get(t))==null?void 0:T.visibilityState.value)??"shown";if(!(r!=null&&r.value)||!["slide","presenter"].includes((l==null?void 0:l.value)??"")){const E={...p,...m};for(const{variant:$}of k)Object.assign(E,$);w.set(E)}else if(d.value||(o==null?void 0:o.value)===c.value)if(L==="shown"){const E={...p,...m};for(const{variant:$,info:F}of k)(!F||F.isActive.value)&&Object.assign(E,$);d.value?w.set(E):w.apply(E)}else w.apply(L==="before"?p:g);else w.apply(((o==null?void 0:o.value)??-1)>c.value?p:g)},{immediate:!0})},unmounted(t){t.motionInstance.watchStopHandle()}})}}}const jo=[];function Ho(){const n=[];{let e=function(t){if(!I.remote||I.remote===t.query.password)return!0;if(I.remote&&t.query.password===void 0){const s=prompt("Enter password");if(I.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};n.push({name:"entry",path:"/entry",component:()=>R(()=>import("./slidev/entry-oWLj88St.js"),__vite__mapDeps([36,16,1,3,4,37]))},{name:"overview",path:"/overview",component:()=>R(()=>import("./slidev/overview-rc1U7bIh.js"),__vite__mapDeps([38,16,1,39,40,41,42,43,44,45,3,4]))},{name:"notes",path:"/notes",component:()=>R(()=>import("./slidev/notes-BVTNQE-h.js"),__vite__mapDeps([46,16,1,42,43,41,3,4])),beforeEnter:e},{name:"presenter",path:"/presenter/:no",component:()=>R(()=>import("./slidev/presenter-BLhW5MwM.js"),__vite__mapDeps([47,16,1,48,39,40,41,2,3,4,49,42,43,50,51,44,45,52])),beforeEnter:e},{path:"/presenter",redirect:{path:"/presenter/1"}})}return n.push({name:"play",path:"/:no",component:()=>R(()=>import("./slidev/play-_uaXBb79.js"),__vite__mapDeps([53,1,48,39,40,16,41,2,3,4,49,54]))},{path:"",redirect:{path:"/1"}}),jo.reduce((e,t)=>t(e),n)}const Fo=[];async function Go(n){function e(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}e(),window.addEventListener("resize",e);const t=ga({history:ya("/genaiscript/slides/pnw-plse-may2024/"),routes:Ho()});n.use(t),n.use(fi()),n.use(Fr()),n.use(Co()),n.use(Wo()),n.use(No()),n.use(wa,{container:"#twoslash-container"});const s={app:n,router:t};Mt(()=>{t.afterEach(async()=>{await Mt(),ln.value+=1})});for(const a of Fo)await a(s)}const Bs=ka(Hr);Go(Bs);Bs.mount("#app");export{_n as $,Dt as A,Eo as B,wt as C,ne as D,ht as E,To as F,kl as G,rl as H,cl as I,sl as J,ol as K,pl as L,fl as M,Bo as N,Oo as O,ll as P,kn as Q,ml as R,zt as S,_i as T,Do as U,Ln as V,ds as W,vs as X,Qo as Y,Sn as Z,Os as _,un as a,Nt as a0,Ai as a1,nl as a2,Yo as a3,Jo as a4,Ko as a5,le as a6,ce as a7,ue as a8,de as a9,Ti as aA,fe as aa,pe as ab,he as ac,$n as ad,cn as ae,ba as af,me as ag,ge as ah,ye as ai,ke as aj,we as ak,ve as al,be as am,Se as an,_e as ao,Le as ap,Me as aq,Ae as ar,Ce as as,Te as at,Oe as au,Ze as av,el as aw,Li as ax,Mi as ay,Zo as az,Ds as b,Rr as c,qo as d,Xo as e,dl as f,Ve as g,hl as h,Yn as i,Ro as j,It as k,gl as l,yl as m,rt as n,I as o,mt as p,R as q,xn as r,Bt as s,tl as t,hi as u,al as v,il as w,Aa as x,Uo as y,ul as z};
