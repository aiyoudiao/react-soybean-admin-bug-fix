import{r as u}from"./index-DjrDOCfG.js";function l(o=!1){const[t,e]=u.useState(o);function n(){e(!0)}function s(){e(!1)}function a(){e(r=>!r)}return{bool:t,setBool:e,setTrue:n,setFalse:s,toggle:a}}function f(o=!1){const{bool:t,setTrue:e,setFalse:n}=l(o);return{loading:t,startLoading:e,endLoading:n}}export{l as a,f as u};
