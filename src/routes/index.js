import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profiles from '../views/Profiles.vue'


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
  },
  {
    path:'/profiles',
    name: 'Profiles',
    component: Profiles
  }
]
export const router = new VueRouter({
  routes
});