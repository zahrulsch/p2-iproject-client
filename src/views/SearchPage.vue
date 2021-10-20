<template>
  <div id="search-page">
    <div class="container">
        <div class="search-page d-flex flex-column justify-content-center">
            <div class="search-logo d-flex flex-column align-items-center mb-4">
                <img src="../assets/myanime.png" alt="logo" width="120">
                <h2 class="text-center mt-2">MyAnime</h2>
            </div>
            <div class="search-field col-sm-11 col-lg-4 d-flex justify-content-center mx-lg-auto">
                <div class="search-form col-11">
                    <input @keyup.enter="sendQuery" v-model="query" type="text" placeholder="e.g. one piece">
                </div>
                <div @click="sendQuery" class="search-button col-1">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data: function () {
    return {
      query: ''
    }
  },
  methods: {
    sendQuery: function () {
      if (this.query) {
        this.$router.push(`/find?title=${this.query}`)
      }
    }
  }
}
</script>

<style scoped>
  .search-page {
      min-height: 80vh;
  }
  .search-logo {
    font-family: 'Lobster Two', cursive;
  }
  .search-logo h2 {
    font-weight: bold;
    color: tomato;
    font-size: 2.5rem;
  }
  .search-field {
      height: auto;
      border-radius: 20px;
      border: 1px solid #dadce0;
      overflow: hidden;
      padding: 5px 10px;
  }
  .search-form > input {
      width: 100%;
      border: none;
  }
  .search-form > input:focus {
      border: none;
      outline: none;
  }
  .search-button > button {
      border: none;
      background-color: transparent;
        }
</style>
