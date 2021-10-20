import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    searchAnimes: function (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/animes',
          params: {
            page: payload.page,
            limit: payload.limit,
            title: payload.title
          }
        }).then(resp => {
          resolve(resp.data)
        }).catch(err => {
          reject(err.response)
        })
      })
    },
    searchMangas: function (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/mangas?title=${payload.title}`
        }).then(resp => {
          resolve(resp.data)
        }).catch(err => {
          reject(err.response)
        })
      })
    },
    searchAnimeById: function (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/anime?id=${payload.id}&page=${payload.page}`
        }).then(resp => {
          resolve(resp.data)
        }).catch(err => {
          reject(err.response)
        })
      })
    },
    getAnimeDetail: function (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/anime-detail/${payload}`
        }).then(resp => {
          resolve(resp.data)
        }).catch(err => {
          reject(err.response)
        })
      })
    },
    getAnimeEpisodes: function (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/anime?id=${payload}&page=1`
        }).then(resp => {
          console.log(resp.data)
          resolve(resp.data)
        }).catch(err => {
          reject(err.response)
        })
      })
    }
  },
  modules: {
  }
})
