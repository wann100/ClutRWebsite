(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c938c2e"],{"11e9":function(t,e,r){var a=r("52a7"),n=r("4630"),i=r("6821"),s=r("6a99"),c=r("69a8"),o=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=i(t),e=s(e,!0),o)try{return u(t,e)}catch(r){}if(c(t,e))return n(!a.f.call(t,e),t[e])}},4859:function(t,e,r){},"5a11":function(t,e,r){"use strict";var a=r("7419"),n=r.n(a);n.a},"5dbc":function(t,e,r){var a=r("d3f4"),n=r("8b97").set;t.exports=function(t,e,r){var i,s=e.constructor;return s!==r&&"function"==typeof s&&(i=s.prototype)!==r.prototype&&a(i)&&n&&n(t,i),t}},7419:function(t,e,r){},"8b97":function(t,e,r){var a=r("d3f4"),n=r("cb7c"),i=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:a(t,r),t}}({},!1):void 0),check:i}},9093:function(t,e,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},c5f6:function(t,e,r){"use strict";var a=r("7726"),n=r("69a8"),i=r("2d95"),s=r("5dbc"),c=r("6a99"),o=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,g=r("aa77").trim,p="Number",h=a[p],d=h,v=h.prototype,y=i(r("2aeb")(v))==p,P="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=P?e.trim():g(e,3);var r,a,n,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var s,o=e.slice(2),u=0,l=o.length;u<l;u++)if(s=o.charCodeAt(u),s<48||s>n)return NaN;return parseInt(o,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof h&&(y?o(function(){v.valueOf.call(r)}):i(r)!=p)?s(new d(_(e)),r,h):_(e)};for(var b,m=r("9e1e")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;m.length>C;C++)n(d,b=m[C])&&!n(h,b)&&f(h,b,l(d,b));h.prototype=v,v.constructor=h,r("2aba")(a,p,h)}},d90d:function(t,e,r){"use strict";var a=r("4859"),n=r.n(a);n.a},dc06:function(t,e,r){t.exports=r.p+"img/coast.e913c6d1.jpg"},fdda:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-news-list"},[a("app-header"),a("div",{staticClass:"news-list"},[a("div",{staticClass:"container"},[a("div",{staticClass:"clearfix"},[t._m(0),a("div",{staticClass:"rightbar"},[a("div",{staticClass:"search-box form-icon-wrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{placeholder:"Search..."},domProps:{value:t.searchQuery},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),a("button",{on:{click:t.search}},[a("i",{staticClass:"fa fa-arrow-right"})])])])]),a("div",{staticClass:"clearfix news-listing-box"},[a("div",{staticClass:"leftbar"},[!1===t.loaded?a("div",[a("h4",[t._v("Loading News.. Please wait..")])]):t.currentPageNews&&t.currentPageNews.length>0?a("div",[t._l(t.currentPageNews,function(e){return a("div",{key:e[".key"],staticClass:"news"},[a("img",{staticClass:"responsive-image",attrs:{src:e.img||r("dc06")}}),a("div",{staticClass:"news-preview-content"},[e.title?a("h2",{staticClass:"news-title",domProps:{textContent:t._s(e.title)}}):t._e(),e.subheadline?a("p",{domProps:{textContent:t._s(e.subheadline)}}):t._e(),a("router-link",{staticClass:"btn is-small",attrs:{to:t.$route.path+"/"+(e.slug?e.slug:e[".key"])}},[t._v("Read more")])],1)])}),a("pagination",{attrs:{totalItems:t.filteredNews.length,perPage:t.perPage,currentPage:t.filter.currentPage},on:{changePage:t.changePage}})],2):a("div",[t._v("\n            No News Found\n          ")])]),a("div",{staticClass:"rightbar"},[a("h3",{staticClass:"is-subheading"},[t._v("Search By Topic")]),t.categories?a("ul",{staticClass:"topic-list"},t._l(t.categories,function(e,r){return a("li",{key:r},[a("a",{on:{click:function(e){return t.changeCategory(r)}}},[t._v(t._s(r)+" "),a("span",{staticClass:"count"},[t._v("("+t._s(e)+")")])])])}),0):t._e()])])])]),a("app-footer")],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"leftbar"},[r("h2",{staticClass:"is-heading"},[t._v("Latest News Entries")])])}],i=(r("a481"),r("456d"),r("d25f"),r("6762"),r("2fdb"),r("ac6a"),r("f3e2"),r("afeb")),s=r("63c2"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-block"},[r("ul",{staticClass:"pagination"},[r("li",{class:["navigation",t.previousPage?"":"is-disabled"]},[r("a",{on:{click:function(e){t.previousPage&&t.pageChange(t.previousPage)}}},[t._v("Back")])]),t._l(t.totalPages,function(e){return t.totalPages>0?r("li",{key:e,class:[e===t.currentPage?"is-current":""]},[r("a",{domProps:{textContent:t._s(e)},on:{click:function(r){return t.pageChange(e)}}})]):t._e()}),r("li",{class:["navigation",t.nextPage?"":"is-disabled"]},[r("a",{on:{click:function(e){t.nextPage&&t.pageChange(t.nextPage)}}},[t._v("Next")])])],2)])},o=[],u=(r("c5f6"),{name:"pagination",props:{totalItems:{type:Number,required:!0},perPage:{type:Number,default:10},currentPage:{type:Number,default:1}},computed:{totalPages:function(){return this.perPage>0?Math.ceil(this.totalItems/this.perPage):0},nextPage:function(){return this.totalPages&&this.currentPage!==this.totalPages?this.currentPage+1:null},previousPage:function(){return this.totalPages&&this.currentPage>1?this.currentPage-1:null}},methods:{pageChange:function(t){this.$emit("changePage",t)}}}),l=u,f=(r("5a11"),r("2877")),g=Object(f["a"])(l,c,o,!1,null,"9f5a824e",null),p=g.exports,h=r("8f40"),d=r("ca74"),v=r("2ef0"),y=r.n(v),P=function(t,e){var r=!1;return stringArr.forEach(function(e){r=e.toLowerCase().includes(t.toLowerCase())&&!0}),r},_={mixins:[d["a"]],components:{appHeader:i["a"],appFooter:s["a"],pagination:p},firebase:{routes:h["f"],contents:{source:h["a"],readyCallback:function(){this.loaded=!0}}},data:function(){return{filter:{category:void 0,q:void 0,currentPage:1},searchQuery:void 0,perPage:4,loaded:!1}},watch:{filter:{handler:function(){this.updateRoute()},deep:!0}},computed:{news:function(){var t=this,e=this.routes.filter(function(e){return e.path===t.$route.path})[0];return this.getContentsByType(e.contentType,!0)},filteredNews:function(){var t=this.filter.q,e=this.filter.category;return y.a.filter(this.news,function(r){return(!t||P(t,r.title)||P(t,r.subheadline))&&(!e||P(e,r.category.options))})},currentPageNews:function(){return y.a.slice(this.filteredNews,this.filter.currentPage-1,this.filter.currentPage-1+this.perPage)},categories:function(){var t={};return this.news.forEach(function(e){if(y.a.isEmpty(t))t=y.a.countBy(e.category.options,function(t){return t});else{var r=y.a.countBy(e.category.options,function(t){return t});Object.keys(t).forEach(function(e){Object.keys(r).forEach(function(a){e===a?t[e]=t[e]+r[a]:a in t||(t[a]=r[a])})})}}),t},query:function(){return this.$route.query}},mounted:function(){this.filter.currentPage=parseInt(y.a.get(this.query,"page",1)),this.filter.category=y.a.get(this.query,"category"),this.filter.q=y.a.get(this.query,"q")},methods:{search:function(){this.filter.q=this.searchQuery},changeCategory:function(t){this.filter.currentPage=1,this.filter.category=t.toLowerCase()},changePage:function(t){this.filter.currentPage=t},updateRoute:function(){this.$router.replace({query:{q:this.filter.q,category:this.filter.category,page:this.filter.currentPage}})}}},b=_,m=(r("d90d"),Object(f["a"])(b,a,n,!1,null,"2cdad273",null));e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2c938c2e.e03034bf.js.map