<template>

  <span>
          <div class="scroll-top">
    <b-icon icon="arrow-up-circle" font-scale="1"  @click="scrollToElement()" style="cursor:pointer" variant="danger"></b-icon>
      </div>
    <!--top arae-->
    <section id="top-area">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark top-nav">
        <div class="container">
          <router-link to="/" class="navbar-brand">
            <img :src="require('@/assets/fontimage/homeobari.png')"  alt="homeobari"/>
          </router-link>
        <div class="gcse-search"></div>
          <ul class="tr-btn mb-0" v-if="authenticatedname">
            <li>
              <button
                type="button"
                class="btn btn-outline-primary mr-2 t-btn t-btn-act"
                @click="logOutNow()"
              >Sign Out</button>
             
            </li>
            <li>
              <button type="button" class="btn btn-outline-primary t-btn">{{authenticatedname}}</button>
            </li>
          </ul>
          <ul class="tr-btn mb-0" v-else>
            <li>
              <router-link :to="`/login`" class="btn btn-outline-primary mr-2 t-btn t-btn-act">Login</router-link>
            </li>
            <li>
              <router-link :to="`/register`" class="btn btn-outline-primary t-btn">Signup</router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <div class="mt-1">
  <b-navbar toggleable="lg" type="light" variant="light">
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="m-auto ">
        
        <li class="nav-item">
                <router-link class="nav-link" :to="`/`">Home</router-link>
              </li> <li class="nav-item">
                <router-link class="nav-link" :to="`/disease`">Disease</router-link>
              </li> <li class="nav-item">
                <router-link class="nav-link" :to="`/medicine`">Medicine</router-link>
              </li> <li class="nav-item">
                <router-link class="nav-link" :to="`/blogs`">Blog</router-link>
              </li> <li class="nav-item">
                <router-link class="nav-link" :to="`/about`">About</router-link>
              </li> <li class="nav-item">
                <router-link class="nav-link" :to="`/contact`">Contact</router-link>
              </li>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
    <img :src="require('@/assets/fontimage/biggapon.jpg')"  class="img-fluid" alt="homeobari"/>
</div>
    </section>
  <loading :active.sync="isLoading" 
            :is-full-page="fullPage"
            ></loading>
   
  </span>
</template>

<script>

// Import component
import Loading from 'vue-loading-overlay';
export default {
    components: {
            Loading,
             
        },
  name: "Header",
  data() {
    return {
       fullPage: true,
       isLoading: true,
      authenticatedname: null,
      authenticatedimage: null,
      Pagelist: [],
      Allbrand: []
    };
  },
  created() {
          this.$eventBus.$on("loadingHome", payload => {
      this.isLoading = payload;
    });
  },
  mounted() {
    var user = localStorage.getItem("user");

    if (user) {
      this.authenticatedimage = JSON.parse(
        localStorage.getItem("user")
      ).userimage;
      this.authenticatedname = JSON.parse(
        localStorage.getItem("user")
      ).username;
    }
  },
  methods: {
      scrollToElement(){
         window.scrollTo(0, 0);
      },
    logOutNow() {
      axios.post("/logout")
      .then(response => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.$router.push("/login");
    });
    },

  }
};
</script>