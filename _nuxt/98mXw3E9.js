import{_ as V,a as A}from"./Dw_ba-jO.js";import{_ as D}from"./Be1NRngx.js";import{m as S,B as P,c as u,o as l,O as T,L as o,t as a,_ as N,r as m,a as t,b as z,d as v,P as x,Q as $,R as g,S as k,M as C,K as _,N as h,J as w,w as q}from"./DVQnm3ND.js";import"./GvVry5ad.js";const E=S({__name:"MyButton4",props:{label:{},size:{},variant:{}},emits:["click"],setup(f,{emit:d}){const i=f,p=d,c=P(()=>["btn",`btn-${i.variant||"primary"}`,`btn-${i.size||"md"}`]),n=()=>{p("click")};return(b,r)=>(l(),u("button",{class:T(o(c)),onClick:n},a(b.label),3))}}),L={class:"controls"},I={__name:"MyButton4.stories",setup(f){const d=m("Click Me"),i=m("md"),p=m("primary");return(c,n)=>{const b=D;return l(),u(C,null,[n[8]||(n[8]=t("p",null,[v(" The "),t("code",null,"MyButton3"),v(" component is used to display a button with different styles and sizes. ")],-1)),n[9]||(n[9]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",L,[t("label",null,[n[3]||(n[3]=v(" Label: ")),x(t("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>g(d)?d.value=r:null),type:"text"},null,512),[[$,o(d)]])]),t("label",null,[n[5]||(n[5]=v(" Size: ")),x(t("select",{"onUpdate:modelValue":n[1]||(n[1]=r=>g(i)?i.value=r:null)},n[4]||(n[4]=[t("option",{value:"sm"},"Small",-1),t("option",{value:"md"},"Medium",-1),t("option",{value:"lg"},"Large",-1)]),512),[[k,o(i)]])]),t("label",null,[n[7]||(n[7]=v(" Variant: ")),x(t("select",{"onUpdate:modelValue":n[2]||(n[2]=r=>g(p)?p.value=r:null)},n[6]||(n[6]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1),t("option",{value:"danger"},"Danger",-1)]),512),[[k,o(p)]])])]),z(b,{name:"MyButton",component:E,props:{label:o(d),size:o(i),variant:o(p)}},null,8,["props"])],64)}}},R=N(I,[["__scopeId","data-v-f60043a4"]]),O={class:"componentsbook-page"},U={key:0},F=["textContent"],H=["textContent"],J=["textContent"],K=["textContent"],Q=["textContent"],Y=["textContent"],j={key:1},G=["textContent"],W=["textContent"],X={key:2},Z=["textContent"],tt=["textContent"],nt=["textContent"],et={__name:"playground_Components_MyButton4",setup(f){const d=m([{name:"label",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"size",values:'"sm" | "md" | "lg"',type:"union",defaultValue:"N/A",description:"The size of the button allows only some values",required:!1},{name:"variant",values:'"primary" | "secondary" | "danger"',type:"union",defaultValue:"N/A",description:"The type of the button allows only some values",required:!1}]),i=m([{name:"click",description:"N/A"}]),p=m([]),c=m(!0),n=m(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from '#imports'

interface ButtonProps {
  label?: string
  /**
   * The size of the button allows only some values
   * @values sm, md, lg
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * The type of the button allows only some values
   * @values primary, secondary, danger
   */
  variant?: 'primary' | 'secondary' | 'danger'
}

const props = defineProps<ButtonProps>()

const emit = defineEmits(['click'])

const buttonClass = computed(() => [
  'btn',
  \`btn-\${props.variant || 'primary'}\`,
  \`btn-\${props.size || 'md'}\`,
])

const handleClick = () => {
  emit('click')
}
<\/script>

<style>
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
`),b=async()=>{try{await navigator.clipboard.writeText(n.value)}catch(r){console.error("Failed to copy:",r)}};{const r=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),e.remove(),r.disconnect())});r.observe(document.body,{childList:!0,subtree:!0})}return(r,e)=>{const B=A,M=V;return l(),u("div",O,[t("div",null,[e[6]||(e[6]=t("h1",null,"🟢 MyButton4 Component",-1)),o(d).length?(l(),u("div",U,[e[1]||(e[1]=t("h2",null,"🔹 Props",-1)),t("table",null,[e[0]||(e[0]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Values"),t("th",null,"Required"),t("th",null,"Default Value"),t("th",null,"Description")])],-1)),t("tbody",null,[(l(!0),u(C,null,h(o(d),(s,y)=>(l(),u("tr",{key:y},[t("td",null,[t("b",{textContent:a(s.name)},null,8,F)]),t("td",{textContent:a(s.type??"N/A")},null,8,H),t("td",{textContent:a(s.values??"N/A")},null,8,J),t("td",{textContent:a(s.required?"✅ Yes":"❌ No")},null,8,K),t("td",{textContent:a(s.defaultValue??"N/A")},null,8,Q),t("td",{textContent:a(s.description??"N/A")},null,8,Y)]))),128))])])])):_("",!0),o(i).length?(l(),u("div",j,[e[3]||(e[3]=t("h2",null,"🔹 Events",-1)),t("table",null,[e[2]||(e[2]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Description")])],-1)),t("tbody",null,[(l(!0),u(C,null,h(o(i),(s,y)=>(l(),u("tr",{key:y},[t("td",null,[t("b",{textContent:a(s.name)},null,8,G)]),t("td",{textContent:a(s.description??"N/A")},null,8,W)]))),128))])])])):_("",!0),o(p).length?(l(),u("div",X,[e[5]||(e[5]=t("h2",null,"🔹 Slots",-1)),t("table",null,[e[4]||(e[4]=t("thead",null,[t("tr",null,[t("th",null,"Slot"),t("th",null,"Description"),t("th",null,"Bindings")])],-1)),t("tbody",null,[(l(!0),u(C,null,h(o(p),(s,y)=>(l(),u("tr",{key:y},[t("td",null,[t("b",{textContent:a(s.name)},null,8,Z)]),t("td",{textContent:a(s.description??"N/A")},null,8,tt),t("td",{textContent:a(s.bindings??"N/A")},null,8,nt)]))),128))])])])):_("",!0)]),z(R),t("div",null,[o(c)?(l(),w(M,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:q(()=>[o(c)?(l(),w(B,{key:0,code:o(n),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:b},null,8,["code"])):_("",!0)]),_:1})):_("",!0)])])}}},at=N(et,[["__scopeId","data-v-a92345ea"]]);export{at as default};
