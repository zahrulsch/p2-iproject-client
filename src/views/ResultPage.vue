<template>
  <div class='result-page'>
    <Navbar />
    <div class="container">
    {{query}}
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'ResultPage',
  computed: {
    query: function () {
      return this.$route.query
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>
