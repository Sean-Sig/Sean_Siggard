(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)i=o[f],s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"0b9f":function(t,e,n){},"21e8":function(t,e,n){t.exports=n.p+"img/apio.65fec102.svg"},"2feb":function(t,e,n){t.exports=n.p+"img/angular.84c42cef.png"},"3b8a":function(t,e,n){t.exports=n.p+"img/java.d11a0484.png"},"3fad":function(t,e,n){"use strict";var a=n("0b9f"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=n("355a"),o=n.n(i),l={name:"app",data:function(){return{backgroundColor:new o.a("#504453").toRGB(),showMenu:!1,scrolled:!1}},computed:{darkTextColor:function(){return{color:this.backgroundColor}},darkBackgroundColor:function(){return{backgroundColor:this.backgroundColor}}},methods:{createCallback:function(t,e){return function(){if(200===t.status&&4===t.readyState){var n=JSON.parse(t.responseText);e.imageURL=n.logoURL,e.backgroundColor=new o.a(n.mainColor).toRGB(),e.accentColor=n.accentColor}else 200!==t.status&&4===t.readyState&&console.log("REQUEST FAILED")}},handleMenu:function(){this.showMenu=!this.showMenu},handleScroll:function(){if(window.innerWidth>1087)this.scrolled=window.scrollY>window.innerHeight-35;else{var t=document.getElementById("mobile-accounting-system"),e=t.getBoundingClientRect().top;this.scrolled=e<=25}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},c=l,u=(n("034f"),n("5c64"),n("2877")),f=Object(u["a"])(c,s,r,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,v=n("8a03"),p=n.n(v),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-info is-large"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n        About Me\n      ")])])])])}],h={},g=Object(u["a"])(h,m,b,!1,null,null,null);g.options.__file="About.vue";var _=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero apio-background"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[a("img",{attrs:{src:n("21e8")}}),a("div",{staticClass:"title has-text-white"},[t._v("\n            Software Engineer\n          ")]),a("div",{staticClass:"sub-title has-text-white"},[t._v("\n            Lehi, Utah\n          ")])]),a("div",{staticClass:"column is-9"},[a("div",{staticClass:"sub-title is-pulled-right has-text-white"},[t._v("\n            2018 - Present\n          ")])])])])])])}],w=(n("3fad"),{}),y=Object(u["a"])(w,C,x,!1,null,null,null);y.options.__file="ApioLogo.vue";var j=y.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t._v("\n        Project\n      ")]),n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])]),n("div",{staticClass:"content"},[n("img",{attrs:{src:"https://cdnph.upi.com/svc/sv/upi/5581566909407/2019/1/127b3c18cb2ae973bc292527ae956fb4/LeBron-James-praises-Ken-Griffey-Jrs-greatest-swing-ever.jpg",alt:"Italian Trulli"}})])])])}],P=void 0,O=Object(u["a"])(P,E,k,!1,null,null,null);O.options.__file="Box.vue";var S=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("div",{staticClass:"navbar-item"},[n("p",[n("router-link",{staticClass:"name-logo",attrs:{to:{name:"HomePage"}}},[t._v("Sean "),n("strong",[t._v("Siggard")])])],1)]),t._m(0)]),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-primary",attrs:{to:{name:"ProjectsPage"}}},[n("strong",[t._v("Projects")])]),n("router-link",{staticClass:"button is-light",attrs:{to:{name:"ResumePage"}}},[t._v("Resume")])],1)])])])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],L=(n("9389"),{}),M=Object(u["a"])(L,$,B,!1,null,null,null);M.options.__file="NavBar.vue";var R=M.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero has-background-grey-lighter main-section"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("\n        Skill Highlights\n      ")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-centered"},[a("img",{attrs:{src:n("cf05")}})]),a("div",{staticClass:"column has-text-centered"},[a("img",{attrs:{src:n("3b8a")}})]),a("div",{staticClass:"column has-text-centered"},[a("img",{attrs:{src:n("5c93")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("bc85")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("5ab6")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("7abe")}})]),a("div",{staticClass:"column"},[a("img",{attrs:{src:n("2feb")}})])])])])])}],H={},N=Object(u["a"])(H,A,T,!1,null,null,null);N.options.__file="Skills.vue";var J=N.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-large main-section"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n        Hello, my name is Sean\n      ")]),n("h2",{staticClass:"subtitle"},[t._v("\n        Welcome to my site!\n      ")])])])])}],G={},I=Object(u["a"])(G,W,U,!1,null,null,null);I.options.__file="Welcome.vue";var D=I.exports,F=n("8c4f"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),n("Welcome"),n("About")],1)},Q=[],Y={},q=Object(u["a"])(Y,K,Q,!1,null,null,null);q.options.__file="HomePage.vue";var z=q.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("ApioLogo"),n("br"),n("br"),n("br"),n("br"),n("Skills")],1)},X=[],Z={},tt=Object(u["a"])(Z,V,X,!1,null,null,null);tt.options.__file="ResumePage.vue";var et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),n("div",{staticClass:"container is-fullhd boxes"},[n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is-3"},[n("Box")],1),n("div",{staticClass:"column is-3"},[n("Box")],1)])])],1)},at=[],st=(n("76fd"),{}),rt=Object(u["a"])(st,nt,at,!1,null,null,null);rt.options.__file="ProjectsPage.vue";var it=rt.exports;a["default"].use(F["a"]);var ot=new F["a"]({routes:[{path:"/",name:"HomePage",component:z},{path:"/resume",name:"ResumePage",component:et},{path:"/projects",name:"ProjectsPage",component:it}]}),lt=ot;a["default"].use(p.a),a["default"].config.productionTip=!1,a["default"].component("About",_),a["default"].component("ApioLogo",j),a["default"].component("Box",S),a["default"].component("NavBar",R),a["default"].component("Skills",J),a["default"].component("Welcome",D),new a["default"]({router:lt,render:function(t){return t(d)}}).$mount("#app")},"5ab6":function(t,e,n){t.exports=n.p+"img/csharp.9cec7cf2.png"},"5c64":function(t,e,n){"use strict";var a=n("c2ae"),s=n.n(a);s.a},"5c93":function(t,e,n){t.exports=n.p+"img/python.9ae7d0c2.png"},"64a9":function(t,e,n){},"76fd":function(t,e,n){"use strict";var a=n("b70a"),s=n.n(a);s.a},"7abe":function(t,e,n){t.exports=n.p+"img/cplusplus.fe4a8221.png"},9389:function(t,e,n){"use strict";var a=n("a98c"),s=n.n(a);s.a},a98c:function(t,e,n){},b70a:function(t,e,n){},bc85:function(t,e,n){t.exports=n.p+"img/swift.28baf0f4.png"},c2ae:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.404ef077.js.map