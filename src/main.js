import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'


import Home from '@/layouts/home/Home.vue'
import About from '@/layouts/about/About.vue'

Vue.use(VueRouter)
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
