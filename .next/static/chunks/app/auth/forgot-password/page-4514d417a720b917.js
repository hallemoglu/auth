(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{2011:function(e,s,t){Promise.resolve().then(t.bind(t,2822)),Promise.resolve().then(t.t.bind(t,8326,23))},2822:function(e,s,t){"use strict";t.r(s);var r=t(7437),a=t(2265),n=t(5512),l=t(1310),u=t(9490),d=t(9427);s.default=()=>{let[e,s]=(0,a.useState)(!1),[t,o]=(0,a.useState)(""),[c,i]=(0,a.useState)(""),[p,b]=(0,a.useState)(""),[h,m]=(0,a.useState)(""),[f,x]=(0,a.useState)(""),[g,v]=(0,a.useState)("w-full"),[S,j]=(0,a.useState)(""),w=(0,a.useRef)(null),[y,E]=(0,a.useState)({email:""}),N=async e=>{e.preventDefault(),x(""),b(""),m(""),s(!0),j(""),v("w-full");let{email:t}=y;try{await u.Z.register({email:t}).then(e=>{e.data.success&&(s(!1),x("bg-green-500"),i("#16a34a"),o(e.data.successIcon),b(e.data.success.successTitle),m(e.data.success.successMessage))}).catch(e=>{s(!1),e.response.data.validatorErrors?e.response.data.validatorErrors.email&&(j(e.response.data.validatorErrors.email),v("w-full border-red-500")):e.response.data.fatalError?(x("bg-red-500"),i("red"),o(e.response.data.errorIcon),b(e.response.data.success.errorTitle),m(e.response.data.success.errorMessage)):(i("red"),x("bg-red-500"),o("ShieldX"),b((0,d.Y8)()),m((0,d.bZ)()))})}catch(e){i("red"),x("bg-red-500"),o("ShieldX"),b((0,d.Y8)()),m((0,d.bZ)())}},C=(e,s)=>{let t=e.target.value;E({...y,[s]:t})};return(0,r.jsxs)(r.Fragment,{children:[h&&(0,r.jsx)(n.Z,{alertIcon:t,alertIconColor:c,alertTitle:p,alertMessage:h,alertCss:f}),(0,r.jsxs)("form",{onSubmit:N,noValidate:!0,children:[(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)(l.Z,{inputType:"email",inputPlaceholder:(0,d.Ls)(),inputClass:g,inputRef:w,inputError:S,inputStatus:e,inputTabIndex:1,onChange:e=>C(e,"email")})}),(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)("button",{type:"submit",className:"w-full rounded-md py-3 bg-orange-500 text-center text-white",disabled:e,children:(0,d.IY)()})})]})]})}},1310:function(e,s,t){"use strict";var r=t(7437);s.Z=e=>{let{inputType:s,inputPlaceholder:t,inputClass:a,inputMaxLength:n,inputValue:l,inputRef:u=null,inputError:d,inputStatus:o,inputTabIndex:c,onChange:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:s,placeholder:t,className:a+" text-sm rounded-md border border-gray-400 py-4 px-4 focus:outline-none active:outline-none focus:border focus:border-purple-500",maxLength:n,value:l,ref:u,disabled:o,tabIndex:c,onChange:e=>i&&i(e)}),(0,r.jsx)("span",{className:"text-xs text-red-500",children:d})]})}}},function(e){e.O(0,[640,751,971,472,744],function(){return e(e.s=2011)}),_N_E=e.O()}]);