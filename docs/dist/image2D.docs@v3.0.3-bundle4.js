(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{29:function(a,i,t){"use strict";var s=t(4),r=t.n(s);i.a=function(a,i){r()("."+a).attr("active","no"),r()("."+a+"."+i).attr("active","yes")}},30:function(a,i,t){"use strict";var s=t(4),r=t.n(s);i.a=function(a,i){i=i||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var i=a.split("&"),t={};return i.forEach((function(a){var i=a.split("=");t[i[0]]=i[1]})),t}().fixed;if(t){var s=r()("#fixed-"+t);if(s.length>0){var e=s[0].offsetTop-i,n=a.scrollTop||0;r.a.animation((function(i){a.scrollTop=(e-n)*i+n}),500,(function(){a.scrollTop=e}))}}else a.scrollTop=0}},31:function(a){a.exports=JSON.parse('{"name":"image2d","version":"1.12.3","description":"🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.","main":"build/image2D.min.js","typings":"types/index.d.ts","sideEffects":false,"scripts":{"start":"npm install && npm run build","build":"npm run build:init && npm run build:bundle && npm run build:babel && npm run build:uglifyjs && npm run build:end","build:init":"cuf --config ./cuf.config.js init","build:end":"cuf --config ./cuf.config.js end","build:bundle":"cuf --config ./cuf.config.js bundle","build:babel":"cuf --config ./cuf.config.js babel","build:uglifyjs":"cuf --config ./cuf.config.js uglifyjs","server":"cuf --server 30000"},"keywords":["image","algorithm","svg","canvas","tree","js"],"repository":{"type":"git","url":"git+https://github.com/yelloxing/image2D.git"},"author":{"name":"yelloxing","url":"http://yelloxing.gitee.io/homepage/"},"license":"MIT","bugs":{"url":"https://github.com/yelloxing/image2D/issues"},"homepage":"https://yelloxing.gitee.io/image2d/index.html","devDependencies":{"babel-core":"^6.26.0","babel-plugin-transform-class-properties":"^6.24.1","babel-preset-es2015":"^6.24.1","cuf":"^1.2.0","rollup":"^1.32.1","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-node-resolve":"^5.2.0","uglify-js":"^3.5.6"},"dependencies":{"@hai2007/algorithm":"^0.4.0","@hai2007/tool":"^0.3.1","@yelloxing/core.js":"^0.4.2"}}')},54:function(a,i,t){var s=t(55);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);(0,t(2).default)("data-icrush-47126b6d",s,!0)},55:function(a,i,t){(a.exports=t(1)(!1)).push([a.i,"",""])},72:function(a,i,t){"use strict";t.r(i);var s=t(29),r=t(30),e=t(31),n={data:function(){return{version:e.version,CDN:{noVersion:'<script src="https://cdn.jsdelivr.net/npm/image2d"><\/script>',version:'<script src="https://cdn.jsdelivr.net/npm/image2d@'+e.version+'"><\/script>'}}},created:function(){Object(s.a)("menu-2","install")},mounted:function(){prettyPrint(),Object(r.a)(document.getElementById("course-id"),44)}};t(54);n.render=function(a){return a("div",{class:"course-view","data-icrush-47126b6d":""},[a("header",{id:"fixed-top","data-icrush-47126b6d":""},["安装"]),a("h2",{id:"fixed-compatibility","data-icrush-47126b6d":""},["兼容性"]),a("p",{"data-icrush-47126b6d":""},["image2D 不支持 IE9 以下版本（IE9支持），因为 IE9 以下对",a("a",{href:"https://caniuse.com/#search=canvas",target:"_blank","data-icrush-47126b6d":""},["Canvans"]),"和",a("a",{href:"https://caniuse.com/#search=svg",target:"_blank","data-icrush-47126b6d":""},["SVG"]),"本身就没有很好的支持，而且使用的人越来越少，没有太多兼容的意义。"]),a("h2",{id:"fixed-log","data-icrush-47126b6d":""},["更新日志"]),a("p",{"data-icrush-47126b6d":""},["最新稳定版本：",a("span",{class:"important","data-icrush-47126b6d":""},["{{version}}"])]),a("p",{"data-icrush-47126b6d":""},["每个版本的更新日志见",a("a",{href:"https://github.com/yelloxing/image2D/blob/master/CHANGELOG",target:"_blank","data-icrush-47126b6d":""},["GitHub"]),"。"]),a("h1",{id:"fixed-script","data-icrush-47126b6d":""},["直接用",a("span",{class:"important","data-icrush-47126b6d":""},["script"]),"引入"]),a("p",{class:"warn","data-icrush-47126b6d":""},["直接下载并用",a("span",{class:"important","data-icrush-47126b6d":""},["script"]),"标签引入，",a("span",{class:"important","data-icrush-47126b6d":""},["image2D"]),"和",a("span",{class:"important","data-icrush-47126b6d":""},["$$"]),"会被注册为一个全局变量。"]),a("h2",{id:"fixed-cdn","data-icrush-47126b6d":""},["CDN"]),a("p",{"data-icrush-47126b6d":""},["对于制作学习或者用例项目等，你可以这样使用最新版本："]),a("div",{"ui-copy":"","data-icrush-47126b6d":""},[a("pre",{class:"prettyprint","data-icrush-47126b6d":""},["{{CDN.noVersion}}"])]),a("p",{"data-icrush-47126b6d":""},["对于生产环境，我们推荐链接到一个明确的版本号，以避免新版本造成的不可预期的破坏："]),a("div",{"ui-copy":"","data-icrush-47126b6d":""},[a("pre",{class:"prettyprint","data-icrush-47126b6d":""},["{{CDN.version}}"])]),a("p",{"data-icrush-47126b6d":""},["你可以在",a("a",{href:"https://cdn.jsdelivr.net/npm/image2d/",target:"_blank","data-icrush-47126b6d":""},["cdn.jsdelivr.net/npm/image2D"]),"浏览 NPM 包的源代码。"]),a("h1",{id:"fixed-npm","data-icrush-47126b6d":""},["通过",a("span",{class:"important","data-icrush-47126b6d":""},["NPM"]),"方式管理"]),a("p",{"data-icrush-47126b6d":""},["同样的，你可以使用 NPM 安装。"]),a("div",{"ui-copy":"","data-icrush-47126b6d":""},[a("pre",{class:"prettyprint","data-icrush-47126b6d":""},["npm install image2d"])]),a("p",{"data-icrush-47126b6d":""},["安装好了以后，在需要的地方引入即可："]),a("div",{"ui-copy":"","data-icrush-47126b6d":""},[a("pre",{class:"prettyprint","data-icrush-47126b6d":""},['import $$ from "image2d";'])]),a("h1",{id:"fixed-export","data-icrush-47126b6d":""},[a("span",{class:"important","data-icrush-47126b6d":""},["部分导入"])]),a("p",{"data-icrush-47126b6d":""},["如果你想基于",a("span",{class:"important","data-icrush-47126b6d":""},["image2D"]),"进行",a("span",{class:"important","data-icrush-47126b6d":""},["二次开发"]),"，可能和之前直接使用本库不一样，比如你选择了SVG作为画笔，这样，Canvas部分对你而言可能就是“累赘”，我们希望提供按需导入的方式来帮助你减小你基于image2D开发的项目的最终产品尺寸。"]),a("p",{"data-icrush-47126b6d":""},["我们来说明一下如何实现："]),a("div",{"ui-copy":"","data-icrush-47126b6d":""},[a("pre",{class:"prettyprint","data-icrush-47126b6d":""},['import {↵↵    // 对象↵    image2D,↵↵    // 静态方法↵    treeLayout, pieLayout, Matrix4, animation, cardinal,↵    rotate, move, scale, dot, formatColor, getRandomColors,↵    stopPropagation, preventDefault, map,↵↵    // 对象方法↵    appendTo, prependTo, afterTo, beforeTo, remove, filter,↵    text, html, size, css, attr, datum, data, enter, exit,↵    loop, bind, unbind, position,↵    painter, painterCanvas2D, painterSVG, layer↵↵} from "image2d/src/export.js";'])]),a("p",{"data-icrush-47126b6d":""},["首先，你需要像上面这样导入需要的",a("span",{class:"important","data-icrush-47126b6d":""},["静态方法"]),"和",a("span",{class:"important","data-icrush-47126b6d":""},["对象方法"]),"，而",a("span",{class:"important","data-icrush-47126b6d":""},["对象"]),"是必须的，上面列出了全部可导出方法，和",a("a",{href:"#/api",target:"_blank","data-icrush-47126b6d":""},["文档"]),"是对应的。"]),a("p",{"data-icrush-47126b6d":""},["然后，拼接出你想要的",a("span",{class:"important","data-icrush-47126b6d":""},["image2D"]),"即可："]),a("div",{"ui-copy":"","data-icrush-47126b6d":""},[a("pre",{class:"prettyprint","data-icrush-47126b6d":""},["// 挂载需要的静态方法↵image2D.extend({↵    ↵    animation↵↵});↵↵// 挂载需要的类方法↵image2D.prototype.extend({↵↵    css,↵    attr,↵↵    // 画笔比较特殊，默认是painter，你也可以选择只用canvas或者svg画笔，↵    // 因此名称没办法完全和接口保持一致↵    painter: painterCanvas2D↵↵});↵↵export default image2D;"])]),a("p",{"data-icrush-47126b6d":""},["比如上面导出的最终成品支持动画，可以设置样式和属性，还可以获取canvas2D画笔。"]),a("p",{"data-icrush-47126b6d":""},["如果上面有没有说清楚的，欢迎去",a("a",{href:"https://github.com/yelloxing/image2D/issues",target:"_blank","data-icrush-47126b6d":""},["issue"]),"给我们留言！"])])};i.default=n}}]);