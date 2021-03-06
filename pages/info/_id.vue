<template>
<section>
    <div class="container">
      <b-row class="text-center"  v-if="Bloginfo.photo !=null"> 
     
 <b-card-group>
  
                <b-card>
              <h1>{{Bloginfo.title}}</h1>
  
      
      <span v-html="Bloginfo.description"></span>
  
      <template #footer>
           <router-link variant="primary" :to="`/blog/${Bloginfo.category.category}`" 
                        v-b-tooltip.hover title="Click For details">
               {{Bloginfo.category.category}}
                 </router-link>
        <small class="text-muted">Last updated {{Bloginfo.created_at | timeformat}}</small>
        
        <small v-if="Bloginfo.tag.length"> 
                    <span v-for="(taginfo,index) in JSON.parse(Bloginfo.tag)" :key="index"><b-badge variant="primary" pill>{{taginfo}}</b-badge> </span>
                     
                     </small> 
                  
 
      </template>
  
            <div>
  <b-list-group horizontal="md">
    <b-list-group-item><div class="fb-share-button" :data-href="`https://www.homeobari.com/info/${this.$route.params.id}`"
                  data-layout="button_count" ></div></b-list-group-item>
    <b-list-group-item><a
                  :href="`https://twitter.com/share?text=${this.$route.params.id}&url=${`https://www.homeobari.com/info/${this.$route.params.id}`}`"
                >Twitter</a></b-list-group-item>
      <b-list-group-item><a
                  :href="`https://www.linkedin.com/shareArticle??text=${this.$route.params.id}&url=${`https://www.homeobari.com/info/${this.$route.params.id}`}`"
                  onclick="window.open(this.href, 'instagram-share', 'width=550,height=235');return false"
                >Linkdin
                 
                </a></b-list-group-item>  
                 <b-list-group-item><b-icon icon="eye-fill"></b-icon> {{Views}}
                 
                </b-list-group-item>
  </b-list-group>
</div>

                
                     
    </b-card>
    
           </b-card-group> 

  <b-media right-align vertical-align="center">
    <template #aside>
      <b-img thumbnail  :src="`https://homeobari.com/den/storage/app/files/shares/profileimage/thumbs/${Bloginfo.admin['image']}`" width="80" :alt="Bloginfo.admin['name']"></b-img>
      
    </template>
    <h5 class="mt-0 mb-1">
       <router-link :to="`/profile/${Bloginfo.admin['name']}`">Post By- {{Bloginfo.admin['name']}}</router-link></h5>
    <p class="mb-0">
     {{Bloginfo.admin['aboutyou']}}
    </p>
  </b-media>

           
           <h3 class="m-4">Related Blog</h3> <br>
              <b-card v-for="card in RelatedBlog" :key="card.id" :title="card.title"
                  :img-src="`https://homeobari.com/den/storage/app/files/shares/blog/${card.photo}`"
                  :img-alt="card.titile" img-top tag="article" class="mb-2 img-fluid m-1 col-md-2">
                 <router-link :to="`/details/${card.slug}`" 
                        b-tooltip.hover title="Click For details">
                       
                  <b-card-text>
                    {{card.metadescription}}
                  </b-card-text>
                 </router-link>

                 </b-card>
          
              <div class="fb-comments col-md-12"
              :data-href="`https://homeobari.com/info/${Bloginfo.slug}`"
              data-numposts="5"
              
            ></div>


</b-row>
</div>

</section>

</template>

<script>



export default {
name: "Blogdetails",
  data() {
    return {
     Blogschemainfo:{},
      Bloginfo:{
               admin:[],
               category:[],
               tag:[],
             
               },
             Views:0,
            RelatedBlog:[],
          
title: 'Blog info'  

   };
    },

   head () {
     
      return {
          title:this.title,
         meta: [
        
        {
          key: "og:url",
          property: "og:url",
          content: `https://www.homeobari.com/info/${this.$route.params.id}`
        },
        {
          key: "og:keyword",
          name: "keyword",
          property: "og:keyword",
          content: this.Bloginfo.keyword
        },
        {
         hid: 'metatitle',
        name: 'metatitle',
        property: "og:metatitle",
          content: ` ${this.Bloginfo.title}`
        },
        {
         hid: 'description',
          name: "description",
          property: "og:description",
          content: this.Bloginfo.metadescription
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: `${this.$route.params.id}`
        },
        {
          name: "twitter:card",
          property: "og:keyword",
          content: "summary_large_image"
        },
          {property: 'og:image', content:`https://homeobari.com/den/storage/app/files/shares/blog/${this.Bloginfo.photo}`
          },  
          
        {
          key: "og:description",
          name: "twitter:description",
          property: "og:description",
          content: this.Bloginfo.metadescription
        }
      ],
            __dangerouslyDisableSanitizers: ['script'],
                script: [{
                    innerHTML:(this.Blogschemainfo),
                    type: 'application/ld+json'
                }],
    
      
      }},
   created() {
      

  },
    
  mounted() {
    
     this.$eventBus.$emit("loadingHome", true);
       
     this.$axios.$get(`/info/${this.$route.params.id}`)
          .then(response=>{
            this.Blogschemainfo=response.blogs.schemainfo;
              this.Bloginfo=response.blogs;
              this.title=response.blogs.title;
              //console.log(this.Bloginfo);
                this.Views=response.totalview;
              this.RelatedBlog=response.relatedblog;
                this.$eventBus.$emit("loadingHome", false);
          });
//this.getAsyncData();
    
  
//  (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'))
      
  },

  methods: {
    getAsyncData: function () {
  //   var self = this
  //   window.setTimeout(function () {
  //      const sd = document.getElementById('stimulsoft')
  // sd.onload = this.Blogschemainfo;
  //         self.$emit('updateHead')
  //   }, 3000)
 
}
  }
};
</script>
