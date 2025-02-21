import{r as E,Z as X,$ as Y,B as j,f as k,R as ee,x as _,a0 as te,a1 as R}from"./DVQnm3ND.js";function ne(o){if(typeof o.type=="string")return o.type;const i=o.type;return(i==null?void 0:i.name)||(i==null?void 0:i.__name)||"AnonymousComponent"}function Z(o,i=0){if(!o)return"";if(typeof o.children=="string")return o.children;const O=Array.isArray(o.children)?o.children:[],$=ne(o),N="  ".repeat(i),S=o.props?Object.entries(o.props).map(([d,u])=>typeof u=="string"?` ${d}="${u}"`:typeof u=="number"||typeof u=="boolean"?` :${d}="${u}"`:typeof u=="function"?` :${d}="${u.toString()}"`:` :${d}='${JSON.stringify(u)}'`).join(""):"";if(O.length){const d=O.map(u=>R(u)?Z(u,i+1):"").join("");return`${N}<${$}${S}>${d}</${$}>
`}else return`${N}<${$}${S} />
`}function oe(o){return o.map(i=>R(i)?Z(i):"").join("")}function B(o,i=2){try{return JSON.stringify(o,null,i)}catch{return String(o)}}function J(o){return o.replace(/([A-Z])/g,"-$1").toLowerCase()}function se(o,i,O={}){const{fullVueFile:$=!1,kebabCase:N=!0,withComments:S=!1,eventNameToHandler:d={},specialDirectives:u={},slotProps:q={}}=O,w=E("📋 Copy"),b=E(!1),T=E(""),m=X(o),g=Y(),W=j(()=>o.emits||[]),L=(e,...a)=>{W.value.includes(e)&&i(e,...a)},D=k(()=>{var e;return(e=m.props)==null?void 0:e.value},e=>{Object.entries(e??[]).forEach(([a,l])=>{if(a.startsWith("v-model:")){const r="update:"+a.replace("v-model:","");L(r,l)}})},{deep:!0}),U=j(()=>{var a,l,r;const e={...(a=m.props)==null?void 0:a.value};((l=m.modelValue)==null?void 0:l.value)!==void 0&&(e.modelValue=m.modelValue.value,e["onUpdate:modelValue"]=p=>{i("update:modelValue",p)});for(const[p,f]of Object.entries(((r=m.props)==null?void 0:r.value)??{}))if(p.startsWith("v-model:")){const h=p.replace("v-model:","");ee(f)?(e[h]=f.value,e[`onUpdate:${h}`]=C=>{f.value=C}):e[h]=f}return e}),H=j(()=>{var l;const e={},a=((l=m.listeners)==null?void 0:l.value)||{};W.value.forEach(r=>{const p=r.charAt(0).toUpperCase()+r.slice(1);e[`on${p}`]=(...f)=>{L(r,...f)}});for(const[r,p]of Object.entries(a))if(r.startsWith("on"))e[r]=p;else{const f=r.charAt(0).toUpperCase()+r.slice(1);e[`on${f}`]=p}return e}),K=j(()=>{const e={...U.value,...H.value};return typeof m.component.value=="string"?_(m.component.value,e,g):_(m.component.value,e,g)}),M=j(()=>{var a;const e={};for(const l of Object.keys(g)){const r=((a=g[l])==null?void 0:a.call(g))||[];e[l]=oe(r)}return e}),z=j(()=>{var x,F;if(b.value)return T.value;const e=o.name||(typeof o.component=="string"?o.component:((x=o.component)==null?void 0:x.name)||((F=o.component)==null?void 0:F.__name))||"UnknownComponent",a={};Object.keys(U.value).forEach(t=>{t.startsWith("onUpdate:")&&(a[t.slice(9)]=!0)});const l=[],r=new Set;function p(t){let n=t,s=2;for(;r.has(n);)n=t+s,s++;return r.add(n),n}function f(t,n){if(u[t])return`${u[t]}="${String(n)}"`;if(t==="modelValue"&&a.modelValue)if($){const c=p("componentValue");return l.push({key:t,varName:c,initialValue:n}),`v-model="${c}"`}else return`v-model="${String(n)}"`;if(a[t])if($){const c=p(t);return l.push({key:t,varName:c,initialValue:n}),`v-model:${t}="${c}"`}else return`v-model:${t}="${String(n)}"`;if(t.startsWith("onUpdate:"))return null;const s=N?J(t):t;if(typeof n=="function"){const c=n.toString().replace(/^/gm,"  ");return`:${s}="
${c}
"`}else if(typeof n=="object"&&n!==null){const c=B(n,2).replace(/^/gm,"    ");return`:${s}="
${c}
  "`}else{if(typeof n=="boolean"||typeof n=="number")return`:${s}="${n}"`;if(typeof n=="string")return`${s}="${n}"`}return`:${s}="${String(n)}"`}const h=[];Object.entries(U.value).forEach(([t,n])=>{const s=f(t,n);s&&(S&&h.push(`  <!-- prop: ${t} -->`),h.push(`  ${s}`))});const C=[];for(const t of o.emits||[]){if(t.startsWith("update:"))continue;const n=d[t]||"handler";S&&C.push(`  <!-- event: ${t} -->`);const s=N?J(t):t;C.push(`  @${s}="${n}"`)}const v=[];for(const[t,n]of Object.entries(M.value)){const s=q[t]||[],c=s.length?`{ ${s.join(", ")} }`:"";if(n.trim()){v.push(`        <template #${t}${c?`="${c}"`:""}>`);const V=n.split(`
`).map(A=>"    "+A).join(`
`);v.push(V),v.push("  </template>")}else v.push(`  <template #${t}${c?`="${c}"`:""}></template>`)}let y="";const P=[...h,...C];if(v.length===0?y=`   <${e}
      ${P.join(`
      `)}
      />`:(y=`   <${e}
      ${P.join(`
      `)}
      >
`,y+=v.join(`
      `)+`
`,y+=`      </${e}>`),$){let t=[];l.length&&(t=l.map(({varName:V,initialValue:A})=>{const Q=typeof A=="string"?JSON.stringify(A):B(A,0);return`const ${V} = ref(${Q})`}));let n=!1;for(const V of o.emits||[])if(!V.startsWith("update:")){n=!0;break}const s=n?`
function handler(...args) {
  console.log('Event from ${e}', ...args)
}
`.trim():"",c=`
<script setup>
import ${e} from '@/components/${e}.vue'
import { ref } from 'vue'

// Auto-generated model refs:
${t.join(`
`)}

${s}
<\/script>`.trim();return`
<template>
  ${y}
</template>

${c}
      `.trim()}else return y}),G=async()=>{try{await navigator.clipboard.writeText(z.value),w.value="✅ Copied!",setTimeout(()=>{w.value="📋 Copy"},5e3)}catch(e){console.error("Failed to copy:",e)}},I=()=>{b.value||(T.value=z.value),b.value=!b.value};return te(()=>{D()}),{copyButtonText:w,isFrozen:b,toggleFreeze:I,copyCode:G,renderedComponent:K,generatedCode:z,dynamicProps:U}}export{se as u};
