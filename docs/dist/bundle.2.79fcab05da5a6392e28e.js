(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{32:function(t,e,r){"use strict";r.r(e);var n=r(57),o=r.n(n);r(58),o.a.render=function(t){return t("div",{"data-icrush-3f2fda0e":""},["        about    "])},e.default=o.a},34:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){(0,o.default)("."+t).attr("active","no"),(0,o.default)("."+t+"."+e).attr("active","yes")};var n,o=(n=r(35))&&n.__esModule?n:{default:n}},35:function(t,e,r){"use strict";(function(t){
/*!
* image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
* git+https://github.com/yelloxing/image2D.git
*
* author 心叶
*
* version 1.6.6
*
* build Thu Apr 11 2019
*
* Copyright yelloxing
* Released under the MIT license
*
* Date:Thu Apr 02 2020 17:48:38 GMT+0800 (GMT+08:00)
*/
var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){var r=Object.prototype.toString;function n(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r.call(t)}function o(t){if(null!==t&&"object"===(void 0===t?"undefined":e(t))&&"[object Object]"==n(t)){if(null===Object.getPrototypeOf(t))return 1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}}function i(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)&&!o(t)}function a(t){var r=void 0===t?"undefined":e(t);return null!=t&&("object"===r||"function"===r)}function u(t){if(a(t)){var e=n(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}}function f(t){var r=void 0===t?"undefined":e(t);return"string"===r||"object"===r&&null!=t&&!Array.isArray(t)&&"[object String]"===n(t)}function c(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t}var l="http://www.w3.org/2000/svg",d="http://www.w3.org/1999/xlink",s="[\\x20\\t\\r\\n\\f]",h="[\\n\\f\\r]",p="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",v=["href","title","show","type","role","actuate"];var g=function(t,r){var n,a=void 0;if("html"===r||"HTML"===r){if((a=/^<tr[> ]/.test(t)?document.createElement("tbody"):/^<th[> ]/.test(t)||/^<td[> ]/.test(t)?document.createElement("tr"):/^<thead[> ]/.test(t)||/^<tbody[> ]/.test(t)?document.createElement("table"):document.createElement("div")).innerHTML=t,!/</.test(a.innerHTML))throw new Error("This template cannot be generated using div as a container:"+t+"\nPlease contact us: https://github.com/yelloxing/image2D/issues")}else(function(t,r){if("innerHTML"in SVGElement.prototype==0||"innerHTML"in SVGSVGElement.prototype==0){var n=document.createElement("div");n.innerHTML=r;var i=function(t){for(var e=document.createElementNS(l,t.tagName.toLowerCase()),r=t.attributes,n=0;r&&n<r.length;n++)0<=v.indexOf(r[n].nodeName)?e.setAttributeNS(d,"xlink:"+r[n].nodeName,t.getAttribute(r[n].nodeName)):e.setAttribute(r[n].nodeName,t.getAttribute(r[n].nodeName));return e},a=i(n.firstChild);!function t(r,n){var a=r.firstChild;if(null===(u=a)||"object"!==(void 0===u?"undefined":e(u))||3!==u.nodeType||o(u))for(var u;a;){var f=i(a);n.appendChild(f),a.firstChild&&t(a,f),a=a.nextSibling}else n.textContent=r.innerText}(n.firstChild,a),t.appendChild(a)}else t.innerHTML=r})(a=document.createElementNS(l,"svg"),t);n=a.childNodes;for(var u=0;u<n.length;u++)if(i(n[u]))return n[u]};function w(t,e){new RegExp("^"+p+"$").test(t)&&(t="<"+t+"></"+t+">");var r=/^<([^(>| )]+)/.exec(t)[1];return"canvas"===r.toLowerCase()&&(e="HTML"),!f(e)&&0<=["div","span","p","em","i","table","ul","ol","dl","form","input","button","textarea","header","footer","article","section","h1","h2","h3","h4","h5","h6","image","video","iframe","object","style","script","link","tr","td","th","tbody","thead"].indexOf(r.toLowerCase())&&(e="HTML"),g(t,e)}function m(t,e){if(f(e)||f(t)){if(t=t.trim().replace(new RegExp(h,"g"),""),"string"==typeof e||/^</.test(t)){var r=w(t,e);return i(r)?[r]:[]}if("*"===t)return e.getElementsByTagName("*");var n=t.match(new RegExp("#"+p,"g"));if(n){var o=document.getElementById(n[0].replace("#",""));return i(o)?[o]:[]}var a=t.match(new RegExp("\\."+p,"g")),c=t.match(new RegExp("^"+p));if(c||a){for(var l=e.getElementsByTagName(c?c[0]:"*"),d=[],s=0;s<l.length;s++){for(var v=" "+l[s].getAttribute("class")+" ",g=!0,m=0;a&&m<a.length;m++)if(!v.match(" "+a[m].replace(".","")+" ")){g=!1;break}g&&d.push(l[s])}return d}throw new Error("Unsupported selector:"+t)}if(i(t))return[t];if(!t||t.constructor!==Array&&t.constructor!==HTMLCollection&&t.constructor!==NodeList){if(t&&t.constructor===y)return t;if(u(t)){for(var b=e.getElementsByTagName("*"),x=[],_=0;_<b.length;_++)t(b[_])&&x.push(b[_]);return x}throw new Error("Unknown selector:"+t)}for(var T=[],E=0;E<t.length;E++)i(t[E])&&T.push(t[E]);return T}var y=function t(e,r){return new t.prototype.init(e,r)};function b(t,e,r,n,o){var i=Math.sqrt(t*t+e*e);return[+(t*r/i+n).toFixed(7),+(e*r/i+o).toFixed(7)]}function x(t,e,r,n,o){return[+(r*(n-t)+t).toFixed(7),+(r*(o-e)+e).toFixed(7)]}y.prototype.init=function(t,e){this.context=e=e||document;var r=m(t,e),n=void 0;for(n=0;n<r.length;n++)this[n]=r[n];return this.length=r.length,this},y.prototype.extend=y.extend=function(){var t=arguments[0]||{},e=arguments[1]||{},r=arguments.length;for(var n in 1===r&&(e=t,t=this),a(t)||(t={}),e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t},y.prototype.init.prototype=y.prototype;var _=function(t,e,r,n,o){var i=Math.cos(r),a=Math.sin(r);return[+((n-t)*i-(o-e)*a+t).toFixed(7),+((n-t)*a+(o-e)*i+e).toFixed(7)]};function T(t){return"number"==typeof t||null!==t&&"object"===(void 0===t?"undefined":e(t))&&"[object Number]"===n(t)}function E(t,e){for(var r=[],n=0;n<4;n++)for(var o=0;o<e.length/4;o++)r[4*o+n]=t[n]*e[4*o]+t[n+4]*e[4*o+1]+t[n+8]*e[4*o+2]+t[n+12]*e[4*o+3];return r}var C=[],M=null;function k(t){function e(t){if(r){var e=(t-n)/(o-n),i=e*e;return(e*i*r[0]+i*r[1]+e*r[2]+r[3])*(o-n)}throw new Error("You shoud first set the position!")}t=function(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t}({u:.5},t);var r=void 0,n=void 0,o=void 0;return e.setP=function(i,a,u,f,c,l){if(!(i<u))throw new Error("The point x-position should be increamented!");n=i,o=u;var d=t.u*c,s=t.u*l;return r=[2*(a/=u-i)-2*(f/=u-i)+d+s,3*f-3*a-2*d-s,d,a],e},e}function A(t,e){var r=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return f(e)?r.getPropertyValue(e):r}function N(t,e,r){/[a-z]/.test(t.tagName)&&0<=v.indexOf(e)?t.setAttributeNS(d,"xlink:"+e,r):t.setAttribute(e,r)}function P(t,e,r,n,o,i,a){e>2*Math.PI&&(e=2*Math.PI),e<2*-Math.PI&&(e=2*-Math.PI),e<0&&(t+=e,e*=-1);var u=[],f=void 0;f=_(0,0,t,o,0),u[0]=f[0],u[1]=f[1],f=_(0,0,e,f[0],f[1]),u[2]=f[0],u[3]=f[1],f=_(0,0,t,i,0),u[4]=f[0],u[5]=f[1],f=_(0,0,e,f[0],f[1]),u[6]=f[0],u[7]=f[1],a(t,t+e,u[0]+r,u[1]+n,u[4]+r,u[5]+n,u[2]+r,u[3]+n,u[6]+r,u[7]+n,.5*(i-o))}var S=function(t,e,r,n,o){return t.beginPath(),t.translate(r,n),t.rotate(o),t.font=e["font-size"]+"px "+e["font-family"],t},L=function(t,e,r,n,o,i,a,u){return P(a,u,r,n,o,i,(function(a,u,f,c,l,d,s,h,p,v,g){g<0&&(g=-g),t.beginPath(),t.moveTo(f,c),t.arc(r,n,o,a,u,!1),"round"!=e["arc-end-cap"]?t.lineTo(p,v):t.arc(.5*(s+p),.5*(h+v),g,u-Math.PI,u,!0),t.arc(r,n,i,u,a,!0),"round"!=e["arc-start-cap"]?t.lineTo(f,c):t.arc(.5*(f+l),.5*(c+d),g,a,a-Math.PI,!0)})),t},j=function(t,e,r,n){return t.beginPath(),t.moveTo(e+n,r),t.arc(e,r,n,0,2*Math.PI),t},I=function(t,e,r,n,o){return t.beginPath(),t.rect(e,r,n,o),t},R=function(t,e,r,n,o){var i=t.createLinearGradient(e,r,n,o),a={value:function(){return i},addColorStop:function(t,e){return i.addColorStop(t,e),a}};return a},F=function(t,e,r,n){var o=t.createRadialGradient(e,r,0,e,r,n),i={value:function(){return o},addColorStop:function(t,e){return o.addColorStop(t,e),i}};return i};function D(t,e){return"textAlign"===t&&{left:"start",right:"end",center:"middle"}[e]||e}function O(t){var e=t.getElementsByTagName("defs");return e.length<=0&&(e=[w("<defs>","SVG")],t.appendChild(e[0])),e[0]}var z=function(t,e,r,n,o){if(!i(t[0]))throw new Error("Target empty!");if("text"!==t[0].nodeName.toLowerCase())throw new Error("Need a <text> !");return t.attr("dy",{top:.5*e["font-size"],middle:0,bottom:.5*-e["font-size"]}[e.textBaseline]).css({"text-anchor":e.textAlign,"dominant-baseline":"central","font-size":e["font-size"]+"px","font-family":e["font-family"]}).attr({x:r,y:n}),{transform:"rotate("+180*o/Math.PI+","+r+","+n+")"}},B=function(t,e,r,n,o,i,a,u){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return P(a,u,r,n,o,i,(function(r,n,a,u,f,c,l,d,s,h,p){var v=n-r>Math.PI?1:0,g="M"+a+" "+u;p<0&&(p=-p),g+="A"+o+" "+o+" 0 "+v+" 1 "+l+" "+d,"round"!=e["arc-end-cap"]?g+="L"+s+" "+h:g+="A"+p+" "+p+"  0 1 0 "+s+" "+h,g+="A"+i+" "+i+" 0 "+v+" 0 "+f+" "+c,"round"!=e["arc-start-cap"]?g+="L"+a+" "+u:g+="A"+p+" "+p+"  0 1 0 "+a+" "+u,t.attr("d",g)})),t},G=function(t,e,r,n){if("circle"!==t[0].nodeName.toLowerCase())throw new Error("Need a <circle> !");return t.attr({cx:e,cy:r,r:n}),t},H=function(t,e){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return t.attr("d",e),t},$=function(t,e,r,n,o){if("rect"!==t[0].nodeName.toLowerCase())throw new Error("Need a <rect> !");return t.attr({x:e,y:r,width:n,height:o}),t},q=function(t,e,r,n,o,i){var a=O(e),u="image2D-lg-"+(new Date).valueOf()+"-"+Math.random(),f=w('<linearGradient id="'+u+'" x1="'+r+'%" y1="'+n+'%" x2="'+o+'%" y2="'+i+'%"></linearGradient>');a.appendChild(f);var c={value:function(){return"url(#"+u+")"},addColorStop:function(t,e){return f.appendChild(w('<stop offset="'+100*t+'%" style="stop-color:'+e+';" />')),c}};return c},V=function(t,e,r,n,o){var i=O(e),a="image2D-rg-"+(new Date).valueOf()+"-"+Math.random(),u=w('<radialGradient id="'+a+'" cx="'+r+'%" cy="'+n+'%" r="'+o+'%"></radialGradient>');i.appendChild(u);var f={value:function(){return"url(#"+a+")"},addColorStop:function(t,e){return u.appendChild(w('<stop offset="'+100*t+'%" style="stop-color:'+e+';" />')),f}};return f};if(y.extend({treeLayout:function(t){function e(n){var o=r(n);for(var i in o.node)o.node[i].deep=o.node[i].left-.5;if("LR"===t.type||"RL"===t.type){var a=t.width/o.deep;"RL"===t.type&&(a*=-1);var u=t.height/(o.size- -.5);for(var f in o.node){var c=o.node[f];o.node[f].left=+(("RL"==t.type?t.width:0)- -c.left*a).toFixed(7),o.node[f].top=+(c.top*u).toFixed(7)}}else if("TB"===t.type||"BT"===t.type){var l=t.height/o.deep;"BT"==t.type&&(l*=-1);var d=t.width/(o.size- -.5),s=void 0,h=void 0;for(var p in o.node){var v=o.node[p];s=v.left,h=v.top,o.node[p].top=+(("BT"==t.type?t.height:0)- -s*l).toFixed(7),o.node[p].left=+(h*d).toFixed(7)}}else if("circle"===t.type){var g=t.radius/(o.deep-1),w=t.deg/(o.size- -.5);for(var m in o.node){var y=o.node[m];o.node[m].deg=(t["begin-deg"]- -w*y.top)%(2*Math.PI);var b=_(t.cx,t.cy,o.node[m].deg,t.cx- -g*(y.left-.5),t.cy);o.node[m].left=+b[0],o.node[m].top=+b[1]}}return t.drawer(o),e}t=c({"begin-deg":0,deg:2*Math.PI},t);var r=function(t){function e(t){var e,i,a,u,f,c,l,d,s=(e=t,a={},u=r.root(e),f=void 0,f=i=r.id(u),a[f]={data:u,pid:null,id:f,children:[]},function t(n,o){var i=r.child(n,e),u=void 0;for(u=0;i&&u<i.length;u++)f=r.id(i[u]),a[o].children.push(f),a[f]={data:i[u],pid:o,id:f,children:[]},t(i[u],f)}(u,f),[i,a]);return c=[],d=l=0,function t(e,r){d<r&&(d=r);var o=void 0;for(o=0;o<e.children.length;o++)t(n[e.children[o]],r+1);if(n[e.id].left=r+.5,0==o?(null==c[r]&&(c[r]=-.5),null==c[r-1]&&(c[r-1]=-.5),n[e.id].top=c[r]+1,c[r]+1+.5*(n[e.pid].children.length-1)-1<c[r-1]&&(n[e.id].top=c[r-1]+1-.5*(n[e.pid].children.length-1))):n[e.id].top=.5*(n[e.children[0]].top+n[e.children[o-1]].top),n[e.id].top<=c[r]){var i=c[r]+1-n[e.id].top;!function t(e,r){n[e].top+=i,c[r]<n[e].top&&(c[r]=n[e].top);var o=void 0;for(o=0;o<n[e].children.length;o++)t(n[e].children[o],r+1)}(e.id,r)}c[r]=n[e.id].top,n[e.id].top+.5>l&&(l=n[e.id].top+.5)}((n=s[1])[o=s[0]],0),{node:n,root:o,size:l,deep:d+1}}var r=t||{},n=void 0,o=void 0;return e.root=function(t){return r.root=t,e},e.child=function(t){return r.child=t,e},e.id=function(t){return r.id=t,e},e}().root(t.root).child(t.child).id(t.id);return e.config=function(r){return t=c(t,r),e},e.drawer=function(r){return t.drawer=r,e},e},pieLayout:function(t){if(!u((t=c({"begin-deg":-Math.PI/2,deg:2*Math.PI,radius:[]},t)).value))throw new Error("config.value must be a function!");function e(e){var r=0,n=[],o=0;for(var i in e)n.push({value:t.value(e[i],i,r),data:e[i],key:i,index:r,dots:[]}),o+=n[r].value,r+=1;for(r=0;r<n.length;r++){n[r].beginDeg=0===r?t["begin-deg"]:n[r-1].beginDeg+n[r-1].deg;var a=n[r].value/o;n[r].deg=a*t.deg,n[r].percent=new Number(100*a).toFixed(2)}if(T(t.cx)&&T(t.cy))for(r=0;r<t.radius.length;r++)for(var f=0;f<n.length;f++)n[f].dots.push(_(t.cx,t.cy,n[f].beginDeg+.5*n[f].deg,t.cx+t.radius[r],t.cy));u(t.drawer)&&t.drawer(n)}return e.config=function(r){return t=c(t,r),e},e.drawer=function(r){return t.drawer=r,e},e},Matrix4:function(t){var e=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r={move:function(t,n,o,i){return e=E(function(t,e,r,n){n=n||0;var o=Math.sqrt(e*e+r*r+n*n);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/o,r*t/o,n*t/o,1]}(t,n,o,i),e),r},rotate:function(t,n,o,i,a,u,f){var c,l,d,s=function(t,e,r,n,o,i){if("number"!=typeof t||"number"!=typeof e)throw new Error("a1 and b1 is required!");if("number"!=typeof r?(r=0,n=t,o=e,i=1):"number"==typeof n&&"number"==typeof o&&"number"==typeof i||(n=t,o=e,i=r,r=e=t=0),t==n&&e==o&&r==i)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((n-t)*(n-t)+(o-e)*(o-e)),u=0!=a?(o-e)/a:1,f=0!=a?(n-t)/a:0,c=(n-t)*f+(o-e)*u,l=i-r,d=Math.sqrt(c*c+l*l),s=0!=d?l/d:1,h=0!=d?c/d:0;return[[u,s*f,f*h,0,-f,u*s,u*h,0,0,-h,s,0,e*f-t*u,r*h-t*f*s-e*u*s,-t*f*h-e*u*h-r*s,1],[u,-f,0,0,s*f,s*u,-h,0,f*h,u*h,s,0,t,e,r,1]]}(n,o,i,a,u,f);return e=E(E(E(s[1],(c=t,l=Math.sin(c),[d=Math.cos(c),l,0,0,-l,d,0,0,0,0,1,0,0,0,0,1])),s[0]),e),r},scale:function(t,n,o,i,a,u){var f,c,l,d,s,h;return e=E([f=t,0,0,0,0,c=n,0,0,0,0,l=o,0,(d=(d=i)||0)-d*f,(s=(s=a)||0)-s*c,(h=(h=u)||0)-h*l,1],e),r},multiply:function(t,n){return e=n?E(e,t):E(t,e),r},use:function(t,r,n,o){var i=E(e,[t,r,n=n||0,o=o||1]);return i[0]=+i[0].toFixed(7),i[1]=+i[1].toFixed(7),i[2]=+i[2].toFixed(7),i[3]=+i[3].toFixed(7),i},value:function(){return e}};return r},rotate:_,move:b,scale:x,dot:function(t){t=c({d:[1,1],c:[0,0],p:[0,0]},t);var e={rotate:function(r){var n=t.d[0]+t.p[0],o=t.d[1]+t.p[1],i=_(t.p[0],t.p[1],r,n,o);return t.d=[i[0]-t.p[0],i[1]-t.p[1]],e},move:function(r){return t.p=b(t.d[0],t.d[1],r,t.p[0],t.p[1]),e},scale:function(r){return t.p=x(t.c[0],t.c[1],r,t.p[0],t.p[1]),e},value:function(){return t.p}};return e},animation:function(t,e,r,n){u(r)||(n=r,r=!1);var o,i,a,c={ease:[.25,.1,.5,1],"ease-in":[.5,0,.75,.6],"ease-in-out":[.43,.01,.58,1],"ease-out":[.25,.6,.5,1],linear:"default"}[n]||n,l=function(t){return t};return c&&function(t,e){return e?function(t){return null!=t&&"function"!=typeof t&&"number"==typeof(e=t.length)&&-1<e&&e%1==0&&e<=9007199254740991;var e}(r=t)&&!f(r):Array.isArray(t);var r}(c)&&4==c.length&&(l=k({u:1}).setP(0,0,1,1,c[1]/c[0],(1-c[3])/(1-c[2]))),o=function(e){t(l(e))},a=(i={timer:function(t,e,r){if(!t)throw new Error("Tick is required!");e=e||400;var n=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return C.push({id:n,createTime:new Date,tick:t,duration:e,callback:r}),i.start(),n},start:function(){M=M||setInterval(i.tick,13)},tick:function(){var t=void 0,e=void 0,r=void 0,n=void 0,o=void 0,a=void 0,u=void 0,f=C;for(e=(C=[]).length=0;e<f.length;e++)t=(o=f[e]).createTime,r=o.tick,a=o.duration,n=o.callback,r(u=1<(u=(new Date-t)/a)?1:u),u<1&&o.id?C.push(o):n&&n(u);C.length<=0&&i.stop()},stop:function(){M&&(clearInterval(M),M=null)}}).timer((function(t){o(t)}),e,(function(t){u(r)&&(1!=t&&(t=l(t)),r(t))})),function(){var t=void 0;for(t in C)if(C[t].id==a)return void(C[t].id=void 0)}},cardinal:function(t){function e(t){if(r){for(n=-1;n+1<r.x.length&&(t>r.x[n+1]||-1==n&&t>=r.x[n+1]);)n+=1;if(-1==n||n>=r.h.length)throw new Error("Coordinate crossing!");return r.h[n](t)}throw new Error("You shoud first set the position!")}t=c({t:0},t);var r=void 0,n=void 0;return e.setT=function(r){if("number"!=typeof r)throw new Error("Expecting a figure!");return t.t=r,e},e.setP=function(n){r={x:[],h:[]};var o=void 0,i=(n[1][1]-n[0][1])/(n[1][0]-n[0][0]),a=void 0;for(r.x[0]=n[0][0],o=1;o<n.length;o++){if(n[o][0]<=n[o-1][0])throw new Error("The point position should be increamented!");r.x[o]=n[o][0],a=o<n.length-1?(n[o+1][1]-n[o-1][1])/(n[o+1][0]-n[o-1][0]):(n[o][1]-n[o-1][1])/(n[o][0]-n[o-1][0]),r.h[o-1]=k({u:.5*(1-t.t)}).setP(n[o-1][0],n[o-1][1],n[o][0],n[o][1],i,a),i=a}return e},e},formatColor:function(t){var e=document.getElementsByTagName("head")[0];e.style.color=t;var r=A(e,"color").replace(/^rgba?\(([^)]+)\)$/,"$1").split(new RegExp("\\,"+s));return[+r[0],+r[1],+r[2],null==r[3]?1:+r[3]]},getRandomColors:function(t){for(var e=[],r=1;r<=t;r++)e.push("rgb("+(230*Math.random(1)+20).toFixed(0)+","+(230*Math.random(1)+20).toFixed(0)+","+(230*Math.random(1)+20).toFixed(0)+")");return e}}),y.prototype.extend({appendTo:function(t,e){var r=m(t,e||document);if(!(0<r.length))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].appendChild(this[n]);return this},prependTo:function(t,e){var r=m(t,e||document);if(!(0<r.length))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].insertBefore(this[n],r[0].childNodes[0]);return this},afterTo:function(t,e){var r=m(t,e||document);if(!(0<r.length))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0].nextSibling);return this},beforeTo:function(t,e){var r=m(t,e||document);if(!(0<r.length))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0]);return this},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode.removeChild(this[t]);return this},filter:function(t){for(var e=[],r=0;r<this.length;r++)t(r,y(this[r]))&&e.push(this[r]);return y(e)},text:function(t){if(t){for(var e=0;e<this.length;e++)this[e].textContent=t;return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent},css:function(){if(arguments.length<=1&&(arguments.length<=0||"object"!==e(arguments[0]))){if(this.length<=0)throw new Error("Target empty!");return A(this[0],arguments[0])}for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])this[t].style[r]=arguments[0][r];else this[t].style[arguments[0]]=arguments[1];return this},attr:function(){if(1===arguments.length&&"object"!==e(arguments[0])){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}if(0<arguments.length)for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])N(this[t],r,arguments[0][r]);else N(this[t],arguments[0],arguments[1]);return this},datum:function(t,e){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var r=0;r<this.length;r++)this[r].__data__="function"==typeof e?e(t,r):t;return this},data:function(t,e){if(arguments.length<=0){for(var r=[],n=0;n<this.length;n++)r[n]=this[n].__data__;return r}var o=[],i=void 0;for(i=0;i<this.length&&i<t.length;i++)this[i].__data__="function"==typeof e?e(t[i],i):t[i],o.push(this[i]);var a=y(o);for(a.__enter__=[];i<t.length;i++)a.__enter__.push("function"==typeof e?e(t[i],i):t[i]);for(a.__exit__=[];i<this.length;i++)a.__exit__.push(this[i]);return a},enter:function(t,e){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");for(var r=[],n=0;n<this.__enter__.length;n++)r[n]=w(t,e),r[n].__data__=this.__enter__[n];return delete this.__enter__,y(r)},exit:function(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var t=y(this.__exit__);return delete this.__exit__,t},loop:function(t){for(var e=0;e<this.length;e++)t(this[e].__data__,e,y(this[e]));return this},bind:function(t,e){if(window.attachEvent)for(var r=0;r<this.length;r++)this[r].attachEvent("on"+t,e);else for(var n=0;n<this.length;n++)this[n].addEventListener(t,e,!1);return this},position:function(t){var e=this[0].getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-e.left,y:t.clientY-e.top}},painter:function(){if(!i(this[0]))throw new Error("Target empty!");var t=this[0],r=t.nodeName.toLowerCase();if("canvas"===r)return function(t){var r=t.getContext("2d"),n="yes"==t.__image2D__layer__,o=n?t.getAttribute("width"):t.clientWidth,i=n?t.getAttribute("height"):t.clientHeight;if(0==o||0==i)throw new Error("Canvas is hidden or size is zero!");t.style.width=o+"px",t.style.height=i+"px",t.setAttribute("width",2*o),t.setAttribute("height",2*i),r.scale(2,2),r.textBaseline="middle",r.textAlign="left";var a={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},u={config:function(t,n){if(1===arguments.length){if("object"!==e(t))return r[t];for(var o in t)a[o]?a[o]=t[o]:r[o]=t[o]}else 2===arguments.length&&(a[t]?a[t]=n:r[t]=n);return u},fillText:function(t,e,n,o){return r.save(),S(r,a,e,n,o||0).fillText(t,0,0),r.restore(),u},strokeText:function(t,e,n,o){return r.save(),S(r,a,e,n,o||0).strokeText(t,0,0),r.restore(),u},beginPath:function(){return r.beginPath(),u},closePath:function(){return r.closePath(),u},moveTo:function(t,e){return r.moveTo(t,e),u},lineTo:function(t,e){return r.lineTo(t,e),u},arc:function(t,e,n,o,i){return r.arc(t,e,n,o,o+i),u},fill:function(){return r.fill(),u},stroke:function(){return r.stroke(),u},save:function(){return r.save(),u},restore:function(){return r.restore(),u},quadraticCurveTo:function(t,e,n,o){return r.quadraticCurveTo(t,e,n,o),u},bezierCurveTo:function(t,e,n,o,i,a){return r.bezierCurveTo(t,e,n,o,i,a),u},clearRect:function(e,n,o,i){return r.clearRect(e||0,n||0,o||t.getAttribute("width")/2,i||t.getAttribute("height")/2),u},toDataURL:function(){return t.toDataURL()},drawImage:function(e,n,o,i,a,f,c,l,d){return n=n||0,o=o||0,f=f||0,c=c||0,l=l?2*l:t.getAttribute("width"),d=d?2*d:t.getAttribute("height"),a="CANVAS"==e.nodeName?(l/=2,d/=2,i=i?2*i:t.getAttribute("width"),a?2*a:t.getAttribute("height")):(i=2*(i||e.width),2*(a||e.height)),r.drawImage(e,n,o,i,a,f,c,l,d),u},fillArc:function(t,e,n,o,i,f){return L(r,a,t,e,n,o,i,f).fill(),u},strokeArc:function(t,e,n,o,i,f){return L(r,a,t,e,n,o,i,f).stroke(),u},fillCircle:function(t,e,n){return j(r,t,e,n).fill(),u},strokeCircle:function(t,e,n){return j(r,t,e,n).stroke(),u},fillRect:function(t,e,n,o){return I(r,t,e,n,o).fill(),u},strokeRect:function(t,e,n,o){return I(r,t,e,n,o).stroke(),u},createLinearGradient:function(t,e,n,o){return R(r,t,e,n,o)},createRadialGradient:function(t,e,n){return F(r,t,e,n)},translate:function(t,e){return r.translate(t,e),u},rotate:function(t){return r.rotate(t),u},scale:function(t,e){return e=e||t,r.scale(t,e),u}};return u}(t);if("svg"===r)return function(t,r){var n=void 0;r&&(n=y(r,t));var o={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},i="",a=[],u=[],f="",c={config:function(t,r){if(1===arguments.length){if("object"!==e(t))return o[t];for(var n in t)o[n]=D(n,t[n])}else 2===arguments.length&&(o[t]=D(t,r));return c},bind:function(e){return n=y(e,t),c},appendTo:function(e){return n.appendTo(e||t,t),c},prependTo:function(e){return n.prependTo(e||t,t),c},afterTo:function(e){return n.afterTo(e||t,t),c},beforeTo:function(e){return n.beforeTo(e||t,t),c},beginPath:function(){return i="",a=[],c},closePath:function(){return i+="Z",c},moveTo:function(t,e){return i+="M"+t+" "+e,a=[t,e],c},lineTo:function(t,e){return i+=(""==i?"M":"L")+t+" "+e,a=[t,e],c},arc:function(t,e,r,n,o){var u=_(t,e,n,t+r,e),f=_(t,e,n+o,t+r,e);return n=n/Math.PI*180,o=o/Math.PI*180,""==i?i+="M"+u[0]+","+u[1]:u[0]==a[0]&&u[1]==a[1]||(i+="L"+u[0]+","+u[1]),i+="A"+r+","+r+" 0 "+(180<o||o<-180?1:0)+","+(0<o?1:0)+" "+f[0]+","+f[1],c},fill:function(){return H(n,i).attr("transform",f).attr("fill",o.fillStyle),c},stroke:function(){return H(n,i).attr("transform",f).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),c},save:function(){return u.push(f),c},restore:function(){return 0<u.length&&(f=u.pop()),c},quadraticCurveTo:function(t,e,r,n){return i+="Q"+t+" "+e+","+r+" "+n,c},bezierCurveTo:function(t,e,r,n,o,a){return i+="C"+t+" "+e+","+r+" "+n+","+o+" "+a,c},fillText:function(t,e,r,i){var a=z(n,o,e,r,i||0);return n.attr("transform",f+a.transform).attr("fill",o.fillStyle)[0].textContent=t,c},strokeText:function(t,e,r,i){var a=z(n,o,e,r,i||0);return n.attr("transform",f+a.transform).attr({stroke:o.strokeStyle,fill:"none"})[0].textContent=t,c},fillArc:function(t,e,r,i,a,u){return B(n,o,t,e,r,i,a,u).attr("transform",f).attr("fill",o.fillStyle),c},strokeArc:function(t,e,r,i,a,u){return B(n,o,t,e,r,i,a,u).attr("transform",f).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),c},fillCircle:function(t,e,r){return G(n,t,e,r).attr("transform",f).attr("fill",o.fillStyle),c},strokeCircle:function(t,e,r){return G(n,t,e,r).attr("transform",f).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),c},fillRect:function(t,e,r,i){return $(n,t,e,r,i).attr("transform",f).attr("fill",o.fillStyle),c},strokeRect:function(t,e,r,i){return $(n,t,e,r,i).attr("transform",f).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),c},createLinearGradient:function(e,r,n,o){return q(0,t,e,r,n,o)},createRadialGradient:function(e,r,n){return V(0,t,e,r,n)},translate:function(t,e){return f+=" translate("+t+","+e+")",c},rotate:function(t){return f+=" rotate("+t/Math.PI*180+")",c},scale:function(t,e){return f+=" scale("+t+","+(e=e||t)+")",c}};return c}(t,arguments[0]);throw new Error("Painter is not a function!")},layer:function(){if(!i(this[0]))throw new Error("Target empty!");if("canvas"!==this[0].nodeName.toLowerCase())throw new Error("Layer is not a function!");var t=this.painter(),e={},r=[],n=this[0].clientWidth,o=this[0].clientHeight,a={painter:function(t){var i;return e[t]&&(i=e[t].painter)&&i.constructor===CanvasRenderingContext2D||(e[t]={visible:!0},e[t].canvas=document.createElement("canvas"),e[t].canvas.setAttribute("width",n),e[t].canvas.setAttribute("height",o),e[t].canvas.__image2D__layer__="yes",e[t].painter=y(e[t].canvas).painter(),r.push(t)),e[t].painter},delete:function(t){for(var n=0;n<r.length;n++)if(r[n]===t){r.splice(n,1);break}return delete e[t],a},update:function(){t.clearRect(0,0,n,o),t.save();for(var i=0;i<r.length;i++)e[r[i]].visible&&t.drawImage(e[r[i]].canvas,0,0,n,o,0,0,n,o);return t.restore(),a},hidden:function(t){return e[t].visible=!1,a},show:function(t){return e[t].visible=!0,a}};return a}}),y.fn=y.prototype,"object"===e(t)&&"object"===e(t.exports))t.exports=y;else{var W=window.image2D,U=window.$$;y.noConflict=function(t){return window.$$===y&&(window.$$=U),t&&window.image2D===y&&(window.image2D=W),y},window.image2D=window.$$=y}}()}).call(this,r(6)(t))},57:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=r(34))&&n.__esModule?n:{default:n};e.default={created:function(){(0,o.default)("menu-1","about")}}},58:function(t,e,r){var n=r(1),o=r(59);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i=(n(o,{insert:"head",singleton:!1}),o.locals?o.locals:{});t.exports=i},59:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"",""])}}]);