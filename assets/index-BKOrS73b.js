import{B as g,k as e,J as r}from"./index-DjrDOCfG.js";import{u as h}from"./captcha-BLbHKh8A.js";import{u as x}from"./routerPush-P9lF6xBN.js";import{F as s,u as f}from"./form-BqikU-_9.js";import{u as j}from"./index-DloUC9UN.js";import{I as t}from"./index-BiF9WC1Y.js";import{S as C}from"./index-CzI4SHpS.js";import"./use-loading-Bp2KVi0p.js";import"./tslib.es6-CwN1OpI9.js";import"./subscribeFocus-Ca4JANB8.js";import"./_baseGetTag-By9-FpdQ.js";import"./row-ChYf6QXS.js";import"./responsiveObserver-BV9iA5lE.js";import"./SearchOutlined-Cbw3AoPG.js";const k=()=>{const[i]=s.useForm(),{label:m,isCounting:c,loading:p,getCaptcha:d}=h(),{t:o}=g(),{toggleLoginModule:u}=x(),{formRules:a}=f();async function l(){var n;await i.validateFields(),(n=window.$message)==null||n.success(o("page.login.common.validateSuccess"))}return j("enter",()=>{l()}),e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-18px text-primary font-medium",children:o("page.login.codeLogin.title")}),e.jsxs(s,{className:"pt-24px",form:i,children:[e.jsx(s.Item,{name:"phone",rules:a.phone,children:e.jsx(t,{placeholder:o("page.login.common.phonePlaceholder")})}),e.jsx(s.Item,{name:"code",rules:a.code,children:e.jsxs("div",{className:"w-full flex-y-center gap-16px",children:[e.jsx(t,{"v-model:value":"model.code",placeholder:o("page.login.common.codePlaceholder")}),e.jsx(r,{size:"large",disabled:c,loading:p,onClick:()=>d("17260760167"),children:m})]})}),e.jsxs(C,{direction:"vertical",className:"w-full",size:18,children:[e.jsx(r,{type:"primary",size:"large",shape:"round",block:!0,onClick:l,children:o("common.confirm")}),e.jsx(r,{size:"large",shape:"round",block:!0,onClick:()=>u("pwd-login"),children:o("page.login.common.back")})]})]})]})};k.displayName="CodeLogin";export{k as Component};
