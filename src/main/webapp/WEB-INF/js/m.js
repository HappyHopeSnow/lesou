/**
 * Created by lian_le on 2015/2/28.
 */
/*! Copyright 2015 Baidu Inc. All Rights Reserved. */;(function(){var l=void 0,n=!0,r=null,s=!1;function t(a){return function(){return a}}var u=["search!"],fa=3,ga="BAIDU_DUP_replacement",ha="http://dup.baidustatic.com/painter/",x=document,y={},ia=0,ja=1,B=2,C=3,D=4,ka=5;function la(a){var b=ma(a),d=b[0],b=b[1];this.id=a;this.name=b;this.uri=E(b);this.Ea=!b;this.status=ia;d&&b&&(this.Ja=F(I(d+"!"))||{load:function(){}});this.v=[]}
	var O=window.BAIDU_DUP_require||function(a,b,d){J(a,function(){for(var c=[],d=0;d<a.length;d++)c[d]=F(I(a[d]));N(b)&&b.apply(window,c)},d)};
	function J(a,b,d){var c=a.length;if(0===c)b();else for(var i=c,f=0;f<c;f++)(function(a){function h(){if(a.status<B)k();else{for(var h=a.v,c=[],b=0;b<h.length;b++){var f=h[b];f&&I(f).status<C&&c.push(f)}0===c.length?k():J(c,k,d)}}function k(){a&&a.status<C&&(a.status=C);0===--i&&b()}var c=a.Ja;c&&(c.normalize&&(a.name=c.normalize(a.name,E)),c.name2url&&(a.uri=c.name2url(a.name)));a.status<B?c&&N(c.load)?c.load(a.name,O,function(h){P(a.id,[],function(){return h});k()}):na(a,h,d):h()})(I(a[f]))}
	var Q={},R={},S={};function na(a,b,d){a.status=ja;S[a.id]?b():R[a.id]?Q[a.id].push(b):(R[a.id]=n,Q[a.id]=[b],d?(b=a.uri,a=x.createElement("script"),a.charset="utf-8",a.async=n,a.src=b,b=x.getElementsByTagName("head")[0]||x.body,b.insertBefore(a,b.firstChild)):x.write('<script charset="utf-8" src="'+a.uri+'"><\/script>'))}var P=window.BAIDU_DUP_define||function(a,b,d){var c=I(a);c.status<B&&(c.v=b,c.factory=d,c.status=c.Ea?C:B);if(R[a]){delete R[a];S[a]=n;b=Q[a];for(delete Q[a];a=b.shift();)a()}};
	function F(a){if(!a)return r;if(a.status>=D)return a.X;if(a.status<C&&a.X===l)return r;a.status=D;for(var b=[],d=0;d<a.v.length;d++)b[d]=F(I(a.v[d]));var c=d=a.factory;N(d)&&(c=d.apply(window,b));a.status=ka;return a.X=c}function E(a){return/^https?:\/\//.test(a)?a:ha+a+".js"}function I(a){return y[a]||(y[a]=new la(a))}function ma(a){var b,d=a?a.indexOf("!"):-1;-1<d&&(b=a.slice(0,d),a=a.slice(d+1,a.length));return[b,a]}function N(a){return"[object Function]"===Object.prototype.toString.call(a)}
	P("util/lang",[],function(){function a(a){for(var c={},b="Array Boolean Date Error Function Number RegExp String".split(" "),f=0,g=b.length;f<g;f++)c["[object "+b[f]+"]"]=b[f].toLowerCase();return a==r?"null":c[Object.prototype.toString.call(a)]||"object"}var b=Object.prototype.hasOwnProperty;return{B:b,a:a,getAttribute:function(a,c){for(var b=a,f=c.split(".");f.length;){if(b===l||b===r)return;b=b[f.shift()]}return b},ha:function(d){if("object"!==a(d))return"";var c=[],i;for(i in d)b.call(d,i)&&c.push(i+
	"="+encodeURIComponent(d[i]));return c.join("&")},l:function(b){var c=[];switch(a(b)){case "object":c=Array.prototype.slice.call(b);break;case "array":c=b;break;case "number":case "string":c.push(b)}return c},unique:function(a){for(var c=[],b={},f=a.length,g=0;g<f;g++){var h=a[g];b[h]||(c[c.length]=h,b[h]=n)}return c},removeItem:function(a,c){for(var b=[].slice.call(a),f=b.length-1;0<=f;f--)b[f]===c&&b.splice(f,1);return b},ea:function(){}}});
	P("util/browser",["util/lang"],function(a){var b={},d=navigator.userAgent,c=window.RegExp;/msie (\d+\.\d)/i.test(d)&&(b.r=document.documentMode||+c.$1);/opera\/(\d+\.\d)/i.test(d)&&(b.opera=+c.$1);/firefox\/(\d+\.\d)/i.test(d)&&(b.Wa=+c.$1);/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(d)&&!/chrome/i.test(d)&&(b.hb=+(c.$1||c.$2));if(/chrome\/(\d+\.\d)/i.test(d)){b.pa=+c.$1;var i;try{i="scoped"in document.createElement("style")}catch(f){i=s}i&&(b.Oa=n)}try{/(\d+\.\d)/.test(a.getAttribute(window,
		"external.max_version"))&&(b.bb=+c.$1)}catch(g){}a="Android iPad iPhone Linux Macintosh Windows".split(" ");c="";for(i=0;i<a.length&&!(c=a[i],d.match(RegExp(c.toLowerCase(),"i")));i++);b.platform=c;return b});
	P("util/dom",["util/lang"],function(a){function b(a){try{if(a&&"object"===typeof a&&a.document&&"setInterval"in a)return n}catch(b){}return s}function d(a,c){c=2===arguments.length?c:a.parent;return a!=c||!b(a)}function c(a,c){for(var c=2===arguments.length?c:a.parent,h=0;10>h++&&d(a,c);){var k;try{k=!!a.parent.location.toString()}catch(b){k=s}if(!k)return n;a=a.parent}return 10<=h}function i(a){return 9===a.nodeType?a:a.ownerDocument||a.document}return{c:function(c,b){return"string"===a.a(c)&&0<
	c.length?(b||window).document.getElementById(c):c.nodeName&&(1===c.nodeType||9===c.nodeType)?c:r},Fa:b,s:d,C:c,ua:i,A:function(a){a=i(a);return a.parentWindow||a.defaultView||r},j:function(a){a=b(a)?a.document:i(a);return"CSS1Compat"===a.compatMode?a.documentElement:a.body},L:function(b,g){1===arguments.length&&"number"===a.a(arguments[0])&&(g=arguments[0],b=l);for(var g=g||10,h=window,k=0;k++<g&&d(h)&&!c(h)&&(!b||!b(h));)h=h.parent;return h}}});
	P("util/style",["util/lang","util/dom","util/browser"],function(a,b,d){function c(a,c){if(!a)return"";var d="",d=-1<c.indexOf("-")?c.replace(/[-][^-]{1}/g,function(a){return a.charAt(1).toUpperCase()}):c.replace(/[A-Z]{1}/g,function(a){return"-"+a.charAt(0).toLowerCase()}),e=b.A(a);if(e&&e.getComputedStyle){if(e=e.getComputedStyle(a,r))return e.getPropertyValue(c)||e.getPropertyValue(d)}else if(a.currentStyle)return e=a.currentStyle,e[c]||e[d];return""}function i(a){var k={top:0,left:0};if(a===b.j(a))return k;
		var d=b.ua(a),e=d.body,d=d.documentElement;a.getBoundingClientRect&&(a=a.getBoundingClientRect(),k.left=Math.floor(a.left)+Math.max(d.scrollLeft,e.scrollLeft),k.top=Math.floor(a.top)+Math.max(d.scrollTop,e.scrollTop),k.left-=d.clientLeft,k.top-=d.clientTop,a=c(e,"borderLeftWidth"),e=c(e,"borderTopWidth"),a=parseInt(a,10),e=parseInt(e,10),k.left-=isNaN(a)?2:a,k.top-=isNaN(e)?2:e);return k}function f(a,b){var d=c(a,"margin"+b).toString().toLowerCase().replace("px","").replace("auto","0");return parseInt(d,
			10)||0}function g(c){for(var k=b.A(c),j=100;c&&c.tagName;){var e=100;if(d.r){if(5<d.r)try{e=parseInt(a.getAttribute(c,"filters.alpha.opacity"),10)||100}catch(f){}j=j>e?e:j}else{try{e=100*(k.getComputedStyle(c,r).opacity||1)}catch(m){}j*=e/100}c=c.parentNode}return 0===j?0:j||100}return{$a:c,Za:i,q:function(a){var c=b.c(a);if(!c)return s;a=i(c);c=b.A(c);if(!c)return a;for(var d=0;c!==c.parent&&10>d++&&!b.C(c)&&c.frameElement;){var e=i(c.frameElement);a.left+=e.left;a.top+=e.top;c=c.parent}return a},
		Xa:f,N:function(a,c){var d=b.c(a),e=d.offsetWidth;c&&(e+=f(d,"Left")+f(d,"Right"));return e},M:function(a,c){var d=b.c(a),e=d.offsetHeight;c&&(e+=f(d,"Top")+f(d,"Bottom"));return e},Ya:g,wa:function(a){for(var c=b.c(a),a=b.A(c),c=g(c),d=0;10>d++&&b.s(a)&&!b.C(a);){var e=a.frameElement?g(a.frameElement):100,c=c*(e/100);a=a.parent}return c},ba:function(a){try{var c=b.j(a||window).scrollWidth;if(c||0===c)return c}catch(d){}return-1},aa:function(a){try{var c=b.j(a||window).scrollHeight;if(c||0===c)return c}catch(d){}return-1},
		o:function(a){try{var c=b.j(a||window).clientWidth;if(c||0===c)return c}catch(d){}return-1},n:function(a){try{var c=b.j(a||window).clientHeight;if(c||0===c)return c}catch(d){}return-1},Aa:function(a){var c=b.j(a);return a.pageYOffset||c.scrollTop},za:function(a){var c=b.j(a);return a.pageXOffset||c.scrollLeft}}});
	P("util/url",["util/dom"],function(a){return{$:function(a,d,c){a=a.match(RegExp("(\\?|&|#)"+d+"=([^&#]*)(&|#)?"));d="";a&&(d=a[2]);c&&(d=decodeURIComponent(d));return d},O:function(b){var b=a.L(b),d="";a.s(b)&&(d=b.document.referrer);return d=d||b.location.href}}});
	P("util/event",["util/dom"],function(a){return{bind:function(b,d,c){if(b=a.Fa(b)?b:a.c(b))if(b.addEventListener)b.addEventListener(d,c,s);else if(b.attachEvent)b.attachEvent("on"+d,c);else{var i=b["on"+d];b["on"+d]=function(){i&&i.apply(this,arguments);c.apply(this,arguments)}}return b}}});
	P("util/cookie",["util/lang"],function(a){return{get:function(a,d){var c=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie);return c?d?decodeURIComponent(c[2]):c[2]:""},set:function(b,d,c,i){var f=c.expires;"number"===a.a(f)&&(f=new Date,f.setTime(+f+c.expires));document.cookie=b+"="+(i?encodeURIComponent(d):d)+(c.path?"; path="+c.path:"")+(f?"; expires="+f.toGMTString():"")+(c.domain?"; domain="+c.domain:"")}}});
	P("util/data",["util/lang","util/dom"],function(a,b){function d(c,b,e){var e=e?h:f,d;if("string"===a.a(c)){for(c=c.split(".");c.length;)d=c.shift(),e[d]=c.length?e[d]!==l?e[d]:{}:b,e=e[d];d=b}return d}function c(c,b){var d=b?h:f,g;"string"===a.a(c)&&(g=a.getAttribute(d,c));return g}function i(a,b,e){if(!a||!b)return s;var h=c(a)||{};switch(e){case "+1":e=h[b]||0;h[b]=++e;break;default:h[b]=parseInt(e,10)}d(a,h);return h[b]}var f={},g=b.L(),h=g.BAIDU_DUP_info||(g.BAIDU_DUP_info={});return{m:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        c){var b=window;return b[a]?b[a]:b[a]=c},p:function(a){var c=window,b=c[a];c[a]=l;return b},i:d,d:c,ga:function(c,b){var d=b?h:f;switch(a.a(c)){case "string":for(var g=c.split(".");g.length;){var m=g.shift();if(g.length&&d[m]!==l)d=d[m];else return delete d[m],n}}return s},U:function(a,c,b){return b?(this.e=this.e||{},this.e[b]=this.e[b]||0,!this.e[b]&&document.getElementById(b)&&(this.e[b]=1),this.e[b]):i(a,c,"+1")},eb:function(a,c,b){return i(a,c,b)},count:i,ta:function(a,b,d){return d?(this.e=
		this.e||{},this.e[d]=this.e[d]||0,document.getElementById(d)||delete this.e[d],this.e[d]||0):!a||!b?s:(c(a)||{})[b]||0},Na:function(a,b){if(!a||!b)return s;var h=c("pageConfig")||{};h[a]=b;d("pageConfig",h);return n},sa:function(a){return!a?s:(c("pageConfig")||{})[a]}}});
	P("util/storage",[],function(){function a(a,c,b){if(d)try{d.setItem(a,b?encodeURIComponent(c):c)}catch(h){}}function b(a,c){if(d){var b=d.getItem(a);return c&&b?decodeURIComponent(b):b}return r}var d;try{d=window.localStorage}catch(c){}return{oa:function(){var c=s;try{d.removeItem("BAIDU_DUP_storage_available"),a("BAIDU_DUP_storage_available","1"),b("BAIDU_DUP_storage_available")&&(c=n),d.removeItem("BAIDU_DUP_storage_available")}catch(f){}return c},setItem:a,getItem:b,ka:function(c,f,g){if(d){f=
		g?encodeURIComponent(f):f;g=b(c)||"";try{a(c,g+((g&&"|")+f))}catch(h){}}},ja:function(c,f,g){if(d)if(f=g?encodeURIComponent(f):f,g=b(c)||"",g=g.replace(RegExp(f+"\\|?","g"),"").replace(/\|$/,""))try{a(c,g)}catch(h){}else d.removeItem(c)}}});
	P("util/log",["util/lang","util/event","util/storage"],function(a,b,d){function c(a,c){var b=new Image,d="BAIDU_DUP_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=b;b.onload=b.onerror=b.onabort=function(){b.onload=b.onerror=b.onabort=r;b=window[d]=r;c&&c(i,a,n)};b.src=a}var i="BAIDU_DUP_log_storage";return{ab:c,fb:function(){var a=d.getItem(i);if(a)for(var a=a.split("|"),b=0,h=a.length;b<h;b++)c(decodeURIComponent(a[b]),d.ja)},H:function(f){var f="object"===a.a(f)?f:{},g=f.url||
		"http://cbjslog.baidu.com/log",h=f.option||"now",f=a.ha(f.data||{}),g=g+((0<=g.indexOf("?")?"&":"?")+f+(f?"&":"")+"rdm="+ +new Date);switch(h){case "now":c(g);break;case "block":break;default:d.ka(i,g,n),b.bind(window,"unload",function(){c(g,d.ja)})}}}});P("util","util/lang,util/dom,util/style,util/url,util/event,util/cookie,util/data,util/storage,util/log,util/browser".split(","),function(a,b,d,c,i,f,g,h,k,j){return{lang:a,b:b,style:d,url:c,event:i,cookie:f,data:g,ib:h,log:k,W:j}});
	P("biz",["util","slot"],function(a,b){function d(c,b){var d=/^[0-9a-zA-Z]+$/;return!c||!d.test(c)||!b?[]:b="array"===a.lang.a(b)?b:Array.prototype.slice.call(arguments,1)}function c(c,b,d){if(!b||!b.length)return s;var d=d||{T:s,da:s,fa:s},j=d.da?a.data.d(i):{},e=d.T?f:i,j=d.fa?{}:a.data.d(e)||j,d={},o;for(o in j)a.lang.B.call(j,o)&&(d[o]="array"===a.lang.a(j[o])?j[o].slice():j[o]);var j=d[c]||[],m=b.length;for(o=0;o<m;o++){var p=b[o];"string"===typeof p&&(p=encodeURIComponent(p),100>=p.length&&(j[j.length]=
		p))}if(!j.length)return s;d[c]=a.lang.unique(j);a.data.i(e,d);return n}var i="bizOrientations",f="bizUrgentOrientations";return{V:function(a,b){var f=d.apply(this,arguments);return c(a,f)},la:function(a,b){var f=d.apply(this,arguments);return c(a,f,{T:n,da:n})},Qa:function(a,b){var f=d.apply(this,arguments);return c(a,f,{T:n,fa:n})},xa:function(c){var c=Math.max(0,Math.min(c||500,500)),b=[],d=a.data.d(f)||a.data.d(i)||{};if("object"===a.lang.a(d))for(var j in d)a.lang.B.call(d,j)&&(b[b.length]=j+
	"="+d[j].join(","));a.data.i(f,l);b.sort(function(a,c){return a.length-c.length});d="";j=b.length;for(var e=0;e<j&&!(d.length+b[e].length>=c);e++)d+=(e?"&":"")+b[e];return d},ma:function(a,c){b.Ra(a);b.na(c)}}});
	P("preview",["biz","util"],function(a,b){function d(){function a(c){var d=b.url.$;return d(i,"baidu_clb_preview_"+c)||d(i,"baidu_dup_preview_"+c)}var i=b.url.O(),f=a("sid"),g=a("mid"),h=a("vc"),k=+a("ts"),j=r;3E4>=+new Date-k&&(j={ia:f,Ha:g,Ta:h});d=function(){return j};return j}return{Ba:function(a){var b=[],f=d();f&&a==f.ia&&(b.push("mid="+f.Ha),b.push("sid="+f.Ta));return b.join("&")},d:function(){return d()},ca:function(a){var d=s;a?/cpro_template=/gi.test(a)&&(b.data.i("#unionPreviewSwitch",
		n),d=n):d=!!b.data.d("#unionPreviewSwitch");return d},Ca:function(){var a=b.data.d("#unionPreviewData");return a?"prev="+encodeURIComponent(a)+"&pt=union":""},Sa:function(a){b.data.i("#unionPreviewData",a)},Va:function(){b.data.ga("#unionPreviewSwitch");b.data.ga("#unionPreviewData")}}});
	P("slot",["util"],function(a){function b(){for(var a={response:{},holder:"",stack:[],errors:[],status:{}},c=k.length-1;0<=c;c--)a.status[k[c]]=0;return a}function d(a,c){var b=s;"fillAsync"===c&&(b=n);o[a]&&-1!==o[a].stack.join(" ").toLowerCase().indexOf("async")&&(b=n);return b}function c(a,c){if(!a)return"";var b=q+a;c&&(b+="_"+c);return b}function i(a,c,b){if(!a||!c)return s;b===l&&(b=+new Date);if(o[a]){o[a].status[c]=b;if("finish"===c){var c={},b=s,d;for(d in p)if(d&&p.hasOwnProperty(d)&&p[d]&&
		0===(""+a).indexOf(""+d)&&o[a].response){var b=o[a].response.data,e=b._h||b.sh||b.height||0;c[a]=0===(b._w||b.sw||b.width||0)||0===e?s:n;b=n}b&&m.apply(window,[c])}return n}return s}function f(a,c){g(a,"errors",c)}function g(c,b,d){c&&b&&d&&(c=o[c])&&"array"===a.lang.a(c[b])&&c[b].push(d)}function h(a){return!a?o:o[a]||s}var k="add,create,request,response,render,finish".split(","),j=[],e={},o={},m,p={},q="BAIDU_DUP_wrapper_";return{add:function(){var c={ids:[],preloadIds:[]},d=a.lang.l(arguments);
		if(!d.length)return c;for(var d=d.join(",").split(","),m=[],p=[],f=d.length,g=0;g<f;g++){var q=d[g];if(e.hasOwnProperty(q)){var k=q+"_"+e[q],T=h(k).stack||[];if("preload"===T[T.length-1]){c.preloadIds.push(k);continue}e[q]+=1}else e[q]=0;q=q+"_"+e[q];o[q]=new b;i(q,"add");p.push(q);m.push(q)}j=j.concat(p);c.ids=m;return c},create:function(b,e,m){if(!b||!e)return s;var p=c(b),h=n;if(a.b.c(p))return o[b].holder=p,h;if(d(b,e)){m=m||"";o[b].holder=m;m=a.b.c(m);try{m&&(m.innerHTML='<div id="'+p+'"></div>',
		o[b].holder=p)}catch(q){f(b,"Failed to insert wrapper"),h=s}}else if(document.write('<div id="'+p+'"></div>'),!a.b.c(p))try{var g=document.getElementsByTagName("script"),k=g[g.length-1];if(k){var j=k.parentNode;if(j){var U=document.createElement("div");U.id=c(b,"b");j.insertBefore(U,k)}}}catch(pa){f(b,"Failed to create backup wrapper")}i(b,"create");return h},ra:d,va:function(a){return d(a)?"async":"sync"},Z:function(b){return!b?"":(b=a.b.c(o[b].holder)||a.b.c(c(b))||a.b.c(c(b,"b")))&&b.id||""},z:h,
		S:function(a,c){if(!a||!c)return s;return o[a]?(o[a].response=c,i(a,"response"),n):s},t:i,k:f,I:function(a,c){g(a,"stack",c)},K:function(c){c=a.lang.l(c);if(!c.length)return s;var b=[],d={},e;for(e=0;e<j.length;e++)d[j[e]]=e+1;for(e=0;e<c.length;e++){var m=d[""+c[e]];m===l&&(m=0);b.push(m)}return b},Ra:function(a){m=a},na:function(a){p[a]=n},q:function(b){b=a.lang.l(b);if(!b.length)return["-1x-1"];for(var d=[],e=0;e<b.length;e++){var m=b[e],p;try{var h=a.b.c(c(m))||a.b.c(c(m,"b"));if(h){var q=a.style.q(h);
			q&&(p=[q.top,q.left])}}catch(g){f(m,"Unable to get ps")}p=p?p:[-1,-1];d.push(p.join("x"))}return d}}});P("api",["slot","util"],function(a,b){return{getDai:a.K,getSlots:a.z,getFillType:a.va,getFillWrapperId:a.Z,setStatus:a.t,addErrorItem:a.k,addStackItem:a.I,bind:b.event.bind,getType:b.lang.a,sendLog:b.log.H,putInfo:b.data.i,getInfo:b.data.d,defineOnce:b.data.m,addCount:b.data.U,getCount:b.data.ta,getConfig:b.data.sa}});
	P("param",["slot","preview","biz","util"],function(a,b,d,c){function i(a,c){for(var c=c||0,b=[],d=0,e=a.length;d<e;d++)b.push(a[d].split("_")[c]);return b.join(",")}function f(a){a=a||window.document.domain;0===a.indexOf("www.")&&(a=a.substr(4));"."===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));var c=a.match(RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:com|cn|net|org|gov|info|la|cc|co|jp|us|hk|tv|me|biz|in|be|io|tk|cm|li|ru|ws|hn|fm|tw|ma|in|vn|name|mx|gd|im)(?:\\.(?:cn|jp|tw|ru|th))?)$","i"));return c?
		c[0]:a}var g=window,h=g.document,k=g.screen,j=g.navigator,e=+new Date,o=[{key:"di",value:function(a){return i(a.id)}},{key:"dcb",value:t("BAIDU_DUP_define")},{key:"dtm",value:t("BAIDU_DUP2_SETJSONADSLOT")},{key:"dbv",value:function(){var a=c.W;return a.Oa?"1":a.pa?"2":"0"}},{key:"dci",value:function(c){for(var b="-1",d={fill:"0",fillOnePiece:"1",fillAsync:"2",preload:"3"},e=0;e<c.id.length;e++){var h=a.z(c.id[e]);if(h){var h=h.stack,f=h.length;if(1<=f){b=d[h[f-1]];break}}}return b}},{key:"dri",value:function(a){return i(a.id,
		1)}},{key:"dis",value:function(){var a=0;c.b.s(g)&&(a+=1);c.b.C(g,g.top)&&(a+=2);var b=c.style.o(),d=c.style.n();if(40>b||10>d)a+=4;return a}},{key:"dai",value:function(c){return a.K(c.id).join(",")}},{key:"dds",value:function(){var a=c.data.d("dds");return c.lang.ha(a)}},{key:"drs",value:function(){var a={uninitialized:0,loading:1,loaded:2,interactive:3,complete:4};try{return a[h.readyState]}catch(c){return-1}}},{key:"dvi",value:t("1421289014")},{key:"ltu",u:n,value:function(){var a=c.url.O(function(a){var b=
		c.style.o(a),a=c.style.n(a);return 400<b&&120<a?n:s});0<a.indexOf("cpro_prev")&&(a=a.slice(0,a.indexOf("?")));return a}},{key:"liu",u:n,value:function(){return c.b.s(g)?h.URL:""}},{key:"ltr",u:n,value:function(){var a=c.b.L(),b="";try{b=a.opener?a.opener.document.location.href:""}catch(d){}return b||a.document.referrer}},{key:"lcr",u:n,value:function(){var a=h.referrer,b=a.replace(/^https?:\/\//,""),b=b.split("/")[0],b=b.split(":")[0],b=f(b),d=f(),e=c.cookie.get("BAIDU_DUP_lcr");if(e&&d===b)return e;
		return d!==b?(c.cookie.set("BAIDU_DUP_lcr",a,{domain:d}),a):""}},{key:"ps",value:function(c){return a.q(c.id).join(",")}},{key:"psr",value:function(){return[k.width,k.height].join("x")}},{key:"par",value:function(){return[k.availWidth,k.availHeight].join("x")}},{key:"pcs",value:function(){return[c.style.o(),c.style.n()].join("x")}},{key:"pss",value:function(){return[c.style.ba(),c.style.aa()].join("x")}},{key:"pis",value:function(){return(c.b.s(g)?[c.style.o(),c.style.n()]:[-1,-1]).join("x")}},{key:"cfv",
		value:function(){var a=0;if(j.plugins&&j.mimeTypes.length){var c=j.plugins["Shockwave Flash"];c&&c.description&&(a=c.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0")}else if(g.ActiveXObject&&!g.opera)for(c=10;2<=c;c--)try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+c);b&&(a=b.GetVariable("$version").replace(/WIN/g,"").replace(/,/g,"."))}catch(d){}return parseInt(a,10)}},{key:"ccd",value:function(){return k.colorDepth||0}},{key:"chi",value:function(){return g.history.length||
		0}},{key:"cja",value:function(){return j.javaEnabled().toString()}},{key:"cpl",value:function(){return j.plugins.length||0}},{key:"cmi",value:function(){return j.mimeTypes.length||0}},{key:"cce",value:function(){return j.cookieEnabled||0}},{key:"col",value:function(){return(j.language||j.browserLanguage||j.systemLanguage).replace(/[^a-zA-Z0-9\-]/g,"")}},{key:"cec",value:function(){return(h.characterSet?h.characterSet:h.charset)||""}},{key:"cdo",value:function(){var a=window.orientation;a===l&&(a=
		-1);return a}},{key:"tsr",value:function(){var a=0,c=+new Date;e&&(a=c-e);return a}},{key:"tlm",value:function(){return Date.parse(h.lastModified)/1E3}},{key:"tcn",value:function(){return Math.round(+new Date/1E3)}},{key:"tpr",value:function(a){var a=a&&a.max_age?a.max_age:24E4,c=(new Date).getTime(),b,d;try{b=!!window.top.location.toString()}catch(e){b=s}d=b?window.top:window;(b=d.BAIDU_DUP2_pageFirstRequestTime)?c-b>=a&&(b=d.BAIDU_DUP2_pageFirstRequestTime=c):b=d.BAIDU_DUP2_pageFirstRequestTime=
		c;return b||""}},{key:"_preview",value:function(a){return b.Ba(i(a.id))}},{key:"dpt",value:function(){var a="none";b.ca()&&(a="union");return a}},{key:"coa",u:n,value:function(a){var b=a.id,b=b[0].split("_")[0],a={},d=s,e=c.data.d("#novaOpenApi");if(e&&b&&e[b]){var d=n,b=e[b],h;for(h in b)h&&b.hasOwnProperty(h)&&"undefined"!==typeof b[h]&&(a[h]=encodeURIComponent(b[h]).toString())}d&&(a.c01=1);h="";for(var f in a)f&&a.hasOwnProperty(f)&&"undefined"!==typeof a[f]&&(h+="&"+f+"="+a[f]);return h=h.slice(1)}},
		{key:"_unionpreview",value:function(){return b.Ca()}},{key:"baidu_id",value:t("")},{key:"_orientation",value:function(){return d.xa()}}];return{get:function(a,c){for(var b=[],d=0,e=o.length;d<e;d++){var h;try{var f=o[d],g=f.key,k=f.u,j=f.value,j="function"===typeof j?j(a):j,j=k?encodeURIComponent(j):j;if(c&&c===g)return j;h=g&&0!==g.indexOf("_")?g+"="+j:j}catch(i){h=encodeURIComponent(i.toString()),h=h.slice(0,100)}h&&b.push(h)}b=b.join("&");return b.slice(0,2048)}}});
	P("request",["param","slot","util"],function(a,b,d){P("request!",[],{name2url:function(c){return"http://cb.baidu.com/ecom?"+a.get({id:c.split(",")})}});P("batch!",[],{name2url:function(c){return"http://cb.baidu.com/ecom?"+a.get({id:c.split(",")})}});return{send:function(a,i,f){if(!a||!i||f===l)return s;var g=[];if("array"!==d.lang.a(a))b.t(a,"request"),g=["request!"+a];else{for(g=0;g<a.length;g++)b.t(a[g],"request");g=1===a.length?["request!"+a[0]]:["batch!"+a.join(",")]}O(g,i,f);return n}}});
	P("control",["slot","request","preview","util"],function(a,b,d,c){function i(b,d,f){var e=d.deps,g=d.data,i=a.Z(b);f&&!i?a.k(b,"HolderNotFound"):e&&(0>e[0].indexOf("clb/")&&a.t(b,"finish"),O(e,function(d){if("object"===c.lang.a(g)){g.id=b;if(d.hasOwnProperty("validate"))try{var f=d.validate(g);f!==n&&c.log.H({data:{type:f||"ResponseError",errorPainter:e[0],id:b,slotType:g._stype,materialType:g._isMlt,html:!!g._html}})}catch(j){a.k(b,"validateException")}if(d.hasOwnProperty("render"))try{a.t(b,"render"),
		d.render(g,i)}catch(k){a.k(b,"RenderException")}else a.k(b,"RenderNotFound")}else a.k(b,"ResponseFormatError")},f))}function f(c,d,f){if(!c)return s;var f=f||"",e=a.add(c),c=e.ids[0]||e.preloadIds[0];if(!c)return s;var g=a.ra(c,d);a.I(c,d);a.create(c,d,f);e.ids.length?b.send(c,function(b){a.S(c,b);i(c,b,g)},g):e.preloadIds.length&&(d=a.z(c).response,i(c,d,g));return n}function g(b){for(var c=0,d=b+"_"+c;0!==a.K([d])[0];){var e=a.z(d);if((e=e&&e.response)&&0===e.deps[0].indexOf("clb/")){var f=e.data,
		e=f._isMlt;(0===e&&""!==f._html||e===s&&f._fxp)&&a.t(d,"finish",0)}d=b+"_"+ ++c}if(b!==l&&(b=(c=window.BAIDU_CLB_SLOTS_MAP)&&c[b],b!==l&&(e=b._isMlt,0===e&&""!==b._html||e===s&&b._fxp)))b._done=s}window.BAIDU_CLB_prepareMoveSlot=g;return{fill:function(a){return f(a,"fill")},J:function(a,b){return f(a,"fillAsync",b)},Ka:function(){function f(d){b.send(d,function(b){if("array"===c.lang.a(b)){if(b&&b.length===d.length)for(var e=0;e<d.length;e++)a.S(d[e],b[e])}else"object"===c.lang.a(b)&&b&&1===d.length&&
	a.S(d[0],b)},s)}var g=c.lang.l(arguments),g=c.lang.unique(g),j=d.d();if(j)for(var e=0,i=g.length;e<i;e++)g[e]==j.ia&&(g.splice(e,1),e--);for(g=a.add(g).ids;g.length;){j=g.splice(0,16);for(e=0;e<j.length;e++)a.I(j[e],"preload");f(j)}},La:g}});
	P("global",["control","biz","util","preview"],function(a,b,d,c){function i(a){a=a.split(".");return j[a[0]]+a[1]}function f(){var a=k.BAIDU_DUP;if(!("object"===d.lang.a(a)&&a.push)){if("array"===d.lang.a(a)&&a.length)for(var b=0;b<a.length;b++)g(a[b]);k.BAIDU_DUP=l;d.data.m("BAIDU_DUP",{push:g});d.data.m("BAIDU_DUP_proxy",function(a){if(a)return function(){try{return g([a].concat(d.lang.l(arguments)))}catch(b){0<fa--&&d.log.H({data:{type:"ExecuteException",errorName:a,args:d.lang.l(arguments).join("|"),
		isQuirksMode:"CSS1Compat"!==document.compatMode,documentMode:document.documentMode||"",readyState:document.readyState||"",message:b.message}})}}});for(b in o)b&&d.lang.B.call(o,b)&&d.data.m(b,k.BAIDU_DUP_proxy(b));h()}}function g(a){if("array"!==d.lang.a(a))return s;var b=a.shift();d.data.U("apiCount",b);return(b=o[b]||m[b]||s)&&b.apply(r,a)}function h(){function a(b){for(var c=0,d=u.length;c<d;c++)if(0===b.indexOf(u[c]))return n;return s}d.data.m("BAIDU_DUP_require",function(b){for(var c=0,d=b.length;c<
	d;c++)if(a(b[c]))return;O.apply(r,arguments)});d.data.m("BAIDU_DUP_define",function(b,c){for(var d=0,e=c.length;d<e;d++)if(a(c[d]))return;P.apply(r,arguments)})}var k=window,j={clb:"BAIDU_CLB_",dan:"BAIDU_DAN_",nova:"cpro",dup:"BAIDU_DUP_"},e=[{g:["clb.fillSlot","clb.singleFillSlot","clb.fillSlotWithSize"],h:["fill"],f:a.fill},{g:["clb.fillSlotAsync"],h:["fillAsync"],f:a.J},{g:["clb.preloadSlots"],h:["preload"],f:a.Ka},{g:["clb.prepareMoveSlot"],h:["prepareMove"],f:a.La},{g:["clb.addOrientation"],
		h:["addOrientation"],f:b.V},{g:["clb.addOrientationOnce"],h:["addOrientationOnce"],f:b.la},{g:["clb.setOrientationOnce"],h:["setOrientationOnce"],f:b.Qa},{g:["clb.setConfig"],h:["putConfig"],f:d.data.Na},{g:["clb.addSlot","clb.enableAllSlots","clb.SETHTMLSLOT"],h:[],f:d.lang.ea},{g:["dup.addSlotStatusCallback"],h:[],f:b.ma}],e=function(a){for(var b={},c={},d=0;d<a.length;d++){for(var e=a[d],f=e.g,g=e.h,e=e.f;f.length;)b[i(f.shift())]=e;for(;g.length;)c[g.shift()]=e}return{Ia:b,Ma:c}}(e),o=e.Ia,m=
		e.Ma;return{Da:function(){var e=d.data.p(i("clb.ORIENTATIONS"));if(e)for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&b.V(g,e[g]);d.data.i("#novaOpenApi",d.data.p("cproStyleApi"));var h=d.data.p("cproArray");if(h)for(var e=0,j=h.length;e<j;e++)h[e]&&h[e].id&&a.J(h[e].id,"cpro_"+h[e].id);if(h=d.data.p("cpro_mobile_slot")){e=0;for(j=h.length;e<j;e++){var k=h[e],m=k.id,o=d.data.d("#novaOpenApi")||{};o[m]||(o[m]={});for(g in k)g&&"id"!==g&&k.hasOwnProperty(g)&&(o[m][g]=k[g]);d.data.i("#novaOpenApi",
		o);h[e]&&h[e].id&&a.J(h[e].id,"cpro_"+h[e].id)}}if(g=d.data.p("cpro_id"))c.ca(g)&&(c.Sa(g),g="u0"),a.fill(g);a.fill(d.data.p(i("clb.SLOT_ID")));f()}}});P("logService",["util/lang","util/event"],function(a,b){b.bind(window,"load",function(){O(["detect"],a.ea,n)})});
	P("fingerprint",["util/storage","util/event","util/browser","util/data","param"],function(a,b,d,c,i){var f=window,g=s;d.r?6<=d.r&&(g=n):a.oa()&&(g=n);0<=f.location.href.indexOf("wa.kuwo.cn")||(g&&(c.d("isFPLoaded",n)===n?g=s:c.i("isFPLoaded",n,n)),g&&b.bind(f,"load",function(){var a=f.document,b=a.body,c="http://pos.baidu.com/wh/o.htm?ltr="+i.get({},"ltr"),d=a.createElement("div");d.id="BAIDU_DUP_fp_wrapper";d.style.position="absolute";d.style.left="-1px";d.style.bottom="-1px";d.style.zIndex=0;d.style.width=
		0;d.style.height=0;d.style.overflow="hidden";d.style.visibility="hidden";d.style.display="none";a=a.createElement("iframe");a.id="BAIDU_DUP_fp_iframe";a.src=c;a.style.width=0;a.style.height=0;a.style.visibility="hidden";a.style.display="none";try{d.insertBefore(a,d.firstChild),b&&b.insertBefore(d,b.firstChild)}catch(g){}}))});P("replacement",["util"],function(a){function b(){var d=a.url.O(),c=a.url.$(d,ga,n);b=function(){return c};return c}return{ya:function(){return b()}}});
	O(["replacement"],function(a){(a=a.ya())?O([a]):(O(["global"],function(a){a.Da()}),O(["logService"]),O(["fingerprint"]))});
	window.BAIDU_DUP_define&&window.BAIDU_DUP_define("detect",["api"],function(a){function b(b){b.url="";b.host=window.location.hostname;b.from="DUP";a.sendLog({data:b,cb:"now"})}try{setTimeout(function(){var c=a.getSlots(),d;for(d in c){var f=c[d],g=f.response,h=s;if("object"!==a.getType(g))h=n;else{var h=n,k;for(k in g)if(Object.prototype.hasOwnProperty.call(g,k)){h=s;break}}var j=f.status,f=f.stack;h?b({type:"preload"===f[0]?"preloadFail":"loadFail",id:d}):!j.render&&!j.finish&&b({type:"renderFail",
		id:d,error:"preload"===f[0]?"PreloadNotFilled":"NotFilled",empty:!(!g.data||!g.data._html)})}},0)}catch(d){}});
	window.BAIDU_DUP_define&&window.BAIDU_DUP_define("viewWatch",["util","param"],function(a,b){function d(){var b=+new Date,d=500;w===h&&K&&(d=b-K);K=b;for(var j in m)if(o.call(m,j)){w===f&&(w=g);var i=m[j];i.G&&(i.Q+=d);i.F&&(i.P+=d);i.R=b-i.timestamp;if(w===h)G&&(i.w+=b-i.D);else if(72E5<=i.R)c(s);else{var k=i=l,p=l;for(p in m)if(o.call(m,p)){var q=m[p];if(G){var v=a.b.c(q.Ua);if(!v)break;try{var z=e.o(A),V=e.n(A),H=e.q(v);q.top=H.top;q.left=H.left;var W=e.Aa(A),X=e.za(A),Y=e.N(v),Z=e.M(v),$=H.top-
		W+0.35*Z,aa=H.left-X+0.35*Y;q.G=0<$&&$<V&&0<aa&&aa<z;var oa=Y*Z,ba=e.q(v),L=ba.top-W,M=ba.left-X,ca=e.N(v),da=e.M(v),ea=v=0,v=0>L?Math.max(L+da,0):Math.min(da,Math.max(V-L,0)),ea=0>M?Math.max(M+ca,0):Math.min(ca,Math.max(z-M,0));i=ea;k=v;q.F=k*i>0.5*oa}catch(qa){q.G=s,q.F=s}}else q.G=s,q.F=s}}}}function c(b){clearInterval(q);var c=document.domain.toLowerCase();if(!(-1<c.indexOf("autohome.com.cn")||-1<c.indexOf("sina.com.cn")||-1<c.indexOf("pconline.com.cn")||-1<c.indexOf("pcauto.com.cn")||-1<c.indexOf("pclady.com.cn")||
		-1<c.indexOf("pcgames.com.cn")||-1<c.indexOf("pcbaby.com.cn")||-1<c.indexOf("pchouse.com.cn")||-1<c.indexOf("xcar.com.cn")))if(w!==g)w=h;else{w=h;d();var c=s,e;for(e in m)if(e&&m.hasOwnProperty(e)&&m[e]){var f=m[e];"block"===f.Ga&&(c=n);f.total=p;a.log.H({url:i(f)})}if(b&&c)if(b=+new Date,k.r)for(c=b+200;c>+new Date;);else{e=1E5;for(c=0;c<e;c++);c=+new Date;e=Math.min(200*e/(c-b),1E7);for(c=0;c<e;c++);}}}function i(a){var c=["tu="+a.id,"word="+b.get(l,"ltu"),"if="+b.get(l,"dis"),"aw="+a.width,"ah="+
	a.height,"pt="+a.R,"it="+a.Q,"vt="+a.P,"csp="+z,"bcl="+a.qa,"pof="+a.Pa,"top="+a.top,"left="+a.left,"total="+a.total];return a.url+(a.Y?a.Y+"&":"")+c.join("&")}var f=1,g=2,h=3,k=a.W,j=a.event.bind,e=a.style,o=a.lang.B,m=[],p=0,q=0,w=f,G=n,K=0,z=[1E4<screen.availWidth?0:screen.availWidth,1E4<screen.availHeight?0:screen.availHeight].join(),A=window;a.b.s(window)&&!a.b.C(window)&&(A=window.top);q=setInterval(d,500);(function(){function a(){var b=+new Date,c;for(c in m)if(o.call(m,c)){var d=m[c];d.w+=
		b-d.D;d.D=b}G=s}function b(){var a=+new Date,c;for(c in m)o.call(m,c)&&(m[c].D=a);G=n}k.r?(j(document,"focusin",b),j(document,"focusout",a)):(j(window,"focus",b),j(window,"blur",a))})();j(window,"beforeunload",c);return{register:function(b){var c=+new Date,d=b.id,f=b.wrapperId,g=b.url||"http://eclick.baidu.com/a.js?",h=b.logType||"storage",b=b.extra||"";if(f&&!m[f]){var i=a.b.c(f);if(i){var j=e.q(i);m[f]={id:d,Ua:f,url:g,Ga:h,Y:b,timestamp:c,Q:0,G:s,P:0,F:s,R:0,w:0,D:c,top:j.top,left:j.left,gb:z,
		opacity:e.wa(i),qa:[e.o(),e.n()].join(),Pa:[e.ba(),e.aa()].join(),width:e.N(i),height:e.M(i)};p++}}},getWatchCount:function(){return p}}});})();