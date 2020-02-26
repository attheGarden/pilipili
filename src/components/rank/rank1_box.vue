<template>
    <div class="rank1_box_all">
      <div class="rank1_box_body">
        <div class="rank1_box_left">{{index}}</div>
        <div class="rank1_box_right">
          <div class="rank1_box_img">
            <img :src="rank1_data.logo" width="114px" height="73px"/>
          </div>
          <div class="rank1_box_msg">
            <a class="rank1_box_msg_top">{{rank1_data.name}}</a>
            <div style="margin-top: 16px;float: left;width: 960px;height: 16px" class="rank1_box_msg_bottom">
              <span style="font-size: 12px;margin-right: 20px;color: rgb(153,162,170)">
                <i class="iconfont" style="font-size: 12px;color: rgb(153,162,170)">&#xe72b;</i>
                {{rank1_data.playnum}}
              </span>
              <span style="font-size: 12px;margin-right: 20px;color: rgb(153,162,170)">
                <i class="iconfont" style="font-size: 12px;color: rgb(153,162,170)">&#xe665;</i>
                {{rank1_data.commentnum}}
              </span>
              <span class="rank1_box_msg_bottom_up">
                <i class="iconfont" style="font-size: 12px;color: rgb(153,162,170);margin-right: 2px">&#xe606;</i>
                {{rank1_data.user.name}}
              </span>
              <div style="float: right;margin-right: 10px">
                <div style="height: 20px;margin-bottom: 12px;color: rgb(0,161,214);font-size: 16px;font-weight: 700">
                  {{rank1_data.score}}
                </div>
                <div style="font-size: 12px;color: rgb(184, 192, 204);text-align: center">综合评分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rank1box',
  props: {
    rank1_data: {
    },
    index: ''
  },
  data () {
    return {
      rank1_box_data: {
        img: 'https://i0.hdslb.com/bfs/archive/893cbeb1889304c8b614cca1d1cd6c89d21a968b.jpg@114w_70h.webp',
        title: '【全明星】鬼畜修炼手册',
        play: '158.8万',
        danmu: '1.8万',
        up: '惜缘、过去',
        grade: '3575457'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rank1_box_all
    width 1160px
    height 110px
    float left
    border-bottom 1px solid rgb(229, 233, 239)
    &:hover{
      box-shadow 1px 1px 10px 1px rgb(229, 233, 239)
    }
    .rank1_box_body
      width 1160px
      height 90px
      padding-top 20px
      .rank1_box_left
        width 70px
        height 90px
        float left
        color rgb(184, 192, 204)
        font-size 36px
        font-weight 700
        text-align center
      .rank1_box_right
        width 1090px
        height 90px
        float left
        .rank1_box_img
          width 114px
          height 73px
          float left
        .rank1_box_msg
          float left
          width 960px
          height 70px
          padding-bottom 20px
          margin-left 16px
          .rank1_box_msg_top
            color rgb(34,34,34)
            font-size 14px
            font-weight 700
            &:hover{
              color rgb(0, 161, 214)
            }
          .rank1_box_msg_bottom
            .rank1_box_msg_bottom_up
              font-size 12px
              margin-right 20px
              color rgb(153,162,170)
              cursor pointer
              &:hover{
                color rgb(0, 161, 214)
              }
</style>
