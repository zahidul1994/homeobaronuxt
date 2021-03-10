<template>
<section>
    <div class="container">

       <!--recent area-->
           <div class="row">
                    <div class="col-md-5">
                        <h4 class="page-title text-center ">Contact</h4>
                        <div class=" table-responsive ">
                            <table class="table">
                               <tbody>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-home "></span>
                                        <strong> Address:</strong>
                                    </td>
                                    <td>
                                        <address>
                                            <strong>Homeobari.com</strong>
                                            <br /> Begum Rokeya Ave, Mirpur <br/>
                                            Dhaka 1207,Banglaseh.
                                        </address>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-envelope "></span>
                                        <strong>Email: 
                                        </strong>
                                    </td>
                                    <td>
                                        <address>
                                            <strong>
                                                <a href="mailto:mjahid1990@gmail.com ">mjahid1990@gmail.com
                                                </a>
                                            </strong>
                                            <br />
                                            <a href="admin@homeobari.com">admin@homeobari.com </a>
                                            <br/>
                                            <p>admin@homeobari.com</p>

                                        </address>
                                    </td>



                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-earphone "></span>
                                        <strong>Call:</strong>
                                    </td>
                                    <td>
                                        <address>
                                            <strong>
                                                <a href="callto:+BD01912748597 ">+BD01912748597</a>
                                            </strong>
                                            <br />
                                            <a href="callto:+1(585)466-2291 ">USA+1(585)466-2291</a>
                                            <br>
                                            <a href="https://secure.skype.com/portal/overview/zahidul1994 ">Skype:zahidul1994</a>
                                        </address>
                                    </td>
                                </tr>
</tbody> 
                            </table>

                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9857661841343!2d90.37629381452987!3d23.783521193428143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74a3544d9c1%3A0xe94da7fe65ea760f!2sTaltola!5e0!3m2!1sen!2sbd!4v1533704948990 "
                            width="80% " height="30% " frameborder="0 " style="border:0 " allowfullscreen></iframe>
                        <!-- contact area start  -->
                    </div>

                    <div class="col-md-7">
                        <form  @submit.prevent="ContactForm">
                            <div class="form-group">
                                <h1> Contact US</h1>
                                <label for="name"> Name *</label>
                                <input type="text" class="form-control" v-model="form.name" id="name"
                                    required placeholder="Type Your Name  Or Company Name" />

                            </div>
                            <div class="form-group">
                                <label for="email">Email * </label>
                                <input type="email" class="form-control" v-model="form.email" id="email"
                                    required placeholder="example@domain.com" />

                            </div>
                            <div class="form-group">
                                <label for="subject">Subject </label>
                                <input type="text" class="form-control"  v-model="form.subject" id="subject" placeholder="message  Subject" />

                            </div>
                            <div class="form-group">
                                <label for="message">Your message *</label>
                                <textarea  id="message" cols="30 " rows="5" class="form-control"
                                    required v-model="form.message"></textarea>
                            </div>
                            <button type="submit"  :disabled="form.busy" class="btn-lg btn-info">Submit</button>
                        </form>
                    </div>

                </div>
  
   
  </div>
  </section>
</template>

<script>
export default {
 
  name: "contact",
  data() {
 
        return {
  //  form: new form({ 
       form: this.$vform({
        name: "",
        email: "",
        subject: "",
        message: "",
       
      }),
       Schemascript:{
      "@context":"https://schema.org",
      "@graph":[
        {"@type":"Organization",
      "@id":"https://www.homeobari.com/#organization",
      "name":"HOMEOBARI","url":"https://www.homeobari.com",
      "email":"admin@homeobari.com",
      "address":{"@type":"PostalAddress",
      "streetAddress":"Dhaka","postalCode":"1000",
      "addressCountry":"Bangladesh"}},
      
      {"@type":"WebSite",
      "@id":"https://www.homeobari.com/#website",
      "url":"https://www.homeobari.com",
      "name":"HOMEOBARI",
      "publisher":{"@id":"https://www.homeobari.com/#organization"},
        "inLanguage":"en-US"},
{"@type":"ImageObject","@id":"/#primaryImage",
"url":"https://homeobari.com/den/storage/app/files/shares/backend/homeobari-logo.png",
"width":"345","height":"105"},
      {"@type":"WebPage",
      "@id":"https://www.homeobari.com/contact/#webpage",
      "url":"https://www.homeobari.com/contact/",
      "name":"Contact Us - HOMEOBARI",
      "datePublished":"2021-02-12T09:24:23+00:00",
      "dateModified":"2021-01-21T06:57:58+00:00",
      "isPartOf":{"@id":"https://www.homeobari.com/#website"},
            "inLanguage":"en-US"},
            {"@type":"Article","headline":"Contact Us - Homeobari","datePublished":"2021-02-12T09:24:23+00:00","dateModified":"2021-02-21T06:57:58+00:00",
            "author":{"@type":"Person","name":"Zahidul"},
            "publisher":{"@id":"https://www.homeobari.com/#organization"},
            "description":"HOMEOBARI.com is First Homeo Blog in Bangladesh. HOMEOBARI.com provides all the latest information, Price and Review, and many more!",
            "@id":"https://www.homeobari.com/contact/#richSnippet",
            "isPartOf":{"@id":"https://www.homeobari.com/contact/#webpage"},
            "inLanguage":"en-US",
            "mainEntityOfPage":{"@id":"https://www.homeobari.com/contact/#webpage"
        }}]}


      };
    },
  head () {
    
    return {
       title: 'Contact Us | Homeobari', 
     meta: [
          {
         hid: 'description',
          name: "description",
          property: "og:description",
          content: ' homeobari contact form . যে কোনো প্রয়োজনে যোগাযোগ করুন '
        },
       

        {
          key: "og:url",
          property: "og:url",
          content: `https://www.homeobari.com/contact`
        },
        {
          key: "og:keyword",
          name: "keyword",
          property: "og:keyword",
          content: 'homeobari,sex,contact,contatform,contacthomeobari,homeobd,contactfrom,homeosoftowar,zahidul,allbd'
        },
       
        {
          key: "twitter:title",
          name: "twitter:title",
          content:' ব্লগ  homeobari contact form'
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
          content: ' ব্লগ  homeobari contact form'
        },
     
    {property:'og:image', content: 'https://homeobari.com/den/storage/app/files/shares/backend/homeobari-logo.png'}
      ],
    script: [
        { type: 'application/ld+json', json:this.Schemascript }
      ]}},

  created() {
     

  },
  mounted() {
        this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });
  },

  methods: {
ContactForm(){
 
  this.form.post("/contact", this.form)
        .then(response => {
       this.$toast.success("Your Message Sent Successfully. We Are Contact Very Soon");
         this.$router.push('/');
           
        })
        .catch(response => {
         [this.$toast.warning("Sorry Try Agin")];
         
        });
}

}
};
</script>
