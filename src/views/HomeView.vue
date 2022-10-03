<template>
  <div>
    <!-- NavBar -->
    <nav-bar />
    <!-- Hero Section -->
    <hero-section />
    <!-- About Section -->
    <div class="container py-5">
      <div class="about-top pt-4">
        <div class="line"></div>
        <h5 class="text-center">About us</h5>
        <div class="line"></div>
      </div>
      <h2 class="text-center h-i-s">How it all started</h2>
      <div class="row py-5 ps-5 g-4">
        <div class="col-md-6">
          Fashion is a form of self-expression and autonomy at a particular
          period and place and in a specific context, of clothing, footwear,
          lifestyle, accessories, makeup, hairstyle, and body posture.[1] The
          term implies a look defined by the fashion industry as that which is
          trending. Everything that is considered fashion is available and
          popularized by the fashion system (industry and media).
          <br class="my-2" />
          Fashion scholar Susan B. Kaiser states that everyone is "forced to
          appear", unmediated before others.[5] Everyone is evaluated by their
          attire, and evaluation includes the consideration of colors,
          materials, silhouette, and how garments appear on the body. Garments
          identical in style and material also appear different depending on the
          wearer's body shape, or whether the garment has been washed, folded,
          mended, or is new. So this is all about fashion.
        </div>
        <div class="col-md-6">
          <div class="row gy-3 gx-1">
            <div class="col-md-5">
              <img
                src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="img-fluid about-img"
                alt=""
              />
            </div>
            <div class="col-md-5">
              <img
                src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="img-fluid about-img"
                alt=""
              />
            </div>
            <div class="col-md-5">
              <img
                src="https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&w=600"
                class="img-fluid about-img"
                alt=""
              />
            </div>
            <div class="col-md-5">
              <img
                src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=600"
                class="img-fluid about-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container py-4 ps-5 pe-4">
      <div class="mb-4 d-flex">
        <!-- FOr Mens Item List -->
        <h2>For Mens</h2>
        <div class="d-flex align-items-center ms-auto">
          <div class="cir-outli">
            <div class="circle">
              <i class="fa-solid ms-1 fa-arrow-right fa-3x"></i>
            </div>
          </div>
          <!-- <p class="ms-4">Discover More</p> -->
        </div>
      </div>
      <div class="row mb-5 g-4">
        <div class="col-md-4" v-for="(item, index) in allProducts.slice(0,3)" :key="index">
          <card-comp
            :title="item.title"
            :image="item.image"
            :description="item.description.substring(0, 10) + '...'"
          />
        </div>
      </div>
      <div class="mb-4 d-flex">
        <!-- FOr Mens Item List -->
        <h2>For Women's</h2>
        <div class="d-flex align-items-center ms-auto">
          <div class="cir-outli">
            <div class="circle">
              <i class="fa-solid ms-1 fa-arrow-right fa-3x"></i>
            </div>
          </div>
          <!-- <p class="ms-4">Discover More</p> -->
        </div>
      </div>
      <!-- For Women's Item List -->
      <div class="row mb-5 g-4">
        <div class="col-md-4" v-for="(item, index) in allwomen.slice(0,3)" :key="index">
          <card-comp
            :title="item.title"
            :image="item.image"
            :description="item.description.substring(0, 10) + '...'"
          />
        </div>
      </div>
      <!-- Accessories -->
      <div class="mb-4 d-flex">
        <!-- FOr Mens Item List -->
        <h2>Check Out Jeweleries</h2>
        <div class="d-flex align-items-center ms-auto">
          <div class="cir-outli">
            <div class="circle">
              <i class="fa-solid ms-1 fa-arrow-right fa-3x"></i>
            </div>
          </div>
          <!-- <p class="ms-4">Discover More</p> -->
        </div>
      </div>
      <div class="row mb-4 g-4">
        <div class="col-md-4" v-for="(item, index) in jewels.slice(0,3)" :key="index">
          <card-comp
            :title="item.title"
            :image="item.image"
            :description="item.description.substring(0, 10) + '...'"
          />
        </div>
      </div>
      <div class="mb-4 d-flex">
        <!-- FOr Mens Item List -->
        <h2>Check Out Accessories</h2>
        <div class="d-flex align-items-center ms-auto">
          <div class="cir-outli">
            <div class="circle">
              <i class="fa-solid ms-1 fa-arrow-right fa-3x"></i>
            </div>
          </div>
          <!-- <p class="ms-4">Discover More</p> -->
        </div>
      </div>
      <div class="row mb-4 g-4">
        <div class="col-md-4" v-for="(item, index) in getJewel.slice(0,3)" :key="index">
          <card-comp
            :title="item.title"
            :image="item.image"
            :description="item.description.substring(0, 10) + '...'"
          />
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer-comp/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import CardComp from "@/components/CardComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import category from '@/config'
import { mapGetters } from 'vuex';
// import Vuesax from '@/components/Vuesax.vue'
export default {
  name: "HomeView",
  components: { NavBar, HeroSection, CardComp,FooterComp },
  computed:{
    ...mapGetters({
      allProducts : 'GET_MEN',
      allwomen: 'GET_WOMEN',
      jewels: 'GET_ACCESS'
    })
  },
  data() {
    return {
      getJewel: [],
    };
  },
  mounted() {
    this.getJewelery();
  },
  //   props: ['title','image','description']
  methods: {


    async getJewelery() {
      try{
      let response = await category.get('electronics')
      if(response.status == 200){
        console.warn(response.data)
        this.getJewel = response.data
      }
      }
      catch (e) {
        console.warn(e.toString());
      }
    }
  },
};
</script>

<style scoped>
.about-top {
  display: flex;
  align-items: center;
  justify-content: center;
}
.line {
  margin: 0 20px;
  width: 10%;
  height: 1px;
  background-color: #963515;
}
.h-i-s {
  font-weight: 500;
}
.about-img {
  border-radius: 10px;
  width: 250px;
  height: 150px;
  object-fit: cover;
}
.fa-arrow-right {
  color: white;
  font-weight: 12px !important;
}
.cir-outli {
  width: 60px;
  height: 60px;
  border: 2px solid #963515;
  border-radius: 50%;
}
.circle {
  width: 53px;
  height: 52px;
  background-color: #963515;
  border-radius: 50%;
  position: relative;
  left: 2px;
  top: 2px;
  transition: all 1s;
}
.circle:hover {
  position: relative;
  left: 20px;
  cursor: pointer;
}
</style>