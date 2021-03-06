export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Homeobari',
    htmlAttrs: {
      lang: 'bn'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {  name: "robots", content:'index, follow' },
      { property: "og:type", content:'Website' },
      { property:"og:site_name",   content:"Homeobari" },
      { property:"fb:app_id",  content:"437565014195029" }
     
           
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://www.googletagmanager.com/gtag/js?id=G-HEHMF3WX0P' },
      // { src: '@/assets/js/analitices.js' }
   
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   '~plugins/global.js',//for gobal varible
   {  src:'~plugins/infinitityscroll.js',  mode: 'client' },//for gobal varible
    '~plugins/filter.js'  //for gobal filter  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: 'server',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt','@nuxtjs/toast','vue-social-sharing/nuxt',
     ['@nuxtjs/axios', {
      baseURL: 'https://homeobari.com/den/api'
    }],
    
  ],

  loading: {
    color: 'red',
    height: '5px'
  },

 
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },


  build: {
    transpile:['vue-slick','vform','vue-gtag','vue-infinite-loading']
  }
}
