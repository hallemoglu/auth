(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2788:function(e,s,t){Promise.resolve().then(t.bind(t,5975)),Promise.resolve().then(t.t.bind(t,8326,23))},5975:function(e,s,t){"use strict";t.r(s);var r=t(7437),a=t(2265),n=t(5512),o=t(3609),l=t(9490),u=t(9427);s.default=()=>{let[e,s]=(0,a.useState)(!1),[t,d]=(0,a.useState)(""),[i,c]=(0,a.useState)(""),[p,f]=(0,a.useState)(""),[h,b]=(0,a.useState)(""),[x,m]=(0,a.useState)(""),[w,g]=(0,a.useState)("w-full"),[S,E]=(0,a.useState)("w-full"),[v,y]=(0,a.useState)(""),[j,C]=(0,a.useState)(""),N=(0,a.useRef)(null),Z=(0,a.useRef)(null),[I,T]=(0,a.useState)({password:"",passwordConfirm:""}),_=(e,s)=>{let t=e.target.value;T({...I,[s]:t})},k=async e=>{e.preventDefault(),m(""),f(""),b(""),s(!0),y(""),C(""),g("w-full"),E("w-full");let{password:t,passwordConfirm:r}=I;try{await l.Z.register({password:t,passwordConfirm:r}).then(e=>{e.data.success&&(s(!1),m("bg-green-500"),c("#16a34a"),d(e.data.successIcon),f(e.data.success.successTitle),b(e.data.success.successMessage))}).catch(e=>{s(!1),e.response.data.validatorErrors?(e.response.data.validatorErrors.password&&(y(e.response.data.validatorErrors.password),g("w-full border-red-500")),e.response.data.validatorErrors.passwordConfirm&&(C(e.response.data.validatorErrors.passwordConfirm),E("w-full border-red-500"))):e.response.data.fatalError?(m("bg-red-500"),c("#dc2626"),d(e.response.data.errorIcon),f(e.response.data.success.errorTitle),b(e.response.data.success.errorMessage)):(c("#dc2626"),m("bg-red-500"),d("ShieldX"),d("ShieldX"),f((0,u.Y8)()),b((0,u.bZ)()))})}catch(e){c("#dc2626"),m("bg-red-500"),d("ShieldX"),d("ShieldX"),f((0,u.Y8)()),b((0,u.bZ)())}};return(0,r.jsxs)(r.Fragment,{children:[h&&(0,r.jsx)(n.Z,{alertIcon:t,alertIconColor:i,alertTitle:p,alertMessage:h,alertCss:x}),(0,r.jsxs)("form",{onSubmit:k,noValidate:!0,children:[(0,r.jsx)("div",{className:"mt-5 relative",children:(0,r.jsx)(o.Z,{inputType:"password",inputPlaceholder:(0,u.lZ)(),inputClass:w,inputRef:N,inputError:v,inputStatus:e,inputTabIndex:1,onChange:e=>_(e,"password")})}),(0,r.jsx)("div",{className:"mt-5 relative",children:(0,r.jsx)(o.Z,{inputType:"password",inputPlaceholder:(0,u.A7)(),inputClass:S,inputRef:Z,inputError:j,inputStatus:e,inputTabIndex:2,onChange:e=>_(e,"passwordConfirm")})}),(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)("button",{type:"submit",className:"w-full rounded-md py-3 bg-orange-500 text-center text-white",disabled:e,children:(0,u.IY)()})})]})]})}},3609:function(e,s,t){"use strict";var r,a,n=t(7437),o=t(2265),l=t(902);(r=a||(a={})).Eye="Eye",r.EyeOff="EyeOff",s.Z=e=>{let{inputType:s,inputPlaceholder:t,inputValue:r,inputClass:a,inputMaxLength:u,inputRef:d=null,inputError:i,inputStatus:c,inputTabIndex:p,onChange:f}=e,[h,b]=(0,o.useState)(s),[x,m]=(0,o.useState)("Eye");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:h,placeholder:t,className:a+" text-sm rounded-md border border-gray-400 py-3 px-2 focus:outline-none active:outline-none focus:border focus:border-purple-500",maxLength:u,ref:d,value:r,disabled:c,tabIndex:p,onChange:e=>f&&f(e)}),(0,n.jsx)("button",{type:"button",className:"absolute top-3 right-3",onClick:()=>{b(e=>"text"===e?"password":"text"),m(e=>"Eye"===e?"EyeOff":"Eye")},children:(0,n.jsx)(l.Z,{name:x,color:"brown",size:20})}),(0,n.jsx)("span",{className:"text-xs text-red-500",children:i})]})}}},function(e){e.O(0,[640,751,971,472,744],function(){return e(e.s=2788)}),_N_E=e.O()}]);