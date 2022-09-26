<template>
  <div>
    <!-- NavBar -->
    <nav-bar/>
    <!-- Hero Section -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-">
          <img src="/images/hoodie2.png" alt="">
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

</style>