import{B as H,C as L}from"../modules/unplugin-icons-DMPJ6RbJ.js";import{d as B,t as E,az as I,C as _,ac as N,y,aE as q,o as c,b as v,f as M,A as u,c as C,g as V,i as $,h as z}from"../modules/vue-BpohPuJT.js";import{o as k,ae as D,C as K,ao as R,ap as W,_ as U}from"../index-okDgU2Uw.js";import{u as X}from"./context-CgTtj5qd.js";const j=["title"],F=B({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(b){const e=b,{$clicksContext:a}=X(),n=E(),p=D();I(()=>{a.unregister(p)}),_(()=>{var t;(t=n.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),N(()=>{var i;if(!a||!((i=e.ranges)!=null&&i.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(p,t);const o=y(()=>t?Math.max(0,a.current-t.start+1):K),s=y(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());_(()=>{if(!n.value)return;let r=e.ranges[o.value]??s.value;const g=r==="hide";n.value.classList.toggle(R,g),g&&(r=e.ranges[o.value+1]??s.value);const h=n.value.querySelector(".shiki"),f=Array.from(h.querySelectorAll("code > .line")),w=f.length;if(W(r,w,e.startLine,l=>[f[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((m,A)=>A.offsetHeight+m,0)>n.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:d,copy:S}=q();function x(){var o,s;const t=(s=(o=n.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:s.textContent;t&&S(t)}return(t,o)=>{const s=H,i=L;return c(),v("div",{ref_key:"el",ref:n,class:$(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:z({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),u(k).codeCopy?(c(),v("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(d)?"Copied":"Copy",onClick:o[0]||(o[0]=r=>x())},[u(d)?(c(),C(s,{key:0,class:"p-2 w-8 h-8"})):(c(),C(i,{key:1,class:"p-2 w-8 h-8"}))],8,j)):V("v-if",!0)],6)}}}),T=U(F,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{T as _};
