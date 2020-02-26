<template>
    <div class="searchbox4_all">
      <div class="searchbox4_all_user_img">
        <div style="width: 90px; height: 90px;float: left;border-radius: 45px;overflow: hidden">
          <img :src="searchbox4_data.user_img" width="90px"/>
        </div>
      </div>
      <div class="searchbox4_all_user_info">
        <div class="searchbox4_all_user_info_top">
          <div class="searchbox4_user_name">{{searchbox4_data.user_name}}</div>
          <div class="searchbox4_user_gz">+ 关注</div>
        </div>
        <div class="searchbox4_all_user_info_mid1">
          <span class="searchbox4_all_user_info_mid1_item">稿件：{{searchbox4_data.gj}}</span>
          <span class="searchbox4_all_user_info_mid1_item">粉丝：{{searchbox4_data.fan}}</span>
        </div>
        <div class="searchbox4_all_user_info_mid2">{{searchbox4_data.introduce}}</div>
        <div class="searchbox4_all_user_info_bottom">
          <div class="searchbox4_all_user_info_bottom_item" v-for="(item, index) in searchbox4_data.works" :key="index">
            <div style="width: 80px;height: 50px;float: left;overflow: hidden">
              <img :src="item.img" width="80px"/>
            </div>
            <div style="width: 138px;height: 50px;float: right">
              <div style="width: 138px;height: 36px;float: left;display: -webkit-box;-webkit-box-orient: vertical;
                -webkit-line-clamp: 2;overflow: hidden;font-size: 12px;line-height: 18px" :title="item.title">
                {{item.title}}
              </div>
              <div style="color: rgb(153, 162, 170);width: 138px;height: 12px;float: left;font-size: 12px">
                {{item.time}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'searchbox4',
  data () {
    return {
      searchbox4_data: {
        user_img: 'https://i0.hdslb.com/bfs/face/a8ccf7513a033036ef90ce2428c78edee7c02060.jpg@180w_180h.webp',
        user_name: '口袋妖怪全国大师赛',
        gj: '536',
        fan: '3.6万',
        introduce: '口袋妖怪大师赛B站官方发布',
        works: [
          {
            img: 'https://i0.hdslb.com/bfs/archive/60e7f331563d127d78d5ffd849a00b02fb736e4c.jpg@160w_100h.webp',
            title: '红颜结业 有缘再见',
            time: '2016-06-11'
          },
          {
            img: 'https://i0.hdslb.com/bfs/archive/9c57a5d7546346a5e82d182465f9996f1d44977d.jpg@160w_100h.webp',
            title: '口袋妖怪全国大师赛2015~16秋季赛决赛 吧主甲 vs JohnYiu 附选手采访',
            time: '2016-06-11'
          },
          {
            img: 'https://i0.hdslb.com/bfs/archive/60e7f331563d127d78d5ffd849a00b02fb736e4c.jpg@160w_100h.webp',
            title: '红颜结业 有缘再见',
            time: '2016-06-11'
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .searchbox4_all
    width 980px
    height 138px
    padding 20px 0
    float left
    border-bottom 1px solid rgb(229, 233, 239)
    .searchbox4_all_user_img
      width 90px
      height 138px
      float left
      cursor pointer
    .searchbox4_all_user_info
      float right
      width 878px
      height 138px
      .searchbox4_all_user_info_top
        width 878px
        height 24px
        margin-bottom 12px
        float left
        line-height 24px
        .searchbox4_user_name
          height 21px
          float left
          margin-right 14px
          color rgb(34,34,34)
          font-size 16px
          cursor pointer
          font-weight 700
          &:hover {
            color #00a1d6
          }
        .searchbox4_user_gz
          float left
          width 64px
          height 24px
          color #fff
          font-size 12px
          text-align center
          border-radius 4px
          background-color rgba(0, 161, 214, 1)
          &:hover {
            background-color rgba(0, 161, 214, 0.6)
          }
      .searchbox4_all_user_info_mid1
        width 878px
        height 12px
        float left
        margin-bottom 10px
        .searchbox4_all_user_info_mid1_item
          color rgb(109, 117, 122)
          font-size 12px
          float left
          margin-right 15px
      .searchbox4_all_user_info_mid2
        width 878px
        height 16px
        color rgb(109, 117, 122)
        font-size 12px
        line-height 16px
        margin-bottom 14px
        overflow hidden
        float left
      .searchbox4_all_user_info_bottom
        width 878px
        height 50px
        float left
        .searchbox4_all_user_info_bottom_item
          width 230px
          height 50px
          margin-right 30px
          float left
</style>
