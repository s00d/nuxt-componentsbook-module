import{_ as k,a as w}from"./Dw_ba-jO.js";import{_ as $}from"./Be1NRngx.js";import{m as g,_ as V,c as o,o as n,M as y,N as f,t as s,r as p,a as e,b as N,d as h,L as u,R as T,K as v,J as x,w as D}from"./DVQnm3ND.js";import"./GvVry5ad.js";const P=g({name:"CustomSelect",props:{modelValue:{type:String,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"]}),q=["value","disabled"],B=["value"];function O(m,a,c,_,b,d){return n(),o("select",{value:m.modelValue,disabled:m.disabled,onChange:a[0]||(a[0]=r=>m.$emit("update:modelValue",r.target.value))},[(n(!0),o(y,null,f(m.options,r=>(n(),o("option",{key:r.value,value:r.value},s(r.label),9,B))),128))],40,q)}const E=V(P,[["render",O]]),L=g({__name:"CustomSelect.stories",setup(m){const a=p("option1"),c=p([{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]),_=()=>{console.log("Selected:",a.value)};return(b,d)=>{const r=$;return n(),o(y,null,[d[1]||(d[1]=e("p",null,[h(" The "),e("code",null,"CustomSelect"),h(" component provides a dropdown selection. ")],-1)),N(r,{modelValue:u(a),"onUpdate:modelValue":[d[0]||(d[0]=i=>T(a)?a.value=i:null),_],component:E,props:{options:u(c)},emits:["update:modelValue"]},null,8,["modelValue","props"])],64)}}}),M={class:"componentsbook-page"},R={key:0},z=["textContent"],F=["textContent"],H=["textContent"],I=["textContent"],J=["textContent"],K=["textContent"],U={key:1},Y=["textContent"],j=["textContent"],G={key:2},Q=["textContent"],W=["textContent"],X=["textContent"],Z={__name:"playground_Components_lib_CustomSelect",setup(m){const a=p([{name:"modelValue",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!0},{name:"options",values:"N/A",type:"Option[]",defaultValue:"N/A",description:"N/A",required:!0},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1}]),c=p([{name:"update:modelValue",description:"N/A"}]),_=p([]),b=p(!0),d=p(`<template>
  <select
    :value="modelValue"
    :disabled="disabled"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import type { PropType } from 'vue'

// Определение интерфейса для вариантов выбора
interface Option {
  value: string
  label: string
}

export default defineComponent({
  name: 'CustomSelect',
  props: {
    modelValue: {
      type: String as PropType<string>,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue'],
})
<\/script>
`),r=async()=>{try{await navigator.clipboard.writeText(d.value)}catch(i){console.error("Failed to copy:",i)}};{const i=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),t.remove(),i.disconnect())});i.observe(document.body,{childList:!0,subtree:!0})}return(i,t)=>{const A=w,S=k;return n(),o("div",M,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 CustomSelect Component",-1)),u(a).length?(n(),o("div",R,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",null,[t[0]||(t[0]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Values"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1)),e("tbody",null,[(n(!0),o(y,null,f(u(a),(l,C)=>(n(),o("tr",{key:C},[e("td",null,[e("b",{textContent:s(l.name)},null,8,z)]),e("td",{textContent:s(l.type??"N/A")},null,8,F),e("td",{textContent:s(l.values??"N/A")},null,8,H),e("td",{textContent:s(l.required?"✅ Yes":"❌ No")},null,8,I),e("td",{textContent:s(l.defaultValue??"N/A")},null,8,J),e("td",{textContent:s(l.description??"N/A")},null,8,K)]))),128))])])])):v("",!0),u(c).length?(n(),o("div",U,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",null,[t[2]||(t[2]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Description")])],-1)),e("tbody",null,[(n(!0),o(y,null,f(u(c),(l,C)=>(n(),o("tr",{key:C},[e("td",null,[e("b",{textContent:s(l.name)},null,8,Y)]),e("td",{textContent:s(l.description??"N/A")},null,8,j)]))),128))])])])):v("",!0),u(_).length?(n(),o("div",G,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",null,[t[4]||(t[4]=e("thead",null,[e("tr",null,[e("th",null,"Slot"),e("th",null,"Description"),e("th",null,"Bindings")])],-1)),e("tbody",null,[(n(!0),o(y,null,f(u(_),(l,C)=>(n(),o("tr",{key:C},[e("td",null,[e("b",{textContent:s(l.name)},null,8,Q)]),e("td",{textContent:s(l.description??"N/A")},null,8,W),e("td",{textContent:s(l.bindings??"N/A")},null,8,X)]))),128))])])])):v("",!0)]),N(L),e("div",null,[u(b)?(n(),x(S,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:D(()=>[u(b)?(n(),x(A,{key:0,code:u(d),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:r},null,8,["code"])):v("",!0)]),_:1})):v("",!0)])])}}},le=V(Z,[["__scopeId","data-v-bb2e80da"]]);export{le as default};
