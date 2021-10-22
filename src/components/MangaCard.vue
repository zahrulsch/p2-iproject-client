<template>
  <router-link :to="`/manga/${manga.id}`" class="col">
    <div class="post">
      <div class="post-image">
        <img :src="manga.thumbnail" :alt="manga.title">
      </div>
      <div class="post-title">
        <h5>{{manga.title}}</h5>
      </div>
      <MangaCardStatus :status="manga.status" />
    </div>
  </router-link>
</template>

<script>
import MangaCardStatus from './MangaCardStatus.vue'

export default {
  name: 'MangaCard',
  props: ['manga'],
  components: {
    MangaCardStatus
  }
}
</script>

<style scoped>
.post {
  height: 280px;
  position: relative;
  overflow: hidden;
  margin: 10px 5px;
}
.post-image {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%;
}
.post-image img {
  width: 100%;
}
.post-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.8071603641456583) 48%, rgba(255,255,255,0) 100%);
}
.post-title h5 {
  padding: 0 7px;
  color: white;
}
.post-score {
  position: absolute;
  top: 0;
  left: 0;
}
.post-score span {
  padding: 5px 8px;
  background-color: rgba(255, 255, 255, 0.897);
  font-weight: bold;
  border-bottom-right-radius: 3px;
}
</style>
