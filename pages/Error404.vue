<template>

      <b-container>

<h1>Page Under Constraction </h1>
</b-container>

</template>

<script>
export default {
 
  name: "Contact",
  data() {
    return {
     
     
      
    };
  },
  created() {
    document.title = "Not Found";

      

  },
  mounted() {
      
  },

  methods: {

 ShowDiseaseinfo(id){
axios.get(`/medisioneinfodetails/${id}`)
          .then(response=>{
              this.allMedisineinfo=response.data.diseaseinfo;
              this.dialog=true;
          })
  }
  }
};
</script>
