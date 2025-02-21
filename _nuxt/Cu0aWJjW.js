import{_ as A,a as $}from"./Dw_ba-jO.js";import{_ as T}from"./Be1NRngx.js";import{m as k,_ as v,c as l,o as t,a as e,O as x,r as u,M as _,b as V,d as w,L as i,R as B,K as f,N as y,J as C,w as D,t as s}from"./DVQnm3ND.js";import"./GvVry5ad.js";const P=k({name:"CustomSwitch",props:{modelValue:{type:Boolean,required:!0},color:{type:String,default:"primary"},size:{type:String,default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"]}),q=["checked","disabled"];function z(a,r,c,g,d,p){return t(),l("label",{class:x(["switch",`switch-${a.size}`,{"switch-disabled":a.disabled}])},[e("input",{type:"checkbox",checked:a.modelValue,disabled:a.disabled,onChange:r[0]||(r[0]=m=>a.$emit("update:modelValue",m.target.checked))},null,40,q),e("span",{class:x(["slider",`slider-${a.color}`])},null,2)],2)}const E=v(P,[["render",z],["__scopeId","data-v-11be221a"]]),I=k({__name:"CustomSwitch.stories",setup(a){const r=u(!1),c=()=>{console.log("Switch toggled:",r.value)};return(g,d)=>{const p=T;return t(),l(_,null,[d[1]||(d[1]=e("p",null,[w(" The "),e("code",null,"CustomSwitch"),w(" component acts as a toggle switch. ")],-1)),V(p,{modelValue:i(r),"onUpdate:modelValue":[d[0]||(d[0]=m=>B(r)?r.value=m:null),c],component:E,emits:["update:modelValue"]},null,8,["modelValue"])],64)}}}),L={class:"componentsbook-page"},M={key:0},R=["textContent"],O=["textContent"],F=["textContent"],H=["textContent"],Y=["textContent"],J=["textContent"],K={key:1},U=["textContent"],j=["textContent"],G={key:2},Q=["textContent"],W=["textContent"],X=["textContent"],Z={__name:"playground_Components_lib_CustomSwitch",setup(a){const r=u([{name:"modelValue",values:"N/A",type:"boolean",defaultValue:"N/A",description:"N/A",required:!0},{name:"color",values:"primary | success | danger | warning",type:"string",defaultValue:"'primary'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1}]),c=u([{name:"update:modelValue",description:"N/A"}]),g=u([]),d=u(!0),p=u(`<template>
  <label :class="['switch', \`switch-\${size}\`, { 'switch-disabled': disabled }]">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span :class="['slider', \`slider-\${color}\`]" />
  </label>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomSwitch',
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    color: {
      type: String as PropType<'primary' | 'success' | 'danger' | 'warning'>,
      default: 'primary',
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
})
<\/script>

<style scoped>
/* Основной контейнер свитча */
.switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s ease;
}

/* Размеры свитча */
.switch-sm {
  width: 34px;
  height: 18px;
}
.switch-md {
  width: 50px;
  height: 24px;
}
.switch-lg {
  width: 64px;
  height: 32px;
}

/* Скрытый инпут */
input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

/* Стандартная стилизация переключателя */
.slider {
  position: absolute;
  inset: 0;
  background: #ccc;
  border-radius: 20px;
  transition: 0.3s;
}
.slider::before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  transition: 0.3s;
}

/* Размеры кружка */
.switch-sm .slider::before {
  height: 12px;
  width: 12px;
  left: 3px;
}
.switch-md .slider::before {
  height: 16px;
  width: 16px;
  left: 4px;
}
.switch-lg .slider::before {
  height: 22px;
  width: 22px;
  left: 6px;
}

/* Цвета активного состояния */
.slider-primary {
  background: #ccc;
}
input:checked + .slider-primary {
  background: #007bff;
}
input:checked + .slider-primary::before {
  transform: translate(24px, -50%);
}

/* Успешный (зеленый) */
.slider-success {
  background: #ccc;
}
input:checked + .slider-success {
  background: #28a745;
}
input:checked + .slider-success::before {
  transform: translate(24px, -50%);
}

/* Опасный (красный) */
.slider-danger {
  background: #ccc;
}
input:checked + .slider-danger {
  background: #dc3545;
}
input:checked + .slider-danger::before {
  transform: translate(24px, -50%);
}

/* Предупреждающий (желтый) */
.slider-warning {
  background: #ccc;
}
input:checked + .slider-warning {
  background: #ffc107;
}
input:checked + .slider-warning::before {
  transform: translate(24px, -50%);
}

/* Эффект disabled */
.switch-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
`),m=async()=>{try{await navigator.clipboard.writeText(p.value)}catch(h){console.error("Failed to copy:",h)}};{const h=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),h.disconnect())});h.observe(document.body,{childList:!0,subtree:!0})}return(h,n)=>{const N=$,S=A;return t(),l("div",L,[e("div",null,[n[6]||(n[6]=e("h1",null,"🟢 CustomSwitch Component",-1)),i(r).length?(t(),l("div",M,[n[1]||(n[1]=e("h2",null,"🔹 Props",-1)),e("table",null,[n[0]||(n[0]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Values"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1)),e("tbody",null,[(t(!0),l(_,null,y(i(r),(o,b)=>(t(),l("tr",{key:b},[e("td",null,[e("b",{textContent:s(o.name)},null,8,R)]),e("td",{textContent:s(o.type??"N/A")},null,8,O),e("td",{textContent:s(o.values??"N/A")},null,8,F),e("td",{textContent:s(o.required?"✅ Yes":"❌ No")},null,8,H),e("td",{textContent:s(o.defaultValue??"N/A")},null,8,Y),e("td",{textContent:s(o.description??"N/A")},null,8,J)]))),128))])])])):f("",!0),i(c).length?(t(),l("div",K,[n[3]||(n[3]=e("h2",null,"🔹 Events",-1)),e("table",null,[n[2]||(n[2]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Description")])],-1)),e("tbody",null,[(t(!0),l(_,null,y(i(c),(o,b)=>(t(),l("tr",{key:b},[e("td",null,[e("b",{textContent:s(o.name)},null,8,U)]),e("td",{textContent:s(o.description??"N/A")},null,8,j)]))),128))])])])):f("",!0),i(g).length?(t(),l("div",G,[n[5]||(n[5]=e("h2",null,"🔹 Slots",-1)),e("table",null,[n[4]||(n[4]=e("thead",null,[e("tr",null,[e("th",null,"Slot"),e("th",null,"Description"),e("th",null,"Bindings")])],-1)),e("tbody",null,[(t(!0),l(_,null,y(i(g),(o,b)=>(t(),l("tr",{key:b},[e("td",null,[e("b",{textContent:s(o.name)},null,8,Q)]),e("td",{textContent:s(o.description??"N/A")},null,8,W),e("td",{textContent:s(o.bindings??"N/A")},null,8,X)]))),128))])])])):f("",!0)]),V(I),e("div",null,[i(d)?(t(),C(S,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:D(()=>[i(d)?(t(),C(N,{key:0,code:i(p),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:m},null,8,["code"])):f("",!0)]),_:1})):f("",!0)])])}}},le=v(Z,[["__scopeId","data-v-b291a7e3"]]);export{le as default};
