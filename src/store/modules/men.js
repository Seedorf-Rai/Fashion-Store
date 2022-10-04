import category from "@/config"

export const state = {
  men: [],
  pageLoading: true
}
export const mutations = {
  SET_MEN(state, data) {
    state.men = data
  },
  SET_LOADING(state, data) {
    state.pageLoading = data
  }
}
export const getters = {
  GET_MEN(state) {
    return state.men
  },
  GET_LOADING(state) {
    return state.pageLoading
  }
}
export const actions = {
  async getAllProducts({
    commit
  }) {
    try {
      commit('SET_LOADING',true)
      let response = await category.get("/men's clothing")
      if (response.status == 200) {
        console.warn(response.data);
        commit('SET_MEN', response.data);
      }
    } catch (e) {
      console.warn(e.toString());
    }
    finally{
      commit('SET_LOADING',false)
      console.warn('loader')
    }
  }
}