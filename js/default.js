function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function r(e){var t=e.length,r=ae.type(e);return"function"===r||ae.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}function n(e,t,r){if(ae.isFunction(t))return ae.grep(e,function(e,n){return!!t.call(e,n,e)!==r});if(t.nodeType)return ae.grep(e,function(e){return e===t!==r});if("string"==typeof t){if(pe.test(t))return ae.filter(t,e,r);t=ae.filter(t,e)}return ae.grep(e,function(e){return ae.inArray(e,t)>=0!==r})}function i(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function a(e){var t=Te[e]={};return ae.each(e.match(we)||[],function(e,r){t[r]=!0}),t}function o(){ye.addEventListener?(ye.removeEventListener("DOMContentLoaded",l,!1),e.removeEventListener("load",l,!1)):(ye.detachEvent("onreadystatechange",l),e.detachEvent("onload",l))}function l(){(ye.addEventListener||"load"===event.type||"complete"===ye.readyState)&&(o(),ae.ready())}function s(e,t,r){if(void 0===r&&1===e.nodeType){var n="data-"+t.replace(ke,"-$1").toLowerCase();if(r=e.getAttribute(n),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:Ce.test(r)?ae.parseJSON(r):r}catch(i){}ae.data(e,t,r)}else r=void 0}return r}function u(e){var t;for(t in e)if(("data"!==t||!ae.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,r,n){if(ae.acceptData(e)){var i,a,o=ae.expando,l=e.nodeType,s=l?ae.cache:e,u=l?e[o]:e[o]&&o;if(u&&s[u]&&(n||s[u].data)||void 0!==r||"string"!=typeof t)return u||(u=l?e[o]=U.pop()||ae.guid++:o),s[u]||(s[u]=l?{}:{toJSON:ae.noop}),("object"==typeof t||"function"==typeof t)&&(n?s[u]=ae.extend(s[u],t):s[u].data=ae.extend(s[u].data,t)),a=s[u],n||(a.data||(a.data={}),a=a.data),void 0!==r&&(a[ae.camelCase(t)]=r),"string"==typeof t?(i=a[t],null==i&&(i=a[ae.camelCase(t)])):i=a,i}}function d(e,t,r){if(ae.acceptData(e)){var n,i,a=e.nodeType,o=a?ae.cache:e,l=a?e[ae.expando]:ae.expando;if(o[l]){if(t&&(n=r?o[l]:o[l].data)){ae.isArray(t)?t=t.concat(ae.map(t,ae.camelCase)):t in n?t=[t]:(t=ae.camelCase(t),t=t in n?[t]:t.split(" ")),i=t.length;for(;i--;)delete n[t[i]];if(r?!u(n):!ae.isEmptyObject(n))return}(r||(delete o[l].data,u(o[l])))&&(a?ae.cleanData([e],!0):ne.deleteExpando||o!=o.window?delete o[l]:o[l]=null)}}}function f(){return!0}function p(){return!1}function h(){try{return ye.activeElement}catch(e){}}function y(e){var t=$e.split("|"),r=e.createDocumentFragment();if(r.createElement)for(;t.length;)r.createElement(t.pop());return r}function m(e,t){var r,n,i=0,a=typeof e.getElementsByTagName!==je?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==je?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],r=e.childNodes||e;null!=(n=r[i]);i++)!t||ae.nodeName(n,t)?a.push(n):ae.merge(a,m(n,t));return void 0===t||t&&ae.nodeName(e,t)?ae.merge([e],a):a}function g(e){Ee.test(e.type)&&(e.defaultChecked=e.checked)}function v(e,t){return ae.nodeName(e,"table")&&ae.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function b(e){return e.type=(null!==ae.find.attr(e,"type"))+"/"+e.type,e}function w(e){var t=Ue.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function T(e,t){for(var r,n=0;null!=(r=e[n]);n++)ae._data(r,"globalEval",!t||ae._data(t[n],"globalEval"))}function x(e,t){if(1===t.nodeType&&ae.hasData(e)){var r,n,i,a=ae._data(e),o=ae._data(t,a),l=a.events;if(l){delete o.handle,o.events={};for(r in l)for(n=0,i=l[r].length;i>n;n++)ae.event.add(t,r,l[r][n])}o.data&&(o.data=ae.extend({},o.data))}}function P(e,t){var r,n,i;if(1===t.nodeType){if(r=t.nodeName.toLowerCase(),!ne.noCloneEvent&&t[ae.expando]){i=ae._data(t);for(n in i.events)ae.removeEvent(t,n,i.handle);t.removeAttribute(ae.expando)}"script"===r&&t.text!==e.text?(b(t).text=e.text,w(t)):"object"===r?(t.parentNode&&(t.outerHTML=e.outerHTML),ne.html5Clone&&e.innerHTML&&!ae.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===r&&Ee.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===r?t.defaultSelected=t.selected=e.defaultSelected:("input"===r||"textarea"===r)&&(t.defaultValue=e.defaultValue)}}function j(t,r){var n=ae(r.createElement(t)).appendTo(r.body),i=e.getDefaultComputedStyle?e.getDefaultComputedStyle(n[0]).display:ae.css(n[0],"display");return n.detach(),i}function C(e){var t=ye,r=et[e];return r||(r=j(e,t),"none"!==r&&r||(Ze=(Ze||ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ze[0].contentWindow||Ze[0].contentDocument).document,t.write(),t.close(),r=j(e,t),Ze.detach()),et[e]=r),r}function k(e,t){return{get:function(){var r=e();if(null!=r)return r?void delete this.get:(this.get=t).apply(this,arguments)}}}function _(e,t){if(t in e)return t;for(var r=t.charAt(0).toUpperCase()+t.slice(1),n=t,i=pt.length;i--;)if(t=pt[i]+r,t in e)return t;return n}function S(e,t){for(var r,n,i,a=[],o=0,l=e.length;l>o;o++)n=e[o],n.style&&(a[o]=ae._data(n,"olddisplay"),r=n.style.display,t?(a[o]||"none"!==r||(n.style.display=""),""===n.style.display&&Ye(n)&&(a[o]=ae._data(n,"olddisplay",C(n.nodeName)))):a[o]||(i=Ye(n),(r&&"none"!==r||!i)&&ae._data(n,"olddisplay",i?r:ae.css(n,"display"))));for(o=0;l>o;o++)n=e[o],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?a[o]||"":"none"));return e}function Y(e,t,r){var n=ut.exec(t);return n?Math.max(0,n[1]-(r||0))+(n[2]||"px"):t}function A(e,t,r,n,i){for(var a=r===(n?"border":"content")?4:"width"===t?1:0,o=0;4>a;a+=2)"margin"===r&&(o+=ae.css(e,r+Se[a],!0,i)),n?("content"===r&&(o-=ae.css(e,"padding"+Se[a],!0,i)),"margin"!==r&&(o-=ae.css(e,"border"+Se[a]+"Width",!0,i))):(o+=ae.css(e,"padding"+Se[a],!0,i),"padding"!==r&&(o+=ae.css(e,"border"+Se[a]+"Width",!0,i)));return o}function E(e,t,r){var n=!0,i="width"===t?e.offsetWidth:e.offsetHeight,a=tt(e),o=ne.boxSizing()&&"border-box"===ae.css(e,"boxSizing",!1,a);if(0>=i||null==i){if(i=rt(e,t,a),(0>i||null==i)&&(i=e.style[t]),it.test(i))return i;n=o&&(ne.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+A(e,t,r||(o?"border":"content"),n,a)+"px"}function Q(e,t,r,n,i){return new Q.prototype.init(e,t,r,n,i)}function D(){return setTimeout(function(){ht=void 0}),ht=ae.now()}function O(e,t){var r,n={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)r=Se[i],n["margin"+r]=n["padding"+r]=e;return t&&(n.opacity=n.width=e),n}function N(e,t,r){for(var n,i=(wt[t]||[]).concat(wt["*"]),a=0,o=i.length;o>a;a++)if(n=i[a].call(r,t,e))return n}function I(e,t,r){var n,i,a,o,l,s,u,c,d=this,f={},p=e.style,h=e.nodeType&&Ye(e),y=ae._data(e,"fxshow");r.queue||(l=ae._queueHooks(e,"fx"),null==l.unqueued&&(l.unqueued=0,s=l.empty.fire,l.empty.fire=function(){l.unqueued||s()}),l.unqueued++,d.always(function(){d.always(function(){l.unqueued--,ae.queue(e,"fx").length||l.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(r.overflow=[p.overflow,p.overflowX,p.overflowY],u=ae.css(e,"display"),c=C(e.nodeName),"none"===u&&(u=c),"inline"===u&&"none"===ae.css(e,"float")&&(ne.inlineBlockNeedsLayout&&"inline"!==c?p.zoom=1:p.display="inline-block")),r.overflow&&(p.overflow="hidden",ne.shrinkWrapBlocks()||d.always(function(){p.overflow=r.overflow[0],p.overflowX=r.overflow[1],p.overflowY=r.overflow[2]}));for(n in t)if(i=t[n],mt.exec(i)){if(delete t[n],a=a||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!y||void 0===y[n])continue;h=!0}f[n]=y&&y[n]||ae.style(e,n)}if(!ae.isEmptyObject(f)){y?"hidden"in y&&(h=y.hidden):y=ae._data(e,"fxshow",{}),a&&(y.hidden=!h),h?ae(e).show():d.done(function(){ae(e).hide()}),d.done(function(){var t;ae._removeData(e,"fxshow");for(t in f)ae.style(e,t,f[t])});for(n in f)o=N(h?y[n]:0,n,d),n in y||(y[n]=o.start,h&&(o.end=o.start,o.start="width"===n||"height"===n?1:0))}}function $(e,t){var r,n,i,a,o;for(r in e)if(n=ae.camelCase(r),i=t[n],a=e[r],ae.isArray(a)&&(i=a[1],a=e[r]=a[0]),r!==n&&(e[n]=a,delete e[r]),o=ae.cssHooks[n],o&&"expand"in o){a=o.expand(a),delete e[n];for(r in a)r in e||(e[r]=a[r],t[r]=i)}else t[n]=i}function B(e,t,r){var n,i,a=0,o=bt.length,l=ae.Deferred().always(function(){delete s.elem}),s=function(){if(i)return!1;for(var t=ht||D(),r=Math.max(0,u.startTime+u.duration-t),n=r/u.duration||0,a=1-n,o=0,s=u.tweens.length;s>o;o++)u.tweens[o].run(a);return l.notifyWith(e,[u,a,r]),1>a&&s?r:(l.resolveWith(e,[u]),!1)},u=l.promise({elem:e,props:ae.extend({},t),opts:ae.extend(!0,{specialEasing:{}},r),originalProperties:t,originalOptions:r,startTime:ht||D(),duration:r.duration,tweens:[],createTween:function(t,r){var n=ae.Tween(e,u.opts,t,r,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(n),n},stop:function(t){var r=0,n=t?u.tweens.length:0;if(i)return this;for(i=!0;n>r;r++)u.tweens[r].run(1);return t?l.resolveWith(e,[u,t]):l.rejectWith(e,[u,t]),this}}),c=u.props;for($(c,u.opts.specialEasing);o>a;a++)if(n=bt[a].call(u,e,c,u.opts))return n;return ae.map(c,N,u),ae.isFunction(u.opts.start)&&u.opts.start.call(e,u),ae.fx.timer(ae.extend(s,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function M(e){return function(t,r){"string"!=typeof t&&(r=t,t="*");var n,i=0,a=t.toLowerCase().match(we)||[];if(ae.isFunction(r))for(;n=a[i++];)"+"===n.charAt(0)?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(r)):(e[n]=e[n]||[]).push(r)}}function L(e,t,r,n){function i(l){var s;return a[l]=!0,ae.each(e[l]||[],function(e,l){var u=l(t,r,n);return"string"!=typeof u||o||a[u]?o?!(s=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),s}var a={},o=e===qt;return i(t.dataTypes[0])||!a["*"]&&i("*")}function z(e,t){var r,n,i=ae.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ae.extend(!0,e,r),e}function F(e,t,r){for(var n,i,a,o,l=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in l)if(l[o]&&l[o].test(i)){s.unshift(o);break}if(s[0]in r)a=s[0];else{for(o in r){if(!s[0]||e.converters[o+" "+s[0]]){a=o;break}n||(n=o)}a=a||n}return a?(a!==s[0]&&s.unshift(a),r[a]):void 0}function R(e,t,r,n){var i,a,o,l,s,u={},c=e.dataTypes.slice();if(c[1])for(o in e.converters)u[o.toLowerCase()]=e.converters[o];for(a=c.shift();a;)if(e.responseFields[a]&&(r[e.responseFields[a]]=t),!s&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=a,a=c.shift())if("*"===a)a=s;else if("*"!==s&&s!==a){if(o=u[s+" "+a]||u["* "+a],!o)for(i in u)if(l=i.split(" "),l[1]===a&&(o=u[s+" "+l[0]]||u["* "+l[0]])){o===!0?o=u[i]:u[i]!==!0&&(a=l[0],c.unshift(l[1]));break}if(o!==!0)if(o&&e["throws"])t=o(t);else try{t=o(t)}catch(d){return{state:"parsererror",error:o?d:"No conversion from "+s+" to "+a}}}return{state:"success",data:t}}function q(e,t,r,n){var i;if(ae.isArray(t))ae.each(t,function(t,i){r||Ut.test(e)?n(e,i):q(e+"["+("object"==typeof i?t:"")+"]",i,r,n)});else if(r||"object"!==ae.type(t))n(e,t);else for(i in t)q(e+"["+i+"]",t[i],r,n)}function H(){try{return new e.XMLHttpRequest}catch(t){}}function W(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function V(e){return ae.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var U=[],X=U.slice,J=U.concat,K=U.push,G=U.indexOf,Z={},ee=Z.toString,te=Z.hasOwnProperty,re="".trim,ne={},ie="1.11.0",ae=function(e,t){return new ae.fn.init(e,t)},oe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,le=/^-ms-/,se=/-([\da-z])/gi,ue=function(e,t){return t.toUpperCase()};ae.fn=ae.prototype={jquery:ie,constructor:ae,selector:"",length:0,toArray:function(){return X.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:X.call(this)},pushStack:function(e){var t=ae.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ae.each(this,e,t)},map:function(e){return this.pushStack(ae.map(this,function(t,r){return e.call(t,r,t)}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,r=+e+(0>e?t:0);return this.pushStack(r>=0&&t>r?[this[r]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:K,sort:U.sort,splice:U.splice},ae.extend=ae.fn.extend=function(){var e,t,r,n,i,a,o=arguments[0]||{},l=1,s=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[l]||{},l++),"object"==typeof o||ae.isFunction(o)||(o={}),l===s&&(o=this,l--);s>l;l++)if(null!=(i=arguments[l]))for(n in i)e=o[n],r=i[n],o!==r&&(u&&r&&(ae.isPlainObject(r)||(t=ae.isArray(r)))?(t?(t=!1,a=e&&ae.isArray(e)?e:[]):a=e&&ae.isPlainObject(e)?e:{},o[n]=ae.extend(u,a,r)):void 0!==r&&(o[n]=r));return o},ae.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ae.type(e)},isArray:Array.isArray||function(e){return"array"===ae.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return e-parseFloat(e)>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==ae.type(e)||e.nodeType||ae.isWindow(e))return!1;try{if(e.constructor&&!te.call(e,"constructor")&&!te.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(ne.ownLast)for(t in e)return te.call(e,t);for(t in e);return void 0===t||te.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Z[ee.call(e)]||"object":typeof e},globalEval:function(t){t&&ae.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(le,"ms-").replace(se,ue)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,a=0,o=e.length,l=r(e);if(n){if(l)for(;o>a&&(i=t.apply(e[a],n),i!==!1);a++);else for(a in e)if(i=t.apply(e[a],n),i===!1)break}else if(l)for(;o>a&&(i=t.call(e[a],a,e[a]),i!==!1);a++);else for(a in e)if(i=t.call(e[a],a,e[a]),i===!1)break;return e},trim:re&&!re.call("\ufeff ")?function(e){return null==e?"":re.call(e)}:function(e){return null==e?"":(e+"").replace(oe,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(r(Object(e))?ae.merge(n,"string"==typeof e?[e]:e):K.call(n,e)),n},inArray:function(e,t,r){var n;if(t){if(G)return G.call(t,e,r);for(n=t.length,r=r?0>r?Math.max(0,n+r):r:0;n>r;r++)if(r in t&&t[r]===e)return r}return-1},merge:function(e,t){for(var r=+t.length,n=0,i=e.length;r>n;)e[i++]=t[n++];if(r!==r)for(;void 0!==t[n];)e[i++]=t[n++];return e.length=i,e},grep:function(e,t,r){for(var n,i=[],a=0,o=e.length,l=!r;o>a;a++)n=!t(e[a],a),n!==l&&i.push(e[a]);return i},map:function(e,t,n){var i,a=0,o=e.length,l=r(e),s=[];if(l)for(;o>a;a++)i=t(e[a],a,n),null!=i&&s.push(i);else for(a in e)i=t(e[a],a,n),null!=i&&s.push(i);return J.apply([],s)},guid:1,proxy:function(e,t){var r,n,i;return"string"==typeof t&&(i=e[t],t=e,e=i),ae.isFunction(e)?(r=X.call(arguments,2),n=function(){return e.apply(t||this,r.concat(X.call(arguments)))},n.guid=e.guid=e.guid||ae.guid++,n):void 0},now:function(){return+new Date},support:ne}),ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Z["[object "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,r,n){var i,a,o,l,s,u,d,h,y,m;if((t?t.ownerDocument||t:L)!==Q&&E(t),t=t||Q,r=r||[],!e||"string"!=typeof e)return r;if(1!==(l=t.nodeType)&&9!==l)return[];if(O&&!n){if(i=ve.exec(e))if(o=i[1]){if(9===l){if(a=t.getElementById(o),!a||!a.parentNode)return r;if(a.id===o)return r.push(a),r}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(o))&&B(t,a)&&a.id===o)return r.push(a),r}else{if(i[2])return Z.apply(r,t.getElementsByTagName(e)),r;if((o=i[3])&&P.getElementsByClassName&&t.getElementsByClassName)return Z.apply(r,t.getElementsByClassName(o)),r}if(P.qsa&&(!N||!N.test(e))){if(h=d=M,y=t,m=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){for(u=f(e),(d=t.getAttribute("id"))?h=d.replace(we,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",s=u.length;s--;)u[s]=h+p(u[s]);y=be.test(e)&&c(t.parentNode)||t,m=u.join(",")}if(m)try{return Z.apply(r,y.querySelectorAll(m)),r}catch(g){}finally{d||t.removeAttribute("id")}}}return T(e.replace(se,"$1"),t,r,n)}function r(){function e(r,n){return t.push(r+" ")>j.cacheLength&&delete e[t.shift()],e[r+" "]=n}var t=[];return e}function n(e){return e[M]=!0,e}function i(e){var t=Q.createElement("div");try{return!!e(t)}catch(r){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var r=e.split("|"),n=e.length;n--;)j.attrHandle[r[n]]=t}function o(e,t){var r=t&&e,n=r&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||U)-(~e.sourceIndex||U);if(n)return n;if(r)for(;r=r.nextSibling;)if(r===t)return-1;return e?1:-1}function l(e){return function(t){var r=t.nodeName.toLowerCase();return"input"===r&&t.type===e}}function s(e){return function(t){var r=t.nodeName.toLowerCase();return("input"===r||"button"===r)&&t.type===e}}function u(e){return n(function(t){return t=+t,n(function(r,n){for(var i,a=e([],r.length,t),o=a.length;o--;)r[i=a[o]]&&(r[i]=!(n[i]=r[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==V&&e}function d(){}function f(e,r){var n,i,a,o,l,s,u,c=q[e+" "];if(c)return r?0:c.slice(0);for(l=e,s=[],u=j.preFilter;l;){(!n||(i=ue.exec(l)))&&(i&&(l=l.slice(i[0].length)||l),s.push(a=[])),n=!1,(i=ce.exec(l))&&(n=i.shift(),a.push({value:n,type:i[0].replace(se," ")}),l=l.slice(n.length));for(o in j.filter)!(i=he[o].exec(l))||u[o]&&!(i=u[o](i))||(n=i.shift(),a.push({value:n,type:o,matches:i}),l=l.slice(n.length));if(!n)break}return r?l.length:l?t.error(e):q(e,s).slice(0)}function p(e){for(var t=0,r=e.length,n="";r>t;t++)n+=e[t].value;return n}function h(e,t,r){var n=t.dir,i=r&&"parentNode"===n,a=F++;return t.first?function(t,r,a){for(;t=t[n];)if(1===t.nodeType||i)return e(t,r,a)}:function(t,r,o){var l,s,u=[z,a];if(o){for(;t=t[n];)if((1===t.nodeType||i)&&e(t,r,o))return!0}else for(;t=t[n];)if(1===t.nodeType||i){if(s=t[M]||(t[M]={}),(l=s[n])&&l[0]===z&&l[1]===a)return u[2]=l[2];if(s[n]=u,u[2]=e(t,r,o))return!0}}}function y(e){return e.length>1?function(t,r,n){for(var i=e.length;i--;)if(!e[i](t,r,n))return!1;return!0}:e[0]}function m(e,t,r,n,i){for(var a,o=[],l=0,s=e.length,u=null!=t;s>l;l++)(a=e[l])&&(!r||r(a,n,i))&&(o.push(a),u&&t.push(l));return o}function g(e,t,r,i,a,o){return i&&!i[M]&&(i=g(i)),a&&!a[M]&&(a=g(a,o)),n(function(n,o,l,s){var u,c,d,f=[],p=[],h=o.length,y=n||w(t||"*",l.nodeType?[l]:l,[]),g=!e||!n&&t?y:m(y,f,e,l,s),v=r?a||(n?e:h||i)?[]:o:g;if(r&&r(g,v,l,s),i)for(u=m(v,p),i(u,[],l,s),c=u.length;c--;)(d=u[c])&&(v[p[c]]=!(g[p[c]]=d));if(n){if(a||e){if(a){for(u=[],c=v.length;c--;)(d=v[c])&&u.push(g[c]=d);a(null,v=[],u,s)}for(c=v.length;c--;)(d=v[c])&&(u=a?te.call(n,d):f[c])>-1&&(n[u]=!(o[u]=d))}}else v=m(v===o?v.splice(h,v.length):v),a?a(null,o,v,s):Z.apply(o,v)})}function v(e){for(var t,r,n,i=e.length,a=j.relative[e[0].type],o=a||j.relative[" "],l=a?1:0,s=h(function(e){return e===t},o,!0),u=h(function(e){return te.call(t,e)>-1},o,!0),c=[function(e,r,n){return!a&&(n||r!==S)||((t=r).nodeType?s(e,r,n):u(e,r,n))}];i>l;l++)if(r=j.relative[e[l].type])c=[h(y(c),r)];else{if(r=j.filter[e[l].type].apply(null,e[l].matches),r[M]){for(n=++l;i>n&&!j.relative[e[n].type];n++);return g(l>1&&y(c),l>1&&p(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(se,"$1"),r,n>l&&v(e.slice(l,n)),i>n&&v(e=e.slice(n)),i>n&&p(e))}c.push(r)}return y(c)}function b(e,r){var i=r.length>0,a=e.length>0,o=function(n,o,l,s,u){var c,d,f,p=0,h="0",y=n&&[],g=[],v=S,b=n||a&&j.find.TAG("*",u),w=z+=null==v?1:Math.random()||.1,T=b.length;for(u&&(S=o!==Q&&o);h!==T&&null!=(c=b[h]);h++){if(a&&c){for(d=0;f=e[d++];)if(f(c,o,l)){s.push(c);break}u&&(z=w)}i&&((c=!f&&c)&&p--,n&&y.push(c))}if(p+=h,i&&h!==p){for(d=0;f=r[d++];)f(y,g,o,l);if(n){if(p>0)for(;h--;)y[h]||g[h]||(g[h]=K.call(s));g=m(g)}Z.apply(s,g),u&&!n&&g.length>0&&p+r.length>1&&t.uniqueSort(s)}return u&&(z=w,S=v),y};return i?n(o):o}function w(e,r,n){for(var i=0,a=r.length;a>i;i++)t(e,r[i],n);return n}function T(e,t,r,n){var i,a,o,l,s,u=f(e);if(!n&&1===u.length){if(a=u[0]=u[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&P.getById&&9===t.nodeType&&O&&j.relative[a[1].type]){if(t=(j.find.ID(o.matches[0].replace(Te,xe),t)||[])[0],!t)return r;e=e.slice(a.shift().value.length)}for(i=he.needsContext.test(e)?0:a.length;i--&&(o=a[i],!j.relative[l=o.type]);)if((s=j.find[l])&&(n=s(o.matches[0].replace(Te,xe),be.test(a[0].type)&&c(t.parentNode)||t))){if(a.splice(i,1),e=n.length&&p(a),!e)return Z.apply(r,n),r;break}}return _(e,u)(n,t,!O,r,be.test(e)&&c(t.parentNode)||t),r}var x,P,j,C,k,_,S,Y,A,E,Q,D,O,N,I,$,B,M="sizzle"+-new Date,L=e.document,z=0,F=0,R=r(),q=r(),H=r(),W=function(e,t){return e===t&&(A=!0),0},V="undefined",U=1<<31,X={}.hasOwnProperty,J=[],K=J.pop,G=J.push,Z=J.push,ee=J.slice,te=J.indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(this[t]===e)return t;return-1},re="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ae=ie.replace("w","w#"),oe="\\["+ne+"*("+ie+")"+ne+"*(?:([*^$|!~]?=)"+ne+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ae+")|)|)"+ne+"*\\]",le=":("+ie+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+oe.replace(3,8)+")*)|.*)\\)|)",se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(le),pe=new RegExp("^"+ae+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+le),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+re+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ye=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,we=/'|\\/g,Te=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,r){var n="0x"+t-65536;return n!==n||r?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)};try{Z.apply(J=ee.call(L.childNodes),L.childNodes),J[L.childNodes.length].nodeType}catch(Pe){Z={apply:J.length?function(e,t){G.apply(e,ee.call(t))}:function(e,t){for(var r=e.length,n=0;e[r++]=t[n++];);e.length=r-1}}}P=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},E=t.setDocument=function(e){var t,r=e?e.ownerDocument||e:L,n=r.defaultView;return r!==Q&&9===r.nodeType&&r.documentElement?(Q=r,D=r.documentElement,O=!k(r),n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",function(){E()},!1):n.attachEvent&&n.attachEvent("onunload",function(){E()})),P.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),P.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),P.getElementsByClassName=ge.test(r.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),P.getById=i(function(e){return D.appendChild(e).id=M,!r.getElementsByName||!r.getElementsByName(M).length}),P.getById?(j.find.ID=function(e,t){if(typeof t.getElementById!==V&&O){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}},j.filter.ID=function(e){var t=e.replace(Te,xe);return function(e){return e.getAttribute("id")===t}}):(delete j.find.ID,j.filter.ID=function(e){var t=e.replace(Te,xe);return function(e){var r=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return r&&r.value===t}}),j.find.TAG=P.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==V?t.getElementsByTagName(e):void 0}:function(e,t){var r,n=[],i=0,a=t.getElementsByTagName(e);if("*"===e){for(;r=a[i++];)1===r.nodeType&&n.push(r);return n}return a},j.find.CLASS=P.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==V&&O?t.getElementsByClassName(e):void 0},I=[],N=[],(P.qsa=ge.test(r.querySelectorAll))&&(i(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&N.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||N.push("\\["+ne+"*(?:value|"+re+")"),e.querySelectorAll(":checked").length||N.push(":checked")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&N.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||N.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),N.push(",.*:")})),(P.matchesSelector=ge.test($=D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&i(function(e){P.disconnectedMatch=$.call(e,"div"),$.call(e,"[s!='']:x"),I.push("!=",le)}),N=N.length&&new RegExp(N.join("|")),I=I.length&&new RegExp(I.join("|")),t=ge.test(D.compareDocumentPosition),B=t||ge.test(D.contains)?function(e,t){var r=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(r.contains?r.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},W=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!P.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===L&&B(L,e)?-1:t===r||t.ownerDocument===L&&B(L,t)?1:Y?te.call(Y,e)-te.call(Y,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,i=0,a=e.parentNode,l=t.parentNode,s=[e],u=[t];if(!a||!l)return e===r?-1:t===r?1:a?-1:l?1:Y?te.call(Y,e)-te.call(Y,t):0;if(a===l)return o(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[i]===u[i];)i++;return i?o(s[i],u[i]):s[i]===L?-1:u[i]===L?1:0},r):Q},t.matches=function(e,r){return t(e,null,null,r)},t.matchesSelector=function(e,r){if((e.ownerDocument||e)!==Q&&E(e),r=r.replace(de,"='$1']"),P.matchesSelector&&O&&(!I||!I.test(r))&&(!N||!N.test(r)))try{var n=$.call(e,r);if(n||P.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return t(r,Q,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==Q&&E(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==Q&&E(e);var r=j.attrHandle[t.toLowerCase()],n=r&&X.call(j.attrHandle,t.toLowerCase())?r(e,t,!O):void 0;return void 0!==n?n:P.attributes||!O?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,r=[],n=0,i=0;if(A=!P.detectDuplicates,Y=!P.sortStable&&e.slice(0),e.sort(W),A){for(;t=e[i++];)t===e[i]&&(n=r.push(i));for(;n--;)e.splice(r[n],1)}return Y=null,e},C=t.getText=function(e){var t,r="",n=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[n++];)r+=C(t);return r},j=t.selectors={cacheLength:50,createPseudo:n,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Te,xe),e[3]=(e[4]||e[5]||"").replace(Te,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,r=!e[5]&&e[2];return he.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:r&&fe.test(r)&&(t=f(r,!0))&&(t=r.indexOf(")",r.length-t)-r.length)&&(e[0]=e[0].slice(0,t),e[2]=r.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Te,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=R[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&R(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,r,n){return function(i){var a=t.attr(i,e);return null==a?"!="===r:r?(a+="","="===r?a===n:"!="===r?a!==n:"^="===r?n&&0===a.indexOf(n):"*="===r?n&&a.indexOf(n)>-1:"$="===r?n&&a.slice(-n.length)===n:"~="===r?(" "+a+" ").indexOf(n)>-1:"|="===r?a===n||a.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,r,n,i){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),l="of-type"===t;return 1===n&&0===i?function(e){return!!e.parentNode}:function(t,r,s){var u,c,d,f,p,h,y=a!==o?"nextSibling":"previousSibling",m=t.parentNode,g=l&&t.nodeName.toLowerCase(),v=!s&&!l;if(m){if(a){for(;y;){for(d=t;d=d[y];)if(l?d.nodeName.toLowerCase()===g:1===d.nodeType)return!1;h=y="only"===e&&!h&&"nextSibling"}return!0}if(h=[o?m.firstChild:m.lastChild],o&&v){for(c=m[M]||(m[M]={}),u=c[e]||[],p=u[0]===z&&u[1],f=u[0]===z&&u[2],d=p&&m.childNodes[p];d=++p&&d&&d[y]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){c[e]=[z,p,f];break}}else if(v&&(u=(t[M]||(t[M]={}))[e])&&u[0]===z)f=u[1];else for(;(d=++p&&d&&d[y]||(f=p=0)||h.pop())&&((l?d.nodeName.toLowerCase()!==g:1!==d.nodeType)||!++f||(v&&((d[M]||(d[M]={}))[e]=[z,f]),d!==t)););return f-=i,f===n||f%n===0&&f/n>=0}}},PSEUDO:function(e,r){var i,a=j.pseudos[e]||j.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[M]?a(r):a.length>1?(i=[e,e,"",r],j.setFilters.hasOwnProperty(e.toLowerCase())?n(function(e,t){for(var n,i=a(e,r),o=i.length;o--;)n=te.call(e,i[o]),e[n]=!(t[n]=i[o])}):function(e){return a(e,0,i)}):a}},pseudos:{not:n(function(e){var t=[],r=[],i=_(e.replace(se,"$1"));return i[M]?n(function(e,t,r,n){for(var a,o=i(e,null,n,[]),l=e.length;l--;)(a=o[l])&&(e[l]=!(t[l]=a))}):function(e,n,a){return t[0]=e,i(t,null,a,r),!r.pop()}}),has:n(function(e){return function(r){return t(e,r).length>0}}),contains:n(function(e){return function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:n(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Te,xe).toLowerCase(),function(t){var r;do if(r=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return r=r.toLowerCase(),r===e||0===r.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var r=e.location&&e.location.hash;return r&&r.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===Q.activeElement&&(!Q.hasFocus||Q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!j.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return ye.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase());
},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,r){return[0>r?r+t:r]}),even:u(function(e,t){for(var r=0;t>r;r+=2)e.push(r);return e}),odd:u(function(e,t){for(var r=1;t>r;r+=2)e.push(r);return e}),lt:u(function(e,t,r){for(var n=0>r?r+t:r;--n>=0;)e.push(n);return e}),gt:u(function(e,t,r){for(var n=0>r?r+t:r;++n<t;)e.push(n);return e})}},j.pseudos.nth=j.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})j.pseudos[x]=l(x);for(x in{submit:!0,reset:!0})j.pseudos[x]=s(x);return d.prototype=j.filters=j.pseudos,j.setFilters=new d,_=t.compile=function(e,t){var r,n=[],i=[],a=H[e+" "];if(!a){for(t||(t=f(e)),r=t.length;r--;)a=v(t[r]),a[M]?n.push(aP��
