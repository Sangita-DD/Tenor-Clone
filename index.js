import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/SearchResults.vue'),
    children : [
      {
          path : '/',
          name : 'SearchView',
          component: () => import(/* webpackChunkName: "SearchView" */ '../views/SearchResults.vue'), 
      },
      {
          path : ':searchTerm',
          name : 'SearchViewDetail',
          props: true,
          component: () => import(/* webpackChunkName: "SearchViewDetail" */ '../views/SearchResults.vue'), 
      }
  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
