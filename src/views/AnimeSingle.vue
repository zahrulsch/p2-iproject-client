<template>
  <div class="anime-page">
    <Navbar />
    <div v-if="isData" class="container">
      <div class="col-12 d-flex my-3">
        <div class="col-3 side">
          <div class="anime-image mb-4">
            <img :src="animeData.image_url" :alt="animeData.title">
          </div>
          <div class="anime-title mb-4">
            <h4>Title</h4>
            <div class="line"></div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">English :</span>
              <span>{{animeData.title_english}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Japanese :</span>
              <span>{{animeData.title_japanese}}</span>
            </div>
          </div>
          <div class="anime-info">
            <h4>Information</h4>
            <div class="line"></div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Type :</span>
              <span>{{animeData.type}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Episodes :</span>
              <span>{{animeData.episodes}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Status :</span>
              <span>{{animeData.status}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Studios :</span>
              <span>{{studios}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Genres :</span>
              <span>{{genres}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Aired :</span>
              <span>{{animeData.aired.string}}</span>
            </div>
            <div class="info d-flex flex-column">
              <span class="me-2 fw-bold title-info">Synopsis :</span>
              <span class="synopsis">{{animeData.synopsis}}</span>
            </div>
          </div>
        </div>
        <router-view :animeData="animeData" :episodes="episodes"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'AnimeSingle',
  data: function () {
    return {
      animeId: this.$route.params.id,
      animeData: {},
      episodes: []
    }
  },
  computed: {
    isData: function () {
      if (Object.keys(this.animeData).length) return true
      return false
    },
    genres: function () {
      const genres = this.animeData.genres.map(e => e.name)
      return genres.join(', ')
    },
    studios: function () {
      const studios = this.animeData.studios.map(e => e.name)
      return studios.join(', ')
    }
  },
  components: {
    Navbar
  },
  created: function () {
    if (this.$route.name === 'AnimePage') {
      this.$router.push(`/anime/${this.animeId}/episodes`)
    }
    this.$store.dispatch('getAnimeDetail', this.animeId)
      .then(data => {
        console.log(data)
        this.animeData = data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.anime-image img {
  width: 100%;
}
.line {
  width: 100%;
  border-top: 1px solid rgb(163, 163, 163);
  margin: 5px 0;
}
.side {
  padding-right: 20px;
  margin: 8px 0;
  border-right: 1px solid rgba(128, 128, 128, 0.52);
}
.info {
  margin: 5px 0;
}
.title-info {
  white-space: nowrap;
}
.synopsis {
  text-align: justify;
}
</style>
