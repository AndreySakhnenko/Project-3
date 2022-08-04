(function(){"use strict";var e={7700:function(e,t,s){var a=s(144),i=s(3726),r=s(3102),n=function(){var e=this,t=e._self._c;return t(i.Z,[t("HeaderProject"),t(r.Z,[t("router-view")],1),t("FooterProject")],1)},l=[],o=s(8455),c=s(9088),u=s(2515),m=function(){var e=this,t=e._self._c;return t(o.Z,{attrs:{app:"",dark:""}},[t("div",{staticClass:"d-flex align-center"}),t(c.Z,{staticClass:"logo_icons",attrs:{size:"40"}},[e._v(" mdi-movie-open ")]),t("router-link",{staticClass:"film_router__link",attrs:{to:{name:"main"}}},[t("span",{staticClass:"header_logo__title"},[e._v("Films")])]),t(u.Z),t("AuthModal")],1)},d=[],h=s(3381),p=s(3240),_=s(9616),v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_block"},[t("h4",{staticClass:"header_title"},[e._v(e._s(e.activeUser))]),t("span",{staticClass:"header_span__span"},[e._v("|")]),"User"!==e.activeUser?t("button",{staticClass:"header_btn",on:{click:function(t){e.activeUser="User"}}},[e._v(" Sing out ")]):e._e(),"User"===e.activeUser?t(h.Z,{attrs:{href:"#",text:""},on:{click:function(t){return t.preventDefault(),e.hiddenModal.apply(null,arguments)}}},[e._v("Sing in")]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.hidden,expression:"hidden"}],staticClass:"my_form"},[t("h2",{staticClass:"modal_title"},[e._v("Sing in")]),t(p.Z,{ref:"form",staticClass:"modal_form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(_.Z,{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"modal_input",attrs:{counter:10,rules:e.nameRules,label:"Login",type:"name",required:""},model:{value:e.userData.login,callback:function(t){e.$set(e.userData,"login",t)},expression:"userData.login"}}),t(_.Z,{staticClass:"modal_input",attrs:{rules:e.emailRules,type:"email",required:"",label:"E-mail"},model:{value:e.userData.email,callback:function(t){e.$set(e.userData,"email",t)},expression:"userData.email"}}),t(_.Z,{staticClass:"modal_input",attrs:{counter:8,rules:e.passwordRules,type:"password",label:"Password",required:""},model:{value:e.userData.password,callback:function(t){e.$set(e.userData,"password",t)},expression:"userData.password"}})],1),e.failAvtorization?t("p",[e._v(e._s(e.errorMessage))]):e._e(),t(h.Z,{staticClass:"modal_btn",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.sendUserData.apply(null,arguments)}}},[e._v(" Ok ")]),t(h.Z,{staticClass:"modal_btn",on:{click:function(t){return t.preventDefault(),e.hiddenModal.apply(null,arguments)}}},[e._v(" Close ")]),t(h.Z,{staticClass:"modal_btn modal_btn-1",on:{click:function(t){return t.preventDefault(),e.classActive.apply(null,arguments)}}},[e._v(" Registration ")])],1)],1)},g=[],f={name:"auth-modal",data(){return{valid:!0,nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be less than 10 characters"],emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],passwordRules:[e=>!!e||"Password is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],activeUser:"User",errorMessage:"try again",failAvtorization:!1,hidden:!1,isActive:!1,isRegistration:!1,userData:{login:"",email:"",password:""}}},methods:{sendUserData(){for(let e in this.userData){Object.assign({},this.userData);if(this.isRegistration)this.userData.login&&this.userData.email&&this.userData.password&&(localStorage.setItem(`${this.userData.email}`,JSON.stringify(this.userData)),this.activeUser=this.userData.login,this.hiddenModal());else if(this.userData.email&&this.userData.password){let e=localStorage.getItem(`${this.userData.email}`);JSON.parse(e)?.email==this.userData.email&&JSON.parse(e)?.password==this.userData.password?(this.activeUser=JSON.parse(e).login,this.failAvtorization=!1,this.hiddenModal()):this.failAvtorization=!0}this.userData={login:"",email:"",password:""}}console.log(this.userData)},classActive(){this.isActive=!this.isActive,this.isRegistration=!this.isRegistration},hiddenModal(){this.hidden=!this.hidden}}},C=f,b=s(1001),y=(0,b.Z)(C,v,g,!1,null,null,null),w=y.exports,k={components:{AuthModal:w}},F=k,Z=(0,b.Z)(F,m,d,!1,null,null,null),x=Z.exports,D=s(3816),A=s(5255),S=s(8984),P=function(){var e=this,t=e._self._c;return t(S.Z,{attrs:{dark:"",padless:""}},[t(D.Z,{staticClass:"flex",attrs:{flat:"",tile:""}},[t(A.ZB,{staticClass:"py-2 white--text text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),t("strong",[e._v("Films")]),t(u.Z),e._l(e.icons,(function(s){return t(h.Z,{key:s,staticClass:"mx-4",attrs:{dark:"",icon:""}},[t(c.Z,{attrs:{size:"24px"}},[e._v(" "+e._s(s)+" ")])],1)}))],2)],1)],1)},j=[],$={data(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},M=$,U=(0,b.Z)(M,P,j,!1,null,null,null),N=U.exports,O={name:"App",components:{HeaderProject:x,FooterProject:N},data:()=>({})},R=O,V=(0,b.Z)(R,n,l,!1,null,null,null),E=V.exports,q=s(5464),T=s.n(q);s(8556);a["default"].use(T());const z={};var J=new(T())(z),B=s(8345),H=s(1819),I=s(7894),Y=s(756),L=s(361),W=s(4747),G=function(){var e=this,t=e._self._c;return t(H.Z,{staticClass:"container"},[t(D.Z,{staticClass:"content_filter"},[t(W.Z,[t("button",{staticClass:"hamburger",class:{active:e.burgerMenu},attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.hamburgerMenu.apply(null,arguments)}}},[t("span",{staticClass:"line"}),t("span",{staticClass:"line"}),t("span",{staticClass:"line"})]),e._l(e.tabsName,(function(s,a){return t(Y.Z,{directives:[{name:"show",rawName:"v-show",value:!e.burgerMenu,expression:"!burgerMenu"}],key:s.id,staticClass:"name_filter",class:{active:e.burgerMenu},on:{click:function(t){return e.activeClass(a)}}},[e._v(e._s(s.name)+" ")])})),t("SearchFilms"),e._l(3,(function(s){return t(L.Z,{key:s},[t(H.Z,{staticClass:"container"},1==s?[e.featureFilms.length?t(I.Z,{staticClass:"rows_container"},e._l(e.featureFilms,(function(s){return t("div",{key:s.id,staticClass:"card_container"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card_img"},[t("img",{attrs:{src:e.ima(s.poster_path)}})]),t("router-link",{staticClass:"film_router__link",attrs:{to:{name:"film",params:{id:s.id}}}},[t("h3",{staticClass:"card_title"},[e._v(e._s(s.title))])]),t("span",[e._v("Рейтинг фільма: "+e._s(s.vote_average))]),t("span",[e._v(e._s(s.release_date))])],1)])})),0):e._e()]:2==s?[e.popularityFilms.length?t(I.Z,{staticClass:"rows_container"},e._l(e.popularityFilms,(function(s){return t("div",{key:s.id,staticClass:"card_container"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card_img"},[t("img",{attrs:{src:e.ima(s.poster_path)}})]),t("router-link",{staticClass:"film_router__link",attrs:{to:{name:"film",params:{id:s.id}}}},[t("h3",{staticClass:"card_title"},[e._v(e._s(s.title))])]),t("span",[e._v("Рейтинг фільма: "+e._s(s.vote_average))]),t("span",[e._v(e._s(s.release_date))])],1)])})),0):e._e()]:[e.ruitingFilms.length?t(I.Z,{staticClass:"rows_container"},e._l(e.ruitingFilms,(function(s){return t("div",{key:s.id,staticClass:"card_container"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card_img"},[t("img",{attrs:{src:e.ima(s.poster_path)}})]),t("router-link",{staticClass:"film_router__link",attrs:{to:{name:"film",params:{id:s.id}}}},[t("h3",{staticClass:"card_title"},[e._v(e._s(s.title))])]),t("span",[e._v("Рейтинг фільма: "+e._s(s.vote_average))]),t("span",[e._v(e._s(s.release_date))])],1)])})),0):e._e()],1)],1)}))],2)],1),t("FilmsPagination",{attrs:{tabs:e.tabsName,defPage:e.pageChanged},on:{pageData:e.pageData}})],1)},K=[],Q=s(7024),X=s(8017),ee=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(H.Z,[t(I.Z,{attrs:{justify:"center"}},[t(Q.Z,{attrs:{cols:"8"}},[t(H.Z,{staticClass:"max-width"},[t(X.Z,{staticClass:"pagination",attrs:{circle:"","total-visible":7,length:15},on:{click:function(t){return e.nextPage(t)},change:function(t){return e.nextPage(t)}},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)],1)],1)],1)},te=[],se={props:{tabs:{type:Array},defPage:{type:Boolean}},data(){return{page:1,pagesFilms:[],tabsSettings:[{name:"New",apiUrl:"https://api.themoviedb.org/3/movie/upcoming?api_key=696623e29220dc4a7e31633c86f0dd0d&page="},{name:"Popularity",apiUrl:"https://api.themoviedb.org/3/movie/popular?api_key=696623e29220dc4a7e31633c86f0dd0d&page="},{name:"Ruiting",apiUrl:"https://api.themoviedb.org/3/movie/top_rated?api_key=696623e29220dc4a7e31633c86f0dd0d&language=en&page="}]}},methods:{nextPage(e){console.log(this.tabs),console.log(e.target)},getFilm(e,t){fetch(`${e}${t}`).then((e=>e.json())).then((e=>this.$emit("pageData",e.results))).catch((e=>console.log(e.message)))}},watch:{defPage:function(){this.page=1},page:function(e){this.tabs.forEach(((t,s)=>{"New"==t.name&&t.isActive?this.getFilm(this.tabsSettings[0].apiUrl,e):"Popularity"==t.name&&t.isActive?this.getFilm(this.tabsSettings[1].apiUrl,e):"Ruiting"==t.name&&t.isActive&&this.getFilm(this.tabsSettings[2].apiUrl,e)}))}}},ae=se,ie=(0,b.Z)(ae,ee,te,!1,null,null,null),re=ie.exports,ne=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search_films"},[t("input",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"},{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"header_search",type:"text",placeholder:"Search..."},domProps:{value:e.searchValue},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),t(c.Z,{on:{click:e.isActiveSearch}},[e._v("mdi-magnify")])],1)},le=[],oe={data(){return{searchFilms:[],searchValue:"",isActive:!1}},methods:{isActiveSearch(){this.isActive=!this.isActive},search(){this.$router.push({name:"search",params:{value:this.searchValue}}),this.$emit("searchCuery",this.searchValue),console.log(this.searchValue)}},mounted(){fetch(`https://api.themoviedb.org/3/search/movie?api_key=696623e29220dc4a7e31633c86f0dd0d&query=${this.searchValue}`).then((e=>e.json())).then((e=>this.searchFilms=e.results)).catch((e=>console.log(e.message)))}},ce=oe,ue=(0,b.Z)(ce,ne,le,!1,null,"d2c536f0",null),me=ue.exports,de={components:{FilmsPagination:re,SearchFilms:me},data(){return{activeTab:null,tabsName:[{name:"New",isActive:!0},{name:"Popularity",isActive:!1},{name:"Ruiting",isActive:!1}],burgerMenu:!1,isActive:!0,ruitingFilms:[],popularityFilms:[],featureFilms:[],imagess:"https://image.tmdb.org/t/p/w300",currentFilmPage:[],pageChanged:!1}},methods:{hamburgerMenu(){this.burgerMenu=!this.burgerMenu},activeClass(e){this.pageChanged=!this.pageChanged,this.tabsName.forEach(((t,s)=>{t.isActive=e===s}))},pageData(e){this.tabsName.forEach(((t,s)=>{t.isActive&&"New"==t.name?this.featureFilms=e:t.isActive&&"Popularity"==t.name?this.popularityFilms=e:(this.ruitingFilms=e,console.log(this.ruitingFilms))})),console.log("cgesdf",e)},ima(e){return this.imagess+e},show(){console.log(this.popularityFilms)}},mounted(){fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=696623e29220dc4a7e31633c86f0dd0d").then((e=>e.json())).then((e=>this.featureFilms=e.results)).catch((e=>console.log(e.message))),fetch("https://api.themoviedb.org/3/movie/popular?api_key=696623e29220dc4a7e31633c86f0dd0d").then((e=>e.json())).then((e=>this.popularityFilms=e.results)).catch((e=>console.log(e.message))),fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=696623e29220dc4a7e31633c86f0dd0d&page=3&language=ru").then((e=>e.json())).then((e=>this.ruitingFilms=e.results)).catch((e=>console.log(e.message)))}},he=de,pe=(0,b.Z)(he,G,K,!1,null,"073d9ab4",null),_e=pe.exports,ve=s(1500),ge=s(249),fe=function(){var e=this,t=e._self._c;return e.oneFilm?t("div",{staticClass:"film_container container"},[t("h2",{staticClass:"film_title"},[e._v(e._s(e.oneFilm.title))]),t("div",{staticClass:"film_content"},[t("div",{staticClass:"film_image"},[t("img",{attrs:{src:e.ima(e.oneFilm.poster_path)}})]),t("div",{staticClass:"film_description"},[t("p",{staticClass:"film_description__text"},[e._v(" Release date:"),t("span",[e._v(e._s(e.oneFilm.release_date))])]),t("p",{staticClass:"film_description__text"},[e._v(" Tagline:"),t("span",[e._v(e._s(e.oneFilm.tagline))])]),t("p",{staticClass:"film_description__text"},[e._v(" Countri:"),t("span",[e._v(e._s(e.oneFilm.production_countries[0].name))])]),t("p",{staticClass:"film_description__text"},[e._v(" Runtime:"),t("span",[e._v(e._s(e.oneFilm.runtime)+"min")])]),t("p",{staticClass:"film_description__text"},[e._v(" Жанр:"),t("span",[e._v(e._s(e.oneFilm.genres[0].name))])]),t("p",{staticClass:"film_description__text"},[e._v(" Budget:"),t("span",[e._v(e._s(e.oneFilm.budget)+"$")])]),t("p",{staticClass:"film_description__text"},[e._v(" Revenue:"),t("span",[e._v(e._s(e.oneFilm.revenue)+"$")])]),t("p",{staticClass:"film_description__text"},[e._v(" Popularity:"),t("span",[e._v(e._s(e.oneFilm.vote_average))])])])]),t("p",{staticClass:"film_text"},[e._v(e._s(e.oneFilm.overview))]),t("div",{staticClass:"film_video__block"},[t("iframe",{staticClass:"film_video",attrs:{src:e.video(),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("h3",{staticClass:"similar_title"},[e._v("Watch similar films")]),e.similarFilms.length?t(ve.Z,{staticClass:"similar_slider slide_pages",attrs:{elevation:"6"}},[t(ge.ZP,{staticClass:"slide_pages__group",attrs:{"active-class":"success","show-arrows":""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.similarFilms,(function(s){return t("div",{key:s.id,staticClass:"card_container__pages"},[t("div",{staticClass:"card_pages"},[t("router-link",{staticClass:"film_router__link__pages",attrs:{to:{name:"film",params:{id:s.id}}}},[t("div",{staticClass:"card_img__pages",on:{click:function(t){return e.show(s.id)}}},[t("img",{attrs:{src:e.ima(s.poster_path)}})])])],1)])})),0)],1):e._e()],1):e._e()},Ce=[],be={data(){return{model:null,oneFilm:null,similarFilms:[],imagess:"https://image.tmdb.org/t/p/w300",filmUrl:"https://www.youtube.com/embed/",id:this.$route.params.id,urlPathVideo:null}},methods:{getSelectedFilm(e){fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=696623e29220dc4a7e31633c86f0dd0d`).then((e=>e.json())).then((e=>this.oneFilm=e)).catch((e=>console.log(e.message))),fetch(`https://api.themoviedb.org/3/movie/${e}/similar?api_key=696623e29220dc4a7e31633c86f0dd0d`).then((e=>e.json())).then((e=>this.similarFilms=e.results)).catch((e=>console.log(e.message))),fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=696623e29220dc4a7e31633c86f0dd0d`).then((e=>e.json())).then((e=>this.urlPathVideo=e.results[0].key)).catch((e=>console.log(e.message)))},show(e){this.getSelectedFilm(e),console.log(this.$route.params.id,this.oneFilm)},video(){return this.filmUrl+this.urlPathVideo},ima(e){return this.imagess+e}},mounted(){this.getSelectedFilm(this.$route.params.id)}},ye=be,we=(0,b.Z)(ye,fe,Ce,!1,null,"c0a5d3aa",null),ke=we.exports,Fe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"error"},[t("div",{staticClass:"error_content"},[t("router-link",{attrs:{to:{name:"main"}}},[t("h2",{staticClass:"error_title"},[e._v("Erro 404")])])],1)])])},Ze=[],xe={},De=xe,Ae=(0,b.Z)(De,Fe,Ze,!1,null,null,null),Se=Ae.exports,Pe=function(){var e=this,t=e._self._c;return t(H.Z,{staticClass:"container"},[t(D.Z,[t(W.Z,[t(Y.Z,{staticClass:"name_filter"},[e._v("searched films ")]),t("SearchFilms",{on:{searchCuery:e.searchCuery}}),e._l(1,(function(a){return t(L.Z,{key:a},[1==a?t(H.Z,{staticClass:"container"},[e.searchFilms.length?t(I.Z,{staticClass:"rows_container"},e._l(e.searchFilms,(function(a){return t("div",{key:a.id,staticClass:"card_container"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card_img"},[a.poster_path?t("img",{attrs:{src:e.ima(a.poster_path)}}):t("img",{attrs:{src:s(1272),alt:"default",height:"295"}})]),t("router-link",{staticClass:"film_router__link",attrs:{to:{name:"film",params:{id:a.id}}}},[t("h3",{staticClass:"card_title"},[e._v(e._s(a.title))])]),t("span",[e._v("Рейтинг фільма: "+e._s(a.vote_average||8))]),t("span",[e._v(e._s(a.release_date))])],1)])})),0):e._e()],1):e._e()],1)}))],2)],1)],1)},je=[],$e={components:{SearchFilms:me},data(){return{searchFilms:[],imagess:"https://image.tmdb.org/t/p/w300"}},methods:{ima(e){return this.imagess+e},getSearchedFilms(e){fetch(`https://api.themoviedb.org/3/search/movie/?api_key=696623e29220dc4a7e31633c86f0dd0d&query=${e}`).then((e=>e.json())).then((e=>this.searchFilms=e.results)).catch((e=>console.log(e.message)))},searchCuery(e){this.getSearchedFilms(e)},show(){console.log(this.searchFilms),console.log(this.$route.params.value)}},mounted(){this.getSearchedFilms(this.$route.params.value)}},Me=$e,Ue=(0,b.Z)(Me,Pe,je,!1,null,"7f6e9d7c",null),Ne=Ue.exports,Oe=new B.Z({mode:"hash",routes:[{path:"/",name:"main",component:_e},{path:"/film/:id",name:"film",component:ke},{path:"/search/:id",name:"search",component:Ne},{path:"*",name:"notFound",component:Se}]});a["default"].use(B.Z),a["default"].config.productionTip=!1,new a["default"]({vuetify:J,router:Oe,render:e=>e(E)}).$mount("#app")},1272:function(e,t,s){e.exports=s.p+"img/default.9b7027d2.jpg"}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,a,i,r){if(!a){var n=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,o=0;o<a.length;o++)(!1&r||n>=r)&&Object.keys(s.O).every((function(e){return s.O[e](a[o])}))?a.splice(o--,1):(l=!1,r<n&&(n=r));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,i,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,n=a[0],l=a[1],o=a[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(o)var u=o(s)}for(t&&t(a);c<n.length;c++)r=n[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},a=self["webpackChunkproject_vue"]=self["webpackChunkproject_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(7700)}));a=s.O(a)})();
//# sourceMappingURL=app.7473a3be.js.map