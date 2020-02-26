<template>
    <div class="personal_index_all">
      <div class="header_top_part">
        <div class="menu_tab">
          <div class="tab_box">
            <div class="tab_box_left">
          <router-link class="box_left_item" to="/">
            <i class="iconfont" style="color: #00a1d6;font-size: 18px;margin-top: 3px">&#xe609;</i>
            <i style="font-size: 12px;font-style: normal;color: rgb(34,34,34)">主站</i>
          </router-link>
              <span class="box_left_item" style="padding:0 5px;margin-left: 5px">
            <i style="font-size: 12px;font-style: normal;color: rgb(34,34,34)">音频</i>
          </span>
              <span class="box_left_item" style="padding:0 5px;margin-left: 5px">
            <i style="font-size: 12px;font-style: normal;color: rgb(34,34,34)">游戏中心</i>
          </span>
              <span class="box_left_item" style="padding:0 5px;margin-left: 5px">
            <i style="font-size: 12px;font-style: normal;color: rgb(34,34,34)">直播</i>
          </span>
              <span class="box_left_item" style="padding:0 5px;margin-left: 5px">
            <i style="font-size: 12px;font-style: normal;color: rgb(34,34,34)">漫画</i>
          </span>
              <span class="box_left_item" style="padding:0 5px;margin-left: 5px">
            <i style="font-size: 12px;font-style: normal;color: rgb(34,34,34)">PML</i>
          </span>
            </div>
            <div class="tab_box_right" v-if="!(isLogin)">
              <span class="box_right_login" style="display: block;float: left;border-radius: 32px;overflow: hidden;width: 32px;height: 32px;
              line-height: 32px;margin-top: 5px">
                <img src="https://static.hdslb.com/images/akari.jpg" style="width: 32px;height: 32px;z-index: 1;cursor: pointer"
                     @mouseenter="displayLoginPop(0)"/>
                <div class="login_pop" v-if="isLoginPop" @mouseenter="displayLoginPop(0)" @mouseleave="displayLoginPop(1)">
                  <a class="login_pop_item" style="border-bottom:1px solid #e3e3e3">登录</a>
                  <a class="login_pop_item">注册</a>
                </div>
              </span>
              <span class="box_right_item" style="margin-left: 15px">
            <i style="font-style: normal;font-size: 12px">历史</i>
          </span>
              <span class="box_right_item2" style="margin-left: 10px;width: 68px; height: 46px;
          text-align: center;border-bottom-right-radius: 6px;border-bottom-left-radius: 6px">
            <a style=" color: #fff;font-size: 14px">投稿</a>
          </span>
            </div>
            <div class="tab_box_right_on" v-if="isLogin">
              <div class="box_right_on_user_info" v-if="user_img_pop" @mouseenter="displayUserInfo(0)" @mouseleave="displayUserInfo(1)">
                <div class="box_right_on_user_info_img_box">
                  <img :src="user_face" width="68px"/>
                </div>
                <div class="box_right_on_user_info_content">
                  <div class="box_right_on_user_info_user_name">{{user_name}}</div>
                  <div class="box_right_on_user_info_detail">
                <span style="width: 18px;height: 18px;border-radius: 9px;float: left;margin-right: 3px;font-size: 12px;
                line-height: 18px;background-color: #00a1d6;color: #fff;text-align: center">
                  币
                </span>
                    <span style="font-size: 12px;color: rgb(34,34,34);margin-right: 15px;float: left">18</span>
                    <span style="width: 18px;height: 18px;border-radius: 9px;float: left;margin-right: 3px;font-size: 12px;
                line-height: 18px;background-color: #f6e702;color: #e65636;text-align: center">
                  B
                </span>
                    <span style="font-size: 12px;color: rgb(34,34,34);margin-right: 15px;">5</span>
                    <span style="width: 18px;height: 18px;border-radius: 9px;float: right;margin-right: 3px;font-size: 12px;
                line-height: 18px;background-color: #00a1d6;color: #fff;text-align: center;cursor: pointer">
                  <i class="iconfont" style="font-size: 18px" title="手机">&#xe65d;</i>
                </span>
                    <span style="width: 18px;height: 18px;border-radius: 9px;float: right;margin-right: 5px;font-size: 12px;
                line-height: 18px;background-color: #00a1d6;color: #fff;text-align: center;cursor: pointer">
                  <i class="iconfont" style="font-size: 16px" title="邮箱">&#xe66a;</i>
                </span>
                  </div>
                  <div class="box_right_on_user_info_menu">
                    <div class="box_right_on_user_info_menu_items">
                      <div class="box_right_on_user_info_menu_items_box">
                        <div class="box_right_on_user_info_menu_item">
                          <i class="iconfont" style="font-size: 14px">&#xe606;</i>
                          个人中心
                        </div>
                        <div class="box_right_on_user_info_menu_item">
                          <i class="iconfont" style="font-size: 14px">&#xe76c;</i>
                          投稿管理
                        </div>
                        <div class="box_right_on_user_info_menu_item">
                          <i class="iconfont" style="font-size: 14px">&#xe747;</i>
                          B币钱包
                        </div>
                        <div class="box_right_on_user_info_menu_item">
                          <i class="iconfont" style="font-size: 14px">&#xe62a;</i>
                          直播中心
                        </div>
                        <div class="box_right_on_user_info_menu_item">
                          <i class="iconfont" style="font-size: 14px">&#xe676;</i>
                          订单中心
                        </div>
                      </div>
                    </div>
                    <div class="box_right_on_user_info_menu_quit">
                      <div class="box_right_on_user_info_menu_quit_button" @click="userQuit()">退出</div>
                    </div>
                  </div>
                </div>
              </div>
              <span class="box_right_on_img" @mouseenter="displayUserInfo(0)" v-if="!(user_img_pop)">
                <img :src="user_face" width="32px"/>
              </span>
              <span class="box_right_on_item">
                <i style="font-style: normal;font-size: 12px">动态</i>
              </span>
              <span class="box_right_on_item">
                <i style="font-style: normal;font-size: 12px">稍后再看</i>
              </span>
              <span class="box_right_on_item">
                <i style="font-style: normal;font-size: 12px">收藏</i>
              </span>
              <span class="box_right_on_item">
                <i style="font-style: normal;font-size: 12px">历史</i>
              </span>
              <span class="box_right_on_item2" style="margin-left: 10px;width: 68px; height: 46px;
          text-align: center;border-bottom-right-radius: 6px;border-bottom-left-radius: 6px;cursor: pointer">
            <a style=" color: #fff;font-size: 14px;cursor: pointer">投稿</a>
          </span>
            </div>
          </div>
        </div>
      </div>
      <div class="personal_index_body_box">
        <div class="personal_index_body">
          <div class="personal_index_top">
            <div class="personal_index_top_body">
              <router-link class="personal_index_top_body_img" to="/personalInfoChange">
                <img :src="user_face" width="68px"/>
              </router-link>
              <div class="personal_index_top_body_msg">
                <div class="personal_index_top_body_msg_top">
                  <div style="float: left;font-size: 18px;font-weight: 700;color: #fff;">{{user_name}}</div>
                </div>
                <div class="personal_index_top_body_msg_bottom">{{user_info}}</div>
              </div>
            </div>
          </div>
          <div class="personal_index_mid">
            <div class="personal_index_mid_item_box">
              <div :class="{personal_index_mid_item: !(personal_index_mid_flags[0]), personal_index_mid_item_on: personal_index_mid_flags[0]}"
              @click="changePersonalItem(0)">
                <div style="width: 20px;height: 66px;float: left;margin-right: 4px">
                  <i class="iconfont" style="color: rgb(0, 192, 145);font-size: 20px">&#xe6ca;</i>
                </div>
                主页
              </div>
              <div class="personal_index_mid_item">
                <div style="width: 20px;height: 66px;float: left;margin-right: 4px">
                  <i class="iconfont" style="color: #fb7299;font-size: 24px">&#xe607;</i>
                </div>
                动态
              </div>
              <div :class="{personal_index_mid_item: !(personal_index_mid_flags[2]), personal_index_mid_item_on: personal_index_mid_flags[2]}"
                   @click="changePersonalItem(2)">
                <div style="width: 20px;height: 66px;float: left;margin-right: 4px">
                  <i class="iconfont" style="color: #02b5da;font-size: 20px">&#xe634;</i>
                </div>
                投稿
              </div>
              <div class="personal_index_mid_item">
                <div style="width: 20px;height: 66px;float: left;margin-right: 4px">
                  <i class="iconfont" style="color: #23c9ed;font-size: 22px">&#xe62c;</i>
                </div>
                频道
              </div>
              <div :class="{personal_index_mid_item: !(personal_index_mid_flags[4]), personal_index_mid_item_on: personal_index_mid_flags[4]}"
                   @click="changePersonalItem(4)">
                <div style="width: 20px;height: 66px;float: left;margin-right: 4px">
                  <i class="iconfont" style="color: #f3a034;font-size: 24px">&#xe870;</i>
                </div>
                收藏
              </div>
              <div :class="{personal_index_mid_item: !(personal_index_mid_flags[5]), personal_index_mid_item_on: personal_index_mid_flags[5]}"
                   @click="changePersonalItem(5)">
                <div style="width: 20px;height: 66px;float: left;margin-right: 4px">
                  <i class="iconfont" style="color: #ff5d47;font-size: 24px">&#xe632;</i>
                </div>
                订阅
              </div>
              <div class="personal_index_mid_item">
                <div style="width: 20px;height: 66px;float: left;margin-right: 4px">
                  <i class="iconfont" style="color: #23c9ed;font-size: 24px">&#xe60b;</i>
                </div>
                设置
              </div>
            </div>
            <div class="personal_index_mid_msg">
              <div style="float: left;width: 58px;height: 46px;padding: 10px 0;color: #222">
                <div style="width: 58px;height: 14px;color: rgb(153, 162, 170);font-size: 12px;float: left;text-align: center;margin-top: 5px">
                  关注数
                </div>
                <div style="width: 58px;height: 16px;color: #222;font-size: 12px;float: left;margin-top: 5px;text-align: center">
                  78
                </div>
              </div>
              <div style="float: left;width: 58px;height: 46px;padding: 10px 0;color: #222">
                <div style="width: 58px;height: 14px;color: rgb(153, 162, 170);font-size: 12px;float: left;text-align: center;margin-top: 5px">
                  粉丝数
                </div>
                <div style="width: 58px;height: 16px;color: #222;font-size: 12px;float: left;margin-top: 5px;text-align: center">
                  8
                </div>
              </div>
            </div>
          </div>
          <div>
            <index_part v-if="personal_index_mid_flags[0]" :collect_video="personal_data.collect_videos" :collect_bangumi="personal_data.dy_videos"></index_part>
            <works_part v-if="personal_index_mid_flags[2]" :my_videos="personal_data.my_videos" :flag="workspart_flag"></works_part>
            <collect_part v-if="personal_index_mid_flags[4]" :collect_video="personal_data.collect_videos"></collect_part>
            <dy_part v-if="personal_index_mid_flags[5]" :dy_video="personal_data.dy_videos"></dy_part>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import personalIndexPart from './personal_index_part'
import collectPart from './collect_part'
import dyPart from './dy_part'
import worksPart from './works_part'
import axios from 'axios'
export default {
  name: 'personalIndex',
  components: {
    index_part: personalIndexPart,
    collect_part: collectPart,
    dy_part: dyPart,
    works_part: worksPart
  },
  data () {
    return {
      isLogin: false,
      isLoginPop: false,
      user_img_pop: false,
      user_face: '',
      user_name: '',
      user_info: '',
      personal_index_mid_flags: [true, false, false, false, false, false, false],
      workspart_flag: true,
      personal_data: {
        collect_videos: [],
        dy_videos: [],
        my_videos: []
      }
    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/personal/get_user'
    }).then(res => {
      // console.log(res)
      if (res.data === null) {
        this.isLogin = false
      } else {
        this.isLogin = true
        this.user_face = res.data.data.user.face
        this.user_name = res.data.data.user.name
        this.user_info = res.data.data.user.info
      }
      // this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })
    // 收藏
    axios({
      method: 'get',
      url: '/api/personal/get_videocol'
    }).then(res => {
      console.log(res.data.data.total)
      if (res.data.data.total === 0) {
        this.personal_data.collect_videos = null
      } else {
        this.personal_data.collect_videos = res.data.data.videos
      }
      // this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })
    // 番剧
    axios({
      method: 'get',
      url: '/api/personal/get_bangumicol'
    }).then(res => {
      // console.log(res)
      this.personal_data.dy_videos = res.data.data.bangumis
      // this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })
    // 投稿
    axios({
      method: 'get',
      url: '/api/personal/get_videocol'
    }).then(res => {
      // console.log(res)
      this.personal_data.my_videos = res.data.data.videos
      if (res.data.data.total === 0) {
        this.workspart_flag = false
      }
      // this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })
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
    }, // 退出登录
    changePersonalItem (num) {
      if (num === 0) {
        Vue.set(this.personal_index_mid_flags, 0, true)
        Vue.set(this.personal_index_mid_flags, 2, false)
        Vue.set(this.personal_index_mid_flags, 4, false)
        Vue.set(this.personal_index_mid_flags, 5, false)
      }
      if (num === 2) {
        Vue.set(this.personal_index_mid_flags, 0, false)
        Vue.set(this.personal_index_mid_flags, 2, true)
        Vue.set(this.personal_index_mid_flags, 4, false)
        Vue.set(this.personal_index_mid_flags, 5, false)
      }
      if (num === 4) {
        Vue.set(this.personal_index_mid_flags, 0, false)
        Vue.set(this.personal_index_mid_flags, 2, false)
        Vue.set(this.personal_index_mid_flags, 4, true)
        Vue.set(this.personal_index_mid_flags, 5, false)
      }
      if (num === 5) {
        Vue.set(this.personal_index_mid_flags, 0, false)
        Vue.set(this.personal_index_mid_flags, 2, false)
        Vue.set(this.personal_index_mid_flags, 4, false)
        Vue.set(this.personal_index_mid_flags, 5, true)
      }
    } // 改变菜单
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personal_index_all
    width 100%
    .header_top_part
      width 100%
      height 42px
      z-index 1
      box-shadow 0 1px 2px rgba(0,0,0,.1)
      .menu_tab
        width 100%
        height 42px
        line-height 42px
        background-color rgba(255,255,255,0.8)
        .tab_box
          width 1280px
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
              margin-right 5px
              width 32px
              height 32px
              float left
              overflow hidden
              border-radius 16px
              margin-top 5px
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
    .personal_index_body_box
      width 100%
      float left
      padding-bottom 20px
      background-color #f4f5f7
      .personal_index_body
        width 1280px
        margin 0 auto
        .personal_index_top
          width 1280px
          height 84px
          float left
          padding-top 116px
          background-image url("https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png")
          .personal_index_top_body
            width 1260px
            height 68px
            padding-bottom 16px
            padding-left 20px
            background linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.4))
            .personal_index_top_body_img
              display block
              border 2px solid rgba(255, 255, 255, 0.4)
              width 64px
              height 64px
              float left
              border-radius 50%
              overflow hidden
            .personal_index_top_body_msg
              width 735px
              height 54px
              float left
              margin 10px 0 0 20px
              .personal_index_top_body_msg_top
                width 735px
                height 20px
                float left
              .personal_index_top_body_msg_bottom
                width 730px
                height 26px
                float left
                line-height 26px
                font-size 12px
                color rgb(214, 222, 228)
                margin-left -5px
                padding 0 5px
        .personal_index_mid
          width 1240px
          height 66px
          margin-bottom 10px
          padding 0 20px
          float left
          background-color #fff
          border-bottom 1px solid rgb(238, 238, 238)
          border-left 1px solid rgb(238, 238, 238)
          border-right 1px solid rgb(238, 238, 238)
          .personal_index_mid_item_box
            width 600px
            height 66px
            float left
            .personal_index_mid_item
              width 50px
              height 66px
              margin-right 31px
              line-height 66px
              float left
              color rgb(34, 34, 34)
              cursor pointer
              font-size 13px
            .personal_index_mid_item_on
              width 50px
              height 66px
              margin-right 31px
              line-height 66px
              float left
              color rgb(0, 161, 214)
              cursor pointer
              font-size 13px
              border-bottom 2px solid rgb(0, 161, 214)
          .personal_index_mid_msg
            min-width 116px
            height 66px
            float right
</style>
