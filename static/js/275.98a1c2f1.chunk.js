"use strict";(self.webpackChunkpet_support_project_frontend=self.webpackChunkpet_support_project_frontend||[]).push([[275],{5275:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(9439),s=t(2791),o=t(9434),a=t(1087),c=t(5218),l=t(3978),u=t(8896),i=t(9776),d=function(e){return e.news},f=t(4583),h=t(9230),m=t(890),p=t(3329);function v(){var e=(0,s.useState)(""),r=(0,n.Z)(e,2),t=r[0],v=r[1],j=(0,o.v9)(d),x=j.news,g=j.error,w=j.isLoading,_=(0,a.lr)(),I=(0,n.Z)(_,2),b=I[0],k=I[1],A=b.get("search"),E=(0,o.I0)(),P=(0,h.$G)("common").t;(0,s.useEffect)((function(){if(""===A||null===A)return document.getElementById("searchForm").reset(),void E((0,i.a)());E((0,i.b)(t))}),[E,A,t]);var y=(0,f.l)(x,"date");return(0,p.jsx)(u.or,{children:(0,p.jsxs)(u.IH,{children:[(0,p.jsx)(m.Z,{variant:"h2",sx:{textAlign:"center"},children:P("NewsPage.title")}),(0,p.jsx)(l.$7,{onSubmit:function(e){""!==(null===e||void 0===e?void 0:e.trim())?e.trim().length<3||e.includes("*")?c.Am.error("Please, enter no less 3 letters for a correct search!"):e!==t?v(e):c.Am.error('We have already found "'.concat(t,'"! Please, enter new search value')):c.Am.error("Please, enter search value!")},onClear:function(e){e.preventDefault(),v(""),k(""),document.getElementById("searchForm").reset()}}),g&&(0,p.jsx)("p",{children:g.data}),w&&(0,p.jsx)(l.dM,{}),0!==x.length?(0,p.jsx)(l.pY,{news:y}):(0,p.jsx)(l.Em,{value:A}),(0,p.jsx)(l.WI,{})]})})}}}]);
//# sourceMappingURL=275.98a1c2f1.chunk.js.map