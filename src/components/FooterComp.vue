<template>
  <footer>
    <div class="container px-5">
      <div class="py-5">
        <div class="d-flex py-4 align-items-center">
          <h6>The Fashion Store</h6>
          <div class="ms-auto d-flex align-items-center">
            <p>Become Our Customer :</p>
            <input type="text" class="sub-input ms-5" placeholder="" />
          </div>
        </div>
        <div class="footer-des">
            <h1>Improving people's fashion by providing them with better designs</h1>
        </div>
        <hr>
        <div class="footer-content py-5 ">
          <div class="d-flex align-items-center">
             <h6>What we do</h6>
             <h6>Our Projects</h6>
             <h6>Our Customers</h6>
             <h6>All About us</h6>
             <div class="ms-auto">
                <i class="fa-brands fa-2x me-3 fa-facebook"></i>
                <i class="fa-brands fa-2x me-3  fa-facebook-messenger"></i>
                <i class="fa-brands fa-2x me-3  fa-instagram"></i>
                <i class="fa-brands fa-2x fa-linkedin"></i>
             </div>
          </div>

        </div>
        <p class="text-center mt-3">The Fashion Store | Copyright © 2022 | All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;
  background-color: #101215;
  color: white;
}
h2 {
  font-weight: 600;
}
.sub-input {
  background-color: #101215;
  border: 2px solid #963515;
  color: white !important;
  height: 40px;
}
.footer-des{
    width: 80%;
    margin-top: 20px ;
    margin-bottom: 38px;
}
.footer-content .d-flex h6{
    margin-right:  30px;
}
.fa-brands{
    font-size: 20px !important;
}
</style>