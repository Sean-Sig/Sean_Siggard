(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)r=o[f],s[r]&&d.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"0b9f":function(t,e,n){},"20b5":function(t,e,n){t.exports=n.p+"img/contacts-logo.f987f611.svg"},"21e8":function(t,e,n){t.exports=n.p+"img/apio.65fec102.svg"},"2feb":function(t,e,n){t.exports=n.p+"img/angular.84c42cef.png"},"3b8a":function(t,e,n){t.exports=n.p+"img/java.d11a0484.png"},"3fad":function(t,e,n){"use strict";var a=n("0b9f"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r=n("355a"),o=n.n(r),l={name:"app",data:function(){return{backgroundColor:new o.a("#504453").toRGB(),showMenu:!1,scrolled:!1}},computed:{darkTextColor:function(){return{color:this.backgroundColor}},darkBackgroundColor:function(){return{backgroundColor:this.backgroundColor}}},methods:{createCallback:function(t,e){return function(){if(200===t.status&&4===t.readyState){var n=JSON.parse(t.responseText);e.imageURL=n.logoURL,e.backgroundColor=new o.a(n.mainColor).toRGB(),e.accentColor=n.accentColor}else 200!==t.status&&4===t.readyState&&console.log("REQUEST FAILED")}},handleMenu:function(){this.showMenu=!this.showMenu},handleScroll:function(){if(window.innerWidth>1087)this.scrolled=window.scrollY>window.innerHeight-35;else{var t=document.getElementById("mobile-accounting-system"),e=t.getBoundingClientRect().top;this.scrolled=e<=25}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},c=l,u=(n("034f"),n("5c64"),n("2877")),f=Object(u["a"])(c,s,i,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,v=n("8a03"),p=n.n(v),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-info is-large"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n        About Me\n      ")])])])])}],b={},g=Object(u["a"])(b,m,h,!1,null,null,null);g.options.__file="About.vue";var _=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero apio-background"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[a("img",{attrs:{src:n("21e8")}}),a("div",{staticClass:"title has-text-white"},[t._v("\n            Software Engineer\n          ")]),a("div",{staticClass:"sub-title has-text-white"},[t._v("\n            Lehi, Utah\n          ")])]),a("div",{staticClass:"column is-9"},[a("div",{staticClass:"sub-title is-pulled-right has-text-white"},[t._v("\n            November 2018 - Present\n          ")])])])])])])}],w=(n("3fad"),{}),y=Object(u["a"])(w,C,x,!1,null,null,null);y.options.__file="ApioLogo.vue";var E=y.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t._v("\n        Project\n      ")]),n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])]),n("div",{staticClass:"content"},[n("img",{attrs:{src:"https://cdnph.upi.com/svc/sv/upi/5581566909407/2019/1/127b3c18cb2ae973bc292527ae956fb4/LeBron-James-praises-Ken-Griffey-Jrs-greatest-swing-ever.jpg",alt:"Italian Trulli"}})])])])}],k={},O=Object(u["a"])(k,j,S,!1,null,null,null);O.options.__file="Box.vue";var P=O.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero contacts-background"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[a("img",{attrs:{src:n("20b5")}}),a("div",{staticClass:"title has-text-white"},[t._v("\n            Software Engineer in Test Intern\n          ")]),a("div",{staticClass:"sub-title has-text-white"},[t._v("\n            Draper, Utah\n          ")])]),a("div",{staticClass:"column is-9"},[a("div",{staticClass:"sub-title is-pulled-right has-text-white"},[t._v("\n            May 2018 - August 2018\n          ")])])])])])])}],M=(n("e1b3"),{}),U=Object(u["a"])(M,$,B,!1,null,null,null);U.options.__file="Contacts.vue";var A=U.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("div",{staticClass:"navbar-item"},[n("p",[n("router-link",{staticClass:"name-logo",attrs:{to:{name:"HomePage"}}},[t._v("Sean "),n("strong",[t._v("Siggard")])])],1)]),t._m(0)]),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-primary",attrs:{to:{name:"ProjectsPage"}}},[n("strong",[t._v("Projects")])]),n("router-link",{staticClass:"button is-light",attrs:{to:{name:"ResumePage"}}},[t._v("Resume")])],1)])])])])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],T=(n("9389"),{}),N=Object(u["a"])(T,L,R,!1,null,null,null);N.options.__file="NavBar.vue";var H=N.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero has-background-grey-lighter main-section"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("\n        Skill Highlights\n      ")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-centered"},[a("img",{attrs:{src:n("cf05")}})]),a("div",{staticClass:"column has-text-centered"},[a("img",{attrs:{src:n("3b8a")}})]),a("div",{staticClass:"column has-text-centered"},[a("img",{attrs:{src:n("5c93")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("bc85")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("5ab6")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("7abe")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("2feb")}})])])])])])}],I={},D=Object(u["a"])(I,J,W,!1,null,null,null);D.options.__file="Skills.vue";var G=D.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero uvu-background"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-4"},[a("img",{staticStyle:{width:"130px",height:"100px"},attrs:{src:n("7547")}}),a("div",{staticClass:"title has-text-white"},[t._v("\n            Bachelor of Science (BS), Software Engineering\n          ")]),a("div",{staticClass:"sub-title has-text-white"},[t._v("\n            Orem, Utah\n          ")])]),a("div",{staticClass:"column is-8"},[a("div",{staticClass:"sub-title is-pulled-right has-text-white"},[t._v("\n            2016 - 2019\n          ")])])])])])])}],Q=(n("7443"),{}),V=Object(u["a"])(Q,F,K,!1,null,null,null);V.options.__file="Uvu.vue";var Y=V.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-large main-section"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n        Hello, my name is Sean\n      ")]),n("h2",{staticClass:"subtitle"},[t._v("\n        Welcome to my site!\n      ")])])])])}],X={},Z=Object(u["a"])(X,q,z,!1,null,null,null);Z.options.__file="Welcome.vue";var tt=Z.exports,et=n("8c4f"),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),n("Welcome"),n("About")],1)},at=[],st={},it=Object(u["a"])(st,nt,at,!1,null,null,null);it.options.__file="HomePage.vue";var rt=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",[n("NavBar"),n("ApioLogo"),n("Contacts"),n("Uvu"),n("Skills")],1)])},lt=[],ct={},ut=Object(u["a"])(ct,ot,lt,!1,null,null,null);ut.options.__file="ResumePage.vue";var ft=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),n("div",{staticClass:"container is-fullhd boxes"},[n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is-3"},[n("Box")],1),n("div",{staticClass:"column is-3"},[n("Box")],1)])])],1)},vt=[],pt=(n("76fd"),{}),mt=Object(u["a"])(pt,dt,vt,!1,null,null,null);mt.options.__file="ProjectsPage.vue";var ht=mt.exports;a["default"].use(et["a"]);var bt=new et["a"]({routes:[{path:"/",name:"HomePage",component:rt},{path:"/resume",name:"ResumePage",component:ft},{path:"/projects",name:"ProjectsPage",component:ht}]}),gt=bt;a["default"].use(p.a),a["default"].config.productionTip=!1,a["default"].component("About",_),a["default"].component("ApioLogo",E),a["default"].component("Box",P),a["default"].component("Contacts",A),a["default"].component("NavBar",H),a["default"].component("Skills",G),a["default"].component("Uvu",Y),a["default"].component("Welcome",tt),new a["default"]({router:gt,render:function(t){return t(d)}}).$mount("#app")},"5ab6":function(t,e,n){t.exports=n.p+"img/csharp.9cec7cf2.png"},"5c64":function(t,e,n){"use strict";var a=n("c2ae"),s=n.n(a);s.a},"5c93":function(t,e,n){t.exports=n.p+"img/python.9ae7d0c2.png"},"64a9":function(t,e,n){},6716:function(t,e,n){},7443:function(t,e,n){"use strict";var a=n("ee5b"),s=n.n(a);s.a},7547:function(t,e,n){t.exports=n.p+"img/UVU_small.da974b8f.png"},"76fd":function(t,e,n){"use strict";var a=n("b70a"),s=n.n(a);s.a},"7abe":function(t,e,n){t.exports=n.p+"img/cplusplus.fe4a8221.png"},9389:function(t,e,n){"use strict";var a=n("a98c"),s=n.n(a);s.a},a98c:function(t,e,n){},b70a:function(t,e,n){},bc85:function(t,e,n){t.exports=n.p+"img/swift.28baf0f4.png"},c2ae:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e1b3:function(t,e,n){"use strict";var a=n("6716"),s=n.n(a);s.a},ee5b:function(t,e,n){}});
//# sourceMappingURL=app.304cead8.js.map