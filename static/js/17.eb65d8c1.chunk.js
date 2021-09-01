(this["webpackJsonpmy-team-board"]=this["webpackJsonpmy-team-board"]||[]).push([[17],{144:function(e,t,a){"use strict";var n=a(138),s=a(0);t.a=function(e){var t=Object(s.useState)(e||!1),a=Object(n.a)(t,2),r=a[0],i=a[1];return{toggle:function(){i((function(e){return!e}))},handleOpen:function(){i(!0)},handleClose:function(){i(!1)},show:r}}},191:function(e,t,a){"use strict";var n=a(138),s=a(0),r=a(610),i=a(605),o=a(535),c=a(2);t.a=function(e){var t=Object(s.useState)({message:"",open:!1,type:"success"}),a=Object(n.a)(t,2),l=a[0],d=a[1];var m=function(){d({message:"",open:!1,type:"success"})},u=e||{vertical:"top",horizontal:"right"},b=u.vertical,p=u.horizontal;return{showMsg:function(e,t){d({message:e,open:!0,type:t})},SnackbarComponent:Object(s.useCallback)((function(){return Object(c.jsx)(r.a,{open:l.open,autoHideDuration:9e4,onClose:m,anchorOrigin:{vertical:b,horizontal:p},TransitionComponent:o.a,children:Object(c.jsx)(i.a,{onClose:m,severity:l.type,children:l.message})},b+p)}),[l,b,p])}}},281:function(e,t,a){"use strict";var n=a(1),s=a(5),r=a(0),i=(a(4),a(7)),o=a(15),c=a(12),l=a(174),d=r.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,m=e.component,u=void 0===m?"div":m,b=e.disablePointerEvents,p=void 0!==b&&b,j=e.disableTypography,h=void 0!==j&&j,g=e.position,O=e.variant,x=Object(s.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),v=Object(l.b)()||{},f=O;return O&&v.variant,v&&!f&&(f=v.variant),r.createElement(l.a.Provider,{value:null},r.createElement(u,Object(n.a)({className:Object(i.a)(c.root,d,"end"===g?c.positionEnd:c.positionStart,p&&c.disablePointerEvents,v.hiddenLabel&&c.hiddenLabel,"filled"===f&&c.filled,"dense"===v.margin&&c.marginDense),ref:t},x),"string"!==typeof a||h?a:r.createElement(o.a,{color:"textSecondary"},a)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},608:function(e,t,a){"use strict";a.r(t);var n=a(139),s=a.n(n),r=a(140),i=a(138),o=a(3),c=a(0),l=a.n(c),d=a(134),m=a(31),u=a(25),b=a(15),p=a(281),j=a(536),h=a(537),g=a(158),O=Object(g.a)(c.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),x=Object(g.a)(c.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),v=a(145),f=a(46),w=a(10),y=a(33),S=a(247),E=a(224),C=a(147),z=a(144),N=a(142),k=a(45),M=a.n(k),P=a(191),L=a(2),T=C.a().shape({email:C.c().required("Email is required").email("Invalid Email"),password:C.c().required("Password is required").min(6,"password is too short")}),B={email:"",password:""},D=function(){var e=Object(z.a)(),t=e.show,a=e.toggle,n=Object(P.a)(),o=n.SnackbarComponent,c=n.showMsg,d=l.a.useState(!1),m=Object(i.a)(d,2),b=m[0],g=m[1],y=Object(w.g)();function S(){return(S=Object(r.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,M.a.post("/auth/login",t);case 4:n=e.sent,(r=n.data).success?(c(r.message,"success"),a(),setTimeout((function(){y.push("/team")}),1e3)):(g(!1),c(r.message,"error")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),g(!1),c("No valid credentials","error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(L.jsxs)(l.a.Fragment,{children:[Object(L.jsx)(v.b,{initialValues:B,validationSchema:T,onSubmit:function(e,t){return function(e,t){return S.apply(this,arguments)}(e,t.resetForm)},children:function(e){var n=e.handleSubmit,s=e.handleChange,r=e.handleBlur,i=e.errors,o=e.values,c=e.touched;return Object(L.jsxs)(v.a,{onSubmit:n,autoComplete:"off",children:[Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{className:"bg-text-secondary",children:"Email Address *"}),Object(L.jsx)(N.a,{className:"w-100",placeholder:"Enter your email",variant:"outlined",size:"small",onChange:s,onBlur:r,name:"email",value:o.email,error:c.email&&!!i.email,helperText:c.email&&i.email})]}),Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{className:"bg-text-secondary",children:"Password *"}),Object(L.jsx)(N.a,{className:"w-100",placeholder:"Enter your password",variant:"outlined",size:"small",type:t?"text":"password",onChange:s,onBlur:r,name:"password",value:o.password,error:c.password&&!!i.password,helperText:c.password&&i.password,InputProps:{endAdornment:Object(L.jsx)(p.a,{position:"end",children:Object(L.jsx)(j.a,{size:"small",onClick:a,children:t?Object(L.jsx)(O,{fontSize:"small"}):Object(L.jsx)(x,{fontSize:"small"})})})}})]}),Object(L.jsx)(u.a,{className:"text-right",mb:2,children:Object(L.jsx)(f.b,{to:"/forgot-password",children:"Forgot password?"})}),Object(L.jsx)(h.a,{disabled:b,type:"submit",className:"w-100",variant:"extended",color:"primary",children:b?"Loading...":"Sign in"})]})}}),Object(L.jsx)(o,{})]})};t.default=function(){var e=Object(y.a)(),t=Object(d.a)(e.breakpoints.up("sm")),a={minHeight:"100vh",height:"100%"};return Object(L.jsxs)(m.a,{container:!0,children:[Object(L.jsx)(m.a,{item:!0,xs:!0,style:t?Object(o.a)({padding:"3rem"},a):Object(o.a)({padding:"1.5rem"},a),children:Object(L.jsxs)(u.a,{width:"100%",pr:{xs:0,sm:3,md:5},height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",children:[Object(L.jsx)("img",{src:E.a,alt:"app logo"})," ",Object(L.jsx)("br",{}),Object(L.jsx)(b.a,{variant:"h4",className:"fw-700 bg-text-primary",gutterBottom:!0,children:"Sign in"}),Object(L.jsxs)(b.a,{variant:"subtitle2",gutterBottom:!0,children:["Don't have an account? \xa0",Object(L.jsx)(f.b,{to:"/register",children:"Sign up"})]}),Object(L.jsx)(u.a,{mt:1,width:"100%",children:Object(L.jsx)(D,{})})]})}),t&&Object(L.jsx)(m.a,{item:!0,xs:6,children:Object(L.jsx)(S.a,{})})]})}}}]);
//# sourceMappingURL=17.eb65d8c1.chunk.js.map