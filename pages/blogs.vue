<template>

      <b-container>
      <b-row>
  <b-card   v-for="card in allBlog"
          :key="card.id"
     :img-src="`https://homeobari.com/den/storage/app/files/shares/blog/${card.photo}`"
   img-top
      class="img-fluid col-md-3"
  >
  <NuxtLink :to="`/info/${card.slug}`">
  <b-card-title> {{card.title}}</b-card-title>
    <b-card-text>
{{card.metadescription}}
    </b-card-text>

</NuxtLink>

   </b-card>
<infinite-loading @infinite="infiniteHandler"></infinite-loading>
     </b-row>
</b-container>

</template>

<script>
export default {
  
  name: "blogs",
  data() {
    return {
     
           allBlog:[],
            //  medicineinformation:[],
         
           page: 1,
   Schemascript: {
                   
 
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.homeobari.com/blogs"
  },
  "headline": "homeobari-blogs",
  "image": "https://homeobari.com/den/storage/app/files/shares/backend/homeobari-logo.png",  
  "author": {
    "@type": "person",
    "name": "Zahidul Islam"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "zahidul islam",
    "logo": {
      "@type": "ImageObject",
      "url": "https://homeobari.com/den/storage/app/files/1/bikebd.png"
    }
  },
  "datePublished": "2021-01-25",
  "dateModified": "2021-01-25"
  
}
}
    
    },
    head () {
     
      return {
    script: [
        { type: 'application/ld+json', json:this.Schemascript }
      ]}},
    metaInfo() {
    return {
       title: 'All Blogs Post হোমিওপ্যাথি  In Homeobari Blogs', 
      meta: [
        
        { key: "indexing", name: "robots", content:'index, follow' },
        {
          key: "og:url",
          property: "og:url",
          content: `https://www.homeobari.com/blogs`
        },
        {
          key: "og:keyword",
          name: "keyword",
          property: "og:keyword",
          content: 'homeobariblog, sexmedicine, sexproblem, homebd, homeomedicine, homeobd,homeodr, homeosoftowar,onlinehomeo,homeo medicineinfo blog'
        },
        {
          key: "og:description",
          name: "description",
          property: "og:description",
          content: 'বাংলাদেশের হোমিওপ্যাথির সকল ইনফরমেশন দিতে এই পেজটি ভিজিট করুন এখানে আপনি পাবেন হোমিও সম্পর্কিত সকল তথ্য হোমিওপ্যাথি'
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content:'homeoblog'
        },
        {
          name: "twitter:card",
          property: "og:keyword",
          content: "বাংলাদেশের হোমিওপ্যাথির সকল ইনফরমেশন দিতে এই পেজটি ভিজিট করুন এখানে আপনি পাবেন হোমিও সম্পর্কিত সকল তথ্য হোমিওপ্যাথি"
        },
        {
          key: "og:description",
          name: "twitter:description",
          property: "og:description",
          content: 'বাংলাদেশের হোমিওপ্যাথির সকল ইনফরমেশন দিতে এই পেজটি ভিজিট করুন এখানে আপনি পাবেন হোমিও সম্পর্কিত সকল তথ্য হোমিওপ্যাথি'
        }
      ]
    };
  },


  created() {
    this.infiniteHandler();
  },
mounted(){
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });
  
},
  methods: {
 infiniteHandler($state) {
      
      
     this.$axios.$get('/blogs?page='+this.page)
                   
      .then(({ data }) => {
           
        if (data.length) {
          this.page += 1;
          this.allBlog.push(...data);
         // $state.loaded();
        } else {
          $state.complete();
        }
      });
    
                
            },

  }
};
</script>
