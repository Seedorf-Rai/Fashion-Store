<template>
   <div>
     <div class="row g-4">
        <div class="col-md-4" v-for="(item,index) in allProducts" :key="index">
            <vs-card type="2">
    <template #title>
      <h3>{{ item.title }}</h3>
    </template>
    <template #img>
      <img :src="item.image" alt="">
    </template>
    <template #text>
      <p>
        {{ item.description }}
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
    </template>
  </vs-card>
        </div>
     </div>
   </div>
</template>

<script>
    import axios from 'axios';
export default {
  name: 'CardComp',
  data(){
    return{
        allProducts: []
    }
  },
  mounted(){
    this.getAllProducts()
  },
//   props: ['title','image','description']
 methods: {
  async  getAllProducts(){
        try{
          let response = await axios.get("https://fakestoreapi.com/products/category/jewelery")
          if(response.status == 200){
            console.warn(response.data)
            this.allProducts = response.data
          }
        }
        catch(e){
            console.warn(e.toString());
        }
    }
 }
}
</script>

<style>

</style>