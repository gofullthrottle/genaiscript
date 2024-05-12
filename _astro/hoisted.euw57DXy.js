class w extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",r=>{r.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=r.currentTarget.value)})}}customElements.define("starlight-lang-select",w);const L="modulepreload",T=function(s){return"/genaiscript/"+s},E={},k=function(e,r,o){let d=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");d=Promise.all(r.map(c=>{if(c=T(c),c in E)return;E[c]=!0;const u=c.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const t=document.createElement("link");if(t.rel=u?"stylesheet":L,u||(t.as="script",t.crossOrigin=""),t.href=c,i&&t.setAttribute("nonce",i),document.head.appendChild(t),u)return new Promise((l,n)=>{t.addEventListener("load",l),t.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${c}`)))})}))}return d.then(()=>e()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})};class x extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),r=this.querySelector("button[data-close-modal]"),o=this.querySelector("dialog"),d=this.querySelector(".dialog-frame"),a=n=>{("href"in(n.target||{})||document.body.contains(n.target)&&!d.contains(n.target))&&c()},i=n=>{o.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),n?.stopPropagation(),window.addEventListener("click",a)},c=()=>o.close();e.addEventListener("click",i),e.disabled=!1,r.addEventListener("click",c),o.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",a)}),window.addEventListener("keydown",n=>{const h=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(n.metaKey===!0||n.ctrlKey===!0)&&n.key==="k"?(o.open?c():i(),n.preventDefault()):n.key==="/"&&!o.open&&!h&&(i(),n.preventDefault())});let u={};try{u=JSON.parse(this.dataset.translations||"{}")}catch{}const l=this.dataset.stripTrailingSlash!==void 0?n=>n.replace(/(.)\/(#.*)?$/,"$1$2"):n=>n;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(h=>setTimeout(h,1)))(async()=>{const{PagefindUI:h}=await k(()=>import("./ui-core.Bo8vXJ2V.js"),[]);new h({element:"#starlight__search",baseUrl:"/genaiscript",bundlePath:"/genaiscript".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:u,showSubResults:!0,processResult:m=>{m.url=l(m.url),m.sub_results=m.sub_results.map(f=>(f.url=l(f.url),f))}})})})}}customElements.define("site-search",x);const S="starlight-theme",y=s=>s==="auto"||s==="dark"||s==="light"?s:"auto",v=()=>y(typeof localStorage<"u"&&localStorage.getItem(S));function C(s){typeof localStorage<"u"&&localStorage.setItem(S,s==="light"||s==="dark"?s:"")}const q=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(s){StarlightThemeProvider.updatePickers(s),document.documentElement.dataset.theme=s==="auto"?q():s,C(s)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{v()==="auto"&&p("auto")});class H extends HTMLElement{constructor(){super(),p(v()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(y(e.currentTarget.value))})}}customElements.define("starlight-theme-select",H);class M extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",r=>this.closeOnEscape(r))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",M);const I="_top";class b extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],r=t=>{if(t instanceof HTMLHeadingElement){if(t.id===I)return!0;const l=t.tagName[1];if(l){const n=parseInt(l,10);if(n>=this.minH&&n<=this.maxH)return!0}}return!1},o=t=>{if(!t)return null;const l=t;for(;t;){if(r(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const n=o(t);if(n)return n}return o(l.parentElement)},d=t=>{for(const{isIntersecting:l,target:n}of t){if(!l)continue;const h=o(n);if(!h)continue;const m=e.find(f=>f.hash==="#"+encodeURIComponent(h.id));if(m){this.current=m;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const c=()=>{i&&i.disconnect(),i=new IntersectionObserver(d,{rootMargin:this.getRootMargin()}),a.forEach(t=>i.observe(t))};c();const u=window.requestIdleCallback||(t=>setTimeout(t,1));let g;window.addEventListener("resize",()=>{i&&i.disconnect(),clearTimeout(g),g=setTimeout(()=>u(c),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,r=this.querySelector("summary")?.getBoundingClientRect().height||0,o=e+r+32,d=o+53,a=document.documentElement.clientHeight;return`-${o}px 0% ${d-a}px`}}customElements.define("starlight-toc",b);class _ extends b{set current(e){super.current=e;const r=this.querySelector(".display-current");r&&(r.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const r=()=>{e.open=!1};e.querySelectorAll("a").forEach(o=>{o.addEventListener("click",r)}),window.addEventListener("click",o=>{e.contains(o.target)||r()}),window.addEventListener("keydown",o=>{if(o.key==="Escape"&&e.open){const d=e.contains(document.activeElement);if(r(),d){const a=e.querySelector("summary");a&&a.focus()}}})}}customElements.define("mobile-starlight-toc",_);export{k as _};
