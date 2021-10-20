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
        <div class="col-9">
          <div class="episodes px-3 mt-2">
            <h3>Episodes of {{animeData.title}}</h3>
          </div>
          <div class="container">
            <div class="row row-cols-2 col-12">
              <div v-for="(episode, index) in episodes" :key="index" class="col">
                <div class="ep d-flex align-items-center">
                  <div class="ep-img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-file-earmark-play me-2" viewBox="0 0 16 16">
                      <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z"/>
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                  </div>
                  <div class="ep-title">
                    <div class="ep-title-en fw-bolder">(Episode {{episode.episode_id}}) - {{episode.title}}</div>
                    <div class="ep-title-jp">{{episode.title_japanese}} ({{episode.title_romanji.trim()}})</div>
                    <div class="fw-normal d-flex align-items-center"><img src="https://cdn.myanimelist.net/images/favicon.ico" width="16" class="me-2" alt=""><span>{{episode.source_video}}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    this.$store.dispatch('getAnimeDetail', this.animeId)
      .then(data => {
        console.log(data)
        this.animeData = data
      })
      .catch(err => {
        console.log(err)
      })
    this.$store.dispatch('getAnimeEpisodes', this.animeId)
      .then(data => {
        data.forEach(d => {
          d.source_video = 'MyAnimeList'
          this.episodes.push(d)
        })
        console.log(data)
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
/* ep */
.ep {
  border-bottom: 1px solid rgba(180, 177, 177, 0.89);
  padding: 10px 0;
}
.ep-title-en {
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.ep-title-jp {
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
