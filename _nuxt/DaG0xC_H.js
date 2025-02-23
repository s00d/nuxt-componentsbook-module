import{_ as I,a as z}from"./CtGpM317.js";import{_ as B}from"./DNnw39hr.js";import{m as $,B as P,_ as A,c as a,o as s,K as m,T as g,a as e,d as b,t as i,O as q,L as l,U as M,r as d,M as x,b as k,R as D,w as V,N,J as T}from"./CXqv3HIH.js";import{M as E}from"./DXMUzbGj.js";import"./BiZ0pwHu.js";const L=$({name:"CustomInput",props:{modelValue:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},helperText:{type:String,default:""},size:{type:String,default:"md",validator:t=>["sm","md","lg"].includes(t)}},emits:["update:modelValue","click"],setup(t){return{inputClass:P(()=>["input",`input-${t.size}`,{"input-disabled":t.disabled}])}}}),R={class:"input-container"},O={key:0},H=["type","value","placeholder","disabled","readonly"],U={key:1,class:"helper-text"};function F(t,r,y,f,h,_){return s(),a("div",R,[t.label||t.$slots.label?(s(),a("label",O,[g(t.$slots,"label",{},()=>[b(i(t.label),1)],!0)])):m("",!0),g(t.$slots,"prepend",{},void 0,!0),e("input",{type:t.type,value:t.modelValue,placeholder:t.placeholder,disabled:t.disabled,readonly:"readonly"in t?t.readonly:l(M),class:q(t.inputClass),onInput:r[0]||(r[0]=p=>t.$emit("update:modelValue",p.target.value)),onClick:r[1]||(r[1]=p=>t.$emit("click"))},null,42,H),g(t.$slots,"append",{},void 0,!0),t.helperText?(s(),a("p",U,[b(i(t.helperText)+" ",1),g(t.$slots,"default",{},void 0,!0)])):m("",!0)])}const J=A(L,[["render",F],["__scopeId","data-v-2d074d6d"]]),K=$({__name:"MyInput.stories",setup(t){const r=d(""),y=d("Enter Text"),f=d("text"),h=d("Type something..."),_=d(!1),p=d(!1),n=d("This is a helper text."),v=d("md"),C=d("Label"),o=()=>{console.log("click")},c={label:{fieldType:"text"},type:{fieldType:"select",options:["text","password","email","number"]},placeholder:{fieldType:"text"},disabled:{fieldType:"checkbox"},readonly:{fieldType:"checkbox"},"helper-text":{fieldType:"text"},size:{fieldType:"select",options:["sm","md","lg"]}};return(ge,u)=>{const S=B;return s(),a(x,null,[u[3]||(u[3]=e("p",null,[b(" The "),e("code",null,"CustomInput"),b(" component is a versatile input field with multiple configurations. ")],-1)),k(S,{modelValue:l(r),"onUpdate:modelValue":u[0]||(u[0]=w=>D(r)?r.value=w:null),component:J,props:{label:l(y),type:l(f),placeholder:l(h),disabled:l(_),readonly:l(p),"helper-text":l(n),size:l(v)},"component-props-meta":c,emits:["click"],onClick:o},{append:V(()=>[u[2]||(u[2]=b(" test slot ")),k(E,{label:l(C)},{default:V(()=>u[1]||(u[1]=[e("div",null,"block",-1),b(" slot text ")])),_:1},8,["label"])]),_:1},8,["modelValue","props"])],64)}}}),Y=A(K,[["__scopeId","data-v-e0e6705a"]]),j={class:"componentsbook-page"},G={key:0},Q={class:"table"},W={class:"table-body"},X={class:"table-cell"},Z=["textContent"],ee=["textContent"],te=["textContent"],ne=["textContent"],le=["textContent"],se=["textContent"],oe={key:1},ae={class:"table"},de={class:"table-body"},ie={class:"table-cell"},re=["textContent"],pe=["textContent"],ue={key:2},ce={class:"table"},me={class:"table-body"},be={class:"table-cell"},ye=["textContent"],fe=["textContent"],he=["textContent"],_e={__name:"playground_Components_MyInput",setup(t){const r=d([{name:"modelValue",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!0},{name:"label",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"type",values:"N/A",type:"String as InputProps['type']",defaultValue:"'text'",description:"N/A",required:!1},{name:"placeholder",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1},{name:"readonly",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1},{name:"helperText",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"String as InputProps['size']",defaultValue:"'md'",description:"N/A",required:!1}]),y=d([{name:"update:modelValue",description:"N/A"},{name:"click",description:"N/A"}]),f=d([{name:"label",description:"N/A",bindings:""},{name:"prepend",description:"N/A",bindings:""},{name:"append",description:"N/A",bindings:""},{name:"default",description:"N/A",bindings:""}]),h=d(!0),_=d(`<template>
  <div class="input-container">
    <!-- Слот label (если не заполнен, используется prop label) -->
    <label v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </label>

    <!-- Слот prepend -->
    <slot name="prepend" />

    <!-- Основной input -->
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :class="inputClass"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @click="$emit('click')"
    >

    <!-- Слот append -->
    <slot name="append" />

    <!-- helper-text, если есть -->
    <p
      v-if="helperText"
      class="helper-text"
    >
      {{ helperText }}
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '#imports'

interface InputProps {
  modelValue: string
  label?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  helperText?: string
  size?: 'sm' | 'md' | 'lg'
}

export default defineComponent({
  name: 'CustomInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String as () => InputProps['type'],
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    helperText: {
      type: String,
      default: '',
    },
    size: {
      type: String as () => InputProps['size'],
      default: 'md',
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
  },
  emits: ['update:modelValue', 'click'],
  setup(props: InputProps) {
    const inputClass = computed(() => [
      'input',
      \`input-\${props.size}\`,
      { 'input-disabled': props.disabled },
    ])

    return {
      inputClass,
    }
  },
})
<\/script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
label {
  font-weight: bold;
}
.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.3s;
}
.input-sm {
  font-size: 12px;
  padding: 5px;
}
.input-md {
  font-size: 16px;
  padding: 10px;
}
.input-lg {
  font-size: 20px;
  padding: 15px;
}
.input-disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
.helper-text {
  font-size: 12px;
  color: gray;
}
</style>
`);{const p=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),p.disconnect())});p.observe(document.body,{childList:!0,subtree:!0})}return(p,n)=>{const v=z,C=I;return s(),a("div",j,[e("div",null,[n[6]||(n[6]=e("h1",null,"🟢 MyInput Component",-1)),l(r).length?(s(),a("div",G,[n[1]||(n[1]=e("h2",null,"🔹 Props",-1)),e("table",Q,[n[0]||(n[0]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Type "),e("th",{class:"table-header-cell"}," Values "),e("th",{class:"table-header-cell"}," Required "),e("th",{class:"table-header-cell"}," Default Value "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",W,[(s(!0),a(x,null,N(l(r),(o,c)=>(s(),a("tr",{key:c,class:"table-row"},[e("td",X,[e("b",{textContent:i(o.name)},null,8,Z)]),e("td",{class:"table-cell",textContent:i(o.type??"N/A")},null,8,ee),e("td",{class:"table-cell",textContent:i(o.values??"N/A")},null,8,te),e("td",{class:"table-cell",textContent:i(o.required?"✅ Yes":"❌ No")},null,8,ne),e("td",{class:"table-cell",textContent:i(o.defaultValue??"N/A")},null,8,le),e("td",{class:"table-cell",textContent:i(o.description??"N/A")},null,8,se)]))),128))])])])):m("",!0),l(y).length?(s(),a("div",oe,[n[3]||(n[3]=e("h2",null,"🔹 Events",-1)),e("table",ae,[n[2]||(n[2]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Prop "),e("th",{class:"table-header-cell"}," Description ")])],-1)),e("tbody",de,[(s(!0),a(x,null,N(l(y),(o,c)=>(s(),a("tr",{key:c,class:"table-row"},[e("td",ie,[e("b",{textContent:i(o.name)},null,8,re)]),e("td",{class:"table-cell",textContent:i(o.description??"N/A")},null,8,pe)]))),128))])])])):m("",!0),l(f).length?(s(),a("div",ue,[n[5]||(n[5]=e("h2",null,"🔹 Slots",-1)),e("table",ce,[n[4]||(n[4]=e("thead",{class:"table-thead"},[e("tr",{class:"table-header-row"},[e("th",{class:"table-header-cell"}," Slot "),e("th",{class:"table-header-cell"}," Description "),e("th",{class:"table-header-cell"}," Bindings ")])],-1)),e("tbody",me,[(s(!0),a(x,null,N(l(f),(o,c)=>(s(),a("tr",{key:c,class:"table-row"},[e("td",be,[e("b",{textContent:i(o.name)},null,8,ye)]),e("td",{class:"table-cell",textContent:i(o.description??"N/A")},null,8,fe),e("td",{class:"table-cell",textContent:i(o.bindings??"N/A")},null,8,he)]))),128))])])])):m("",!0)]),k(Y),e("div",null,[l(h)?(s(),T(C,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:V(()=>[l(h)?(s(),T(v,{key:0,code:l(_),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):m("",!0)]),_:1})):m("",!0)])])}}},Ve=A(_e,[["__scopeId","data-v-140bdf82"]]);export{Ve as default};
