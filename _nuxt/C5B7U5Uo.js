import{_ as B,a as N}from"./CtGpM317.js";import{_ as z}from"./DNnw39hr.js";import{M as p}from"./DXMUzbGj.js";import{_ as x,c as a,o,a as t,b as c,d as g,M as _,r as m,K as b,L as d,N as f,J as C,w as D,t as s}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const M={__name:"MyButton.stories",setup(v){const r={label:{fieldType:"text"},variant:{fieldType:"select",options:["primary","secondary","danger"]},size:{fieldType:"select",options:["sm","md","lg"]}};return(h,l)=>{const i=z;return o(),a(_,null,[l[0]||(l[0]=t("p",null,[g(" The "),t("code",null,"MyButton"),g(" component is used to display a button with different styles and sizes. ")],-1)),l[1]||(l[1]=t("h2",null,"🛠 Usage Examples",-1)),c(i,{title:"Simple Button",component:p,props:{label:"Click Me"},"component-props-meta":r}),l[2]||(l[2]=t("h3",null,"🔹 Different Styles",-1)),c(i,{title:"Primary Button Styles",component:p,props:{label:"Primary",variant:"primary"},"component-props-meta":r}),c(i,{title:"Secondary Button Styles",component:p,props:{label:"Secondary",variant:"secondary"},"component-props-meta":r}),c(i,{title:"Danger Button Styles",component:p,props:{label:"Danger",variant:"danger"},"component-props-meta":r}),l[3]||(l[3]=t("h3",null,"🔹 Different Sizes",-1)),c(i,{title:"Small Button Size",component:p,props:{label:"Small",size:"sm"},"component-props-meta":r}),c(i,{title:"Medium Button Size",component:p,props:{label:"Medium",size:"md"},"component-props-meta":r}),c(i,{title:"Large Button Size",component:p,props:{label:"Large",size:"lg"},"component-props-meta":r})],64)}}},A=x(M,[["__scopeId","data-v-93643fe2"]]),P={class:"componentsbook-page"},V={key:0},T={class:"table"},E={class:"table-body"},q={class:"table-cell"},L=["textContent"],$=["textContent"],I=["textContent"],O=["textContent"],R=["textContent"],F=["textContent"],H={key:1},J={class:"table"},K={class:"table-body"},U={class:"table-cell"},Y=["textContent"],j=["textContent"],G={key:2},Q={class:"table"},W={class:"table-body"},X={class:"table-cell"},Z=["textContent"],tt=["textContent"],et=["textContent"],nt={__name:"playground_Components_MyButton",setup(v){const r=m([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"primary | secondary | danger",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),h=m([{name:"click",description:"N/A"}]),l=m([{name:"default",description:"N/A",bindings:""}]),i=m(!0),k=m(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
    <slot />
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
`);{const y=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),e.remove(),y.disconnect())});y.observe(document.body,{childList:!0,subtree:!0})}return(y,e)=>{const S=N,w=B;return o(),a("div",P,[t("div",null,[e[6]||(e[6]=t("h1",null,"🟢 MyButton Component",-1)),d(r).length?(o(),a("div",V,[e[1]||(e[1]=t("h2",null,"🔹 Props",-1)),t("table",T,[e[0]||(e[0]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Type "),t("th",{class:"table-header-cell"}," Values "),t("th",{class:"table-header-cell"}," Required "),t("th",{class:"table-header-cell"}," Default Value "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",E,[(o(!0),a(_,null,f(d(r),(n,u)=>(o(),a("tr",{key:u,class:"table-row"},[t("td",q,[t("b",{textContent:s(n.name)},null,8,L)]),t("td",{class:"table-cell",textContent:s(n.type??"N/A")},null,8,$),t("td",{class:"table-cell",textContent:s(n.values??"N/A")},null,8,I),t("td",{class:"table-cell",textContent:s(n.required?"✅ Yes":"❌ No")},null,8,O),t("td",{class:"table-cell",textContent:s(n.defaultValue??"N/A")},null,8,R),t("td",{class:"table-cell",textContent:s(n.description??"N/A")},null,8,F)]))),128))])])])):b("",!0),d(h).length?(o(),a("div",H,[e[3]||(e[3]=t("h2",null,"🔹 Events",-1)),t("table",J,[e[2]||(e[2]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",K,[(o(!0),a(_,null,f(d(h),(n,u)=>(o(),a("tr",{key:u,class:"table-row"},[t("td",U,[t("b",{textContent:s(n.name)},null,8,Y)]),t("td",{class:"table-cell",textContent:s(n.description??"N/A")},null,8,j)]))),128))])])])):b("",!0),d(l).length?(o(),a("div",G,[e[5]||(e[5]=t("h2",null,"🔹 Slots",-1)),t("table",Q,[e[4]||(e[4]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Slot "),t("th",{class:"table-header-cell"}," Description "),t("th",{class:"table-header-cell"}," Bindings ")])],-1)),t("tbody",W,[(o(!0),a(_,null,f(d(l),(n,u)=>(o(),a("tr",{key:u,class:"table-row"},[t("td",X,[t("b",{textContent:s(n.name)},null,8,Z)]),t("td",{class:"table-cell",textContent:s(n.description??"N/A")},null,8,tt),t("td",{class:"table-cell",textContent:s(n.bindings??"N/A")},null,8,et)]))),128))])])])):b("",!0)]),c(A),t("div",null,[d(i)?(o(),C(w,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:D(()=>[d(i)?(o(),C(S,{key:0,code:d(k),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):b("",!0)]),_:1})):b("",!0)])])}}},it=x(nt,[["__scopeId","data-v-460e6942"]]);export{it as default};
