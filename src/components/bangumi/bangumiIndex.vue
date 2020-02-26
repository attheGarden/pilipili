<template>
    <div class="bangumi_index_all">
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
      <div class="bangumi_index_box">
        <div style="width: 1160px;height: 332px;margin-bottom: 40px">
          <div style="width: 1160px;height: 332px;float: left">
            <el-carousel height="332px" width="1160px">
              <el-carousel-item v-for="(item,index) in temp_animotion" :key="index">
                <a :href="item.url">
                  <img :src="item.logo" style="width: 1160px;height: 332px">
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div>
          <div class="opera_part_box">
            <div class="opera_bottom">
              <div class="opera_left">
                <div class="opera_left_top_box">
                  <a style="display: block;float: left;width: 40px;height: 40px;margin-top: -10px; margin-right: 10px">
                    <i class="iconfont" style="font-size: 40px;color: #f25d8e">&#xe6d4;</i>
                  </a>
                  <a style="display: block;float: left;width: 98px; height: 24px;margin-right: 20px;color: rgb(34,34,34);
              cursor: pointer;font-size: 24px">
                    最近更新
                  </a>
                  <router-link class="opera_left_top_button" to="/">
                    新番时间表
                    <i class="iconfont" style="color: rgb(242,93,142);font-size: 14px">&#xe62d;</i>
                  </router-link>
                </div>
                <div class="opera_left_bottom_box">
                  <div class="opera_item1" v-for="(item, index) in temp_bangumi_time.the_new" :key="index" v-if="index<4">
                    <div style="float: left;width: 72px; height: 72px;overflow: hidden;margin-right: 12px" @click="goBangumi(item.id)">
                      <img :src="item.logo" width="72px" height="72px"/>
                    </div>
                    <div style="float: left;width: 96px;height: 72px">
                      <div style="float: left;width: 96px;height: 36px;color: rgb(34,34,34);font-size: 12px;line-height: 18px;
                  overflow: hidden" :title="item.name">
                        {{item.name}}
                      </div>
                      <div style="float: left;height: 18px;;color: #fff;font-size: 12px;line-height: 18px;
                  background-color: rgb(255, 142, 179);border-radius: 5px;padding: 1px 3px;margin-top: 14px">
                        第{{item.new_piece}}话
                      </div>
                    </div>
                  </div>
                  <div class="opera_item2" v-for="(item, index) in temp_bangumi_time.the_new" :key="index" v-if="index>3">
                    <div style="float: left;width: 72px; height: 72px;overflow: hidden;margin-right: 12px">
                      <img :src="item.logo" width="72px" height="72px"/>
                    </div>
                    <div style="float: left;width: 96px;height: 72px">
                      <div style="float: left;width: 96px;height: 36px;color: rgb(34,34,34);font-size: 12px;line-height: 18px;
                  overflow: hidden" :title="item.name">
                        {{item.name}}
                      </div>
                      <div style="float: left;height: 18px;;color: #fff;font-size: 12px;line-height: 18px;
                  background-color: rgb(255, 142, 179);border-radius: 5px;padding: 1px 3px;margin-top: 14px">
                        {{item.new_piece}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="opera_right">
                <div class="opera_right_top">
                  排行
                </div>
                <div class="opera_right_mid">
                  <div class="opera_right_rank_item1" v-for="(item, index) in opera_data.rank" :key="index" v-if="index<1">
                    <div style="float: left;width: 25px;height: 18px">
                      <div style="padding: 0 3px; float: left;width: 12px; height: 18px;line-height: 18px;
                    text-align: center;background-color: rgb(242,93,142);border-radius: 4px;font-size: 12px;
                    font-weight: 700;color: #fff">
                        {{index+1}}
                      </div>
                    </div>
                    <div style="width: 235px;float: left;height: 18px" :title="item.title">
                      <div style="width: 235px;float: left;height: 18px" :title="item.title">
                        <a style="color: rgb(34,34,34);font-size: 12px">{{item.title}}</a>
                        <a style="color: rgb(153, 162, 170);margin-left: 10px;font-size: 12px">{{item.num}}</a>
                      </div>
                    </div>
                  </div>
                  <div class="opera_right_rank_item2" v-for="(item, index) in opera_data.rank" :key="index" v-if="index>0">
                    <div style="float: left;width: 25px;height: 18px">
                      <div style="padding: 0 3px; float: left;width: 12px; height: 18px;line-height: 18px;
                    text-align: center;background-color: rgb(242,93,142);border-radius: 4px;font-size: 12px;
                    font-weight: 700;color: #fff">
                        {{index+1}}
                      </div>
                    </div>
                    <div style="width: 235px;float: left;height: 18px" :title="item.title">
                      <a style="color: rgb(34,34,34);font-size: 12px">{{item.title}}</a>
                      <a style="color: rgb(153, 162, 170);margin-left: 10px;font-size: 12px">{{item.num}}</a>
                    </div>
                  </div>
                </div>
                <div class="opera_right_more">
                  <i style="display: block;margin: 0 auto;color: rgb(34,34,34);font-size: 12px;font-style: normal;
            line-height: 24px">
                    查看更多
                    <i class="iconfont" style="font-size: 14px">&#xe62d;</i>
                  </i>
                </div>
              </div>
            </div>
          </div>  <!-- 番剧 -->
        </div>
        <div style="padding-top: 40px;width: 1160px;height: 96px">
          <img src="https://i0.hdslb.com/bfs/sycp/creative_img/201906/4018d7a33d19cbd91d7e7c313e6f61fa.jpg" width="1160px" height="96px"/>
        </div>
        <div style="margin: 30px 0">
          <index_part :id=18 :tag_id="18"></index_part>
          <index_part :id=19 :tag_id="19"></index_part>
          <index_part :id=20 :tag_id="20"></index_part>
        </div>
      </div>
      <footer_part></footer_part>
    </div>
</template>

<script>
import headerpart_ from '../component/header'
import footer_ from '../component/footer.vue'
import indexPart from '../component/index_part.vue'
import axios from 'axios'
const ERR_OK = 0
export default {
  name: 'bangumiIndex',
  components: {
    header_part: headerpart_,
    footer_part: footer_,
    index_part: indexPart
  },
  data () {
    return {
      temp_animotion: [
        {
          logo: 'https://i0.hdslb.com/bfs/bangumi/9ce90cd9869f2a89e56e3f536b917a1f36eeb7e1.jpg@2320w_664h.jpg',
          url: ''
        },
        {
          logo: 'https://i0.hdslb.com/bfs/bangumi/9d0aa971910c07214c692958fb8f75c3d2a3eea0.jpg@2320w_664h.jpg',
          url: ''
        }
      ],
      temp_bangumi_time: {
        the_new: [],
        the_all: {}
      }, // 番剧时间表
      opera_data: {
        top_ad: '',
        opera: [],
        rank: []
      }
    }
  },
  created () {
    this.$http.get('/api/indexData').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.temp_imgs = response.data.Imgs
        // console.log(!(this.flags.opera_menu_flags.theNew))
        // this.animation_imgs.new_img = this.temp_imgs.animationImgs.haveNewImgs
        // this.animation_imgs.rank = this.temp_imgs.animationImgs.allRank
        this.opera_data.opera = this.temp_imgs.opera_data.opera.new
        this.opera_data.rank = this.temp_imgs.opera_data.rank
        this.opera_data.top_ad = this.temp_imgs.opera_data.top_ad
      }
    })
    // 番剧时间表
    axios({
      method: 'get',
      url: '/api/bangumi/get_timeline'
    }).then(res => {
      // console.log(res.data.data)
      this.temp_bangumi_time.the_all = res.data.data
      this.temp_bangumi_time.the_new = res.data.data.MON.bangumis
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    goBangumi (id) {
      this.$router.push({path: '/bangumiPage', query: {user_id: id}})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bangumi_index_all
    width 100%
    padding 0
    margin:0
    border: 0
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
    .bangumi_index_box
      width 1160px
      margin 0 auto
      .opera_part_box
        width 1160px
        height 500px
        margin 0 auto
        .opera_bottom
          width 1160px
          height 494px
          padding-bottom 15px
          .opera_left
            float left
            width 900px
            height 494px
            .opera_left_top_box
              width 900px
              height 30px
              .opera_left_top_menu_item
                display block
                float left
                width 70px
                height 20px
                padding 2px 4px 6px 4px
                border-bottom 2px solid rgb(229, 233, 239)
                color black
                font-size 18px
                cursor pointer
                text-align center
              .opera_left_top_menu_item_on
                display block
                float left
                width 70px
                height 20px
                padding 2px 4px 6px 4px
                border-bottom 2px solid rgb(0, 161, 214)
                color rgb(0, 161, 214)
                font-size 18px
                cursor pointer
                text-align center
              .opera_left_top_button
                display block
                float right
                border 1px solid rgb(242,93,142)
                color rgb(242,93,142)
                cursor pointer
                border-radius 4px
                background-color #fff
                width 107px
                height 34px
                line-height 34px
                margin-top -7px
                margin-right 10px
                font-size 14px
                text-align center
                &:hover{
                  background-color rgb(242,93,142)
                  color #fff
                }
            .opera_left_bottom_box
              width 880px
              height 398px
              margin 26px 20px 40px 0
              .opera_item1
                float left
                width 180px
                height 72px
                padding-right 34px
                cursor pointer
              .opera_item2
                float left
                width 180px
                height 72px
                padding-top 36px
                padding-right 34px
          .opera_right
            float left
            width 260px
            height 494px
            .opera_right_top
              float left
              width 260px
              height 24px
              color black
              font-size 18px
            .opera_right_mid
              float left
              width 260px
              height 360px
              padding-top 20px
              padding-bottom 15px
              .opera_right_rank_item1
                float left
                width 260px
                height 18px
              .opera_right_rank_item2
                float left
                width 260px
                height 18px
                margin-top 20px
            .opera_right_more
              float left
              width 258px
              height 24px
              background-color rgb(229, 233, 239)
              border 1px solid rgb(224, 230, 237)
              border-radius 4px
              cursor pointer
              text-align center
</style>
