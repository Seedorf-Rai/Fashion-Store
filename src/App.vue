<template>
  <div id="app">

     <div class="loader" v-if="loader == true">
      <atom-spinner
          :animation-duration="5000"
          :size="60"
          :color="'#963515'"
     />
     </div>
    <router-view v-else />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import {AtomSpinner} from 'epic-spinners'
  export default{
    
    components:{AtomSpinner},
    methods:{
      ...mapActions(['getAllProducts','getWomen','getAccess','getElects'])
    },
    ...mapGetters({
      loader: 'GET_LOADING'
    }),
    mounted(){
      this.getAllProducts()
      this.getWomen()
      this.getAccess()
      this.getElects()
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
body{
  background-color: #E8E3D9;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
}
.logo{
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 27px !important;
}
.nav-item{
  color: #5C5956;
}
.nav-link{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px !important;
  font-weight: 450;
  color: #5C5956 !important;
}
.n-last-l{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px !important;
  font-weight: 450;
  color: #353333 !important;
}
.loader{
  background-color: #E8E3D9;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
