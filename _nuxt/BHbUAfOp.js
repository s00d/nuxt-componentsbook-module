import{_ as S,a as A}from"./CtGpM317.js";import{_ as $}from"./DNnw39hr.js";import{m as C,_ as k,c as l,o as n,a as e,O as w,r as u,M as f,b as v,d as x,L as d,R as B,K as m,N as g,J as y,w as T,t as o}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const D=C({name:"CustomSwitch",props:{modelValue:{type:Boolean,required:!0},color:{type:String,default:"primary"},size:{type:String,default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"]}),P=["checked","disabled"];function q(r,a,p,b,i,_){return n(),l("label",{class:w(["switch",`switch-${r.size}`,{"switch-disabled":r.disabled}])},[e("input",{type:"checkbox",checked:r.modelValue,disabled:r.disabled,onChange:a[0]||(a[0]=c=>r.$emit("update:modelValue",c.target.checked))},null,40,P),e("span",{class:w(["slider",`slider-${r.color}`])},null,2)],2)}const z=k(D,[["render",q],["__scopeId","data-v-11be221a"]]),E=C({__name:"CustomSwitch.stories",setup(r){const a=u(!1),p=()=>{console.log("Switch toggled:",a.value)};return(b,i)=>{const _=$;return n(),l(f,null,[i[1]||(i[1]=e("p",null,[x(" The "),e("code",null,"CustomSwitch"),x(" component acts as a toggle switch. ")],-1)),v(_,{modelValue:d(a),"onUpdate:modelValue":[i[0]||(i[0]=c=>B(a)?a.value=c:null),p],component:z,emits:["update:modelValue"],name:"lib-custom-switch"},null,8,["modelValue"])],64)}}}),I={class:"componentsbook-page"},L={key:0},M={class:"table"},R={class:"table-body"},O={class:"table-cell"},H=["textContent"],Y=["textContent"],F=["textContent"],J=["textContent"],K=["textContent"],U=["textContent"],j={key:1},G={class:"table"},Q={class:"table-body"},W={class:"table-cell"},X=["textContent"],Z=["textContent"],ee={key:2},te={class:"table"},ne={class:"table-body"},se={class:"table-cell"},le=["textContent"],oe=["textContent"],ae=["textContent"],de={__name:"playground_Components_lib_CustomSwitch",setup(r){const a=u([{name:"modelValue",values:"N/A",type:"boolean",defaultValue:"N/A",description:"N/A",required:!0},{name:"color",values:"primary | success | danger | warning",type:"string",defaultValue:"'primary'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1}]),p=u([{name:"update:modelValue",description:"N/A"}]),b=u([]),i=u(!0),_=u(`<template>
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
`);{const c=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),t.remove(),c.disconnect())});c.observe(document.body,{childList:!0,subtree:!0})}return(c,t)=>{const V=A,N=S;return n(),l("div",I,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 CustomSwitch Component",-1)),d(a).length?(n(),l("div",L,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",M,[t[0]||(t[0]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Type "),e("th",{class:"table-header-cell"}," Values "),e("th",{class:"table-header-cell"}," Required "),e("th",{class:"table-header-cell"}," Default Value "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",R,[(n(!0),l(f,null,g(d(a),(s,h)=>(n(),l("tr",{key:h,class:"table-row"},[e("td",O,[e("b",{textContent:o(s.name)},null,8,H)]),e("td",{class:"table-cell",textContent:o(s.type??"N/A")},null,8,Y),e("td",{class:"table-cell",textContent:o(s.values??"N/A")},null,8,F),e("td",{class:"table-cell",textContent:o(s.required?"✅ Yes":"❌ No")},null,8,J),e("td",{class:"table-cell",textContent:o(s.defaultValue??"N/A")},null,8,K),e("td",{class:"table-cell",textContent:o(s.description??"N/A")},null,8,U)]))),128))])])])):m("",!0),d(p).length?(n(),l("div",j,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",G,[t[2]||(t[2]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",Q,[(n(!0),l(f,null,g(d(p),(s,h)=>(n(),l("tr",{key:h,class:"table-row"},[e("td",W,[e("b",{textContent:o(s.name)},null,8,X)]),e("td",{class:"table-cell",textContent:o(s.description??"N/A")},null,8,Z)]))),128))])])])):m("",!0),d(b).length?(n(),l("div",ee,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",te,[t[4]||(t[4]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Slot "),e("th",{class:"table-header-cell"}," Description "),e("th",{class:"table-header-cell"}," Bindings ")])],-1)),e("tbody",ne,[(n(!0),l(f,null,g(d(b),(s,h)=>(n(),l("tr",{key:h,class:"table-row"},[e("td",se,[e("b",{textContent:o(s.name)},null,8,le)]),e("td",{class:"table-cell",textContent:o(s.description??"N/A")},null,8,oe),e("td",{class:"table-cell",textContent:o(s.bindings??"N/A")},null,8,ae)]))),128))])])])):m("",!0)]),v(E),e("div",null,[d(i)?(n(),y(N,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:T(()=>[d(i)?(n(),y(V,{key:0,code:d(_),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):m("",!0)]),_:1})):m("",!0)])])}}},pe=k(de,[["__scopeId","data-v-6f5105d3"]]);export{pe as default};
