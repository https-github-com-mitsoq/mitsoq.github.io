import Vue from 'vue'
import { router } from './routes'
import { createStore } from './store'

import App from '@/App.vue'

const store = createStore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
