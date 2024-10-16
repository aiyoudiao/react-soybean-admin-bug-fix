import{g as M,m as E,b as j,u as d,r as c,C as B,a as P}from"./index-DjrDOCfG.js";const W=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:a,colorSplit:r,lineWidth:i,textPaddingInline:s,orientationMargin:l,verticalMarginInline:o}=t;return{[e]:Object.assign(Object.assign({},j(t)),{borderBlockStart:`${d(i)} solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:o,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${d(i)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${d(t.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${d(t.dividerHorizontalWithTextGutterMargin)} 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${d(i)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${e}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:s},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${d(i)} 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:r,borderStyle:"dotted",borderWidth:`${d(i)} 0 0`},[`&-horizontal${e}-with-text${e}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${e}-dotted`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:a}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:a}}})}},k=t=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:t.marginXS}),N=M("Divider",t=>{const e=E(t,{dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG,sizePaddingEdgeHorizontal:0});return[W(e)]},k,{unitless:{orientationMargin:!0}});var H=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};const G=t=>{const{getPrefixCls:e,direction:a,divider:r}=c.useContext(B),{prefixCls:i,type:s="horizontal",orientation:l="center",orientationMargin:o,className:p,rootClassName:u,children:g,dashed:x,variant:h="solid",plain:S,style:v}=t,y=H(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),n=e("divider",i),[w,z,C]=N(n),f=!!g,b=l==="left"&&o!=null,m=l==="right"&&o!=null,O=P(n,r==null?void 0:r.className,z,C,`${n}-${s}`,{[`${n}-with-text`]:f,[`${n}-with-text-${l}`]:f,[`${n}-dashed`]:!!x,[`${n}-${h}`]:h!=="solid",[`${n}-plain`]:!!S,[`${n}-rtl`]:a==="rtl",[`${n}-no-default-orientation-margin-left`]:b,[`${n}-no-default-orientation-margin-right`]:m},p,u),$=c.useMemo(()=>typeof o=="number"?o:/^\d+$/.test(o)?Number(o):o,[o]),I=Object.assign(Object.assign({},b&&{marginLeft:$}),m&&{marginRight:$});return w(c.createElement("div",Object.assign({className:O,style:Object.assign(Object.assign({},r==null?void 0:r.style),v)},y,{role:"separator"}),g&&s!=="vertical"&&c.createElement("span",{className:`${n}-inner-text`,style:I},g)))};export{G as D};
