<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div v-if="picLength" class="info">
      <h4 class="text-center">(Chapter {{data.chapter}}) - {{data.title}}</h4>
    </div>
    <div v-if="picLength" class="indicator">{{index+1}} / {{picLength}}</div>
    <div v-if="picLength" class="container d-flex justify-content-center">
      <div v-if="index > 0" @click="prev" class="prev px-4 d-flex align-items-center pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
      </div>
      <div v-for="(pic, n) in data.data" :key="n" class="d-flex justify-content-center">
        <img v-if="index === n" :src="pic">
      </div>
      <div v-if="index == 0 || index != picLength - 1" @click="next" class="next px-4 d-flex align-items-center pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MangaCarousel',
  props: ['data'],
  data: function () {
    return {
      index: 0
    }
  },
  computed: {
    picLength: function () {
      return this.data.data ? this.data.data.length : 0
    }
  },
  methods: {
    next: function () {
      this.index++
    },
    prev: function () {
      this.index--
    }
  }
}
</script>

<style scoped>
svg {
  background-color: rgba(255, 255, 255, 0.808);
  padding: 5px;
  box-shadow: 1px 1px 5px rgb(179, 179, 179);
}
.indicator {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.prev {
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
}
.next {
  position: absolute;
  top: 0;
  right: 25px;
  height: 100%;
}
.container {
  height: 99vh;
  position: relative;
  overflow: hidden;
}
.pointer {
  cursor: pointer;
}
img {
  height: auto;
  width: 90%;
}
</style>
