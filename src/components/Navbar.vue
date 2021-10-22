<template>
  <nav class="navbar d-flex justify-content-between px-4 shadow-sm">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="d-flex align-items-center" to="/">
          <img width="60px" class="me-2" src="../assets/brand.png" alt="MyAnime">
          <h3>MyAnime</h3>
        </router-link>
      </div>
      <div class="navbar-buttons ms-auto">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-brand > a > h3 {
  font-family: 'Lobster Two', cursive;
  color: tomato;
  font-weight: bold;
  font-size: 1.9rem;
}
</style>
