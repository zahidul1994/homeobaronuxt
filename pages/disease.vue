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
   class="my-2 img-fluid col-md-3"
  >
    <b-card-text>
      {{card.description}}
    </b-card-text>
<router-link :to="`/disease/${card.slug}`">Details

</router-link>

   </b-card>
<infinite-loading @infinite="infiniteHandler"></infinite-loading>
     </b-row>
</b-container>

</template>

<script>
export default {
  
  name: "disease",
  data() {
    return {
     
     
       allMedisineinfo:[],
           allDisease:[],
            //  medicineinformation:[],
         
           page: 1,
    };
  },
  created() {
    // document.title = "Disease";

  },
  mounted() {
    this.infiniteHandler();
  },

  methods: {
 infiniteHandler($state) {
       this.$eventBus.$emit("loadingHome", true);
                this.$axios.$get('/disease?page='+this.page)
                   
                      .then(({ data }) => {
                     this.$eventBus.$emit("loadingHome", false);     
        if (data.data.length) {
          this.page += 1;
          this.allDisease.push(...data.data);
          $state.loaded();
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
