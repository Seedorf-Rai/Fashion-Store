import category from "@/config"

export const state = {
   elects: []
}
export const mutations = {
   SET_ELECTS(state,data){
    state.elects = data
   }
}
export const getters = {
    GET_ELECTS(state){
        return state.elects
    }
}
export const actions = {
   async getElects({commit}) {
    try{
   let response = await category.get("electronics")
   if(response.status === 200){
    console.warn(response.data)
    commit('SET_ELECTS',response.data)
   }
    }
    catch(e){
        console.warn(e.toString());
    }
   }
}