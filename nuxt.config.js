export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Homeobari',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { key: "indexing", name: "robots", content:'index, follow' },
      { key: "og:type", property: "og:type", content:'Website' },
      { property:"og:site_name",   content:"Homeobari" },
      { property:"fb:app_id",  content:"437565014195029" },
      { property:"og:author",  href:"https://homeobari.com/@zahidul" }
     
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
    '~plugins/global.js', //for gobal varible
    '~plugins/filter.js'  //for gobal filter  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt','@nuxtjs/toast','vue-social-sharing/nuxt',
     ['@nuxtjs/axios', {
      baseURL: 'https://account.homeobari.com/api'
    }],
    
  ],

  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },
  // axios: {
  //   // extra config e.g
  //    BaseURL: 'https://account.homeobari.com/api'
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:['vue-infinite-loading','vue-slick','vform','vue-gtag']
  }
}
