import{_ as V,a as w}from"./CtGpM317.js";import{_ as T}from"./DNnw39hr.js";import{C as A}from"./CnxRk_NZ.js";import{m as k,r,c as s,o as n,M as h,a as e,b as f,d as C,L as a,R as D,_ as S,K as p,N as x,J as v,w as B,t as o}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const P=k({__name:"CustomTextarea.stories",setup(y){const d=r(""),_=r("Type here..."),m=()=>{console.log("Text entered:",d.value)};return(b,c)=>{const u=T;return n(),s(h,null,[c[1]||(c[1]=e("p",null,[C(" The "),e("code",null,"CustomTextarea"),C(" component provides a multi-line text input. ")],-1)),f(u,{modelValue:a(d),"onUpdate:modelValue":[c[0]||(c[0]=t=>D(d)?d.value=t:null),m],component:A,props:{placeholder:a(_)},emits:["update:modelValue"],name:"lib-custom-textarea"},null,8,["modelValue","props"])],64)}}}),E={class:"componentsbook-page"},q={key:0},L={class:"table"},M={class:"table-body"},R={class:"table-cell"},$=["textContent"],I=["textContent"],z=["textContent"],H=["textContent"],O=["textContent"],F=["textContent"],J={key:1},K={class:"table"},U={class:"table-body"},Y={class:"table-cell"},j=["textContent"],G=["textContent"],Q={key:2},W={class:"table"},X={class:"table-body"},Z={class:"table-cell"},ee=["textContent"],te=["textContent"],le=["textContent"],ne={__name:"playground_Components_lib_CustomTextarea",setup(y){const d=r([{name:"modelValue",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"placeholder",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1}]),_=r([{name:"update:modelValue",description:"N/A"}]),m=r([]),b=r(!0),c=r(`<template>
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
`);{const u=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),t.remove(),u.disconnect())});u.observe(document.body,{childList:!0,subtree:!0})}return(u,t)=>{const g=w,N=V;return n(),s("div",E,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 CustomTextarea Component",-1)),a(d).length?(n(),s("div",q,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",L,[t[0]||(t[0]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Type "),e("th",{class:"table-header-cell"}," Values "),e("th",{class:"table-header-cell"}," Required "),e("th",{class:"table-header-cell"}," Default Value "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",M,[(n(!0),s(h,null,x(a(d),(l,i)=>(n(),s("tr",{key:i,class:"table-row"},[e("td",R,[e("b",{textContent:o(l.name)},null,8,$)]),e("td",{class:"table-cell",textContent:o(l.type??"N/A")},null,8,I),e("td",{class:"table-cell",textContent:o(l.values??"N/A")},null,8,z),e("td",{class:"table-cell",textContent:o(l.required?"✅ Yes":"❌ No")},null,8,H),e("td",{class:"table-cell",textContent:o(l.defaultValue??"N/A")},null,8,O),e("td",{class:"table-cell",textContent:o(l.description??"N/A")},null,8,F)]))),128))])])])):p("",!0),a(_).length?(n(),s("div",J,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",K,[t[2]||(t[2]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",U,[(n(!0),s(h,null,x(a(_),(l,i)=>(n(),s("tr",{key:i,class:"table-row"},[e("td",Y,[e("b",{textContent:o(l.name)},null,8,j)]),e("td",{class:"table-cell",textContent:o(l.description??"N/A")},null,8,G)]))),128))])])])):p("",!0),a(m).length?(n(),s("div",Q,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",W,[t[4]||(t[4]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Slot "),e("th",{class:"table-header-cell"}," Description "),e("th",{class:"table-header-cell"}," Bindings ")])],-1)),e("tbody",X,[(n(!0),s(h,null,x(a(m),(l,i)=>(n(),s("tr",{key:i,class:"table-row"},[e("td",Z,[e("b",{textContent:o(l.name)},null,8,ee)]),e("td",{class:"table-cell",textContent:o(l.description??"N/A")},null,8,te),e("td",{class:"table-cell",textContent:o(l.bindings??"N/A")},null,8,le)]))),128))])])])):p("",!0)]),f(P),e("div",null,[a(b)?(n(),v(N,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:B(()=>[a(b)?(n(),v(g,{key:0,code:a(c),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):p("",!0)]),_:1})):p("",!0)])])}}},ce=S(ne,[["__scopeId","data-v-02145318"]]);export{ce as default};
