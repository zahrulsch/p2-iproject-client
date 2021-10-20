<template>
  <div class="row row-cols-1 d-flex flex-column error justify-content-center">
    <h4 class="text-center">Oops! Internal server error</h4>
    <span class="text-center">Try to reload this page...</span>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style>
.error {
  min-height: 80vh;
}
h4 {
  color: rgb(238, 83, 12);
}
</style>
