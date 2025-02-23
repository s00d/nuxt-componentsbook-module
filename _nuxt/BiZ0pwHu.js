import{r as R,$ as X,a0 as Y,B as b,g as k,R as ee,x as _,a1 as te,a2 as N,d as U}from"./CXqv3HIH.js";function ne(e){if(typeof e.type=="symbol"&&e.type.description==="v-txt")return"#text";if(typeof e.type=="string")return e.type;const s=e.type;return(s==null?void 0:s.name)||(s==null?void 0:s.__name)||"AnonymousComponent"}function re(e){if(Array.isArray(e.children))return e.children.flatMap(s=>Array.isArray(s)?s.map(a=>N(a)?a:U(String(a))):N(s)?s:U(String(s)));if(typeof e.children=="object"&&e.children!==null){const s=e.children;if(typeof s.default=="function"){const a=s.default();return Array.isArray(a)?a.map(m=>N(m)?m:U(String(m))):N(a)?[a]:[U(String(a))]}}return typeof e.children=="string"||typeof e.children=="number"?[U(String(e.children))]:[]}function B(e,s=0){if(!e)return"";const a=ne(e),m="  ".repeat(s);if(a==="#text")return String(e.children)+`
`;const j=re(e),A=e.props?Object.entries(e.props).map(([h,f])=>typeof f=="string"?` ${h}="${f}"`:typeof f=="number"||typeof f=="boolean"?` :${h}="${f}"`:typeof f=="function"?` :${h}="${f.toString()}"`:` :${h}='${JSON.stringify(f)}'`).join(""):"";if(j.length){const h=j.map(f=>N(f)?B(f,s+1):"").join("");return`${m}<${a}${A}>${h}</${a}>
`}else return`${m}<${a}${A} />
`}function se(e){return e.map(s=>N(s)?B(s):"").join("")}function F(e,s=2){try{return JSON.stringify(e,null,s)}catch{return String(e)}}function J(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function ie(e,s,a={}){const{fullVueFile:m=!1,kebabCase:j=!0,withComments:A=!1,eventNameToHandler:h={},specialDirectives:f={},slotProps:M={}}=a,V=R(!1),w=R(""),$=X(e),v=Y(),W=b(()=>e.emits||[]),q=(r,...u)=>{W.value.includes(r)&&s(r,...u)},D=k(()=>{var r;return(r=$.props)==null?void 0:r.value},r=>{Object.entries(r??[]).forEach(([u,l])=>{if(u.startsWith("v-model:")){const o="update:"+u.replace("v-model:","");q(o,l)}})},{deep:!0}),z=b(()=>{var u,l,o;const r={...(u=$.props)==null?void 0:u.value};((l=$.modelValue)==null?void 0:l.value)!==void 0&&(r.modelValue=$.modelValue.value,r["onUpdate:modelValue"]=p=>{s("update:modelValue",p)});for(const[p,d]of Object.entries(((o=$.props)==null?void 0:o.value)??{}))if(p.startsWith("v-model:")){const g=p.replace("v-model:","");ee(d)?(r[g]=d.value,r[`onUpdate:${g}`]=C=>{d.value=C}):r[g]=d}return r}),H=b(()=>{var l;const r={},u=((l=$.listeners)==null?void 0:l.value)||{};W.value.forEach(o=>{const p=o.charAt(0).toUpperCase()+o.slice(1);r[`on${p}`]=(...d)=>{W.value.includes(o)&&s(o,...d)}});for(const[o,p]of Object.entries(u))if(o.startsWith("on"))r[o]=p;else{const d=o.charAt(0).toUpperCase()+o.slice(1);r[`on${d}`]=p}return r}),K=b(()=>{const r={...z.value,...H.value};return typeof $.component.value=="string"?_($.component.value,r,v):_($.component.value,r,v)}),Z=b(()=>{var u;const r={};for(const l of Object.keys(v)){const o=((u=v[l])==null?void 0:u.call(v))||[];r[l]=se(o)}return r}),x=b(()=>{var P,T;if(V.value)return w.value;const r=e.name||(typeof e.component=="string"?e.component:((P=e.component)==null?void 0:P.name)||((T=e.component)==null?void 0:T.__name))||"UnknownComponent",u={};Object.keys(z.value).forEach(t=>{t.startsWith("onUpdate:")&&(u[t.slice(9)]=!0)});const l=[],o=new Set;function p(t){let n=t,i=2;for(;o.has(n);)n=t+i,i++;return o.add(n),n}function d(t,n){if(f[t])return`${f[t]}="${String(n)}"`;if(t==="modelValue"&&u.modelValue)if(m){const c=p("componentValue");return l.push({key:t,varName:c,initialValue:n}),`v-model="${c}"`}else return`v-model="${String(n)}"`;if(u[t])if(m){const c=p(t);return l.push({key:t,varName:c,initialValue:n}),`v-model:${t}="${c}"`}else return`v-model:${t}="${String(n)}"`;if(t.startsWith("onUpdate:"))return null;const i=j?J(t):t;if(typeof n=="function"){const c=n.toString().replace(/^/gm,"  ");return`:${i}="
${c}
"`}else if(typeof n=="object"&&n!==null){const c=F(n,2).replace(/^/gm,"    ");return`:${i}="
${c}
  "`}else{if(typeof n=="boolean"||typeof n=="number")return`:${i}="${n}"`;if(typeof n=="string")return`${i}="${n}"`}return`:${i}="${String(n)}"`}const g=[];Object.entries(z.value).forEach(([t,n])=>{const i=d(t,n);i&&(A&&g.push(`  <!-- prop: ${t} -->`),g.push(`  ${i}`))});const C=[];for(const t of e.emits||[]){if(t.startsWith("update:"))continue;const n=h[t]||"handler";A&&C.push(`  <!-- event: ${t} -->`);const i=j?J(t):t;C.push(`  @${i}="${n}"`)}const S=[];for(const[t,n]of Object.entries(Z.value)){const i=M[t]||[],c=i.length?`{ ${i.join(", ")} }`:"";if(n.trim()){S.push(`<template #${t}${c?`="${c}"`:""}>`);const E=n.split(`
`).map(O=>"    "+O).join(`
`);S.push(E),S.push("</template>")}else S.push(`<template #${t}${c?`="${c}"`:""}></template>`)}const I=[...g,...C],y=[];y.push(`<${r}`),I.forEach(t=>{y.push(t)}),S.length?(y.push(">"),S.forEach(t=>{y.push(t)}),y.push(`</${r}>`)):y.push("/>");const L=y.join(`
`);if(m){let t=[];l.length&&(t=l.map(({varName:E,initialValue:O})=>{const Q=typeof O=="string"?JSON.stringify(O):F(O,0);return`const ${E} = ref(${Q})`}));let n=!1;for(const E of e.emits||[])if(!E.startsWith("update:")){n=!0;break}const i=n?`
function handler(...args) {
  console.log('Event from ${r}', ...args)
}
`.trim():"",c=`
<script setup>
import { ref } from 'vue'

// Auto-generated model refs:
${t.join(`
`)}

${i}
<\/script>`.trim();return`
<template>
${L}
</template>

${c}
      `.trim()}else return L}),G=()=>{V.value||(w.value=x.value),V.value=!V.value};return te(()=>{D()}),{isFrozen:V,toggleFreeze:G,renderedComponent:K,generatedCode:x,dynamicProps:z}}export{ie as u};
