import category from "@/config"

export const state = {
    access: []
}
export const mutations = {
    SET_ACCESS(state,data){
        state.access  = data
    }
}
export const getters = {
    GET_ACCESS(state){
        return state.access
    }
}
export const actions = {
    async getAccess({commit}){
        try{
      let response = await category.get("jewelery")
      if(response.status === 200){
        console.warn(response.data)
        commit('SET_ACCESS',response.data)
      }
        }
        catch(e){
            console.warn(e.toString());
        }
    }
}