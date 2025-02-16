import{u as C,_ as O}from"./DXmpYz1O.js";import{m as F,_ as B,c as r,o,t as d,O as G,a as e,K as b,b as i,d as T,P as y,J as n,M as N,r as _,L as k,N as S}from"./BlUxIf_E.js";const J=F({name:"MyButton",props:{label:{type:String,default:"Click me"},size:{type:String,default:"md",validator:s=>["sm","md","lg"].includes(s)},variant:{type:String,default:"primary",validator:s=>["primary","secondary","danger"].includes(s)}},emits:["click"],computed:{buttonClass(){return["btn",`btn-${this.variant}`,`btn-${this.size}`]}},methods:{handleClick(){this.$emit("click")}}});function K(s,u,f,v,h,x){return o(),r("button",{class:G(s.buttonClass),onClick:u[0]||(u[0]=(...p)=>s.handleClick&&s.handleClick(...p))},d(s.label),3)}const g=B(J,[["render",K]]),R={class:"button-group"},U={class:"button-group"},Y={__name:"MyButton2.stories",setup(s){const{renderedComponent:u,generatedCode:f,copyToClipboard:v}=C(g,{label:"Click Me"}),{renderedComponent:h,generatedCode:x,copyToClipboard:p}=C(g,{label:"Primary",variant:"primary"}),{renderedComponent:t,generatedCode:l,copyToClipboard:c}=C(g,{label:"Secondary",variant:"secondary"}),{renderedComponent:$,generatedCode:z,copyToClipboard:D}=C(g,{label:"Danger",variant:"danger"}),{renderedComponent:M,generatedCode:A,copyToClipboard:V}=C(g,{label:"Small",size:"sm"}),{renderedComponent:w,generatedCode:q,copyToClipboard:P}=C(g,{label:"Medium",size:"md"}),{renderedComponent:E,generatedCode:L,copyToClipboard:I}=C(g,{label:"Large",size:"lg"});return(Ce,a)=>{const m=O;return o(),r(N,null,[a[0]||(a[0]=e("p",null,[T(" The "),e("code",null,"MyButton2"),T(" component is used to display a button with different styles and sizes. ")],-1)),a[1]||(a[1]=e("h2",null,"🛠 Usage Examples",-1)),a[2]||(a[2]=e("h3",null,"🟢 Simple Button",-1)),(o(),b(y(n(u)))),i(m,{"generated-code":n(f),"copy-to-clipboard":n(v)},null,8,["generated-code","copy-to-clipboard"]),a[3]||(a[3]=e("h3",null,"🔹 Different Styles",-1)),e("div",R,[e("div",null,[(o(),b(y(n(h)))),i(m,{"generated-code":n(x),"copy-to-clipboard":n(p)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(y(n(t)))),i(m,{"generated-code":n(l),"copy-to-clipboard":n(c)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(y(n($)))),i(m,{"generated-code":n(z),"copy-to-clipboard":n(D)},null,8,["generated-code","copy-to-clipboard"])])]),a[4]||(a[4]=e("h3",null,"🔹 Different Sizes",-1)),e("div",U,[e("div",null,[(o(),b(y(n(M)))),i(m,{"generated-code":n(A),"copy-to-clipboard":n(V)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(y(n(w)))),i(m,{"generated-code":n(q),"copy-to-clipboard":n(P)},null,8,["generated-code","copy-to-clipboard"])]),e("div",null,[(o(),b(y(n(E)))),i(m,{"generated-code":n(L),"copy-to-clipboard":n(I)},null,8,["generated-code","copy-to-clipboard"])])])],64)}}},j=B(Y,[["__scopeId","data-v-1fefccdf"]]),H={class:"componentsbook-page"},Q={key:0},W=["textContent"],X=["textContent"],Z=["textContent"],ee=["textContent"],ne=["textContent"],te=["textContent"],oe={key:1},le=["textContent"],de=["textContent"],re={key:2},se=["textContent"],ae=["textContent"],ie=["textContent"],ue={key:0,class:"code-spoiler"},pe={class:"code-block"},ce=["textContent"],me={__name:"playground_Components_MyButton2",setup(s){const u=_([{name:"label",values:"N/A",type:"string",defaultValue:"'Click me'",description:"N/A",required:!1},{name:"size",values:"sm | md | lg",type:"string",defaultValue:"'md'",description:"N/A",required:!1},{name:"variant",values:"primary | secondary | danger",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),f=_([{name:"click",description:"N/A"}]),v=_([]),h=_(!0),x=_(`<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
`);{const p=new MutationObserver(()=>{const t=document.getElementById("nuxt-devtools-container");t&&(console.log("[componentsbook] Удаляем Nuxt DevTools из DOM"),t.remove(),p.disconnect())});p.observe(document.body,{childList:!0,subtree:!0})}return(p,t)=>(o(),r("div",H,[e("div",null,[t[6]||(t[6]=e("h1",null,"🟢 MyButton2 Component",-1)),n(u).length?(o(),r("div",Q,[t[1]||(t[1]=e("h2",null,"🔹 Props",-1)),e("table",null,[t[0]||(t[0]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Values"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1)),e("tbody",null,[(o(!0),r(N,null,S(n(u),(l,c)=>(o(),r("tr",{key:c},[e("td",null,[e("b",{textContent:d(l.name)},null,8,W)]),e("td",{textContent:d(l.type??"N/A")},null,8,X),e("td",{textContent:d(l.values??"N/A")},null,8,Z),e("td",{textContent:d(l.required?"✅ Yes":"❌ No")},null,8,ee),e("td",{textContent:d(l.defaultValue??"N/A")},null,8,ne),e("td",{textContent:d(l.description??"N/A")},null,8,te)]))),128))])])])):k("",!0),n(f).length?(o(),r("div",oe,[t[3]||(t[3]=e("h2",null,"🔹 Events",-1)),e("table",null,[t[2]||(t[2]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Description")])],-1)),e("tbody",null,[(o(!0),r(N,null,S(n(f),(l,c)=>(o(),r("tr",{key:c},[e("td",null,[e("b",{textContent:d(l.name)},null,8,le)]),e("td",{textContent:d(l.description??"N/A")},null,8,de)]))),128))])])])):k("",!0),n(v).length?(o(),r("div",re,[t[5]||(t[5]=e("h2",null,"🔹 Slots",-1)),e("table",null,[t[4]||(t[4]=e("thead",null,[e("tr",null,[e("th",null,"Slot"),e("th",null,"Description"),e("th",null,"Bindings")])],-1)),e("tbody",null,[(o(!0),r(N,null,S(n(v),(l,c)=>(o(),r("tr",{key:c},[e("td",null,[e("b",{textContent:d(l.name)},null,8,se)]),e("td",{textContent:d(l.description??"N/A")},null,8,ae),e("td",{textContent:d(l.bindings??"N/A")},null,8,ie)]))),128))])])])):k("",!0)]),i(j),`${n(h)}`?(o(),r("details",ue,[t[9]||(t[9]=e("summary",null,"Source code",-1)),e("pre",pe,[t[7]||(t[7]=T("        ")),e("code",{class:"highlighted-code",textContent:d(n(x))},null,8,ce),t[8]||(t[8]=T(`
      `))])])):k("",!0)]))}},ge=B(me,[["__scopeId","data-v-ab99ffc6"]]);export{ge as default};
