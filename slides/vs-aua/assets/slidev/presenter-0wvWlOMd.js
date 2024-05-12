import{h as W,i as j,l as A,m as J}from"../modules/unplugin-icons-DMPJ6RbJ.js";import{d as $,o,c,i as q,A as e,t as z,y,D as F,M as O,ac as K,J as U,ae as X,a1 as Y,b as C,e as s,l as t,k,g as I,h as D,x as Z,F as ee,p as te,a as se}from"../modules/vue-BpohPuJT.js";import{_ as P,a as oe,u as ne,e as re,c as ae,d as ie,h as le,s as ce,p as ue,j as de,k as pe,l as me,m as _e}from"../index-okDgU2Uw.js";import{r as fe,u as ve,S as xe,o as ge,N as ke,G as he,Q as ye,C as Ce}from"./ContextMenu-BJeFTuFu.js";import{b as be,c as Se,a as M,S as we}from"./DrawingPreview-Cx81aFR4.js";import{N as Ne}from"./NoteDisplay-B0XLKkuX.js";import ze from"./DrawingControls-COK9SA24.js";import{I as B}from"./IconButton-CmoGW66N.js";import{C as Fe}from"./ClicksSlider-K1kTxXIV.js";import"../modules/shiki-BGRm4NX1.js";import"./context-CgTtj5qd.js";const Ie=$({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(a){const i=a,{info:r}=be(i.no);return(u,d)=>{var f,v;return o(),c(Ne,{class:q(i.class),note:(f=e(r))==null?void 0:f.note,"note-html":(v=e(r))==null?void 0:v.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),De=P(Ie,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/internals/NoteStatic.vue"]]),b=a=>(te("data-v-70568663"),a=a(),se(),a),Me={class:"bg-main h-full slidev-presenter"},Be=b(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),$e={class:"relative grid-section next flex flex-col p-2 lg:p-4"},qe=b(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Pe={key:0,class:"grid-section note of-auto"},Re={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Te={class:"border-t border-main py-1 px-2 text-sm"},Ee={class:"grid-section bottom flex"},Ve=b(()=>s("div",{"flex-auto":""},null,-1)),Ge={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He={class:"progress-bar"},Le=$({__name:"presenter",setup(a){const i=z();fe(),ve(i);const{clicksContext:r,currentSlideNo:u,currentSlideRoute:d,hasNext:f,nextRoute:v,slides:R,queryClicks:T,getPrimaryClicks:E,total:V}=oe(),{isDrawing:G}=Se();ne({title:`Presenter - ${ce}`}),z(!1);const{timer:H,resetTimer:S}=re(),L=y(()=>R.value.map(g=>ae(g))),l=y(()=>r.value.current<r.value.total?[d.value,r.value.current+1]:f.value?[v.value,0]:null),x=y(()=>l.value&&L.value[l.value[0].no-1]);F([d,T],()=>{x.value&&(x.value.current=l.value[1])},{immediate:!0});const w=O();return K(()=>{const g=i.value.querySelector("#slide-content"),p=U(X()),h=Y();F(()=>{if(!h.value||G.value||!le.value)return;const n=g.getBoundingClientRect(),m=(p.x-n.left)/n.width*100,_=(p.y-n.top)/n.height*100;if(!(m<0||m>100||_<0||_>100))return{x:m,y:_}},n=>{ie.cursor=n})}),(g,p)=>{var N;const h=W,n=j,m=A,_=J;return o(),C(ee,null,[s("div",Me,[s("div",{class:q(["grid-container",`layout${e(ue)}`])},[s("div",{ref_key:"main",ref:i,class:"relative grid-section main flex flex-col"},[t(M,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ge)},{default:k(()=>[t(xe,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),c(Fe,{key:(N=e(d))==null?void 0:N.no,"clicks-context":e(E)(e(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Be],512),s("div",$e,[l.value&&x.value?(o(),c(M,{key:"next"},{default:k(()=>[(o(),c(we,{key:l.value[0].no,"clicks-context":x.value,route:l.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):I("v-if",!0),qe]),w.value&&e(de)?(o(),C("div",Pe,[t(e(w))])):(o(),C("div",Re,[(o(),c(De,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:D({fontSize:`${e(pe)}em`}),"clicks-context":e(r)},null,8,["no","style","clicks-context"])),s("div",Te,[t(B,{title:"Increase font size",onClick:e(me)},{default:k(()=>[t(h)]),_:1},8,["onClick"]),t(B,{title:"Decrease font size",onClick:e(_e)},{default:k(()=>[t(n)]),_:1},8,["onClick"]),I("v-if",!0)])])),s("div",Ee,[t(ke,{persist:!0}),Ve,s("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:p[2]||(p[2]=(...Q)=>e(S)&&e(S)(...Q))},[t(m,{class:"absolute"}),t(_,{class:"absolute opacity-0"})]),s("div",Ge,Z(e(H)),1)]),(o(),c(ze,{key:2}))],2),s("div",He,[s("div",{class:"progress h-3px bg-primary transition-all",style:D({width:`${(e(u)-1)/(e(V)-1)*100+1}%`})},null,4)])]),t(he),t(ye),t(Ce)],64)}}}),et=P(Le,[["__scopeId","data-v-70568663"],["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/pages/presenter.vue"]]);export{et as default};
