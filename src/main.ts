import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import axios,{AxiosInstance } from 'axios';

import './assets/css/vue2-animate.css';

import './components/common/common.js'


Vue.use(v => {
    v.prototype.$axios = axios
});
declare module 'Vue/types/vue' {
    interface Vue {
        $axios: AxiosInstance
    }
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
