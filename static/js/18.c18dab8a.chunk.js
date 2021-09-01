(this["webpackJsonpmy-team-board"]=this["webpackJsonpmy-team-board"]||[]).push([[18],{169:function(e,t,r){"use strict";var n=r(18),a=(r(0),r(298)),c=r(144),i=r(25),s=r(116),o=r(7),l=r(2),d=Object(s.a)((function(e){var t;return{drawerOpen:(t={},Object(n.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(n.a)(t,"width","40%"),t),drawerClose:{width:0}}}));t.a=function(e,t,r){var s=d(),j=Object(c.a)(r||!1),u=j.handleClose,b=j.handleOpen,p=j.show,m=j.toggle;return{onSidenavClose:u,onSidenavOpen:b,onSidenavToggle:m,SidenavComponent:function(r){var c,d,j=r.children;return Object(l.jsx)(a.a,{transitionDuration:{enter:500,exit:1e3},variant:t,anchor:e,open:p,onClose:u,className:Object(o.a)((c={},Object(n.a)(c,s.drawerOpen,p),Object(n.a)(c,s.drawerClose,!p),c)),classes:{paper:Object(o.a)((d={},Object(n.a)(d,s.drawerOpen,p),Object(n.a)(d,s.drawerClose,!p),d))},children:Object(l.jsx)(i.a,{overflow:"hidden",children:j})})},show:p}}},170:function(e,t,r){"use strict";var n=r(0),a=r(540),c=r(309),i=r(15),s=r(310),o=r(115),l=r(144),d=r(2);t.a=function(e){var t=Object(l.a)(),r=t.show,j=t.handleClose,u=t.handleOpen,b=e.message,p=e.onConfirmClick,m=Object(n.useCallback)((function(){return Object(d.jsxs)(a.a,{open:r,onClose:j,maxWidth:"xs",children:[Object(d.jsxs)(c.a,{dividers:!0,style:{padding:"1.2rem 1rem"},children:[Object(d.jsx)(i.a,{variant:"h6",children:"Confirm"}),Object(d.jsx)("span",{children:b})]}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(o.a,{size:"small",onClick:j,children:"Close"}),Object(d.jsx)(o.a,{size:"small",variant:"contained",color:"primary",onClick:p,children:"Confirm"})]})]})}),[r,b,j,p]);return{handleClose:j,handleOpen:u,ConfirmDialog:m}}},598:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(139),c=r.n(a),i=r(140),s=r(138),o=r(18),l=r(0),d=r.n(l),j=r(116),u=r(25),b=r(15),p=r(53),m=r(7),h=r(576),O=r(577),x=r(10),f=r(546),v=r(536),g=r(554),C=r(212),y=r(575),w=r(477),k=r(545),S=r(248),D=r(189),T=r(506),_=r(115),N=r(574),I=r(572),B=r(242),z=r.n(B),W=r(182),A=r(9),P=r(570),E=r(604),R=r(543),F=r(571),L=r(573),q=r(145),M=r(147),U=r(142),V=r(146),Y=r(170),H=r(141),J=r(165),G=r(2),K=M.a().shape({title:M.c().required("Title is required")}),Q=M.a().shape({description:M.c().required("task description is required")});var X=Object(j.a)((function(e){var t;return{root:Object(o.a)({overflow:"hidden",minWidth:"540px",height:"64px"},e.breakpoints.down("xs"),{minWidth:"100%"}),content:Object(o.a)({overflow:"auto",height:"520px"},e.breakpoints.down("xs"),{height:"calc(100vh - 64px)"}),checklist:{boxShadow:"0 1px 2px 0 #0000000d",backgroundColor:e.palette.common.white,borderRadius:4,border:"1px solid #ced4da",marginTop:e.spacing(1),padding:"0.4rem 0",display:"flex",flexDirection:"row",alignItems:"center"},todo:(t={color:"#333",flexGrow:1,fontSize:"14px"},Object(o.a)(t,e.breakpoints.down("xs"),{fontSize:"13px"}),Object(o.a)(t,"&.done",{textDecoration:"line-through"}),t),iconColor:{color:"#64748B"}}})),Z=function(e){var t=e.list,r=e.setList,a=X(),c=function(e){var t,r=0,n=Object(D.a)(e);try{for(n.s();!(t=n.n()).done;)t.value.done&&r++}catch(a){n.e(a)}finally{n.f()}return r}(t),i=0===t.length?0:Math.trunc(100*c/t.length);return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsx)(P.a,{variant:"determinate",value:i,style:{marginBottom:".25rem"}}),Object(G.jsxs)(b.a,{variant:"body2",color:"textSecondary",align:"right",children:[i," %"]}),Object(G.jsx)(S.c,{droppableId:"reorderlist",children:function(e){return Object(G.jsxs)("div",Object(n.a)(Object(n.a)({ref:e.innerRef},e.droppableProps),{},{children:[t.map((function(e,t){return Object(G.jsx)(S.b,{index:t,draggableId:t+"item",children:function(t){return Object(G.jsxs)("div",Object(n.a)(Object(n.a)(Object(n.a)({className:a.checklist,ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:[Object(G.jsx)(E.a,{checked:e.done,onChange:function(t){return a=t,c=e.order,void r((function(e){return e.map((function(e){return e.order===c?Object(n.a)(Object(n.a)({},e),{},{done:a.target.checked}):e}))}));var a,c},color:"primary",inputProps:{"aria-label":"primary checkbox"}}),Object(G.jsx)("span",{className:Object(m.a)(a.todo,{done:e.done}),children:e.description}),Object(G.jsx)(v.a,{children:Object(G.jsx)(F.a,{})})]}))}},t+"ddj")})),e.placeholder]}))}})]})},$=function(e){var t=e.setList,r=Object(C.a)(),n=r.PopoverComponent,a=r.handleClick;function s(){return(s=Object(i.a)(c.a.mark((function e(r){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.description;try{t((function(e){return[].concat(Object(A.a)(e),[{description:n,done:!1,order:e.length+1}])}))}catch(a){console.error(a)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(R.a,{title:"New Item",children:Object(G.jsx)(v.a,{size:"small","aria-describedby":"new_checklist",onClick:a,children:Object(G.jsx)(I.a,{})})}),Object(G.jsx)(n,{id:"new_checklist",children:Object(G.jsx)(u.a,{p:2,children:Object(G.jsx)(q.b,{validationSchema:Q,initialValues:{description:""},onSubmit:function(e){return function(e){return s.apply(this,arguments)}(e)},children:function(e){var t=e.handleSubmit,r=e.handleBlur,n=e.handleChange,a=e.touched,c=e.errors,i=e.values;return Object(G.jsxs)(q.a,{onSubmit:t,children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Add new item"}),Object(G.jsx)(U.a,{fullWidth:!0,name:"description",variant:"outlined",size:"small",placeholder:"task description...",onChange:n,onBlur:r,value:i.description,multiline:!0,rows:2,error:a.description&&!!c.description,helperText:a.description&&c.description})]}),Object(G.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",size:"small",fullWidth:!0,children:"Add"})]})}})})})]})},ee=function(e){var t=e.currentSprint,r=e.projectId,n=e.members,a=Object(C.a)(),s=a.PopoverComponent,o=a.handleClick,l=a.handleClose,j=Object(Y.a)({onConfirmClick:function(){return f.apply(this,arguments)},message:"Are you sure you want to delete this sprint."}),u=j.ConfirmDialog,b=j.handleOpen,p=j.handleClose,m=Object(V.a)().onMutate,h=Object(H.b)(),O=h.dispatch,x=h.selectedWorkspace;function f(){return(f=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m({url:"/sprint/".concat(t._id),method:"PATCH",data:{projectId:r,workspace:x,members:n}});case 3:e.sent.success&&(p(),setTimeout((function(){O(Object(J.c)(r,t))}),0)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsx)(v.a,{"aria-describedby":"card_menu",size:"small",onClick:o,children:Object(G.jsx)(L.a,{})}),Object(G.jsx)(s,{id:"card_menu",children:Object(G.jsx)(g.a,{style:{padding:"1rem"},onClick:function(){b(),l()},children:"Remove Card"})}),Object(G.jsx)(u,{})]})},te=function(e){var t=e.onDialogClose,r=e.sprint,a=e.projectId,o=e.members,l=X(),j=d.a.useState(r.tasks||[]),b=Object(s.a)(j,2),h=b[0],O=b[1],x=Object(V.a)(),f=x.onMutate,v=x.loading,g=Object(H.b)(),C=g.dispatch,y=g.selectedWorkspace,w=Object(n.a)(Object(n.a)({},r),{},{dueDate:r.dueDate||new Date}),k=function(e){e.source,e.destination};function D(){return(D=Object(i.a)(c.a.mark((function e(i){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Object(n.a)(Object(n.a)(Object(n.a)({},r),i),{},{tasks:h}),e.next=4,f({url:"/sprint/".concat(r._id),method:"PUT",data:{sprint:s,workspace:y,projectId:a,members:o}});case 4:e.sent.success&&(t(),setTimeout((function(){C(Object(J.f)(a,s))}),0)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(G.jsx)(q.b,{initialValues:w,validationSchema:K,onSubmit:function(e){return function(e){return D.apply(this,arguments)}(e)},children:function(e){var n=e.handleSubmit,c=e.handleBlur,i=e.handleChange,s=e.errors,d=e.touched,j=e.values;return Object(G.jsxs)(q.a,{onSubmit:n,autoComplete:"off",children:[Object(G.jsxs)(u.a,{p:2,borderBottom:"1px solid lightgray",className:l.root,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[Object(G.jsx)("div",{children:Object(G.jsx)(ee,{members:o,currentSprint:r,projectId:a})}),Object(G.jsxs)("div",{children:[Object(G.jsx)(p.a,{variant:"outlined",className:l.iconColor,size:"medium",onClick:t,style:{marginRight:"0.5rem"},children:"Cancel"}),Object(G.jsx)(p.a,{disableElevation:!0,variant:"contained",color:"primary",size:"medium",type:"submit",children:v?"Loading...":"Save"})]})]}),Object(G.jsxs)(u.a,{p:2,className:Object(m.a)("content-scroll",l.content),children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Title *"}),Object(G.jsx)(U.a,{name:"title",size:"small",fullWidth:!0,placeholder:"Card title",variant:"outlined",onChange:i,onBlur:c,value:j.title,error:d.title&&!!s.title,helperText:d.title&&s.title})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Description"}),Object(G.jsx)(U.a,{name:"description",size:"small",fullWidth:!0,placeholder:"Description",variant:"outlined",onChange:i,onBlur:c,multiline:!0,rows:3,value:j.description})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Due Date"}),Object(G.jsx)(U.a,{name:"dueDate",size:"small",fullWidth:!0,placeholder:"Due date",type:"date",variant:"outlined",value:j.dueDate,onChange:i,onBlur:c})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsxs)(u.a,{mb:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[Object(G.jsx)("label",{children:"Checklist items"}),Object(G.jsx)($,{setList:O})]}),Object(G.jsx)(S.a,{onDragEnd:k,children:Object(G.jsx)(Z,{list:h,setList:O})})]})]})]})}})},re={title:""},ne=M.a().shape({title:M.c().required("Title is required")}),ae=function(e){var t=e.aspect,r=e.handleClose,n=e.members,a=Object(V.a)(),s=a.loading,o=a.onMutate,l=Object(H.b)(),j=l.dispatch,b=l.selectedWorkspace;function p(){return(p=Object(i.a)(c.a.mark((function e(a){var i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.title,e.prev=1,e.next=4,o({url:"/sprint",method:"POST",data:{sprint:{title:i,aspect:t._id},workspace:b,projectId:t.project,members:n}});case 4:(s=e.sent).success&&(r(),setTimeout((function(){j(Object(J.i)((null===t||void 0===t?void 0:t.project)||"",s.data))}),0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(G.jsx)(d.a.Fragment,{children:Object(G.jsx)(q.b,{initialValues:re,validationSchema:ne,onSubmit:function(e){return function(e){return p.apply(this,arguments)}(e)},children:function(e){var t=e.handleChange,r=e.handleSubmit,n=e.handleBlur,a=e.values,c=e.errors,i=e.touched;return Object(G.jsx)(q.a,{onSubmit:r,autoComplete:"off",children:Object(G.jsxs)(u.a,{p:2,children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"New Sprint"}),Object(G.jsx)(U.a,{fullWidth:!0,variant:"outlined",size:"small",placeholder:"title",onBlur:n,onChange:t,name:"title",value:a.title,error:i.title&&!!c.title,helperText:i.title&&c.title})]}),Object(G.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",size:"small",fullWidth:!0,children:s?"Loading...":"ADD"})]})})}})})};var ce=Object(j.a)((function(e){return{iconColor:{color:"#64748B"},mr:{marginRight:e.spacing(1)},card:{backgroundColor:"white",padding:e.spacing(2),marginTop:e.spacing(1),borderRadius:10,cursor:"pointer",boxShadow:"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"},addCardButton:{marginTop:e.spacing(1),width:"100%",borderRadius:10,color:"#64748B"}}})),ie=function(e){var t=e.providedDraggable,r=e.value,a=e.projectId,c=e.members,i=ce(),s=function(e){var t,r=0,n=Object(D.a)(e);try{for(n.s();!(t=n.n()).done;)t.value.done&&r++}catch(a){n.e(a)}finally{n.f()}return r}(r.tasks||[]),o=Object(W.a)(),l=o.DialogComponent,j=o.onDialogClose,p=o.onDialogOpen;return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsxs)("div",Object(n.a)(Object(n.a)(Object(n.a)({className:i.card,onClick:p,ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:[Object(G.jsx)(b.a,{variant:"subtitle1",children:r.title}),r.description&&Object(G.jsx)(b.a,{variant:"subtitle2",component:"p",color:"textSecondary",children:r.description.length>120?r.description.substr(0,120)+"...":r.description}),Object(G.jsxs)(u.a,{mt:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",children:[r.dueDate&&Object(G.jsx)(b.a,{variant:"body2",color:"secondary",children:Object(G.jsx)(z.a,{format:"DD/MM/YYYY",children:r.dueDate})}),(null===r||void 0===r?void 0:r.tasks)&&(null===r||void 0===r?void 0:r.tasks.length)>0&&Object(G.jsx)(T.a,{size:"small",icon:Object(G.jsx)(N.a,{}),label:"".concat(s," / ").concat(r.tasks.length),color:"primary"})]})]})),Object(G.jsx)(l,{children:Object(G.jsx)(te,{members:c,onDialogClose:j,sprint:r,projectId:a})})]})},se=function(e){var t=e.aspect,r=e.members,n=ce(),a=Object(C.a)(),c=a.PopoverComponent,i=a.handleClick,s=a.handleClose;return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsxs)(_.a,{"aria-describedby":"new_sprint_menu",onClick:i,className:n.addCardButton,size:"small",children:[Object(G.jsx)(I.a,{className:n.mr}),Object(G.jsx)("span",{children:"Add A NEW sprint"})]}),Object(G.jsx)(c,{id:"new_sprint_menu",children:Object(G.jsx)(ae,{aspect:t,handleClose:s,members:r})})]})},oe=M.a().shape({title:M.c().required("Title is required")}),le=function(e){var t=e.currentAspect,r=e.id,a=e.handleClose,s=e.members,o=Object(V.a)(),l=o.loading,j=o.onMutate,b=Object(H.b)(),p=b.dispatch,m=b.selectedWorkspace,h={title:t.title};function O(){return(O=Object(i.a)(c.a.mark((function e(i){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.title,e.prev=1,e.next=4,j({url:"/aspects/".concat(r),method:"PUT",data:{workspace:m,aspect:Object(n.a)(Object(n.a)({},t),{},{title:o}),members:s}});case 4:e.sent.success&&(a(),setTimeout((function(){p(Object(J.d)(t.project||"",Object(n.a)(Object(n.a)({},t),{},{title:o})))}),0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(G.jsx)(d.a.Fragment,{children:Object(G.jsx)(q.b,{initialValues:h,validationSchema:oe,onSubmit:function(e){return function(e){return O.apply(this,arguments)}(e)},children:function(e){var t=e.handleChange,r=e.handleSubmit,n=e.handleBlur,a=e.values,c=e.errors,i=e.touched;return Object(G.jsx)(q.a,{onSubmit:r,autoComplete:"off",children:Object(G.jsxs)(u.a,{p:2,children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Aspect Title"}),Object(G.jsx)(U.a,{fullWidth:!0,variant:"outlined",size:"small",placeholder:"title",onBlur:n,onChange:t,name:"title",value:a.title,error:i.title&&!!c.title,helperText:i.title&&c.title})]}),Object(G.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",size:"small",fullWidth:!0,children:l?"Loading...":"UPDATE"})]})})}})})},de={title:""},je=M.a().shape({title:M.c().required("Title is required")}),ue=function(e){var t=e.projectId,r=e.handleClose,n=e.members,a=Object(V.a)(),s=a.loading,o=a.onMutate,l=Object(H.b)(),j=l.dispatch,b=l.selectedWorkspace;function p(){return(p=Object(i.a)(c.a.mark((function e(a){var i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.title,e.prev=1,e.next=4,o({url:"/aspects",method:"POST",data:{aspect:{title:i,project:t},members:n,workspace:b}});case 4:(s=e.sent).success&&(r(),setTimeout((function(){j(Object(J.g)(t,s.data))}),0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(G.jsx)(d.a.Fragment,{children:Object(G.jsx)(q.b,{initialValues:de,validationSchema:je,onSubmit:function(e){return function(e){return p.apply(this,arguments)}(e)},children:function(e){var t=e.handleChange,r=e.handleSubmit,n=e.handleBlur,a=e.values,c=e.errors,i=e.touched;return Object(G.jsx)(q.a,{onSubmit:r,autoComplete:"off",children:Object(G.jsxs)(u.a,{p:2,children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"New Aspect"}),Object(G.jsx)(U.a,{fullWidth:!0,variant:"outlined",size:"small",placeholder:"title",onBlur:n,onChange:t,name:"title",value:a.title,error:i.title&&!!c.title,helperText:i.title&&c.title})]}),Object(G.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",size:"small",fullWidth:!0,children:s?"Loading...":"ADD"})]})})}})})},be=Object(j.a)((function(e){return{iconColor:{color:"#64748B"},newAspect:{color:"#64748B",cursor:"pointer",padding:e.spacing(1),display:"flex",justifyContent:"flex-start",alignItems:"center"},mr:{marginRight:e.spacing(1)},aspectTitle:{cursor:"pointer"}}})),pe=function(e){var t=e.aspect,r=e.members,n=Object(C.a)(),a=n.PopoverComponent,c=n.handleClick;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(u.a,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[Object(G.jsx)(he,{id:t._id||"",currentAspect:t,members:r}),Object(G.jsxs)(u.a,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(G.jsx)(f.a,{badgeContent:t.cards?t.cards.length:0,color:"primary",style:{marginRight:"1rem"}}),Object(G.jsx)(v.a,{size:"small","aria-describedby":"simple_menu",onClick:c,children:Object(G.jsx)(y.a,{})}),Object(G.jsx)(a,{id:"simple_menu",children:Object(G.jsx)(me,{currentAspect:t,members:r})})]})]}),Object(G.jsx)(d.a.Fragment,{children:t.cards&&t.cards.map((function(e,n){return Object(G.jsx)(S.b,{index:n,draggableId:e._id,children:function(n){return Object(G.jsx)(ie,{members:r,value:e,providedDraggable:n,projectId:t.project||""})}},e._id)}))})]})},me=function(e){var t=e.currentAspect,r=e.members,n=be(),a=Object(Y.a)({onConfirmClick:function(){return m.apply(this,arguments)},message:"Are you sure you want to delete this aspect."}),s=a.ConfirmDialog,o=a.handleOpen,l=a.handleClose,j=Object(V.a)().onMutate,u=Object(H.b)(),b=u.dispatch,p=u.selectedWorkspace;function m(){return(m=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j({url:"/aspects/".concat(t._id),method:"PATCH",data:{members:r,workspace:p,projectId:t.project}});case 3:e.sent.success&&(l(),setTimeout((function(){b(Object(J.a)(t.project||"",t._id||""))}),0)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsxs)(g.a,{onClick:o,style:{padding:"1rem"},children:[Object(G.jsx)(w.a,{className:n.iconColor}),Object(G.jsx)("span",{style:{marginLeft:"0.8rem"},children:"Delete List"})]}),Object(G.jsx)(s,{})]})},he=function(e){var t=e.currentAspect,r=e.id,n=e.members,a=be(),c=Object(C.a)(),i=c.PopoverComponent,s=c.handleClick,o=c.handleClose;return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsx)(b.a,{variant:"subtitle2","aria-describedby":"edit_aspect_menu",onClick:s,className:a.aspectTitle,children:t.title}),Object(G.jsx)(i,{id:"edit_aspect_menu",children:Object(G.jsx)(le,{members:n,currentAspect:t,id:r,handleClose:o})})]})},Oe=function(e){var t=e.projectId,r=e.members,n=be(),a=Object(C.a)(),c=a.PopoverComponent,i=a.handleClick,s=a.handleClose;return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsxs)(u.a,{"aria-describedby":"new_aspect_menu",className:n.newAspect,onClick:i,children:[Object(G.jsx)(k.a,{className:n.mr}),Object(G.jsx)("span",{children:"NEW ASPECT"})]}),Object(G.jsx)(c,{id:"new_aspect_menu",children:Object(G.jsx)(ue,{projectId:t,handleClose:s,members:r})})]})},xe=r(54),fe=r(169),ve=r(614),ge=r(206),Ce=r(149),ye=r(607),we=M.a().shape({title:M.c().required("Title is required"),description:M.c().required("Description is required")}),ke=function(e){var t=e.projectId,r=Object(Y.a)({onConfirmClick:function(){return j.apply(this,arguments)},message:"Are you sure you want to delete this project, by deleting this project all linked aspects will be deleted."}),n=r.ConfirmDialog,a=r.handleOpen,s=r.handleClose,o=Object(H.b)().dispatch,l=Object(V.a)().onMutate;function j(){return(j=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({url:"/projects/".concat(t),method:"DELETE"});case 3:e.sent.success&&(s(),setTimeout((function(){o(Object(ge.a)(t)),o(Object(J.b)(t))}),0)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsx)(p.a,{disableElevation:!0,size:"medium",style:{marginLeft:"0.5rem"},variant:"contained",color:"secondary",onClick:a,children:"Delete"}),Object(G.jsx)(n,{})]})},Se=function(e){var t=e.onSidenavClose,r=e.project,a=Object(xe.d)((function(e){return e.members})),o=d.a.useState(r.members.map((function(e){return e._id||""}))),l=Object(s.a)(o,2),j=l[0],m=l[1],h=Object(V.a)(),O=h.loading,x=h.onMutate,f=Object(H.b)(),v=f.dispatch,g=f.currentUser,C=f.owner===g._id,y={title:r.title,description:r.description,members:r.members};function w(){return(w=Object(i.a)(c.a.mark((function e(a){var i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=Object(n.a)(Object(n.a)(Object(n.a)({},r),a),{},{members:j}),e.next=4,x({url:"/projects/".concat(r._id),method:"PUT",data:i});case 4:(s=e.sent).success&&(t(),setTimeout((function(){v(Object(ge.d)(s.data)),v(Object(J.e)(s.data._id,s.data))}),0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(G.jsx)(q.b,{initialValues:y,validationSchema:we,onSubmit:function(e){return function(e){return w.apply(this,arguments)}(e)},children:function(e){var c=e.handleSubmit,i=e.handleChange,s=e.handleBlur,o=e.values,l=e.errors,d=e.touched;return Object(G.jsxs)(q.a,{onSubmit:c,autoComplete:"off",children:[Object(G.jsxs)(u.a,{style:{backgroundColor:"#f1f5f9",padding:"2.5rem 1rem"},borderBottom:"1px solid #fafafa",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[Object(G.jsx)(p.a,{className:"bg-text-secondary",onClick:t,variant:"outlined",color:"default",size:"medium",type:"button",children:"Cancel"}),Object(G.jsxs)(u.a,{children:[C&&Object(G.jsx)(ke,{projectId:r._id||""}),Object(G.jsx)(p.a,{disabled:0===j.length,disableElevation:!0,size:"medium",type:"submit",style:{marginLeft:"0.5rem"},variant:"contained",color:"primary",children:O?"Loading...":"Save"})]})]}),Object(G.jsxs)(u.a,{style:{padding:"1rem 1rem 0 1rem"},children:[Object(G.jsx)(b.a,{variant:"h6",gutterBottom:!0,children:"Edit Project"}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Title"}),Object(G.jsx)(U.a,{fullWidth:!0,name:"title",variant:"outlined",size:"small",placeholder:"project title",onChange:i,onBlur:s,value:o.title,error:d.title&&!!l.title,helperText:d.title&&l.title})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Description"}),Object(G.jsx)(U.a,{fullWidth:!0,name:"description",variant:"outlined",size:"small",placeholder:"A short description which explains the project..",onChange:i,onBlur:s,value:o.description,multiline:!0,rows:3,error:d.description&&!!l.description,helperText:d.description&&l.description})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Members"}),Object(G.jsx)(b.a,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:"Only selected members are able to work on this project"}),Object(G.jsx)(ye.a,{onChange:function(e,t){var r;null!==(r=t)&&(0===r.length?m([]):m(Object(A.a)(r.map((function(e){return e._id||""})))))},multiple:!0,fullWidth:!0,limitTags:2,clearOnBlur:!0,id:"multiple-limit-tags",options:a,getOptionLabel:function(e){return e.name},defaultValue:Object(A.a)(r.members),renderTags:function(e,t){return e.map((function(e,r){return Object(G.jsx)(T.a,Object(n.a)({variant:"default",color:"primary",label:e.name,avatar:Object(G.jsx)(ve.a,{alt:"members",src:e.avatar?"".concat("https://my-team-board.herokuapp.com/api","/files/").concat(e.avatar):Ce.a})},t({index:r})))}))},renderInput:function(e){return Object(G.jsx)(U.a,Object(n.a)({name:"members",variant:"outlined",size:"small",placeholder:"Add members to this project"},e))}})]})]})]})}})},De=r(45),Te=r.n(De),_e=Object(j.a)((function(e){return{root:{height:"calc(100vh - 56px )",overflow:"hidden"},header:Object(o.a)({padding:"1.5rem 1rem",borderBottom:"1px solid lightgray"},e.breakpoints.down("xs"),{flexDirection:"column",gap:"0.5rem"}),iconColor:{color:"#64748B"},mr:{marginRight:e.spacing(1)},aspect:{backgroundColor:"#e6ebf1",padding:e.spacing(1),borderRadius:10,width:"288px",minWidth:"288px",marginRight:"1rem",height:"fit-content","&:last-child":{marginRight:0}}}})),Ne=function(e){var t=e.project,r=Object(fe.a)("right","persistent"),n=r.onSidenavClose,a=r.onSidenavOpen,c=r.SidenavComponent,i=Object(H.b)(),s=i.currentUser,o=i.owner,l=_e(),j=!(s._id==o);return Object(G.jsxs)(d.a.Fragment,{children:[Object(G.jsxs)(p.a,{onClick:a,disabled:j,disableElevation:!0,variant:"contained",color:"primary",size:"medium",children:[Object(G.jsx)(O.a,{className:l.mr}),Object(G.jsx)("span",{children:"Edit Board"})]}),Object(G.jsx)(c,{children:Object(G.jsx)("div",{style:{overflowY:"auto",height:"calc(100% - 56px)",marginTop:"56px"},children:Object(G.jsx)(Se,{onSidenavClose:n,project:t})})})]})};t.default=function(e){var t=_e(),r=Object(x.g)(),a=e.match.params.projectId,o=Object(xe.d)((function(e){return e.boards})),j=o[a]||null,O=d.a.useState([]),f=Object(s.a)(O,2),v=f[0],g=f[1],C=Object(H.b)(),y=C.dispatch,w=C.currentUser;console.log("scrumboard rerender"),Object(l.useEffect)((function(){var e=function(){var e=Object(i.a)(c.a.mark((function e(){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Te.a.get("/aspects/".concat(a));case 3:t=e.sent,(r=t.data).success&&(y(Object(J.h)(r.data)),n=r.data[a].project.members.map((function(e){return w._id!=e._id?e._id:""})),g(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();if(o.hasOwnProperty(a)){var t=o[a].project.members.map((function(e){return w._id!=e._id&&e._id||""}));g(t)}else e()}),[]);return j?Object(G.jsxs)(u.a,{display:"flex",flexDirection:"column",className:t.root,children:[Object(G.jsxs)(u.a,{className:Object(m.a)("bg-white",t.header),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[Object(G.jsx)(b.a,{variant:"h5",className:"bg-text-primary fw-700",children:null===j||void 0===j?void 0:j.project.title}),Object(G.jsxs)(u.a,{children:[Object(G.jsxs)(p.a,{variant:"outlined",className:Object(m.a)(t.iconColor,t.mr),size:"medium",onClick:function(){r.goBack()},children:[Object(G.jsx)(h.a,{className:t.mr}),Object(G.jsx)("span",{children:"Boards"})]}),Object(G.jsx)(Ne,{project:null===j||void 0===j?void 0:j.project})]})]}),Object(G.jsxs)(u.a,{p:2,display:"flex",flexDirection:"row",overflow:"auto",height:"100%",children:[Object(G.jsx)(S.a,{onDragEnd:function(e){var t=e.destination,r=e.source;t&&(t.index!==r.index||(t.droppableId,r.droppableId))},children:null===j||void 0===j?void 0:j.aspects.map((function(e){return Object(G.jsx)(S.c,{droppableId:e._id,children:function(r){return Object(G.jsxs)("div",Object(n.a)(Object(n.a)({className:t.aspect,ref:r.innerRef},r.droppableProps),{},{children:[Object(G.jsx)(pe,{aspect:e,members:v}),r.placeholder,Object(G.jsx)(se,{aspect:e,members:v})]}))}},e._id)}))}),Object(G.jsx)("div",{className:t.aspect,children:Object(G.jsx)(Oe,{projectId:a,members:v})})]})]}):null}}}]);
//# sourceMappingURL=18.c18dab8a.chunk.js.map