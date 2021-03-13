<template>

      <b-container>
      <b-row class="text-center"> 
       
 <b-card-group>
 
                <b-card :title="MedicineInfo.title">
             
      <b-card-text>
       <h6> রোগের  নাম : <NuxtLink :to="`/disease/${MedicineInfo.disease['diseasename']}`">{{MedicineInfo.disease['diseasename']}}</NuxtLink> </h6>
              <h6> রোগের  কারণ : {{MedicineInfo.disease['description']}}</h6>  
      </b-card-text>
       <h3>বিস্তারিত :</h3> <br> <span v-html="MedicineInfo.description"> </span>
      
<hr>

       ঔষধ  : <span v-for="dis in Medicine " :key="dis.id"><NuxtLink :to="`/medicine/${dis}`">{{dis}} </NuxtLink></span>
       <hr>
      <template #footer>
        <small class="text-muted">Last updated {{MedicineInfo.created_at | timeformat}}</small>
        
      </template>
     
       <b-col>
           <b-list-group horizontal="md">
    <b-list-group-item>
      <ShareNetwork
    network="facebook"
    :url="`https://homeobari.com/homeo-info/${this.$route.params.id}`"
    :title="`${title}`"
    :description="`${MedicineInfo.metadescription}`"
    :quote="`Post By - ${MedicineInfo.admin['name']}`"
    hashtags="homeobari"
  >
    <b-icon-facebook scale="2" variant="primary" b-tooltip.hover title="Share On Facebook"></b-icon-facebook>
    </ShareNetwork>
    </b-list-group-item>
    <b-list-group-item>
                    <ShareNetwork
    network="twitter"
    :url="`https://homeobari.com/homeo-info/${this.$route.params.id}`"
    :title="`${title}`"
    :description="`${MedicineInfo.metadescription}`"
    :quote="`${MedicineInfo.admin['name']}`"
    hashtags="homeobari"
  >
    <b-icon-twitter scale="2" variant="primary" b-tooltip.hover title="Share On Twitter"></b-icon-twitter>
</ShareNetwork>
    </b-list-group-item>
      <b-list-group-item>
        <ShareNetwork
    network="instapaper"
    :url="`https://homeobari.com/homeo-info/${this.$route.params.id}`"
    :title="`${title}`"
    :description="`${MedicineInfo.metadescription}`"
    :quote="`${MedicineInfo.admin['name']}`"
    hashtags="homeobari"
  >
    <b-icon-instagram scale="2" variant="primary" b-tooltip.hover title="Share On Instagram">

    </b-icon-instagram>
</ShareNetwork>
                
 </b-list-group-item>  
 <b-list-group-item>  
 
                 <ShareNetwork
    network="linkedin"
    :url="`https://homeobari.com/homeo-info/${this.$route.params.id}`"
    :title="`${title}`"
    :description="`${MedicineInfo.metadescription}`"
    :quote="`${MedicineInfo.admin['name']}`"
    hashtags="homeobari"
  >
    <b-icon-linkedin scale="2" variant="primary" b-tooltip.hover title="Share On Linkedin"></b-icon-linkedin>
</ShareNetwork>
      </b-list-group-item>

      <b-list-group-item>
                   
                   <b-icon icon="eye-fill"></b-icon> {{Views}}
                 
                </b-list-group-item>
  </b-list-group>

                    </b-col>
    </b-card>
    
           </b-card-group> 
         
          
             

  



</b-row>
</b-container>


</template>

<script>



export default {
name: "Medicineinformation",
  data() {
    return {
     
       allMedisineinfo:[],
       Medicine:[],
           allDisease:[],
           Views:0,
             MedicineInfo:{
               admin:[],
               disease:{disemedicine:[],
              },
             title:'Homeo Medicine Inforomation'
               },
         
          
    };
  },
   head () {
     
      return {
          title:this.title,
         meta: [
        
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
         hid: 'metatitle',
        name: 'metatitle',
        property: "og:metatitle",
          content: ` ${this.MedicineInfo.title}`
        },
        {
         hid: 'description',
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
          {property: 'og:image', content:`https://homeobari.com/den/storage/app/files/shares/blog/${this.MedicineInfo.photo}`
          },  
          
        {
          key: "og:description",
          name: "twitter:description",
          property: "og:description",
          content: this.MedicineInfo.metadescription
        }
      ],
            __dangerouslyDisableSanitizers: ['script'],
                script: [{
                    innerHTML:(this.MedicineInfo.schemainfo),
                    type: 'application/ld+json'
                }],
    
      
      }},
 

async fetch() {
  this.$axios.$get(`/homeo-info/${this.$route.params.id}`)
          .then(response=>{
              this.MedicineInfo=response.medicineinformation;
                this.Medicine=JSON.parse(response.medicineinformation.disease.disemedicine.medicine);
              this.Views=response.totalview;
              
          })
  },
  mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });  
 
  },

  methods: {
 
  }
};
</script>



