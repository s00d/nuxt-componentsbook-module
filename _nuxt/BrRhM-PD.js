import{u as S,_ as z}from"./DXmpYz1O.js";import{m as N,B as M,_,c as r,o,t as s,O as V,r as p,a as n,K as w,b as B,d as y,Q as x,R as D,S as h,P,J as u,M as f,L as g,N as k}from"./BlUxIf_E.js";const $=N({name:"MyButton",props:{label:{type:String,default:"Click me"},size:{type:String,default:"md",validator:l=>["sm","md","lg"].includes(l)},variant:{type:String,default:"primary",validator:l=>["primary","secondary","danger"].includes(l)}},emits:["click"],setup(l,{emit:a}){return{buttonClass:M(()=>["btn",`btn-${l.variant}`,`btn-${l.size}`]),handleClick:()=>{a("click")}}}});function T(l,a,i,d,v,C){return o(),r("button",{class:V(l.buttonClass),onClick:a[0]||(a[0]=(...m)=>l.handleClick&&l.handleClick(...m))},s(l.label),3)}const A=_($,[["render",T]]),q={class:"controls"},L={__name:"MyButton3.stories",setup(l){const a=p("Click Me"),i=p("md"),d=p("primary"),{renderedComponent:v,generatedCode:C,copyToClipboard:m}=S(A,{label:a,size:i,variant:d});return(e,t)=>{const c=z;return o(),r(f,null,[t[8]||(t[8]=n("p",null,[y(" The "),n("code",null,"MyButton3"),y(" component is used to display a button with different styles and sizes. ")],-1)),t[9]||(t[9]=n("h2",null,"🛠 Interactive Controls",-1)),n("div",q,[n("label",null,[t[3]||(t[3]=y(" Label: ")),x(n("input",{"onUpdate:modelValue":t[0]||(t[0]=b=>a.value=b),type:"text"},null,512),[[D,a.value]])]),n("label",null,[t[5]||(t[5]=y(" Size: ")),x(n("select",{"onUpdate:modelValue":t[1]||(t[1]=b=>i.value=b)},t[4]||(t[4]=[n("option",{value:"sm"},"Small",-1),n("option",{value:"md"},"Medium",-1),n("option",{value:"lg"},"Large",-1)]),512),[[h,i.value]])]),n("label",null,[t[7]||(t[7]=y(" Variant: ")),x(n("select",{"onUpdate:modelValue":t[2]||(t[2]=b=>d.value=b)},t[6]||(t[6]=[n("option",{value:"primary"},"Primary",-1),n("option",{value:"secondary"},"Secondary",-1),n("option",{value:"danger"},"Danger",-1)]),512),[[h,d.value]])])]),t[10]||(t[10]=n("h2",null,"🔹 Preview",-1)),(o(),w(P(u(v)))),t[11]||(t[11]=n("h2",null,"📋 Generated Code",-1)),B(c,{"generated-code":u(C),"copy-to-clipboard":u(m)},null,8,["generated-code","copy-to-clipboard"])],64)}}},I=_(L,[["__scopeId","data-v-5d195cad"]]),E={class:"componentsbook-page"},O={key:0},U=["textContent"],G=["textContent"],R=["textContent"],F=["textContent"],J=["textContent"],K=["textContent"],Q={key:1},Y=["textContent"],j=["textContent"],H={key:2},W=["textContent"],X=["textContent"],Z=["textContent"],nn={key:0,class:"code-spoiler"},tn={class:"code-block"},en=["textContent"],on={__name:"playground_Components_MyButton3",setup(l){const a=p([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"String as ButtonProps['size']",defaultValue:"'md'",description:"The size of the button allows only some values",required:!1},{name:"variant",values:"primary | secondary | danger",type:"String as ButtonProps['variant']",defaultValue:"'primary'",description:"The type of the button allows only some values",required:!1}]),i=p([{name:"click",description:"N/A"}]),d=p([]),v=p(!0),C=p(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

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
`);{const m=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Удаляем Nuxt DevTools из DOM"),e.remove(),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0})}return(m,e)=>(o(),r("div",E,[n("div",null,[e[6]||(e[6]=n("h1",null,"🟢 MyButton3 Component",-1)),u(a).length?(o(),r("div",O,[e[1]||(e[1]=n("h2",null,"🔹 Props",-1)),n("table",null,[e[0]||(e[0]=n("thead",null,[n("tr",null,[n("th",null,"Prop"),n("th",null,"Type"),n("th",null,"Values"),n("th",null,"Required"),n("th",null,"Default Value"),n("th",null,"Description")])],-1)),n("tbody",null,[(o(!0),r(f,null,k(u(a),(t,c)=>(o(),r("tr",{key:c},[n("td",null,[n("b",{textContent:s(t.name)},null,8,U)]),n("td",{textContent:s(t.type??"N/A")},null,8,G),n("td",{textContent:s(t.values??"N/A")},null,8,R),n("td",{textContent:s(t.required?"✅ Yes":"❌ No")},null,8,F),n("td",{textContent:s(t.defaultValue??"N/A")},null,8,J),n("td",{textContent:s(t.description??"N/A")},null,8,K)]))),128))])])])):g("",!0),u(i).length?(o(),r("div",Q,[e[3]||(e[3]=n("h2",null,"🔹 Events",-1)),n("table",null,[e[2]||(e[2]=n("thead",null,[n("tr",null,[n("th",null,"Prop"),n("th",null,"Description")])],-1)),n("tbody",null,[(o(!0),r(f,null,k(u(i),(t,c)=>(o(),r("tr",{key:c},[n("td",null,[n("b",{textContent:s(t.name)},null,8,Y)]),n("td",{textContent:s(t.description??"N/A")},null,8,j)]))),128))])])])):g("",!0),u(d).length?(o(),r("div",H,[e[5]||(e[5]=n("h2",null,"🔹 Slots",-1)),n("table",null,[e[4]||(e[4]=n("thead",null,[n("tr",null,[n("th",null,"Slot"),n("th",null,"Description"),n("th",null,"Bindings")])],-1)),n("tbody",null,[(o(!0),r(f,null,k(u(d),(t,c)=>(o(),r("tr",{key:c},[n("td",null,[n("b",{textContent:s(t.name)},null,8,W)]),n("td",{textContent:s(t.description??"N/A")},null,8,X),n("td",{textContent:s(t.bindings??"N/A")},null,8,Z)]))),128))])])])):g("",!0)]),B(I),`${u(v)}`?(o(),r("details",nn,[e[9]||(e[9]=n("summary",null,"Source code",-1)),n("pre",tn,[e[7]||(e[7]=y("        ")),n("code",{class:"highlighted-code",textContent:s(u(C))},null,8,en),e[8]||(e[8]=y(`
      `))])])):g("",!0)]))}},rn=_(on,[["__scopeId","data-v-72d243c1"]]);export{rn as default};
