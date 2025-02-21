import{_ as $,a as w}from"./Dw_ba-jO.js";import{_ as B}from"./Be1NRngx.js";import{m as v,_ as g,c as a,o as n,a as e,T as D,d as k,t as s,r as c,M as x,b as N,L as u,R as S,K as C,N as f,J as y,w as T}from"./DVQnm3ND.js";import"./GvVry5ad.js";const P=v({name:"CustomCheckbox",props:{modelValue:Boolean,label:String,disabled:Boolean},emits:["update:modelValue"]}),q={class:"checkbox-container"},E=["checked","disabled"];function I(r,l,p,m,h,d){return n(),a("label",q,[e("input",{type:"checkbox",checked:r.modelValue,disabled:r.disabled,onChange:l[0]||(l[0]=_=>r.$emit("update:modelValue",_.target.checked))},null,40,E),l[1]||(l[1]=e("span",{class:"checkmark"},null,-1)),D(r.$slots,"default",{},()=>[k(s(r.label),1)],!0)])}const L=g(P,[["render",I],["__scopeId","data-v-f1ebfebc"]]),M=v({__name:"CustomCheckbox.stories",setup(r){const l=c(!1),p=c("Accept Terms"),m=()=>{console.log("Checkbox toggled:",l.value)};return(h,d)=>{const _=B;return n(),a(x,null,[d[1]||(d[1]=e("p",null,[k(" The "),e("code",null,"CustomCheckbox"),k(" is a simple checkbox input. ")],-1)),N(_,{modelValue:u(l),"onUpdate:modelValue":[d[0]||(d[0]=i=>S(l)?l.value=i:null),m],component:L,props:{label:u(p)},emits:["update:modelValue"]},null,8,["modelValue","props"])],64)}}}),R={class:"componentsbook-page"},z={key:0},F=["textContent"],H=["textContent"],O=["textContent"],J=["textContent"],K=["textContent"],U=["textContent"],Y={key:1},j=["textContent"],G=["textContent"],Q={key:2},W=["textContent"],X=["textContent"],Z=["textContent"],ee={__name:"playground_Components_lib_CustomCheckbox",setup(r){const l=c([{name:"modelValue",values:"N/A",type:"boolean",defaultValue:"N/A",description:"N/A",required:!1},{name:"label",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"N/A",description:"N/A",required:!1}]),p=c([{name:"update:modelValue",description:"N/A"}]),m=c([{name:"default",description:"N/A",bindings:""}]),h=c(!0),d=c(`<template>
  <label class="checkbox-container">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span class="checkmark" />
    <slot>{{ label }}</slot>
  </label>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomCheckbox',
  props: {
    modelValue: Boolean,
    label: String,
    disabled: Boolean,
  },
  emits: ['update:modelValue'],
})
<\/script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
input {
  cursor: pointer;
}
</style>
`),_=async()=>{try{await navigator.clipboard.writeText(d.value)}catch(i){console.error("Failed to copy:",i)}};{const i=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),t.remove(),i.disconnect())});i.observe(document.body,{childList:!0,subtree:!0})}return(i,t)=>{const V=w,A=$;return n(),a("div",R,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 CustomCheckbox Component",-1)),u(l).length?(n(),a("div",z,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",null,[t[0]||(t[0]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Values"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1)),e("tbody",null,[(n(!0),a(x,null,f(u(l),(o,b)=>(n(),a("tr",{key:b},[e("td",null,[e("b",{textContent:s(o.name)},null,8,F)]),e("td",{textContent:s(o.type??"N/A")},null,8,H),e("td",{textContent:s(o.values??"N/A")},null,8,O),e("td",{textContent:s(o.required?"✅ Yes":"❌ No")},null,8,J),e("td",{textContent:s(o.defaultValue??"N/A")},null,8,K),e("td",{textContent:s(o.description??"N/A")},null,8,U)]))),128))])])])):C("",!0),u(p).length?(n(),a("div",Y,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",null,[t[2]||(t[2]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Description")])],-1)),e("tbody",null,[(n(!0),a(x,null,f(u(p),(o,b)=>(n(),a("tr",{key:b},[e("td",null,[e("b",{textContent:s(o.name)},null,8,j)]),e("td",{textContent:s(o.description??"N/A")},null,8,G)]))),128))])])])):C("",!0),u(m).length?(n(),a("div",Q,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",null,[t[4]||(t[4]=e("thead",null,[e("tr",null,[e("th",null,"Slot"),e("th",null,"Description"),e("th",null,"Bindings")])],-1)),e("tbody",null,[(n(!0),a(x,null,f(u(m),(o,b)=>(n(),a("tr",{key:b},[e("td",null,[e("b",{textContent:s(o.name)},null,8,W)]),e("td",{textContent:s(o.description??"N/A")},null,8,X),e("td",{textContent:s(o.bindings??"N/A")},null,8,Z)]))),128))])])])):C("",!0)]),N(M),e("div",null,[u(h)?(n(),y(A,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:T(()=>[u(h)?(n(),y(V,{key:0,code:u(d),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:_},null,8,["code"])):C("",!0)]),_:1})):C("",!0)])])}}},se=g(ee,[["__scopeId","data-v-6e3f8fe3"]]);export{se as default};
