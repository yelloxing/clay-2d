(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{30:function(a,i,t){"use strict";var e=t(4),r=t.n(e);i.a=function(a,i){r()("."+a).attr("active","no"),r()("."+a+"."+i).attr("active","yes")}},32:function(a){a.exports=JSON.parse('{"name":"image2d","version":"1.10.3","description":"🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.","main":"build/image2D.min.js","typings":"types/index.d.ts","sideEffects":false,"scripts":{"start":"npm install && npm run build","build":"npm run build:init && npm run build:bundle && npm run build:babel && npm run build:uglifyjs && npm run build:end","build:init":"cuf --config ./cuf.config.js init","build:end":"cuf --config ./cuf.config.js end","build:bundle":"cuf --config ./cuf.config.js bundle","build:babel":"cuf --config ./cuf.config.js babel","build:uglifyjs":"cuf --config ./cuf.config.js uglifyjs","server":"cuf --server 30000"},"keywords":["image","algorithm","svg","canvas","tree","js"],"repository":{"type":"git","url":"git+https://github.com/yelloxing/image2D.git"},"author":{"name":"yelloxing","url":"http://yelloxing.gitee.io/homepage/"},"license":"MIT","bugs":{"url":"https://github.com/yelloxing/image2D/issues"},"homepage":"https://yelloxing.gitee.io/image2d/index.html","devDependencies":{"babel-core":"^6.26.0","babel-plugin-transform-class-properties":"^6.24.1","babel-preset-es2015":"^6.24.1","cuf":"^1.2.0","rollup":"^1.32.1","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-node-resolve":"^5.2.0","uglify-js":"^3.5.6"},"dependencies":{"@yelloxing/core.js":"^0.3.7"}}')},33:function(a,i,t){var e=t(34);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,t(2).default)("data-icrush-731590aa",e,!0)},34:function(a,i,t){(a.exports=t(1)(!1)).push([a.i,"div.root{background:#f6f8f8;min-height:calc(100vh - .44rem)}div.root>header{text-align:center;font-size:.3rem;line-height:1.5em;padding:.3rem 0}div.root>header>span{border:1px solid gray;background-color:white;font-size:.12rem;vertical-align:middle;margin-left:.1rem;padding:.03rem .06rem;border-radius:.03rem}div.root>header>p{font-size:.16rem}div.root>header>p>a{color:#4078c0}div.root>div{background-color:#fff;padding:.15rem .5rem;min-height:calc(100vh - 2rem);color:#3a585f}div.root>div a{color:inherit}div.root>div a:hover{text-decoration:underline;color:#3d7991}div.root>div a.link{color:#1b6afc;font-size:.14rem}div.root>div>h2{padding-bottom:.09rem;border-bottom:1px solid #eee;display:block;font-weight:200}div.root>div>ul{padding-top:.09rem;-moz-column-count:3;column-count:3;line-height:1.6em}div.root>div>ul>li{-moz-column-break-inside:avoid;break-inside:avoid}div.root>div>ul>li>h4{font-weight:600;padding-top:.1rem}div.root>div>ul>li>ol{margin-left:1em;padding-left:.1rem}div.root>div>ul>li>ol>li{list-style-type:circle}\n",""])},66:function(a,i,t){"use strict";t.r(i);var e=t(30),r=t(32),l={data:function(){return{version:r.version,info:"本文档对应image2D.js的版本是v"+r.version+"。"}},methods:{goNpmList:function(){window.location.href="https://github.com/yelloxing/image2D/blob/master/CHANGELOG"}},created:function(){Object(e.a)("menu-1","guide")}};t(33);l.render=function(a){return a("div",{class:"root","data-icrush-731590aa":""},[a("header",{"data-icrush-731590aa":""},["image2D.js 官方文档",a("span",{":title":"info","@click":"goNpmList()","data-icrush-731590aa":""},["{{version}}"]),a("p",{"data-icrush-731590aa":""},["本文档由",a("a",{href:"https://github.com/yelloxing/iCrush",title:"文档使用框架","data-icrush-731590aa":""},["iCrush"]),"提供技术支持。"])]),a("div",{"data-icrush-731590aa":""},[a("h2",{"data-icrush-731590aa":""},["指南：开始绘图"]),a("ul",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("h4",{"data-icrush-731590aa":""},[a("a",{href:"#/api/how-to-use",target:"_blank","data-icrush-731590aa":""},["快速开始"])]),a("ol",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/how-to-use?fixed=purpose",target:"_blank","data-icrush-731590aa":""},["关注的问题"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/how-to-use?fixed=import",target:"_blank","data-icrush-731590aa":""},["如何引入?"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/how-to-use?fixed=example",target:"_blank","data-icrush-731590aa":""},["一个简单的用例"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/how-to-use?fixed=help",target:"_blank","data-icrush-731590aa":""},["获取帮助"])])])]),a("li",{"data-icrush-731590aa":""},[a("h4",{"data-icrush-731590aa":""},[a("a",{href:"#/api/xhtml",target:"_blank","data-icrush-731590aa":""},["结点操作"])]),a("ol",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/xhtml?fixed=object",target:"_blank","data-icrush-731590aa":""},["结点对象"]),"(你可能需要知道有哪些",a("a",{class:"link",href:"#/api/xhtml?fixed=selector",target:"_blank","data-icrush-731590aa":""},["选择器"]),")"]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/xhtml?fixed=modify",target:"_blank","data-icrush-731590aa":""},["编辑"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/xhtml?fixed=calculate",target:"_blank","data-icrush-731590aa":""},["计算(比如结点大小等常用方法)"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/xhtml?fixed=attribute",target:"_blank","data-icrush-731590aa":""},["样式和属性"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/xhtml?fixed=event",target:"_blank","data-icrush-731590aa":""},["事件相关"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/xhtml?fixed=data",target:"_blank","data-icrush-731590aa":""},["数据绑定"])])])]),a("li",{"data-icrush-731590aa":""},[a("h4",{"data-icrush-731590aa":""},[a("a",{href:"#/api/painter",target:"_blank","data-icrush-731590aa":""},["画笔"])]),a("ol",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/painter?fixed=canvas2d",target:"_blank","data-icrush-731590aa":""},["位图画笔"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/painter?fixed=svg",target:"_blank","data-icrush-731590aa":""},["矢图画笔"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/painter?fixed=method",target:"_blank","data-icrush-731590aa":""},["画笔上的绘图方法"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/painter?fixed=gradient",target:"_blank","data-icrush-731590aa":""},["渐变色"]),"(比如",a("a",{class:"link",href:"#/api/painter?fixed=linearGradient",target:"_blank","data-icrush-731590aa":""},["线性渐变"]),"和",a("a",{class:"link",href:"#/api/painter?fixed=radialGradient",target:"_blank","data-icrush-731590aa":""},["环形渐变"]),")"]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/painter?fixed=translate",target:"_blank","data-icrush-731590aa":""},["变换"])])])]),a("li",{"data-icrush-731590aa":""},[a("h4",{"data-icrush-731590aa":""},[a("a",{href:"#/api/calculate",target:"_blank","data-icrush-731590aa":""},["辅助计算"])]),a("ol",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/calculate?fixed=dot",target:"_blank","data-icrush-731590aa":""},["二维坐标变换"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/calculate?fixed=matrix4",target:"_blank","data-icrush-731590aa":""},["矩阵坐标变换"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/calculate?fixed=interpolation",target:"_blank","data-icrush-731590aa":""},["曲线插值"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/calculate?fixed=layout",target:"_blank","data-icrush-731590aa":""},["布局"]),"(目前布局有两种：",a("a",{class:"link",href:"#/api/calculate?fixed=treeLayout",target:"_blank","data-icrush-731590aa":""},["树布局"]),"和",a("a",{class:"link",href:"#/api/calculate?fixed=pieLayout",target:"_blank","data-icrush-731590aa":""},["饼布局"]),"，其中树布局初始的时候会获得",a("a",{class:"link",href:"#/api/calculate?fixed=treeLayout-basic",target:"_blank","data-icrush-731590aa":""},["基本树"]),"，而为了方便又提供了常见的几种具体的",a("a",{class:"link",href:"#/api/calculate?fixed=treeLayout-config",target:"_blank","data-icrush-731590aa":""},["配置树"]),")"]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/calculate?fixed=map",target:"_blank","data-icrush-731590aa":""},["地图坐标映射"]),"（根据不同的需求映射算法有很多中，目前提供的映射方法有：",a("a",{class:"link",href:"#/api/calculate?fixed=map-eoap",target:"_blank","data-icrush-731590aa":""},["等角斜方位投影"]),"）"])])]),a("li",{"data-icrush-731590aa":""},[a("h4",{"data-icrush-731590aa":""},[a("a",{href:"#/api/tool",target:"_blank","data-icrush-731590aa":""},["有用的补充"])]),a("ol",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/tool?fixed=layer",target:"_blank","data-icrush-731590aa":""},["位图图层"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/tool?fixed=animation",target:"_blank","data-icrush-731590aa":""},["动画或定时轮询"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/api/tool?fixed=colors",target:"_blank","data-icrush-731590aa":""},["颜色计算相关方法"])])])]),a("li",{"data-icrush-731590aa":""},[a("h4",{"data-icrush-731590aa":""},[a("a",{href:"#/QA",target:"_blank","data-icrush-731590aa":""},["答疑Q&A"])]),a("ol",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/QA?fixed=issue11",target:"_blank","data-icrush-731590aa":""},["为什么选择canvas作为画布绘图的时候会出现线条模糊？"])])])]),a("li",{"data-icrush-731590aa":""},[a("h4",{"data-icrush-731590aa":""},["更多"]),a("ol",{"data-icrush-731590aa":""},[a("li",{"data-icrush-731590aa":""},[a("a",{href:"#/course/author?fixed=join-us",target:"_blank","data-icrush-731590aa":""},["加入我们，参与日常维护？"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"https://github.com/yelloxing/image2D/blob/master/CHANGELOG",target:"_blank","data-icrush-731590aa":""},["查看版本日志"])]),a("li",{"data-icrush-731590aa":""},[a("a",{href:"https://github.com/yelloxing/image2D/projects/4",target:"_blank","data-icrush-731590aa":""},["开发或bug任务清单"])])])])])])])};i.default=l}}]);