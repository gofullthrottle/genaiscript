const __vite__fileDeps=["assets/slidev/1-BIJpvMvx.js","assets/modules/vue-BpohPuJT.js","assets/slidev/context-BT7BXG_r.js","assets/modules/shiki-BGRm4NX1.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/2-C5MU1OUK.js","assets/slidev/VClick-BUYfib3u.js","assets/slidev/default-DXMYlPuS.js","assets/slidev/3-ciOLYQsl.js","assets/slidev/image-right-CRaQsz_s.js","assets/slidev/4-MPdYvOHK.js","assets/slidev/CodeBlockWrapper-DswGKixg.js","assets/modules/unplugin-icons-DMPJ6RbJ.js","assets/slidev/two-cols-header-CQkO8-ff.js","assets/two-cols-header-DTF_BoaY.css","assets/slidev/5-DGRSUfqO.js","assets/slidev/6-CWYT_R7r.js","assets/slidev/7-D1BcuexJ.js","assets/slidev/Mermaid-BQx15q6E.js","assets/modules/file-saver-EUMWMpoS.js","assets/slidev/8-MdxxPb3r.js","assets/slidev/9-e-PHcBPQ.js","assets/slidev/10-CWT5luN7.js","assets/slidev/11--Av7iTh0.js","assets/slidev/12-BCGQRVZ4.js","assets/slidev/13-C2vVcUoW.js","assets/slidev/14-4nQpDwhn.js","assets/slidev/15-G4x8OHUw.js","assets/slidev/16-it8IU0sM.js","assets/slidev/17-DycP4xFG.js","assets/slidev/18-CWt0_q3H.js","assets/slidev/19-OLVumvIu.js","assets/slidev/20-nqB7Vuwm.js","assets/slidev/21-Coe0PCMH.js","assets/22-BqnMIxK9.js","assets/slidev/23-B3zyWYyZ.js","assets/slidev/24-rjQAepC5.js","assets/slidev/entry-CMFxT2Tm.js","assets/entry-DFVZucWk.css","assets/slidev/overview-CEyLVeiK.js","assets/slidev/DrawingPreview-VgqV67-9.js","assets/DrawingPreview-B_1g_kmH.css","assets/slidev/IconButton-C-EDrhNg.js","assets/slidev/NoteDisplay-BVDRT1lY.js","assets/NoteDisplay-C6AkVv8T.css","assets/slidev/ClicksSlider-BvC7NxX-.js","assets/ClicksSlider-DYpxHk94.css","assets/slidev/notes-BTchYUxg.js","assets/slidev/presenter-0vKmFB3k.js","assets/slidev/ContextMenu-Dl6eWajr.js","assets/ContextMenu-CvLg4A9z.css","assets/slidev/DrawingControls-kNbZbZ0H.js","assets/DrawingControls-C5T1oZL5.css","assets/presenter-D8Ttzx6l.css","assets/slidev/play-3Vfqz4GT.js","assets/play-CoA43pdi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{t as T,y as h,n as Ct,z as Js,A as bn,B as ls,C as Ue,D as Y,E as Ys,G as Ks,H as Qs,I as cs,J as S,K as Zs,L as Xs,o as us,b as er,M as Sn,N as jt,O as tr,P as ds,Q as nr,R as sr,S as ee,T as fs,U as Ft,d as rr,r as ar,c as ir,V as or,W as lr,X as cr,Y as ur,Z as dr,_ as fr,$ as pr,a0 as hr,a1 as mr,a2 as gr,a3 as yr,a4 as vr,a5 as wr,u as kr}from"./modules/vue-BpohPuJT.js";import{T as br}from"./modules/shiki-BGRm4NX1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function lt(n,e,t){return Math.min(t,Math.max(e,n))}function Sr(...n){return Mr(n).reduce((e,t)=>e+t,0)}function _r(n){return n=n??[],Array.isArray(n)?n:[n]}function Mr(n){return _r(n).flat(1)}function Ar(n){return Array.from(new Set(n))}function jn(...n){let e,t,s;n.length===1?(e=0,s=1,[t]=n):[e,t,s=1]=n;const r=[];let a=e;for(;a<t;)r.push(a),a+=s||1;return r}function Lr(n){return n!=null}function Cr(n,e){return Object.fromEntries(Object.entries(n).map(([t,s])=>e(t,s)).filter(Lr))}function Yo(n){return Object.keys(n).forEach(e=>n[e]===void 0?delete n[e]:{}),n}const D={theme:"default",title:"GenAIScript",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:"local",monacoTypesAdditionalPackages:[],monacoRunAdditionalDeps:[],download:!1,export:{},info:`<h2>GenAIScript</h2>
<p>Scripting for Generative AI.<br/>
<a href="https://microsoft.github.io/genaiscript/" target="_blank">Docs</a> | <a href="https://github.com/microsoft/genaiscript/" target="_blank">GitHub</a></p>
`,highlighter:"shiki",twoslash:!0,lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},editor:!0,class:"text-center",mdc:!0,layout:"center"},Ko="build",ps=T(D.aspectRatio??16/9),Tr=T(D.canvasWidth??980),Qo=h(()=>Math.ceil(Tr.value/ps.value)),Or=h(()=>Cr(D.themeConfig||{},(n,e)=>[`--slidev-theme-${n}`,e])),Ut=D.titleTemplate.replace("%s",D.title||"Slidev");function an(n,e={},t){for(const s in n){const r=n[s],a=t?`${t}:${s}`:s;typeof r=="object"&&r!==null?an(r,e,a):typeof r=="function"&&(e[a]=r)}return e}const xr={run:n=>n()},Ir=()=>xr,hs=typeof console.createTask<"u"?console.createTask:Ir;function $r(n,e){const t=e.shift(),s=hs(t);return n.reduce((r,a)=>r.then(()=>s.run(()=>a(...e))),Promise.resolve())}function Er(n,e){const t=e.shift(),s=hs(t);return Promise.all(n.map(r=>s.run(()=>r(...e))))}function Jt(n,e){for(const t of[...n])t(e)}class Pr{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||typeof t!="function")return()=>{};const r=e;let a;for(;this._deprecatedHooks[e];)a=this._deprecatedHooks[e],e=a.to;if(a&&!s.allowDeprecated){let i=a.message;i||(i=`${r} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,r=(...a)=>(typeof s=="function"&&s(),s=void 0,r=void 0,t(...a));return s=this.hook(e,r),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=an(e),s=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const t=an(e);for(const s in t)this.removeHook(s,t[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith($r,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(Er,e,...t)}callHookWith(e,t,...s){const r=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&Jt(this._before,r);const a=e(t in this._hooks?[...this._hooks[t]]:[],s);return a instanceof Promise?a.finally(()=>{this._after&&r&&Jt(this._after,r)}):(this._after&&r&&Jt(this._after,r),a)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Dr(){return new Pr}function Rr(n){return Array.isArray(n)?n:[n]}const Nr=["title","titleTemplate","script","style","noscript"],vt=["base","meta","link","style","script","noscript"],jr=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Fr=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],ms=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Hr=typeof window<"u";function _n(n){let e=9;for(let t=0;t<n.length;)e=Math.imul(e^n.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Fn(n){return n._h||_n(n._d?n._d:`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function gs(n,e){const{props:t,tag:s}=n;if(Fr.includes(s))return s;if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const a of r)if(typeof t[a]<"u"){const i=String(t[a]);return`${s}:${a}:${i}`}return!1}function Hn(n,e){return n==null?e||null:typeof n=="function"?n(e):n}async function Gr(n,e,t){const s={tag:n,props:await ys(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(n)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(n))};return ms.forEach(r=>{const a=typeof s.props[r]<"u"?s.props[r]:t[r];typeof a<"u"&&((!["innerHTML","textContent","children"].includes(r)||Nr.includes(s.tag))&&(s[r==="children"?"innerHTML":r]=a),delete s.props[r])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function Vr(n,e){var s;const t=n==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,a])=>n==="style"?`${r}:${a}`:r)),(s=Array.isArray(e)?e.join(t):e)==null?void 0:s.split(t).filter(r=>r.trim()).filter(Boolean).join(t)}async function ys(n,e){for(const t of Object.keys(n)){if(["class","style"].includes(t)){n[t]=Vr(t,n[t]);continue}if(n[t]instanceof Promise&&(n[t]=await n[t]),!e&&!ms.includes(t)){const s=String(n[t]),r=t.startsWith("data-");s==="true"||s===""?n[t]=r?"true":!0:n[t]||(r&&s==="false"?n[t]="false":delete n[t])}}return n}const zr=10;async function Wr(n){const e=[];return Object.entries(n.resolvedInput).filter(([t,s])=>typeof s<"u"&&jr.includes(t)).forEach(([t,s])=>{const r=Rr(s);e.push(...r.map(a=>Gr(t,a,n)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,s)=>(t._e=n._i,n.mode&&(t._m=n.mode),t._p=(n._i<<zr)+s,t))}const Gn={base:-10,title:10},Vn={critical:-80,high:-10,low:20};function Tt(n){let e=100;const t=n.tagPriority;return typeof t=="number"?t:(n.tag==="meta"?(n.props["http-equiv"]==="content-security-policy"&&(e=-30),n.props.charset&&(e=-20),n.props.name==="viewport"&&(e=-15)):n.tag==="link"&&n.props.rel==="preconnect"?e=20:n.tag in Gn&&(e=Gn[n.tag]),typeof t=="string"&&t in Vn?e+Vn[t]:e)}const qr=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],zn=["onload","onerror","onabort","onprogress","onloadstart"],ae="%separator";function wt(n,e,t){if(typeof n!="string"||!n.includes("%"))return n;function s(i){let o;return["s","pageTitle"].includes(i)?o=e.pageTitle:i.includes(".")?o=i.split(".").reduce((l,c)=>l&&l[c]||void 0,e):o=e[i],typeof o<"u"?(o||"").replace(/"/g,'\\"'):!1}let r=n;try{r=decodeURI(n)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const o=s(i.slice(1));typeof o=="string"&&(n=n.replace(new RegExp(`\\${i}(\\W|$)`,"g"),(l,c)=>`${o}${c}`).trim())}),n.includes(ae)&&(n.endsWith(ae)&&(n=n.slice(0,-ae.length).trim()),n.startsWith(ae)&&(n=n.slice(ae.length).trim()),n=n.replace(new RegExp(`\\${ae}\\s*\\${ae}`,"g"),ae),n=wt(n,{separator:t},t)),n}async function Br(n,e={}){var u;const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const s={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const r=(await n.resolveTags()).map(d=>({tag:d,id:vt.includes(d.tag)?Fn(d):d.tag,shouldRender:!0}));let a=n._dom;if(!a){a={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};for(const d of["body","head"]){const f=(u=t[d])==null?void 0:u.children,p=[];for(const m of[...f].filter(g=>vt.includes(g.tagName.toLowerCase()))){const g={tag:m.tagName.toLowerCase(),props:await ys(m.getAttributeNames().reduce((w,k)=>({...w,[k]:m.getAttribute(k)}),{})),innerHTML:m.innerHTML};let y=1,v=gs(g);for(;v&&p.find(w=>w._d===v);)v=`${v}:${y++}`;g._d=v||void 0,p.push(g),a.elMap[m.getAttribute("data-hid")||Fn(g)]=m}}}a.pendingSideEffects={...a.sideEffects||{}},a.sideEffects={};function i(d,f,p){const m=`${d}:${f}`;a.sideEffects[m]=p,delete a.pendingSideEffects[m]}function o({id:d,$el:f,tag:p}){const m=p.tag.endsWith("Attrs");a.elMap[d]=f,m||(["textContent","innerHTML"].forEach(g=>{p[g]&&p[g]!==f[g]&&(f[g]=p[g])}),i(d,"el",()=>{var g;(g=a.elMap[d])==null||g.remove(),delete a.elMap[d]}));for(const[g,y]of Object.entries(p._eventHandlers||{}))f.getAttribute(`data-${g}`)!==""&&((p.tag==="bodyAttrs"?t.defaultView:f).addEventListener(g.replace("on",""),y.bind(f)),f.setAttribute(`data-${g}`,""));Object.entries(p.props).forEach(([g,y])=>{const v=`attr:${g}`;if(g==="class")for(const w of(y||"").split(" ").filter(Boolean))m&&i(d,`${v}:${w}`,()=>f.classList.remove(w)),!f.classList.contains(w)&&f.classList.add(w);else if(g==="style")for(const w of(y||"").split(";").filter(Boolean)){const[k,...b]=w.split(":").map(A=>A.trim());i(d,`${v}:${w}:${k}`,()=>{f.style.removeProperty(k)}),f.style.setProperty(k,b.join(":"))}else f.getAttribute(g)!==y&&f.setAttribute(g,y===!0?"":String(y)),m&&i(d,v,()=>f.removeAttribute(g))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of r){const{tag:f,shouldRender:p,id:m}=d;if(p){if(f.tag==="title"){t.title=f.textContent;continue}d.$el=d.$el||a.elMap[m],d.$el?o(d):vt.includes(f.tag)&&l.push(d)}}for(const d of l){const f=d.tag.tagPosition||"head";d.$el=t.createElement(d.tag.tag),o(d),c[f]=c[f]||t.createDocumentFragment(),c[f].appendChild(d.$el)}for(const d of r)await n.hooks.callHook("dom:renderTag",d,t,i);c.head&&t.head.appendChild(c.head),c.bodyOpen&&t.body.insertBefore(c.bodyOpen,t.body.firstChild),c.bodyClose&&t.body.appendChild(c.bodyClose),Object.values(a.pendingSideEffects).forEach(d=>d()),n._dom=a,n.dirty=!1,await n.hooks.callHook("dom:rendered",{renders:r})}async function Ur(n,e={}){const t=e.delayFn||(s=>setTimeout(s,10));return n._domUpdatePromise=n._domUpdatePromise||new Promise(s=>t(async()=>{await Br(n,e),delete n._domUpdatePromise,s()}))}function Jr(n){return e=>{var s,r;const t=((r=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":function(a){Ur(a,n)}}}}}const Yr=["templateParams","htmlAttrs","bodyAttrs"],Kr={hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(s=>{n.props[s]&&(n.key=n.props[s],delete n.props[s])});const t=gs(n)||(n.key?`${n.tag}:${n.key}`:!1);t&&(n._d=t)},"tags:resolve":function(n){const e={};n.tags.forEach(s=>{const r=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,a=e[r];if(a){let o=s==null?void 0:s.tagDuplicateStrategy;if(!o&&Yr.includes(s.tag)&&(o="merge"),o==="merge"){const l=a.props;["class","style"].forEach(c=>{l[c]&&(s.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),s.props[c]=`${l[c]} ${s.props[c]}`):s.props[c]=l[c])}),e[r].props={...l,...s.props};return}else if(s._e===a._e){a._duped=a._duped||[],s._d=`${a._d}:${a._duped.length+1}`,a._duped.push(s);return}else if(Tt(s)>Tt(a))return}const i=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(vt.includes(s.tag)&&i===0){delete e[r];return}e[r]=s});const t=[];Object.values(e).forEach(s=>{const r=s._duped;delete s._duped,t.push(s),r&&t.push(...r)}),n.tags=t,n.tags=n.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},Qr={mode:"server",hooks:{"tags:resolve":function(n){const e={};n.tags.filter(t=>["titleTemplate","templateParams","title"].includes(t.tag)&&t._m==="server").forEach(t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props}),Object.keys(e).length&&n.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Zr=["script","link","bodyAttrs"],Xr=n=>({hooks:{"tags:resolve":function(e){for(const t of e.tags.filter(s=>Zr.includes(s.tag)))Object.entries(t.props).forEach(([s,r])=>{s.startsWith("on")&&typeof r=="function"&&(n.ssr&&zn.includes(s)?t.props[s]=`this.dataset.${s}fired = true`:delete t.props[s],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[s]=r)}),n.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||_n(t.props.src||t.props.href))},"dom:renderTag":function({$el:e,tag:t}){var s,r;for(const a of Object.keys((e==null?void 0:e.dataset)||{}).filter(i=>zn.some(o=>`${o}fired`===i))){const i=a.replace("fired","");(r=(s=t._eventHandlers)==null?void 0:s[i])==null||r.call(e,new Event(i.replace("on","")))}}}}),ea=["link","style","script","noscript"],ta={hooks:{"tag:normalise":({tag:n})=>{n.key&&ea.includes(n.tag)&&(n.props["data-hid"]=n._h=_n(n.key))}}},na={hooks:{"tags:resolve":n=>{const e=t=>{var s;return(s=n.tags.find(r=>r._d===t))==null?void 0:s._p};for(const{prefix:t,offset:s}of qr)for(const r of n.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(t))){const a=e(r.tagPriority.replace(t,""));typeof a<"u"&&(r._p=a+s)}n.tags.sort((t,s)=>t._p-s._p).sort((t,s)=>Tt(t)-Tt(s))}}},sa={meta:"content",link:"href",htmlAttrs:"lang"},ra=n=>({hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,s=(o=t.find(l=>l.tag==="title"))==null?void 0:o.textContent,r=t.findIndex(l=>l.tag==="templateParams"),a=r!==-1?t[r].props:{},i=a.separator||"|";delete a.separator,a.pageTitle=wt(a.pageTitle||s||"",a,i);for(const l of t.filter(c=>c.processTemplateParams!==!1)){const c=sa[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=wt(l.props[c],a,i):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=wt(l[u],a,i))})}n._templateParams=a,n._separator=i,e.tags=t.filter(l=>l.tag!=="templateParams")}}}),aa={hooks:{"tags:resolve":n=>{const{tags:e}=n;let t=e.findIndex(r=>r.tag==="titleTemplate");const s=e.findIndex(r=>r.tag==="title");if(s!==-1&&t!==-1){const r=Hn(e[t].textContent,e[s].textContent);r!==null?e[s].textContent=r||e[s].textContent:delete e[s]}else if(t!==-1){const r=Hn(e[t].textContent);r!==null&&(e[t].textContent=r,e[t].tag="title",t=-1)}t!==-1&&delete e[t],n.tags=e.filter(Boolean)}}},ia={hooks:{"tags:afterResolve":function(n){for(const e of n.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let vs;function oa(n={}){const e=la(n);return e.use(Jr()),vs=e}function Wn(n,e){return!n||n==="server"&&e||n==="client"&&!e}function la(n={}){const e=Dr();e.addHooks(n.hooks||{}),n.document=n.document||(Hr?document:void 0);const t=!n.document,s=()=>{o.dirty=!0,e.callHook("entries:updated",o)};let r=0,a=[];const i=[],o={plugins:i,dirty:!1,resolvedOptions:n,hooks:e,headEntries(){return a},use(l){const c=typeof l=="function"?l(o):l;(!c.key||!i.some(u=>u.key===c.key))&&(i.push(c),Wn(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return Wn(u.mode,t)&&(a.push(u),s()),{dispose(){a=a.filter(d=>d._i!==u._i),e.callHook("entries:updated",o),s()},patch(d){a=a.map(f=>(f._i===u._i&&(f.input=u.input=d),f)),s()}}},async resolveTags(){const l={tags:[],entries:[...a]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const d of await Wr(c)){const f={tag:d,entry:c,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[Kr,Qr,Xr,ta,na,ra,aa,ia,...(n==null?void 0:n.plugins)||[]].forEach(l=>o.use(l)),o.hooks.callHook("init",o),o}function ca(){return vs}const ua=Js.startsWith("3");function da(n){return typeof n=="function"?n():bn(n)}function Ot(n,e=""){if(n instanceof Promise)return n;const t=da(n);return!n||!t?t:Array.isArray(t)?t.map(s=>Ot(s,e)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,bn(r)]:[s,Ot(r,s)])):t}const fa={hooks:{"entries:resolve":function(n){for(const e of n.entries)e.resolvedInput=Ot(e.input)}}},ws="usehead";function pa(n){return{install(t){ua&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(ws,n))}}.install}function ha(n={}){n.domDelayFn=n.domDelayFn||(t=>Ct(()=>setTimeout(()=>t(),0)));const e=oa(n);return e.use(fa),e.install=pa(e),e}const qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bn="__unhead_injection_handler__";function ma(){if(Bn in qn)return qn[Bn]();const n=ls(ws);return n||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),n||ca()}function ga(n,e={}){const t=e.head||ma();if(t)return t.ssr?t.push(n,e):ya(t,n,e)}function ya(n,e,t={}){const s=T(!1),r=T({});Ue(()=>{r.value=s.value?{}:Ot(e)});const a=n.push(r.value,t);return Y(r,o=>{a.patch(o)}),cs()&&(Ys(()=>{a.dispose()}),Ks(()=>{s.value=!0}),Qs(()=>{s.value=!1})),a}function ks(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function K(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!1})}const Re=S({page:0,clicks:0});let va=[],wa=[];K(Re,"$syncUp",!0);K(Re,"$syncDown",!0);K(Re,"$paused",!1);K(Re,"$onSet",n=>va.push(n));K(Re,"$onPatch",n=>wa.push(n));ks();K(Re,"$patch",async()=>!1);function bs(n,e,t=!1){const s=[];let r=!1,a=!1,i,o;const l=S(e);function c(p){s.push(p)}function u(p,m){l[p]!==m&&(clearTimeout(i),r=!0,l[p]=m,i=setTimeout(()=>r=!1,0))}function d(p){r||(clearTimeout(o),a=!0,Object.entries(p).forEach(([m,g])=>{l[m]=g}),o=setTimeout(()=>a=!1,0))}function f(p){let m;t?t&&window.addEventListener("storage",y=>{y&&y.key===p&&y.newValue&&d(JSON.parse(y.newValue))}):(m=new BroadcastChannel(p),m.addEventListener("message",y=>d(y.data)));function g(){!t&&m&&!a?m.postMessage(Zs(l)):t&&!a&&window.localStorage.setItem(p,JSON.stringify(l)),r||s.forEach(y=>y(l))}if(Y(l,g,{deep:!0,flush:"sync"}),t){const y=window.localStorage.getItem(p);y&&d(JSON.parse(y))}}return{init:f,onPatch:c,patch:u,state:l}}const{init:ka,onPatch:ba,patch:Xe,state:Zo}=bs(Re,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ne=S({});let Sa=[],_a=[];K(Ne,"$syncUp",!0);K(Ne,"$syncDown",!0);K(Ne,"$paused",!1);K(Ne,"$onSet",n=>Sa.push(n));K(Ne,"$onPatch",n=>_a.push(n));ks();K(Ne,"$patch",async()=>!1);const{init:Ma,onPatch:Xo,patch:el,state:tl}=bs(Ne,{},!1),Ht="$$slidev-clicks-context",Mn="$$slidev-page",Ss="$$slidev-slide-element",Aa="$$slidev-slide-scale",La="$$slidev-context",nl="$$slidev-route",An="$$slidev-render-context",Ca="$$slidev-fontmatter",Ta="$$slidev-slide-zoom",kt="slidev-vclick-target",et="slidev-vclick-hidden",tt="slidev-vclick-fade",Yt="slidev-vclick-hidden-explicitly",Kt="slidev-vclick-current",Qt="slidev-vclick-prior",bt=999999,Oa=["localhost","127.0.0.1"],xa=["clicks","clicksStart","disabled","hide","hideInToc","layout","level","preload","routeAlias","src","title","transition","zoom","dragPos"],sl=[...xa,"theme","titleTemplate","info","author","keywords","presenter","download","exportFilename","export","highlighter","lineNumbers","monaco","monacoTypesSource","monacoTypesAdditionalPackages","monacoRunAdditionalDeps","remoteAssets","selectable","record","colorSchema","routerMode","aspectRatio","canvasWidth","themeConfig","favicon","plantUmlServer","fonts","defaults","drawings","htmlAttrs","mdc","contextMenu"],Ln=T(!1),Cn=Symbol.for("yaml.alias"),Ia=Symbol.for("yaml.document"),De=Symbol.for("yaml.map"),_s=Symbol.for("yaml.pair"),Tn=Symbol.for("yaml.scalar"),dt=Symbol.for("yaml.seq"),se=Symbol.for("yaml.node.type"),Ye=n=>!!n&&typeof n=="object"&&n[se]===Cn,Gt=n=>!!n&&typeof n=="object"&&n[se]===Ia,Ms=n=>!!n&&typeof n=="object"&&n[se]===De,V=n=>!!n&&typeof n=="object"&&n[se]===_s,H=n=>!!n&&typeof n=="object"&&n[se]===Tn,On=n=>!!n&&typeof n=="object"&&n[se]===dt;function U(n){if(n&&typeof n=="object")switch(n[se]){case De:case dt:return!0}return!1}function q(n){if(n&&typeof n=="object")switch(n[se]){case Cn:case De:case Tn:case dt:return!0}return!1}const $a=n=>(H(n)||U(n))&&!!n.anchor,$e=Symbol("break visit"),Ea=Symbol("skip children"),at=Symbol("remove node");function ct(n,e){const t=Pa(e);Gt(n)?ze(null,n.contents,t,Object.freeze([n]))===at&&(n.contents=null):ze(null,n,t,Object.freeze([]))}ct.BREAK=$e;ct.SKIP=Ea;ct.REMOVE=at;function ze(n,e,t,s){const r=Da(n,e,t,s);if(q(r)||V(r))return Ra(n,s,r),ze(n,r,t,s);if(typeof r!="symbol"){if(U(e)){s=Object.freeze(s.concat(e));for(let a=0;a<e.items.length;++a){const i=ze(a,e.items[a],t,s);if(typeof i=="number")a=i-1;else{if(i===$e)return $e;i===at&&(e.items.splice(a,1),a-=1)}}}else if(V(e)){s=Object.freeze(s.concat(e));const a=ze("key",e.key,t,s);if(a===$e)return $e;a===at&&(e.key=null);const i=ze("value",e.value,t,s);if(i===$e)return $e;i===at&&(e.value=null)}}return r}function Pa(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function Da(n,e,t,s){var r,a,i,o,l;if(typeof t=="function")return t(n,e,s);if(Ms(e))return(r=t.Map)==null?void 0:r.call(t,n,e,s);if(On(e))return(a=t.Seq)==null?void 0:a.call(t,n,e,s);if(V(e))return(i=t.Pair)==null?void 0:i.call(t,n,e,s);if(H(e))return(o=t.Scalar)==null?void 0:o.call(t,n,e,s);if(Ye(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,s)}function Ra(n,e,t){const s=e[e.length-1];if(U(s))s.items[n]=t;else if(V(s))n==="key"?s.key=t:s.value=t;else if(Gt(s))s.contents=t;else{const r=Ye(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}function As(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function rt(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let r=0,a=s.length;r<a;++r){const i=s[r],o=rt(n,s,String(r),i);o===void 0?delete s[r]:o!==i&&(s[r]=o)}else if(s instanceof Map)for(const r of Array.from(s.keys())){const a=s.get(r),i=rt(n,s,r,a);i===void 0?s.delete(r):i!==a&&s.set(r,i)}else if(s instanceof Set)for(const r of Array.from(s)){const a=rt(n,s,r,r);a===void 0?s.delete(r):a!==r&&(s.delete(r),s.add(a))}else for(const[r,a]of Object.entries(s)){const i=rt(n,s,r,a);i===void 0?delete s[r]:i!==a&&(s[r]=i)}return n.call(e,t,s)}function X(n,e,t){if(Array.isArray(n))return n.map((s,r)=>X(s,String(r),t));if(n&&typeof n.toJSON=="function"){if(!t||!$a(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=a=>{s.res=a,delete t.onCreate};const r=n.toJSON(e,t);return t.onCreate&&t.onCreate(r),r}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class xn{constructor(e){Object.defineProperty(this,se,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:r,reviver:a}={}){if(!Gt(e))throw new TypeError("A document argument is required");const i={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},o=X(this,"",i);if(typeof r=="function")for(const{count:l,res:c}of i.anchors.values())r(c,l);return typeof a=="function"?rt(a,{"":o},"",o):o}}class Na extends xn{constructor(e){super(Cn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return ct(e,{Node:(s,r)=>{if(r===this)return ct.BREAK;r.anchor===this.source&&(t=r)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:r,maxAliasCount:a}=t,i=this.resolve(r);if(!i){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let o=s.get(i);if(o||(X(i,null,t),o=s.get(i)),!o||o.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(a>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=St(r,i,s)),o.count*o.aliasCount>a)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return o.res}toString(e,t,s){const r=`*${this.source}`;if(e){if(As(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(e.implicitKey)return`${r} `}return r}}function St(n,e,t){if(Ye(e)){const s=e.resolve(n),r=t&&s&&t.get(s);return r?r.count*r.aliasCount:0}else if(U(e)){let s=0;for(const r of e.items){const a=St(n,r,t);a>s&&(s=a)}return s}else if(V(e)){const s=St(n,e.key,t),r=St(n,e.value,t);return Math.max(s,r)}return 1}const Ls=n=>!n||typeof n!="function"&&typeof n!="object";class j extends xn{constructor(e){super(Tn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:X(this.value,e,t)}toString(){return String(this.value)}}j.BLOCK_FOLDED="BLOCK_FOLDED";j.BLOCK_LITERAL="BLOCK_LITERAL";j.PLAIN="PLAIN";j.QUOTE_DOUBLE="QUOTE_DOUBLE";j.QUOTE_SINGLE="QUOTE_SINGLE";function ja(n,e,t){return t.find(s=>{var r;return((r=s.identify)==null?void 0:r.call(s,n))&&!s.format})}function xt(n,e,t){var d,f,p;if(Gt(n)&&(n=n.contents),q(n))return n;if(V(n)){const m=(f=(d=t.schema[De]).createNode)==null?void 0:f.call(d,t.schema,null,t);return m.items.push(n),m}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:r,onTagObj:a,schema:i,sourceObjects:o}=t;let l;if(s&&n&&typeof n=="object"){if(l=o.get(n),l)return l.anchor||(l.anchor=r(n)),new Na(l.anchor);l={anchor:null,node:null},o.set(n,l)}let c=ja(n,e,i.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const m=new j(n);return l&&(l.node=m),m}c=n instanceof Map?i[De]:Symbol.iterator in Object(n)?i[dt]:i[De]}a&&(a(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((p=c==null?void 0:c.nodeClass)==null?void 0:p.from)=="function"?c.nodeClass.from(t.schema,n,t):new j(n);return c.default||(u.tag=c.tag),l&&(l.node=u),u}function Un(n,e,t){let s=t;for(let r=e.length-1;r>=0;--r){const a=e[r];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const i=[];i[a]=s,s=i}else s=new Map([[a,s]])}return xt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Fa=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class In extends xn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>q(s)||V(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Fa(e))this.add(t);else{const[s,...r]=e,a=this.get(s,!0);if(U(a))a.addIn(r,t);else if(a===void 0&&this.schema)this.set(s,Un(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const r=this.get(t,!0);if(U(r))return r.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...r]=e,a=this.get(s,!0);return r.length===0?!t&&H(a)?a.value:a:U(a)?a.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!V(t))return!1;const s=t.value;return s==null||e&&H(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const r=this.get(t,!0);return U(r)?r.hasIn(s):!1}setIn(e,t){const[s,...r]=e;if(r.length===0)this.set(s,t);else{const a=this.get(s,!0);if(U(a))a.setIn(r,t);else if(a===void 0&&this.schema)this.set(s,Un(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}}In.maxFlowStringSingleLineLength=60;const Ha=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function ut(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const We=(n,e,t)=>n.endsWith(`
`)?ut(t,e):t.includes(`
`)?`
`+ut(t,e):(n.endsWith(" ")?"":" ")+t,Cs="flow",on="block",_t="quoted";function Vt(n,e,t="flow",{indentAtStart:s,lineWidth:r=80,minContentWidth:a=20,onFold:i,onOverflow:o}={}){if(!r||r<0)return n;const l=Math.max(1+a,1+r-e.length);if(n.length<=l)return n;const c=[],u={};let d=r-e.length;typeof s=="number"&&(s>r-Math.max(2,a)?c.push(0):d=r-s);let f,p,m=!1,g=-1,y=-1,v=-1;t===on&&(g=Jn(n,g,e.length),g!==-1&&(d=g+l));for(let k;k=n[g+=1];){if(t===_t&&k==="\\"){switch(y=g,n[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}v=g}if(k===`
`)t===on&&(g=Jn(n,g,e.length)),d=g+e.length+l,f=void 0;else{if(k===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const b=n[g+1];b&&b!==" "&&b!==`
`&&b!=="	"&&(f=g)}if(g>=d)if(f)c.push(f),d=f+l,f=void 0;else if(t===_t){for(;p===" "||p==="	";)p=k,k=n[g+=1],m=!0;const b=g>v+1?g-2:y-1;if(u[b])return n;c.push(b),u[b]=!0,d=b+l,f=void 0}else m=!0}p=k}if(m&&o&&o(),c.length===0)return n;i&&i();let w=n.slice(0,c[0]);for(let k=0;k<c.length;++k){const b=c[k],A=c[k+1]||n.length;b===0?w=`
${e}${n.slice(0,A)}`:(t===_t&&u[b]&&(w+=`${n[b]}\\`),w+=`
${e}${n.slice(b+1,A)}`)}return w}function Jn(n,e,t){let s=e,r=e+1,a=n[r];for(;a===" "||a==="	";)if(e<r+t)a=n[++e];else{do a=n[++e];while(a&&a!==`
`);s=e,r=e+1,a=n[r]}return s}const zt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Wt=n=>/^(%|---|\.\.\.)/m.test(n);function Ga(n,e,t){if(!e||e<0)return!1;const s=e-t,r=n.length;if(r<=s)return!1;for(let a=0,i=0;a<r;++a)if(n[a]===`
`){if(a-i>s)return!0;if(i=a+1,r-i<=s)return!1}return!0}function it(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,r=e.options.doubleQuotedMinMultiLineLength,a=e.indent||(Wt(n)?"  ":"");let i="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(i+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{i+=t.slice(o,l);const u=t.substr(l+2,4);switch(u){case"0000":i+="\\0";break;case"0007":i+="\\a";break;case"000b":i+="\\v";break;case"001b":i+="\\e";break;case"0085":i+="\\N";break;case"00a0":i+="\\_";break;case"2028":i+="\\L";break;case"2029":i+="\\P";break;default:u.substr(0,2)==="00"?i+="\\x"+u.substr(2):i+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<r)l+=1;else{for(i+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)i+=`
`,l+=2;i+=a,t[l+2]===" "&&(i+="\\"),l+=1,o=l+1}break;default:l+=1}return i=o?i+t.slice(o):t,s?i:Vt(i,a,_t,zt(e,!1))}function ln(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return it(n,e);const t=e.indent||(Wt(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:Vt(s,t,Cs,zt(e,!1))}function qe(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=it;else{const r=n.includes('"'),a=n.includes("'");r&&!a?s=ln:a&&!r?s=it:s=t?ln:it}return s(n,e)}let cn;try{cn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{cn=/\n+(?!\n|$)/g}function Mt({comment:n,type:e,value:t},s,r,a){const{blockQuote:i,commentString:o,lineWidth:l}=s.options;if(!i||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return qe(t,s);const c=s.indent||(s.forceBlockIndent||Wt(t)?"  ":""),u=i==="literal"?!0:i==="folded"||e===j.BLOCK_FOLDED?!1:e===j.BLOCK_LITERAL?!0:!Ga(t,l,c.length);if(!t)return u?`|
`:`>
`;let d,f;for(f=t.length;f>0;--f){const M=t[f-1];if(M!==`
`&&M!=="	"&&M!==" ")break}let p=t.substring(f);const m=p.indexOf(`
`);m===-1?d="-":t===p||m!==p.length-1?(d="+",a&&a()):d="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(cn,`$&${c}`));let g=!1,y,v=-1;for(y=0;y<t.length;++y){const M=t[y];if(M===" ")g=!0;else if(M===`
`)v=y;else break}let w=t.substring(0,v<y?v+1:y);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let b=(u?"|":">")+(g?c?"2":"1":"")+d;if(n&&(b+=" "+o(n.replace(/ ?[\r\n]+/g," ")),r&&r()),u)return t=t.replace(/\n+/g,`$&${c}`),`${b}
${c}${w}${t}${p}`;t=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);const A=Vt(`${w}${t}${p}`,c,on,zt(s,!0));return`${b}
${c}${A}`}function Va(n,e,t,s){const{type:r,value:a}=n,{actualString:i,implicitKey:o,indent:l,indentStep:c,inFlow:u}=e;if(o&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return qe(a,e);if(!a||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return o||u||!a.includes(`
`)?qe(a,e):Mt(n,e,t,s);if(!o&&!u&&r!==j.PLAIN&&a.includes(`
`))return Mt(n,e,t,s);if(Wt(a)){if(l==="")return e.forceBlockIndent=!0,Mt(n,e,t,s);if(o&&l===c)return qe(a,e)}const d=a.replace(/\n+/g,`$&
${l}`);if(i){const f=g=>{var y;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((y=g.test)==null?void 0:y.test(d))},{compat:p,tags:m}=e.doc.schema;if(m.some(f)||p!=null&&p.some(f))return qe(a,e)}return o?d:Vt(d,l,Cs,zt(e,!1))}function za(n,e,t,s){const{implicitKey:r,inFlow:a}=e,i=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:o}=n;o!==j.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(i.value)&&(o=j.QUOTE_DOUBLE);const l=u=>{switch(u){case j.BLOCK_FOLDED:case j.BLOCK_LITERAL:return r||a?qe(i.value,e):Mt(i,e,t,s);case j.QUOTE_DOUBLE:return it(i.value,e);case j.QUOTE_SINGLE:return ln(i.value,e);case j.PLAIN:return Va(i,e,t,s);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:u,defaultStringType:d}=e.options,f=r&&u||d;if(c=l(f),c===null)throw new Error(`Unsupported default string type ${f}`)}return c}function Wa(n,e){const t=Object.assign({blockQuote:!0,commentString:Ha,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function qa(n,e){var r;if(e.tag){const a=n.filter(i=>i.tag===e.tag);if(a.length>0)return a.find(i=>i.format===e.format)??a[0]}let t,s;if(H(e)){s=e.value;const a=n.filter(i=>{var o;return(o=i.identify)==null?void 0:o.call(i,s)});t=a.find(i=>i.format===e.format)??a.find(i=>!i.format)}else s=e,t=n.find(a=>a.nodeClass&&s instanceof a.nodeClass);if(!t){const a=((r=s==null?void 0:s.constructor)==null?void 0:r.name)??typeof s;throw new Error(`Tag not resolved for ${a} value`)}return t}function Ba(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const r=[],a=(H(n)||U(n))&&n.anchor;a&&As(a)&&(t.add(a),r.push(`&${a}`));const i=n.tag?n.tag:e.default?null:e.tag;return i&&r.push(s.directives.tagString(i)),r.join(" ")}function It(n,e,t,s){var l;if(V(n))return n.toString(e,t,s);if(Ye(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let r;const a=q(n)?n:e.doc.createNode(n,{onTagObj:c=>r=c});r||(r=qa(e.doc.schema.tags,a));const i=Ba(a,r,e);i.length>0&&(e.indentAtStart=(e.indentAtStart??0)+i.length+1);const o=typeof r.stringify=="function"?r.stringify(a,e,t,s):H(a)?za(a,e,t,s):a.toString(e,t,s);return i?H(a)||o[0]==="{"||o[0]==="["?`${i} ${o}`:`${i}
${e.indent}${o}`:o}function Ua({key:n,value:e},t,s,r){const{allNullValues:a,doc:i,indent:o,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:d}}=t;let f=q(n)&&n.comment||null;if(d){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(U(n)){const O="With simple keys, collection cannot be used as a key value";throw new Error(O)}}let p=!d&&(!n||f&&e==null&&!t.inFlow||U(n)||(H(n)?n.type===j.BLOCK_FOLDED||n.type===j.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(d||!a),indent:o+l});let m=!1,g=!1,y=It(n,t,()=>m=!0,()=>g=!0);if(!p&&!t.inFlow&&y.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(a||e==null)return m&&s&&s(),y===""?"?":p?`? ${y}`:y}else if(a&&!d||e==null&&p)return y=`? ${y}`,f&&!m?y+=We(y,t.indent,c(f)):g&&r&&r(),y;m&&(f=null),p?(f&&(y+=We(y,t.indent,c(f))),y=`? ${y}
${o}:`):(y=`${y}:`,f&&(y+=We(y,t.indent,c(f))));let v,w,k;q(e)?(v=!!e.spaceBefore,w=e.commentBefore,k=e.comment):(v=!1,w=null,k=null,e&&typeof e=="object"&&(e=i.createNode(e))),t.implicitKey=!1,!p&&!f&&H(e)&&(t.indentAtStart=y.length+1),g=!1,!u&&l.length>=2&&!t.inFlow&&!p&&On(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let b=!1;const A=It(e,t,()=>b=!0,()=>g=!0);let M=" ";if(f||v||w){if(M=v?`
`:"",w){const O=c(w);M+=`
${ut(O,t.indent)}`}A===""&&!t.inFlow?M===`
`&&(M=`

`):M+=`
${t.indent}`}else if(!p&&U(e)){const O=A[0],I=A.indexOf(`
`),P=I!==-1,G=t.inFlow??e.flow??e.items.length===0;if(P||!G){let te=!1;if(P&&(O==="&"||O==="!")){let L=A.indexOf(" ");O==="&"&&L!==-1&&L<I&&A[L+1]==="!"&&(L=A.indexOf(" ",L+1)),(L===-1||I<L)&&(te=!0)}te||(M=`
${t.indent}`)}}else(A===""||A[0]===`
`)&&(M="");return y+=M+A,t.inFlow?b&&s&&s():k&&!b?y+=We(y,t.indent,c(k)):g&&r&&r(),y}function Ja(n,e){(n==="debug"||n==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const Yn="<<";function Ts(n,e,{key:t,value:s}){if(n!=null&&n.doc.schema.merge&&Ya(t))if(s=Ye(s)?s.resolve(n.doc):s,On(s))for(const r of s.items)Zt(n,e,r);else if(Array.isArray(s))for(const r of s)Zt(n,e,r);else Zt(n,e,s);else{const r=X(t,"",n);if(e instanceof Map)e.set(r,X(s,r,n));else if(e instanceof Set)e.add(r);else{const a=Ka(t,r,n),i=X(s,a,n);a in e?Object.defineProperty(e,a,{value:i,writable:!0,enumerable:!0,configurable:!0}):e[a]=i}}return e}const Ya=n=>n===Yn||H(n)&&n.value===Yn&&(!n.type||n.type===j.PLAIN);function Zt(n,e,t){const s=n&&Ye(t)?t.resolve(n.doc):t;if(!Ms(s))throw new Error("Merge sources must be maps or map aliases");const r=s.toJSON(null,n,Map);for(const[a,i]of r)e instanceof Map?e.has(a)||e.set(a,i):e instanceof Set?e.add(a):Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{value:i,writable:!0,enumerable:!0,configurable:!0});return e}function Ka(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(q(n)&&(t!=null&&t.doc)){const s=Wa(t.doc,{});s.anchors=new Set;for(const a of t.anchors.keys())s.anchors.add(a.anchor);s.inFlow=!0,s.inStringifyKey=!0;const r=n.toString(s);if(!t.mapKeyWarned){let a=JSON.stringify(r);a.length>40&&(a=a.substring(0,36)+'..."'),Ja(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return r}return JSON.stringify(e)}function $n(n,e,t){const s=xt(n,void 0,t),r=xt(e,void 0,t);return new re(s,r)}class re{constructor(e,t=null){Object.defineProperty(this,se,{value:_s}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return q(t)&&(t=t.clone(e)),q(s)&&(s=s.clone(e)),new re(t,s)}toJSON(e,t){const s=t!=null&&t.mapAsMap?new Map:{};return Ts(t,s,this)}toString(e,t,s){return e!=null&&e.doc?Ua(this,e,t,s):JSON.stringify(this)}}function Os(n,e,t){return(e.inFlow??n.flow?Za:Qa)(n,e,t)}function Qa({comment:n,items:e},t,{blockItemPrefix:s,flowChars:r,itemIndent:a,onChompKeep:i,onComment:o}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:a,type:null});let d=!1;const f=[];for(let m=0;m<e.length;++m){const g=e[m];let y=null;if(q(g))!d&&g.spaceBefore&&f.push(""),$t(t,f,g.commentBefore,d),g.comment&&(y=g.comment);else if(V(g)){const w=q(g.key)?g.key:null;w&&(!d&&w.spaceBefore&&f.push(""),$t(t,f,w.commentBefore,d))}d=!1;let v=It(g,u,()=>y=null,()=>d=!0);y&&(v+=We(v,a,c(y))),d&&y&&(d=!1),f.push(s+v)}let p;if(f.length===0)p=r.start+r.end;else{p=f[0];for(let m=1;m<f.length;++m){const g=f[m];p+=g?`
${l}${g}`:`
`}}return n?(p+=`
`+ut(c(n),l),o&&o()):d&&i&&i(),p}function Za({items:n},e,{flowChars:t,itemIndent:s}){const{indent:r,indentStep:a,flowCollectionPadding:i,options:{commentString:o}}=e;s+=a;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,u=0;const d=[];for(let m=0;m<n.length;++m){const g=n[m];let y=null;if(q(g))g.spaceBefore&&d.push(""),$t(e,d,g.commentBefore,!1),g.comment&&(y=g.comment);else if(V(g)){const w=q(g.key)?g.key:null;w&&(w.spaceBefore&&d.push(""),$t(e,d,w.commentBefore,!1),w.comment&&(c=!0));const k=q(g.value)?g.value:null;k?(k.comment&&(y=k.comment),k.commentBefore&&(c=!0)):g.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(c=!0);let v=It(g,l,()=>y=null);m<n.length-1&&(v+=","),y&&(v+=We(v,s,o(y))),!c&&(d.length>u||v.includes(`
`))&&(c=!0),d.push(v),u=d.length}const{start:f,end:p}=t;if(d.length===0)return f+p;if(!c){const m=d.reduce((g,y)=>g+y.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=f;for(const g of d)m+=g?`
${a}${r}${g}`:`
`;return`${m}
${r}${p}`}else return`${f}${i}${d.join(" ")}${i}${p}`}function $t({indent:n,options:{commentString:e}},t,s,r){if(s&&r&&(s=s.replace(/^\n+/,"")),s){const a=ut(e(s),n);t.push(a.trimStart())}}function Pe(n,e){const t=H(e)?e.value:e;for(const s of n)if(V(s)&&(s.key===e||s.key===t||H(s.key)&&s.key.value===t))return s}class Ge extends In{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(De,e),this.items=[]}static from(e,t,s){const{keepUndefined:r,replacer:a}=s,i=new this(e),o=(l,c)=>{if(typeof a=="function")c=a.call(t,l,c);else if(Array.isArray(a)&&!a.includes(l))return;(c!==void 0||r)&&i.items.push($n(l,c,s))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&i.items.sort(e.sortMapEntries),i}add(e,t){var i;let s;V(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new re(e,e==null?void 0:e.value):s=new re(e.key,e.value);const r=Pe(this.items,s.key),a=(i=this.schema)==null?void 0:i.sortMapEntries;if(r){if(!t)throw new Error(`Key ${s.key} already set`);H(r.value)&&Ls(s.value)?r.value.value=s.value:r.value=s.value}else if(a){const o=this.items.findIndex(l=>a(s,l)<0);o===-1?this.items.push(s):this.items.splice(o,0,s)}else this.items.push(s)}delete(e){const t=Pe(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=Pe(this.items,e),r=s==null?void 0:s.value;return(!t&&H(r)?r.value:r)??void 0}has(e){return!!Pe(this.items,e)}set(e,t){this.add(new re(e,t),!0)}toJSON(e,t,s){const r=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(r);for(const a of this.items)Ts(t,r,a);return r}toString(e,t,s){if(!e)return JSON.stringify(this);for(const r of this.items)if(!V(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Os(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}class xs extends In{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(dt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=pt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=pt(e);if(typeof s!="number")return;const r=this.items[s];return!t&&H(r)?r.value:r}has(e){const t=pt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=pt(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const r=this.items[s];H(r)&&Ls(t)?r.value=t:this.items[s]=t}toJSON(e,t){const s=[];t!=null&&t.onCreate&&t.onCreate(s);let r=0;for(const a of this.items)s.push(X(a,String(r++),t));return s}toString(e,t,s){return e?Os(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t)){let i=0;for(let o of t){if(typeof r=="function"){const l=t instanceof Set?o:String(i++);o=r.call(t,l,o)}a.items.push(xt(o,void 0,s))}}return a}}function pt(n){let e=H(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Xa(n,e,t){const{replacer:s}=t,r=new xs(n);r.tag="tag:yaml.org,2002:pairs";let a=0;if(e&&Symbol.iterator in Object(e))for(let i of e){typeof s=="function"&&(i=s.call(e,String(a++),i));let o,l;if(Array.isArray(i))if(i.length===2)o=i[0],l=i[1];else throw new TypeError(`Expected [key, value] tuple: ${i}`);else if(i&&i instanceof Object){const c=Object.keys(i);if(c.length===1)o=c[0],l=i[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=i;r.items.push($n(o,l,t))}return r}class En extends xs{constructor(){super(),this.add=Ge.prototype.add.bind(this),this.delete=Ge.prototype.delete.bind(this),this.get=Ge.prototype.get.bind(this),this.has=Ge.prototype.has.bind(this),this.set=Ge.prototype.set.bind(this),this.tag=En.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items){let a,i;if(V(r)?(a=X(r.key,"",t),i=X(r.value,a,t)):a=X(r,"",t),s.has(a))throw new Error("Ordered maps must not include duplicate keys");s.set(a,i)}return s}static from(e,t,s){const r=Xa(e,t,s),a=new this;return a.items=r.items,a}}En.tag="tag:yaml.org,2002:omap";class Pn extends Ge{constructor(e){super(e),this.tag=Pn.tag}add(e){let t;V(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new re(e.key,null):t=new re(e,null),Pe(this.items,t.key)||this.items.push(t)}get(e,t){const s=Pe(this.items,e);return!t&&V(s)?H(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=Pe(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new re(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t))for(let i of t)typeof r=="function"&&(i=r.call(t,i,i)),a.items.push($n(i,null,s));return a}}Pn.tag="tag:yaml.org,2002:set";function ei(n,e){if(!e||e==="all"||e==="*")return jn(1,n+1);if(e==="none")return[];const t=[];for(const s of e.split(/[,;]/g))if(!s.includes("-"))t.push(+s);else{const[r,a]=s.split("-",2);t.push(...jn(+r,a?+a+1:n+1))}return Ar(t).filter(s=>s<=n).sort((s,r)=>s-r)}function rl(){const n=T(Date.now()),e=Xs({interval:1e3}),t=h(()=>{const r=(e.value-n.value)/1e3,a=Math.floor(r%60).toString().padStart(2,"0");return`${Math.floor(r/60).toString().padStart(2,"0")}:${a}`});function s(){n.value=e.value}return{timer:t,resetTimer:s}}function Dn(n=5){const e=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=t.length;for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*s)));return e.join("")}function al(n,e,t,s){const r=ei(e+t-1,n);for(let a=0;a<e;a++){const i=s(a),o=r.includes(a+t);for(const l of i)l.classList.toggle("slidev-code-highlighted",o),l.classList.toggle("slidev-code-dishonored",!o),l.classList.toggle("highlighted",o),l.classList.toggle("dishonored",!o)}}const ti="modulepreload",ni=function(n){return"/genaiscript/slides/networking-apr2024/"+n},Kn={},C=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(t.map(o=>{if(o=ni(o),o in Kn)return;Kn[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":ti,l||(u.as="script",u.crossOrigin=""),u.href=o,i&&u.setAttribute("nonce",i),document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},Is=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},si={},ri={class:"px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono"};function ai(n,e){return us(),er("div",ri," An error occurred on this slide. Check the terminal for more information. ")}const ii=Is(si,[["render",ai],["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/layouts/error.vue"]]),$=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"})),le=S({theme:"default",title:"GenAIScript",titleTemplate:"%s",favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",info:`## GenAIScript
Scripting for Generative AI.<br/>
[Docs](https://microsoft.github.io/genaiscript/) | [GitHub](https://github.com/microsoft/genaiscript/)
`,class:"text-center",highlighter:"shiki",drawings:{persist:!1},mdc:!0,layout:"center"}),oi=S({layout:h(()=>le.layout),transition:h(()=>le.transition),class:h(()=>le.class),clicks:h(()=>le.clicks),name:h(()=>le.name),preload:h(()=>le.preload),slide:{index:0,content:"",note:"",title:"GenAIScript",noteHTML:"",raw:"",frontmatter:le,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",start:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),ce=S({}),li=S({layout:h(()=>ce.layout),transition:h(()=>ce.transition),class:h(()=>ce.class),clicks:h(()=>ce.clicks),name:h(()=>ce.name),preload:h(()=>ce.preload),slide:{index:1,importChain:[{raw:`---
src: pages/aisw-intro.md
---
`,content:"",frontmatter:{src:"pages/aisw-intro.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/aisw-intro.md"},frontmatterRaw:`src: pages/aisw-intro.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:1,start:39,contentStart:42,end:43,imports:[{raw:`# AI Requires Us to Rethink Software
&nbsp;
### **Plain Old Software (POSW)** = all pre-LLM SW 
&nbsp;
### **AI Software (AISW)** = SW that uses LLMs at runtime
&nbsp;

<v-click>

### Why do we care? **AISW can do things that POSW could never do!**
- Examples: understand images, summarize and criticize content,write programs, etc.

## **GenAIScript is the scripting language for AISW**

</v-click>`,title:"AI Requires Us to Rethink Software",level:1,content:`# AI Requires Us to Rethink Software
&nbsp;
### **Plain Old Software (POSW)** = all pre-LLM SW 
&nbsp;
### **AI Software (AISW)** = SW that uses LLMs at runtime
&nbsp;

<v-click>

### Why do we care? **AISW can do things that POSW could never do!**
- Examples: understand images, summarize and criticize content,write programs, etc.

## **GenAIScript is the scripting language for AISW**

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro.md",index:0,start:0,contentStart:0,end:15}]}],content:"",note:"",title:"AI Requires Us to Rethink Software",level:1,noteHTML:"",raw:"",frontmatter:ce,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro.md",start:0,id:1,no:2},__clicksContext:null,__preloaded:!1}),ue=S({layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"}),ci=S({layout:h(()=>ue.layout),transition:h(()=>ue.transition),class:h(()=>ue.class),clicks:h(()=>ue.clicks),name:h(()=>ue.name),preload:h(()=>ue.preload),slide:{index:2,importChain:[{raw:`---
src: pages/vision.md
---
`,content:"",frontmatter:{src:"pages/vision.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vision.md"},frontmatterRaw:`src: pages/vision.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:2,start:43,contentStart:46,end:47,imports:[{raw:`---
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

`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",index:0,start:0,contentStart:6,end:23}]}],content:"",note:"",title:"Empower Users with AI-Enhanced Scripts",level:1,noteHTML:"",raw:"",frontmatter:ue,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",start:0,id:2,no:3},__clicksContext:null,__preloaded:!1}),de=S({layout:"two-cols-header"}),ui=S({layout:h(()=>de.layout),transition:h(()=>de.transition),class:h(()=>de.class),clicks:h(()=>de.clicks),name:h(()=>de.name),preload:h(()=>de.preload),slide:{index:3,importChain:[{raw:`---
src: pages/example-gpt-v.md
---
`,content:"",frontmatter:{src:"pages/example-gpt-v.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/example-gpt-v.md"},frontmatterRaw:`src: pages/example-gpt-v.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:3,start:47,contentStart:50,end:51,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v.md",index:0,start:0,contentStart:3,end:33}]}],content:"",note:"",title:"GenAIScript Example: Translate Any Diagram to Text",level:1,noteHTML:"",raw:"",frontmatter:de,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v.md",start:0,id:3,no:4},__clicksContext:null,__preloaded:!1}),fe=S({layout:"two-cols-header",backgroundSize:"20em 70%"}),di=S({layout:h(()=>fe.layout),transition:h(()=>fe.transition),class:h(()=>fe.class),clicks:h(()=>fe.clicks),name:h(()=>fe.name),preload:h(()=>fe.preload),slide:{index:4,importChain:[{raw:`---
src: pages/example-gpt-v-result.md
---
`,content:"",frontmatter:{src:"pages/example-gpt-v-result.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/example-gpt-v-result.md"},frontmatterRaw:`src: pages/example-gpt-v-result.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:4,start:51,contentStart:54,end:55,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v-result.md",index:0,start:0,contentStart:4,end:20}]}],content:"",note:"",title:"Example: Script Result",level:1,noteHTML:"",raw:"",frontmatter:fe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/example-gpt-v-result.md",start:0,id:4,no:5},__clicksContext:null,__preloaded:!1}),pe=S({}),fi=S({layout:h(()=>pe.layout),transition:h(()=>pe.transition),class:h(()=>pe.class),clicks:h(()=>pe.clicks),name:h(()=>pe.name),preload:h(()=>pe.preload),slide:{index:5,importChain:[{raw:`---
src: pages/script.md
---
`,content:"",frontmatter:{src:"pages/script.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script.md"},frontmatterRaw:`src: pages/script.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:5,start:55,contentStart:58,end:59,imports:[{raw:`
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

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",index:0,start:0,contentStart:0,end:40}]}],content:"",note:"",title:"Generative AI Scripting",level:1,noteHTML:"",raw:"",frontmatter:pe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",start:0,id:5,no:6},__clicksContext:null,__preloaded:!1}),he=S({}),pi=S({layout:h(()=>he.layout),transition:h(()=>he.transition),class:h(()=>he.class),clicks:h(()=>he.clicks),name:h(()=>he.name),preload:h(()=>he.preload),slide:{index:6,importChain:[{raw:`---
src: pages/script-prompt.md
---
`,content:"",frontmatter:{src:"pages/script-prompt.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-prompt.md"},frontmatterRaw:`src: pages/script-prompt.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:6,start:59,contentStart:62,end:63,imports:[{raw:`
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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"Context x Script = Prompt",level:1,noteHTML:"",raw:"",frontmatter:he,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",start:0,id:6,no:7},__clicksContext:null,__preloaded:!1}),me=S({}),hi=S({layout:h(()=>me.layout),transition:h(()=>me.transition),class:h(()=>me.class),clicks:h(()=>me.clicks),name:h(()=>me.name),preload:h(()=>me.preload),slide:{index:7,importChain:[{raw:`---
src: pages/system-scripts.md
---
`,content:"",frontmatter:{src:"pages/system-scripts.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/system-scripts.md"},frontmatterRaw:`src: pages/system-scripts.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:7,start:63,contentStart:66,end:67,imports:[{raw:`# System Scripts and Microformats

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"System Scripts and Microformats",level:1,noteHTML:"",raw:"",frontmatter:me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",start:0,id:7,no:8},__clicksContext:null,__preloaded:!1}),ge=S({}),mi=S({layout:h(()=>ge.layout),transition:h(()=>ge.transition),class:h(()=>ge.class),clicks:h(()=>ge.clicks),name:h(()=>ge.name),preload:h(()=>ge.preload),slide:{index:8,importChain:[{raw:`---
src: pages/llm-invocation.md
---
`,content:"",frontmatter:{src:"pages/llm-invocation.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/llm-invocation.md"},frontmatterRaw:`src: pages/llm-invocation.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:8,start:67,contentStart:70,end:71,imports:[{raw:`
# Prompt + LLM = Response

- authentication: \`.env\` or environment variables
- OpenAI API, Azure OpenAI, OLlama, AICI, ...

<br/>
<br/>

\`\`\`mermaid
stateDiagram
  direction LR
    prompt : prompt (system + user messages)
    response: response (raw text)
    pre: ...
    pre --> prompt
    prompt --> response : LLM (OpenAI Chat API)
\`\`\`
`,title:"Prompt + LLM = Response",level:1,content:`# Prompt + LLM = Response

- authentication: \`.env\` or environment variables
- OpenAI API, Azure OpenAI, OLlama, AICI, ...

<br/>
<br/>

\`\`\`mermaid
stateDiagram
  direction LR
    prompt : prompt (system + user messages)
    response: response (raw text)
    pre: ...
    pre --> prompt
    prompt --> response : LLM (OpenAI Chat API)
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",index:0,start:0,contentStart:0,end:19}]}],content:"",note:"",title:"Prompt + LLM = Response",level:1,noteHTML:"",raw:"",frontmatter:ge,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",start:0,id:8,no:9},__clicksContext:null,__preloaded:!1}),ye=S({}),gi=S({layout:h(()=>ye.layout),transition:h(()=>ye.transition),class:h(()=>ye.class),clicks:h(()=>ye.clicks),name:h(()=>ye.name),preload:h(()=>ye.preload),slide:{index:9,importChain:[{raw:`---
src: pages/response-processing.md
---
`,content:"",frontmatter:{src:"pages/response-processing.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/response-processing.md"},frontmatterRaw:`src: pages/response-processing.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:9,start:71,contentStart:74,end:75,imports:[{raw:`

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Response x Parsers = Files + Data",level:1,noteHTML:"",raw:"",frontmatter:ye,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",start:0,id:9,no:10},__clicksContext:null,__preloaded:!1}),ve=S({}),yi=S({layout:h(()=>ve.layout),transition:h(()=>ve.transition),class:h(()=>ve.class),clicks:h(()=>ve.clicks),name:h(()=>ve.name),preload:h(()=>ve.preload),slide:{index:10,importChain:[{raw:`---
src: pages/vscode.md
---
`,content:"",frontmatter:{src:"pages/vscode.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vscode.md"},frontmatterRaw:`src: pages/vscode.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:10,start:75,contentStart:78,end:79,imports:[{raw:`# Dev Experience

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

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",index:0,start:0,contentStart:0,end:28}]}],content:"",note:"",title:"Dev Experience",level:1,noteHTML:"",raw:"",frontmatter:ve,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",start:0,id:10,no:11},__clicksContext:null,__preloaded:!1}),we=S({}),vi=S({layout:h(()=>we.layout),transition:h(()=>we.transition),class:h(()=>we.class),clicks:h(()=>we.clicks),name:h(()=>we.name),preload:h(()=>we.preload),slide:{index:11,importChain:[{raw:`---
src: pages/image-alt-text.md
---
`,content:"",frontmatter:{src:"pages/image-alt-text.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/image-alt-text.md"},frontmatterRaw:`src: pages/image-alt-text.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:11,start:79,contentStart:82,end:83,imports:[{raw:`# Example: Image Alt Text Generator

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",index:0,start:0,contentStart:0,end:32}]}],content:"",note:"",title:"Example: Image Alt Text Generator",level:1,noteHTML:"",raw:"",frontmatter:we,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",start:0,id:11,no:12},__clicksContext:null,__preloaded:!1}),ke=S({}),wi=S({layout:h(()=>ke.layout),transition:h(()=>ke.transition),class:h(()=>ke.class),clicks:h(()=>ke.clicks),name:h(()=>ke.name),preload:h(()=>ke.preload),slide:{index:12,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:12,start:83,contentStart:86,end:87,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Example: Translating MakeCode",level:1,noteHTML:"",raw:"",frontmatter:ke,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:0,id:12,no:13},__clicksContext:null,__preloaded:!1}),be=S({}),ki=S({layout:h(()=>be.layout),transition:h(()=>be.transition),class:h(()=>be.class),clicks:h(()=>be.clicks),name:h(()=>be.name),preload:h(()=>be.preload),slide:{index:13,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:12,start:83,contentStart:86,end:87,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Develop the script in VSCode",level:2,noteHTML:"",raw:"",frontmatter:be,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:29,id:13,no:14},__clicksContext:null,__preloaded:!1}),Se=S({}),bi=S({layout:h(()=>Se.layout),transition:h(()=>Se.transition),class:h(()=>Se.class),clicks:h(()=>Se.clicks),name:h(()=>Se.name),preload:h(()=>Se.preload),slide:{index:14,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:12,start:83,contentStart:86,end:87,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Automate with the CLI",level:2,noteHTML:"",raw:"",frontmatter:Se,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:59,id:14,no:15},__clicksContext:null,__preloaded:!1}),_e=S({layout:"image-right",image:"/makecode-translate-view.png",backgroundSize:"contain"}),Si=S({layout:h(()=>_e.layout),transition:h(()=>_e.transition),class:h(()=>_e.class),clicks:h(()=>_e.clicks),name:h(()=>_e.name),preload:h(()=>_e.preload),slide:{index:15,importChain:[{raw:`---
src: pages/makecode-timeline.md
---
`,content:"",frontmatter:{src:"pages/makecode-timeline.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-timeline.md"},frontmatterRaw:`src: pages/makecode-timeline.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:13,start:87,contentStart:90,end:91,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-timeline.md",index:0,start:0,contentStart:7,end:18}]}],content:"",note:"",title:"Timeline and Feedback",level:2,noteHTML:"",raw:"",frontmatter:_e,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-timeline.md",start:0,id:15,no:16},__clicksContext:null,__preloaded:!1}),Me=S({}),_i=S({layout:h(()=>Me.layout),transition:h(()=>Me.transition),class:h(()=>Me.class),clicks:h(()=>Me.clicks),name:h(()=>Me.name),preload:h(()=>Me.preload),slide:{index:16,importChain:[{raw:`---
src: pages/script-vs-agent.md
---
`,content:"",frontmatter:{src:"pages/script-vs-agent.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-vs-agent.md"},frontmatterRaw:`src: pages/script-vs-agent.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:14,start:91,contentStart:94,end:95,imports:[{raw:`# GenAIScript and Agents
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
- We bound the use of the LLM to a specific single request`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-vs-agent.md",index:0,start:0,contentStart:0,end:16}]}],content:"",note:"",title:"GenAIScript and Agents",level:1,noteHTML:"",raw:"",frontmatter:Me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-vs-agent.md",start:0,id:16,no:17},__clicksContext:null,__preloaded:!1}),Ae=S({}),Mi=S({layout:h(()=>Ae.layout),transition:h(()=>Ae.transition),class:h(()=>Ae.class),clicks:h(()=>Ae.clicks),name:h(()=>Ae.name),preload:h(()=>Ae.preload),slide:{index:17,importChain:[{raw:`---
src: pages/research-topics.md
---
`,content:"",frontmatter:{src:"pages/research-topics.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/research-topics.md"},frontmatterRaw:`src: pages/research-topics.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:15,start:95,contentStart:98,end:99,imports:[{raw:`# Research Challenges for GenAIScript
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
    - Verifying correct generations`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/research-topics.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Research Challenges for GenAIScript",level:1,noteHTML:"",raw:"",frontmatter:Ae,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/research-topics.md",start:0,id:17,no:18},__clicksContext:null,__preloaded:!1}),Le=S({}),Ai=S({layout:h(()=>Le.layout),transition:h(()=>Le.transition),class:h(()=>Le.class),clicks:h(()=>Le.clicks),name:h(()=>Le.name),preload:h(()=>Le.preload),slide:{index:18,importChain:[{raw:`---
src: pages/summary.md
---
`,content:"",frontmatter:{src:"pages/summary.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/summary.md"},frontmatterRaw:`src: pages/summary.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:16,start:99,contentStart:102,end:103,imports:[{raw:`# Summary: GenAISCript Goals

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
<br/>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/summary.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"Summary: GenAISCript Goals",level:1,noteHTML:"",raw:"",frontmatter:Le,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/summary.md",start:0,id:18,no:19},__clicksContext:null,__preloaded:!1}),Ce=S({}),Li=S({layout:h(()=>Ce.layout),transition:h(()=>Ce.transition),class:h(()=>Ce.class),clicks:h(()=>Ce.clicks),name:h(()=>Ce.name),preload:h(()=>Ce.preload),slide:{index:19,importChain:[{raw:`---
src: pages/questions.md
---
`,content:"",frontmatter:{src:"pages/questions.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/questions.md"},frontmatterRaw:`src: pages/questions.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:17,start:103,contentStart:106,end:107,imports:[{raw:`# Questions?
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
<br/>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/questions.md",index:0,start:0,contentStart:0,end:14}]}],content:"",note:"",title:"Questions?",level:1,noteHTML:"",raw:"",frontmatter:Ce,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/questions.md",start:0,id:19,no:20},__clicksContext:null,__preloaded:!1}),Te=S({}),Ci=S({layout:h(()=>Te.layout),transition:h(()=>Te.transition),class:h(()=>Te.class),clicks:h(()=>Te.clicks),name:h(()=>Te.name),preload:h(()=>Te.preload),slide:{index:20,importChain:[{raw:`---
src: pages/backup.md
---
`,content:"",frontmatter:{src:"pages/backup.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/backup.md"},frontmatterRaw:`src: pages/backup.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:18,start:107,contentStart:110,end:111,imports:[{raw:`# Backup Slides
`,title:"Backup Slides",level:1,content:"# Backup Slides",frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/backup.md",index:0,start:0,contentStart:0,end:2}]}],content:"",note:"",title:"Backup Slides",level:1,noteHTML:"",raw:"",frontmatter:Te,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/backup.md",start:0,id:20,no:21},__clicksContext:null,__preloaded:!1}),Oe=S({}),Ti=S({layout:h(()=>Oe.layout),transition:h(()=>Oe.transition),class:h(()=>Oe.class),clicks:h(()=>Oe.clicks),name:h(()=>Oe.name),preload:h(()=>Oe.preload),slide:{index:21,importChain:[{raw:`---
src: pages/stack-2.md
---
`,content:"",frontmatter:{src:"pages/stack-2.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/stack-2.md"},frontmatterRaw:`src: pages/stack-2.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:19,start:111,contentStart:114,end:115,imports:[{raw:`<p></p>

![](/system-stack-2.png)
#### See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/`,title:"See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/",level:4,content:`<p></p>

![](/system-stack-2.png)
#### See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2.md",index:0,start:0,contentStart:0,end:4}]}],content:"",note:"",title:"See https://blog.sigplan.org/2024/04/23/ai-software-should-be-more-like-plain-old-software/",level:4,noteHTML:"",raw:"",frontmatter:Oe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2.md",start:0,id:21,no:22},__clicksContext:null,__preloaded:!1}),xe=S({}),Oi=S({layout:h(()=>xe.layout),transition:h(()=>xe.transition),class:h(()=>xe.class),clicks:h(()=>xe.clicks),name:h(()=>xe.name),preload:h(()=>xe.preload),slide:{index:22,importChain:[{raw:`---
src: pages/stack-2-elements.md
---
`,content:"",frontmatter:{src:"pages/stack-2-elements.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/stack-2-elements.md"},frontmatterRaw:`src: pages/stack-2-elements.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:20,start:115,contentStart:118,end:119,imports:[{raw:`# Components of System Stack 2.0
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
    - Coordinated services: GenAIScript`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2-elements.md",index:0,start:0,contentStart:0,end:17}]}],content:"",note:"",title:"Components of System Stack 2.0",level:1,noteHTML:"",raw:"",frontmatter:xe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/stack-2-elements.md",start:0,id:22,no:23},__clicksContext:null,__preloaded:!1}),Ie=S({}),xi=S({layout:h(()=>Ie.layout),transition:h(()=>Ie.transition),class:h(()=>Ie.class),clicks:h(()=>Ie.clicks),name:h(()=>Ie.name),preload:h(()=>Ie.preload),slide:{index:23,importChain:[{raw:`---
src: pages/tla-plus.md
---

`,content:"",frontmatter:{src:"pages/tla-plus.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/tla-plus.md"},frontmatterRaw:`src: pages/tla-plus.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-networking-apr2024.md",index:21,start:119,contentStart:122,end:124,imports:[{raw:`# Example: TLA+ Linter

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",index:0,start:0,contentStart:0,end:31}]}],content:"",note:"",title:"Example: TLA+ Linter",level:1,noteHTML:"",raw:"",frontmatter:Ie,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",start:0,id:23,no:24},__clicksContext:null,__preloaded:!1}),Ii=[{no:1,meta:oi,component:async()=>{try{return await C(()=>import("./slidev/1-BIJpvMvx.js"),__vite__mapDeps([0,1,2,3,4]))}catch(n){return console.error("Failed to load slide 1:",n),$}}},{no:2,meta:li,component:async()=>{try{return await C(()=>import("./slidev/2-C5MU1OUK.js"),__vite__mapDeps([5,6,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 2:",n),$}}},{no:3,meta:ci,component:async()=>{try{return await C(()=>import("./slidev/3-ciOLYQsl.js"),__vite__mapDeps([8,6,1,2,9,3,4]))}catch(n){return console.error("Failed to load slide 3:",n),$}}},{no:4,meta:ui,component:async()=>{try{return await C(()=>import("./slidev/4-MPdYvOHK.js"),__vite__mapDeps([10,6,1,2,11,12,13,14,3,4]))}catch(n){return console.error("Failed to load slide 4:",n),$}}},{no:5,meta:di,component:async()=>{try{return await C(()=>import("./slidev/5-DGRSUfqO.js"),__vite__mapDeps([15,1,13,14,2,3,4]))}catch(n){return console.error("Failed to load slide 5:",n),$}}},{no:6,meta:fi,component:async()=>{try{return await C(()=>import("./slidev/6-CWYT_R7r.js"),__vite__mapDeps([16,6,1,2,11,12,7,3,4]))}catch(n){return console.error("Failed to load slide 6:",n),$}}},{no:7,meta:pi,component:async()=>{try{return await C(()=>import("./slidev/7-D1BcuexJ.js"),__vite__mapDeps([17,18,1,19,7,2,3,4]))}catch(n){return console.error("Failed to load slide 7:",n),$}}},{no:8,meta:hi,component:async()=>{try{return await C(()=>import("./slidev/8-MdxxPb3r.js"),__vite__mapDeps([20,11,12,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 8:",n),$}}},{no:9,meta:mi,component:async()=>{try{return await C(()=>import("./slidev/9-e-PHcBPQ.js"),__vite__mapDeps([21,18,1,19,7,2,3,4]))}catch(n){return console.error("Failed to load slide 9:",n),$}}},{no:10,meta:gi,component:async()=>{try{return await C(()=>import("./slidev/10-CWT5luN7.js"),__vite__mapDeps([22,18,1,19,7,2,3,4]))}catch(n){return console.error("Failed to load slide 10:",n),$}}},{no:11,meta:yi,component:async()=>{try{return await C(()=>import("./slidev/11--Av7iTh0.js"),__vite__mapDeps([23,6,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 11:",n),$}}},{no:12,meta:vi,component:async()=>{try{return await C(()=>import("./slidev/12-BCGQRVZ4.js"),__vite__mapDeps([24,11,12,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 12:",n),$}}},{no:13,meta:wi,component:async()=>{try{return await C(()=>import("./slidev/13-C2vVcUoW.js"),__vite__mapDeps([25,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 13:",n),$}}},{no:14,meta:ki,component:async()=>{try{return await C(()=>import("./slidev/14-4nQpDwhn.js"),__vite__mapDeps([26,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 14:",n),$}}},{no:15,meta:bi,component:async()=>{try{return await C(()=>import("./slidev/15-G4x8OHUw.js"),__vite__mapDeps([27,11,12,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 15:",n),$}}},{no:16,meta:Si,component:async()=>{try{return await C(()=>import("./slidev/16-it8IU0sM.js"),__vite__mapDeps([28,1,9,2,3,4]))}catch(n){return console.error("Failed to load slide 16:",n),$}}},{no:17,meta:_i,component:async()=>{try{return await C(()=>import("./slidev/17-DycP4xFG.js"),__vite__mapDeps([29,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 17:",n),$}}},{no:18,meta:Mi,component:async()=>{try{return await C(()=>import("./slidev/18-CWt0_q3H.js"),__vite__mapDeps([30,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 18:",n),$}}},{no:19,meta:Ai,component:async()=>{try{return await C(()=>import("./slidev/19-OLVumvIu.js"),__vite__mapDeps([31,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 19:",n),$}}},{no:20,meta:Li,component:async()=>{try{return await C(()=>import("./slidev/20-nqB7Vuwm.js"),__vite__mapDeps([32,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 20:",n),$}}},{no:21,meta:Ci,component:async()=>{try{return await C(()=>import("./slidev/21-Coe0PCMH.js"),__vite__mapDeps([33,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 21:",n),$}}},{no:22,meta:Ti,component:async()=>{try{return await C(()=>import("./22-BqnMIxK9.js"),__vite__mapDeps([34,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 22:",n),$}}},{no:23,meta:Oi,component:async()=>{try{return await C(()=>import("./slidev/23-B3zyWYyZ.js"),__vite__mapDeps([35,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 23:",n),$}}},{no:24,meta:xi,component:async()=>{try{return await C(()=>import("./slidev/24-rjQAepC5.js"),__vite__mapDeps([36,11,12,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 24:",n),$}}}],ne=Sn(Ii);function qt(n){return ne.value.find(e=>{var t;return e.no===+n||((t=e.meta.slide)==null?void 0:t.frontmatter.routeAlias)===n})}function Be(n,e){var s;(typeof n=="number"||typeof n=="string")&&(n=qt(n));const t=((s=n.meta.slide)==null?void 0:s.frontmatter.routeAlias)??n.no;return e?`/presenter/${t}`:`/${t}`}function $i(n,e,{mode:t="replace"}={}){const s=jt();return h({get(){const r=s.currentRoute.value.query[n];return r==null?e:Array.isArray(r)?r.filter(Boolean):r},set(r){Ct(()=>{(s.currentRoute.value.query[n]??(e==null?void 0:e.toString()))!==r.toString()&&s[bn(t)]({query:{...s.currentRoute.value.query,[n]:`${r}`===e?void 0:r}})})}})}const un=T(0);function dn(n){if(n===!1||n==="false")return null;if(n==null||n===!0||n==="true")return"+1";if(typeof n=="string"&&"+-".includes(n[0]))return n;const e=+n;return Number.isNaN(e)?(console.error(`Invalid "at" prop value: ${n}`),null):e}function Ei(n){return Array.isArray(n)?[dn(n[0]),dn(n[1])]:null}function $s(n,e=0,t){const s={get current(){return lt(+n.value,e,s.total)},set current(r){n.value=lt(+r,e,s.total)},clicksStart:e,relativeOffsets:new Map,maxMap:tr(new Map),onMounted(){},calculateSince(r,a=1){const i=dn(r);if(i==null)return null;let o,l,c;if(typeof i=="string"){const u=s.currentOffset,d=+i;o=u+d,l=u+d+a-1,c=d+a-1}else o=i,l=i+a-1,c=0;return{start:o,end:+Number.POSITIVE_INFINITY,max:l,delta:c,currentOffset:h(()=>s.current-o),isCurrent:h(()=>s.current===o),isActive:h(()=>s.current>=o)}},calculateRange(r){const a=Ei(r);if(a==null)return null;const[i,o]=a;let l,c,u;return typeof i=="string"?(l=s.currentOffset+ +i,u=+i):(l=i,u=0),typeof o=="string"?(c=l+ +o,u+=+o):c=o,{start:l,end:c,max:c,delta:u,currentOffset:h(()=>s.current-l),isCurrent:h(()=>s.current===l),isActive:h(()=>l<=s.current&&s.current<c)}},calculate(r){return Array.isArray(r)?s.calculateRange(r):s.calculateSince(r)},register(r,a){if(!a)return;const{delta:i,max:o}=a;s.relativeOffsets.set(r,i),s.maxMap.set(r,o)},unregister(r){s.relativeOffsets.delete(r),s.maxMap.delete(r)},get currentOffset(){return un.value,Sr(...s.relativeOffsets.values())},get total(){return un.value,t??Math.max(0,...s.maxMap.values())}};return s}function Pi(n,e=0){var s,r;const t=((s=n==null?void 0:n.meta.slide)==null?void 0:s.frontmatter.clicksStart)??0;return $s(T(Math.max(e,t)),t,(r=n==null?void 0:n.meta)==null?void 0:r.clicks)}const Di={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Ri(n,e=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let t=n.name.includes("|")?n.name:Di[n.name]||n.name;if(t.includes("|")){const[s,r]=t.split("|").map(a=>a.trim());t=e?r:s}if(t)return{...n,name:t}}function Ni(n,e,t){var r,a;let s=n>0?(r=t==null?void 0:t.meta)==null?void 0:r.transition:(a=e==null?void 0:e.meta)==null?void 0:a.transition;return s||(s=D.transition),Ri(s,n<0)}function Es(n,e,t=1){var r,a,i,o,l,c,u,d,f;const s=(a=(r=e.meta)==null?void 0:r.slide)==null?void 0:a.level;s&&s>t&&n.length>0?Es(n[n.length-1].children,e,t+1):n.push({no:e.no,children:[],level:t,path:Be(((o=(i=e.meta.slide)==null?void 0:i.frontmatter)==null?void 0:o.routeAlias)??e.no,!1),hideInToc:!!((u=(c=(l=e.meta)==null?void 0:l.slide)==null?void 0:c.frontmatter)!=null&&u.hideInToc),title:(f=(d=e.meta)==null?void 0:d.slide)==null?void 0:f.title})}function Ps(n,e,t=!1,s,r){return n.map(a=>{const i={...a,active:a.no===(r==null?void 0:r.value),hasActiveParent:t};return i.children.length>0&&(i.children=Ps(i.children,e,i.active||i.hasActiveParent,i,r)),s&&(i.active||i.activeParent)&&(s.activeParent=!0),i})}function Ds(n,e=1){return n.filter(t=>!t.hideInToc).map(t=>({...t,children:Ds(t.children,e+1)}))}function ji(n,e,t){const s=h(()=>n.value.filter(a=>{var i,o;return(o=(i=a.meta)==null?void 0:i.slide)==null?void 0:o.title}).reduce((a,i)=>(Es(a,i),a),[])),r=h(()=>Ps(s.value,t.value,void 0,void 0,e));return h(()=>Ds(r.value))}function Fi(n,e,t=T(0),s,r,a){const i=h(()=>ne.value.length),o=T(0),l=T(0),c=h(()=>Be(n.value,s.value)),u=h(()=>n.value.no),d=h(()=>{var R;return((R=n.value.meta)==null?void 0:R.layout)||(u.value===1?"cover":"default")}),f=h(()=>e.value.current),p=h(()=>e.value.clicksStart),m=h(()=>e.value.total),g=h(()=>ne.value[Math.min(ne.value.length,u.value+1)-1]),y=h(()=>ne.value[Math.max(1,u.value-1)-1]),v=h(()=>u.value<ne.value.length||f.value<m.value),w=h(()=>u.value>1||f.value>0),k=h(()=>Ni(o.value,n.value,y.value));Y(n,(R,F)=>{o.value=R.no-F.no});async function b(R){return!1}const A=ji(ne,u,n);async function M(){l.value=1,m.value<=t.value?await I():t.value+=1}async function O(){l.value=-1,t.value<=p.value?await P(!0):t.value-=1}async function I(R=!1){l.value=1,await L(Math.min(u.value+1,ne.value.length),R&&!r.value?bt:void 0)}async function P(R=!1){l.value=-1,await L(Math.max(1,u.value-1),R&&!r.value?bt:void 0)}function G(){return L(1)}function te(){return L(i.value)}async function L(R,F=0,oe=!1){var Ke,Qe,Ze;Ln.value=!1;const Q=u.value!==R,je=F!==t.value,x=(Ke=qt(R))==null?void 0:Ke.meta,Fe=((Qe=x==null?void 0:x.slide)==null?void 0:Qe.frontmatter.clicksStart)??0;F=lt(F,Fe,((Ze=x==null?void 0:x.__clicksContext)==null?void 0:Ze.total)??bt),(oe||Q||je)&&await(a==null?void 0:a.push({path:Be(R,s.value),query:{...a.currentRoute.value.query,clicks:F===0?void 0:F.toString(),embedded:location.search.includes("embedded")?"true":void 0}}))}function E(){a==null||a.push({path:Be(u.value,!0),query:{...a.currentRoute.value.query}})}function N(){a==null||a.push({path:Be(u.value,!1),query:{...a.currentRoute.value.query}})}return{slides:ne,total:i,currentPath:c,currentSlideNo:u,currentPage:u,currentSlideRoute:n,currentLayout:d,currentTransition:k,clicksDirection:l,nextRoute:g,prevRoute:y,clicksContext:e,clicks:f,clicksStart:p,clicksTotal:m,hasNext:v,hasPrev:w,tocTree:A,navDirection:o,openInEditor:b,next:M,prev:O,go:L,goLast:te,goFirst:G,nextSlide:I,prevSlide:P,enterPresenter:E,exitPresenter:N}}const Hi=ds(()=>{const n=jt(),e=h(()=>n.currentRoute.value),t=h(()=>(n.currentRoute.value.query,new URLSearchParams(location.search))),s=h(()=>t.value.has("print")),r=h(()=>t.value.get("print")==="clicks"),a=h(()=>t.value.has("embedded")),i=h(()=>e.value.name==="play"),o=h(()=>e.value.name==="presenter"),l=h(()=>e.value.name==="notes"),c=h(()=>!o.value&&(!D.remote||t.value.get("password")===D.remote)),u=nr(i,o),d=h(()=>{var v;return u.value?((v=qt(e.value.params.no))==null?void 0:v.no)??1:1}),f=h(()=>ne.value[d.value-1]),p=$i("clicks","0"),m=h(()=>y(f.value)),g=h({get(){let v=+(p.value||0);return Number.isNaN(v)&&(v=0),v},set(v){Ln.value=!1,p.value=v.toString()}});function y(v){var b,A;if((b=v==null?void 0:v.meta)!=null&&b.__clicksContext)return v.meta.__clicksContext;const w=v.no,k=$s(h({get(){return d.value===w?Math.max(+(p.value??0),k.clicksStart):d.value>w?bt:k.clicksStart},set(M){d.value===w&&(p.value=lt(M,k.clicksStart,k.total).toString())}}),((A=v==null?void 0:v.meta.slide)==null?void 0:A.frontmatter.clicksStart)??0,v==null?void 0:v.meta.clicks);return k.onMounted=()=>{d.value===w&&(p.value=lt(+p.value,k.clicksStart,k.total).toString())},v!=null&&v.meta&&(v.meta.__clicksContext=k),k}return{router:n,currentRoute:e,isPrintMode:s,isPrintWithClicks:r,isEmbedded:a,isPlaying:i,isPresenter:o,isNotesViewer:l,isPresenterAvailable:c,hasPrimarySlide:u,currentSlideNo:d,currentSlideRoute:f,clicksContext:m,queryClicksRaw:p,queryClicks:g,getPrimaryClicks:y}}),fn=ds(()=>{const n=Hi(),e=jt(),t=Fi(n.currentSlideRoute,n.clicksContext,n.queryClicks,n.isPresenter,n.isPrintMode,e);return Y([t.total,n.currentRoute],async()=>{const s=n.currentRoute.value.params.no;n.hasPrimarySlide.value&&!qt(s)&&(s&&s!=="index.html"?await t.go(t.total.value,0,!0):await t.go(1,0,!0))},{flush:"pre",immediate:!0}),{...t,...n}}),Qn=sr(),Xt=ee("slidev-color-schema","auto"),Zn=h(()=>D.colorSchema!=="auto"),Rs=h({get(){return Zn.value?D.colorSchema==="dark":Xt.value==="auto"?Qn.value:Xt.value==="dark"},set(n){Zn.value||(Xt.value=n===Qn.value?"auto":n?"dark":"light")}}),il=fs(Rs);Ft&&Y(Rs,n=>{const e=document.querySelector("html");e.classList.toggle("dark",n),e.classList.toggle("light",!n)},{immediate:!0});const Gi=[];function Vi(){const n=cs().appContext.app,e=S({nav:fn(),configs:D,themeConfigs:h(()=>D.themeConfig)});n.provide(An,T("none")),n.provide(La,e),n.provide(Mn,h(()=>e.nav.currentSlideNo)),n.provide(Ht,Sn(Pi()));for(const u of Gi)u();const{clicksContext:t,currentSlideNo:s,hasPrimarySlide:r,isNotesViewer:a,isPresenter:i}=fn();ga({title:Ut,htmlAttrs:D.htmlAttrs}),ka(`${Ut} - shared`),Ma(`${Ut} - drawings`);const o=`${location.origin}_${Dn()}`;function l(){a.value||!i.value&&!Oa.includes(location.host.split(":")[0])||(i.value?(Xe("page",+s.value),Xe("clicks",t.value.current)):(Xe("viewerPage",+s.value),Xe("viewerClicks",t.value.current)),Xe("lastUpdate",{id:o,type:i.value?"presenter":"viewer",time:new Date().getTime()}))}const c=jt();c.afterEach(l),Y(t,l),ba(u=>{var d;r.value&&((d=u.lastUpdate)==null?void 0:d.type)==="presenter"&&(+u.page!=+s.value||+t.value.current!=+u.clicks)&&(Ln.value=!1,c.replace({path:Be(u.page,i.value),query:{...c.currentRoute.value.query,clicks:u.clicks||0}}))})}const zi=rr({__name:"App",setup(n){return Vi(),Ue(()=>{for(const[e,t]of Object.entries(Or.value))document.body.style.setProperty(e,t.toString())}),(e,t)=>{const s=ar("RouterView");return us(),ir(s)}}}),Wi=Is(zi,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/App.vue"]]);function ol(n,e=""){var r,a;const t=["slidev-page",e],s=(a=(r=n==null?void 0:n.meta)==null?void 0:r.slide)==null?void 0:a.no;return s!=null&&t.push(`slidev-page-${s}`),t.filter(Boolean).join(" ")}async function ll(){const{saveAs:n}=await C(()=>import("./modules/file-saver-EUMWMpoS.js").then(e=>e.F),[]);n(typeof D.download=="string"?D.download:D.exportFilename?`${D.exportFilename}.pdf`:"/genaiscript/slides/networking-apr2024/slidev-exported.pdf",`${D.title}.pdf`)}function Je(n,e,t){var s;return((s=n.instance)==null?void 0:s.$).provides[e]??t}function qi(){return{install(n){n.directive("click",{name:"v-click",mounted(e,t){const s=At(e,t,t.value);s!=null&&(e.classList.toggle(kt,!0),e.dataset.slidevClicksStart=String(s.start),Number.isFinite(s.end)&&(e.dataset.slidevClicksEnd=String(s.end)),e.watchStopHandle=Ue(()=>{const r=s.isActive.value,a=s.isCurrent.value,i=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?tt:et,r),e.classList.toggle(Yt,r)):e.classList.toggle(s.flagFade?tt:et,!r),e.classList.toggle(Kt,a),e.classList.toggle(Qt,i)}))},unmounted:en}),n.directive("after",{name:"v-after",mounted(e,t){const s=At(e,t,"+0");s!=null&&(e.classList.toggle(kt,!0),e.watchStopHandle=Ue(()=>{const r=s.isActive.value,a=s.isCurrent.value,i=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?tt:et,r),e.classList.toggle(Yt,r)):e.classList.toggle(s.flagFade?tt:et,!r),e.classList.toggle(Kt,a),e.classList.toggle(Qt,i)}))},unmounted:en}),n.directive("click-hide",{name:"v-click-hide",mounted(e,t){const s=At(e,t,t.value,!0);s!=null&&(e.classList.toggle(kt,!0),e.watchStopHandle=Ue(()=>{const r=s.isActive.value,a=s.isCurrent.value,i=r&&!a;e.classList.toggle(s.flagFade?tt:et,r),e.classList.toggle(Yt,r),e.classList.toggle(Kt,a),e.classList.toggle(Qt,i)}))},unmounted:en})}}}const Ns=new Map;function At(n,e,t,s=!1){var d;const r=(d=Je(e,Ht))==null?void 0:d.value;if(!n||!r)return null;const a=s||e.modifiers.hide!==!1&&e.modifiers.hide!=null,i=e.modifiers.fade!==!1&&e.modifiers.fade!=null,o=r.calculate(t);if(!o)return null;r.register(n,o);const l=h(()=>a?!o.isActive.value:o.isActive.value),c=h(()=>l.value?"shown":Number.isFinite(o.end)?r.current<o.start?"before":"after":a?"after":"before"),u={...o,isShown:l,visibilityState:c,flagFade:i,flagHide:a};return Ns.set(n,u),u}function en(n,e){var s,r;n.classList.toggle(kt,!1);const t=(s=Je(e,Ht))==null?void 0:s.value;t==null||t.unregister(n),(r=n.watchStopHandle)==null||r.call(n)}function js(){return Math.floor(Math.random()*2**31)}class Bi{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function pn(n,e,t){if(n&&n.length){const[s,r]=e,a=Math.PI/180*t,i=Math.cos(a),o=Math.sin(a);for(const l of n){const[c,u]=l;l[0]=(c-s)*i-(u-r)*o+s,l[1]=(c-s)*o+(u-r)*i+r}}}function Ui(n,e,t){const s=[];n.forEach(r=>s.push(...r)),pn(s,e,t)}function Ji(n,e){return n[0]===e[0]&&n[1]===e[1]}function Yi(n,e,t,s=1){const r=t,a=Math.max(e,.1),i=n[0]&&n[0][0]&&typeof n[0][0]=="number"?[n]:n,o=[0,0];if(r)for(const c of i)pn(c,o,r);const l=Ki(i,a,s);if(r){for(const c of i)pn(c,o,-r);Ui(l,o,-r)}return l}function Ki(n,e,t){const s=[];for(const c of n){const u=[...c];Ji(u[0],u[u.length-1])||u.push([u[0][0],u[0][1]]),u.length>2&&s.push(u)}const r=[];e=Math.max(e,.1);const a=[];for(const c of s)for(let u=0;u<c.length-1;u++){const d=c[u],f=c[u+1];if(d[1]!==f[1]){const p=Math.min(d[1],f[1]);a.push({ymin:p,ymax:Math.max(d[1],f[1]),x:p===d[1]?d[0]:f[0],islope:(f[0]-d[0])/(f[1]-d[1])})}}if(a.sort((c,u)=>c.ymin<u.ymin?-1:c.ymin>u.ymin?1:c.x<u.x?-1:c.x>u.x?1:c.ymax===u.ymax?0:(c.ymax-u.ymax)/Math.abs(c.ymax-u.ymax)),!a.length)return r;let i=[],o=a[0].ymin,l=0;for(;i.length||a.length;){if(a.length){let c=-1;for(let d=0;d<a.length&&!(a[d].ymin>o);d++)c=d;a.splice(0,c+1).forEach(d=>{i.push({s:o,edge:d})})}if(i=i.filter(c=>!(c.edge.ymax<=o)),i.sort((c,u)=>c.edge.x===u.edge.x?0:(c.edge.x-u.edge.x)/Math.abs(c.edge.x-u.edge.x)),(t!==1||l%e===0)&&i.length>1)for(let c=0;c<i.length;c=c+2){const u=c+1;if(u>=i.length)break;const d=i[c].edge,f=i[u].edge;r.push([[Math.round(d.x),o],[Math.round(f.x),o]])}o+=t,i.forEach(c=>{c.edge.x=c.edge.x+t*c.edge.islope}),l++}return r}function ft(n,e){var t;const s=e.hachureAngle+90;let r=e.hachureGap;r<0&&(r=e.strokeWidth*4),r=Math.round(Math.max(r,.1));let a=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(a=r),Yi(n,r,s,a||1)}class Rn{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const s=ft(e,t);return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){const s=[];for(const r of e)s.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return s}}function Bt(n){const e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class Qi extends Rn{fillPolygons(e,t){let s=t.hachureGap;s<0&&(s=t.strokeWidth*4),s=Math.max(s,.1);const r=Object.assign({},t,{hachureGap:s}),a=ft(e,r),i=Math.PI/180*t.hachureAngle,o=[],l=s*.5*Math.cos(i),c=s*.5*Math.sin(i);for(const[d,f]of a)Bt([d,f])&&o.push([[d[0]-l,d[1]+c],[...f]],[[d[0]+l,d[1]-c],[...f]]);return{type:"fillSketch",ops:this.renderLines(o,t)}}}class Zi extends Rn{fillPolygons(e,t){const s=this._fillPolygons(e,t),r=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),a=this._fillPolygons(e,r);return s.ops=s.ops.concat(a.ops),s}}class Xi{constructor(e){this.helper=e}fillPolygons(e,t){t=Object.assign({},t,{hachureAngle:0});const s=ft(e,t);return this.dotsOnLines(s,t)}dotsOnLines(e,t){const s=[];let r=t.hachureGap;r<0&&(r=t.strokeWidth*4),r=Math.max(r,.1);let a=t.fillWeight;a<0&&(a=t.strokeWidth/2);const i=r/4;for(const o of e){const l=Bt(o),c=l/r,u=Math.ceil(c)-1,d=l-u*r,f=(o[0][0]+o[1][0])/2-r/4,p=Math.min(o[0][1],o[1][1]);for(let m=0;m<u;m++){const g=p+d+m*r,y=f-i+Math.random()*2*i,v=g-i+Math.random()*2*i,w=this.helper.ellipse(y,v,a,a,t);s.push(...w.ops)}}return{type:"fillSketch",ops:s}}}class eo{constructor(e){this.helper=e}fillPolygons(e,t){const s=ft(e,t);return{type:"fillSketch",ops:this.dashedLine(s,t)}}dashedLine(e,t){const s=t.dashOffset<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashOffset,r=t.dashGap<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashGap,a=[];return e.forEach(i=>{const o=Bt(i),l=Math.floor(o/(s+r)),c=(o+r-l*(s+r))/2;let u=i[0],d=i[1];u[0]>d[0]&&(u=i[1],d=i[0]);const f=Math.atan((d[1]-u[1])/(d[0]-u[0]));for(let p=0;p<l;p++){const m=p*(s+r),g=m+s,y=[u[0]+m*Math.cos(f)+c*Math.cos(f),u[1]+m*Math.sin(f)+c*Math.sin(f)],v=[u[0]+g*Math.cos(f)+c*Math.cos(f),u[1]+g*Math.sin(f)+c*Math.sin(f)];a.push(...this.helper.doubleLineOps(y[0],y[1],v[0],v[1],t))}}),a}}class to{constructor(e){this.helper=e}fillPolygons(e,t){const s=t.hachureGap<0?t.strokeWidth*4:t.hachureGap,r=t.zigzagOffset<0?s:t.zigzagOffset;t=Object.assign({},t,{hachureGap:s+r});const a=ft(e,t);return{type:"fillSketch",ops:this.zigzagLines(a,r,t)}}zigzagLines(e,t,s){const r=[];return e.forEach(a=>{const i=Bt(a),o=Math.round(i/(2*t));let l=a[0],c=a[1];l[0]>c[0]&&(l=a[1],c=a[0]);const u=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let d=0;d<o;d++){const f=d*2*t,p=(d+1)*2*t,m=Math.sqrt(2*Math.pow(t,2)),g=[l[0]+f*Math.cos(u),l[1]+f*Math.sin(u)],y=[l[0]+p*Math.cos(u),l[1]+p*Math.sin(u)],v=[g[0]+m*Math.cos(u+Math.PI/4),g[1]+m*Math.sin(u+Math.PI/4)];r.push(...this.helper.doubleLineOps(g[0],g[1],v[0],v[1],s),...this.helper.doubleLineOps(v[0],v[1],y[0],y[1],s))}}),r}}const z={};function no(n,e){let t=n.fillStyle||"hachure";if(!z[t])switch(t){case"zigzag":z[t]||(z[t]=new Qi(e));break;case"cross-hatch":z[t]||(z[t]=new Zi(e));break;case"dots":z[t]||(z[t]=new Xi(e));break;case"dashed":z[t]||(z[t]=new eo(e));break;case"zigzag-line":z[t]||(z[t]=new to(e));break;case"hachure":default:t="hachure",z[t]||(z[t]=new Rn(e));break}return z[t]}const so=0,hn=1,Fs=2,ht={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function ro(n){const e=new Array;for(;n!=="";)if(n.match(/^([ \t\r\n,]+)/))n=n.substr(RegExp.$1.length);else if(n.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:so,text:RegExp.$1},n=n.substr(RegExp.$1.length);else if(n.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))e[e.length]={type:hn,text:`${parseFloat(RegExp.$1)}`},n=n.substr(RegExp.$1.length);else return[];return e[e.length]={type:Fs,text:""},e}function tn(n,e){return n.type===e}function Nn(n){const e=[],t=ro(n);let s="BOD",r=0,a=t[r];for(;!tn(a,Fs);){let i=0;const o=[];if(s==="BOD")if(a.text==="M"||a.text==="m")r++,i=ht[a.text],s=a.text;else return Nn("M0,0"+n);else tn(a,hn)?i=ht[s]:(r++,i=ht[a.text],s=a.text);if(r+i<t.length){for(let l=r;l<r+i;l++){const c=t[l];if(tn(c,hn))o[o.length]=+c.text;else throw new Error("Param not a number: "+s+","+c.text)}if(typeof ht[s]=="number"){const l={key:s,data:o};e.push(l),r+=i,a=t[r],s==="M"&&(s="L"),s==="m"&&(s="l")}else throw new Error("Bad segment: "+s)}else throw new Error("Path data ended short")}return e}function Hs(n){let e=0,t=0,s=0,r=0;const a=[];for(const{key:i,data:o}of n)switch(i){case"M":a.push({key:"M",data:[...o]}),[e,t]=o,[s,r]=o;break;case"m":e+=o[0],t+=o[1],a.push({key:"M",data:[e,t]}),s=e,r=t;break;case"L":a.push({key:"L",data:[...o]}),[e,t]=o;break;case"l":e+=o[0],t+=o[1],a.push({key:"L",data:[e,t]});break;case"C":a.push({key:"C",data:[...o]}),e=o[4],t=o[5];break;case"c":{const l=o.map((c,u)=>u%2?c+t:c+e);a.push({key:"C",data:l}),e=l[4],t=l[5];break}case"Q":a.push({key:"Q",data:[...o]}),e=o[2],t=o[3];break;case"q":{const l=o.map((c,u)=>u%2?c+t:c+e);a.push({key:"Q",data:l}),e=l[2],t=l[3];break}case"A":a.push({key:"A",data:[...o]}),e=o[5],t=o[6];break;case"a":e+=o[5],t+=o[6],a.push({key:"A",data:[o[0],o[1],o[2],o[3],o[4],e,t]});break;case"H":a.push({key:"H",data:[...o]}),e=o[0];break;case"h":e+=o[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...o]}),t=o[0];break;case"v":t+=o[0],a.push({key:"V",data:[t]});break;case"S":a.push({key:"S",data:[...o]}),e=o[2],t=o[3];break;case"s":{const l=o.map((c,u)=>u%2?c+t:c+e);a.push({key:"S",data:l}),e=l[2],t=l[3];break}case"T":a.push({key:"T",data:[...o]}),e=o[0],t=o[1];break;case"t":e+=o[0],t+=o[1],a.push({key:"T",data:[e,t]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=s,t=r;break}return a}function Gs(n){const e=[];let t="",s=0,r=0,a=0,i=0,o=0,l=0;for(const{key:c,data:u}of n){switch(c){case"M":e.push({key:"M",data:[...u]}),[s,r]=u,[a,i]=u;break;case"C":e.push({key:"C",data:[...u]}),s=u[4],r=u[5],o=u[2],l=u[3];break;case"L":e.push({key:"L",data:[...u]}),[s,r]=u;break;case"H":s=u[0],e.push({key:"L",data:[s,r]});break;case"V":r=u[0],e.push({key:"L",data:[s,r]});break;case"S":{let d=0,f=0;t==="C"||t==="S"?(d=s+(s-o),f=r+(r-l)):(d=s,f=r),e.push({key:"C",data:[d,f,...u]}),o=u[0],l=u[1],s=u[2],r=u[3];break}case"T":{const[d,f]=u;let p=0,m=0;t==="Q"||t==="T"?(p=s+(s-o),m=r+(r-l)):(p=s,m=r);const g=s+2*(p-s)/3,y=r+2*(m-r)/3,v=d+2*(p-d)/3,w=f+2*(m-f)/3;e.push({key:"C",data:[g,y,v,w,d,f]}),o=p,l=m,s=d,r=f;break}case"Q":{const[d,f,p,m]=u,g=s+2*(d-s)/3,y=r+2*(f-r)/3,v=p+2*(d-p)/3,w=m+2*(f-m)/3;e.push({key:"C",data:[g,y,v,w,p,m]}),o=d,l=f,s=p,r=m;break}case"A":{const d=Math.abs(u[0]),f=Math.abs(u[1]),p=u[2],m=u[3],g=u[4],y=u[5],v=u[6];d===0||f===0?(e.push({key:"C",data:[s,r,y,v,y,v]}),s=y,r=v):(s!==y||r!==v)&&(Vs(s,r,y,v,d,f,p,m,g).forEach(function(k){e.push({key:"C",data:k})}),s=y,r=v);break}case"Z":e.push({key:"Z",data:[]}),s=a,r=i;break}t=c}return e}function ao(n){return Math.PI*n/180}function nt(n,e,t){const s=n*Math.cos(t)-e*Math.sin(t),r=n*Math.sin(t)+e*Math.cos(t);return[s,r]}function Vs(n,e,t,s,r,a,i,o,l,c){const u=ao(i);let d=[],f=0,p=0,m=0,g=0;if(c)[f,p,m,g]=c;else{[n,e]=nt(n,e,-u),[t,s]=nt(t,s,-u);const L=(n-t)/2,E=(e-s)/2;let N=L*L/(r*r)+E*E/(a*a);N>1&&(N=Math.sqrt(N),r=N*r,a=N*a);const R=o===l?-1:1,F=r*r,oe=a*a,Q=F*oe-F*E*E-oe*L*L,je=F*E*E+oe*L*L,x=R*Math.sqrt(Math.abs(Q/je));m=x*r*E/a+(n+t)/2,g=x*-a*L/r+(e+s)/2,f=Math.asin(parseFloat(((e-g)/a).toFixed(9))),p=Math.asin(parseFloat(((s-g)/a).toFixed(9))),n<m&&(f=Math.PI-f),t<m&&(p=Math.PI-p),f<0&&(f=Math.PI*2+f),p<0&&(p=Math.PI*2+p),l&&f>p&&(f=f-Math.PI*2),!l&&p>f&&(p=p-Math.PI*2)}let y=p-f;if(Math.abs(y)>Math.PI*120/180){const L=p,E=t,N=s;l&&p>f?p=f+Math.PI*120/180*1:p=f+Math.PI*120/180*-1,t=m+r*Math.cos(p),s=g+a*Math.sin(p),d=Vs(t,s,E,N,r,a,i,0,l,[p,L,m,g])}y=p-f;const v=Math.cos(f),w=Math.sin(f),k=Math.cos(p),b=Math.sin(p),A=Math.tan(y/4),M=4/3*r*A,O=4/3*a*A,I=[n,e],P=[n+M*w,e-O*v],G=[t+M*b,s-O*k],te=[t,s];if(P[0]=2*I[0]-P[0],P[1]=2*I[1]-P[1],c)return[P,G,te].concat(d);{d=[P,G,te].concat(d);const L=[];for(let E=0;E<d.length;E+=3){const N=nt(d[E][0],d[E][1],u),R=nt(d[E+1][0],d[E+1][1],u),F=nt(d[E+2][0],d[E+2][1],u);L.push([N[0],N[1],R[0],R[1],F[0],F[1]])}return L}}const io={randOffset:co,randOffsetWithRange:uo,ellipse:mn,doubleLineOps:fo};function J(n,e,t,s,r){return{type:"path",ops:ie(n,e,t,s,r)}}function ot(n,e,t){const s=(n||[]).length;if(s>2){const r=[];for(let a=0;a<s-1;a++)r.push(...ie(n[a][0],n[a][1],n[a+1][0],n[a+1][1],t));return e&&r.push(...ie(n[s-1][0],n[s-1][1],n[0][0],n[0][1],t)),{type:"path",ops:r}}else if(s===2)return J(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function oo(n,e){return ot(n,!0,e)}function zs(n,e,t,s,r){const a=[[n,e],[n+t,e],[n+t,e+s],[n,e+s]];return oo(a,r)}function Xn(n,e){if(n.length){const s=typeof n[0][0]=="number"?[n]:n,r=mt(s[0],1*(1+e.roughness*.2),e),a=e.disableMultiStroke?[]:mt(s[0],1.5*(1+e.roughness*.22),ns(e));for(let i=1;i<s.length;i++){const o=s[i];if(o.length){const l=mt(o,1*(1+e.roughness*.2),e),c=e.disableMultiStroke?[]:mt(o,1.5*(1+e.roughness*.22),ns(e));for(const u of l)u.op!=="move"&&r.push(u);for(const u of c)u.op!=="move"&&a.push(u)}}return{type:"path",ops:r.concat(a)}}return{type:"path",ops:[]}}function mn(n,e,t,s,r){const a=Ws(t,s,r);return gn(n,e,r,a).opset}function Ws(n,e,t){const s=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),r=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*s)),a=Math.PI*2/r;let i=Math.abs(n/2),o=Math.abs(e/2);const l=1-t.curveFitting;return i+=_(i*l,t),o+=_(o*l,t),{increment:a,rx:i,ry:o}}function gn(n,e,t,s){const[r,a]=ss(s.increment,n,e,s.rx,s.ry,1,s.increment*Et(.1,Et(.4,1,t),t),t);let i=Pt(r,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[o]=ss(s.increment,n,e,s.rx,s.ry,1.5,0,t),l=Pt(o,null,t);i=i.concat(l)}return{estimatedPoints:a,opset:{type:"path",ops:i}}}function es(n,e,t,s,r,a,i,o,l){const c=n,u=e;let d=Math.abs(t/2),f=Math.abs(s/2);d+=_(d*.01,l),f+=_(f*.01,l);let p=r,m=a;for(;p<0;)p+=Math.PI*2,m+=Math.PI*2;m-p>Math.PI*2&&(p=0,m=Math.PI*2);const g=Math.PI*2/l.curveStepCount,y=Math.min(g/2,(m-p)/2),v=rs(y,c,u,d,f,p,m,1,l);if(!l.disableMultiStroke){const w=rs(y,c,u,d,f,p,m,1.5,l);v.push(...w)}return i&&(o?v.push(...ie(c,u,c+d*Math.cos(p),u+f*Math.sin(p),l),...ie(c,u,c+d*Math.cos(m),u+f*Math.sin(m),l)):v.push({op:"lineTo",data:[c,u]},{op:"lineTo",data:[c+d*Math.cos(p),u+f*Math.sin(p)]})),{type:"path",ops:v}}function ts(n,e){const t=Gs(Hs(Nn(n))),s=[];let r=[0,0],a=[0,0];for(const{key:i,data:o}of t)switch(i){case"M":{a=[o[0],o[1]],r=[o[0],o[1]];break}case"L":s.push(...ie(a[0],a[1],o[0],o[1],e)),a=[o[0],o[1]];break;case"C":{const[l,c,u,d,f,p]=o;s.push(...po(l,c,u,d,f,p,a,e)),a=[f,p];break}case"Z":s.push(...ie(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break}return{type:"path",ops:s}}function nn(n,e){const t=[];for(const s of n)if(s.length){const r=e.maxRandomnessOffset||0,a=s.length;if(a>2){t.push({op:"move",data:[s[0][0]+_(r,e),s[0][1]+_(r,e)]});for(let i=1;i<a;i++)t.push({op:"lineTo",data:[s[i][0]+_(r,e),s[i][1]+_(r,e)]})}}return{type:"fillPath",ops:t}}function Ve(n,e){return no(e,io).fillPolygons(n,e)}function lo(n,e,t,s,r,a,i){const o=n,l=e;let c=Math.abs(t/2),u=Math.abs(s/2);c+=_(c*.01,i),u+=_(u*.01,i);let d=r,f=a;for(;d<0;)d+=Math.PI*2,f+=Math.PI*2;f-d>Math.PI*2&&(d=0,f=Math.PI*2);const p=(f-d)/i.curveStepCount,m=[];for(let g=d;g<=f;g=g+p)m.push([o+c*Math.cos(g),l+u*Math.sin(g)]);return m.push([o+c*Math.cos(f),l+u*Math.sin(f)]),m.push([o,l]),Ve([m],i)}function co(n,e){return _(n,e)}function uo(n,e,t){return Et(n,e,t)}function fo(n,e,t,s,r){return ie(n,e,t,s,r,!0)}function ns(n){const e=Object.assign({},n);return e.randomizer=void 0,n.seed&&(e.seed=n.seed+1),e}function qs(n){return n.randomizer||(n.randomizer=new Bi(n.seed||0)),n.randomizer.next()}function Et(n,e,t,s=1){return t.roughness*s*(qs(t)*(e-n)+n)}function _(n,e,t=1){return Et(-n,n,e,t)}function ie(n,e,t,s,r,a=!1){const i=a?r.disableMultiStrokeFill:r.disableMultiStroke,o=yn(n,e,t,s,r,!0,!1);if(i)return o;const l=yn(n,e,t,s,r,!0,!0);return o.concat(l)}function yn(n,e,t,s,r,a,i){const o=Math.pow(n-t,2)+Math.pow(e-s,2),l=Math.sqrt(o);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let u=r.maxRandomnessOffset||0;u*u*100>o&&(u=l/10);const d=u/2,f=.2+qs(r)*.2;let p=r.bowing*r.maxRandomnessOffset*(s-e)/200,m=r.bowing*r.maxRandomnessOffset*(n-t)/200;p=_(p,r,c),m=_(m,r,c);const g=[],y=()=>_(d,r,c),v=()=>_(u,r,c),w=r.preserveVertices;return i?g.push({op:"move",data:[n+(w?0:y()),e+(w?0:y())]}):g.push({op:"move",data:[n+(w?0:_(u,r,c)),e+(w?0:_(u,r,c))]}),i?g.push({op:"bcurveTo",data:[p+n+(t-n)*f+y(),m+e+(s-e)*f+y(),p+n+2*(t-n)*f+y(),m+e+2*(s-e)*f+y(),t+(w?0:y()),s+(w?0:y())]}):g.push({op:"bcurveTo",data:[p+n+(t-n)*f+v(),m+e+(s-e)*f+v(),p+n+2*(t-n)*f+v(),m+e+2*(s-e)*f+v(),t+(w?0:v()),s+(w?0:v())]}),g}function mt(n,e,t){if(!n.length)return[];const s=[];s.push([n[0][0]+_(e,t),n[0][1]+_(e,t)]),s.push([n[0][0]+_(e,t),n[0][1]+_(e,t)]);for(let r=1;r<n.length;r++)s.push([n[r][0]+_(e,t),n[r][1]+_(e,t)]),r===n.length-1&&s.push([n[r][0]+_(e,t),n[r][1]+_(e,t)]);return Pt(s,null,t)}function Pt(n,e,t){const s=n.length,r=[];if(s>3){const a=[],i=1-t.curveTightness;r.push({op:"move",data:[n[1][0],n[1][1]]});for(let o=1;o+2<s;o++){const l=n[o];a[0]=[l[0],l[1]],a[1]=[l[0]+(i*n[o+1][0]-i*n[o-1][0])/6,l[1]+(i*n[o+1][1]-i*n[o-1][1])/6],a[2]=[n[o+1][0]+(i*n[o][0]-i*n[o+2][0])/6,n[o+1][1]+(i*n[o][1]-i*n[o+2][1])/6],a[3]=[n[o+1][0],n[o+1][1]],r.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}}else s===3?(r.push({op:"move",data:[n[1][0],n[1][1]]}),r.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):s===2&&r.push(...yn(n[0][0],n[0][1],n[1][0],n[1][1],t,!0,!0));return r}function ss(n,e,t,s,r,a,i,o){const l=o.roughness===0,c=[],u=[];if(l){n=n/4,u.push([e+s*Math.cos(-n),t+r*Math.sin(-n)]);for(let d=0;d<=Math.PI*2;d=d+n){const f=[e+s*Math.cos(d),t+r*Math.sin(d)];c.push(f),u.push(f)}u.push([e+s*Math.cos(0),t+r*Math.sin(0)]),u.push([e+s*Math.cos(n),t+r*Math.sin(n)])}else{const d=_(.5,o)-Math.PI/2;u.push([_(a,o)+e+.9*s*Math.cos(d-n),_(a,o)+t+.9*r*Math.sin(d-n)]);const f=Math.PI*2+d-.01;for(let p=d;p<f;p=p+n){const m=[_(a,o)+e+s*Math.cos(p),_(a,o)+t+r*Math.sin(p)];c.push(m),u.push(m)}u.push([_(a,o)+e+s*Math.cos(d+Math.PI*2+i*.5),_(a,o)+t+r*Math.sin(d+Math.PI*2+i*.5)]),u.push([_(a,o)+e+.98*s*Math.cos(d+i),_(a,o)+t+.98*r*Math.sin(d+i)]),u.push([_(a,o)+e+.9*s*Math.cos(d+i*.5),_(a,o)+t+.9*r*Math.sin(d+i*.5)])}return[u,c]}function rs(n,e,t,s,r,a,i,o,l){const c=a+_(.1,l),u=[];u.push([_(o,l)+e+.9*s*Math.cos(c-n),_(o,l)+t+.9*r*Math.sin(c-n)]);for(let d=c;d<=i;d=d+n)u.push([_(o,l)+e+s*Math.cos(d),_(o,l)+t+r*Math.sin(d)]);return u.push([e+s*Math.cos(i),t+r*Math.sin(i)]),u.push([e+s*Math.cos(i),t+r*Math.sin(i)]),Pt(u,null,l)}function po(n,e,t,s,r,a,i,o){const l=[],c=[o.maxRandomnessOffset||1,(o.maxRandomnessOffset||1)+.3];let u=[0,0];const d=o.disableMultiStroke?1:2,f=o.preserveVertices;for(let p=0;p<d;p++)p===0?l.push({op:"move",data:[i[0],i[1]]}):l.push({op:"move",data:[i[0]+(f?0:_(c[0],o)),i[1]+(f?0:_(c[0],o))]}),u=f?[r,a]:[r+_(c[p],o),a+_(c[p],o)],l.push({op:"bcurveTo",data:[n+_(c[p],o),e+_(c[p],o),t+_(c[p],o),s+_(c[p],o),u[0],u[1]]});return l}function st(n){return[...n]}function as(n,e=0){const t=n.length;if(t<3)throw new Error("A curve must have at least three points.");const s=[];if(t===3)s.push(st(n[0]),st(n[1]),st(n[2]),st(n[2]));else{const r=[];r.push(n[0],n[0]);for(let o=1;o<n.length;o++)r.push(n[o]),o===n.length-1&&r.push(n[o]);const a=[],i=1-e;s.push(st(r[0]));for(let o=1;o+2<r.length;o++){const l=r[o];a[0]=[l[0],l[1]],a[1]=[l[0]+(i*r[o+1][0]-i*r[o-1][0])/6,l[1]+(i*r[o+1][1]-i*r[o-1][1])/6],a[2]=[r[o+1][0]+(i*r[o][0]-i*r[o+2][0])/6,r[o+1][1]+(i*r[o][1]-i*r[o+2][1])/6],a[3]=[r[o+1][0],r[o+1][1]],s.push(a[1],a[2],a[3])}}return s}function ho(n,e){return Math.sqrt(Lt(n,e))}function Lt(n,e){return Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)}function mo(n,e,t){const s=Lt(e,t);if(s===0)return Lt(n,e);let r=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/s;return r=Math.max(0,Math.min(1,r)),Lt(n,Ee(e,t,r))}function Ee(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t]}function go(n,e){const t=n[e+0],s=n[e+1],r=n[e+2],a=n[e+3];let i=3*s[0]-2*t[0]-a[0];i*=i;let o=3*s[1]-2*t[1]-a[1];o*=o;let l=3*r[0]-2*a[0]-t[0];l*=l;let c=3*r[1]-2*a[1]-t[1];return c*=c,i<l&&(i=l),o<c&&(o=c),i+o}function vn(n,e,t,s){const r=s||[];if(go(n,e)<t){const a=n[e+0];r.length?ho(r[r.length-1],a)>1&&r.push(a):r.push(a),r.push(n[e+3])}else{const i=n[e+0],o=n[e+1],l=n[e+2],c=n[e+3],u=Ee(i,o,.5),d=Ee(o,l,.5),f=Ee(l,c,.5),p=Ee(u,d,.5),m=Ee(d,f,.5),g=Ee(p,m,.5);vn([i,u,p,g],0,t,r),vn([g,m,f,c],0,t,r)}return r}function yo(n,e){return Dt(n,0,n.length,e)}function Dt(n,e,t,s,r){const a=r||[],i=n[e],o=n[t-1];let l=0,c=1;for(let u=e+1;u<t-1;++u){const d=mo(n[u],i,o);d>l&&(l=d,c=u)}return Math.sqrt(l)>s?(Dt(n,e,c+1,s,a),Dt(n,c,t,s,a)):(a.length||a.push(i),a.push(o)),a}function wn(n,e=.15,t){const s=[],r=(n.length-1)/3;for(let a=0;a<r;a++){const i=a*3;vn(n,i,e,s)}return t&&t>0?Dt(s,0,s.length,t):s}function vo(n,e,t){const s=Nn(n),r=Gs(Hs(s)),a=[];let i=[],o=[0,0],l=[];const c=()=>{l.length>=4&&i.push(...wn(l,e)),l=[]},u=()=>{c(),i.length&&(a.push(i),i=[])};for(const{key:f,data:p}of r)switch(f){case"M":u(),o=[p[0],p[1]],i.push(o);break;case"L":c(),i.push([p[0],p[1]]);break;case"C":if(!l.length){const m=i.length?i[i.length-1]:o;l.push([m[0],m[1]])}l.push([p[0],p[1]]),l.push([p[2],p[3]]),l.push([p[4],p[5]]);break;case"Z":c(),i.push([o[0],o[1]]);break}if(u(),!t)return a;const d=[];for(const f of a){const p=yo(f,t);p.length&&d.push(p)}return d}const B="none";class wo{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return js()}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,s){return{shape:e,sets:t||[],options:s||this.defaultOptions}}line(e,t,s,r,a){const i=this._o(a);return this._d("line",[J(e,t,s,r,i)],i)}rectangle(e,t,s,r,a){const i=this._o(a),o=[],l=zs(e,t,s,r,i);if(i.fill){const c=[[e,t],[e+s,t],[e+s,t+r],[e,t+r]];i.fillStyle==="solid"?o.push(nn([c],i)):o.push(Ve([c],i))}return i.stroke!==B&&o.push(l),this._d("rectangle",o,i)}ellipse(e,t,s,r,a){const i=this._o(a),o=[],l=Ws(s,r,i),c=gn(e,t,i,l);if(i.fill)if(i.fillStyle==="solid"){const u=gn(e,t,i,l).opset;u.type="fillPath",o.push(u)}else o.push(Ve([c.estimatedPoints],i));return i.stroke!==B&&o.push(c.opset),this._d("ellipse",o,i)}circle(e,t,s,r){const a=this.ellipse(e,t,s,s,r);return a.shape="circle",a}linearPath(e,t){const s=this._o(t);return this._d("linearPath",[ot(e,!1,s)],s)}arc(e,t,s,r,a,i,o=!1,l){const c=this._o(l),u=[],d=es(e,t,s,r,a,i,o,!0,c);if(o&&c.fill)if(c.fillStyle==="solid"){const f=Object.assign({},c);f.disableMultiStroke=!0;const p=es(e,t,s,r,a,i,!0,!1,f);p.type="fillPath",u.push(p)}else u.push(lo(e,t,s,r,a,i,c));return c.stroke!==B&&u.push(d),this._d("arc",u,c)}curve(e,t){const s=this._o(t),r=[],a=Xn(e,s);if(s.fill&&s.fill!==B)if(s.fillStyle==="solid"){const i=Xn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(i.ops)})}else{const i=[],o=e;if(o.length){const c=typeof o[0][0]=="number"?[o]:o;for(const u of c)u.length<3?i.push(...u):u.length===3?i.push(...wn(as([u[0],u[0],u[1],u[2]]),10,(1+s.roughness)/2)):i.push(...wn(as(u),10,(1+s.roughness)/2))}i.length&&r.push(Ve([i],s))}return s.stroke!==B&&r.push(a),this._d("curve",r,s)}polygon(e,t){const s=this._o(t),r=[],a=ot(e,!0,s);return s.fill&&(s.fillStyle==="solid"?r.push(nn([e],s)):r.push(Ve([e],s))),s.stroke!==B&&r.push(a),this._d("polygon",r,s)}path(e,t){const s=this._o(t),r=[];if(!e)return this._d("path",r,s);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const a=s.fill&&s.fill!=="transparent"&&s.fill!==B,i=s.stroke!==B,o=!!(s.simplification&&s.simplification<1),l=o?4-4*(s.simplification||1):(1+s.roughness)/2,c=vo(e,1,l),u=ts(e,s);if(a)if(s.fillStyle==="solid")if(c.length===1){const d=ts(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(d.ops)})}else r.push(nn(c,s));else r.push(Ve(c,s));return i&&(o?c.forEach(d=>{r.push(ot(d,!1,s))}):r.push(u)),this._d("path",r,s)}opsToPath(e,t){let s="";for(const r of e.ops){const a=typeof t=="number"&&t>=0?r.data.map(i=>+i.toFixed(t)):r.data;switch(r.op){case"move":s+=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}return s.trim()}toPaths(e){const t=e.sets||[],s=e.options||this.defaultOptions,r=[];for(const a of t){let i=null;switch(a.type){case"path":i={d:this.opsToPath(a),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:B};break;case"fillPath":i={d:this.opsToPath(a),stroke:B,strokeWidth:0,fill:s.fill||B};break;case"fillSketch":i=this.fillSketch(a,s);break}i&&r.push(i)}return r}fillSketch(e,t){let s=t.fillWeight;return s<0&&(s=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||B,strokeWidth:s,fill:B}}_mergedShape(e){return e.filter((t,s)=>s===0?!0:t.op!=="move")}}const Bs="http://www.w3.org/2000/svg",ko=800;let sn=null;function bo(){return sn||(sn=new wo().defaultOptions),sn}function rn(n,e,t){return{...bo(),maxRandomnessOffset:2,roughness:n==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,disableMultiStroke:n!=="double",disableMultiStrokeFill:!1,seed:e,...t}}function So(n){const e=n.padding;if(e||e===0){if(typeof e=="number")return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}function _o(n,e,t,s,r,a){const i=[];let o=t.strokeWidth||2;const l=So(t),c=t.animate===void 0?!0:!!t.animate,u=t.iterations||2,d=t.rtl?1:0,f=rn("single",a,t);switch(t.type){case"underline":{const p=e.y+e.h+l[2];for(let m=d;m<u+d;m++)m%2?i.push(J(e.x+e.w,p,e.x,p,f)):i.push(J(e.x,p,e.x+e.w,p,f));break}case"strike-through":{const p=e.y+e.h/2;for(let m=d;m<u+d;m++)m%2?i.push(J(e.x+e.w,p,e.x,p,f)):i.push(J(e.x,p,e.x+e.w,p,f));break}case"box":{const p=e.x-l[3],m=e.y-l[0],g=e.w+(l[1]+l[3]),y=e.h+(l[0]+l[2]);for(let v=0;v<u;v++)i.push(zs(p,m,g,y,f));break}case"bracket":{const p=Array.isArray(t.brackets)?t.brackets:t.brackets?[t.brackets]:["right"],m=e.x-l[3]*2,g=e.x+e.w+l[1]*2,y=e.y-l[0]*2,v=e.y+e.h+l[2]*2;for(const w of p){let k;switch(w){case"bottom":k=[[m,e.y+e.h],[m,v],[g,v],[g,e.y+e.h]];break;case"top":k=[[m,e.y],[m,y],[g,y],[g,e.y]];break;case"left":k=[[e.x,y],[m,y],[m,v],[e.x,v]];break;case"right":k=[[e.x+e.w,y],[g,y],[g,v],[e.x+e.w,v]];break}k&&i.push(ot(k,!1,f))}break}case"crossed-off":{const p=e.x,m=e.y,g=p+e.w,y=m+e.h;for(let v=d;v<u+d;v++)v%2?i.push(J(g,y,p,m,f)):i.push(J(p,m,g,y,f));for(let v=d;v<u+d;v++)v%2?i.push(J(p,y,g,m,f)):i.push(J(g,m,p,y,f));break}case"circle":{const p=rn("double",a,t),m=e.w+(l[1]+l[3]),g=e.h+(l[0]+l[2]),y=e.x-l[3]+m/2,v=e.y-l[0]+g/2,w=Math.floor(u/2),k=u-w*2;for(let b=0;b<w;b++)i.push(mn(y,v,m,g,p));for(let b=0;b<k;b++)i.push(mn(y,v,m,g,f));break}case"highlight":{const p=rn("highlight",a,t);o=e.h*.95;const m=e.y+e.h/2;for(let g=d;g<u+d;g++)g%2?i.push(J(e.x+e.w,m,e.x,m,p)):i.push(J(e.x,m,e.x+e.w,m,p));break}}if(i.length){const p=Mo(i),m=[],g=[];let y=0;const v=(w,k,b)=>w.setAttribute(k,b);for(const w of p){const k=document.createElementNS(Bs,"path");if(v(k,"d",w),v(k,"fill","none"),v(k,"stroke",t.color||"currentColor"),v(k,"stroke-width",`${o}`),t.opacity!==void 0&&v(k,"style",`opacity:${t.opacity}`),c){const b=k.getTotalLength();m.push(b),y+=b}n.appendChild(k),g.push(k)}if(c){let w=0;for(let k=0;k<g.length;k++){const b=g[k],A=m[k],M=y?r*(A/y):0,O=s+w,I=b.style;I.strokeDashoffset=`${A}`,I.strokeDasharray=`${A}`,I.animation=`rough-notation-dash ${M}ms ease-out ${O}ms forwards`,w+=M}return is(r+s)}}return is(0)}function is(n){return new Promise(e=>setTimeout(e,n))}function Mo(n){const e=[];for(const t of n){let s="";for(const r of t.ops){const a=r.data;switch(r.op){case"move":s.trim()&&e.push(s.trim()),s=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}s.trim()&&e.push(s.trim())}return e}function Ao(){if(!window.__rno_kf_s){const n=window.__rno_kf_s=document.createElement("style");n.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(n)}}var Lo=Object.defineProperty,Co=(n,e,t)=>e in n?Lo(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Z=(n,e,t)=>(Co(n,typeof e!="symbol"?e+"":e,t),t);class To{constructor(e,t){Z(this,"_state","unattached"),Z(this,"_config"),Z(this,"_resizing",!1),Z(this,"_ro"),Z(this,"_seed",js()),Z(this,"_e"),Z(this,"_svg"),Z(this,"_lastSizes",[]),Z(this,"_animationDelay",0),Z(this,"_resizeListener",()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))}),Z(this,"pendingRefresh"),this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}getConfig(e){return this._config[e]}setConfig(e,t){this._config[e]!==t&&(this._config[e]=t,this.refresh())}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get class(){return this._config.class}set class(e){this._config.class!==e&&(this._config.class=e,this._svg&&this._svg.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" ")))}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){Ao();const e=this._svg=document.createElementNS(Bs,"svg");e.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" "));const t=e.style;t.position="absolute",t.top="0",t.left="0",t.overflow="visible",t.pointerEvents="none",t.width="100px",t.height="100px";const s=this._config.type==="highlight";if(this._e.insertAdjacentElement(s?"beforebegin":"afterend",e),this._state="not-showing",s){const r=window.getComputedStyle(this._e).position;(!r||r==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length===this._lastSizes.length){for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}else return!0}return!1}isSameRect(e,t){const s=(r,a)=>Math.round(r)===Math.round(a);return s(e.x,t.x)&&s(e.y,t.y)&&s(e.w,t.w)&&s(e.h,t.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}async show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&await this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&await this.render(this._svg,!1);break}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}async render(e,t){let s=this._config;t&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const r=this.rects();let a=0;r.forEach(c=>a+=c.w);const i=s.animationDuration||ko;let o=0;const l=[];for(let c=0;c<r.length;c++){const u=r[c],d=i*(u.w/a);l.push(_o(e,r[c],s,o+this._animationDelay+(this._config.delay||0),d,this._seed)),o+=d}return this._lastSizes=r,this._state="showing",await Promise.all(l)}rects(){const e=[];if(this._svg)if(this._config.multiline){const t=this._e.getClientRects();for(let s=0;s<t.length;s++)e.push(this.svgRect(this._svg,t[s]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){const s=e.getBoundingClientRect(),r=t;return{x:(r.x||r.left)-(s.x||s.left),y:(r.y||r.top)-(s.y||s.top),w:r.width,h:r.height}}}function Oo(n,e){return new To(n,e)}function W(n,e){return n.class=[n.class,e].filter(Boolean).join(" "),n}const os={box:n=>Object.assign(n,{type:"box"}),circle:n=>Object.assign(n,{type:"circle"}),underline:n=>Object.assign(n,{type:"underline"}),highlight:n=>Object.assign(n,{type:"highlight"}),"strike-through":n=>Object.assign(n,{type:"strike-through"}),"crossed-off":n=>Object.assign(n,{type:"crossed-off"}),bracket:n=>Object.assign(n,{type:"bracket"}),strike:n=>Object.assign(n,{type:"strike-through"}),cross:n=>Object.assign(n,{type:"crossed-off"}),crossed:n=>Object.assign(n,{type:"crossed-off"}),linethrough:n=>Object.assign(n,{type:"strike-through"}),"line-through":n=>Object.assign(n,{type:"strike-through"}),black:n=>W(n,"text-black"),blue:n=>W(n,"text-blue"),cyan:n=>W(n,"text-cyan"),gray:n=>W(n,"text-gray"),green:n=>W(n,"text-green"),indigo:n=>W(n,"text-indigo"),lime:n=>W(n,"text-lime"),orange:n=>W(n,"text-orange"),pink:n=>W(n,"text-pink"),purple:n=>W(n,"text-purple"),red:n=>W(n,"text-red"),teal:n=>W(n,"text-teal"),white:n=>W(n,"text-white"),yellow:n=>W(n,"text-yellow")},xo=[[/^delay-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||300;return e.delay=s,e}],[/^(?:op|opacity)-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||100;return e.opacity=s/100,e}]];function Io(){return{install(n){n.directive("mark",{name:"v-mark",mounted:(e,t)=>{const s=h(()=>{const i=typeof t.value=="object"&&!Array.isArray(t.value)?{...t.value}:{at:t.value};let o={at:i.at};const l=Object.entries(t.modifiers).filter(([u,d])=>{if(os[u])return o=os[u](o,d),!1;for(const[f,p]of xo){const m=u.match(f);if(m)return o=p(m,o,d),!1}return!0});l.length&&console.warn("[Slidev] Invalid modifiers for v-mark:",l);const c={...o,...i};return c.type||(c.type="underline"),c}),r=Oo(e,s.value),a=At(e,t,s.value.at);if(!a){r.show();return}e.watchStopHandle=Ue(()=>{let i;s.value.class&&(r.class=s.value.class),s.value.color&&(r.color=s.value.color);const o=s.value.at;o===!0?i=!0:o===!1?i=!1:i=a.isActive.value,i!=null&&(i?r.show():r.hide())})},unmounted:e=>{var t;(t=e.watchStopHandle)==null||t.call(e)}})}}}const cl=T(!1),ul=T(!1),dl=T(!1),$o=T(!1),fl=T(!0),pl=or({xs:460,...fr}),Rt=lr(),hl=cr(),ml=h(()=>Rt.height.value-Rt.width.value/ps.value>120),gl=ur(Ft?document.body:null),kn=dr(),yl=h(()=>{var n,e;return["INPUT","TEXTAREA"].includes(((n=kn.value)==null?void 0:n.tagName)||"")||((e=kn.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),vl=h(()=>{var n;return["BUTTON","A"].includes(((n=kn.value)==null?void 0:n.tagName)||"")});ee("slidev-camera","default",{listenToStorageChanges:!1});ee("slidev-mic","default",{listenToStorageChanges:!1});const Eo=ee("slidev-scale",0),wl=ee("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),Po=ee("slidev-show-editor",!1,{listenToStorageChanges:!1}),Do=ee("slidev-editor-vertical",!1,{listenToStorageChanges:!1}),Ro=ee("slidev-editor-width",Ft?window.innerWidth*.4:318,{listenToStorageChanges:!1}),No=ee("slidev-editor-height",Ft?window.innerHeight*.4:300,{listenToStorageChanges:!1}),gt=Sn(null),Nt=ee("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),yt=ee("slidev-presenter-layout",1,{listenToStorageChanges:!1});function kl(){yt.value=yt.value+1,yt.value>2&&(yt.value=1)}function bl(){Nt.value=Math.min(2,Nt.value+.1)}function Sl(){Nt.value=Math.max(.5,Nt.value-.1)}const _l=fs($o);function jo(n=ls(Ss,T())){const e=pr(n),t=Y([Po,Do,Ro,No,Eo,Rt.width,Rt.height],()=>{setTimeout(e.update,300)},{flush:"post",immediate:!0});return{...e,stop:t}}function Fo(n){return()=>{}}function Ho(n,e,t){var je;function s(x){return n?Je(n,x):gr(x)}const r=s(An),a=s(Ca)??{},i=s(Mn),o=h(()=>Fo(i.value)),l=s(Aa)??T(1),c=s(Ta)??T(1),{left:u,top:d,stop:f}=jo(s(Ss)??T()),p=["slide","presenter"].includes(r.value);let m=n?"directive":"prop",g=Dn(),y;if(Array.isArray(e)?y=e:typeof e=="string"&&e.includes(",")?y=e.split(",").map(Number):e!=null&&(m="frontmatter",g=`${e}`,e=(je=a==null?void 0:a.dragPos)==null?void 0:je[g],y=e==null?void 0:e.split(",").map(Number)),m!=="frontmatter"&&!t)throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");const v=[f],w=e!=null&&!Number.isFinite(y==null?void 0:y[3]);y??(y=[Number.NaN,Number.NaN,0]);const k=T(y[2]),b=T(y[0]+y[2]/2),A=T(y[4]??0),M=h(()=>A.value*Math.PI/180),O=h(()=>Math.sin(M.value)),I=h(()=>Math.cos(M.value)),P=T(),G=T({left:0,top:0,width:0,height:0}),te=T(0);function L(){const x=P.value.getBoundingClientRect();G.value={left:x.left/c.value,top:x.top/c.value,width:x.width/c.value,height:x.height/c.value},te.value=(G.value.width+G.value.height)/l.value/(Math.abs(O.value)+Math.abs(I.value))-k.value}v.push(Y(k,L,{flush:"post"}));const E=T(y[3]??0),N=h({get:()=>(w?te.value:E.value)||0,set:x=>!w&&(E.value=x)}),R=T(y[1]),F=h({get:()=>R.value+N.value/2,set:x=>R.value=x-N.value/2}),oe=h(()=>Number.isFinite(b.value)?{position:"absolute",zIndex:100,left:`${b.value-k.value/2}px`,top:`${F.value-N.value/2}px`,width:`${k.value}px`,height:w?void 0:`${N.value}px`,transformOrigin:"center center",transform:`rotate(${A.value}deg)`}:{position:"absolute",zIndex:100});v.push(Y([b,F,k,N,A],([x,Fe,Ke,Qe,Ze])=>{let He=[x-Ke/2,Fe-Qe/2,Ke].map(Math.round).join();w?He+=m==="directive"?",NaN":",_":He+=`,${Math.round(Qe)}`,Math.round(Ze)!==0&&(He+=`,${Math.round(Ze)}`),m==="directive"&&(He=`[${He}]`),o.value(g,He,m,t)}));const Q={id:g,dataSource:m,markdownSource:t,zoom:c,autoHeight:w,x0:b,y0:F,width:k,height:N,rotate:A,container:P,containerStyle:oe,watchStopHandles:v,dragging:h(()=>gt.value===Q),mounted(){p&&(L(),e||setTimeout(()=>{L(),b.value=(G.value.left+G.value.width/2-u.value)/l.value,F.value=(G.value.top-d.value)/l.value,k.value=G.value.width/l.value,N.value=G.value.height/l.value},100))},unmounted(){p&&Q.stopDragging()},startDragging(){L(),gt.value=Q},stopDragging(){gt.value===Q&&(gt.value=null)}};return v.push(hr(P,x=>{const Fe=document.querySelector("#drag-control-container");Fe&&x.target&&Fe.contains(x.target)||Q.stopDragging()}),Y(mr(),x=>{x||Q.stopDragging()})),Q}function Go(){return{install(n){n.directive("drag",{name:"v-drag",created(e,t,s){var a;const r=Ho(t,t.value,(a=s.props)==null?void 0:a.markdownSource);s.props&&(s.props={...s.props},delete s.props.markdownSource),r.container.value=e,e.draggingState=r,e.dataset.dragId=r.id,r.watchStopHandles.push(Y(r.containerStyle,i=>{for(const[o,l]of Object.entries(i))l&&(e.style[o]=l)},{immediate:!0})),e.addEventListener("dblclick",r.startDragging)},mounted(e){e.draggingState.mounted()},unmounted(e){const t=e.draggingState;t.unmounted(),e.removeEventListener("dblclick",t.startDragging),t.watchStopHandles.forEach(s=>s())}})}}}function Vo(){return{install(n){const e=yr();n.directive("motion",{name:"v-motion",mounted(t,s,r,a){var k,b,A;const i=Je(s,Ht),o=Je(s,Mn),l=Je(s,An),{currentPage:c,clicks:u,isPrintMode:d}=fn(),f=r.props={...r.props},p={...f.initial,...(k=f.variants)==null?void 0:k["slidev-initial"]},m={...f.enter,...(b=f.variants)==null?void 0:b["slidev-enter"]},g={...f.leave,...(A=f.variants)==null?void 0:A["slidev-leave"]};delete f.initial,delete f.enter,delete f.leave;const y=`${Dn()}-`,v=[];for(const M of Object.keys(f))if(M.startsWith("click-")){const O=M.slice(6),I=O.includes("-")?O.split("-").map(Number):+O,P=y+O;v.push({id:P,at:I,variant:{...f[M]},info:i==null?void 0:i.value.calculate(I)}),delete f[M]}v.sort((M,O)=>(Array.isArray(M.at)?M.at[0]:M.at)-(Array.isArray(O.at)?O.at[0]:O.at)),e.created(t,s,r,a),e.mounted(t,s,r,a);const w=t.motionInstance;w.clickIds=v.map(M=>M.id),w.set(p),w.watchStopHandle=Y([o,c,u].filter(Boolean),()=>{var O;const M=((O=Ns.get(t))==null?void 0:O.visibilityState.value)??"shown";if(!(i!=null&&i.value)||!["slide","presenter"].includes((l==null?void 0:l.value)??"")){const I={...p,...m};for(const{variant:P}of v)Object.assign(I,P);w.set(I)}else if(d.value||(o==null?void 0:o.value)===c.value)if(M==="shown"){const I={...p,...m};for(const{variant:P,info:G}of v)(!G||G.isActive.value)&&Object.assign(I,P);d.value?w.set(I):w.apply(I)}else w.apply(M==="before"?p:g);else w.apply(((o==null?void 0:o.value)??-1)>c.value?p:g)},{immediate:!0})},unmounted(t){t.motionInstance.watchStopHandle()}})}}}const zo=[];function Wo(){const n=[];{let e=function(t){if(!D.remote||D.remote===t.query.password)return!0;if(D.remote&&t.query.password===void 0){const s=prompt("Enter password");if(D.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};n.push({name:"entry",path:"/entry",component:()=>C(()=>import("./slidev/entry-CMFxT2Tm.js"),__vite__mapDeps([37,12,1,3,4,38]))},{name:"overview",path:"/overview",component:()=>C(()=>import("./slidev/overview-CEyLVeiK.js"),__vite__mapDeps([39,12,1,40,41,42,43,44,45,46,3,4]))},{name:"notes",path:"/notes",component:()=>C(()=>import("./slidev/notes-BTchYUxg.js"),__vite__mapDeps([47,12,1,43,44,42,3,4])),beforeEnter:e},{name:"presenter",path:"/presenter/:no",component:()=>C(()=>import("./slidev/presenter-0vKmFB3k.js"),__vite__mapDeps([48,12,1,49,40,41,42,2,3,4,50,43,44,51,52,45,46,53])),beforeEnter:e},{path:"/presenter",redirect:{path:"/presenter/1"}})}return n.push({name:"play",path:"/:no",component:()=>C(()=>import("./slidev/play-3Vfqz4GT.js"),__vite__mapDeps([54,1,49,40,41,12,42,2,3,4,50,55]))},{path:"",redirect:{path:"/1"}}),zo.reduce((e,t)=>t(e),n)}const qo=[];async function Bo(n){function e(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}e(),window.addEventListener("resize",e);const t=vr({history:wr("/genaiscript/slides/networking-apr2024/"),routes:Wo()});n.use(t),n.use(ha()),n.use(qi()),n.use(Io()),n.use(Go()),n.use(Vo()),n.use(br,{container:"#twoslash-container"});const s={app:n,router:t};Ct(()=>{t.afterEach(async()=>{await Ct(),un.value+=1})});for(const r of qo)await r(s)}const Us=kr(Wi);Bo(Us);Us.mount("#app");export{An as $,Rt as A,Do as B,bt as C,ne as D,gt as E,$o as F,_l as G,dl as H,hl as I,ll as J,fl as K,vl as L,yl as M,Ko as N,Eo as O,pl as P,kn as Q,kl as R,qt as S,Aa as T,jo as U,Ln as V,ps as W,Ss as X,nl as Y,Mn as Z,Is as _,fn as a,Ht as a0,Ta as a1,ol as a2,tl as a3,el as a4,Xo as a5,le as a6,ce as a7,ue as a8,de as a9,La as aA,Ca as aB,sl as aC,xa as aD,fe as aa,pe as ab,he as ac,me as ad,ge as ae,ye as af,Yo as ag,Dn as ah,ve as ai,dn as aj,_r as ak,we as al,ke as am,be as an,Se as ao,_e as ap,Me as aq,Ae as ar,Le as as,Ce as at,Te as au,Oe as av,xe as aw,Ie as ax,et as ay,al as az,Rs as b,Pi as c,Zo as d,rl as e,gl as f,Be as g,wl as h,Zn as i,Po as j,Nt as k,bl as l,Sl as m,lt as n,D as o,yt as p,C as q,jn as r,Ut as s,il as t,ga as u,cl as v,ul as w,Tr as x,Qo as y,ml as z};
