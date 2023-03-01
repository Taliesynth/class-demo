"use strict";(self.webpackChunkclass_demo=self.webpackChunkclass_demo||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),l=new RegExp(n.source+s.source,"gu"),o=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];n&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),n=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,n=!0):(n=r(c)===c&&s(c)!==c,l=i,i=s(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return F},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),s=(a(3204),a(5697)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function u(e,t,a,r,s,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:s,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=l(e,f);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},n,t,{sizes:o,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},b.displayName="Picture",b.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:s.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:n().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],O=new Set;let _,j;const R=function(e){let{as:t="div",image:s,style:n,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=l(e,T);const{width:y,height:b,layout:w}=s,v=c(y,b,w),{style:E,className:k}=v,L=l(v,I),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);m&&(u=m);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(S);if(j&&O.has(S))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(i({isLoading:!0,isLoaded:O.has(S),image:s},f)),O.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,S,O,n,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{O.has(S)&&j&&(C.current.innerHTML=j(i({isLoading:O.has(S),isLoaded:O.has(S),image:s},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},L,{style:i({},E,n,{backgroundColor:d}),className:k+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));q.propTypes=N,q.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:s,__error:n}=t,o=l(t,P);return n&&console.warn(n),s?r.createElement(e,i({image:s},o)):(console.warn("Image not loaded",a),null)}}const z=A((function(e){let{as:t="div",className:a,class:s,style:n,image:o,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=l(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),h=i({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:x,layout:N,images:T,placeholder:I,backgroundColor:O}=o,_=c(v,x,N),{style:j,className:R}=_,q=l(_,C),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},q,{style:i({},j,n,{backgroundColor:f}),className:R+(a?" "+a:"")}),r.createElement(g,{layout:N,width:v,height:x},r.createElement(E,i({},u(I,!1,N,v,x,O,y,b))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:p},w,d("eager"===m,!1,P,m,h)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),W={src:n().string.isRequired,alt:x,width:M,height:M,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=W;const F=A(q);F.displayName="StaticImage",F.propTypes=W},72:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),s=a(1883),n="layout-module--nav-link-item--a5f0a",i="layout-module--nav-link-text--69cda";var l=e=>{let{pageTitle:t,children:a}=e;const l=(0,s.K2)("3159585216");return r.createElement("div",{className:"layout-module--container--78b04"},r.createElement("header",{className:"layout-module--site-title--e4dea"},l.site.siteMetadata.title),r.createElement("nav",null,r.createElement("ul",{className:"layout-module--nav-links--1113b"},r.createElement("li",{className:n},r.createElement(s.rU,{to:"/",className:i},"Home")),r.createElement("li",{className:n},r.createElement(s.rU,{to:"/about",className:i},"About")),r.createElement("li",{className:n},r.createElement(s.rU,{to:"/blog",className:i},"Blog")))),r.createElement("main",null,r.createElement("h1",{className:"layout-module--heading--f158c"},t),a))}},9357:function(e,t,a){var r=a(7294),s=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,s.K2)("3159585216");return r.createElement("title",null,t," | ",a.site.siteMetadata.title)}},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l}});var r=a(7294),s=a(72),n=a(8032),i=a(9357);const l=()=>r.createElement(i.Z,{title:"Home Page"});t.default=()=>r.createElement(s.Z,{pageTitle:"Home Page"},r.createElement("p",null,"I'm making this by following the Gatsby Tutorial."),r.createElement(n.S,{alt:"me sipping tea",src:"../images/tali3sip.png",__imageData:a(6779)}))},6779:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/class-demo/static/b54c063989d993ee1e09f16ed7565a84/13677/tali3sip.png","srcSet":"/class-demo/static/b54c063989d993ee1e09f16ed7565a84/de391/tali3sip.png 250w,\\n/class-demo/static/b54c063989d993ee1e09f16ed7565a84/82c11/tali3sip.png 500w,\\n/class-demo/static/b54c063989d993ee1e09f16ed7565a84/13677/tali3sip.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/class-demo/static/b54c063989d993ee1e09f16ed7565a84/e7160/tali3sip.webp 250w,\\n/class-demo/static/b54c063989d993ee1e09f16ed7565a84/5f169/tali3sip.webp 500w,\\n/class-demo/static/b54c063989d993ee1e09f16ed7565a84/3cd29/tali3sip.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-index-js-452ae68e949dd9d43b3b.js.map