(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{456:function(e,t,n){"use strict";n.r(t);n(46),n(91);var r=n(43),o={name:"disease-info",data:function(){return{allDisease:[]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/disease-info/".concat(e.$route.params.id)).then((function(t){e.allDisease=t.disease}));case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start(),setTimeout((function(){return e.$nuxt.$loading.finish()}),500)}))},methods:{}},c=n(62),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"container"},[n("b-card",{staticClass:"img-fluid",attrs:{title:e.allDisease.diseasename,"img-alt":e.allDisease.diseasename,"img-top":""}},[n("b-card-text",[e._v("\r\n      "+e._s(e.allDisease.description)+"\r\n    ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);