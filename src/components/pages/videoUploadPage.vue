<template>
  <div class="videoUpload_all">
    <div class="header_top_part">
      <div class="menu_tab">
        <div class="tab_box">
          <div class="tab_box_left">
          <span class="box_left_item">
            <i class="iconfont" style="color: #00a1d6;font-size: 18px;margin-top: 3px">&#xe609;</i>
            <i style="font-size: 12px;font-style: normal;color: rgb(34,34,34)">主站</i>
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
    <div class="videoUpload_body">
      <div class="videoUpload_body_top">
        <div style="float: left;height: 72px">
          <img src="https://s1.hdslb.com/bfs/static/jinkela/studio/creativecenter-v3/assets/logo@2x.6ceec79.png"/>
        </div>
        <div style="width: 830px;float: right;height: 69px;margin-top: 2px">
          <img src="https://i0.hdslb.com/bfs/archive/e86343c49e045e6db52a8ec82704580da98ec4e4.png"/>
        </div>
      </div>
      <div class="videoUpload_body_mid">
        <div class="videoUpload_body_mid_img">
          <div style="margin: 0 auto;width: 400px">
            <img src="https://s1.hdslb.com/bfs/static/studio-upload-v3/static/img/2233_upload.637ac33.png" width="400px"/>
          </div>
          <span class="videoUpload_body_mid_img_msg">请勿上传反动、色情等违法视频</span>
        </div>
        <div class="videoUpload_body_upload_box">
          <div class="upload_box_title">
            <div style="float: left;position: relative;left: 300px">
              <img src="https://s1.hdslb.com/bfs/static/jinkela/studio/creativecenter-v3/assets/icon_columnArticle@2x.0511f36.png"/>
            </div>
            投稿信息填写
          </div>
          <div class="upload_box_msg">
            <div style="">
              <div style="width: 100%;float: left">
                <div style="float: left;height: 40px;line-height: 40px">稿件标题：</div>
                <el-input v-model="this.upload_form.name" placeholder="请输入内容" style="width: 300px"></el-input>
              </div>
              <div style="width: 100%;float: left;margin-top: 20px">
                <div style="float: left;height: 40px;line-height: 40px">稿件简介：</div>
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="this.upload_form.info" style="width: 500px">
                </el-input>
              </div>
              <div style="width: 100%;float: left;margin-top: 20px">
                投稿类型：
                <el-select v-model="value1" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="value2" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div style="width: 100%;height: 16px;line-height: 16px;font-size: 16px;float: left;color: #99a2aa;margin-bottom: 10px">
            图片和视频上传（请先点击第一个上传框上传封面图片，然后点击第二个上传框上传视频）
          </div>
          <div class="upload_box_logo">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :http-request="uploadLogo"
              :show-file-list="false">
              <img v-if="showImagePath" :src="showImagePath" class="avatar" width="">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="upload_box_video">
            <el-upload class="avatar-uploader el-upload--text"
                       :action="uploadUrl"
                       :http-request="uploadVideo"
                       :show-file-list="false"
                       accept=".mp4"
                       :on-success="handleVideoSuccess">
              <video v-if="this.showVideoPath !=='' && !videoFlag"
                     :src="this.showVideoPath"
                     class="avatar video-avatar"
                     controls="controls">
                您的浏览器不支持视频播放
              </video>
              <i v-else-if="this.showVideoPath ==='' && !videoFlag"
                 class="el-icon-plus avatar-uploader-icon"></i>
              <el-progress v-if="videoFlag === true"
                           type="circle"
                           :percentage="videoUploadPercent"
                           style="margin-top:30px;"></el-progress>
              <el-button class="video-btn"
                         slot="trigger"
                         size="small"
                         v-if="isShowUploadVideo"
                         type="primary">选取文件</el-button>
            </el-upload>
          </div>
        </div>
      </div>
    </div>
    <footer_part></footer_part>
  </div>
</template>

<script>
import axios from 'axios'
import footer_ from '../component/footer'
// var formdata2 = new FormData()
export default {
  name: 'videoUploadPage',
  components: {
    footer_part: footer_
  },
  data () {
    return {
      isLogin: false,
      isLoginPop: false,
      user_img_pop: false,
      uploadUrl: '',
      videoFlag: false,
      videoUploadPercent: '',
      isShowUploadVideo: false,
      file1: File,
      showVideoPath: '',
      showImagePath: '',
      upload_form: {
        name: '',
        info: '',
        logo: File,
        tag_id: 0
      },
      options: [
        {
          value: 1,
          label: '动画',
          sub_: [
            {
              value: 14,
              label: 'MAD·AMV'
            },
            {
              value: 15,
              label: 'MMD·3D'
            }
          ]
        },
        {
          value: 2,
          label: '番剧',
          sub_: []
        },
        {
          value: 3,
          label: '番剧',
          sub_: []
        }],
      options2: [
        {
          value: 14,
          label: 'MAD·AMV'
        }
      ],
      value1: [],
      value2: []
    }
  },
  watch: {
    'value1': function (value1) {
      // console.log(this.value1)
      this.options2 = this.options[value1 - 1].sub_
    },
    'value2': function () {
      // console.log(this.value2[0])
    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/personal/get_user'
    }).then(res => {
      console.log(res)
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

    // 上传封面图片
    uploadLogo (file) {
      this.file1 = file
    },

    // 上传视频
    uploadVideo (file) {
      var formdata1 = new FormData()
      formdata1.append('logo', this.file1.file)
      formdata1.append('url', file.file)
      formdata1.append('name', this.upload_form.name)
      formdata1.append('tag_id', this.value2[0])
      formdata1.append('info', this.upload_form.info)
      console.log(formdata1.get('logo'))
      axios({
        method: 'post',
        url: '/api/personal/upload_video',
        // data: formdata2,
        data: formdata1,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
      // console.log(file)
    },

    // 上传成功回调
    handleVideoSuccess (res, file) {
      this.isShowUploadVideo = true
      this.videoFlag = false
      this.videoUploadPercent = 0
      if (res.error_code === 1000) {
        this.showVideoPath = res.sprbody.urlAddress
        // this.videoForm.showVideoPath = res.data.uploadUrl;
      } else {
        this.$message.error('视频上传失败，请重新上传！')
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .videoUpload_all
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
    .videoUpload_body
      width 100%
      height 844px
      float left
      background #ffffff
      .videoUpload_body_top
        width 1280px
        height 72px
        margin 0 auto
        padding-bottom 10px
      .videoUpload_body_mid
        width 1280px
        margin 0 auto
        .videoUpload_body_mid_img
          width 476px
          float left
          height 330px
          margin-top 150px
          .videoUpload_body_mid_img_msg
            float left
            color rgb(153, 162, 170)
            font-size 12px
            width 100%
            height 16px
            line-height 16px
            text-align center
        .videoUpload_body_upload_box
          float right
          width 800px
          padding-left 4px
          .upload_box_title
            width 100%
            font-size 24px
            font-weight 700
            height 48px
            line-height 48px
            color #00a1d6
            text-align center
          .upload_box_msg
            width 100%
            height 280px
            padding-bottom 5px
            margin-bottom 10px
            border-bottom 1px solid #d9d9d9
            float left
          .upload_box_logo
            float left
            margin-right 250px
          .upload_box_video
            float left
          .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          .avatar-uploader .el-upload:hover {
            border: 1px dashed #d9d9d9
            border-radius: 6px
            cursor: pointer
            position: relative
            overflow: hidden
            &:hover {
              border-color: #409EFF
            }
          }
          .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
          }
          .avatar {
            width: 178px;
            height: 178px;
            display: block;
          }
          .video-avatar {
            width: 178px;
            height: 178px;
          }
</style>
