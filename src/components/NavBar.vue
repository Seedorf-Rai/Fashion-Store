<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container navbar-border py-3">
      <a class="navbar-brand logo" href="#">HAMRO FASHION</a>
      <!-- The Style is given in app.js -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div class="d-flex justify-content-center align-items-center">
              <a class="nav-link active" aria-current="page" @click.prevent="$router.push({name:'home'})">Home</a>
              <span class="mx-3 fs-3">\</span>
            </div>
          </li>
          <li class="nav-item">
            <div class="d-flex justify-content-center align-items-center">
              <a class="nav-link active" aria-current="page" @click.prevent="$router.push({name:'women'})">Women</a>
              <span class="mx-3 fs-3">\</span>
            </div>
          </li>
          <li class="nav-item">
            <div class="d-flex justify-content-center align-items-center">
              <a class="nav-link active" aria-current="page" href="#">Men</a>
              <span class="mx-3 fs-3">\</span>
            </div>
          </li>

          <li class="nav-item">
            <div class="d-flex justify-content-center align-items-center">
              <a class="nav-link active" aria-current="page" href="#"
                >Accessories</a
              >
              <span class="mx-3 fs-3">\</span>
            </div>
          </li>
          <li class="nav-item">
            <div class="d-flex justify-content-center align-items-center">
              <a class="nav-link active" aria-current="page" href="#"
                >About Us</a
              >
            </div>
          </li>
        </ul>
        <form class="d-flex align-items-center">
          <i class="fa-solid fa-magnifying-glass"></i>
          <div class="n-last-l ms-3">Login</div>
          <div class="n-last-l ms-3">Blog</div>
        </form>
      </div>
      <hr />
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
};
</script>

<style>
.navbar-border{
  border-bottom: 2px solid #9a9693;
}
.nav-link:hover{
  cursor: pointer;
}
</style>