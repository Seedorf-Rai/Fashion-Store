import Vue from 'vue'
import Vuex from 'vuex'
import * as men from './modules/men'
import * as women from './modules/women'

Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
   men,
   women
  }
})
