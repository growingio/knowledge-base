"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[7616],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),i=n(6010),o=n(9960),c=n(2802),a="cardContainer_woeA",l="cardTitle_pNjP",u="cardDescription_qC_k",s=n(3919),p=n(5999);function m(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",a)},n)}function d(e){var t=e.href,n=e.icon,o=e.title,c=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:c},c))}function f(e){var t=e.item,n=(0,c.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,i=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(d,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{key:t,item:e}))})))}},6006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=n(5360),a=n(2802),l=["components"],u={slug:"/minp",title:"\u5c0f\u7a0b\u5e8f SDK"},s=void 0,p={unversionedId:"sdk/minp/index",id:"sdk/minp/index",title:"\u5c0f\u7a0b\u5e8f SDK",description:"iOS SDK \u63d0\u4f9b\u4e86 \u65e0\u57cb\u70b9SDK \u548c \u57cb\u70b9SDK \u4e24\u4e2a\u7248\u672c\uff1a",source:"@site/docs/sdk/minp/index.md",sourceDirName:"sdk/minp",slug:"/minp",permalink:"/knowledge-base/docs/minp",draft:!1,tags:[],version:"current",frontMatter:{slug:"/minp",title:"\u5c0f\u7a0b\u5e8f SDK"},sidebar:"docs",previous:{title:"web-introduction",permalink:"/knowledge-base/docs/sdk/web/web-introduction"},next:{title:"minp-introduction",permalink:"/knowledge-base/docs/sdk/minp/minp-introduction"}},m={},d=[],f={toc:d};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"iOS SDK \u63d0\u4f9b\u4e86 \u65e0\u57cb\u70b9SDK \u548c \u57cb\u70b9SDK \u4e24\u4e2a\u7248\u672c\uff1a"),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);