import{_ as M,a as V}from"./CtGpM317.js";import{_ as A}from"./DNnw39hr.js";import{m as T,B as D,c as r,o,O as P,L as l,t as a,_ as N,r as u,a as t,b as z,d as _,P as C,Q as S,R as x,S as k,M as v,K as y,N as g,J as w,w as $}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const q=T({__name:"MyButton4",props:{label:{},size:{},variant:{}},emits:["click"],setup(f,{emit:d}){const i=f,c=d,m=D(()=>["btn",`btn-${i.variant||"primary"}`,`btn-${i.size||"md"}`]),h=()=>{c("click")};return(e,n)=>(o(),r("button",{class:P(l(m)),onClick:h},a(e.label),3))}}),E={class:"controls"},L={__name:"MyButton4.stories",setup(f){const d=u("Click Me"),i=u("md"),c=u("primary"),m={label:{fieldType:"text"},size:{fieldType:"select",options:["sm","md","lg"]},variant:{fieldType:"select",options:["primary","secondary","danger"]}};return(h,e)=>{const n=A;return o(),r(v,null,[e[8]||(e[8]=t("p",null,[_(" The "),t("code",null,"MyButton"),_(" component is used to display a button with different styles and sizes. ")],-1)),e[9]||(e[9]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",E,[t("label",null,[e[3]||(e[3]=_(" Label: ")),C(t("input",{"onUpdate:modelValue":e[0]||(e[0]=p=>x(d)?d.value=p:null),type:"text"},null,512),[[S,l(d)]])]),t("label",null,[e[5]||(e[5]=_(" Size: ")),C(t("select",{"onUpdate:modelValue":e[1]||(e[1]=p=>x(i)?i.value=p:null)},e[4]||(e[4]=[t("option",{value:"sm"},"Small",-1),t("option",{value:"md"},"Medium",-1),t("option",{value:"lg"},"Large",-1)]),512),[[k,l(i)]])]),t("label",null,[e[7]||(e[7]=_(" Variant: ")),C(t("select",{"onUpdate:modelValue":e[2]||(e[2]=p=>x(c)?c.value=p:null)},e[6]||(e[6]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1),t("option",{value:"danger"},"Danger",-1)]),512),[[k,l(c)]])])]),z(n,{name:"MyButton",component:q,props:{label:l(d),size:l(i),variant:l(c)},"component-props-meta":m},null,8,["props"])],64)}}},I=N(L,[["__scopeId","data-v-754418f5"]]),R={class:"componentsbook-page"},O={key:0},U={class:"table"},F={class:"table-body"},H={class:"table-cell"},J=["textContent"],K=["textContent"],Q=["textContent"],Y=["textContent"],j=["textContent"],G=["textContent"],W={key:1},X={class:"table"},Z={class:"table-body"},tt={class:"table-cell"},et=["textContent"],nt=["textContent"],lt={key:2},ot={class:"table"},st={class:"table-body"},at={class:"table-cell"},rt=["textContent"],it=["textContent"],dt=["textContent"],ct={__name:"playground_Components_MyButton4",setup(f){const d=u([{name:"label",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"size",values:'"sm" | "md" | "lg"',type:"union",defaultValue:"N/A",description:"The size of the button allows only some values",required:!1},{name:"variant",values:'"primary" | "secondary" | "danger"',type:"union",defaultValue:"N/A",description:"The type of the button allows only some values",required:!1}]),i=u([{name:"click",description:"N/A"}]),c=u([]),m=u(!0),h=u(`<template>
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
`);{const e=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),e.disconnect())});e.observe(document.body,{childList:!0,subtree:!0})}return(e,n)=>{const p=V,B=M;return o(),r("div",R,[t("div",null,[n[6]||(n[6]=t("h1",null,"🟢 MyButton4 Component",-1)),l(d).length?(o(),r("div",O,[n[1]||(n[1]=t("h2",null,"🔹 Props",-1)),t("table",U,[n[0]||(n[0]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Type "),t("th",{class:"table-header-cell"}," Values "),t("th",{class:"table-header-cell"}," Required "),t("th",{class:"table-header-cell"}," Default Value "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",F,[(o(!0),r(v,null,g(l(d),(s,b)=>(o(),r("tr",{key:b,class:"table-row"},[t("td",H,[t("b",{textContent:a(s.name)},null,8,J)]),t("td",{class:"table-cell",textContent:a(s.type??"N/A")},null,8,K),t("td",{class:"table-cell",textContent:a(s.values??"N/A")},null,8,Q),t("td",{class:"table-cell",textContent:a(s.required?"✅ Yes":"❌ No")},null,8,Y),t("td",{class:"table-cell",textContent:a(s.defaultValue??"N/A")},null,8,j),t("td",{class:"table-cell",textContent:a(s.description??"N/A")},null,8,G)]))),128))])])])):y("",!0),l(i).length?(o(),r("div",W,[n[3]||(n[3]=t("h2",null,"🔹 Events",-1)),t("table",X,[n[2]||(n[2]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",Z,[(o(!0),r(v,null,g(l(i),(s,b)=>(o(),r("tr",{key:b,class:"table-row"},[t("td",tt,[t("b",{textContent:a(s.name)},null,8,et)]),t("td",{class:"table-cell",textContent:a(s.description??"N/A")},null,8,nt)]))),128))])])])):y("",!0),l(c).length?(o(),r("div",lt,[n[5]||(n[5]=t("h2",null,"🔹 Slots",-1)),t("table",ot,[n[4]||(n[4]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Slot "),t("th",{class:"table-header-cell"}," Description "),t("th",{class:"table-header-cell"}," Bindings ")])],-1)),t("tbody",st,[(o(!0),r(v,null,g(l(c),(s,b)=>(o(),r("tr",{key:b,class:"table-row"},[t("td",at,[t("b",{textContent:a(s.name)},null,8,rt)]),t("td",{class:"table-cell",textContent:a(s.description??"N/A")},null,8,it),t("td",{class:"table-cell",textContent:a(s.bindings??"N/A")},null,8,dt)]))),128))])])])):y("",!0)]),z(I),t("div",null,[l(m)?(o(),w(B,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:$(()=>[l(m)?(o(),w(p,{key:0,code:l(h),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):y("",!0)]),_:1})):y("",!0)])])}}},_t=N(ct,[["__scopeId","data-v-587825d5"]]);export{_t as default};
