(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{45:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(8);n(47);t.a=function(e){return e.href?a.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?a.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):a.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(51);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(12),a=n.n(r),c=n(16),o=n(10),u=n(0),s=function(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(u.useState)(),l=Object(o.a)(s,2),i=l[0],f=l[1],m=Object(u.useRef)([]),d=Object(u.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(t){var n,c,o,u,s,l,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,o=i.length>3&&void 0!==i[3]?i[3]:{},r(!0),u=new AbortController,m.current.push(u),e.prev=6,e.next=9,fetch(t,{method:n,body:c,headers:o,signal:u.signal,mode:"cors",credentials:"include"});case 9:return s=e.sent,e.next=12,s.json();case 12:if(l=e.sent,m.current=m.current.filter((function(e){return e!==u})),s.ok){e.next=16;break}throw new Error(l.message);case 16:return r(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),f(e.t0.message),r(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(u.useEffect)((function(){return function(){m.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:d,clearError:function(){f(null)}}}},50:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(7),o=n.n(c),u=n(44),s=n(17),l=(n(48),function(e){var t=a.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},a.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},a.a.createElement("h2",null,e.header)),a.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},a.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),a.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))}),i=function(e){return a.a.createElement(a.a.Fragment,null,e.show&&a.a.createElement(s.a,{onClick:e.onCancel}),a.a.createElement(u.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},a.a.createElement(l,e)))},f=n(45);t.a=function(e){return a.a.createElement(i,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:a.a.createElement(f.a,{onClick:e.onClear},"Okay")},a.a.createElement("p",null,e.error))}},51:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},52:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(53);t.a=function(e){return a.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},53:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(46),a=n(12),c=n.n(a),o=n(16),u=n(10),s=n(0),l=n.n(s),i=n(52),f=n(45),m=(n(56),function(e){var t=e.entry["result-title"],n=e.entry["result-hood"],r=e.entry.housing,a=e.entry["result-price"];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{className:"place-card"},l.a.createElement("h3",null,t),l.a.createElement("h4",null,n," ",r),l.a.createElement("p",null,a),l.a.createElement(f.a,{onClick:e.onLike},"Like"),l.a.createElement(f.a,{onClick:e.onPass},"Pass"),l.a.createElement("div",{style:{"margin-top":"10px"}},e.entry.images.map((function(e,t){return l.a.createElement("img",{key:t,src:e})})))))}),d=n(50),p=n(18),b=n(49);t.default=function(){var e=Object(b.a)(),t=e.isLoading,n=e.error,a=e.sendRequest,i=e.clearError,f=Object(s.useState)(),h=Object(u.a)(f,2),v=h[0],E=h[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("".concat("/api","/randomEntries"));case 3:t=e.sent,E({places:t,idx:0}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[a]);var O=v&&v.places&&v.places.length>0?v.places[v.idx]:null,y=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v.idx+1!=25){e.next=12;break}return e.prev=1,e.next=4,a("".concat("/api","/randomEntries"));case 4:t=e.sent,E({places:t,idx:0}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:e.next=13;break;case 12:E(Object(r.a)(Object(r.a)({},v),{},{idx:v.idx+1}));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.stringify(O),console.log(t),e.next=5,a("".concat("/api","/places"),"POST",t,{"Content-Type":"application/json"});case 5:return e.next=7,y();case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{error:n,onClear:i}),t&&l.a.createElement("div",{className:"center"},l.a.createElement(p.a,null)),!t&&O&&l.a.createElement(m,{entry:O,onPass:y,onLike:g}),!t&&!O&&l.a.createElement("h3",null,"No Entries Found"))}}}]);
//# sourceMappingURL=4.3c8f1332.chunk.js.map