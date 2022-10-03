import category from "@/config"

export const state = {
  women: []
}
export const mutations = {
  SET_WOMEN(state,data){
    state.women = data
  }
}
export const getters = {
  GET_WOMEN(state){
    return state.women
  }
}
export const actions = {
  async getWomen({commit}) {
    try {
      let response = await category.get("women's%20clothing")
      if (response.status == 200) {
        console.warn(response.data);
        commit('SET_WOMEN',response.data);
      }
    } catch (e) {
      console.warn(e.toString());
    }
  },
}