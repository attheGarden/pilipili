import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import rankIndex from '../components/rank/rank_index'
import personalIndex from '../components/personal/personalIndex'
import searchIndex from '../components/search/searchIndex'
import personalInfoChange from '../components/personal/personal_info_change'
import registerPage from '../components/pages/registerPage'
import loginPage from '../components/pages/loginPage'
import videoPlayPage from '../components/pages/videoPlayPage'
import videoPlayPage2 from '../components/pages/videoPlayPage2'
import videoUploadPage from '../components/pages/videoUploadPage'
import bangumiIndex from '../components/bangumi/bangumiIndex'
import bangumiPage from '../components/pages/bangumiPage'
import musicIndex from '../components/music/musicIndex'
import danceIndex from '../components/dance/danceIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/rank',
      name: 'rank_index',
      component: rankIndex
    },
    {
      path: '/search',
      name: 'search_index',
      component: searchIndex
    },
    {
      path: '/personalIndex',
      name: 'personal_index',
      component: personalIndex
    },
    {
      path: '/personalInfoChange',
      name: 'personal_info_change',
      component: personalInfoChange
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/videoPlay',
      name: 'video',
      component: videoPlayPage
    },
    {
      path: '/videoPlay2',
      component: videoPlayPage2
    },
    {
      path: '/videoUploadPage',
      component: videoUploadPage
    },
    {
      path: '/bangumiIndex',
      component: bangumiIndex
    },
    {
      path: '/bangumiPage',
      name: 'bangumiPage',
      component: bangumiPage
    },
    {
      path: '/musicIndex',
      component: musicIndex
    },
    {
      path: '/danceIndex',
      component: danceIndex
    }
  ]
})
