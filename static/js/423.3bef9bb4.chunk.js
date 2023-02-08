"use strict";(self.webpackChunkmovies_finder_ts_version=self.webpackChunkmovies_finder_ts_version||[]).push([[423],{7877:function(n,e,t){t.d(e,{p:function(){return h}});var r,i,a,o=t(168),c=t(3081),s=t(8014),u=c.Z.p(r||(r=(0,o.Z)(["\n  font: inherit;\n  font-size: 18px;\n"]))),p=c.Z.div(i||(i=(0,o.Z)(["\n  margin: 36px auto;\n"]))),f=(0,c.Z)(s.D_A)(a||(a=(0,o.Z)(["\n  width: 48px;\n  fill: tomato;\n"]))),l=t(184),h=function(){return(0,l.jsx)(p,{children:(0,l.jsxs)(u,{children:["We're sorry, but you've reached the end of search results.",(0,l.jsx)(f,{})]})})}},5203:function(n,e,t){t.d(e,{O:function(){return b}});var r,i,a,o,c,s,u=t(7689),p=t(1087),f=t(342),l=t(168),h=t(3081),d=h.Z.div(r||(r=(0,l.Z)(["\n  max-width: 500px;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: 100%;\n  overflow: hidden;\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),v=h.Z.div(i||(i=(0,l.Z)(["\n  position: relative;\n  margin-bottom: ","px;\n  height: 500px;\n"])),(function(n){return n.theme.space[3]})),x=h.Z.div(a||(a=(0,l.Z)(["\n  padding: 0 10px 10px 10px;\n"]))),m=h.Z.h2(o||(o=(0,l.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),g=h.Z.p(c||(c=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n"])),(function(n){return n.theme.space[1]})),Z=t(184),j=function(n){var e=n.movieInfo,t=n.genres,r=e.poster_path,i=e.title,a=e.name,o=e.genre_ids,c=e.release_date,s=e.first_air_date;return(0,Z.jsxs)(d,{children:[(0,Z.jsx)(v,{children:(0,Z.jsx)("img",{src:(0,f.bu)(r),alt:(0,f.ju)(i,a)})}),(0,Z.jsxs)(x,{children:[(0,Z.jsx)(m,{children:(0,f.ju)(i,a)}),(0,Z.jsxs)(g,{children:[(0,Z.jsx)("span",{children:(0,f.t$)(t,o)}),(0,Z.jsx)("span",{children:"\u2758"}),(0,Z.jsx)("span",{children:(0,f.E$)(c,s)})]})]})]})},w=h.Z.ul(s||(s=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100% - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 24px;\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=(t(2791),function(n){var e=n.movies,t=n.genres,r=n.from,i=(0,u.TH)();return(0,Z.jsx)("div",{style:{padding:"".concat((function(n){return n.theme.space[3]}),"px")},children:(0,Z.jsx)(w,{children:"home"===r?e.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(p.rU,{to:"movies/".concat(n.id),state:{from:i},children:(0,Z.jsx)(j,{movieInfo:n,genres:t})})},n.id)})):e.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(p.rU,{to:"".concat(n.id),state:{from:i},children:(0,Z.jsx)(j,{movieInfo:n,genres:t})})},n.id)}))})})})},342:function(n,e,t){t.d(e,{E$:function(){return l},_r:function(){return p},bu:function(){return h},ju:function(){return f},kU:function(){return v},t$:function(){return d}});var r=t(7762),i=t(4165),a=t(5861),o=t(3144),c=t(5671),s=t(1912);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="9d6e6ee2eca71a277d41288e53d88a97",p=(0,o.Z)((function n(){(0,c.Z)(this,n),this.searchTrendingMovies=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/week?api_key=".concat(u,"&page=").concat(e),n.prev=1,n.next=4,s.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovies=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,t){var r,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?api_key=".concat(u,"&query=").concat(t,"&page=").concat(e),n.prev=1,n.next=4,s.Z.get(r);case 4:return a=n.sent,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),this.searchMovieDetails=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"?api_key=").concat(u),n.prev=1,n.next=4,s.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovieCredits=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t="movie/".concat(e,"/credits?api_key=").concat(u),"string"!==typeof e){n.next=12;break}return n.prev=2,n.next=5,s.Z.get(t);case 5:return r=n.sent,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovieReviews=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t="movie/".concat(e,"/reviews?api_key=").concat(u),"string"!==typeof e){n.next=12;break}return n.prev=2,n.next=5,s.Z.get(t);case 5:return r=n.sent,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),this.searchGenres=(0,a.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="genre/movie/list?api_key=".concat(u),n.prev=1,n.next=4,s.Z.get(e);case 4:return t=n.sent,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))}));function f(n,e){return n||(e||"The best film in your life! :)")}function l(n,e){return n?n.slice(0,4):e?e.slice(0,4):"Coming soon! :)"}function h(n){return null==n?"https://via.placeholder.com/500x600.svg/000000/ffffff?text=Sorry+,+image+loading+is+failed":"https://image.tmdb.org/t/p/w500".concat(n)}function d(n,e){var t=[];if(!e)return"Other";var i,a=(0,r.Z)(e);try{var o=function(){var e=i.value,r=n.find((function(n){return n.id===e}));if(void 0===r)return"continue";t.push(r.name)};for(a.s();!(i=a.n()).done;)o()}catch(c){a.e(c)}finally{a.f()}return 0===t.length&&t.push("Other"),t.length>3?[t[0],t[1],"Other"].join(", "):t.join(", ")}function v(n){var e,t=[],i=(0,r.Z)(n);try{for(i.s();!(e=i.n()).done;){var a=e.value;t.push(a.name)}}catch(o){i.e(o)}finally{i.f()}return 0===t.length?"Other":t.length>3?[t[0],t[1],"Other"].join(", "):t.join(", ")}},9423:function(n,e,t){t.r(e),t.d(e,{Home:function(){return d}});var r,i=t(3433),a=t(9439),o=t(2791),c=t(5203),s=t(342),u=t(7877),p=t(168),f=t(3081).Z.h1(r||(r=(0,p.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  font-size: ","px;\n"])),(function(n){return n.theme.fontSizes[6]})),l=t(184),h=new s._r,d=function(){var n=(0,o.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],s=(0,o.useState)([]),p=(0,a.Z)(s,2),d=p[0],v=p[1],x=(0,o.useState)(1),m=(0,a.Z)(x,2),g=m[0],Z=m[1],j=(0,o.useState)(null),w=(0,a.Z)(j,2),b=w[0],y=w[1],_=(0,o.useState)(!1),k=(0,a.Z)(_,2),E=k[0],S=k[1];(0,o.useEffect)((function(){h.searchGenres().then((function(n){v(n.data.genres)}))}),[]),(0,o.useEffect)((function(){E?h.searchTrendingMovies(g.toString()).then((function(n){y(n.data.total_pages),r((function(e){return[].concat((0,i.Z)(e),(0,i.Z)(n.data.results))}))})):S(!0)}),[g,E]);var O=function(){var n=document.documentElement,e=n.scrollHeight;n.clientHeight+n.scrollTop+1>=e&&Z((function(n){return n+1}))};return(0,o.useEffect)((function(){return window.addEventListener("scroll",O),function(){return window.removeEventListener("scroll",O)}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{children:"Trending today"}),0!==t.length&&(0,l.jsx)(c.O,{movies:t,genres:d,from:"home"}),g===b&&(0,l.jsx)(u.p,{})]})}}}]);
//# sourceMappingURL=423.3bef9bb4.chunk.js.map