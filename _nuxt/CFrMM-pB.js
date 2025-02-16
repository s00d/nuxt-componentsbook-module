import{u as q,_ as B}from"./DXmpYz1O.js";import{m as I,B as M,_ as S,c as d,o as s,L as c,T as N,a as e,O as w,J as r,U as _,d as i,t as a,r as p,M as V,K as U,b as k,Q as g,R as h,S as T,V as $,P as E,N as A}from"./BlUxIf_E.js";const L=I({name:"CustomInput",props:{modelValue:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},helperText:{type:String,default:""},size:{type:String,default:"md",validator:l=>["sm","md","lg"].includes(l)}},emits:["update:modelValue"],setup(l){return{inputClass:M(()=>["input",`input-${l.size}`,{"input-disabled":l.disabled}])}}}),O={class:"input-container"},R={key:0},G=["type","value","placeholder","disabled","readonly"],H={key:1,class:"helper-text"};function F(l,y,b,v,x,C){return s(),d("div",O,[l.label||l.$slots.label?(s(),d("label",R,[N(l.$slots,"label",{},()=>[i(a(l.label),1)])])):c("",!0),N(l.$slots,"prepend",{},void 0),e("input",{type:l.type,value:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,readonly:"readonly"in l?l.readonly:r(_),class:w(l.inputClass),onInput:y[0]||(y[0]=m=>l.$emit("update:modelValue",m.target.value))},null,42,G),N(l.$slots,"append",{},void 0),l.helperText?(s(),d("p",H,[i(a(l.helperText)+" ",1),N(l.$slots,"default",{},void 0)])):c("",!0)])}const J=S(L,[["render",F],["__scopeId","data-v-dec29970"]]),K={class:"controls"},Q=I({__name:"MyInput.stories",setup(l){const y=p(""),b=p("Enter Text"),v=p("text"),x=p("Type something..."),C=p(!1),m=p(!1),t=p("This is a helper text."),o=p("md"),{renderedComponent:f,generatedCode:z,copyToClipboard:D}=q(J,{id:"input","v-model":y,label:b,type:v,placeholder:x,disabled:C,readonly:m,"helper-text":t,size:o});return(ve,n)=>{const P=B;return s(),d(V,null,[n[16]||(n[16]=e("p",null,[i(" The "),e("code",null,"CustomInput"),i(" component is a versatile input field with multiple configurations. ")],-1)),n[17]||(n[17]=e("h2",null,"🛠 Interactive Controls",-1)),e("div",K,[e("label",null,[n[7]||(n[7]=i(" Label: ")),g(e("input",{"onUpdate:modelValue":n[0]||(n[0]=u=>b.value=u),type:"text"},null,512),[[h,b.value]])]),e("label",null,[n[9]||(n[9]=i(" Type: ")),g(e("select",{"onUpdate:modelValue":n[1]||(n[1]=u=>v.value=u)},n[8]||(n[8]=[e("option",{value:"text"},"Text",-1),e("option",{value:"password"},"Password",-1),e("option",{value:"email"},"Email",-1),e("option",{value:"number"},"Number",-1)]),512),[[T,v.value]])]),e("label",null,[n[10]||(n[10]=i(" Placeholder: ")),g(e("input",{"onUpdate:modelValue":n[2]||(n[2]=u=>x.value=u),type:"text"},null,512),[[h,x.value]])]),e("label",null,[g(e("input",{"onUpdate:modelValue":n[3]||(n[3]=u=>C.value=u),type:"checkbox"},null,512),[[$,C.value]]),n[11]||(n[11]=i(" Disabled "))]),e("label",null,[g(e("input",{"onUpdate:modelValue":n[4]||(n[4]=u=>m.value=u),type:"checkbox"},null,512),[[$,m.value]]),n[12]||(n[12]=i(" Readonly "))]),e("label",null,[n[13]||(n[13]=i(" Helper Text: ")),g(e("input",{"onUpdate:modelValue":n[5]||(n[5]=u=>t.value=u),type:"text"},null,512),[[h,t.value]])]),e("label",null,[n[15]||(n[15]=i(" Size: ")),g(e("select",{"onUpdate:modelValue":n[6]||(n[6]=u=>o.value=u)},n[14]||(n[14]=[e("option",{value:"sm"},"Small",-1),e("option",{value:"md"},"Medium",-1),e("option",{value:"lg"},"Large",-1)]),512),[[T,o.value]])])]),n[18]||(n[18]=e("h2",null,"🔹 Preview",-1)),(s(),U(E(r(f)))),n[19]||(n[19]=e("h2",null,"📋 Generated Code",-1)),k(P,{"generated-code":r(z),"copy-to-clipboard":r(D)},null,8,["generated-code","copy-to-clipboard"])],64)}}}),Y=S(Q,[["__scopeId","data-v-57df6880"]]),j={class:"componentsbook-page"},W={key:0},X=["textContent"],Z=["textContent"],ee=["textContent"],ne=["textContent"],te=["textContent"],le=["textContent"],oe={key:1},se=["textContent"],de=["textContent"],ae={key:2},ue=["textContent"],ie=["textContent"],pe=["textContent"],re={key:0,class:"code-spoiler"},me={class:"code-block"},ye=["textContent"],be={__name:"playground_Components_MyInput",setup(l){const y=p([{name:"modelValue",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!0},{name:"label",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"type",values:"N/A",type:"String as InputProps['type']",defaultValue:"'text'",description:"N/A",required:!1},{name:"placeholder",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"disabled",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1},{name:"readonly",values:"N/A",type:"boolean",defaultValue:"false",description:"N/A",required:!1},{name:"helperText",values:"N/A",type:"string",defaultValue:"''",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"String as InputProps['size']",defaultValue:"'md'",description:"N/A",required:!1}]),b=p([{name:"update:modelValue",description:"N/A"}]),v=p([{name:"label",description:"N/A",bindings:""},{name:"prepend",description:"N/A",bindings:""},{name:"append",description:"N/A",bindings:""},{name:"default",description:"N/A",bindings:""}]),x=p(!0),C=p(`<template>
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
import { defineComponent, computed } from 'vue'

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
  emits: ['update:modelValue'],
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
`);{const m=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Удаляем Nuxt DevTools из DOM"),t.remove(),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0})}return(m,t)=>(s(),d("div",j,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 MyInput Component",-1)),r(y).length?(s(),d("div",W,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",null,[t[0]||(t[0]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Values"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1)),e("tbody",null,[(s(!0),d(V,null,A(r(y),(o,f)=>(s(),d("tr",{key:f},[e("td",null,[e("b",{textContent:a(o.name)},null,8,X)]),e("td",{textContent:a(o.type??"N/A")},null,8,Z),e("td",{textContent:a(o.values??"N/A")},null,8,ee),e("td",{textContent:a(o.required?"✅ Yes":"❌ No")},null,8,ne),e("td",{textContent:a(o.defaultValue??"N/A")},null,8,te),e("td",{textContent:a(o.description??"N/A")},null,8,le)]))),128))])])])):c("",!0),r(b).length?(s(),d("div",oe,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",null,[t[2]||(t[2]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Description")])],-1)),e("tbody",null,[(s(!0),d(V,null,A(r(b),(o,f)=>(s(),d("tr",{key:f},[e("td",null,[e("b",{textContent:a(o.name)},null,8,se)]),e("td",{textContent:a(o.description??"N/A")},null,8,de)]))),128))])])])):c("",!0),r(v).length?(s(),d("div",ae,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",null,[t[4]||(t[4]=e("thead",null,[e("tr",null,[e("th",null,"Slot"),e("th",null,"Description"),e("th",null,"Bindings")])],-1)),e("tbody",null,[(s(!0),d(V,null,A(r(v),(o,f)=>(s(),d("tr",{key:f},[e("td",null,[e("b",{textContent:a(o.name)},null,8,ue)]),e("td",{textContent:a(o.description??"N/A")},null,8,ie),e("td",{textContent:a(o.bindings??"N/A")},null,8,pe)]))),128))])])])):c("",!0)]),k(Y),`${r(x)}`?(s(),d("details",re,[t[9]||(t[9]=e("summary",null,"Source code",-1)),e("pre",me,[t[7]||(t[7]=i("        ")),e("code",{class:"highlighted-code",textContent:a(r(C))},null,8,ye),t[8]||(t[8]=i(`
      `))])])):c("",!0)]))}},xe=S(be,[["__scopeId","data-v-d5256844"]]);export{xe as default};
