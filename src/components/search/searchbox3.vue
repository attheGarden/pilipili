<template>
    <div class="searchbox3_all"> <!-- 视频盒子 -->
      <div class="searchbox3_all_img" @click="goPlay(searchbox_3_data.id)">
        <img :src="searchbox_3_data.logo" width="168px" height="100px"/>
      </div>
      <div class="searchbox3_all_msg">
        <div class="searchbox3_all_msg_title" :title="searchbox_3_data.name">{{searchbox_3_data.name}}</div>
        <div class="searchbox3_all_msg_play">
          <i class="iconfont" style="font-size: 12px">&#xe72b;</i>
          {{searchbox_3_data.playnum}}
        </div>
        <div class="searchbox3_all_msg_time">
          <i class="iconfont" style="font-size: 12px">&#xe7eb;</i>
          {{searchbox_3_data.release_time}}
        </div>
        <div class="searchbox3_all_msg_up">
          <i class="iconfont" style="font-size: 12px">&#xe7eb;</i>
          {{searchbox_3_data.user.name}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'searchbox3',
  props: {
    searchbox_3_data: {}
  },
  data () {
    return {
      searchbox3_data: {
        img: 'https://i1.hdslb.com/bfs/archive/fa5006c96f202c7aa2783a2dc7a8cda3a05e171b.jpg@320w_200h.webp',
        title: '【BD/1080P/日语中字动画】精灵宝可梦剧场版全集',
        play: '80.1万',
        danmu: '4.7万',
        up_time: '2018-03-06',
        up: 'Pokemonfan彬'
      }
    }
  },
  methods: {
    goPlay (id) {
      this.$router.push({path: '/videoPlay2', query: {videoId: id, tagId: 4}})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .searchbox3_all
    width 168px
    height 208px
    float left
    border 1px solid rgb(229, 233, 239)
    margin-top 20px
    margin-right 32px
    .searchbox3_all_img
      width 168px
      height 100px
      float left
      overflow hidden
    .searchbox3_all_msg
      float left
      width 148px
      height 100px
      padding 8px 10px 0 10px
      .searchbox3_all_msg_title
        width 148px
        height 40px
        line-height 20px
        font-size 12px
        margin-bottom 12px
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        overflow hidden
        cursor pointer
        float left
        &:hover{
          color #00a1d6
        }
      .searchbox3_all_msg_play
        width 60px
        height 12px
        float left
        font-size 12px
        color rgb(153, 162, 170)
        margin-bottom 12px
        margin-right 4px
      .searchbox3_all_msg_time
        width 83px
        height 12px
        float right
        font-size 12px
        color rgb(153, 162, 170)
        margin-bottom 12px
        overflow hidden
      .searchbox3_all_msg_up
        max-width 148px
        height 12px
        margin-bottom 12px
        float left
        font-size 12px
        overflow hidden
        color rgb(153, 162, 170)
</style>
