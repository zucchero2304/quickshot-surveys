(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},34:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(19),o=n.n(a),i=(n(42),n(6)),l=n(12),r=n(2),u=(n(21),n(43),n(0));function d(e){var t=e.children,n=e.closeModal,s=e.closeable;return o.a.createPortal(Object(u.jsx)("div",{className:"modal-backdrop",children:Object(u.jsx)("div",{className:"modal",children:Object(u.jsxs)("div",{className:"modal-content",children:[!1!==s?Object(u.jsx)("button",{className:"close-button",onClick:n,children:"X"}):null,t]})})}),document.body)}n(45);function b(e){var t=e.setAnswers,n=e.title,c=Object(s.useState)(["A","B"]),a=Object(r.a)(c,2),o=a[0],l=a[1],d=Object(s.useState)(!1),b=Object(r.a)(d,2),j=b[0],h=b[1],O=Object(s.useState)(null),f=Object(r.a)(O,2),p=f[0],v=f[1],x=o.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"answer-input",type:"text",id:"answer"+t,name:"answer",onChange:function(e){return v(e.target.value)},autoComplete:"off",placeholder:"Answer"})},t)})),m=Object(s.useCallback)((function(){var e=document.getElementsByClassName("add-question-btn")[0],t=document.getElementsByClassName("answer-input"),s=!0;Array.from(t).forEach((function(e){""===e.value&&(s=!1)})),s&&""!==n?(e.removeAttribute("disabled",""),e.classList.remove("disabled-button")):(e.setAttribute("disabled",""),e.classList.add("disabled-button"))}),[n]);return Object(s.useEffect)((function(){m()}),[p,o,n,m]),Object(u.jsxs)(s.Fragment,{children:[Object(u.jsxs)("div",{className:"new-choice-box",children:[Object(u.jsx)("div",{className:"answers-box",children:x}),Object(u.jsxs)("div",{className:"add-delete-buttons",children:[Object(u.jsx)("span",{onClick:function(){o.length<8?(h(!1),l([].concat(Object(i.a)(o),["abcdefgh".charAt(o.length)]))):h(!0)},children:"+"}),Object(u.jsx)("span",{onClick:function(){console.log(o),o.length>2?(l((function(e){var t=Object(i.a)(e);return t.pop(),t})),h(!1)):h(!0)},children:"-"})]}),j&&Object(u.jsx)("p",{children:"Cannot do that"})]}),Object(u.jsx)("button",{className:"add-question-btn",onClick:function(){return function(){var e=[],n=document.getElementsByClassName("answer-input");Array.from(n).forEach((function(t){""!==t.value&&e.push(t.value)})),t(e)}()},children:"Save"})]})}n(46);function j(e){var t=e.handleCloseModal,n=e.title;return Object(s.useEffect)((function(){var e=document.getElementsByClassName("add-question-btn")[0];""!==n?(e.removeAttribute("disabled",""),e.classList.remove("disabled-button")):(e.setAttribute("disabled",""),e.classList.add("disabled-button"))}),[n]),Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{disabled:!0,id:"answerBox",placeholder:"Interviewees will answer here",name:"answerBox"}),Object(u.jsx)("button",{className:"add-question-btn",onClick:t,children:"Save"})]})}n(47);function h(e){var t=e.setAnswers,n=e.photoMap,c=e.setPhotoMap,a=e.title,o=Object(s.useState)(null),i=Object(r.a)(o,2),l=i[0],d=i[1],b=Object(s.useState)([]),j=Object(r.a)(b,2),h=j[0],O=j[1],f=Object(s.useState)(!1),p=Object(r.a)(f,2),v=p[0],x=p[1],m=new FileReader;Object(s.useEffect)((function(){if(null!==l){var e=h.slice();e.push(l),O(e)}}),[l]);var g=h.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"abcdefghijkl".charAt(t)}),Object(u.jsx)("img",{className:"photo",src:e,alt:"answer thumbnail"})]},t)})),y=Object(s.useCallback)((function(){var e=document.getElementsByClassName("add-question-btn")[0];h.length>=2&&""!==a?(e.removeAttribute("disabled",""),e.classList.remove("disabled-button")):(e.setAttribute("disabled",""),e.classList.add("disabled-button"))}),[a,h.length]);return Object(s.useEffect)((function(){y()}),[h,a,y]),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"file-input",children:Object(u.jsx)("span",{className:"add-photo",children:"+"})}),Object(u.jsx)("input",{style:{display:"none"},type:"file",accept:"image/png, image/gif, image/jpeg",id:"file-input",alt:"file-input",onChange:function(){var e=document.getElementById("file-input").files[0];m.onload=function(e){d(e.target.result)},m.readAsDataURL(e)}}),Object(u.jsx)("div",{className:"photo-grid-container",children:g}),v&&Object(u.jsx)("p",{children:"Wrong number of photos"}),Object(u.jsx)("button",{className:"add-question-btn",onClick:function(){h.length<2?x(!0):(x(!1),function(){var e=[],s=n;h.forEach((function(t){var n=Math.floor(1e5*Math.random());s.set(n,t),e.push(n)})),c(s),t(e)}())},children:"Save"})]})}n(48);function O(e){var t=e.addQuestion,n=e.handleCloseModal,c=e.photoMap,a=e.setPhotoMap,o=Object(s.useState)(""),i=Object(r.a)(o,2),l=i[0],d=i[1],O=Object(s.useState)(null),f=Object(r.a)(O,2),p=f[0],v=f[1],x=Object(s.useState)([]),m=Object(r.a)(x,2),g=m[0],y=m[1],w=Object(s.useState)(!1),k=Object(r.a)(w,2),N=k[0],S=k[1];return Object(u.jsx)("div",{className:"new-question-box",children:Object(u.jsxs)("form",{onSubmit:function(){var e={title:l,possibleAnswers:g,type:p};console.log("Question title is: "+e.title+" and answers are: "+e.possibleAnswers),t(e)},className:"new-question-form",children:[Object(u.jsxs)("div",{className:"radio-buttons",onChange:function(e){v(e.target.value),S(!0)},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"question-type",value:"choice"}),Object(u.jsx)("span",{children:"Multiple choice"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"question-type",value:"openQuestion"}),Object(u.jsx)("span",{children:"Open"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"question-type",value:"imageQuestion"}),Object(u.jsx)("span",{children:"Image"})]})]}),N&&Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",id:"question",name:"question",onChange:function(e){return d(e.target.value.substring(10,e.target.value.length))},value:"Question: "+l})}),{choice:Object(u.jsx)(b,{setAnswers:y,title:l}),openQuestion:Object(u.jsx)(j,{handleCloseModal:n,title:l}),imageQuestion:Object(u.jsx)(h,{setAnswers:y,photoMap:c,setPhotoMap:a,title:l})}[p],p&&Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"reset-btn",onClick:function(){S(!1),v(null),document.querySelectorAll("input[type=radio]").forEach((function(e){return e.checked=!1}))},children:"Reset"})})]})})}n(49);function f(e){var t=e.question,n=e.photoMap,s="abcdefghijkl",c="";switch(t.type){case"choice":c="Multiple choice";break;case"openQuestion":c="Open question";break;case"imageQuestion":c="Image choice";break;default:c="Question"}var a=t.possibleAnswers.map((function(e,c){switch(t.type){case"choice":return Object(u.jsx)("p",{children:s.charAt(c).toUpperCase()+":"+e},c);case"imageQuestion":return Object(u.jsxs)("div",{className:"image-question-box",children:[Object(u.jsx)("p",{children:s.charAt(c).toUpperCase()+":"}),Object(u.jsx)("img",{className:"photo",src:n.get(e),height:"200",alt:"answer thumbnail"})]},c);default:return Object(u.jsx)("p",{children:"There is a problem"})}}));return Object(u.jsxs)("div",{className:"question-container",children:[Object(u.jsxs)("p",{children:["Question: ",t.title]}),Object(u.jsx)("div",{className:"".concat("Image choice"===c?"photo-choices-grid-container":""),children:a}),Object(u.jsxs)("p",{children:["Type: ",c]})]})}n(50);function p(e){var t=e.questions,n=e.photoMap,c=Object(s.useState)(!1),a=Object(r.a)(c,2),o=a[0],i=a[1];Object(s.useEffect)((function(){t.length>0?i(!0):i(!1)}),[t]);var l=t.map((function(e,t){return Object(u.jsx)(f,{question:e,photoMap:n},t)}));return Object(u.jsx)("div",{className:"list-container",children:o?l:Object(u.jsxs)("span",{className:"empty-list-message",children:["Your journey of making a survey begins.",Object(u.jsx)("br",{}),"It shall be a short one..."]})})}var v=n(13),x=n(5),m=n.n(x),g=n(15),y=n(36),w=n.n(y);function k(e){var t=e.surveyId;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Share your survey:"}),Object(u.jsx)("input",{className:"survey-link",type:"text",value:window.location.host+"/share/"+t,id:"survey-link-box",readOnly:!0}),Object(u.jsx)("button",{className:"copy-link-btn",onClick:function(){var e=document.getElementById("survey-link-box");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value)},children:"Copy link"}),Object(u.jsx)("br",{}),Object(u.jsx)(w.a,{id:"qr-code",value:"https://www."+window.location.host+"/share/"+t}),Object(u.jsx)("button",{style:{backgroundColor:"blue",display:"block",marginInline:"auto"},onClick:function(){var e=document.getElementById("qr-code").toDataURL("image/png").replace("image/png","https://"+window.location.host+"/survey/"+t),n=document.createElement("a");n.href=e,n.download="survey-qr.png",document.body.appendChild(n),n.click(),document.body.removeChild(n)},children:"Download QR code"})]})}n(78);function N(e){var t=e.children,n=e.buttonText;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"collapse-btn",onClick:function(){var e=document.getElementsByClassName("collapse-btn")[0];e.classList.toggle("active");var t=e.nextElementSibling;"block"===t.style.display?t.style.display="none":t.style.display="block"},children:n}),Object(u.jsx)("div",{className:"collapse-content",children:t})]})}function S(e){var t=e.setShowLoadSurveyModal,n=Object(s.useState)(""),c=Object(r.a)(n,2),a=c[0],o=c[1],i=Object(s.useState)(!1),l=Object(r.a)(i,2),b=l[0],j=l[1],h=Object(s.useState)(null),O=Object(r.a)(h,2),f=O[0],p=O[1],x=Object(s.useState)(!1),y=Object(r.a)(x,2),w=y[0],k=y[1],N=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e=document.getElementById("load-survey-btn");b?(e.removeAttribute("disabled",""),e.classList.remove("disabled-button")):(e.setAttribute("disabled",""),e.classList.add("disabled-button"))}),[b]),Object(u.jsxs)(d,{closeModal:function(){return t(!1)},closeable:!0,children:[Object(u.jsx)("input",{type:"text",id:"survey-code",name:"surveyCode",placeholder:"Survey code",onChange:function(e){return o(e.target.value.substring(13,e.target.value.length))},value:"Survey code: "+a}),Object(u.jsx)("button",{id:"load-survey-btn",onClick:function(){return e=a,void m.a.get("https://"+window.location.host+"/surveyCodes/"+e).then((function(e){console.log("Code matched, surveyId: "+e.data.surveyId),p(e.data.surveyId),k(!1)})).catch((function(){console.log("error matching survey code"),k(!0),p(null),j(!1),null!==N.current&&N.current.reset()}));var e},children:"Load"}),w&&Object(u.jsx)("p",{children:"Code does not match"}),null===f?Object(u.jsx)("div",{className:"captcha",children:Object(u.jsx)(g.a,{ref:N,sitekey:"6LfSB_IdAAAAAEM7c5gXPgdsDoDMs0vwaMkPLe6p",onChange:function(e){m.a.post("https://"+window.location.host+"/verify-captcha",[e]).then((function(e){j(e.data)})).catch((function(){console.log("Captcha validation error"),j(!1)}))}})}):Object(u.jsx)(v.b,{className:"results-link",to:"/results",style:{color:"black",display:"block"},state:{id:f,code:a},children:Object(u.jsx)("button",{children:"Go to results"})})]})}var C=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),o=Object(r.a)(a,2),b=o[0],j=o[1],h=Object(s.useState)(""),f=Object(r.a)(h,2),x=f[0],y=f[1],w=Object(s.useState)(""),C=Object(r.a)(w,2),A=C[0],E=C[1],q=Object(s.useState)(""),I=Object(r.a)(q,2),M=I[0],L=I[1],B=Object(s.useState)({id:"",title:"",description:"",questions:[]}),Q=Object(r.a)(B,2),D=Q[0],F=Q[1],T=Object(s.useState)(new Map),P=Object(r.a)(T,2),R=P[0],U=P[1],X=Object(s.useState)(!1),G=Object(r.a)(X,2),_=G[0],J=G[1],V=Object(s.useState)(!1),z=Object(r.a)(V,2),H=z[0],W=z[1],Y=Object(s.useState)(!1),K=Object(r.a)(Y,2),Z=K[0],$=K[1],ee=Object(s.useState)(null),te=Object(r.a)(ee,2),ne=te[0],se=te[1];Object(s.useEffect)((function(){F((function(e){return Object(l.a)(Object(l.a)({},e),{},{title:x,description:M,questions:n})}))}),[x,M,n]);var ce=Object(s.useCallback)((function(){""!==A&&m.a.post("https://"+window.location.host+"/surveyCodes/add",[A]).then((function(e){console.log("Survey key generated: "+e.data),se(e.data)})).catch((function(){console.log("error generating survey code")}))}),[A]);Object(s.useEffect)((function(){ce()}),[ce]),Object(s.useEffect)((function(){""!==A&&R.forEach((function(e,t){oe(e,A+":"+t)}))}),[A,R]);var ae=Object(s.useCallback)((function(){var e=document.getElementsByClassName("finish-survey-btn")[0];""!==x&&""!==M&&n.length>0&&H?(e.removeAttribute("disabled",""),e.classList.remove("disabled-button")):(e.setAttribute("disabled",""),e.classList.add("disabled-button"))}),[H,M,n.length,x]);Object(s.useEffect)((function(){ae()}),[x,M,n,H,ae]);var oe=function(e,t){m.a.post("https://"+window.location.host+"/images/add",[e,t]).then((function(e){console.log(e.data),console.log("image posted")})).catch((function(){console.log("Error posting image")}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"top-part",children:[Object(u.jsx)("h1",{children:"QuickShot"}),Object(u.jsx)("h2",{children:"Surveys in no time"}),Object(u.jsxs)("div",{className:"survey-title-box",children:[Object(u.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"Survey title",onChange:function(e){return y(e.target.value.substring(7,e.target.value.length))},value:"Title: "+x}),Object(u.jsx)("textarea",{id:"description-input",name:"description-input",maxLength:"300",autoComplete:"off",placeholder:"Survey description",onInput:function(){var e=document.getElementById("description-input").value;L(e.substring(13,e.length))},value:"Description: "+M})]}),Object(u.jsxs)("div",{className:"top-buttons",children:[Object(u.jsx)("button",{className:"new-question-btn main-btn",onClick:function(){return j(!0)},children:"Add question"}),Object(u.jsxs)(N,{buttonText:"More",children:[Object(u.jsx)("button",{className:"main-btn load-btn",onClick:function(){return $(!0)},children:"Load survey"}),Object(u.jsx)("button",{className:"reset-btn main-btn",onClick:function(){window.confirm("Are you sure you want to reset your survey?")&&window.location.reload()},children:"Reset"})]})]})]}),Object(u.jsx)(p,{questions:n,photoMap:R}),b&&Object(u.jsx)(d,{closeModal:function(){return j(!1)},closeable:!0,children:Object(u.jsx)(O,{addQuestion:function(e){c((function(t){return[].concat(Object(i.a)(t),[e])})),j(!1)},closeModal:function(){return j(!1)},photoMap:R,setPhotoMap:U})}),Object(u.jsx)("button",{className:"finish-survey-btn main-btn",onClick:function(){m.a.post("https://"+window.location.host+"/survey/add",D).then((function(e){console.log("Survey posted! Its id is:"+e.data),E(e.data)})).catch((function(){console.log("Error")})),J(!0)},children:"Finish"}),Object(u.jsx)("div",{className:"captcha",children:Object(u.jsx)(g.a,{sitekey:"6LfSB_IdAAAAAEM7c5gXPgdsDoDMs0vwaMkPLe6p",onChange:function(e){m.a.post("https://"+window.location.host+"/verify-captcha",[e]).then((function(e){W(e.data)})).catch((function(){console.log("Captcha validation error")}))}})}),_&&Object(u.jsxs)(d,{closeable:!1,children:[Object(u.jsx)(k,{surveyId:A}),Object(u.jsx)(v.b,{className:"results-link",to:"/results",style:{color:"black",display:"block"},state:{id:A,code:ne},children:Object(u.jsx)("button",{children:"Go to results"})}),Object(u.jsxs)("p",{children:["This code allows to come back to the results later: ",Object(u.jsx)("u",{children:ne})]})]}),Z&&Object(u.jsx)(S,{setShowLoadSurveyModal:$})]})},A=n(3);n(79);function E(e){var t=e.surveyId,n=e.answer,c=e.index,a=e.handleCheckboxClick,o=Object(s.useState)(null),i=Object(r.a)(o,2),l=i[0],d=i[1];return m.a.get("https://"+window.location.host+"/images/"+t+":"+n).then((function(e){d(e.data)})).catch((function(e){console.log("Error getting image: "+e)})),Object(u.jsxs)("div",{className:"image-question-box",children:[Object(u.jsx)("input",{type:"checkbox",id:"photo-checkbox"+c,className:"photo-checkbox",name:"photo-checkbox",onClick:function(){return a(c)},value:"abcdefghijkl".charAt(c).toUpperCase()}),Object(u.jsxs)("label",{className:"photo-label",htmlFor:"photo-checkbox"+c,children:[Object(u.jsx)("img",{src:l,className:"photo",alt:"answer thumbnail"}),Object(u.jsx)("div",{className:"overlay",children:Object(u.jsx)("span",{children:"\u2713"})})]})]},c)}function q(e){var t=e.question,n=e.questionIndex,c=e.answers,a=e.setAnswers,o=Object(s.useState)([]),i=Object(r.a)(o,2),l=i[0],d=i[1],b=Object(A.g)().id,j=Object(s.useState)(new Array(t.possibleAnswers.length).fill(null)),h=Object(r.a)(j,2),O=h[0],f=h[1],p=c.slice(),v=Object(s.useCallback)((function(e){var t=O.slice();document.getElementById("photo-checkbox"+e).checked?t[e]=document.getElementById("photo-checkbox"+e).value:t[e]=null,f(t)}),[O]);return Object(s.useEffect)((function(){var e=t.possibleAnswers.map((function(e,t){return Object(u.jsx)(E,{surveyId:b,answer:e,index:t,handleCheckboxClick:v},t)}));d(e)}),[t,v,b]),Object(s.useEffect)((function(){p[n]=O,a(p)}),[O,n]),Object(u.jsxs)("div",{className:"question-container",children:[Object(u.jsx)("h4",{children:t.title}),Object(u.jsx)("div",{className:"photo-choices-grid-container",children:l})]})}n(80);function I(e){var t=e.question,n=e.questionIndex,c=e.answers,a=e.setAnswers,o=c.slice(),i=Object(s.useState)(new Array(t.possibleAnswers.length).fill(null)),l=Object(r.a)(i,2),d=l[0],b=l[1];Object(s.useEffect)((function(){o[n]=d,a(o)}),[d,n,d]);var j=t.possibleAnswers.map((function(e,t){return Object(u.jsxs)("div",{className:"one-checkbox-answer",children:[Object(u.jsx)("label",{className:"multiquestion-label",htmlFor:"answer-checkbox"+t,children:e+" "}),Object(u.jsx)("input",{type:"checkbox",id:"answer-checkbox"+t+n,name:"answer-checkbox",onClick:function(){return function(e){console.log(e);var t=d.slice();document.getElementById("answer-checkbox"+e+n).checked?t[e]=document.getElementById("answer-checkbox"+e+n).value:t[e]=null,console.log(t),b(t)}(t)},value:"abcdefghijkl".charAt(t).toUpperCase()})]},t)}));return Object(u.jsxs)("div",{className:"question-container",children:[Object(u.jsx)("h4",{children:t.title}),j]})}n(34);function M(e){var t=e.question,n=e.questionIndex,c=e.answers,a=e.setAnswers,o=Object(s.useState)(""),i=Object(r.a)(o,2),l=i[0],d=i[1],b=c.slice();return Object(s.useEffect)((function(){b[n]=l,a(b)}),[l,n]),Object(u.jsxs)("div",{className:"question-container",children:[Object(u.jsx)("label",{htmlFor:"answerBox",children:Object(u.jsx)("h4",{children:t.title})}),Object(u.jsx)("textarea",{className:"answer-text-area",maxLength:"300",autoComplete:"off",placeholder:"Answer here",id:"answer-box"+n,name:"answerBox",onInput:function(){d(document.getElementById("answer-box"+n).value)}})]})}function L(e){var t=e.questions,n=e.answers,s=e.setAnswers,c=t.map((function(e,t){switch(e.type){case"choice":return Object(u.jsx)(I,{questionIndex:t,question:e,answers:n,setAnswers:s},t);case"openQuestion":return Object(u.jsx)(M,{questionIndex:t,question:e,answers:n,setAnswers:s},t);case"imageQuestion":return Object(u.jsx)(q,{questionIndex:t,question:e,answers:n,setAnswers:s},t);default:return Object(u.jsx)("p",{children:"There was an issue"})}}));return Object(u.jsx)("div",{children:c})}function B(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),o=Object(r.a)(a,2),i=o[0],l=o[1],b=Object(s.useState)([]),j=Object(r.a)(b,2),h=j[0],O=j[1],f=Object(s.useState)(!1),p=Object(r.a)(f,2),v=p[0],x=p[1],y=Object(s.useState)(!1),w=Object(r.a)(y,2),k=w[0],N=w[1],S=Object(s.useState)(!1),C=Object(r.a)(S,2),E=C[0],q=C[1],I=Object(s.useState)(!1),M=Object(r.a)(I,2),B=M[0],Q=M[1],D=Object(A.g)().id,F=Object(s.useCallback)((function(){m.a.get("https://"+window.location.host+"/survey/"+D).then((function(e){c(e.data),N(!0)})).catch((function(){console.log("error")}))}),[D]);Object(s.useEffect)((function(){F()}),[F]);Object(s.useEffect)((function(){null!==n&&O(n.questions)}),[n]),Object(s.useEffect)((function(){try{l(new Array(h.length).fill(null))}catch(e){console.log("array not yet filled")}}),[h]);var T=Object(s.useCallback)((function(){var e=document.getElementsByClassName("finish-btn")[0],t=!0;i!==[]?i.forEach((function(e){null===e||""===e?t=!1:Array.isArray(e)?R(e)&&(t=!1):P(e)&&(t=!1)})):t=!1,console.log("AS: "+t),t?(e.removeAttribute("disabled",""),e.classList.remove("disabled-button")):(e.setAttribute("disabled",""),e.classList.add("disabled-button"))}),[i]);Object(s.useEffect)((function(){null!==n&&T()}),[n,T]);var P=function(e){var t=!0;return Array.from(e).forEach((function(e){" "!==e&&(t=!1)})),t},R=function(e){var t=!0;return e.forEach((function(e){null!==e&&(t=!1)})),t};return console.log(v),Object(u.jsxs)("div",{className:"survey-view",children:[Object(u.jsxs)("div",{className:"top-part",children:[Object(u.jsx)("h1",{className:"site-title",children:"QuickShot"}),Object(u.jsx)("h2",{className:"description",children:"Surveys in no time"}),null!==n&&Object(u.jsxs)("div",{className:"survey-title-box",children:[Object(u.jsxs)("h3",{className:"survey-title",children:["Survey title: ",null!==n&&n.title]}),Object(u.jsxs)("span",{className:"survey-description",children:["Description: ",null!==n&&n.description]})]})]}),Object(u.jsx)("button",{onClick:function(){return console.log(i)},children:"ss"}),null!==n?Object(u.jsxs)("div",{children:[k?Object(u.jsx)(L,{questions:h,answers:i,setAnswers:l}):Object(u.jsx)("span",{children:"Loading..."}),Object(u.jsx)("button",{className:"finish-btn",onClick:function(){var e=!0;i.forEach((function(t){null===t&&(e=!1)})),x(!!e)},children:"Finish"})]}):Object(u.jsx)("p",{className:"no-survey-message",children:"Survey does not exist."}),v&&(E?Object(u.jsx)(d,{closeable:!1,children:Object(u.jsx)("h3",{children:"Thank you!"})}):Object(u.jsxs)(d,{closeModal:function(){window.grecaptcha.reset(),Q(!1),x(!1)},closeable:!0,children:[Object(u.jsx)("div",{className:"captcha",children:Object(u.jsx)(g.a,{sitekey:"6LfSB_IdAAAAAEM7c5gXPgdsDoDMs0vwaMkPLe6p",onChange:function(e){m.a.post("https://"+window.location.host+"/verify-captcha",[e]).then((function(e){Q(e.data)})).catch((function(){console.log("Captcha validation error")}))}})}),B&&Object(u.jsx)("button",{className:"final-send-btn",onClick:function(){m.a.post("https://"+window.location.host+"/answers/add",{answerSet:i,surveyId:D}).then((function(e){console.log(e),console.log("answers posted"),q(!0)})).catch((function(){console.log("Error posting answers")}))},children:"Send Answers"})]}))]})}n(81);var Q=n(37);n(82),n(83);function D(e){var t=e.surveyId,n=e.answer,c=e.answersCount,a=e.totalVotes,o=e.labels,i=e.index,l=Object(s.useState)(null),d=Object(r.a)(l,2),b=d[0],j=d[1];return m.a.get("https://"+window.location.host+"/images/"+t+":"+n).then((function(e){j(e.data)})).catch((function(e){console.log("Error getting image: "+e)})),Object(u.jsxs)("div",{className:"photo-grid-element",children:[Object(u.jsx)("p",{children:o[i]+": "+(c[i]/a*100).toFixed(0)+"%"}),Object(u.jsx)("img",{className:"photo",src:b,alt:"answer thumbnail"})]})}function F(e){var t=e.question,n=e.answers,c=e.id,a=Object(s.useState)(null),o=Object(r.a)(a,2),i=o[0],l=o[1],d=Array.from("ABCDEFGH").slice(0,t.possibleAnswers.length),b=Object(s.useState)(null),j=Object(r.a)(b,2),h=j[0],O=j[1],f=Object(s.useState)(0),p=Object(r.a)(f,2),v=p[0],x=p[1];Object(s.useEffect)((function(){if(void 0!==n){var e=new Array(d.length);e.fill(0,0,d.length+1);var t=0;d.forEach((function(s){for(var c=0;c<n.length;c++)for(var a=0;a<n[c].length;a++)n[c][a]===s&&e[t]++;t++})),l(e)}}),[n]),Object(s.useEffect)((function(){if(null!==i){var e=0;i.forEach((function(t){e+=t})),x(e)}}),[i]);var m={labels:d,datasets:[{label:t.title,backgroundColor:["#ddff00","#e6200e","#1ce80e","#140dde","#db2580","#39dbb3","#a8a492","#512361"],hoverBackgroundColor:["#5f691e","#871f16","#1b7515","#141169","#6b1540","#277562","#474640","#34183d"],hoverOffset:15,data:i}]};return Object(s.useEffect)((function(){var e;null!==i&&0!==v&&(e="imageQuestion"===t.type?t.possibleAnswers.map((function(e,t){return console.log(e),Object(u.jsx)(D,{surveyId:c,answer:e,answersCount:i,totalVotes:v,labels:d,index:t},t)})):t.possibleAnswers.map((function(e,t){return Object(u.jsx)("p",{children:d[t]+": "+e+" - "+(i[t]/v*100).toFixed(0)+"%"},t)})),O(e))}),[i,v,c,t]),Object(u.jsxs)("div",{className:"question-container",children:[Object(u.jsx)("h4",{className:"question-title",children:t.title}),Object(u.jsxs)("div",{className:"grid-container",children:[Object(u.jsx)("div",{className:" left-section ".concat("imageQuestion"===t.type?"photo-question-grid":""),children:null!==h?h:Object(u.jsx)("p",{children:"Loading..."})}),Object(u.jsx)("div",{className:"right-section",children:Object(u.jsx)(Q.a,{data:m,options:{title:{display:!0,text:t.title,fontSize:20},legend:{display:!0,position:"right"},responsive:!0,layout:{padding:{bottom:7}}}})})]})]})}function T(e){var t=e.question,n=e.answers,c=Object(s.useState)(null),a=Object(r.a)(c,2),o=a[0],i=a[1];return Object(s.useEffect)((function(){var e=n.map((function(e,t){return Object(u.jsx)("div",{className:"open-question-answer",children:t+1+". "+e},t)}));i(e)}),[n]),Object(u.jsxs)("div",{className:"question-container",children:[Object(u.jsx)("h4",{children:t.title}),Object(u.jsx)("div",{className:"open-question-results",children:null!==o?o:Object(u.jsx)("p",{children:"Loading..."})})]})}function P(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),o=Object(r.a)(a,2),l=o[0],b=o[1],j=Object(s.useState)(!1),h=Object(r.a)(j,2),O=h[0],f=h[1],p=Object(s.useState)(null),v=Object(r.a)(p,2),x=v[0],g=v[1],y=Object(s.useState)([]),w=Object(r.a)(y,2),S=w[0],C=w[1],E=Object(s.useState)(!0),q=Object(r.a)(E,2),I=q[0],M=q[1],L=Object(s.useState)(null),B=Object(r.a)(L,2),Q=B[0],D=B[1],P=Object(s.useState)(null),R=Object(r.a)(P,2),U=R[0],X=R[1],G=Object(A.e)(),_=Object(s.useState)(!1),J=Object(r.a)(_,2),V=J[0],z=J[1],H=Object(s.useState)([]),W=Object(r.a)(H,2),Y=W[0],K=W[1],Z=Object(s.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(s.useState)(!1),se=Object(r.a)(ne,2),ce=se[0],ae=se[1];Object(s.useEffect)((function(){if(null!==G.state){var e=G.state.id,t=G.state.code;D(e),X(t)}}),[G.state]);var oe=Object(s.useCallback)((function(){m.a.get("https://"+window.location.host+"/answers/"+Q).then((function(e){var t=e.data;ie(t)})).catch((function(e){console.log("error: "+e)}))}),[Q]);Object(s.useEffect)((function(){M(!1),oe()}),[I,oe]),Object(s.useEffect)((function(){null!==Q&&(M(!1),m.a.get("https://"+window.location.host+"/survey/"+Q).then((function(e){b(e.data)})).catch((function(){console.log("error")})))}),[I,Q]);var ie=function(e){var t=[];e.forEach((function(e){t.push(e.answers)})),c(t)};Object(s.useEffect)((function(){if(null!==n&&void 0!==n[0]){var e=[],t=0;n[0].forEach((function(){t++}));for(var s=0;s<t;s++)e[s]=[];n.forEach((function(t){var n=0;t.forEach((function(t){e[n].push(t),n++}))})),C(e)}}),[n]);var le=Object(s.useCallback)((function(){if(null!==l&&void 0!==n[0]&&S!==[]){console.log("FI"+S[3]);var e=l.questions.map((function(e,t){if(void 0!==S[t])switch(e.type){case"choice":return Object(u.jsx)(F,{question:e,answers:S[t]},t);case"imageQuestion":return Object(u.jsx)(F,{question:e,answers:S[t],id:Q},t);case"openQuestion":return Object(u.jsx)(T,{question:e,answers:S[t]},t);default:return Object(u.jsx)("p",{children:"There was an issue."})}}));g(e),f(!0)}}),[n,S,Q,l]);Object(s.useEffect)((function(){void 0!==n&&le()}),[le]);var re=Object(s.useCallback)((function(){l.questions.forEach((function(e){"imageQuestion"===e.type&&e.possibleAnswers.forEach((function(e){K((function(t){return[].concat(Object(i.a)(t),[e])}))}))}))}),[l]);Object(s.useEffect)((function(){null!==l&&Y<2&&re()}),[l,Y,re]);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"top-part",children:[Object(u.jsx)("h1",{className:"site-title",children:"QuickShot"}),Object(u.jsx)("h2",{className:"description",children:"Surveys in no time"}),null!==l&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"survey-title-box",children:[Object(u.jsxs)("h3",{className:"survey-title",children:["Survey title: ",null!==l&&l.title]}),Object(u.jsxs)("span",{className:"survey-description",children:["Description: ",null!==l&&l.description]})]}),Object(u.jsxs)("div",{className:"sur-buttons",children:[Object(u.jsx)("button",{className:"fetch-btn",onClick:function(){return M(!0)},children:"Fetch results"}),Object(u.jsxs)(N,{buttonText:"More",children:[Object(u.jsx)("button",{className:"delete-survey-btn",onClick:function(){return z(!0)},children:"Delete survey"}),Object(u.jsx)("button",{className:"share-btn",onClick:function(){return ae(!0)},children:"Share"})]})]})]})]}),null==l?Object(u.jsx)("p",{className:"no-survey-message",children:"Survey does not exist."}):Object(u.jsxs)("div",{className:"result-list",children:[O?x:Object(u.jsx)("p",{children:"No answers yet"}),V&&(ee?Object(u.jsx)(d,{closeable:!1,children:Object(u.jsx)("p",{children:"Deletion completed!"})}):Object(u.jsxs)(d,{closeModal:function(){z(!1)},closeable:!0,children:[Object(u.jsx)("p",{children:"This action is irreversible"}),Object(u.jsx)("button",{className:"delete-survey-btn",onClick:function(){m.a.delete("https://"+window.location.host+"/survey/delete/"+Q).then((function(e){console.log(e)})).catch((function(e){console.log("Survey deletion error: "+e)})),m.a.delete("https://"+window.location.host+"/answers/delete/"+Q).then((function(e){console.log(e)})).catch((function(e){console.log("answers deletion error: "+e)})),Y.length>=2&&m.a.delete("https://"+window.location.host+"/images/delete/"+Q,{data:Y}).then((function(e){console.log(e)})).catch((function(e){console.log("images deletion error: "+e)})),te(!0)},children:"Delete survey"}),Object(u.jsx)("p",{className:"additional-warning",children:"Survey data will be permanently deleted"})]}))]}),ce&&Object(u.jsx)(d,{closeable:!0,closeModal:function(){return ae(!1)},children:Object(u.jsx)(k,{surveyId:Q})}),null!==l&&Object(u.jsxs)("p",{children:["This code allows to come back to the results later: ",Object(u.jsx)("b",{children:U})]})]})}o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v.a,{children:Object(u.jsxs)(A.c,{children:[Object(u.jsx)(A.a,{path:"/",element:Object(u.jsx)(C,{})}),Object(u.jsx)(A.a,{path:"/share/:id",element:Object(u.jsx)(B,{})}),Object(u.jsx)(A.a,{path:"/reslts",element:Object(u.jsx)(P,{})})]})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e0e2f20b.chunk.js.map