<template>

      <b-row>
  <b-card   v-for="card in allDisease"
          :key="card.id"
    :title="card.diseasename"
    :img-src="`http://127.0.0.1:8000/storage/files/diseases/${card.diseaseimage}`"
    :img-alt="card.diseasename"
    img-top
    tag="article"
   class="mb-2 img-fluid col-md-3 m-1"
  >
    <b-card-text>
      {{card.description}}
    </b-card-text>
<NuxtLink :to="`/disease/${card.slug}`">Details

</NuxtLink>
   </b-card>

      </b-row>

</template>

<script>



export default {

  name: "Diseasedetails",
  data() {
    return {
     
       allMedisineinfo:[],
           allDisease:[],
            //  medicineinformation:[],
         
           page: 1,
    };
  },
  created() {
    // document.title = "Disease Details";

  },
  mounted() {
       this.$eventBus.$emit("loadingHome", true);
   axios.get(`/disease/${this.$route.params.id}`)
          .then(response=>{
              this.Diseaseinfo=response.data;
                this.$eventBus.$emit("loadingHome", false);
          })
  },

  methods: {
 
  }
};
</script>
