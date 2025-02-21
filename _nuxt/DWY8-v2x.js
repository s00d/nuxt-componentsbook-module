import{_ as N,a as w}from"./Dw_ba-jO.js";import{_ as $}from"./Be1NRngx.js";import{m as D,_ as x,c as r,o as e,t as s,O as M,a as t,b as d,d as k,M as C,r as b,K as _,L as u,N as v,J as S,w as A}from"./DVQnm3ND.js";import"./GvVry5ad.js";const V=D({name:"MyButton",props:{label:{type:String,default:"Click me"},size:{type:String,default:"md",validator:a=>["sm","md","lg"].includes(a)},variant:{type:String,default:"primary",validator:a=>["primary","secondary","danger"].includes(a)}},emits:["click"],computed:{buttonClass(){return["btn",`btn-${this.variant}`,`btn-${this.size}`]}},methods:{handleClick(){this.$emit("click")}}});function P(a,c,l,i,f,g){return e(),r("button",{class:M(a.buttonClass),onClick:c[0]||(c[0]=(...h)=>a.handleClick&&a.handleClick(...h))},s(a.label),3)}const p=x(V,[["render",P]]),T={class:"button-group"},q={class:"button-group"},E={__name:"MyButton2.stories",setup(a){return(c,l)=>{const i=$;return e(),r(C,null,[l[0]||(l[0]=t("p",null,[k(" The "),t("code",null,"MyButton2"),k(" component is used to display a button with different styles and sizes. ")],-1)),l[1]||(l[1]=t("h2",null,"🛠 Usage Examples",-1)),d(i,{title:"Simple Button",component:p,props:{label:"Click Me"}}),l[2]||(l[2]=t("h3",null,"🔹 Different Styles",-1)),t("div",T,[d(i,{title:"Primary Button Styles",component:p,props:{label:"Primary",variant:"primary"}}),d(i,{title:"Secondary Button Styles",component:p,props:{label:"Secondary",variant:"secondary"}}),d(i,{title:"Danger Button Styles",component:p,props:{label:"Danger",variant:"danger"}})]),l[3]||(l[3]=t("h3",null,"🔹 Different Sizes",-1)),t("div",q,[d(i,{title:"Small Button Size",component:p,props:{label:"Small",size:"sm"}}),d(i,{title:"Medium Button Size",component:p,props:{label:"Medium",size:"md"}}),d(i,{title:"Large Button Size",component:p,props:{label:"Large",size:"lg"}})])],64)}}},L=x(E,[["__scopeId","data-v-10735708"]]),I={class:"componentsbook-page"},O={key:0},F=["textContent"],R=["textContent"],H=["textContent"],J=["textContent"],K=["textContent"],U=["textContent"],Y={key:1},j=["textContent"],G=["textContent"],Q={key:2},W=["textContent"],X=["textContent"],Z=["textContent"],tt={__name:"playground_Components_MyButton2",setup(a){const c=b([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"primary | secondary | danger",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),l=b([{name:"click",description:"N/A"}]),i=b([]),f=b(!0),g=b(`<template>
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
`),h=async()=>{try{await navigator.clipboard.writeText(g.value)}catch(m){console.error("Failed to copy:",m)}};{const m=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0})}return(m,n)=>{const B=w,z=N;return e(),r("div",I,[t("div",null,[n[6]||(n[6]=t("h1",null,"🟢 MyButton2 Component",-1)),u(c).length?(e(),r("div",O,[n[1]||(n[1]=t("h2",null,"🔹 Props",-1)),t("table",null,[n[0]||(n[0]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Values"),t("th",null,"Required"),t("th",null,"Default Value"),t("th",null,"Description")])],-1)),t("tbody",null,[(e(!0),r(C,null,v(u(c),(o,y)=>(e(),r("tr",{key:y},[t("td",null,[t("b",{textContent:s(o.name)},null,8,F)]),t("td",{textContent:s(o.type??"N/A")},null,8,R),t("td",{textContent:s(o.values??"N/A")},null,8,H),t("td",{textContent:s(o.required?"✅ Yes":"❌ No")},null,8,J),t("td",{textContent:s(o.defaultValue??"N/A")},null,8,K),t("td",{textContent:s(o.description??"N/A")},null,8,U)]))),128))])])])):_("",!0),u(l).length?(e(),r("div",Y,[n[3]||(n[3]=t("h2",null,"🔹 Events",-1)),t("table",null,[n[2]||(n[2]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Description")])],-1)),t("tbody",null,[(e(!0),r(C,null,v(u(l),(o,y)=>(e(),r("tr",{key:y},[t("td",null,[t("b",{textContent:s(o.name)},null,8,j)]),t("td",{textContent:s(o.description??"N/A")},null,8,G)]))),128))])])])):_("",!0),u(i).length?(e(),r("div",Q,[n[5]||(n[5]=t("h2",null,"🔹 Slots",-1)),t("table",null,[n[4]||(n[4]=t("thead",null,[t("tr",null,[t("th",null,"Slot"),t("th",null,"Description"),t("th",null,"Bindings")])],-1)),t("tbody",null,[(e(!0),r(C,null,v(u(i),(o,y)=>(e(),r("tr",{key:y},[t("td",null,[t("b",{textContent:s(o.name)},null,8,W)]),t("td",{textContent:s(o.description??"N/A")},null,8,X),t("td",{textContent:s(o.bindings??"N/A")},null,8,Z)]))),128))])])])):_("",!0)]),d(L),t("div",null,[u(f)?(e(),S(z,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:A(()=>[u(f)?(e(),S(B,{key:0,code:u(g),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:h},null,8,["code"])):_("",!0)]),_:1})):_("",!0)])])}}},st=x(tt,[["__scopeId","data-v-c51a380d"]]);export{st as default};
