<template>
  <div class="container">

       <!--recent area-->
        <div class="recent-view">
          <h3 class="mb-4">Recently Homeoinfo </h3>

          <div class="row">
            <div class="col-md-12">

              <slick :options="slickOptions" v-if="RecentMedicineInformation.length">
                <b-card v-for="card in RecentMedicineInformation" :key="card.id"   
                  :img-src="`https://homeobari.com/den/storage/app/files/shares/medicineinformation/${card.photo}`"
                  :img-alt="card.photo" 
                   img-top 
                   class="img-fluid"
                  >
                 <NuxtLink :to="`/homeo-info/${card.slug}`" 
                        b-tooltip.hover title="Click For details">
                       <b-card-title> {{card.title}}</b-card-title>
                  
                 </NuxtLink>

                 </b-card>


              </slick>
            </div>



          </div>
        </div>
        <!--recent news-->
        <div class="recent-view">
          <h3 class="mb-4">Recently News</h3>

          <div class="row">
            <div class="col-md-12">

              <slick :options="slickOptions" v-if="RecentNews.length">
                <b-card v-for="card in RecentNews" :key="card.id" 
                  :img-src="`https://homeobari.com/den/storage/app/files/shares/blog/${card.photo}`"
                  :img-alt="card.photo" img-top tag="article" class="img-fluid">
                 <NuxtLink :to="`/info/${card.slug}`" 
                        b-tooltip.hover title="Click For details">
                   <b-card-title> {{card.title}}</b-card-title>
                 </NuxtLink>

                 </b-card>


              </slick>
            </div>



          </div>
        </div>

              <div class="recent-view">
          <h3 class="mb-4"> Disease Info</h3>

          <div class="row">
            <div class="col-md-12">

              <slick :options="slickOptions"  v-if="allDisease.length">
                <b-card v-for="card in allDisease" :key="card.id" :title="card.diseasename"
                  :img-src="`https://homeobari.com/den/storage/app/files/shares/diseases/${card.diseaseimage}`"
                  :img-alt="card.diseasename" img-top tag="article" class="img-fluid">
                  <b-card-text>
                    {{card.description}}
                  </b-card-text>


                  <b-row>
                    <b-col>
                      <b-button size="sm" variant="outline-info" v-b-tooltip.hover title="Click For Medicine Name"
                        b-modal.MedicineModal @click="ShowDisemedicineinfo(card.id)">
                        <b-icon icon="box-arrow-in-up-right"></b-icon>
                      </b-button>
                    </b-col>
                    <b-col></b-col>
                    <b-col>
                      <NuxtLink :to="`/disease/${card.slug}`" class=" btn btn-sm btn-outline-primary"
                        b-tooltip.hover title="Click For details">
                        <b-icon icon="box-arrow-in-up-right"></b-icon>

                      </NuxtLink>
                    </b-col>
                  </b-row>
                </b-card>


              </slick>
            </div>



          </div>
        </div>
        <div class="row">
          <div class="col-md-7 col-sm-1 text-right">

            <NuxtLink :to="`/disease`" class=" btn btn-outline-danger">See All </NuxtLink>
          </div>
        </div>
        <div class="recent-view">
          <h3 class="mb-4">Latest Medicine </h3>

          <div class="row">
            <div class="col-md-12">

              <slick :options="slickOptions" v-if="allMedicine.length">
           
      <b-card  text-variant="white" :header="med.medicinename"   :class="`bg-${med.color}`" class="text-center" v-for="med in allMedicine" :key="med.id"  >
       
                      
                       <b-card-text  >{{med.minides}}  </b-card-text>
                       <b-card-text> <NuxtLink :to="`/medicine/${med.slug}`"  v-b-tooltip.hover title="Click For Buy"><b-icon icon="box-arrow-in-up-right"></b-icon> </NuxtLink> </b-card-text>
        
      </b-card>
   
</slick>
            </div>


          </div>
        </div>
  <div class="row">
          <div class="col-md-7 col-sm-1 text-right mt-1">

            <NuxtLink :to="`/medicine`" class=" btn btn-outline-primary">See All </NuxtLink>
          </div>
        </div>
        <div class="recent-view">
          <h3 class="mb-4">Latest Medicine </h3>

          <div class="row">
            <div class="col-md-12">

              <slick :options="slickOptions" v-if="allDisease.length">
                <b-card v-for="card in allDisease" :key="card.id" :title="card.diseasename"
                  :img-src="`https://homeobari.com/den/storage/app/files/shares/diseases/${card.diseaseimage}`"
                  :img-alt="card.diseasename" img-top tag="article" class="img-fluid">
                  <b-card-text>
                    {{card.description}}
                  </b-card-text>


                  <b-row>
                    <b-col>
                      <b-button size="sm" variant="outline-info" b-tooltip.hover title="Click For Medicine Name"
                        v-b-modal.MedicineModal @click="ShowDisemedicineinfo(card.id)">
                       
                         <b-icon icon="view-list"></b-icon>
                      </b-button>
                    </b-col>
                    <b-col></b-col>
                    <b-col>
                      <NuxtLink :to="`/disease/${card.slug}`" class=" btn btn-sm btn-outline-primary"
                        b-tooltip.hover title="Click For details">
                        <b-icon icon="arrow-right-circle"></b-icon>

                      </NuxtLink>
                    </b-col>
                  </b-row>
                </b-card>


              </slick>
            </div>


          </div>
        </div>

<!--recent blog-->
        <div class="recent-view">
          <h3 class="mb-4">Recently Blog</h3>

          <div class="row">
            <div class="col-md-12">

              <slick ref="slick" :options="slickOptions" v-if="RecentBlog.length">
                <b-card v-for="card in RecentBlog" :key="card.id" 
                  :img-src="`https://homeobari.com/den/storage/app/files/shares/blog/${card.photo}`"
                  :img-alt="card.photo" img-top tag="article" class="img-fluid">
                 <NuxtLink :to="`/info/${card.slug}`" 
                         b-tooltip.hover title="Click For details">
                   <b-card-title> {{card.title}}</b-card-title>
                 </NuxtLink>

                 </b-card>


              </slick>
            </div>



          </div>
       
        </div>

   
    <b-modal id="MedicineModal" title="Medicine Information" ok-only >
      
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Medicine</th>
     </tr>
  </thead>
  <tbody>
    <tr v-for="(med,index) in Diseagemedicineinfo" :key="index">
      <th scope="row">{{index}}</th>
      <td>{{med}}</td>
      
    </tr>
   
  </tbody>
</table>
    
    </b-modal>

  

   
  </div>
</template>


<script>
  

// Import stylesheet

    export default {
      name: 'App',
    components: {
           
             Slick: () => import('vue-slick')
        },



        data(){
       return {
           
       
          authenticatedname:null,
         authenticatedimage:null,
         slickOptions: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          prevArrow:'<span class="left-round"></span>',
          nextArrow: '<span class="right-round"></span>',
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        },

       
        allMedicine: [],
        allDisease: [],
        Diseagemedicineinfo: [],
        MedicineInformation: [],
        RecentMedicineInformation: [],
        RecentBlog: [],
        RecentNews: [],

        page: 1,

        Schemascript:{
"@context":"https://schema.org",
"@graph":[{"@type":"Organization",
"@id":"https://www.homeobari.com/#organization",
"name":"HOMEOBARI",
"url":"https://www.homeobari.com",
"email":"admin@homeobari.com",
"address":{"@type":"PostalAddress",
"streetAddress":"Dhaka",
"postalCode":"1000",
"addressCountry":"Bangladesh"}},
{"@type":"WebSite",
"@id":"https://www.homeobari.com/#website",
"url":"https://www.homeobari.com",
"name":"HOMEOBARI",
"publisher":{"@id":"https://www.homeobari.com/#organization"},
"inLanguage":"en-US",
"potentialAction":{"@type":"SearchAction",
"target":"https://www.homeobari.com/?s={search_term_string}",
"query-input":"required name=search_term_string"}},
{"@type":"ImageObject","@id":"/#primaryImage",
"url":"https://homeobari.com/den/storage/app/files/shares/backend/homeobari-logo.png",
"width":"345","height":"105"},
{"@type":"WebPage",
"@id":"/#webpage",
"url":"/",
"name":"HOMROBARI - Most Popular Homeo Portal of BD",
"datePublished":"2021-02-18T18:30:56+00:00",
"dateModified":"2021-02-21T09:13:11+00:00",
"isPartOf":{"@id":"https://www.homeobari.com/#website"},
"primaryImageOfPage":{"@id":"/#primaryImage"},
"inLanguage":"en-US"},
{"@type":"Article",
"headline":"HOMEOBARI - Most Popular Homeo Portal of BD",
"datePublished":"2021-02-18T18:30:56+00:00",
"dateModified":"2021-02-21T09:13:11+00:00",
"author":{"@type":"Person","name":"Zahidul"},
"publisher":{"@id":"https://www.homeobari.com/#organization"},
"description":"Homeobari is the first Homeo blog in Bangladesh. We update regularly latest Homeo medicine price in BD &amp; do in-depth homeo info news.",
"@id":"/#richSnippet",
"isPartOf":{"@id":"/#webpage"},
"image":{"@id":"/#primaryImage"},
"inLanguage":"en-US",
"mainEntityOfPage":{"@id":"/#webpage"}}]}


      };
    },
    head () {
    return {
    script: [
        { type: 'application/ld+json', json:this.Schemascript}
      ],
      title: 'Homeoblog | বাংলাদেশের প্রথম হোমিও  ব্লগ',
      meta: [
                  {
         hid: 'metatitle',
        name: 'metatitle',
        property: "og:metatitle",
          content: 'হোমিও  ব্লগ | Homeoblog'
        },
         
        {
          key: "og:url",
          property: "og:url",
          content: `https://www.homeobari.com`
        },
        {
          key: "og:keyword",
          name: "keyword",
          property: "og:keyword",
          content: 'homeobari, sex, sexproblem, homebd, homeomedicine, homeobd, homeodr, homeosoftowar, onlinehomeo, homeo medicine, Homeo Blog'
        },
        {
         hid: 'description',
        name: 'description',
        property: "og:description",
          content: 'Homeobari পাবেন নতুন নতুন হোমিও ঔষুধের নাম  ও তার ক্রিয়া সহ সকল তথ্য । দেশ বিদেশের খবর, ব্লগ, বিনোদন সহ আরো অনেক . Homeo -Bari All In One'
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content:'Homeobari পাবেন নতুন নতুন হোমিও ঔষুধের নাম  ও তার ক্রিয়া সহ সকল তথ্য । দেশ বিদেশের খবর, ব্লগ, বিনোদন সহ আরো অনেক . Homeo -Bari All In One'
        },
        {
          name: "twitter:card",
          property: "og:keyword",
          content: "This Web Site like homeo softowar for homeo medicine"
        },
        {
          key: "og:description",
          name: "twitter:description",
          property: "og:description",
          content: 'Homeobari পাবেন নতুন নতুন হোমিও ঔষুধের নাম  ও তার ক্রিয়া সহ সকল তথ্য । দেশ বিদেশের খবর, ব্লগ, বিনোদন সহ আরো অনেক . Homeo -Bari All In One'
        },
     
    {property:'og:image', content: 'https://homeobari.com/den/storage/app/files/shares/backend/homeobari-logo.png'}
      ]
      }},

       async fetch () {
   
         await this.$axios.$get(`/home`)
        .then(response => {
         this.allDisease = response.disease;
          this.allMedicine = response.medicine;
           this.RecentMedicineInformation = response.recentmedicine;
          this.MedicineInformation = response.medicineinformation;
          this.RecentBlog = response.blogs;
          this.RecentNews = response.news;
  //  this.$nuxt.$loading.finish();
        })
        },
  mounted() {
  // this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
   // })
  
      var user= localStorage.getItem("user");
     
      if(user){
       
           this.authenticatedimage=JSON.parse(localStorage.getItem("user")).userimage;
        this.authenticatedname= JSON.parse(localStorage.getItem("user")).username;
      
         
      }
       
    
      
  },
  methods: {
    
      ShowDisemedicineinfo(id) {
        $axios.$get(`/diseasemedicineinformation/${id}`)
        //   .then(response => {
        //     this.Diseagemedicineinfo = JSON.parse(response.data.diseasemedicine.medicine);

        //   })
      }
      },


};
</script>
