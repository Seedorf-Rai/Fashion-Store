import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(axios)
Vue.use(Vuesax, {
  // options here
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
