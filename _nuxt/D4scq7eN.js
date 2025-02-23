import{_ as N,a as M}from"./CtGpM317.js";import{_ as P}from"./DNnw39hr.js";import{m as V,B as T,_ as k,c as d,o as s,t as i,O as D,r as p,a as t,b as z,d as _,P as f,Q as $,L as l,R as g,S as w,M as h,K as v,N as x,J as B,w as A}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const q=V({name:"MyButton",props:{label:{type:String,default:"Click me"},size:{type:String,default:"md",validator:o=>["sm","md","lg"].includes(o)},variant:{type:String,default:"primary",validator:o=>["primary","secondary","danger"].includes(o)}},emits:["click"],setup(o,{emit:r}){return{buttonClass:T(()=>["btn",`btn-${o.variant}`,`btn-${o.size}`]),handleClick:()=>{r("click")}}}});function L(o,r,u,c,b,C){return s(),d("button",{class:D(o.buttonClass),onClick:r[0]||(r[0]=(...e)=>o.handleClick&&o.handleClick(...e))},i(o.label),3)}const E=k(q,[["render",L]]),I={class:"controls"},R={__name:"MyButton3.stories",setup(o){const r=p("Click Me"),u=p("md"),c=p("primary"),b={label:{fieldType:"text"},size:{fieldType:"select",options:["sm","md","lg"]},variant:{fieldType:"select",options:["primary","secondary","danger"]}};return(C,e)=>{const n=P;return s(),d(h,null,[e[8]||(e[8]=t("p",null,[_(" The "),t("code",null,"MyButton3"),_(" component is used to display a button with different styles and sizes. ")],-1)),e[9]||(e[9]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",I,[t("label",null,[e[3]||(e[3]=_(" Label: ")),f(t("input",{"onUpdate:modelValue":e[0]||(e[0]=m=>g(r)?r.value=m:null),type:"text"},null,512),[[$,l(r)]])]),t("label",null,[e[5]||(e[5]=_(" Size: ")),f(t("select",{"onUpdate:modelValue":e[1]||(e[1]=m=>g(u)?u.value=m:null)},e[4]||(e[4]=[t("option",{value:"sm"},"Small",-1),t("option",{value:"md"},"Medium",-1),t("option",{value:"lg"},"Large",-1)]),512),[[w,l(u)]])]),t("label",null,[e[7]||(e[7]=_(" Variant: ")),f(t("select",{"onUpdate:modelValue":e[2]||(e[2]=m=>g(c)?c.value=m:null)},e[6]||(e[6]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1),t("option",{value:"danger"},"Danger",-1)]),512),[[w,l(c)]])])]),z(n,{component:E,props:{label:l(r),size:l(u),variant:l(c)},"component-props-meta":b},null,8,["props"])],64)}}},O=k(R,[["__scopeId","data-v-1663a327"]]),U={class:"componentsbook-page"},F={key:0},H={class:"table"},J={class:"table-body"},K={class:"table-cell"},Q=["textContent"],Y=["textContent"],j=["textContent"],G=["textContent"],W=["textContent"],X=["textContent"],Z={key:1},tt={class:"table"},et={class:"table-body"},nt={class:"table-cell"},lt=["textContent"],st=["textContent"],ot={key:2},at={class:"table"},rt={class:"table-body"},it={class:"table-cell"},dt=["textContent"],ut=["textContent"],ct=["textContent"],pt={__name:"playground_Components_MyButton3",setup(o){const r=p([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"String as ButtonProps['size']",defaultValue:"'md'",description:"The size of the button allows only some values",required:!1},{name:"variant",values:"primary | secondary | danger",type:"String as ButtonProps['variant']",defaultValue:"'primary'",description:"The type of the button allows only some values",required:!1}]),u=p([{name:"click",description:"N/A"}]),c=p([]),b=p(!0),C=p(`<template>
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
`);{const e=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),e.disconnect())});e.observe(document.body,{childList:!0,subtree:!0})}return(e,n)=>{const m=M,S=N;return s(),d("div",U,[t("div",null,[n[6]||(n[6]=t("h1",null,"🟢 MyButton3 Component",-1)),l(r).length?(s(),d("div",F,[n[1]||(n[1]=t("h2",null,"🔹 Props",-1)),t("table",H,[n[0]||(n[0]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Type "),t("th",{class:"table-header-cell"}," Values "),t("th",{class:"table-header-cell"}," Required "),t("th",{class:"table-header-cell"}," Default Value "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",J,[(s(!0),d(h,null,x(l(r),(a,y)=>(s(),d("tr",{key:y,class:"table-row"},[t("td",K,[t("b",{textContent:i(a.name)},null,8,Q)]),t("td",{class:"table-cell",textContent:i(a.type??"N/A")},null,8,Y),t("td",{class:"table-cell",textContent:i(a.values??"N/A")},null,8,j),t("td",{class:"table-cell",textContent:i(a.required?"✅ Yes":"❌ No")},null,8,G),t("td",{class:"table-cell",textContent:i(a.defaultValue??"N/A")},null,8,W),t("td",{class:"table-cell",textContent:i(a.description??"N/A")},null,8,X)]))),128))])])])):v("",!0),l(u).length?(s(),d("div",Z,[n[3]||(n[3]=t("h2",null,"🔹 Events",-1)),t("table",tt,[n[2]||(n[2]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",et,[(s(!0),d(h,null,x(l(u),(a,y)=>(s(),d("tr",{key:y,class:"table-row"},[t("td",nt,[t("b",{textContent:i(a.name)},null,8,lt)]),t("td",{class:"table-cell",textContent:i(a.description??"N/A")},null,8,st)]))),128))])])])):v("",!0),l(c).length?(s(),d("div",ot,[n[5]||(n[5]=t("h2",null,"🔹 Slots",-1)),t("table",at,[n[4]||(n[4]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Slot "),t("th",{class:"table-header-cell"}," Description "),t("th",{class:"table-header-cell"}," Bindings ")])],-1)),t("tbody",rt,[(s(!0),d(h,null,x(l(c),(a,y)=>(s(),d("tr",{key:y,class:"table-row"},[t("td",it,[t("b",{textContent:i(a.name)},null,8,dt)]),t("td",{class:"table-cell",textContent:i(a.description??"N/A")},null,8,ut),t("td",{class:"table-cell",textContent:i(a.bindings??"N/A")},null,8,ct)]))),128))])])])):v("",!0)]),z(O),t("div",null,[l(b)?(s(),B(S,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:A(()=>[l(b)?(s(),B(m,{key:0,code:l(C),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):v("",!0)]),_:1})):v("",!0)])])}}},vt=k(pt,[["__scopeId","data-v-50e84bd6"]]);export{vt as default};
