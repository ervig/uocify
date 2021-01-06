import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NotFound from '@/views/NotFound'
import Playlist from '@/views/Playlist'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name:'home',
      component: Home
  },  
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name:'register',
    component: Register
  },        
  {
    path: '/search/:q',
    name:'search',
    component: SearchResults
  },  
  {
      path: '*',
      name:'notfound',
      component: NotFound
  },
  {
    path : '/Playlist/:id',
    name : 'Playlist',
    component : Playlist
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router