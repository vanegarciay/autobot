(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{L6id:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){},r=t("pMnS"),a=t("ZGwz"),i=t("AtZD"),o=t("ZYCi"),s=t("Ip0R"),c=t("AytR"),b=function(){function l(l){this.route=l,this.carLinks=[],this.title=c.a.title,this.subtitle=c.a.version}return l.prototype.ngOnInit=function(){this.carLinks=this.route.snapshot.data.cars.map(this.getLinkFromCar)},l.prototype.getLinkFromCar=function(l){return{caption:l.link.caption,routerLink:"/car/"+l.link.routerLink,value:Object(s.t)(l.cost,"en-US")+" EUR"}},l}(),p=u.qb({encapsulation:2,styles:[],data:{}});function h(l){return u.Kb(0,[(l()(),u.sb(0,0,null,null,7,"header",[["class","hero"]],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,6,"div",[["class","hero-body has-text-centered"]],null,null,null,null,null)),(l()(),u.sb(2,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),u.Ib(3,null,[" Welcome to "," "])),(l()(),u.sb(4,0,null,null,1,"h2",[["class","subtitle"]],null,null,null,null,null)),(l()(),u.Ib(5,null,[" Version: "," "])),(l()(),u.sb(6,0,null,null,1,"a",[["href","https://academiabinaria.github.io/autobot/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(l()(),u.sb(7,0,null,null,0,"img",[["src","./assets/logo.png"],["width","80"]],null,null,null,null,null)),(l()(),u.sb(8,0,null,null,1,"app-menu-list",[["caption","Cars in your garage:"]],null,null,null,a.b,a.a)),u.rb(9,114688,null,0,i.a,[],{caption:[0,"caption"],links:[1,"links"]},null),(l()(),u.sb(10,0,null,null,2,"a",[["routerLink","/a"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Cb(l,11).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.rb(11,671744,null,0,o.o,[o.n,o.a,s.j],{routerLink:[0,"routerLink"]},null),(l()(),u.Ib(-1,null,[" Home-Async "]))],function(l,n){l(n,9,0,"Cars in your garage:",n.component.carLinks),l(n,11,0,"/a")},function(l,n){var t=n.component;l(n,3,0,t.title),l(n,5,0,t.subtitle),l(n,10,0,u.Cb(n,11).target,u.Cb(n,11).href)})}var f=u.ob("app-home",b,function(l){return u.Kb(0,[(l()(),u.sb(0,0,null,null,1,"app-home",[],null,null,null,h,p)),u.rb(1,114688,null,0,b,[o.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=t("VnD/"),m=t("67Y/"),g=t("xy+J"),y=t("1tJV"),d=function(){function l(l){this.store=l,this.title=c.a.title,this.subtitle=c.a.version}return l.prototype.ngOnInit=function(){var l=this;this.store.dispatch(new g.b),this.carLinks$=this.store.select(y.a).pipe(Object(k.a)(function(l){return null!=l}),Object(m.a)(function(n){return n.map(l.getLinkFromCar)}))},l.prototype.getLinkFromCar=function(l){return{caption:l.link.caption,routerLink:"/car/"+l.link.routerLink,value:Object(s.t)(l.cost,"en-US")+" EUR"}},l}(),C=t("yGQT"),L=u.qb({encapsulation:2,styles:[],data:{}});function v(l){return u.Kb(2,[(l()(),u.sb(0,0,null,null,7,"header",[["class","hero"]],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,6,"div",[["class","hero-body has-text-centered"]],null,null,null,null,null)),(l()(),u.sb(2,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),u.Ib(3,null,[" Welcome to "," "])),(l()(),u.sb(4,0,null,null,1,"h2",[["class","subtitle"]],null,null,null,null,null)),(l()(),u.Ib(5,null,[" Version: "," "])),(l()(),u.sb(6,0,null,null,1,"a",[["href","https://academiabinaria.github.io/autobot/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(l()(),u.sb(7,0,null,null,0,"img",[["src","./assets/logo.png"],["width","80"]],null,null,null,null,null)),(l()(),u.sb(8,0,null,null,2,"app-menu-list",[["caption","async: Cars in your garage:"]],null,null,null,a.b,a.a)),u.rb(9,114688,null,0,i.a,[],{caption:[0,"caption"],links:[1,"links"]},null),u.Eb(131072,s.b,[u.i]),(l()(),u.sb(11,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Cb(l,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.rb(12,671744,null,0,o.o,[o.n,o.a,s.j],{routerLink:[0,"routerLink"]},null),(l()(),u.Ib(-1,null,[" Home-Resolve "]))],function(l,n){var t=n.component;l(n,9,0,"async: Cars in your garage:",u.Jb(n,9,1,u.Cb(n,10).transform(t.carLinks$))),l(n,12,0,"/")},function(l,n){var t=n.component;l(n,3,0,t.title),l(n,5,0,t.subtitle),l(n,11,0,u.Cb(n,12).target,u.Cb(n,12).href)})}var A=u.ob("app-home-a",d,function(l){return u.Kb(0,[(l()(),u.sb(0,0,null,null,1,"app-home-a",[],null,null,null,v,L)),u.rb(1,114688,null,0,d,[C.n],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),w=t("gIcY"),j=t("Y9ZX"),I=t("F/XL"),K=t("xMyE"),O=t("t9fZ"),F=function(){return function(l){var n=this;this.store=l,this.cars$=this.store.select(y.a).pipe(Object(k.a)(function(l){return null!=l}),Object(K.a)(function(l){return n.carsCache=l}),Object(O.a)(1)),this.resolve=function(l,t){return n.carsCache?Object(I.a)(n.carsCache):(n.store.dispatch(new g.b),n.cars$)}}}(),x=function(){},J=t("PCNd");t.d(n,"HomeModuleNgFactory",function(){return R});var R=u.pb(e,[],function(l){return u.zb([u.Ab(512,u.k,u.eb,[[8,[r.a,f,A]],[3,u.k],u.z]),u.Ab(4608,s.o,s.n,[u.w,[2,s.x]]),u.Ab(4608,w.d,w.d,[]),u.Ab(4608,w.p,w.p,[]),u.Ab(4608,j.a,j.a,[]),u.Ab(4608,F,F,[C.n]),u.Ab(1073742336,s.c,s.c,[]),u.Ab(1073742336,o.p,o.p,[[2,o.w],[2,o.n]]),u.Ab(1073742336,x,x,[]),u.Ab(1073742336,w.m,w.m,[]),u.Ab(1073742336,w.k,w.k,[]),u.Ab(1073742336,J.a,J.a,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,o.l,function(){return[[{path:"",component:b,resolve:{cars:F}},{path:"a",component:d}]]},[])])})}}]);