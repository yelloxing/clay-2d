(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{23:function(a,e,t){"use strict";var p=t(24),i=t.n(p);e.a=function(a,e){i()("."+a).attr("active","no"),i()("."+a+"."+e).attr("active","yes")}},25:function(a,e,t){"use strict";var p=t(24),i=t.n(p);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var e=a.split("&"),t={};return e.forEach((function(a){var e=a.split("=");t[e[0]]=e[1]})),t}().fixed;if(t){var p=i()("#fixed-"+t);if(p.length>0){var r=p[0].offsetTop-e,c=a.scrollTop||0;i.a.animation((function(e){a.scrollTop=(r-c)*e+c}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0}},49:function(a,e,t){var p=t(50);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,t(1).default)("data-quickpaper-5bb1691e",p,!0)},50:function(a,e,t){(a.exports=t(0)(!1)).push([a.i,"",""])},66:function(a,e,t){"use strict";t.r(e);var p=t(23),i=t(25),r={created:function(){Object(p.a)("menu-2","install")},mounted:function(){Object(i.a)(document.getElementById("course-id"),44)}};t(49);r.render=function(a){return a("div",{quickpaper:"","data-quickpaper-5bb1691e":""},[a("div",{class:"course-view","data-quickpaper-5bb1691e":""},[a("header",{id:"fixed-top","data-quickpaper-5bb1691e":""},["安装"]),a("h2",{id:"fixed-compatibility","data-quickpaper-5bb1691e":""},["兼容性"]),a("p",{"data-quickpaper-5bb1691e":""},["image2D 不支持 IE9 以下版本（IE9支持），因为 IE9 以下对",a("a",{href:"https://caniuse.com/#search=canvas",target:"_blank","data-quickpaper-5bb1691e":""},["Canvans"]),"和",a("a",{href:"https://caniuse.com/#search=svg",target:"_blank","data-quickpaper-5bb1691e":""},["SVG"]),"本身就没有很好的支持，而且使用的人越来越少，没有太多兼容的意义。"]),a("h2",{id:"fixed-log","data-quickpaper-5bb1691e":""},["更新日志"]),a("p",{"data-quickpaper-5bb1691e":""},["最新稳定版本：",a("span",{class:"important","data-quickpaper-5bb1691e":""},[a("a",{href:"https://www.npmjs.com/package/image2d","data-quickpaper-5bb1691e":""},[a("img",{src:"https://img.shields.io/npm/v/image2d.svg",alt:"Version","data-quickpaper-5bb1691e":""},[])])])]),a("p",{"data-quickpaper-5bb1691e":""},["每个版本的更新日志见",a("a",{href:"https://github.com/hai2007/image2D/blob/master/CHANGELOG",target:"_blank","data-quickpaper-5bb1691e":""},["GitHub"]),"。"]),a("h1",{id:"fixed-script","data-quickpaper-5bb1691e":""},["直接用",a("span",{class:"important","data-quickpaper-5bb1691e":""},["script"]),"引入"]),a("p",{class:"warn","data-quickpaper-5bb1691e":""},["直接下载并用",a("span",{class:"important","data-quickpaper-5bb1691e":""},["script"]),"标签引入，",a("span",{class:"important","data-quickpaper-5bb1691e":""},["image2D"]),"和",a("span",{class:"important","data-quickpaper-5bb1691e":""},["$$"]),"会被注册为一个全局变量。"]),a("h2",{id:"fixed-cdn","data-quickpaper-5bb1691e":""},["CDN"]),a("p",{"data-quickpaper-5bb1691e":""},["对于制作学习或者用例项目等，你可以这样使用最新版本："]),a("pre",{"q-code":"html","data-quickpaper-5bb1691e":""},['<script src="https://cdn.jsdelivr.net/npm/image2d"><\/script>']),a("p",{"data-quickpaper-5bb1691e":""},["对于生产环境，我们推荐链接到一个明确的版本号，以避免新版本造成的不可预期的破坏："]),a("pre",{"q-code":"html","data-quickpaper-5bb1691e":""},['<script src="https://cdn.jsdelivr.net/npm/image2d@1.13.1"><\/script>']),a("p",{"data-quickpaper-5bb1691e":""},["你可以在",a("a",{href:"https://cdn.jsdelivr.net/npm/image2d/",target:"_blank","data-quickpaper-5bb1691e":""},["cdn.jsdelivr.net/npm/image2D"]),"浏览 NPM 包的源代码。"]),a("h1",{id:"fixed-npm","data-quickpaper-5bb1691e":""},["通过",a("span",{class:"important","data-quickpaper-5bb1691e":""},["NPM"]),"方式管理"]),a("p",{"data-quickpaper-5bb1691e":""},["同样的，你可以使用 NPM 安装。"]),a("pre",{"q-code":"","data-quickpaper-5bb1691e":""},["npm install image2d"]),a("p",{"data-quickpaper-5bb1691e":""},["安装好了以后，在需要的地方引入即可："]),a("pre",{"q-code":"","data-quickpaper-5bb1691e":""},['import $$ from "image2d";']),a("h1",{id:"fixed-export","data-quickpaper-5bb1691e":""},[a("span",{class:"important","data-quickpaper-5bb1691e":""},["部分导入"])]),a("p",{"data-quickpaper-5bb1691e":""},["如果你想基于",a("span",{class:"important","data-quickpaper-5bb1691e":""},["image2D"]),"进行",a("span",{class:"important","data-quickpaper-5bb1691e":""},["二次开发"]),"，可能和之前直接使用本库不一样，比如你选择了SVG作为画笔，这样，Canvas部分对你而言可能就是“累赘”，我们希望提供按需导入的方式来帮助你减小你基于image2D开发的项目的最终产品尺寸。"]),a("p",{"data-quickpaper-5bb1691e":""},["我们来说明一下如何实现："]),a("pre",{"q-code":"","data-quickpaper-5bb1691e":""},['import {↵↵    // 对象↵    image2D,↵↵    // 静态方法↵    treeLayout, pieLayout, Matrix4, animation, cardinal,↵    rotate, move, scale, dot, formatColor, getRandomColors,↵    stopPropagation, preventDefault, map,↵↵    // 对象方法↵    appendTo, prependTo, afterTo, beforeTo, remove, filter,↵    text, html, size, css, attr, datum, data, enter, exit,↵    loop, bind, unbind, position,↵    painter, painterCanvas2D, painterSVG, layer↵↵} from "image2d/src/export.js";']),a("p",{"data-quickpaper-5bb1691e":""},["首先，你需要像上面这样导入需要的",a("span",{class:"important","data-quickpaper-5bb1691e":""},["静态方法"]),"和",a("span",{class:"important","data-quickpaper-5bb1691e":""},["对象方法"]),"，而",a("span",{class:"important","data-quickpaper-5bb1691e":""},["对象"]),"是必须的，上面列出了全部可导出方法，和",a("a",{href:"#/api",target:"_blank","data-quickpaper-5bb1691e":""},["文档"]),"是对应的。"]),a("p",{"data-quickpaper-5bb1691e":""},["然后，拼接出你想要的",a("span",{class:"important","data-quickpaper-5bb1691e":""},["image2D"]),"即可："]),a("pre",{"q-code":"","data-quickpaper-5bb1691e":""},["// 挂载需要的静态方法↵image2D.extend({↵↵    animation↵↵});↵↵// 挂载需要的类方法↵image2D.prototype.extend({↵↵    css,↵    attr,↵↵    // 画笔比较特殊，默认是painter，你也可以选择只用canvas或者svg画笔，↵    // 因此名称没办法完全和接口保持一致↵    painter: painterCanvas2D↵↵});↵↵export default image2D;"]),a("p",{"data-quickpaper-5bb1691e":""},["比如上面导出的最终成品支持动画，可以设置样式和属性，还可以获取canvas2D画笔。"]),a("p",{"data-quickpaper-5bb1691e":""},["如果上面有没有说清楚的，欢迎去",a("a",{href:"https://github.com/hai2007/image2D/issues",target:"_blank","data-quickpaper-5bb1691e":""},["issue"]),"给我们留言！"])])])};e.default=r}}]);