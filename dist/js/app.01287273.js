(function(){"use strict";var e={426:function(e,t,i){var a=i(144),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"},on:{wheel:function(t){return e.checkPosition()}}},[i("Header",{attrs:{isTop:e.isTop,isMovieShown:e.isMovieShown,isSeriesShown:e.isSeriesShown,isSearchShown:e.isSearchShown},on:{"navigation-click":e.setSection,"search-value":e.setSearchValue,"search-display":e.setSearchDisplay}}),i("Hero"),i("MainSection",{attrs:{isMovieShown:e.isMovieShown,isSeriesShown:e.isSeriesShown}}),e.searchValue.length>0&&e.isSearchShown?i("SearchOutput",{attrs:{searchValue:e.searchValue}}):e._e()],1)},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:!e.isTop||e.searchValue.length>0?"header header-active":"header",attrs:{id:"header"}},[i("div",{staticClass:"header__navigation"},[i("div",{staticClass:"header__navigation__logo"},[e._v("Boolflix")]),i("div",{staticClass:"header__navigation__logo header__navigation__logo-short"},[e._v(" B ")]),i("nav",{staticClass:"header__navigation__nav"},[i("ul",{staticClass:"header__navigation__nav-list"},[0===e.searchValue.length?i("li",{class:e.isMovieShown&&e.isSeriesShown?"header__navigation__nav-list__item header__navigation__nav-list__item-active":"header__navigation__nav-list__item",on:{click:function(t){return e.$emit("navigation-click","start")}}},[i("button",{staticClass:"nav-btn"},[e._v("Home")])]):e._e(),0===e.searchValue.length?i("li",{class:e.isSeriesShown&&!e.isMovieShown?"header__navigation__nav-list__item header__navigation__nav-list__item-active":"header__navigation__nav-list__item",on:{click:function(t){return e.$emit("navigation-click","shows")}}},[i("button",{staticClass:"nav-btn"},[e._v("Series")])]):e._e(),0===e.searchValue.length?i("li",{class:e.isMovieShown&&!e.isSeriesShown?"header__navigation__nav-list__item header__navigation__nav-list__item-active":"header__navigation__nav-list__item",on:{click:function(t){return e.$emit("navigation-click","movies")}}},[i("button",{staticClass:"nav-btn"},[e._v("Movies")])]):e._e()])])]),i("div",{staticClass:"header__toolbox"},[e.isSearchShown?i("div",{staticClass:"header__toolbox__search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"header__toolbox__search__input",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)},keyup:e.handleSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),i("button",{staticClass:"icon-btn",on:{click:e.handleCloseSearch}},[i("img",{attrs:{src:e.closeIcon,alt:"close icon"}})])]):e._e(),i("button",{staticClass:"icon-btn search-icon",on:{click:e.handleSearchDisplay}},[i("img",{attrs:{src:e.searchIcon,alt:"search icon"}})]),i("button",{staticClass:"icon-btn bell-icon"},[i("img",{attrs:{src:e.bellIcon,alt:"bell icon"}})])])])},n=[],l=i.p+"img/search.bf4c0b26.svg",c=i.p+"img/bell.2635a801.svg",d=i.p+"img/x-circle-fill.99ea6f6f.svg",h={name:"HeaderComponent",data(){return{searchIcon:l,bellIcon:c,closeIcon:d,searchValue:""}},props:{isTop:{type:Boolean,required:!0},isMovieShown:{type:Boolean,required:!0},isSeriesShown:{type:Boolean,required:!0},isSearchShown:{type:Boolean,required:!0}},methods:{handleSearchDisplay(){this.$emit("search-display")},handleSearch(){this.$emit("search-value",this.searchValue)},handleCloseSearch(){this.$emit("search-display"),this.searchValue=""}}},u=h,v=i(1),g=(0,v.Z)(u,r,n,!1,null,"6ecad875",null),_=g.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hero",attrs:{id:"hero"}},[i("div",{staticClass:"hero__img"},[i("img",{attrs:{src:e.getPoster(e.mainMovie.backdrop_path,"original"),alt:""}}),i("div",{staticClass:"hero__img-bg"})]),i("div",{staticClass:"hero-new-movie-info"},[i("div",{staticClass:"hero-new-movie-info__title"},[i("h1",[e._v(e._s(e.mainMovie.title||e.mainMovie.name))]),i("div",{staticClass:"chip-row"},[e.release_date?i("chip-element",{attrs:{type:"release_date",value:e.release_date.toString()}}):e._e(),e.runtime?i("chip-element",{attrs:{type:"runtime",value:e.runtime.toString()}}):e._e(),e.vote_average?i("chip-element",{attrs:{type:"vote_average",value:e.vote_average.toString()}}):e._e()],1),i("h6",[e._v(e._s(e.maxTextLength(e.mainMovie.overview,220)))])]),i("div",{staticClass:"hero-new-movie-info__toolbox"},[i("button",{staticClass:"btn main-btn"},[i("img",{attrs:{src:e.playIcon,alt:"play icon"}}),e._v(" Play ")]),i("button",{staticClass:"btn secondary-btn",on:{click:function(t){e.isCardShown=!e.isCardShown}}},[i("img",{attrs:{src:e.infoIcon,alt:"plus icon"}}),e._v(" More Info ")])])]),i("DetailedMovie",{attrs:{currentMovieId:e.currentMovieId,currentMovieType:e.currentMovieType,isShown:e.isCardShown,selectedLanguage:e.selectedLanguage},on:{closeWindow:e.closeDetailedWindow}})],1)},p=[],y=i.p+"img/Netflix_Symbol_RGB 1.9146482b.svg",w=i.p+"img/chevron-right.40bd9cd1.svg",f=i.p+"img/info.5154021d.svg",S=i(669),C=i.n(S);const k="f4a913977d179ebb7a42d0e12e6f64cb";var b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isShown?i("div",[i("div",{staticClass:"detailed__bg",on:{click:e.closeWindow}}),i("div",{staticClass:"detailed__card"},[i("img",{attrs:{src:e.bgImage,alt:""}}),i("div",{staticClass:"detailed__card-bg"},[i("div",{staticClass:"detailed__close-btn"},[i("button",{staticClass:"icon-btn",on:{click:e.closeWindow}},[i("img",{attrs:{src:e.closeIcon,alt:""}})])]),i("div",{staticClass:"detailed__card-info"},[i("img",{staticClass:"detailed__card-info-img",attrs:{src:e.getPoster(e.movie.poster_path,"w342"),alt:""}}),i("div",{staticClass:"detailed__card-info__content"},[i("div",{staticClass:"detailed__card-info__content-overline"},e._l(e.movie.genres,(function(t){var a=t.name,s=t.id;return i("p",{key:e.movie.title+s},[e._v(" "+e._s(a)+" ")])})),0),i("a",{staticClass:"detailed__card-info__content-title",attrs:{href:e.movie.homepage}},[e._v(" "+e._s(e.movie.title?e.movie.title:e.movie.original_title)+" ")]),i("h6",{staticClass:"detailed__card-info__content-subtitle"},[e._v(" "+e._s(e.movie.tagline)+" ")]),i("div",{staticClass:"detailed__card-info__container"},[i("div",{staticClass:"detailed__card-info__content-additional"},[e.movie.runtime?i("chip-element",{attrs:{value:e.movie.release_date.toString(),type:"release_date"}}):e._e(),e.movie.runtime?i("chip-element",{attrs:{value:e.movie.runtime.toString(),type:"runtime"}}):e._e(),e.movie.number_of_seasons?i("chip-element",{attrs:{value:e.movie.number_of_seasons.toString(),type:"number_of_seasons"}}):e._e(),e.movie.vote_average?i("chip-element",{attrs:{value:e.movie.vote_average.toString(),type:"vote_average"}}):e._e(),e._l(e.movie.networks,(function(e){return i("chip-element",{key:e.id,attrs:{value:e,type:"networks"}})}))],2),i("div",[e.recommendation.length>0?i("button",{staticClass:"btn secondary-btn",on:{click:e.handleRecommendationClick}},[e._v(" "+e._s(e.isRecomenationShown?"Hide similar":"See similar")+" ")]):e._e()])]),e.isRecomenationShown?e._e():i("div",{staticClass:"detailed__card-info__content-overview"},[i("p",[e._v(e._s(e.movie.overview))])]),e.isRecomenationShown?e._e():i("div",{staticClass:"detailed__card-info__content-cast"},e._l(e.cast,(function(t){return i("div",{key:t.credit_id,staticClass:"cast-element"},[i("div",{staticClass:"cast-element__img"},[i("img",{attrs:{src:e.getPoster(t.profile_path,"w154"),alt:""}})]),i("p",{staticClass:"cast-element__name"},[e._v(e._s(t.name))]),i("p",{staticClass:"cast-element__character"},[e._v(e._s(t.character))])])})),0),e.isRecomenationShown?i("div",{staticClass:"detailed__card-info__content-recommendations",attrs:{id:"recommendations"},on:{wheel:function(t){return e.handleRecommendationScroll(t)}}},e._l(e.recommendation,(function(t){var a=t.title,s=t.id,o=t.poster_path,r=t.vote_average,n=t.original_title,l=t.language,c=t.origin_country,d=t.media_type;return i("CardComponent",{key:s+a+n+o,attrs:{id:s,title:a,poster:o,vote_average:r,original_title:n,language:l,origin_country:c,media_type:d},on:{handleCardClick:e.openNewDetailedCard}})})),1):e._e()])])])])]):e._e()},M=[],D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card",attrs:{id:"card"},on:{click:e.passData}},[i("div",{staticClass:"card-img"},[i("img",{attrs:{src:e.getPoster(e.poster,"w342"),alt:""}})]),i("div",{staticClass:"card-info"},[i("div",{staticClass:"card-info-bg"}),i("div",{staticClass:"card-info__text"},[i("h2",{staticClass:"card-info__text-title"},[e._v(e._s(e.title))]),e.isTitlesDifferent()?i("h6",{staticClass:"card-info__text-subtitle"},[e._v(" "+e._s(e.original_title)+" ")]):e._e(),i("div",{staticClass:"card-info__additional"},[i("div",{staticClass:"card-info__text-valutation"},[i("StarsValutation",{attrs:{vote_average:e.vote_average}})],1),i("p",{staticClass:"card-info__additional-lang"},[e._v(e._s(e.getFlagEmoji(e.language)))])])])])])},I=[],T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"stars-row"},[e._l(e.fullStars,(function(e){return i("i",{key:e+"full",staticClass:"fa-solid fa-star"})})),e._l(e.emptyStars,(function(e){return i("i",{key:e+"empty",staticClass:"fa-regular fa-star"})})),i("i",{staticClass:"fa-regular fa-star"})],2)},L=[],q={name:"StarsValutation",data(){return{vote:0,fullStars:[],emptyStars:[]}},props:{vote_average:{type:Number,required:!0}},mounted(){this.vote=(this.vote_average/10*5).toFixed(0);for(let e=1;e<=this.vote;e++)this.fullStars.push(e);for(let e=1;e<5-this.vote;e++)this.emptyStars.push(e)}},x=q,E=(0,v.Z)(x,T,L,!1,null,"777a81ec",null),$=E.exports,R={name:"CardComponent",components:{StarsValutation:$},data(){return{dataToSend:[this.id,this.media_type]}},props:{title:{type:String,required:!0},poster:{type:String,required:!0},vote_average:{type:Number,required:!0},original_title:{type:String,required:!0},language:{type:String,required:!0},origin_country:{type:String,required:!1},id:{type:Number,required:!0},media_type:{type:String,required:!0}},methods:{getPoster(e="",t="w342"){return`https://image.tmdb.org/t/p/${t}${e}`},isTitlesDifferent(){return this.title!=this.original_title},getFlagEmoji(e){"en"===e&&(e="US"),this.origin_country&&(e=this.origin_country);const t=e.toUpperCase().split("").map((e=>127397+e.charCodeAt()));return String.fromCodePoint(...t)},passData(){this.$emit("handleCardClick",[this.id,this.media_type])}}},B=R,P=(0,v.Z)(B,D,I,!1,null,null,null),N=P.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"chip",class:e.btnStyles},[e.img?i("div",{staticClass:"network"},[e.img&&!e.isBtn?i("p",[e._v("Watch it on:")]):e._e(),e.img?i("img",{attrs:{src:e.img,alt:""}}):e._e()]):e._e(),e.icon&&!e.img?i("font-awesome-icon",{attrs:{icon:e.iconRender(e.icon)}}):e._e(),e.img?e._e():i("span",{class:e.valueStyles},[e._v(e._s(e.valueToRender))]),e.unitM&&!e.img?i("span",[e._v(e._s(e.unitM))]):e._e()],1)])},V=[],U={name:"ChipElement",data(){return{unitM:"",icon:"",valueToRender:"",img:"",api_key:k}},props:{value:{required:!0},type:{type:String,required:!0,default:""},isDeletable:{type:Boolean,required:!1,default:!1},isBtn:{type:Boolean,required:!1,default:!1},isSelected:{type:Boolean,required:!1,default:!1}},watch:{type(){this.setUnits(this.type)},value(){this.setUnits(this.type)}},mounted(){this.setUnits(this.type)},computed:{valueStyles(){let e=parseFloat(this.value);return{"valutation-low":"vote_average"===this.type&&e<4,"valutation-medium":"vote_average"===this.type&&e>=4&&e<7,"valutation-high":"vote_average"===this.type&&e>=7}},btnStyles(){return{"chip-btn":this.isBtn}}},methods:{setUnits(e){switch(e){case"runtime":this.unitM="min",this.icon="fa-clock",this.valueToRender=this.value;break;case"release_date":this.unitM="",this.icon="fa-calendar",this.valueToRender=this.dateType(this.value);break;case"vote_average":this.unitM="",this.icon="fa-star",this.valueToRender=this.value;break;case"number_of_seasons":this.unitM="1"===this.value?"season":"seasons",this.icon="fa-tv",this.valueToRender=this.value;break;case"networks":this.isBtn?this.getNetworkData(this.value.id):(this.unitM="",console.log(this.value),this.img=this.getNetworkLogo(this.value),this.valueToRender=this.value.name);break;default:this.unitM="",this.icon=""}},iconRender(e){return`fa-solid ${e}`},dateType(e){return e.split("-").reverse().join("/")},getNetworkLogo(e){return`https://image.tmdb.org/t/p/w92${e.logo_path}`},getNetworkData(e){let t={api_key:this.api_key};console.log(this.api_key),C().get(`https://api.themoviedb.org/3/network/${e}?`,{params:t}).then((e=>{console.log(e.data),this.img=this.getNetworkLogo(e.data)})).catch((e=>{console.log(e)}))}}},A=U,W=(0,v.Z)(A,O,V,!1,null,"76be077b",null),G=W.exports,Z={name:"DetailedMovie",data(){return{api_key:k,movie:{},credits:{},bgImage:"",cast:[],recommendation:[],isRecomenationShown:!1,recommendationIds:[],closeIcon:d,movieId:0,movieType:""}},components:{CardComponent:N,ChipElement:G},props:{currentMovieId:{type:Number,required:!0},isShown:{type:Boolean,required:!0},currentMovieType:{type:String,required:!0},selectedLanguage:{type:String}},watch:{currentMovieId:function(){this.movieId=this.currentMovieId,this.movieType=this.currentMovieType},movieId:function(){this.getMovie()}},methods:{getMovie(){C().get(`https://api.themoviedb.org/3/${this.movieType}/${this.movieId}?api_key=${this.api_key}&language=${this.selectedLanguage}`).then((e=>{console.log(e.data),this.movie.title=e.data.title?e.data.title:e.data.name,this.movie.poster_path=e.data.poster_path,this.movie.tagline=e.data.tagline,this.movie.release_date=e.data.release_date?e.data.release_date:e.data.first_air_date,this.movie.runtime=e.data.runtime?e.data.runtime:e.data.episode_run_time[0],this.movie.vote_average=e.data.vote_average,this.movie.number_of_seasons=e.data.number_of_seasons?e.data.number_of_seasons:null,this.movie.overview=e.data.overview,this.movie.genres=e.data.genres,this.bgImage=this.getPoster(e.data.backdrop_path,"original"),this.movie.homepage=e.data.homepage,this.movie.id=e.data.id,this.movie.networks=e.data.networks,this.getRecommendations(),this.getCredit(this.movie.id)})).catch((e=>{console.log(e)}))},getCredit(e){this.cast=[],C().get(`https://api.themoviedb.org/3/${this.movieType}/${e}/credits?api_key=${this.api_key}`).then((e=>{this.credit=e.data;for(let t=0;t<this.credit.cast.length;t++)t<5&&this.credit.cast[t].profile_path&&this.cast.push(this.credit.cast[t])}))},getPoster(e="",t="w342"){return`https://image.tmdb.org/t/p/${t}${e}`},setBackground(){this.bgImage=this.getPoster(this.movie.backdrop_path,"w500")},setDateToYear(e=""){return e.split("-")[0]},closeWindow(){this.isRecomenationShown=!1,this.$emit("closeWindow")},handleRecommendationClick(){this.isRecomenationShown=!this.isRecomenationShown,this.getRecommendations()},getRecommendations(){this.recommendation=[];let e={api_key:this.api_key,language:this.selectedLanguage,page:1},t=[];C().get(`https://api.themoviedb.org/3/movie/${this.movie.id}/recommendations`,{params:e}).then((e=>{t=e.data.results.slice(0,15),this.filterData(t,this.recommendation)})).catch((e=>{console.log(e)}))},openNewDetailedCard(e){this.isRecomenationShown=!1;const[t,i]=e;this.movieId=t,this.movieType=i},handleRecommendationScroll(e){e.preventDefault();const t=document.querySelector("#recommendations");t.scrollBy({left:2*-e.wheelDeltaY,behavior:"smooth"})},filterData(e,t){e.forEach((e=>{e.poster_path&&(e.title||e.name)&&t.push({title:e.title||e.name,id:e.id,media_type:e.title?"movie":"tv",poster_path:e.poster_path,vote_average:e.vote_average,original_title:e.original_title?e.original_title:e.original_name,language:e.original_language,origin_country:e.origin_country?e.origin_country[0]:""})}))}}},j=Z,H=(0,v.Z)(j,b,M,!1,null,"071c5956",null),Y=H.exports,F={name:"HeroComponent",components:{DetailedMovie:Y,ChipElement:G},data(){return{netflixLogo:y,playIcon:w,infoIcon:f,api_key:k,mainMovie:{},currentMovieId:"",currentMovieType:"",selectedLanguage:"it",isCardShown:!1,runtime:0,vote_average:0,release_date:""}},mounted(){let e={api_key:this.api_key,language:this.selectedLanguage,has_networks:213};C().get("https://api.themoviedb.org/3/trending/all/week?",{params:e}).then((e=>{this.mainMovie=e.data.results[this.randomInRange(0,e.data.results.length-1)],this.currentMovieId=this.mainMovie.id,this.currentMovieType=this.mainMovie.media_type?this.mainMovie.media_type:"tv",this.runtime=this.mainMovie.runtime,this.vote_average=this.mainMovie.vote_average,this.release_date=this.mainMovie.release_date})).catch((e=>{console.log(e)}))},methods:{getPoster(e="",t="w342"){return`https://image.tmdb.org/t/p/${t}${e}`},randomInRange(e,t){return Math.floor(Math.random()*(t-e+1))+e},maxTextLength(e,t){return e&&e.length>t?e.substring(0,t)+"...":e},closeDetailedWindow(){this.isCardShown=!1}}},z=F,J=(0,v.Z)(z,m,p,!1,null,"7475e93f",null),Q=J.exports,K=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-section"},[e.isMovieShown?i("ItemsList",{attrs:{title:"Popular Movies",movieList:e.popularMovies.results,id:"popMovies1",requestData:e.popularMovies.requestData},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Discover Series",movieList:e.discoverTv.results,id:"discoverTv2",requestData:e.discoverTv.requestData},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Cartoons Movies",movieList:e.cartoons.results,requestData:e.cartoons.requestData,id:"cartoons"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Cartoons Series",movieList:e.cartoonsTv.results,requestData:e.cartoonsTv.requestData,id:"cartoonsTv"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Discover Italian Series",movieList:e.discoverItalianTv.results,requestData:e.discoverItalianTv.requestData,id:"discoverItalianTv2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Horror Night",movieList:e.horrorMovies.results,requestData:e.horrorMovies.requestData,id:"horrorMovies2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown&&e.isSeriesShown?i("ItemsList",{attrs:{title:"Tranding Now",movieList:e.trandingNow.results,requestData:e.trandingNow.requestData,id:"tranding2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Discover Ukrainian Series",movieList:e.discoverUkrainianTv.results,requestData:e.discoverUkrainianTv.requestData,id:"discoverUkrainianTv2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Upcoming Movies in Italy",movieList:e.upcomingMovies.results,requestData:e.upcomingMovies.requestData,id:"upcoming3"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Upcoming Movies in USA",movieList:e.upcomingMoviesUSA.results,requestData:e.upcomingMoviesUSA.requestData,id:"upcomingUSA3"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Documentries",movieList:e.documentary.results,requestData:e.documentary.requestData,id:"documentary2"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"It's Crime Time",movieList:e.crimeMovie.results,requestData:e.crimeMovie.requestData,id:"crimeMovie5"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isMovieShown?i("ItemsList",{attrs:{title:"Top Rated Movies",movieList:e.topRatedMovies.results,requestData:e.topRatedMovies.requestData,id:"rated5"},on:{handleCardClick:e.takeCardData}}):e._e(),e.isSeriesShown?i("ItemsList",{attrs:{title:"Popular Series",movieList:e.popularSeries.results,requestData:e.popularSeries.requestData,id:"popSeries4"},on:{handleCardClick:e.takeCardData}}):e._e(),i("DetailedMovie",{attrs:{currentMovieId:e.currentMovieId,currentMovieType:e.currentMovieType,isShown:e.isCardShown,selectedLanguage:e.language},on:{closeWindow:e.closeDetailedWindow}})],1)},X=[],ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"items-list"},[i("div",{staticClass:"items-list__title"},[i("div",{on:{click:e.moreClicked}},[i("h2",[e._v(e._s(e.title))]),i("img",{staticClass:"more-icon",attrs:{src:e.moreIcon,alt:""}})])]),i("div",{staticClass:"items-list__items"},[i("button",{staticClass:"items-list__cards__nav-btn items-list__cards__nav-btn--prev",on:{click:e.scrollLeft,touchend:e.scrollLeft}},[i("img",{attrs:{src:e.caretLeft,alt:""}})]),i("div",{staticClass:"items-list__card-list",attrs:{id:e.id}},e._l(e.movieList,(function(t){var a=t.title,s=t.id,o=t.poster_path,r=t.vote_average,n=t.original_title,l=t.language,c=t.origin_country,d=t.media_type;return i("CardComponent",{key:s+a+n+o,attrs:{id:s,title:a,poster:o,vote_average:r,original_title:n,language:l,origin_country:c,media_type:d},on:{handleCardClick:e.takeCardData}})})),1),i("button",{staticClass:"items-list__cards__nav-btn items-list__cards__nav-btn--next",on:{click:e.scrollRight,touchend:e.scrollRight}},[i("img",{attrs:{src:e.caretRight,alt:""}})])]),e.mltIsOpen?i("more-like-this",{attrs:{data:e.requestData,title:e.title},on:{closePage:e.moreClicked}}):e._e()],1)},te=[],ie=i.p+"img/chevron-right-thin.ca4c5bc4.svg",ae=i.p+"img/caret-right-fill.5fea5094.svg",se=i.p+"img/caret-left-fill.e3208a28.svg",oe=JSON.parse('[{"name":"netflix","id":"213"},{"name":"comedy central","id":"47"},{"name":"HBO","id":"49"},{"name":"showtime","id":"67"},{"name":"science","id":"226"},{"name":"hulu","id":"453"},{"name":"youtube premium","id":"1436"},{"name":"apple","id":"2552"},{"name":"disney plus","id":"2739"},{"name":"hbo max","id":"3186"},{"name":"paramount plus","id":"4330"},{"name":"amazon prime","id":"1024"}]'),re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mlt-section",attrs:{id:"moreLikeThis"},on:{wheel:function(t){return e.handleScroll(t)}}},[i("div",{staticClass:"mlt-container"},[i("div",{staticClass:"mlt-header"},[i("h2",[e._v(e._s(e.title))]),i("div",{staticClass:"close-btn"},[i("button",{on:{click:e.closePage}},[i("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1)])]),i("div",{staticClass:"cards-grid"},e._l(e.movies,(function(t){var a=t.title,s=t.id,o=t.poster_path,r=t.vote_average,n=t.original_title,l=t.language,c=t.origin_country,d=t.media_type;return i("card-component",{key:s+a+n+o,attrs:{id:s,title:a,poster:o,vote_average:r,original_title:n,language:l,origin_country:c,media_type:d},on:{handleCardClick:e.takeCardData}})})),1),i("div",{staticClass:"mlt__more-btn"},[i("button",{staticClass:"btn secondary-btn",on:{click:e.getMoreResults}},[e._v(" Mostra altri risultati ")])])]),i("DetailedMovie",{attrs:{currentMovieId:e.currentMovieId,currentMovieType:e.currentMovieType,isShown:e.isCardShown,selectedLanguage:e.selectLanguage},on:{closeWindow:e.closeDetailedWindow}})],1)},ne=[],le={name:"MoreLikeThis",components:{CardComponent:N,DetailedMovie:Y},data(){return{movies:[],page:1,currentMovieId:0,currentMovieType:"",isCardShown:!1,selectLanguage:"it"}},props:{data:{type:Object,required:!0},title:{type:String,required:!0}},methods:{getMovies(){let e={...this.data.params,page:this.page};C().get(`https://api.themoviedb.org/3/${this.data.api_call}?`,{params:e}).then((e=>{this.filterData(e.data.results,this.movies)})).catch((e=>{console.log(e)}))},filterData(e,t){e.forEach((e=>{e.poster_path&&(e.title||e.name)&&t.push({title:e.title||e.name,id:e.id,media_type:e.title?"movie":"tv",poster_path:e.poster_path,vote_average:e.vote_average,original_title:e.original_title?e.original_title:e.original_name,language:e.original_language,origin_country:e.origin_country?e.origin_country[0]:""})}))},closePage(){this.$emit("closePage")},handleScroll(e){e.preventDefault();const t=document.querySelector("#moreLikeThis");t.scrollBy({top:2*-e.wheelDeltaY,behavior:"smooth"})},getMoreResults(){this.page++},takeCardData(e){this.currentMovieId=e[0],this.currentMovieType=e[1],this.isCardShown=!0},closeDetailedWindow(){this.isCardShown=!1}},mounted(){this.getMovies(),this.page++},watch:{page:function(){this.getMovies()}}},ce=le,de=(0,v.Z)(ce,re,ne,!1,null,"3e5344c5",null),he=de.exports,ue={name:"ItemsList",components:{CardComponent:N,MoreLikeThis:he},data(){return{moreIcon:ie,caretRight:ae,caretLeft:se,selected_networks:oe,isDataComplete:!1,mltIsOpen:!1}},props:{title:{type:String,required:!0},movieList:{type:Array,required:!0},id:{type:String,required:!0},requestData:{type:Object}},methods:{scrollRight(){let e=document.getElementById(this.id);e.scrollBy({left:320,behavior:"smooth"})},scrollLeft(){let e=document.getElementById(this.id);e.scrollBy({left:-320,behavior:"smooth"})},takeCardData(e){this.$emit("handleCardClick",e)},moreClicked(){this.mltIsOpen=!this.mltIsOpen}}},ve=ue,ge=(0,v.Z)(ve,ee,te,!1,null,"f3412edc",null),_e=ge.exports;function me(e){let t="";return e.forEach((e=>{e.id=e.id.toString(),t+=e.id+" || "})),t}var pe={name:"HeaderComponent",props:{isMovieShown:{type:Boolean,required:!0},isSeriesShown:{type:Boolean,required:!0}},components:{ItemsList:_e,DetailedMovie:Y},data(){return{api_key:k,selected_networks:oe,popularMovies:{results:[]},trandingNow:{results:[]},topRatedMovies:{results:[]},upcomingMovies:{results:[]},upcomingMoviesUSA:{results:[]},popularSeries:{results:[]},discoverTv:{results:[]},discoverItalianTv:{results:[]},discoverUkrainianTv:{results:[]},cartoons:{results:[]},cartoonsTv:{results:[]},crimeMovie:{results:[]},documentary:{results:[]},horrorMovies:{results:[]},currentMovieId:0,currentMovieType:"",language:"it-IT",isCardShown:!1,networks:"",childrenNetworks:"213 || 5536 || 5526 || 2739 || 2552 || 2534 || 2193 || 794"}},mounted(){this.networks=me(this.selected_networks),this.getElementsList("movie/popular",this.popularMovies,{api_key:k,language:this.language,region:"IT",with_networks:this.networks}),this.getElementsList("movie/top_rated",this.topRatedMovies,{api_key:k,language:this.language,region:"IT",with_networks:this.networks}),this.getElementsList("movie/upcoming",this.upcomingMovies,{api_key:k,language:this.language,region:"IT",with_networks:this.networks}),this.getElementsList("movie/upcoming",this.upcomingMoviesUSA,{api_key:k,language:this.language,region:"US",with_networks:this.networks}),this.getElementsList("tv/popular",this.popularSeries,{api_key:k,language:this.language,region:"US",with_networks:this.networks}),this.getElementsList("trending/all/day",this.trandingNow,{api_key:k,language:this.language,region:"IT",with_networks:this.networks}),this.getElementsList("discover/tv",this.discoverTv,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"18",with_networks:this.networks}),this.getElementsList("discover/tv",this.discoverItalianTv,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"18",with_networks:this.networks,with_original_language:"it"}),this.getElementsList("discover/movie",this.cartoons,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"16",with_networks:this.childrenNetworks}),this.getElementsList("discover/tv",this.cartoonsTv,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"16",with_networks:this.childrenNetworks}),this.getElementsList("discover/movie",this.crimeMovie,{api_key:k,language:this.language,watch_region:"IT",sort_by:"popularity.desc",with_genres:"80",with_networks:this.networks}),this.getElementsList("discover/tv",this.documentary,{api_key:k,language:this.language,watch_region:"US",sort_by:"popularity.desc",with_genres:"99",with_networks:this.networks}),this.getElementsList("discover/movie",this.horrorMovies,{api_key:k,language:this.language,watch_region:"US",sort_by:"popularity.desc",with_genres:"27",with_networks:this.networks}),this.getElementsList("discover/tv",this.discoverUkrainianTv,{api_key:k,sort_by:"popularity.desc",with_original_language:"uk"})},methods:{getElementsList(e,t,i){C().get(`https://api.themoviedb.org/3/${e}`,{params:i}).then((a=>{this.results=a.data.results,this.filterData(this.results,t),t.requestData={api_call:e,params:i},console.log(t)})).catch((e=>{console.log(e)}))},filterData(e,t){t.results=[],e.forEach((e=>{e.poster_path&&(e.title||e.name)&&t.results.push({title:e.title||e.name,id:e.id,media_type:e.title?"movie":"tv",poster_path:e.poster_path,vote_average:e.vote_average,original_title:e.original_title?e.original_title:e.original_name,language:e.original_language,origin_country:e.origin_country?e.origin_country[0]:""})}))},takeCardData(e){this.currentMovieId=e[0],this.currentMovieType=e[1],this.isCardShown=!0},closeDetailedWindow(){this.isCardShown=!1}}},ye=pe,we=(0,v.Z)(ye,K,X,!1,null,"3857544b",null),fe=we.exports,Se=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"search-out__bg",attrs:{id:"searchOutput"},on:{wheel:function(t){return e.handleScroll(t)}}},[i("div",{staticClass:"search-out__additional-controls"},[i("div",{staticClass:"select-box"},[i("label",{attrs:{for:"type"}},[e._v("Scegli per tipo")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.searchBy,expression:"searchBy"}],staticClass:"type_select",attrs:{name:"type",id:"type"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.searchBy=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"multi"}},[e._v("All")]),i("option",{attrs:{value:"movie"}},[e._v("Movie")]),i("option",{attrs:{value:"tv"}},[e._v("Show")])])]),i("div",{staticClass:"select-box"},[i("label",{attrs:{for:"genre"}},[e._v("Scegli per genere")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedGenre,expression:"selectedGenre"}],staticClass:"type_select",attrs:{name:"genre",id:"selectGenre"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedGenre=t.target.multiple?i:i[0]}}},e._l(e.genres,(function(t){var a=t.name,s=t.id;return i("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(a)+" ")])})),0)]),i("div",{staticClass:"select-box"},[i("label",{attrs:{for:"language"}},[e._v("Scegli lingua")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectLanguage,expression:"selectLanguage"}],staticClass:"type_select",attrs:{name:"language",id:"language"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectLanguage=t.target.multiple?i:i[0]}}},e._l(e.languages,(function(t){var a=t.name,s=t.id;return i("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(a)+" ")])})),0)])]),i("div",{staticClass:"search-out__results"},[e._l(e.result,(function(t){var a=t.title,s=t.id,o=t.poster_path,r=t.vote_average,n=t.original_title,l=t.language,c=t.origin_country,d=t.media_type;return i("CardComponent",{key:s+a+n+o,attrs:{id:s,title:a,poster:o,vote_average:r,original_title:n,language:l,origin_country:c,media_type:d},on:{handleCardClick:e.takeCardData}})})),0===e.result.length?i("h2",[e._v("Nessun risultato trovato")]):e._e(),e.isMorePageAviable?i("div",{staticClass:"search-out__results__more-btn"},[i("button",{staticClass:"btn secondary-btn",on:{click:e.getMoreResults}},[e._v(" Mostra altri risultati ")])]):e._e()],2)]),i("DetailedMovie",{attrs:{currentMovieId:e.currentMovieId,currentMovieType:e.currentMovieType,isShown:e.isCardShown,selectedLanguage:e.selectLanguage},on:{closeWindow:e.closeDetailedWindow}})],1)},Ce=[],ke={name:"SearchOutput",data(){return{reserchQuery:"new york",result:[],api_key:k,isCardShown:!1,currentMovieId:0,currentMovieType:"",searchBy:"multi",genres:[{name:"All",id:"multi"}],selectedGenre:"multi",selectLanguage:"it",languages:[],pagesToDisplay:1,displayedItemsIds:[],isMorePageAviable:!0,selected_networks:oe}},props:{searchValue:{type:String,required:!0}},components:{CardComponent:N,DetailedMovie:Y},watch:{searchValue:function(){this.startSearch()},searchBy:function(){this.startSearch()},selectedGenre:function(){this.startSearch()},selectLanguage:function(){this.startSearch()}},mounted(){this.startSearch(),this.getLanguages(),this.getGenres()},methods:{startSearch(){this.displayedItemsIds=[],this.pagesToDisplay=1,this.result=[],this.getItems(this.searchValue,this.pagesToDisplay,!1)},getItems(e="",t=1,i=!1){if(t<=20||!i){let i={api_key:this.api_key,language:this.selectLanguage,query:e,page:t,include_adult:!1,region:"IT",sort_by:"popularity.desc",genre:this.selectedGenre,with_networks:"3186"};C().get(`https://api.themoviedb.org/3/search/${this.searchBy}?`,{params:i}).then((e=>{let t=[];"multi"!==this.selectedGenre?e.data.results.forEach((e=>{e.genre_ids.includes(this.selectedGenre)&&t.push(e)})):t=e.data.results,t.forEach((e=>{this.displayedItemsIds.includes(e.id)||e.poster_path&&(e.title||e.name)&&(this.result.push({title:e.title||e.name,id:e.id,media_type:e.title?"movie":"tv",poster_path:e.poster_path,vote_average:e.vote_average,original_title:e.original_title?e.original_title:e.original_name,language:e.original_language,origin_country:e.origin_country?e.origin_country[0]:""}),this.displayedItemsIds.push(e.id))})),e.data.results<20*this.pagesToDisplay?this.isMorePageAviable=!1:this.isMorePageAviable=!0})).catch((e=>{console.log(e)})),"multi"!==this.selectedGenre&&this.result.length<=5&&this.getItems(this.searchValue,t+1,!0)}},getGenres(){C().get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=it-IT`).then((e=>{e.data.genres.forEach((e=>{this.genres.push({id:e.id,name:e.name})}))})).catch((e=>{console.log(e)}))},getLanguages(){C().get(`https://api.themoviedb.org/3/configuration/languages?api_key=${this.api_key}`).then((e=>{e.data.forEach((e=>{this.languages.push({id:e.iso_639_1,name:e.english_name})})),this.languages.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0))})).catch((e=>{console.log(e)}))},getMoreResults(){this.pagesToDisplay+=1,this.getItems(this.searchValue,this.pagesToDisplay)},takeCardData(e){this.currentMovieId=e[0],this.currentMovieType=e[1],this.isCardShown=!0},closeDetailedWindow(){this.isCardShown=!1},handleScroll(e){e.preventDefault();const t=document.querySelector("#searchOutput");t.scrollBy({top:2*-e.wheelDeltaY,behavior:"smooth"})}}},be=ke,Me=(0,v.Z)(be,Se,Ce,!1,null,"201c541a",null),De=Me.exports,Ie={name:"App",data(){return{isTop:!0,isMovieShown:!0,isSeriesShown:!0,searchValue:"",isSearchShown:!1}},components:{Header:_,Hero:Q,MainSection:fe,SearchOutput:De},methods:{checkPosition(){window.pageYOffset>0||window.scrollY>0?this.isTop=!1:this.isTop=!0},setSection(e){"start"===e?(this.isMovieShown=!0,this.isSeriesShown=!0):"movies"===e?(this.isMovieShown=!0,this.isSeriesShown=!1):"shows"===e&&(this.isMovieShown=!1,this.isSeriesShown=!0)},setSearchValue(e){this.searchValue=e},setSearchDisplay(){this.isSearchShown=!this.isSearchShown}},mounted(){window.addEventListener("scroll",this.checkPosition),this.checkPosition()}},Te=Ie,Le=(0,v.Z)(Te,s,o,!1,null,null,null),qe=Le.exports,xe=i(947),Ee=i(436),$e=i(810);xe.vI.add(Ee.mRB),a.Z.component("font-awesome-icon",$e.GN),a.Z.config.productionTip=!1,new a.Z({render:e=>e(qe)}).$mount("#app")}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,o){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],o=e[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(e){return i.O[e](a[l])}))?a.splice(l--,1):(n=!1,o<r&&(r=o));if(n){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,s,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/vue-boolflix/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,r=a[0],n=a[1],l=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(l)var d=l(i)}for(t&&t(a);c<r.length;c++)o=r[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},a=self["webpackChunkvue_boolfix"]=self["webpackChunkvue_boolfix"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(426)}));a=i.O(a)})();
//# sourceMappingURL=app.01287273.js.map