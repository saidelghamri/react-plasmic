(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1878)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),u=n(2725),i=n(3462),s=n(1018),f=n(7190),c=n(1210),d=n(8684);var p="undefined"!==typeof l.default.useTransition,v={};function h(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var x=l.default.forwardRef((function(e,t){var n,o=e.href,x=e.as,y=e.children,_=e.prefetch,j=e.passHref,g=e.replace,b=e.soft,C=e.shallow,m=e.scroll,M=e.locale,w=e.onClick,O=e.onMouseEnter,P=e.legacyBehavior,R=void 0===P?!0!==Boolean(!1):P,E=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=y,!R||"string"!==typeof n&&"number"!==typeof n||(n=l.default.createElement("a",null,n));var k=!1!==_,L=r(p?l.default.useTransition():[],2)[1],A=l.default.useContext(i.RouterContext),U=l.default.useContext(s.AppRouterContext);U&&(A=U);var T,N=l.default.useMemo((function(){var e=r(a.resolveHref(A,o,!0),2),t=e[0],n=e[1];return{href:t,as:x?a.resolveHref(A,x):n||t}}),[A,o,x]),B=N.href,I=N.as,S=l.default.useRef(B),D=l.default.useRef(I);R&&(T=l.default.Children.only(n));var F=R?T&&"object"===typeof T&&T.ref:t,H=r(f.useIntersection({rootMargin:"200px"}),3),z=H[0],K=H[1],G=H[2],X=l.default.useCallback((function(e){D.current===I&&S.current===B||(G(),D.current=I,S.current=B),z(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[I,F,B,G,z]);l.default.useEffect((function(){var e=K&&k&&a.isLocalURL(B),t="undefined"!==typeof M?M:A&&A.locale,n=v[B+"%"+I+(t?"%"+t:"")];e&&!n&&h(A,B,I,{locale:t})}),[I,B,K,M,k,A]);var Z={ref:X,onClick:function(e){R||"function"!==typeof w||w(e),R&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,l,u,i,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var c=function(){"softPush"in t&&"softReplace"in t?t[l?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:u,locale:s,scroll:i})};f?f(c):c()}}(e,A,B,I,g,b,C,m,M,U?L:void 0)},onMouseEnter:function(e){R||"function"!==typeof O||O(e),R&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),a.isLocalURL(B)&&h(A,B,I,{priority:!0})}};if(!R||j||"a"===T.type&&!("href"in T.props)){var q="undefined"!==typeof M?M:A&&A.locale,W=A&&A.isLocaleDomain&&c.getDomainLocale(I,q,A.locales,A.domainLocales);Z.href=W||d.addBasePath(u.addLocale(I,q,A&&A.defaultLocale))}return R?l.default.cloneElement(T,Z):l.default.createElement("a",Object.assign({},E,Z),n)}));t.default=x,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,f=o.useRef(),c=r(o.useState(!1),2),d=c[0],p=c[1],v=r(o.useState(null),2),h=v[0],x=v[1];o.useEffect((function(){if(a){if(f.current&&(f.current(),f.current=void 0),s||d)return;return h&&h.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:l,elements:o},i.push(n),u.set(n,t),t}(n),o=r.id,l=r.observer,a=r.elements;return a.set(e,t),l.observe(e),function(){if(a.delete(e),l.unobserve(e),0===a.size){l.disconnect(),u.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==f.current||f.current(),f.current=void 0}}if(!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[h,s,n,t,d]);var y=o.useCallback((function(){p(!1)}),[]);return[x,d,y]};var o=n(7294),l=n(9311),a="function"===typeof IntersectionObserver;var u=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var l=o.default.createContext(null);t.AppRouterContext=l;var a=o.default.createContext(null);t.AppTreeContext=a;var u=o.default.createContext(null);t.FullAppTreeContext=u},1878:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(7294),n(1664)),l=n.n(o);function a(){return(0,r.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34 26h-2v-1c0-6.627-5.373-12-12-12S8 18.374 8 25v1H6a1 1 0 01-1-1c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15a1 1 0 01-1 1z",fill:"url(#paint0_linear)"}),(0,r.jsx)("path",{d:"M27 25a7 7 0 00-14 0v1h2a1 1 0 001-1 4 4 0 018 0 1 1 0 001 1h2v-1z",fill:"url(#paint1_linear)"}),(0,r.jsx)("path",{d:"M30.999 25C30.999 18.925 26.075 14 20 14S9.001 18.926 9.001 25H9v1h3v-1a8 8 0 0116 0v1h3v-1h-.001z",fill:"url(#paint2_linear)"}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"paint0_linear",x1:5,y1:26,x2:35,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#1877F2"}),(0,r.jsx)("stop",{offset:1,stopColor:"#04A4F4"})]}),(0,r.jsxs)("linearGradient",{id:"paint1_linear",x1:13,y1:26,x2:27,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#F02849"}),(0,r.jsx)("stop",{offset:1,stopColor:"#F5533D"})]}),(0,r.jsxs)("linearGradient",{id:"paint2_linear",x1:9,y1:26,x2:31,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#45BD62"}),(0,r.jsx)("stop",{offset:1,stopColor:"#2ABBA7"})]})]})]})}t.default=function(){return(0,r.jsx)("div",{style:{width:"100%",padding:"100px",alignContent:"center"},children:(0,r.jsxs)("header",{children:[(0,r.jsx)(a,{}),(0,r.jsx)("h1",{style:{margin:0},children:"Welcome to Plasmic!"}),(0,r.jsx)("h4",{children:(0,r.jsx)("a",{style:{color:"blue"},href:"https://www.plasmic.app/learn/",target:"_blank",rel:"noopener noreferrer",children:"Learn Plasmic"})}),(0,r.jsx)("h3",{children:"Your pages:"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/new-page",children:(0,r.jsx)("a",{style:{color:"blue"},children:"NewPage - /new-page"})})})}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:"Note: Remember to remove this file if you introduce a Page component at the '/' path."})})]})})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);