(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{237:function(t,e,n){"use strict";n.r(e);var r=n(2),c=(n(1),n(4)),o=n(45),u=n(115),i=function(t){var e=t.previous,n=t.next;return Object(r.c)("footer",{css:Object(c.e)({mt:4,pt:3})},Object(r.c)(c.c.hr,null),(e||n)&&Object(r.c)(c.b,{as:"ul",css:Object(o.a)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},Object(r.c)("li",null,e&&Object(r.c)(c.c.a,{as:u.a,to:e.node.slug,rel:"prev"},"← ",e.node.title),!e&&Object(r.c)(c.c.a,{as:u.a,to:"/",rel:"prev"},"← ","home")),Object(r.c)("li",null,n&&Object(r.c)(c.c.a,{as:u.a,to:n.node.slug,rel:"next"},n.node.title," →"),!n&&Object(r.c)(c.c.a,{as:u.a,to:"/",rel:"next"},"home"," →"))))},a=n(236),l=n(235),p=n(240),f=function(t){var e=t.data,n=e.slide,o=e.site.siteMetadata.title,u=t.location,f=t.previous,s=t.next;return Object(r.c)(a.a,{location:u,title:o},Object(r.c)(l.a,{title:n.title,description:n.excerpt}),Object(r.c)("main",null,Object(r.c)(c.c.h1,null,n.title),Object(r.c)(c.c.p,{css:Object(c.e)({fontSize:1,mt:-3,mb:3})}),Object(r.c)(p.MDXRenderer,null,n.body)),Object(r.c)(i,{previous:f,next:s}))};n.d(e,"pageQuery",(function(){return s}));e.default=function(t){var e=t.pageContext,n=e.previous,c=e.next,o=t.location,u=t.data;return Object(r.c)(f,{data:u,location:o,previous:n,next:c})};var s="2260292910"},239:function(t,e,n){var r=n(5),c=n(75),o=n(47),u=n(15),i=n(18),a=n(22),l=n(169),p=(n(12).Reflect||{}).construct,f=a((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),s=!a((function(){p((function(){}))}));r(r.S+r.F*(f||s),"Reflect",{construct:function(t,e){o(t),u(e);var n=arguments.length<3?t:o(arguments[2]);if(s&&!f)return p(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}var a=n.prototype,b=c(i(a)?a:Object.prototype),O=Function.apply.call(t,b,e);return i(O)?O:b}})},240:function(t,e,n){var r=n(241);t.exports={MDXRenderer:r}},241:function(t,e,n){function r(t,e,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(38),n(7),n(8),n(94),n(168),n(33),n(14),n(6),n(95),n(26),n(3),n(239),n(239),n(95),n(94),n(168),n(26),n(33),n(38),n(14),n(6),n(7),n(3),n(8);var l=n(1),p=n(73),f=p.useMDXComponents,s=p.mdx,b=n(142).useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,u=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,["scope","components","children"]),a=f(n),p=b(e),O=l.useMemo((function(){if(!c)return null;var t=i({React:l,mdx:s},p),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,e]);return l.createElement(O,i({components:a},u))}}}]);
//# sourceMappingURL=component---src-gatsby-theme-blog-templates-slide-js-2b433d6f23a89a4ef5b1.js.map