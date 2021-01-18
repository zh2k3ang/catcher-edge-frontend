import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

new Vue({
  render: h => h(App),
}).$mount('#app')
