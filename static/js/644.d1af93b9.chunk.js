"use strict";(self.webpackChunkpet_support_project_frontend=self.webpackChunkpet_support_project_frontend||[]).push([[644],{9644:(e,s,n)=>{n.r(s),n.d(s,{default:()=>v});var r=n(5865),o=n(5043),i=n(8783),t=n(3516),a=n(3033),d=n(4810),l=n(1128),c=n(9456),p=n(3216),x=n(9809),u=n(1e3),m=n(3559),j=n(3632),w=n(266),h=n(579);const f=a.Ik().shape({password:a.Yj().min(7).max(32).matches(/^[a-zA-Z0-9]*$/,"Password must contain only latin letters and/or numbers").required(),confirmPassword:a.Yj().oneOf([a.KR("password"),null],"Passwords must match").min(7).max(32).required()}),b=e=>{let{confirmationToken:s}=e;const{isLoading:n}=(0,c.d4)(l.x),r=(0,c.wA)(),i=(0,p.Zp)(),[a,b]=(0,o.useState)(!1),[v,k]=(0,o.useState)(!1);return(0,h.jsx)(t.l1,{initialValues:{email:""},validationSchema:f,onSubmit:e=>{let{password:n}=e;r((0,w.cw)({body:{password:n},resetToken:s})),i("/login")},children:(0,h.jsxs)(t.lV,{children:[(0,h.jsxs)(u.A,{sx:{position:"relative"},children:[(0,h.jsx)(x.sQ,{type:a?"text":"password",name:"password",placeholder:"Password",disableunderline:"true"}),(0,h.jsx)(x.Bj,{"aria-label":"toggle password visibility",onClick:()=>b((e=>!e)),onMouseDown:e=>{e.preventDefault()},edge:"end",children:a?(0,h.jsx)(m.A,{}):(0,h.jsx)(j.A,{})}),(0,h.jsx)(t.Kw,{component:"div",name:"password",children:e=>(0,h.jsxs)(x.yn,{children:["*",e]})})]}),(0,h.jsxs)(u.A,{sx:{position:"relative"},children:[(0,h.jsx)(x.sQ,{type:v?"text":"password",name:"confirmPassword",placeholder:"Confirm Password",disableunderline:"true"}),(0,h.jsx)(x.Bj,{"aria-label":"toggle confirmPassword visibility",onClick:()=>k((e=>!e)),onMouseDown:e=>{e.preventDefault()},edge:"end",children:v?(0,h.jsx)(m.A,{}):(0,h.jsx)(j.A,{})}),(0,h.jsx)(t.Kw,{component:"div",name:"confirmPassword",children:e=>(0,h.jsxs)(x.yn,{children:["*",e]})})]}),(0,h.jsx)(x.pr,{variant:"contained",type:"submit",sx:{mt:0},children:n?(0,h.jsx)(d.Ff,{}):"Reset"})]})})};function v(){const{confirmationToken:e}=(0,p.g)();return(0,h.jsx)(i._3,{children:(0,h.jsxs)(i.HD,{children:[(0,h.jsx)(r.A,{variant:"h3",sx:{mb:3},children:"Enter your new password"}),(0,h.jsx)(b,{confirmationToken:e})]})})}}}]);
//# sourceMappingURL=644.d1af93b9.chunk.js.map