(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{453:function(t,e,n){"use strict";n.r(e);n(46);var o=n(40),l={name:"medicine",data:function(){return{allMedisineinfo:[],allDisease:[],page:1}},created:function(){this.infiniteHandler()},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))},methods:{infiniteHandler:function(t){var e=this;this.$axios.$get("/disease?page="+this.page).then((function(n){var l,data=n.data;data.length?(e.page+=1,(l=e.allDisease).push.apply(l,Object(o.a)(data))):t.complete()}))},ShowDiseaseinfo:function(t){var e=this;this.$axios.$get("/medisioneinfodetails/".concat(t)).then((function(t){e.allMedisineinfo=t.data.diseaseinfo,e.dialog=!0}))}}},r=n(62),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[t._l(t.allDisease,(function(e){return n("b-card",{key:e.id,staticClass:"my-2 img-fluid col-md-3  shadow rounded p-3",attrs:{title:e.diseasename,"img-src":"https://homeobari.com/den/storage/app/files/shares/diseases/"+e.diseaseimage,"img-alt":e.diseasename,"img-top":"",tag:"article"}},[n("b-card-text",[t._v("\n      "+t._s(e.description)+"\n    ")]),t._v(" "),n("NuxtLink",{staticClass:" btn btn-sm btn-outline-primary",attrs:{to:"/disease-info/"+e.slug,"b-tooltip.hover":"",title:"Click For details"}},[n("b-icon",{attrs:{icon:"box-arrow-in-up-right"}})],1)],1)})),t._v(" "),n("infinite-loading",{on:{infinite:t.infiniteHandler}})],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);