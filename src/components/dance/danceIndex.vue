<template>
  <div class="part_all">
    <header_part></header_part>
    <div class="wrapper_part">
      <div class="wrapper_box">
        <div class="wrapper">
          <div class="wrapper_left">
            <a style="display: block;height: 48px;width: 24px;float: left;margin-right: 14px">
              <i class="iconfont" style="font-size: 22px;display: block;height: 24px;line-height: 24px;
                text-align: center;color: rgba(255,175,201,0.8)">&#xe6ca;</i>
              <router-link style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;" to="/">首页</router-link>
            </a>
            <el-dropdown class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">999+</i>
              <span style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">动画</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>MAD-AMV</el-dropdown-item>
                <el-dropdown-item>MMD</el-dropdown-item>
                <el-dropdown-item>短书*手书</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">76</i>
              <router-link style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px" to="/bangumiIndex">番剧</router-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>连载动画</el-dropdown-item>
                <el-dropdown-item>完结动画</el-dropdown-item>
                <el-dropdown-item>新番时间表</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">160</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">国创</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">999+</i>
              <router-link style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px" to="/musicIndex">音乐</router-link>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">999+</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">舞蹈</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">460</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">游戏</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">999+</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">科技</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">702</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">数码</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">999+</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">生活</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">119</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">鬼畜</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">876</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">时尚</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">207</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">广告</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">999+</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">娱乐</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">999+</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">影视</a>
            </a>
            <a class="wrapper_left_item">
              <i style="font-size: 8px;font-style: normal;display: block;height: 12px;line-height: 12px;
                text-align: center;color: #fff;background-color: rgba(255,175,201,0.8);padding: 1px 3px;border-radius: 5px;
                max-width: 28px;margin: 0 auto">351</i>
              <a style="display: block;font-size: 12px;height: 14px;line-height:14px;text-align: center;
                padding-top: 2px">放映厅</a>
            </a>
            <a class="wrapper_left_item2">
              <a class="wrapper_left_item2_icon">
                <i class="iconfont" style="font-size: 24px;color: #02cbe0;width: 18px;height: 18px;">&#xe671;</i>
              </a>
              <a class="wrapper_left_item2_title">专栏</a>
            </a>
            <a class="wrapper_left_item2">
              <a class="wrapper_left_item2_icon">
                <i class="iconfont" style="font-size: 24px;color: #e98eff;width: 18px;height: 18px;">&#xe72e;</i>
              </a>
              <a class="wrapper_left_item2_title">广场</a>
            </a>
            <a class="wrapper_left_item2">
              <a class="wrapper_left_item2_icon">
                <i class="iconfont" style="font-size: 24px;color: #fe9299;width: 18px;height: 18px;">&#xe680;</i>
              </a>
              <a class="wrapper_left_item2_title">直播</a>
            </a>
            <a class="wrapper_left_item2">
              <a class="wrapper_left_item2_icon">
                <i class="iconfont" style="font-size: 24px;color: #fca100;width: 18px;height: 18px;">&#xe611;</i>
              </a>
              <a class="wrapper_left_item2_title">小黑屋</a>
            </a>
          </div>
          <div class="wrapper_right">
            <img src="https://i0.hdslb.com/bfs/active/b9c0a8b257c1b5f98433ce68f8e51613ba6a8cca.gif"/>
          </div>
        </div>
      </div>
    </div>
    <div class="part_content_box">
      <div class="part_content">
        <div class="index_rotation_part_box">
          <div class="index_rotation_part">
            <div style="width: 620px;height: 220px;float: left">
              <el-carousel height="220px">
                <el-carousel-item v-for="(item,index) in temp_animotion" :key="index">
                  <a :href="item.url">
                    <img :src="item.logo" style="width: 620px;height: 220px">
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="rotation_part_right">
              <div class="rotation_part_right_box" v-for="(item, index) in temp_recommend" :key="index"
                   @mouseleave="change_rotation_show_2(index)" @mouseenter="change_rotation_show_1(index)">
                <div class="rotation_part_display_box" v-show="flags.rotation_flags[index].show_1">
                  <a class="display_box_img">
                    <img :src="item.logo" width="160px" height="100px"/>
                  </a>
                  <a class="display_box_title" style="width: 150px;height: 20px;font-size: 12px;" :title="item.name">{{item.name}}</a>
                </div>
                <div class="rotation_part_hover_box" v-show="flags.rotation_flags[index].show_2">
                  <a class="hover_box_img" style="width: 160px; height: 100px">
                    <img :src="item.logo" width="160px" height="100px"/>
                  </a>
                  <a class="hover_box_msg">
                    <a class="hover_box_title">{{item.name}}</a>
                    <a class="hover_box_author">up主：{{item.user.name}}</a>
                    <a class="hover_box_plays">
                      <a style="display: block;float: left;color: rgb(153,162,170)">播放：{{item.playnum}}</a>
                      <a style="display: block;float: right;position: relative;top: -5px;">
                        <i class="iconfont" style="font-size: 22px;color: #fff">&#xe7eb;</i>
                      </a>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 20px;margin-bottom: 40px">
          <img src="https://i0.hdslb.com/bfs/sycp/creative_img/201905/340ab65caf66ee6ec83d9e209c72625a.jpg" width="1160px"/>
        </div>
        <index_part :id="35" :tag_id="35"></index_part>
        <index_part :id="36" :tag_id="36"></index_part>
        <index_part :id="37" :tag_id="37"></index_part>
      </div>
    </div>
    <footer_part></footer_part>
  </div>
</template>

<script>
import header_ from '../component/header'
import indexPart from '../component/index_part.vue'
import footer_ from '../component/footer.vue'
import axios from 'axios'
export default {
  name: 'danceIndex',
  components: {
    header_part: header_,
    index_part: indexPart,
    footer_part: footer_
  },
  data () {
    return {
      flags: {
        rotation_flags: [
          {show_1: true, show_2: false},
          {show_1: true, show_2: false},
          {show_1: true, show_2: false},
          {show_1: true, show_2: false},
          {show_1: true, show_2: false},
          {show_1: true, show_2: false},
          {show_1: true, show_2: false},
          {show_1: true, show_2: false}
        ],
        live_part_box: {
          right_flags: {
            recommend: true,
            recommend_not: false,
            personal: false,
            personal_not: true,
            rank: false,
            rank_not: true
          }
        },
        animation_flags: {
          haveNew: true,
          haveNew_not: false,
          theNew: false,
          theNew_not: true,
          allRank: true,
          allRank_not: false,
          yRank: false,
          yRank_not: true
        },
        opera_menu_flags: {
          theNew: true,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false
        }
      },
      temp_imgs: {},
      temp_animotion: [], // 轮播图
      temp_recommend: [] // 推荐
    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/video/get_animation'
    }).then(res => {
      // console.log(res.data.data)
      this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })

    axios({
      method: 'get',
      url: '/api/video/get_recommend',
      params: {
        tag_id: -1,
        number: 6
      }
    }).then(res => {
      // console.log(res.data.data)
      this.temp_recommend = res.data.data.videos
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    change_rotation_show_1 (index) {
      this.flags.rotation_flags[index].show_1 = false
      this.flags.rotation_flags[index].show_2 = true
    },
    change_rotation_show_2 (index) {
      this.flags.rotation_flags[index].show_1 = true
      this.flags.rotation_flags[index].show_2 = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .part_all
    .wrapper_part
      width:100%
      height:59px
      .wrapper_box
        width 1160px
        height 59px
        margin 0 auto
        .wrapper
          width 1160px
          height 50px
          padding-top 3px
          margin-bottom 5px
          .wrapper_left
            width 1078px
            height 42px
            padding-top 5px
            float left
            line-height 42px
            .wrapper_left_item
              display block
              float left
              min-width 48px
              height 40px
              padding-top 8px
              margin-right 8px
              text-align center
              cursor pointer
              .el-dropdown-link {
                cursor: pointer;
                color: #409EFF;
              }
              .el-icon-arrow-down {
                font-size: 12px;
              }
            .wrapper_left_item2
              display block
              float left
              width 40px
              margin 0 3px
              .wrapper_left_item2_icon
                width 20px
                height 20px
                line-height 18px
                display block
                padding 0 9px
                text-align center
              .wrapper_left_item2_title
                display block
                width 40px
                height 16px
                padding-top 2px
                line-height 16px
                font-size 12px
                text-align center
          .wrapper_right
            width 69px
            height 50px
            padding 4px 0
            margin-left 1px
            float left
    .part_content_box
      width 100%
      .part_content
        width 1160px
        margin 0 auto
        .index_rotation_part_box
          width 100%
          .index_rotation_part
            width 1160px
            height 220px
            padding-bottom 40px
            margin 0 auto
            .rotation_part_right
              float right
              width 540px
              height 220px
              .rotation_part_right_box
                width 160px
                height 100px
                float left
                margin 0 0 20px 20px
                overflow hidden
                .rotation_part_display_box
                  width 160px
                  height 100px
                  .display_box_img
                    display block
                    width 160px
                    height 100px
                  .display_box_title
                    display block
                    float right
                    width 150px
                    height 20px
                    line-height 20px
                    overflow hidden
                    padding: 5px 5px 10px 5px
                    color: #fff
                    margin-top -27px
                    background-color rgba(0,0,0,0.6)
                .rotation_part_hover_box
                  width 160px
                  height 100px
                  .hover_box_img
                    display block
                  .hover_box_msg
                    display block
                    width 160px
                    height 100px
                    background-color rgba(0,0,0,0.7)
                    margin-top -100px
                    color #fff
                    .hover_box_title
                      display block
                      width 150px
                      height 40px
                      line-height 20px
                      overflow hidden
                      font-size 12px
                      color #ffffffff
                      padding 10px 5px 0 5px
                    .hover_box_author
                      display block
                      width 150px
                      height 20px
                      font-size 12px
                      color rgb(153,162,170)
                      padding 10px 5px 0 5px
                    .hover_box_plays
                      display block
                      width 150px
                      height 20px
                      padding 0 5px
                      font-size 12px
</style>
