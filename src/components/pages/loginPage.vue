<template>
  <div class="login_page_all">
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
                  <router-link class="login_pop_item" style="border-bottom:1px solid #e3e3e3" to='/'>
                    登录
                  </router-link>
                  <router-link class="login_pop_item" to='/register'>注册</router-link>
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
        </div>
      </div>
    </div>
    <div style="width: 100%;height: 89px;background-color: #00a0d8;margin-bottom: 19px">
      <div style="width: 980px;height: 106px;margin: 0 auto">
        <img src="https://s1.hdslb.com/bfs/static/account-fe/static/img/rl_top.35edfde.png" width="980px" height="106px"/>
      </div>
    </div>
    <div class="login_page_body_box">
      <div class="login_page_body">
        <div style="width: 980px;height: 28px;float: left;margin-bottom: 28px;border-bottom: 1px solid rgb(221, 221, 221)">
          <div style="margin: 0 auto;width: 116px;height: 56px;padding: 0 20px;position: relative;top:3px;
          background-color: #fff;font-size: 38px;line-height: 56px;text-align: center">
            登录
          </div>
        </div>
        <div class="login_info">
          <div class="login_left">
            <div style="width: 100px;margin: 0 auto;position: relative;top:50px">
              <img src="https://s1.hdslb.com/bfs/static/passport/static/img/loadTV.99606e2.gif"/>
            </div>
            <div style="float: left">
              <img src="https://s1.hdslb.com/bfs/static/passport/static/img/2233login.af9c53d.png"/>
            </div>
            <div style="text-align: center">
              欢迎来到pilipili！
            </div>
          </div>
          <div class="login_right">
            <div style="width: 364px;margin: 0 auto;padding-top: 70px">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                  <el-input v-model="form.account"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="form.pwd" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit" style="margin-left: 0;width: 284px">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%;height: 392px;float: left">
      <footer_part></footer_part>
    </div>
  </div>
</template>

<script>
import footer_ from '../component/footer'
import axios from 'axios'
axios.defaults.baseURL = 'api'
export default {
  name: 'registerPage',
  components: {
    footer_part: footer_
  },
  data () {
    return {
      isLogin: false,
      isLoginPop: false,
      user_img_pop: false,
      form: {
        account: '',
        pwd: ''
      }
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
    onSubmit () {
      axios({
        method: 'post',
        url: '/api/login',
        data: {
          account: this.form.account,
          pwd: this.form.pwd
        },
        transformRequest: [function (data) {
          // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        console.log(res)
        this.$router.push({path: '/'})
        alert('登陆成功')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_page_all
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
    .login_page_body_box
      width 100%
      margin-top 10px
      float left
      .login_page_body
        width 980px
        height 400px
        margin 0 auto
        .login_info
          width 980px
          height 400px
          float left
          padding 60px 0
          .login_left
            width 489px
            height 367px
            float left
          .login_right
            width 445px
            height 313px
            float left
            padding-left 45px
            border-left 1px solid rgb(221, 221, 221)
</style>
