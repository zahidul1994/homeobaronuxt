<template>

      <b-container>
      <b-row class="text-center"> 
       
 <b-card-group>
                <b-card :title="MedicineInfo.title"   >
             
      <b-card-text>
       <h6> রোগের  নাম : <NuxtLink :to="`/disease/${MedicineInfo.disease['diseasename']}`">{{MedicineInfo.disease['diseasename']}}</NuxtLink> </h6>
              <h6> রোগের  কারণ : {{MedicineInfo.disease['description']}}</h6>  
      </b-card-text>
      
      <span v-html="MedicineInfo.description"></span>
     <span v-for="dis in MedicineInfo.disease.disemedicine.medicine" :key="dis.id"><NuxtLink :to="`/medicine/${dis.medicinename}`">{{dis.medicinename}} </NuxtLink></span>
      <template #footer>
        <small class="text-muted">Last updated {{MedicineInfo.created_at | timeformat}}</small>
        
      </template>
     
       <b-col>
                        <ul class="btm-social mb-0 mt-2">
                            <li><div class="fb-share-button" :data-href="`https://www.homeobari.com/homeo-info/${this.$route.params.id}`"
                  data-layout="button_count" ></div></li>
                            <li> <a
                  :href="`https://twitter.com/share?text=${this.$route.params.id}&url=${`https://www.homeobari.com/homeo-info/${this.$route.params.id}`}`"
                  onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"
                >
                  <i class="fab fa-twitter"></i>
                </a></li>
                            <li><a
                  :href="`https://www.instagram.com/share?text=${this.$route.params.id}&url=${`https://www.homeobari.com/homeo-info/${this.$route.params.id}`}`"
                  onclick="window.open(this.href, 'instagram-share', 'width=550,height=235');return false"
                >
                  <i class="fab fa-instagram"></i>
                </a></li>
                   <li> <p class="text-blue">
              <span>
                {{Views}}
                <i class="far fa-eye" aria-hidden="true"></i> views
              </span>
            </p></li>
                        </ul>
                    </b-col>
    </b-card>
    
           </b-card-group> 
         
          
              <div class="fb-comments col-md-12"
              :data-href="`https://homeobari.com/homeo-info/${MedicineInfo.slug}`"
              data-numposts="5"
              
            ></div>

  

  



</b-row>
</b-container>


</template>

<script>



export default {
name: "Medicineinformation",
  data() {
    return {
     
       allMedisineinfo:[],
           allDisease:[],
           Views:0,
             MedicineInfo:{
               admin:[],
               disease:{disemedicine:[],
               medicine:[],},
             
               },
         
          
    };
  },
  
  metaInfo() {
    return {
      meta: [
        { key: "indexing", name: "robots", content:'index, follow' },
        {
          key: "og:url",
          property: "og:url",
          content: `https://www.homeobari.com/homeo-info/${this.$route.params.id}`
        },
        {
          key: "og:keyword",
          name: "keyword",
          property: "og:keyword",
          content: this.MedicineInfo.keyword
        },
        {
          key: "og:description",
          name: "description",
          property: "og:description",
          content: this.MedicineInfo.metadescription
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
        {
          key: "og:description",
          name: "twitter:description",
          property: "og:description",
          content: this.MedicineInfo.metadescription
        }
      ]
    };
  },

  created() {

// (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'))
  },
  mounted() {
       this.$eventBus.$emit("loadingHome", true);
   this.$axios.$get(`/homeo-info/${this.$route.params.id}`)
          .then(response=>{
              this.MedicineInfo=response.medicineinformation;
              this.Views=response.totalview;
                this.$eventBus.$emit("loadingHome", false);
          })
  },

  methods: {
 
  }
};
</script>
