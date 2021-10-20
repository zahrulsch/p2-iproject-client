<template>
  <div class="col-9">
    <div class="episodes px-3 mt-2">
      <h3>Episodes of {{animeData.title}}</h3>
    </div>
    <div class="container">
      <div class="row row-cols-2 col-12">
        <div v-for="(episode, index) in episodes" :key="index" class="col">
          <a :href="episode.video_url" target="_blank" class="ep d-flex align-items-center">
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
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimeEpisodes',
  data: function () {
    return {
      id: this.$route.params.id,
      episodes: [],
      animeData: {}
    }
  },
  created: function () {
    this.$store.dispatch('getAnimeEpisodes', this.id)
      .then(data => {
        data.forEach(d => {
          this.episodes.push(d)
        })
      })
      .catch(err => {
        console.log(err)
      })
    this.$store.dispatch('getAnimeDetail', this.id)
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
