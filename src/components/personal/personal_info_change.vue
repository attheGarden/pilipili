<template>
    <div class="info_change_all">
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
      <div style="width: 100%;height: 87px;background-color: #00a0d8;margin-bottom: 19px">
        <div style="width: 980px;height: 106px;margin: 0 auto">
          <img src="https://s1.hdslb.com/bfs/static/account-fe/static/img/rl_top.35edfde.png" width="980px" height="106px"/>
        </div>
      </div>
      <div class="info_change_body_box">
        <div class="info_change_body">
          <div class="info_change_user_img">
            <div style="width: 940px;height: 50px;border-bottom: 1px solid rgb(229, 233, 239);padding: 0 20px;font-size: 14px;
            color: #222;line-height: 50px">
              我的头像
            </div>
            <div style="width: 361px;height: 182px;margin: 0 auto;padding: 80px 20px 56px 20px">
              <div style="width: 182px;height: 182px;float: left;padding-right: 40px;border-right: 1px solid rgb(229, 233, 239);">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :http-request="changeUserFace"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div style="width: 98px;height: 136px;float: left;margin-left: 40px;margin-top: 30px">
                <div style="border: 1px solid rgb(230, 234, 240);width: 96px;height: 96px;border-radius: 50%;overflow: hidden">
                  <img :src="user_face" width="96px" height="96px"/>
                </div>
                <div style="color: rgb(153, 162, 170);width: 98px;height: 18px;margin-top: 20px;font-size: 12px;text-align: center">
                  当前头像
                </div>
              </div>
            </div><!-- 头像上传 -->
            <div style="width: 980px;height: 16px;color: rgb(153, 162, 170);font-size: 12px;text-align: center">
              请选择图片上传：图片需小于2MB，支持JPG格式
            </div>
          </div>
          <div class="info_change_user_info">
            <div style="width: 940px;height: 50px;border-bottom: 1px solid rgb(229, 233, 239);padding: 0 20px;font-size: 14px;
            color: #222;line-height: 50px">
              我的信息
            </div>
            <div style="margin-top: 30px;width: 400px;float: left;height: 364px;margin-left: 40px;margin-right: 20px;
            padding-right: 20px;border-right: 1px solid rgb(229, 233, 239)">
              <div style="width: 100%; height: 40px;line-height: 40px;float: left;color: #606266;margin-bottom: 22px">
                <i style="font-size: 14px;font-style: normal;">昵称：{{user.name}}</i>
              </div>
              <div style="width: 100%; height: 40px;line-height: 40px;float: left;color: #606266;margin-bottom: 22px">
                <i style="font-size: 14px;font-style: normal;">电话：{{user.phone}}</i>
              </div>
              <div style="width: 100%; height: 40px;line-height: 40px;float: left;color: #606266;margin-bottom: 22px">
                <i style="font-size: 14px;font-style: normal;">邮箱：{{user.email}}</i>
              </div>
              <div style="width: 100%; height: 40px;line-height: 40px;float: left;color: #606266;margin-bottom: 22px">
                <i style="font-size: 14px;font-style: normal;">性别：{{user.gender}}</i>
              </div>
              <div style="width: 100%; height: 80px;float: left;color: #606266;margin-bottom: 22px">
                <div style="font-size: 14px;font-style: normal;height: 80px;line-height: 40px;float: left">个人简介 ：{{user.info}}</div>
              </div>
            </div>
            <div style="padding-top: 30px;width: 400px;float: left">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="昵称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                  <el-input v-model="form.teleNum"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="form.mail"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-radio-group v-model="form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    <el-radio label="保密"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="个人简介">
                  <el-input type="textarea" v-model="form.introduce"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="info_change_user_pwd">
            <div style="width: 940px;height: 50px;border-bottom: 1px solid rgb(229, 233, 239);padding: 0 20px;font-size: 14px;
            color: #222;line-height: 50px">修改密码</div>
            <div class="info_change_user_pwd_content">
              <div style="width: 100%;float: left;margin-bottom: 10px">
                <div style="width: 60px;line-height: 40px;font-size: 14px;float: left">旧密码：</div>
                <div style="width: 240px;float: left">
                  <el-input placeholder="请输入旧密码" v-model="pwd.old_pwd_" show-password></el-input>
                </div>
              </div>
              <div style="width: 300px;float: left">
                <div style="width: 60px;line-height: 40px;font-size: 14px;float: left">新密码：</div>
                <div style="width: 240px;float: right">
                  <el-input placeholder="请输入新密码" v-model="pwd.new_pwd_" show-password></el-input>
                </div>
              </div>
              <div style="width: 330px;float: left;margin-left: 20px">
                <div style="width: 90px;line-height: 40px;font-size: 14px;float: left">确认新密码：</div>
                <div style="width: 240px;float: right">
                  <el-input placeholder="请再次输入新密码" v-model="pwd.check_new_pwd_" show-password></el-input>
                </div>
              </div>
              <div style="width: 100%;float: left;margin-top: 10px">
                <el-button type="primary" @click="changePwd">保存</el-button>
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
export default {
  name: 'personal_info_change',
  components: {
    footer_part: footer_
  },
  data () {
    return {
      isLogin: true,
      isLoginPop: false,
      user_img_pop: false,
      user_face: '',
      user_name: '',
      user: {},
      imageUrl: '',
      now_imageUrl: '',
      form: {
        name: '',
        teleNum: '',
        mail: '',
        date: '',
        sex: '',
        introduce: '',
        tag_id: ''
      },
      pwd: {
        old_pwd_: '',
        new_pwd_: '',
        check_new_pwd_: ''
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
        this.user = res.data.data.user
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
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.now_imageUrl = this.imageUrl
    },
    changeUserFace (file) {
      var formdata1 = new FormData()
      formdata1.append('face', file.file)
      // console.log(file.file)
      // console.log(formdata1.get('face'))
      axios({
        method: 'post',
        url: '/api/personal/edit_user',
        data: formdata1,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }).then(res => {
        // console.log(res)
        alert('修改成功')
        this.$router.go('/personalInfoChange')
        // this.$router.go('/personalInfoChange')
        // this.temp_animotion = res.data.data.animations
        // console.log(this.temp_animotion[0].logo)
      }).catch(error => {
        console.log(error)
      })
    },
    onSubmit () {
      axios({
        method: 'post',
        url: '/api/personal/edit_user',
        data: {
          name: this.form.name,
          gender: this.form.sex,
          email: this.form.mail,
          phone: this.form.teleNum,
          info: this.form.introduce
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
        // console.log(res)
        alert('修改成功')
        this.$router.go('/personalInfoChange')
        // this.temp_animotion = res.data.data.animations
        // console.log(this.temp_animotion[0].logo)
      }).catch(error => {
        console.log(error)
      })
    },
    changePwd () {
      axios({
        method: 'post',
        url: '/api/personal/pwd',
        data: {
          old_pwd: this.pwd.old_pwd_,
          new_pwd: this.pwd.new_pwd_,
          check_new_pwd: this.pwd.check_new_pwd_
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
        // console.log(res)
        alert('修改成功')
        this.$router.go('/')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .info_change_all
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
    .info_change_body_box
      width 100%
      float left
      margin-top 10px
      margin-bottom 60px
      .info_change_body
        width 980px
        margin 0 auto
        height 1250px
        border 1px solid rgb(225, 226, 229)
        border-radius 4px
        box-shadow rgba(0, 0, 0, 0.14) 0px 2px 4px 0px
        .info_change_user_img
          width 980px
          height 429px
          float left
          border-bottom 1px solid rgb(225, 226, 229)
          margin-bottom 30px
          .avatar-uploader .el-upload
            border: 1px dashed #d9d9d9
            border-radius: 6px
            cursor: pointer
            position: relative
            overflow: hidden
            &:hover {
              border-color: #409EFF
            }
          .avatar-uploader-icon
            font-size 28px
            color #8c939d
            width 178px
            height 178px
            line-height 178px
            text-align center
          .avatar {
            width: 178px;
            height: 178px;
            display: block;
          }
        .info_change_user_info
          width 980px
          float left
        .info_change_user_pwd
          width 100%
          float left
          height 220px
          padding-top 20px
          border-top 1px solid rgb(225, 226, 229)
          .info_change_user_pwd_content
            width 940px
            height 180px
            float left
            padding 0 20px
            margin-top 30px
</style>
