(this.webpackJsonpidentity=this.webpackJsonpidentity||[]).push([[0],{129:function(e,t,a){e.exports=a(161)},134:function(e,t,a){},136:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),l=a.n(i),o=(a(134),a(135),a(136),a(16)),c=a(208),s=a(111),u=a(210),m=a(212),d=a(48),p=a(246),f=a(26),b=a(8),g=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{maxWidth:160,fontSize:30,marginRight:30,textAlign:"center"},authItem:{},toolbar:{}}}));function h(){var e=g(),t=Object(b.c)((function(e){return e.login.id}));return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(m.a,{className:e.toolbar},r.a.createElement(d.a,{className:e.title},"Identity"),r.a.createElement(f.b,{to:"/identity/welcome",style:{textDecoration:"none",outline:"none"}},r.a.createElement(p.a,{style:{color:"white"}},"Home")),r.a.createElement(f.b,{to:"/logout",style:{textDecoration:"none",outline:"none"}},r.a.createElement(p.a,{style:{color:"white"}},t?"Logout":null)))))}var v=a(163),E=a(165),y=a(64),O=a.n(y),x=O.a.create({baseURL:"https://react-demo-45a1b.firebaseio.com/"}),I=function(e,t,a,n){var r={formId:e,isFormCompleted:t.isFormCompleted,isFormTouched:!0},i=localStorage.getItem("token");x.put("/users/".concat(a.entityId,".json?auth=").concat(i),{userId:a.userId,username:a.username,formInfo:r}).then((function(){n(S(r))})).catch((function(e){n(V(!0,e.response.data?e.response.data.error.message:e.message))}))},j=function(e,t){return{type:"NEXT_FORM",info:e,formId:t}},N=function(){return{type:"FORM_UPDATING"}},T=function(e,t){return{type:"POPULATE_FORM",form:e,formId:t,isCompleted:e.isFormCompleted}},k=O.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1/",params:{key:"".concat("AIzaSyAU_vVv_YXI-3RAqIfCYeRYmhqke8Uv7xw"),returnSecureToken:!0}}),S=function(e){return{type:"UPDATE_USER_INFO",formInfo:e}},w=function(){return{type:"LOGIN_START"}},C=function(e){var t=e.data.idToken,a=e.data.localId,n=e.data.expiresIn;localStorage.setItem("token",t),localStorage.setItem("userId",a),localStorage.setItem("expiryTime",n)},R=function(e,t,a){var n=Object.keys(e.data),r=Object(o.a)(n,1)[0],i=Object.keys(e.data).map((function(t){return e.data[t]})),l=Object(o.a)(i,1)[0];t(L(l.username,a,l.userId,r,l.formInfo));var c=l.formInfo?l.formInfo.formId:null;c&&t(function(e){return function(t){var a=localStorage.getItem("token");x.get("/identity/".concat(e,".json?auth=").concat(a)).then((function(a){t(T(a.data,e))})).catch((function(e){t(V(!0,e.response?e.response.data.error.message:e.message))}))}}(c))},L=function(e,t,a,n,r){return{type:"LOGIN_SUCCESS",username:e,token:t,id:a,entityId:n,formInfo:r}},F=a(7),A=function(e,t,a){return localStorage.setItem("token",e),localStorage.setItem("userId",a),localStorage.setItem("expiryTime",t),{type:"SET_TIMEOUT",timeout:setTimeout((function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expiryTime")}),1e3*t)}},P=function(){return{type:"SIGNUP_START",payload:null}},_=function(e){return{type:"SIGNUP_FINISHED",payload:e}},D=function(e,t){return{type:"ERROR",isError:e,message:t}},V=function(e,t){return function(a){e||(a({type:"REMOVE_LOGIN_ERROR"}),a({type:"REMOVE_SIGNUP_ERROR"}),a({type:"REMOVE_FORM_ERROR"})),a(D(e,t))}},U=Object(c.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),B=function(e){var t=U(),a=Object(n.useState)(!1),i=Object(o.a)(a,2),l=i[0],c=i[1],u=Object(b.c)((function(e){return e.error.isError})),m=Object(b.c)((function(e){return e.error.message})),d=Object(n.useRef)(),p=Object(b.b)(),f=Object(n.useCallback)((function(){return p(V(!1,""))}),[p]);Object(n.useEffect)((function(){c(u)}),[u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("main",null,e.children),r.a.createElement(E.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:l,onClose:function(){c((function(e){return!e})),f()},closeAfterTransition:!0,BackdropComponent:v.a,BackdropProps:{timeout:500}},r.a.createElement(s.a,{in:l},r.a.createElement("div",{className:t.paper},r.a.createElement("h2",{id:"transition-modal-title"},"Error"),r.a.createElement("h3",{ref:d,id:"transition-modal-description"},m)))))},M=a(213),q=a(247),W=a(241),G=Object(c.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,textAlign:"left"}}})),z=function(e){var t=e.formType,a=e.field,n=e.handler,i=G();return r.a.createElement(M.a,{required:a.validation.required,variant:"outlined",className:i.formControl,key:a.id,disabled:a.disabled},r.a.createElement(q.a,{id:a.id},a.label),r.a.createElement(W.a,{error:a.validation.isTouched&&!a.validation.isValid,required:a.required,native:!0,labelId:a.id,key:a.id,id:a.id,name:a.id,value:a.value,label:a.label,onChange:function(e){return n(e,t,"input")}},r.a.createElement("option",{key:"none","aria-label":"None",value:""}),a.options.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},H=a(216),$=a(242),Y=function(e){var t=e.field,a=e.formType,n=e.handler;return r.a.createElement(H.a,{key:t.id,label:t.label,labelPlacement:"end",control:r.a.createElement($.a,{key:t.id,value:t.value,checked:t.value,onChange:function(e){return n(e,a,"check")},id:t.id})})},X=a(244),K=function(e){var t=e.type,a=e.field,n=e.handler,i=e.formType;return r.a.createElement(X.a,{type:t,error:a.validation.isTouched&&!a.validation.isValid,helperText:a.helperText,disabled:a.disabled,hidden:a.hidden,key:a.id,required:a.validation.required,id:a.id,label:a.label,variant:"outlined",value:a.value,placeholder:a.placeholder,onChange:function(e){return n(e,i,"input")}})},Z=Object(c.a)((function(e){return{root:{alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",marginTop:e.spacing(5),"& > *":{margin:e.spacing(1),width:"80%"}},formControl:{margin:e.spacing(1),minWidth:120,textAlign:"left"},selectEmpty:{marginTop:e.spacing(2)}}})),J=function(e){var t=e.form,a=e.handler,n=e.formType,i=Z(),l=Object.keys(t).filter((function(e){return"isCompleted"!==e})).map((function(e){return t[e].id=e,t[e]}));return r.a.createElement("form",{className:i.root},l.map((function(e){switch(e.type){case"text":return r.a.createElement(K,{key:e.id,type:"text",field:e,formType:n,handler:a});case"number":return r.a.createElement(K,{key:e.id,type:"number",field:e,formType:n,handler:a});case"select":return r.a.createElement(z,{key:e.id,handler:a,formType:n,field:e});case"check":return r.a.createElement(Y,{key:e.id,handler:a,formType:n,field:e});default:return null}})))},Q=a(84),ee={PERSONAL_INFO:{firstName:{text:"No Digits/Space Allowed. Not more than 8 and less than 3 Alphabets",pattern:/^[A-z]{3,8}$/g,disabled:!1,value:"",type:"text",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"First Name"},middleName:{text:"No Digits/Space Allowed. Not more than 4",pattern:/^[A-z]?[A-z]?[A-z]?[A-z]?$/g,disabled:!1,value:"",type:"text",error:!1,helperText:"",validation:{required:!1,isTouched:!1,isValid:!0},label:"Middle Name"},lastName:{text:"No Digits/Space Allowed. Not more than 8 and less than 2 Alphabets",pattern:/^[A-z]{2,8}$/g,disabled:!1,value:"",type:"text",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"Last Name"},age:{text:"Please Enter Age between 1 and 99",pattern:/^[1-9][0-9]?$/g,disabled:!1,value:"",type:"number",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"Age"},mobileNumber:{text:"Mobile Number should be in this pattern +92-3xx-xxxxxx",pattern:/^[+][9][2][-][3][0-4][0-9][-][0-9]{7}$/g,disabled:!1,value:"",type:"text",error:!1,helperText:"",placeholder:"+92-3xx-xxxxxxx",validation:{required:!0,isTouched:!1,isValid:!1},label:"Mobile Number"}},EDUCATIONAL_INFO:{metricMarks:{text:"Invalid Input. Should like this xx%",pattern:/^[1-9][0-9]?%$/g,disabled:!1,value:"",type:"text",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"Percentage in Metric"},intermediateMarks:{text:"Invalid Input. Should like this xx%",pattern:/^[1-9][0-9]?%$/g,disabled:!1,value:"",type:"text",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"Percentage in Intermediate"},bachelorCGPA:{text:"Select CGPA",pattern:/^[1-9]+$/g,disabled:!1,value:"",type:"select",options:[1,2,3,4],error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"CGPA in Bachelor "}},PROFESSIONAL_INFO:{status:{value:!1,type:"check",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!0},label:"Are You Employed?"},companyName:{text:"No Digits/Space Allowed. Range [3, 15]",pattern:/^[A-z]{3,15}$/g,disabled:!0,value:"",type:"text",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"Name of Company"},designationName:{text:"No Digits/Space Allowed. Range [3, 15]",pattern:/^[A-z]{3,15}$/g,disabled:!0,value:"",type:"text",error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!1},label:"Designation Name"}},EXCISE_INFO:{isVehicle:{value:!1,type:"check",error:!1,helperText:"",validation:{required:!1,isValid:!0},label:"Have you vehicle?"},type:{text:"Select Type",pattern:/^[A-z]+$/g,disabled:!0,value:"Bike",type:"select",options:["Bike","SVM"],error:!1,helperText:"",validation:{required:!0,isTouched:!1,isValid:!0},label:"Type"},plateNumber:{text:"Not a valid plate number. Format should be like AKK-2915",pattern:/^[A-Z]{3}-[0-9]{4}$/g,disabled:!0,type:"text",value:"",error:!1,helperText:"",placeholder:"AKK-2915",validation:{required:!0,isTouched:!1,isValid:!1},label:"Plate Number"}},RESIDENT_INFO:{isHouse:{value:!1,type:"check",error:!1,helperText:"",validation:{required:!1,isValid:!0},label:"Do you own a house?"},houseNumber:{text:"Not a valid plate number. Format should be like JND-233232",pattern:/^[A-Z]{3}-[0-9]{6}$/g,disabled:!0,value:"",type:"text",error:!1,helperText:"",placeholder:"XXX-DDDDDD",validation:{required:!0,isTouched:!1,isValid:!1},label:"House Number"}}},te=[{step:0,label:"Personal Info",value:"PERSONAL_INFO"},{step:1,label:"Educational Info",value:"EDUCATIONAL_INFO"},{step:2,label:"Professional Info",value:"PROFESSIONAL_INFO"},{step:3,label:"Excise Info",value:"EXCISE_INFO"},{step:4,label:"Resident Info",value:"RESIDENT_INFO"},{step:5,label:"Preview",value:"PREVIEW"}],ae=a(27),ne=a.n(ae),re=a(229),ie=a(225),le=a(228),oe=a(227),ce=a(226),se=a(224),ue=a(223),me=a(221),de=a(222),pe=a(218),fe=a(219),be=function(e){var t=e.subForm,a=e.identityForm,n=e.id,i=e.subKey;return r.a.createElement(pe.a,{key:t.name},r.a.createElement(fe.a,{component:"th",scope:"row"},r.a.createElement(d.a,null,a[n][i]?a[n][i].label:"")),r.a.createElement(fe.a,{align:"right"},r.a.createElement(d.a,null,t[i]?t[i]:"")))},ge=a(220),he=function(e){var t=e.id;return r.a.createElement(ge.a,null,r.a.createElement(pe.a,null,r.a.createElement(fe.a,{colSpan:2,style:{textAlign:"center"}},r.a.createElement(d.a,{variant:"h5",style:{fontWeight:"bold"}},t&&"isFormCompleted"!==t?t.replace("_"," "):null))))},ve=function(e){var t=e.id,a=e.subForm,n=e.identityForm,i=["isCompleted","isVehicle","isHouse","status"];return r.a.createElement(me.a,{"aria-label":"simple table"},r.a.createElement(he,{id:t}),r.a.createElement(de.a,null,Object.keys(a).map((function(e){return l=e,i.includes(l)?null:r.a.createElement(be,{id:t,key:e,subForm:a,identityForm:n,subKey:e});var l}))))},Ee=function(e){var t=e.form,a=Object(n.useState)(ee),i=Object(o.a)(a,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,null),r.a.createElement(se.a,{maxWidth:"sm"},Object.keys(t).map((function(e){return r.a.createElement(ve,{key:e,identityForm:i,id:e,subForm:t[e]})}))))},ye=function(e){var t=e.open,a=e.modalHandler,n=e.form,i=e.saveFormHandler;return r.a.createElement("div",null,r.a.createElement(ie.a,{fullWidth:!0,maxWidth:"md",open:t,onClose:a,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(ce.a,{id:"scroll-dialog-title"},"Form Preview"),r.a.createElement(oe.a,{dividers:!0},r.a.createElement(Ee,{form:n})),r.a.createElement(le.a,null,r.a.createElement(re.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(re.a,{onClick:i,color:"primary"},"Save"))))},Oe=Object(n.createContext)({username:null,userId:null,isLogin:!1,entityId:null}),xe=function(e){var t={username:Object(b.c)((function(e){return e.login.username})),userId:Object(b.c)((function(e){return e.login.id})),isLogin:Object(b.c)((function(e){return e.login.isLogin})),entityId:Object(b.c)((function(e){return e.login.entityId}))};return r.a.createElement(Oe.Provider,{value:t},e.children)},Ie=a(10),je=a(249),Ne=a(243),Te=Object(c.a)((function(e){return{backButton:{marginRight:e.spacing(1)}}})),ke=function(e){var t=e.formType,a=e.handleBack,n=Te();return r.a.createElement(re.a,{disabled:0===t.step,onClick:a,className:n.backButton},"Back")},Se=function(e){var t=e.handleNext,a=e.isNextButtonDisable;return r.a.createElement(re.a,{id:"nextFormButton",variant:"contained",color:"primary",onClick:t,disabled:a},"Next")},we=function(e){var t=e.handleNext,a=e.setModalOpen,n=e.isNextButtonDisable;return r.a.createElement(re.a,{id:"previewButton",variant:"contained",color:"primary",onClick:function(){t(),a(!0)},disabled:n},"Preview")},Ce=a(230),Re=function(e){var t=e.formType,a=e.steps,n=e.handleNext,i=e.handleBack,l=e.isNextButtonDisable,o=e.setModalOpen,c=r.a.createElement(ke,{handleBack:i,formType:t}),s=r.a.createElement(Se,{handleNext:n,isNextButtonDisable:l}),u=r.a.createElement(we,{handleNext:n,isNextButtonDisable:l,setModalOpen:o}),m=t.step!==a.length-1?s:u;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{container:!0,justify:"center",style:{marginTop:"8px"}},r.a.createElement(Ce.a,{item:!0},r.a.createElement(Ne.a,null,a[t.step]))),r.a.createElement(je.a,{activeStep:t.step,alternativeLabel:!0,variant:"text",backButton:c,nextButton:m,steps:a.length}))},Le=a(250),Fe=a(231),Ae=function(e){var t=e.formType,a=e.steps;return r.a.createElement(Le.a,{activeStep:t.step,alternativeLabel:!0},a.map((function(e){return r.a.createElement(Fe.a,{key:e,style:{color:"red"}},r.a.createElement(Ne.a,null,e))})))},Pe=function(e){var t=e.formType,a=e.steps,n=e.handleBack,i=e.handleNext,l=e.isNextButtonDisable,o=e.setModalOpen,c=r.a.createElement(ke,{formType:t,handleBack:n}),s=r.a.createElement(Se,{isNextButtonDisable:l,handleNext:i}),u=r.a.createElement(we,{handleNext:i,setModalOpen:o,isNextButtonDisable:l}),m=t.step!==a.length-1?s:u;return r.a.createElement("div",null,c,m)},_e=Object(c.a)((function(e){return{root:{width:"100%"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},paper:{padding:e.spacing(2),margin:e.spacing(2),marginRight:"auto",marginLeft:"auto",width:"80%",height:"500px"}}}));var De=function(e){var t=e.isEdit,a=void 0!==t&&t,i=e.location,l=_e(),c=r.a.useState(te[0]),s=Object(o.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),f=p[0],g=p[1],h=te.filter((function(e){return 5!==e.step})).map((function(e){return e.label})),v=Object(n.useContext)(Oe),E=Object(b.b)(),y=Object(n.useCallback)((function(e,t,a){return E(function(e,t,a){return function(n){if(t){n(N());var r=localStorage.getItem("token");x.put("/identity/".concat(t,".json?auth=").concat(r),e).then((function(){I(t,e,a,n),n(j(e,t))})).catch((function(e){n(V(!0,e.response?e.response.data.error.message:e.message))}))}else{var i=localStorage.getItem("token");x.post("/identity.json?auth=".concat(i),e).then((function(t){I(t.data.name,e,a,n),n(j(e,t.data.name))})).catch((function(e){n(V(!0,e.response?e.response.data.error.message:e.message))}))}}}(e,t,a))}),[E]),O=Object(b.c)((function(e){return e.form.formId})),T=Object(b.c)((function(e){return e.form.form})),k=Object(b.c)((function(e){return e.login.formInfo?e.login.formInfo.isFormCompleted:null})),S=Object(n.useState)(ee),w=Object(o.a)(S,2),C=w[0],R=w[1],L=Object(n.useState)(!0),F=Object(o.a)(L,2),A=F[0],P=F[1],_=Object(n.useState)(!1),D=Object(o.a)(_,2),U=D[0],B=D[1];function M(){var e=ne.a.clone(C),t={};for(var a in e){var n=e[a],r={},i=te.slice(0,u.step+1).map((function(e){return e.value}));for(var l in i.includes(a)&&(r.isCompleted=f),n)if(n.hasOwnProperty(l)){var o=n[l];o.disabled||(r[l]=o.value)}t[a]=r}return t}Object(n.useEffect)((function(){if(q(),null!==O){var e=ne.a.clone(C);for(var t in e){var a=e[t],n=T[t];for(var r in n)"isCompleted"!==r&&n.hasOwnProperty(r)&&n.isCompleted&&(g(!0),a[r].value=n[r],a[r].disabled=!1,a[r].validation.isValid=!0,a[r].validation.isTouched=!0)}R(e),z(te[0])}}),[]);var q=function(){var e=ne.a.clone(C);for(var t in e){var a=e[t];if(a===ee.PROFESSIONAL_INFO||a===ee.EXCISE_INFO||a===ee.RESIDENT_INFO){for(var n in a)if("isCompleted"!==n&&a.hasOwnProperty(n)){var r=a[n];"check"===r.type?r.value=!1:(r.disabled=!0,r.value="",r.validation.isValid=!1,r.validation.isTouched=!1)}}else for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];l.value="",l.validation.isValid=!l.validation.required,l.validation.isTouched=!l.validation.required}}R(e)},W=function(){var e=M();e.isFormCompleted=!1,y(e,O,v);4!==u.step&&m((function(e){return z(te[e.step+1]),te[e.step+1]}))},G=function(){m((function(e){return z(te[e.step-1]),te[e.step-1]}))},z=function(e){var t=ne.a.clone(C)[e.value];H(t)?P(!1):P(!0)},H=function(e){for(var t in e)if("isCompleted"!==t&&e.hasOwnProperty(t)){var a=e[t];if(!a.disabled&&!a.validation.isValid)return!1}return!0};if(k&&!a||"/identity/congrats"===i.pathname)return r.a.createElement(Ie.a,{to:"/identity/congrats"});var $=r.a.createElement(Re,{formType:u,handleBack:G,handleNext:W,isNextButtonDisable:A,setModalOpen:B,steps:h}),Y=r.a.createElement(Ae,{steps:h,formType:u}),X=r.a.createElement(Pe,{formType:u,steps:h,setModalOpen:B,isNextButtonDisable:A,handleNext:W,handleBack:G}),K=window.screen.width<600?$:Y,Z=window.screen.width>=600?X:null;return r.a.createElement(se.a,null,K,r.a.createElement(se.a,{className:l.root},r.a.createElement(Q.a,{elevation:3,className:l.paper},r.a.createElement(J,{form:C[u.value],formType:u,handler:function(e,t,a){var n=ne.a.clone(C),r=n[t.value],i=e.target.id||e.target.name;if("check"===a)r[i].value=e.target.checked,function(e,t){var a=ne.a.clone(C),n=a[e.value];for(var r in n)n.hasOwnProperty(r)&&("text"!==n[r].type&&"select"!==n[r].type||(n[r].disabled=t));R(a)}(t,!e.target.checked);else{var l=r[i];l.helperText="",l.value=e.target.value,l.validation.isTouched=!0,l.validation.isValid=!l.pattern||ne.a.clone(l.pattern).test(l.value),l.helperText=l.validation.isValid?"":l.text}g(H(r)),P(!H(r)),R(n)}})),Z,r.a.createElement(ye,{form:T,open:U,modalHandler:function(){return B(!1)},saveFormHandler:function(){B(!1);var e=M();e.isFormCompleted=!0,y(e,O,v),m(te[0]),P(!0),q(),i.pathname="/identity/congrats"}})))},Ve=function(){var e=Object(b.c)((function(e){return e.form.form}));return r.a.createElement(se.a,{maxWidth:"sm"},r.a.createElement(Q.a,{elevation:3},r.a.createElement(Ee,{form:e})))},Ue=a(109),Be=function(e){var t=e.component,a=Object(Ue.a)(e,["component"]),i=Object(n.useContext)(Oe);return r.a.createElement(Ie.b,Object.assign({},a,{render:function(e){return!0===i.isLogin?r.a.createElement(t,e):r.a.createElement(Ie.a,{to:"/identity"})}}))},Me=a(232),qe=a(233),We=a(236),Ge=a(235),ze=a(234),He=a(245),$e=a(106),Ye=a.n($e),Xe=function(e){var t=e.id,a=e.to,n=e.label;return r.a.createElement(Ce.a,{container:!0},r.a.createElement(Ce.a,{item:!0},r.a.createElement(f.b,{to:a,style:{textDecoration:"none",outline:"none"}},r.a.createElement(re.a,{id:t,size:"small",color:"primary"},n))))},Ke=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(-20),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Ze=function(){var e=Ke(),t=Object(b.b)(),a=Object(n.useCallback)((function(){return t((function(e){var t=localStorage.getItem("userId"),a=localStorage.getItem("token");t&&a&&x.get("users.json?auth=".concat(a,'&orderBy="userId"&equalTo="').concat(t,'"')).then((function(t){return R(t,e,a)})).catch((function(t){return e(V(!0,t.response?t.response.data.error.message:t.message))}))}))}),[t]),i=Object(b.c)((function(e){return e.login.isLogin}));return a(),i?r.a.createElement(Ie.a,{to:"/identity/welcome"}):r.a.createElement(se.a,{component:"main",maxWidth:"xs"},r.a.createElement(ue.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(Ce.a,{container:!0,spacing:2},r.a.createElement(Ce.a,{item:!0},r.a.createElement(Me.a,{className:e.root},r.a.createElement(qe.a,null,r.a.createElement(ze.a,{className:e.media},r.a.createElement(He.a,{className:e.avatar},r.a.createElement(Ye.a,null))),r.a.createElement(Ge.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Identity"),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},"Identity is the Project initiated by Govt of Pakistan to register yourself from anywhere."))),r.a.createElement(We.a,null,r.a.createElement(Xe,{id:"toLogin",to:"/identity/login",label:"Sign In"})))))))},Je=function(){return r.a.createElement(Ce.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"calc(100vh - 11vh)"}},r.a.createElement(Ce.a,{item:!0,xs:8,xl:2,sm:5},r.a.createElement(Ze,null)))},Qe=a(71),et=a.n(Qe),tt=function(e){var t=e.username,a=e.setUserName;return r.a.createElement(X.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:t,onChange:function(e){return a(e.target.value)}})},at=function(e){var t=e.password,a=e.setPassword;return r.a.createElement(X.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:t,onChange:function(e){return a(e.target.value)}})},nt=a(237),rt=Object(n.forwardRef)((function(e,t){return r.a.createElement(nt.a,{ref:t,style:{marginTop:"8px",display:"inline-block"}},e)})),it=Object(n.forwardRef)((function(e,t){var a=e.id,n=e.className,i=e.isDisable,l=void 0!==i&&i,o=e.label;return r.a.createElement(re.a,{id:a,ref:t,type:"submit",fullWidth:!0,variant:"contained",color:"primary",style:{display:"inline-flex"},className:n,disabled:l},o)})),lt=a(238),ot=a(240),ct=function(){return r.a.createElement(ot.a,{mt:5},r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(lt.a,{color:"inherit",href:"https://github.com/UbaidurRehman1/identity"},"Identity")," ",(new Date).getFullYear(),"."))},st=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),ut=function(){var e=st(),t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),u=s[0],m=s[1],p=Object(b.b)(),f=Object(n.useCallback)((function(e,t){return p(function(e,t){return function(a){a(w()),k.post("accounts:signInWithPassword",{email:e,password:t}).then((function(e){C(e);var t=e.data.idToken;x.get("users.json?auth=".concat(t,'&orderBy="userId"&equalTo="').concat(e.data.localId,'"')).then((function(e){return R(e,a,e.data.idToken)})).catch((function(e){return a(V(!0,e.response?e.response.data.error.message:e.message))}))})).catch((function(e){return a(V(!0,e.response?e.response.data.error.message:e.message))}))}}(e,t))}),[p]),g=Object(b.c)((function(e){return e.login.loginStart})),h=Object(b.c)((function(e){return e.login.isLogin})),v=Object(n.createRef)(),E=Object(n.createRef)(),y=Object(n.useCallback)((function(){v.current&&(v.current.style.display="inline-block"),E.current&&(E.current.style.display="none")}),[v,E]),O=Object(n.useCallback)((function(){v.current&&(v.current.style.display="none"),E.current&&(E.current.style.display="inline-flex")}),[v,E]);Object(n.useEffect)((function(){g?y():O()}),[O,g,y]);return h?r.a.createElement(Ie.a,{to:"/identity/welcome"}):r.a.createElement(se.a,{component:"main",maxWidth:"xs"},r.a.createElement(ue.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(He.a,{className:e.avatar},r.a.createElement(et.a,null)),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Log in"),r.a.createElement("form",{className:e.form,onSubmit:function(e){return function(e){e.preventDefault(),f(i,u)}(e)}},r.a.createElement(tt,{value:i,setUserName:l}),r.a.createElement(at,{value:u,setPassword:m}),r.a.createElement(rt,{ref:v}),r.a.createElement(it,{id:"login",ref:E,isDisable:!1,className:e.submit,label:"Log In"}),r.a.createElement(Xe,{id:"toSignUp",label:"Don't have an account? Sign Up",to:"/identity/signup"}))),r.a.createElement(ct,null))},mt=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),dt=function(){var e=mt(),t=Object(n.createRef)(),a=Object(n.createRef)(),i=Object(b.b)(),l=Object(n.useCallback)((function(e){return i(function(e){return function(t){t(P()),k.post("accounts:signUp",e).then((function(a){var n=a.data.idToken;x.post("/users.json?auth=".concat(n),{username:e.firstName+" "+e.lastName,userId:a.data.localId}).then((function(){t(A(a.data.idToken,a.data.expiresIn,a.data.localId)),t(_(Object(F.a)(Object(F.a)({},a.data),{},{username:e.firstName+" "+e.lastName})))})).catch((function(e){t(V(!0,e.response.data.error.message))}))})).catch((function(e){t(V(!0,e.response.data.error.message))}))}}(e))}),[i]),c=Object(b.c)((function(e){return e.auth.isLogin})),s=Object(b.c)((function(e){return e.auth.isSignUpLoading})),u={firstName:{disabled:!1,value:"",type:"text",autoComplete:"fname",name:"firstName",variant:"outlined",fullWidth:!0,id:"firstName",key:"firstName",autoFocus:!0,required:!0,error:!1,helperText:"",onChange:function(e){return O("firstName",e)},validation:{minLength:3,maxLength:255,isTouched:!1,isValid:!1},label:"First Name"},lastName:{disabled:!1,value:"",type:"text",variant:"outlined",required:!0,fullWidth:!0,id:"lastName",ket:"lastName",name:"lastName",autoComplete:"lname",error:!1,helperText:"",onChange:function(e){return O("lastName",e)},validation:{required:!0,minLength:3,maxLength:255,isTouched:!1,isValid:!1},label:"Last Name"},email:{disabled:!1,value:"",type:"email",variant:"outlined",required:!0,fullWidth:!0,id:"email",key:"email",name:"email",autoComplete:"email",error:!1,helperText:"",onChange:function(e){return O("email",e)},validation:{minLength:6,maxLength:255,isTouched:!1,isValid:!1},label:"Email Address"},password:{disabled:!1,value:"",type:"password",variant:"outlined",required:!0,fullWidth:!0,name:"password",id:"password",key:"password",autoComplete:"current-password",error:!1,helperText:"",onChange:function(e){return O("password",e)},validation:{minLength:8,maxLength:16,isTouched:!1,isValid:!1},label:"Password"}},m=Object(n.useState)(u),p=Object(o.a)(m,2),f=p[0],g=p[1],h=Object(n.useState)(!1),v=Object(o.a)(h,2),E=v[0],y=v[1];Object(n.useEffect)((function(){s?(t.current&&(t.current.style.display="inline-block"),a.current&&(a.current.style.display="none")):(t.current&&(t.current.style.display="none"),a.current&&(a.current.style.display="inline-flex"))}),[s,t,a]);var O=function(e,t){var a,n=ne.a.clone(f);n[e].validation.isTouched=!0,n[e].value=t.target.value,e===f.firstName.id||e===f.lastName.id?(a=n[e]).validation.isTouched&&(a.value.length<a.validation.minLength||a.value.length>a.validation.maxLength?(a.validation.isValid=!1,a.error=!0,a.helperText="Min Val: "+a.validation.minLength+", Max Val: "+a.validation.maxLength):(a.validation.isValid=!0,a.error=!1,a.helperText="")):e===f.email.id?function(e){var t=e.value;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?(e.validation.isValid=!0,e.error=!1,e.helperText=""):(e.validation.isValid=!1,e.error=!0,e.helperText="Invalid Email Address")}(n[e]):e===f.password.id&&function(e){var t=e.value;/[A-Z]/.test(t)&&/[a-z]/.test(t)&&/[0-9]/.test(t)&&/[^A-Za-z0-9]/.test(t)&&t.length>4?(e.validation.isValid=!0,e.error=!1,e.helperText=""):(e.validation.isValid=!1,e.error=!0,e.helperText="Password should at least contain an upper case letter, a lower case letter, a digit and a special symbol and greater than 4 digits")}(n[e]),g(n),y(function(e){var t=Object.keys(e);for(var a in t){if(!e[t[a]].validation.isValid)return!1}return!0}(n))};return c?r.a.createElement(Ie.a,{to:"/identity/welcome"}):r.a.createElement(se.a,{component:"main",maxWidth:"xs"},r.a.createElement(ue.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(He.a,{className:e.avatar},r.a.createElement(et.a,null)),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,onSubmit:function(e){return function(e){e.preventDefault();var t=ne.a.clone(f),a={};Object.keys(t).map((function(e){return a[e]=t[e].value,null})),l(a)}(e)}},r.a.createElement(Ce.a,{container:!0,spacing:2},Object.keys(f).map((function(e){var t=f[e];return t===f.firstName||t===f.lastName?r.a.createElement(Ce.a,{item:!0,xs:12,sm:6,key:e},r.a.createElement(X.a,t)):r.a.createElement(Ce.a,{item:!0,xs:12,key:e},r.a.createElement(X.a,t))}))),r.a.createElement(rt,{ref:t}),r.a.createElement(it,{id:"signUp",ref:a,className:e.submit,isDisable:!E,label:"Sign Up"}),r.a.createElement(Xe,{to:"/identity/login",label:"Already have an account? Sign in"}))),r.a.createElement(ct,null))},pt=a(239),ft=a(217),bt=a(107),gt=a.n(bt),ht=Object(c.a)((function(e){return{root:{marginTop:"5rem"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},card:{minWidth:345}}})),vt=function(){var e=Object(n.useContext)(Oe),t=Object(b.c)((function(e){return e.login.formInfo?e.login.formInfo.formId:null})),a=Object(b.c)((function(e){return e.login.formInfo?e.login.formInfo.isFormCompleted:null})),i=Object(b.c)((function(e){return e.login.formInfo?e.login.formInfo.isFormTouched:null})),l=Object(n.useRef)();Object(n.useEffect)((function(){var e=null;null==t?e="Welcome in Identity. Click below to start filling your Identity form":a?a&&(e="Your Identity form is completed"):e="You have not completed your Identity form yet. Kindly complete your form as soon as possible",l.current.innerHTML=e}),[t,a,i]);var o=ht();return r.a.createElement(se.a,{component:"main",maxWidth:"xs",className:o.root},r.a.createElement(ue.a,null),r.a.createElement(Ce.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(Ce.a,{item:!0},r.a.createElement(Me.a,{className:o.card},r.a.createElement(pt.a,{avatar:r.a.createElement(He.a,{"aria-label":"recipe",className:o.avatar},"U"),action:r.a.createElement(ft.a,{"aria-label":"settings"},r.a.createElement(gt.a,null)),title:"Welcome Back",subheader:e.username}),r.a.createElement(ze.a,{className:o.media,image:"/static/images/cards/paella.jpg",title:"Paella dish"}),r.a.createElement(Ge.a,null,r.a.createElement(d.a,{ref:l,variant:"body2",color:"textSecondary",component:"p"})),r.a.createElement(Ce.a,{container:!0,justify:"flex-start"},r.a.createElement(Ce.a,{item:!0},r.a.createElement(Xe,{id:"fillIdentityForm",label:"Click here to fill your identity form",to:"/identity/create"})))))))},Et=function(){return{type:"LOGOUT"}},yt=function(){return{type:"HALT_FORM"}},Ot=function(){return function(e){localStorage.removeItem("userId"),localStorage.removeItem("token"),setTimeout((function(){e(yt()),e(Et())}),2e3)}},xt=function(e){var t=Object(b.b)(),a=Object(n.useCallback)((function(){return t(Ot())}),[t]),i=Object(b.c)((function(e){return e.login.id}));return Object(n.useEffect)((function(){a(),i||(e.location.pathname="/identity")})),r.a.createElement("p",null,"You will be redirect to Introduction Page")},It=Object(c.a)({root:{maxWidth:345,margin:"auto",marginTop:"5rem"}}),jt=function(){var e=It();return r.a.createElement(Me.a,{className:e.root},r.a.createElement(Ge.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Congrats!"),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},"You have been registered in Identity. You will received your Identity Number through by SMS soon.")),r.a.createElement(We.a,null,r.a.createElement(Xe,{label:"View Your Form",to:"/identity/preview"}),r.a.createElement(Xe,{label:"Edit Your Form",to:"/identity/edit"})))},Nt=function(e){return r.a.createElement(De,Object.assign({isEdit:!0},e))},Tt=function(){var e=r.a.createElement(Ie.d,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading ....")},r.a.createElement(Be,{path:"/identity/create",exact:!0,component:De}),r.a.createElement(Be,{path:"/identity/edit",exact:!0,component:Nt}),r.a.createElement(Be,{path:"/identity/preview",exact:!0,component:Ve}),r.a.createElement(Be,{path:"/identity/welcome",exact:!0,component:vt}),r.a.createElement(Be,{path:"/logout",exact:!0,component:xt}),r.a.createElement(Be,{path:"/identity/congrats",component:jt}),r.a.createElement(Ie.b,{path:"/identity/signup",exact:!0,component:dt}),r.a.createElement(Ie.b,{path:"/identity/login",exact:!0,component:ut}),r.a.createElement(Ie.b,{path:"/identity",exact:!0,component:Je}),r.a.createElement(Ie.b,{render:function(){return r.a.createElement(Ie.a,{to:"/identity"})}})));return r.a.createElement("div",{className:"App"},r.a.createElement(B,null,r.a.createElement(xe,null,e)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt,St=a(35),wt={formId:null,form:null,isCompleted:!1,error:null,isUpdating:!1},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_FORM":return Object(F.a)(Object(F.a)({},e),{},{form:t.info,formId:t.formId,isUpdating:!1});case"HALT_FORM":return Object(F.a)(Object(F.a)({},e),{},{formId:null,form:null,isCompleted:!1,error:null,isUpdating:!1});case"FORM_UPDATING":return Object(F.a)(Object(F.a)({},e),{},{isUpdating:!0});case"POPULATE_FORM":return Object(F.a)(Object(F.a)({},e),{},{form:t.form,formId:t.formId,isCompleted:t.isCompleted});case"REMOVE_FORM_ERROR":return Object(F.a)(Object(F.a)({},e),{},{error:null});default:return e}},Rt=a(83),Lt=(a(108),{user:null,isLogin:!1,isError:!1,error:"",isSignUpLoading:!1,timeout:null}),Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_START":return Object(F.a)(Object(F.a)({},e),{},{isLogin:!1,isError:!1,isSignUpLoading:!0});case"SIGNUP_FINISHED":return Object(F.a)(Object(F.a)({},e),{},{user:Object(F.a)({},t.payload),isLogin:!0,isSignUpLoading:!1});case"SIGNUP_ERROR":return Object(F.a)(Object(F.a)({},e),{},{user:null,isError:!0,isLogin:!1,isSignUpLoading:!1,error:t.error});case"SET_TIMEOUT":return Object(F.a)(Object(F.a)({},e),{},{timeout:t.timeout});case"REMOVE_SIGNUP_ERROR":return Object(F.a)(Object(F.a)({},e),{},{error:!1,isSignUpLoading:!1});default:return e}},At={isLogin:!1,loginStart:!1,loginError:!1,username:null,token:null,id:null,entityId:null,formInfo:{formId:null,isFormCompleted:null,isFormTouched:null}},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_START":return Object(F.a)(Object(F.a)({},e),{},{isLogin:!1,loginStart:!0,loginError:!1,formInfo:null});case"LOGIN_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLogin:!0,loginStart:!1,loginError:!1,username:t.username,token:t.token,id:t.id,entityId:t.entityId,formInfo:t.formInfo});case"LOGIN_ERROR":return Object(F.a)(Object(F.a)({},e),{},{isLogin:!1,loginStart:!1,loginError:!0,formInfo:null});case"LOGOUT":return Object(F.a)(Object(F.a)({},e),{},{isLogin:!1,loginStart:!1,loginError:!1,username:null,id:null,entityId:null,token:null,formInfo:null});case"UPDATE_USER_INFO":return Object(F.a)(Object(F.a)({},e),{},{formInfo:t.formInfo});case"REMOVE_LOGIN_ERROR":return Object(F.a)(Object(F.a)({},e),{},{loginError:!1,loginStart:!1});default:return e}},_t={isError:!1,message:""},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return Object(F.a)(Object(F.a)({},e),{},{isError:t.isError,message:t.message});default:return e}},Vt=Object(St.combineReducers)({form:Ct,auth:Ft,login:Pt,error:Dt});kt=Object(St.createStore)(Vt,Object(St.applyMiddleware)(Rt.a)),l.a.render(r.a.createElement(b.a,{store:kt},r.a.createElement(f.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Tt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.065c32a4.chunk.js.map