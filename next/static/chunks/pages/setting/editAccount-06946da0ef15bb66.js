(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{18763:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting/editAccount",function(){return t(97677)}])},37095:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(23100),l=t(11163),a=t(31606);function u(){let e=(0,l.useRouter)();return(0,r.jsx)(i.xu,{onClick:()=>{e.back()},cursor:"pointer",children:(0,r.jsx)(a.R,{w:"25px",h:"25px"})})}},37536:function(e,n,t){"use strict";t.d(n,{m:function(){return c}});var r=t(85893),i=t(23100),l=t(26137),a=t(7754),u=t(204),s=t(95034),o=t(37095);let c=e=>(0,r.jsxs)(i.xu,{children:[(0,r.jsxs)(l.M,{columns:3,spacing:6,children:[(0,r.jsx)(i.xu,{children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(a.M,{children:e.center}),(0,r.jsxs)(u.k,{children:[(0,r.jsx)(s.L,{}),e.right]})]}),(0,r.jsx)(s.L,{mt:"30px"}),e.children]})},97677:function(e,n,t){"use strict";t.a(e,async function(e,r){try{t.r(n);var i=t(85893),l=t(23100),a=t(88911),u=t(28129),s=t(29222),o=t(11163),c=t(53403),d=t(67294),f=t(37536),m=e([c]);c=(m.then?(await m)():m)[0];let p=()=>{let e=(0,o.useRouter)(),[n,t]=(0,d.useState)(e.query.accountName);return(0,i.jsxs)(f.m,{children:[(0,i.jsxs)(l.xu,{children:[(0,i.jsx)(a.x,{mt:"20px",children:"Name: (optional)"}),(0,i.jsx)(u.I,{onChange:e=>t(e.target.value),value:n})]}),(0,i.jsx)(l.xu,{children:(0,i.jsx)(s.z,{mt:"20px",w:"100%",onClick:()=>{c.Z.updateAccountName(parseInt(e.query.index),n),e.back()},children:"Save"})})]})};n.default=p,r()}catch(e){r(e)}})},33951:function(e,n,t){"use strict";t.d(n,{AV:function(){return i},XQ:function(){return l},Yq:function(){return a}});var r=t(25432),i=Object.freeze(["base","sm","md","lg","xl","2xl"]);function l(e,n){return Array.isArray(e)?e.map(e=>null===e?null:n(e)):(0,r.Kn)(e)?Object.keys(e).reduce((t,r)=>(t[r]=n(e[r]),t),{}):null!=e?n(e):null}function a(e,n=i){let t={};return e.forEach((e,r)=>{let i=n[r];null!=e&&(t[i]=e)}),t}},29222:function(e,n,t){"use strict";t.d(n,{z:function(){return h}});var r=t(67294),[i,l]=(0,t(55227).k)({strict:!1,name:"ButtonGroupContext"}),a=t(82504),u=t(25432),s=t(85893);function o(e){let{children:n,className:t,...i}=e,l=(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,u.cx)("chakra-button__icon",t);return(0,s.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o,children:l})}o.displayName="ButtonIcon";var c=t(295);function d(e){let{label:n,placement:t,spacing:i="0.5rem",children:l=(0,s.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:d,...f}=e,m=(0,u.cx)("chakra-button__spinner",o),p="start"===t?"marginEnd":"marginStart",x=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[p]:n?i:0,fontSize:"1em",lineHeight:"normal",...d}),[d,n,p,i]);return(0,s.jsx)(a.m.div,{className:m,...f,__css:x,children:l})}d.displayName="ButtonSpinner";var f=t(81103),m=t(35059),p=t(91639),x=t(33179),h=(0,m.G)((e,n)=>{let t=l(),i=(0,p.mq)("Button",{...t,...e}),{isDisabled:o=null==t?void 0:t.isDisabled,isLoading:c,isActive:m,children:h,leftIcon:y,rightIcon:j,loadingText:g,iconSpacing:b="0.5rem",type:_,spinner:k,spinnerPlacement:N="start",className:C,as:S,...w}=(0,x.Lr)(e),I=(0,r.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!t&&{_focus:e}}},[i,t]),{ref:F,type:G}=function(e){let[n,t]=(0,r.useState)(!e),i=(0,r.useCallback)(e=>{e&&t("BUTTON"===e.tagName)},[]);return{ref:i,type:n?"button":void 0}}(S),q={rightIcon:j,leftIcon:y,iconSpacing:b,children:h};return(0,s.jsxs)(a.m.button,{ref:(0,f.qq)(n,F),as:S,type:null!=_?_:G,"data-active":(0,u.PB)(m),"data-loading":(0,u.PB)(c),__css:I,className:(0,u.cx)("chakra-button",C),...w,disabled:o||c,children:[c&&"start"===N&&(0,s.jsx)(d,{className:"chakra-button__spinner--start",label:g,placement:"start",spacing:b,children:k}),c?g||(0,s.jsx)(a.m.span,{opacity:0,children:(0,s.jsx)(v,{...q})}):(0,s.jsx)(v,{...q}),c&&"end"===N&&(0,s.jsx)(d,{className:"chakra-button__spinner--end",label:g,placement:"end",spacing:b,children:k})]})});function v(e){let{leftIcon:n,rightIcon:t,children:r,iconSpacing:i}=e;return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(o,{marginEnd:i,children:n}),r,t&&(0,s.jsx)(o,{marginStart:i,children:t})]})}h.displayName="Button"},33529:function(e,n,t){"use strict";t.d(n,{Y:function(){return h},K:function(){return v}});var r=t(55227),i=t(81103),l=t(35059),a=t(91639),u=t(33179),s=t(82504),o=t(25432),c=t(67294),d=t(85893),[f,m]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[p,x]=(0,r.k)({strict:!1,name:"FormControlContext"});function h(e){let{isDisabled:n,isInvalid:t,isReadOnly:r,isRequired:i,...l}=v(e);return{...l,disabled:n,readOnly:r,required:i,"aria-invalid":(0,o.Qm)(t),"aria-required":(0,o.Qm)(i),"aria-readonly":(0,o.Qm)(r)}}function v(e){var n,t,r;let i=x(),{id:l,disabled:a,readOnly:u,required:s,isRequired:c,isInvalid:d,isReadOnly:f,isDisabled:m,onFocus:p,onBlur:h,...v}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&y.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&y.push(i.helpTextId),{...v,"aria-describedby":y.join(" ")||void 0,id:null!=l?l:null==i?void 0:i.id,isDisabled:null!=(n=null!=a?a:m)?n:null==i?void 0:i.isDisabled,isReadOnly:null!=(t=null!=u?u:f)?t:null==i?void 0:i.isReadOnly,isRequired:null!=(r=null!=s?s:c)?r:null==i?void 0:i.isRequired,isInvalid:null!=d?d:null==i?void 0:i.isInvalid,onFocus:(0,o.v0)(null==i?void 0:i.onFocus,p),onBlur:(0,o.v0)(null==i?void 0:i.onBlur,h)}}(0,l.G)(function(e,n){let t=(0,a.jC)("Form",e),r=(0,u.Lr)(e),{getRootProps:l,htmlProps:m,...x}=function(e){let{id:n,isRequired:t,isInvalid:r,isDisabled:l,isReadOnly:a,...u}=e,s=(0,c.useId)(),d=n||`field-${s}`,f=`${d}-label`,m=`${d}-feedback`,p=`${d}-helptext`,[x,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[j,g]=(0,c.useState)(!1),b=(0,c.useCallback)((e={},n=null)=>({id:p,...e,ref:(0,i.lq)(n,e=>{e&&y(!0)})}),[p]),_=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,o.PB)(j),"data-disabled":(0,o.PB)(l),"data-invalid":(0,o.PB)(r),"data-readonly":(0,o.PB)(a),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}),[d,l,j,r,a,f]),k=(0,c.useCallback)((e={},n=null)=>({id:m,...e,ref:(0,i.lq)(n,e=>{e&&h(!0)}),"aria-live":"polite"}),[m]),N=(0,c.useCallback)((e={},n=null)=>({...e,...u,ref:n,role:"group"}),[u]),C=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!l,isFocused:!!j,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:x,setHasFeedbackText:h,hasHelpText:v,setHasHelpText:y,id:d,labelId:f,feedbackId:m,helpTextId:p,htmlProps:u,getHelpTextProps:b,getErrorMessageProps:k,getRootProps:N,getLabelProps:_,getRequiredIndicatorProps:C}}(r),h=(0,o.cx)("chakra-form-control",e.className);return(0,d.jsx)(p,{value:x,children:(0,d.jsx)(f,{value:t,children:(0,d.jsx)(s.m.div,{...l({},n),className:h,__css:t.container})})})}).displayName="FormControl",(0,l.G)(function(e,n){let t=x(),r=m(),i=(0,o.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(s.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:r.helperText,className:i})}).displayName="FormHelperText"},40078:function(e,n,t){"use strict";t.d(n,{I:function(){return u}});var r=t(56877),i=t(35059),l=t(67294),a=t(85893);function u(e){let{viewBox:n="0 0 24 24",d:t,displayName:u,defaultProps:s={}}=e,o=l.Children.toArray(e.path),c=(0,i.G)((e,i)=>(0,a.jsx)(r.J,{ref:i,viewBox:n,...s,...e,children:o.length?o:(0,a.jsx)("path",{fill:"currentColor",d:t})}));return c.displayName=u,c}},31606:function(e,n,t){"use strict";t.d(n,{R:function(){return r}});var r=(0,t(40078).I)({d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",displayName:"ArrowBackIcon"})},28129:function(e,n,t){"use strict";t.d(n,{I:function(){return c}});var r=t(33529),i=t(35059),l=t(91639),a=t(33179),u=t(82504),s=t(25432),o=t(85893),c=(0,i.G)(function(e,n){let{htmlSize:t,...i}=e,c=(0,l.jC)("Input",i),d=(0,a.Lr)(i),f=(0,r.Y)(d),m=(0,s.cx)("chakra-input",e.className);return(0,o.jsx)(u.m.input,{size:t,...f,__css:c.field,ref:n,className:m})});c.displayName="Input",c.id="Input"},95034:function(e,n,t){"use strict";t.d(n,{L:function(){return r}});var r=(0,t(82504).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});r.displayName="Spacer"},204:function(e,n,t){"use strict";t.d(n,{k:function(){return a}});var r=t(35059),i=t(82504),l=t(85893),a=(0,r.G)(function(e,n){let{direction:t,align:r,justify:a,wrap:u,basis:s,grow:o,shrink:c,...d}=e;return(0,l.jsx)(i.m.div,{ref:n,__css:{display:"flex",flexDirection:t,alignItems:r,justifyContent:a,flexWrap:u,flexBasis:s,flexGrow:o,flexShrink:c},...d})});a.displayName="Flex"},88911:function(e,n,t){"use strict";t.d(n,{x:function(){return c}});var r=t(35059),i=t(91639),l=t(33179),a=t(82504),u=t(25432),s=t(87052),o=t(85893),c=(0,r.G)(function(e,n){let t=(0,i.mq)("Text",e),{className:r,align:c,decoration:d,casing:f,...m}=(0,l.Lr)(e),p=(0,s.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,o.jsx)(a.m.p,{ref:n,className:(0,u.cx)("chakra-text",e.className),...p,...m,__css:t})});c.displayName="Text"},26137:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(35059),i=t(82504),l=t(85893),a=(0,r.G)(function(e,n){let{templateAreas:t,gap:r,rowGap:a,columnGap:u,column:s,row:o,autoFlow:c,autoRows:d,templateRows:f,autoColumns:m,templateColumns:p,...x}=e;return(0,l.jsx)(i.m.div,{ref:n,__css:{display:"grid",gridTemplateAreas:t,gridGap:r,gridRowGap:a,gridColumnGap:u,gridAutoColumns:m,gridColumn:s,gridRow:o,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:f,gridTemplateColumns:p},...x})});a.displayName="Grid";var u=t(75119),s=t(34629),o=t(33951),c=(0,r.G)(function(e,n){let{columns:t,spacingX:r,spacingY:i,spacing:c,minChildWidth:d,...f}=e,m=(0,u.F)(),p=d?(0,o.XQ)(d,e=>{let n=(0,s.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(m);return null===e?null:`repeat(auto-fit, minmax(${n}, 1fr))`}):(0,o.XQ)(t,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,l.jsx)(a,{ref:n,gap:c,columnGap:r,rowGap:i,templateColumns:p,...f})});c.displayName="SimpleGrid"},87052:function(e,n,t){"use strict";function r(e){let n=Object.assign({},e);for(let e in n)void 0===n[e]&&delete n[e];return n}t.d(n,{o:function(){return r}})},81103:function(e,n,t){"use strict";t.d(n,{lq:function(){return i},qq:function(){return l}});var r=t(67294);function i(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(t){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}function l(...e){return(0,r.useMemo)(()=>i(...e),e)}}},function(e){e.O(0,[13,888,179],function(){return e(e.s=18763)}),_N_E=e.O()}]);