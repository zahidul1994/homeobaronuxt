<template>

      <b-container>
      <b-row>
  <b-card   v-for="card in allDisease"
          :key="card.id"
    :title="card.diseasename"
    :img-src="`https://homeobari.com/den/storage/app/files/shares/diseases/${card.diseaseimage}`"
    :img-alt="card.diseasename"
    img-top
    tag="article"
   class="my-2 img-fluid col-md-3  shadow rounded p-3"
  >
    <b-card-text>
      {{card.description}}
    </b-card-text>
<NuxtLink :to="`/disease-info/${card.slug}`" class=" btn btn-sm btn-outline-primary"
                        b-tooltip.hover title="Click For details">
                        <b-icon icon="box-arrow-in-up-right"></b-icon>

                      </NuxtLink>

   </b-card>
<infinite-loading @infinite="infiniteHandler"></infinite-loading>
     </b-row>
</b-container>

</template>

<script>
export default {
  
  name: "medicine",
  data() {
    return {
     
     
       allMedisineinfo:[],
           allDisease:[],
                  
           page: 1,
    };
  },
  created() {
      this.infiniteHandler();

  },
  mounted() {
 
	 this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });
  },

  methods: {
    
 infiniteHandler($state) {
       
                this.$axios.$get('/disease?page='+this.page)
                   
                      .then(({ data }) => {
                         
        if (data.length) {
          this.page += 1;
          this.allDisease.push(...data);
         // $state.loaded();
        } else {
          $state.complete();
        }
      });
	  

                
            },
 ShowDiseaseinfo(id){
this.$axios.$get(`/medisioneinfodetails/${id}`)
          .then(response=>{
              this.allMedisineinfo=response.data.diseaseinfo;
              this.dialog=true;
          })
  }
  }
};
</script>
