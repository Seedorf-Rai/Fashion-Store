import Vue from 'vue'
import Vuex from 'vuex'
import * as men from './modules/men'
import * as women from './modules/women'
import * as jewels from './modules/access'
import * as elects from './modules/elect'

Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
   men,
   women,
   jewels,
   elects
  }
})
