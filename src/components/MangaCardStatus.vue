<template>
  <div class="status d-flex align-items-center">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" :class="s" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>
      <span>
        {{status}}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MangaCardStatus',
  props: ['status'],
  computed: {
    s: function () {
      return {
        'green bi bi-circle-fill': this.status.toLowerCase() === 'completed',
        'blue bi bi-circle-fill': this.status.toLowerCase() === 'ongoing'
      }
    }
  }
}
</script>

<style scoped>
.blue {
  color: rgb(44, 44, 255);
}
.green {
  color: rgb(0, 173, 0);
}
.status {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.876);
  margin-left: 5px;
  margin-top: 8px;
}
.status span {
  padding: 5px 8px;
  text-transform: capitalize;
  font-weight: bold;
}
</style>
