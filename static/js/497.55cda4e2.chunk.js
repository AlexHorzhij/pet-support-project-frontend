"use strict";(self.webpackChunkpet_support_project_frontend=self.webpackChunkpet_support_project_frontend||[]).push([[497],{397:function(n,t,e){e.d(t,{D:function(){return s}});e(2791);var a=e(6934),i=e(890),r=(0,a.ZP)(i.Z)({fontSize:"48px",textAlign:"center"}),o=e(3329),s=function(n){var t=n.text;return(0,o.jsx)(r,{variant:"h2",children:t})}},1027:function(n,t,e){e.r(t),e.d(t,{default:function(){return Sn}});var a=e(2791),i=e(9439),r=e(6934),o=e(5527),s=(0,r.ZP)(o.Z)({background:"#FFFFFF",borderRadius:"20px",boxShadow:"7px 4px 14px rgba(49, 21, 4, 0.07)",marginRight:"auto",marginLeft:"auto",marginTop:"40px"}),d=e(3400),c=e(5403),p=e(1572),l=e(9434),u=e(9776),h=e(1087),g=e(3329);function x(){var n=(0,l.I0)(),t=(0,h.lr)(),e=(0,i.Z)(t,2),a=e[0],r=e[1],o=a.get("search")?a.get("search"):"";return(0,g.jsxs)(s,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",maxWidth:400},onSubmit:function(t){t.preventDefault(),console.log(o),n((0,u.b)(o))},children:[(0,g.jsx)(p.ZP,{sx:{ml:1,flex:1,pl:1},placeholder:"Search news",inputProps:{"aria-label":"search"},onChange:function(n){r({search:n.currentTarget.value})}}),(0,g.jsx)(d.Z,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:(0,g.jsx)(c.Z,{})})]})}var m=e(397),f=e(9504),b=e(533),v=e(1889),Z=e(890),w=e(168),k=e(3366),j=e(7462),S=e(8182),y=e(2554),C=e(4419);function F(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function R(n){return parseFloat(n)}var P=e(2065),A=e(1402),z=e(5878),M=e(1217);function _(n){return(0,M.Z)("MuiSkeleton",n)}(0,z.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var T,B,N,D,W,L,I,X,E=["animation","className","component","height","style","variant","width"],H=(0,y.F4)(W||(W=T||(T=(0,w.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),O=(0,y.F4)(L||(L=B||(B=(0,w.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),Y=(0,r.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,a=F(t.shape.borderRadius)||"px",i=R(t.shape.borderRadius);return(0,j.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,P.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(a,"/").concat(Math.round(i/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,y.iv)(I||(I=N||(N=(0,w.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),H)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,y.iv)(X||(X=D||(D=(0,w.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),O,(e.vars||e).palette.action.hover)})),q=a.forwardRef((function(n,t){var e=(0,A.Z)({props:n,name:"MuiSkeleton"}),a=e.animation,i=void 0===a?"pulse":a,r=e.className,o=e.component,s=void 0===o?"span":o,d=e.height,c=e.style,p=e.variant,l=void 0===p?"text":p,u=e.width,h=(0,k.Z)(e,E),x=(0,j.Z)({},e,{animation:i,component:s,variant:l,hasChildren:Boolean(h.children)}),m=function(n){var t=n.classes,e=n.variant,a=n.animation,i=n.hasChildren,r=n.width,o=n.height,s={root:["root",e,a,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]};return(0,C.Z)(s,_,t)}(x);return(0,g.jsx)(Y,(0,j.Z)({as:s,ref:t,className:(0,S.Z)(m.root,r),ownerState:x},h,{style:(0,j.Z)({width:u,height:d},c)}))})),G=e(7621);function J(n){return(0,M.Z)("MuiCardActions",n)}(0,z.Z)("MuiCardActions",["root","spacing"]);var K,Q,U=["disableSpacing","className"],V=(0,r.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,!e.disableSpacing&&t.spacing]}})((function(n){var t=n.ownerState;return(0,j.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),$=a.forwardRef((function(n,t){var e=(0,A.Z)({props:n,name:"MuiCardActions"}),a=e.disableSpacing,i=void 0!==a&&a,r=e.className,o=(0,k.Z)(e,U),s=(0,j.Z)({},e,{disableSpacing:i}),d=function(n){var t=n.classes,e={root:["root",!n.disableSpacing&&"spacing"]};return(0,C.Z)(e,J,t)}(s);return(0,g.jsx)(V,(0,j.Z)({className:(0,S.Z)(d.root,r),ownerState:s,ref:t},o))})),nn=(0,r.ZP)(q)({height:"8px",borderRadius:"40px",background:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)"}),tn=(0,r.ZP)(G.Z)({border:"none",borderRadius:"0px",backgroundColor:"inherit",paddingBottom:"40px"}),en=(0,r.ZP)(Z.Z)({fontWeight:"700",fontSize:"24px",lineHeight:"1.35",textAlign:"start",marginTop:"4px"}),an=(0,r.ZP)(Z.Z)({position:"relative",fontWeight:"400",fontSize:"16px",textAlign:"start",color:"#111321",marginTop:"16px",marginBottom:"40px"}),rn=(0,r.ZP)($)({position:"absolute",justifyContent:"space-between",bottom:"0",width:"93%"}),on=(0,r.ZP)(Z.Z)({display:"block",fontSize:"16px",fontWeight:"400",color:"#111111"}),sn=((0,r.ZP)(b.Z)({color:"#F59256"}),function(n){var t=n._id,e=n.title,a=n.description,i=n.date,r=n.url,o=function(n){var t=new Date(n),e=""+(t.getMonth()+1),a=""+t.getDate(),i=t.getFullYear();return e.length<2&&(e="0"+e),a.length<2&&(a="0"+a),[a,e,i].join("/")}(i);return(0,g.jsxs)(v.ZP,{component:"li",item:!0,sm:12,md:6,lg:4,style:{position:"relative",marginLeft:"auto",marginRight:"auto",paddingTop:"0px",marginTop:"60px"},children:[(0,g.jsx)(nn,{variant:"rectangular",sx:{width:"86%"}}),(0,g.jsxs)(tn,{sx:{height:"100%"},variant:"standart",children:[t,(0,g.jsxs)(f.Z,{style:{overflow:"hidden",padding:"0px"},children:[(0,g.jsx)(en,{variant:"h5",component:"div",children:e}),(0,g.jsxs)(an,{style:{maxHeight:"110px",overflow:"hidden"},children:[a,(0,g.jsx)("br",{})]}),(0,g.jsxs)(rn,{children:[(0,g.jsx)(on,{sx:{mr:1},color:"text.secondary",children:o}),(0,g.jsx)(b.Z,{href:r,target:"_blank",rel:"noopener",color:"primary",children:"Read more"})]})]})]})]})}),dn=e(9217),cn=(0,r.ZP)(v.ZP)({paddingLeft:"0px",marginTop:"0px",marginBottom:"0px",paddingBottom:"100px"}),pn=e(6088),ln=e(4331),un=e(6865),hn=e(6638),gn=e.p+"static/media/fail.a434ce03d17d12d7d60f.png",xn=pn.Z.div(K||(K=(0,w.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 50px;\n  background-color: #fdf7f2;\n  background-image: url(",");\n  background-size: 100% 160px;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: contain;\n  background-attachment: fixed;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 40px;\n    background-size: 100% 400px;\n    background-image: url(",");\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 50px;\n    background-size: 100% 390px;\n    background-image: url(",");\n  }\n"])),ln,un,hn),mn=pn.Z.div(Q||(Q=(0,w.Z)(["\n  width: 280px;\n  margin-right: auto;\n  margin-left: auto;\n  background-image: url(",");\n  background-size: 20%;\n  background-repeat: no-repeat;\n  background-position: 90% 10%;\n  /* background-size: contain; */\n  overflow: auto;\n  opacity: 0.8;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    min-height: 300px;\n    padding: 60px 80px 40px 80px;\n    background-color: #fff;\n    border-radius: 40px;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 80px 60px 80px;\n  }\n"])),gn),fn=(0,pn.Z)(Z.Z)({fontWeight:"700",fontSize:"48px",backgroundColor:"#FFFFFF",borderRadius:"40px",boxShadow:"7px 4px 14px rgba(0, 0, 0, 0.11)"}),bn=(0,pn.Z)(Z.Z)({opacity:1}),vn=function(){var n=(0,h.lr)(),t=(0,i.Z)(n,1)[0].get("search");return(0,g.jsx)(xn,{children:(0,g.jsxs)(mn,{children:[(0,g.jsx)(bn,{sx:{textAlign:"center",mb:"40px"},variant:"h3",children:"SORRY!"}),(0,g.jsxs)(bn,{sx:{textAlign:"center",mb:"40px"},variant:"h3",children:["But we don't have news about",(0,g.jsxs)(fn,{component:"div",children:['"',t,'"']})]})]})})},Zn=function(n){return n.news},wn=e(3035),kn=function(){var n=(0,l.I0)();(0,a.useEffect)((function(){n((0,u.a)())}),[n]);var t=(0,l.v9)(Zn),e=t.news,i=t.error,r=t.isLoading,o=(0,wn.l)(e,"date");return(0,g.jsxs)(g.Fragment,{children:[i&&(0,g.jsx)("p",{children:i.data}),r?(0,g.jsx)(dn.a,{}):"",0===e.length&&!r&&(0,g.jsx)(vn,{}),e&&(0,g.jsx)(cn,{component:"ul",container:!0,columnSpacing:4,rowSpacing:7,children:o.map((function(n){var t=n._id,e=n.title,a=n.description,i=n.date,r=n.url;return(0,g.jsx)(sn,{title:e,date:i,description:a,id:t,url:r},t)}))})]})},jn=e(1614);function Sn(){return(0,g.jsxs)(jn.Z,{component:"main",children:[(0,g.jsx)(m.D,{text:"News"}),(0,g.jsx)(x,{}),(0,g.jsx)(kn,{})]})}},6638:function(n,t,e){n.exports=e.p+"static/media/desktop.c3f5088fd33a223bf129.png"},4331:function(n,t,e){n.exports=e.p+"static/media/mobile.4113b880676e40779373.png"},6865:function(n,t,e){n.exports=e.p+"static/media/tablet.328e161ba80c6f2b2d6d.png"}}]);
//# sourceMappingURL=497.55cda4e2.chunk.js.map