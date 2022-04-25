(function(){"use strict";var e={59:function(e,t,i){var a=i(144),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"},on:{wheel:function(t){return e.checkPosition()}}},[i("Header",{attrs:{isTop:e.isTop,isMovieShown:e.isMovieShown,isSeriesShown:e.isSeriesShown,isSearchShown:e.isSearchShown},on:{"navigation-click":e.setSection,"search-value":e.setSearchValue,"search-display":e.setSearchDisplay}}),i("Hero"),i("MainSection",{attrs:{isMovieShown:e.isMovieShown,isSeriesShown:e.isSeriesShown}}),e.searchValue.length>0&&e.isSearchShown?i("SearchOutput",{attrs:{searchValue:e.searchValue}}):e._e()],1)},o=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:!e.isTop||e.searchValue.length>0?"header header-active":"header",attrs:{id:"header"}},[i("div",{staticClass:"header__navigation"},[i("div",{staticClass:"header__navigation__logo"},[e._v("Boolflix")]),i("div",{staticClass:"header__navigation__logo header__navigation__logo-short"},[e._v(" B ")]),i("nav",{staticClass:"header__navigation__nav"},[i("ul",{staticClass:"header__navigation__nav-list"},[0===e.searchValue.length?i("li",{class:e.isMovieShown&&e.isSeriesShown?"header__navigation__nav-list__item header__navigation__nav-list__item-active":"header__navigation__nav-list__item",on:{click:function(t){return e.$emit("navigation-click","start")}}},[i("button",{staticClass:"nav-btn"},[e._v("Home")])]):e._e(),0===e.searchValue.length?i("li",{class:e.isSeriesShown&&!e.isMovieShown?"header__navigation__nav-list__item header__navigation__nav-list__item-active":"header__navigation__nav-list__item",on:{click:function(t){return e.$emit("navigation-click","shows")}}},[i("button",{staticClass:"nav-btn"},[e._v("Series")])]):e._e(),0===e.searchValue.length?i("li",{class:e.isMovieShown&&!e.isSeriesShown?"header__navigation__nav-list__item header__navigation__nav-list__item-active":"header__navigation__nav-list__item",on:{click:function(t){return e.$emit("navigation-click","movies")}}},[i("button",{staticClass:"nav-btn"},[e._v("Movies")])]):e._e()])])]),i("div",{staticClass:"header__toolbox"},[e.isSearchShown?i("div",{staticClass:"header__toolbox__search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"header__toolbox__search__input",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)},keyup:e.handleSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),i("button",{staticClass:"icon-btn",on:{click:e.handleCloseSearch}},[i("img",{attrs:{src:e.closeIcon,alt:"close icon"}})])]):e._e(),i("button",{staticClass:"icon-btn search-icon",on:{click:e.handleSearchDisplay}},[i("img",{attrs:{src:e.searchIcon,alt:"search icon"}})]),i("button",{staticClass:"icon-btn bell-icon"},[i("img",{attrs:{src:e.bellIcon,alt:"bell icon"}})])])])},r=[],l=i.p+"img/search.bf4c0b26.svg",c=i.p+"img/bell.2635a801.svg",d=i.p+"img/x-circle-fill.99ea6f6f.svg",h={name:"HeaderComponent",data(){return{searchIcon:l,bellIcon:c,closeIcon:d,searchValue:""}},props:{isTop:{type:Boolean,required:!0},isMovieShown:{type:Boolean,required:!0},isSeriesShown:{type:Boolean,required:!0},isSearchShown:{type:Boolean,required:!0}},methods:{handleSearchDisplay(){this.$emit("search-display")},handleSearch(){this.$emit("search-value",this.searchValue)},handleCloseSearch(){this.$emit("search-display"),this.searchValue=""}}},u=h,v=i(1),_=(0,v.Z)(u,n,r,!1,null,"472fda98",null),g=_.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hero",attrs:{id:"hero"}},[i("div",{staticClass:"hero__img"},[i("img",{attrs:{src:e.getPoster(e.mainMovie.backdrop_path,"original"),alt:""}}),i("div",{staticClass:"hero__img-bg"})]),i("div",{staticClass:"hero-new-movie-info"},[i("div",{staticClass:"hero-new-movie-info__netflix-serie"},[i("img",{attrs:{src:e.netflixLogo,alt:"netflix logo"}}),i("h6",[e._v("Show")])]),i("div",{staticClass:"hero-new-movie-info__title"},[i("h1",[e._v(e._s(e.mainMovie.title||e.mainMovie.name))]),i("h6",[e._v(e._s(e.maxTextLength(e.mainMovie.overview,220)))])]),i("div",{staticClass:"hero-new-movie-info__toolbox"},[i("button",{staticClass:"btn main-btn"},[i("img",{attrs:{src:e.playIcon,alt:"play icon"}}),e._v(" Play ")]),i("button",{staticClass:"btn secondary-btn",on:{click:function(t){e.isCardShown=!e.isCardShown}}},[i("img",{attrs:{src:e.infoIcon,alt:"plus icon"}}),e._v(" More Info ")])])]),i("DetailedMovie",{attrs:{currentMovieId:e.currentMovieId,currentMovieType:e.currentMovieType,isShown:e.isCardShown,selectedLanguage:e.selectedLanguage},on:{closeWindow:e.closeDetailedWindow}})],1)},p=[],y=i.p+"img/Netflix_Symbol_RGB 1.9146482b.svg",f=i.p+"img/chevron-right.40bd9cd1.svg",S=i.p+"img/info.5154021d.svg",C=i(669),w=i.n(C);const k="f4a913977d179ebb7a42d0e12e6f64cb";var b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isShown?i("div",[i("div",{staticClass:"detailed__bg",on:{click:e.closeWindow}}),i("div",{staticClass:"detailed__card"},[i("img",{attrs:{src:e.bgImage,alt:""}}),i("div",{staticClass:"detailed__card-bg"},[i("div",{staticClass:"detailed__close-btn"},[i("button",{staticClass:"icon-btn",on:{click:e.closeWindow}},[i("img",{attrs:{src:e.closeIcon,alt:""}})])]),i("div",{staticClass:"detailed__card-info"},[i("img",{staticClass:"detailed__card-info-img",attrs:{src:e.getPoster(e.movie.poster_path,"w342"),alt:""}}),i("div",{staticClass:"detailed__card-info__content"},[i("div",{staticClass:"detailed__card-info__content-overline"},e._l(e.movie.genres,(function(t){var a=t.name,s=t.id;return i("p",{key:e.movie.title+s},[e._v(" "+e._s(a)+" ")])})),0),i("h2",{staticClass:"detailed__card-info__content-title"},[e._v(" "+e._s(e.movie.title?e.movie.title:e.movie.original_title)+" ")]),i("h6",{staticClass:"detailed__card-info__content-subtitle"},[e._v(" "+e._s(e.movie.tagline)+" ")]),i("div",{staticClass:"detailed__card-info__container"},[i("div",{staticClass:"detailed__card-info__content-additional"},[i("p",[e._v(e._s(e.setDateToYear(e.movie.release_date)))]),e.movie.runtime?i("p",[e._v(e._s(e.movie.runtime)+" min")]):e._e(),e.movie.number_of_seasons?i("p",[e._v(" "+e._s(e.movie.number_of_seasons)+" season"+e._s(e.movie.number_of_seasons>1?"s":"")+" ")]):e._e(),e.movie.vote_average?i("p",{staticClass:"detailed__card-info__content-additional-valutation"},[e._v(" "+e._s(e.movie.vote_average)+" ")]):e._e()]),i("div",[e.recommendation.length>0?i("button",{staticClass:"btn secondary-btn",on:{click:e.handleRecommendationClick}},[e._v(" "+e._s(e.isRecomenationShown?"Hide similar":"See similar")+" ")]):e._e()])]),e.isRecomenationShown?e._e():i("div",{staticClass:"detailed__card-info__content-overview"},[i("p",[e._v(e._s(e.movie.overview))])]),e.isRecomenationShown?e._e():i("div",{staticClass:"detailed__card-info__content-cast"},e._l(e.cast,(function(t){return i("div",{key:t.credit_id,staticClass:"cast-element"},[i("div",{staticClass:"cast-element__img"},[i("img",{attrs:{src:e.getPoster(t.profile_path,"w154"),alt:""}})]),i("p",{staticClass:"cast-element__name"},[e._v(e._s(t.name))]),i("p",{staticClass:"cast-element__character"},[e._v(e._s(t.character))])])})),0),e.isRecomenationShown?i("div",{staticClass:"detailed__card-info__content-recommendations",attrs:{id:"recommendations"},on:{wheel:function(t){return e.handleRecommendationScroll(t)}}},e._l(e.recommendation,(function(t){var a=t.title,s=t.id,o=t.poster_path,n=t.vote_average,r=t.original_title,l=t.language,c=t.origin_country,d=t.media_type;return i("CardComponent",{key:s+a+r+o,attrs:{id:s,title:a,poster:o,vote_average:n,original_title:r,language:l,origin_country:c,media_type:d},on:{handleCardClick:e.openNewDetailedCard}})})),1):e._e()])])])])]):e._e()},M=[],I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card",attrs:{id:"card"},on:{click:e.passData}},[i("div",{staticClass:"card-img"},[i("img",{attrs:{src:e.getPoster(e.poster,"w342"),alt:""}})]),i("div",{staticClass:"card-info"},[i("div",{staticClass:"card-info-bg"}),i("div",{staticClass:"card-info__text"},[i("h2",{staticClass:"card-info__text-title"},[e._v(e._s(e.title))]),e.isTitlesDifferent()?i("h6",{staticClass:"card-info__text-subtitle"},[e._v(" "+e._s(e.original_title)+" ")]):e._e(),i("div",{staticClass:"card-info__additional"},[i("div",{staticClass:"card-info__text-valutation"},[i("StarsValutation",{attrs:{vote_average:e.vote_average}})],1),i("p",{staticClass:"card-info__additional-lang"},[e._v(e._s(e.getFlagEmoji(e.language)))])])])])])},T=[],L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"stars-row"},[e._l(e.fullStars,(function(e){return i("i",{key:e+"full",staticClass:"fa-solid fa-star"})})),e._l(e.emptyStars,(function(e){return i("i",{key:e+"empty",staticClass:"fa-regular fa-star"})})),i("i",{staticClass:"fa-regular fa-star"})],2)},D=[],x={name:"StarsValutation",data(){return{vote:0,fullStars:[],emptyStars:[]}},props:{vote_average:{type:Number,required:!0}},mounted(){this.vote=(this.vote_average/10*5).toFixed(0);for(let e=1;e<=this.vote;e++)this.fullStars.push(e);for(let e=1;e<5-this.vote;e++)this.emptyStars.push(e)}},$=x,E=(0,v.Z)($,L,D,!1,null,"777a81ec",null),R=E.exports,P={name:"CardComponent",components:{StarsValutation:R},data(){return{dataToSend:[this.id,this.media_type]}},props:{title:{type:String,required:!0},poster:{type:String,required:!0},vote_average:{type:Number,required:!0},original_title:{type:String,required:!0},language:{type:String,required:!0},origin_country:{type:String,required:!1},id:{type:Number,required:!0},media_type:{type:String,required:!0}},methods:{getPoster(e="",t="w342"){return`https://image.tmdb.org/t/p/${t}${e}`},isTitlesDifferent(){return this.title!=this.original_title},getFlagEmoji(e){"en"===e&&(e="US"),this.origin_country&&(e=this.origin_country);const t=e.toUpperCase().split("").map((e=>127397+e.charCodeAt()));return String.fromCodePoint(...t)},passData(){this.$emit("handleCardClick",[this.id,this.media_type])}}},V=P,q=(0,v.Z)(V,I,T,!1,null,null,null),B=q.exports,O={name:"DetailedMovie",data(){return{api_key:k,movie:{},credits:{},bgImage:"",cast:[],recommendation:[],isRecomenationShown:!1,recommendationIds:[],closeIcon:d,movieId:0,movieType:""}},components:{CardComponent:B},props:{currentMovieId:{type:Number,required:!0},isShown:{type:Boolean,required:!0},currentMovieType:{type:String,required:!0},selectedLanguage:{type:String}},watch:{currentMovieId:function(){this.movieId=this.currentMovieId,this.movieType=this.currentMovieType},movieId:function(){this.getMovie()}},methods:{getMovie(){w().get(`https://api.themoviedb.org/3/${this.movieType}/${this.movieId}?api_key=${this.api_key}&language=${this.selectedLanguage}`).then((e=>{this.movie.title=e.data.title?e.data.title:e.data.name,this.movie.poster_path=e.data.poster_path,this.movie.tagline=e.data.tagline,this.movie.release_date=e.data.release_date?e.data.release_date:e.data.first_air_date,this.movie.runtime=e.data.runtime?e.data.runtime:"",this.movie.vote_average=e.data.vote_average,this.movie.number_of_seasons=e.data.number_of_seasons?e.data.number_of_seasons:null,this.movie.overview=e.data.overview,this.movie.genres=e.data.genres,this.bgImage=this.getPoster(e.data.backdrop_path,"original"),this.movie.id=e.data.id,this.getRecommendations(),this.getCredit(this.movie.id)})).catch((e=>{console.log(e)}))},getCredit(e){this.cast=[],w().get(`https://api.themoviedb.org/3/${this.movieType}/${e}/credits?api_key=${this.api_key}`).then((e=>{this.credit=e.data;for(let t=0;t<this.credit.cast.length;t++)t<5&&this.credit.cast[t].profile_path&&this.cast.push(this.credit.cast[t])}))},getPoster(e="",t="w342"){return`https://image.tmdb.org/t/p/${t}${e}`},setBackground(){this.bgImage=this.getPoster(this.movie.backdrop_path,"w500")},setDateToYear(e=""){return e.split("-")[0]},closeWindow(){this.isRecomenationShown=!1,this.$emit("closeWindow")},handleRecommendationClick(){this.isRecomenationShown=!this.isRecomenationShown,this.getRecommendations()},getRecommendations(){this.recommendation=[];let e={api_key:this.api_key,language:this.selectedLanguage,page:1},t=[];w().get(`https://api.themoviedb.org/3/movie/${this.movie.id}/recommendations`,{params:e}).then((e=>{t=e.data.results.slice(0,15),this.filterData(t,this.recommendation)})).catch((e=>{console.log(e)}))},openNewDetailedCard(e){this.isRecomenationShown=!1;const[t,i]=e;this.movieId=t,this.movieType=i},handleRecommendationScroll(e){e.preventDefault();const t=document.querySelector("#recommendations");t.scrollBy({left:2*-e.wheelDeltaY,behavior:"smooth"})},filterData(e,t){e.forEach((e=>{e.poster_path&&(e.title||e.name)&&t.push({title:e.title||e.name,id:e.id,media_type:e.title?"movie":"tv",poster_path:e.poster_path,vote_average:e.vote_average,original_title:e.original_title?e.original_title:e.original_name,language:e.original_language,origin_country:e.origin_country?e.origin_country[0]:""})}))}}},U=O,A=(0,v.Z)(U,b,M,!1,null,"551297d6",null),N=A.exports,G={name:"HeroComponent",components:{DetailedMovie:N},data(){return{netflixLogo:y,playIcon:f,infoIcon:S,api_key:k,mainMovie:{},currentMovieId:"",currentMovieType:"",selectedLanguage:"it",isCardShown:!1}},mounted(){w().get(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.api_key}&language=it-IT&region=IT`).then((e=>{this.mainMovie=e.data.results[this.randomInRange(0,e.data.results.length-1)],this.currentMovieId=this.mainMovie.id,this.currentMovieType=this.mainMovie.media_type?this.mainMovie.media_type:"tv"})).catch((e=>{console.log(e)}))},methods:{getPoster(e="",t="w342"){return`https://image.tmdb.org/t/p/${t}${e}`},randomInRange(e,t){return Math.floor(Math.random()*(t-e+1))+e},maxTextLength(e,t){return e&&e.length>t?e.substring(0,t)+"...":e},closeDetailedWindow(){this.isCardShown=!1}}},W=G,Z=(0,v.Z)(W,m,p,!1,null,"42a898b6",null),H=Z.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-section"},[e.isMovieShown?i("ItemsList",{attrs:{title:"Popular Movies",movieList:e.popularMovies,id:"popMovies1"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Discover Series",movieList:e.discoverTv,id:"discoverTv2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Cartoons Movies",movieList:e.cartoons,id:"cartoons"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Cartoons Series",movieList:e.cartoonsTv,id:"cartoonsTv"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Discover Italian Series",movieList:e.discoverItalianTv,id:"discoverItalianTv2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Horror Night",movieList:e.horrorMovies,id:"horrorMovies2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown&&e.isSeriesShown?i("ItemsList",{attrs:{title:"Tranding Now",movieList:e.trandingNow,id:"tranding2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Discover Ukrainian Series",movieList:e.discoverUkrainianTv,id:"discoverUkrainianTv2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Upcoming Movies in Italy",movieList:e.upcomingMovies,id:"upcoming3"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Upcoming Movies in USA",movieList:e.upcomingMoviesUSA,id:"upcomingUSA3"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Documentries",movieList:e.documentary,id:"documentary2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"It's Crime Time",movieList:e.crimeMovie,id:"crimeMovie5"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Top Rated Movies",movieList:e.topRatedMovies,id:"rated5"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Popular Series",movieList:e.popularSeries,id:"popSeries4"},on:{handleCardClick:e.takeCardData}}):e._e(),i("DetailedMovie",{attrs:{currentMovieId:e.currentMovieId,currentMovieType:e.currentMovieType,isShown:e.isCardShown,selectedLanguage:e.language},on:{closeWindow:e.closeDetailedWindow}})],1)},Y=[],F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"items-list"},[i("div",{staticClass:"items-list__title"},[i("h2",[e._v(e._s(e.title))]),i("img",{attrs:{src:e.moreIcon,alt:""}})]),i("div",{staticClass:"items-list__items"},[i("button",{staticClass:"items-list__cards__nav-btn items-list__cards__nav-btn--prev",on:{click:e.scrollLeft,touchend:e.scrollLeft}},[i("img",{attrs:{src:e.caretLeft,alt:""}})]),i("div",{staticClass:"items-list__card-list",attrs:{id:e.id}},e._l(e.movieList,(function(t){var a=t.title,s=t.id,o=t.poster_path,n=t.vote_average,r=t.original_title,l=t.language,c=t.origin_country,d=t.media_type;return i("CardComponent",{key:s+a+r+o,attrs:{id:s,title:a,poster:o,vote_average:n,original_title:r,language:l,origin_country:c,media_type:d},on:{handleCardClick:e.takeCardData}})})),1),i("button",{staticClass:"items-list__cards__nav-btn items-list__cards__nav-btn--next",on:{click:e.scrollRight,touchend:e.scrollRight}},[i("img",{attrs:{src:e.caretRight,alt:""}})])])])},Q=[],z=i.p+"img/chevron-right-thin.ca4c5bc4.svg",J=i.p+"img/caret-right-fill.5fea5094.svg",K=i.p+"img/caret-left-fill.e3208a28.svg",X={name:"ItemsList",components:{CardComponent:B},data(){return{moreIcon:z,caretRight:J,caretLeft:K}},props:{title:{type:String,required:!0},movieList:{type:Array,required:!0},id:{type:String,required:!0}},methods:{scrollRight(){let e=document.getElementById(this.id);e.scrollBy({left:320,behavior:"smooth"})},scrollLeft(){let e=document.getElementById(this.id);e.scrollBy({left:-320,behavior:"smooth"})},takeCardData(e){this.$emit("handleCardClick",e)}}},ee=X,te=(0,v.Z)(ee,F,Q,!1,null,"0d6f9976",null),ie=te.exports,ae={name:"HeaderComponent",props:{isMovieShown:{type:Boolean,required:!0},isSeriesShown:{type:Boolean,required:!0}},components:{ItemsList:ie,DetailedMovie:N},data(){return{api_key:k,popularMovies:[],trandingNow:[],topRatedMovies:[],upcomingMovies:[],upcomingMoviesUSA:[],popularSeries:[],discoverTv:[],discoverItalianTv:[],discoverUkrainianTv:[],cartoons:[],cartoonsTv:[],crimeMovie:[],documentary:[],horrorMovies:[],currentMovieId:0,currentMovieType:"",language:"it-IT",isCardShown:!1}},mounted(){this.getElementsList("movie/popular",this.popularMovies,{api_key:k,language:this.language,region:"IT"}),this.getElementsList("movie/top_rated",this.topRatedMovies,{api_key:k,language:this.language,region:"IT"}),this.getElementsList("movie/upcoming",this.upcomingMovies,{api_key:k,language:this.language,region:"IT"}),this.getElementsList("movie/upcoming",this.upcomingMoviesUSA,{api_key:k,language:this.language,region:"US"}),this.getElementsList("tv/popular",this.popularSeries,{api_key:k,language:this.language,region:"US"}),this.getElementsList("trending/all/week",this.trandingNow,{api_key:k,language:this.language,region:"IT"}),this.getElementsList("discover/tv",this.discoverTv,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"18",with_networks:"213"}),this.getElementsList("discover/tv",this.discoverItalianTv,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"18",with_networks:"213",with_original_language:"it"}),this.getElementsList("discover/movie",this.cartoons,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"16"}),this.getElementsList("discover/tv",this.cartoonsTv,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"16"}),this.getElementsList("discover/movie",this.crimeMovie,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"80",with_networks:"213"}),this.getElementsList("discover/tv",this.documentary,{api_key:k,language:this.language,watch_region:"US",sort_by:"popularity.desc",with_genres:"99",with_networks:"213"}),this.getElementsList("discover/movie",this.horrorMovies,{api_key:k,language:this.language,watch_region:"US",sort_by:"popularity.desc",with_genres:"27",with_networks:"213"}),this.getElementsList("discover/tv",this.discoverUkrainianTv,{api_key:k,sort_by:"popularity.desc",with_original_language:"uk"})},methods:{getElementsList(e,t,i){w().get(`https://api.themoviedb.org/3/${e}`,{params:i}).then((e=>{this.results=e.data.results,this.filterData(this.results,t)})).catch((e=>{console.log(e)}))},filterData(e,t){e.forEach((e=>{e.poster_path&&(e.title||e.name)&&t.push({title:e.title||e.name,id:e.id,media_type:e.title?"movie":"tv",poster_path:e.poster_path,vote_average:e.vote_average,original_title:e.original_title?e.original_title:e.original_name,language:e.original_language,origin_country:e.origin_country?e.origin_country[0]:""})}))},takeCardData(e){this.currentMovieId=e[0],this.currentMovieType=e[1],this.isCardShown=!0},closeDetailedWindow(){this.isCardShown=!1}}},se=ae,oe=(0,v.Z)(se,j,Y,!1,null,"3bfd38e0",null),ne=oe.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"search-out__bg",attrs:{id:"searchOutput"},on:{wheel:function(t){return e.handleScroll(t)}}},[i("div",{staticClass:"search-out__additional-controls"},[i("div",{staticClass:"select-box"},[i("label",{attrs:{for:"type"}},[e._v("Scegli per tipo")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.searchBy,expression:"searchBy"}],staticClass:"type_select",attrs:{name:"type",id:"type"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.searchBy=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"multi"}},[e._v("All")]),i("option",{attrs:{value:"movie"}},[e._v("Movie")]),i("option",{attrs:{value:"tv"}},[e._v("Show")])])]),i("div",{staticClass:"select-box"},[i("label",{attrs:{for:"genre"}},[e._v("Scegli per genere")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedGenre,expression:"selectedGenre"}],staticClass:"type_select",attrs:{name:"genre",id:"selectGenre"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedGenre=t.target.multiple?i:i[0]}}},e._l(e.genres,(function(t){var a=t.name,s=t.id;return i("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(a)+" ")])})),0)]),i("div",{staticClass:"select-box"},[i("label",{attrs:{for:"language"}},[e._v("Scegli lingua")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectLanguage,expression:"selectLanguage"}],staticClass:"type_select",attrs:{name:"language",id:"language"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectLanguage=t.target.multiple?i:i[0]}}},e._l(e.languages,(function(t){var a=t.name,s=t.id;return i("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(a)+" ")])})),0)])]),i("div",{staticClass:"search-out__results"},[e._l(e.result,(function(t){var a=t.title,s=t.id,o=t.poster_path,n=t.vote_average,r=t.original_title,l=t.language,c=t.origin_country,d=t.media_type;return i("CardComponent",{key:s+a+r+o,attrs:{id:s,title:a,poster:o,vote_average:n,original_title:r,language:l,origin_country:c,media_type:d},on:{handleCardClick:e.takeCardData}})})),0===e.result.length?i("h2",[e._v("Nessun risultato trovato")]):e._e(),e.isMorePageAviable?i("div",{staticClass:"search-out__results__more-btn"},[i("button",{staticClass:"btn secondary-btn",on:{click:e.getMoreResults}},[e._v(" Mostra altri risultati ")])]):e._e()],2)]),i("DetailedMovie",{attrs:{currentMovieId:e.currentMovieId,currentMovieType:e.currentMovieType,isShown:e.isCardShown,selectedLanguage:e.selectLanguage},on:{closeWindow:e.closeDetailedWindow}})],1)},le=[],ce={name:"SearchOutput",data(){return{reserchQuery:"new york",result:[],api_key:k,isCardShown:!1,currentMovieId:0,currentMovieType:"",searchBy:"multi",genres:[{name:"All",id:"multi"}],selectedGenre:"multi",selectLanguage:"it",languages:[],pagesToDisplay:1,displayedItemsIds:[],isMorePageAviable:!0}},props:{searchValue:{type:String,required:!0}},components:{CardComponent:B,DetailedMovie:N},watch:{searchValue:function(){this.startSearch()},searchBy:function(){this.startSearch()},selectedGenre:function(){this.startSearch()},selectLanguage:function(){this.startSearch()}},mounted(){this.startSearch(),this.getLanguages(),this.getGenres()},methods:{startSearch(){this.displayedItemsIds=[],this.pagesToDisplay=1,this.result=[],this.getItems(this.searchValue,this.pagesToDisplay,!1)},getItems(e="",t=1,i=!1){if(t<=20||!i){let i={api_key:this.api_key,language:this.selectLanguage,query:e,page:t,include_adult:!1,region:"IT",sort_by:"popularity.desc",genre:this.selectedGenre};w().get(`https://api.themoviedb.org/3/search/${this.searchBy}?`,{params:i}).then((e=>{let t=[];"multi"!==this.selectedGenre?e.data.results.forEach((e=>{e.genre_ids.includes(this.selectedGenre)&&t.push(e)})):t=e.data.results,t.forEach((e=>{this.displayedItemsIds.includes(e.id)||e.poster_path&&(e.title||e.name)&&(this.result.push({title:e.title||e.name,id:e.id,media_type:e.title?"movie":"tv",poster_path:e.poster_path,vote_average:e.vote_average,original_title:e.original_title?e.original_title:e.original_name,language:e.original_language,origin_country:e.origin_country?e.origin_country[0]:""}),this.displayedItemsIds.push(e.id))})),e.data.results<20*this.pagesToDisplay?this.isMorePageAviable=!1:this.isMorePageAviable=!0})).catch((e=>{console.log(e)})),"multi"!==this.selectedGenre&&this.result.length<=5&&this.getItems(this.searchValue,t+1,!0)}},getGenres(){w().get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=it-IT`).then((e=>{e.data.genres.forEach((e=>{this.genres.push({id:e.id,name:e.name})}))})).catch((e=>{console.log(e)}))},getLanguages(){w().get(`https://api.themoviedb.org/3/configuration/languages?api_key=${this.api_key}`).then((e=>{e.data.forEach((e=>{this.languages.push({id:e.iso_639_1,name:e.english_name})})),this.languages.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0))})).catch((e=>{console.log(e)}))},getMoreResults(){this.pagesToDisplay+=1,this.getItems(this.searchValue,this.pagesToDisplay)},takeCardData(e){this.currentMovieId=e[0],this.currentMovieType=e[1],this.isCardShown=!0},closeDetailedWindow(){this.isCardShown=!1},handleScroll(e){e.preventDefault();const t=document.querySelector("#searchOutput");t.scrollBy({top:2*-e.wheelDeltaY,behavior:"smooth"})}}},de=ce,he=(0,v.Z)(de,re,le,!1,null,"6c598544",null),ue=he.exports,ve={name:"App",data(){return{isTop:!0,isMovieShown:!0,isSeriesShown:!0,searchValue:"",isSearchShown:!1}},components:{Header:g,Hero:H,MainSection:ne,SearchOutput:ue},methods:{checkPosition(){window.pageYOffset>0||window.scrollY>0?this.isTop=!1:this.isTop=!0},setSection(e){"start"===e?(this.isMovieShown=!0,this.isSeriesShown=!0):"movies"===e?(this.isMovieShown=!0,this.isSeriesShown=!1):"shows"===e&&(this.isMovieShown=!1,this.isSeriesShown=!0)},setSearchValue(e){this.searchValue=e},setSearchDisplay(){this.isSearchShown=!this.isSearchShown}},mounted(){window.addEventListener("scroll",this.checkPosition),this.checkPosition()}},_e=ve,ge=(0,v.Z)(_e,s,o,!1,null,null,null),me=ge.exports;a.Z.config.productionTip=!1,new a.Z({render:e=>e(me)}).$mount("#app")}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,o){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],o=e[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&o||n>=o)&&Object.keys(i.O).every((function(e){return i.O[e](a[l])}))?a.splice(l--,1):(r=!1,o<n&&(n=o));if(r){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,s,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/vue-boolflix/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,n=a[0],r=a[1],l=a[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(l)var d=l(i)}for(t&&t(a);c<n.length;c++)o=n[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},a=self["webpackChunkvue_boolfix"]=self["webpackChunkvue_boolfix"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(59)}));a=i.O(a)})();
//# sourceMappingURL=app.eeb1ced6.js.map