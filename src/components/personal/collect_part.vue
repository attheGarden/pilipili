<template>
    <div class="collect_part_all">
      <div class="collect_part_box">
        <div class="collect_content_item" v-for="(item, index) in collect_video" :key="index" v-if="index<20">
          <div class="collect_content_item_img">
            <img :src="item.logo" width="188px" height="119px"/>
          </div>
          <div class="collect_content_item_title" :title="item.name">{{item.name}}</div>
          <div class="collect_content_item_time">
            收藏于：{{item.create_time}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'collectPart',
  props: {
    collect_video: []
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .collect_part_all
    width 1280px
    min-height 1030px
    background-color #fff
    border-radius 5px
    float left
    .collect_part_box
      width 1260px
      padding-top 10px
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
</style>
