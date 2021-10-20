<template>
  <div class="col">
    <router-link :to="`/anime/${anime.mal_id}`">
      <div class="post">
        <div class="post-score">
          <span>{{anime.score}}</span>
        </div>
        <div class="post-title">
          <h4>{{anime.title}}</h4>
        </div>
        <div class="post-image">
          <img :src="anime.image_url" :alt="anime.title">
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AnimeCard',
  props: ['anime']
}
</script>

<style scoped>
.post {
  height: 348px;
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
.post-title h4 {
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
