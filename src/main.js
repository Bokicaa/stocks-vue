import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(axios);

axios.defaults.baseURL = 'https://stocks-aab13.firebaseio.com/';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
