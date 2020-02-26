<template>
  <div class="videoPart_all">
    <div class="zhPart_filter_box">
      <div class="zhPart_filter_item">
        <div class="zhPart_filter_item_1">综合排序</div>
        <div class="zhPart_filter_item_2">最多点击</div>
        <div class="zhPart_filter_item_2">最新发布</div>
        <div class="zhPart_filter_item_2">最多弹幕</div>
        <div class="zhPart_filter_item_2">最多收藏</div>
      </div>
      <div class="zhPart_filter_item">
        <div class="zhPart_filter_item_1">全部时长</div>
        <div class="zhPart_filter_item_2">10分钟以下</div>
        <div class="zhPart_filter_item_2">10-30分钟</div>
        <div class="zhPart_filter_item_2">30-60分钟</div>
        <div class="zhPart_filter_item_2">60分钟以上</div>
      </div>
      <div class="zhPart_filter_item">
        <div class="zhPart_filter_item_1">全部分区</div>
        <div class="zhPart_filter_item_2">动画</div>
        <div class="zhPart_filter_item_2">番剧</div>
        <div class="zhPart_filter_item_2">国创</div>
        <div class="zhPart_filter_item_2">音乐</div>
        <div class="zhPart_filter_item_2">舞蹈</div>
        <div class="zhPart_filter_item_2">游戏</div>
        <div class="zhPart_filter_item_2">科技</div>
        <div class="zhPart_filter_item_2">数码</div>
        <div class="zhPart_filter_item_2">生活</div>
        <div class="zhPart_filter_item_2">鬼畜</div>
        <div class="zhPart_filter_item_2">时尚</div>
        <div class="zhPart_filter_item_2">广告</div>
        <div class="zhPart_filter_item_2">娱乐</div>
        <div class="zhPart_filter_item_2">影视</div>
        <div class="zhPart_filter_item_2">纪录片</div>
        <div class="zhPart_filter_item_2">电影</div>
      </div>
    </div>
    <div class="videoPart_all_search_box3_box">
      <search_box3 v-for="(index) in 30" :key="index"></search_box3>
    </div>
  </div>
</template>

<script>
import searchbox3 from './searchbox3'
export default {
  name: 'videoPart',
  components: {
    search_box3: searchbox3
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .videoPart_all
    float left
    .zhPart_filter_box
      width 980px
      height 90px
      float left
      padding 20px 0 10px 0
      border-bottom 1px solid #e5e9ef
      .zhPart_filter_item
        width 980px
        height 20px
        float left
        margin-bottom 10px
        overflow hidden
        .zhPart_filter_item_1
          width 48px
          height 20px
          line-height 20px
          padding 0 8px
          margin-right 15px
          font-size 12px
          color #fff
          background-color #00a1d6
          float left
          border-radius 4px
          cursor pointer
        .zhPart_filter_item_2
          min-width 24px
          height 20px
          line-height 20px
          text-align center
          float left
          font-size 12px
          padding 0 8px
          margin-right 15px
          cursor pointer
          &:hover {
            color #00a1d6
          }
    .videoPart_all_search_box3_box
      float left
      width 1012px
</style>
