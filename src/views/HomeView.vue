<template>
  <div>
    <!-- NavBar -->
    <nav-bar/>
    <!-- Hero Section -->
    <hero-section/>
    <!-- About Section -->
    <div class="container py-5">
      <div class="about-top pt-4">
        <div class="line"></div>
         <h5 class="text-center">About us</h5>
        <div class="line"></div>
      </div>
      <h2 class="text-center h-i-s">How it all started</h2>
      <div class="row py-4 g-4">
        <div class="col-md-6">
          Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.[1] The term implies a look defined by the fashion industry as that which is trending. Everything that is considered fashion is available and popularized by the fashion system (industry and media).
          <br class="my-2"/>
          Fashion scholar Susan B. Kaiser states that everyone is "forced to appear", unmediated before others.[5] Everyone is evaluated by their attire, and evaluation includes the consideration of colors, materials, silhouette, and how garments appear on the body. Garments identical in style and material also appear different depending on the wearer's body shape, or whether the garment has been washed, folded, mended, or is new. So this is all about fashion.
        </div>
        <div class="col-md-6 ">
          <div class="row gy-3 gx-1">
            <div class="col-md-5">
              <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid about-img" alt=""/>
            </div>
            <div class="col-md-5">
              <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid about-img" alt=""/>
            </div>
            <div class="col-md-5">
              <img src="https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid about-img" alt=""/>
            </div>
            <div class="col-md-5">
              <img src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid about-img" alt=""/>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import HeroSection from '@/components/HeroSection.vue'
export default {
   name: 'HomeView',
   components : {NavBar,HeroSection}
}
</script>

<style scoped>
.about-top{
  display: flex;
  align-items: center;
  justify-content: center;
}
.line{
  margin: 0 20px;
  width: 10%;
  height: 1px;
  background-color: #963515;
}
.h-i-s{
  font-weight: 500;
}
.about-img{
  border-radius: 10px;
  width: 250px;
  height: 150px;
  object-fit: cover;
}
</style>