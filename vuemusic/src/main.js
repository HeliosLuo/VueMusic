// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from  "axios"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Tabs from "./components/tabs"
import Backtop from "./components/backtop"
import 'swiper/dist/css/swiper.css'
import "./assets/font/iconfont.css"

import api from "./api"

Vue.prototype.$api = api;
Vue.use(Tabs);
Vue.use(VueAwesomeSwiper)
Vue.use(Backtop)
Vue.config.productionTip = false
Vue.prototype.$axios  = Axios;
Vue.prototype.Baidu_Host = "/baidu_music_api"




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
