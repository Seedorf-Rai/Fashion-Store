import category from "@/config"

export const state = {
   men: []
}
export const mutations = {
    SET_MEN(state,data){
        state.men = data
      }
}
export const getters = {
    GET_MEN(state){
        return state.men
      }
}
export const actions = {
    async getAllProducts({commit}) {
        try {
          let response = await category.get("/men's clothing")
          if (response.status == 200) {
            console.warn(response.data);
            commit('SET_MEN',response.data);
          }
        } catch (e) {
          console.warn(e.toString());
        }
      }
}