(function(){"use strict";var t={151:function(t,e,i){var a=i(144),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"},on:{wheel:function(e){return t.checkPosition()}}},[i("Header",{attrs:{isTop:t.isTop,isMovieShown:t.isMovieShown,isSeriesShown:t.isSeriesShown,isSearchShown:t.isSearchShown},on:{"navigation-click":t.setSection,"search-value":t.setSearchValue,"search-display":t.setSearchDisplay}}),i("Hero"),i("MainSection",{attrs:{isMovieShown:t.isMovieShown,isSeriesShown:t.isSeriesShown}}),t.searchValue.length>0&&t.isSearchShown?i("SearchOutput",{attrs:{searchValue:t.searchValue}}):t._e()],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.isTop?"header":"header header-active",attrs:{id:"header"}},[i("div",{staticClass:"header__navigation"},[i("div",{staticClass:"header__navigation__logo"},[t._v("Boolflix")]),i("nav",{staticClass:"header__navigation__nav"},[i("ul",{staticClass:"header__navigation__nav-list"},[i("li",{class:t.isMovieShown&&t.isSeriesShown?"header__navigation__nav-list__item header__navigation__nav-list__item--active":"header__navigation__nav-list__item",on:{click:function(e){return t.$emit("navigation-click","start")}}},[i("button",{staticClass:"nav-btn"},[t._v("Start")])]),i("li",{staticClass:"header__navigation__nav-list__item",on:{click:function(e){return t.$emit("navigation-click","shows")}}},[i("button",{staticClass:"nav-btn"},[t._v("Shows")])]),i("li",{staticClass:"header__navigation__nav-list__item",on:{click:function(e){return t.$emit("navigation-click","movies")}}},[i("button",{staticClass:"nav-btn"},[t._v("Movies")])])])])]),i("div",{staticClass:"header__toolbox"},[t.isSearchShown?i("div",{staticClass:"header__toolbox__search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"header__toolbox__search__input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.handleSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),i("button",{on:{click:t.handleCloseSearch}},[t._v("x")])]):t._e(),i("button",{staticClass:"icon-btn",on:{click:t.handleSearchDisplay}},[i("img",{attrs:{src:t.searchIcon,alt:"search icon"}})]),i("button",{staticClass:"icon-btn"},[i("img",{attrs:{src:t.bellIcon,alt:"bell icon"}})])])])},n=[],l=i.p+"img/search.bf4c0b26.svg",c=i.p+"img/bell.2635a801.svg",d={name:"HeaderComponent",data(){return{searchIcon:l,bellIcon:c,searchValue:""}},props:{isTop:{type:Boolean,required:!0},isMovieShown:{type:Boolean,required:!0},isSeriesShown:{type:Boolean,required:!0},isSearchShown:{type:Boolean,required:!0}},methods:{handleSearchDisplay(){this.$emit("search-display")},handleSearch(){console.log(this.searchValue),this.$emit("search-value",this.searchValue)},handleCloseSearch(){this.$emit("search-display"),this.searchValue=""}}},h=d,u=i(1),_=(0,u.Z)(h,r,n,!1,null,"182ab491",null),v=_.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero",attrs:{id:"hero"}},[i("div",{staticClass:"hero__img"},[i("img",{attrs:{src:t.getPoster(t.mainMovie.backdrop_path,"original"),alt:""}}),i("div",{staticClass:"hero__img-bg"})]),i("div",{staticClass:"hero-new-movie-info"},[i("div",{staticClass:"hero-new-movie-info__netflix-serie"},[i("img",{attrs:{src:t.netflixLogo,alt:"netflix logo"}}),i("h6",[t._v("Show")])]),i("div",{staticClass:"hero-new-movie-info__title"},[i("h1",[t._v(t._s(t.mainMovie.title||t.mainMovie.name))]),i("h6",[t._v(t._s(t.maxTextLength(t.mainMovie.overview,220)))])]),i("div",{staticClass:"hero-new-movie-info__toolbox"},[i("button",{staticClass:"btn main-btn"},[i("img",{attrs:{src:t.playIcon,alt:"play icon"}}),t._v(" Play ")]),i("button",{staticClass:"btn secondary-btn"},[i("img",{attrs:{src:t.infoIcon,alt:"plus icon"}}),t._v(" More Info ")])])])])},g=[],m=i.p+"img/Netflix_Symbol_RGB 1.9146482b.svg",f=i.p+"img/chevron-right.40bd9cd1.svg",C=i.p+"img/info.5154021d.svg",S=i(669),w=i.n(S);const y="api_key=f4a913977d179ebb7a42d0e12e6f64cb";var b={name:"HeroComponent",data(){return{netflixLogo:m,playIcon:f,infoIcon:C,api_key:y,mainMovie:{}}},mounted(){w().get(`https://api.themoviedb.org/3/trending/all/week?${this.api_key}&language=it-IT&region=IT`).then((t=>{this.mainMovie=t.data.results[this.randomInRange(0,t.data.results.length-1)]})).catch((t=>{console.log(t)}))},methods:{getPoster(t="",e="w342"){return`https://image.tmdb.org/t/p/${e}${t}`},randomInRange(t,e){return Math.floor(Math.random()*(e-t+1))+t},maxTextLength(t,e){return t&&t.length>e?t.substring(0,e)+"...":t}}},M=b,k=(0,u.Z)(M,p,g,!1,null,"2be934fc",null),I=k.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-section"},[t.isMovieShown?i("ItemsList",{attrs:{title:"Popular Movies",movieList:t.popularMovies,id:"popMovies1"},on:{handleCardClick:t.takeCardData}}):t._e(),t.isMovieShown&&t.isSeriesShown?i("ItemsList",{attrs:{title:"Tranding Now",movieList:t.trandingNow,id:"tranding2"},on:{handleCardClick:t.takeCardData}}):t._e(),t.isMovieShown?i("ItemsList",{attrs:{title:"Upcoming Movies",movieList:t.upcomingMovies,id:"upcoming3"},on:{handleCardClick:t.takeCardData}}):t._e(),t.isSeriesShown?i("ItemsList",{attrs:{title:"Popular Series",movieList:t.popularSeries,id:"popSeries4"},on:{handleCardClick:t.takeCardData}}):t._e(),t.isMovieShown?i("ItemsList",{attrs:{title:"Top Rated Movies",movieList:t.topRatedMovies,id:"rated5"},on:{handleCardClick:t.takeCardData}}):t._e(),i("DetailedMovie",{attrs:{currentMovieId:t.currentMovieId,currentMovieType:t.currentMovieType,isShown:t.isCardShown},on:{closeWindow:t.closeDetailedWindow}})],1)},x=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"items-list"},[i("div",{staticClass:"items-list__title"},[i("h2",[t._v(t._s(t.title))]),i("img",{attrs:{src:t.moreIcon,alt:""}})]),i("div",{staticClass:"items-list__items"},[i("div",{staticClass:"items-list__cards__nav-btn items-list__cards__nav-btn--prev",on:{click:t.scrollLeft}},[i("img",{attrs:{src:t.caretLeft,alt:""}})]),i("div",{staticClass:"items-list__card-list",attrs:{id:t.id}},t._l(t.movieList,(function(e){var a=e.title,s=e.id,o=e.poster_path,r=e.vote_average,n=e.original_title,l=e.language,c=e.origin_country,d=e.media_type;return i("CardComponent",{key:s+a+n+o,attrs:{id:s,title:a,poster:o,vote_average:r,original_title:n,language:l,origin_country:c,media_type:d},on:{handleCardClick:t.takeCardData}})})),1),i("div",{staticClass:"items-list__cards__nav-btn items-list__cards__nav-btn--next",on:{click:t.scrollRight}},[i("img",{attrs:{src:t.caretRight,alt:""}})])])])},L=[],D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card",attrs:{id:"card"},on:{click:t.passData}},[i("div",{staticClass:"card-img"},[i("img",{attrs:{src:t.getPoster(t.poster,"w342"),alt:""}})]),i("div",{staticClass:"card-info"},[i("div",{staticClass:"card-info-bg"}),i("div",{staticClass:"card-info__text"},[i("h2",{staticClass:"card-info__text-title"},[t._v(t._s(t.title))]),t.isTitlesDifferent()?i("h6",{staticClass:"card-info__text-subtitle"},[t._v(" "+t._s(t.original_title)+" ")]):t._e(),i("div",{staticClass:"card-info__additional"},[i("div",{staticClass:"card-info__text-valutation"},[i("StarsValutation",{attrs:{vote_average:t.vote_average}})],1),i("p",{staticClass:"card-info__additional-lang"},[t._v(t._s(t.getFlagEmoji(t.language)))])])])])])},E=[],q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stars-row"},[t._l(t.fullStars,(function(t){return i("i",{key:t+"full",staticClass:"fa-solid fa-star"})})),t._l(t.emptyStars,(function(t){return i("i",{key:t+"empty",staticClass:"fa-regular fa-star"})})),i("i",{staticClass:"fa-regular fa-star"})],2)},V=[],P={name:"StarsValutation",data(){return{vote:0,fullStars:[],emptyStars:[]}},props:{vote_average:{type:Number,required:!0}},mounted(){this.vote=(this.vote_average/10*5).toFixed(0);for(let t=1;t<=this.vote;t++)this.fullStars.push(t);for(let t=1;t<5-this.vote;t++)this.emptyStars.push(t)}},B=P,O=(0,u.Z)(B,q,V,!1,null,"777a81ec",null),R=O.exports,Z={name:"CardComponent",components:{StarsValutation:R},data(){return{dataToSend:[this.id,this.media_type]}},props:{title:{type:String,required:!0},poster:{type:String,required:!0},vote_average:{type:Number,required:!0},original_title:{type:String,required:!0},language:{type:String,required:!0},origin_country:{type:String,required:!1},id:{type:Number,required:!0},media_type:{type:String,required:!0}},methods:{getPoster(t="",e="w342"){return`https://image.tmdb.org/t/p/${e}${t}`},isTitlesDifferent(){return this.title!=this.original_title},getFlagEmoji(t){"en"===t&&(t="US"),this.origin_country&&(t=this.origin_country);const e=t.toUpperCase().split("").map((t=>127397+t.charCodeAt()));return String.fromCodePoint(...e)},passData(){console.log("passData"),this.$emit("handleCardClick",[this.id,this.media_type])}}},N=Z,W=(0,u.Z)(N,D,E,!1,null,null,null),j=W.exports,H=i.p+"img/chevron-right-thin.ca4c5bc4.svg",F=i.p+"img/caret-right-fill.5fea5094.svg",Y=i.p+"img/caret-left-fill.e3208a28.svg",A={name:"ItemsList",components:{CardComponent:j},data(){return{moreIcon:H,caretRight:F,caretLeft:Y}},props:{title:{type:String,required:!0},movieList:{type:Array,required:!0},id:{type:String,required:!0}},methods:{scrollRight(){let t=document.getElementById(this.id);t.scrollBy({left:320,behavior:"smooth"})},scrollLeft(){let t=document.getElementById(this.id);t.scrollBy({left:-320,behavior:"smooth"})},takeCardData(t){console.log(t),this.$emit("handleCardClick",t)}}},U=A,G=(0,u.Z)(U,$,L,!1,null,"3fb4b8e0",null),Q=G.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShown?i("div",[i("div",{staticClass:"detailed__bg",on:{click:t.closeWindow}}),i("div",{staticClass:"detailed__card"},[i("img",{attrs:{src:t.bgImage,alt:""}}),i("div",{staticClass:"detailed__card-bg"},[i("div",{staticClass:"detailed__card-info"},[i("img",{staticClass:"detailed__card-info-img",attrs:{src:t.getPoster(t.movie.poster_path,"w342"),alt:""}}),i("div",{staticClass:"detailed__card-info__content"},[i("div",{staticClass:"detailed__card-info__content-overline"},t._l(t.movie.genres,(function(e){var a=e.name,s=e.id;return i("p",{key:t.movie.title+s},[t._v(" "+t._s(a)+" ")])})),0),i("h2",{staticClass:"detailed__card-info__content-title"},[t._v(" "+t._s(t.movie.title)+" ")]),i("h6",{staticClass:"detailed__card-info__content-subtitle"},[t._v(" "+t._s(t.movie.tagline)+" ")]),i("div",{staticClass:"detailed__card-info__content-additional"},[i("p",[t._v(t._s(t.setDateToYear(t.movie.release_date)))]),i("p",[t._v(t._s(t.movie.runtime)+" min")]),i("p",{staticClass:"detailed__card-info__content-additional-valutation"},[t._v(" "+t._s(t.movie.vote_average)+" ")])]),i("div",{staticClass:"detailed__card-info__content-overview"},[i("p",[t._v(t._s(t.movie.overview))])]),i("div",{staticClass:"detailed__card-info__content-cast"},t._l(t.cast,(function(e){return i("div",{key:e.credit_id,staticClass:"cast-element"},[e.profile_path?i("div",{staticClass:"cast-element__img"},[i("img",{attrs:{src:t.getPoster(e.profile_path,"w154"),alt:""}})]):t._e(),i("p",{staticClass:"cast-element__name"},[t._v(t._s(e.name))]),i("p",{staticClass:"cast-element__character"},[t._v(t._s(e.character))])])})),0)])])])])]):t._e()},J=[],K={name:"DetailedMovie",data(){return{api_key:y,movie:{},credits:{},bgImage:"",cast:[]}},props:{currentMovieId:{type:Number,required:!0},isShown:{type:Boolean,required:!0},currentMovieType:{type:String,required:!0}},watch:{currentMovieId:function(){this.getMovie()}},methods:{getMovie(){w().get(`https://api.themoviedb.org/3/${this.currentMovieType}/${this.currentMovieId}?${this.api_key}&language=it-IT`).then((t=>{this.movie=t.data,console.log(this.movie),this.getCredit(this.movie.id),this.setBackground()}))},getCredit(t){this.cast=[],w().get(`https://api.themoviedb.org/3/${this.currentMovieType}/${t}/credits?${this.api_key}`).then((t=>{this.credit=t.data,console.log("credit",this.credit);for(let e=0;e<this.credit.cast.length;e++)e<5&&this.cast.push(this.credit.cast[e])}))},getPoster(t="",e="w342"){return`https://image.tmdb.org/t/p/${e}${t}`},setBackground(){this.bgImage=this.getPoster(this.movie.backdrop_path,"w500")},setDateToYear(t=""){return t.split("-")[0]},closeWindow(){this.$emit("closeWindow")}}},X=K,tt=(0,u.Z)(X,z,J,!1,null,"190c9d1e",null),et=tt.exports,it={name:"HeaderComponent",props:{isMovieShown:{type:Boolean,required:!0},isSeriesShown:{type:Boolean,required:!0}},components:{ItemsList:Q,DetailedMovie:et},data(){return{api_key:y,popularMovies:[],trandingNow:[],topRatedMovies:[],upcomingMovies:[],popularSeries:[],isCardShown:!1,currentMovieId:0,currentMovieType:""}},mounted(){this.getElementsList("movie/popular",this.popularMovies,"it-IT"),this.getElementsList("movie/top_rated",this.topRatedMovies,"it-IT"),this.getElementsList("movie/upcoming",this.upcomingMovies,"it-IT"),this.getElementsList("tv/popular",this.popularSeries,"it-IT"),this.getElementsList("trending/all/week",this.trandingNow,"it-IT")},methods:{getItemsList(t){return console.log(t),this.getElementsList(t.api_call,t.elements,t.language),t.elements.splice(0,20),console.log("elements",t.elements),t.elements},getElementsList(t,e,i){w().get(`https://api.themoviedb.org/3/${t}?${this.api_key}&language=${i}&region=IT`).then((t=>{this.results=t.data.results,this.results.forEach((t=>{t.poster_path&&(t.title||t.name)&&e.push({title:t.title||t.name,id:t.id,media_type:t.title?"movie":"tv",poster_path:t.poster_path,vote_average:t.vote_average,original_title:t.original_title?t.original_title:t.original_name,language:t.original_language,origin_country:t.origin_country?t.origin_country[0]:""})}))})).catch((t=>{console.log(t)}))},takeCardData(t){console.log("data",t),this.currentMovieId=t[0],this.currentMovieType=t[1],this.isCardShown=!0,console.log("card shown",this.isCardShown)},closeDetailedWindow(){this.isCardShown=!1}}},at=it,st=(0,u.Z)(at,T,x,!1,null,"1d630ea3",null),ot=st.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search-out__bg"},[i("div",{staticClass:"search-out__additional-controls"}),i("div",{staticClass:"search-out__results"},t._l(t.result,(function(e){var a=e.title,s=e.id,o=e.poster_path,r=e.vote_average,n=e.original_title,l=e.language,c=e.origin_country,d=e.media_type;return i("CardComponent",{key:s+a+n+o,attrs:{id:s,title:a,poster:o,vote_average:r,original_title:n,language:l,origin_country:c,media_type:d},on:{handleCardClick:t.takeCardData}})})),1)]),i("DetailedMovie",{attrs:{currentMovieId:t.currentMovieId,currentMovieType:t.currentMovieType,isShown:t.isCardShown},on:{closeWindow:t.closeDetailedWindow}})],1)},nt=[],lt={name:"SearchOutput",data(){return{reserchQuery:"new york",result:[],api_key:y,isCardShown:!1,currentMovieId:0,currentMovieType:""}},props:{searchValue:{type:String,required:!0}},components:{CardComponent:j,DetailedMovie:et},watch:{searchValue:function(){this.getItems(this.searchValue)}},methods:{getItems(t){this.result=[],w().get(`https://api.themoviedb.org/3/search/multi?${this.api_key}&language=it-IT&query=${t}&page=1&include_adult=false`).then((t=>{t.data.results.forEach((t=>{t.poster_path&&(t.title||t.name)&&this.result.push({title:t.title||t.name,id:t.id,media_type:t.title?"movie":"tv",poster_path:t.poster_path,vote_average:t.vote_average,original_title:t.original_title?t.original_title:t.original_name,language:t.original_language,origin_country:t.origin_country?t.origin_country[0]:""})})),console.log(this.result)})).catch((t=>{console.log(t)}))},takeCardData(t){console.log("data",t),this.currentMovieId=t[0],this.currentMovieType=t[1],this.isCardShown=!0,console.log("card shown",this.isCardShown)},closeDetailedWindow(){this.isCardShown=!1}}},ct=lt,dt=(0,u.Z)(ct,rt,nt,!1,null,"2bc07bc0",null),ht=dt.exports,ut={name:"App",data(){return{isTop:!0,isMovieShown:!0,isSeriesShown:!0,searchValue:"",isSearchShown:!1}},components:{Header:v,Hero:I,MainSection:ot,SearchOutput:ht},methods:{checkPosition(){window.pageYOffset>0||window.scrollY>0?this.isTop=!1:this.isTop=!0},setSection(t){"start"===t?(this.isMovieShown=!0,this.isSeriesShown=!0):"movies"===t?(this.isMovieShown=!0,this.isSeriesShown=!1):"shows"===t&&(this.isMovieShown=!1,this.isSeriesShown=!0)},setSearchValue(t){this.searchValue=t},setSearchDisplay(){this.isSearchShown=!this.isSearchShown}},mounted(){window.addEventListener("scroll",this.checkPosition),this.checkPosition()}},_t=ut,vt=(0,u.Z)(_t,s,o,!1,null,null,null),pt=vt.exports;a.Z.config.productionTip=!1,new a.Z({render:t=>t(pt)}).$mount("#app")}},e={};function i(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,a,s,o){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],o=t[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(n=!1,o<r&&(r=o));if(n){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,s,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/vue-boolflix/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,r=a[0],n=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(l)var d=l(i)}for(e&&e(a);c<r.length;c++)o=r[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(d)},a=self["webpackChunkvue_boolfix"]=self["webpackChunkvue_boolfix"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(151)}));a=i.O(a)})();
//# sourceMappingURL=app.f9a7fb02.js.map