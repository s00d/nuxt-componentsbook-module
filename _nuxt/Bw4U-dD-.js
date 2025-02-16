import{u as m,_ as O}from"./DXmpYz1O.js";import{B as F,c as r,o,t as d,O as G,_ as B,a as e,K as b,b as i,d as T,P as C,J as n,M as N,r as h,L as k,N as S}from"./BlUxIf_E.js";const y={__name:"MyButton",props:{label:{type:String,default:"Click me"},size:{type:String,default:"md",validator:a=>["sm","md","lg"].includes(a)},variant:{type:String,default:"primary",validator:a=>["primary","secondary","danger"].includes(a)}},emits:["click"],setup(a,{emit:g}){const u=a,_=g,f=()=>{_("click")},x=F(()=>["btn",`btn-${u.variant}`,`btn-${u.size}`]);return(v,t)=>(o(),r("button",{class:G(x.value),onClick:f},d(a.label),3))}},J={class:"button-group"},K={class:"button-group"},R={__name:"MyButton.stories",setup(a){const{renderedComponent:g,generatedCode:u,copyToClipboard:_}=m(y,{label:"Click Me"}),{renderedComponent:f,generatedCode:x,copyToClipboard:v}=m(y,{label:"Primary",variant:"primary"}),{renderedComponent:t,generatedCode:l,copyToClipboard:p}=m(y,{label:"Secondary",variant:"secondary"}),{renderedComponent:z,generatedCode:D,copyToClipboard:A}=m(y,{label:"Danger",variant:"danger"}),{renderedComponent:M,generatedCode:V,copyToClipboard:$}=m(y,{label:"Small",size:"sm"}),{renderedComponent:w,generatedCode:P,copyToClipboard:q}=m(y,{label:"Medium",size:"md"}),{renderedComponent:E,generatedCode:L,copyToClipboard:I}=m(y,{label:"Large",size:"lg"});return(ce,s)=>{const c=O;return o(),r(N,null,[s[0]||(s[0]=e("p",null,[T(" The "),e("code",null,"MyButton"),T(" component is used to display a button with different styles and sizes. ")],-1)),s[1]||(s[1]=e("h2",null,"🛠 Usage Examples",-1)),s[2]||(s[2]=e("h3",null,"🟢 Simple Button",-1)),(o(),b(C(n(g)))),i(c,{"generated-code":n(u),"copy-to-clipboard":n(_)},null,8,["generated-code","copy-to-clipboard"]),s[3]||(s[3]=e("h3",null,"🔹 Different Styles",-1)),e("div",J,[e("div",null,[(o(),b(C(n(f)))),i(c,{"generated-code":n(x),"copy-to-clipboard":n(v)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(C(n(t)))),i(c,{"generated-code":n(l),"copy-to-clipboard":n(p)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(C(n(z)))),i(c,{"generated-code":n(D),"copy-to-clipboard":n(A)},null,8,["generated-code","copy-to-clipboard"])])]),s[4]||(s[4]=e("h3",null,"🔹 Different Sizes",-1)),e("div",K,[e("div",null,[(o(),b(C(n(M)))),i(c,{"generated-code":n(V),"copy-to-clipboard":n($)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(C(n(w)))),i(c,{"generated-code":n(P),"copy-to-clipboard":n(q)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(C(n(E)))),i(c,{"generated-code":n(L),"copy-to-clipboard":n(I)},null,8,["generated-code","copy-to-clipboard"])])])],64)}}},U=B(R,[["__scopeId","data-v-403318b5"]]),Y={class:"componentsbook-page"},j={key:0},H=["textContent"],Q=["textContent"],W=["textContent"],X=["textContent"],Z=["textContent"],ee=["textContent"],ne={key:1},te=["textContent"],oe=["textContent"],le={key:2},de=["textContent"],re=["textContent"],se=["textContent"],ae={key:0,class:"code-spoiler"},ie={class:"code-block"},ue=["textContent"],pe={__name:"playground_Components_MyButton",setup(a){const g=h([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"primary | secondary | danger",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),u=h([{name:"click",description:"N/A"}]),_=h([]),f=h(!0),x=h(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Click me',
  },
  size: {
    type: String,
    default: 'md',
    validator: value => ['sm', 'md', 'lg'].includes(value),
  },
  variant: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'danger'].includes(value),
  },
})

// Добавляем поддержку событий
const emit = defineEmits(['click'])

// Обработчик клика
const handleClick = () => {
  emit('click') // Испускаем событие клика
}

// Динамическое создание классов
const buttonClass = computed(() => [
  'btn',
  \`btn-\${props.variant}\`,
  \`btn-\${props.size}\`,
])
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
`);{const v=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Удаляем Nuxt DevTools из DOM"),t.remove(),v.disconnect())});v.observe(document.body,{childList:!0,subtree:!0})}return(v,t)=>(o(),r("div",Y,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 MyButton Component",-1)),n(g).length?(o(),r("div",j,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",null,[t[0]||(t[0]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Values"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1)),e("tbody",null,[(o(!0),r(N,null,S(n(g),(l,p)=>(o(),r("tr",{key:p},[e("td",null,[e("b",{textContent:d(l.name)},null,8,H)]),e("td",{textContent:d(l.type??"N/A")},null,8,Q),e("td",{textContent:d(l.values??"N/A")},null,8,W),e("td",{textContent:d(l.required?"✅ Yes":"❌ No")},null,8,X),e("td",{textContent:d(l.defaultValue??"N/A")},null,8,Z),e("td",{textContent:d(l.description??"N/A")},null,8,ee)]))),128))])])])):k("",!0),n(u).length?(o(),r("div",ne,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",null,[t[2]||(t[2]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Description")])],-1)),e("tbody",null,[(o(!0),r(N,null,S(n(u),(l,p)=>(o(),r("tr",{key:p},[e("td",null,[e("b",{textContent:d(l.name)},null,8,te)]),e("td",{textContent:d(l.description??"N/A")},null,8,oe)]))),128))])])])):k("",!0),n(_).length?(o(),r("div",le,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",null,[t[4]||(t[4]=e("thead",null,[e("tr",null,[e("th",null,"Slot"),e("th",null,"Description"),e("th",null,"Bindings")])],-1)),e("tbody",null,[(o(!0),r(N,null,S(n(_),(l,p)=>(o(),r("tr",{key:p},[e("td",null,[e("b",{textContent:d(l.name)},null,8,de)]),e("td",{textContent:d(l.description??"N/A")},null,8,re),e("td",{textContent:d(l.bindings??"N/A")},null,8,se)]))),128))])])])):k("",!0)]),i(U),`${n(f)}`?(o(),r("details",ae,[t[9]||(t[9]=e("summary",null,"Source code",-1)),e("pre",ie,[t[7]||(t[7]=T("        ")),e("code",{class:"highlighted-code",textContent:d(n(x))},null,8,ue),t[8]||(t[8]=T(`
      `))])])):k("",!0)]))}},Ce=B(pe,[["__scopeId","data-v-8ff57223"]]);export{Ce as default};
