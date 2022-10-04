<template>
  <div>
    <nav-bar />
    <!-- COntent -->
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <div class="w-f-1 p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              optio obcaecati deleniti corporis quia esse fuga, at deserunt aut!
              Possimus ducimus eum quae asperiores? Deleniti atque earum eos
              facere magnam quo error fuga corrupti. Dolorem, asperiores id?
              Deserunt, fugiat in.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              atque delectus, amet impedit totam nostrum voluptatum vero at
              debitis eaque nulla
            </p>
          </div>
          <div class="d-flex">
            <img src="/images/womanbg2.png" class="img-fluid w-im-2" alt="" />
            <div class="w-f-2 py-3 px-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                optio obcaecati deleniti corporis quia esse fuga, at deserunt
                aut! Possimus ducimus eum quae asperiores? Deleniti atque earum
                eos facere magnam quo error fuga corrupti. Dolorem, asperiores
                id? Deserunt, fugiat in.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                atque delectus, amet impedit totam nostrum voluptatum vero at
                debitis eaque nulla
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="/images/womanbg.png" class="img-fluid woman-bg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="(item,index) in women" :key="index">
              <page-card  :title="item.title" :text="item.description" :image="item.image" :id="item.id"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-comp />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterComp from "@/components/FooterComp.vue";
import PageCard from "@/components/PageCard";
import { mapGetters } from "vuex";
export default {
  name: "WomenView",
  components: { NavBar, FooterComp, PageCard },
  computed:{
    ...mapGetters({
    women: 'GET_WOMEN'
  })
  }
};
</script>

<style scoped>
.woman-bg {
  width: 400px;
  height: 350px;
  object-fit: cover;
  margin-left: 30%;
}
.w-f-1 {
  width: 500px;
  height: 300px;
  background-color: #c56a4c;
  border-radius: 8px;
}
p {
  color: rgb(220, 213, 213);
}
.w-f-2 {
  width: 600px;
  height: 300px;
  background-color: #26292e;
  border-radius: 8px;
  position: relative;
  left: 10%;
  top: -35px !important;
}
.w-im-2 {
  height: 300px;
  width: 200px;
  object-fit: cover;
}
</style>