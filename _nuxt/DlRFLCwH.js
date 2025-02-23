import{_ as S,a as w}from"./CtGpM317.js";import{_ as k}from"./DNnw39hr.js";import{m as x,_ as g,c as n,o as l,M as h,N as C,t as s,r as i,a as e,b as V,d as y,L as d,R as $,K as b,J as f,w as D}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const P=x({name:"CustomSelect",props:{modelValue:{type:String,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"]}),T=["value","disabled"],q=["value"];function B(c,r,p,m,v,u){return l(),n("select",{value:c.modelValue,disabled:c.disabled,onChange:r[0]||(r[0]=a=>c.$emit("update:modelValue",a.target.value))},[(l(!0),n(h,null,C(c.options,a=>(l(),n("option",{key:a.value,value:a.value},s(a.label),9,q))),128))],40,T)}const O=g(P,[["render",B]]),E=x({__name:"CustomSelect.stories",setup(c){const r=i("option1"),p=i([{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]),m=()=>{console.log("Selected:",r.value)};return(v,u)=>{const a=k;return l(),n(h,null,[u[1]||(u[1]=e("p",null,[y(" The "),e("code",null,"CustomSelect"),y(" component provides a dropdown selection. ")],-1)),V(a,{modelValue:d(r),"onUpdate:modelValue":[u[0]||(u[0]=t=>$(r)?r.value=t:null),m],component:O,props:{options:d(p)},emits:["update:modelValue"],name:"lib-custom-select"},null,8,["modelValue","props"])],64)}}}),L={class:"componentsbook-page"},M={key:0},R={class:"table"},z={class:"table-body"},H={class:"table-cell"},I=["textContent"],F=["textContent"],J=["textContent"],K=["textContent"],U=["textContent"],Y=["textContent"],j={key:1},G={class:"table"},Q={class:"table-body"},W={class:"table-cell"},X=["textContent"],Z=["textContent"],ee={key:2},te={class:"table"},le={class:"table-body"},ne={class:"table-cell"},oe=["textContent"],se=["textContent"],ae=["textContent"],de={__name:"playground_Components_lib_CustomSelect",setup(c){const r=i([{name:"modelValue",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!0},{name:"options",values:"N/A",type:"Option[]",defaultValue:"N/A",description:"N/A",required:!0},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1}]),p=i([{name:"update:modelValue",description:"N/A"}]),m=i([]),v=i(!0),u=i(`<template>
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
`);{const a=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),t.remove(),a.disconnect())});a.observe(document.body,{childList:!0,subtree:!0})}return(a,t)=>{const N=w,A=S;return l(),n("div",L,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 CustomSelect Component",-1)),d(r).length?(l(),n("div",M,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",R,[t[0]||(t[0]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Type "),e("th",{class:"table-header-cell"}," Values "),e("th",{class:"table-header-cell"}," Required "),e("th",{class:"table-header-cell"}," Default Value "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",z,[(l(!0),n(h,null,C(d(r),(o,_)=>(l(),n("tr",{key:_,class:"table-row"},[e("td",H,[e("b",{textContent:s(o.name)},null,8,I)]),e("td",{class:"table-cell",textContent:s(o.type??"N/A")},null,8,F),e("td",{class:"table-cell",textContent:s(o.values??"N/A")},null,8,J),e("td",{class:"table-cell",textContent:s(o.required?"✅ Yes":"❌ No")},null,8,K),e("td",{class:"table-cell",textContent:s(o.defaultValue??"N/A")},null,8,U),e("td",{class:"table-cell",textContent:s(o.description??"N/A")},null,8,Y)]))),128))])])])):b("",!0),d(p).length?(l(),n("div",j,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",G,[t[2]||(t[2]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",Q,[(l(!0),n(h,null,C(d(p),(o,_)=>(l(),n("tr",{key:_,class:"table-row"},[e("td",W,[e("b",{textContent:s(o.name)},null,8,X)]),e("td",{class:"table-cell",textContent:s(o.description??"N/A")},null,8,Z)]))),128))])])])):b("",!0),d(m).length?(l(),n("div",ee,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",te,[t[4]||(t[4]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Slot "),e("th",{class:"table-header-cell"}," Description "),e("th",{class:"table-header-cell"}," Bindings ")])],-1)),e("tbody",le,[(l(!0),n(h,null,C(d(m),(o,_)=>(l(),n("tr",{key:_,class:"table-row"},[e("td",ne,[e("b",{textContent:s(o.name)},null,8,oe)]),e("td",{class:"table-cell",textContent:s(o.description??"N/A")},null,8,se),e("td",{class:"table-cell",textContent:s(o.bindings??"N/A")},null,8,ae)]))),128))])])])):b("",!0)]),V(E),e("div",null,[d(v)?(l(),f(A,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:D(()=>[d(v)?(l(),f(N,{key:0,code:d(u),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):b("",!0)]),_:1})):b("",!0)])])}}},pe=g(de,[["__scopeId","data-v-a10d8804"]]);export{pe as default};
