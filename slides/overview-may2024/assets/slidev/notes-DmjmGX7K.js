import{h as $,i as B,j as D,k as T}from"../modules/unplugin-icons-CAr7x4nG.js";import{d as I,t as E,S as H,y as h,D as L,o as c,b as V,e as o,h as x,A as t,l as s,k as i,c as g,x as k,F as j}from"../modules/vue-DBmxtNSw.js";import{u as A,a as M,d as r,s as P,f as R,_ as U}from"../index-DD3vL0Eq.js";import{N as q}from"./NoteDisplay-SnQeAFhr.js";import{I as u}from"./IconButton-BTHfonLJ.js";import"../modules/shiki-D90nNId7.js";const G={class:"h-full pt-2 flex flex-col"},J={class:"flex-none border-t border-main"},K={class:"flex gap-1 items-center px-6 py-3"},O=o("div",{class:"flex-auto"},null,-1),Q={class:"p2 text-center"},W=I({__name:"notes",setup(X){A({title:`Notes - ${P}`});const{slides:y,total:_}=M(),{isFullscreen:p,toggle:z}=R,m=E(),n=H("slidev-notes-font-size",18),l=h(()=>{var e;return((e=r.lastUpdate)==null?void 0:e.type)==="viewer"?r.viewerPage:r.page}),a=h(()=>y.value.find(e=>e.no===l.value));L(l,()=>{var e;(e=m.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function b(){n.value=n.value+1}function w(){n.value=n.value-1}return(e,Y)=>{var d,f,v;const S=D,C=T,N=$,F=B;return c(),V(j,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:x({width:`${(l.value-1)/(t(_)-1)*100+1}%`})},null,4),o("div",G,[o("div",{ref_key:"scroller",ref:m,class:"px-5 flex-auto h-full overflow-auto",style:x({fontSize:`${t(n)}px`})},[s(q,{note:(d=a.value)==null?void 0:d.meta.slide.note,"note-html":(f=a.value)==null?void 0:f.meta.slide.noteHTML,placeholder:`No notes for Slide ${l.value}.`,"clicks-context":(v=a.value)==null?void 0:v.meta.__clicksContext,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",J,[o("div",K,[s(u,{title:t(p)?"Close fullscreen":"Enter fullscreen",onClick:t(z)},{default:i(()=>[t(p)?(c(),g(S,{key:0})):(c(),g(C,{key:1}))]),_:1},8,["title","onClick"]),s(u,{title:"Increase font size",onClick:b},{default:i(()=>[s(N)]),_:1}),s(u,{title:"Decrease font size",onClick:w},{default:i(()=>[s(F)]),_:1}),O,o("div",Q,k(l.value)+" / "+k(t(_)),1)])])])],64)}}}),le=U(W,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/pages/notes.vue"]]);export{le as default};
