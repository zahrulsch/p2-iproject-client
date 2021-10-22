<template>
  <div class="col-12 mt-4 d-flex justify-content-center">
    <div class="search d-flex align-items-stretch justify-content-center col-7">
      <div class="search-input col-10">
        <input v-model="query" @keyup.enter="sendQuery" type="text" placeholder="find another anime or manga...">
      </div>
      <div @click="sendQuery" class="pointer search-icon col-2 d-flex align-items-center ms-1 justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data: function () {
    return {
      query: ''
    }
  },
  methods: {
    sendQuery: function () {
      if (this.query) {
        this.$router.push(`/find?title=${this.query}`)
        this.$emit('query', this.query)
      }
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.search {
  border: 1px solid rgb(214, 214, 214);
  border-radius: 10px;
  overflow: hidden;
}
.search-input input {
  outline: none;
  padding: 5px 8px;
  padding-left: 15px !important;
  border: none;
  width: 100%;
  font-family: 'Lato', sans-serif;
}
.search-icon {
  background-color: rgb(214, 214, 214);
}
::placeholder {
  font-family: 'Lato', sans-serif;
}
</style>
