import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let myApp = new Vue({
  render: h => h(App),
})

myApp.$mount('#app')
