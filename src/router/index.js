import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'components/home/home'
import city from 'components/city/city'
import detail from 'components/detail/detail'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/city',
    component: city
  },
  {
    path: '/detail/:id',
    component: detail
  }
]
const router = new VueRouter({
  routes
})
export default router
