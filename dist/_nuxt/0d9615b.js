(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{457:function(t,e,o){"use strict";o.r(e);o(46),o(91);var n=o(43),r={name:"Blogdetails",data:function(){return{Blogschemainfo:{},Bloginfo:{admin:[],category:[],tag:[]},Views:0,RelatedBlog:[],title:"Blog info"}},head:function(){return{title:this.title,meta:[{key:"og:url",property:"og:url",content:"https://www.homeobari.com/info/".concat(this.$route.params.id)},{key:"og:keyword",name:"keyword",property:"og:keyword",content:this.Bloginfo.keyword},{hid:"metatitle",name:"metatitle",property:"og:metatitle",content:" ".concat(this.Bloginfo.title)},{hid:"description",name:"description",property:"og:description",content:this.Bloginfo.metadescription},{key:"twitter:title",name:"twitter:title",content:"".concat(this.$route.params.id)},{name:"twitter:card",property:"og:keyword",content:"summary_large_image"},{property:"og:image",content:"https://homeobari.com/den/storage/app/files/shares/blog/".concat(this.Bloginfo.photo)},{key:"og:description",name:"twitter:description",property:"og:description",content:this.Bloginfo.metadescription}],__dangerouslyDisableSanitizers:["script"],script:[{innerHTML:this.Blogschemainfo,type:"application/ld+json"}]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/info/".concat(t.$route.params.id)).then((function(e){t.Blogschemainfo=e.blogs.schemainfo,t.Bloginfo=e.blogs,t.title=e.blogs.title,t.Views=e.totalview,t.RelatedBlog=e.relatedblog}));case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){var t,s,e,o,n,r=this;this.$nextTick((function(){r.$nuxt.$loading.start(),setTimeout((function(){return r.$nuxt.$loading.finish()}),500)})),t=document,s="script",e="facebook-jssdk",n=t.getElementsByTagName(s)[0],t.getElementById(e)||((o=t.createElement(s)).id=e,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",n.parentNode.insertBefore(o,n))},methods:{getAsyncData:function(){}}},l=o(62),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"container"},[null!=t.Bloginfo.photo?o("b-row",{staticClass:"text-center"},[o("b-card-group",[o("b-card",{scopedSlots:t._u([{key:"footer",fn:function(){return[o("NuxtLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",to:"/blog/"+t.Bloginfo.category.category,title:"Click For details"}},[t._v("\r\n               "+t._s(t.Bloginfo.category.category)+"\r\n                 ")]),t._v(" "),o("small",{staticClass:"text-muted"},[t._v("Last updated "+t._s(t._f("timeformat")(t.Bloginfo.created_at)))]),t._v(" "),t.Bloginfo.tag.length?o("small",t._l(JSON.parse(t.Bloginfo.tag),(function(e,n){return o("span",{key:n},[o("b-badge",{attrs:{variant:"primary",pill:""}},[t._v(t._s(e))])],1)})),0):t._e()]},proxy:!0}],null,!1,3427775260)},[o("h1",[t._v(t._s(t.Bloginfo.title))]),t._v(" "),o("span",{domProps:{innerHTML:t._s(t.Bloginfo.description)}}),t._v(" "),t._v(" "),o("div",[o("b-list-group",{attrs:{horizontal:"md"}},[o("b-list-group-item",[o("ShareNetwork",{attrs:{network:"facebook",url:"https://homeobari.com/info/"+this.$route.params.id,title:""+t.title,description:""+t.Bloginfo.metadescription,quote:"Post By - "+t.Bloginfo.admin.name,hashtags:"homeobari"}},[o("b-icon-facebook",{attrs:{scale:"2",variant:"primary","b-tooltip.hover":"",title:"Share On Facebook"}})],1)],1),t._v(" "),o("b-list-group-item",[o("ShareNetwork",{attrs:{network:"twitter",url:"https://homeobari.com/info/"+this.$route.params.id,title:""+t.title,description:""+t.Bloginfo.metadescription,quote:""+t.Bloginfo.admin.name,hashtags:"homeobari"}},[o("b-icon-twitter",{attrs:{scale:"2",variant:"primary","b-tooltip.hover":"",title:"Share On Twitter"}})],1)],1),t._v(" "),o("b-list-group-item",[o("ShareNetwork",{attrs:{network:"instapaper",url:"https://homeobari.com/info/"+this.$route.params.id,title:""+t.title,description:""+t.Bloginfo.metadescription,quote:""+t.Bloginfo.admin.name,hashtags:"homeobari"}},[o("b-icon-instagram",{attrs:{scale:"2",variant:"primary","b-tooltip.hover":"",title:"Share On Instagram"}})],1)],1),t._v(" "),o("b-list-group-item",[o("ShareNetwork",{attrs:{network:"linkedin",url:"https://homeobari.com/info/"+this.$route.params.id,title:""+t.title,description:""+t.Bloginfo.metadescription,quote:""+t.Bloginfo.admin.name,hashtags:"homeobari"}},[o("b-icon-linkedin",{attrs:{scale:"2",variant:"primary","b-tooltip.hover":"",title:"Share On Linkedin"}})],1)],1),t._v(" "),o("b-list-group-item",[o("b-icon",{attrs:{icon:"eye-fill"}}),t._v(" "+t._s(t.Views)+"\r\n                 \r\n                ")],1)],1)],1)])],1),t._v(" "),o("b-media",{attrs:{"right-align":"","vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[o("b-img",{attrs:{thumbnail:"",src:"https://homeobari.com/den/storage/app/files/shares/profileimage/"+t.Bloginfo.admin.image,width:"80",alt:t.Bloginfo.admin.name}})]},proxy:!0}],null,!1,3946833222)},[t._v(" "),o("h5",{staticClass:"mt-0 mb-1"},[o("NuxtLink",{attrs:{to:"/profile/"+t.Bloginfo.admin.username}},[t._v("Post By- "+t._s(t.Bloginfo.admin.name))])],1),t._v(" "),o("p",{staticClass:"mb-0"},[t._v("\r\n     "+t._s(t.Bloginfo.admin.aboutyou)+"\r\n    ")])]),t._v(" "),t._l(t.RelatedBlog,(function(e){return o("b-card",{key:e.id,staticClass:"my-1 img-fluid col-md-2",attrs:{title:e.title,"img-src":"https://homeobari.com/den/storage/app/files/shares/blog/"+e.photo,"img-alt":e.titile,"img-top":"",tag:"article"}},[o("NuxtLink",{attrs:{to:"/info/"+e.slug,"b-tooltip.hover":"",title:"Click For details"}},[o("b-card-text",[t._v("\r\n                    "+t._s(t._f("shortlength")(e.metadescription,50," .."))+"\r\n                  ")])],1)],1)})),t._v(" "),o("div",{staticClass:"fb-comments col-md-12",attrs:{"data-href":"https://homeobari.com/info/"+t.Bloginfo.slug,"data-numposts":"5"}})],2):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);