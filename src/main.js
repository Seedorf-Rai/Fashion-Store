import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import axios from 'axios'
import store from './store'
Vue.config.productionTip = false
Vue.use(axios)
Vue.use(Vuesax, {
  // options here
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
