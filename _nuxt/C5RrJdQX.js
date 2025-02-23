import{_ as A,a as V}from"./CtGpM317.js";import{_ as $}from"./DNnw39hr.js";import{m as w,B as P,_ as S,c as a,o as l,T as D,d as m,t as s,O as M,r as u,M as g,a as t,b as z,P as y,Q as T,L as n,R as h,S as B,V as q,K as f,N as k,J as N,w as L}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const E=w({name:"CustomButton",props:{label:{type:String,default:"Click Me"},size:{type:String,default:"md"},variant:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},emits:["click"],setup(d){return{buttonClass:P(()=>["btn",`btn-${d.size}`,`btn-${d.variant}`,{"btn-disabled":d.disabled}])}}}),I=["disabled"];function R(d,r,c,b,p,v){return l(),a("button",{class:M(d.buttonClass),disabled:d.disabled,onClick:r[0]||(r[0]=_=>d.$emit("click"))},[D(d.$slots,"default",{},()=>[m(s(d.label),1)],!0)],10,I)}const U=S(E,[["render",R],["__scopeId","data-v-6dce7b55"]]),O={class:"controls"},F=w({__name:"CustomButton.stories",setup(d){const r=u("Click Me"),c=u("md"),b=u("primary"),p=u(!1),v=()=>{console.log("Button clicked")};return(_,e)=>{const x=$;return l(),a(g,null,[e[10]||(e[10]=t("p",null,[m(" The "),t("code",null,"CustomButton"),m(" component is a versatile button with multiple configurations. ")],-1)),e[11]||(e[11]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",O,[t("label",null,[e[4]||(e[4]=m(" Label: ")),y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>h(r)?r.value=i:null),type:"text"},null,512),[[T,n(r)]])]),t("label",null,[e[6]||(e[6]=m(" Size: ")),y(t("select",{"onUpdate:modelValue":e[1]||(e[1]=i=>h(c)?c.value=i:null)},e[5]||(e[5]=[t("option",{value:"sm"},"Small",-1),t("option",{value:"md"},"Medium",-1),t("option",{value:"lg"},"Large",-1)]),512),[[B,n(c)]])]),t("label",null,[e[8]||(e[8]=m(" Variant: ")),y(t("select",{"onUpdate:modelValue":e[2]||(e[2]=i=>h(b)?b.value=i:null)},e[7]||(e[7]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1),t("option",{value:"danger"},"Danger",-1)]),512),[[B,n(b)]])]),t("label",null,[y(t("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>h(p)?p.value=i:null),type:"checkbox"},null,512),[[q,n(p)]]),e[9]||(e[9]=m(" Disabled "))])]),z(x,{component:U,props:{label:n(r),size:n(c),variant:n(b),disabled:n(p)},emits:["click"],name:"lib-custom-button",onClick:v},null,8,["props"])],64)}}}),H={class:"componentsbook-page"},J={key:0},K={class:"table"},Q={class:"table-body"},Y={class:"table-cell"},j=["textContent"],G=["textContent"],W=["textContent"],X=["textContent"],Z=["textContent"],tt=["textContent"],et={key:1},nt={class:"table"},lt={class:"table-body"},ot={class:"table-cell"},st=["textContent"],at=["textContent"],dt={key:2},rt={class:"table"},it={class:"table-body"},ut={class:"table-cell"},ct=["textContent"],bt=["textContent"],pt=["textContent"],mt={__name:"playground_Components_lib_CustomButton",setup(d){const r=u([{name:"label",values:"N/A",type:"string",defaultValue:"'Click Me'",description:"N/A",required:!1},{name:"size",values:"N/A",type:"String as ButtonProps['size']",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"N/A",type:"String as ButtonProps['variant']",defaultValue:"'primary'",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1}]),c=u([{name:"click",description:"N/A"}]),b=u([{name:"default",description:"N/A",bindings:""}]),p=u(!0),v=u(`<template>
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
`);{const _=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),e.remove(),_.disconnect())});_.observe(document.body,{childList:!0,subtree:!0})}return(_,e)=>{const x=V,i=A;return l(),a("div",H,[t("div",null,[e[6]||(e[6]=t("h1",null,"🟢 CustomButton Component",-1)),n(r).length?(l(),a("div",J,[e[1]||(e[1]=t("h2",null,"🔹 Props",-1)),t("table",K,[e[0]||(e[0]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Type "),t("th",{class:"table-header-cell"}," Values "),t("th",{class:"table-header-cell"}," Required "),t("th",{class:"table-header-cell"}," Default Value "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",Q,[(l(!0),a(g,null,k(n(r),(o,C)=>(l(),a("tr",{key:C,class:"table-row"},[t("td",Y,[t("b",{textContent:s(o.name)},null,8,j)]),t("td",{class:"table-cell",textContent:s(o.type??"N/A")},null,8,G),t("td",{class:"table-cell",textContent:s(o.values??"N/A")},null,8,W),t("td",{class:"table-cell",textContent:s(o.required?"✅ Yes":"❌ No")},null,8,X),t("td",{class:"table-cell",textContent:s(o.defaultValue??"N/A")},null,8,Z),t("td",{class:"table-cell",textContent:s(o.description??"N/A")},null,8,tt)]))),128))])])])):f("",!0),n(c).length?(l(),a("div",et,[e[3]||(e[3]=t("h2",null,"🔹 Events",-1)),t("table",nt,[e[2]||(e[2]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",lt,[(l(!0),a(g,null,k(n(c),(o,C)=>(l(),a("tr",{key:C,class:"table-row"},[t("td",ot,[t("b",{textContent:s(o.name)},null,8,st)]),t("td",{class:"table-cell",textContent:s(o.description??"N/A")},null,8,at)]))),128))])])])):f("",!0),n(b).length?(l(),a("div",dt,[e[5]||(e[5]=t("h2",null,"🔹 Slots",-1)),t("table",rt,[e[4]||(e[4]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Slot "),t("th",{class:"table-header-cell"}," Description "),t("th",{class:"table-header-cell"}," Bindings ")])],-1)),t("tbody",it,[(l(!0),a(g,null,k(n(b),(o,C)=>(l(),a("tr",{key:C,class:"table-row"},[t("td",ut,[t("b",{textContent:s(o.name)},null,8,ct)]),t("td",{class:"table-cell",textContent:s(o.description??"N/A")},null,8,bt),t("td",{class:"table-cell",textContent:s(o.bindings??"N/A")},null,8,pt)]))),128))])])])):f("",!0)]),z(F),t("div",null,[n(p)?(l(),N(i,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:L(()=>[n(p)?(l(),N(x,{key:0,code:n(v),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):f("",!0)]),_:1})):f("",!0)])])}}},yt=S(mt,[["__scopeId","data-v-e14e67a3"]]);export{yt as default};
