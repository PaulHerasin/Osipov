/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

(function(e){"use strict";var t=e.fancybox,n=function(t,n,r){r=r||"";if(e.type(r)==="object"){r=e.param(r,true)}e.each(n,function(e,n){t=t.replace("$"+e,n||"")});if(r.length){t+=(t.indexOf("?")>0?"&":"?")+r}return t};t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,n,r){r.swf.flashVars="playerVars="+e.param(n,true);return"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[1]+"/"+e[3]+""+e[4]+"&output="+(e[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(t,r){var i=r.href||"",s=false,o,u,a,f;for(o in t){if(t.hasOwnProperty(o)){u=t[o];a=i.match(u.matcher);if(a){s=u.type;f=e.extend(true,{},u.params,r[o]||(e.isPlainObject(t[o])?t[o].params:null));i=e.type(u.url)==="function"?u.url.call(this,a,f,r):n(u.url,a,f);break}}}if(s){r.href=i;r.type=s;r.autoHeight=false}}}})(jQuery);
var BmRecaptcha = {
    lastId: null,
    render: function () {
        if (null === this.lastId) {
            this.lastId = grecaptcha.render($('.bmRecaptcha')[0], {
                'sitekey': JsGlobalConfig['recaptcha']['siteKey']
            });
        }

        return this.lastId;
    }
};

$(function() {
    $('form[data-form="login"]').each(function() {
        var $form = $(this),
            $submit,
            abTest = $form.find('input[name=ab_test_id]').attr('value'),
            dataLayerTitle;

        switch ($form.attr('action')) {
            case '/login/' :
                dataLayerTitle = 'Авторизация';
                break;
            case '/registration/' :
                dataLayerTitle = 'Регистрация';
                break;
            case '/request/auto/' :
                dataLayerTitle = 'Автозаявка';
                break;
            case '/user/passrecover/' :
                dataLayerTitle = 'Восстановление пароля';
                break;
            default:
                dataLayerTitle = undefined;
                break;
        }

        $form.on('submit', function() {
            if (Bridge.isMobile) {
                $submit = $form.find('input[type=submit]');

                $form.find('.item').removeClass('invalid').find('.error').empty();
                $form.find('.error-main').empty().hide();
            } else {
                $submit = $form.find('.js-form-submit');

                $form.find('.popup .popup__error').empty();
                $form.find('.item .data-input').removeClass('error');
                $form.find('.item .data-error').empty();
            }

            if ($submit.hasClass('disabled')) {
                return false;
            }

            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                beforeSend: function() {
                    $submit.addClass('disabled');
                },
                success: function(result) {
                    $submit.removeClass('disabled');

                    if (result['redirect']) {
                        if (result['abPage'] && abTest) {
                            Bm.ab.invokeTest(abTest, result['abPage']['uri'], result);

                            return false;
                        }

                        window.location.href = result['redirect'];
                    } else {
                        var captchaBlock = $form.find('.captchaBlock');

                        if (result['status'] == 'error') {
                            if ((result['rawMessage']) instanceof Object && result['rawMessage'][0] == undefined) {
                                for (var name in result['rawMessage']) {
                                    var $input = $form.find('input[name=' + name + ']');

                                    for (var i in result['rawMessage'][name]) {
                                        var message = result['rawMessage'][name][i];

                                        break;
                                    }

                                    if (Bridge.isMobile) {
                                        $input.parents('.item').addClass('invalid').find('.error').text(message);
                                    } else {
                                        $input.addClass('error').parents('.item').find('.data-error').text(message);
                                    }
                                }
                            } else {
                                var message = result['rawMessage'];

                                if ((result['rawMessage']) instanceof Array) {
                                    message = result['rawMessage'].shift();
                                }

                                var $input2 = $form.find('input').eq(0);

                                if (Bridge.isMobile) {
                                    $input2.parents('.item').addClass('invalid').find('.error').text(message);
                                } else {
                                    $input2.addClass('error').parents('.item').find('.data-error').text(message);
                                }

                                if ('need_captcha' in result && result.need_captcha) {
                                    grecaptcha.reset(BmRecaptcha.render());
                                    captchaBlock.removeClass('hidden');
                                } else {
                                    captchaBlock.addClass('hidden');
                                }
                            }
                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'unsuccessful',
                                    'errorCode': 'Ошибка валидации'
                                }
                            );
                        } else if (result['status'] == 'success') {
                            captchaBlock.addClass('hidden');
                            if (Bridge.isMobile) {
                                $form.remove('.popup__center');
                                $form.prepend('<div class="popup__center">' + result.message + '</div>');
                            } else {
                                $form.remove('.popup__text');
                                $form.prepend('<div class="popup__text">' + result.message + '</div>');
                            }

                            ga('send', 'event', 'button', 'start_reg_block');
                            ga('send', 'pageview', '/start_registrarion/button');

                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'successful'
                                }
                            );
                        }

                        $submit.removeClass('disabled');
                    }
                },
                error: function(result) {
                    $submit.removeClass('disabled');
                    $form.find('.error-main').text('Ошибка загрузки').show();
                    dataLayer.push({
                            'event': 'mixdata',
                            'eventCategory': 'Forms',
                            'eventAction': 'response',
                            'eventContent': dataLayerTitle,
                            'eventLabel': 'unsuccessful',
                            'errorCode': result.status + ' ' + result.statusText
                        }
                    );
                }
            });

            return false;
        });
    });
});
// bm global - moved from functions.js
Bm = {
    isMobile: false, // check on DOM ready (functions.js)
    mobile: {
        // init => mobile.js
    },
    social: {

    },
    user: {

    },
    feed: {

        /**
         * Работа с историей
         */
        changeHistory: function($el, event) {
            if (event.metaKey || event.ctrlKey || event.which == 2) {
                return false;
            }

            var post = $el.parents('.post').data('id'),
                path = window.location.pathname + '?from=' + post,
                $loading = $('.screen-loading'),
                $loadingIcon = $loading.children('.icon'),
                rotate,
                $content = Bridge.isMobile ? $('.js-main') : $('#main, #footer'),
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            $content.addClass('hidden');
            window.scrollTo(0, 0);

            setTimeout(function() {
                $loading.removeClass('hidden');
                rotate = rotateStart($loadingIcon);
            }, 5000);

            $(document).on('click', '.js-stop-screen-loading', function() {
                $loading.addClass('hidden');
                $content.removeClass('hidden');
                rotateStop($loadingIcon, rotate);
                window.scrollTo(0, scrollTop);
            });

            window.history.replaceState(null, null, path);
        },

        /**
         * Читать далее
         */
        readMore: function($button) {
            var $wrapper = $button.parents('.js-post-text-wrapper');
            var $full = $wrapper.find('.js-post-text-full');

            $full.toggleClass('hidden');

            if ($button.data('long-post')) {
                $button.removeClass('js-post-text-readmore');
            } else {
                $button.toggleClass('hidden');
            }
        }
    },
    ajax: function($item, data) {
        if ($item.hasClass('ajax-disabled')) {
            return false;
        }

        var $loading = $item.children('.loading'),
            rotate;

        $.ajax({
            type: data.type || 'POST',
            url: data.url,
            data: data.data,
            timeout: 30000,
            beforeSend: function(result) {
                $item.addClass('ajax-disabled');
                rotate = rotateStart($loading);

                if (data.beforeSend) {
                    data.beforeSend(result);
                }
            },
            success: function(result) {
                if (data.success) {
                    data.success(result);
                }
            },
            error: function(result) {
                if (data.error) {
                    data.error(result);
                }
            }
        }).always(function() {
            $item.removeClass('ajax-disabled');
            rotateStop($loading, rotate);
        });
    },
    fancybox: {
        modals: {
            standart: {
                options: {
                    maxWidth	: 800,
                    padding     : 0,
                    height		: 'auto',
                    width       : 'auto',
                    openEffect  : 'none',
                    closeEffect : 'none',
                    autoSize    : false,
                    fitToView   : false,
                    closeBtn    : false,
                    scrolling   : false
                }
            },
            auth: {
                id: '#popup_auth',
                selector: '.fancybox-popup_login',
                options: {
                    padding     : 0,
                    height		: 'auto',
                    width       : 'auto',
                    openEffect  : 'none',
                    closeEffect : 'none',
                    autoSize    : false,
                    fitToView   : false,
                    closeBtn    : false,
                    beforeClose : function() {
                        $('.popup .popup__error').empty().hide();
                        $('.popup .item .input').removeClass('error');
                        $('.popup .item .input-error').empty().hide();
                    },
                    afterShow: function() {
                        if (this.href === '#popup_auth') {
                            $('#popup_auth input[name="login"]').focus();
                        } else if (this.href === '#popup_registration') {
                            $('#popup_registration input[name="email"]').focus();
                        } else if (this.href === '#popup_pwd_remind') {
                            $('#popup_pwd_remind input[name="email"]').focus();
                        }
                    }
                },
                onInit: function() {
                    $(this.selector).fancybox(this.options);
                },
                open: function(title, successUrl) {
                    var $container = $(this.id);

                    successUrl = successUrl || null;
                    title = title || null;

                    if(successUrl) {
                        $container.find('input[name=success_url]').val(successUrl);
                    }
                    if(title) {
                        $container.find('h3').html(title);
                    }

                    $.fancybox.open(this.id, this.options);
                }
            },
            media: {
                selector: '[data-video="fancybox"]',
                options: {
                    openEffect  : 'none',
                    closeEffect : 'none',
                    type        : 'iframe',
                    helpers : {
                        media : {}
                    },
                    closeBtn: false,
                    beforeShow: function(){
                        this.skin.append('<div class="fancyboxClose"></div>');
                    }
                },
                onInit: function() {
                    $(this.selector).fancybox(this.options);
                }
            }
        },
        open: function(id) {
            $.fancybox.open({href: '#' + id}, Bm.fancybox.modals.standart.options);
        }
    },
    search: {
        show: function($el) {
            if ($el && $el.hasClass('js-disabled')) {
                return false;
            }

            var $popup = $('.search-popup_block'),
                $overlay = $('.search-overlay'),
                $body = $('body'),
                $input = $popup.find('.search-popup_input'),
                pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            $body.css({'overflow': 'hidden'}).scrollTop(pageScrollTop);

            $popup.removeClass('hidden');
            $overlay.removeClass('hidden');
            $input.focus();
        },
        hide: function() {
            var $popup = $('.search-popup_block'),
                $overlay = $('.search-overlay'),
                $body = $('body');

            $body.css('overflow', 'auto');

            $popup.addClass('hidden');
            $overlay.addClass('hidden');
        }
    },
    menu: {
        show: function() {
            $('body').addClass('position-fixed');
            $('.header-menu-overlay').show();
            $('.header-entry-left-main-block').show().animate({
                'marginLeft' : '-500px',
                'opacity' : '1'
            }, 200);
        },
        hide: function() {
            $('body').removeClass('position-fixed');
            $('.header-entry-left-main-block').animate({
                'opacity' : '0',
                'marginLeft' : '-100%'
            }, 200);
            $('.header-menu-overlay').hide(200);
        }
    },
    switch: {

    },
    scroll: {
        value: 0,
        getValue: function() {
            Bm.scroll.value = document.documentElement.scrollTop || document.body.scrollTop;
        },
        setValue: function(value) {
            if (value) {
                window.scrollTo(0, value);
            } else {
                window.scrollTo(0, Bm.scroll.value);
                Bm.scroll.value = 0;
            }
        }
    },
    lock: function() {
        $('body').addClass('overflow-hidden').addClass('position-fixed');
    },
    unlock: function() {
        $('body').removeClass('overflow-hidden').removeClass('position-fixed');
    }
};

Bm.ab = (function(module) {
    var abPages = [];

    module.addPage = function(id, pages) {
        if(abPages[id]) {
            console.log('AbTest ' + id + ' already registered');
        } else {
            abPages[id] = pages;
        }
    };

    module.invokeTest = function(testId, pageId, request) {
        if(!abPages[testId]) {
            console.log('AbTest ' + testId + 'not register')
        } else {
            abPages[testId][pageId](request);
        }
    };

    return module;
}(Bm.ab || {}));
BMCookie = {
    /**
     *
     * @param name
     * @returns {*}
     */
    get: function (name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    },

    /**
     *
     * @param name
     * @param value
     * @returns {*}
     */
    set: function (name, value) {
        window.document.cookie = name + '=' + value;
        return BMCookie;
    },

    /**
     *
     * @param name
     */
    remove: function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return BMCookie;
    }
};
$(function() {
    var $scrollTop = $('.js-scroll-top'),
        pageScrollTop = 0;

    /**
     * popup open
     */
    $(document).on('click', '.js-popup-open', function() {
        Bridge.fancybox.open($(this).attr('href').substr(1));
    });

    /**
     * guest click
     */
    $(document).on('click', '.js-disabled', function() {
        Bridge.fancybox.modals.auth.open();
    });

    /**
     * auth popup open
     */
    $(document).on('click', '.js-popup-auth', function() {
        Bridge.fancybox.modals.auth.open();
    });

    /**
     * popup close
     */
    $(document).on('click', '.js-popup-close', function() {
        $.fancybox.close();
    });

    /**
     * bm7 menu open
     */
    $(document).on('click', '.js-main-menu-open', function() {
        $('body').addClass('position-fixed overflow-hidden');
        $('.js-main-overlay').removeClass('hidden');
        $('.js-main-menu').addClass('show');
    });

    /**
     * bm7 menu close
     */
    $(document).on('click', '.js-main-overlay', function() {
        $('body').removeClass('position-fixed overflow-hidden');
        $('.js-main-overlay').addClass('hidden');
        $('.js-main-menu').removeClass('show');
    });

    /**
     * submit forms
     */
    $(document).on('click', '.js-form-submit', function() {
        $(this).parents('form').submit();
    });

    /**
     * show scroll top
     */
    $(document).on('scroll', function() {
        pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (pageScrollTop >= 500) {
            $scrollTop.addClass('show');
        } else {
            $scrollTop.removeClass('show');
        }
    });

    /**
     * scroll top
     */
    $scrollTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    /**
     * bm8 dropdown
     */
    $(document).on('click', '.js-user-dropdown-toggle', function() {
        $('.js-user-dropdown').toggleClass('hidden');
    });
    $(document).on('click', function(e) {
        var $el = $(e.target);

        if (!$el.hasClass('js-user-dropdown-toggle') && !$el.parents().hasClass('js-user-dropdown-toggle') && !$el.hasClass('js-user-dropdown') && !$el.parents().hasClass('js-user-dropdown')) {
            $('.js-user-dropdown').addClass('hidden');
        }
    });
});

var Validator = {
    filters: {
        trim: function(value) {
            return jQuery.trim(value);
        },
        phoneCode: function(value) {
            if (8 == value) {
                return '+7';
            }

            var pattern = /^[0-9]{1,3}$/;
            if (pattern.test(value)) {
                return '+' + value;
            }

            return value;
        }
    },

    validators: {
        email: {
            pattern: /^(([^а-я<>()[\]\\.,;:\s@\"]+(\.[^а-я<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Введите корректный e-mail',
            filters: ['trim']
        },
        name: {
            pattern: /^([a-zа-яA-ZА-ЯёЁ\-0-9 ]+)$/,
            message: "Введите корректное имя",
            filters: ['trim']
        },
        lastname: {
            pattern: /^([a-zа-яA-ZА-ЯёЁ\-0-9 ]+)$/,
            message: "Введите корректную фамилию",
            filters: ['trim']
        },
        phone: {
            pattern: /^([0-9]+)$/,
            message: "Введите корректный телефон",
            filters: ['trim']
        },
        phone_full: {
            pattern: /^(\+[0-9]{8,14})$/,
            message: "Введите корректный телефон",
            filters: ['trim']
        },
        city: {
            pattern: /^([a-zа-яA-ZА-ЯёЁ\-0-9 ]+)$/,
            message: "Введите корректное название города",
            filters: ['trim']
        },
        phone_code: {
            pattern: /^(\+[0-9]{1,3})$/,
            message: "Введите корректный код страны, например, +7",
            filters: ['trim', 'phoneCode']
        },
        partner: {
            pattern: /^([A-Za-z0-9]+)$/,
            message: "Введите корректный код партнера",
            filters: ['trim']
        },
        sms_code: {
            pattern: /^([0-9]+)$/,
            message: "Введите корректный смс код",
            filters: ['trim']
        },
        message: {
            pattern: /(.+)/,
            message: "Введите корректное сообщение",
            filters: ['trim']
        },
        captcha: {
            pattern: /^([A-Za-z0-9]+)$/,
            message: "Введите код на картинке",
            filters: ['trim']
        }
    },

    filter: function(value, filters) {
        for (var i = 0; i < filters.length; i++) {
            var filterName = filters[i];
            value = this.filters[filterName](value);
        }

        return value;
    },

    lastError: '',

    isValid: function(element) {
        var t = this;
        var isValid = true;

        element.find('[data-validator]:enabled').each(function() {
            var type = $(this).data('validator');
            var value = $(this).attr('value');
            var show = $(this).data('validator-show');

            if (t.validators[type] != undefined) {
                if (t.validators[type]['filters'] != undefined) {
                    value = t.filter(value, t.validators[type]['filters']);
                    $(this).attr('value', value);
                }
                if (!t.validators[type].pattern.test(value)) {
                    t.lastError = t.validators[type].message;
                    if (show == 'none') {
                        //пока так, все нормально
                    } else {
                        // вместо нормальных блоков с нотификациями зачем-то нужно делать алерты................
                        //$('#svyazErrorBlock').text(t.lastError);
                        alert(t.lastError);
                    }
                    $(this).focus();
                    return isValid = false;
                }
                else {
                    $('#svyazErrorBlock').empty();
                }
            }
        });
        element.find('select.city_0306').each(function() {
            var value = $(this).val();
            if (value == "-") {
                alert("Выберете город участия");
                return isValid = false;
            }
        });
        return isValid;
    }
};

var Bridge = {
    isMobile: false,
    fancybox: {
        modals: {
            standart: {
                options: {
                    maxWidth: 800,
                    padding: 0,
                    height: 'auto',
                    width: 'auto',
                    openEffect: 'none',
                    closeEffect: 'none',
                    autoSize: false,
                    fitToView: false,
                    closeBtn: false,
                    scrolling: false
                }
            },
            auth: {
                id: '#popup_auth',
                selector: '.fancybox-popup_login',
                options: {
                    padding: 0,
                    height: 'auto',
                    width: 'auto',
                    openEffect: 'none',
                    closeEffect: 'none',
                    autoSize: false,
                    fitToView: false,
                    closeBtn: false,
                    beforeClose: function() {
                        $('.popup .popup__error').empty().hide();
                        $('.popup .item .input').removeClass('error');
                        $('.popup .item .input-error').empty().hide();
                    },
                    afterShow: function() {
                        if (this.href === '#popup_auth') {
                            $('#popup_auth input[name="login"]').focus();
                        } else if (this.href === '#popup_registration') {
                            $('#popup_registration input[name="email"]').focus();
                        } else if (this.href === '#popup_pwd_remind') {
                            $('#popup_pwd_remind input[name="email"]').focus();
                        }
                    }
                },
                onInit: function() {
                    $(this.selector).fancybox(this.options);
                },
                open: function(title, successUrl) {
                    var $container = $(this.id);

                    successUrl = successUrl || null;
                    title = title || null;

                    if (successUrl) {
                        $container.find('input[name=success_url]').val(successUrl);
                    }
                    if (title) {
                        $container.find('h3').html(title);
                    }

                    $.fancybox.open(this.id, this.options);

                    if (Bridge.CapturePointsController) {
                        Bridge.CapturePointsController.setIsWatchedByPath(location.pathname);
                    }
                }
            },
            image: {
                config: {
                    2: {
                        differentTexts: true,
                        titleReg: 'Зарегистрируйтесь<br>и продолжайте',
                        titleAuth: 'Войдите и продолжайте',
                        text: 'Полный просмотр материала доступен для зарегистрированных пользователей'
                    },
                    4: {
                        differentTexts: false,
                        title: 'Получите подборку лучших историй выпускников Бизнес молодости, чтобы не тратить время на их поиск',
                        text: 'Введите адрес электронной почты, которой вы пользуетесь каждый день, нажмите «Получить кейсы» и мы пришлем подборку лучших кейсов',
                        buttonTitle: 'Получить кейсы'
                    },
                    8: {
                        differentTexts: true,
                        img: 'eye',
                        titleReg: 'Зарегистрируйтесь<br>и продолжайте',
                        titleAuth: 'Войдите и продолжайте',
                        text: 'Полный доступ к материалам сайта доступен для зарегистрированных пользователей'
                    },
                    9: {
                        differentTexts: true,
                        img: 'eye',
                        titleReg: 'Зарегистрируйтесь<br>и продолжайте',
                        titleAuth: 'Войдите и продолжайте',
                        text: 'Полный доступ к материалам сайта доступен для зарегистрированных пользователей'
                    }
                },
                remind: function (id, registerPage) {
                    this.open("popup_pwd_remind-image", id, registerPage);
                },
                registration: function (id, registerPage, afterActivationUrl) {
                    var config = this.config[id];
                    var title = config.differentTexts ? config.titleReg : config.title;

                    $("#popup_registration-image .popup__title").html(title);

                    if (config.buttonTitle) {
                        $("#popup_registration-image .bm-button").text(config.buttonTitle);
                    }
                    if (registerPage) {
                        $("#popup_registration-image input[name=register_page]").val(registerPage);
                    }
                    if (afterActivationUrl) {
                        $("#popup_registration-image input[name=after_activation_url]").val(afterActivationUrl);
                    }

                    this.open("popup_registration-image", id, registerPage, afterActivationUrl);
                },
                auth: function (id) {
                    var config = this.config[id];
                    var title = config.differentTexts ? config.titleAuth : config.title;

                    $("#popup_auth-image .popup__title").html(title);

                    if (config.buttonTitle) {
                        $("#popup_auth-image .bm-button").text(config.buttonTitle);
                    }

                    this.open("popup_auth-image", id);
                },
                open: function (elementId, id) {
                    var config = this.config[id];
                    var imgEl = $("#" + elementId + " .popup__img");

                    $("#" + elementId).attr("data-popup_id", id);
                    $("#" + elementId + " .popup__text").html(config.text);

                    imgEl.hide();
                    if (config.image_class) {
                        imgEl.show().removeAttr("class").addClass("popup__img").addClass(config.image_class);
                    }

                    Bridge.fancybox.open("#" + elementId);
                }
            }
        },
        open: function(id) {
            $.fancybox.open({href: '#' + id}, Bridge.fancybox.modals.standart.options);
        }
    }
};

var Bm = Bm || {};

var Plural = {
    noun: function (number, one, two, five) {
        number = Math.abs(number);
        number %= 100;
        if (number >= 5 && number <= 20) {
            return five;
        }
        number %= 10;
        if (number === 1) {
            return one;
        }
        if (number >= 2 && number <= 4) {
            return two;
        }
        return five;
    }
};

$(function() {
    $(document).on('click', '#callbackA', function() {
        $('#popup_callback').data('from_call', 'head');
    });
    $(document).on('click', '#callbackB', function() {
        $('#popup_callback').data('from_call', 'footer');
    });

    $(document).on('click', '.js-popup-callback', function(e) {
        var $form = $('form[data-form="callback"]'),
            $submit = $form.find('.js-form-submit'),
            from_call,
            dataLayerTitle = $form.attr('action') == '/callback/' ? 'Обратный звонок' : undefined;

        Bridge.fancybox.open('popup_callback', {
            padding: 0,
            height: 'auto',
            width: 'auto',
            openEffect: 'none',
            closeEffect: 'none',
            autoSize: false,
            fitToView: false,
            closeBtn: false,
            beforeShow: function() {
                var $link = $(this.element[0]),
                    $popup = $('#popup_callback'),
                    dataTitle = $link.data('title') || 'Заказать обратный звонок',
                    dataText = $link.data('text') || 'Заказ обратного звонка возможен круглосуточно. Менеджер перезвонит Вам с 10 до 19 по московскому времени',
                    dataButton = $link.data('button') || 'Отправить',
                    dataMessage = $link.data('message') || false;

                $popup.find('.popup__title').text(dataTitle);
                $popup.find('.popup__text').text(dataText);
                $submit.find('.text').text(dataButton);

                if (dataMessage !== false) {
                    $popup.find('input[name="message"]').removeAttr('disabled').val(dataMessage);
                } else {
                    $popup.find('input[name="message"]').attr('disabled', 'disabled').val('');
                }
            },
            beforeClose: function() {
                $form.find('.popup__error').empty().hide();
                $form.find('.item .bm-item-input').removeClass('error');
                $form.find('.item .data-error').empty();
                $('#popup_callback').data('from_call', '');
            }
        });

        $form.on('submit', function() {
            if ($form.hasClass('relogin')) {
                $.ajax({
                    url: $form.attr('logout'),
                    type: 'GET',
                    dataType: 'json'
                });
            }

            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                dataType: 'json',
                beforeSend: function() {
                    $submit.addClass('disabled');
                    $form.find('.popup__error').empty().hide();
                    $form.find('.item .bm-item-input').removeClass('error');
                    $form.find('.item .data-error').empty();
                },
                success: function(result) {
                    $submit.removeClass('disabled');

                    if (result['redirect']) {
                        window.location.href = result['redirect'];
                    } else {
                        if (result.status == 'success_replace' && result.message) {
                            from_call = $('#popup_callback').data('from_call');

                            if (typeof ga !== 'undefined') {
                                if (from_call == 'head') {
                                    ga('send', 'event', 'button', 'call_back_head_send');
                                } else if (from_call == 'footer') {
                                    ga('send', 'event', 'button', 'call_back_footer_send');
                                }
                            }

                            $form.html('<div class="popup__text">' + result.message + '</div>');

                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'successful'
                                }
                            );
                        } else if (result.status == 'error') {
                            if (result.rawMessage instanceof Object && result.rawMessage[0] == undefined) {
                                for (var name in result['rawMessage']) {
                                    var $input = $form.find('input[name="' + name + '"]').parents('.item');

                                    for (var i in result['rawMessage'][name]) {
                                        var message = result['rawMessage'][name][i];
                                        break;
                                    }

                                    $input.find('.data-error').text(message);
                                }

                                from_call = $('#popup_callback').data('from_call');

                                if (typeof ga !== 'undefined') {
                                    if (from_call == 'head') {
                                        ga('send', 'event', 'button', 'call_back_head_mistake');
                                    } else if (from_call == 'footer') {
                                        ga('send', 'event', 'button', 'call_back_footer_mistake');
                                    }
                                }

                                if ('need_captcha' in result) {
                                    $form.find('.captchaBlock').removeClass('hidden');
                                    $form.find('.captchaImage').attr('src', result['captcha_url']);
                                    $form.find('.captchaCode').val(result['captcha_code']);
                                } else {
                                    $form.find('.captchaBlock').addClass('hidden');
                                }
                            } else {
                                $form.find('.popup__error').text(result.message).show();
                            }
                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'unsuccessful',
                                    'errorCode': 'Ошибка валидации'
                                }
                            );
                        }
                    }
                },
                error: function(result) {
                    $submit.removeClass('disabled');
                    $form.find('.popup__error').text('Ошибка загрузки').show();
                    dataLayer.push({
                            'event': 'mixdata',
                            'eventCategory': 'Forms',
                            'eventAction': 'response',
                            'eventContent': dataLayerTitle,
                            'eventLabel': 'unsuccessful',
                            'errorCode': result.status + ' ' + result.statusText
                        }
                    );
                }
            });

            return false;
        });
    });
});
/**
 * Глобальный файлик для подключения обработчиков
 */

$(function() {

    /**
     * Вернуться назад
     */
    $('.js-return-back').on('click', function() {
        if (history.length && history.length > 2) {
            history.back();

            return false;
        }
    });

});
// hints
function hintsShow(id) {
    var $hints = $('#hints');

    $('body').addClass('overflow-hidden').addClass('position-fixed');
    $hints.show();
    $hints.find('.hint' + id).show();
}

function hintsHide() {
    $('body').removeClass('overflow-hidden').removeClass('position-fixed');
    $('#hints').hide();
}

// rotate
function rotateStart($item) {
    var rotate,
        deg = 0;

    rotate = setInterval(function() {
        deg--;

        if (deg === -360) {
            deg = 0;
        }

        $item.css({
            '-ms-transform': 'rotate(' + deg + 'deg)',
            '-o-transform': 'rotate(' + deg + 'deg)',
            '-moz-transform': 'rotate(' + deg + 'deg)',
            '-webkit-transform': 'rotate(' + deg + 'deg)',
            'transform': 'rotate(' + deg + 'deg)'
        });
    }, 1);

    return rotate;
}

function rotateStop($item, rotate) {
    var deg = 0;

    $item.css({
        '-ms-transform': 'rotate(' + deg + 'deg)',
        '-o-transform': 'rotate(' + deg + 'deg)',
        '-moz-transform': 'rotate(' + deg + 'deg)',
        '-webkit-transform': 'rotate(' + deg + 'deg)',
        'transform': 'rotate(' + deg + 'deg)'
    });

    clearInterval(rotate);
}

// format numbers 3417585 => 3 417 585
function ebensFormat(num) {
    num = num.toString();
    num = num.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&nbsp;');

    return num;
}

/**
 * Process auto request
 *
 * @param $el
 */
function processAutoRequest($el) {

    var event_id = $el.data('event'),
        product_id = $el.data('product'),
        redirect = $el.data('redirect') ? $el.data('redirect') : window.location.pathname,
        isWebinar = $el.data('webinar') ? true : false;

    var showLoading = function() {
        $.fancybox('Идет обработка запроса', {
            modal: true,
            overlayColor: "#000000",
            overlayOpacity: 0.5,
            padding: 50,
            centerOnScroll: true,
            closeBtn: false,
            beforeShow: function(){
                this.skin.append('<div class="fancyboxClose"></div>');
            }
        });
    };

    $.ajax({
        url: '/request/auto/',
        data: {
            event_id: event_id,
            product_id: product_id
        },
        type: 'POST',
        beforeSend: showLoading,
        success: function(response) {
            console.log(response);
            if(response.errorCode == 1 || response.errorCode == 2) {
                if (isWebinar) {
                    window.location = redirect + "?requestId=" + response.requestId + '&requestHash=' + response.requestHash;
                } else {
                    window.location = redirect + "?request=" + response.requestId + "&security_code=" + response.securityCode;
                }
            } else {
                window.location = $this.attr('href');
            }
        }
    });
}

/**
 * Strip tags (used for wysiwig)
 *
 * @param str
 * @param allowed_tags
 *
 * @returns {*}
 */
function strip_tags (str, allowed_tags) {

    var key = '', allowed = false;
    var matches = [];
    var allowed_array = [];
    var allowed_tag = '';
    var i = 0;
    var k = '';
    var html = '';
    var replacer = function (search, replace, str) {
        return str.split(search).join(replace);
    };

    if (allowed_tags) {
        allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
    }

    str += '';

    matches = str.match(/(<\/?[\S][^>]*>)/gi);

    for (key in matches) {
        if (isNaN(key)) {
            continue;
        }

        html = matches[key].toString();
        allowed = false;

        for (k in allowed_array) {
            allowed_tag = allowed_array[k];
            i = -1;

            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}

            if (i == 0) {
                allowed = true;
                break;
            }
        }

        if (!allowed) {
            str = replacer(html, "", str); // Custom replace. No regexing
        }
    }

    return str;
}

$(function(){
    // assetic
    $(document).on('click', '.js-admin-assetic', function() {
        var $button = $(this),
            $url = $(this).data('url'),
            $theme = $(this).data('theme'),
            $layout = $(this).data('layout');

        if ($button.hasClass('disabled')) {
            return false;
        }

        $button.removeClass('error success');

        $.ajax({
            type: 'POST',
            url: $url,
            data: {
                theme: $theme,
                layout: $layout
            },
            beforeSend: function() {
                $button.addClass('disabled');
            },
            success: function (data) {
                $button.removeClass('disabled')
                if (data.status == 'success') {
                    $button.addClass('success');
                } else {
                    $button.addClass('error');
                }
            },
            error: function() {
                $button.removeClass('disabled').addClass('error');
            }
        });
    });

    // form select
    $(document).on('click', '.js-form-select', function() {
        var find = $(this).hasClass('js-find'),
            item = find ? $(document).find('.js-form-select[data-select="' + $(this).data('select')+ '"]') : $(this),
            block = item.parents('.js-form-block'),
            select = item.data('select'),
            form = block.find($('.js-form[data-form="' + select + '"]'));

        item.addClass('active').siblings().removeClass('active');
        form.removeClass('hidden').siblings().addClass('hidden');
    });

    for(var type in Bm.fancybox.modals) {
        if (Bm.fancybox.modals[type].hasOwnProperty('onInit')) {
            Bm.fancybox.modals[type]['onInit']();
        }
    }

    Bm.ab.addPage(1000, {
        js_main: function(request) {
            console.log(request);
            if(request['emailLink']) {
                var $abButton = $('#popup_main_done_email');
                $abButton.find('.email-link-js').attr('href', request['emailLink']);
                Bm.fancybox.open($abButton.attr('id'));
            } else {
                Bm.fancybox.open('popup_main_done');
            }
        },
        js_redirect: function(request) {
            window.location.href = request['redirect']
        }
    });

    // close hints
    $(document).on('click', '#hints', function() {
        hintsHide();
    });

    // custom fancybox close button
    $(document).on('click', '.fancyboxClose, .js-popup-close', function() {
        $.fancybox.close()
    });

    // applause
    $(document).on('mouseenter', '.check-in-js .clap.active', function() {
        var clap = $(this);
        var profit = $(this).next('.profit');

        if(profit.length == 0){
            return false;
        }
        $('.check-in-js .tooltip').hide();
        if (!profit.hasClass('active')) {
            clap.children('.tooltip').show()
        }
    });
    $(document).on('mouseleave', '.check-in-js .clap.active', function() {
        var self = this;
        setTimeout(function(){
            $(self).children('.tooltip').hide();
        }, 500);
    });
    $(document).on('click', '.check-in-js .clap', function(e){
        var clap = $(this),
            profit = $(this).next('.profit'),
            url = clap.data('url'),
            redirect = clap.data('redirect'),
            $item = $('.check-in-js .clap[data-url="' + url + '"]'),
            $counter = $item.find('[data-like-counter="' + url + '"]');

        if (clap.hasClass('disabled')) {
            if (Bridge.isMobile) {
                Bm.mobile.popup.show('login');
            } else {
                Bridge.fancybox.modals.auth.open(null, redirect);
            }

            return false;
        }

        if ($(e.target).closest('.tooltip').length == 1 && !profit.hasClass('active')) {
            profit.trigger('click');

            return false;
        }

        if (clap.hasClass('active')) {
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 0},
                success: function(data){
                    if (!data.status || data.status !== 'ok') {
                        return false;
                    }
                    profit.addClass('disabled');

                    $item.removeClass('active');
                    $counter.html('<span class="icon"></span>Нравится ' + data.count);

                    clap.children('.tooltip').hide()
                }
            });
        } else {
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 1},
                success: function(data){
                    if (!data.status || data.status !== 'ok') {
                        return false;
                    }
                    profit.removeClass('disabled');

                    $item.addClass('active');
                    $counter.html('<span class="icon"></span>Нравится ' + data.count);

                    if (profit.length != 0 && !profit.hasClass('active')) {
                        clap.children('.tooltip').show();
                    }
                }
            });
        }

        return false;
    });

    // profit
    $(document).on('click', '.check-in-js .profit', function(){
        var profit = $(this);
        var clap = profit.prev('.clap');
        var url = profit.data('url');
        var redirect = clap.data('redirect');

        if(profit.hasClass('disabled')){
            return false;
        }

        if(profit.hasClass('active')){
            if(confirm('Вы больше не считаете материал полезным?')){

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {direction: 0},
                    success: function(data){
                        if(!data.status || data.status !== 'ok'){
                            return false;
                        }

                        profit.removeClass('active');
                        $('[data-like-counter="' + url + '"]').text(data.count);
                    }
                });
            }
        } else {
            if(confirm('Вы действительно хотите отметить материал как полезный?')){

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {direction: 1},
                    success: function(data){
                        if(!data.status || data.status !== 'ok'){
                            return false;
                        }

                        profit.addClass('active');
                        $('[data-like-counter="' + url + '"]').text(data.count);
                        profit.prev('.clap').children('.tooltip').hide();

                        if(data.record_likes_count){
                            clap.addClass('active');
                            clap.children('span').text(data.record_likes_count);
                        }
                    }
                });
            }
        }
    });

    // textarea autoresize
    if($.fn.autosize){
        $('#opros textarea, textarea.autosize').autosize();
    }

    // custom select
    if($.fn.selectbox){
        $('select.selectbox').selectbox();
    }

    // Case block
    $(document).on('click', '.caseBlock .caseReadmore', function(){
        var caseBlock = $(this).parents('.caseBlock');

        if($(this).hasClass('hide')){
            caseBlock.find('.caseFullText').fadeOut(600);
            $(this).text('Читать далее').removeClass('hide');

            $('html, body').animate({
                scrollTop: caseBlock.offset().top
            }, 600);
        } else {
            caseBlock.find('.caseFullText').fadeIn(600);
            $(this).text('Скрыть текст').addClass('hide');

            $('html, body').animate({
                scrollTop: caseBlock.find('.caseFullText').offset().top
            }, 600);
        }
    });

    var Form = function() {
        var $form = null,
            $requestForm,
            $submit,
            $loading,
            $error,
            rotate,
            need_sms_activation = false,
            submitted = 1,
            urls = [
            '/request/only_register/',
            '/request/new/'
        ];

        var redirect_choices = {
            0: '/accept/',
            1: '/accept/',
            2: window.location.pathname + 'success/',
            3: window.location.pathname + 'success/'
        };
        var redirect_choice = 1;

        this.init = function(element) {
            $form = $(element);

            $requestForm = $(element);
            $submit = $requestForm.find('.js-request-form-submit');
            $loading = $requestForm.find('.js-request-form-loading');
            $error = $requestForm.find('.js-request-form-error');

            if($form.find("input[name=need_redirect]").val() != 0) {
                redirect_choice = $form.find("input[name=need_redirect]").val();
            }
            if($form.has('[data-sms]').length) {
                need_sms_activation = true;
                submitted = 0;
            }

            $form.find('[name=eventChanger]').change(function(){
                if ($(this)[0].tagName == 'SELECT') {
                    var $selectInput = $(this);
                    $.each($selectInput.find(':selected').data(), function(k, v){
                        $selectInput.data(k, v);
                    });
                }
                $form.find('input[name="event_id"]').attr('value', $(this).data('event'));
                $form.find('input[name="product_id"]').attr('value', $(this).data('product'));
                $form.find('input[name="redirect"]').attr('value', $(this).data('redirect'));
                $form.find('input[name="need_redirect"]').attr('value', $(this).data('need_redirect'));
            });

            $form.attr('onsubmit', '');
            $form.on('submit', function(e){
                if ($form.data('invalid')) {
                    return false;
                }
                if ($form.find('select[name=eventChanger]').length && !$form.find('select[name=eventChanger]').data('product')) {
                    alert('Вы должны выбрать город');
                    return false;
                }

                if ($form.find('input[name=product_id]').val()=="" || $form.find('input[name=event_id]').val()=="") {
                    alert('Вы должны выбрать формат участия');
                    return false;
                }
                if ($form.find("input[name='additional[mzs_profit]']").length && $form.find("input[name='additional[mzs_profit]']").val()=="") {
                    alert('Вы должны указать ваш доход');
                    return false;
                }
                if ($form.find("input[name='additional[friend_name]']").length && $form.find("input[name='additional[friend_name]']").val()=="") {
                    alert('Вы должны заполнить данные друга');
                    return false;
                }
                if ($form.find("input[name='additional[friend_email]']").length && $form.find("input[name='additional[friend_email]']").val()=="") {
                    alert('Вы должны заполнить данные друга');
                    return false;
                }
                if ($form.find("input[name='additional[friend_phone]']").length && $form.find("input[name='additional[friend_phone]']").val()=="") {
                    alert('Вы должны заполнить данные друга');
                    return false;
                }
                if ($form.attr('target') == '_blank') {

                    // Проверяем параметр формы
                    if (!checkValidation()) {
                        return false;
                    }

                    // Передаем управление в форму
                    return true;
                } else {
                    submitMainForm();
                }

                return false;
            });

            $('[data-updatecaptcha]').live('click', function(e){
                e.preventDefault();
                updateCaptcha();
            });

            $('[data-resendsms]').live('click', function(e){
                e.preventDefault();
                updatePhoneArea();
            });

        };

        var updatePhoneArea = function() {
            $form.find('input[name=firstname]').attr('readonly', 'readonly');
            $form.find('input[name=email]').attr('readonly', 'readonly');

            $.ajax({
                cache: false,
                url: '/request/phone_activation/',
                type: 'POST',
                timeout: 15000,
                data: {
                    phone_country: $form.find('input[name=phone_country_code]').val(),
                    phone_code: $form.find('input[name=phone_code]').val(),
                    phone: $form.find('input[name=phone]').val(),
                    page_id: $form.find('input[name=event_id]').val()
                },
                success: fillPhoneArea,
                error: showTimeoutError
            });
        };

        var fillPhoneArea = function(data) {
            hideLoading();
            if(data.status == 'success') {
                $form.find('[data-sms]').html(data.message);
            } else {
                $.fancybox(data.message, {
                    overlayColor: "#000000",
                    overlayOpacity: 0.5,
                    padding: 50,
                    closeBtn: false,
                    beforeShow: function(){
                        this.skin.append('<div class="fancyboxClose"></div>');
                    }
                });
            }

            var submitButton = $form.find('button[type=submit]');
            $form.off('submit');
            $(submitButton).text('Отправить');

            if ($form.find('.user-captcha').length) {
                $form.on('submit', function(e) {
                    e.preventDefault();
                    submitCaptchaForm();
                });
            } else if ($form.find(".activation_phone_accepted").length) {
                $(submitButton).hide();
                submitted = 1;
                submitMainForm();
            } else {
                $form.on('submit', function(e) {
                    e.preventDefault();
                    submitPhoneActivationForm();
                });
            }
        };

        var updateCaptcha = function() {
            var src = $form.find('.user-captcha').attr('src') + '?rnd=' + Math.random();
            $form.find('.user-captcha').attr('src', src);
        };

        var showLoading = function() {
            if (Bridge.isMobile && $requestForm.hasClass('js-request-form')) {
                $loading.removeClass('hidden');
                $submit.addClass('hidden');
                $error.empty().addClass('hidden');
                rotate = rotateStart($loading);
            } else {
                $.fancybox('Идет обработка запроса', {
                    modal: true,
                    overlayColor: "#000000",
                    overlayOpacity: 0.5,
                    padding: 50,
                    centerOnScroll: true,
                    closeBtn: false,
                    beforeShow: function(){
                        this.skin.append('<div class="fancyboxClose"></div>');
                    }
                });
            }
        };

        var showTimeoutError = function(message, errorCode) {
            ga_product_type = $form.find("input[name=product_type]").val();
            ga_product_name = "product_"+ $form.find("input[name=product_id]").val();

            if(message instanceof Object) {
                message = 'Попробуйте отправить форму повторно';
            }
            message = message || 'Попробуйте отправить форму повторно';
            title = 'Извините, произошла ошибка.<br>'
            if(errorCode) {
                if(errorCode == 6) {
                    title = 'Операция выполнена успешно.<br/>'
                }
            }
            setTimeout(function() {
                if (Bridge.isMobile && $requestForm.hasClass('js-request-form')) {
                    $loading.addClass('hidden');
                    $submit.removeClass('hidden');
                    $error.text(message).removeClass('hidden');
                    rotate = rotateStop($loading, rotate);
                } else {
                    $.fancybox(title + message, {
                        overlayColor: "#000000",
                        overlayOpacity: 0.5,
                        padding: 50,
                        closeBtn: false,
                        beforeShow: function() {
                            this.skin.append('<div class="fancyboxClose"></div>');
                        }
                    });
                }
            }, 300);
            dataLayer.push({
                    'event': 'mixdata',
                    'eventCategory': 'Forms',
                    'eventAction': 'response',
                    'eventContent': 'Заявка',
                    'eventLabel': 'unsuccessful',
                    'errorCode': errorCode + ' ' + message
                }
            );
        };

        var hideLoading = function() {
            setTimeout(function() {
                if (Bridge.isMobile && $requestForm.hasClass('js-request-form')) {
                    $loading.addClass('hidden');
                    $submit.removeClass('hidden');
                    rotate = rotateStop($loading, rotate);
                } else {
                    $.fancybox.close();
                }
            }, 300);
        };

        var submitCaptchaForm = function() {
            if (!checkValidation()) {
                return false;
            }

            $.ajax({
                cache: false,
                url: '/request/phone_activation/',
                type: 'POST',
                timeout: 15000,
                data: {
                    phone_country: $form.find('input[name=phone_country_code]').val(),
                    phone_code: $form.find('input[name=phone_code]').val(),
                    phone: $form.find('input[name=phone]').val(),
                    captcha: $form.find('input[name=captcha]').val(),
                    page_id: $form.find('input[name=event_id]').val(),
                    confirm_captcha: 1
                },
                beforeSend: showLoading,
                success: fillPhoneArea,
                error: showTimeoutError
            });
        };

        var submitPhoneActivationForm = function() {
            if (!checkValidation()) {
                return false;
            }

            $.ajax({
                cache: false,
                url: '/request/phone_activation/',
                type: 'POST',
                timeout: 15000,
                data: {
                    code: $form.find('input[name=phone_activation_code]').val(),
                    activation_id: $form.find('input[name=phone_activation_id]').val(),
                    confirm_form_send: 1
                },
                beforeSend: showLoading,
                success: fillPhoneArea,
                error: showTimeoutError
            });
        };

        var submitMainForm = function() {

            if (!checkValidation()) {
                return false;
            }

            $.ajax({
                cache: false,
                url: urls[submitted],
                timeout: 45000,
                type: 'POST',
                data: $form.serialize(),
                beforeSend: showLoading,
                success:  parseRequest,
                error: showTimeoutError
            });

            return true;
        };

        /**
         * Проверка валидации
         *
         * @returns boolean
         */
        var checkValidation = function() {
            return Validator.isValid($form);
        };

        var parseRequest = function(request) {
            ga_product_type = $form.find("input[name=product_type]").val();
            ga_product_name = $form.find("input[name=product_name]").val();
            ga_event_name = $form.find("input[name=event_name]").val();
            ga_project_name = $form.find("input[name=project_name]").val();
            ga_product_price = $form.find("input[name=product_price]").val();
            ga_product_id = $form.find("input[name=product_id]").val();
            ga_event_id = $form.find("input[name=event_id]").val();
            ga_event_default_id = $form.find("input[name=event_default_id]").val();

            if (request['redirect_system'] !== undefined && request['redirect_system'] != '') {
                // отправлять всю эту хрень надо только для вновь созданных заявок, если уже была заявка, то не отправлять
                if (request.errorCode == 1) {
                    if (ga_product_price > 0) {
                        dataLayer.push({
                            event: "addToCart",
                            ecommerce: {
                                add: {
                                    products: [{
                                        id: ga_product_id, /// айди товара
                                        name: ga_product_name, // название продукта
                                        price: ga_product_price, /// цена за продукт
                                        quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                        category: ga_project_name
                                    }]
                                }
                            }
                        });
                    } else if (ga_event_name.indexOf('Онлайн') != -1) {
                        variant = 'Онлайн';
                        if (ga_event_default_id != ga_event_id) {
                            variant = 'Живое';
                        }
                        dataLayer.push({
                            event: "addToCart",
                            ecommerce: {
                                add: {
                                    products: [{
                                        id: ga_event_default_id, /// айди товара
                                        name: ga_event_name, // название продукта
                                        price: ga_product_price, /// цена за продукт
                                        quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                        variant: variant,
                                        category: ga_project_name
                                    }]
                                }
                            }
                        });
                    } else {
                        dataLayer.push({
                            event: "addToCart",
                            ecommerce: {
                                add: {
                                    products: [{
                                        id: ga_event_default_id, /// айди товара
                                        name: ga_event_name, // название продукта
                                        price: ga_product_price, /// цена за продукт
                                        quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                        category: ga_project_name
                                    }]
                                }
                            }
                        });
                    }
                    dataLayer.push({
                            'event': 'mixdata',
                            'eventCategory': 'Forms',
                            'eventAction': 'response',
                            'eventContent': 'Заявка',
                            'eventLabel': 'successful'
                        }
                    );
                }
                window.location = request['redirect_system'];
                return;
            }

            redirect_choice = $form.find("input[name=need_redirect]").attr('value');
            if (request.errorCode == 0 || request.errorCode == 3 || request.errorCode == 6 || request.errorCode == 8 || request.errorCode == 9) {
                showTimeoutError(request['errorMessage'], request.errorCode);
            } else if (request.errorCode == 5) {
                // Специальный режим, при котором запрещено покупать продукт - отправляем на страницу /fail/
                window.location = 'http://' + window.location.hostname + window.location.pathname + 'fail/';
            } else {
                if((need_sms_activation == true) && (submitted == 0)) {
                    $.fancybox.close();
                    updatePhoneArea();
                } else {
                    var redirect = $form.find("input[name=redirect]").val();
                    if(redirect == '') {
                        redirect = redirect_choices[redirect_choice];
                    }
                    // отправлять всю эту хрень надо только для вновь созданных заявок, если уже была заявка, то не отправлять
                    if (request.errorCode == 1) {
                        dataLayer.push({
                                'event': 'mixdata',
                                'eventCategory': 'Forms',
                                'eventAction': 'response',
                                'eventContent': 'Заявка',
                                'eventLabel': 'successful'
                            }
                        );
                        if(ga_product_price>0) {
                            dataLayer.push({
                                event: "addToCart",
                                ecommerce: {
                                    add: {
                                        products: [{
                                            id: ga_product_id, /// айди товара
                                            name: ga_product_name, // название продукта
                                            price: ga_product_price, /// цена за продукт
                                            quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                            category: ga_project_name
                                        }]
                                    }
                                }
                            });
                        } else if (ga_event_name.indexOf('Онлайн')!=-1) {
                            variant = 'Онлайн';
                            if (ga_event_default_id!=ga_event_id) {
                                variant = 'Живое';
                            }
                            dataLayer.push({
                                event: "addToCart",
                                ecommerce: {
                                    add: {
                                        products: [{
                                            id: ga_event_default_id, /// айди товара
                                            name: ga_event_name, // название продукта
                                            price: ga_product_price, /// цена за продукт
                                            quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                            variant: variant,
                                            category: ga_project_name
                                        }]
                                    }
                                }
                            });
                        } else {
                            dataLayer.push({
                                event: "addToCart",
                                ecommerce: {
                                    add: {
                                        products: [{
                                            id: ga_event_default_id, /// айди товара
                                            name: ga_event_name, // название продукта
                                            price: ga_product_price, /// цена за продукт
                                            quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                            category: ga_project_name
                                        }]
                                    }
                                }
                            });
                        }
                    }

                    switch(redirect_choice) {
                        case '4':
                            var href = redirect + '?' + $.param({
                                    name:  $form.find("input[name=firstname]").val(),
                                    tel: $form.find("input[name=phone_code]").val() + $form.find("input[name=phone]").val(),
                                    mail: $form.find("input[name=email]").val(),
                                    client_id: request.userId
                                });
                            console.log(href);
                            $.fancybox.open(
                                {
                                    type: 'iframe',
                                    fitToView: false,
                                    width: 940,
                                    height: 580,
                                    padding: 0,
                                    margin: 20,
                                    autoSize: false,
                                    closeClick: false,
                                    openEffect: 'none',
                                    closeEffect: 'none',
                                    wrapCSS: 'intickets',
                                    helpers: {
                                        overlay : {
                                            closeClick : false
                                        }
                                    },
                                    href : href
                                }
                            );
                            break;
                        case '3':
                            $.ajax({
                                url: redirect,
                                type: 'GET',
                                data: {email: $form.find("input[name=email]").val()},
                                timeout: 15000,
                                complete: function(response, responseStatus) {
                                    $.fancybox.close();
                                    if(responseStatus == 'success') {
                                        $form.next().remove();
                                        $form.next().remove();
                                        $form.replaceWith(response.responseText);
                                    } else {
                                        alert('Произошла ошибка, попробуйте позже');
                                    }
                                }
                            });
                            break;
                        case '7':
                            $.ajax({
                                url: redirect,
                                type: 'GET',
                                data: {email: $form.find("input[name=email]").val()},
                                timeout: 15000,
                                complete: function(response, responseStatus) {
                                    $.fancybox.close();
                                    if(responseStatus == 'success') {
                                        $form.next().remove();
                                        $form.next().remove();
                                        $.fancybox($form.find("input[name=success_text]").val(), {
                                            modal: true,
                                            overlayColor: "#000000",
                                            overlayOpacity: 0.5,
                                            padding: 50,
                                            centerOnScroll: true,
                                            closeBtn: false,
                                            beforeShow: function(){
                                                this.skin.append('<div class="fancyboxClose"></div>');
                                            }
                                        });
                                    } else {
                                        alert('Произошла ошибка, попробуйте позже');
                                    }
                                }
                            });
                            break;
                        case '2':
                            // #4874 для ссылок, которые содержат в себе get-параметры, не надо добавлять email
                            if (redirect.indexOf('?category_id') >= 0) {
                                window.location = redirect;
                            } else {
                                window.location = redirect + "?requestId=" + request.requestId + '&requestHash=' + request.requestHash;
                            }
                            break;
                        case '6':
                            var redirect2 = $form.find("input[name=redirect2]").val();
                            if (request.errorCode == 2) {
                                window.location = redirect2;
                            } else {
                                window.location = redirect + "?requestId=" + request.requestId + '&requestHash=' + request.requestHash;
                            }
                            break;
                        case '8':
                            var redirect2 = $form.find("input[name=redirect2]").val();
                            if (request.user_activated == 1) {
                                window.location = redirect2;
                            } else {
                                window.location = redirect + "?requestId=" + request.requestId + '&requestHash=' + request.requestHash;
                            }
                            break;
                        case '9':
                            $.fancybox.close();
                            $('.js-paymentors-form-success-button').attr('href',redirect + "?request=" + request.requestId + "&security_code=" + request.securityCode);
                            $('.js-paymentors-form-success-day').text($form.find("input[name=paymentors_day]").val());
                            $('.js-paymentors-form-success-time').text($form.find("input[name=paymentors_time]").val());
                            $('.js-paymentors-form-success-price').text($form.find("input[name=paymentors_price]").val());
                            $('.js-paymentors-form').addClass('hidden');
                            $('.js-paymentors-form-success').removeClass('hidden');
                            break;
                        case '1':
                        default:
                            window.location = redirect + "?request=" + request.requestId + "&security_code=" + request.securityCode;
                    }
                }
            }
        }
    };


    $('form[data-form=request]').each(function() {
        new Form().init(this);
    });


    $('[data-widget=timer]').each(function(){
        var t = this;
        var wr_hours = function() {
            var oToday = new Date();
            //var sTime = "December 11, 2012 12" +  ":15" + ":00"; //до какого числа таймер
            // задаём время с точностью до секунды — это не педантизм,
            // а важная деталь, избавляющая от багов при вычислении разницы между датами
            var sTime = $(t).data('timer');
            var oDeadLineDate = new Date(sTime); // собственно устанавливаем «час Икс»
            var sek = Math.floor((oDeadLineDate - oToday) / 1000);
            if(sek <= 0 && sek >= -2) {
                window.location = window.location.pathname;
                return false;
            }
            var sec= sek % 60 ; //сколько секунд осталось
            var min= Math.floor((sek /60)%60) ;//сколько минут осталось
            var hoursek= Math.floor((sek / (60*60)) %24) ;//сколько часов осталось
            var days= Math.floor(sek /(24*60*60)) ;//сколько дней осталось
            var time_wr= "" +days+"д. "+hoursek+"ч. " +min+"м. " +sec+"с.";
            if (days > 31) {
                time_wr= ""+(days-30)+"д. "+hoursek+"ч. " +min+"м. " +sec+"с.";
            }
            $(t).html(time_wr);
        };
        setInterval(wr_hours, 1000);
    });

    $('form[data-form=event-check]').submit(function () {
        var $t = $(this);
        if(!Validator.isValid($t)) {
            return false;
        }

        var email = $t.find('input[name=email]').val();
        var redirect = $t.find("input[name=redirect]").val();
        var redirect_choice = $t.find("input[name=need_redirect]").attr('value');
        if(redirect == '') {
            redirect = window.location.pathname + 'success/';
        }

        $.fancybox('Идет обработка запроса', {
            modal: true,
            overlayColor: "#000000",
            overlayOpacity: 0.5,
            padding: 50,
            centerOnScroll: true,
            closeBtn: false,
            beforeShow: function(){
                this.skin.append('<div class="fancyboxClose"></div>');
            }
        });

        $.ajax({
            cache: false,
            url: $t.attr('action'),
            timeout: 15000,
            type: 'POST',
            data: $t.serialize(),

            success:  function (data) {
                setTimeout(function() {
                    $.fancybox.close();
                }, 300);
                if (data.status == 'success') {
                    if (redirect_choice == 3) {
                        $.ajax({
                            url: redirect,
                            type: 'GET',
                            data: {email: email},
                            timeout: 15000,
                            complete: function(response, responseStatus) {
                                $.fancybox.close();
                                if(responseStatus == 'success') {
                                    $t.prev().remove();
                                    $t.prev().remove();
                                    $t.replaceWith(response.responseText);
                                } else {
                                    alert('Произошла ошибка, попробуйте позже');
                                }
                            }
                        });
                    } else {
                        // #4874 для ссылок, которые содержат в себе get-параметры, не надо добавлять email
                        if (redirect.indexOf('?category_id') >= 0) {
                            window.location = redirect;
                        } else {
                            window.location.href = redirect + "?requestId=" + data.message.requestId + '&requestHash=' + data.message.requestHash;
                        }
                    }
                } else if (data.status == 'message') {
                    $t.find('.email-response').addClass('success').html(data.message);
                } else {
                    $t.find('.email-response').removeClass('success').html(data.message);
                }
            },
            error: function(data) {
                setTimeout(function() {
                    $.fancybox('Извините, произошла ошибка. <br />Попробуйте отправить форму позднее', {
                        overlayColor: "#000000",
                        overlayOpacity: 0.5,
                        padding: 50,
                        closeBtn: false,
                        beforeShow: function(){
                            this.skin.append('<div class="fancyboxClose"></div>');
                        }
                    });
                }, 300);
            }
        });
        return false;
    });

    $('select[data-action="selectPriceByCity"]').on('change', function() {

        var cityId = $(this).val();

        var callback = function(el) {
            var productId = $(el).data('product-id');
            var eventId = $(el).data('event-id');
            var cityId = $(el).val();
            var cityName = $(el).find(':selected').text();
            var parentBlock = 'span.js-city-price-main-block',
                cityBlock = 'span.js-change-city-name_span i',
                priceBlock = 'span[data-price="true"]',
                loaderBlock = '.js-form-price-loader-block';

            $(self).parents(parentBlock).find(priceBlock).hide();
            $(self).parents(parentBlock).find(loaderBlock).css('display', 'inline-block');

            $.ajax({
                url: $(el).data('url'),
                type: 'POST',
                data: {
                    product_id: productId,
                    event_id: eventId,
                    city_id: cityId
                },
                success: function(data) {
                    $(el).parents(parentBlock).find(priceBlock).show();
                    $(el).parents(parentBlock).find(loaderBlock).hide();
                    $(el).parents(parentBlock).find(priceBlock).text(data.price);
                    $(el).parents(parentBlock).find(cityBlock).text(cityName);
                    $(el).parents('form').find('input[name="event_id"]').val(data.event_id);
                    $(el).parents('form').find('input[name="product_id"]').val(productId);
                }
            });
        };

        callback(this);

        // Выбираем такой же блок на всех доступных селектах
        $('select[data-action="selectPriceByCity"]').not(this).each(function(index) {

            if ($(this).val() != cityId) {
                $(this).find('option[value=' + cityId + ']').attr('selected', 'selected');
                callback(this);
            }
        });

    });

    $('form[data-form=svyaz]').submit(function(){
        var $form = $(this);
        if(!Validator.isValid($form)) {
            return false;
        }

        $.fancybox('Идет обработка запроса', {
            modal: true,
            overlayColor: "#000000",
            overlayOpacity: 0.5,
            padding: 50,
            centerOnScroll: true,
            closeBtn: false,
            beforeShow: function(){
                this.skin.append('<div class="fancyboxClose"></div>');
            }
        });

        $.post(
            '/request/svyaz/',
            $form.serialize(),
            function (data) {

                var captchaImage = $form.find('.captchaImage');
                var captchaBlock = $form.find('.captchaBlock');
                var captchaWord = $form.find('.captchaWord');
                var captchaCode = $form.find('.captchaCode');

                if ('status' in data && data['status'] == 'error') {
                    $.fancybox.close();

                    var message = data['rawMessage'];
                    if((data['rawMessage']) instanceof Array) {
                        message = data['rawMessage'].shift();
                    }
                    if (!message) {
                        message = data['message'];
                    }
                    var $input2 = $form.find('input').eq(0);

                    if ('captcha_url' in data) {
                        if (captchaBlock.is(':visible')) {
                            $('#svyazErrorBlock').text(message);
                        }

                        captchaImage.attr('src', data['captcha_url']);
                        captchaBlock.removeClass('hidden');
                        if (data['wrong_code']) {
                            captchaWord.addClass('error').focus();
                        }
                        $form.find('.captchaCode').val(data);
                        captchaWord.val('');
                    }
                    else {
                        captchaWord.removeClass('error').val('');
                        captchaBlock.addClass('hidden');
                        captchaCode.val('');

                        $('#svyazErrorBlock').empty();
                    }
                }
                else {
                    $form.find('.error-text').remove();
                    $form.removeClass('alert');
                    $form.find('input').removeClass('error');
                    $('#svyazErrorBlock').empty();

                    captchaBlock.addClass('hidden');
                    captchaWord.removeClass('error').val('');
                    captchaCode.val('');

                    if ($form.find('input[name="product_id"]').val() == 68 && $form.find('input[name="event_id"]').val() == 1076461) {
                        var name = $form.find('input[name="name"]').val();
                        var email = $form.find('input[name="email"]').val();
                        var phone = $form.find('input[name="phone_country"]').val() + $form.find('input[name="phone_code"]').val() + $form.find('input[name="phone"]').val();

                        var amoForm = $('.amoForm');
                        amoForm.find('input[name="name"]').val(name);
                        amoForm.find('input[name="email"]').val(email);
                        amoForm.find('input[name="phone"]').val(phone);
                        amoForm.find('input[name="packet"]').val(1);
                        $.post(
                            amoForm.attr('action'),
                            amoForm.serialize()
                        );
                    } else if ($form.find('input[name="product_id"]').val() == 68 && $form.find('input[name="event_id"]').val() == 1076460) {
                        var name = $form.find('input[name="name"]').val();
                        var email = $form.find('input[name="email"]').val();
                        var phone = $form.find('input[name="phone_country"]').val() + $form.find('input[name="phone_code"]').val() + $form.find('input[name="phone"]').val();

                        var amoForm = $('.amoForm');
                        amoForm.find('input[name="name"]').val(name);
                        amoForm.find('input[name="email"]').val(email);
                        amoForm.find('input[name="phone"]').val(phone);
                        amoForm.find('input[name="packet"]').val(2);
                        $.post(
                            amoForm.attr('action'),
                            amoForm.serialize()
                        );
                    }

                    if (data.redirect) {
                        window.location.href = data.redirect;
                        return;
                    }

                    if($form.find('input[name="redirect"]').length > 0) {
                        window.location.href = $form.find('input[name="redirect"]').val();
                        return;
                    }

                    if ($form.find('input[name="product_id"]').val() == 585) {

                        var name = $form.find('input[name="name"]').val();
                        var email = $form.find('input[name="email"]').val();
                        var phone = $form.find('input[name="phone_country"]').val() + $form.find('input[name="phone_code"]').val() + $form.find('input[name="phone"]').val();

                        var amoForm = $('.amoForm');
                        amoForm.find('input[name="first_name"]').val(name);
                        amoForm.find('input[name="email"]').val(email);
                        amoForm.find('input[name="phone"]').val(phone);

                        amoForm.submit();
                    }

                    setTimeout(function() {
                        $.fancybox(data.message, {
                            overlayColor: "#000000",
                            overlayOpacity: 0.5,
                            padding: 50,
                            centerOnScroll: true,
                            closeBtn: false,
                            beforeShow: function(){
                                this.skin.append('<div class="fancyboxClose"></div>');
                            }
                        });
                    }, 300);
                }
            }, 'json'
        );
        return false;
    });

    $('.enterForm .loginForm').find('form').submit(function(){
        var $self = $(this);

        if(!Validator.isValid($self)) {
            $self.find('.error').html(Validator.lastError);
            return false;
        }

        $.ajax({
            type: 'POST',
            url: $self.attr('action'),
            crossDomain: true,
            data: {
                login      : $self.find("input[name='login']").val(),
                password   : $self.find("input[name='password']").val()
            },
            dataType: 'json',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(responseData, textStatus, jqXHR) {
                if (responseData.status == 'success')
                {
                    var success_url = $self.find('input[name=success_url]').val();
                    if (success_url != '') {
                        window.location = success_url;
                    } else {
                        window.location.reload();
                    }
                }
                else
                {
                    $self.find('.error').text(responseData.message).show();
                }
            },
            error: function (responseData, textStatus, errorThrown) {
                $self.find('.error').hide();
            }
        });

        return false;
    });

    $('.enterForm .recForm').find('form').submit(function(){
        var $self = $(this);

        if(!Validator.isValid($self)) {
            $self.find('.error').html(Validator.lastError);
            return false;
        }

        $.ajax({
            type: 'POST',
            url: $self.attr('action'),
            crossDomain: true,
            data: {
                email: $self.find("input[name='email']").val()
            },
            dataType: 'json',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(responseData, textStatus, jqXHR) {
                if (responseData.status == 'success') {
                    $self.parents('.recForm').html('<p class="ta_c">' + responseData.message + '</p>');
                } else {
                    $self.find('.error').text(responseData.message).show();
                }
            },
            error: function (responseData, textStatus, errorThrown) {
                $self.find('.error').hide();
            }
        });

        return false;
    });

    $('.enterForm .regForm').find('form').submit(function(){
        var $self = $(this);

        if(!Validator.isValid($self)) {
            $self.find('.error').html(Validator.lastError);
            return false;
        }

        $self.find("input[type='submit']").attr('disabled','disabled');

        $.ajax({
            type: 'POST',
            url: $self.attr('action'),
            crossDomain: true,
            data:  $self.serialize(),
            dataType: 'json',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(responseData, textStatus, jqXHR) {
                if (responseData.status == 'success') {
                    $self.parents('.regForm').html('<p class="ta_c">Проверьте свою электронную почту.</p>');
                } else {
                    $self.find('.error').text(responseData.message).show();
                }

            },
            error: function (responseData, textStatus, errorThrown) {
                $self.find('.error').hide();
            }
        });
        $self.find("input[type='submit']").removeAttr('disabled');

        return false;
    });

    $(document).on('click', '.enterForm .showLoginForm', function(){
        $(this).parents('.enterForm').children('.oneForm').hide();
        $(this).parents('.enterForm').children('.loginForm').show();
    });
    $(document).on('click', '.enterForm .showRegForm', function(){
        $(this).parents('.enterForm').children('.oneForm').hide();
        $(this).parents('.enterForm').children('.regForm').show();
    });
    $(document).on('click', '.enterForm .showRecForm', function(){
        $(this).parents('.enterForm').children('.oneForm').hide();
        $(this).parents('.enterForm').children('.recForm').show();
    });

    // Banners entry
    // #3984
    $(function(){
        $(".l_banners").each(function(){
            var banners = $(this).children().hide();
            banners.eq(Math.floor(Math.random() * banners.length)).show();

            //$(this).cycle({speed: 400});
        });
    });

    // #5458 Баннеры с классом js-promo-block-random ротируем через js
    $(function() {
        var jsPromoBlock = $('.js-promo-block-random');
        $(jsPromoBlock).hide();
        $(jsPromoBlock).eq(Math.floor(Math.random() * $(jsPromoBlock).length)).show();
    });

    // Col right banner toggle
    var oWindow = $(window),
        largeBanner = $(".banner-aside.large"),
        smallBanner = $(".banner-aside.small");

    if ( largeBanner.length ){
        var showOffset = largeBanner.position().top + largeBanner.height() + smallBanner.height();

        oWindow.on("scroll", function(){
            if( oWindow.scrollTop() > showOffset ){
                smallBanner.fadeIn(200);
            } else {
                smallBanner.fadeOut(200);
            }
        }).trigger("scroll");
    }

    var isCardUpdating = false;
    $('#card-block input[type=button]').click(function(){
        if ($('input[name=card]').val().length == 0)
        {
            showError('', {'card' : 'Введите номер карты'});
            return false;
        }

        if (!/(^[0-9 ]+$)/.test($('input[name=card]').val()))
        {
            showError('', {'card' : 'Неверный формат номера карты'});
            return false;
        }

        if (!isCardUpdating)
        {
            isCardUpdating = true;
            $.ajax({
                dataType: "json",
                url: '/profile/card/activate/',
                type: 'POST',
                data: $('#user-profile-form').serialize(),
                success: function(data) {
                    if (data.status == 'success') {
                        $('#card-block').html( '<p>' + data.message + '</p>' ).removeClass('message_error');
                    } else {
                        showError( data.message, data.fields );
                    }
                    isCardUpdating = false;
                },
                error: function(xhr, status) {
                    isCardUpdating = false;
                }
            });
        }


    });

    $('#card-block form').submit(function(){
        $('#card-block input[type=button]').click();
        return false;
    });

    function showError(message, fields) {
        $('#card-block').find('p').each(function(){
            $( this).remove();
        });
        $('#card-block').prepend('<p class="message_error">' + message + '</p>');

        for(var i in fields) {
            $('input[name=' + i +']').before('<p class="message_error">' + fields[i] + '</p>');
        }
    }

    // form agreement
    $('.form-agreement').each(function() {
        var $form = $(this),
            $parent = $form.find('.js-form-agreement-parent'),
            count = $form.find('.js-form-agreement-children').length,
            countChecked = $form.find('.js-form-agreement-children:checked').length;

        if (count === countChecked) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', true);
        } else if (countChecked === 0) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', false);
        } else {
            $parent.prop('indeterminate', true);
        }
    });

    $(document).on('click', '.form-agreement .js-form-agreement-options', function() {
        $(this).parents('.form-agreement').find('.js-form-agreement-choose').toggleClass('hidden');

        return false;
    });

    $(document).on('change', '.form-agreement .js-form-agreement-children', function() {
        var $form = $(this).parents('.form-agreement'),
            $parent = $form.find('.js-form-agreement-parent'),
            count = $form.find('.js-form-agreement-children').length,
            countChecked = $form.find('.js-form-agreement-children:checked').length;

        if (count === countChecked) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', true);
        } else if (countChecked === 0) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', false);
        } else {
            $parent.prop('indeterminate', true);
        }
    });

    $(document).on('change', '.form-agreement .js-form-agreement-parent', function() {
        var $form = $(this).parents('.form-agreement');

        if ($(this).prop('checked')) {
            $form.find('.js-form-agreement-children').prop('checked', true);
        } else {
            $form.find('.js-form-agreement-choose').removeClass('hidden');
            $form.find('.js-form-agreement-children').prop('checked', false);
        }
    });
    //подставляем + в началае полного телефона
    $("input[name=phone_full]").keyup(function(){
        v = $(this).val();
        if(v==8) {
            $(this).val(+7);
        } else if(v.substring(0,1)!="+") {
            $(this).val("+"+v);
        }
    });
});

function showConfirmPersonalAlert(checked) {
    if (!checked) {
        alert('Без согласия на обработку данных мы не можем принять заявку');
    }
}

//bm4 block!!!!

$(function() {
    var expertBlockRender = function() {
        $('.expertBlock').each(function(){
            var markerId = $(this).data('marker-block');
            var expertTop = $('[data-marker="' + markerId + '"]').offset().top + 10;
            var expertLeft = $('.post').offset().left + 525;
            $(this).css({'top' : expertTop, 'left' : expertLeft});
        });
    };

    expertBlockRender();
    $(window).resize(expertBlockRender);

    if(jQuery().sliderkit) {
        $('.topSlider').sliderkit({
            circular: false,
            mousewheel: false,
            shownavitems: 3,
            verticalnav: true,
            navclipcenter: true,
            auto: false,
            navscrollatend: true
        });
    }

    var ajaxNisha = 0;
    $(document).on('click', '.nishaBlock .one.more', function(){
        if(ajaxNisha) {
            return false;
        }
        var $this = $(this);
        $.ajax({
            url: '/ajax/random/tags/',
            type: 'POST',
            data: {
                type_id: 3,
                group_id: 3
            },
            success: function(data) {
                if(data.status == 'success') {
                    $this.siblings('.one:visible').fadeOut(600, function() {
                        var $caseBlocks= $this.siblings('.one');
                        for(var i in data.message) {
                            var $caseBlock = $caseBlocks.eq(i);
                            $caseBlock.find('img').attr('src', data.message[i]['img']);
                            $caseBlock.find('img').attr('alt', data.message[i]['name']);
                            $caseBlock.find('a').attr('href', '/case/tag/' + data.message[i]['alias'] + '/');
                            $caseBlock.find('a').text(data.message[i]['name']);
                        }
                        $(this).fadeIn(600);
                    });
                }
            },
            beforeSend: function() {
                ajaxNisha = 1;
            },
            complete: function() {
                ajaxNisha = 0;
            }
        });

    });

    $(document).on('click', '.search', function(){
        $('#searchBlock').fadeToggle(500);
        $('#searchInput').focus();
    });

    $('.topBlock .news .one:last').addClass('last');

    $(document).on('click', '.head_set-drop a', function(){
        $(this).siblings('.head_set-box').toggle();
    });

    $('.slider').on('fotorama:show', function (e, fotorama) {
        $(this).find('.slider_pagination .current').text(fotorama.activeIndex + 1);
        $(this).find('.slider_caption').text(fotorama.activeFrame.caption);
    });

    $(document).on('click', '[data-request="auto"]', function(e) {
        processAutoRequest($(this));
        return false;
    });

    $(document).on('click', '.check-in-js .star', function(e){
        var star = $(this);
        var url = star.data('url');
        var redirect = star.data('redirect');

        if(star.hasClass('disabled')){
            if (!redirect) {
                redirect = $('#popup_auth [name=success_url]').val();
            }
            if (!redirect.match(/#/)) {
                redirect += '?r='+Math.random();
            } else if (!redirect.match(/#comment/)) {
                var match = redirect.match(/^([^#]*)#(.*)/);
                if (match) {
                    redirect = '?r='+Math.random() + match[0];
                }
            }
            Bm.fancybox.modals.auth.open(null, redirect);

            return false;
        }

        if(star.hasClass('active')){
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 0},
                success: function(data){
                    if(!data.status || data.status !== 'ok'){
                        return false;
                    }

                    star.removeClass('active');
                }
            });
        } else {
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 1},
                success: function(data){
                    if(!data.status || data.status !== 'ok'){
                        return false;
                    }

                    star.addClass('active');
                }
            });
        }
    });

    $('.promoLink').on('click', function(){
        $(this).parent('li').find('.promoInputBlock').toggle();
        return false;
    });
});
if ('firebase' in window && 'Notification' in window && firebase !== undefined && Notification !== undefined) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration.update();
            }}).catch(function(err) {
        });
    }

    (function (window, firebase, XMLHttpRequest) {
        firebase.initializeApp({
            messagingSenderId: '822536411745'
        });

        // // Retrieve Firebase Messaging object.
        const messaging = firebase.messaging();

        messaging.onMessage(function(payload) {
            // регистрируем пустой ServiceWorker каждый раз
            navigator.serviceWorker.register('firebase-messaging-sw.js');

            // запрашиваем права на показ уведомлений если еще не получили их
            Notification.requestPermission(function(result) {
                if (result === 'granted') {
                    navigator.serviceWorker.ready.then(function(registration) {
                        // копируем объект data
                        payload.data.data = JSON.parse(JSON.stringify(payload.data));

                        registration.showNotification(payload.data.title, payload.data);
                    }).catch(function(error) {
                    });
                }
            });
        });

        messaging.requestPermission()
            .then(function () {
                // получаем ID устройства
                messaging.getToken()
                    .then(function (currentToken) {
                        if (currentToken) {
                            sendTokenToServer(currentToken);
                        } else {
                            setTokenSentToServer(false);
                        }
                    })
                    .catch(function (err) {
                        setTokenSentToServer(false);
                    });
            });

        // отправка ID на сервер
        function sendTokenToServer(currentToken) {
            if (!isTokenSentToServer(currentToken)) {
                var url = '/rest/notify/fcm/instance/'; // адрес скрипта на сервере который сохраняет ID устройства

                var xhr = new XMLHttpRequest();
                xhr.open("POST", url, true);

                //Send the proper header information along with the request
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                xhr.send('token='+currentToken);

                setTokenSentToServer(currentToken);
            }
        }

        // используем localStorage для отметки того,
        // что пользователь уже подписался на уведомления
        function isTokenSentToServer(currentToken) {
            return window.localStorage.getItem('sentFirebaseMessagingToken') == currentToken;
        }

        function setTokenSentToServer(currentToken) {
            window.localStorage.setItem(
                'sentFirebaseMessagingToken',
                currentToken ? currentToken : ''
            );
        }

    }(window, firebase, XMLHttpRequest));
}
$(function() {
    window.shareInit = function() {

        /**
         * Обычный вариант
         */

        $('div.share42init').each(function(idx) {
            var el = $(this), u = el.attr('data-url'), t = el.attr('data-title'), i = el.attr('data-image'), d = el.attr('data-description'), f = el.attr('data-path'), fn = el.attr('data-icons-file'), z = el.attr("data-zero-counter");
            var useTitles = el.attr('data-use-titles');
            if (!u)u = location.href;
            if (!fn)fn = 'icons.png';
            if (!z)z = 0;
            function fb_count(url) {
                var shares;
                $.getJSON('http://graph.facebook.com/?callback=?&ids=' + url, function(data) {
                    shares = data[url].shares || 0;
                    if (shares > 0 || z == 1)el.find('a[data-count="fb"]').append('<span class="share42-counter">' + shares + '</span>').data('shares', shares)
                })
            }

            fb_count(u);
            function twi_count(url) {
                var shares;
                $.getJSON('http://urls.api.twitter.com/1/urls/count.json?callback=?&url=' + url, function(data) {
                    shares = data.count;
                    if (shares > 0 || z == 1)el.find('a[data-count="twi"]').append('<span class="share42-counter">' + shares + '</span>').data('shares', shares)
                })
            }

            twi_count(u);
            function vk_count(url) {
                $.getScript('http://vk.com/share.php?act=count&index=' + idx + '&url=' + url);
                if (!window.VK)window.VK = {};
                window.VK.Share = {
                    count: function(idx, shares) {
                        if (shares > 0 || z == 1)$('div.share42init').eq(idx).find('a[data-count="vk"]').append('<span class="share42-counter">' + shares + '</span>').data('shares', shares)
                    }
                }
            }

            vk_count(u);
            if (!t)t = document.title;
            if (!d) {
                var meta = $('meta[name="description"]').attr('content');
                if (meta !== undefined)d = meta; else d = '';
            }
            u = encodeURIComponent(u);
            t = encodeURIComponent(t);
            t = t.replace(/\'/g, '%27');
            i = encodeURIComponent(i);
            d = encodeURIComponent(d);
            d = d.replace(/\'/g, '%27');
            var fbQuery = 'u=' + u;
            if (i != 'null' && i != '')fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
            var vkImage = '';
            if (i != 'null' && i != '')vkImage = '&image=' + i;
            var s = [
                '"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"',
                '"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&' + fbQuery + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"',
                '"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text=' + t + '&url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"'
                 ];

            var titles = [
                'Вконтакте',
                'Фейсбук',
                'Твиттер'
            ];

            var l = '';
            for (var j = 0; j < s.length; j++) l += '<a rel="nofollow" class="share42-item" href=' + s[j] + ' target="_blank">' + (useTitles ? titles[j] : '') + '</a>';
            el.html('<div class="share42">' + l + '</div>');

            if (Bridge.isMobile) {
                el.find('.share42').append('<a class="share42-item" data-count="wa" href="whatsapp://send?text=' + t + ' ' + u + '"></a>');
            }
        });

        /**
         * Расширенный вариант
         * TODO: привести все к одному варианту
         */

        $('div.share42ext').each(function(idx) {
            var el = $(this), u = el.attr('data-url'), t = el.attr('data-title'), i = el.attr('data-image'), d = el.attr('data-description'), f = el.attr('data-path'), fn = el.attr('data-icons-file'), z = el.attr("data-zero-counter");
            if (!u)u = location.href;
            if (!fn)fn = 'icons.png';
            if (!z)z = 0;
            if (!f) {
                function path(name) {
                    var sc = document.getElementsByTagName('script'), sr = new RegExp('^(.*/|)(' + name + ')([#?]|$)');
                    for (var p = 0, scL = sc.length; p < scL; p++) {
                        var m = String(sc[p].src).match(sr);
                        if (m) {
                            if (m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];
                            if (m[1].indexOf("/") == 0)return m[1];
                            b = document.getElementsByTagName('base');
                            if (b[0] && b[0].href)return b[0].href + m[1]; else return document.location.pathname.match(/(.*[\/\\])/)[0] + m[1];
                        }
                    }
                    return null;
                }

                f = path('share42.js');
            }
            if (!t)t = document.title;
            if (!d) {
                var meta = $('meta[name="description"]').attr('content');
                if (meta !== undefined)d = meta; else d = '';
            }
            u = encodeURIComponent(u);
            t = encodeURIComponent(t);
            t = t.replace(/\'/g, '%27');
            i = encodeURIComponent(i);
            d = encodeURIComponent(d);
            d = d.replace(/\'/g, '%27');
            var fbQuery = 'u=' + u;
            if (i != 'null' && i != '')fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
            var vkImage = '';
            if (i != 'null' && i != '')vkImage = '&image=' + i;
            var s = new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&' + fbQuery + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"', '"#" data-count="mail" onclick="window.open(\'http://connect.mail.ru/share?url=' + u + '&title=' + t + '&description=' + d + '&imageurl=' + i + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Моем Мире@Mail.Ru"', '"#" data-count="odkl" onclick="window.open(\'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=' + u + '&title=' + t + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Одноклассники"', '"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"');
            var l = '';
            for (j = 0; j < s.length; j++)l += '<span class="share42-item" style="display:inline-block;margin:0 6px 6px 0;height:24px;"><a rel="nofollow" style="display:inline-block;width:24px;height:24px;margin:0;padding:0;outline:none;background:url(' + f + fn + ') -' + 24 * j + 'px 0 no-repeat" href=' + s[j] + ' target="_blank"></a></span>';
            el.html('<span id="share42">' + l + '</span>' + '');
        });

    };

    window.shareInit();
});
/**
 * Created with JetBrains PhpStorm.
 * User: n3b
 */



(function(window){

    if( window.BmSocialFB ) {
        return false;
    }

    window.BMSocialFB = {};

window.BmSocialFB = new function() {

	var sdk = this;
    var initialized = false;
	var callbackQueue = [];
	var authQueue = [];
	var _widgets =
	{
		like: function(params) {

			params = $.extend({}, {

				container: null,
				pageUrl: window.location.href

			}, params || {});

			if( ! params.container ) return false;

			var $cont = $('#' + params.container)
				.attr('class', 'fb-like')
				.attr('data-href', params.pageUrl)
				.attr('data-layout', 'button_count')
				.attr('data-send', 'false')
				.attr('data-show-faces', 'false');

			FB.XFBML.parse();
		},
		comments: function(params) {

			params = $.extend({}, {

				container: null,
				pageUrl: window.location.href,
				width: 500,
				posts: 10

			}, params || {});

			if( ! params.container ) return false;

			var $cont = $('#' + params.container).html('')
				.attr('class', 'fb-comments')
				.attr('data-href', params.pageUrl)
				.attr('data-num-posts', params.posts)
				.attr('data-width', params.width);

			FB.XFBML.parse();
		},
		auth: function(params) {

			params = $.extend({}, {

				container: null,
				width: 200,
				rows: 1,
				showFaces: true

			}, params || {});

			if( ! params.container ) return false;

            if( btn = document.getElementById(params.container + '-login-button') ) {
                btn.onclick = function(){ FB.login(); return false;};
                return false;
            }

			var $cont = $('#' + params.container)
				.attr('class', 'fb-login-button')
				.attr('data-show-faces', params.showFaces ? 'true' : 'false')
				.attr('data-width', params.width)
				.attr('data-max-rows', params.rows);

			FB.XFBML.parse();
		},
		group: function(params) {

			params = $.extend({}, {

				container: null,
				width: 292,
				showFaces: true,
				stram: false,
				border: false,
				header: false

			}, params || {});

			if( ! params.container ) return false;

			var $cont = $('#' + params.container).html('')
				.attr('class', 'fb-like-box')
				.attr('data-href', 'https://www.facebook.com/molodost.bz')
				.attr('data-show-faces', params.showFaces ? 'true' : 'false')
				.attr('data-stream', params.stram ? 'true' : 'false')
				.attr('data-show-border', params.border ? 'true' : 'false')
				.attr('data-header', params.header ? 'true' : 'false')
				.attr('data-width', params.width);

			FB.XFBML.parse();
		},
		membersComments: function(params) {

			params = $.extend({}, {

				container: null,
				pageUrl: window.location.href,
				width: 500,
				posts: 10

			}, params || {});

			if( ! params.container ) return false;

			authQueue.push(params);

			FB.getLoginStatus(loginStatusCallback);
		}
	};

	/**
	 * проверяем авторизацию на FB
	 * @param response
	 */
	var loginStatusCallback = function(response) {

        return _events.onJoin();

		if( ! ( response.status === 'connected' || response.status === 'not_authorized' ) ) {
			return _events.onCheck();
		}

		FB.api('/me/likes/293259244049605', function(response) {

			if( response.data && response.data.length ){
				_events.onJoin();
			}
			else {
				_events.onAuth();
			}
		});

	};

	var _events = {

		onCheck: function() {

			for( var key in authQueue ) {
				_widgets.auth({container: authQueue[key].container});
			}
		},
		onAuth: function() {

			for( var key in authQueue ) {
				_widgets.group({container: authQueue[key].container});
			}
		},
		onJoin: function() {

			var params;
			while( params = authQueue.shift() ) {
				_widgets.comments(params)
			}
		}
	};

	/**
	 * выполнить все колбеки в очереди
	 */
	var fireCallbacks = function()
	{
		var callback;

		while( callback = callbackQueue.shift() ) {
			callback.call(sdk);
		}
	};

	/**
	 * инициализация FB sdk
	 */
	var init = function()
	{
		if( typeof window.fbAsyncInit == 'undefined' )
		{
			window.fbAsyncInit = function()
			{
				if( window['socialCommentsCallbackUrl'] )
				{
					var fbCommentCallback = function(id){
						$.post(window['socialCommentsCallbackUrl'],{
							type: 'facebook',
							id: id
						});
					}

					FB.Event.subscribe('comment.create', function(response)
					{
						if( response.href ) {
							fbCommentCallback(response.href);
						}
					});

					FB.Event.subscribe('comment.remove', function(response)
					{
						if( response.href ) {
							fbCommentCallback(response.href);
						}
					});
				}

				FB.Event.subscribe('auth.login', loginStatusCallback);

				FB.Event.subscribe('edge.create', function(response)
				{
					if( 'https://www.facebook.com/molodost.bz' != response ) return;

					_events.onJoin();
				});

				fireCallbacks();
			};

			/* FB */
			(function (d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s);
				js.id = id;
				js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=146851835502992";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		}
		else if( typeof window.FB == 'undefined' )
		{
			setTimeout(init, 100);
		}
        else if( initialized )
        {
            fireCallbacks();
        }
	};

	/**
	 *
	 * @param name          имя виджета из массива _widgets
	 * @param params        параметры виджета
	 * @return {Boolean}
	 */
	sdk.widget = function(name, params)
	{
		if( ! _widgets[name] ) return false;

		callbackQueue.push(function(){ _widgets[name].call(sdk, params) });
		setTimeout(init, 0);
	};

};
})(window);

/**
 * Created with JetBrains PhpStorm.
 * User: n3b
 */

(function(window){

    if( window.BmSocialVK ) {
        return false;
    }

    window.BmSocialVK = {};

window.BmSocialVK = new function() {

    var sdk = this;
    var initialized = false;
    var callbackQueue = [];
    var authQueue = [];
    var _widgets =
    {
        like: function(params) {

            params = $.extend({}, {
                container: null
            }, params || {});

            if( ! params.container ) return false;

            var widgetParams = {
                pageUrl: params.pageUrl
            };

            VK.Widgets.Like( params.container, widgetParams );
        },
        comments: function(params) {

            params = $.extend({}, {
                container: null,
                width: 'auto',
                posts: 10,
                attach: '*'
            }, params || {});

            if( ! params.container ) return false;

            var $cont = $('#' + params.container);

            // dirty fix
            $cont.children().hide();

            var widgetParams = {
                width: params.width,
                limit: params.posts,
                attach: params.attach,
                pageUrl: params.pageUrl || params.pageId
            };

            VK.Widgets.Comments( params.container, widgetParams, params.pageId );
        },
        auth: function(params) {

            params = $.extend({}, {
                container: null
            }, params || {});

            if( ! params.container ) return false;

            var btnId = params.container + '-login-button';
            if( btn = document.getElementById(btnId) ) {
                btn.onclick = function(){ VK.Auth.login(loginStatusCallback); return false; };
                return false;
            }

            var btn = document.createElement('div');
            btn.id = btnId;
            btn.onclick = function(){ VK.Auth.login(loginStatusCallback); };
            document.getElementById(params.container).appendChild(btn);
            VK.UI.button( btnId );
        },
        group: function(params) {

            params = $.extend({}, {
                container: null,
                width: 'auto',
                height: 100
            }, params || {});

            if( ! params.container ) return false;

            var $cont = $('#' + params.container);

            $cont.html('<p>Вам необходимо вступить в группу:</p><div id="' + params.container + '_1"></div>');
            VK.Widgets.Group(params.container + '_1', { mode: 1, width: params.width, height: params.height }, 25276999);
        },
        membersComments: function(params) {

            params = $.extend({}, {
                container: null,
                width: 500,
                posts: 10
            }, params || {});

            if( ! params.container ) return false;

            authQueue.push(params);

            VK.Auth.getLoginStatus(loginStatusCallback);
        }

    };

    /**
     * проверяем авторизацию на VK
     * @param response
     */
    var loginStatusCallback = function(response)
    {
        return _events.onJoin();

        if (response.session) {
            VK.Api.call('groups.isMember', {group_id: 25276999, user_id: response.session.mid}, function(r) {
                r.response === 1 ? _events.onJoin() : _events.onAuth();
            });
        } else {
            _events.onCheck();
        }
    };

    var _events = {

        onCheck: function() {

            for( var key in authQueue ) {
                _widgets.auth({container: authQueue[key].container});
            }
        },
        onAuth: function() {

            for( var key in authQueue ) {
                _widgets.group({container: authQueue[key].container});
            }
        },
        onJoin: function() {

            var params;
            while( params = authQueue.shift() ) {
                _widgets.comments(params)
            }
        }
    };

    /**
     * выполнить все колбеки в очереди
     */
    var fireCallbacks = function()
    {
        var callback;

        while( callback = callbackQueue.shift() ) {
            callback.call(sdk);
        }
    };

    /**
     * инициализация VK sdk
     */
    var init = function()
    {
        if( typeof window.vkAsyncInit == 'undefined' )
        {
            window.vkAsyncInit = function()
            {
                // todo
                VK.init({apiId: 3489008});
                VK.Observer.subscribe("widgets.groups.joined", _events.onJoin);
                initialized = true;
                fireCallbacks();
            };

            /* VK */
            var id = 'vk_api_transport';
            if( document.getElementById(id) ) return;

            var div = document.createElement('div');
            div.id = id;
            var el = document.createElement("script");
            el.type = "text/javascript";
            el.src = "//vk.com/js/api/openapi.js";
            el.async = true;
            div.appendChild(el);
            document.getElementsByTagName('body')[0].appendChild(div);
        }
        else if( typeof window.VK == 'undefined' )
        {
            setTimeout(init, 100);
        }
        else if( initialized )
        {
            fireCallbacks();
        }
    };

    /**
     *
     * @param name          имя виджета из массива _widgets
     * @param params        параметры виджета
     * @return {Boolean}
     */
    sdk.widget = function(name, params)
    {
        if( ! _widgets[name] ) return false;

        callbackQueue.push(function(){ _widgets[name].call(sdk, params) });
        setTimeout(init, 0);
    };
};
})(window);


/**
 * Глобальные методы для работы с video
 */
Bm.video = {

    nowPlaying: '',

    /**
     * Инлайновое проигрывание
     *
     * @param $el
     *
     * @returns {boolean}
     */
    inline: function($el) {

        var videoId = $el.attr('data-id'),
            source = $el.attr('data-url'),
            poster = $el.attr('data-image'),
            videoContainer = $('.js-video-player');

        if ($el.hasClass('started')) {
            return false;
        }

        var $authorized = $el.data('authorized');
        var $hasPhone = $el.data('has-phone');
        var $eventId = $el.data('event-id');
        var $productId = $el.data('product-id');

        // Проверяем авторизацию
        if ($authorized === 0) {
            Bm.video.showAuth();
            return false;
        }

        // Проверяем телефон
        if ($hasPhone === 0) {
            Bm.video.showPhone();
            return false;
        }

        // Проверяем event_id и product_id
        if ($eventId && $productId) {
            $.ajax({
                url : '/request/auto/',
                data: {
                    event_id:   $eventId,
                    product_id: $productId
                },
                type: 'POST'
            });
        }

        // Это первая инциализация видео?
        var isInitial = videoContainer.find('video').length == 0;
        //var video = isInitial ? $('<video class="video-js vjs-default-skin js-video-player" preload="none" controls></video>') : videoContainer.find('video');
        var video = isInitial ? $('<iframe width="100%" src="'+source+'" frameborder="0" allowfullscreen></iframe>') : videoContainer.find('video');

        if (isInitial) {
            video.attr('id', videoId);
        } else {
            video.attr('id', videoId + '_html5_api');
            videoContainer.attr('id', videoId);
        }

        video.attr('width', $el.attr('data-width')).
            attr('height', $el.attr('data-height')).
            attr('data-image', poster).
            attr('src', source).
            attr('data-update-url', $el.attr('data-update-url')).
            attr('data-youtube', $el.attr('data-youtube')).
            removeClass('vjs-default-skin').
            addClass($el.attr('data-skin'));

        $el.find('img').hide();
        $el.append(isInitial ? video : videoContainer);
        $el.addClass('started');

        // Инициализируем видео, останавливаем аудио
        Bm.video.init(video, true);
        if (Bm.audio) {
            Bm.audio.stop();
        }

        if (this.nowPlaying == '' || this.nowPlaying == videoId) {
            this.nowPlaying = videoId;
            return false;
        }

        var $wrapper = $('.js-video-wrapper[data-id="' + this.nowPlaying + '"]');

        $wrapper.removeClass('started');
        $wrapper.find('img').show();

        this.nowPlaying = videoId;

        var url = $el.data('view-url');
        var record_id = $el.data('record-id');
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                record_id: record_id
            },
            success: function (data) {

            }
        });
    },

    /**
     * Остановить
     *
     * @returns {boolean}
     */
    stop: function() {

        if (this.nowPlaying == '') {
            return false;
        }

        videojs(this.nowPlaying).pause();

        var $wrapper = $('.js-video-wrapper[data-id="' + this.nowPlaying + '"]');

        $wrapper.removeClass('started');

        this.nowPlaying = '';
    }


};
(function(window) {
    if (window.social) {
        return false;
    }

    window.social = new function() {
        var t = this;
        t.bm5 = false;
        this.strategy = 'authorization';
        this.openAuthModal = function(href) {
            var w = 600,
                h = 500,
                left = (screen.width / 2) - (w / 2),
                top = (screen.height / 2) - (h / 2);
            window.open(href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
            return false;
        };

        this.setMessage = function(message) {
            switch (message.result.status) {
                case 'token':
                    if (t.strategy == 'authorization') {
                        getUser(message.social);
                    }
                    if (t.strategy == 'link') {
                        linkAccount(message.social);
                    }
                    break;
                case 'error':
                    alert('Вы не были привязаны к соцсети ' + message.social);
                    break;
            }
        };

        var getUser = function(social) {
            var registerPage = $('#popup_registration').find('input[name=register_page]').val();
            $.ajax({
                type: 'POST',
                url: '/social/connect/' + social + '/',
                data: {
                    register_page: registerPage + ':' + social
                },
                success: function(data) {
                    switch (data.status) {
                        case 'userFound':
                            var redirect = $('#popup_auth').find('input[name=success_url]').val();
                            if (redirect != '') {
                                window.location.href = redirect;
                            } else {
                                window.location.href = data.message;
                            }
                            break;
                        case 'userNotFound':
                            t.actions.typeEmail($('#popup_email_type'), data, social);
                            break;
                        case 'error':
                            t.actions.error(data.message);
                            break;
                    }
                }
            });
        };

        var linkAccount = function(social) {
            $.ajax({
                type: 'POST',
                url: '/social/link/' + social + '/',
                data: {
                    check: true
                },
                success: function(response) {
                    var $container = $('#popup_link');
                    $container.find('.socialSelect').html(response.template);
                    Bridge.fancybox.open($container.attr('id'));
                }
            });
        };

        this.actions = {
            typeEmail: function($container, socialData, socialName) {
                $container.find('.socialSelect').html(socialData.template);
                Bridge.fancybox.open($container.attr('id'));

                var $form = $container.find('form'),
                    $submit = $container.find('.js-form-submit'),
                    $error = $form.find('.data-error');

                $form.on('submit', function() {
                    if ($submit.hasClass('disabled')) {
                        return false;
                    }

                    $error.empty();

                    if (!Validator.isValid($form)) {
                        $error.html(Validator.lastError);

                        return false;
                    }

                    $.ajax({
                        url: $form.attr('action'),
                        type: 'POST',
                        data: $form.serialize(),
                        beforeSend: function() {
                            $submit.addClass('disabled');
                        },
                        success: function(response) {
                            if ('needPassword' == response.status) {
                                t.actions.typePassword($('#popup_password_type'), response, socialName);
                            }
                            if ('error' == response.status) {
                                $error.text(response.message);
                            }
                            if ('success' == response.status && response.redirect != undefined) {
                                window.location.href = response.redirect;
                            }

                            $submit.removeClass('disabled');
                        },
                        error: function() {
                            $submit.removeClass('disabled');
                        }
                    });

                    return false;
                });
            },

            typePassword: function($container, socialData, socialName) {
                $container.find('.socialSelect').html(socialData.template);
                Bridge.fancybox.open($container.attr('id'));

                var $form = $container.find('form'),
                    $submit = $container.find('.js-form-submit'),
                    $error = $form.find('.data-error');

                $form.on('submit', function() {
                    if ($submit.hasClass('disabled')) {
                        return false;
                    }

                    $error.empty();

                    if (!Validator.isValid($form)) {
                        $error.html(Validator.lastError);

                        return false;
                    }

                    $.ajax({
                        url: $form.attr('action'),
                        type: 'POST',
                        data: $form.serialize(),
                        beforeSend: function() {
                            $submit.addClass('disabled');
                        },
                        success: function(response) {
                            if ('error' == response.status) {
                                $error.text(response.message);
                            }
                            if ('success' == response.status && response.redirect != undefined) {
                                window.location.href = response.redirect;
                            }

                            $submit.removeClass('disabled');
                        },
                        error: function() {
                            $submit.removeClass('disabled');
                        }
                    });
                    return false;
                });
            },

            error: function(error) {
                alert(error);
            }
        };

    };

})(window);

$(function() {
    var changeSocLink = function(currentLink) {
        var $link = $('a[href="' + currentLink + '"]').first(),
            newSoc = $link.attr('data-anti-social');

        $link.attr('data-anti-social', $link.attr('data-social'));
        $link.attr('data-social', newSoc).toggleClass('active');

        var newLink = $link.attr('data-anti-href');
        $link.attr('data-anti-href', $link.attr('href'));
        $link.attr('href', newLink);

        var newTitle = $link.attr('data-anti-title');
        $link.attr('data-anti-title', $link.attr('title'));
        $link.attr('title', newTitle);
    };

    var currentSocLink = null;

    $(document).on('click', '[data-social="link"]', function() {
        var href = $(this).attr('href'),
            strategy = $(this).data('social') || "authorization";

        currentSocLink = href;

        window.social.strategy = strategy;
        window.social.openAuthModal(href);

        return false;
    });

    $(document).on('click', '[data-social="unlink"]', function() {
        if (confirm('Вы действительно хотите отвязать аккаунт данной социальной сети?')) {
            var $link = $(this).attr('href');

            $.ajax({
                url: $link,
                type: 'GET',
                success: function() {
                    changeSocLink($link);
                }
            });
        }

        return false;
    });

    $(document).on('click', '[data-social="authorization"]', function() {
        var href = $(this).attr('href'),
            strategy = $(this).data('social') || "authorization";

        window.social.strategy = strategy;
        window.social.bm5 = $(this).hasClass('bm5-social');
        window.social.openAuthModal(href);

        return false;
    });

    $(document).on('submit', 'form.ajax_link', function() {
        var $form = $(this);

        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            success: function(response) {
                // TODO check errors
                $.fancybox.close();
                changeSocLink(currentSocLink);
            }
        });

        return false;
    })
});
$(function() {
    Bm.social.openShareDialogCallback = function($el, $parent) {
        $parent.find('.share42init_async').addClass('share42init');

        window.shareInit();

        var url = $el.data('url');
        var id = $el.data('id');
        var share_type = $el.data('type');

        setTimeout(function() {
            var count = 0;

            $parent.find('.share42-item').each(function() {
                if ($(this).data('shares')) {
                    count = count + parseInt($(this).data('shares'));
                }
            });

            $.ajax({
                type   : 'POST',
                url    : url,
                data   : {
                    count: count,
                    id   : id,
                    type : share_type
                },
                success: function(data) {
                    $parent.find('.share42init_async').removeClass('share42init');
                }
            });

        }, 1000);
    }
});
/*! @license Firebase v4.3.1
Build: rev-b4fe95f
Terms: https://firebase.google.com/terms/ */

var firebase=function(){var e=void 0===e?self:e;return function(t){function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var r=e.webpackJsonpFirebase;e.webpackJsonpFirebase=function(e,o,c){for(var s,a,u,f=0,l=[];f<e.length;f++)a=e[f],i[a]&&l.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(r&&r(e,o,c);l.length;)l.shift()();if(c)for(f=0;f<c.length;f++)u=n(n.s=c[f]);return u};var o={},i={3:0};return n.e=function(e){function t(){s.onerror=s.onload=null,clearTimeout(a);var t=i[e];0!==t&&(t&&t[1](Error("Loading chunk "+e+" failed.")),i[e]=void 0)}var r=i[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var o=new Promise(function(t,n){r=i[e]=[t,n]});r[2]=o;var c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,n.nc&&s.setAttribute("nonce",n.nc),s.src=n.p+""+e+".js";var a=setTimeout(t,12e4);return s.onerror=s.onload=t,c.appendChild(s),o},n.m=t,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.t?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e},n(n.s=4)}([,,,,function(e,t,n){"use strict";function r(){function e(e){v(y[e],"delete"),delete y[e]}function t(e){return e=e||f,u(y,e)||o("no-app",{name:e}),y[e]}function n(e,t){void 0===t?t=f:"string"==typeof t&&""!==t||o("bad-app-name",{name:t+""}),u(y,t)&&o("duplicate-app",{name:t});var n=new p(e,t,g);return y[t]=n,v(n,"create"),n}function l(){return Object.keys(y).map(function(e){return y[e]})}function h(e,n,r,i,c){b[e]&&o("duplicate-service",{name:e}),b[e]=n,i&&(_[e]=i,l().forEach(function(e){i("create",e)}));var s=function(n){return void 0===n&&(n=t()),"function"!=typeof n[e]&&o("invalid-app-argument",{name:e}),n[e]()};return void 0!==r&&Object(a.b)(s,r),g[e]=s,p.prototype[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this.r.bind(this,e).apply(this,c?t:[])},s}function d(e){Object(a.b)(g,e)}function v(e,t){Object.keys(b).forEach(function(n){var r=m(e,n);null!==r&&_[r]&&_[r](t,e)})}function m(e,t){if("serverAuth"===t)return null;var n=t;return e.options,n}var y={},b={},_={},g={t:!0,initializeApp:n,app:t,apps:null,Promise:s.b,SDK_VERSION:"4.3.1",INTERNAL:{registerService:h,createFirebaseNamespace:r,extendNamespace:d,createSubscribe:i.a,ErrorFactory:c.a,removeApp:e,factories:b,useAsService:m,Promise:s.b,deepExtend:a.b}};return Object(a.c)(g,"default",g),Object.defineProperty(g,"apps",{get:l}),Object(a.c)(t,"App",p),g}function o(e,t){throw d.create(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),c=n(10),s=n(5),a=n(17),u=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f="[DEFAULT]",l=[],p=function(){function e(e,t,n){this.u=n,this.f=!1,this.h={},this.v=t,this.y=Object(a.a)(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return s.b.resolve(null)},addAuthTokenListener:function(e){l.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(e){l=l.filter(function(t){return t!==e})}}}return Object.defineProperty(e.prototype,"name",{get:function(){return this._(),this.v},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._(),this.y},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new s.b(function(t){e._(),t()}).then(function(){e.u.INTERNAL.removeApp(e.v);var t=[];return Object.keys(e.h).forEach(function(n){Object.keys(e.h[n]).forEach(function(r){t.push(e.h[n][r])})}),s.b.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.f=!0,e.h={}})},e.prototype.r=function(e,t){if(void 0===t&&(t=f),this._(),this.h[e]||(this.h[e]={}),!this.h[e][t]){var n=t!==f?t:void 0,r=this.u.INTERNAL.factories[e](this,this.extendApp.bind(this),n);this.h[e][t]=r}return this.h[e][t]},e.prototype.extendApp=function(e){var t=this;Object(a.b)(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(l.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),l=[])},e.prototype._=function(){this.f&&o("app-deleted",{name:this.v})},e}();p.prototype.name&&p.prototype.options||p.prototype.delete||console.log("dc");var h={"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."},d=new c.a("app","Firebase",h),v=n(19),m=(n.n(v),r());t.default=m},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return c});var r=n(14),o=r.a.Promise||n(20),i=function(){function e(){var e=this;this.resolve=null,this.reject=null,this.promise=new o(function(t,n){e.resolve=t,e.reject=n})}return e.prototype.wrapCallback=function(e){function t(t,r){t?n.reject(t):n.resolve(r),"function"==typeof e&&(c(n.promise),1===e.length?e(t):e(t,r))}var n=this;return t},e}(),c=function(e){e.catch(function(){})}},,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r="FirebaseError",o=Error.captureStackTrace,i=function(){function e(e,t){if(this.code=e,this.message=t,o)o(this,c.prototype.create);else{var n=Error.apply(this,arguments);this.name=r,Object.defineProperty(this,"stack",{get:function(){return n.stack}})}}return e}();i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.name=r;var c=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n,this.pattern=/\{\$([^}]+)}/g}return e.prototype.create=function(e,t){void 0===t&&(t={});var n,r=this.errors[e],o=this.service+"/"+e;n=void 0===r?"Error":r.replace(this.pattern,function(e,n){var r=t[n];return void 0!==r?""+r:"<"+n+"?>"}),n=this.serviceName+": "+n+" ("+o+").";var c=new i(o,n);for(var s in t)t.hasOwnProperty(s)&&"_"!==s.slice(-1)&&(c[s]=t[s]);return c},e}()},,,function(e,t,n){"use strict";function r(e,t){var n=new a(e,t);return n.subscribe.bind(n)}function o(e,t){if("object"!==(void 0===e?"undefined":s(e))||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"==typeof e[o])return!0}return!1}function i(){}t.a=r;var c=n(5),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=c.b.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(e){n.error(e)})}return e.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},e.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},e.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},e.prototype.subscribe=function(e,t,n){var r,c=this;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");r=o(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=i),void 0===r.error&&(r.error=i),void 0===r.complete&&(r.complete=i);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{c.finalError?r.error(c.finalError):r.complete()}catch(e){}}),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},e}()},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var r;if(void 0!==e)r=e;else if("undefined"!=typeof self)r=self;else try{r=Function("return this")()}catch(e){throw Error("polyfill failed because global object is unavailable in this environment")}var o=r}).call(t,n(15))},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof e&&(r=e)}t.exports=r},function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function c(){v&&h&&(v=!1,h.length?d=h.concat(d):m=-1,d.length&&s())}function s(){if(!v){var e=o(c);v=!0;for(var t=d.length;t;){for(h=d,d=[];++m<t;)h&&h[m].run();m=-1,t=d.length}h=null,v=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function u(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var h,d=[],v=!1,m=-1;p.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new a(e,t)),1!==d.length||v||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return o(void 0,e)}function o(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=o(e[r],t[r]));return e}function i(e,t,n){e[t]=n}t.a=r,t.b=o,t.c=i},,function(e,t){Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var i=t[o];if(e.call(r,i,o,t))return o;o++}return-1}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var i=t[o];if(e.call(r,i,o,t))return i;o++}}})},function(e,t,n){(function(t){!function(n){function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this.g=0,this.T=!1,this.w=void 0,this.O=[],l(e,this)}function c(e,t){for(;3===e.g;)e=e.w;if(0===e.g)return void e.O.push(t);e.T=!0,i.j(function(){var n=1===e.g?t.onFulfilled:t.onRejected;if(null===n)return void(1===e.g?s:a)(t.promise,e.w);var r;try{r=n(e.w)}catch(e){return void a(t.promise,e)}s(t.promise,r)})}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e.g=3,e.w=t,void u(e);if("function"==typeof n)return void l(o(n,t),e)}e.g=1,e.w=t,u(e)}catch(t){a(e,t)}}function a(e,t){e.g=2,e.w=t,u(e)}function u(e){2===e.g&&0===e.O.length&&i.j(function(){e.T||i.A(e.w)});for(var t=0,n=e.O.length;t<n;t++)c(e,e.O[t]);e.O=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}var p=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return c(this,new f(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(i,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var s=c.then;if("function"==typeof s)return void s.call(c,function(e){r(i,e)},n)}t[i]=c,0==--o&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i.j="function"==typeof t&&function(e){t(e)}||function(e){p(e,0)},i.A=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i.k=function(e){i.j=e},i.I=function(e){i.A=e},void 0!==e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(21).setImmediate)},function(t,n,r){function o(e,t){this.F=e,this.N=t}var i=Function.prototype.apply;n.setTimeout=function(){return new o(i.call(setTimeout,e,arguments),clearTimeout)},n.setInterval=function(){return new o(i.call(setInterval,e,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this.N.call(e,this.F)},n.enroll=function(e,t){clearTimeout(e.x),e.P=t},n.unenroll=function(e){clearTimeout(e.x),e.P=-1},n.L=n.active=function(e){clearTimeout(e.x);var t=e.P;t>=0&&(e.x=setTimeout(function(){e.S&&e.S()},t))},r(22),n.setImmediate=setImmediate,n.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=Function(""+e));for(var t=Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[a]=r,s(a),a++}function o(e){delete u[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function c(e){if(f)setTimeout(c,0,e);else{var t=u[e];if(t){f=!0;try{i(t)}finally{o(e),f=!1}}}}if(!e.setImmediate){var s,a=1,u={},f=!1,l=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){c(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&c(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){c(e.data)},s=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;s=function(t){var n=l.createElement("script");n.onreadystatechange=function(){c(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(c,0,e)}}(),p.setImmediate=r,p.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(15),n(16))}])}().default;
//# sourceMappingURL=firebase-app.js.map
/*! @license Firebase v4.3.1
Build: rev-b4fe95f
Terms: https://firebase.google.com/terms/ */

try{webpackJsonpFirebase([2],{24:function(e,t,r){"use strict";function n(e){var t=new Uint8Array(e);return window.btoa(String.fromCharCode.apply(null,t))}function o(e){var t=function(e){return self&&"ServiceWorkerGlobalScope"in self?new F(e):new D(e)},r={Messaging:D};e.INTERNAL.registerService("messaging",t,r)}Object.defineProperty(t,"__esModule",{value:!0});var i,s={AVAILABLE_IN_WINDOW:"only-available-in-window",AVAILABLE_IN_SW:"only-available-in-sw",SHOULD_BE_INHERITED:"should-be-overriden",BAD_SENDER_ID:"bad-sender-id",INCORRECT_GCM_SENDER_ID:"incorrect-gcm-sender-id",PERMISSION_DEFAULT:"permission-default",PERMISSION_BLOCKED:"permission-blocked",UNSUPPORTED_BROWSER:"unsupported-browser",NOTIFICATIONS_BLOCKED:"notifications-blocked",FAILED_DEFAULT_REGISTRATION:"failed-serviceworker-registration",SW_REGISTRATION_EXPECTED:"sw-registration-expected",GET_SUBSCRIPTION_FAILED:"get-subscription-failed",INVALID_SAVED_TOKEN:"invalid-saved-token",SW_REG_REDUNDANT:"sw-reg-redundant",TOKEN_SUBSCRIBE_FAILED:"token-subscribe-failed",TOKEN_SUBSCRIBE_NO_TOKEN:"token-subscribe-no-token",TOKEN_SUBSCRIBE_NO_PUSH_SET:"token-subscribe-no-push-set",USE_SW_BEFORE_GET_TOKEN:"use-sw-before-get-token",INVALID_DELETE_TOKEN:"invalid-delete-token",DELETE_TOKEN_NOT_FOUND:"delete-token-not-found",DELETE_SCOPE_NOT_FOUND:"delete-scope-not-found",BG_HANDLER_FUNCTION_EXPECTED:"bg-handler-function-expected",NO_WINDOW_CLIENT_TO_MSG:"no-window-client-to-msg",UNABLE_TO_RESUBSCRIBE:"unable-to-resubscribe",NO_FCM_TOKEN_FOR_RESUBSCRIBE:"no-fcm-token-for-resubscribe",FAILED_TO_DELETE_TOKEN:"failed-to-delete-token",NO_SW_IN_REG:"no-sw-in-reg",BAD_SCOPE:"bad-scope",BAD_VAPID_KEY:"bad-vapid-key",BAD_SUBSCRIPTION:"bad-subscription",BAD_TOKEN:"bad-token",BAD_PUSH_SET:"bad-push-set",FAILED_DELETE_VAPID_KEY:"failed-delete-vapid-key"},a=(i={},i[s.AVAILABLE_IN_WINDOW]="This method is available in a Window context.",i[s.AVAILABLE_IN_SW]="This method is available in a service worker context.",i["should-be-overriden"]="This method should be overriden by extended classes.",i["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",i["permission-default"]="The required permissions were not granted and dismissed instead.",i["permission-blocked"]="The required permissions were not granted and blocked instead.",i["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",i["notifications-blocked"]="Notifications have been blocked.",i[s.FAILED_DEFAULT_REGISTRATION]="We are unable to register the default service worker. {$browserErrorMessage}",i["sw-registration-expected"]="A service worker registration was the expected input.",i["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",i["invalid-saved-token"]="Unable to access details of the saved token.",i["sw-reg-redundant"]="The service worker being used for push was made redundant.",i["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$message}",i["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",i["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",i["use-sw-before-get-token"]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",i["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",i["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",i["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",i["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",i["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",i["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",i["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",i["failed-to-delete-token"]="Unable to delete the currently saved token.",i["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",i["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",i["bad-scope"]="The service worker scope must be a string with at least one character.",i["bad-vapid-key"]="The public VAPID key must be a string with at least one character.",i["bad-subscription"]="The subscription must be a valid PushSubscription.",i["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",i["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",i["failed-delete-vapid-key"]="The VAPID key could not be deleted.",i),c={codes:s,map:a},u=function(e){return n(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},_=[4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110],f={userVisibleOnly:!0,applicationServerKey:new Uint8Array(_)},d={ENDPOINT:"https://fcm.googleapis.com",APPLICATION_SERVER_KEY:_,SUBSCRIPTION_OPTIONS:f},h=r(10),p="fcm_token_object_Store",l=function(){function e(){this.e=new h.a("messaging","Messaging",c.map),this.t=null}return e.prototype.r=function(){return this.t?this.t:(this.t=new Promise(function(e,t){var r=indexedDB.open("fcm_token_details_db",1);r.onerror=function(e){t(e.target.error)},r.onsuccess=function(t){e(t.target.result)},r.onupgradeneeded=function(e){var t=e.target.result,r=t.createObjectStore(p,{keyPath:"swScope"});r.createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0})}}),this.t)},e.prototype.closeDatabase=function(){var e=this;return this.t?this.t.then(function(t){t.close(),e.t=null}):Promise.resolve()},e.prototype.getTokenDetailsFromToken=function(e){return this.r().then(function(t){return new Promise(function(r,n){var o=t.transaction([p]),i=o.objectStore(p),s=i.index("fcmToken"),a=s.get(e);a.onerror=function(e){n(e.target.error)},a.onsuccess=function(e){r(e.target.result)}})})},e.prototype.n=function(e){return this.r().then(function(t){return new Promise(function(r,n){var o=t.transaction([p]),i=o.objectStore(p),s=i.get(e);s.onerror=function(e){n(e.target.error)},s.onsuccess=function(e){r(e.target.result)}})})},e.prototype.o=function(e){return this.r().then(function(t){return new Promise(function(r,n){var o=t.transaction([p]),i=o.objectStore(p),s=[],a=i.openCursor();a.onerror=function(e){n(e.target.error)},a.onsuccess=function(t){var n=t.target.result;n?(n.value.fcmSenderId===e&&s.push(n.value),n.continue()):r(s)}})})},e.prototype.subscribeToFCM=function(e,t,r){var n=this,o=u(t.getKey("p256dh")),i=u(t.getKey("auth")),s="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+o+"&encryption_auth="+i;r&&(s+="&pushSet="+r);var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var _={method:"POST",headers:a,body:s};return fetch(d.ENDPOINT+"/fcm/connect/subscribe",_).then(function(e){return e.json()}).then(function(e){var t=e;if(t.error){var r=t.error.message;throw n.e.create(c.codes.TOKEN_SUBSCRIBE_FAILED,{message:r})}if(!t.token)throw n.e.create(c.codes.TOKEN_SUBSCRIBE_NO_TOKEN);if(!t.pushSet)throw n.e.create(c.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);return{token:t.token,pushSet:t.pushSet}})},e.prototype.i=function(e,t){return e.endpoint===t.endpoint&&u(e.getKey("auth"))===t.auth&&u(e.getKey("p256dh"))===t.p256dh},e.prototype.s=function(e,t,r,n,o){var i={swScope:t.scope,endpoint:r.endpoint,auth:u(r.getKey("auth")),p256dh:u(r.getKey("p256dh")),fcmToken:n,fcmPushSet:o,fcmSenderId:e};return this.r().then(function(e){return new Promise(function(t,r){var n=e.transaction([p],"readwrite"),o=n.objectStore(p),s=o.put(i);s.onerror=function(e){r(e.target.error)},s.onsuccess=function(e){t()}})})},e.prototype.getSavedToken=function(e,t){var r=this;return t instanceof ServiceWorkerRegistration?"string"!=typeof e||0===e.length?Promise.reject(this.e.create(c.codes.BAD_SENDER_ID)):this.o(e).then(function(r){if(0!==r.length){var n=r.findIndex(function(r){return t.scope===r.swScope&&e===r.fcmSenderId});if(-1!==n)return r[n]}}).then(function(e){if(e)return t.pushManager.getSubscription().catch(function(e){throw r.e.create(c.codes.GET_SUBSCRIPTION_FAILED)}).then(function(t){if(t&&r.i(t,e))return e.fcmToken})}):Promise.reject(this.e.create(c.codes.SW_REGISTRATION_EXPECTED))},e.prototype.createToken=function(e,t){var r=this;if("string"!=typeof e||0===e.length)return Promise.reject(this.e.create(c.codes.BAD_SENDER_ID));if(!(t instanceof ServiceWorkerRegistration))return Promise.reject(this.e.create(c.codes.SW_REGISTRATION_EXPECTED));var n,o;return t.pushManager.getSubscription().then(function(e){return e||t.pushManager.subscribe(d.SUBSCRIPTION_OPTIONS)}).then(function(t){return n=t,r.subscribeToFCM(e,n)}).then(function(i){return o=i,r.s(e,t,n,o.token,o.pushSet)}).then(function(){return o.token})},e.prototype.deleteToken=function(e){var t=this;return"string"!=typeof e||0===e.length?Promise.reject(this.e.create(c.codes.INVALID_DELETE_TOKEN)):this.getTokenDetailsFromToken(e).then(function(e){if(!e)throw t.e.create(c.codes.DELETE_TOKEN_NOT_FOUND);return t.r().then(function(r){return new Promise(function(n,o){var i=r.transaction([p],"readwrite"),s=i.objectStore(p),a=s.delete(e.swScope);a.onerror=function(e){o(e.target.error)},a.onsuccess=function(r){if(0===r.target.result)return void o(t.e.create(c.codes.FAILED_TO_DELETE_TOKEN));n(e)}})})})},e}(),g=l,E=r(10),S="messagingSenderId",T=function(){function e(e){var t=this;if(this.e=new E.a("messaging","Messaging",c.map),!e.options[S]||"string"!=typeof e.options[S])throw this.e.create(c.codes.BAD_SENDER_ID);this.c=e.options[S],this.u=new g,this.app=e,this.INTERNAL={},this.INTERNAL.delete=function(){return t.delete}}return e.prototype.getToken=function(){var e=this,t=this._();return"granted"!==t?"denied"===t?Promise.reject(this.e.create(c.codes.NOTIFICATIONS_BLOCKED)):Promise.resolve(null):this.f().then(function(t){return e.u.getSavedToken(e.c,t).then(function(r){return r||e.u.createToken(e.c,t)})})},e.prototype.deleteToken=function(e){var t=this;return this.u.deleteToken(e).then(function(){return t.f().then(function(e){if(e)return e.pushManager.getSubscription()}).then(function(e){if(e)return e.unsubscribe()})})},e.prototype.f=function(){throw this.e.create(c.codes.SHOULD_BE_INHERITED)},e.prototype.requestPermission=function(){throw this.e.create(c.codes.AVAILABLE_IN_WINDOW)},e.prototype.useServiceWorker=function(e){throw this.e.create(c.codes.AVAILABLE_IN_WINDOW)},e.prototype.onMessage=function(e,t,r){throw this.e.create(c.codes.AVAILABLE_IN_WINDOW)},e.prototype.onTokenRefresh=function(e,t,r){throw this.e.create(c.codes.AVAILABLE_IN_WINDOW)},e.prototype.setBackgroundMessageHandler=function(e){throw this.e.create(c.codes.AVAILABLE_IN_SW)},e.prototype.delete=function(){this.u.closeDatabase()},e.prototype._=function(){return Notification.permission},e.prototype.getTokenManager=function(){return this.u},e}(),b=T,m={TYPE_OF_MSG:"firebase-messaging-msg-type",DATA:"firebase-messaging-msg-data"},v={PUSH_MSG_RECEIVED:"push-msg-received",NOTIFICATION_CLICKED:"notification-clicked"},I=function(e,t){return r={},r[m.TYPE_OF_MSG]=e,r[m.DATA]=t,r;var r},y={PARAMS:m,TYPES_OF_MSG:v,createNewMsg:I},N={path:"/firebase-messaging-sw.js",scope:"/firebase-cloud-messaging-push-scope"},w=r(13),k=this&&this.d||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),O=function(e){function t(t){var r=e.call(this,t)||this;return r.h,r.p,r.l=null,r.g=Object(w.a)(function(e){r.l=e}),r.S=null,r.T=Object(w.a)(function(e){r.S=e}),r.b(),r}return k(t,e),t.prototype.getToken=function(){var t=this;return this.m()?this.v().then(function(){return e.prototype.getToken.call(t)}):Promise.reject(this.e.create(c.codes.UNSUPPORTED_BROWSER))},t.prototype.v=function(){var e=this;if(this.p)return this.p;var t=document.querySelector('link[rel="manifest"]');return this.p=t?fetch(t.href).then(function(e){return e.json()}).catch(function(){return Promise.resolve()}).then(function(t){if(t&&t.gcm_sender_id&&"103953800507"!==t.gcm_sender_id)throw e.e.create(c.codes.INCORRECT_GCM_SENDER_ID)}):Promise.resolve(),this.p},t.prototype.requestPermission=function(){var e=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(t,r){var n=function(n){return"granted"===n?t():r("denied"===n?e.e.create(c.codes.PERMISSION_BLOCKED):e.e.create(c.codes.PERMISSION_DEFAULT))},o=Notification.requestPermission(function(e){o||n(e)});o&&o.then(n)})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw this.e.create(c.codes.SW_REGISTRATION_EXPECTED);if(void 0!==this.h)throw this.e.create(c.codes.USE_SW_BEFORE_GET_TOKEN);this.h=e},t.prototype.onMessage=function(e,t,r){return this.g(e,t,r)},t.prototype.onTokenRefresh=function(e,t,r){return this.T(e,t,r)},t.prototype.I=function(e){var t=this,r=e.installing||e.waiting||e.active;return new Promise(function(n,o){if(!r)return void o(t.e.create(c.codes.NO_SW_IN_REG));if("activated"===r.state)return void n(e);if("redundant"===r.state)return void o(t.e.create(c.codes.SW_REG_REDUNDANT));var i=function i(){if("activated"===r.state)n(e);else{if("redundant"!==r.state)return;o(t.e.create(c.codes.SW_REG_REDUNDANT))}r.removeEventListener("statechange",i)};r.addEventListener("statechange",i)})},t.prototype.f=function(){var e=this;return this.h?this.I(this.h):(this.h=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:N.scope}).catch(function(t){throw e.e.create(c.codes.FAILED_DEFAULT_REGISTRATION,{browserErrorMessage:t.message})}).then(function(t){return e.I(t).then(function(){return e.h=t,t.update(),t})}))},t.prototype.b=function(){var e=this;"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[y.PARAMS.TYPE_OF_MSG]){var r=t.data;switch(r[y.PARAMS.TYPE_OF_MSG]){case y.TYPES_OF_MSG.PUSH_MSG_RECEIVED:case y.TYPES_OF_MSG.NOTIFICATION_CLICKED:var n=r[y.PARAMS.DATA];e.l.next(n)}}},!1)},t.prototype.m=function(){return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")},t}(b),D=O,A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=this&&this.d||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),R=function(e){function t(t){var r=e.call(this,t)||this;return self.addEventListener("push",function(e){return r.y(e)},!1),self.addEventListener("pushsubscriptionchange",function(e){return r.N(e)},!1),self.addEventListener("notificationclick",function(e){return r.w(e)},!1),r.k=null,r}return P(t,e),t.prototype.y=function(e){var t,r=this;try{t=e.data.json()}catch(e){return}var n=this.O().then(function(e){if(e){if(t.notification||r.k)return r.D(t)}else{var n=r.A(t);if(n){var o=n.title||"";return self.registration.showNotification(o,n)}if(r.k)return r.k(t)}});e.waitUntil(n)},t.prototype.N=function(e){var t=this,r=this.getToken().then(function(e){if(!e)throw t.e.create(c.codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);var r=null,n=t.getTokenManager();return n.getTokenDetailsFromToken(e).then(function(e){if(!(r=e))throw t.e.create(c.codes.INVALID_SAVED_TOKEN);return self.registration.pushManager.subscribe(d.SUBSCRIPTION_OPTIONS)}).then(function(e){return n.subscribeToFCM(r.fcmSenderId,e,r.fcmPushSet)}).catch(function(e){return n.deleteToken(r.fcmToken).then(function(){throw t.e.create(c.codes.UNABLE_TO_RESUBSCRIBE,{message:e})})})});e.waitUntil(r)},t.prototype.w=function(e){var t=this;if(e.notification&&e.notification.data&&e.notification.data.FCM_MSG){e.stopImmediatePropagation(),e.notification.close();var r=e.notification.data.FCM_MSG,n=r.notification.click_action;if(n){var o=this.P(n).then(function(e){return e||self.clients.openWindow(n)}).then(function(e){if(e){r.notification,delete r.notification;var n=y.createNewMsg(y.TYPES_OF_MSG.NOTIFICATION_CLICKED,r);return t.R(e,n)}});e.waitUntil(o)}}},t.prototype.A=function(e){if(e&&"object"===A(e.notification)){var t=Object.assign({},e.notification);return t.data=(r={},r.FCM_MSG=e,r),t;var r}},t.prototype.setBackgroundMessageHandler=function(e){if(e&&"function"!=typeof e)throw this.e.create(c.codes.BG_HANDLER_FUNCTION_EXPECTED);this.k=e},t.prototype.P=function(e){var t=new URL(e).href;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){for(var r=null,n=0;n<e.length;n++)if(new URL(e[n].url).href===t){r=e[n];break}if(r)return r.focus(),r})},t.prototype.R=function(e,t){var r=this;return new Promise(function(n,o){if(!e)return o(r.e.create(c.codes.NO_WINDOW_CLIENT_TO_MSG));e.postMessage(t),n()})},t.prototype.O=function(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){return e.some(function(e){return"visible"===e.visibilityState})})},t.prototype.D=function(e){var t=this;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(r){var n=y.createNewMsg(y.TYPES_OF_MSG.PUSH_MSG_RECEIVED,e);return Promise.all(r.map(function(e){return t.R(e,n)}))})},t.prototype.f=function(){return Promise.resolve(self.registration)},t}(b),F=R;t.registerMessaging=o,o(r(4).default)}},[24])}catch(e){throw Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")}
//# sourceMappingURL=firebase-messaging.js.map
$(document).ready(function(){
    $('.js-popup-phone-confirm-close').on('click', function() {
        $(this).closest('.js-phone-confirm-popup').hide(500);
    });
    $('.js-phone-confirm-popup').on('click',function(){
        if ( $(event.target).closest('.phone-confirm-popup-inner').length ){
            return;
        }
        $(this).hide(500);
    });
});

/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});
/*! jQuery UI - v1.10.3 - 2013-08-08
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.datepicker.js, jquery.ui.menu.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(t){var e=0;t.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var a=t.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:e=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case a.UP:e=!0,this._keyEvent("previous",n);break;case a.DOWN:e=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var t=this,i=++e;return function(s){i===e&&t.__response(s),t.pending--,t.pending||t.element.removeClass("ui-autocomplete-loading")}},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})})(jQuery);(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Мая","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(a.inline?e.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.3"}});var a,r="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,r,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=t("<span class='"+this._appendClass+"'>"+r+"</span>"),e[o?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[o?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),r=this._get(t,"dateFormat");r.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,r.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,a,o){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],r,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,r);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,r),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var r,o,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(r=s||{},"string"==typeof s&&(r={},r[s]=a),c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,r),null!==h&&r.dateFormat!==e&&r.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&r.dateFormat!==e&&r.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),r=!0,o=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),r=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,a=t.datepicker._getInst(i.target);return t.datepicker._get(a,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,a,r,o,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),a=s?s.apply(e,[e,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],r=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",r*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-r:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+o?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+o):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,r=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(a=this._getInst(r[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,r,o,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,_=-1,b=-1,y=!1,x=function(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e},k=function(t){var e=x(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},w=function(i,n,a){var r=-1,o=t.map(x(i)?a:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=i[0],l+=n.length,!1):e}),-1!==r)return r+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||x("'")?D():y=!1;else switch(i.charAt(a)){case"d":_=k("d");break;case"D":w("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=w("M",f,m);break;case"y":g=k("y");break;case"@":h=new Date(k("@")),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":x("'")?D():y=!0;break;default:D()}if(s.length>l&&(o=s.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),b>-1)for(v=1,_=b;;){if(r=this._getDaysInMonth(g,v-1),r>=_)break;v++,_-=r}if(h=this._daylightSavingAdjust(new Date(g,v-1,_)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),r,o);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,r=this._getFormatConfig(t);try{a=this.parseDate(i,s,r)||n}catch(o){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),r=n.getMonth(),o=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r));break;case"y":case"Y":a+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r))}l=h.exec(i)}return new Date(a,r,o)},r=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?s:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,r=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=r.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=r.getMonth(),t.drawYear=t.selectedYear=t.currentYear=r.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,r,o,h,l,c,u,d,p,f,m,g,v,_,b,y,x,k,w,D,T,C,M,S,N,I,P,A,z,H,E,F,O,W,j,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),J=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),Q=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),U=this._get(t,"stepMonths"),q=1!==Q[0]||1!==Q[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),$=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),$)for(e=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-Q[0]*Q[1]+1,$.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-U,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+U,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",r=this._get(t,"currentText"),o=this._get(t,"gotoCurrent")&&t.currentDay?X:L,r=K?this.formatDate(r,o,this._getFormatConfig(t)):r,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;Q[0]>k;k++){for(w="",this.maxRows=4,D=0;Q[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",M="",q){if(M+="<div class='ui-datepicker-group",Q[1]>1)switch(D){case 0:M+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case Q[1]-1:M+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",C=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===k?Y?a:s:"")+(/all|right/.test(C)&&0===k?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,G,$,k>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",S=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+c)%7,S+="<th"+((x+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(M+=S+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),P=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((P+I)/7),z=q?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,H=this._daylightSavingAdjust(new Date(te,Z,1-P)),E=0;z>E;E++){for(M+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)O=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],W=H.getMonth()!==Z,j=W&&!_||!O[0]||G&&G>H||$&&H>$,F+="<td class='"+((x+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(j?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!v?"":" "+O[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(W&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(j?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(W&&!v?"&#xa0;":j?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);M+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),M+="</tbody></table>"+(q?"</div>"+(Q[0]>0&&D===Q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=M}y+=w}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,r,o){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+r[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+o[c]+"</option>");y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);
return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),r=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),r=null,o=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=s),i[1].match(/[+\-].*/)&&(o+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!r||e.getFullYear()>=r)&&(!o||o>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.3"})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);
$(function() {

    $('form:not(.direct)').each(function() {
        var $form = $(this);
        $form.on('submit', function(e) {
            e.preventDefault();
            if ($form.hasClass('relogin')) {
                $.ajax({
                    url: $form.attr('logout'),
                    type: 'GET',
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: true
                    },
                    headers: {'X-Requested-With': 'XMLHttpRequest'}
                });
            }

            $form.find('input[type=submit]').css('visibility', 'hidden');

            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function(result) {
                    if (result['redirect']) {
                        segmentType = $form.find("input[name='segment_type']").val();
                        if (segmentType) {
                            dataLayer.push({
                                event: "user_segment_event",
                                user_segment_subscribe: segmentType
                            });
                        }
                        dataLayer.push({
                                'event': 'mixdata',
                                'eventCategory': 'Forms',
                                'eventAction': 'response',
                                'eventContent': 'Регистрация',
                                'eventLabel': 'successful'
                            }
                        );
                        window.location.href = result['redirect'];
                    } else {
                        if ('success_replace' == result['status'] && result['message']) {
                            $form.html(result['message']);
                        }
                        else if ('success' == result['status'] && result['message']) {
                            $form.find('.error_text').html(result['message']).show();
                        } else if ('error' == result['status']) {
                            $form.find('.error_text').html('Ошибка: ' + result['message']).show();
                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': 'Регистрация',
                                    'eventLabel': 'unsuccessful',
                                    'errorCode': '1 ' + result['message']
                                }
                            );
                        }
                        $form.find('input[type=submit]').css('visibility', 'visible');
                    }
                },
                dataType: 'json'
            }).error(function() {
                $form.find('input[type=submit]').css('visibility', 'visible');
                $form.find('.error_text').text('Ошибка загрузки').show();
            });

            return false;
        });
    });
});
function moveCaretToEnd(el)
{
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}

var Comment = function(selector) {
    var $self = $(this),
        selectors = {
            container:          '.comment-container-js',
            reply:              '.reply-js',
            textarea:           '.comment-reply-textarea-js',
            comment:            '.comment-js',
            commentList:        '.comment-list-js',
            commentMainForm:    '.comment-main-form-js',
            commentForm:        '.comment-form-js',
            commentFormCopy:    '.comment-form-copy-js',
            commentCount:       '.comment-count-js',
            commentDelete:      '.comment-delete-js',
            commentRestore:     '.comment-restore-js',
            commentLevel1:      '.comment-level1-js',
            commentLeaf:        '.comment-leaf-js',
            commentMore:        '.comment-more-js',
            commentMoreLoading: '.comment-more-loading-js',
            commentDeleteUser:  '.comment-delete-user-js',
            commentBanUser:     '.comment-ban-user-js',
            commentBlockUser:   '.comment-block-user-js',
            commentSubmit:      '.js-form-submit'
        };

    this.init = function() {
        //Клик на textarea комментария
        $(document).on('focus', selectors.textarea, function() {
            if (!isAuthorized(this)) {
                return showLogin(this);
            }

            $(this).siblings('input').show();
            $(this).siblings('a.send').removeClass('hidden');

            moveCaretToEnd(this);

            // Work around Chrome's little problem
            this.onmouseup = function() {
                // Prevent further mouseup intervention
                moveCaretToEnd(this);
                this.onmouseup = null;
                return false;
            };
        });

        $(document).on('keydown', selectors.textarea, (function (e)
        {
            if (e.ctrlKey && e.keyCode == 13) {
                $(this).parents('form').submit();
                $(e.target).trigger('blur');
            }
        }));

        $(document).on('submit', selectors.commentForm, function() {
            if (!isAuthorized(this)) {
                return showLogin(this);
            }

            var _this = this,
                $form = $(this),
                $commentContainer = findCommentContainer(this),
                $submit = $form.find(selectors.commentSubmit);

            if ($form.find('textarea[name=content]').val() == '') {
                $form.find('div.error_text').empty().append('<p>Вы не ввели комментарий!</p>');
                $form.find('textarea[name=content]').focus();

                return false;
            }

            Bm.ajax($submit, {
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serializeArray(),
                dataType: 'json',
                success: function(result) {
                    $form.find('.error_text.input_error').remove();
                    var errorText = $form.find('.error_text');
                    $(errorText).text('');

                    if (result.success) {
                        changeCommentCount($commentContainer, 1);
                        var $result = $(result.message);
                        if($form.hasClass(selectors.commentFormCopy)) {
                            var $prev = $form.prev();
                            hideForms(_this);
                            var $comments = $prev.nextUntil('.level1', selectors.comment);
                            $result.insertAfter($comments.length ? $comments.last() : $prev);
                        } else {
                            $form.find('textarea').val('');
                            $form.find('textarea').css('height', '');
                            $commentContainer.find(selectors.commentList).prepend($result);
                        }

                        $('.profile-name-container').remove();
                    } else {
                        if (result.error) {
                            if (typeof result.error === 'object') {
                                $.each(result.error, function (i) {
                                    var inputError = $(errorText).clone();
                                    $(inputError).addClass('input_error')
                                    var messArray = $.map(this, function(value) {
                                        return [value];
                                    });
                                    $(inputError).append($('<p>' + messArray.shift() + '</p>'));
                                    $form.find('[name=' + i +']').after(inputError);
                                    $(inputError).show();
                                });
                            } else {
                                $form.find('.error_text').text('Ошибка: ' + result.error).show();
                            }
                        }
                    }
                },
                error: function() {
                    $form.find('.popup_error_text').text('Ошибка загрузки').show();
                }
            });

            return false;
        });

        $(document).on('click', selectors.reply, function(e)
        {
            e.preventDefault();
            if (!isAuthorized(this)) {
                return showLogin(this);
            }
            if($(this).hasClass('reply-on')) {
                return false;
            }

            var $commentContainer = findCommentContainer(this),
                $comment = $(this).parents(selectors.comment),
                container = $(selectors.comment),
                leaf = $(this).parents(selectors.comment).data('leaf');

            hideForms(this);
            $(this).addClass('reply-on');
            var $formParent = $commentContainer.find(selectors.commentMainForm).clone(),
                $form = $formParent.find('form');

            $form.attr('action', $(this).data('url'));
            $form.attr('data-leaf', leaf);
            $form.addClass('level' + $comment.data('level'));
            $form.addClass(selectors.commentFormCopy);
            $form.insertAfter($comment);

            var $textarea = $form.find('textarea');
            $textarea.val($(this).data('replyTo') + ', ');
            $textarea.css('height', 'auto');
            if ($.fn.autosize){
                $textarea.autosize();
            }
            $textarea.focus();
            e.stopPropagation();
        });

        //Показать еще в комментах 2 уровня
        $(document).on('click', selectors.commentLeaf, function(e)
        {
            var leafId = $(this).data('leaf');
            if($(this).hasClass('show-less-js')) {
                $(this).removeClass('show-less-js')
                        .text('еще ответы');
                $('.comment-leaf-showed-js[data-leaf=' + leafId + ']').removeClass('comment-leaf-showed-js').slideToggle(200);
            } else {
                $('[data-leaf=' + leafId + ']:hidden').addClass('comment-leaf-showed-js').slideToggle(200);
                $(this).insertBefore($('.comment-leaf-showed-js[data-leaf=' + leafId + ']').first());
                $(this).addClass('show-less-js')
                        .text('скрыть ответы');
            }
            $(this).toggleClass('up');
        });

        //Показать еще в комментариях 1 уровня
        $(document).on('click', selectors.commentMore, function(e){
            e.preventDefault();

            var $link = $(this),
                $commentContainer = findCommentContainer(this),
                $loading = $commentContainer.find(selectors.commentMoreLoading),
                $loadingIcon = $loading.children('.icon'),
                limit = 10,
                rotate,
                options = {
                    'offset': $commentContainer.find(selectors.comment).last().data('offset')
                };

            if ($link.data('limit')) {
                options['limit'] = $link.data('limit');
                limit = $link.data('limit');
            }

            $.ajax({
                url: $link.attr('data-get-uri'),
                data: options,
                beforeSend: function() {
                    $link.hide();
                    $loading.show();
                    rotate = rotateStart($loadingIcon);
                },
                success: function(result) {
                    var $lol =  $('<div></div>').append(result),
                        count = $(selectors.comment, $lol).size();

                    $commentContainer.find(selectors.commentList).append(result);
                    $loading.hide();
                    rotateStop($loadingIcon, rotate);

                    if (count >= limit) {
                        var remaining = $link.find('span[data-count=true]').text();
                        $link.show().find('span[data-count=true]').text(remaining - limit);
                    }
                }
            });
        });

        $(document).on('click', selectors.commentDelete + ',' + selectors.commentDeleteUser, function()
        {
            if (confirm('Вы подтверждаете это действие?')) {
                var $form = $(this);
                $.ajax({
                    type: 'POST',
                    url: $(this).attr('data-url'),
                    dataType: 'json',
                    success: function( xhr )
                    {
                        if (xhr.ids.length) {
                            $('div.deleted_container').each(function() {
                                var found = false;
                                for (var i in xhr.ids) {
                                    if ($(this).attr('deleted-container-data-id') == xhr.ids[i]) {
                                        found = true;
                                    }
                                }

                                if (found) {
                                    var $commentContainer = findCommentContainer(this);
                                    changeCommentCount($commentContainer, 1);

                                    $(this)
                                        .removeClass('hidden')
                                        .parents(selectors.comment)
                                        .addClass('deleted-comment')
                                        .find(selectors.commentDelete + ', ' + selectors.reply).addClass('hidden');
                                }
                            });
                        }
                    }
                }).error(function() {
                    $form.find('[type=submit]').css('visibility', 'visible');
                    $form.find('.popup_error_text').text('Ошибка загрузки').show();
                });
            }

            return false;
        });

        $(document).on('click', selectors.commentRestore, function()
        {
            var $form = $(this);
            $.ajax({
                type: 'POST',
                url: $(this).attr('data-url'),
                dataType: 'json',
                success: function( xhr )
                {
                    if (xhr.ids.length) {
                        $('div.deleted_container').each(function() {
                            var found = false;
                            for (var i in xhr.ids) {
                                if ($(this).attr('deleted-container-data-id') == xhr.ids[i]) {
                                    found = true;
                                }
                            }

                            if (found) {
                                var $commentContainer = findCommentContainer(this);
                                changeCommentCount($commentContainer, 1);

                                $(this)
                                    .addClass('hidden')
                                    .parents(selectors.comment)
                                    .removeClass('deleted-comment')
                                    .find(selectors.commentDelete + ', ' + selectors.reply).removeClass('hidden');
                            }
                        });
                    }
                },
            }).error(function() {
                $form.find('[type=submit]').css('visibility', 'visible');
                $form.find('.popup_error_text').text('Ошибка загрузки').show();
            });

            return false;
        });

        $(document).on('click', selectors.commentBanUser, function()
        {
            if (confirm('Вы подтверждаете это действие?')) {
                var $form = $(this);
                $.ajax({
                    type: 'POST',
                    url: $(this).attr('data-url'),
                    dataType: 'json',
                    success: function( xhr )
                    {
                        if (xhr.response) {
                            $('div.commentaries_item').each(function() {
                                if ($(this).attr('data-author-id') == xhr.authorId) {
                                    $(this).find('.banned-author-container').removeClass('hidden');
                                    $(this).find(selectors.commentBanUser).addClass('hidden');
                                }
                            });
                        }
                    },
                }).error(function() {
                    $form.find('[type=submit]').css('visibility', 'visible');
                    $form.find('.popup_error_text').text('Ошибка загрузки').show();
                });
            }

            return false;
        });

        $(document).on('click', selectors.commentBlockUser, function()
        {
            if (confirm('Вы подтверждаете это действие?')) {
                var $form = $(this);
                $.ajax({
                    type: 'POST',
                    url: $(this).attr('data-url'),
                    dataType: 'json',
                    success: function( xhr )
                    {
                        if (xhr.response) {
                            $('div.commentaries_item').each(function() {
                                if ($(this).attr('data-author-id') == xhr.authorId) {
                                    $(this).find('.blocked-author-container').removeClass('hidden');
                                    $(this).find(selectors.commentBlockUser).addClass('hidden');
                                }
                            });
                        }
                    },
                }).error(function() {
                    $form.find('[type=submit]').css('visibility', 'visible');
                    $form.find('.popup_error_text').text('Ошибка загрузки').show();
                });
            }

            return false;
        });
    };
    var initializers = {
        reply : function() {
            this.selectors.reply;
        }
    };

    var findCommentContainer = function(object) {
        return $(object).parents(selectors.container);
    };

    var showLogin = function(object) {
        var $commentContainer = findCommentContainer(object),
            successUri = $commentContainer.data('redirectUrl');

        if (Bridge.isMobile) {
            if (!successUri) {
                successUri = $('.popup[data-popup="login"] input[name="success_url"]').val();
            }
            if (!successUri || !successUri.match(/#/)) {
                successUri += '?r='+Math.random() + '#comment';
            } else if (!successUri.match(/#comment/)) {
                var match = successUri.match(/^([^#]*)#(.*)/);
                if (match) {
                    successUri = '?r='+Math.random() + match[0];
                }
            }
            Bm.mobile.popup.show('login');
        } else {
            if (!successUri) {
                successUri = $('#popup_auth [name=success_url]').val();
            }
            if (!successUri.match(/#/)) {
                successUri += '?r='+Math.random() + '#comment';
            } else if (!successUri.match(/#comment/)) {
                var match = successUri.match(/^([^#]*)#(.*)/);
                if (match) {
                    successUri = '?r='+Math.random() + match[0];
                }
            }
            Bm.fancybox.modals.auth.open('<span>Чтобы оставить комментарий, авторизуйтесь или зарегистрируйтесь</span>', successUri);
        }

        $(selectors.textarea).blur();

        return false;
    };

    var isAuthorized = function(object) {
        var $commentContainer = findCommentContainer(object);

        return $commentContainer.attr('data-authorized');
    };

    var hideForms = function(cont) {
        var $commentContainer = findCommentContainer(cont);
        $commentContainer.find('.reply-on').removeClass('reply-on');
        $commentContainer.find(selectors.commentList + ' form').remove();
    };

    var changeCommentCount = function($commentContainer, delta) {
        var count = $commentContainer.data('count'),
            url   = $commentContainer.data('url');

        count = count + delta;
        $commentContainer.data('count', count);
        $('[data-comment-count="' + url + '"]').text(count);

        if (url) {
            var re  = /\/comment\/add\/(\d+)\/(\d+)\/\d+\//;
            var galleryUri = url.replace(re, "/ajax/comments/$1/$2/");

            $('[data-comment-count="' + galleryUri + '"]').text(count);
        }
    }
};

$(document).ready(function()
{
    var c = new Comment('.comment-container-js');
    c.init();
});
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
/**
 * luckyslider
 *
 * Copyright 2016, sDofeen
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    $.fn.luckySlider = function(options) {
        var _this = {};

        this.each(function(index, item) {
            _this = init($(item), options);
        });

        return _this;

        function init($ls, options) {
            var luckySlider = {},
                settings = $.extend({
                    start: 1,
                    nav: true,
                    dots: true,
                    cycle: true,
                    swipe: true,
                    auto: false,
                    timeout: 3000
                }, options),
                active = settings.start,
                items = $ls.children().length;

            $ls.addClass('_ls').children().addClass('_ls__list-item').each(function(index, item) {
                $(item).attr('data-item', Number(index + 1));
            });

            $ls.append('<div class="_ls__wrapper"></div>');
            $ls.find('._ls__wrapper').append('<div class="_ls__list"></div>');
            $ls.find('._ls__list-item').appendTo($ls.find('._ls__list'));

            if (settings.nav) {
                $ls.find('._ls__wrapper').append('<div class="_ls__nav"></div>');

                $ls.find('._ls__nav').append('<a class="_ls__nav-prev" href="javascript:void(0);"></a>');
                $ls.find('._ls__nav').append('<a class="_ls__nav-next" href="javascript:void(0);"></a>');

                $ls.find('._ls__nav ._ls__nav-prev').on('click', function() {
                    change('prev');
                });

                $ls.find('._ls__nav ._ls__nav-next').on('click', function() {
                    change('next');
                });
            }

            if (settings.dots) {
                $ls.append('<div class="_ls__dots"></div>');

                for (var i = 0; i < items; i++) {
                    $ls.find('._ls__dots').append('<a class="_ls__dots-item" data-dot="' + Number(i + 1) + '" href="javascript:void(0);"></a>')
                }

                $ls.find('._ls__dots-item').on('click', function() {
                    change('id', $(this).data('dot'));
                });
            }

            if (settings.auto) {
                setInterval(function() {
                    change('next');
                }, settings.timeout);
            }

            if (settings.swipe) {
                $ls.on('swiperight', function() {
                    change('prev');
                });

                $ls.on('swipeleft', function() {
                    change('next');
                });
            }

            function setActive() {
                $ls.find('._ls__list-item[data-item="' + active + '"]').addClass('_ls-active');

                if (settings.dots) {
                    $ls.find('._ls__dots-item[data-dot="' + active + '"]').addClass('_ls-active');
                }

                if (!settings.cycle) {
                    checkNav();
                }
            }

            function checkNav() {
                $ls.find('._ls__nav-prev').removeClass('_ls-disabled');
                $ls.find('._ls__nav-next').removeClass('_ls-disabled');

                if (active === 1) {
                    $ls.find('._ls__nav-prev').addClass('_ls-disabled');
                }

                if (active === items) {
                    $ls.find('._ls__nav-next').addClass('_ls-disabled');
                }
            }

            function beforeChange() {
                var $items = $ls.find('._ls__list-item'),
                    $dots = $ls.find('._ls__dots-item');

                $items.removeClass('_ls-active');
                $dots.removeClass('_ls-active');

                if (settings.beforeChange && $.isFunction(settings.beforeChange)) {
                    settings.beforeChange.call();
                }
            }

            function afterChange() {
                setActive();

                if (settings.afterChange && $.isFunction(settings.afterChange)) {
                    settings.afterChange.call();
                }
            }

            function change(type, id) {
                if (type === 'id' && id >= 1 && id <= items && id !== active) {
                    beforeChange();
                    active = id;
                    afterChange();
                } else if (type === 'prev') {
                    if (active === 1) {
                        if (settings.cycle) {
                            beforeChange();
                            active = items;
                            afterChange();
                        }
                    } else {
                        beforeChange();
                        active--;
                        afterChange();
                    }
                } else if (type === 'next') {
                    if (active === items) {
                        if (settings.cycle) {
                            beforeChange();
                            active = 1;
                            afterChange();
                        }
                    } else {
                        beforeChange();
                        active++;
                        afterChange();
                    }
                }
            }

            setActive();

            luckySlider.getActive = function() {
                return active;
            };

            luckySlider.setActive = function(id) {
                if ($.isNumeric(id)) {
                    change('id', id);
                }
            };

            luckySlider.prev = function() {
                change('prev');
            };

            luckySlider.next = function() {
                change('next');
            };

            return luckySlider;
        }
    }
})(jQuery);
