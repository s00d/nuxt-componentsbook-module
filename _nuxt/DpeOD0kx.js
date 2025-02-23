import{_ as A,a as w}from"./CtGpM317.js";import{_ as $}from"./DNnw39hr.js";import{m as y,_ as g,c as a,o as l,a as e,T as B,d as k,t as s,r as u,M as C,b as v,L as d,R as D,K as h,N as x,J as f,w as S}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const T=y({name:"CustomCheckbox",props:{modelValue:Boolean,label:String,disabled:Boolean},emits:["update:modelValue"]}),P={class:"checkbox-container"},q=["checked","disabled"];function E(c,o,b,p,_,r){return l(),a("label",P,[e("input",{type:"checkbox",checked:c.modelValue,disabled:c.disabled,onChange:o[0]||(o[0]=i=>c.$emit("update:modelValue",i.target.checked))},null,40,q),o[1]||(o[1]=e("span",{class:"checkmark"},null,-1)),B(c.$slots,"default",{},()=>[k(s(c.label),1)],!0)])}const I=g(T,[["render",E],["__scopeId","data-v-f1ebfebc"]]),L=y({__name:"CustomCheckbox.stories",setup(c){const o=u(!1),b=u("Accept Terms"),p=()=>{console.log("Checkbox toggled:",o.value)};return(_,r)=>{const i=$;return l(),a(C,null,[r[1]||(r[1]=e("p",null,[k(" The "),e("code",null,"CustomCheckbox"),k(" is a simple checkbox input. ")],-1)),v(i,{modelValue:d(o),"onUpdate:modelValue":[r[0]||(r[0]=t=>D(o)?o.value=t:null),p],component:I,props:{label:d(b)},emits:["update:modelValue"],name:"lib-custom-checkbox"},null,8,["modelValue","props"])],64)}}}),M={class:"componentsbook-page"},R={key:0},z={class:"table"},H={class:"table-body"},O={class:"table-cell"},F=["textContent"],J=["textContent"],K=["textContent"],U=["textContent"],Y=["textContent"],j=["textContent"],G={key:1},Q={class:"table"},W={class:"table-body"},X={class:"table-cell"},Z=["textContent"],ee=["textContent"],te={key:2},le={class:"table"},ne={class:"table-body"},oe={class:"table-cell"},se=["textContent"],ae=["textContent"],de=["textContent"],ce={__name:"playground_Components_lib_CustomCheckbox",setup(c){const o=u([{name:"modelValue",values:"N/A",type:"boolean",defaultValue:"N/A",description:"N/A",required:!1},{name:"label",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"N/A",description:"N/A",required:!1}]),b=u([{name:"update:modelValue",description:"N/A"}]),p=u([{name:"default",description:"N/A",bindings:""}]),_=u(!0),r=u(`<template>
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
`);{const i=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),t.remove(),i.disconnect())});i.observe(document.body,{childList:!0,subtree:!0})}return(i,t)=>{const N=w,V=A;return l(),a("div",M,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 CustomCheckbox Component",-1)),d(o).length?(l(),a("div",R,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",z,[t[0]||(t[0]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Type "),e("th",{class:"table-header-cell"}," Values "),e("th",{class:"table-header-cell"}," Required "),e("th",{class:"table-header-cell"}," Default Value "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",H,[(l(!0),a(C,null,x(d(o),(n,m)=>(l(),a("tr",{key:m,class:"table-row"},[e("td",O,[e("b",{textContent:s(n.name)},null,8,F)]),e("td",{class:"table-cell",textContent:s(n.type??"N/A")},null,8,J),e("td",{class:"table-cell",textContent:s(n.values??"N/A")},null,8,K),e("td",{class:"table-cell",textContent:s(n.required?"✅ Yes":"❌ No")},null,8,U),e("td",{class:"table-cell",textContent:s(n.defaultValue??"N/A")},null,8,Y),e("td",{class:"table-cell",textContent:s(n.description??"N/A")},null,8,j)]))),128))])])])):h("",!0),d(b).length?(l(),a("div",G,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",Q,[t[2]||(t[2]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",W,[(l(!0),a(C,null,x(d(b),(n,m)=>(l(),a("tr",{key:m,class:"table-row"},[e("td",X,[e("b",{textContent:s(n.name)},null,8,Z)]),e("td",{class:"table-cell",textContent:s(n.description??"N/A")},null,8,ee)]))),128))])])])):h("",!0),d(p).length?(l(),a("div",te,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",le,[t[4]||(t[4]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Slot "),e("th",{class:"table-header-cell"}," Description "),e("th",{class:"table-header-cell"}," Bindings ")])],-1)),e("tbody",ne,[(l(!0),a(C,null,x(d(p),(n,m)=>(l(),a("tr",{key:m,class:"table-row"},[e("td",oe,[e("b",{textContent:s(n.name)},null,8,se)]),e("td",{class:"table-cell",textContent:s(n.description??"N/A")},null,8,ae),e("td",{class:"table-cell",textContent:s(n.bindings??"N/A")},null,8,de)]))),128))])])])):h("",!0)]),v(L),e("div",null,[d(_)?(l(),f(V,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:S(()=>[d(_)?(l(),f(N,{key:0,code:d(r),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):h("",!0)]),_:1})):h("",!0)])])}}},pe=g(ce,[["__scopeId","data-v-b89d5c57"]]);export{pe as default};
