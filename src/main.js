import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300毫秒延迟
import fastclick from 'fastclick'
// 画廊部分
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入vuex
import store from './store'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

import 'common/styles/reset.css'
import 'common/styles/border.css'
import 'common/styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'

fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
