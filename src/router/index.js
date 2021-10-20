import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPage from '../views/SearchPage.vue'
import ResultPage from '../views/ResultPage.vue'
import AnimeSingle from '../views/AnimeSingle.vue'
import AnimeEpisodes from '../components/AnimeEpisodes.vue'
// import AnimeEpisode from '../components/AnimeEpisode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/find',
    name: 'ResultPage',
    component: ResultPage
  },
  {
    path: '/anime/:id',
    name: 'AnimePage',
    component: AnimeSingle,
    children: [
      {
        path: 'episodes',
        name: 'AnimeEpisodes',
        component: AnimeEpisodes
      }
      // {
      //   path: 'episode/:epId',
      //   name: 'AnimeEpisode',
      //   component: AnimeEpisode
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
