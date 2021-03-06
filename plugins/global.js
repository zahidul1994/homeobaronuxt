import Vue from 'vue'
import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'
import InfiniteLoading from 'vue-infinite-loading';
import 'slick-carousel/slick/slick.css'
import 'vue-loading-overlay/dist/vue-loading.css';
import Form from 'vform';

export default ({ app }, inject) => {
  Form.prototype.submit = function submit(method, url, config = {}) {
    this.startProcessing();

    const data = method === 'get'
      ? { params: this.data() }
      : this.data();

    return new Promise((resolve, reject) => {
      app.$axios.request({
        url: this.route(url), method, data, ...config,
      })
        .then(response => {
          this.finishProcessing();

          resolve(response);
        })
        .catch(error => {
          this.busy = false;

          if (error.response) {
            this.errors.set(this.extractErrors(error.response));
          }

          reject(error);
        });
    });
  };

  app.$vform = (...params) => new Form(...params);
  inject('vform', (...params) => new Form(...params));
};
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-HEHMF3WX0P' },
  appName: 'homeobari',
});

  import Slick from "vue-slick";
 Vue.use(InfiniteLoading,  Slick, VueGtag);
//for sent all page token
Vue.prototype.$eventBus = new Vue(); // Global event bus
const components = { Header, Footer }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})


