<template>
    <div class="search_index">
      <div class="header_top_part">
        <div class="menu_tab">
          <div class="tab_box">
            <div class="tab_box_left">
          <span class="box_left_item">
            <i class="iconfont" style="color: #00a1d6;font-size: 18px;margin-top: 3px">&#xe609;</i>
            <router-link style="font-size: 12px;font-style: normal;color: rgb(34,34,34)" to="/">主站</router-link>
          </span>
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
      <div class="search_body_box">
        <div class="search_input_box">
          <div class="search_input_top_wrap">
            <div class="search_input_top_left">
              <img src="../../../static/img/timg.png" height="35" width="43.75" style="float: left"/>
              <span style="font-size: 24px;color: #00a1d6;padding-right: 5px;padding-left: 6px">|</span>
              <span style="font-size: 24px;color: #00a1d6">搜索</span>
            </div>
            <div class="search_input_top_right">
              <div class="input_wrap">
                <input type="text" :value="searchInput" style="border:2px solid #ccd0d7;height: 40px;width: 320px;
                border-radius: 5px;padding-left: 5px;padding-right: 5px;font-size: 16px;color: rgb(34,34,34)">
              </div>
              <div class="submit_box" @click="search">
                <i class="iconfont" style="color: #fff;font-size: 18px">&#xe629;</i>
                搜索
              </div>
            </div>
          </div>
          <div class="navigator_box">
            <div class="navigator_item1_box">
              <div class="navigator_item1">
                <i :class="{navigator_item1_on: flags.navigator_flag.zh_flag, navigator_item1_not: !(flags.navigator_flag.zh_flag)}"
                @click="change_navigator_items(0)">
                  综合
                </i>
              </div>
            </div>
            <div v-for="(item, index) in navigator_items" :key="index" class="navigator_item2_box">
              <div class="navigator_item2">
                <i :class="{navigator_item2_on: flags.navigator_flag.flags_[index], navigator_item2_not: !(flags.navigator_flag.flags_[index])}"
                @click="change_navigator_items(index+1)">
                  {{item.title}}
                </i>
              </div>
            </div>
            <div class="navigator_item3_box">
              <div class="navigator_item3">
                <i class="navigator_item3_not">相簿</i>
              </div>
            </div>
          </div>
        </div>
        <zh_part v-if="flags.navigator_flag.zh_flag" :zhPart_data="search_data.all_search"></zh_part>
        <video_part v-if="flags.navigator_flag.flags_[0]"></video_part>
        <fj_part v-if="flags.navigator_flag.flags_[1]" :bangumiData="search_data.bangumi"></fj_part>
        <user_part v-if="flags.navigator_flag.flags_[6]"></user_part>
      </div>
      <div style="margin-top: 20px;float: left;width: 100%">
        <footer_part></footer_part>
      </div>
    </div>
</template>

<script>
import zhPart from './zhPart'
import videoPart from './videoPart'
import footer_ from '../component/footer'
import userPart from './userPart'
import fjPart from './fjPart'
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'searchIndex',
  components: {
    zh_part: zhPart,
    video_part: videoPart,
    user_part: userPart,
    fj_part: fjPart,
    footer_part: footer_
  },
  data () {
    return {
      isLogin: false,
      isLoginPop: false,
      user_img_pop: false,
      user_face: '',
      user_name: '',
      search_data: {
        all_search: [],
        bangumi: []
      },
      flags: {
        navigator_flag: {
          zh_flag: true,
          flags_: [false, false, false, false, false, false, false],
          user_flag: false
        }
      },
      searchInput: '',
      navigator_items: [
        {
          title: '视频',
          num: '99+'
        },
        {
          title: '番剧',
          num: '33'
        },
        {
          title: '影视',
          num: '1'
        },
        {
          title: '直播',
          num: '2'
        },
        {
          title: '专栏',
          num: '99+'
        },
        {
          title: '话题',
          num: '3'
        },
        {
          title: '用户',
          num: '99+'
        }
      ]
    }
  },
  created () {
    // 判断是否登录
    axios({
      method: 'get',
      url: '/api/is_login'
    }).then(res => {
      // console.log(res)
      if (res.data.error_code === 1001) {
        this.isLogin = false
      } else {
        this.isLogin = true
        this.user_face = res.data.data.face
        this.user_name = res.data.data.name
      }
      // this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })

    // 搜索初始值
    if (this.searchInput === '') {
      this.searchInput = this.$route.query.search_text_
    }
    // console.log(this.$route.query.search_text_)
    if (this.searchInput !== '') {
      axios({
        method: 'get',
        url: '/api/search/search_video',
        params: {
          q: this.searchInput
        }
      }).then(res => {
        // console.log(res)
        this.search_data.all_search = []
        this.search_data.all_search = res.data.data.videos
      }).catch(error => {
        console.log(error)
      })
    }

    if (this.searchInput !== '') {
      axios({
        method: 'get',
        url: '/api/search/search_bangumi',
        params: {
          q: this.searchInput
        }
      }).then(res => {
        this.search_data.bangumi = res.data.data.bangumis
        // console.log(this.search_data.bangumi[0].id)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  methods: {
    displayLoginPop (num) {
      if (num === 0) {
        this.isLoginPop = true
      } else {
        this.isLoginPop = false
      }
    },
    change_navigator_items (num) {
      if (num === 0) {
        this.flags.navigator_flag.zh_flag = true
        Vue.set(this.flags.navigator_flag.flags_, 0, false)
        Vue.set(this.flags.navigator_flag.flags_, 1, false)
        Vue.set(this.flags.navigator_flag.flags_, 6, false)
      }
      if (num === 1) {
        this.flags.navigator_flag.zh_flag = false
        Vue.set(this.flags.navigator_flag.flags_, 0, true)
        Vue.set(this.flags.navigator_flag.flags_, 1, false)
        Vue.set(this.flags.navigator_flag.flags_, 6, false)
      }
      if (num === 2) {
        this.flags.navigator_flag.zh_flag = false
        Vue.set(this.flags.navigator_flag.flags_, 0, false)
        Vue.set(this.flags.navigator_flag.flags_, 1, true)
        Vue.set(this.flags.navigator_flag.flags_, 6, false)
      }
      if (num === 7) {
        this.flags.navigator_flag.zh_flag = false
        Vue.set(this.flags.navigator_flag.flags_, 0, false)
        Vue.set(this.flags.navigator_flag.flags_, 1, false)
        Vue.set(this.flags.navigator_flag.flags_, 6, true)
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
    },
    search () {
      // 搜索视频
      axios({
        method: 'get',
        url: '/api/search/search_video',
        params: {
          q: this.searchInput
        }
      }).then(res => {
        // console.log(res)
        this.search_data.all_search = res.data.data.videos
      }).catch(error => {
        console.log(error)
      })

      // 搜索番剧
      axios({
        method: 'get',
        url: '/api/search/search_bangumi',
        params: {
          q: this.searchInput
        }
      }).then(res => {
        this.search_data.bangumi = res.data.data.bangumis
        // console.log(this.search_data.bangumi[0].id)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search_index
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
          width 1160px
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
    .search_body_box
      width 980px
      margin 0 auto
      .search_input_box
        width 980px
        height 118px
        padding-top 40px
        float left
        .search_input_top_wrap
          width 587px
          height 44px
          margin 0 auto
          .search_input_top_left
            width 131px
            height 35px
            margin-top 7px
            line-height 35px
            float left
          .search_input_top_right
            float left
            margin-left 26px
            width 430px
            height 44px
            line-height 44px
            .input_wrap
              width 330px
              height 44px
              float left
              margin-right 10px
            .submit_box
              width 90px
              height 42px
              float left
              font-size 16px
              background-color #00a1d6
              color #fff
              cursor pointer
              line-height 42px
              border-radius 4px
              text-align center
              &:hover{
                background-color #00b5e5
              }
        .navigator_box
          width 980px
          height 56px
          float left
          margin-top 18px
          border-bottom 1px solid #ccd0d7
          .navigator_item1_box
            width 70px
            height 54px
            float left
            padding-bottom 1px
            .navigator_item1
              width 70px
              height 54px
              line-height 54px
              font-size 16px
              text-align center
              float left
              .navigator_item1_on
                height 54px
                width 40px
                display block
                font-style normal
                border-bottom 2px solid #00a1d6
                color #00a1d6
              .navigator_item1_not
                height 54px
                width 40px
                display block
                font-style normal
                color #000
                cursor pointer
          .navigator_item2_box
            width 114px
            height 54px
            float left
            padding-bottom 1px
            .navigator_item2
              float left
              width 114px
              height 54px
              line-height 54px
              font-size 16px
              .navigator_item2_on
                height 54px
                width 40px
                text-align center
                margin-left 35px
                display block
                float left
                font-style normal
                border-bottom 2px solid #00a1d6
                color #00a1d6
              .navigator_item2_not
                height 54px
                width 40px
                text-align center
                margin-left 35px
                display block
                float left
                font-style normal
                color #000
                cursor pointer
          .navigator_item3_box
            width 112px
            height 54px
            float left
            padding-bottom 1px
            .navigator_item3
              float left
              width 112px
              height 54px
              line-height 54px
              font-size 16px
              .navigator_item3_on
                height 54px
                width 40px
                text-align center
                margin-left 35px
                display block
                float left
                font-style normal
                border-bottom 2px solid #00a1d6
                color #00a1d6
              .navigator_item3_not
                height 54px
                width 40px
                text-align center
                margin-left 35px
                display block
                float left
                font-style normal
                color #000
</style>
