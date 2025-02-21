import{_ as M,a as P}from"./Dw_ba-jO.js";import{_ as V}from"./Be1NRngx.js";import{m as D,B as $,_ as k,c as u,o as l,t as i,O as T,r as c,a as n,b as z,d as v,P as _,Q as A,L as o,R as x,S as w,M as g,K as C,N as h,J as B,w as q}from"./DVQnm3ND.js";import"./GvVry5ad.js";const L=D({name:"MyButton",props:{label:{type:String,default:"Click me"},size:{type:String,default:"md",validator:s=>["sm","md","lg"].includes(s)},variant:{type:String,default:"primary",validator:s=>["primary","secondary","danger"].includes(s)}},emits:["click"],setup(s,{emit:a}){return{buttonClass:$(()=>["btn",`btn-${s.variant}`,`btn-${s.size}`]),handleClick:()=>{a("click")}}}});function E(s,a,p,m,f,t){return l(),u("button",{class:T(s.buttonClass),onClick:a[0]||(a[0]=(...y)=>s.handleClick&&s.handleClick(...y))},i(s.label),3)}const I=k(L,[["render",E]]),R={class:"controls"},O={__name:"MyButton3.stories",setup(s){const a=c("Click Me"),p=c("md"),m=c("primary");return(f,t)=>{const y=V;return l(),u(g,null,[t[8]||(t[8]=n("p",null,[v(" The "),n("code",null,"MyButton3"),v(" component is used to display a button with different styles and sizes. ")],-1)),t[9]||(t[9]=n("h2",null,"🛠 Interactive Controls",-1)),n("div",R,[n("label",null,[t[3]||(t[3]=v(" Label: ")),_(n("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>x(a)?a.value=d:null),type:"text"},null,512),[[A,o(a)]])]),n("label",null,[t[5]||(t[5]=v(" Size: ")),_(n("select",{"onUpdate:modelValue":t[1]||(t[1]=d=>x(p)?p.value=d:null)},t[4]||(t[4]=[n("option",{value:"sm"},"Small",-1),n("option",{value:"md"},"Medium",-1),n("option",{value:"lg"},"Large",-1)]),512),[[w,o(p)]])]),n("label",null,[t[7]||(t[7]=v(" Variant: ")),_(n("select",{"onUpdate:modelValue":t[2]||(t[2]=d=>x(m)?m.value=d:null)},t[6]||(t[6]=[n("option",{value:"primary"},"Primary",-1),n("option",{value:"secondary"},"Secondary",-1),n("option",{value:"danger"},"Danger",-1)]),512),[[w,o(m)]])])]),z(y,{component:I,props:{label:o(a),size:o(p),variant:o(m)}},null,8,["props"])],64)}}},U=k(O,[["__scopeId","data-v-103c0ab3"]]),F={class:"componentsbook-page"},H={key:0},J=["textContent"],K=["textContent"],Q=["textContent"],Y=["textContent"],j=["textContent"],G=["textContent"],W={key:1},X=["textContent"],Z=["textContent"],nn={key:2},tn=["textContent"],en=["textContent"],on=["textContent"],ln={__name:"playground_Components_MyButton3",setup(s){const a=c([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"String as ButtonProps['size']",defaultValue:"'md'",description:"The size of the button allows only some values",required:!1},{name:"variant",values:"primary | secondary | danger",type:"String as ButtonProps['variant']",defaultValue:"'primary'",description:"The type of the button allows only some values",required:!1}]),p=c([{name:"click",description:"N/A"}]),m=c([]),f=c(!0),t=c(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from '#imports'

interface ButtonProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'danger'
}

export default defineComponent({
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Click me',
    },
    /**
     * The size of the button allows only some values
     * @values sm, md, lg
     */
    size: {
      type: String as () => ButtonProps['size'],
      default: 'md',
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
    /**
     * The type of the button allows only some values
     * @values primary, secondary, danger
     */
    variant: {
      type: String as () => ButtonProps['variant'],
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value),
    },
  },
  emits: ['click'],
  setup(props: ButtonProps, { emit }) {
    const buttonClass = computed(() => [
      'btn',
      \`btn-\${props.variant}\`,
      \`btn-\${props.size}\`,
    ])

    // Обработчик клика
    const handleClick = () => {
      emit('click') // Испускаем событие клика
    }

    return {
      buttonClass,
      handleClick,
    }
  },
})
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
`),y=async()=>{try{await navigator.clipboard.writeText(t.value)}catch(d){console.error("Failed to copy:",d)}};{const d=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),e.remove(),d.disconnect())});d.observe(document.body,{childList:!0,subtree:!0})}return(d,e)=>{const S=P,N=M;return l(),u("div",F,[n("div",null,[e[6]||(e[6]=n("h1",null,"🟢 MyButton3 Component",-1)),o(a).length?(l(),u("div",H,[e[1]||(e[1]=n("h2",null,"🔹 Props",-1)),n("table",null,[e[0]||(e[0]=n("thead",null,[n("tr",null,[n("th",null,"Prop"),n("th",null,"Type"),n("th",null,"Values"),n("th",null,"Required"),n("th",null,"Default Value"),n("th",null,"Description")])],-1)),n("tbody",null,[(l(!0),u(g,null,h(o(a),(r,b)=>(l(),u("tr",{key:b},[n("td",null,[n("b",{textContent:i(r.name)},null,8,J)]),n("td",{textContent:i(r.type??"N/A")},null,8,K),n("td",{textContent:i(r.values??"N/A")},null,8,Q),n("td",{textContent:i(r.required?"✅ Yes":"❌ No")},null,8,Y),n("td",{textContent:i(r.defaultValue??"N/A")},null,8,j),n("td",{textContent:i(r.description??"N/A")},null,8,G)]))),128))])])])):C("",!0),o(p).length?(l(),u("div",W,[e[3]||(e[3]=n("h2",null,"🔹 Events",-1)),n("table",null,[e[2]||(e[2]=n("thead",null,[n("tr",null,[n("th",null,"Prop"),n("th",null,"Description")])],-1)),n("tbody",null,[(l(!0),u(g,null,h(o(p),(r,b)=>(l(),u("tr",{key:b},[n("td",null,[n("b",{textContent:i(r.name)},null,8,X)]),n("td",{textContent:i(r.description??"N/A")},null,8,Z)]))),128))])])])):C("",!0),o(m).length?(l(),u("div",nn,[e[5]||(e[5]=n("h2",null,"🔹 Slots",-1)),n("table",null,[e[4]||(e[4]=n("thead",null,[n("tr",null,[n("th",null,"Slot"),n("th",null,"Description"),n("th",null,"Bindings")])],-1)),n("tbody",null,[(l(!0),u(g,null,h(o(m),(r,b)=>(l(),u("tr",{key:b},[n("td",null,[n("b",{textContent:i(r.name)},null,8,tn)]),n("td",{textContent:i(r.description??"N/A")},null,8,en),n("td",{textContent:i(r.bindings??"N/A")},null,8,on)]))),128))])])])):C("",!0)]),z(U),n("div",null,[o(f)?(l(),B(N,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:q(()=>[o(f)?(l(),B(S,{key:0,code:o(t),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:y},null,8,["code"])):C("",!0)]),_:1})):C("",!0)])])}}},dn=k(ln,[["__scopeId","data-v-bf46c062"]]);export{dn as default};
