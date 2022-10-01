<template>
   <!-- <div>
     <div class="row g-4">
        <div class="col-md-4" v-for="(item,index) in allProducts" :key="index"> -->
            <vs-card type="2">
    <template #title>
      <h3 class="card-title">{{ title }}</h3>
    </template>
    <template #img>
      <img :src="image" class="card-img" alt="">
    </template>
    <template #text>
      <p>
        <!-- {{ item.description.substring(0,8) + '...'}} -->

      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
    </template>
  </vs-card>
        <!-- </div>
     </div>
   </div> -->
</template>

<script>
export default {
  name: 'CardComp',
  props: ['title','image','description']
}
</script>

<style>
.card-img{
  width: 200px !important;
  height: 250px !important;
  object-fit: cover;
}
/* .card-title{
  color: #963515;
} */
</style>