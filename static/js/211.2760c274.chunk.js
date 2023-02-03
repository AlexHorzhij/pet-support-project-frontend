"use strict";(self.webpackChunkpet_support_project_frontend=self.webpackChunkpet_support_project_frontend||[]).push([[211],{9359:function(n,e,t){t.d(e,{II:function(){return d},y:function(){return s},zx:function(){return p}});var i,r,a,o=t(168),c=t(6088),d=c.Z.input(i||(i=(0,o.Z)(["\n  background-color: #fdf7f2;\n  width: 100%;\n  height: 40px;\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  padding: 0 32px;\n  margin-bottom: 16px;\n\n  &::placeholder {\n    font-family: 'Manrope';\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.36;\n    letter-spacing: 0.04em;\n    color: rgba(17, 17, 17, 0.6);\n  }\n\n  &:last-child {\n    margin-bottom: 40px;\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 52px;\n\n    &::placeholder {\n      font-size: 18px;\n      line-height: 25px;\n    }\n  }\n"]))),s=c.Z.div(r||(r=(0,o.Z)(["\n  padding: 5px 20px;\n  margin-bottom: 10px;\n  color: #f59256;\n"]))),p=c.Z.button(a||(a=(0,o.Z)(["\n  background-color: ",";\n  color: ",";\n  border: 2px solid #f59256;\n  border-radius: 40px;\n  width: 100%;\n  height: 44px;\n  margin-top: 16px;\n\n  @media screen and (min-width: 1280px) {\n    height: 48px;\n  }\n"])),(function(n){return n.color?"#f59256":"#fff"}),(function(n){return n.color?"#fff":"#000"}))},2172:function(n,e,t){t.d(e,{Aq:function(){return u},T5:function(){return l},vs:function(){return x}});var i,r,a,o=t(168),c=t(6088),d=t(4331),s=t(6865),p=t(6638),u=c.Z.div(i||(i=(0,o.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding-top: 100px;\n  background-color: #fdf7f2;\n  background-image: url(",");\n  background-size: 100% 160px;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: contain;\n  background-attachment: fixed;\n  overflow: auto;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 240px;\n    background-size: 100% 400px;\n    background-image: url(",");\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 150px;\n    background-size: 100% 390px;\n    background-image: url(",");\n  }\n"])),d,s,p),x=c.Z.div(r||(r=(0,o.Z)(["\n  width: 280px;\n  padding: 40px 0 40px 0;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    min-height: 300px;\n    padding: 60px 80px 40px 80px;\n    background-color: #fff;\n    border-radius: 40px;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 80px 60px 80px;\n  }\n"]))),l=c.Z.p(a||(a=(0,o.Z)(["\n  margin-top: 40px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.3;\n  text-align: center;\n"])))},5211:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var i=t(2791),r=t(1413),a=t(9439),o=t(9434),c=t(7689),d=t(5822),s=t(5705),p=t(2797),u=t(9359),x=t(3329),l=p.Ry().shape({email:p.Z_().min(10).max(63).matches(/^[^-n]+[a-zA-Z0-9.,!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,'Email must not contain the "-" as a first or last character').email().required(),password:p.Z_().min(7).max(32).matches(/^[a-zA-Z0-9]*$/,"Password must contain only letters and/or numbers").required(),confirmPassword:p.Z_().oneOf([p.iH("password"),null],"Passwords must match").min(7).max(32).required()}),m=function(n){var e=n.next,t=n.data;return(0,x.jsx)(s.J9,{initialValues:t,validationSchema:l,onSubmit:function(n){e(n)},children:(0,x.jsxs)(s.l0,{children:[(0,x.jsx)(s.gN,{type:"email",name:"email",placeholder:"Email",as:u.II}),(0,x.jsx)(s.Bc,{component:"div",name:"email",children:function(n){return(0,x.jsx)(u.y,{children:n})}}),(0,x.jsx)(s.gN,{type:"password",name:"password",placeholder:"Password",as:u.II}),(0,x.jsx)(s.Bc,{component:"div",name:"password",children:function(n){return(0,x.jsx)(u.y,{children:n})}}),(0,x.jsx)(s.gN,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",as:u.II}),(0,x.jsx)(s.Bc,{component:"div",name:"confirmPassword",children:function(n){return(0,x.jsx)(u.y,{children:n})}}),(0,x.jsx)(u.zx,{color:"accent",type:"submit",children:"Next"})]})})},h=t(4289),f=t(9732),g=p.Ry().shape({name:p.Z_().required(),city:p.Z_().matches(/^[A-Z][a-z]+,\s+[A-Z][a-z]*$/,"Begin with capital letters, contain comma and space").required(),phone:p.Z_().min(13).max(13).matches(/^[+][3][8][0]+[0-9]*$/,'Phone must contain only numbers and start with "+380"').required()}),b=function(n){var e=n.next,t=n.prev,i=n.data,r=(0,o.v9)(h.v).isLoading;return(0,x.jsx)(s.J9,{initialValues:i,validationSchema:g,onSubmit:function(n,t){var i=t.resetForm;e(n,!0),i()},children:function(n){var e=n.values;return(0,x.jsxs)(s.l0,{children:[(0,x.jsx)(s.gN,{type:"text",name:"name",placeholder:"Name",as:u.II}),(0,x.jsx)(s.Bc,{component:"div",name:"name",children:function(n){return(0,x.jsx)(u.y,{children:n})}}),(0,x.jsx)(s.gN,{type:"text",name:"city",placeholder:"City, Region",as:u.II}),(0,x.jsx)(s.Bc,{component:"div",name:"city",children:function(n){return(0,x.jsx)(u.y,{children:n})}}),(0,x.jsx)(s.gN,{type:"tel",name:"phone",placeholder:"Mobile phone",as:u.II}),(0,x.jsx)(s.Bc,{component:"div",name:"phone",children:function(n){return(0,x.jsx)(u.y,{children:n})}}),(0,x.jsx)(u.zx,{color:"accent",type:"submit",children:r?(0,x.jsx)(f.aN,{}):"Register"}),(0,x.jsx)(u.zx,{type:"button",onClick:function(){return t(e)},children:"Back"})]})}})},j=function(){var n=(0,i.useState)({email:"",password:"",confirmPassword:"",name:"",city:"",phone:""}),e=(0,a.Z)(n,2),t=e[0],s=e[1],p=(0,i.useState)(0),u=(0,a.Z)(p,2),l=u[0],h=u[1],f=(0,o.I0)(),g=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(s((function(e){return(0,r.Z)((0,r.Z)({},e),n)})),e){var t=f((0,d.a$)({email:n.email,password:n.password,name:n.name,city:n.city,phone:n.phone}));return t.success?(0,x.jsx)(c.Fg,{to:"/login",replace:!0}):void 0}h((function(n){return n+1}))},j=[(0,x.jsx)(m,{next:g,data:t}),(0,x.jsx)(b,{next:g,prev:function(n){s((function(e){return(0,r.Z)((0,r.Z)({},e),n)})),h((function(n){return n-1}))},data:t})];return(0,x.jsx)(x.Fragment,{children:j[l]})},w=t(890),v=t(2172),Z=t(1087);var y=function(){return(0,x.jsx)(v.Aq,{children:(0,x.jsxs)(v.vs,{children:[(0,x.jsx)(w.Z,{sx:{textAlign:"center",mb:"40px"},variant:"h3",children:"Register"}),(0,x.jsx)(j,{}),(0,x.jsxs)(v.T5,{children:["Already have an account? ",(0,x.jsx)(Z.rU,{to:"/login",children:"Login"})]})]})})}},6638:function(n,e,t){n.exports=t.p+"static/media/desktop.c3f5088fd33a223bf129.png"},4331:function(n,e,t){n.exports=t.p+"static/media/mobile.4113b880676e40779373.png"},6865:function(n,e,t){n.exports=t.p+"static/media/tablet.328e161ba80c6f2b2d6d.png"}}]);
//# sourceMappingURL=211.2760c274.chunk.js.map