(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function v0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qm={exports:{}},bl={},Jm={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Symbol.for("react.element"),_0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),S0=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),T0=Symbol.for("react.forward_ref"),w0=Symbol.for("react.suspense"),A0=Symbol.for("react.memo"),R0=Symbol.for("react.lazy"),nh=Symbol.iterator;function C0(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tg=Object.assign,ng={};function Bo(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=Bo.prototype;function kf(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}var zf=kf.prototype=new ig;zf.constructor=kf;tg(zf,Bo.prototype);zf.isPureReactComponent=!0;var ih=Array.isArray,rg=Object.prototype.hasOwnProperty,Bf={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function sg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)rg.call(e,i)&&!og.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xs,type:t,key:o,ref:s,props:r,_owner:Bf.current}}function b0(t,e){return{$$typeof:Xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xs}function P0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rh=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?P0(""+t.key):e.toString(36)}function za(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Xs:case _0:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+xu(s,0):i,ih(r)?(n="",t!=null&&(n=t.replace(rh,"$&/")+"/"),za(r,e,n,"",function(u){return u})):r!=null&&(Hf(r)&&(r=b0(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(rh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",ih(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+xu(o,a);s+=za(o,e,n,l,r)}else if(l=C0(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+xu(o,a++),s+=za(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ea(t,e,n){if(t==null)return t;var i=[],r=0;return za(t,i,"","",function(o){return e.call(n,o,r++)}),i}function L0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ba={transition:null},D0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Bf};Be.Children={map:ea,forEach:function(t,e,n){ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ea(t,function(){e++}),e},toArray:function(t){return ea(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Bo;Be.Fragment=y0;Be.Profiler=S0;Be.PureComponent=kf;Be.StrictMode=x0;Be.Suspense=w0;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Bf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rg.call(e,l)&&!og.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Xs,type:t.type,key:r,ref:o,props:i,_owner:s}};Be.createContext=function(t){return t={$$typeof:M0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:E0,_context:t},t.Consumer=t};Be.createElement=sg;Be.createFactory=function(t){var e=sg.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:T0,render:t}};Be.isValidElement=Hf;Be.lazy=function(t){return{$$typeof:R0,_payload:{_status:-1,_result:t},_init:L0}};Be.memo=function(t,e){return{$$typeof:A0,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(t,e){return qt.current.useCallback(t,e)};Be.useContext=function(t){return qt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return qt.current.useEffect(t,e)};Be.useId=function(){return qt.current.useId()};Be.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return qt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Be.useRef=function(t){return qt.current.useRef(t)};Be.useState=function(t){return qt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return qt.current.useTransition()};Be.version="18.2.0";Jm.exports=Be;var rt=Jm.exports;const ag=v0(rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=rt,N0=Symbol.for("react.element"),I0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,F0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)O0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:N0,type:t,key:o,ref:s,props:r,_owner:F0.current}}bl.Fragment=I0;bl.jsx=lg;bl.jsxs=lg;Qm.exports=bl;var Ge=Qm.exports,Lc={},ug={exports:{}},pn={},cg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,G){var z=D.length;D.push(G);e:for(;0<z;){var oe=z-1>>>1,U=D[oe];if(0<r(U,G))D[oe]=G,D[z]=U,z=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var G=D[0],z=D.pop();if(z!==G){D[0]=z;e:for(var oe=0,U=D.length,Q=U>>>1;oe<Q;){var Z=2*(oe+1)-1,fe=D[Z],ue=Z+1,_e=D[ue];if(0>r(fe,z))ue<U&&0>r(_e,fe)?(D[oe]=_e,D[ue]=z,oe=ue):(D[oe]=fe,D[Z]=z,oe=Z);else if(ue<U&&0>r(_e,z))D[oe]=_e,D[ue]=z,oe=ue;else break e}}return G}function r(D,G){var z=D.sortIndex-G.sortIndex;return z!==0?z:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=D)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function x(D){if(_=!1,g(D),!y)if(n(l)!==null)y=!0,J(E);else{var G=n(u);G!==null&&Y(x,G.startTime-D)}}function E(D,G){y=!1,_&&(_=!1,c(P),P=-1),p=!0;var z=d;try{for(g(G),h=n(l);h!==null&&(!(h.expirationTime>G)||D&&!$());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var U=oe(h.expirationTime<=G);G=t.unstable_now(),typeof U=="function"?h.callback=U:h===n(l)&&i(l),g(G)}else i(l);h=n(l)}if(h!==null)var Q=!0;else{var Z=n(u);Z!==null&&Y(x,Z.startTime-G),Q=!1}return Q}finally{h=null,d=z,p=!1}}var R=!1,b=null,P=-1,S=5,w=-1;function $(){return!(t.unstable_now()-w<S)}function ee(){if(b!==null){var D=t.unstable_now();w=D;var G=!0;try{G=b(!0,D)}finally{G?F():(R=!1,b=null)}}else R=!1}var F;if(typeof v=="function")F=function(){v(ee)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,W=V.port2;V.port1.onmessage=ee,F=function(){W.postMessage(null)}}else F=function(){m(ee,0)};function J(D){b=D,R||(R=!0,F())}function Y(D,G){P=m(function(){D(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,J(E))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var z=d;d=G;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return G()}finally{d=z}},t.unstable_scheduleCallback=function(D,G,z){var oe=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?oe+z:oe):z=oe,D){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=z+U,D={id:f++,callback:G,priorityLevel:D,startTime:z,expirationTime:U,sortIndex:-1},z>oe?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(_?(c(P),P=-1):_=!0,Y(x,z-oe))):(D.sortIndex=U,e(l,D),y||p||(y=!0,J(E))),D},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(D){var G=d;return function(){var z=d;d=G;try{return D.apply(this,arguments)}finally{d=z}}}})(fg);cg.exports=fg;var z0=cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=rt,dn=z0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hg=new Set,Es={};function Dr(t,e){Co(t,e),Co(t+"Capture",e)}function Co(t,e){for(Es[t]=e,t=0;t<e.length;t++)hg.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,B0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oh={},sh={};function H0(t){return Dc.call(sh,t)?!0:Dc.call(oh,t)?!1:B0.test(t)?sh[t]=!0:(oh[t]=!0,!1)}function G0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V0(t,e,n,i){if(e===null||typeof e>"u"||G0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Vf);Nt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Vf);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Vf);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wf(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V0(e,n,r,i)&&(n=null),i||r===null?H0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),no=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Ic=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),ah=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=ah&&t[ah]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,Su;function os(t){if(Su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Su=e&&e[1]||""}return`
`+Su+t}var Eu=!1;function Mu(t,e){if(!t||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?os(t):""}function W0(t){switch(t.tag){case 5:return os(t.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case io:return"Fragment";case no:return"Portal";case Uc:return"Profiler";case Xf:return"StrictMode";case Nc:return"Suspense";case Ic:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mg:return(t.displayName||"Context")+".Consumer";case pg:return(t._context.displayName||"Context")+".Provider";case jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $f:return e=t.displayName||null,e!==null?e:Oc(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return Oc(t(e))}catch{}}return null}function X0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oc(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j0(t){var e=vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=j0(t))}function _g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fc(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yg(t,e){e=e.checked,e!=null&&Wf(t,"checked",e,!1)}function kc(t,e){yg(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zc(t,e.type,n):e.hasOwnProperty("defaultValue")&&zc(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zc(t,e,n){(e!=="number"||Qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function go(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ch(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ss(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function xg(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,Eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$0=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(t){$0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fs[e]=fs[t]})});function Mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fs.hasOwnProperty(t)&&fs[t]?(""+e).trim():e+"px"}function Tg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Y0=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gc(t,e){if(e){if(Y0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function Yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xc=null,vo=null,_o=null;function dh(t){if(t=Ys(t)){if(typeof Xc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Nl(e),Xc(t.stateNode,t.type,e))}}function wg(t){vo?_o?_o.push(t):_o=[t]:vo=t}function Ag(){if(vo){var t=vo,e=_o;if(_o=vo=null,dh(t),e)for(t=0;t<e.length;t++)dh(e[t])}}function Rg(t,e){return t(e)}function Cg(){}var Tu=!1;function bg(t,e,n){if(Tu)return t(e,n);Tu=!0;try{return Rg(t,e,n)}finally{Tu=!1,(vo!==null||_o!==null)&&(Cg(),Ag())}}function Ts(t,e){var n=t.stateNode;if(n===null)return null;var i=Nl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var jc=!1;if(gi)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{jc=!1}function q0(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ds=!1,Ja=null,el=!1,$c=null,K0={onError:function(t){ds=!0,Ja=t}};function Z0(t,e,n,i,r,o,s,a,l){ds=!1,Ja=null,q0.apply(K0,arguments)}function Q0(t,e,n,i,r,o,s,a,l){if(Z0.apply(this,arguments),ds){if(ds){var u=Ja;ds=!1,Ja=null}else throw Error(te(198));el||(el=!0,$c=u)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hh(t){if(Ur(t)!==t)throw Error(te(188))}function J0(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return hh(r),t;if(o===i)return hh(r),e;o=o.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Lg(t){return t=J0(t),t!==null?Dg(t):null}function Dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dg(t);if(e!==null)return e;t=t.sibling}return null}var Ug=dn.unstable_scheduleCallback,ph=dn.unstable_cancelCallback,ey=dn.unstable_shouldYield,ty=dn.unstable_requestPaint,dt=dn.unstable_now,ny=dn.unstable_getCurrentPriorityLevel,qf=dn.unstable_ImmediatePriority,Ng=dn.unstable_UserBlockingPriority,tl=dn.unstable_NormalPriority,iy=dn.unstable_LowPriority,Ig=dn.unstable_IdlePriority,Pl=null,Yn=null;function ry(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:ay,oy=Math.log,sy=Math.LN2;function ay(t){return t>>>=0,t===0?32:31-(oy(t)/sy|0)|0}var ra=64,oa=4194304;function as(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=as(a):(o&=s,o!==0&&(i=as(o)))}else s=n&~r,s!==0?i=as(s):o!==0&&(i=as(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function ly(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Bn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=ly(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Og(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function wu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function cy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var je=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,Zf,zg,Bg,Hg,qc=!1,sa=[],Ii=null,Oi=null,Fi=null,ws=new Map,As=new Map,Ci=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(e.pointerId)}}function qo(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ys(e),e!==null&&Zf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dy(t,e,n,i,r){switch(e){case"focusin":return Ii=qo(Ii,t,e,n,i,r),!0;case"dragenter":return Oi=qo(Oi,t,e,n,i,r),!0;case"mouseover":return Fi=qo(Fi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ws.set(o,qo(ws.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,As.set(o,qo(As.get(o)||null,t,e,n,i,r)),!0}return!1}function Gg(t){var e=fr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=Pg(n),e!==null){t.blockedOn=e,Hg(t.priority,function(){zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wc=i,n.target.dispatchEvent(i),Wc=null}else return e=Ys(n),e!==null&&Zf(e),t.blockedOn=n,!1;e.shift()}return!0}function gh(t,e,n){Ha(t)&&n.delete(e)}function hy(){qc=!1,Ii!==null&&Ha(Ii)&&(Ii=null),Oi!==null&&Ha(Oi)&&(Oi=null),Fi!==null&&Ha(Fi)&&(Fi=null),ws.forEach(gh),As.forEach(gh)}function Ko(t,e){t.blockedOn===e&&(t.blockedOn=null,qc||(qc=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,hy)))}function Rs(t){function e(r){return Ko(r,t)}if(0<sa.length){Ko(sa[0],t);for(var n=1;n<sa.length;n++){var i=sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Ko(Ii,t),Oi!==null&&Ko(Oi,t),Fi!==null&&Ko(Fi,t),ws.forEach(e),As.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)Gg(n),n.blockedOn===null&&Ci.shift()}var yo=xi.ReactCurrentBatchConfig,il=!0;function py(t,e,n,i){var r=je,o=yo.transition;yo.transition=null;try{je=1,Qf(t,e,n,i)}finally{je=r,yo.transition=o}}function my(t,e,n,i){var r=je,o=yo.transition;yo.transition=null;try{je=4,Qf(t,e,n,i)}finally{je=r,yo.transition=o}}function Qf(t,e,n,i){if(il){var r=Kc(t,e,n,i);if(r===null)Iu(t,e,i,rl,n),mh(t,i);else if(dy(r,t,e,n,i))i.stopPropagation();else if(mh(t,i),e&4&&-1<fy.indexOf(t)){for(;r!==null;){var o=Ys(r);if(o!==null&&kg(o),o=Kc(t,e,n,i),o===null&&Iu(t,e,i,rl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Iu(t,e,i,null,n)}}var rl=null;function Kc(t,e,n,i){if(rl=null,t=Yf(i),t=fr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function Vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ny()){case qf:return 1;case Ng:return 4;case tl:case iy:return 16;case Ig:return 536870912;default:return 16}default:return 16}}var Li=null,Jf=null,Ga=null;function Wg(){if(Ga)return Ga;var t,e=Jf,n=e.length,i,r="value"in Li?Li.value:Li.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Ga=r.slice(t,1<i?1-i:void 0)}function Va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function vh(){return!1}function mn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?aa:vh,this.isPropagationStopped=vh,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=mn(Ho),$s=st({},Ho,{view:0,detail:0}),gy=mn($s),Au,Ru,Zo,Ll=st({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Au=t.screenX-Zo.screenX,Ru=t.screenY-Zo.screenY):Ru=Au=0,Zo=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),_h=mn(Ll),vy=st({},Ll,{dataTransfer:0}),_y=mn(vy),yy=st({},$s,{relatedTarget:0}),Cu=mn(yy),xy=st({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=mn(xy),Ey=st({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),My=mn(Ey),Ty=st({},Ho,{data:0}),yh=mn(Ty),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ry[t])?!!e[t]:!1}function td(){return Cy}var by=st({},$s,{key:function(t){if(t.key){var e=wy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:td,charCode:function(t){return t.type==="keypress"?Va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Py=mn(by),Ly=st({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=mn(Ly),Dy=st({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:td}),Uy=mn(Dy),Ny=st({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=mn(Ny),Oy=st({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=mn(Oy),ky=[9,13,27,32],nd=gi&&"CompositionEvent"in window,hs=null;gi&&"documentMode"in document&&(hs=document.documentMode);var zy=gi&&"TextEvent"in window&&!hs,Xg=gi&&(!nd||hs&&8<hs&&11>=hs),Sh=String.fromCharCode(32),Eh=!1;function jg(t,e){switch(t){case"keyup":return ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ro=!1;function By(t,e){switch(t){case"compositionend":return $g(e);case"keypress":return e.which!==32?null:(Eh=!0,Sh);case"textInput":return t=e.data,t===Sh&&Eh?null:t;default:return null}}function Hy(t,e){if(ro)return t==="compositionend"||!nd&&jg(t,e)?(t=Wg(),Ga=Jf=Li=null,ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gy[t.type]:e==="textarea"}function Yg(t,e,n,i){wg(i),e=ol(e,"onChange"),0<e.length&&(n=new ed("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ps=null,Cs=null;function Vy(t){ov(t,0)}function Dl(t){var e=ao(t);if(_g(e))return t}function Wy(t,e){if(t==="change")return e}var qg=!1;if(gi){var bu;if(gi){var Pu="oninput"in document;if(!Pu){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Pu=typeof Th.oninput=="function"}bu=Pu}else bu=!1;qg=bu&&(!document.documentMode||9<document.documentMode)}function wh(){ps&&(ps.detachEvent("onpropertychange",Kg),Cs=ps=null)}function Kg(t){if(t.propertyName==="value"&&Dl(Cs)){var e=[];Yg(e,Cs,t,Yf(t)),bg(Vy,e)}}function Xy(t,e,n){t==="focusin"?(wh(),ps=e,Cs=n,ps.attachEvent("onpropertychange",Kg)):t==="focusout"&&wh()}function jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(Cs)}function $y(t,e){if(t==="click")return Dl(e)}function Yy(t,e){if(t==="input"||t==="change")return Dl(e)}function qy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:qy;function bs(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Dc.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rh(t,e){var n=Ah(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ah(n)}}function Zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qg(){for(var t=window,e=Qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qa(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ky(t){var e=Qg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zg(n.ownerDocument.documentElement,n)){if(i!==null&&id(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Rh(n,o);var s=Rh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zy=gi&&"documentMode"in document&&11>=document.documentMode,oo=null,Zc=null,ms=null,Qc=!1;function Ch(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||oo==null||oo!==Qa(i)||(i=oo,"selectionStart"in i&&id(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ms&&bs(ms,i)||(ms=i,i=ol(Zc,"onSelect"),0<i.length&&(e=new ed("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=oo)))}function la(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var so={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Lu={},Jg={};gi&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Ul(t){if(Lu[t])return Lu[t];if(!so[t])return t;var e=so[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jg)return Lu[t]=e[n];return t}var ev=Ul("animationend"),tv=Ul("animationiteration"),nv=Ul("animationstart"),iv=Ul("transitionend"),rv=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){rv.set(t,e),Dr(e,[t])}for(var Du=0;Du<bh.length;Du++){var Uu=bh[Du],Qy=Uu.toLowerCase(),Jy=Uu[0].toUpperCase()+Uu.slice(1);qi(Qy,"on"+Jy)}qi(ev,"onAnimationEnd");qi(tv,"onAnimationIteration");qi(nv,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(iv,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Ph(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Q0(i,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Ph(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Ph(r,a,u),o=l}}}if(el)throw t=$c,el=!1,$c=null,t}function Qe(t,e){var n=e[rf];n===void 0&&(n=e[rf]=new Set);var i=t+"__bubble";n.has(i)||(sv(e,t,2,!1),n.add(i))}function Nu(t,e,n){var i=0;e&&(i|=4),sv(n,t,i,e)}var ua="_reactListening"+Math.random().toString(36).slice(2);function Ps(t){if(!t[ua]){t[ua]=!0,hg.forEach(function(n){n!=="selectionchange"&&(ex.has(n)||Nu(n,!1,t),Nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ua]||(e[ua]=!0,Nu("selectionchange",!1,e))}}function sv(t,e,n,i){switch(Vg(e)){case 1:var r=py;break;case 4:r=my;break;default:r=Qf}n=r.bind(null,e,n,t),r=void 0,!jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Iu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=fr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}bg(function(){var u=o,f=Yf(n),h=[];e:{var d=rv.get(t);if(d!==void 0){var p=ed,y=t;switch(t){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":p=Py;break;case"focusin":y="focus",p=Cu;break;case"focusout":y="blur",p=Cu;break;case"beforeblur":case"afterblur":p=Cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Uy;break;case ev:case tv:case nv:p=Sy;break;case iv:p=Iy;break;case"scroll":p=gy;break;case"wheel":p=Fy;break;case"copy":case"cut":case"paste":p=My;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xh}var _=(e&4)!==0,m=!_&&t==="scroll",c=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,c!==null&&(x=Ts(v,c),x!=null&&_.push(Ls(v,x,g)))),m)break;v=v.return}0<_.length&&(d=new p(d,y,null,n,f),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Wc&&(y=n.relatedTarget||n.fromElement)&&(fr(y)||y[vi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?fr(y):null,y!==null&&(m=Ur(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(_=_h,x="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=xh,x="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?d:ao(p),g=y==null?d:ao(y),d=new _(x,v+"leave",p,n,f),d.target=m,d.relatedTarget=g,x=null,fr(f)===u&&(_=new _(c,v+"enter",y,n,f),_.target=g,_.relatedTarget=m,x=_),m=x,p&&y)t:{for(_=p,c=y,v=0,g=_;g;g=Or(g))v++;for(g=0,x=c;x;x=Or(x))g++;for(;0<v-g;)_=Or(_),v--;for(;0<g-v;)c=Or(c),g--;for(;v--;){if(_===c||c!==null&&_===c.alternate)break t;_=Or(_),c=Or(c)}_=null}else _=null;p!==null&&Lh(h,d,p,_,!1),y!==null&&m!==null&&Lh(h,m,y,_,!0)}}e:{if(d=u?ao(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=Wy;else if(Mh(d))if(qg)E=Yy;else{E=jy;var R=Xy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=$y);if(E&&(E=E(t,u))){Yg(h,E,n,f);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&zc(d,"number",d.value)}switch(R=u?ao(u):window,t){case"focusin":(Mh(R)||R.contentEditable==="true")&&(oo=R,Zc=u,ms=null);break;case"focusout":ms=Zc=oo=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Ch(h,n,f);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Ch(h,n,f)}var b;if(nd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ro?jg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Xg&&n.locale!=="ko"&&(ro||P!=="onCompositionStart"?P==="onCompositionEnd"&&ro&&(b=Wg()):(Li=f,Jf="value"in Li?Li.value:Li.textContent,ro=!0)),R=ol(u,P),0<R.length&&(P=new yh(P,t,null,n,f),h.push({event:P,listeners:R}),b?P.data=b:(b=$g(n),b!==null&&(P.data=b)))),(b=zy?By(t,n):Hy(t,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(f=new yh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=b))}ov(h,e)})}function Ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ts(t,n),o!=null&&i.unshift(Ls(t,o,r)),o=Ts(t,e),o!=null&&i.push(Ls(t,o,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ts(n,o),l!=null&&s.unshift(Ls(n,l,a))):r||(l=Ts(n,o),l!=null&&s.push(Ls(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Dh(t){return(typeof t=="string"?t:""+t).replace(tx,`
`).replace(nx,"")}function ca(t,e,n){if(e=Dh(e),Dh(t)!==e&&n)throw Error(te(425))}function sl(){}var Jc=null,ef=null;function tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nf=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(t){return Uh.resolve(null).then(t).catch(ox)}:nf;function ox(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Rs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Rs(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Go=Math.random().toString(36).slice(2),$n="__reactFiber$"+Go,Ds="__reactProps$"+Go,vi="__reactContainer$"+Go,rf="__reactEvents$"+Go,sx="__reactListeners$"+Go,ax="__reactHandles$"+Go;function fr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nh(t);t!==null;){if(n=t[$n])return n;t=Nh(t)}return e}t=n,n=t.parentNode}return null}function Ys(t){return t=t[$n]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Nl(t){return t[Ds]||null}var of=[],lo=-1;function Ki(t){return{current:t}}function et(t){0>lo||(t.current=of[lo],of[lo]=null,lo--)}function Ke(t,e){lo++,of[lo]=t.current,t.current=e}var ji={},Ht=Ki(ji),Jt=Ki(!1),Sr=ji;function bo(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function al(){et(Jt),et(Ht)}function Ih(t,e,n){if(Ht.current!==ji)throw Error(te(168));Ke(Ht,e),Ke(Jt,n)}function av(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,X0(t)||"Unknown",r));return st({},n,i)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,Sr=Ht.current,Ke(Ht,t),Ke(Jt,Jt.current),!0}function Oh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=av(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,et(Jt),et(Ht),Ke(Ht,t)):et(Jt),Ke(Jt,n)}var li=null,Il=!1,Fu=!1;function lv(t){li===null?li=[t]:li.push(t)}function lx(t){Il=!0,lv(t)}function Zi(){if(!Fu&&li!==null){Fu=!0;var t=0,e=je;try{var n=li;for(je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Il=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Ug(qf,Zi),r}finally{je=e,Fu=!1}}return null}var uo=[],co=0,ul=null,cl=0,_n=[],yn=0,Er=null,ci=1,fi="";function or(t,e){uo[co++]=cl,uo[co++]=ul,ul=t,cl=e}function uv(t,e,n){_n[yn++]=ci,_n[yn++]=fi,_n[yn++]=Er,Er=t;var i=ci;t=fi;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var o=32-Bn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ci=1<<32-Bn(e)+r|n<<r|i,fi=o+t}else ci=1<<o|n<<r|i,fi=t}function rd(t){t.return!==null&&(or(t,1),uv(t,1,0))}function od(t){for(;t===ul;)ul=uo[--co],uo[co]=null,cl=uo[--co],uo[co]=null;for(;t===Er;)Er=_n[--yn],_n[yn]=null,fi=_n[--yn],_n[yn]=null,ci=_n[--yn],_n[yn]=null}var un=null,ln=null,nt=!1,In=null;function cv(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,ln=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:ci,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,ln=null,!0):!1;default:return!1}}function sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function af(t){if(nt){var e=ln;if(e){var n=e;if(!Fh(t,e)){if(sf(t))throw Error(te(418));e=ki(n.nextSibling);var i=un;e&&Fh(t,e)?cv(i,n):(t.flags=t.flags&-4097|2,nt=!1,un=t)}}else{if(sf(t))throw Error(te(418));t.flags=t.flags&-4097|2,nt=!1,un=t}}}function kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function fa(t){if(t!==un)return!1;if(!nt)return kh(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tf(t.type,t.memoizedProps)),e&&(e=ln)){if(sf(t))throw fv(),Error(te(418));for(;e;)cv(t,e),e=ki(e.nextSibling)}if(kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=un?ki(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=ln;t;)t=ki(t.nextSibling)}function Po(){ln=un=null,nt=!1}function sd(t){In===null?In=[t]:In.push(t)}var ux=xi.ReactCurrentBatchConfig;function Un(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fl=Ki(null),dl=null,fo=null,ad=null;function ld(){ad=fo=dl=null}function ud(t){var e=fl.current;et(fl),t._currentValue=e}function lf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xo(t,e){dl=t,ad=fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(ad!==t)if(t={context:t,memoizedValue:e,next:null},fo===null){if(dl===null)throw Error(te(308));fo=t,dl.dependencies={lanes:0,firstContext:t}}else fo=fo.next=t;return e}var dr=null;function cd(t){dr===null?dr=[t]:dr.push(t)}function dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cd(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,cd(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kf(t,n)}}function zh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,i){var r=t.updateQueue;Ri=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,f=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,p=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=st({},h,d);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Tr|=s,t.lanes=s,t.memoizedState=h}}function Bh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var pv=new dg.Component().refs;function uf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Hi(t),o=pi(i,r);o.payload=e,n!=null&&(o.callback=n),e=zi(t,o,r),e!==null&&(Hn(e,t,r,i),Wa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Hi(t),o=pi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=zi(t,o,r),e!==null&&(Hn(e,t,r,i),Wa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Hi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Hn(e,t,i,n),Wa(e,t,i))}};function Hh(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!bs(n,i)||!bs(r,o):!0}function mv(t,e,n){var i=!1,r=ji,o=e.contextType;return typeof o=="object"&&o!==null?o=Tn(o):(r=en(e)?Sr:Ht.current,i=e.contextTypes,o=(i=i!=null)?bo(t,r):ji),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Gh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function cf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=pv,fd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Tn(o):(o=en(e)?Sr:Ht.current,r.context=bo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(uf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===pv&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function da(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vh(t){var e=t._init;return e(t._payload)}function gv(t){function e(c,v){if(t){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=Gi(c,v),c.index=0,c.sibling=null,c}function o(c,v,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,g,x){return v===null||v.tag!==6?(v=Wu(g,c.mode,x),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,x){var E=g.type;return E===io?f(c,v,g.props.children,x,g.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ai&&Vh(E)===v.type)?(x=r(v,g.props),x.ref=Qo(c,v,g),x.return=c,x):(x=Ka(g.type,g.key,g.props,null,c.mode,x),x.ref=Qo(c,v,g),x.return=c,x)}function u(c,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Xu(g,c.mode,x),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function f(c,v,g,x,E){return v===null||v.tag!==7?(v=mr(g,c.mode,x,E),v.return=c,v):(v=r(v,g),v.return=c,v)}function h(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wu(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ta:return g=Ka(v.type,v.key,v.props,null,c.mode,g),g.ref=Qo(c,null,v),g.return=c,g;case no:return v=Xu(v,c.mode,g),v.return=c,v;case Ai:var x=v._init;return h(c,x(v._payload),g)}if(ss(v)||$o(v))return v=mr(v,c.mode,g,null),v.return=c,v;da(c,v)}return null}function d(c,v,g,x){var E=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(c,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:return g.key===E?l(c,v,g,x):null;case no:return g.key===E?u(c,v,g,x):null;case Ai:return E=g._init,d(c,v,E(g._payload),x)}if(ss(g)||$o(g))return E!==null?null:f(c,v,g,x,null);da(c,g)}return null}function p(c,v,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(g)||null,a(v,c,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:return c=c.get(x.key===null?g:x.key)||null,l(v,c,x,E);case no:return c=c.get(x.key===null?g:x.key)||null,u(v,c,x,E);case Ai:var R=x._init;return p(c,v,g,R(x._payload),E)}if(ss(x)||$o(x))return c=c.get(g)||null,f(v,c,x,E,null);da(v,x)}return null}function y(c,v,g,x){for(var E=null,R=null,b=v,P=v=0,S=null;b!==null&&P<g.length;P++){b.index>P?(S=b,b=null):S=b.sibling;var w=d(c,b,g[P],x);if(w===null){b===null&&(b=S);break}t&&b&&w.alternate===null&&e(c,b),v=o(w,v,P),R===null?E=w:R.sibling=w,R=w,b=S}if(P===g.length)return n(c,b),nt&&or(c,P),E;if(b===null){for(;P<g.length;P++)b=h(c,g[P],x),b!==null&&(v=o(b,v,P),R===null?E=b:R.sibling=b,R=b);return nt&&or(c,P),E}for(b=i(c,b);P<g.length;P++)S=p(b,c,P,g[P],x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?P:S.key),v=o(S,v,P),R===null?E=S:R.sibling=S,R=S);return t&&b.forEach(function($){return e(c,$)}),nt&&or(c,P),E}function _(c,v,g,x){var E=$o(g);if(typeof E!="function")throw Error(te(150));if(g=E.call(g),g==null)throw Error(te(151));for(var R=E=null,b=v,P=v=0,S=null,w=g.next();b!==null&&!w.done;P++,w=g.next()){b.index>P?(S=b,b=null):S=b.sibling;var $=d(c,b,w.value,x);if($===null){b===null&&(b=S);break}t&&b&&$.alternate===null&&e(c,b),v=o($,v,P),R===null?E=$:R.sibling=$,R=$,b=S}if(w.done)return n(c,b),nt&&or(c,P),E;if(b===null){for(;!w.done;P++,w=g.next())w=h(c,w.value,x),w!==null&&(v=o(w,v,P),R===null?E=w:R.sibling=w,R=w);return nt&&or(c,P),E}for(b=i(c,b);!w.done;P++,w=g.next())w=p(b,c,P,w.value,x),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?P:w.key),v=o(w,v,P),R===null?E=w:R.sibling=w,R=w);return t&&b.forEach(function(ee){return e(c,ee)}),nt&&or(c,P),E}function m(c,v,g,x){if(typeof g=="object"&&g!==null&&g.type===io&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:e:{for(var E=g.key,R=v;R!==null;){if(R.key===E){if(E=g.type,E===io){if(R.tag===7){n(c,R.sibling),v=r(R,g.props.children),v.return=c,c=v;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ai&&Vh(E)===R.type){n(c,R.sibling),v=r(R,g.props),v.ref=Qo(c,R,g),v.return=c,c=v;break e}n(c,R);break}else e(c,R);R=R.sibling}g.type===io?(v=mr(g.props.children,c.mode,x,g.key),v.return=c,c=v):(x=Ka(g.type,g.key,g.props,null,c.mode,x),x.ref=Qo(c,v,g),x.return=c,c=x)}return s(c);case no:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=Xu(g,c.mode,x),v.return=c,c=v}return s(c);case Ai:return R=g._init,m(c,v,R(g._payload),x)}if(ss(g))return y(c,v,g,x);if($o(g))return _(c,v,g,x);da(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,g),v.return=c,c=v):(n(c,v),v=Wu(g,c.mode,x),v.return=c,c=v),s(c)):n(c,v)}return m}var Lo=gv(!0),vv=gv(!1),qs={},qn=Ki(qs),Us=Ki(qs),Ns=Ki(qs);function hr(t){if(t===qs)throw Error(te(174));return t}function dd(t,e){switch(Ke(Ns,e),Ke(Us,t),Ke(qn,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hc(e,t)}et(qn),Ke(qn,e)}function Do(){et(qn),et(Us),et(Ns)}function _v(t){hr(Ns.current);var e=hr(qn.current),n=Hc(e,t.type);e!==n&&(Ke(Us,t),Ke(qn,n))}function hd(t){Us.current===t&&(et(qn),et(Us))}var it=Ki(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ku=[];function pd(){for(var t=0;t<ku.length;t++)ku[t]._workInProgressVersionPrimary=null;ku.length=0}var Xa=xi.ReactCurrentDispatcher,zu=xi.ReactCurrentBatchConfig,Mr=0,ot=null,yt=null,At=null,ml=!1,gs=!1,Is=0,cx=0;function It(){throw Error(te(321))}function md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function gd(t,e,n,i,r,o){if(Mr=o,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?px:mx,t=n(i,r),gs){o=0;do{if(gs=!1,Is=0,25<=o)throw Error(te(301));o+=1,At=yt=null,e.updateQueue=null,Xa.current=gx,t=n(i,r)}while(gs)}if(Xa.current=gl,e=yt!==null&&yt.next!==null,Mr=0,At=yt=ot=null,ml=!1,e)throw Error(te(300));return t}function vd(){var t=Is!==0;return Is=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ot.memoizedState=At=t:At=At.next=t,At}function wn(){if(yt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=At===null?ot.memoizedState:At.next;if(e!==null)At=e,yt=t;else{if(t===null)throw Error(te(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},At===null?ot.memoizedState=At=t:At=At.next=t}return At}function Os(t,e){return typeof e=="function"?e(t):e}function Bu(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Mr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,ot.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Gn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ot.lanes|=o,Tr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hu(t){var e=wn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Gn(o,e.memoizedState)||(Qt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function yv(){}function xv(t,e){var n=ot,i=wn(),r=e(),o=!Gn(i.memoizedState,r);if(o&&(i.memoizedState=r,Qt=!0),i=i.queue,_d(Mv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Fs(9,Ev.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(te(349));Mr&30||Sv(n,e,r)}return r}function Sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ev(t,e,n,i){e.value=n,e.getSnapshot=i,Tv(e)&&wv(t)}function Mv(t,e,n){return n(function(){Tv(e)&&wv(t)})}function Tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function wv(t){var e=_i(t,1);e!==null&&Hn(e,t,1,-1)}function Wh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:t},e.queue=t,t=t.dispatch=hx.bind(null,ot,t),[e.memoizedState,t]}function Fs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Av(){return wn().memoizedState}function ja(t,e,n,i){var r=Xn();ot.flags|=t,r.memoizedState=Fs(1|e,n,void 0,i===void 0?null:i)}function Fl(t,e,n,i){var r=wn();i=i===void 0?null:i;var o=void 0;if(yt!==null){var s=yt.memoizedState;if(o=s.destroy,i!==null&&md(i,s.deps)){r.memoizedState=Fs(e,n,o,i);return}}ot.flags|=t,r.memoizedState=Fs(1|e,n,o,i)}function Xh(t,e){return ja(8390656,8,t,e)}function _d(t,e){return Fl(2048,8,t,e)}function Rv(t,e){return Fl(4,2,t,e)}function Cv(t,e){return Fl(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pv(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,bv.bind(null,e,t),n)}function yd(){}function Lv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&md(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&md(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Uv(t,e,n){return Mr&21?(Gn(n,e)||(n=Og(),ot.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function fx(t,e){var n=je;je=n!==0&&4>n?n:4,t(!0);var i=zu.transition;zu.transition={};try{t(!1),e()}finally{je=n,zu.transition=i}}function Nv(){return wn().memoizedState}function dx(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Iv(t))Ov(e,n);else if(n=dv(t,e,n,i),n!==null){var r=Yt();Hn(n,t,i,r),Fv(n,e,i)}}function hx(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iv(t))Ov(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,s)){var l=e.interleaved;l===null?(r.next=r,cd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dv(t,e,r,i),n!==null&&(r=Yt(),Hn(n,t,i,r),Fv(n,e,i))}}function Iv(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function Ov(t,e){gs=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kf(t,n)}}var gl={readContext:Tn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},px={readContext:Tn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Xh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ja(4194308,4,bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return ja(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dx.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Wh,useDebugValue:yd,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Wh(!1),e=t[0];return t=fx.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ot,r=Xn();if(nt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Rt===null)throw Error(te(349));Mr&30||Sv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Xh(Mv.bind(null,i,o,t),[t]),i.flags|=2048,Fs(9,Ev.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Rt.identifierPrefix;if(nt){var n=fi,i=ci;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Is++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mx={readContext:Tn,useCallback:Lv,useContext:Tn,useEffect:_d,useImperativeHandle:Pv,useInsertionEffect:Rv,useLayoutEffect:Cv,useMemo:Dv,useReducer:Bu,useRef:Av,useState:function(){return Bu(Os)},useDebugValue:yd,useDeferredValue:function(t){var e=wn();return Uv(e,yt.memoizedState,t)},useTransition:function(){var t=Bu(Os)[0],e=wn().memoizedState;return[t,e]},useMutableSource:yv,useSyncExternalStore:xv,useId:Nv,unstable_isNewReconciler:!1},gx={readContext:Tn,useCallback:Lv,useContext:Tn,useEffect:_d,useImperativeHandle:Pv,useInsertionEffect:Rv,useLayoutEffect:Cv,useMemo:Dv,useReducer:Hu,useRef:Av,useState:function(){return Hu(Os)},useDebugValue:yd,useDeferredValue:function(t){var e=wn();return yt===null?e.memoizedState=t:Uv(e,yt.memoizedState,t)},useTransition:function(){var t=Hu(Os)[0],e=wn().memoizedState;return[t,e]},useMutableSource:yv,useSyncExternalStore:xv,useId:Nv,unstable_isNewReconciler:!1};function Uo(t,e){try{var n="",i=e;do n+=W0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function kv(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Sf=i),ff(t,e)},n}function zv(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ff(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ff(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Lx.bind(null,t,e,n),e.then(t,t))}function $h(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var _x=xi.ReactCurrentOwner,Qt=!1;function Xt(t,e,n,i){e.child=t===null?vv(e,null,n,i):Lo(e,t.child,n,i)}function qh(t,e,n,i,r){n=n.render;var o=e.ref;return xo(e,r),i=gd(t,e,n,i,o,r),n=vd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(nt&&n&&rd(e),e.flags|=1,Xt(t,e,i,r),e.child)}function Kh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Rd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Bv(t,e,o,i,r)):(t=Ka(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:bs,n(s,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=Gi(o,i),t.ref=e.ref,t.return=e,e.child=t}function Bv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(bs(o,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,yi(t,e,r)}return df(t,e,n,i,r)}function Hv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(po,an),an|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(po,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ke(po,an),an|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ke(po,an),an|=i;return Xt(t,e,r,n),e.child}function Gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function df(t,e,n,i,r){var o=en(n)?Sr:Ht.current;return o=bo(e,o),xo(e,r),n=gd(t,e,n,i,o,r),i=vd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(nt&&i&&rd(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Zh(t,e,n,i,r){if(en(n)){var o=!0;ll(e)}else o=!1;if(xo(e,r),e.stateNode===null)$a(t,e),mv(e,n,i),cf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=en(n)?Sr:Ht.current,u=bo(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Gh(e,s,i,u),Ri=!1;var d=e.memoizedState;s.state=d,hl(e,i,s,r),l=e.memoizedState,a!==i||d!==l||Jt.current||Ri?(typeof f=="function"&&(uf(e,n,f,i),l=e.memoizedState),(a=Ri||Hh(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,hv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Un(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=en(n)?Sr:Ht.current,l=bo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Gh(e,s,i,l),Ri=!1,d=e.memoizedState,s.state=d,hl(e,i,s,r);var y=e.memoizedState;a!==h||d!==y||Jt.current||Ri?(typeof p=="function"&&(uf(e,n,p,i),y=e.memoizedState),(u=Ri||Hh(e,n,u,i,d,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return hf(t,e,n,i,o,r)}function hf(t,e,n,i,r,o){Gv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Oh(e,n,!1),yi(t,e,o);i=e.stateNode,_x.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Lo(e,t.child,null,o),e.child=Lo(e,null,a,o)):Xt(t,e,a,o),e.memoizedState=i.state,r&&Oh(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?Ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ih(t,e.context,!1),dd(t,e.containerInfo)}function Qh(t,e,n,i,r){return Po(),sd(r),e.flags|=256,Xt(t,e,n,i),e.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wv(t,e,n){var i=e.pendingProps,r=it.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(it,r&1),t===null)return af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Bl(s,i,0,null),t=mr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=mf(n),e.memoizedState=pf,t):xd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yx(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Gi(a,o):(o=mr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?mf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=pf,i}return o=t.child,t=o.sibling,i=Gi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xd(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,i){return i!==null&&sd(i),Lo(e,t.child,null,n),t=xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yx(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Gu(Error(te(422))),ha(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),o=mr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Lo(e,t.child,null,s),e.child.memoizedState=mf(s),e.memoizedState=pf,o);if(!(e.mode&1))return ha(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(te(419)),i=Gu(o,i,void 0),ha(t,e,s,i)}if(a=(s&t.childLanes)!==0,Qt||a){if(i=Rt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,_i(t,r),Hn(i,t,r,-1))}return Ad(),i=Gu(Error(te(421))),ha(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Dx.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,ln=ki(r.nextSibling),un=e,nt=!0,In=null,t!==null&&(_n[yn++]=ci,_n[yn++]=fi,_n[yn++]=Er,ci=t.id,fi=t.overflow,Er=e),e=xd(e,i.children),e.flags|=4096,e)}function Jh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lf(t.return,e,n)}function Vu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Xv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Xt(t,e,i.children,n),i=it.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,n,e);else if(t.tag===19)Jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(it,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vu(e,!0,n,null,o);break;case"together":Vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xx(t,e,n){switch(e.tag){case 3:Vv(e),Po();break;case 5:_v(e);break;case 1:en(e.type)&&ll(e);break;case 4:dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(it,it.current&1),e.flags|=128,null):n&e.child.childLanes?Wv(t,e,n):(Ke(it,it.current&1),t=yi(t,e,n),t!==null?t.sibling:null);Ke(it,it.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Xv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(it,it.current),i)break;return null;case 22:case 23:return e.lanes=0,Hv(t,e,n)}return yi(t,e,n)}var jv,gf,$v,Yv;jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};$v=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hr(qn.current);var o=null;switch(n){case"input":r=Fc(t,r),i=Fc(t,i),o=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),o=[];break;case"textarea":r=Bc(t,r),i=Bc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sl)}Gc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Es.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Es.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Jo(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Sx(t,e,n){var i=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return en(e.type)&&al(),Ot(e),null;case 3:return i=e.stateNode,Do(),et(Jt),et(Ht),pd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Tf(In),In=null))),gf(t,e),Ot(e),null;case 5:hd(e);var r=hr(Ns.current);if(n=e.type,t!==null&&e.stateNode!=null)$v(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ot(e),null}if(t=hr(qn.current),fa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[$n]=e,i[Ds]=o,t=(e.mode&1)!==0,n){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<ls.length;r++)Qe(ls[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":lh(i,o),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Qe("invalid",i);break;case"textarea":ch(i,o),Qe("invalid",i)}Gc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",""+a]):Es.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Qe("scroll",i)}switch(n){case"input":na(i),uh(i,o,!0);break;case"textarea":na(i),fh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[$n]=e,t[Ds]=i,jv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Vc(n,i),n){case"dialog":Qe("cancel",t),Qe("close",t),r=i;break;case"iframe":case"object":case"embed":Qe("load",t),r=i;break;case"video":case"audio":for(r=0;r<ls.length;r++)Qe(ls[r],t);r=i;break;case"source":Qe("error",t),r=i;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),r=i;break;case"details":Qe("toggle",t),r=i;break;case"input":lh(t,i),r=Fc(t,i),Qe("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Qe("invalid",t);break;case"textarea":ch(t,i),r=Bc(t,i),Qe("invalid",t);break;default:r=i}Gc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Tg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Eg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(t,l):typeof l=="number"&&Ms(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Es.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Qe("scroll",t):l!=null&&Wf(t,o,l,s))}switch(n){case"input":na(t),uh(t,i,!1);break;case"textarea":na(t),fh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?go(t,!!i.multiple,o,!1):i.defaultValue!=null&&go(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)Yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=hr(Ns.current),hr(qn.current),fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(o=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ot(e),null;case 13:if(et(it),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&ln!==null&&e.mode&1&&!(e.flags&128))fv(),Po(),e.flags|=98560,o=!1;else if(o=fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(te(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[$n]=e}else Po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),o=!1}else In!==null&&(Tf(In),In=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||it.current&1?xt===0&&(xt=3):Ad())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Do(),gf(t,e),t===null&&Ps(e.stateNode.containerInfo),Ot(e),null;case 10:return ud(e.type._context),Ot(e),null;case 17:return en(e.type)&&al(),Ot(e),null;case 19:if(et(it),o=e.memoizedState,o===null)return Ot(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Jo(o,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=pl(t),s!==null){for(e.flags|=128,Jo(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(it,it.current&1|2),e.child}t=t.sibling}o.tail!==null&&dt()>No&&(e.flags|=128,i=!0,Jo(o,!1),e.lanes=4194304)}else{if(!i)if(t=pl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!nt)return Ot(e),null}else 2*dt()-o.renderingStartTime>No&&n!==1073741824&&(e.flags|=128,i=!0,Jo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=dt(),e.sibling=null,n=it.current,Ke(it,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return wd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Ex(t,e){switch(od(e),e.tag){case 1:return en(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Do(),et(Jt),et(Ht),pd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(et(it),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(it),null;case 4:return Do(),null;case 10:return ud(e.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var pa=!1,Bt=!1,Mx=typeof WeakSet=="function"?WeakSet:Set,de=null;function ho(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ut(t,e,i)}else n.current=null}function vf(t,e,n){try{n()}catch(i){ut(t,e,i)}}var ep=!1;function Tx(t,e){if(Jc=il,t=Qg(),id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++f===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ef={focusedElem:t,selectionRange:n},il=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:Un(e.type,_),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){ut(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return y=ep,ep=!1,y}function vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&vf(e,n,o)}r=r.next}while(r!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qv(t){var e=t.alternate;e!==null&&(t.alternate=null,qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ds],delete e[rf],delete e[sx],delete e[ax])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kv(t){return t.tag===5||t.tag===3||t.tag===4}function tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}function xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xf(t,e,n),t=t.sibling;t!==null;)xf(t,e,n),t=t.sibling}var bt=null,Nn=!1;function Si(t,e,n){for(n=n.child;n!==null;)Zv(t,e,n),n=n.sibling}function Zv(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Bt||ho(n,e);case 6:var i=bt,r=Nn;bt=null,Si(t,e,n),bt=i,Nn=r,bt!==null&&(Nn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Nn?(t=bt,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),Rs(t)):Ou(bt,n.stateNode));break;case 4:i=bt,r=Nn,bt=n.stateNode.containerInfo,Nn=!0,Si(t,e,n),bt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&vf(n,e,s),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Bt&&(ho(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ut(n,e,a)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Si(t,e,n),Bt=i):Si(t,e,n);break;default:Si(t,e,n)}}function np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mx),e.forEach(function(i){var r=Ux.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Nn=!1;break e;case 3:bt=a.stateNode.containerInfo,Nn=!0;break e;case 4:bt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(bt===null)throw Error(te(160));Zv(o,s,r),bt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}function Qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Wn(t),i&4){try{vs(3,t,t.return),kl(3,t)}catch(_){ut(t,t.return,_)}try{vs(5,t,t.return)}catch(_){ut(t,t.return,_)}}break;case 1:Cn(e,t),Wn(t),i&512&&n!==null&&ho(n,n.return);break;case 5:if(Cn(e,t),Wn(t),i&512&&n!==null&&ho(n,n.return),t.flags&32){var r=t.stateNode;try{Ms(r,"")}catch(_){ut(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&yg(r,o),Vc(a,s);var u=Vc(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?Tg(r,h):f==="dangerouslySetInnerHTML"?Eg(r,h):f==="children"?Ms(r,h):Wf(r,f,h,u)}switch(a){case"input":kc(r,o);break;case"textarea":xg(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?go(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?go(r,!!o.multiple,o.defaultValue,!0):go(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ds]=o}catch(_){ut(t,t.return,_)}}break;case 6:if(Cn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(_){ut(t,t.return,_)}}break;case 3:if(Cn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Rs(e.containerInfo)}catch(_){ut(t,t.return,_)}break;case 4:Cn(e,t),Wn(t);break;case 13:Cn(e,t),Wn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Md=dt())),i&4&&np(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||f,Cn(e,t),Bt=u):Cn(e,t),Wn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(de=t,f=t.child;f!==null;){for(h=de=f;de!==null;){switch(d=de,p=d.child,d.tag){case 0:case 11:case 14:case 15:vs(4,d,d.return);break;case 1:ho(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ut(i,n,_)}}break;case 5:ho(d,d.return);break;case 22:if(d.memoizedState!==null){rp(h);continue}}p!==null?(p.return=d,de=p):rp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mg("display",s))}catch(_){ut(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ut(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),Wn(t),i&4&&np(t);break;case 21:break;default:Cn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ms(r,""),i.flags&=-33);var o=tp(t);xf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=tp(t);yf(t,a,s);break;default:throw Error(te(161))}}catch(l){ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wx(t,e,n){de=t,Jv(t)}function Jv(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||pa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=pa;var u=Bt;if(pa=s,(Bt=l)&&!u)for(de=r;de!==null;)s=de,l=s.child,s.tag===22&&s.memoizedState!==null?op(r):l!==null?(l.return=s,de=l):op(r);for(;o!==null;)de=o,Jv(o),o=o.sibling;de=r,pa=a,Bt=u}ip(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,de=o):ip(t)}}function ip(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Bh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Rs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Bt||e.flags&512&&_f(e)}catch(d){ut(e,e.return,d)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function rp(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function op(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(l){ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var o=e.return;try{_f(e)}catch(l){ut(e,o,l)}break;case 5:var s=e.return;try{_f(e)}catch(l){ut(e,s,l)}}}catch(l){ut(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var Ax=Math.ceil,vl=xi.ReactCurrentDispatcher,Sd=xi.ReactCurrentOwner,Mn=xi.ReactCurrentBatchConfig,Ve=0,Rt=null,gt=null,Lt=0,an=0,po=Ki(0),xt=0,ks=null,Tr=0,zl=0,Ed=0,_s=null,Zt=null,Md=0,No=1/0,ai=null,_l=!1,Sf=null,Bi=null,ma=!1,Di=null,yl=0,ys=0,Ef=null,Ya=-1,qa=0;function Yt(){return Ve&6?dt():Ya!==-1?Ya:Ya=dt()}function Hi(t){return t.mode&1?Ve&2&&Lt!==0?Lt&-Lt:ux.transition!==null?(qa===0&&(qa=Og()),qa):(t=je,t!==0||(t=window.event,t=t===void 0?16:Vg(t.type)),t):1}function Hn(t,e,n,i){if(50<ys)throw ys=0,Ef=null,Error(te(185));js(t,n,i),(!(Ve&2)||t!==Rt)&&(t===Rt&&(!(Ve&2)&&(zl|=n),xt===4&&bi(t,Lt)),tn(t,i),n===1&&Ve===0&&!(e.mode&1)&&(No=dt()+500,Il&&Zi()))}function tn(t,e){var n=t.callbackNode;uy(t,e);var i=nl(t,t===Rt?Lt:0);if(i===0)n!==null&&ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ph(n),e===1)t.tag===0?lx(sp.bind(null,t)):lv(sp.bind(null,t)),rx(function(){!(Ve&6)&&Zi()}),n=null;else{switch(Fg(i)){case 1:n=qf;break;case 4:n=Ng;break;case 16:n=tl;break;case 536870912:n=Ig;break;default:n=tl}n=a_(n,e_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e_(t,e){if(Ya=-1,qa=0,Ve&6)throw Error(te(327));var n=t.callbackNode;if(So()&&t.callbackNode!==n)return null;var i=nl(t,t===Rt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xl(t,i);else{e=i;var r=Ve;Ve|=2;var o=n_();(Rt!==t||Lt!==e)&&(ai=null,No=dt()+500,pr(t,e));do try{bx();break}catch(a){t_(t,a)}while(1);ld(),vl.current=o,Ve=r,gt!==null?e=0:(Rt=null,Lt=0,e=xt)}if(e!==0){if(e===2&&(r=Yc(t),r!==0&&(i=r,e=Mf(t,r))),e===1)throw n=ks,pr(t,0),bi(t,i),tn(t,dt()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Rx(r)&&(e=xl(t,i),e===2&&(o=Yc(t),o!==0&&(i=o,e=Mf(t,o))),e===1))throw n=ks,pr(t,0),bi(t,i),tn(t,dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:sr(t,Zt,ai);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=Md+500-dt(),10<e)){if(nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nf(sr.bind(null,t,Zt,ai),e);break}sr(t,Zt,ai);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Bn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ax(i/1960))-i,10<i){t.timeoutHandle=nf(sr.bind(null,t,Zt,ai),i);break}sr(t,Zt,ai);break;case 5:sr(t,Zt,ai);break;default:throw Error(te(329))}}}return tn(t,dt()),t.callbackNode===n?e_.bind(null,t):null}function Mf(t,e){var n=_s;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=xl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Tf(e)),t}function Tf(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function Rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Gn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~Ed,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function sp(t){if(Ve&6)throw Error(te(327));So();var e=nl(t,0);if(!(e&1))return tn(t,dt()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var i=Yc(t);i!==0&&(e=i,n=Mf(t,i))}if(n===1)throw n=ks,pr(t,0),bi(t,e),tn(t,dt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,Zt,ai),tn(t,dt()),null}function Td(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(No=dt()+500,Il&&Zi())}}function wr(t){Di!==null&&Di.tag===0&&!(Ve&6)&&So();var e=Ve;Ve|=1;var n=Mn.transition,i=je;try{if(Mn.transition=null,je=1,t)return t()}finally{je=i,Mn.transition=n,Ve=e,!(Ve&6)&&Zi()}}function wd(){an=po.current,et(po)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ix(n)),gt!==null)for(n=gt.return;n!==null;){var i=n;switch(od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&al();break;case 3:Do(),et(Jt),et(Ht),pd();break;case 5:hd(i);break;case 4:Do();break;case 13:et(it);break;case 19:et(it);break;case 10:ud(i.type._context);break;case 22:case 23:wd()}n=n.return}if(Rt=t,gt=t=Gi(t.current,null),Lt=an=e,xt=0,ks=null,Ed=zl=Tr=0,Zt=_s=null,dr!==null){for(e=0;e<dr.length;e++)if(n=dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}dr=null}return t}function t_(t,e){do{var n=gt;try{if(ld(),Xa.current=gl,ml){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ml=!1}if(Mr=0,At=yt=ot=null,gs=!1,Is=0,Sd.current=null,n===null||n.return===null){xt=1,ks=e,gt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=$h(s);if(p!==null){p.flags&=-257,Yh(p,s,a,o,e),p.mode&1&&jh(o,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){jh(o,u,e),Ad();break e}l=Error(te(426))}}else if(nt&&a.mode&1){var m=$h(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Yh(m,s,a,o,e),sd(Uo(l,a));break e}}o=l=Uo(l,a),xt!==4&&(xt=2),_s===null?_s=[o]:_s.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=kv(o,l,e);zh(o,c);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bi===null||!Bi.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=zv(o,a,e);zh(o,x);break e}}o=o.return}while(o!==null)}r_(n)}catch(E){e=E,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(1)}function n_(){var t=vl.current;return vl.current=gl,t===null?gl:t}function Ad(){(xt===0||xt===3||xt===2)&&(xt=4),Rt===null||!(Tr&268435455)&&!(zl&268435455)||bi(Rt,Lt)}function xl(t,e){var n=Ve;Ve|=2;var i=n_();(Rt!==t||Lt!==e)&&(ai=null,pr(t,e));do try{Cx();break}catch(r){t_(t,r)}while(1);if(ld(),Ve=n,vl.current=i,gt!==null)throw Error(te(261));return Rt=null,Lt=0,xt}function Cx(){for(;gt!==null;)i_(gt)}function bx(){for(;gt!==null&&!ey();)i_(gt)}function i_(t){var e=s_(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?r_(t):gt=e,Sd.current=null}function r_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ex(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,gt=null;return}}else if(n=Sx(n,e,an),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);xt===0&&(xt=5)}function sr(t,e,n){var i=je,r=Mn.transition;try{Mn.transition=null,je=1,Px(t,e,n,i)}finally{Mn.transition=r,je=i}return null}function Px(t,e,n,i){do So();while(Di!==null);if(Ve&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(cy(t,o),t===Rt&&(gt=Rt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,a_(tl,function(){return So(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mn.transition,Mn.transition=null;var s=je;je=1;var a=Ve;Ve|=4,Sd.current=null,Tx(t,n),Qv(n,t),Ky(ef),il=!!Jc,ef=Jc=null,t.current=n,wx(n),ty(),Ve=a,je=s,Mn.transition=o}else t.current=n;if(ma&&(ma=!1,Di=t,yl=r),o=t.pendingLanes,o===0&&(Bi=null),ry(n.stateNode),tn(t,dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Sf,Sf=null,t;return yl&1&&t.tag!==0&&So(),o=t.pendingLanes,o&1?t===Ef?ys++:(ys=0,Ef=t):ys=0,Zi(),null}function So(){if(Di!==null){var t=Fg(yl),e=Mn.transition,n=je;try{if(Mn.transition=null,je=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,yl=0,Ve&6)throw Error(te(331));var r=Ve;for(Ve|=4,de=t.current;de!==null;){var o=de,s=o.child;if(de.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:vs(8,f,o)}var h=f.child;if(h!==null)h.return=f,de=h;else for(;de!==null;){f=de;var d=f.sibling,p=f.return;if(qv(f),f===u){de=null;break}if(d!==null){d.return=p,de=d;break}de=p}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}de=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,de=s;else e:for(;de!==null;){if(o=de,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vs(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,de=c;break e}de=o.return}}var v=t.current;for(de=v;de!==null;){s=de;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,de=g;else e:for(s=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(E){ut(a,a.return,E)}if(a===s){de=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,de=x;break e}de=a.return}}if(Ve=r,Zi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Pl,t)}catch{}i=!0}return i}finally{je=n,Mn.transition=e}}return!1}function ap(t,e,n){e=Uo(n,e),e=kv(t,e,1),t=zi(t,e,1),e=Yt(),t!==null&&(js(t,1,e),tn(t,e))}function ut(t,e,n){if(t.tag===3)ap(t,t,n);else for(;e!==null;){if(e.tag===3){ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Uo(n,t),t=zv(e,t,1),e=zi(e,t,1),t=Yt(),e!==null&&(js(e,1,t),tn(e,t));break}}e=e.return}}function Lx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Lt&n)===n&&(xt===4||xt===3&&(Lt&130023424)===Lt&&500>dt()-Md?pr(t,0):Ed|=n),tn(t,e)}function o_(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=Yt();t=_i(t,e),t!==null&&(js(t,e,n),tn(t,n))}function Dx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o_(t,n)}function Ux(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),o_(t,n)}var s_;s_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,xx(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,nt&&e.flags&1048576&&uv(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$a(t,e),t=e.pendingProps;var r=bo(e,Ht.current);xo(e,n),r=gd(null,e,i,t,r,n);var o=vd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(o=!0,ll(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fd(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,cf(e,i,t,n),e=hf(null,e,i,!0,o,n)):(e.tag=0,nt&&o&&rd(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($a(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ix(i),t=Un(i,t),r){case 0:e=df(null,e,i,t,n);break e;case 1:e=Zh(null,e,i,t,n);break e;case 11:e=qh(null,e,i,t,n);break e;case 14:e=Kh(null,e,i,Un(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),df(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Zh(t,e,i,r,n);case 3:e:{if(Vv(e),t===null)throw Error(te(387));i=e.pendingProps,o=e.memoizedState,r=o.element,hv(t,e),hl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Uo(Error(te(423)),e),e=Qh(t,e,i,n,r);break e}else if(i!==r){r=Uo(Error(te(424)),e),e=Qh(t,e,i,n,r);break e}else for(ln=ki(e.stateNode.containerInfo.firstChild),un=e,nt=!0,In=null,n=vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Po(),i===r){e=yi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return _v(e),t===null&&af(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,tf(i,r)?s=null:o!==null&&tf(i,o)&&(e.flags|=32),Gv(t,e),Xt(t,e,s,n),e.child;case 6:return t===null&&af(e),null;case 13:return Wv(t,e,n);case 4:return dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Lo(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),qh(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Ke(fl,i._currentValue),i._currentValue=s,o!==null)if(Gn(o.value,s)){if(o.children===r.children&&!Jt.current){e=yi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=pi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(te(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),lf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xo(e,n),r=Tn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Kh(t,e,i,r,n);case 15:return Bv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),$a(t,e),e.tag=1,en(i)?(t=!0,ll(e)):t=!1,xo(e,n),mv(e,i,r),cf(e,i,r,n),hf(null,e,i,!0,t,n);case 19:return Xv(t,e,n);case 22:return Hv(t,e,n)}throw Error(te(156,e.tag))};function a_(t,e){return Ug(t,e)}function Nx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new Nx(t,e,n,i)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ix(t){if(typeof t=="function")return Rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jf)return 11;if(t===$f)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Rd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case io:return mr(n.children,r,o,e);case Xf:s=8,r|=8;break;case Uc:return t=En(12,n,e,r|2),t.elementType=Uc,t.lanes=o,t;case Nc:return t=En(13,n,e,r),t.elementType=Nc,t.lanes=o,t;case Ic:return t=En(19,n,e,r),t.elementType=Ic,t.lanes=o,t;case gg:return Bl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pg:s=10;break e;case mg:s=9;break e;case jf:s=11;break e;case $f:s=14;break e;case Ai:s=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=En(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function mr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function Bl(t,e,n,i){return t=En(22,t,i,e),t.elementType=gg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wu(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Xu(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cd(t,e,n,i,r,o,s,a,l){return t=new Ox(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=En(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(o),t}function Fx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function l_(t){if(!t)return ji;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(en(n))return av(t,n,e)}return e}function u_(t,e,n,i,r,o,s,a,l){return t=Cd(n,i,!0,t,r,o,s,a,l),t.context=l_(null),n=t.current,i=Yt(),r=Hi(n),o=pi(i,r),o.callback=e??null,zi(n,o,r),t.current.lanes=r,js(t,r,i),tn(t,i),t}function Hl(t,e,n,i){var r=e.current,o=Yt(),s=Hi(r);return n=l_(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,s),t!==null&&(Hn(t,r,s,o),Wa(t,r,s)),s}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bd(t,e){lp(t,e),(t=t.alternate)&&lp(t,e)}function kx(){return null}var c_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pd(t){this._internalRoot=t}Gl.prototype.render=Pd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Hl(t,e,null,null)};Gl.prototype.unmount=Pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Hl(null,t,null,null)}),e[vi]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&Gg(t)}};function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function up(){}function zx(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Sl(s);o.call(u)}}var s=u_(e,i,t,0,null,!1,!1,"",up);return t._reactRootContainer=s,t[vi]=s.current,Ps(t.nodeType===8?t.parentNode:t),wr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Sl(l);a.call(u)}}var l=Cd(t,0,!1,null,null,!1,!1,"",up);return t._reactRootContainer=l,t[vi]=l.current,Ps(t.nodeType===8?t.parentNode:t),wr(function(){Hl(e,l,n,i)}),l}function Wl(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Sl(s);a.call(l)}}Hl(e,s,t,r)}else s=zx(n,e,t,r,i);return Sl(s)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=as(e.pendingLanes);n!==0&&(Kf(e,n|1),tn(e,dt()),!(Ve&6)&&(No=dt()+500,Zi()))}break;case 13:wr(function(){var i=_i(t,1);if(i!==null){var r=Yt();Hn(i,t,1,r)}}),bd(t,1)}};Zf=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Yt();Hn(e,t,134217728,n)}bd(t,134217728)}};zg=function(t){if(t.tag===13){var e=Hi(t),n=_i(t,e);if(n!==null){var i=Yt();Hn(n,t,e,i)}bd(t,e)}};Bg=function(){return je};Hg=function(t,e){var n=je;try{return je=t,e()}finally{je=n}};Xc=function(t,e,n){switch(e){case"input":if(kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nl(i);if(!r)throw Error(te(90));_g(i),kc(i,r)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&go(t,!!n.multiple,e,!1)}};Rg=Td;Cg=wr;var Bx={usingClientEntryPoint:!1,Events:[Ys,ao,Nl,wg,Ag,Td]},es={findFiberByHostInstance:fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hx={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lg(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{Pl=ga.inject(Hx),Yn=ga}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(e))throw Error(te(200));return Fx(t,e,null,n)};pn.createRoot=function(t,e){if(!Ld(t))throw Error(te(299));var n=!1,i="",r=c_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cd(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,Ps(t.nodeType===8?t.parentNode:t),new Pd(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Lg(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return wr(t)};pn.hydrate=function(t,e,n){if(!Vl(e))throw Error(te(200));return Wl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Ld(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=c_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=u_(e,null,t,1,n??null,r,!1,o,s),t[vi]=e.current,Ps(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};pn.render=function(t,e,n){if(!Vl(e))throw Error(te(200));return Wl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(te(40));return t._reactRootContainer?(wr(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};pn.unstable_batchedUpdates=Td;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Wl(t,e,n,!1,i)};pn.version="18.2.0-next-9e3b772b8-20220608";function f_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f_)}catch(t){console.error(t)}}f_(),ug.exports=pn;var d_=ug.exports,cp=d_;Lc.createRoot=cp.createRoot,Lc.hydrateRoot=cp.hydrateRoot;var h_={exports:{}},p_={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=rt;function Gx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vx=typeof Object.is=="function"?Object.is:Gx,Wx=Io.useState,Xx=Io.useEffect,jx=Io.useLayoutEffect,$x=Io.useDebugValue;function Yx(t,e){var n=e(),i=Wx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,o=i[1];return jx(function(){r.value=n,r.getSnapshot=e,ju(r)&&o({inst:r})},[t,n,e]),Xx(function(){return ju(r)&&o({inst:r}),t(function(){ju(r)&&o({inst:r})})},[t]),$x(n),n}function ju(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vx(t,n)}catch{return!0}}function qx(t,e){return e()}var Kx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qx:Yx;p_.useSyncExternalStore=Io.useSyncExternalStore!==void 0?Io.useSyncExternalStore:Kx;h_.exports=p_;var Zx=h_.exports,m_={exports:{}},g_={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xl=rt,Qx=Zx;function Jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var eS=typeof Object.is=="function"?Object.is:Jx,tS=Qx.useSyncExternalStore,nS=Xl.useRef,iS=Xl.useEffect,rS=Xl.useMemo,oS=Xl.useDebugValue;g_.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var o=nS(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=rS(function(){function l(p){if(!u){if(u=!0,f=p,p=i(p),r!==void 0&&s.hasValue){var y=s.value;if(r(y,p))return h=y}return h=p}if(y=h,eS(f,p))return y;var _=i(p);return r!==void 0&&r(y,_)?y:(f=p,h=_)}var u=!1,f,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var a=tS(t,o[0],o[1]);return iS(function(){s.hasValue=!0,s.value=a},[a]),oS(a),a};m_.exports=g_;var sS=m_.exports;function aS(t){t()}let v_=aS;const lS=t=>v_=t,uS=()=>v_,fp=Symbol.for(`react-redux-context-${rt.version}`),dp=globalThis;function cS(){let t=dp[fp];return t||(t=rt.createContext(null),dp[fp]=t),t}const $i=new Proxy({},new Proxy({},{get(t,e){const n=cS();return(i,...r)=>Reflect[e](n,...r)}}));function Dd(t=$i){return function(){return rt.useContext(t)}}const __=Dd(),fS=()=>{throw new Error("uSES not initialized!")};let y_=fS;const dS=t=>{y_=t},hS=(t,e)=>t===e;function pS(t=$i){const e=t===$i?__:Dd(t);return function(i,r={}){const{equalityFn:o=hS,stabilityCheck:s=void 0,noopCheck:a=void 0}=typeof r=="function"?{equalityFn:r}:r,{store:l,subscription:u,getServerState:f,stabilityCheck:h,noopCheck:d}=e();rt.useRef(!0);const p=rt.useCallback({[i.name](_){return i(_)}}[i.name],[i,h,s]),y=y_(u.addNestedSub,l.getState,f||l.getState,p,o);return rt.useDebugValue(y),y}}const hp=pS();var x_={exports:{}},$e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ct=typeof Symbol=="function"&&Symbol.for,Ud=Ct?Symbol.for("react.element"):60103,Nd=Ct?Symbol.for("react.portal"):60106,jl=Ct?Symbol.for("react.fragment"):60107,$l=Ct?Symbol.for("react.strict_mode"):60108,Yl=Ct?Symbol.for("react.profiler"):60114,ql=Ct?Symbol.for("react.provider"):60109,Kl=Ct?Symbol.for("react.context"):60110,Id=Ct?Symbol.for("react.async_mode"):60111,Zl=Ct?Symbol.for("react.concurrent_mode"):60111,Ql=Ct?Symbol.for("react.forward_ref"):60112,Jl=Ct?Symbol.for("react.suspense"):60113,mS=Ct?Symbol.for("react.suspense_list"):60120,eu=Ct?Symbol.for("react.memo"):60115,tu=Ct?Symbol.for("react.lazy"):60116,gS=Ct?Symbol.for("react.block"):60121,vS=Ct?Symbol.for("react.fundamental"):60117,_S=Ct?Symbol.for("react.responder"):60118,yS=Ct?Symbol.for("react.scope"):60119;function gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ud:switch(t=t.type,t){case Id:case Zl:case jl:case Yl:case $l:case Jl:return t;default:switch(t=t&&t.$$typeof,t){case Kl:case Ql:case tu:case eu:case ql:return t;default:return e}}case Nd:return e}}}function S_(t){return gn(t)===Zl}$e.AsyncMode=Id;$e.ConcurrentMode=Zl;$e.ContextConsumer=Kl;$e.ContextProvider=ql;$e.Element=Ud;$e.ForwardRef=Ql;$e.Fragment=jl;$e.Lazy=tu;$e.Memo=eu;$e.Portal=Nd;$e.Profiler=Yl;$e.StrictMode=$l;$e.Suspense=Jl;$e.isAsyncMode=function(t){return S_(t)||gn(t)===Id};$e.isConcurrentMode=S_;$e.isContextConsumer=function(t){return gn(t)===Kl};$e.isContextProvider=function(t){return gn(t)===ql};$e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ud};$e.isForwardRef=function(t){return gn(t)===Ql};$e.isFragment=function(t){return gn(t)===jl};$e.isLazy=function(t){return gn(t)===tu};$e.isMemo=function(t){return gn(t)===eu};$e.isPortal=function(t){return gn(t)===Nd};$e.isProfiler=function(t){return gn(t)===Yl};$e.isStrictMode=function(t){return gn(t)===$l};$e.isSuspense=function(t){return gn(t)===Jl};$e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===jl||t===Zl||t===Yl||t===$l||t===Jl||t===mS||typeof t=="object"&&t!==null&&(t.$$typeof===tu||t.$$typeof===eu||t.$$typeof===ql||t.$$typeof===Kl||t.$$typeof===Ql||t.$$typeof===vS||t.$$typeof===_S||t.$$typeof===yS||t.$$typeof===gS)};$e.typeOf=gn;x_.exports=$e;var xS=x_.exports,E_=xS,SS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ES={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},M_={};M_[E_.ForwardRef]=SS;M_[E_.Memo]=ES;var Ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=Symbol.for("react.element"),Fd=Symbol.for("react.portal"),nu=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),su=Symbol.for("react.context"),MS=Symbol.for("react.server_context"),au=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),fu=Symbol.for("react.lazy"),TS=Symbol.for("react.offscreen"),T_;T_=Symbol.for("react.module.reference");function An(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Od:switch(t=t.type,t){case nu:case ru:case iu:case lu:case uu:return t;default:switch(t=t&&t.$$typeof,t){case MS:case su:case au:case fu:case cu:case ou:return t;default:return e}}case Fd:return e}}}Ye.ContextConsumer=su;Ye.ContextProvider=ou;Ye.Element=Od;Ye.ForwardRef=au;Ye.Fragment=nu;Ye.Lazy=fu;Ye.Memo=cu;Ye.Portal=Fd;Ye.Profiler=ru;Ye.StrictMode=iu;Ye.Suspense=lu;Ye.SuspenseList=uu;Ye.isAsyncMode=function(){return!1};Ye.isConcurrentMode=function(){return!1};Ye.isContextConsumer=function(t){return An(t)===su};Ye.isContextProvider=function(t){return An(t)===ou};Ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Od};Ye.isForwardRef=function(t){return An(t)===au};Ye.isFragment=function(t){return An(t)===nu};Ye.isLazy=function(t){return An(t)===fu};Ye.isMemo=function(t){return An(t)===cu};Ye.isPortal=function(t){return An(t)===Fd};Ye.isProfiler=function(t){return An(t)===ru};Ye.isStrictMode=function(t){return An(t)===iu};Ye.isSuspense=function(t){return An(t)===lu};Ye.isSuspenseList=function(t){return An(t)===uu};Ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===nu||t===ru||t===iu||t===lu||t===uu||t===TS||typeof t=="object"&&t!==null&&(t.$$typeof===fu||t.$$typeof===cu||t.$$typeof===ou||t.$$typeof===su||t.$$typeof===au||t.$$typeof===T_||t.getModuleId!==void 0)};Ye.typeOf=An;function wS(){const t=uS();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){let i=[],r=e;for(;r;)i.push(r),r=r.next;return i},subscribe(i){let r=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!r||e===null||(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}const pp={notify(){},get:()=>[]};function AS(t,e){let n,i=pp;function r(h){return l(),i.subscribe(h)}function o(){i.notify()}function s(){f.onStateChange&&f.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(s):t.subscribe(s),i=wS())}function u(){n&&(n(),n=void 0,i.clear(),i=pp)}const f={addNestedSub:r,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>i};return f}const RS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CS=RS?rt.useLayoutEffect:rt.useEffect;function bS({store:t,context:e,children:n,serverState:i,stabilityCheck:r="once",noopCheck:o="once"}){const s=rt.useMemo(()=>{const u=AS(t);return{store:t,subscription:u,getServerState:i?()=>i:void 0,stabilityCheck:r,noopCheck:o}},[t,i,r,o]),a=rt.useMemo(()=>t.getState(),[t]);CS(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const l=e||$i;return ag.createElement(l.Provider,{value:s},n)}function w_(t=$i){const e=t===$i?__:Dd(t);return function(){const{store:i}=e();return i}}const PS=w_();function LS(t=$i){const e=t===$i?PS:w_(t);return function(){return e().dispatch}}const A_=LS();dS(sS.useSyncExternalStoreWithSelector);lS(d_.unstable_batchedUpdates);const DS=(t,e,n)=>({type:"UPDATE",payload:{x:t,y:e,z:n}}),US=()=>({type:"UPDATE_HANDLED"});function NS(){const t=A_(),[e,n]=rt.useState(20),[i,r]=rt.useState(20),[o,s]=rt.useState(20),a=h=>{h.preventDefault(),t(DS(e,i,o))},l=h=>{const d=Number(h.target.value);d>0&&n(d)},u=h=>{const d=Number(h.target.value);d>0&&r(d)},f=h=>{const d=Number(h.target.value);d>0&&s(d)};return Ge.jsx("form",{onSubmit:a,children:Ge.jsxs("fieldset",{id:"container-definition",children:[Ge.jsx("legend",{children:"Container Dimensions:"}),Ge.jsx("label",{htmlFor:"container-x",children:"X:"}),Ge.jsx("input",{type:"number",className:"number-input",id:"container-x",onChange:l,value:e}),Ge.jsx("label",{htmlFor:"container-y",children:"Y:"}),Ge.jsx("input",{type:"number",className:"number-input",id:"container-y",onChange:u,value:i}),Ge.jsx("label",{htmlFor:"container-z",children:"Z:"}),Ge.jsx("input",{type:"number",className:"number-input",id:"container-z",onChange:f,value:o}),Ge.jsx("button",{type:"submit",children:"Set Size"})]})})}function IS(){const t=e=>{e.preventDefault()};return Ge.jsx("form",{onSubmit:t,children:Ge.jsxs("fieldset",{id:"box-definition",children:[Ge.jsx("legend",{children:"Box Dimensions:"}),Ge.jsx("label",{htmlFor:"box-x",children:"X:"}),Ge.jsx("input",{type:"number",className:"number-input",id:"box-x"}),Ge.jsx("label",{htmlFor:"box-y",children:"Y:"}),Ge.jsx("input",{type:"number",className:"number-input",id:"box-y"}),Ge.jsx("label",{htmlFor:"box-z",children:"Z:"}),Ge.jsx("input",{type:"number",className:"number-input",id:"box-z"}),Ge.jsx("button",{type:"submit",children:"Add Box"})]})})}function OS(){const[t,e]=rt.useState(!0);return Ge.jsx(Ge.Fragment,{children:Ge.jsxs("div",{id:"menu",className:t?"show":"hide",children:[Ge.jsx(NS,{}),Ge.jsx(IS,{}),Ge.jsx("button",{id:"toggle-button",onClick:()=>{e(!t)},children:t?"<":">"})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="153",Fr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FS=0,mp=1,kS=2,R_=1,zS=2,si=3,Yi=0,Dt=1,ui=2,Vi=0,Eo=1,gp=2,vp=3,_p=4,BS=5,to=100,HS=101,GS=102,yp=103,xp=104,VS=200,WS=201,XS=202,jS=203,C_=204,b_=205,$S=206,YS=207,qS=208,KS=209,ZS=210,QS=0,JS=1,eE=2,wf=3,tE=4,nE=5,iE=6,rE=7,P_=0,oE=1,sE=2,mi=0,aE=1,lE=2,uE=3,cE=4,fE=5,L_=300,Oo=301,Fo=302,Af=303,Rf=304,du=306,Cf=1e3,Fn=1001,bf=1002,jt=1003,Sp=1004,$u=1005,xn=1006,dE=1007,zs=1008,Wi=1009,hE=1010,pE=1011,zd=1012,D_=1013,Ui=1014,Ni=1015,Bs=1016,U_=1017,N_=1018,gr=1020,mE=1021,kn=1023,gE=1024,vE=1025,vr=1026,ko=1027,_E=1028,I_=1029,yE=1030,O_=1031,F_=1033,Yu=33776,qu=33777,Ku=33778,Zu=33779,Ep=35840,Mp=35841,Tp=35842,wp=35843,xE=36196,Ap=37492,Rp=37496,Cp=37808,bp=37809,Pp=37810,Lp=37811,Dp=37812,Up=37813,Np=37814,Ip=37815,Op=37816,Fp=37817,kp=37818,zp=37819,Bp=37820,Hp=37821,Qu=36492,SE=36283,Gp=36284,Vp=36285,Wp=36286,k_=3e3,_r=3001,EE=3200,ME=3201,TE=0,wE=1,yr="",Le="srgb",Qn="srgb-linear",z_="display-p3",Ju=7680,AE=519,RE=512,CE=513,bE=514,PE=515,LE=516,DE=517,UE=518,NE=519,Xp=35044,jp="300 es",Pf=1035,di=2e3,El=2001;class Nr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ec=Math.PI/180,Lf=180/Math.PI;function Ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function IE(t,e){return(t%e+e)%e}function tc(t,e,n){return(1-n)*t+n*e}function $p(t){return(t&t-1)===0&&t!==0}function Df(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function va(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,o,s,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],y=i[8],_=r[0],m=r[3],c=r[6],v=r[1],g=r[4],x=r[7],E=r[2],R=r[5],b=r[8];return o[0]=s*_+a*v+l*E,o[3]=s*m+a*g+l*R,o[6]=s*c+a*x+l*b,o[1]=u*_+f*v+h*E,o[4]=u*m+f*g+h*R,o[7]=u*c+f*x+h*b,o[2]=d*_+p*v+y*E,o[5]=d*m+p*g+y*R,o[8]=d*c+p*x+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*s-a*u,d=a*l-f*o,p=u*o-s*l,y=n*h+i*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=h*_,e[1]=(r*u-f*i)*_,e[2]=(a*i-r*s)*_,e[3]=d*_,e[4]=(f*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nc.makeScale(e,n)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nc=new Ie;function B_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ml(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Yp={};function xs(t){t in Yp||(Yp[t]=!0,console.warn(t))}function Mo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const OE=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),FE=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function kE(t){return t.convertSRGBToLinear().applyMatrix3(FE)}function zE(t){return t.applyMatrix3(OE).convertLinearToSRGB()}const BE={[Qn]:t=>t,[Le]:t=>t.convertSRGBToLinear(),[z_]:kE},HE={[Qn]:t=>t,[Le]:t=>t.convertLinearToSRGB(),[z_]:zE},bn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Qn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=BE[e],r=HE[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let zr;class H_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Ml("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ml("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Mo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Mo(n[i]/255)*255):n[i]=Mo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GE=0;class G_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(rc(r[s].image)):o.push(rc(r[s]))}else o=rc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?H_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VE=0;class cn extends Nr{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Fn,r=Fn,o=xn,s=zs,a=kn,l=Wi,u=cn.DEFAULT_ANISOTROPY,f=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Ks(),this.name="",this.source=new G_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===_r?Le:yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?_r:k_}set encoding(e){xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?Le:yr}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=L_;cn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],y=l[9],_=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,E=(c+1)/2,R=(f+d)/4,b=(h+_)/4,P=(y+m)/4;return g>x&&g>E?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=R/i,o=b/i):x>E?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=R/r,o=P/r):E<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(E),i=b/o,r=P/o),this.set(i,r,o,n),this}let v=Math.sqrt((m-y)*(m-y)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(h-_)/v,this.z=(d-f)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ar extends Nr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_r?Le:yr),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new G_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V_ extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WE extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],y=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=y,e[n+3]=_;return}if(h!==_||l!==d||u!==p||f!==y){let m=1-a;const c=l*d+u*p+f*y+h*_,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const E=Math.sqrt(g),R=Math.atan2(E,c*v);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const x=a*v;if(l=l*m+d*x,u=u*m+p*x,f=f*m+y*x,h=h*m+_*x,m===1-a){const E=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=E,u*=E,f*=E,h*=E}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=o[s],d=o[s+1],p=o[s+2],y=o[s+3];return e[n]=a*y+f*h+l*p-u*d,e[n+1]=l*y+f*d+u*h-a*p,e[n+2]=u*y+f*p+a*d-l*h,e[n+3]=f*y-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=d*f*h+u*p*y,this._y=u*p*h-d*f*y,this._z=u*f*y+d*p*h,this._w=u*f*h-d*p*y;break;case"YXZ":this._x=d*f*h+u*p*y,this._y=u*p*h-d*f*y,this._z=u*f*y-d*p*h,this._w=u*f*h+d*p*y;break;case"ZXY":this._x=d*f*h-u*p*y,this._y=u*p*h+d*f*y,this._z=u*f*y+d*p*h,this._w=u*f*h-d*p*y;break;case"ZYX":this._x=d*f*h-u*p*y,this._y=u*p*h+d*f*y,this._z=u*f*y-d*p*h,this._w=u*f*h+d*p*y;break;case"YZX":this._x=d*f*h+u*p*y,this._y=u*p*h+d*f*y,this._z=u*f*y-d*p*h,this._w=u*f*h-d*p*y;break;case"XZY":this._x=d*f*h-u*p*y,this._y=u*p*h-d*f*y,this._z=u*f*y+d*p*h,this._w=u*f*h+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,f=l*i+a*n-o*r,h=l*r+o*i-s*n,d=-o*n-s*i-a*r;return this.x=u*l+d*-o+f*-a-h*-s,this.y=f*l+d*-s+h*-o-u*-a,this.z=h*l+d*-a+u*-s-f*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new k,qp=new Rr;class Zs{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)ti.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(ti)}else r.boundingBox===null&&r.computeBoundingBox(),Br.copy(r.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),_a.subVectors(this.max,ts),Hr.subVectors(e.a,ts),Gr.subVectors(e.b,ts),Vr.subVectors(e.c,ts),Ei.subVectors(Gr,Hr),Mi.subVectors(Vr,Gr),tr.subVectors(Hr,Vr);let n=[0,-Ei.z,Ei.y,0,-Mi.z,Mi.y,0,-tr.z,tr.y,Ei.z,0,-Ei.x,Mi.z,0,-Mi.x,tr.z,0,-tr.x,-Ei.y,Ei.x,0,-Mi.y,Mi.x,0,-tr.y,tr.x,0];return!sc(n,Hr,Gr,Vr,_a)||(n=[1,0,0,0,1,0,0,0,1],!sc(n,Hr,Gr,Vr,_a))?!1:(ya.crossVectors(Ei,Mi),n=[ya.x,ya.y,ya.z],sc(n,Hr,Gr,Vr,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new k,new k,new k,new k,new k,new k,new k,new k],ti=new k,Br=new Zs,Hr=new k,Gr=new k,Vr=new k,Ei=new k,Mi=new k,tr=new k,ts=new k,_a=new k,ya=new k,nr=new k;function sc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){nr.fromArray(t,o);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),u=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const XE=new Zs,ns=new k,ac=new k;class Bd{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XE.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const n=ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(ac)),this.expandByPoint(ns.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new k,lc=new k,xa=new k,Ti=new k,uc=new k,Sa=new k,cc=new k;class jE{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lc.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(lc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(xa),a=Ti.dot(this.direction),l=-Ti.dot(xa),u=Ti.lengthSq(),f=Math.abs(1-s*s);let h,d,p,y;if(f>0)if(h=s*l-a,d=s*a-l,y=o*f,h>=0)if(d>=-y)if(d<=y){const _=1/f;h*=_,d*=_,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+u}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-y?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u):d<=y?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(lc).addScaledVector(xa,d),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(o=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(o=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,o){uc.subVectors(n,e),Sa.subVectors(i,e),cc.crossVectors(uc,Sa);let s=this.direction.dot(cc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(Sa.crossVectors(Ti,Sa));if(l<0)return null;const u=a*this.direction.dot(uc.cross(Ti));if(u<0||l+u>s)return null;const f=-a*Ti.dot(cc);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,n,i,r,o,s,a,l,u,f,h,d,p,y,_,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,h,d,p,y,_,m)}set(e,n,i,r,o,s,a,l,u,f,h,d,p,y,_,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=y,c[11]=_,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),o=1/Wr.setFromMatrixColumn(e,1).length(),s=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*f,p=s*h,y=a*f,_=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=p+y*u,n[5]=d-_*u,n[9]=-a*l,n[2]=_-d*u,n[6]=y+p*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,y=u*f,_=u*h;n[0]=d+_*a,n[4]=y*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*f,n[9]=-a,n[2]=p*a-y,n[6]=_+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,y=u*f,_=u*h;n[0]=d-_*a,n[4]=-s*h,n[8]=y+p*a,n[1]=p+y*a,n[5]=s*f,n[9]=_-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*f,p=s*h,y=a*f,_=a*h;n[0]=l*f,n[4]=y*u-p,n[8]=d*u+_,n[1]=l*h,n[5]=_*u+d,n[9]=p*u-y,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,y=a*l,_=a*u;n[0]=l*f,n[4]=_-d*h,n[8]=y*h+p,n[1]=h,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*h+y,n[10]=d-_*h}else if(e.order==="XZY"){const d=s*l,p=s*u,y=a*l,_=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+_,n[5]=s*f,n[9]=p*h-y,n[2]=y*h-p,n[6]=a*f,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,YE)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),wi.crossVectors(i,on),wi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),wi.crossVectors(i,on)),wi.normalize(),Ea.crossVectors(on,wi),r[0]=wi.x,r[4]=Ea.x,r[8]=on.x,r[1]=wi.y,r[5]=Ea.y,r[9]=on.y,r[2]=wi.z,r[6]=Ea.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],y=i[2],_=i[6],m=i[10],c=i[14],v=i[3],g=i[7],x=i[11],E=i[15],R=r[0],b=r[4],P=r[8],S=r[12],w=r[1],$=r[5],ee=r[9],F=r[13],V=r[2],W=r[6],J=r[10],Y=r[14],D=r[3],G=r[7],z=r[11],oe=r[15];return o[0]=s*R+a*w+l*V+u*D,o[4]=s*b+a*$+l*W+u*G,o[8]=s*P+a*ee+l*J+u*z,o[12]=s*S+a*F+l*Y+u*oe,o[1]=f*R+h*w+d*V+p*D,o[5]=f*b+h*$+d*W+p*G,o[9]=f*P+h*ee+d*J+p*z,o[13]=f*S+h*F+d*Y+p*oe,o[2]=y*R+_*w+m*V+c*D,o[6]=y*b+_*$+m*W+c*G,o[10]=y*P+_*ee+m*J+c*z,o[14]=y*S+_*F+m*Y+c*oe,o[3]=v*R+g*w+x*V+E*D,o[7]=v*b+g*$+x*W+E*G,o[11]=v*P+g*ee+x*J+E*z,o[15]=v*S+g*F+x*Y+E*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],y=e[3],_=e[7],m=e[11],c=e[15];return y*(+o*l*h-r*u*h-o*a*d+i*u*d+r*a*p-i*l*p)+_*(+n*l*p-n*u*d+o*s*d-r*s*p+r*u*f-o*l*f)+m*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*s*h-i*s*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],y=e[12],_=e[13],m=e[14],c=e[15],v=h*m*u-_*d*u+_*l*p-a*m*p-h*l*c+a*d*c,g=y*d*u-f*m*u-y*l*p+s*m*p+f*l*c-s*d*c,x=f*_*u-y*h*u+y*a*p-s*_*p-f*a*c+s*h*c,E=y*h*l-f*_*l-y*a*d+s*_*d+f*a*m-s*h*m,R=n*v+i*g+r*x+o*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=v*b,e[1]=(_*d*o-h*m*o-_*r*p+i*m*p+h*r*c-i*d*c)*b,e[2]=(a*m*o-_*l*o+_*r*u-i*m*u-a*r*c+i*l*c)*b,e[3]=(h*l*o-a*d*o-h*r*u+i*d*u+a*r*p-i*l*p)*b,e[4]=g*b,e[5]=(f*m*o-y*d*o+y*r*p-n*m*p-f*r*c+n*d*c)*b,e[6]=(y*l*o-s*m*o-y*r*u+n*m*u+s*r*c-n*l*c)*b,e[7]=(s*d*o-f*l*o+f*r*u-n*d*u-s*r*p+n*l*p)*b,e[8]=x*b,e[9]=(y*h*o-f*_*o-y*i*p+n*_*p+f*i*c-n*h*c)*b,e[10]=(s*_*o-y*a*o+y*i*u-n*_*u-s*i*c+n*a*c)*b,e[11]=(f*a*o-s*h*o-f*i*u+n*h*u+s*i*p-n*a*p)*b,e[12]=E*b,e[13]=(f*_*r-y*h*r+y*i*d-n*_*d-f*i*m+n*h*m)*b,e[14]=(y*a*r-s*_*r-y*i*l+n*_*l+s*i*m-n*a*m)*b,e[15]=(s*h*r-f*a*r+f*i*l-n*h*l-s*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,h=a+a,d=o*u,p=o*f,y=o*h,_=s*f,m=s*h,c=a*h,v=l*u,g=l*f,x=l*h,E=i.x,R=i.y,b=i.z;return r[0]=(1-(_+c))*E,r[1]=(p+x)*E,r[2]=(y-g)*E,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(d+c))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(y+g)*b,r[9]=(m-v)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Wr.set(r[0],r[1],r[2]).length();const s=Wr.set(r[4],r[5],r[6]).length(),a=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/o,f=1/s,h=1/a;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=di){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,y;if(a===di)p=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===El)p=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=di){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(s-o),d=(n+e)*u,p=(i+r)*f;let y,_;if(a===di)y=(s+o)*h,_=-2*h;else if(a===El)y=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wr=new k,Pn=new Ut,$E=new k(0,0,0),YE=new k(1,1,1),wi=new k,Ea=new k,on=new k,Kp=new Ut,Zp=new Rr;class hu{constructor(e=0,n=0,i=0,r=hu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hu.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qE=0;const Qp=new k,Xr=new Rr,ii=new Ut,Ma=new k,is=new k,KE=new k,ZE=new Rr,Jp=new k(1,0,0),em=new k(0,1,0),tm=new k(0,0,1),QE={type:"added"},nm={type:"removed"};class fn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new k,n=new hu,i=new Rr,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ie}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(is,Ma,this.up):ii.lookAt(Ma,is,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(ii),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(QE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(nm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,KE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,ZE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new k(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new k,ri=new k,fc=new k,oi=new k,jr=new k,$r=new k,im=new k,dc=new k,hc=new k,pc=new k;let Ta=!1;class On{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Ln.subVectors(r,n),ri.subVectors(i,n),fc.subVectors(e,n);const s=Ln.dot(Ln),a=Ln.dot(ri),l=Ln.dot(fc),u=ri.dot(ri),f=ri.dot(fc),h=s*u-a*a;if(h===0)return o.set(-2,-1,-1);const d=1/h,p=(u*l-a*f)*d,y=(s*f-a*l)*d;return o.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi),oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,n,i,r,o,s,a,l){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,oi),l.setScalar(0),l.addScaledVector(o,oi.x),l.addScaledVector(s,oi.y),l.addScaledVector(a,oi.z),l}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ri.subVectors(e,n),Ln.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ln.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),On.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;jr.subVectors(r,i),$r.subVectors(o,i),dc.subVectors(e,i);const l=jr.dot(dc),u=$r.dot(dc);if(l<=0&&u<=0)return n.copy(i);hc.subVectors(e,r);const f=jr.dot(hc),h=$r.dot(hc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(jr,s);pc.subVectors(e,o);const p=jr.dot(pc),y=$r.dot(pc);if(y>=0&&p<=y)return n.copy(o);const _=p*u-l*y;if(_<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector($r,a);const m=f*y-p*h;if(m<=0&&h-f>=0&&p-y>=0)return im.subVectors(o,r),a=(h-f)/(h-f+(p-y)),n.copy(r).addScaledVector(im,a);const c=1/(m+_+d);return s=_*c,a=d*c,n.copy(i).addScaledVector(jr,s).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let JE=0;class pu extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Eo,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=C_,this.blendDst=b_,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ju,this.stencilZFail=Ju,this.stencilZPass=Ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},wa={h:0,s:0,l:0};function mc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=bn.workingColorSpace){return this.r=e,this.g=n,this.b=i,bn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=bn.workingColorSpace){if(e=IE(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=mc(s,o,e+1/3),this.g=mc(s,o,e),this.b=mc(s,o,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,n=Le){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Le){const i=X_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}copyLinearToSRGB(e){return this.r=ic(e.r),this.g=ic(e.g),this.b=ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return bn.fromWorkingColorSpace(kt.copy(this),e),Math.round($t(kt.r*255,0,255))*65536+Math.round($t(kt.g*255,0,255))*256+Math.round($t(kt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bn.workingColorSpace){bn.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,o=kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=f<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=bn.workingColorSpace){return bn.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Le){bn.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Le?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Dn),Dn.h+=e,Dn.s+=n,Dn.l+=i,this.setHSL(Dn.h,Dn.s,Dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Dn),e.getHSL(wa);const i=tc(Dn.h,wa.h,n),r=tc(Dn.s,wa.s,n),o=tc(Dn.l,wa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Je;Je.NAMES=X_;class Ss extends pu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new k,Aa=new ke;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xp,this.updateRange={offset:0,count:-1},this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Aa.fromBufferAttribute(this,n),Aa.applyMatrix3(e),this.setXY(n,Aa.x,Aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=va(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=va(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=va(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=va(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class j_ extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $_ extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xr extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eM=0;const vn=new Ut,gc=new fn,Yr=new k,sn=new Zs,rs=new Zs,wt=new k;class Ir extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?$_:j_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ie().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];sn.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(sn.min,rs.min),sn.expandByPoint(wt),wt.addVectors(sn.max,rs.max),sn.expandByPoint(wt)):(sn.expandByPoint(rs.min),sn.expandByPoint(rs.max))}sn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)wt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)wt.fromBufferAttribute(a,u),l&&(Yr.fromBufferAttribute(e,u),wt.add(Yr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new k,f[w]=new k;const h=new k,d=new k,p=new k,y=new ke,_=new ke,m=new ke,c=new k,v=new k;function g(w,$,ee){h.fromArray(r,w*3),d.fromArray(r,$*3),p.fromArray(r,ee*3),y.fromArray(s,w*2),_.fromArray(s,$*2),m.fromArray(s,ee*2),d.sub(h),p.sub(h),_.sub(y),m.sub(y);const F=1/(_.x*m.y-m.x*_.y);isFinite(F)&&(c.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(F),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(F),u[w].add(c),u[$].add(c),u[ee].add(c),f[w].add(v),f[$].add(v),f[ee].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,$=x.length;w<$;++w){const ee=x[w],F=ee.start,V=ee.count;for(let W=F,J=F+V;W<J;W+=3)g(i[W+0],i[W+1],i[W+2])}const E=new k,R=new k,b=new k,P=new k;function S(w){b.fromArray(o,w*3),P.copy(b);const $=u[w];E.copy($),E.sub(b.multiplyScalar(b.dot($))).normalize(),R.crossVectors(P,$);const F=R.dot(f[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=F}for(let w=0,$=x.length;w<$;++w){const ee=x[w],F=ee.start,V=ee.count;for(let W=F,J=F+V;W<J;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,f=new k,h=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,y=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let c=0;c<f;c++)d[y++]=u[p++]}return new Kn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],h=o[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new Ut,ir=new jE,Ra=new Bd,om=new k,qr=new k,Kr=new k,Zr=new k,vc=new k,Ca=new k,ba=new ke,Pa=new ke,La=new ke,sm=new k,am=new k,lm=new k,Da=new k,Ua=new k;class hi extends fn{constructor(e=new Ir,n=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ca.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],h=o[l];f!==0&&(vc.fromBufferAttribute(h,e),s?Ca.addScaledVector(vc,f):Ca.addScaledVector(vc.sub(n),f))}n.add(Ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(o),ir.copy(e.ray).recast(e.near),!(Ra.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ra,om)===null||ir.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(rm.copy(o).invert(),ir.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let y=0,_=d.length;y<_;y++){const m=d[y],c=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,E=g;x<E;x+=3){const R=a.getX(x),b=a.getX(x+1),P=a.getX(x+2);r=Na(this,c,e,i,u,f,h,R,b,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=y,c=_;m<c;m+=3){const v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Na(this,s,e,i,u,f,h,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,_=d.length;y<_;y++){const m=d[y],c=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,E=g;x<E;x+=3){const R=x,b=x+1,P=x+2;r=Na(this,c,e,i,u,f,h,R,b,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=y,c=_;m<c;m+=3){const v=m,g=m+1,x=m+2;r=Na(this,s,e,i,u,f,h,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function tM(t,e,n,i,r,o,s,a){let l;if(e.side===Dt?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Yi,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ua);return u<n.near||u>n.far?null:{distance:u,point:Ua.clone(),object:t}}function Na(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,qr),t.getVertexPosition(l,Kr),t.getVertexPosition(u,Zr);const f=tM(t,e,n,i,qr,Kr,Zr,Da);if(f){r&&(ba.fromBufferAttribute(r,a),Pa.fromBufferAttribute(r,l),La.fromBufferAttribute(r,u),f.uv=On.getInterpolation(Da,qr,Kr,Zr,ba,Pa,La,new ke)),o&&(ba.fromBufferAttribute(o,a),Pa.fromBufferAttribute(o,l),La.fromBufferAttribute(o,u),f.uv1=On.getInterpolation(Da,qr,Kr,Zr,ba,Pa,La,new ke),f.uv2=f.uv1),s&&(sm.fromBufferAttribute(s,a),am.fromBufferAttribute(s,l),lm.fromBufferAttribute(s,u),f.normal=On.getInterpolation(Da,qr,Kr,Zr,sm,am,lm,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};On.getNormal(qr,Kr,Zr,h.normal),f.face=h}return f}class Vo extends Ir{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],h=[];let d=0,p=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new xr(u,3)),this.setAttribute("normal",new xr(f,3)),this.setAttribute("uv",new xr(h,2));function y(_,m,c,v,g,x,E,R,b,P,S){const w=x/b,$=E/P,ee=x/2,F=E/2,V=R/2,W=b+1,J=P+1;let Y=0,D=0;const G=new k;for(let z=0;z<J;z++){const oe=z*$-F;for(let U=0;U<W;U++){const Q=U*w-ee;G[_]=Q*v,G[m]=oe*g,G[c]=V,u.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[c]=R>0?1:-1,f.push(G.x,G.y,G.z),h.push(U/b),h.push(1-z/P),Y+=1}}for(let z=0;z<P;z++)for(let oe=0;oe<b;oe++){const U=d+oe+W*z,Q=d+oe+W*(z+1),Z=d+(oe+1)+W*(z+1),fe=d+(oe+1)+W*z;l.push(U,Q,fe),l.push(Q,Z,fe),D+=6}a.addGroup(p,D,S),p+=D,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=zo(t[n]);for(const r in i)e[r]=i[r]}return e}function nM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Y_(t){return t.getRenderTarget()===null?t.outputColorSpace:Qn}const iM={clone:zo,merge:Wt};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends pu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=nM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class q_ extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends q_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ec*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class sM extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Sn(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const o=new Sn(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const s=new Sn(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new Sn(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new Sn(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new Sn(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,l,u]=this.children,f=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=mi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class K_ extends cn{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Oo,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aM extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_r?Le:yr),this.texture=new K_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vo(5,5,5),o=new Cr({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Vi});o.uniforms.tEquirect.value=n;const s=new hi(r,o),a=n.minFilter;return n.minFilter===zs&&(n.minFilter=xn),new sM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const _c=new k,lM=new k,uM=new Ie;class ar{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_c.subVectors(i,n).cross(lM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uM.getNormalMatrix(e),r=this.coplanarPoint(_c).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Bd,Ia=new k;class Z_{constructor(e=new ar,n=new ar,i=new ar,r=new ar,o=new ar,s=new ar){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],y=r[9],_=r[10],m=r[11],c=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-o,d-u,m-p,x-c).normalize(),i[1].setComponents(l+o,d+u,m+p,x+c).normalize(),i[2].setComponents(l+s,d+f,m+y,x+v).normalize(),i[3].setComponents(l-s,d-f,m-y,x-v).normalize(),i[4].setComponents(l-a,d-h,m-_,x-g).normalize(),n===di)i[5].setComponents(l+a,d+h,m+_,x+g).normalize();else if(n===El)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ia.x=r.normal.x>0?e.max.x:e.min.x,Ia.y=r.normal.y>0?e.max.y:e.min.y,Ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Q_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function cM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,p=t.createBuffer();t.bindBuffer(f,p),t.bufferData(f,h,d),u.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function o(u,f,h){const d=f.array,p=f.updateRange;t.bindBuffer(h,u),p.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(o(h.buffer,u,f),h.version=u.version)}return{get:s,remove:a,update:l}}class Hd extends Ir{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,p=[],y=[],_=[],m=[];for(let c=0;c<f;c++){const v=c*d-s;for(let g=0;g<u;g++){const x=g*h-o;y.push(x,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const g=v+u*c,x=v+u*(c+1),E=v+1+u*(c+1),R=v+1+u*c;p.push(g,x,R),p.push(x,E,R)}this.setIndex(p),this.setAttribute("position",new xr(y,3)),this.setAttribute("normal",new xr(_,3)),this.setAttribute("uv",new xr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.width,e.height,e.widthSegments,e.heightSegments)}}var fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM="vec3 transformed = vec3( position );",_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,sT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ET=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,MT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,TT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,wT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,YT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n1=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i1=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r1=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,d1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,p1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x1=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,k1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:fM,alphamap_pars_fragment:dM,alphatest_fragment:hM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,begin_vertex:vM,beginnormal_vertex:_M,bsdfs:yM,iridescence_fragment:xM,bumpmap_pars_fragment:SM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:wM,color_fragment:AM,color_pars_fragment:RM,color_pars_vertex:CM,color_vertex:bM,common:PM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:DM,displacementmap_pars_vertex:UM,displacementmap_vertex:NM,emissivemap_fragment:IM,emissivemap_pars_fragment:OM,encodings_fragment:FM,encodings_pars_fragment:kM,envmap_fragment:zM,envmap_common_pars_fragment:BM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:eT,envmap_vertex:VM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:jM,fog_pars_fragment:$M,gradientmap_pars_fragment:YM,lightmap_fragment:qM,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:oT,lights_physical_pars_fragment:sT,lights_fragment_begin:aT,lights_fragment_maps:lT,lights_fragment_end:uT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:dT,logdepthbuf_vertex:hT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:vT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:yT,morphcolor_vertex:xT,morphnormal_vertex:ST,morphtarget_pars_vertex:ET,morphtarget_vertex:MT,normal_fragment_begin:TT,normal_fragment_maps:wT,normal_pars_fragment:AT,normal_pars_vertex:RT,normal_vertex:CT,normalmap_pars_fragment:bT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:DT,iridescence_pars_fragment:UT,output_fragment:NT,packing:IT,premultiplied_alpha_fragment:OT,project_vertex:FT,dithering_fragment:kT,dithering_pars_fragment:zT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:VT,shadowmap_vertex:WT,shadowmask_pars_fragment:XT,skinbase_vertex:jT,skinning_pars_vertex:$T,skinning_vertex:YT,skinnormal_vertex:qT,specularmap_fragment:KT,specularmap_pars_fragment:ZT,tonemapping_fragment:QT,tonemapping_pars_fragment:JT,transmission_fragment:e1,transmission_pars_fragment:t1,uv_pars_fragment:n1,uv_pars_vertex:i1,uv_vertex:r1,worldpos_vertex:o1,background_vert:s1,background_frag:a1,backgroundCube_vert:l1,backgroundCube_frag:u1,cube_vert:c1,cube_frag:f1,depth_vert:d1,depth_frag:h1,distanceRGBA_vert:p1,distanceRGBA_frag:m1,equirect_vert:g1,equirect_frag:v1,linedashed_vert:_1,linedashed_frag:y1,meshbasic_vert:x1,meshbasic_frag:S1,meshlambert_vert:E1,meshlambert_frag:M1,meshmatcap_vert:T1,meshmatcap_frag:w1,meshnormal_vert:A1,meshnormal_frag:R1,meshphong_vert:C1,meshphong_frag:b1,meshphysical_vert:P1,meshphysical_frag:L1,meshtoon_vert:D1,meshtoon_frag:U1,points_vert:N1,points_frag:I1,shadow_vert:O1,shadow_frag:F1,sprite_vert:k1,sprite_frag:z1},ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},jn={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};jn.physical={uniforms:Wt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Oa={r:0,b:0,g:0};function B1(t,e,n,i,r,o,s){const a=new Je(0);let l=o===!0?0:1,u,f,h=null,d=0,p=null;function y(m,c){let v=!1,g=c.isScene===!0?c.background:null;switch(g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),v=!0;break}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===du)?(f===void 0&&(f=new hi(new Vo(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:zo(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=g.colorSpace!==Le,(h!==g||d!==g.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new hi(new Hd(2,2),new Cr({name:"BackgroundMaterial",uniforms:zo(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Le,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,c){m.getRGB(Oa,Y_(t)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:y}}function H1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=m(null);let u=l,f=!1;function h(V,W,J,Y,D){let G=!1;if(s){const z=_(Y,J,W);u!==z&&(u=z,p(u.object)),G=c(V,Y,J,D),G&&v(V,Y,J,D)}else{const z=W.wireframe===!0;(u.geometry!==Y.id||u.program!==J.id||u.wireframe!==z)&&(u.geometry=Y.id,u.program=J.id,u.wireframe=z,G=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(G||f)&&(f=!1,P(V,W,J,Y),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(V){return i.isWebGL2?t.bindVertexArray(V):o.bindVertexArrayOES(V)}function y(V){return i.isWebGL2?t.deleteVertexArray(V):o.deleteVertexArrayOES(V)}function _(V,W,J){const Y=J.wireframe===!0;let D=a[V.id];D===void 0&&(D={},a[V.id]=D);let G=D[W.id];G===void 0&&(G={},D[W.id]=G);let z=G[Y];return z===void 0&&(z=m(d()),G[Y]=z),z}function m(V){const W=[],J=[],Y=[];for(let D=0;D<r;D++)W[D]=0,J[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:Y,object:V,attributes:{},index:null}}function c(V,W,J,Y){const D=u.attributes,G=W.attributes;let z=0;const oe=J.getAttributes();for(const U in oe)if(oe[U].location>=0){const Z=D[U];let fe=G[U];if(fe===void 0&&(U==="instanceMatrix"&&V.instanceMatrix&&(fe=V.instanceMatrix),U==="instanceColor"&&V.instanceColor&&(fe=V.instanceColor)),Z===void 0||Z.attribute!==fe||fe&&Z.data!==fe.data)return!0;z++}return u.attributesNum!==z||u.index!==Y}function v(V,W,J,Y){const D={},G=W.attributes;let z=0;const oe=J.getAttributes();for(const U in oe)if(oe[U].location>=0){let Z=G[U];Z===void 0&&(U==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),U==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor));const fe={};fe.attribute=Z,Z&&Z.data&&(fe.data=Z.data),D[U]=fe,z++}u.attributes=D,u.attributesNum=z,u.index=Y}function g(){const V=u.newAttributes;for(let W=0,J=V.length;W<J;W++)V[W]=0}function x(V){E(V,0)}function E(V,W){const J=u.newAttributes,Y=u.enabledAttributes,D=u.attributeDivisors;J[V]=1,Y[V]===0&&(t.enableVertexAttribArray(V),Y[V]=1),D[V]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,W),D[V]=W)}function R(){const V=u.newAttributes,W=u.enabledAttributes;for(let J=0,Y=W.length;J<Y;J++)W[J]!==V[J]&&(t.disableVertexAttribArray(J),W[J]=0)}function b(V,W,J,Y,D,G,z){z===!0?t.vertexAttribIPointer(V,W,J,D,G):t.vertexAttribPointer(V,W,J,Y,D,G)}function P(V,W,J,Y){if(i.isWebGL2===!1&&(V.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=Y.attributes,G=J.getAttributes(),z=W.defaultAttributeValues;for(const oe in G){const U=G[oe];if(U.location>=0){let Q=D[oe];if(Q===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),Q!==void 0){const Z=Q.normalized,fe=Q.itemSize,ue=n.get(Q);if(ue===void 0)continue;const _e=ue.buffer,De=ue.type,Me=ue.bytesPerElement,ct=i.isWebGL2===!0&&(De===t.INT||De===t.UNSIGNED_INT||Q.gpuType===D_);if(Q.isInterleavedBufferAttribute){const Oe=Q.data,I=Oe.stride,vt=Q.offset;if(Oe.isInstancedInterleavedBuffer){for(let xe=0;xe<U.locationSize;xe++)E(U.location+xe,Oe.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let xe=0;xe<U.locationSize;xe++)x(U.location+xe);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let xe=0;xe<U.locationSize;xe++)b(U.location+xe,fe/U.locationSize,De,Z,I*Me,(vt+fe/U.locationSize*xe)*Me,ct)}else{if(Q.isInstancedBufferAttribute){for(let Oe=0;Oe<U.locationSize;Oe++)E(U.location+Oe,Q.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Oe=0;Oe<U.locationSize;Oe++)x(U.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Oe=0;Oe<U.locationSize;Oe++)b(U.location+Oe,fe/U.locationSize,De,Z,fe*Me,fe/U.locationSize*Oe*Me,ct)}}else if(z!==void 0){const Z=z[oe];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(U.location,Z);break;case 3:t.vertexAttrib3fv(U.location,Z);break;case 4:t.vertexAttrib4fv(U.location,Z);break;default:t.vertexAttrib1fv(U.location,Z)}}}}R()}function S(){ee();for(const V in a){const W=a[V];for(const J in W){const Y=W[J];for(const D in Y)y(Y[D].object),delete Y[D];delete W[J]}delete a[V]}}function w(V){if(a[V.id]===void 0)return;const W=a[V.id];for(const J in W){const Y=W[J];for(const D in Y)y(Y[D].object),delete Y[D];delete W[J]}delete a[V.id]}function $(V){for(const W in a){const J=a[W];if(J[V.id]===void 0)continue;const Y=J[V.id];for(const D in Y)y(Y[D].object),delete Y[D];delete J[V.id]}}function ee(){F(),f=!0,u!==l&&(u=l,p(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:$,initAttributes:g,enableAttribute:x,disableUnusedAttributes:R}}function G1(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,f){t.drawArrays(o,u,f),n.update(f,o,1)}function l(u,f,h){if(h===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](o,u,f,h),n.update(f,o,h)}this.setMode=s,this.render=a,this.renderInstances=l}function V1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,x=s||e.has("OES_texture_float"),E=g&&x,R=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:R}}function W1(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ar,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const y=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||y===null||y.length===0||o&&!m)o?f(null):u();else{const v=o?0:i,g=v*4;let x=c.clippingState||null;l.value=x,x=f(y,d,g,p);for(let E=0;E!==g;++E)x[E]=n[E];c.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,y){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const c=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,x=p;g!==_;++g,x+=4)s.copy(h[g]).applyMatrix4(v,a),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function X1(t){let e=new WeakMap;function n(s,a){return a===Af?s.mapping=Oo:a===Rf&&(s.mapping=Fo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Af||a===Rf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new aM(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class j1 extends q_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const mo=4,um=[.125,.215,.35,.446,.526,.582],cr=20,yc=new j1,cm=new Je;let xc=null;const lr=(1+Math.sqrt(5))/2,eo=1/lr,fm=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,lr,eo),new k(0,lr,-eo),new k(eo,0,lr),new k(-eo,0,lr),new k(lr,eo,0),new k(-lr,eo,0)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){xc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Oo||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Bs,format:kn,colorSpace:Qn,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$1(o)),this._blurMaterial=Y1(o,e,n)}return r}_compileMaterial(e){const n=new hi(this._lodPlanes[0],e);this._renderer.compile(n,yc)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(cm),f.toneMapping=mi,f.autoClear=!1;const p=new Ss({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),y=new hi(new Vo,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(cm),_=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Fa(r,v*g,c>2?g:0,g,g),f.setRenderTarget(r),_&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Oo||e.mapping===Fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new hi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=fm[(r-1)%fm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new hi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*cr-1),_=o/y,m=isFinite(o)?1+Math.floor(f*_):cr;m>cr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);const c=[];let v=0;for(let b=0;b<cr;++b){const P=b/_,S=Math.exp(-P*P/2);c.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<c.length;b++)c[b]=c[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=y,d.mipInt.value=g-i;const x=this._sizeLods[r],E=3*x*(r>g-mo?r-g+mo:0),R=4*(this._cubeSize-x);Fa(n,E,R,3*x,2*x),l.setRenderTarget(n),l.render(h,yc)}}function $1(t){const e=[],n=[],i=[];let r=t;const o=t-mo+1+um.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-mo?l=um[s-t+mo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,y=6,_=3,m=2,c=1,v=new Float32Array(_*y*p),g=new Float32Array(m*y*p),x=new Float32Array(c*y*p);for(let R=0;R<p;R++){const b=R%3*2/3-1,P=R>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(S,_*y*R),g.set(d,m*y*R);const w=[R,R,R,R,R,R];x.set(w,c*y*R)}const E=new Ir;E.setAttribute("position",new Kn(v,_)),E.setAttribute("uv",new Kn(g,m)),E.setAttribute("faceIndex",new Kn(x,c)),e.push(E),r>mo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Y1(t,e,n){const i=new Float32Array(cr),r=new k(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function pm(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function mm(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Af||l===Rf,f=l===Oo||l===Fo;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new dm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new dm(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function K1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Z1(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const _=d.morphAttributes[y];for(let m=0,c=_.length;m<c;m++)e.remove(_[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const y in p){const _=p[y];for(let m=0,c=_.length;m<c;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,y=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,x=v.length;g<x;g+=3){const E=v[g+0],R=v[g+1],b=v[g+2];d.push(E,R,R,b,b,E)}}else{const v=y.array;_=y.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const E=g+0,R=g+1,b=g+2;d.push(E,R,R,b,b,E)}}const m=new(B_(d)?$_:j_)(d,1);m.version=_;const c=o.get(h);c&&e.remove(c),o.set(h,m)}function f(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Q1(t,e,n,i){const r=i.isWebGL2;let o;function s(d){o=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,p){t.drawElements(o,p,a,d*l),n.update(p,o,1)}function h(d,p,y){if(y===0)return;let _,m;if(r)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,p,a,d*l,y),n.update(p,o,y)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h}function J1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ew(t,e){return t[0]-e[0]}function tw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function nw(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Pt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let m=o.get(f);if(m===void 0||m.count!==_){let W=function(){F.dispose(),o.delete(f),f.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const g=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),E===!0&&(S=3);let w=f.attributes.position.count*S,$=1;w>e.maxTextureSize&&($=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const ee=new Float32Array(w*$*4*_),F=new V_(ee,w,$,_);F.type=Ni,F.needsUpdate=!0;const V=S*4;for(let J=0;J<_;J++){const Y=R[J],D=b[J],G=P[J],z=w*$*4*J;for(let oe=0;oe<Y.count;oe++){const U=oe*V;g===!0&&(s.fromBufferAttribute(Y,oe),ee[z+U+0]=s.x,ee[z+U+1]=s.y,ee[z+U+2]=s.z,ee[z+U+3]=0),x===!0&&(s.fromBufferAttribute(D,oe),ee[z+U+4]=s.x,ee[z+U+5]=s.y,ee[z+U+6]=s.z,ee[z+U+7]=0),E===!0&&(s.fromBufferAttribute(G,oe),ee[z+U+8]=s.x,ee[z+U+9]=s.y,ee[z+U+10]=s.z,ee[z+U+11]=G.itemSize===4?s.w:1)}}m={count:_,texture:F,size:new ke(w,$)},o.set(f,m),f.addEventListener("dispose",W)}let c=0;for(let g=0;g<d.length;g++)c+=d[g];const v=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=d===void 0?0:d.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let x=0;x<y;x++)_[x]=[x,0];i[f.id]=_}for(let x=0;x<y;x++){const E=_[x];E[0]=x,E[1]=d[x]}_.sort(tw);for(let x=0;x<8;x++)x<y&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ew);const m=f.morphAttributes.position,c=f.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const E=a[x],R=E[0],b=E[1];R!==Number.MAX_SAFE_INTEGER&&b?(m&&f.getAttribute("morphTarget"+x)!==m[R]&&f.setAttribute("morphTarget"+x,m[R]),c&&f.getAttribute("morphNormal"+x)!==c[R]&&f.setAttribute("morphNormal"+x,c[R]),r[x]=b,v+=b):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),c&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const g=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function iw(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);return r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const J_=new cn,e0=new V_,t0=new WE,n0=new K_,gm=[],vm=[],_m=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function Wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=gm[r];if(o===void 0&&(o=new Float32Array(r),gm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Et(n,i)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),Et(n,i)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;_m.set(i),t.uniformMatrix4fv(this.addr,!1,_m),Et(n,i)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||J_,r)}function xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||t0,r)}function Sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||n0,r)}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||e0,r)}function Mw(t){switch(t){case 5126:return rw;case 35664:return ow;case 35665:return sw;case 35666:return aw;case 35674:return lw;case 35675:return uw;case 35676:return cw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return vw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Ew}}function Tw(t,e){t.uniform1fv(this.addr,e)}function ww(t,e){const n=Wo(e,this.size,2);t.uniform2fv(this.addr,n)}function Aw(t,e){const n=Wo(e,this.size,3);t.uniform3fv(this.addr,n)}function Rw(t,e){const n=Wo(e,this.size,4);t.uniform4fv(this.addr,n)}function Cw(t,e){const n=Wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bw(t,e){const n=Wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Lw(t,e){t.uniform1iv(this.addr,e)}function Dw(t,e){t.uniform2iv(this.addr,e)}function Uw(t,e){t.uniform3iv(this.addr,e)}function Nw(t,e){t.uniform4iv(this.addr,e)}function Iw(t,e){t.uniform1uiv(this.addr,e)}function Ow(t,e){t.uniform2uiv(this.addr,e)}function Fw(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function zw(t,e,n){const i=this.cache,r=e.length,o=mu(n,r);St(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||J_,o[s])}function Bw(t,e,n){const i=this.cache,r=e.length,o=mu(n,r);St(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||t0,o[s])}function Hw(t,e,n){const i=this.cache,r=e.length,o=mu(n,r);St(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||n0,o[s])}function Gw(t,e,n){const i=this.cache,r=e.length,o=mu(n,r);St(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||e0,o[s])}function Vw(t){switch(t){case 5126:return Tw;case 35664:return ww;case 35665:return Aw;case 35666:return Rw;case 35674:return Cw;case 35675:return bw;case 35676:return Pw;case 5124:case 35670:return Lw;case 35667:case 35671:return Dw;case 35668:case 35672:return Uw;case 35669:case 35673:return Nw;case 5125:return Iw;case 36294:return Ow;case 36295:return Fw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Bw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Gw}}class Ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Mw(n.type)}}class Xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Vw(n.type)}}class jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function Sm(t,e){t.seq.push(e),t.map[e.id]=e}function $w(t,e,n){const i=t.name,r=i.length;for(Sc.lastIndex=0;;){const o=Sc.exec(i),s=Sc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Sm(n,u===void 0?new Ww(a,t,e):new Xw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new jw(a),Sm(n,h)),n=h}}}class Za{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);$w(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Yw=0;function qw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function Kw(t){switch(t){case Qn:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+qw(t.getShaderSource(e),s)}else return r}function Zw(t,e){const n=Kw(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Qw(t,e){let n;switch(e){case aE:n="Linear";break;case lE:n="Reinhard";break;case uE:n="OptimizedCineon";break;case cE:n="ACESFilmic";break;case fE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Jw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function eA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function us(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(t){return t.replace(nA,iA)}function iA(t,e){const n=Ue[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Uf(n)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(rA,oA)}function oA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Rm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function aA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Oo:case Fo:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function uA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case oE:e="ENVMAP_BLENDING_MIX";break;case sE:e="ENVMAP_BLENDING_ADD";break}return e}function cA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=sA(n),u=aA(n),f=lA(n),h=uA(n),d=cA(n),p=n.isWebGL2?"":Jw(n),y=eA(o),_=r.createProgram();let m,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(us).join(`
`),m.length>0&&(m+=`
`),c=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(us).join(`
`),c.length>0&&(c+=`
`)):(m=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),c=[p,Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==mi?Qw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,Zw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(us).join(`
`)),s=Uf(s),s=Tm(s,n),s=wm(s,n),a=Uf(a),a=Tm(a,n),a=wm(a,n),s=Am(s),a=Am(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=v+m+s,x=v+c+a,E=Em(r,r.VERTEX_SHADER,g),R=Em(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,E),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(E).trim(),$=r.getShaderInfoLog(R).trim();let ee=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,E,R);else{const V=Mm(r,E,"vertex"),W=Mm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+V+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||$==="")&&(F=!1);F&&(this.diagnostics={runnable:ee,programLog:S,vertexShader:{log:w,prefix:m},fragmentShader:{log:$,prefix:c}})}r.deleteShader(E),r.deleteShader(R);let b;this.getUniforms=function(){return b===void 0&&(b=new Za(r,_)),b};let P;return this.getAttributes=function(){return P===void 0&&(P=tA(r,_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let dA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new pA(e),n.set(e,i)),i}}class pA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function mA(t,e,n,i,r,o,s){const a=new W_,l=new hA,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,w,$,ee,F){const V=ee.fog,W=F.geometry,J=S.isMeshStandardMaterial?ee.environment:null,Y=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),D=Y&&Y.mapping===du?Y.image.height:null,G=y[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=z!==void 0?z.length:0;let U=0;W.morphAttributes.position!==void 0&&(U=1),W.morphAttributes.normal!==void 0&&(U=2),W.morphAttributes.color!==void 0&&(U=3);let Q,Z,fe,ue;if(G){const ht=jn[G];Q=ht.vertexShader,Z=ht.fragmentShader}else Q=S.vertexShader,Z=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const _e=t.getRenderTarget(),De=F.isInstancedMesh===!0,Me=!!S.map,ct=!!S.matcap,Oe=!!Y,I=!!S.aoMap,vt=!!S.lightMap,xe=!!S.bumpMap,be=!!S.normalMap,Se=!!S.displacementMap,qe=!!S.emissiveMap,Ne=!!S.metalnessMap,Re=!!S.roughnessMap,Xe=S.anisotropy>0,_t=S.clearcoat>0,Mt=S.iridescence>0,A=S.sheen>0,M=S.transmission>0,X=Xe&&!!S.anisotropyMap,re=_t&&!!S.clearcoatMap,ie=_t&&!!S.clearcoatNormalMap,C=_t&&!!S.clearcoatRoughnessMap,K=Mt&&!!S.iridescenceMap,ne=Mt&&!!S.iridescenceThicknessMap,H=A&&!!S.sheenColorMap,me=A&&!!S.sheenRoughnessMap,ye=!!S.specularMap,ve=!!S.specularColorMap,ge=!!S.specularIntensityMap,he=M&&!!S.transmissionMap,Te=M&&!!S.thicknessMap,ze=!!S.gradientMap,L=!!S.alphaMap,le=S.alphaTest>0,B=!!S.extensions,se=!!W.attributes.uv1,ce=!!W.attributes.uv2,We=!!W.attributes.uv3;return{isWebGL2:f,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:Z,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:De,instancingColor:De&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Qn,map:Me,matcap:ct,envMap:Oe,envMapMode:Oe&&Y.mapping,envMapCubeUVHeight:D,aoMap:I,lightMap:vt,bumpMap:xe,normalMap:be,displacementMap:d&&Se,emissiveMap:qe,normalMapObjectSpace:be&&S.normalMapType===wE,normalMapTangentSpace:be&&S.normalMapType===TE,metalnessMap:Ne,roughnessMap:Re,anisotropy:Xe,anisotropyMap:X,clearcoat:_t,clearcoatMap:re,clearcoatNormalMap:ie,clearcoatRoughnessMap:C,iridescence:Mt,iridescenceMap:K,iridescenceThicknessMap:ne,sheen:A,sheenColorMap:H,sheenRoughnessMap:me,specularMap:ye,specularColorMap:ve,specularIntensityMap:ge,transmission:M,transmissionMap:he,thicknessMap:Te,gradientMap:ze,opaque:S.transparent===!1&&S.blending===Eo,alphaMap:L,alphaTest:le,combine:S.combine,mapUv:Me&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:vt&&_(S.lightMap.channel),bumpMapUv:xe&&_(S.bumpMap.channel),normalMapUv:be&&_(S.normalMap.channel),displacementMapUv:Se&&_(S.displacementMap.channel),emissiveMapUv:qe&&_(S.emissiveMap.channel),metalnessMapUv:Ne&&_(S.metalnessMap.channel),roughnessMapUv:Re&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:H&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(S.sheenRoughnessMap.channel),specularMapUv:ye&&_(S.specularMap.channel),specularColorMapUv:ve&&_(S.specularColorMap.channel),specularIntensityMapUv:ge&&_(S.specularIntensityMap.channel),transmissionMapUv:he&&_(S.transmissionMap.channel),thicknessMapUv:Te&&_(S.thicknessMap.channel),alphaMapUv:L&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(be||Xe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:ce,vertexUv3s:We,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Me||L),fog:!!V,useFog:S.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:mi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ui,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:B&&S.extensions.derivatives===!0,extensionFragDepth:B&&S.extensions.fragDepth===!0,extensionDrawBuffers:B&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)w.push($),w.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(v(w,S),g(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function g(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),S.push(a.mask)}function x(S){const w=y[S.type];let $;if(w){const ee=jn[w];$=iM.clone(ee.uniforms)}else $=S.uniforms;return $}function E(S,w){let $;for(let ee=0,F=u.length;ee<F;ee++){const V=u[ee];if(V.cacheKey===w){$=V,++$.usedTimes;break}}return $===void 0&&($=new fA(t,w,S,o),u.push($)),$}function R(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:x,acquireProgram:E,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:P}}function gA(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function vA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,y,_,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:y,renderOrder:h.renderOrder,z:_,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=y,c.renderOrder=h.renderOrder,c.z=_,c.group=m),e++,c}function a(h,d,p,y,_,m){const c=s(h,d,p,y,_,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,d,p,y,_,m){const c=s(h,d,p,y,_,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||vA),i.length>1&&i.sort(d||Cm),r.length>1&&r.sort(d||Cm)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function _A(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new bm,t.set(i,[s])):r>=o.length?(s=new bm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function yA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Je};break;case"SpotLight":n={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function xA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let SA=0;function EA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MA(t,e){const n=new yA,i=xA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new k);const o=new k,s=new Ut,a=new Ut;function l(f,h){let d=0,p=0,y=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let _=0,m=0,c=0,v=0,g=0,x=0,E=0,R=0,b=0,P=0;f.sort(EA);const S=h===!0?Math.PI:1;for(let $=0,ee=f.length;$<ee;$++){const F=f[$],V=F.color,W=F.intensity,J=F.distance,Y=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=V.r*W*S,p+=V.g*W*S,y+=V.b*W*S;else if(F.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(F.sh.coefficients[D],W);else if(F.isDirectionalLight){const D=n.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*S),F.castShadow){const G=F.shadow,z=i.get(F);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,r.directionalShadow[_]=z,r.directionalShadowMap[_]=Y,r.directionalShadowMatrix[_]=F.shadow.matrix,x++}r.directional[_]=D,_++}else if(F.isSpotLight){const D=n.get(F);D.position.setFromMatrixPosition(F.matrixWorld),D.color.copy(V).multiplyScalar(W*S),D.distance=J,D.coneCos=Math.cos(F.angle),D.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),D.decay=F.decay,r.spot[c]=D;const G=F.shadow;if(F.map&&(r.spotLightMap[b]=F.map,b++,G.updateMatrices(F),F.castShadow&&P++),r.spotLightMatrix[c]=G.matrix,F.castShadow){const z=i.get(F);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,r.spotShadow[c]=z,r.spotShadowMap[c]=Y,R++}c++}else if(F.isRectAreaLight){const D=n.get(F);D.color.copy(V).multiplyScalar(W),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=D,v++}else if(F.isPointLight){const D=n.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*S),D.distance=F.distance,D.decay=F.decay,F.castShadow){const G=F.shadow,z=i.get(F);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,r.pointShadow[m]=z,r.pointShadowMap[m]=Y,r.pointShadowMatrix[m]=F.shadow.matrix,E++}r.point[m]=D,m++}else if(F.isHemisphereLight){const D=n.get(F);D.skyColor.copy(F.color).multiplyScalar(W*S),D.groundColor.copy(F.groundColor).multiplyScalar(W*S),r.hemi[g]=D,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=y;const w=r.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==c||w.rectAreaLength!==v||w.hemiLength!==g||w.numDirectionalShadows!==x||w.numPointShadows!==E||w.numSpotShadows!==R||w.numSpotMaps!==b)&&(r.directional.length=_,r.spot.length=c,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=R+b-P,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=P,w.directionalLength=_,w.pointLength=m,w.spotLength=c,w.rectAreaLength=v,w.hemiLength=g,w.numDirectionalShadows=x,w.numPointShadows=E,w.numSpotShadows=R,w.numSpotMaps=b,r.version=SA++)}function u(f,h){let d=0,p=0,y=0,_=0,m=0;const c=h.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const x=f[v];if(x.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(c),d++}else if(x.isSpotLight){const E=r.spot[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(c),y++}else if(x.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(c),a.identity(),s.copy(x.matrixWorld),s.premultiply(c),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(c),p++}else if(x.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function Pm(t,e){const n=new MA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function TA(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Pm(t,e),n.set(o,[l])):s>=a.length?(l=new Pm(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class wA extends pu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AA extends pu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bA(t,e,n){let i=new Z_;const r=new ke,o=new ke,s=new Pt,a=new wA({depthPacking:ME}),l=new AA,u={},f=n.maxTextureSize,h={[Yi]:Dt,[Dt]:Yi,[ui]:ui},d=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:RA,fragmentShader:CA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new Ir;y.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new hi(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let c=this.type;this.render=function(E,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Vi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ee=c!==si&&this.type===si,F=c===si&&this.type!==si;for(let V=0,W=E.length;V<W;V++){const J=E[V],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const D=Y.getFrameExtents();if(r.multiply(D),o.copy(Y.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/D.x),r.x=o.x*D.x,Y.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/D.y),r.y=o.y*D.y,Y.mapSize.y=o.y)),Y.map===null||ee===!0||F===!0){const z=this.type!==si?{minFilter:jt,magFilter:jt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ar(r.x,r.y,z),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const G=Y.getViewportCount();for(let z=0;z<G;z++){const oe=Y.getViewport(z);s.set(o.x*oe.x,o.y*oe.y,o.x*oe.z,o.y*oe.w),$.viewport(s),Y.updateMatrices(J,z),i=Y.getFrustum(),x(R,b,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===si&&v(Y,b),Y.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(P,S,w)};function v(E,R){const b=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ar(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,b,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,b,p,_,null)}function g(E,R,b,P){let S=null;const w=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=S.uuid,ee=R.uuid;let F=u[$];F===void 0&&(F={},u[$]=F);let V=F[ee];V===void 0&&(V=S.clone(),F[ee]=V),S=V}if(S.visible=R.visible,S.wireframe=R.wireframe,P===si?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=t.properties.get(S);$.light=b}return S}function x(E,R,b,P,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===si)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const ee=e.update(E),F=E.material;if(Array.isArray(F)){const V=ee.groups;for(let W=0,J=V.length;W<J;W++){const Y=V[W],D=F[Y.materialIndex];if(D&&D.visible){const G=g(E,D,P,S);t.renderBufferDirect(b,null,ee,G,E,Y)}}}else if(F.visible){const V=g(E,F,P,S);t.renderBufferDirect(b,null,ee,V,E,null)}}const $=E.children;for(let ee=0,F=$.length;ee<F;ee++)x($[ee],R,b,P,S)}}function PA(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const le=new Pt;let B=null;const se=new Pt(0,0,0,0);return{setMask:function(ce){B!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),B=ce)},setLocked:function(ce){L=ce},setClear:function(ce,We,at,ht,Qi){Qi===!0&&(ce*=ht,We*=ht,at*=ht),le.set(ce,We,at,ht),se.equals(le)===!1&&(t.clearColor(ce,We,at,ht),se.copy(le))},reset:function(){L=!1,B=null,se.set(-1,0,0,0)}}}function o(){let L=!1,le=null,B=null,se=null;return{setTest:function(ce){ce?_e(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ce){le!==ce&&!L&&(t.depthMask(ce),le=ce)},setFunc:function(ce){if(B!==ce){switch(ce){case QS:t.depthFunc(t.NEVER);break;case JS:t.depthFunc(t.ALWAYS);break;case eE:t.depthFunc(t.LESS);break;case wf:t.depthFunc(t.LEQUAL);break;case tE:t.depthFunc(t.EQUAL);break;case nE:t.depthFunc(t.GEQUAL);break;case iE:t.depthFunc(t.GREATER);break;case rE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=ce}},setLocked:function(ce){L=ce},setClear:function(ce){se!==ce&&(t.clearDepth(ce),se=ce)},reset:function(){L=!1,le=null,B=null,se=null}}}function s(){let L=!1,le=null,B=null,se=null,ce=null,We=null,at=null,ht=null,Qi=null;return{setTest:function(lt){L||(lt?_e(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(lt){le!==lt&&!L&&(t.stencilMask(lt),le=lt)},setFunc:function(lt,Vn,Gt){(B!==lt||se!==Vn||ce!==Gt)&&(t.stencilFunc(lt,Vn,Gt),B=lt,se=Vn,ce=Gt)},setOp:function(lt,Vn,Gt){(We!==lt||at!==Vn||ht!==Gt)&&(t.stencilOp(lt,Vn,Gt),We=lt,at=Vn,ht=Gt)},setLocked:function(lt){L=lt},setClear:function(lt){Qi!==lt&&(t.clearStencil(lt),Qi=lt)},reset:function(){L=!1,le=null,B=null,se=null,ce=null,We=null,at=null,ht=null,Qi=null}}}const a=new r,l=new o,u=new s,f=new WeakMap,h=new WeakMap;let d={},p={},y=new WeakMap,_=[],m=null,c=!1,v=null,g=null,x=null,E=null,R=null,b=null,P=null,S=!1,w=null,$=null,ee=null,F=null,V=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Y=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(D)[1]),J=Y>=1):D.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),J=Y>=2);let G=null,z={};const oe=t.getParameter(t.SCISSOR_BOX),U=t.getParameter(t.VIEWPORT),Q=new Pt().fromArray(oe),Z=new Pt().fromArray(U);function fe(L,le,B,se){const ce=new Uint8Array(4),We=t.createTexture();t.bindTexture(L,We),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<B;at++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(le+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return We}const ue={};ue[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_e(t.DEPTH_TEST),l.setFunc(wf),Se(!1),qe(mp),_e(t.CULL_FACE),xe(Vi);function _e(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function De(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Me(L,le){return p[L]!==le?(t.bindFramebuffer(L,le),p[L]=le,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function ct(L,le){let B=_,se=!1;if(L)if(B=y.get(le),B===void 0&&(B=[],y.set(le,B)),L.isWebGLMultipleRenderTargets){const ce=L.texture;if(B.length!==ce.length||B[0]!==t.COLOR_ATTACHMENT0){for(let We=0,at=ce.length;We<at;We++)B[We]=t.COLOR_ATTACHMENT0+We;B.length=ce.length,se=!0}}else B[0]!==t.COLOR_ATTACHMENT0&&(B[0]=t.COLOR_ATTACHMENT0,se=!0);else B[0]!==t.BACK&&(B[0]=t.BACK,se=!0);se&&(n.isWebGL2?t.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Oe(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const I={[to]:t.FUNC_ADD,[HS]:t.FUNC_SUBTRACT,[GS]:t.FUNC_REVERSE_SUBTRACT};if(i)I[yp]=t.MIN,I[xp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(I[yp]=L.MIN_EXT,I[xp]=L.MAX_EXT)}const vt={[VS]:t.ZERO,[WS]:t.ONE,[XS]:t.SRC_COLOR,[C_]:t.SRC_ALPHA,[ZS]:t.SRC_ALPHA_SATURATE,[qS]:t.DST_COLOR,[$S]:t.DST_ALPHA,[jS]:t.ONE_MINUS_SRC_COLOR,[b_]:t.ONE_MINUS_SRC_ALPHA,[KS]:t.ONE_MINUS_DST_COLOR,[YS]:t.ONE_MINUS_DST_ALPHA};function xe(L,le,B,se,ce,We,at,ht){if(L===Vi){c===!0&&(De(t.BLEND),c=!1);return}if(c===!1&&(_e(t.BLEND),c=!0),L!==BS){if(L!==v||ht!==S){if((g!==to||R!==to)&&(t.blendEquation(t.FUNC_ADD),g=to,R=to),ht)switch(L){case Eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gp:t.blendFunc(t.ONE,t.ONE);break;case vp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _p:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,E=null,b=null,P=null,v=L,S=ht}return}ce=ce||le,We=We||B,at=at||se,(le!==g||ce!==R)&&(t.blendEquationSeparate(I[le],I[ce]),g=le,R=ce),(B!==x||se!==E||We!==b||at!==P)&&(t.blendFuncSeparate(vt[B],vt[se],vt[We],vt[at]),x=B,E=se,b=We,P=at),v=L,S=!1}function be(L,le){L.side===ui?De(t.CULL_FACE):_e(t.CULL_FACE);let B=L.side===Dt;le&&(B=!B),Se(B),L.blending===Eo&&L.transparent===!1?xe(Vi):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const se=L.stencilWrite;u.setTest(se),se&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Se(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function qe(L){L!==FS?(_e(t.CULL_FACE),L!==$&&(L===mp?t.cullFace(t.BACK):L===kS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),$=L}function Ne(L){L!==ee&&(J&&t.lineWidth(L),ee=L)}function Re(L,le,B){L?(_e(t.POLYGON_OFFSET_FILL),(F!==le||V!==B)&&(t.polygonOffset(le,B),F=le,V=B)):De(t.POLYGON_OFFSET_FILL)}function Xe(L){L?_e(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function _t(L){L===void 0&&(L=t.TEXTURE0+W-1),G!==L&&(t.activeTexture(L),G=L)}function Mt(L,le,B){B===void 0&&(G===null?B=t.TEXTURE0+W-1:B=G);let se=z[B];se===void 0&&(se={type:void 0,texture:void 0},z[B]=se),(se.type!==L||se.texture!==le)&&(G!==B&&(t.activeTexture(B),G=B),t.bindTexture(L,le||ue[L]),se.type=L,se.texture=le)}function A(){const L=z[G];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(L){Q.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function ge(L){Z.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function he(L,le){let B=h.get(le);B===void 0&&(B=new WeakMap,h.set(le,B));let se=B.get(L);se===void 0&&(se=t.getUniformBlockIndex(le,L.name),B.set(L,se))}function Te(L,le){const se=h.get(le).get(L);f.get(le)!==se&&(t.uniformBlockBinding(le,se,L.__bindingPointIndex),f.set(le,se))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},G=null,z={},p={},y=new WeakMap,_=[],m=null,c=!1,v=null,g=null,x=null,E=null,R=null,b=null,P=null,S=!1,w=null,$=null,ee=null,F=null,V=null,Q.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:_e,disable:De,bindFramebuffer:Me,drawBuffers:ct,useProgram:Oe,setBlending:xe,setMaterial:be,setFlipSided:Se,setCullFace:qe,setLineWidth:Ne,setPolygonOffset:Re,setScissorTest:Xe,activeTexture:_t,bindTexture:Mt,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:me,texImage3D:ye,updateUBOMapping:he,uniformBlockBinding:Te,texStorage2D:ne,texStorage3D:H,texSubImage2D:re,texSubImage3D:ie,compressedTexSubImage2D:C,compressedTexSubImage3D:K,scissor:ve,viewport:ge,reset:ze}}function LA(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let _;const m=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return c?new OffscreenCanvas(A,M):Ml("canvas")}function g(A,M,X,re){let ie=1;if((A.width>re||A.height>re)&&(ie=re/Math.max(A.width,A.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const C=M?Df:Math.floor,K=C(ie*A.width),ne=C(ie*A.height);_===void 0&&(_=v(K,ne));const H=X?v(K,ne):_;return H.width=K,H.height=ne,H.getContext("2d").drawImage(A,0,0,K,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+K+"x"+ne+")."),H}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return $p(A.width)&&$p(A.height)}function E(A){return a?!1:A.wrapS!==Fn||A.wrapT!==Fn||A.minFilter!==jt&&A.minFilter!==xn}function R(A,M){return A.generateMipmaps&&M&&A.minFilter!==jt&&A.minFilter!==xn}function b(A){t.generateMipmap(A)}function P(A,M,X,re,ie=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let C=M;return M===t.RED&&(X===t.FLOAT&&(C=t.R32F),X===t.HALF_FLOAT&&(C=t.R16F),X===t.UNSIGNED_BYTE&&(C=t.R8)),M===t.RG&&(X===t.FLOAT&&(C=t.RG32F),X===t.HALF_FLOAT&&(C=t.RG16F),X===t.UNSIGNED_BYTE&&(C=t.RG8)),M===t.RGBA&&(X===t.FLOAT&&(C=t.RGBA32F),X===t.HALF_FLOAT&&(C=t.RGBA16F),X===t.UNSIGNED_BYTE&&(C=re===Le&&ie===!1?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(C=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(C=t.RGB5_A1)),(C===t.R16F||C===t.R32F||C===t.RG16F||C===t.RG32F||C===t.RGBA16F||C===t.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function S(A,M,X){return R(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){return A===jt||A===Sp||A===$u?t.NEAREST:t.LINEAR}function $(A){const M=A.target;M.removeEventListener("dispose",$),F(M),M.isVideoTexture&&y.delete(M)}function ee(A){const M=A.target;M.removeEventListener("dispose",ee),W(M)}function F(A){const M=i.get(A);if(M.__webglInit===void 0)return;const X=A.source,re=m.get(X);if(re){const ie=re[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&V(A),Object.keys(re).length===0&&m.delete(X)}i.remove(A)}function V(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const X=A.source,re=m.get(X);delete re[M.__cacheKey],s.memory.textures--}function W(A){const M=A.texture,X=i.get(A),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(X.__webglFramebuffer[ie]),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ie=0;ie<X.__webglColorRenderbuffer.length;ie++)X.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[ie]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,C=M.length;ie<C;ie++){const K=i.get(M[ie]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),s.memory.textures--),i.remove(M[ie])}i.remove(M),i.remove(A)}let J=0;function Y(){J=0}function D(){const A=J;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),J+=1,A}function G(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function z(A,M){const X=i.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(X,A,M);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function oe(A,M){const X=i.get(A);if(A.version>0&&X.__version!==A.version){Me(X,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function U(A,M){const X=i.get(A);if(A.version>0&&X.__version!==A.version){Me(X,A,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function Q(A,M){const X=i.get(A);if(A.version>0&&X.__version!==A.version){ct(X,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const Z={[Cf]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[bf]:t.MIRRORED_REPEAT},fe={[jt]:t.NEAREST,[Sp]:t.NEAREST_MIPMAP_NEAREST,[$u]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[dE]:t.LINEAR_MIPMAP_NEAREST,[zs]:t.LINEAR_MIPMAP_LINEAR},ue={[RE]:t.NEVER,[NE]:t.ALWAYS,[CE]:t.LESS,[PE]:t.LEQUAL,[bE]:t.EQUAL,[UE]:t.GEQUAL,[LE]:t.GREATER,[DE]:t.NOTEQUAL};function _e(A,M,X){if(X?(t.texParameteri(A,t.TEXTURE_WRAP_S,Z[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,fe[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,fe[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Fn||M.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==jt&&M.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===jt||M.minFilter!==$u&&M.minFilter!==zs||M.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Bs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function De(A,M){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",$));const re=M.source;let ie=m.get(re);ie===void 0&&(ie={},m.set(re,ie));const C=G(M);if(C!==A.__cacheKey){ie[C]===void 0&&(ie[C]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,X=!0),ie[C].usedTimes++;const K=ie[A.__cacheKey];K!==void 0&&(ie[A.__cacheKey].usedTimes--,K.usedTimes===0&&V(M)),A.__cacheKey=C,A.__webglTexture=ie[C].texture}return X}function Me(A,M,X){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const ie=De(A,M),C=M.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+X);const K=i.get(C);if(C.version!==K.__version||ie===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ne=E(M)&&x(M.image)===!1;let H=g(M.image,ne,!1,f);H=Mt(M,H);const me=x(H)||a,ye=o.convert(M.format,M.colorSpace);let ve=o.convert(M.type),ge=P(M.internalFormat,ye,ve,M.colorSpace);_e(re,M,me);let he;const Te=M.mipmaps,ze=a&&M.isVideoTexture!==!0,L=K.__version===void 0||ie===!0,le=S(M,H,me);if(M.isDepthTexture)ge=t.DEPTH_COMPONENT,a?M.type===Ni?ge=t.DEPTH_COMPONENT32F:M.type===Ui?ge=t.DEPTH_COMPONENT24:M.type===gr?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:M.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===vr&&ge===t.DEPTH_COMPONENT&&M.type!==zd&&M.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ui,ve=o.convert(M.type)),M.format===ko&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,M.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=gr,ve=o.convert(M.type))),L&&(ze?n.texStorage2D(t.TEXTURE_2D,1,ge,H.width,H.height):n.texImage2D(t.TEXTURE_2D,0,ge,H.width,H.height,0,ye,ve,null));else if(M.isDataTexture)if(Te.length>0&&me){ze&&L&&n.texStorage2D(t.TEXTURE_2D,le,ge,Te[0].width,Te[0].height);for(let B=0,se=Te.length;B<se;B++)he=Te[B],ze?n.texSubImage2D(t.TEXTURE_2D,B,0,0,he.width,he.height,ye,ve,he.data):n.texImage2D(t.TEXTURE_2D,B,ge,he.width,he.height,0,ye,ve,he.data);M.generateMipmaps=!1}else ze?(L&&n.texStorage2D(t.TEXTURE_2D,le,ge,H.width,H.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,H.width,H.height,ye,ve,H.data)):n.texImage2D(t.TEXTURE_2D,0,ge,H.width,H.height,0,ye,ve,H.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,Te[0].width,Te[0].height,H.depth);for(let B=0,se=Te.length;B<se;B++)he=Te[B],M.format!==kn?ye!==null?ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,he.width,he.height,H.depth,ye,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,ge,he.width,he.height,H.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,he.width,he.height,H.depth,ye,ve,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,ge,he.width,he.height,H.depth,0,ye,ve,he.data)}else{ze&&L&&n.texStorage2D(t.TEXTURE_2D,le,ge,Te[0].width,Te[0].height);for(let B=0,se=Te.length;B<se;B++)he=Te[B],M.format!==kn?ye!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,he.width,he.height,ye,he.data):n.compressedTexImage2D(t.TEXTURE_2D,B,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage2D(t.TEXTURE_2D,B,0,0,he.width,he.height,ye,ve,he.data):n.texImage2D(t.TEXTURE_2D,B,ge,he.width,he.height,0,ye,ve,he.data)}else if(M.isDataArrayTexture)ze?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,H.width,H.height,H.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ye,ve,H.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,H.width,H.height,H.depth,0,ye,ve,H.data);else if(M.isData3DTexture)ze?(L&&n.texStorage3D(t.TEXTURE_3D,le,ge,H.width,H.height,H.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ye,ve,H.data)):n.texImage3D(t.TEXTURE_3D,0,ge,H.width,H.height,H.depth,0,ye,ve,H.data);else if(M.isFramebufferTexture){if(L)if(ze)n.texStorage2D(t.TEXTURE_2D,le,ge,H.width,H.height);else{let B=H.width,se=H.height;for(let ce=0;ce<le;ce++)n.texImage2D(t.TEXTURE_2D,ce,ge,B,se,0,ye,ve,null),B>>=1,se>>=1}}else if(Te.length>0&&me){ze&&L&&n.texStorage2D(t.TEXTURE_2D,le,ge,Te[0].width,Te[0].height);for(let B=0,se=Te.length;B<se;B++)he=Te[B],ze?n.texSubImage2D(t.TEXTURE_2D,B,0,0,ye,ve,he):n.texImage2D(t.TEXTURE_2D,B,ge,ye,ve,he);M.generateMipmaps=!1}else ze?(L&&n.texStorage2D(t.TEXTURE_2D,le,ge,H.width,H.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,ve,H)):n.texImage2D(t.TEXTURE_2D,0,ge,ye,ve,H);R(M,me)&&b(re),K.__version=C.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ct(A,M,X){if(M.image.length!==6)return;const re=De(A,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+X);const C=i.get(ie);if(ie.version!==C.__version||re===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const K=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,H=[];for(let B=0;B<6;B++)!K&&!ne?H[B]=g(M.image[B],!1,!0,u):H[B]=ne?M.image[B].image:M.image[B],H[B]=Mt(M,H[B]);const me=H[0],ye=x(me)||a,ve=o.convert(M.format,M.colorSpace),ge=o.convert(M.type),he=P(M.internalFormat,ve,ge,M.colorSpace),Te=a&&M.isVideoTexture!==!0,ze=C.__version===void 0||re===!0;let L=S(M,me,ye);_e(t.TEXTURE_CUBE_MAP,M,ye);let le;if(K){Te&&ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,he,me.width,me.height);for(let B=0;B<6;B++){le=H[B].mipmaps;for(let se=0;se<le.length;se++){const ce=le[se];M.format!==kn?ve!==null?Te?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,ce.width,ce.height,ve,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,he,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,ce.width,ce.height,ve,ge,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,he,ce.width,ce.height,0,ve,ge,ce.data)}}}else{le=M.mipmaps,Te&&ze&&(le.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,he,H[0].width,H[0].height));for(let B=0;B<6;B++)if(ne){Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,H[B].width,H[B].height,ve,ge,H[B].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,he,H[B].width,H[B].height,0,ve,ge,H[B].data);for(let se=0;se<le.length;se++){const We=le[se].image[B].image;Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,We.width,We.height,ve,ge,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,he,We.width,We.height,0,ve,ge,We.data)}}else{Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ve,ge,H[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,he,ve,ge,H[B]);for(let se=0;se<le.length;se++){const ce=le[se];Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,ve,ge,ce.image[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,he,ve,ge,ce.image[B])}}}R(M,ye)&&b(t.TEXTURE_CUBE_MAP),C.__version=ie.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Oe(A,M,X,re,ie){const C=o.convert(X.format,X.colorSpace),K=o.convert(X.type),ne=P(X.internalFormat,C,K,X.colorSpace);i.get(M).__hasExternalTextures||(ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,ne,M.width,M.height,M.depth,0,C,K,null):n.texImage2D(ie,0,ne,M.width,M.height,0,C,K,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),Xe(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ie,i.get(X).__webglTexture,0,Re(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ie,i.get(X).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(A,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let re=t.DEPTH_COMPONENT16;if(X||Xe(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ni?re=t.DEPTH_COMPONENT32F:ie.type===Ui&&(re=t.DEPTH_COMPONENT24));const C=Re(M);Xe(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,C,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=Re(M);X&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):Xe(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<re.length;ie++){const C=re[ie],K=o.convert(C.format,C.colorSpace),ne=o.convert(C.type),H=P(C.internalFormat,K,ne,C.colorSpace),me=Re(M);X&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,H,M.width,M.height):Xe(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,H,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,H,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function vt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,ie=Re(M);if(M.depthTexture.format===vr)Xe(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===ko)Xe(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(A){const M=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");vt(M.__webglFramebuffer,A)}else if(X){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),I(M.__webglDepthbuffer[re],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),I(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,M,X){const re=i.get(A);M!==void 0&&Oe(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),X!==void 0&&xe(A)}function Se(A){const M=A.texture,X=i.get(A),re=i.get(M);A.addEventListener("dispose",ee),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,s.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,C=A.isWebGLMultipleRenderTargets===!0,K=x(A)||a;if(ie){X.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)X.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(X.__webglFramebuffer=t.createFramebuffer(),C)if(r.drawBuffers){const ne=A.texture;for(let H=0,me=ne.length;H<me;H++){const ye=i.get(ne[H]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Xe(A)===!1){const ne=C?M:[M];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let H=0;H<ne.length;H++){const me=ne[H];X.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[H]);const ye=o.convert(me.format,me.colorSpace),ve=o.convert(me.type),ge=P(me.internalFormat,ye,ve,me.colorSpace,A.isXRRenderTarget===!0),he=Re(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,X.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),I(X.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),_e(t.TEXTURE_CUBE_MAP,M,K);for(let ne=0;ne<6;ne++)Oe(X.__webglFramebuffer[ne],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne);R(M,K)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(C){const ne=A.texture;for(let H=0,me=ne.length;H<me;H++){const ye=ne[H],ve=i.get(ye);n.bindTexture(t.TEXTURE_2D,ve.__webglTexture),_e(t.TEXTURE_2D,ye,K),Oe(X.__webglFramebuffer,A,ye,t.COLOR_ATTACHMENT0+H,t.TEXTURE_2D),R(ye,K)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ne=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ne,re.__webglTexture),_e(ne,M,K),Oe(X.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ne),R(M,K)&&b(ne),n.unbindTexture()}A.depthBuffer&&xe(A)}function qe(A){const M=x(A)||a,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ie=X.length;re<ie;re++){const C=X[re];if(R(C,M)){const K=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ne=i.get(C).__webglTexture;n.bindTexture(K,ne),b(K),n.unbindTexture()}}}function Ne(A){if(a&&A.samples>0&&Xe(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,re=A.height;let ie=t.COLOR_BUFFER_BIT;const C=[],K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=i.get(A),H=A.isWebGLMultipleRenderTargets===!0;if(H)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let me=0;me<M.length;me++){C.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&C.push(K);const ye=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(ye===!1&&(A.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),H&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ne.__webglColorRenderbuffer[me]),ye===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[K]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[K])),H){const ve=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,X,re,0,0,X,re,ie,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,C)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ne.__webglColorRenderbuffer[me]);const ye=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Re(A){return Math.min(h,A.samples)}function Xe(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(A){const M=s.render.frame;y.get(A)!==M&&(y.set(A,M),A.update())}function Mt(A,M){const X=A.colorSpace,re=A.format,ie=A.type;return A.isCompressedTexture===!0||A.format===Pf||X!==Qn&&X!==yr&&(X===Le?a===!1?e.has("EXT_sRGB")===!0&&re===kn?(A.format=Pf,A.minFilter=xn,A.generateMipmaps=!1):M=H_.sRGBToLinear(M):(re!==kn||ie!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}this.allocateTextureUnit=D,this.resetTextureUnits=Y,this.setTexture2D=z,this.setTexture2DArray=oe,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=be,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Xe}function DA(t,e,n){const i=n.isWebGL2;function r(o,s=yr){let a;if(o===Wi)return t.UNSIGNED_BYTE;if(o===U_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===N_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===hE)return t.BYTE;if(o===pE)return t.SHORT;if(o===zd)return t.UNSIGNED_SHORT;if(o===D_)return t.INT;if(o===Ui)return t.UNSIGNED_INT;if(o===Ni)return t.FLOAT;if(o===Bs)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===mE)return t.ALPHA;if(o===kn)return t.RGBA;if(o===gE)return t.LUMINANCE;if(o===vE)return t.LUMINANCE_ALPHA;if(o===vr)return t.DEPTH_COMPONENT;if(o===ko)return t.DEPTH_STENCIL;if(o===Pf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===_E)return t.RED;if(o===I_)return t.RED_INTEGER;if(o===yE)return t.RG;if(o===O_)return t.RG_INTEGER;if(o===F_)return t.RGBA_INTEGER;if(o===Yu||o===qu||o===Ku||o===Zu)if(s===Le)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===qu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ku)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Zu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ep||o===Mp||o===Tp||o===wp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Ep)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Mp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Tp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===wp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Ap||o===Rp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Ap)return s===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Rp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Cp||o===bp||o===Pp||o===Lp||o===Dp||o===Up||o===Np||o===Ip||o===Op||o===Fp||o===kp||o===zp||o===Bp||o===Hp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Cp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===bp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Pp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Lp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Dp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Up)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Np)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ip)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Op)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Fp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===kp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===zp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Bp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Hp)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Qu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Qu)return s===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===SE||o===Gp||o===Vp||o===Wp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Qu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Gp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Vp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Wp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===gr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class UA extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ka extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NA={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),c=this._getHandJoint(u,_);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,y=.005;u.inputState.pinching&&d>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class IA extends cn{constructor(e,n,i,r,o,s,a,l,u,f){if(f=f!==void 0?f:vr,f!==vr&&f!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===vr&&(i=Ui),i===void 0&&f===ko&&(i=gr),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class OA extends Nr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,y=null;const _=n.getContextAttributes();let m=null,c=null;const v=[],g=[];let x=null;const E=new Sn;E.layers.enable(1),E.viewport=new Pt;const R=new Sn;R.layers.enable(2),R.viewport=new Pt;const b=[E,R],P=new UA;P.layers.enable(1),P.layers.enable(2);let S=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(U){x=U},this.getController=function(U){let Q=v[U];return Q===void 0&&(Q=new Ec,v[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=v[U];return Q===void 0&&(Q=new Ec,v[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=v[U];return Q===void 0&&(Q=new Ec,v[U]=Q),Q.getHandSpace()};function $(U){const Q=g.indexOf(U.inputSource);if(Q===-1)return;const Z=v[Q];Z!==void 0&&(Z.update(U.inputSource,U.frame,u||s),Z.dispatchEvent({type:U.type,data:U.inputSource}))}function ee(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",F);for(let U=0;U<v.length;U++){const Q=g[U];Q!==null&&(g[U]=null,v[U].disconnect(Q))}S=null,w=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,c=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),c=new Ar(p.framebufferWidth,p.framebufferHeight,{format:kn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,Z=null,fe=null;_.depth&&(fe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=_.stencil?ko:vr,Z=_.stencil?gr:Ui);const ue={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),c=new Ar(d.textureWidth,d.textureHeight,{format:kn,type:Wi,depthTexture:new IA(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const _e=e.properties.get(c);_e.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(U){for(let Q=0;Q<U.removed.length;Q++){const Z=U.removed[Q],fe=g.indexOf(Z);fe>=0&&(g[fe]=null,v[fe].disconnect(Z))}for(let Q=0;Q<U.added.length;Q++){const Z=U.added[Q];let fe=g.indexOf(Z);if(fe===-1){for(let _e=0;_e<v.length;_e++)if(_e>=g.length){g.push(Z),fe=_e;break}else if(g[_e]===null){g[_e]=Z,fe=_e;break}if(fe===-1)break}const ue=v[fe];ue&&ue.connect(Z)}}const V=new k,W=new k;function J(U,Q,Z){V.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(Z.matrixWorld);const fe=V.distanceTo(W),ue=Q.projectionMatrix.elements,_e=Z.projectionMatrix.elements,De=ue[14]/(ue[10]-1),Me=ue[14]/(ue[10]+1),ct=(ue[9]+1)/ue[5],Oe=(ue[9]-1)/ue[5],I=(ue[8]-1)/ue[0],vt=(_e[8]+1)/_e[0],xe=De*I,be=De*vt,Se=fe/(-I+vt),qe=Se*-I;Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(qe),U.translateZ(Se),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Ne=De+Se,Re=Me+Se,Xe=xe-qe,_t=be+(fe-qe),Mt=ct*Me/Re*Ne,A=Oe*Me/Re*Ne;U.projectionMatrix.makePerspective(Xe,_t,Mt,A,Ne,Re),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Y(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCameraXR=function(U){if(r===null)return U;x&&(U=x),P.near=R.near=E.near=U.near,P.far=R.far=E.far=U.far,(S!==P.near||w!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),S=P.near,w=P.far);const Q=U.parent,Z=P.cameras;Y(P,Q);for(let fe=0;fe<Z.length;fe++)Y(Z[fe],Q);return Z.length===2?J(P,E,R):P.projectionMatrix.copy(E.projectionMatrix),x&&D(P,Q),P};function D(U,Q){const Z=x;Q===null?Z.matrix.copy(U.matrixWorld):(Z.matrix.copy(Q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(U.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const fe=Z.children;for(let ue=0,_e=fe.length;ue<_e;ue++)fe[ue].updateMatrixWorld(!0);Z.projectionMatrix.copy(U.projectionMatrix),Z.projectionMatrixInverse.copy(U.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Lf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let G=null;function z(U,Q){if(f=Q.getViewerPose(u||s),y=Q,f!==null){const Z=f.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let fe=!1;Z.length!==P.cameras.length&&(P.cameras.length=0,fe=!0);for(let ue=0;ue<Z.length;ue++){const _e=Z[ue];let De=null;if(p!==null)De=p.getViewport(_e);else{const ct=h.getViewSubImage(d,_e);De=ct.viewport,ue===0&&(e.setRenderTargetTextures(c,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(c))}let Me=b[ue];Me===void 0&&(Me=new Sn,Me.layers.enable(ue),Me.viewport=new Pt,b[ue]=Me),Me.matrix.fromArray(_e.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(_e.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(De.x,De.y,De.width,De.height),ue===0&&(P.matrix.copy(Me.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),fe===!0&&P.cameras.push(Me)}}for(let Z=0;Z<v.length;Z++){const fe=g[Z],ue=v[Z];fe!==null&&ue!==void 0&&ue.update(fe,Q,u||s)}G&&G(U,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}const oe=new Q_;oe.setAnimationLoop(z),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}}function FA(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Y_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,g,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(m,c):c.isMeshToonMaterial?(o(m,c),h(m,c)):c.isMeshPhongMaterial?(o(m,c),f(m,c)):c.isMeshStandardMaterial?(o(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,x)):c.isMeshMatcapMaterial?(o(m,c),y(m,c)):c.isMeshDepthMaterial?o(m,c):c.isMeshDistanceMaterial?(o(m,c),_(m,c)):c.isMeshNormalMaterial?o(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===Dt&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===Dt&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Dt&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,c){c.matcap&&(m.matcap.value=c.matcap)}function _(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kA(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function u(v,g){let x=r[v.id];x===void 0&&(y(v),x=f(v),r[v.id]=x,v.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(v,E);const R=e.render.frame;o[v.id]!==R&&(d(v),o[v.id]=R)}function f(v){const g=h();v.__bindingPointIndex=g;const x=t.createBuffer(),E=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,E,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],x=v.uniforms,E=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,b=x.length;R<b;R++){const P=x[R];if(p(P,R,E)===!0){const S=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let ee=0;ee<w.length;ee++){const F=w[ee],V=_(F);typeof F=="number"?(P.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,S+$,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=F.elements[0],P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=F.elements[0],P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=F.elements[0]):(F.toArray(P.__data,$),$+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x){const E=v.value;if(x[g]===void 0){if(typeof E=="number")x[g]=E;else{const R=Array.isArray(E)?E:[E],b=[];for(let P=0;P<R.length;P++)b.push(R[P].clone());x[g]=b}return!0}else if(typeof E=="number"){if(x[g]!==E)return x[g]=E,!0}else{const R=Array.isArray(x[g])?x[g]:[x[g]],b=Array.isArray(E)?E:[E];for(let P=0;P<R.length;P++){const S=R[P];if(S.equals(b[P])===!1)return S.copy(b[P]),!0}}return!1}function y(v){const g=v.uniforms;let x=0;const E=16;let R=0;for(let b=0,P=g.length;b<P;b++){const S=g[b],w={boundary:0,storage:0},$=Array.isArray(S.value)?S.value:[S.value];for(let ee=0,F=$.length;ee<F;ee++){const V=$[ee],W=_(V);w.boundary+=W.boundary,w.storage+=W.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,b>0){R=x%E;const ee=E-R;R!==0&&ee-w.boundary<0&&(x+=E-R,S.__offset=x)}x+=w.storage}return R=x%E,R>0&&(x+=E-R),v.__size=x,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=s.indexOf(g.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}function zA(){const t=Ml("canvas");return t.style.display="block",t}class i0{constructor(e={}){const{canvas:n=zA(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this.useLegacyLights=!0,this.toneMapping=mi,this.toneMappingExposure=1;const g=this;let x=!1,E=0,R=0,b=null,P=-1,S=null;const w=new Pt,$=new Pt;let ee=null;const F=new Je(0);let V=0,W=n.width,J=n.height,Y=1,D=null,G=null;const z=new Pt(0,0,W,J),oe=new Pt(0,0,W,J);let U=!1;const Q=new Z_;let Z=!1,fe=!1,ue=null;const _e=new Ut,De=new ke,Me=new k,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return b===null?Y:1}let I=i;function vt(T,O){for(let j=0;j<T.length;j++){const N=T[j],q=n.getContext(N,O);if(q!==null)return q}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kd}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",B,!1),n.addEventListener("webglcontextcreationerror",se,!1),I===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),I=vt(O,T),I===null)throw vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,be,Se,qe,Ne,Re,Xe,_t,Mt,A,M,X,re,ie,C,K,ne,H,me,ye,ve,ge,he,Te;function ze(){xe=new K1(I),be=new V1(I,xe,e),xe.init(be),ge=new DA(I,xe,be),Se=new PA(I,xe,be),qe=new J1(I),Ne=new gA,Re=new LA(I,xe,Se,Ne,be,ge,qe),Xe=new X1(g),_t=new q1(g),Mt=new cM(I,be),he=new H1(I,xe,Mt,be),A=new Z1(I,Mt,qe,he),M=new iw(I,A,Mt,qe),me=new nw(I,be,Re),K=new W1(Ne),X=new mA(g,Xe,_t,xe,be,he,K),re=new FA(g,Ne),ie=new _A,C=new TA(xe,be),H=new B1(g,Xe,_t,Se,M,d,l),ne=new bA(g,M,be),Te=new kA(I,qe,be,Se),ye=new G1(I,xe,qe,be),ve=new Q1(I,xe,qe,be),qe.programs=X.programs,g.capabilities=be,g.extensions=xe,g.properties=Ne,g.renderLists=ie,g.shadowMap=ne,g.state=Se,g.info=qe}ze();const L=new OA(g,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(W,J,!1))},this.getSize=function(T){return T.set(W,J)},this.setSize=function(T,O,j=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,J=O,n.width=Math.floor(T*Y),n.height=Math.floor(O*Y),j===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(W*Y,J*Y).floor()},this.setDrawingBufferSize=function(T,O,j){W=T,J=O,Y=j,n.width=Math.floor(T*j),n.height=Math.floor(O*j),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,O,j,N){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,O,j,N),Se.viewport(w.copy(z).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,O,j,N){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,O,j,N),Se.scissor($.copy(oe).multiplyScalar(Y).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){Se.setScissorTest(U=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(T=!0,O=!0,j=!0){let N=0;if(T){let q=!1;if(b!==null){const pe=b.texture.format;q=pe===F_||pe===O_||pe===I_}if(q){const pe=b.texture.type,Ee=pe===Wi||pe===Ui||pe===zd||pe===gr||pe===U_||pe===N_,we=H.getClearColor(),Ae=H.getClearAlpha(),Fe=we.r,Ce=we.g,Pe=we.b,Ze=Ne.get(b).__webglFramebuffer;Ee?(p[0]=Fe,p[1]=Ce,p[2]=Pe,p[3]=Ae,I.clearBufferuiv(I.COLOR,Ze,p)):(y[0]=Fe,y[1]=Ce,y[2]=Pe,y[3]=Ae,I.clearBufferiv(I.COLOR,Ze,y))}else N|=I.COLOR_BUFFER_BIT}O&&(N|=I.DEPTH_BUFFER_BIT),j&&(N|=I.STENCIL_BUFFER_BIT),I.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",B,!1),n.removeEventListener("webglcontextcreationerror",se,!1),ie.dispose(),C.dispose(),Ne.dispose(),Xe.dispose(),_t.dispose(),M.dispose(),he.dispose(),Te.dispose(),X.dispose(),L.dispose(),L.removeEventListener("sessionstart",lt),L.removeEventListener("sessionend",Vn),ue&&(ue.dispose(),ue=null),Gt.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=qe.autoReset,O=ne.enabled,j=ne.autoUpdate,N=ne.needsUpdate,q=ne.type;ze(),qe.autoReset=T,ne.enabled=O,ne.autoUpdate=j,ne.needsUpdate=N,ne.type=q}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const O=T.target;O.removeEventListener("dispose",ce),We(O)}function We(T){at(T),Ne.remove(T)}function at(T){const O=Ne.get(T).programs;O!==void 0&&(O.forEach(function(j){X.releaseProgram(j)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,j,N,q,pe){O===null&&(O=ct);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,we=h0(T,O,j,N,q);Se.setMaterial(N,Ee);let Ae=j.index,Fe=1;N.wireframe===!0&&(Ae=A.getWireframeAttribute(j),Fe=2);const Ce=j.drawRange,Pe=j.attributes.position;let Ze=Ce.start*Fe,ft=(Ce.start+Ce.count)*Fe;pe!==null&&(Ze=Math.max(Ze,pe.start*Fe),ft=Math.min(ft,(pe.start+pe.count)*Fe)),Ae!==null?(Ze=Math.max(Ze,0),ft=Math.min(ft,Ae.count)):Pe!=null&&(Ze=Math.max(Ze,0),ft=Math.min(ft,Pe.count));const Rn=ft-Ze;if(Rn<0||Rn===1/0)return;he.setup(q,N,we,j,Ae);let Jn,pt=ye;if(Ae!==null&&(Jn=Mt.get(Ae),pt=ve,pt.setIndex(Jn)),q.isMesh)N.wireframe===!0?(Se.setLineWidth(N.wireframeLinewidth*Oe()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(q.isLine){let He=N.linewidth;He===void 0&&(He=1),Se.setLineWidth(He*Oe()),q.isLineSegments?pt.setMode(I.LINES):q.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else q.isPoints?pt.setMode(I.POINTS):q.isSprite&&pt.setMode(I.TRIANGLES);if(q.isInstancedMesh)pt.renderInstances(Ze,Rn,q.count);else if(j.isInstancedBufferGeometry){const He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,gu=Math.min(j.instanceCount,He);pt.renderInstances(Ze,Rn,gu)}else pt.render(Ze,Rn)},this.compile=function(T,O){function j(N,q,pe){N.transparent===!0&&N.side===ui&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,Js(N,q,pe),N.side=Yi,N.needsUpdate=!0,Js(N,q,pe),N.side=ui):Js(N,q,pe)}m=C.get(T),m.init(),v.push(m),T.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(g.useLegacyLights),T.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let pe=0;pe<q.length;pe++){const Ee=q[pe];j(Ee,T,N)}else j(q,T,N)}),v.pop(),m=null};let ht=null;function Qi(T){ht&&ht(T)}function lt(){Gt.stop()}function Vn(){Gt.start()}const Gt=new Q_;Gt.setAnimationLoop(Qi),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){ht=T,L.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},L.addEventListener("sessionstart",lt),L.addEventListener("sessionend",Vn),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(O=L.updateCameraXR(O)),T.isScene===!0&&T.onBeforeRender(g,T,O,b),m=C.get(T,v.length),m.init(),v.push(m),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(_e),fe=this.localClippingEnabled,Z=K.init(this.clippingPlanes,fe),_=ie.get(T,c.length),_.init(),c.push(_),Kd(T,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(D,G),Z===!0&&K.beginShadows();const j=m.state.shadowsArray;if(ne.render(j,T,O),Z===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,H.render(_,T),m.setupLights(g.useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let q=0,pe=N.length;q<pe;q++){const Ee=N[q];Zd(_,T,Ee,Ee.viewport)}}else Zd(_,T,O);b!==null&&(Re.updateMultisampleRenderTarget(b),Re.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(g,T,O),he.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,c.pop(),c.length>0?_=c[c.length-1]:_=null};function Kd(T,O,j,N){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){N&&Me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const Ee=M.update(T),we=T.material;we.visible&&_.push(T,Ee,we,j,Me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==qe.render.frame&&(T.skeleton.update(),T.skeleton.frame=qe.render.frame);const Ee=M.update(T),we=T.material;if(N&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Me.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Me.copy(Ee.boundingSphere.center)),Me.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){const Ae=Ee.groups;for(let Fe=0,Ce=Ae.length;Fe<Ce;Fe++){const Pe=Ae[Fe],Ze=we[Pe.materialIndex];Ze&&Ze.visible&&_.push(T,Ee,Ze,j,Me.z,Pe)}}else we.visible&&_.push(T,Ee,we,j,Me.z,null)}}const pe=T.children;for(let Ee=0,we=pe.length;Ee<we;Ee++)Kd(pe[Ee],O,j,N)}function Zd(T,O,j,N){const q=T.opaque,pe=T.transmissive,Ee=T.transparent;m.setupLightsView(j),Z===!0&&K.setGlobalState(g.clippingPlanes,j),pe.length>0&&d0(q,pe,O,j),N&&Se.viewport(w.copy(N)),q.length>0&&Qs(q,O,j),pe.length>0&&Qs(pe,O,j),Ee.length>0&&Qs(Ee,O,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function d0(T,O,j,N){const q=be.isWebGL2;ue===null&&(ue=new Ar(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Bs:Wi,minFilter:zs,samples:q&&a===!0?4:0})),g.getDrawingBufferSize(De),q?ue.setSize(De.x,De.y):ue.setSize(Df(De.x),Df(De.y));const pe=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(F),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear();const Ee=g.toneMapping;g.toneMapping=mi,Qs(T,j,N),Re.updateMultisampleRenderTarget(ue),Re.updateRenderTargetMipmap(ue);let we=!1;for(let Ae=0,Fe=O.length;Ae<Fe;Ae++){const Ce=O[Ae],Pe=Ce.object,Ze=Ce.geometry,ft=Ce.material,Rn=Ce.group;if(ft.side===ui&&Pe.layers.test(N.layers)){const Jn=ft.side;ft.side=Dt,ft.needsUpdate=!0,Qd(Pe,j,N,Ze,ft,Rn),ft.side=Jn,ft.needsUpdate=!0,we=!0}}we===!0&&(Re.updateMultisampleRenderTarget(ue),Re.updateRenderTargetMipmap(ue)),g.setRenderTarget(pe),g.setClearColor(F,V),g.toneMapping=Ee}function Qs(T,O,j){const N=O.isScene===!0?O.overrideMaterial:null;for(let q=0,pe=T.length;q<pe;q++){const Ee=T[q],we=Ee.object,Ae=Ee.geometry,Fe=N===null?Ee.material:N,Ce=Ee.group;we.layers.test(j.layers)&&Qd(we,O,j,Ae,Fe,Ce)}}function Qd(T,O,j,N,q,pe){T.onBeforeRender(g,O,j,N,q,pe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(g,O,j,N,T,pe),q.transparent===!0&&q.side===ui&&q.forceSinglePass===!1?(q.side=Dt,q.needsUpdate=!0,g.renderBufferDirect(j,O,N,q,T,pe),q.side=Yi,q.needsUpdate=!0,g.renderBufferDirect(j,O,N,q,T,pe),q.side=ui):g.renderBufferDirect(j,O,N,q,T,pe),T.onAfterRender(g,O,j,N,q,pe)}function Js(T,O,j){O.isScene!==!0&&(O=ct);const N=Ne.get(T),q=m.state.lights,pe=m.state.shadowsArray,Ee=q.state.version,we=X.getParameters(T,q.state,pe,O,j),Ae=X.getProgramCacheKey(we);let Fe=N.programs;N.environment=T.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(T.isMeshStandardMaterial?_t:Xe).get(T.envMap||N.environment),Fe===void 0&&(T.addEventListener("dispose",ce),Fe=new Map,N.programs=Fe);let Ce=Fe.get(Ae);if(Ce!==void 0){if(N.currentProgram===Ce&&N.lightsStateVersion===Ee)return Jd(T,we),Ce}else we.uniforms=X.getUniforms(T),T.onBuild(j,we,g),T.onBeforeCompile(we,g),Ce=X.acquireProgram(we,Ae),Fe.set(Ae,Ce),N.uniforms=we.uniforms;const Pe=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=K.uniform),Jd(T,we),N.needsLights=m0(T),N.lightsStateVersion=Ee,N.needsLights&&(Pe.ambientLightColor.value=q.state.ambient,Pe.lightProbe.value=q.state.probe,Pe.directionalLights.value=q.state.directional,Pe.directionalLightShadows.value=q.state.directionalShadow,Pe.spotLights.value=q.state.spot,Pe.spotLightShadows.value=q.state.spotShadow,Pe.rectAreaLights.value=q.state.rectArea,Pe.ltc_1.value=q.state.rectAreaLTC1,Pe.ltc_2.value=q.state.rectAreaLTC2,Pe.pointLights.value=q.state.point,Pe.pointLightShadows.value=q.state.pointShadow,Pe.hemisphereLights.value=q.state.hemi,Pe.directionalShadowMap.value=q.state.directionalShadowMap,Pe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pe.spotShadowMap.value=q.state.spotShadowMap,Pe.spotLightMatrix.value=q.state.spotLightMatrix,Pe.spotLightMap.value=q.state.spotLightMap,Pe.pointShadowMap.value=q.state.pointShadowMap,Pe.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ze=Ce.getUniforms(),ft=Za.seqWithValue(Ze.seq,Pe);return N.currentProgram=Ce,N.uniformsList=ft,Ce}function Jd(T,O){const j=Ne.get(T);j.outputColorSpace=O.outputColorSpace,j.instancing=O.instancing,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function h0(T,O,j,N,q){O.isScene!==!0&&(O=ct),Re.resetTextureUnits();const pe=O.fog,Ee=N.isMeshStandardMaterial?O.environment:null,we=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qn,Ae=(N.isMeshStandardMaterial?_t:Xe).get(N.envMap||Ee),Fe=N.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ce=!!j.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Pe=!!j.morphAttributes.position,Ze=!!j.morphAttributes.normal,ft=!!j.morphAttributes.color,Rn=N.toneMapped?g.toneMapping:mi,Jn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=Jn!==void 0?Jn.length:0,He=Ne.get(N),gu=m.state.lights;if(Z===!0&&(fe===!0||T!==S)){const nn=T===S&&N.id===P;K.setState(N,T,nn)}let Tt=!1;N.version===He.__version?(He.needsLights&&He.lightsStateVersion!==gu.state.version||He.outputColorSpace!==we||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ae||N.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==K.numPlanes||He.numIntersection!==K.numIntersection)||He.vertexAlphas!==Fe||He.vertexTangents!==Ce||He.morphTargets!==Pe||He.morphNormals!==Ze||He.morphColors!==ft||He.toneMapping!==Rn||be.isWebGL2===!0&&He.morphTargetsCount!==pt)&&(Tt=!0):(Tt=!0,He.__version=N.version);let Ji=He.currentProgram;Tt===!0&&(Ji=Js(N,O,q));let eh=!1,jo=!1,vu=!1;const Vt=Ji.getUniforms(),er=He.uniforms;if(Se.useProgram(Ji.program)&&(eh=!0,jo=!0,vu=!0),N.id!==P&&(P=N.id,jo=!0),eh||S!==T){if(Vt.setValue(I,"projectionMatrix",T.projectionMatrix),be.logarithmicDepthBuffer&&Vt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,jo=!0,vu=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const nn=Vt.map.cameraPosition;nn!==void 0&&nn.setValue(I,Me.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Vt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&Vt.setValue(I,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Vt.setOptional(I,q,"bindMatrix"),Vt.setOptional(I,q,"bindMatrixInverse");const nn=q.skeleton;nn&&(be.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Vt.setValue(I,"boneTexture",nn.boneTexture,Re),Vt.setValue(I,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _u=j.morphAttributes;if((_u.position!==void 0||_u.normal!==void 0||_u.color!==void 0&&be.isWebGL2===!0)&&me.update(q,j,Ji),(jo||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,Vt.setValue(I,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(er.envMap.value=Ae,er.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),jo&&(Vt.setValue(I,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&p0(er,vu),pe&&N.fog===!0&&re.refreshFogUniforms(er,pe),re.refreshMaterialUniforms(er,N,Y,J,ue),Za.upload(I,He.uniformsList,er,Re)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Za.upload(I,He.uniformsList,er,Re),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Vt.setValue(I,"center",q.center),Vt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Vt.setValue(I,"normalMatrix",q.normalMatrix),Vt.setValue(I,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const nn=N.uniformsGroups;for(let yu=0,g0=nn.length;yu<g0;yu++)if(be.isWebGL2){const th=nn[yu];Te.update(th,Ji),Te.bind(th,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function p0(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function m0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,O,j){Ne.get(T.texture).__webglTexture=O,Ne.get(T.depthTexture).__webglTexture=j;const N=Ne.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=j===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const j=Ne.get(T);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,j=0){b=T,E=O,R=j;let N=!0,q=null,pe=!1,Ee=!1;if(T){const Ae=Ne.get(T);Ae.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(I.FRAMEBUFFER,null),N=!1):Ae.__webglFramebuffer===void 0?Re.setupRenderTarget(T):Ae.__hasExternalTextures&&Re.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);const Ce=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Ce[O],pe=!0):be.isWebGL2&&T.samples>0&&Re.useMultisampledRTT(T)===!1?q=Ne.get(T).__webglMultisampledFramebuffer:q=Ce,w.copy(T.viewport),$.copy(T.scissor),ee=T.scissorTest}else w.copy(z).multiplyScalar(Y).floor(),$.copy(oe).multiplyScalar(Y).floor(),ee=U;if(Se.bindFramebuffer(I.FRAMEBUFFER,q)&&be.drawBuffers&&N&&Se.drawBuffers(T,q),Se.viewport(w),Se.scissor($),Se.setScissorTest(ee),pe){const Ae=Ne.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,j)}else if(Ee){const Ae=Ne.get(T.texture),Fe=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,j||0,Fe)}P=-1},this.readRenderTargetPixels=function(T,O,j,N,q,pe,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){Se.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ae=T.texture,Fe=Ae.format,Ce=Ae.type;if(Fe!==kn&&ge.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ce===Bs&&(xe.has("EXT_color_buffer_half_float")||be.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ce!==Wi&&ge.convert(Ce)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===Ni&&(be.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-N&&j>=0&&j<=T.height-q&&I.readPixels(O,j,N,q,ge.convert(Fe),ge.convert(Ce),pe)}finally{const Ae=b!==null?Ne.get(b).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(T,O,j=0){const N=Math.pow(2,-j),q=Math.floor(O.image.width*N),pe=Math.floor(O.image.height*N);Re.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,T.x,T.y,q,pe),Se.unbindTexture()},this.copyTextureToTexture=function(T,O,j,N=0){const q=O.image.width,pe=O.image.height,Ee=ge.convert(j.format),we=ge.convert(j.type);Re.setTexture2D(j,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,T.x,T.y,q,pe,Ee,we,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,N,T.x,T.y,Ee,we,O.image),N===0&&j.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,O,j,N,q=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Ae=ge.convert(N.format),Fe=ge.convert(N.type);let Ce;if(N.isData3DTexture)Re.setTexture3D(N,0),Ce=I.TEXTURE_3D;else if(N.isDataArrayTexture)Re.setTexture2DArray(N,0),Ce=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Pe=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ft=I.getParameter(I.UNPACK_SKIP_PIXELS),Rn=I.getParameter(I.UNPACK_SKIP_ROWS),Jn=I.getParameter(I.UNPACK_SKIP_IMAGES),pt=j.isCompressedTexture?j.mipmaps[0]:j.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?I.texSubImage3D(Ce,q,O.x,O.y,O.z,pe,Ee,we,Ae,Fe,pt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ce,q,O.x,O.y,O.z,pe,Ee,we,Ae,pt.data)):I.texSubImage3D(Ce,q,O.x,O.y,O.z,pe,Ee,we,Ae,Fe,pt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jn),q===0&&N.generateMipmaps&&I.generateMipmap(Ce),Se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Re.setTextureCube(T,0):T.isData3DTexture?Re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Re.setTexture2DArray(T,0):Re.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){E=0,R=0,b=null,Se.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?_r:k_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?Le:Qn}}class BA extends i0{}BA.prototype.isWebGL1Renderer=!0;let HA=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class Lm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);const Dm={type:"change"},Mc={type:"start"},Um={type:"end"};class GA extends Nr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fr.ROTATE,MIDDLE:Fr.DOLLY,RIGHT:Fr.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Xe),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Dm),i.update(),o=r.NONE},this.update=function(){const C=new k,K=new Rr().setFromUnitVectors(e.up,new k(0,1,0)),ne=K.clone().invert(),H=new k,me=new Rr,ye=new k,ve=2*Math.PI;return function(){const he=i.object.position;C.copy(he).sub(i.target),C.applyQuaternion(K),a.setFromVector3(C),i.autoRotate&&o===r.NONE&&S(b()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Te=i.minAzimuthAngle,ze=i.maxAzimuthAngle;return isFinite(Te)&&isFinite(ze)&&(Te<-Math.PI?Te+=ve:Te>Math.PI&&(Te-=ve),ze<-Math.PI?ze+=ve:ze>Math.PI&&(ze-=ve),Te<=ze?a.theta=Math.max(Te,Math.min(ze,a.theta)):a.theta=a.theta>(Te+ze)/2?Math.max(Te,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),C.setFromSpherical(a),C.applyQuaternion(ne),he.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),u=1,h||H.distanceToSquared(i.object.position)>s||8*(1-me.dot(i.object.quaternion))>s||ye.distanceToSquared(i.target)>0?(i.dispatchEvent(Dm),H.copy(i.object.position),me.copy(i.object.quaternion),ye.copy(i.target),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",A),i.domElement.removeEventListener("pointerdown",xe),i.domElement.removeEventListener("pointercancel",Se),i.domElement.removeEventListener("wheel",Re),i.domElement.removeEventListener("pointermove",be),i.domElement.removeEventListener("pointerup",Se),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Xe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Lm,l=new Lm;let u=1;const f=new k;let h=!1;const d=new ke,p=new ke,y=new ke,_=new ke,m=new ke,c=new ke,v=new ke,g=new ke,x=new ke,E=[],R={};function b(){return 2*Math.PI/60/60*i.autoRotateSpeed}function P(){return Math.pow(.95,i.zoomSpeed)}function S(C){l.theta-=C}function w(C){l.phi-=C}const $=function(){const C=new k;return function(ne,H){C.setFromMatrixColumn(H,0),C.multiplyScalar(-ne),f.add(C)}}(),ee=function(){const C=new k;return function(ne,H){i.screenSpacePanning===!0?C.setFromMatrixColumn(H,1):(C.setFromMatrixColumn(H,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ne),f.add(C)}}(),F=function(){const C=new k;return function(ne,H){const me=i.domElement;if(i.object.isPerspectiveCamera){const ye=i.object.position;C.copy(ye).sub(i.target);let ve=C.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),$(2*ne*ve/me.clientHeight,i.object.matrix),ee(2*H*ve/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(ne*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),ee(H*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(C){d.set(C.clientX,C.clientY)}function Y(C){v.set(C.clientX,C.clientY)}function D(C){_.set(C.clientX,C.clientY)}function G(C){p.set(C.clientX,C.clientY),y.subVectors(p,d).multiplyScalar(i.rotateSpeed);const K=i.domElement;S(2*Math.PI*y.x/K.clientHeight),w(2*Math.PI*y.y/K.clientHeight),d.copy(p),i.update()}function z(C){g.set(C.clientX,C.clientY),x.subVectors(g,v),x.y>0?V(P()):x.y<0&&W(P()),v.copy(g),i.update()}function oe(C){m.set(C.clientX,C.clientY),c.subVectors(m,_).multiplyScalar(i.panSpeed),F(c.x,c.y),_.copy(m),i.update()}function U(C){C.deltaY<0?W(P()):C.deltaY>0&&V(P()),i.update()}function Q(C){let K=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),K=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),K=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?S(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),K=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?S(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),K=!0;break}K&&(C.preventDefault(),i.update())}function Z(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),K=.5*(E[0].pageY+E[1].pageY);d.set(C,K)}}function fe(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),K=.5*(E[0].pageY+E[1].pageY);_.set(C,K)}}function ue(){const C=E[0].pageX-E[1].pageX,K=E[0].pageY-E[1].pageY,ne=Math.sqrt(C*C+K*K);v.set(0,ne)}function _e(){i.enableZoom&&ue(),i.enablePan&&fe()}function De(){i.enableZoom&&ue(),i.enableRotate&&Z()}function Me(C){if(E.length==1)p.set(C.pageX,C.pageY);else{const ne=ie(C),H=.5*(C.pageX+ne.x),me=.5*(C.pageY+ne.y);p.set(H,me)}y.subVectors(p,d).multiplyScalar(i.rotateSpeed);const K=i.domElement;S(2*Math.PI*y.x/K.clientHeight),w(2*Math.PI*y.y/K.clientHeight),d.copy(p)}function ct(C){if(E.length===1)m.set(C.pageX,C.pageY);else{const K=ie(C),ne=.5*(C.pageX+K.x),H=.5*(C.pageY+K.y);m.set(ne,H)}c.subVectors(m,_).multiplyScalar(i.panSpeed),F(c.x,c.y),_.copy(m)}function Oe(C){const K=ie(C),ne=C.pageX-K.x,H=C.pageY-K.y,me=Math.sqrt(ne*ne+H*H);g.set(0,me),x.set(0,Math.pow(g.y/v.y,i.zoomSpeed)),V(x.y),v.copy(g)}function I(C){i.enableZoom&&Oe(C),i.enablePan&&ct(C)}function vt(C){i.enableZoom&&Oe(C),i.enableRotate&&Me(C)}function xe(C){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",be),i.domElement.addEventListener("pointerup",Se)),M(C),C.pointerType==="touch"?_t(C):qe(C))}function be(C){i.enabled!==!1&&(C.pointerType==="touch"?Mt(C):Ne(C))}function Se(C){X(C),E.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",be),i.domElement.removeEventListener("pointerup",Se)),i.dispatchEvent(Um),o=r.NONE}function qe(C){let K;switch(C.button){case 0:K=i.mouseButtons.LEFT;break;case 1:K=i.mouseButtons.MIDDLE;break;case 2:K=i.mouseButtons.RIGHT;break;default:K=-1}switch(K){case Fr.DOLLY:if(i.enableZoom===!1)return;Y(C),o=r.DOLLY;break;case Fr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;D(C),o=r.PAN}else{if(i.enableRotate===!1)return;J(C),o=r.ROTATE}break;case Fr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;J(C),o=r.ROTATE}else{if(i.enablePan===!1)return;D(C),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Mc)}function Ne(C){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;G(C);break;case r.DOLLY:if(i.enableZoom===!1)return;z(C);break;case r.PAN:if(i.enablePan===!1)return;oe(C);break}}function Re(C){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(C.preventDefault(),i.dispatchEvent(Mc),U(C),i.dispatchEvent(Um))}function Xe(C){i.enabled===!1||i.enablePan===!1||Q(C)}function _t(C){switch(re(C),E.length){case 1:switch(i.touches.ONE){case kr.ROTATE:if(i.enableRotate===!1)return;Z(),o=r.TOUCH_ROTATE;break;case kr.PAN:if(i.enablePan===!1)return;fe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case kr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(),o=r.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Mc)}function Mt(C){switch(re(C),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ct(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;I(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vt(C),i.update();break;default:o=r.NONE}}function A(C){i.enabled!==!1&&C.preventDefault()}function M(C){E.push(C)}function X(C){delete R[C.pointerId];for(let K=0;K<E.length;K++)if(E[K].pointerId==C.pointerId){E.splice(K,1);return}}function re(C){let K=R[C.pointerId];K===void 0&&(K=new ke,R[C.pointerId]=K),K.set(C.pageX,C.pageY)}function ie(C){const K=C.pointerId===E[0].pointerId?E[1]:E[0];return R[K.pointerId]}i.domElement.addEventListener("contextmenu",A),i.domElement.addEventListener("pointerdown",xe),i.domElement.addEventListener("pointercancel",Se),i.domElement.addEventListener("wheel",Re,{passive:!1}),this.update()}}class Nm{constructor(e,n,i){const r=new Vo(e,n,i);this.centreOffset=new k(-(e/2),-(n/2),-(i/2)),this.itemsInContainer=[],r.clearGroups(),r.addGroup(0,6,0),r.addGroup(6,6,0),r.addGroup(12,6,1),r.addGroup(18,6,1),r.addGroup(24,6,2),r.addGroup(30,6,2);const o=[new Ss({color:32896,opacity:0,transparent:!1,side:Dt}),new Ss({color:9323909,opacity:0,transparent:!1,side:Dt}),new Ss({color:16767832,opacity:0,transparent:!1,side:Dt})];this.mesh=new hi(r,o),this.mesh.name="container"}}class VA{constructor(e){this.canvasRef=e,this.scene=new HA,this.camera=new Sn(65,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=50,this.container=new Nm(20,20,20),this.scene.add(this.container.mesh),this.renderer=new i0({canvas:e.current,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new GA(this.camera,this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize())}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.renderer.render(this.scene,this.camera),this.controls.update()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}containerCleanUp(){this.scene.remove(this.container.mesh),this.container.mesh.material.forEach(e=>{e.dispose()}),this.container.mesh.geometry.dispose()}updateContainer(e){this.containerCleanUp(),this.container=new Nm(e.x,e.y,e.z),this.scene.add(this.container.mesh)}cleanUp(){window.removeEventListener("resize",()=>this.onWindowResize()),this.containerCleanUp(),this.controls.dispose(),this.renderer.dispose(),document.body.removeChild(this.renderer.domElement)}}function WA(){const t=rt.useRef(null),e=hp(o=>o.container.hasUpdate),n=hp(o=>o.container.dimensions),i=A_(),r=rt.useRef(null);return rt.useEffect(()=>{e&&(r.current.updateContainer(n),i(US()))},[e]),rt.useEffect(()=>{const o=new VA(t);return o.animate(),r.current=o,()=>{o.cleanUp()}},[]),Ge.jsx("canvas",{id:"scene",ref:t})}function XA(){return Ge.jsxs(Ge.Fragment,{children:[Ge.jsx(OS,{}),Ge.jsx(WA,{})]})}function zn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function br(t){return!!t&&!!t[tt]}function Pr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var i=Object.getPrototypeOf(n);if(i===null)return!0;var r=Object.hasOwnProperty.call(i,"constructor")&&i.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===eR}(t)||Array.isArray(t)||!!t[Hm]||!!(!((e=t.constructor)===null||e===void 0)&&e[Hm])||Vd(t)||Wd(t))}function Lr(t,e,n){n===void 0&&(n=!1),Xo(t)===0?(n?Object.keys:wo)(t).forEach(function(i){n&&typeof i=="symbol"||e(i,t[i],t)}):t.forEach(function(i,r){return e(r,i,t)})}function Xo(t){var e=t[tt];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Vd(t)?2:Wd(t)?3:0}function To(t,e){return Xo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function jA(t,e){return Xo(t)===2?t.get(e):t[e]}function r0(t,e,n){var i=Xo(t);i===2?t.set(e,n):i===3?t.add(n):t[e]=n}function o0(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Vd(t){return QA&&t instanceof Map}function Wd(t){return JA&&t instanceof Set}function ur(t){return t.o||t.t}function Xd(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=a0(t);delete e[tt];for(var n=wo(e),i=0;i<n.length;i++){var r=n[i],o=e[r];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[r]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[r]})}return Object.create(Object.getPrototypeOf(t),e)}function jd(t,e){return e===void 0&&(e=!1),$d(t)||br(t)||!Pr(t)||(Xo(t)>1&&(t.set=t.add=t.clear=t.delete=$A),Object.freeze(t),e&&Lr(t,function(n,i){return jd(i,!0)},!0)),t}function $A(){zn(2)}function $d(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Zn(t){var e=Ff[t];return e||zn(18,t),e}function YA(t,e){Ff[t]||(Ff[t]=e)}function Nf(){return Hs}function Tc(t,e){e&&(Zn("Patches"),t.u=[],t.s=[],t.v=e)}function Tl(t){If(t),t.p.forEach(qA),t.p=null}function If(t){t===Hs&&(Hs=t.l)}function Im(t){return Hs={p:[],l:Hs,h:t,m:!0,_:0}}function qA(t){var e=t[tt];e.i===0||e.i===1?e.j():e.g=!0}function wc(t,e){e._=e.p.length;var n=e.p[0],i=t!==void 0&&t!==n;return e.h.O||Zn("ES5").S(e,t,i),i?(n[tt].P&&(Tl(e),zn(4)),Pr(t)&&(t=wl(e,t),e.l||Al(e,t)),e.u&&Zn("Patches").M(n[tt].t,t,e.u,e.s)):t=wl(e,n,[]),Tl(e),e.u&&e.v(e.u,e.s),t!==s0?t:void 0}function wl(t,e,n){if($d(e))return e;var i=e[tt];if(!i)return Lr(e,function(a,l){return Om(t,i,e,a,l,n)},!0),e;if(i.A!==t)return e;if(!i.P)return Al(t,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var r=i.i===4||i.i===5?i.o=Xd(i.k):i.o,o=r,s=!1;i.i===3&&(o=new Set(r),r.clear(),s=!0),Lr(o,function(a,l){return Om(t,i,r,a,l,n,s)}),Al(t,r,!1),n&&t.u&&Zn("Patches").N(i,n,t.u,t.s)}return i.o}function Om(t,e,n,i,r,o,s){if(br(r)){var a=wl(t,r,o&&e&&e.i!==3&&!To(e.R,i)?o.concat(i):void 0);if(r0(n,i,a),!br(a))return;t.m=!1}else s&&n.add(r);if(Pr(r)&&!$d(r)){if(!t.h.D&&t._<1)return;wl(t,r),e&&e.A.l||Al(t,r)}}function Al(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&jd(e,n)}function Ac(t,e){var n=t[tt];return(n?ur(n):t)[e]}function Fm(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function Pi(t){t.P||(t.P=!0,t.l&&Pi(t.l))}function Rc(t){t.o||(t.o=Xd(t.t))}function Of(t,e,n){var i=Vd(e)?Zn("MapSet").F(e,n):Wd(e)?Zn("MapSet").T(e,n):t.O?function(r,o){var s=Array.isArray(r),a={i:s?1:0,A:o?o.A:Nf(),P:!1,I:!1,R:{},l:o,t:r,k:null,o:null,j:null,C:!1},l=a,u=Gs;s&&(l=[a],u=cs);var f=Proxy.revocable(l,u),h=f.revoke,d=f.proxy;return a.k=d,a.j=h,d}(e,n):Zn("ES5").J(e,n);return(n?n.A:Nf()).p.push(i),i}function KA(t){return br(t)||zn(22,t),function e(n){if(!Pr(n))return n;var i,r=n[tt],o=Xo(n);if(r){if(!r.P&&(r.i<4||!Zn("ES5").K(r)))return r.t;r.I=!0,i=km(n,o),r.I=!1}else i=km(n,o);return Lr(i,function(s,a){r&&jA(r.t,s)===a||r0(i,s,e(a))}),o===3?new Set(i):i}(t)}function km(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Xd(t)}function ZA(){function t(o,s){var a=r[o];return a?a.enumerable=s:r[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[tt];return Gs.get(l,o)},set:function(l){var u=this[tt];Gs.set(u,o,l)}},a}function e(o){for(var s=o.length-1;s>=0;s--){var a=o[s][tt];if(!a.P)switch(a.i){case 5:i(a)&&Pi(a);break;case 4:n(a)&&Pi(a)}}}function n(o){for(var s=o.t,a=o.k,l=wo(a),u=l.length-1;u>=0;u--){var f=l[u];if(f!==tt){var h=s[f];if(h===void 0&&!To(s,f))return!0;var d=a[f],p=d&&d[tt];if(p?p.t!==h:!o0(d,h))return!0}}var y=!!s[tt];return l.length!==wo(s).length+(y?0:1)}function i(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var r={};YA("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(f,h){if(f){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var y=a0(h);delete y[tt];for(var _=wo(y),m=0;m<_.length;m++){var c=_[m];y[c]=t(c,f||!!y[c].enumerable)}return Object.create(Object.getPrototypeOf(h),y)}(a,o),u={i:a?5:4,A:s?s.A:Nf(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,tt,{value:u,writable:!0}),l},S:function(o,s,a){a?br(s)&&s[tt].A===o&&e(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var f=u[tt];if(f){var h=f.t,d=f.k,p=f.R,y=f.i;if(y===4)Lr(d,function(g){g!==tt&&(h[g]!==void 0||To(h,g)?p[g]||l(d[g]):(p[g]=!0,Pi(f)))}),Lr(h,function(g){d[g]!==void 0||To(d,g)||(p[g]=!1,Pi(f))});else if(y===5){if(i(f)&&(Pi(f),p.length=!0),d.length<h.length)for(var _=d.length;_<h.length;_++)p[_]=!1;else for(var m=h.length;m<d.length;m++)p[m]=!0;for(var c=Math.min(d.length,h.length),v=0;v<c;v++)d.hasOwnProperty(v)||(p[v]=!0),p[v]===void 0&&l(d[v])}}}}(o.p[0]),e(o.p))},K:function(o){return o.i===4?n(o):i(o)}})}var zm,Hs,Yd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",QA=typeof Map<"u",JA=typeof Set<"u",Bm=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",s0=Yd?Symbol.for("immer-nothing"):((zm={})["immer-nothing"]=!0,zm),Hm=Yd?Symbol.for("immer-draftable"):"__$immer_draftable",tt=Yd?Symbol.for("immer-state"):"__$immer_state",eR=""+Object.prototype.constructor,wo=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,a0=Object.getOwnPropertyDescriptors||function(t){var e={};return wo(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Ff={},Gs={get:function(t,e){if(e===tt)return t;var n=ur(t);if(!To(n,e))return function(r,o,s){var a,l=Fm(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(r.k):void 0}(t,n,e);var i=n[e];return t.I||!Pr(i)?i:i===Ac(t.t,e)?(Rc(t),t.o[e]=Of(t.A.h,i,t)):i},has:function(t,e){return e in ur(t)},ownKeys:function(t){return Reflect.ownKeys(ur(t))},set:function(t,e,n){var i=Fm(ur(t),e);if(i!=null&&i.set)return i.set.call(t.k,n),!0;if(!t.P){var r=Ac(ur(t),e),o=r==null?void 0:r[tt];if(o&&o.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(o0(n,r)&&(n!==void 0||To(t.t,e)))return!0;Rc(t),Pi(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Ac(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Rc(t),Pi(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=ur(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty:function(){zn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){zn(12)}},cs={};Lr(Gs,function(t,e){cs[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),cs.deleteProperty=function(t,e){return cs.set.call(this,t,e,void 0)},cs.set=function(t,e,n){return Gs.set.call(this,t[0],e,n,t[0])};var tR=function(){function t(n){var i=this;this.O=Bm,this.D=!0,this.produce=function(r,o,s){if(typeof r=="function"&&typeof o!="function"){var a=o;o=r;var l=i;return function(_){var m=this;_===void 0&&(_=a);for(var c=arguments.length,v=Array(c>1?c-1:0),g=1;g<c;g++)v[g-1]=arguments[g];return l.produce(_,function(x){var E;return(E=o).call.apply(E,[m,x].concat(v))})}}var u;if(typeof o!="function"&&zn(6),s!==void 0&&typeof s!="function"&&zn(7),Pr(r)){var f=Im(i),h=Of(i,r,void 0),d=!0;try{u=o(h),d=!1}finally{d?Tl(f):If(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(_){return Tc(f,s),wc(_,f)},function(_){throw Tl(f),_}):(Tc(f,s),wc(u,f))}if(!r||typeof r!="object"){if((u=o(r))===void 0&&(u=r),u===s0&&(u=void 0),i.D&&jd(u,!0),s){var p=[],y=[];Zn("Patches").M(r,u,p,y),s(p,y)}return u}zn(21,r)},this.produceWithPatches=function(r,o){if(typeof r=="function")return function(u){for(var f=arguments.length,h=Array(f>1?f-1:0),d=1;d<f;d++)h[d-1]=arguments[d];return i.produceWithPatches(u,function(p){return r.apply(void 0,[p].concat(h))})};var s,a,l=i.produce(r,o,function(u,f){s=u,a=f});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Pr(n)||zn(8),br(n)&&(n=KA(n));var i=Im(this),r=Of(this,n,void 0);return r[tt].C=!0,If(i),r},e.finishDraft=function(n,i){var r=n&&n[tt],o=r.A;return Tc(o,i),wc(void 0,o)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!Bm&&zn(20),this.O=n},e.applyPatches=function(n,i){var r;for(r=i.length-1;r>=0;r--){var o=i[r];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}r>-1&&(i=i.slice(r+1));var s=Zn("Patches").$;return br(n)?s(n,i):this.produce(n,function(a){return s(a,i)})},t}(),hn=new tR;hn.produce;hn.produceWithPatches.bind(hn);hn.setAutoFreeze.bind(hn);hn.setUseProxies.bind(hn);hn.applyPatches.bind(hn);hn.createDraft.bind(hn);hn.finishDraft.bind(hn);function Vs(t){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vs(t)}function nR(t,e){if(Vs(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Vs(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function iR(t){var e=nR(t,"string");return Vs(e)==="symbol"?e:String(e)}function rR(t,e,n){return e=iR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Vm(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gm(Object(n),!0).forEach(function(i){rR(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function zt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Wm=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Cc=function(){return Math.random().toString(36).substring(7).split("").join(".")},Rl={INIT:"@@redux/INIT"+Cc(),REPLACE:"@@redux/REPLACE"+Cc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Cc()}};function oR(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function l0(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(zt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(zt(1));return n(l0)(t,e)}if(typeof t!="function")throw new Error(zt(2));var r=t,o=e,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function f(){if(l)throw new Error(zt(3));return o}function h(_){if(typeof _!="function")throw new Error(zt(4));if(l)throw new Error(zt(5));var m=!0;return u(),a.push(_),function(){if(m){if(l)throw new Error(zt(6));m=!1,u();var v=a.indexOf(_);a.splice(v,1),s=null}}}function d(_){if(!oR(_))throw new Error(zt(7));if(typeof _.type>"u")throw new Error(zt(8));if(l)throw new Error(zt(9));try{l=!0,o=r(o,_)}finally{l=!1}for(var m=s=a,c=0;c<m.length;c++){var v=m[c];v()}return _}function p(_){if(typeof _!="function")throw new Error(zt(10));r=_,d({type:Rl.REPLACE})}function y(){var _,m=h;return _={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(zt(11));function g(){v.next&&v.next(f())}g();var x=m(g);return{unsubscribe:x}}},_[Wm]=function(){return this},_}return d({type:Rl.INIT}),i={dispatch:d,subscribe:h,getState:f,replaceReducer:p},i[Wm]=y,i}function sR(t){Object.keys(t).forEach(function(e){var n=t[e],i=n(void 0,{type:Rl.INIT});if(typeof i>"u")throw new Error(zt(12));if(typeof n(void 0,{type:Rl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(zt(13))})}function aR(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var r=e[i];typeof t[r]=="function"&&(n[r]=t[r])}var o=Object.keys(n),s;try{sR(n)}catch(a){s=a}return function(l,u){if(l===void 0&&(l={}),s)throw s;for(var f=!1,h={},d=0;d<o.length;d++){var p=o[d],y=n[p],_=l[p],m=y(_,u);if(typeof m>"u")throw u&&u.type,new Error(zt(14));h[p]=m,f=f||m!==_}return f=f||o.length!==Object.keys(l).length,f?h:l}}function Cl(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,r){return function(){return i(r.apply(void 0,arguments))}})}function lR(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return function(){var r=i.apply(void 0,arguments),o=function(){throw new Error(zt(15))},s={getState:r.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=e.map(function(l){return l(s)});return o=Cl.apply(void 0,a)(r.dispatch),Vm(Vm({},r),{},{dispatch:o})}}}function u0(t){var e=function(i){var r=i.dispatch,o=i.getState;return function(s){return function(a){return typeof a=="function"?a(r,o,t):s(a)}}};return e}var c0=u0();c0.withExtraArgument=u0;const Xm=c0;var f0=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function i(){this.constructor=e}e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),uR=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(f){return l([u,f])}}function l(u){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(o=u[0]&2?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,r=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(f){u=[6,f],r=0}finally{i=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Ws=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t},cR=Object.defineProperty,fR=Object.defineProperties,dR=Object.getOwnPropertyDescriptors,jm=Object.getOwnPropertySymbols,hR=Object.prototype.hasOwnProperty,pR=Object.prototype.propertyIsEnumerable,$m=function(t,e,n){return e in t?cR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Ao=function(t,e){for(var n in e||(e={}))hR.call(e,n)&&$m(t,n,e[n]);if(jm)for(var i=0,r=jm(e);i<r.length;i++){var n=r[i];pR.call(e,n)&&$m(t,n,e[n])}return t},bc=function(t,e){return fR(t,dR(e))},mR=function(t,e,n){return new Promise(function(i,r){var o=function(l){try{a(n.next(l))}catch(u){r(u)}},s=function(l){try{a(n.throw(l))}catch(u){r(u)}},a=function(l){return l.done?i(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(t,e)).next())})},gR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Cl:Cl.apply(null,arguments)};function vR(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var _R=function(t){f0(e,t);function e(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=t.apply(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Ws([void 0],n[0].concat(this)))):new(e.bind.apply(e,Ws([void 0],n.concat(this))))},e}(Array),yR=function(t){f0(e,t);function e(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=t.apply(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Ws([void 0],n[0].concat(this)))):new(e.bind.apply(e,Ws([void 0],n.concat(this))))},e}(Array);function xR(t){return typeof t=="boolean"}function SR(){return function(e){return ER(e)}}function ER(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var i=new _R;return n&&(xR(n)?i.push(Xm):i.push(Xm.withExtraArgument(n.extraArgument))),i}var MR=!0;function TR(t){var e=SR(),n=t||{},i=n.reducer,r=i===void 0?void 0:i,o=n.middleware,s=o===void 0?e():o,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,f=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof r=="function")p=r;else if(vR(r))p=aR(r);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=s;typeof y=="function"&&(y=y(e));var _=lR.apply(void 0,y),m=Cl;l&&(m=gR(Ao({trace:!MR},typeof l=="object"&&l)));var c=new yR(_),v=c;Array.isArray(d)?v=Ws([_],d):typeof d=="function"&&(v=d(c));var g=m.apply(void 0,v);return l0(p,f,g)}function Ro(t,e){function n(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(e){var o=e.apply(void 0,i);if(!o)throw new Error("prepareAction did not return an object");return Ao(Ao({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:i[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(i){return i.type===t},n}var wR="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",AR=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=wR[Math.random()*64|0];return e},RR=["name","message","stack","code"],Pc=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),Ym=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),CR=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,i=RR;n<i.length;n++){var r=i[n];typeof t[r]=="string"&&(e[r]=t[r])}return e}return{message:String(t)}};(function(){function t(e,n,i){var r=Ro(e+"/fulfilled",function(u,f,h,d){return{payload:u,meta:bc(Ao({},d||{}),{arg:h,requestId:f,requestStatus:"fulfilled"})}}),o=Ro(e+"/pending",function(u,f,h){return{payload:void 0,meta:bc(Ao({},h||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),s=Ro(e+"/rejected",function(u,f,h,d,p){return{payload:d,error:(i&&i.serializeError||CR)(u||"Rejected"),meta:bc(Ao({},p||{}),{arg:h,requestId:f,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(f,h,d){var p=i!=null&&i.idGenerator?i.idGenerator(u):AR(),y=new a,_;function m(v){_=v,y.abort()}var c=function(){return mR(this,null,function(){var v,g,x,E,R,b,P;return uR(this,function(S){switch(S.label){case 0:return S.trys.push([0,4,,5]),E=(v=i==null?void 0:i.condition)==null?void 0:v.call(i,u,{getState:h,extra:d}),PR(E)?[4,E]:[3,2];case 1:E=S.sent(),S.label=2;case 2:if(E===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=new Promise(function(w,$){return y.signal.addEventListener("abort",function(){return $({name:"AbortError",message:_||"Aborted"})})}),f(o(p,u,(g=i==null?void 0:i.getPendingMeta)==null?void 0:g.call(i,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([R,Promise.resolve(n(u,{dispatch:f,getState:h,extra:d,requestId:p,signal:y.signal,abort:m,rejectWithValue:function(w,$){return new Pc(w,$)},fulfillWithValue:function(w,$){return new Ym(w,$)}})).then(function(w){if(w instanceof Pc)throw w;return w instanceof Ym?r(w.payload,p,u,w.meta):r(w,p,u)})])];case 3:return x=S.sent(),[3,5];case 4:return b=S.sent(),x=b instanceof Pc?s(null,p,u,b.payload,b.meta):s(b,p,u),[3,5];case 5:return P=i&&!i.dispatchConditionRejection&&s.match(x)&&x.meta.condition,P||f(x),[2,x]}})})}();return Object.assign(c,{abort:m,requestId:p,arg:u,unwrap:function(){return c.then(bR)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:r,typePrefix:e})}return t.withTypes=function(){return t},t})();function bR(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function PR(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var qd="listenerMiddleware";Ro(qd+"/add");Ro(qd+"/removeAll");Ro(qd+"/remove");var qm;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ZA();const Km={dimensions:{x:20,y:20,z:20},hasUpdate:!1},LR=(t=Km,e)=>{switch(e.type){case"UPDATE_HANDLED":return{hasUpdate:!1};case"UPDATE":return{dimensions:{x:e.payload.x,y:e.payload.y,z:e.payload.z},hasUpdate:!0};case"RESET":return{...Km};default:return t}},Zm={x:0,y:0,z:0,position:null},DR=(t=Zm,e)=>{switch(e.type){case"UPDATE":return{...t,x:e.payload.x,y:e.payload.y,z:e.payload.z};case"SET_POSITION":return{...t,position:e.payload};case"RESET":return{...Zm};default:return t}},UR={container:LR,box:DR},NR=TR({reducer:UR});Lc.createRoot(document.getElementById("root")).render(Ge.jsx(ag.StrictMode,{children:Ge.jsx(bS,{store:NR,children:Ge.jsx(XA,{})})}));
