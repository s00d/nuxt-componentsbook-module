import{_ as w,a as z}from"./CtGpM317.js";import{_ as N}from"./DNnw39hr.js";import{m as M,_ as g,c as r,o as n,t as a,O as D,a as t,b as p,d as x,M as f,r as _,K as h,L as c,N as C,J as k,w as $}from"./CXqv3HIH.js";import"./BiZ0pwHu.js";const A=M({name:"MyButton",props:{label:{type:String,default:"Click me"},size:{type:String,default:"md",validator:d=>["sm","md","lg"].includes(d)},variant:{type:String,default:"primary",validator:d=>["primary","secondary","danger"].includes(d)}},emits:["click"],computed:{buttonClass(){return["btn",`btn-${this.variant}`,`btn-${this.size}`]}},methods:{handleClick(){this.$emit("click")}}});function V(d,l,y,s,i,v){return n(),r("button",{class:D(d.buttonClass),onClick:l[0]||(l[0]=(...m)=>d.handleClick&&d.handleClick(...m))},a(d.label),3)}const u=g(A,[["render",V]]),P={__name:"MyButton2.stories",setup(d){const l={label:{fieldType:"text"},variant:{fieldType:"select",options:["primary","secondary","danger"]},size:{fieldType:"select",options:["sm","md","lg"]}};return(y,s)=>{const i=N;return n(),r(f,null,[s[0]||(s[0]=t("p",null,[x(" The "),t("code",null,"MyButton2"),x(" component is used to display a button with different styles and sizes. ")],-1)),s[1]||(s[1]=t("h2",null,"🛠 Usage Examples",-1)),p(i,{title:"Simple Button",component:u,props:{label:"Click Me"},"component-props-meta":l}),s[2]||(s[2]=t("h3",null,"🔹 Different Styles",-1)),p(i,{title:"Primary Button Styles",component:u,props:{label:"Primary",variant:"primary"},"component-props-meta":l}),p(i,{title:"Secondary Button Styles",component:u,props:{label:"Secondary",variant:"secondary"},"component-props-meta":l}),p(i,{title:"Danger Button Styles",component:u,props:{label:"Danger",variant:"danger"},"component-props-meta":l}),s[3]||(s[3]=t("h3",null,"🔹 Different Sizes",-1)),p(i,{title:"Small Button Size",component:u,props:{label:"Small",size:"sm"},"component-props-meta":l}),p(i,{title:"Medium Button Size",component:u,props:{label:"Medium",size:"md"},"component-props-meta":l}),p(i,{title:"Large Button Size",component:u,props:{label:"Large",size:"lg"},"component-props-meta":l})],64)}}},T=g(P,[["__scopeId","data-v-6b5b91c3"]]),q={class:"componentsbook-page"},E={key:0},L={class:"table"},I={class:"table-body"},O={class:"table-cell"},R=["textContent"],F=["textContent"],H=["textContent"],J=["textContent"],K=["textContent"],U=["textContent"],Y={key:1},j={class:"table"},G={class:"table-body"},Q={class:"table-cell"},W=["textContent"],X=["textContent"],Z={key:2},tt={class:"table"},et={class:"table-body"},nt={class:"table-cell"},lt=["textContent"],ot=["textContent"],st=["textContent"],at={__name:"playground_Components_MyButton2",setup(d){const l=_([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"primary | secondary | danger",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),y=_([{name:"click",description:"N/A"}]),s=_([]),i=_(!0),v=_(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Click me',
    },
    size: {
      type: String,
      default: 'md',
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value),
    },
  },
  emits: ['click'],
  computed: {
    buttonClass(): string[] {
      return [
        'btn',
        \`btn-\${this.variant}\`,
        \`btn-\${this.size}\`,
      ]
    },
  },
  methods: {
    handleClick() {
      this.$emit('click') // Испускаем событие клика
    },
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
`);{const m=new MutationObserver(()=>{const e=document.getElementById("nuxt-devtools-container");e&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),e.remove(),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0})}return(m,e)=>{const S=z,B=w;return n(),r("div",q,[t("div",null,[e[6]||(e[6]=t("h1",null,"🟢 MyButton2 Component",-1)),c(l).length?(n(),r("div",E,[e[1]||(e[1]=t("h2",null,"🔹 Props",-1)),t("table",L,[e[0]||(e[0]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Type "),t("th",{class:"table-header-cell"}," Values "),t("th",{class:"table-header-cell"}," Required "),t("th",{class:"table-header-cell"}," Default Value "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",I,[(n(!0),r(f,null,C(c(l),(o,b)=>(n(),r("tr",{key:b,class:"table-row"},[t("td",O,[t("b",{textContent:a(o.name)},null,8,R)]),t("td",{class:"table-cell",textContent:a(o.type??"N/A")},null,8,F),t("td",{class:"table-cell",textContent:a(o.values??"N/A")},null,8,H),t("td",{class:"table-cell",textContent:a(o.required?"✅ Yes":"❌ No")},null,8,J),t("td",{class:"table-cell",textContent:a(o.defaultValue??"N/A")},null,8,K),t("td",{class:"table-cell",textContent:a(o.description??"N/A")},null,8,U)]))),128))])])])):h("",!0),c(y).length?(n(),r("div",Y,[e[3]||(e[3]=t("h2",null,"🔹 Events",-1)),t("table",j,[e[2]||(e[2]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",G,[(n(!0),r(f,null,C(c(y),(o,b)=>(n(),r("tr",{key:b,class:"table-row"},[t("td",Q,[t("b",{textContent:a(o.name)},null,8,W)]),t("td",{class:"table-cell",textContent:a(o.description??"N/A")},null,8,X)]))),128))])])])):h("",!0),c(s).length?(n(),r("div",Z,[e[5]||(e[5]=t("h2",null,"🔹 Slots",-1)),t("table",tt,[e[4]||(e[4]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Slot "),t("th",{class:"table-header-cell"}," Description "),t("th",{class:"table-header-cell"}," Bindings ")])],-1)),t("tbody",et,[(n(!0),r(f,null,C(c(s),(o,b)=>(n(),r("tr",{key:b,class:"table-row"},[t("td",nt,[t("b",{textContent:a(o.name)},null,8,lt)]),t("td",{class:"table-cell",textContent:a(o.description??"N/A")},null,8,ot),t("td",{class:"table-cell",textContent:a(o.bindings??"N/A")},null,8,st)]))),128))])])])):h("",!0)]),p(T),t("div",null,[c(i)?(n(),k(B,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:$(()=>[c(i)?(n(),k(S,{key:0,code:c(v),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):h("",!0)]),_:1})):h("",!0)])])}}},pt=g(at,[["__scopeId","data-v-9eae0806"]]);export{pt as default};
