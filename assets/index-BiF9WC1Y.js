import{r as o,C as X,dU as oe,a as q,aS as U,g as se,m as re,bR as ae,bQ as le,dV as K,aP as ie,p as ce,aT as ue,au as Y,cZ as fe,b9 as J,av as de,b7 as ee,b8 as te,aU as pe,dW as me,b0 as ve,aR as ne,ca as ge,d as Z,J as Ce,dX as be}from"./index-DjrDOCfG.js";import{R as ye}from"./SearchOutlined-Cbw3AoPG.js";const Oe=e=>{const{getPrefixCls:r,direction:a}=o.useContext(X),{prefixCls:t,className:n}=e,u=r("input-group",t),b=r("input"),[g,y]=oe(b),O=q(u,{[`${u}-lg`]:e.size==="large",[`${u}-sm`]:e.size==="small",[`${u}-compact`]:e.compact,[`${u}-rtl`]:a==="rtl"},y,n),C=o.useContext(U),p=o.useMemo(()=>Object.assign(Object.assign({},C),{isFormItemInput:!1}),[C]);return g(o.createElement("span",{className:O,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},o.createElement(U.Provider,{value:p},e.children)))},he=e=>{const{componentCls:r,paddingXS:a}=e;return{[r]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:a,"&-rtl":{direction:"rtl"},[`${r}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${r}-sm ${r}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${r}-lg ${r}-input`]:{paddingInline:e.paddingXS}}}},xe=se(["Input","OTP"],e=>{const r=re(e,ae(e));return[he(r)]},le);var Pe=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Ie=o.forwardRef((e,r)=>{const{value:a,onChange:t,onActiveChange:n,index:u,mask:b}=e,g=Pe(e,["value","onChange","onActiveChange","index","mask"]),y=a&&typeof b=="string"?b:a,O=m=>{t(u,m.target.value)},C=o.useRef(null);o.useImperativeHandle(r,()=>C.current);const p=()=>{ie(()=>{var m;const h=(m=C.current)===null||m===void 0?void 0:m.input;document.activeElement===h&&h&&h.select()})},j=m=>{let{key:h}=m;h==="ArrowLeft"?n(u-1):h==="ArrowRight"&&n(u+1),p()},$=m=>{m.key==="Backspace"&&!a&&n(u-1),p()};return o.createElement(K,Object.assign({type:b===!0?"password":"text"},g,{ref:C,value:y,onInput:O,onFocus:p,onKeyDown:j,onKeyUp:$,onMouseDown:p,onMouseUp:p}))});var Se=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function L(e){return(e||"").split("")}const Ee=o.forwardRef((e,r)=>{const{prefixCls:a,length:t=6,size:n,defaultValue:u,value:b,onChange:g,formatter:y,variant:O,disabled:C,status:p,autoFocus:j,mask:$,type:m}=e,h=Se(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","variant","disabled","status","autoFocus","mask","type"]),{getPrefixCls:M,direction:T}=o.useContext(X),v=M("otp",a),w=ce(h,{aria:!0,data:!0,attr:!0}),N=ue(v),[B,P,k]=xe(v,N),A=Y(s=>n??s),R=o.useContext(U),I=fe(R.status,p),_=o.useMemo(()=>Object.assign(Object.assign({},R),{status:I,hasFeedback:!1,feedbackIcon:null}),[R,I]),S=o.useRef(null),z=o.useRef({});o.useImperativeHandle(r,()=>({focus:()=>{var s;(s=z.current[0])===null||s===void 0||s.focus()},blur:()=>{var s;for(let i=0;i<t;i+=1)(s=z.current[i])===null||s===void 0||s.blur()},nativeElement:S.current}));const x=s=>y?y(s):s,[E,V]=o.useState(L(x(u||"")));o.useEffect(()=>{b!==void 0&&V(L(b))},[b]);const Q=J(s=>{V(s),g&&s.length===t&&s.every(i=>i)&&s.some((i,c)=>E[c]!==i)&&g(s.join(""))}),G=J((s,i)=>{let c=de(E);for(let d=0;d<s;d+=1)c[d]||(c[d]="");i.length<=1?c[s]=i:c=c.slice(0,s).concat(L(i)),c=c.slice(0,t);for(let d=c.length-1;d>=0&&!c[d];d-=1)c.pop();const F=x(c.map(d=>d||" ").join(""));return c=L(F).map((d,W)=>d===" "&&!c[W]?c[W]:d),c}),H=(s,i)=>{var c;const F=G(s,i),d=Math.min(s+i.length,t-1);d!==s&&((c=z.current[d])===null||c===void 0||c.focus()),Q(F)},l=s=>{var i;(i=z.current[s])===null||i===void 0||i.focus()},f={variant:O,disabled:C,status:I,mask:$,type:m};return B(o.createElement("div",Object.assign({},w,{ref:S,className:q(v,{[`${v}-sm`]:A==="small",[`${v}-lg`]:A==="large",[`${v}-rtl`]:T==="rtl"},k,P)}),o.createElement(U.Provider,{value:_},Array.from({length:t}).map((s,i)=>{const c=`otp-${i}`,F=E[i]||"";return o.createElement(Ie,Object.assign({ref:d=>{z.current[i]=d},key:c,index:i,size:A,htmlSize:1,className:`${v}-input`,onChange:H,value:F,onActiveChange:l,autoFocus:i===0&&j},f))}))))});var we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},ze=function(r,a){return o.createElement(ee,te({},r,{ref:a,icon:we}))},je=o.forwardRef(ze),$e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},Re=function(r,a){return o.createElement(ee,te({},r,{ref:a,icon:$e}))},_e=o.forwardRef(Re),ke=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Ae=e=>e?o.createElement(_e,null):o.createElement(je,null),Me={click:"onClick",hover:"onMouseOver"},Te=o.forwardRef((e,r)=>{const{disabled:a,action:t="click",visibilityToggle:n=!0,iconRender:u=Ae}=e,b=o.useContext(pe),g=a??b,y=typeof n=="object"&&n.visible!==void 0,[O,C]=o.useState(()=>y?n.visible:!1),p=o.useRef(null);o.useEffect(()=>{y&&C(n.visible)},[y,n]);const j=me(p),$=()=>{g||(O&&j(),C(I=>{var _;const S=!I;return typeof n=="object"&&((_=n.onVisibleChange)===null||_===void 0||_.call(n,S)),S}))},m=I=>{const _=Me[t]||"",S=u(O),z={[_]:$,className:`${I}-icon`,key:"passwordIcon",onMouseDown:x=>{x.preventDefault()},onMouseUp:x=>{x.preventDefault()}};return o.cloneElement(o.isValidElement(S)?S:o.createElement("span",null,S),z)},{className:h,prefixCls:M,inputPrefixCls:T,size:v}=e,w=ke(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:N}=o.useContext(X),B=N("input",T),P=N("input-password",M),k=n&&m(P),A=q(P,h,{[`${P}-${v}`]:!!v}),R=Object.assign(Object.assign({},ve(w,["suffix","iconRender","visibilityToggle"])),{type:O?"text":"password",className:A,prefixCls:B,suffix:k});return v&&(R.size=v),o.createElement(K,Object.assign({ref:ne(r,p)},R))});var Ne=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Be=o.forwardRef((e,r)=>{const{prefixCls:a,inputPrefixCls:t,className:n,size:u,suffix:b,enterButton:g=!1,addonAfter:y,loading:O,disabled:C,onSearch:p,onChange:j,onCompositionStart:$,onCompositionEnd:m}=e,h=Ne(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:M,direction:T}=o.useContext(X),v=o.useRef(!1),w=M("input-search",a),N=M("input",t),{compactSize:B}=ge(w,T),P=Y(l=>{var f;return(f=u??B)!==null&&f!==void 0?f:l}),k=o.useRef(null),A=l=>{l!=null&&l.target&&l.type==="click"&&p&&p(l.target.value,l,{source:"clear"}),j==null||j(l)},R=l=>{var f;document.activeElement===((f=k.current)===null||f===void 0?void 0:f.input)&&l.preventDefault()},I=l=>{var f,s;p&&p((s=(f=k.current)===null||f===void 0?void 0:f.input)===null||s===void 0?void 0:s.value,l,{source:"input"})},_=l=>{v.current||O||I(l)},S=typeof g=="boolean"?o.createElement(ye,null):null,z=`${w}-button`;let x;const E=g||{},V=E.type&&E.type.__ANT_BUTTON===!0;V||E.type==="button"?x=Z(E,Object.assign({onMouseDown:R,onClick:l=>{var f,s;(s=(f=E==null?void 0:E.props)===null||f===void 0?void 0:f.onClick)===null||s===void 0||s.call(f,l),I(l)},key:"enterButton"},V?{className:z,size:P}:{})):x=o.createElement(Ce,{className:z,type:g?"primary":void 0,size:P,disabled:C,key:"enterButton",onMouseDown:R,onClick:I,loading:O,icon:S},g),y&&(x=[x,Z(y,{key:"addonAfter"})]);const Q=q(w,{[`${w}-rtl`]:T==="rtl",[`${w}-${P}`]:!!P,[`${w}-with-button`]:!!g},n),G=l=>{v.current=!0,$==null||$(l)},H=l=>{v.current=!1,m==null||m(l)};return o.createElement(K,Object.assign({ref:ne(k,r),onPressEnter:_},h,{size:P,onCompositionStart:G,onCompositionEnd:H,prefixCls:N,addonAfter:x,suffix:b,onChange:A,className:Q,disabled:C}))}),D=K;D.Group=Oe;D.Search=Be;D.TextArea=be;D.Password=Te;D.OTP=Ee;export{D as I};
