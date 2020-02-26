<template>
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
        <div class="tab_box_right"  v-if="!(isLogin)">
              <span class="box_right_login" style="display: block;float: left;border-radius: 32px;overflow: hidden;width: 32px;height: 32px;
              line-height: 32px;margin-top: 5px">
                <img src="https://static.hdslb.com/images/akari.jpg" style="width: 32px;height: 32px;z-index: 1;cursor: pointer"
                     @mouseenter="displayLoginPop(0)"/>
                <div class="login_pop" v-if="isLoginPop" @mouseenter="displayLoginPop(0)" @mouseleave="displayLoginPop(1)">
                  <router-link class="login_pop_item" style="border-bottom:1px solid #e3e3e3" to="/login">登录</router-link>
                  <router-link class="login_pop_item" to="/register">注册</router-link>
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
                    <router-link class="box_right_on_user_info_menu_item" to="/personalIndex">
                    <i class="iconfont" style="font-size: 14px">&#xe606;</i>
                    个人中心
                    </router-link>
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
                  <div class="box_right_on_user_info_menu_quit_button" @click="userQuit">退出</div>
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
            <router-link style=" color: #fff;font-size: 14px;cursor: pointer" to="/videoUploadPage">投稿</router-link>
          </span>
        </div>
        <div class="tab_search_part">
          <div class="search_box">
            <div class="search_box_right">
              <div class="search_box_right_left">
                <i class="iconfont" style="color: #ff4e8e;font-size: 14px">&#xe610;</i>
                <router-link style="color: #ff4e8e;font-style: normal;font-size: 14px" to="/rank">排行榜</router-link>
              </div>
              <div class="search_box_right_right">
                <div style="width: 200px;height: 32px;padding: 0 12px;float: left">
                  <input type="text" style="width: 100%;height: 28px;font-size: 14px;
                        margin-top: 1px;outline: none;" v-model="search_text"/>
                </div>
                <router-link style="width:51px;height: 32px;float: left;text-align: center;cursor: pointer" :to="{path: '/search', query: {search_text_: this.search_text}}">
                  <i class="iconfont" style="color:#00a1d6;">&#xe629;</i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'header_',
  data () {
    return {
      isLogin: false,
      isLoginPop: false,
      user_img_pop: false,
      search_text: '',
      user_face: '',
      user_name: ''
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
    displayUserInfo (num) {
      if (num === 0) {
        this.user_img_pop = true
      } else {
        this.user_img_pop = false
      }
    },
    userQuit () {
      axios({
        method: 'get',
        url: '/api/logout'
      }).then(res => {
        this.isLogin = false
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created () {
    // 判断是否登录
    axios({
      method: 'get',
      url: '/api/is_login'
    }).then(res => {
      // console.log(res)
      if (res.data.data === null) {
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
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header_top_part
    width: 100%
    height:170px
    background-image url("https://i0.hdslb.com/bfs/archive/3329c9f0abfb925ae30441f24d924ad3c19775df.png")
    z-index 1
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
            margin-right 20px
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
    .top_part_img
      width 100%
      height 170px
      overflow hidden
      z-index 1
</style>
