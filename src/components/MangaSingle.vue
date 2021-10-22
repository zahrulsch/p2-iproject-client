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
        <div class="col-9">
          <div class="container">
            <div v-if="isEmpty" class="not-found">
              chapter not found
            </div>
            <Error v-if="isError" />
            <Loader v-if="!chapters.length && !isError"/>
            <div class="row row-cols-2 col-12">
              <div v-for="(chapter, index) in chapters" :key="index" class="col">
                <router-link :to="`/manga/${id}/c/${chapter.id}`" class="ep d-flex align-items-center">
                  <div class="ep-img me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="red" class="bi bi-journal-check" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                  </div>
                  <div class="ep-title">
                    <div class="ep-title-en fw-bolder">(Chapter {{chapter.chapter}}) - {{chapter.title}}</div>
                    <div class="ep-title-jp d-flex align-items-center">Language : <CountryFlag class="ms-1" size="small" :country="chapter.lang" /></div>
                    <!-- <div class="fw-normal d-flex align-items-center"><img src="https://cdn.myanimelist.net/images/favicon.ico" width="16" class="me-2" alt=""><span>{{episode.source_video}}</span></div> -->
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import CountryFlag from 'vue-country-flag'
import Error from './Error.vue'
import Loader from './Loader.vue'
export default {
  name: 'MangaChapters',
  data: function () {
    return {
      id: this.$route.params.id,
      mangaDetail: {},
      chapters: [],
      isError: false,
      isEmpty: false
    }
  },
  components: {
    Navbar,
    Error,
    CountryFlag,
    Loader
  },
  created: function () {
    this.$store.dispatch('getMangaDetail', this.id)
      .then(data => {
        console.log(data)
        this.mangaDetail = data
      })
    this.$store.dispatch('getMangaChapters', this.id)
      .then(data => {
        if (!data.length) this.isEmpty = true
        data.forEach(d => {
          d.source = 'Mangadex'
          this.chapters.push(d)
        })
      })
      .catch(err => {
        this.isError = true
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
