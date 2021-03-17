<template>

  <span>
          <div class="scroll-top">
    <b-icon icon="arrow-up-circle" font-scale="1"  @click="scrollToElement()" style="cursor:pointer" variant="danger"></b-icon>
      </div>
    <!--top arae-->
    <section id="top-area">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark top-nav">
        <div class="container">
          <NuxtLink to="/" class="navbar-brand">
            <img :src="require('@/assets/fontimage/homeobari.png')"  alt="homeobari"/>
          </NuxtLink>
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
              <NuxtLink :to="`/login`" class="btn btn-outline-primary mr-2 t-btn t-btn-act">Login</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="`/register`" class="btn btn-outline-primary t-btn">Signup</NuxtLink>
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
                <NuxtLink class="nuxt-link" :to="`/`">Home</NuxtLink>
              </li> <li class="nav-item">
                <NuxtLink class="nuxt-link" :to="`/disease`">Disease</NuxtLink>
              </li> <li class="nav-item">
                <NuxtLink class="nuxt-link" :to="`/medicine`">Medicine</NuxtLink>
              </li> <li class="nav-item">
                <NuxtLink class="nuxt-link" :to="`/blogs`">Blog</NuxtLink>
              </li> <li class="nav-item">
                <NuxtLink class="nuxt-link" :to="`/about`">About</NuxtLink>
              </li> <li class="nav-item">
                <NuxtLink class="nuxt-link" :to="`/contact`">Contact</NuxtLink>
              </li>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
    <img :src="require('@/assets/fontimage/biggapon.jpg')"  class="img-fluid" alt="homeobari"/>
</div>
    </section>

   
  </span>
</template>

<script>

export default {
    components: {
            
        },
  name: "Header",
  data() {
    return {
        // loading: true,
      authenticatedname: null,
      authenticatedimage: null,
     
    };
  },
  created() {
         
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
      this.$axios.$post("/logout")
      .then(response => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.$router.push("/login");
    });
    },

  }
};
</script>
