import{_ as q,a as D}from"./Dw_ba-jO.js";import{_ as U}from"./Be1NRngx.js";import{m as P,B as L,_ as I,c as u,o as s,K as V,T as N,a as e,d as m,t as p,O as E,L as t,U as R,r as i,M as h,b as T,P as C,Q as S,R as g,S as _,V as w,w as M,N as $,J as z}from"./DVQnm3ND.js";import{M as H}from"./DBn-DrJ6.js";import"./GvVry5ad.js";const O=P({name:"CustomInput",props:{modelValue:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},helperText:{type:String,default:""},size:{type:String,default:"md",validator:l=>["sm","md","lg"].includes(l)}},emits:["update:modelValue","click"],setup(l){return{inputClass:L(()=>["input",`input-${l.size}`,{"input-disabled":l.disabled}])}}}),F={class:"input-container"},J={key:0},K=["type","value","placeholder","disabled","readonly"],Q={key:1,class:"helper-text"};function Y(l,r,f,v,c,x){return s(),u("div",F,[l.label||l.$slots.label?(s(),u("label",J,[N(l.$slots,"label",{},()=>[m(p(l.label),1)],!0)])):V("",!0),N(l.$slots,"prepend",{},void 0,!0),e("input",{type:l.type,value:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,readonly:"readonly"in l?l.readonly:t(R),class:E(l.inputClass),onInput:r[0]||(r[0]=b=>l.$emit("update:modelValue",b.target.value)),onClick:r[1]||(r[1]=b=>l.$emit("click"))},null,42,K),N(l.$slots,"append",{},void 0,!0),l.helperText?(s(),u("p",Q,[m(p(l.helperText)+" ",1),N(l.$slots,"default",{},void 0,!0)])):V("",!0)])}const j=I(O,[["render",Y],["__scopeId","data-v-2d074d6d"]]),G={class:"controls"},W=P({__name:"MyInput.stories",setup(l){const r=i(""),f=i("Enter Text"),v=i("text"),c=i("Type something..."),x=i(!1),b=i(!1),y=i("This is a helper text."),o=i("md"),k=i("Label"),A=()=>{console.log("click")};return(d,n)=>{const B=U;return s(),u(h,null,[n[18]||(n[18]=e("p",null,[m(" The "),e("code",null,"CustomInput"),m(" component is a versatile input field with multiple configurations. ")],-1)),n[19]||(n[19]=e("h2",null,"🛠 Interactive Controls",-1)),e("div",G,[e("label",null,[n[8]||(n[8]=m(" Label: ")),C(e("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>g(f)?f.value=a:null),type:"text"},null,512),[[S,t(f)]])]),e("label",null,[n[10]||(n[10]=m(" Type: ")),C(e("select",{"onUpdate:modelValue":n[1]||(n[1]=a=>g(v)?v.value=a:null)},n[9]||(n[9]=[e("option",{value:"text"},"Text",-1),e("option",{value:"password"},"Password",-1),e("option",{value:"email"},"Email",-1),e("option",{value:"number"},"Number",-1)]),512),[[_,t(v)]])]),e("label",null,[n[11]||(n[11]=m(" Placeholder: ")),C(e("input",{"onUpdate:modelValue":n[2]||(n[2]=a=>g(c)?c.value=a:null),type:"text"},null,512),[[S,t(c)]])]),e("label",null,[C(e("input",{"onUpdate:modelValue":n[3]||(n[3]=a=>g(x)?x.value=a:null),type:"checkbox"},null,512),[[w,t(x)]]),n[12]||(n[12]=m(" Disabled "))]),e("label",null,[C(e("input",{"onUpdate:modelValue":n[4]||(n[4]=a=>g(b)?b.value=a:null),type:"checkbox"},null,512),[[w,t(b)]]),n[13]||(n[13]=m(" Readonly "))]),e("label",null,[n[14]||(n[14]=m(" Helper Text: ")),C(e("input",{"onUpdate:modelValue":n[5]||(n[5]=a=>g(y)?y.value=a:null),type:"text"},null,512),[[S,t(y)]])]),e("label",null,[n[16]||(n[16]=m(" Size: ")),C(e("select",{"onUpdate:modelValue":n[6]||(n[6]=a=>g(o)?o.value=a:null)},n[15]||(n[15]=[e("option",{value:"sm"},"Small",-1),e("option",{value:"md"},"Medium",-1),e("option",{value:"lg"},"Large",-1)]),512),[[_,t(o)]])])]),T(B,{modelValue:t(r),"onUpdate:modelValue":n[7]||(n[7]=a=>g(r)?r.value=a:null),component:j,props:{label:t(f),type:t(v),placeholder:t(c),disabled:t(x),readonly:t(b),"helper-text":t(y),size:t(o)},emits:["click"],onClick:A},{append:M(()=>[n[17]||(n[17]=m(" test slot ")),T(H,{label:t(k)},null,8,["label"])]),_:1},8,["modelValue","props"])],64)}}}),X=I(W,[["__scopeId","data-v-dd3a44ac"]]),Z={class:"componentsbook-page"},ee={key:0},ne=["textContent"],te=["textContent"],le=["textContent"],oe=["textContent"],se=["textContent"],ae=["textContent"],de={key:1},ue=["textContent"],ie=["textContent"],pe={key:2},re=["textContent"],me=["textContent"],ye=["textContent"],be={__name:"playground_Components_MyInput",setup(l){const r=i([{name:"modelValue",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!0},{name:"label",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"type",values:"N/A",type:"String as InputProps['type']",defaultValue:"'text'",description:"N/A",required:!1},{name:"placeholder",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1},{name:"readonly",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1},{name:"helperText",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"String as InputProps['size']",defaultValue:"'md'",description:"N/A",required:!1}]),f=i([{name:"update:modelValue",description:"N/A"},{name:"click",description:"N/A"}]),v=i([{name:"label",description:"N/A",bindings:""},{name:"prepend",description:"N/A",bindings:""},{name:"append",description:"N/A",bindings:""},{name:"default",description:"N/A",bindings:""}]),c=i(!0),x=i(`<template>
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
`),b=async()=>{try{await navigator.clipboard.writeText(x.value)}catch(y){console.error("Failed to copy:",y)}};{const y=new MutationObserver(()=>{const o=document.getElementById("nuxt-devtools-container");o&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),o.remove(),y.disconnect())});y.observe(document.body,{childList:!0,subtree:!0})}return(y,o)=>{const k=D,A=q;return s(),u("div",Z,[e("div",null,[o[6]||(o[6]=e("h1",null,"🟢 MyInput Component",-1)),t(r).length?(s(),u("div",ee,[o[1]||(o[1]=e("h2",null,"🔹 Props",-1)),e("table",null,[o[0]||(o[0]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Values"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1)),e("tbody",null,[(s(!0),u(h,null,$(t(r),(d,n)=>(s(),u("tr",{key:n},[e("td",null,[e("b",{textContent:p(d.name)},null,8,ne)]),e("td",{textContent:p(d.type??"N/A")},null,8,te),e("td",{textContent:p(d.values??"N/A")},null,8,le),e("td",{textContent:p(d.required?"✅ Yes":"❌ No")},null,8,oe),e("td",{textContent:p(d.defaultValue??"N/A")},null,8,se),e("td",{textContent:p(d.description??"N/A")},null,8,ae)]))),128))])])])):V("",!0),t(f).length?(s(),u("div",de,[o[3]||(o[3]=e("h2",null,"🔹 Events",-1)),e("table",null,[o[2]||(o[2]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Description")])],-1)),e("tbody",null,[(s(!0),u(h,null,$(t(f),(d,n)=>(s(),u("tr",{key:n},[e("td",null,[e("b",{textContent:p(d.name)},null,8,ue)]),e("td",{textContent:p(d.description??"N/A")},null,8,ie)]))),128))])])])):V("",!0),t(v).length?(s(),u("div",pe,[o[5]||(o[5]=e("h2",null,"🔹 Slots",-1)),e("table",null,[o[4]||(o[4]=e("thead",null,[e("tr",null,[e("th",null,"Slot"),e("th",null,"Description"),e("th",null,"Bindings")])],-1)),e("tbody",null,[(s(!0),u(h,null,$(t(v),(d,n)=>(s(),u("tr",{key:n},[e("td",null,[e("b",{textContent:p(d.name)},null,8,re)]),e("td",{textContent:p(d.description??"N/A")},null,8,me),e("td",{textContent:p(d.bindings??"N/A")},null,8,ye)]))),128))])])])):V("",!0)]),T(X),e("div",null,[t(c)?(s(),z(A,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:M(()=>[t(c)?(s(),z(k,{key:0,code:t(x),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:b},null,8,["code"])):V("",!0)]),_:1})):V("",!0)])])}}},Ce=I(be,[["__scopeId","data-v-50694f82"]]);export{Ce as default};
