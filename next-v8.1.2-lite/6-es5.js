(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SoFr:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),u=t("pMnS"),r=t("ZYCi"),i=t("Ip0R"),a=t("gIcY"),s=t("3Fe6"),d=function(){function n(n,l,t){this.myLoginService=n,this.router=l,this.toastr=t,this.error=null,this.form={email:null,password:null},this.loginForm=new a.i({email:new a.g(null,a.y.required),password:new a.g(null,a.y.required)})}return n.prototype.ngOnInit=function(){if(localStorage.getItem("token"))return this.router.navigateByUrl("dashboard/home")},n.prototype.onSubmit=function(){var n=this;this.loginForm.valid?this.myLoginService.sellerLogin(this.loginForm.value).subscribe((function(l){n.handleResponse(l)}),(function(l){n.showError("Something wrong!")})):this.showError("Please fill the form !")},n.prototype.handleResponse=function(n){var l=this;localStorage.setItem("token",n.token),localStorage.setItem("user_id",n.user._id),this.myLoginService.getCompanyByOwner(n).subscribe((function(n){l.getDefaultCompany(n)}),(function(n){}))},n.prototype.getDefaultCompany=function(n){n.length>0?(localStorage.setItem("comp_id",n[0]._id),this.router.navigateByUrl("dashboard/home")):0===n.length?this.router.navigateByUrl("dashboard/home"):void 0===n.length&&(console.log(n),this.router.navigateByUrl("dashboard/home"))},n.prototype.isValid=function(n){return this.loginForm.get(n).invalid&&this.loginForm.get(n).touched},n.prototype.showSuccess=function(n){this.toastr.success(n)},n.prototype.showError=function(n){this.toastr.error(n)},n}(),g=t("SZbH"),c=e["\u0275crt"]({encapsulation:0,styles:[[".register[_ngcontent-%COMP%]{background:-webkit-linear-gradient(left,#f88716,#e7b761)!important;margin-top:3%;padding:3%}.register-left[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-top:1%}.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;padding-bottom:0!important}.register-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:none;border-radius:1.5rem;padding:2%;width:40%;background:#f8f9fa;font-weight:700;color:#383d41;margin-bottom:3%;cursor:pointer}.register-right[_ngcontent-%COMP%]{background:#f8f9fa;border-top-left-radius:20% 50%;border-bottom-left-radius:20% 50%}.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:15%;margin-bottom:5%;width:50%}@-webkit-keyframes mover{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-20px);transform:translateY(-20px)}}@keyframes mover{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-20px);transform:translateY(-20px)}}.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:lighter;padding:12%;margin-top:-9%}.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{padding:10%;margin-top:10%;padding-bottom:30px!important}.btnRegister[_ngcontent-%COMP%]{float:right;margin-top:10%;border:none;border-radius:1.5rem;padding:2%;background:#f68f33;color:#383d41;font-weight:600;width:50%;cursor:pointer}.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{margin-top:3%;border:none;border-radius:1.5rem;float:right}.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:5%;height:34px;font-weight:600;color:#fff;border-top-right-radius:1.5rem;border-bottom-right-radius:1.5rem}.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{border:none}.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{width:100px;color:#383d41;border:2px solid #f68f33;border-top-left-radius:1.5rem;border-bottom-left-radius:1.5rem}.register-heading[_ngcontent-%COMP%]{text-align:center;margin-top:8%;margin-bottom:-15%;color:#495057}@media only screen and (max-width:767px){.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1%;width:20%}.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}}"]],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","invalid-feedback"],["style","display: unset;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Email Invalid"]))],null,null)}function p(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","invalid-feedback"],["style","display: unset;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Password Invalid"]))],null,null)}function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,49,"div",[["class","auth-wrapper register"],["style","margin: unset;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,48,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,10,"div",[["class","col-lg-4 col-md-3 register-left"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,0,"img",[["alt",""],["src","assets/images/loggingPage.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Welcome to MANGOHUB"])),(n()(),e["\u0275eld"](6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Your Online Shopping Partner!"])),(n()(),e["\u0275eld"](8,0,null,null,3,"a",[["class","btn"],["name",""],["value","Login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,9).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o}),null,null)),e["\u0275did"](9,671744,null,0,r.r,[r.o,r.a,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](10,1),(n()(),e["\u0275ted"](-1,null,["Register"])),(n()(),e["\u0275eld"](12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,36,"div",[["class","col-lg-8 col-md-9 register-right"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,35,"div",[["class","tab-content"],["id","myTabContent"]],null,null,null,null,null)),(n()(),e["\u0275eld"](15,0,null,null,34,"div",[["aria-labelledby","home-tab"],["class","tab-pane fade show active"],["id","home"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e["\u0275eld"](16,0,null,null,1,"h3",[["class","register-heading"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Seller Account Login"])),(n()(),e["\u0275eld"](18,0,null,null,31,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,t){var o=!0,u=n.component;return"submit"===l&&(o=!1!==e["\u0275nov"](n,20).onSubmit(t)&&o),"reset"===l&&(o=!1!==e["\u0275nov"](n,20).onReset()&&o),"ngSubmit"===l&&(o=!1!==u.onSubmit()&&o),o}),null,null)),e["\u0275did"](19,16384,null,0,a.D,[],null,null),e["\u0275did"](20,540672,null,0,a.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,a.d,null,[a.j]),e["\u0275did"](22,16384,null,0,a.q,[[4,a.d]],null,null),(n()(),e["\u0275eld"](23,0,null,null,26,"div",[["class","row register-form"]],null,null,null,null,null)),(n()(),e["\u0275eld"](24,0,null,null,23,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](25,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](26,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["placeholder","Email address"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var o=!0;return"input"===l&&(o=!1!==e["\u0275nov"](n,27)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==e["\u0275nov"](n,27).onTouched()&&o),"compositionstart"===l&&(o=!1!==e["\u0275nov"](n,27)._compositionStart()&&o),"compositionend"===l&&(o=!1!==e["\u0275nov"](n,27)._compositionEnd(t.target.value)&&o),o}),null,null)),e["\u0275did"](27,16384,null,0,a.e,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275prd"](1024,null,a.n,(function(n){return[n]}),[a.e]),e["\u0275did"](29,671744,null,0,a.h,[[3,a.d],[8,null],[8,null],[6,a.n],[2,a.B]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,a.o,null,[a.h]),e["\u0275did"](31,16384,null,0,a.p,[[4,a.o]],null,null),(n()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](33,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](34,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](35,0,null,null,5,"input",[["class","form-control"],["formControlName","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var o=!0;return"input"===l&&(o=!1!==e["\u0275nov"](n,36)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==e["\u0275nov"](n,36).onTouched()&&o),"compositionstart"===l&&(o=!1!==e["\u0275nov"](n,36)._compositionStart()&&o),"compositionend"===l&&(o=!1!==e["\u0275nov"](n,36)._compositionEnd(t.target.value)&&o),o}),null,null)),e["\u0275did"](36,16384,null,0,a.e,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275prd"](1024,null,a.n,(function(n){return[n]}),[a.e]),e["\u0275did"](38,671744,null,0,a.h,[[3,a.d],[8,null],[8,null],[6,a.n],[2,a.B]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,a.o,null,[a.h]),e["\u0275did"](40,16384,null,0,a.p,[[4,a.o]],null,null),(n()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](42,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](43,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](44,0,null,null,3,"div",[["class","checkbox checkbox-primary d-inline"]],null,null,null,null,null)),(n()(),e["\u0275eld"](45,0,null,null,0,"input",[["checked",""],["id","checkbox-fill-a1"],["name","checkbox-fill-1"],["type","checkbox"]],null,null,null,null,null)),(n()(),e["\u0275eld"](46,0,null,null,1,"label",[["class","cr"],["for","checkbox-fill-a1"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Save credentials"])),(n()(),e["\u0275eld"](48,0,null,null,1,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](49,0,null,null,0,"input",[["class","btnRegister float-right"],["type","submit"],["value","Login"]],null,null,null,null,null))],(function(n,l){var t=l.component,e=n(l,10,0,"/signup");n(l,9,0,e),n(l,20,0,t.loginForm),n(l,29,0,"email"),n(l,33,0,t.isValid("email")),n(l,38,0,"password"),n(l,42,0,t.isValid("password"))}),(function(n,l){n(l,8,0,e["\u0275nov"](l,9).target,e["\u0275nov"](l,9).href),n(l,18,0,e["\u0275nov"](l,22).ngClassUntouched,e["\u0275nov"](l,22).ngClassTouched,e["\u0275nov"](l,22).ngClassPristine,e["\u0275nov"](l,22).ngClassDirty,e["\u0275nov"](l,22).ngClassValid,e["\u0275nov"](l,22).ngClassInvalid,e["\u0275nov"](l,22).ngClassPending),n(l,26,0,e["\u0275nov"](l,31).ngClassUntouched,e["\u0275nov"](l,31).ngClassTouched,e["\u0275nov"](l,31).ngClassPristine,e["\u0275nov"](l,31).ngClassDirty,e["\u0275nov"](l,31).ngClassValid,e["\u0275nov"](l,31).ngClassInvalid,e["\u0275nov"](l,31).ngClassPending),n(l,35,0,e["\u0275nov"](l,40).ngClassUntouched,e["\u0275nov"](l,40).ngClassTouched,e["\u0275nov"](l,40).ngClassPristine,e["\u0275nov"](l,40).ngClassDirty,e["\u0275nov"](l,40).ngClassValid,e["\u0275nov"](l,40).ngClassInvalid,e["\u0275nov"](l,40).ngClassPending)}))}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-auth-signin",[],null,null,null,f,c)),e["\u0275did"](1,114688,null,0,d,[s.a,r.o,g.j],null,null)],(function(n,l){n(l,1,0)}),null)}var h=e["\u0275ccf"]("app-auth-signin",d,v,{},{},[]),b=t("NG21"),C=t("t/Na"),y=function(){return function(){}}();t.d(l,"AuthSigninModuleNgFactory",(function(){return w}));var w=e["\u0275cmf"](o,[],(function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,h]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,a.A,a.A,[]),e["\u0275mpd"](4608,a.f,a.f,[]),e["\u0275mpd"](4608,b.a,b.a,[]),e["\u0275mpd"](4608,s.a,s.a,[C.c,r.o,b.a,r.o]),e["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),e["\u0275mpd"](1073742336,r.s,r.s,[[2,r.x],[2,r.o]]),e["\u0275mpd"](1073742336,y,y,[]),e["\u0275mpd"](1073742336,a.z,a.z,[]),e["\u0275mpd"](1073742336,a.k,a.k,[]),e["\u0275mpd"](1073742336,a.v,a.v,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,r.m,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);