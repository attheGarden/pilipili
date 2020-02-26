<template>
    <div class="works_part_all">
      <div class="works_part_box_on" v-if="flag">
        <div class="collect_content_item" v-for="(item, index) in my_videos" :key="index" v-if="index<18">
          <div class="collect_content_item_img">
            <img :src="item.logo" width="188px" height="119px"/>
          </div>
          <div class="collect_content_item_title">{{item.name}}</div>
          <div class="collect_content_item_time">
            收藏于：{{item.release_time}}
          </div>
        </div>
      </div>
      <div class="works_part_box_no" v-if="!(flag)">
        <div style="width: 256px;height: 272px;margin: 0 auto;padding-top: 140px">
          <img src="https://s1.hdslb.com/bfs/static/jinkela/space/asserts/nodata02.png"/>
          <div style="height: 16px;line-height: 16px;font-size: 14px;text-align: center;color: #6d757a">
            空间主人还没有投过稿哦！
          </div>
        </div>
      </div>
      <div style="float: left;width: 1240px;text-align: center;margin-top: 20px" v-if="is_have_page_turn">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
  name: 'worksPart',
  props: {
    my_videos: [],
    flag: {
      type: Boolean
    }
  },
  data () {
    return {
      is_have_work: false,
      is_have_page_turn: false
    }
  },
  created () {
    if (this.my_videos === null) {
      this.is_have_work = false
      if (this.my_videos.length < 19) {
        this.is_have_page_turn = false
      } else {
        this.is_have_page_turn = true
      }
    } else {
      this.is_have_work = true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .works_part_all
    width 1280px
    min-height 639px
    padding-bottom 10px
    background-color #fff
    border-radius 5px
    float left
    .works_part_box_on //有投稿
      width 1260px
      padding-top 20px
      padding-bottom 10px
      margin-left 20px
      float left
      .collect_content_item
        float left
        width 188px
        height 183px
        margin-right 20px
        margin-bottom 20px
        .collect_content_item_img
          width 188px
          height 119px
          float left
          overflow hidden
          border-radius 4px
        .collect_content_item_title
          width 188px
          height 38px
          margin-top 6px
          float left
          color rgb(34, 34, 34)
          font-size 12px
          cursor pointer
          line-height 20px
          overflow hidden
          &:hover {
            color #00a1d6
          }
        .collect_content_item_time
          color rgb(153, 153, 153)
          width 188px
          height 14px
          font-size 12px
          float left
          margin-top 6px
          line-height 14px
    .works_part_box_no
      float left
      width 100%
</style>
