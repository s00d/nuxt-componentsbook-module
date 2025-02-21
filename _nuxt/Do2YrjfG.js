import{_ as V,a as $}from"./Dw_ba-jO.js";import{_ as P}from"./Be1NRngx.js";import{m as S,B as D,_ as w,c as i,o as l,T as M,d as C,t as a,O as T,r as p,M as x,a as t,b as z,P as _,Q as q,L as o,R as g,S as N,V as L,K as y,N as B,J as h,w as E}from"./DVQnm3ND.js";import"./GvVry5ad.js";const I=S({name:"CustomButton",props:{label:{type:String,default:"Click Me"},size:{type:String,default:"md"},variant:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},emits:["click"],setup(r){return{buttonClass:D(()=>["btn",`btn-${r.size}`,`btn-${r.variant}`,{"btn-disabled":r.disabled}])}}}),R=["disabled"];function U(r,u,m,b,c,f){return l(),i("button",{class:T(r.buttonClass),disabled:r.disabled,onClick:u[0]||(u[0]=k=>r.$emit("click"))},[M(r.$slots,"default",{},()=>[C(a(r.label),1)],!0)],10,R)}const O=w(I,[["render",U],["__scopeId","data-v-6dce7b55"]]),F={class:"controls"},H=S({__name:"CustomButton.stories",setup(r){const u=p("Click Me"),m=p("md"),b=p("primary"),c=p(!1),f=()=>{console.log("Button clicked")};return(k,n)=>{const e=P;return l(),i(x,null,[n[10]||(n[10]=t("p",null,[C(" The "),t("code",null,"CustomButton"),C(" component is a versatile button with multiple configurations. ")],-1)),n[11]||(n[11]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",F,[t("label",null,[n[4]||(n[4]=C(" Label: ")),_(t("input",{"onUpdate:modelValue":n[0]||(n[0]=d=>g(u)?u.value=d:null),type:"text"},null,512),[[q,o(u)]])]),t("label",null,[n[6]||(n[6]=C(" Size: ")),_(t("select",{"onUpdate:modelValue":n[1]||(n[1]=d=>g(m)?m.value=d:null)},n[5]||(n[5]=[t("option",{value:"sm"},"Small",-1),t("option",{value:"md"},"Medium",-1),t("option",{value:"lg"},"Large",-1)]),512),[[N,o(m)]])]),t("label",null,[n[8]||(n[8]=C(" Variant: ")),_(t("select",{"onUpdate:modelValue":n[2]||(n[2]=d=>g(b)?b.value=d:null)},n[7]||(n[7]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1),t("option",{value:"danger"},"Danger",-1)]),512),[[N,o(b)]])]),t("label",null,[_(t("input",{"onUpdate:modelValue":n[3]||(n[3]=d=>g(c)?c.value=d:null),type:"checkbox"},null,512),[[L,o(c)]]),n[9]||(n[9]=C(" Disabled "))])]),z(e,{component:O,props:{label:o(u),size:o(m),variant:o(b),disabled:o(c)},emits:["click"],onClick:f},null,8,["props"])],64)}}}),J={class:"componentsbook-page"},K={key:0},Q=["textContent"],Y=["textContent"],j=["textContent"],G=["textContent"],W=["textContent"],X=["textContent"],Z={key:1},tt=["textContent"],nt=["textContent"],et={key:2},ot=["textContent"],lt=["textContent"],st=["textContent"],at={__name:"playground_Components_lib_CustomButton",setup(r){const u=p([{name:"label",values:"N/A",type:"string",defaultValue:"'Click Me'",description:"N/A",required:!1},{name:"size",values:"N/A",type:"String as ButtonProps['size']",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"N/A",type:"String as ButtonProps['variant']",defaultValue:"'primary'",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1}]),m=p([{name:"click",description:"N/A"}]),b=p([{name:"default",description:"N/A",bindings:""}]),c=p(!0),f=p(`<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

export default defineComponent({
  name: 'CustomButton',
  props: {
    label: {
      type: String,
      default: 'Click Me',
    },
    size: {
      type: String as () => ButtonProps['size'],
      default: 'md',
    },
    variant: {
      type: String as () => ButtonProps['variant'],
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props: ButtonProps) {
    const buttonClass = computed(() => [
      'btn',
      \`btn-\${props.size}\`,
      \`btn-\${props.variant}\`,
      { 'btn-disabled': props.disabled },
    ])

    return {
      buttonClass,
    }
  },
})
<\/script>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}
.btn-sm {
  font-size: 12px;
  padding: 5px;
}
.btn-md {
  font-size: 16px;
  padding: 10px;
}
.btn-lg {
  font-size: 20px;
  padding: 15px;
}
.btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
}
.btn-danger {
  background-color: #dc3545;
  color: white;
}
.btn-disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
`),k=async()=>{try{await navigator.clipboard.writeText(f.value)}catch(n){console.error("Failed to copy:",n)}};{const n=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),e.remove(),n.disconnect())});n.observe(document.body,{childList:!0,subtree:!0})}return(n,e)=>{const d=$,A=V;return l(),i("div",J,[t("div",null,[e[6]||(e[6]=t("h1",null,"🟢 CustomButton Component",-1)),o(u).length?(l(),i("div",K,[e[1]||(e[1]=t("h2",null,"🔹 Props",-1)),t("table",null,[e[0]||(e[0]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Values"),t("th",null,"Required"),t("th",null,"Default Value"),t("th",null,"Description")])],-1)),t("tbody",null,[(l(!0),i(x,null,B(o(u),(s,v)=>(l(),i("tr",{key:v},[t("td",null,[t("b",{textContent:a(s.name)},null,8,Q)]),t("td",{textContent:a(s.type??"N/A")},null,8,Y),t("td",{textContent:a(s.values??"N/A")},null,8,j),t("td",{textContent:a(s.required?"✅ Yes":"❌ No")},null,8,G),t("td",{textContent:a(s.defaultValue??"N/A")},null,8,W),t("td",{textContent:a(s.description??"N/A")},null,8,X)]))),128))])])])):y("",!0),o(m).length?(l(),i("div",Z,[e[3]||(e[3]=t("h2",null,"🔹 Events",-1)),t("table",null,[e[2]||(e[2]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Description")])],-1)),t("tbody",null,[(l(!0),i(x,null,B(o(m),(s,v)=>(l(),i("tr",{key:v},[t("td",null,[t("b",{textContent:a(s.name)},null,8,tt)]),t("td",{textContent:a(s.description??"N/A")},null,8,nt)]))),128))])])])):y("",!0),o(b).length?(l(),i("div",et,[e[5]||(e[5]=t("h2",null,"🔹 Slots",-1)),t("table",null,[e[4]||(e[4]=t("thead",null,[t("tr",null,[t("th",null,"Slot"),t("th",null,"Description"),t("th",null,"Bindings")])],-1)),t("tbody",null,[(l(!0),i(x,null,B(o(b),(s,v)=>(l(),i("tr",{key:v},[t("td",null,[t("b",{textContent:a(s.name)},null,8,ot)]),t("td",{textContent:a(s.description??"N/A")},null,8,lt),t("td",{textContent:a(s.bindings??"N/A")},null,8,st)]))),128))])])])):y("",!0)]),z(H),t("div",null,[o(c)?(l(),h(A,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:E(()=>[o(c)?(l(),h(d,{key:0,code:o(f),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:k},null,8,["code"])):y("",!0)]),_:1})):y("",!0)])])}}},pt=w(at,[["__scopeId","data-v-d0479ff9"]]);export{pt as default};
