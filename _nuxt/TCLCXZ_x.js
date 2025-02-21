import{_ as w,a as z}from"./Dw_ba-jO.js";import{_ as D}from"./Be1NRngx.js";import{M as d}from"./DBn-DrJ6.js";import{_ as h,c as r,o,a as t,b as u,d as v,M as _,r as m,K as y,L as a,N as g,J as x,w as M,t as s}from"./DVQnm3ND.js";import"./GvVry5ad.js";const A={class:"button-group"},V={class:"button-group"},P={__name:"MyButton.stories",setup(k){return(b,l)=>{const i=D;return o(),r(_,null,[l[0]||(l[0]=t("p",null,[v(" The "),t("code",null,"MyButton"),v(" component is used to display a button with different styles and sizes. ")],-1)),l[1]||(l[1]=t("h2",null,"🛠 Usage Examples",-1)),u(i,{title:"Simple Button",component:d,props:{label:"Click Me"}}),l[2]||(l[2]=t("h3",null,"🔹 Different Styles",-1)),t("div",A,[u(i,{title:"Primary Button Styles",component:d,props:{label:"Primary",variant:"primary"}}),u(i,{title:"Secondary Button Styles",component:d,props:{label:"Secondary",variant:"secondary"}}),u(i,{title:"Danger Button Styles",component:d,props:{label:"Danger",variant:"danger"}})]),l[3]||(l[3]=t("h3",null,"🔹 Different Sizes",-1)),t("div",V,[u(i,{title:"Small Button Size",component:d,props:{label:"Small",size:"sm"}}),u(i,{title:"Medium Button Size",component:d,props:{label:"Medium",size:"md"}}),u(i,{title:"Large Button Size",component:d,props:{label:"Large",size:"lg"}})])],64)}}},E=h(P,[["__scopeId","data-v-c5621996"]]),T={class:"componentsbook-page"},$={key:0},q=["textContent"],L=["textContent"],I=["textContent"],F=["textContent"],O=["textContent"],R=["textContent"],H={key:1},J=["textContent"],K=["textContent"],U={key:2},Y=["textContent"],j=["textContent"],G=["textContent"],Q={__name:"playground_Components_MyButton",setup(k){const b=m([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"primary | secondary | danger",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),l=m([{name:"click",description:"N/A"}]),i=m([]),C=m(!0),f=m(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from '#imports'

const props = defineProps({
  label: {
    type: String,
    default: 'Click me',
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value),
  },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}

const buttonClass = computed(() => [
  'btn',
  \`btn-\${props.variant}\`,
  \`btn-\${props.size}\`,
])
<\/script>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.2s;
}

.btn-primary {
  background: #007bff;
  color: white;
}
.btn-secondary {
  background: #6c757d;
  color: white;
}
.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-sm {
  font-size: 12px;
  padding: 0.25rem 0.5rem;
}
.btn-md {
  font-size: 16px;
}
.btn-lg {
  font-size: 20px;
  padding: 0.75rem 1.5rem;
}
</style>
`),S=async()=>{try{await navigator.clipboard.writeText(f.value)}catch(p){console.error("Failed to copy:",p)}};{const p=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),p.disconnect())});p.observe(document.body,{childList:!0,subtree:!0})}return(p,n)=>{const B=z,N=w;return o(),r("div",T,[t("div",null,[n[6]||(n[6]=t("h1",null,"🟢 MyButton Component",-1)),a(b).length?(o(),r("div",$,[n[1]||(n[1]=t("h2",null,"🔹 Props",-1)),t("table",null,[n[0]||(n[0]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Values"),t("th",null,"Required"),t("th",null,"Default Value"),t("th",null,"Description")])],-1)),t("tbody",null,[(o(!0),r(_,null,g(a(b),(e,c)=>(o(),r("tr",{key:c},[t("td",null,[t("b",{textContent:s(e.name)},null,8,q)]),t("td",{textContent:s(e.type??"N/A")},null,8,L),t("td",{textContent:s(e.values??"N/A")},null,8,I),t("td",{textContent:s(e.required?"✅ Yes":"❌ No")},null,8,F),t("td",{textContent:s(e.defaultValue??"N/A")},null,8,O),t("td",{textContent:s(e.description??"N/A")},null,8,R)]))),128))])])])):y("",!0),a(l).length?(o(),r("div",H,[n[3]||(n[3]=t("h2",null,"🔹 Events",-1)),t("table",null,[n[2]||(n[2]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Description")])],-1)),t("tbody",null,[(o(!0),r(_,null,g(a(l),(e,c)=>(o(),r("tr",{key:c},[t("td",null,[t("b",{textContent:s(e.name)},null,8,J)]),t("td",{textContent:s(e.description??"N/A")},null,8,K)]))),128))])])])):y("",!0),a(i).length?(o(),r("div",U,[n[5]||(n[5]=t("h2",null,"🔹 Slots",-1)),t("table",null,[n[4]||(n[4]=t("thead",null,[t("tr",null,[t("th",null,"Slot"),t("th",null,"Description"),t("th",null,"Bindings")])],-1)),t("tbody",null,[(o(!0),r(_,null,g(a(i),(e,c)=>(o(),r("tr",{key:c},[t("td",null,[t("b",{textContent:s(e.name)},null,8,Y)]),t("td",{textContent:s(e.description??"N/A")},null,8,j),t("td",{textContent:s(e.bindings??"N/A")},null,8,G)]))),128))])])])):y("",!0)]),u(E),t("div",null,[a(C)?(o(),x(N,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:M(()=>[a(C)?(o(),x(B,{key:0,code:a(f),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:S},null,8,["code"])):y("",!0)]),_:1})):y("",!0)])])}}},et=h(Q,[["__scopeId","data-v-dc3b9819"]]);export{et as default};
