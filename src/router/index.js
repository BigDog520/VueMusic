import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import ListCate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'
import HotList from '@/pages/musiclist/hot_list'
import NewList from '@/pages/musiclist/new_list'
import KingList from '@/pages/musiclist/king_list'
import NotFound from '@/pages/notfound'
import MoreList from '@/pages/morelist'
import MusicPlay from '@/pages/musicplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: NotFound,
    },
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Index,
      children:[
        {
          path:'home',
          component:Home,
          redirect:'/home/hot',
          children:[
            {
              path:'hot',
              component:HotList
            },
            {
              path:'new',
              component:NewList
            },
            {
              path:'king',
              component:KingList
            }
          ]
        },{
          path:'artists',
          component:Artists
        },{
          path:'listcate',
          component:ListCate
        },{
          path:'ucenter',
          component:Ucenter
        },{
          path:'search',
          component:Search
        },{
          path:'more',
          name:'MoreList',
          component:MoreList
        }
      ]
    },{
          path:'/play',
          name:'MusicPlay',
          component:MusicPlay
        }
  ]
})
