import{_ as B,a as A}from"./CtGpM317.js";import{_ as V}from"./DNnw39hr.js";import{m as D,r as u,c as r,o as s,M as m,a as t,b as f,d as _,P as v,Q as S,L as o,R as y,S as P,_ as T,K as b,N as C,J as g,w as M,t as a}from"./CXqv3HIH.js";import{C as q}from"./mbROcqqq.js";import"./BiZ0pwHu.js";const E={class:"controls"},L=D({__name:"CustomBadge.stories",setup(N){const d=u("Badge Label"),i=u("primary");return(h,e)=>{const x=V;return s(),r(m,null,[e[5]||(e[5]=t("p",null,[_(" The "),t("code",null,"CustomBadge"),_(" component is used for displaying small status labels. ")],-1)),e[6]||(e[6]=t("h2",null,"🛠 Interactive Controls",-1)),t("div",E,[t("label",null,[e[2]||(e[2]=_(" Text: ")),v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>y(d)?d.value=c:null),type:"text"},null,512),[[S,o(d)]])]),t("label",null,[e[4]||(e[4]=_(" Variant: ")),v(t("select",{"onUpdate:modelValue":e[1]||(e[1]=c=>y(i)?i.value=c:null)},e[3]||(e[3]=[t("option",{value:"primary"},"Primary",-1),t("option",{value:"secondary"},"Secondary",-1)]),512),[[P,o(i)]])])]),f(x,{component:q,props:{text:o(d),variant:o(i)},name:"lib-custom-badge"},null,8,["props"])],64)}}}),R={class:"componentsbook-page"},$={key:0},I={class:"table"},z={class:"table-body"},O={class:"table-cell"},U=["textContent"],F=["textContent"],H=["textContent"],J=["textContent"],K=["textContent"],Q=["textContent"],Y={key:1},j={class:"table"},G={class:"table-body"},W={class:"table-cell"},X=["textContent"],Z=["textContent"],tt={key:2},et={class:"table"},nt={class:"table-body"},lt={class:"table-cell"},st=["textContent"],ot=["textContent"],at=["textContent"],rt={__name:"playground_Components_lib_CustomBadge",setup(N){const d=u([{name:"text",values:"N/A",type:"string",defaultValue:"N/A",description:"N/A",required:!1},{name:"variant",values:"N/A",type:"string",defaultValue:"'primary'",description:"N/A",required:!1}]),i=u([]),h=u([{name:"default",description:"N/A",bindings:""}]),e=u(!0),x=u(`<template>
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
`);{const c=new MutationObserver(()=>{const n=document.getElementById("nuxt-devtools-container");n&&(console.log("[componentsbook] Remove Nuxt DevTools from DOM"),n.remove(),c.disconnect())});c.observe(document.body,{childList:!0,subtree:!0})}return(c,n)=>{const w=A,k=B;return s(),r("div",R,[t("div",null,[n[6]||(n[6]=t("h1",null,"🟢 CustomBadge Component",-1)),o(d).length?(s(),r("div",$,[n[1]||(n[1]=t("h2",null,"🔹 Props",-1)),t("table",I,[n[0]||(n[0]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Type "),t("th",{class:"table-header-cell"}," Values "),t("th",{class:"table-header-cell"}," Required "),t("th",{class:"table-header-cell"}," Default Value "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",z,[(s(!0),r(m,null,C(o(d),(l,p)=>(s(),r("tr",{key:p,class:"table-row"},[t("td",O,[t("b",{textContent:a(l.name)},null,8,U)]),t("td",{class:"table-cell",textContent:a(l.type??"N/A")},null,8,F),t("td",{class:"table-cell",textContent:a(l.values??"N/A")},null,8,H),t("td",{class:"table-cell",textContent:a(l.required?"✅ Yes":"❌ No")},null,8,J),t("td",{class:"table-cell",textContent:a(l.defaultValue??"N/A")},null,8,K),t("td",{class:"table-cell",textContent:a(l.description??"N/A")},null,8,Q)]))),128))])])])):b("",!0),o(i).length?(s(),r("div",Y,[n[3]||(n[3]=t("h2",null,"🔹 Events",-1)),t("table",j,[n[2]||(n[2]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Prop "),t("th",{class:"table-header-cell"}," Description ")])],-1)),t("tbody",G,[(s(!0),r(m,null,C(o(i),(l,p)=>(s(),r("tr",{key:p,class:"table-row"},[t("td",W,[t("b",{textContent:a(l.name)},null,8,X)]),t("td",{class:"table-cell",textContent:a(l.description??"N/A")},null,8,Z)]))),128))])])])):b("",!0),o(h).length?(s(),r("div",tt,[n[5]||(n[5]=t("h2",null,"🔹 Slots",-1)),t("table",et,[n[4]||(n[4]=t("thead",{class:"table-thead"},[t("tr",{class:"table-header-row"},[t("th",{class:"table-header-cell"}," Slot "),t("th",{class:"table-header-cell"}," Description "),t("th",{class:"table-header-cell"}," Bindings ")])],-1)),t("tbody",nt,[(s(!0),r(m,null,C(o(h),(l,p)=>(s(),r("tr",{key:p,class:"table-row"},[t("td",lt,[t("b",{textContent:a(l.name)},null,8,st)]),t("td",{class:"table-cell",textContent:a(l.description??"N/A")},null,8,ot),t("td",{class:"table-cell",textContent:a(l.bindings??"N/A")},null,8,at)]))),128))])])])):b("",!0)]),f(L),t("div",null,[o(e)?(s(),g(k,{key:0,"hide-label":"▼ Hide Component Code","show-label":"▶ Show Component Code"},{default:M(()=>[o(e)?(s(),g(w,{key:0,code:o(x),"is-frozen":!1,"show-frozen":!1},null,8,["code"])):b("",!0)]),_:1})):b("",!0)])])}}},bt=T(rt,[["__scopeId","data-v-97036e60"]]);export{bt as default};
