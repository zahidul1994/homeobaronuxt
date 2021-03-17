<template>
<section>
    <div class="container">
    
  <b-card 
      
    :title="allDisease.diseasename"
   :img-alt="allDisease.diseasename"
    img-top
      class="img-fluid"
  >
    <b-card-text>
      {{allDisease.description}}
    </b-card-text>

   </b-card>
   
    </div>
      </section>

</template>

<script>



export default {

  name: "disease-info",
  data() {
    return {
     
           allDisease:[],
          
    };
  },
   async fetch() {
            
      await this.$axios.$get(`/disease-info/${this.$route.params.id}`)
          .then(response=>{
              this.allDisease=response.disease;
               
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
