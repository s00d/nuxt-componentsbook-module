import{_ as T,a as A}from"./Dw_ba-jO.js";import{_ as k}from"./Be1NRngx.js";import{C as w}from"./G2XZHFO5.js";import{m as D,r as i,c as s,o,M as x,a as t,b,d as y,L as u,R as S,_ as B,K as c,N as v,J as f,w as P,t as l}from"./DVQnm3ND.js";import"./GvVry5ad.js";const E=D({__name:"CustomTextarea.stories",setup(g){const r=i(""),m=i("Type here..."),_=()=>{console.log("Text entered:",r.value)};return(C,a)=>{const h=k;return o(),s(x,null,[a[1]||(a[1]=t("p",null,[y(" The "),t("code",null,"CustomTextarea"),y(" component provides a multi-line text input. ")],-1)),b(h,{modelValue:u(r),"onUpdate:modelValue":[a[0]||(a[0]=d=>S(r)?r.value=d:null),_],component:w,props:{placeholder:u(m)},emits:["update:modelValue"]},null,8,["modelValue","props"])],64)}}}),q={class:"componentsbook-page"},L={key:0},M=["textContent"],R=["textContent"],$=["textContent"],I=["textContent"],z=["textContent"],F=["textContent"],H={key:1},O=["textContent"],J=["textContent"],K={key:2},U=["textContent"],Y=["textContent"],j=["textContent"],G={__name:"playground_Components_lib_CustomTextarea",setup(g){const r=i([{name:"modelValue",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"placeholder",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1}]),m=i([{name:"update:modelValue",description:"N/A"}]),_=i([]),C=i(!0),a=i(`<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomTextarea',
  props: {
    modelValue: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
})
<\/script>

<style scoped>
textarea {
  width: 97%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
`),h=async()=>{try{await navigator.clipboard.writeText(a.value)}catch(d){console.error("Failed to copy:",d)}};{const d=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),e.remove(),d.disconnect())});d.observe(document.body,{childList:!0,subtree:!0})}return(d,e)=>{const N=A,V=T;return o(),s("div",q,[t("div",null,[e[6]||(e[6]=t("h1",null,"🟢 CustomTextarea Component",-1)),u(r).length?(o(),s("div",L,[e[1]||(e[1]=t("h2",null,"🔹 Props",-1)),t("table",null,[e[0]||(e[0]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Values"),t("th",null,"Required"),t("th",null,"Default Value"),t("th",null,"Description")])],-1)),t("tbody",null,[(o(!0),s(x,null,v(u(r),(n,p)=>(o(),s("tr",{key:p},[t("td",null,[t("b",{textContent:l(n.name)},null,8,M)]),t("td",{textContent:l(n.type??"N/A")},null,8,R),t("td",{textContent:l(n.values??"N/A")},null,8,$),t("td",{textContent:l(n.required?"✅ Yes":"❌ No")},null,8,I),t("td",{textContent:l(n.defaultValue??"N/A")},null,8,z),t("td",{textContent:l(n.description??"N/A")},null,8,F)]))),128))])])])):c("",!0),u(m).length?(o(),s("div",H,[e[3]||(e[3]=t("h2",null,"🔹 Events",-1)),t("table",null,[e[2]||(e[2]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Description")])],-1)),t("tbody",null,[(o(!0),s(x,null,v(u(m),(n,p)=>(o(),s("tr",{key:p},[t("td",null,[t("b",{textContent:l(n.name)},null,8,O)]),t("td",{textContent:l(n.description??"N/A")},null,8,J)]))),128))])])])):c("",!0),u(_).length?(o(),s("div",K,[e[5]||(e[5]=t("h2",null,"🔹 Slots",-1)),t("table",null,[e[4]||(e[4]=t("thead",null,[t("tr",null,[t("th",null,"Slot"),t("th",null,"Description"),t("th",null,"Bindings")])],-1)),t("tbody",null,[(o(!0),s(x,null,v(u(_),(n,p)=>(o(),s("tr",{key:p},[t("td",null,[t("b",{textContent:l(n.name)},null,8,U)]),t("td",{textContent:l(n.description??"N/A")},null,8,Y),t("td",{textContent:l(n.bindings??"N/A")},null,8,j)]))),128))])])])):c("",!0)]),b(E),t("div",null,[u(C)?(o(),f(V,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:P(()=>[u(C)?(o(),f(N,{key:0,code:u(a),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:h},null,8,["code"])):c("",!0)]),_:1})):c("",!0)])])}}},et=B(G,[["__scopeId","data-v-c8a8ac15"]]);export{et as default};
