"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{4126:function(e,t,r){r.d(t,{e:function(){return c}});var n=r(7689),a=r(1087),u=r(184),c=function(e){var t=e.movieList,r=(0,n.TH)();return(0,u.jsx)("ul",{children:Array.isArray(t)&&(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.name,c=e.title;return(0,u.jsx)(a.rU,{style:{textDecoration:"none"},state:{from:r},to:"/movies/".concat(t),children:(0,u.jsx)("h3",{children:n||c})},t)})))})}},2667:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2791),i=r(1087),o=r(8494),f=r(1686),p=r(4126),l=r(5067),v=r(4952),h=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],d=(0,s.useState)(!1),m=(0,a.Z)(d,2),x=m[0],w=m[1],y=(0,s.useState)(null),g=(0,a.Z)(y,2),b=g[0],k=g[1],Z=(0,i.lr)(),j=(0,a.Z)(Z,2),q=j[0],F=j[1],S=q.get("query");return(0,s.useEffect)((function(){if(null!==S&&void 0!==S&&S.trim()){var e=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,v.qF)(t);case 4:0===(r=e.sent).length&&f.Notify.info("No results for ".concat(t)),u(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();e(S)}}),[S]),(0,s.useEffect)((function(){null!==b&&f.Notify.failure("An error has occurred ".concat(b))}),[b]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===e.currentTarget.search.value&&f.Notify.warning("Fill in the input field!"),F({query:e.currentTarget.search.value}),e.target.reset()},children:[(0,h.jsx)("input",{name:"search",placeholder:"search..."}),(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)(o.Yfv,{})})]}),x&&(0,h.jsx)(l.a,{}),(0,h.jsx)(p.e,{movieList:r})]})}},4952:function(e,t,r){r.d(t,{QV:function(){return f},TP:function(){return o},fz:function(){return p},qF:function(){return i},vF:function(){return s}});var n=r(5861),a=r(7757),u=r.n(a),c=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"3181cdf2e58737cb479bdcab3d178467",language:"en-US"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=667.e99e41fa.chunk.js.map