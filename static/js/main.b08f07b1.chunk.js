(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(7),r=c.n(s),i=(c(14),c(9)),o=c(6),l=c.n(o),j=c(8),d=c(3),u=c(0),h=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"lds-ellipsis",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})},m=c.p+"static/media/exploding_head.3de8d4ae.gif",b=function(e){var t=e.data,c=e.addingWatched;return 0===t.length?Object(u.jsxs)("div",{className:"notfound notfound--wrapper",children:[Object(u.jsx)("img",{className:"notfound__image",src:m,alt:"notfound"}),Object(u.jsx)("span",{className:"notfound__title",children:"Oooops, where is movie ?!"})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"movie section--movie",children:t.map((function(e,t){return Object(u.jsxs)("div",{onClick:function(){c(e)},className:"movie__wrapper",children:[Object(u.jsx)("span",{className:"movie__title",children:e.Title}),Object(u.jsx)("img",{className:"movie__image",src:e.Poster,alt:e.Title})]},t)}))})})},O=function(e){var t=e.data,c=e.removeFav;return 0===t.length?null:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"movie section--movie",children:t.map((function(e,t){return Object(u.jsxs)("div",{onClick:function(){return c(e)},className:"movie__wrapper",children:[Object(u.jsx)("span",{className:"movie__title",children:"Watched"}),Object(u.jsx)("img",{className:"movie__image",src:e.Poster,alt:e.Title})]},t)}))})})},v=function(e){var t=e.watched,c=e.data;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("header",{className:"header section--header",children:Object(u.jsxs)("nav",{className:"navbar header__navbar",children:[Object(u.jsxs)("a",{className:"navbar__link",href:"/",children:["All Movies: ",c.length]}),Object(u.jsxs)("a",{className:"navbar__link",href:"/",children:["Watched: ",t.length]})]})})})},f=function(e){var t=e.setSearchValue,c=e.searchValue;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"search section--search",children:Object(u.jsx)("input",{value:c,onChange:function(e){return t(e.target.value)},className:"search__input",placeholder:"Enter something..."})})})},x=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(d.a)(s,2),o=r[0],m=r[1],x=Object(a.useState)(""),p=Object(d.a)(x,2),g=p[0],_=p[1],N=Object(a.useState)(!1),w=Object(d.a)(N,2),S=w[0],k=w[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("watched")||"[]");m(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("watched",JSON.stringify(o))}),[o]);var F=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"d0116670",e.prev=1,k(!0),t="https://www.omdbapi.com/?s=".concat(g,"&apikey=").concat("d0116670"),e.next=6,fetch(t);case 6:return c=e.sent,console.warn(c),e.next=10,c.json();case 10:a=e.sent,console.warn(a.Search),a.Search&&(n(a.Search),k(!1)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.warn(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){F(g)}),[g]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{data:c,watched:o}),Object(u.jsx)(f,{searchValue:g,setSearchValue:_}),S?Object(u.jsx)(b,{addingWatched:function(e){m([].concat(Object(i.a)(o),[e]))},data:c}):Object(u.jsx)(h,{}),Object(u.jsx)(O,{removeFav:function(e){var t=o.filter((function(t){return t.imdbID!==e.imdbID}));m(t)},data:o})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b08f07b1.chunk.js.map