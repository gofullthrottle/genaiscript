import{a2 as n,a8 as r,t as u,y as $,av as j,aF as v}from"../modules/vue-BpohPuJT.js";import{T as p,a1 as x,ax as C,a0 as S,Z as T,$ as F,ay as l,Y as R,az as k,aA as E}from"../index-KnIPS2Sq.js";function g(){const t=n(C),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(T),c=n(F),o=n(l,{}),d=n(R,void 0),m=n(p,u(1)),f=n(x,$(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;j(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,a){return{...v(t,a===0?k:E),frontmatter:t}}export{O as f,L as p,g as u};