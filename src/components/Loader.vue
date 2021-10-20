<template>
  <div class="row row-cols-1 d-flex justify-content-center loader align-items-center">
    <img src="../assets/loader.gif" alt="loader">
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped>
.loader {
  min-height: 80vh;
}
img {
  width: 30% !important;
}
</style>
