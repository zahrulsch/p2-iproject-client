<template>
  <div class='result-page'>
    <Navbar />
    <div v-if="!needLoader" class="container">
      <search-form/>
      <div class="my-3">
        <h4 class="category-tags">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
          </svg>
          Anime
        </h4>
      </div>
      <div class="row row-cols-5">
        <AnimeCard v-for="(anime, index) in animes" :key="index" :anime="anime" class="col" />
      </div>
      <div class="line"></div>
      <div class="my-3">
        <h4 class="category-tags">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
          </svg>
          Manga
        </h4>
      </div>
      <div class="row row-cols-6">
        <MangaCard v-for="(manga, index) in mangas" :key="index" :manga="manga" class="col" />
      </div>
    </div>
    <div class="container mb-4">
      <Error v-if="loadError" />
      <Loader v-if="needLoader" />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Error from '../components/Error.vue'
import Loader from '../components/Loader.vue'
import AnimeCard from '../components/AnimeCard.vue'
import MangaCard from '../components/MangaCard.vue'
import SearchForm from '../components/SearchForm.vue'

export default {
  name: 'ResultPage',
  data: function () {
    return {
      page: 1,
      limit: 10,
      title: this.$route.query.title,
      animes: [],
      mangas: [],
      loadError: false,
      needLoader: false
    }
  },
  computed: {
    query: function () {
      return this.$route.query
    }
  },
  components: {
    Navbar,
    Error,
    Loader,
    AnimeCard,
    MangaCard,
    SearchForm
  },
  created: function () {
    this.needLoader = true
    this.$store.dispatch('searchAnimes', {
      page: this.page,
      limit: this.limit,
      title: this.title
    }).then(data => {
      this.needLoader = false
      data.forEach(d => {
        this.animes.push(d)
      })
    }).catch(err => {
      this.needLoader = false
      console.log(err)
      this.loadError = true
    })
    this.$store.dispatch('searchMangas', {
      title: this.title
    }).then(data => {
      console.log(data)
      data.forEach(d => {
        this.mangas.push(d)
      })
    }).catch(_ => {
      this.loadError = true
    })
  }
}
</script>

<style scoped>
.line {
  border-top: 1px solid rgb(190, 190, 190);
  width: 100%;
  margin: 15px 0;
}
.category-tags {
  color: tomato;
  padding: 5px 0;
  padding-left: 10px;
  border-left: 4px solid tomato;
  border-bottom: 1px solid tomato;
  display: flex;
  width: 20%;
  align-items: center;
  gap: 7px;
}
</style>
