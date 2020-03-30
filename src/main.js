import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'lib-flexible/flexible.js'
import "./lib/hotcss/hotcss";
import axios from 'axios';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")