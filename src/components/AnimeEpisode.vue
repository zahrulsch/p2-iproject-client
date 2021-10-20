<template>
  <div class="col-9">
    <div class="container">
      <div class="row row-cols-2 col-12">
        <pre>{{episodes}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimeEpisode',
  props: ['episodes']
}
</script>

<style>

</style>
