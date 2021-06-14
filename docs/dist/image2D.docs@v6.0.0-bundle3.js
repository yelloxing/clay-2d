(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{23:function(a,e,p){"use strict";var i=p(24),c=p.n(i);e.a=function(a,e){c()("."+a).attr("active","no"),c()("."+a+"."+e).attr("active","yes")}},25:function(a,e,p){"use strict";var i=p(24),c=p.n(i);e.a=function(a,e){e=e||0,a=a||document.documentElement;var p=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var e=a.split("&"),p={};return e.forEach((function(a){var e=a.split("=");p[e[0]]=e[1]})),p}().fixed;if(p){var i=c()("#fixed-"+p);if(i.length>0){var t=i[0].offsetTop-e,r=a.scrollTop||0;c.a.animation((function(e){a.scrollTop=(t-r)*e+r}),500,(function(){a.scrollTop=t}))}}else a.scrollTop=0}},32:function(a,e,p){var i=p(33);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,p(1).default)("data-quickpaper-0612c918",i,!0)},33:function(a,e,p){e=a.exports=p(0)(!1);var i=p(4)(p(34));e.push([a.i,"\n .guider-demo1{\n\nbackground-image: url("+i+");\n\nheight: 1.6rem;\n\nbackground-repeat: no-repeat;\n\nbackground-position: left center;\n\nbackground-size: auto 100%;\n\n}\n",""])},34:function(a,e,p){a.exports=p.p+"dist/guider-demo1.png"},59:function(a,e,p){"use strict";p.r(e);var i=p(23),c=p(25),t={created:function(){Object(i.a)("menu-2","how-to-use")},mounted:function(){Object(c.a)()}};p(32);t.render=function(a){return a("div",{quickpaper:"","data-quickpaper-0612c918":""},[a("div",{class:"api-view","data-quickpaper-0612c918":""},[a("p",{"data-quickpaper-0612c918":""},["首先，让我们来了解一个这个库主要解决的问题是什么，如何使用以及问题反馈等基本信息。"]),a("h2",{id:"fixed-purpose","data-quickpaper-0612c918":""},["关注的问题"]),a("p",{"data-quickpaper-0612c918":""},["本库致力于提供更简单的Web端二维绘图接口，主要包括这些方面：画笔、辅助计算、结点操作和一些零碎的小工具方法。我们希望绘图是简单而有趣的、高效而愉悦的！"]),a("p",{"data-quickpaper-0612c918":""},["主要是在svg和canvas2D上绘图，虽然有提供比如Maritx4坐标变换等三维相关方法，这是考虑到一些潜在的需求。"]),a("h2",{id:"fixed-import","data-quickpaper-0612c918":""},["如何引入?"]),a("p",{"data-quickpaper-0612c918":""},["如果你开发的是一个web项目，直接在页面引入打包后的文件后即可（在代码中通过image2D或$$调用）："]),a("pre",{"q-code":"","data-quickpaper-0612c918":""},['<script src="https://cdn.jsdelivr.net/npm/image2d"><\/script>']),a("p",{"data-quickpaper-0612c918":""},["如果你想通过npm方式管理，首先你需要通过命令行安装image2D，就像这样："]),a("pre",{"q-code":"","data-quickpaper-0612c918":""},["npm install --save image2d"]),a("p",{"data-quickpaper-0612c918":""},["安装好了以后，在需要的地方引入即可："]),a("pre",{"q-code":"","data-quickpaper-0612c918":""},['import $$ from "image2d";']),a("h2",{id:"fixed-example","data-quickpaper-0612c918":""},["一个简单的用例"]),a("p",{"data-quickpaper-0612c918":""},["作为入门，我们这里只是简单的说明一下如何绘图，具体的辅助方法和一些细节在文档有进行说明，或者你可以提issue进行交流，为了简化，这里不再赘述。"]),a("h6",{"data-quickpaper-0612c918":""},["获取画笔"]),a("p",{"data-quickpaper-0612c918":""},["绘图的第一步当然是获取画笔了，画笔分为两种：Canvas2D和SVG，我们来看看具体的代码："]),a("pre",{"q-code":"","data-quickpaper-0612c918":""},['var painter=$$("#painter").painter();']),a("p",{"data-quickpaper-0612c918":""},['上面的$$("#painter")返回一个image2D对象，通过ID选择器查找结点，然后调用对象上的painter方法就可以获取画笔了。']),a("p",{"data-quickpaper-0612c918":""},["如何判断画笔的类型？如果结点是canvas获取的就是Canvas2D画笔，如果结点是svg获取的就是SVG画笔。"]),a("h6",{"data-quickpaper-0612c918":""},["配置"]),a("p",{"data-quickpaper-0612c918":""},["不管是什么画笔，都一样可以进行配置（当然有缺省值），比如画笔的粗细，颜色等，下面列出部分选项："]),a("pre",{"q-code":"","data-quickpaper-0612c918":""},['painter.config({↵    "font-size":文字大小,↵    "lineWidth":线条宽度,↵    ......↵});']),a("p",{"data-quickpaper-0612c918":""},["具体的配置选项请查看画笔一节。"]),a("h6",{"data-quickpaper-0612c918":""},["绘图方法"]),a("p",{"data-quickpaper-0612c918":""},["画笔获取并配置好了以后，直接调用画笔上的方法即可绘图，我们拿canvas举例子。"]),a("pre",{"q-code":"","data-quickpaper-0612c918":""},['$$("canvas")↵.attr({↵    "with":200,↵    "height":100↵})↵.painter()↵.config({↵    "lineWidth":10,↵    "fillStyle":"red",↵    "strokeStyle":"green"↵})↵.fillArc(100, 0, 50, 100, 0, Math.PI)↵.strokeArc(100, 0, 50, 95, 0, Math.PI);']),a("p",{"data-quickpaper-0612c918":""},["具体的绘图方法也请查看文档。绘制的结果如下："]),a("div",{class:"guider-demo1","data-quickpaper-0612c918":""},[]),a("p",{"data-quickpaper-0612c918":""},["怎么样？是不是很简单，虽然直接使用canvas或svg也可以实现，不过借助这个库绘图会更简单，你可以把更多的精力放在绘制出更有趣的作品上。"]),a("h2",{id:"fixed-help","data-quickpaper-0612c918":""},["获取帮助"]),a("p",{"data-quickpaper-0612c918":""},["在使用image2D的时候，如果遇到任何疑惑或问题，包括建议或对未来版本的想法，请先在",a("a",{target:"_blank",href:"https://github.com/hai2007/image2D/issues","data-quickpaper-0612c918":""},["Github issue"]),"上查找是否存在相似内容，然后进行补充或追问，当然也可以增加新的话题进行交流，除非特殊情况，你会在48小时内获得",a("a",{href:"mailto:2501482523@qq.com","data-quickpaper-0612c918":""},["作者"]),"回复。"])])])};e.default=t}}]);