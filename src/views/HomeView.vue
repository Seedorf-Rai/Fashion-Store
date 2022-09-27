<template>
  <div>
    <!-- NavBar -->
    <nav-bar/>
    <!-- Hero Section -->
    <div class="container-fluid">
      <div class="row">
        <!-- Left Part Of the Hero Section -->
        <div class="col-md-5  hero-left ">
           <div class="hero-bg-color "></div>
           <div class="hero-right-outline"></div>
          <img src="/images/hoodie2.png" class="hero-img" alt="">
        </div>
        <!-- Middle Part Of the Hero Section -->
        <div class="col-md-4 hero-mid">
           <div class="d-flex">
            <h1>Feel </h1>
            <button class="coll-btn">collection'22</button>
           </div>
           <div>
            <h1>Genuine</h1>
           </div>
           <div>
            <h1>Style</h1>
           </div>
           <div>
            <p>We'll deliever your order wherever you want. <br> Our unique stores offer a wide choice of different <br> fashionable items from a great variety of brands</p>
           </div>
           <div class="d-flex align-items-center">
            <div class="cir-outli">
           <div class="circle"><i class="fa-solid ms-1 fa-arrow-right fa-3x"></i></div></div>
           <p class="ms-4">Discover More</p>
           </div>
        </div>
        <!-- RIght Part OF the Hero Section -->
        <div class="col-md-3 hero-right">
           <div class="hero-right-bg">
          <div class="hero-right-bg-line"></div>
              <img src="/images/hero-right.png" class="img-fluid" alt="">
           </div>
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

<style scoped>
.hero-img{
  width: 450px;
  height: 500px;
  object-fit: cover;
  z-index: 100000;
  position: absolute;
  left: 24%;
}
.hero-bg-color{
  background:#963515;
  transform: skew(12deg);
  position: absolute;
  height: 450px;
  width: 400px;
  top: 50px;
  left: 27%;
}
.hero-right-outline{
  border: 2px solid #963515;
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
.hero-mid{
  padding-top: 8%;
  padding-left: 8%;
}
h1{
  font-size: 60px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}p{
  color: #403e3e;
  font-weight: 500;
}
.coll-btn{
  margin-left: 20px ;
  color: white;
  background-color: #963515;
  border: none;
  width: 180px;
  height: 55px;
  border-radius: 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
}
.fa-arrow-right{
  color: white;
  font-weight: 12px !important;
}
.cir-outli{
  width: 60px;
  height: 60px;
  border: 2px solid #963515 ;
  border-radius: 50%;
}
.circle{

  width: 53px;
  height: 52px;
  background-color: #963515;
  border-radius: 50%;
  position: relative;
  left: 2px;
  top: 2px;
  transition: all 1s;
}
.circle:hover{
  position: relative;
  left: 20px;
  cursor: pointer;
}
.hero-right-bg-line{
  width: 350px;
  height: 260px;
  border: 2px solid #52A0E3;
  position: absolute;
  top: 30px;
  left: 26px;
  transform: skew(12deg);
}
.hero-right-bg{
  width: 350px;
  height: 260px;
  background-color: #52A0E3;
  transform: skew(12deg);
  position: relative;
  top: 42%;
  left: 30%;
}
.hero-right-bg img{
  transform: skew(-12deg);
  /* display:none; */
  width: 200px; height: 250px;
  object-fit: cover;
  position: relative;
  left: 38px;
  top: 10px;
}
/* CSS */
/* .button-18 {
  align-items: center;
  background-color: #0A66C2;
  border: 0;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.button-18:hover,
.button-18:focus {
  background-color: #16437E;
  color: #ffffff;
}

.button-18:active {
  background: #09223b;
  color: rgb(255, 255, 255, .7);
}

.button-18:disabled {
  cursor: not-allowed;
  background: rgba(0, 0, 0, .08);
  color: rgba(0, 0, 0, .3);
} */
</style>