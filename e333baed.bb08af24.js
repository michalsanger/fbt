/*! For license information please see e333baed.bb08af24.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(9),a=(r(170),r(169)),u={id:"standards",title:"i18n standards",sidebar_label:"On i18n standards"},c={id:"standards",title:"i18n standards",description:"## Locales",source:"@site/../docs/standards.md",permalink:"/fbt/docs/standards",lastUpdatedBy:"Ethan Maynard",lastUpdatedAt:1547146512,sidebar_label:"On i18n standards",sidebar:"docs",previous:{title:"Translating",permalink:"/fbt/docs/translating"}},i=[{value:"Locales",id:"locales",children:[]},{value:"CLDR",id:"cldr",children:[]}],l={rightToc:i},f="wrapper";function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(f,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"locales"},"Locales"),Object(a.b)("p",null,"Facebook uses a ",Object(a.b)("inlineCode",{parentName:"p"},"xx_XX")," format for representing locales like: ",Object(a.b)("inlineCode",{parentName:"p"},"en_US"),", ",Object(a.b)("inlineCode",{parentName:"p"},"jp_JP"),", etc.  We're actively working on separating our ",Object(a.b)("inlineCode",{parentName:"p"},"language")," + ",Object(a.b)("inlineCode",{parentName:"p"},"country")," combinations internally, and where we go from there as far as standards go is unknown. BUT if you'd like to help support ",Object(a.b)("inlineCode",{parentName:"p"},"bcp-47")," standards or similar, you are very welcome to contribute!"),Object(a.b)("h2",{id:"cldr"},"CLDR"),Object(a.b)("p",null,"We generate all our number variation data found in our ",Object(a.b)("inlineCode",{parentName:"p"},"IntlNumberTypes")," internals from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://cldr.unicode.org/"}),"CLDR (Unicode Common Locale Data Repository)"),"."))}s.isMDXComponent=!0},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),f=u(r),s=n,p=f[c+"."+s]||f[s]||l[s]||a;return r?o.a.createElement(p,Object.assign({},{ref:t},i,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},i))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:n,u[1]=c;for(var s=2;s<a;s++)u[s]=r[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},170:function(e,t,r){"use strict";e.exports=r(171)},171:function(e,t,r){"use strict";var n=r(172),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var C={current:null},_={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,$=[];function N(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function L(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case u:i=!0}}if(i)return n(o,t,""===r?"."+U(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+U(c=t[l],l);i+=e(c,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(c=t.next()).done;)i+=e(c=c.value,f=r+U(c,l++),n,o);else if("object"===c)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),L(e,D,t=N(t,a,n,o)),T(t)}function I(){var e=C.current;if(null===e)throw Error(v(321));return e}var q={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,A,t=N(null,null,t,r)),T(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return I().useCallback(e,t)},useContext:function(e,t){return I().useContext(e,t)},useEffect:function(e,t){return I().useEffect(e,t)},useImperativeHandle:function(e,t,r){return I().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return I().useLayoutEffect(e,t)},useMemo:function(e,t){return I().useMemo(e,t)},useReducer:function(e,t,r){return I().useReducer(e,t,r)},useRef:function(e){return I().useRef(e)},useState:function(e){return I().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:d,createElement:E,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=_.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)k.call(t,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:c,props:o,_owner:i}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n}},F={default:q},B=F&&q||F;e.exports=B.default||B},172:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,i=u(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(i[f]=r[f]);if(n){c=n(r);for(var s=0;s<c.length;s++)a.call(r,c[s])&&(i[c[s]]=r[c[s]])}}return i}}}]);