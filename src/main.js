import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from '@/App.vue'


import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    name: 'About',
    component: About
  }
]
const router = new VueRouter({
  routes
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
