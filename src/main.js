import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import router from './utils/router'
import store from './utils/store'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
