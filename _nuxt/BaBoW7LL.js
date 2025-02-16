import{u as B,_ as z}from"./DXmpYz1O.js";import{m as V,B as w,c as s,o,t as l,O as A,J as r,_ as h,r as d,a as t,K as D,b as N,d as c,Q as f,R as M,S as k,P as S,M as g,L as C,N as _}from"./BlUxIf_E.js";const T=V({__name:"MyButton4",props:{label:{},size:{},variant:{}},emits:["click"],setup(x,{emit:a}){const u=x,i=a,b=w(()=>["btn",`btn-${u.variant||"primary"}`,`btn-${u.size||"md"}`]),y=()=>{i("click")};return(p,e)=>(o(),s("button",{class:A(r(b)),onClick:y},l(p.label),3))}}),P={class:"controls"},$={__name:"MyButton4.stories",setup(x){const a=d("Click Me"),u=d("md"),i=d("primary"),{renderedComponent:b,generatedCode:y,copyToClipboard:p}=B(T,{label:a,size:u,variant:i});return(e,n)=>{const m=z;return o(),s(g,null,[n[8]||(n[8]=t("p",null,[c(" The "),t("code",null,"MyButton3"),c(" component is used to display a button with different styles and sizes. ")],-1)),n[9]||(n[9]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",P,[t("label",null,[n[3]||(n[3]=c(" Label: ")),f(t("input",{"onUpdate:modelValue":n[0]||(n[0]=v=>a.value=v),type:"text"},null,512),[[M,a.value]])]),t("label",null,[n[5]||(n[5]=c(" Size: ")),f(t("select",{"onUpdate:modelValue":n[1]||(n[1]=v=>u.value=v)},n[4]||(n[4]=[t("option",{value:"sm"},"Small",-1),t("option",{value:"md"},"Medium",-1),t("option",{value:"lg"},"Large",-1)]),512),[[k,u.value]])]),t("label",null,[n[7]||(n[7]=c(" Variant: ")),f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=v=>i.value=v)},n[6]||(n[6]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1),t("option",{value:"danger"},"Danger",-1)]),512),[[k,i.value]])])]),n[10]||(n[10]=t("h2",null,"🔹 Preview",-1)),(o(),D(S(r(b)))),n[11]||(n[11]=t("h2",null,"📋 Generated Code",-1)),N(m,{"generated-code":r(y),"copy-to-clipboard":r(p)},null,8,["generated-code","copy-to-clipboard"])],64)}}},q=h($,[["__scopeId","data-v-e7ca2a95"]]),L={class:"componentsbook-page"},E={key:0},I=["textContent"],O=["textContent"],U=["textContent"],G=["textContent"],R=["textContent"],F=["textContent"],J={key:1},K=["textContent"],Q=["textContent"],Y={key:2},j=["textContent"],H=["textContent"],W=["textContent"],X={key:0,class:"code-spoiler"},Z={class:"code-block"},tt=["textContent"],nt={__name:"playground_Components_MyButton4",setup(x){const a=d([{name:"label",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"size",values:'"sm" | "md" | "lg"',type:"union",defaultValue:"N/A",description:"The size of the button allows only some values",required:!1},{name:"variant",values:'"primary" | "secondary" | "danger"',type:"union",defaultValue:"N/A",description:"The type of the button allows only some values",required:!1}]),u=d([{name:"click",description:"N/A"}]),i=d([]),b=d(!0),y=d(`<template>
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
`);{const p=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Удаляем Nuxt DevTools из DOM"),e.remove(),p.disconnect())});p.observe(document.body,{childList:!0,subtree:!0})}return(p,e)=>(o(),s("div",L,[t("div",null,[e[6]||(e[6]=t("h1",null,"🟢 MyButton4 Component",-1)),r(a).length?(o(),s("div",E,[e[1]||(e[1]=t("h2",null,"🔹 Props",-1)),t("table",null,[e[0]||(e[0]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Values"),t("th",null,"Required"),t("th",null,"Default Value"),t("th",null,"Description")])],-1)),t("tbody",null,[(o(!0),s(g,null,_(r(a),(n,m)=>(o(),s("tr",{key:m},[t("td",null,[t("b",{textContent:l(n.name)},null,8,I)]),t("td",{textContent:l(n.type??"N/A")},null,8,O),t("td",{textContent:l(n.values??"N/A")},null,8,U),t("td",{textContent:l(n.required?"✅ Yes":"❌ No")},null,8,G),t("td",{textContent:l(n.defaultValue??"N/A")},null,8,R),t("td",{textContent:l(n.description??"N/A")},null,8,F)]))),128))])])])):C("",!0),r(u).length?(o(),s("div",J,[e[3]||(e[3]=t("h2",null,"🔹 Events",-1)),t("table",null,[e[2]||(e[2]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Description")])],-1)),t("tbody",null,[(o(!0),s(g,null,_(r(u),(n,m)=>(o(),s("tr",{key:m},[t("td",null,[t("b",{textContent:l(n.name)},null,8,K)]),t("td",{textContent:l(n.description??"N/A")},null,8,Q)]))),128))])])])):C("",!0),r(i).length?(o(),s("div",Y,[e[5]||(e[5]=t("h2",null,"🔹 Slots",-1)),t("table",null,[e[4]||(e[4]=t("thead",null,[t("tr",null,[t("th",null,"Slot"),t("th",null,"Description"),t("th",null,"Bindings")])],-1)),t("tbody",null,[(o(!0),s(g,null,_(r(i),(n,m)=>(o(),s("tr",{key:m},[t("td",null,[t("b",{textContent:l(n.name)},null,8,j)]),t("td",{textContent:l(n.description??"N/A")},null,8,H),t("td",{textContent:l(n.bindings??"N/A")},null,8,W)]))),128))])])])):C("",!0)]),N(q),`${r(b)}`?(o(),s("details",X,[e[9]||(e[9]=t("summary",null,"Source code",-1)),t("pre",Z,[e[7]||(e[7]=c("        ")),t("code",{class:"highlighted-code",textContent:l(r(y))},null,8,tt),e[8]||(e[8]=c(`
      `))])])):C("",!0)]))}},lt=h(nt,[["__scopeId","data-v-25cb49c4"]]);export{lt as default};
