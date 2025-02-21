import{_ as A,a as V}from"./Dw_ba-jO.js";import{_ as D}from"./Be1NRngx.js";import{m as S,r as i,c as u,o as l,M as y,a as t,b as N,d as C,P as g,Q as P,L as s,R as f,S as T,_ as M,K as _,N as b,J as h,w as q,t as r}from"./DVQnm3ND.js";import{C as E}from"./DjfRuduj.js";import"./GvVry5ad.js";const L={class:"controls"},R=S({__name:"CustomBadge.stories",setup(k){const a=i("Badge Label"),d=i("primary");return(v,e)=>{const x=D;return l(),u(y,null,[e[5]||(e[5]=t("p",null,[C(" The "),t("code",null,"CustomBadge"),C(" component is used for displaying small status labels. ")],-1)),e[6]||(e[6]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",L,[t("label",null,[e[2]||(e[2]=C(" Text: ")),g(t("input",{"onUpdate:modelValue":e[0]||(e[0]=p=>f(a)?a.value=p:null),type:"text"},null,512),[[P,s(a)]])]),t("label",null,[e[4]||(e[4]=C(" Variant: ")),g(t("select",{"onUpdate:modelValue":e[1]||(e[1]=p=>f(d)?d.value=p:null)},e[3]||(e[3]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1)]),512),[[T,s(d)]])])]),N(x,{component:E,props:{text:s(a),variant:s(d)}},null,8,["props"])],64)}}}),$={class:"componentsbook-page"},I={key:0},z=["textContent"],F=["textContent"],O=["textContent"],U=["textContent"],H=["textContent"],J=["textContent"],K={key:1},Q=["textContent"],Y=["textContent"],j={key:2},G=["textContent"],W=["textContent"],X=["textContent"],Z={__name:"playground_Components_lib_CustomBadge",setup(k){const a=i([{name:"text",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"variant",values:"N/A",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),d=i([]),v=i([{name:"default",description:"N/A",bindings:""}]),e=i(!0),x=i(`<template>
  <span :class="['badge', \`badge-\${variant}\`]">
    <slot>{{ text }}</slot>
  </span>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomBadge',
  props: {
    text: String,
    variant: {
      type: String,
      default: 'primary',
    },
  },
})
<\/script>

<style scoped>
.badge {
  padding: 5px 10px;
  border-radius: 10px;
}
.badge-primary {
  background: blue;
  color: white;
}
</style>
`),p=async()=>{try{await navigator.clipboard.writeText(x.value)}catch(m){console.error("Failed to copy:",m)}};{const m=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0})}return(m,n)=>{const B=V,w=A;return l(),u("div",$,[t("div",null,[n[6]||(n[6]=t("h1",null,"🟢 CustomBadge Component",-1)),s(a).length?(l(),u("div",I,[n[1]||(n[1]=t("h2",null,"🔹 Props",-1)),t("table",null,[n[0]||(n[0]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Values"),t("th",null,"Required"),t("th",null,"Default Value"),t("th",null,"Description")])],-1)),t("tbody",null,[(l(!0),u(y,null,b(s(a),(o,c)=>(l(),u("tr",{key:c},[t("td",null,[t("b",{textContent:r(o.name)},null,8,z)]),t("td",{textContent:r(o.type??"N/A")},null,8,F),t("td",{textContent:r(o.values??"N/A")},null,8,O),t("td",{textContent:r(o.required?"✅ Yes":"❌ No")},null,8,U),t("td",{textContent:r(o.defaultValue??"N/A")},null,8,H),t("td",{textContent:r(o.description??"N/A")},null,8,J)]))),128))])])])):_("",!0),s(d).length?(l(),u("div",K,[n[3]||(n[3]=t("h2",null,"🔹 Events",-1)),t("table",null,[n[2]||(n[2]=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Description")])],-1)),t("tbody",null,[(l(!0),u(y,null,b(s(d),(o,c)=>(l(),u("tr",{key:c},[t("td",null,[t("b",{textContent:r(o.name)},null,8,Q)]),t("td",{textContent:r(o.description??"N/A")},null,8,Y)]))),128))])])])):_("",!0),s(v).length?(l(),u("div",j,[n[5]||(n[5]=t("h2",null,"🔹 Slots",-1)),t("table",null,[n[4]||(n[4]=t("thead",null,[t("tr",null,[t("th",null,"Slot"),t("th",null,"Description"),t("th",null,"Bindings")])],-1)),t("tbody",null,[(l(!0),u(y,null,b(s(v),(o,c)=>(l(),u("tr",{key:c},[t("td",null,[t("b",{textContent:r(o.name)},null,8,G)]),t("td",{textContent:r(o.description??"N/A")},null,8,W),t("td",{textContent:r(o.bindings??"N/A")},null,8,X)]))),128))])])])):_("",!0)]),N(R),t("div",null,[s(e)?(l(),h(w,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:q(()=>[s(e)?(l(),h(B,{key:0,code:s(x),"is-frozen":!1,"show-frozen":!1,"copy-button-text":"📋 Copy",onCopy:p},null,8,["code"])):_("",!0)]),_:1})):_("",!0)])])}}},st=M(Z,[["__scopeId","data-v-c9466fef"]]);export{st as default};
