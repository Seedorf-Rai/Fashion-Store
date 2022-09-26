<template>
  <div>
    <!-- NavBar -->
    <nav-bar/>
    <!-- Hero Section -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5  hero-left ">
           <div class="hero-bg-color "></div>
           <div class="hero-right-outline"></div>
          <img src="/images/hoodie2.png" class="hero-img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
export default {
   name: 'HomeView',
   components : {NavBar}
}
</script>

<style>
.hero-img{
  width: 450px;
  height: 500px;
  object-fit: cover;
  z-index: 100000;
  position: absolute;
  left: 24%;
}
.hero-bg-color{
  background:#ba4826;
  transform: skew(12deg);
  position: absolute;
  height: 450px;
  width: 400px;
  top: 50px;
  left: 27%;
}
.hero-right-outline{
  border: 2px solid #ba4826;
  transform: skew(12deg);
  position: absolute;
  height: 450px;
  width: 400px;
  top: 80px ;
  left: 33%;
}
.hero-left{
  position: relative;
}
</style>