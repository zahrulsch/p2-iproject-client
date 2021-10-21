<template>
  <div class="manga-single">
    <Navbar />
    <div class="container">
      <div class="col-12 d-flex my-3">
        <div class="col-3 side">
          <div class="anime-image mb-4">
            <img :src="mangaDetail.thumbnail" :alt="mangaDetail.title_en">
          </div>
          <div class="anime-title mb-4">
            <h4>Title</h4>
            <div class="line"></div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">English :</span>
              <span>{{mangaDetail.title_en}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Japanese :</span>
              <span>{{mangaDetail.alt_title || '-'}}</span>
            </div>
          </div>
          <div class="anime-info">
            <h4>Information</h4>
            <div class="line"></div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Author :</span>
              <span>{{mangaDetail.author}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Genres :</span>
              <span v-if="mangaDetail.tags">{{mangaDetail.tags.join(', ')}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Status :</span>
              <span class="text-capitalize">{{mangaDetail.status}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Language :</span>
              <span>{{mangaDetail.lang}}</span>
            </div>
            <!-- <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Genres :</span>
              <span>{{genres}}</span>
            </div>
            <div class="info d-flex">
              <span class="me-2 fw-bold title-info">Aired :</span>
              <span>{{mangaDetail.aired.string}}</span>
            </div> -->
            <div style="overflow: hidden;" class="info d-flex flex-column">
              <span class="me-2 fw-bold title-info">Synopsis :</span>
              <span v-if="mangaDetail.descrition" class="synopsis">{{mangaDetail.descrition.en || '-'}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'MangaChapters',
  data: function () {
    return {
      id: this.$route.params.id,
      mangaDetail: {}
    }
  },
  components: {
    Navbar
  },
  created: function () {
    this.$store.dispatch('getMangaDetail', this.id)
      .then(data => {
        console.log(data)
        this.mangaDetail = data
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
