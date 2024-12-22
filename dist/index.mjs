import e,{useState as r,useEffect as t}from"react";function n(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,s)}c((n=n.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var o,a={exports:{}},i={};var s,c,l={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function u(){return s||(s=1,"production"!==process.env.NODE_ENV&&function(){var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),v=Symbol.iterator;var h=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=h.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(r+="%s",t=t.concat([o]));var a=t.map((function(e){return String(e)}));a.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,a)}("error",e,t)}var b;function w(e){return e.displayName||"Context"}function k(e){if(null==e)return null;if("number"==typeof e.tag&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return w(e)+".Consumer";case s:return w(e._context)+".Provider";case u:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case d:var r=e.displayName||null;return null!==r?r:k(e.type)||"Memo";case y:var t=e,l=t._payload,m=t._init;try{return k(m(l))}catch(e){return null}}return null}b=Symbol.for("react.module.reference");var _,x,j,S,O,E,R,C=Object.assign,N=0;function T(){}T.__reactDisabledLog=!0;var P,$=h.ReactCurrentDispatcher;function D(e,r,t){if(void 0===P)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return"\n"+P+e}var F,I=!1,A="function"==typeof WeakMap?WeakMap:Map;function L(e,r){if(!e||I)return"";var t,n=F.get(e);if(void 0!==n)return n;I=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=$.current,$.current=null,function(){if(0===N){_=console.log,x=console.info,j=console.warn,S=console.error,O=console.group,E=console.groupCollapsed,R=console.groupEnd;var e={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var s=r.stack.split("\n"),c=t.stack.split("\n"),l=s.length-1,u=c.length-1;l>=1&&u>=0&&s[l]!==c[u];)u--;for(;l>=1&&u>=0;l--,u--)if(s[l]!==c[u]){if(1!==l||1!==u)do{if(l--,--u<0||s[l]!==c[u]){var f="\n"+s[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&F.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{I=!1,$.current=o,function(){if(0==--N){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:C({},e,{value:_}),info:C({},e,{value:x}),warn:C({},e,{value:j}),error:C({},e,{value:S}),group:C({},e,{value:O}),groupCollapsed:C({},e,{value:E}),groupEnd:C({},e,{value:R})})}N<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?D(p):"";return"function"==typeof e&&F.set(e,d),d}function B(e,r,t){if(null==e)return"";if("function"==typeof e)return L(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return D(e);switch(e){case f:return D("Suspense");case p:return D("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return L(e.render,!1);case d:return B(e.type,r,t);case y:var o=e,a=o._payload,i=o._init;try{return B(i(a),r,t)}catch(e){}}return""}F=new A;var U=Object.prototype.hasOwnProperty,W={},M=h.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);M.setExtraStackFrame(t)}else M.setExtraStackFrame(null)}var Y=Array.isArray;function V(e){return Y(e)}function J(e){return""+e}function K(e){if(function(e){try{return J(e),!1}catch(e){return!0}}(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),J(e)}var X,Z,q=h.ReactCurrentOwner,H={key:!0,ref:!0,__self:!0,__source:!0};function G(e,r,n,o,a){var i,s={},c=null,l=null;for(i in void 0!==n&&(K(n),c=""+n),function(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(K(r.key),c=""+r.key),function(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(l=r.ref,function(e){"string"==typeof e.ref&&q.current}(r)),r)U.call(r,i)&&!H.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps){var u=e.defaultProps;for(i in u)void 0===s[i]&&(s[i]=u[i])}if(c||l){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var t=function(){X||(X=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(s,f),l&&function(e,r){var t=function(){Z||(Z=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(s,f)}return function(e,r,n,o,a,i,s){var c={$$typeof:t,type:e,key:r,ref:n,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}(e,c,l,a,o,q.current,s)}var Q,ee=h.ReactCurrentOwner,re=h.ReactDebugCurrentFrame;function te(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);re.setExtraStackFrame(t)}else re.setExtraStackFrame(null)}function ne(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function oe(){if(ee.current){var e=k(ee.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}Q=!1;var ae={};function ie(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=oe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ae[t]){ae[t]=!0;var n="";e&&e._owner&&e._owner!==ee.current&&(n=" It was passed a child from "+k(e._owner.type)+"."),te(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),te(null)}}}function se(e,r){if("object"==typeof e)if(V(e))for(var t=0;t<e.length;t++){var n=e[t];ne(n)&&ie(n,r)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=v&&e[v]||e["@@iterator"];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ne(a.value)&&ie(a.value,r)}}function ce(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==d)return;r=t.propTypes}if(r){var n=k(t);!function(e,r,t,n,o){var a=Function.call.bind(U);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}!s||s instanceof Error||(z(o),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof s),z(null)),s instanceof Error&&!(s.message in W)&&(W[s.message]=!0,z(o),g("Failed %s type: %s",t,s.message),z(null))}}(r,e.props,"prop",n,e)}else if(void 0!==t.PropTypes&&!Q){Q=!0,g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",k(t)||"Unknown")}"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var le={};function ue(e,r,n,l,v,h){var w=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===a||e===f||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===s||e.$$typeof===c||e.$$typeof===u||e.$$typeof===b||void 0!==e.getModuleId)}(e);if(!w){var _="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(_+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var x;_+=oe(),null===e?x="null":V(e)?x="array":void 0!==e&&e.$$typeof===t?(x="<"+(k(e.type)||"Unknown")+" />",_=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,_)}var j=G(e,r,n,v,h);if(null==j)return j;if(w){var S=r.children;if(void 0!==S)if(l)if(V(S)){for(var O=0;O<S.length;O++)se(S[O],e);Object.freeze&&Object.freeze(S)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else se(S,e)}if(U.call(r,"key")){var E=k(e),R=Object.keys(r).filter((function(e){return"key"!==e})),C=R.length>0?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}";if(!le[E+C])g('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',C,E,R.length>0?"{"+R.join(": ..., ")+": ...}":"{}",E),le[E+C]=!0}return e===o?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){te(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),te(null);break}}null!==e.ref&&(te(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),te(null))}(j):ce(j),j}var fe=function(e,r,t){return ue(e,r,t,!1)},pe=function(e,r,t){return ue(e,r,t,!0)};l.Fragment=o,l.jsx=fe,l.jsxs=pe}()),l}var f=(c||(c=1,"production"===process.env.NODE_ENV?a.exports=function(){if(o)return i;o=1;var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var o,i={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,o)&&!c.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:l,ref:u,props:i,_owner:s.current}}return i.Fragment=n,i.jsx=l,i.jsxs=l,i}():a.exports=u()),a.exports);const p=()=>{const[e,o]=r(!1);return t((()=>{n(void 0,void 0,void 0,(function*(){(()=>{const e=document.createElement("div");e.className="adsbox",e.style.display="none",document.body.appendChild(e);const r="none"===window.getComputedStyle(e).display;return document.body.removeChild(e),r})()||(yield n(void 0,void 0,void 0,(function*(){try{return yield fetch("/ads.js",{method:"HEAD"}),!1}catch(e){return!0}})))?o(!0):(()=>{const e=document.createElement("script");e.type="text/javascript",e.src="/ads.js",e.onerror=()=>o(!0),document.body.appendChild(e),setTimeout((()=>{document.body.removeChild(e)}),1e3)})()}))}),[]),e},d=({children:e,noStyle:r,colorTheme:t,customContainer:n,rootClassName:o,headingIcon:a,headingText:i,headingClassName:s,messageText:c,messageClassName:l,refreshButtonText:u,refreshButtonClassName:d,reportButtonText:y,reportButtonClassName:m,reportMail:v})=>p()?n||f.jsx("div",{className:"h-screen w-screen flex justify-center items-center z-[9999999] overflow-hidden",children:f.jsxs("div",{className:r?"":o||`px-6 py-8 ${"light"==t?"text-[#141414] bg-[#e9e9e9]":"bg-[#141414] text-[#e9e9e9]"} rounded-xl flex flex-col gap-2.5 items-center max-w-[25%]`,children:[f.jsxs("div",{className:"flex gap-2 items-center",children:[a||f.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 256 256",height:"36px",width:"36px",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"})}),f.jsx("h3",{className:r?"":s||"font-bold text-2xl",children:i||"AD Blocker Detected!"})]}),f.jsx("p",{className:r?"":l||"text-center",children:c||"It looks like you are using AD Blocking softwares to block ads displayed in our website, please disable such software or extensions to continue."}),f.jsxs("div",{className:"flex gap-4 mt-2",children:[f.jsx("button",{onClick:()=>window.location.reload(),className:r?"":d||`px-8 py-1.5 rounded-lg ${"light"==t?"bg-black/85 text-white hover:bg-black":"bg-white/85 text-black hover:bg-white"}  transition-all`,children:u||"I've Disabled it"}),f.jsx("a",{href:`mailto:${v||"report@bitbybit.in"}`,target:"_blank",rel:"noreferrer",className:r?"":m||"px-8 py-1.5 rounded-lg border border-red-400 text-red-400 hover:border-red-500 hover:text-red-500 transition-all",children:y||"Report error"})]})]})}):e;export{d as BlockContainer,p as useDetect};
//# sourceMappingURL=index.mjs.map