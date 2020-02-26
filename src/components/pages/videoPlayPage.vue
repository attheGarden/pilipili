<template>
    <div class="videoPlay_all">
      <header2_part></header2_part>
      <div class="videoPlay_body_box">
        <div class="videoPlay_body">
          <div class="videoPlay_body_left">
            <div class="videoPlay_body_left_top">
              <div class="videoPlay_body_left_top_title">{{temp_video_data.name}}</div>
              <div class="videoPlay_body_left_top_timeAndType">
                <span style="margin-right: 16px">{{videoData.type}}</span>
                <span>{{temp_video_data.release_time}}</span>
              </div>
              <div class="videoPlay_body_left_top_playAndDanmu">
                <span style="margin-right: 6px">{{temp_video_data.playnum}}播放</span>
                <span style="font-size: 12px">{{temp_video_data.commentnum}}弹幕</span>
              </div>
            </div>
            <div class="videoPlay_player_box">
              <div id="dplayer" class="dplayer_1"></div>
            </div>
            <div class="videoPlay_body_left_mid">
              <div class="videoPlay_body_left_mid_items">
                <div class="videoPlay_body_left_mid_item">
                  <i class="iconfont" style="font-size: 24px">&#xe60d;</i>
                  {{videoData.dz}}
                </div>
                <div class="videoPlay_body_left_mid_item">
                  <i class="iconfont" style="font-size: 24px;position: relative;top:2px">&#xe870;</i>
                  {{videoData.collect}}
                </div>
                <div class="videoPlay_body_left_mid_item">
                  <i class="iconfont" style="font-size: 24px;position: relative;top:3px">&#xe627;</i>
                  分享
                </div>
              </div>
            </div>
            <div class="videoPlay_body_left_mid2">
              <div class="videoPlay_body_left_mid2_content" title="videoData.intro">{{temp_video_data.info}}</div>
            </div>
            <comment_part :comments="commentData1"></comment_part>
          </div>
          <div class="videoPlay_body_right">
            <div class="up_box">
              <div style="width: 48px;height: 48px;float: left;border-radius: 50%;overflow: hidden">
                <img :src="videoData.up_img" width="48px" height="48px"/>
              </div>
              <div style="width: 256px;height: 40px;margin-left: 16px;float: left">
                <div style="width: 100%;height: 20px;float: left;font-size: 14px">{{videoData.up_name}}</div>
                <div style="width: 100%;height: 16px;float: left;margin-top: 4px;color: rgb(153,153,153);line-height: 16px;
                overflow: hidden;font-size: 12px" :title="videoData.up_intro">
                  {{videoData.up_intro}}
                </div>
              </div>
              <div class="up_gz" v-if="!(is_gz)" @click="gz(0)">
                <i class="iconfont" style="font-size: 15px">&#xe614;</i>
                关注
              </div>
              <div class="up_gz_on" v-if="is_gz" @click="gz(1)">
                已关注
              </div>
            </div>
            <div class="recommend_video_box">
              <div style="width: 320px;height: 24px;line-height: 24px;margin-bottom: 6px;color: rgb(34,34,34);font-size: 16px">
                相关推荐
              </div>
              <div class="recommend_video_item" v-for="(item, index) in temp_recommend_data" :key="index">
                <div class="recommend_video_item_img">
                  <img :src="item.logo" width="141px" height="80px"/>
                </div>
                <div class="recommend_video_item_info">
                  <div style="width: 169px;height: 36px;float: left;margin-bottom: 6px;line-height: 18px;font-size: 14px;
                    -webkit-line-clamp:2;overflow: hidden">
                    {{item.name}}
                  </div>
                  <div style="color: rgb(153, 153, 153);width: 160px;height: 16px;margin-bottom: 4px;float: left;font-size: 12px;
                    line-height: 16px">
                    {{item.user.name}}
                  </div>
                  <div style="color: rgb(153, 153, 153);width: 160px;height: 16px;margin-bottom: 4px;float: left;font-size: 12px;
                    line-height: 16px">
                    <span style="margin-right: 4px">{{item.playnum}}播放</span>
                    <span>{{item.commentnum}}弹幕</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import cyberplayer from '../../../static/cyberplayer-3.4.1/cyberplayer'
import commentPart from '../component/commentPart'
import header2 from '../component/header2'
import axios from 'axios'
// import 'flv.js'
import DPlayer from 'dplayer'
import flvjs from 'flv.js'
export default {
  name: 'videoPlayPage',
  components: {
    comment_part: commentPart,
    header2_part: header2
  },
  data () {
    return {
      dp: Function,
      cItem: '',
      isLogin: true,
      isLoginPop: false,
      user_img_pop: false,
      video_id: 0,
      tag_id: 0,
      is_gz: false,
      videoData: {
        title: '《原神》序章PV：捕风的异乡人',
        type: '游戏 > 网络游戏',
        time: '2019-06-08 11:33:12',
        play: '18.4万',
        danmu: '1628',
        dz: '7760',
        collect: '500',
        intro: '维系者正在死去，创造者尚未到来。\n' +
          '但世界不会再度灼烧，因为你将登上「神」之座。',
        up_img: 'https://i0.hdslb.com/bfs/face/189da516068e86f44c454349db2407d1becfc008.jpg',
        up_name: '余小c真的很强',
        up_intro: '\n' +
          '      我是up小金（不是小C）  \n' +
          '鞋子店客服小姐姐Vx：dz32000\n' +
          '商务合作请私信联系    \n' +
          '每周充电榜抽奖 每月2千红包\n' +
          '    ',
        recommend: [
          {
            img: 'https://i1.hdslb.com/bfs/archive/3f66df92dad04d9e1b72a41813ab28b8b421c36a.jpg@336w_190h.webp',
            title: '余小C解说《SKT vs G2》 Faker第一视角 终于知道为什么能1保4了',
            up: '余小c真的很强',
            plays: '15.8万',
            danmu: '158'
          },
          {
            img: 'https://i1.hdslb.com/bfs/archive/3f66df92dad04d9e1b72a41813ab28b8b421c36a.jpg@336w_190h.webp',
            title: '余小C解说《SKT vs G2》 Faker第一视角 终于知道为什么能1保4了',
            up: '余小c真的很强',
            plays: '15.8万',
            danmu: '158'
          },
          {
            img: 'https://i1.hdslb.com/bfs/archive/3f66df92dad04d9e1b72a41813ab28b8b421c36a.jpg@336w_190h.webp',
            title: '余小C解说《SKT vs G2》 Faker第一视角 终于知道为什么能1保4了',
            up: '余小c真的很强',
            plays: '15.8万',
            danmu: '158'
          },
          {
            img: 'https://i1.hdslb.com/bfs/archive/3f66df92dad04d9e1b72a41813ab28b8b421c36a.jpg@336w_190h.webp',
            title: '余小C解说《SKT vs G2》 Faker第一视角 终于知道为什么能1保4了',
            up: '余小c真的很强',
            plays: '15.8万',
            danmu: '158'
          },
          {
            img: 'https://i1.hdslb.com/bfs/archive/3f66df92dad04d9e1b72a41813ab28b8b421c36a.jpg@336w_190h.webp',
            title: '余小C解说《SKT vs G2》 Faker第一视角 终于知道为什么能1保4了',
            up: '余小c真的很强',
            plays: '15.8万',
            danmu: '158'
          }
        ]
      },
      temp_video_data: [],
      temp_recommend_data: [],
      commentData: [],
      commentData1: [],
      video_url_: ''
    }
  },
  mounted () {
    this.playVideo()
    this.playVideo1()
  },
  methods: {
    displayLoginPop (num) {
      if (num === 0) {
        this.isLoginPop = true
      } else {
        this.isLoginPop = false
      }
    },
    displayUserInfo (num) {
      if (num === 0) {
        this.user_img_pop = true
      } else {
        this.user_img_pop = false
      }
    },
    userQuit () {
      this.isLogin = false
      // this.video_url = 'http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hivruedyynkarv3d/mda-hivruedyynkarv3d.flv'
      // this.playVideo()
    },
    playVideo () {
      this.dp = new DPlayer({
        container: document.getElementById('dplayer'),
        theme: '#00a1d6',
        video: {
          url: this.video_url_,
          type: 'customFlv',
          customType: {
            'customFlv': function (video, player) {
              const flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: video.src
              })
              flvPlayer.attachMediaElement(video)
              flvPlayer.load()
            }
          }
        },
        danmaku: {
          id: 'demo',
          api: 'https://api.prprpr.me/dplayer/',
          addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]']
        }
      })
    },
    playVideo1 () {
      this.dp = new DPlayer({
        container: document.getElementById('dplayer'),
        theme: '#00a1d6',
        video: {
          url: this.video_url_,
          type: 'customFlv',
          customType: {
            'customFlv': function (video, player) {
              const flvPlayer = flvjs.createPlayer({
                type: 'mp4',
                url: video.src
              })
              flvPlayer.attachMediaElement(video)
              flvPlayer.load()
            }
          }
        },
        danmaku: {
          id: 'demo',
          api: 'https://api.prprpr.me/dplayer/',
          addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]']
        }
      })
    },
    gz (num) {
      if (num === 0) {
        this.is_gz = true
      } else {
        this.is_gz = false
      }
    }
  },
  created () {
    this.video_id = this.$route.query.videoId
    this.tag_id = this.$route.query.tagId
    // console.log('123456')
    console.log(this.video_id)
    if (this.tag_id === 2) {
      axios({
        method: 'get',
        url: '/api/video/get_one',
        params: {
          id: this.video_id
        }
      }).then(res => {
        console.log(res)
        this.temp_video_data = res.data.data
        this.videoData.type = this.temp_video_data.tag.sub_name
        this.videoData.up_img = this.temp_video_data.user.face
        this.videoData.up_name = this.temp_video_data.user.name
        this.videoData.up_intro = this.temp_video_data.user.info
        this.video_url_ = res.data.data.url
        // console.log(this.video_url_)
        this.playVideo1()
      }).catch(error => {
        console.log(error)
      })
    } else {
      axios({
        method: 'get',
        url: '/api/video/get_one',
        params: {
          id: 1101
        }
      }).then(res => {
        // console.log(res)
        this.temp_video_data = res.data.data
        this.videoData.type = this.temp_video_data.tag.sub_name
        this.videoData.up_img = this.temp_video_data.user.face
        this.videoData.up_name = this.temp_video_data.user.name
        this.videoData.up_intro = this.temp_video_data.user.info
        this.video_url_ = res.data.data.url
        console.log(this.video_url_)
        this.playVideo()
        // console.log(this.temp_animotion[0].logo)
      }).catch(error => {
        console.log(error)
      })
    }

    axios({
      method: 'get',
      url: '/api/video/get_relevant',
      params: {
        tag_id: 15
      }
    }).then(res => {
      console.log(res)
      // this.temp_video_data = res.data.data
      this.temp_recommend_data = res.data.data.videos
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .video-js .vjs-big-play-button{}
  .videoPlay_all
    width 100%
    .header_top_part
      width 100%
      height 42px
      z-index 1
      box-shadow 0 1px 2px rgba(0,0,0,.1)
      background-color rgba(255, 255, 255, 0.4)
      .menu_tab
        width 100%
        height 42px
        line-height 42px
        background-color rgba(255,255,255,0.8)
        .tab_box
          width 1393px
          margin 0 auto
          .tab_box_left
            float left
            .box_left_item
              display block
              float left
              cursor pointer
              &:hover{
                background-color rgba(255,255,255,0.5)
              }
          .tab_box_right
            float right
            .box_right_login
              .login_pop
                z-index 200
                position absolute
                top 42px
                width 82px
                background-color rgb(255,255,255)
                border-radius 4px
                border 1px solid #e3e3e3
                .login_pop_item
                  display block
                  width 100%
                  text-align center
                  &:hover{
                    background-color #00a1d6
                    color #fff
                  }
            .box_right_item
              display block
              float left
              cursor pointer
              padding 0 7px
              &:hover{
                background-color rgba(255,255,255,0.6)
              }
            .box_right_item2
              display block
              background-color: rgb(244,90,141)
              float right
              cursor pointer
              &:hover{
                background-color: rgba(244,90,141,0.9)
              }
          .tab_box_right_on
            float right
            height 42px
            .box_right_on_img
              display block
              width 32px
              height 32px
              float left
              overflow hidden
              border-radius 16px
              margin-top 4px
              cursor pointer
            .box_right_on_user_info
              width 260px
              height 230px
              float left
              background-color #fff
              position relative
              top 40px
              right -50px
              z-index 20
              box-shadow rgba(0, 0, 0, 0.16) 0px 2px 4px 0px
              .box_right_on_user_info_img_box
                width 68px
                height 68px
                margin 0 auto
                position relative
                top -34px
                border-radius 34px
                overflow hidden
              .box_right_on_user_info_content
                position relative
                top -20px
                width 260px
                float left
                .box_right_on_user_info_user_name
                  width 260px
                  float left
                  height 16px
                  line-height 16px
                  margin-bottom 8px
                  font-size 12px
                  text-align center
                  font-weight 700
                .box_right_on_user_info_detail
                  width 220px
                  float left
                  height 18px
                  line-height 18px
                  margin 0 20px 10px 20px
                .box_right_on_user_info_menu
                  width 260px
                  height 129px
                  float left
                  border-top 1px solid rgb(229, 233, 239)
                  .box_right_on_user_info_menu_items
                    width 220px
                    height 79px
                    float left
                    padding 10px 20px
                    .box_right_on_user_info_menu_items_box
                      width 240px
                      height 79px
                      float left
                      .box_right_on_user_info_menu_item
                        width 100px
                        height 26px
                        line-height 26px
                        margin-right 20px
                        float left
                        font-size 12px
                        color rgb(34, 34, 34)
                        cursor pointer
                        &:hover {
                          color #00a1d6
                        }
                  .box_right_on_user_info_menu_quit
                    width 260px
                    height 30px
                    line-height 30px
                    float left
                    background-color #f4f5f7
                    .box_right_on_user_info_menu_quit_button
                      width 28px
                      font-size 12px
                      float right
                      margin-right 5px
                      cursor pointer
                      &:hover {
                        color #00a1d6
                      }
            .box_right_on_item
              display block
              float left
              cursor pointer
              padding 0 7px
              &:hover{
                background-color rgba(255,255,255,0.6)
              }
            .box_right_on_item2
              display block
              background-color: rgb(244,90,141)
              float right
              &:hover{
                background-color: rgba(244,90,141,0.6)
              }
          .tab_search_part
            width 100%
            .search_box
              position absolute
              top: 120px
              margin 0 auto
              width 1160px
              height:32px
              .search_box_right
                width 350px
                float right
                line-height 32px
                .search_box_right_left
                  width:70px
                  float left
                  height 32px
                  text-align center
                  border-radius 5px
                  margin-right 2px
                  background-color rgba(255,255,255,0.8)
                  cursor pointer
                  &:hover{
                    background-color rgba(255,255,255,1)
                  }
                .search_box_right_right
                  width: 275px
                  height 32px
                  float left
                  border-radius 5px
                  background-color rgba(255,255,255,1)
    .videoPlay_body_box
      width 1393px
      min-height 1500px
      margin 20px auto
      .videoPlay_body
        width 100%
        height 100%
        .videoPlay_body_left
          width 1043px
          height 100%
          float left
          .videoPlay_body_left_top
            width 100%
            height 81px
            float left
            margin-bottom 16px
            .videoPlay_body_left_top_title
              width 100%
              height 26px
              margin-bottom 12px
              color rgb(33, 33, 33)
              font-size 18px
              line-height 26px
            .videoPlay_body_left_top_timeAndType
              width 1043px
              height 16px
              float left
              margin-top 11px
              color rgb(153, 153, 153)
              line-height 16px
              font-size 12px
            .videoPlay_body_left_top_playAndDanmu
              width 100%
              height 16px
              float left
              margin-top 11px
              color rgb(153, 153, 153)
              line-height 16px
              font-size 12px
          .videoPlay_player_box
            width 1043px
            height 587px
            overflow hidden
            float left
            .dplayer_1
              width 1043px
              height 587px
          .videoPlay_body_left_mid
            width 1042px
            height 28px
            border-bottom 1px solid rgb(229, 233, 240)
            float left
            margin-top 16px
            padding-bottom 12px
            .videoPlay_body_left_mid_items
              width 370px
              height 24px
              float left
              .videoPlay_body_left_mid_item
                width 92px
                height 30px
                line-height 24px
                color rgb(80, 80, 80)
                float left
                margin-right 10px
                cursor pointer
                font-size 14px
                &:hover{
                  color #00a1d6
                }
          .videoPlay_body_left_mid2
            float left
            width 100%
            height 36px
            margin-top 16px
            padding-bottom 10px
            border-bottom 1px solid rgb(229, 233, 239)
            color rgb(34,34,34)
            font-size 12px
            .videoPlay_body_left_mid2_content
              width 573px
              height 36px
              line-height 18px
              overflow hidden
              white-space pre-wrap
        .videoPlay_body_right
          float right
          width 320px
          height 100%
          margin-left 30px
          .up_box
            width 320px
            height 80px
            float left
            margin-bottom 16px
            .up_gz
              float right
              margin-top 5px
              margin-right 100px
              line-height 30px
              text-align center
              width 156px
              height 30px
              background-color rgb(0, 161, 214)
              color #fff
              border-radius 5px
              cursor pointer
              &:hover{
                background-color rgba(0, 161, 214, 0.6)
              }
            .up_gz_on
              float right
              margin-top 5px
              margin-right 100px
              line-height 30px
              text-align center
              width 156px
              height 30px
              background-color rgb(231, 231, 231)
              color #999
              border-radius 5px
              cursor pointer
              &:hover{
                background-color rgba(231, 231, 231, 0.6)
              }
          .recommend_video_box
            width 320px
            min-height 800px
            float left
            .recommend_video_item
              width 320px
              height 80px
              float left
              padding 6px 0
              color rgb(34,34,34)
              .recommend_video_item_img
                width 141px
                height 80px
                background-color rgb(244, 245, 24)
                float left
                overflow hidden
              .recommend_video_item_info
                width 168px
                height 80px
                margin-left 10px
                float left
</style>
