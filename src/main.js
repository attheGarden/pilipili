// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player'

Vue.use(VueResource)
Vue.use(ELementUI)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.prototype.ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
