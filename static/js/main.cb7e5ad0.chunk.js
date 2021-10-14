(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{40:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(31),r=a.n(n),i=a(6),o=a(8),l=a.n(o),d=a(11),j=(a(40),a(1)),u=function(e){return Object(j.jsx)("div",{className:"modal ".concat(e.active?"modal--active":""),children:Object(j.jsx)("div",{className:"modal-inner",children:Object(j.jsxs)("div",{className:"moda-content",children:[Object(j.jsx)("button",{className:"modal__close",onClick:e.closeModal}),e.children]})})})},m=a(75),b=a(74),h=a(9),p=a.n(h),v=(a(29),a(30),a(60),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(i.a)(n,2),o=r[0],h=r[1],v=Object(c.useState)(),O=Object(i.a)(v,2),g=O[0],x=O[1];Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.themoviedb.org/3/movie/popular?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1");case 2:t=e.sent,s(t.data.results.slice(0,5));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var f=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,p.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=190eda9df5172483ad9af3e885997915&language=ru&append_to_response=videos,images"));case 3:a=e.sent,x(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"section slider",children:[Object(j.jsx)(m.a,{grabCursor:!0,spaceBetween:0,slidesPerView:1,children:a.map((function(e){return Object(j.jsx)(b.a,{children:Object(j.jsxs)("div",{className:"slider__item",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(e.backdrop_path,")")},children:[Object(j.jsxs)("div",{className:"slider__item-content",children:[Object(j.jsx)("h1",{className:"slider__item-title",children:e.title+" ("+e.release_date.slice(0,4)+")"}),Object(j.jsx)("p",{className:"slider__item-desc",children:e.overview}),Object(j.jsxs)("button",{onClick:function(){return f(e.id)},className:"slider__item-button",children:[Object(j.jsx)("svg",{width:"25",height:"30",viewBox:"0 0 25 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M23.1563 13.4273L23.6837 12.5777L23.1588 13.4289C24.2806 14.1206 24.2806 15.8722 23.1576 16.5669L23.1565 16.5676L3.5131 28.7546L3.51172 28.7555C2.47462 29.4012 1 28.6758 1 27.1845V2.80465C1 1.95276 1.40383 1.44202 1.88393 1.19172C2.39959 0.922881 3.03227 0.936355 3.51292 1.23446C3.51298 1.23449 3.51304 1.23453 3.5131 1.23457L23.1563 13.4273Z",stroke:"black",strokeWidth:"2"})}),"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"]})]}),Object(j.jsx)("img",{className:"slider__item-poster",src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.title})]})},e.id)}))}),Object(j.jsx)(u,{closeModal:function(){return h(!1)},active:o,children:g&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("iframe",{width:"100%",height:"300px",src:"https://www.youtube.com/embed/".concat(g.videos.results[0].key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})})}),O=a(10),g=(a(61),function(e){var t=e.moviesList,a=e.title,c=e.getId,s=e.category;return Object(j.jsxs)("section",{className:"section movie-list",children:[Object(j.jsx)("h2",{className:"movie-list__title",children:a}),Object(j.jsx)(m.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:t.results&&Object(j.jsx)(j.Fragment,{children:t.results.map((function(e){return Object(j.jsx)(b.a,{onClick:function(){return c(e.id,s)},children:Object(j.jsx)(O.b,{to:"detail/".concat(e.id),children:Object(j.jsxs)("div",{className:"movie-list__content",children:[Object(j.jsx)("div",{className:"movie-list__content-img ".concat(e.poster_path?"":"movie-list__content-img-none"),children:e.poster_path?Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:""}):""}),Object(j.jsx)("h3",{className:"movie-list__content-title",children:e.title||e.name})]})})},e.id)}))})})]})}),x=function(e){var t=e.getId,a=Object(c.useState)([]),s=Object(i.a)(a,2),n=s[0],r=s[1],o=Object(c.useState)([]),u=Object(i.a)(o,2),m=u[0],b=u[1],h=Object(c.useState)([]),O=Object(i.a)(h,2),x=O[0],f=O[1],_=Object(c.useState)([]),w=Object(i.a)(_,2),N=w[0],y=w[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.themoviedb.org/3/movie/popular?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1");case 2:return t=e.sent,e.next=5,p.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1");case 5:return a=e.sent,e.next=8,p.a.get("https://api.themoviedb.org/3/tv/popular?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1");case 8:return c=e.sent,e.next=11,p.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1");case 11:s=e.sent,r(t.data),b(a.data),f(c.data),y(s.data);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(v,{}),Object(j.jsx)(g,{moviesList:n,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",category:"movie",getId:t}),Object(j.jsx)(g,{moviesList:m,title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",category:"movie",getId:t}),Object(j.jsx)(g,{moviesList:x,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b",category:"tv",getId:t}),Object(j.jsx)(g,{moviesList:N,title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b",category:"tv",getId:t})]})},f=(a(70),function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t=function(){document.documentElement.scrollTop>100?e.current.classList.add("header--sticky"):e.current.classList.remove("header--sticky")};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),Object(j.jsx)("header",{className:"header",ref:e,children:Object(j.jsxs)("div",{className:"header-inner",children:[Object(j.jsx)(O.b,{to:"",children:Object(j.jsxs)("div",{className:"header__logo",children:[Object(j.jsxs)("svg",{width:"60",height:"44",viewBox:"0 0 60 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M55.8621 0H4.13793C1.86207 0 0 1.84186 0 4.09302V37.3488C0 38.2186 0.672414 38.8837 1.55172 38.8837C2.43103 38.8837 3.10345 38.2186 3.10345 37.3488V33.7674H7.75862V40.9302H6.72414C5.84483 40.9302 5.17241 41.5953 5.17241 42.4651C5.17241 43.3349 5.84483 44 6.72414 44H55.8621C58.1379 44 60 42.1581 60 39.907V4.09302C60 1.84186 58.1379 0 55.8621 0ZM3.10345 13.3023H7.75862V20.4651H3.10345V13.3023ZM52.2414 13.3023H56.8965V20.4651H52.2414V13.3023ZM52.2414 23.5349H56.8965V30.6977H52.2414V23.5349ZM56.8965 4.09302V10.2326H52.2414V3.06977H55.8621C56.431 3.06977 56.8965 3.53023 56.8965 4.09302ZM4.13793 3.06977H7.75862V10.2326H3.10345V4.09302C3.10345 3.53023 3.56897 3.06977 4.13793 3.06977ZM3.10345 30.6977V23.5349H7.75862V30.6977H3.10345ZM55.8621 40.9302H52.2414V33.7674H56.8965V39.907C56.8965 40.4698 56.431 40.9302 55.8621 40.9302Z",fill:"#444B54"}),Object(j.jsx)("path",{d:"M26.5345 16.0139L34.7069 20.6697C35.7414 21.2837 35.7414 22.7163 34.7069 23.3302L26.5345 27.986C25.5 28.6 24.2069 27.8325 24.2069 26.6558V17.3442C24.2069 16.1674 25.5 15.4 26.5345 16.0139Z",fill:"#FF5576"})]}),Object(j.jsx)("p",{className:"header__logo-title",children:"React movies"})]})}),Object(j.jsx)("nav",{className:"nav",children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)("li",{className:"nav__list-item",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(j.jsx)("li",{className:"nav__list-item",children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"}),Object(j.jsx)("li",{className:"nav__list-item",children:"\u041f\u043e\u0438\u0441\u043a"})]})})]})})}),_=(a(71),function(e){var t=e.movieId,a=Object(c.useState)([]),s=Object(i.a)(a,2),n=s[0],r=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.themoviedb.org/3/".concat(t[1],"/").concat(t[0],"?api_key=190eda9df5172483ad9af3e885997915&language=ru"));case 2:a=e.sent,r(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)(j.Fragment,{children:n&&Object(j.jsx)("div",{className:"detail",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(n.backdrop_path,")")}})})}),w=a(3);var N=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("movieId"))||[]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsxs)(w.c,{children:[Object(j.jsx)(w.a,{path:"",exact:!0,children:Object(j.jsx)(x,{getId:function(e,t){s([e,t]),localStorage.setItem("movieId",JSON.stringify([e,t]))}})}),Object(j.jsx)(w.a,{path:"detail/:id",exact:!0,children:Object(j.jsx)(_,{movieId:a})})]})]})};a(72);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O.a,{children:Object(j.jsx)(N,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.cb7e5ad0.chunk.js.map