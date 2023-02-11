"use strict";(self.webpackChunkpet_support_project_frontend=self.webpackChunkpet_support_project_frontend||[]).push([[211],{5211:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var i=t(2791),r=t(1413),s=t(9439),a=t(9434),o=t(7689),l=t(5822),c=t(2506),d=t(2797),u=t(9359),m=t(8870),h=t(9230),x=t(9569),p=t(3710),f=t(3329),j=d.Ry().shape({email:d.Z_().min(8).max(63).matches(/^[^-n]+[a-zA-Z0-9.,!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,'Email must not contain the "-" as a first or last character').email().required(),password:d.Z_().min(7).max(32).matches(/^[a-zA-Z0-9]*$/,"Password must contain only latin letters and/or numbers").required(),confirmPassword:d.Z_().oneOf([d.iH("password"),null],"Passwords must match").min(7).max(32).required()}),v=function(e){var n=e.next,t=e.data,r=(0,h.$G)("common").t,a=(0,i.useState)(!1),o=(0,s.Z)(a,2),l=o[0],d=o[1],v=(0,i.useState)(!1),y=(0,s.Z)(v,2),Z=y[0],g=y[1];return(0,f.jsx)(c.J9,{initialValues:t,validationSchema:j,onSubmit:function(e){n(e)},children:(0,f.jsxs)(c.l0,{children:[(0,f.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,f.jsx)(u.Fy,{type:"email",name:"email",placeholder:r("Registration.form.1linePlaceholder"),disableunderline:"true"}),(0,f.jsx)(c.Bc,{component:"div",name:"email",children:function(e){return(0,f.jsxs)(u.y,{children:["*",e]})}})]}),(0,f.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,f.jsx)(u.Fy,{type:l?"text":"password",name:"password",placeholder:r("Registration.form.2linePlaceholder"),disableunderline:"true"}),(0,f.jsx)(u.Qh,{"aria-label":"toggle password visibility",onClick:function(){return d((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:l?(0,f.jsx)(x.Z,{}):(0,f.jsx)(p.Z,{})}),(0,f.jsx)(c.Bc,{component:"div",name:"password",children:function(e){return(0,f.jsxs)(u.y,{children:["*",e]})}})]}),(0,f.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,f.jsx)(u.Fy,{type:Z?"text":"password",name:"confirmPassword",placeholder:r("Registration.form.3linePassPlaceholder"),disableunderline:"true"}),(0,f.jsx)(u.Qh,{"aria-label":"toggle confirmPassword visibility",onClick:function(){return g((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:Z?(0,f.jsx)(x.Z,{}):(0,f.jsx)(p.Z,{})}),(0,f.jsx)(c.Bc,{component:"div",name:"confirmPassword",children:function(e){return(0,f.jsxs)(u.y,{children:["*",e]})}})]}),(0,f.jsx)(u.OL,{variant:"contained",type:"submit",children:r("Registration.form.btn")})]})})},y=t(4289),Z=t(2491),g=d.Ry().shape({name:d.Z_().required(),city:d.Z_().matches(/^[A-Za-z,\s\u0400-\u04FF]*$/,"String must contain only letters").required(),phone:d.Z_().min(13).max(13).matches(/^[+][3][8][0]+[0-9]*$/,'Phone must contain only numbers and start with "+380"').required()}),w=function(e){var n=e.next,t=e.prev,i=e.data,r=(0,h.$G)("common").t,s=(0,a.v9)(y.v).isLoading;return(0,f.jsx)(c.J9,{initialValues:i,validationSchema:g,onSubmit:function(e,t){var i=t.resetForm;n(e,!0),i()},children:function(e){var n=e.values;return(0,f.jsxs)(c.l0,{children:[(0,f.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,f.jsx)(u.Fy,{type:"text",name:"name",placeholder:r("Registration.form.4linePlaceholder"),disableunderline:"true"}),(0,f.jsx)(c.Bc,{component:"div",name:"name",children:function(e){return(0,f.jsxs)(u.y,{children:["*",e]})}})]}),(0,f.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,f.jsx)(u.Fy,{type:"text",name:"city",placeholder:r("Registration.form.5linePlaceholder"),disableunderline:"true"}),(0,f.jsx)(c.Bc,{component:"div",name:"city",children:function(e){return(0,f.jsxs)(u.y,{children:["*",e]})}})]}),(0,f.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,f.jsx)(u.Fy,{type:"tel",name:"phone",placeholder:r("Registration.form.6linePlaceholder"),disableunderline:"true"}),(0,f.jsx)(c.Bc,{component:"div",name:"phone",children:function(e){return(0,f.jsxs)(u.y,{children:["*",e]})}})]}),(0,f.jsx)(u.OL,{variant:"contained",type:"submit",children:s?(0,f.jsx)(Z.L3,{}):r("Registration.form.finalBtn")}),(0,f.jsx)(u.OL,{variant:"outlined",type:"button",onClick:function(){return t(n)},children:r("Registration.form.backBtn")})]})}})},b=function(){var e=(0,i.useState)({email:"",password:"",confirmPassword:"",name:"",city:"",phone:""}),n=(0,s.Z)(e,2),t=n[0],c=n[1],d=(0,i.useState)(0),u=(0,s.Z)(d,2),m=u[0],h=u[1],x=(0,a.I0)(),p=(0,o.s0)(),j=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(c((function(n){return(0,r.Z)((0,r.Z)({},n),e)})),n)return x((0,l.a$)({email:e.email,password:e.password,name:e.name,city:e.city,phone:e.phone})),void p("/verification");h((function(e){return e+1}))},y=[(0,f.jsx)(v,{next:j,data:t}),(0,f.jsx)(w,{next:j,prev:function(e){c((function(n){return(0,r.Z)((0,r.Z)({},n),e)})),h((function(e){return e-1}))},data:t})];return(0,f.jsx)(f.Fragment,{children:y[m]})},P=t(1087),R=t(2172);var _=function(){var e=(0,h.$G)("common").t;return(0,f.jsx)(R.P0,{children:(0,f.jsxs)(R.vs,{children:[(0,f.jsxs)(R.z,{children:[" ",e("Registration.title")," "]}),(0,f.jsx)(b,{}),(0,f.jsxs)(R.T5,{children:[e("Registration.footer.msg")," ",(0,f.jsx)(P.rU,{to:"/login",children:e("Registration.footer.link")})]})]})})}}}]);
//# sourceMappingURL=211.f19f876a.chunk.js.map