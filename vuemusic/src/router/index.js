import Vue from 'vue'
import Router from 'vue-router'
// @:src根目录
import Home from "@/containers/Home"
import Artists from "@/containers/Artists"
import Search from "@/containers/Search"
import SongLists from "@/containers/SongLists"
import Top from "@/containers/Top"
import UCenter from "@/containers/UCenter"
import Player from "@/containers/Player"
import Login from "@/containers/Login"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/songlists',
      name: 'SongLists',
      component: SongLists
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/ucenter',
      name: 'UCenter',
      component: UCenter
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/player/:music_id',
      name: 'Player',
      component: Player,
      props: true,
      meta:{
        keepAlive:false
      }
    },
    {
      path:"./login",
      
      component:Login
    }
  ]
})
