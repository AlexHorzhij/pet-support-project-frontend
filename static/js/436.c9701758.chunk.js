"use strict";(self.webpackChunkpet_support_project_frontend=self.webpackChunkpet_support_project_frontend||[]).push([[436],{8436:function(n,t,e){e.r(t),e.d(t,{default:function(){return jn}});var r=e(2791),o=e(9439),a=e(6934),i=e(1572),s=e(5527),l=(0,a.ZP)(i.ZP)({borderRadius:"20px"}),c=(0,a.ZP)(s.Z)({background:"#FFFFFF",borderRadius:"20px",boxShadow:"7px 4px 14px rgba(49, 21, 4, 0.07)",marginRight:"auto",marginLeft:"auto",marginTop:"40px"}),u=e(3400),d=e(1703),p=e(9434),h=e(9776),m=e(3329);function f(){var n=(0,r.useState)(""),t=(0,o.Z)(n,2),e=t[0],a=t[1],i=(0,p.I0)();return(0,m.jsxs)(c,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",maxWidth:400},onSubmit:function(n){n.preventDefault(),i((0,h.b)(e))},children:[(0,m.jsx)(l,{sx:{ml:1,flex:1},placeholder:"Search News",inputProps:{"aria-label":"search news"},value:e,onChange:function(n){var t=n.target.value;a(t)}}),(0,m.jsx)(u.Z,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:(0,m.jsx)(d.Z,{})})]})}var g=e(890),v=(0,a.ZP)(g.Z)({fontSize:"48px",textAlign:"center"}),x=function(n){var t=n.text;return(0,m.jsx)(v,{variant:"h2",children:t})},Z=e(7621),b=e(9504),w=e(3433),y=e(4942),S=e(3366),j=e(7462),C=e(8182),k=e(4419),F=e(4036),R=e(1402),P=e(3031),A=e(2071),M=e(5878),D=e(1217);function N(n){return(0,D.Z)("MuiLink",n)}var B=(0,M.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),L=e(8529),_=e(2065),W={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=function(n){var t=n.theme,e=n.ownerState,r=function(n){return W[n]||n}(e.color),o=(0,L.DW)(t,"palette.".concat(r),!1)||e.color,a=(0,L.DW)(t,"palette.".concat(r,"Channel"));return"vars"in t&&a?"rgba(".concat(a," / 0.4)"):(0,_.Fq)(o,.4)},T=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],V=(0,a.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t["underline".concat((0,F.Z)(e.underline))],"button"===e.component&&t.button]}})((function(n){var t=n.theme,e=n.ownerState;return(0,j.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&(0,j.Z)({textDecoration:"underline"},"inherit"!==e.color&&{textDecorationColor:z({theme:t,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===e.component&&(0,y.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(B.focusVisible),{outline:"auto"}))})),H=r.forwardRef((function(n,t){var e=(0,R.Z)({props:n,name:"MuiLink"}),a=e.className,i=e.color,s=void 0===i?"primary":i,l=e.component,c=void 0===l?"a":l,u=e.onBlur,d=e.onFocus,p=e.TypographyClasses,h=e.underline,f=void 0===h?"always":h,g=e.variant,v=void 0===g?"inherit":g,x=e.sx,Z=(0,S.Z)(e,T),b=(0,P.Z)(),y=b.isFocusVisibleRef,M=b.onBlur,D=b.onFocus,B=b.ref,L=r.useState(!1),_=(0,o.Z)(L,2),z=_[0],H=_[1],I=(0,A.Z)(t,B),X=(0,j.Z)({},e,{color:s,component:c,focusVisible:z,underline:f,variant:v}),E=function(n){var t=n.classes,e=n.component,r=n.focusVisible,o=n.underline,a={root:["root","underline".concat((0,F.Z)(o)),"button"===e&&"button",r&&"focusVisible"]};return(0,k.Z)(a,N,t)}(X);return(0,m.jsx)(V,(0,j.Z)({color:s,className:(0,C.Z)(E.root,a),classes:p,component:c,onBlur:function(n){M(n),!1===y.current&&H(!1),u&&u(n)},onFocus:function(n){D(n),!0===y.current&&H(!0),d&&d(n)},ref:I,ownerState:X,variant:v,sx:[].concat((0,w.Z)(Object.keys(W).includes(s)?[]:[{color:s}]),(0,w.Z)(Array.isArray(x)?x:[x]))},Z))})),I=e(1889),X=e(168),E=e(2554);function q(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function O(n){return parseFloat(n)}function Y(n){return(0,D.Z)("MuiSkeleton",n)}(0,M.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var G,J,K,Q,U,$,nn,tn,en=["animation","className","component","height","style","variant","width"],rn=(0,E.F4)(U||(U=G||(G=(0,X.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),on=(0,E.F4)($||($=J||(J=(0,X.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),an=(0,a.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=q(t.shape.borderRadius)||"px",o=O(t.shape.borderRadius);return(0,j.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,_.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(r,"/").concat(Math.round(o/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,E.iv)(nn||(nn=K||(K=(0,X.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),rn)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,E.iv)(tn||(tn=Q||(Q=(0,X.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),on,(e.vars||e).palette.action.hover)})),sn=r.forwardRef((function(n,t){var e=(0,R.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,o=void 0===r?"pulse":r,a=e.className,i=e.component,s=void 0===i?"span":i,l=e.height,c=e.style,u=e.variant,d=void 0===u?"text":u,p=e.width,h=(0,S.Z)(e,en),f=(0,j.Z)({},e,{animation:o,component:s,variant:d,hasChildren:Boolean(h.children)}),g=function(n){var t=n.classes,e=n.variant,r=n.animation,o=n.hasChildren,a=n.width,i=n.height,s={root:["root",e,r,o&&"withChildren",o&&!a&&"fitContent",o&&!i&&"heightAuto"]};return(0,k.Z)(s,Y,t)}(f);return(0,m.jsx)(an,(0,j.Z)({as:s,ref:t,className:(0,C.Z)(g.root,a),ownerState:f},h,{style:(0,j.Z)({width:p,height:l},c)}))})),ln=sn;function cn(n){return(0,D.Z)("MuiCardActions",n)}(0,M.Z)("MuiCardActions",["root","spacing"]);var un=["disableSpacing","className"],dn=(0,a.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,!e.disableSpacing&&t.spacing]}})((function(n){var t=n.ownerState;return(0,j.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),pn=r.forwardRef((function(n,t){var e=(0,R.Z)({props:n,name:"MuiCardActions"}),r=e.disableSpacing,o=void 0!==r&&r,a=e.className,i=(0,S.Z)(e,un),s=(0,j.Z)({},e,{disableSpacing:o}),l=function(n){var t=n.classes,e={root:["root",!n.disableSpacing&&"spacing"]};return(0,k.Z)(e,cn,t)}(s);return(0,m.jsx)(dn,(0,j.Z)({className:(0,C.Z)(l.root,a),ownerState:s,ref:t},i))})),hn=(0,a.ZP)(g.Z)({fontSize:"24px",textAlign:"start",fontWeight:"700",paddingTop:"4px",marginBottom:"16px"}),mn=(0,a.ZP)(g.Z)({fontSize:"16px",textAlign:"start",fontWeight:"400",color:"#111321",paddingBottom:"8px",position:"relative",marginBottom:"40px"}),fn=(0,a.ZP)(ln)({height:"8px",marginTop:"60px",borderRadius:"40px",background:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)"}),gn=(0,a.ZP)(g.Z)({display:"block",fontSize:"16px",fontWeight:"400",color:"#111111"}),vn=(0,a.ZP)(pn)({justifyContent:"space-between",position:"absolute",bottom:"0",width:"80%"}),xn=((0,a.ZP)(H)({color:"#F59256"}),function(n){var t=n._id,e=n.title,r=n.description,o=n.date,a=n.url,i=function(n){if("string"===typeof n){var t=new Date(n),e=""+(t.getMonth()+1),r=""+t.getDate(),o=t.getFullYear();return e.length<2&&(e="0"+e),r.length<2&&(r="0"+r),[r,e,o].join("/")}throw new Error("Date isn't a string")}(o);return(0,m.jsxs)(I.ZP,{component:"li",item:!0,mobile:12,tablet:6,desktop:4,style:{position:"relative",marginLeft:"auto",marginRight:"auto"},children:[(0,m.jsx)(fn,{variant:"rectangular"}),(0,m.jsxs)(Z.Z,{sx:{height:"100%"},variant:"standart",children:[t,(0,m.jsxs)(b.Z,{style:{maxHeight:200,overflow:"hidden"},children:[(0,m.jsx)(hn,{variant:"h5",component:"div",children:e}),(0,m.jsxs)(mn,{style:{maxHeight:"110px",overflow:"hidden"},children:[r,(0,m.jsx)("br",{})]}),(0,m.jsxs)(vn,{children:[(0,m.jsx)(gn,{sx:{mr:1},color:"text.secondary",children:i}),(0,m.jsx)(H,{href:a,target:"_blank",rel:"noopener",color:"primary",children:"Read more"})]})]})]})]})}),Zn=(0,a.ZP)(I.ZP)({paddingLeft:"0px",marginTop:"0px",marginBottom:"0px"}),bn=function(n){return n.news},wn=e(9217),yn=function(){var n=(0,p.I0)();(0,r.useEffect)((function(){n((0,h.a)())}),[n]);var t=(0,p.v9)(bn),e=t.news,o=t.error,a=t.isLoading,i=function(n){var t;return null===(t=(0,w.Z)(n))||void 0===t?void 0:t.sort((function(n,t){return new Date(n.date)-new Date(t.date)}))}(e);return(0,m.jsxs)(Zn,{component:"ul",container:!0,columnSpacing:3,children:[o&&(0,m.jsx)("p",{children:o.data}),a?(0,m.jsx)(wn.a,{}):"",e&&i.map((function(n){var t=n._id,e=n.title,r=n.description,o=n.date,a=n.url;return(0,m.jsx)(xn,{title:e,date:o,description:r,id:t,url:a},t)}))]})},Sn=e(1614);function jn(){return(0,m.jsxs)(Sn.Z,{component:"main",children:[(0,m.jsx)(x,{text:"News"}),(0,m.jsx)(f,{}),(0,m.jsx)(yn,{})]})}},1703:function(n,t,e){var r=e(4836);t.Z=void 0;var o=r(e(5649)),a=e(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i}}]);
//# sourceMappingURL=436.c9701758.chunk.js.map