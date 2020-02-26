<template>
    <div class="rank2_box_all">
      <div class="rank2_box_body">
        <div class="rank2_box_left">{{index}}</div>
        <div class="rank2_box_right">
          <div class="rank2_box_img">
            <img :src="rank2_data.logo" width="90px"/>
          </div>
          <div class="rank2_box_msg">
            <a class="rank2_box_title">{{rank2_data.name}}</a>
            <a class="rank2_box_update">更新至第{{rank2_data.new_piece}}话</a>
            <div class="rank2_box_detail">
              <span style="font-size: 12px;margin-right: 20px;color: rgb(153,162,170)">
                <i class="iconfont" style="font-size: 12px;color: rgb(153,162,170);">&#xe72b;</i>
                {{rank2_data.playnum}}
              </span>
              <span style="font-size: 12px;margin-right: 20px;color: rgb(153,162,170)">
                <i class="iconfont" style="font-size: 14px;color: rgb(153,162,170);">&#xe665;</i>
                {{rank2_data.commentnum}}
              </span>
              <span style="font-size: 12px;margin-right: 20px;color: rgb(153,162,170)">
                <i class="iconfont" style="font-size: 14px;color: rgb(153,162,170);">&#xe613;</i>
                {{rank2_data.colnum}}
              </span>
              <div style="float: right;margin-right: 10px;position: relative;top:-40px;text-align: center">
                <div style="color: rgb(0, 161, 214);font-size: 16px;font-weight: 700;margin-bottom: 12px">
                  {{rank2_data.score}}
                </div>
                <div style="color: rgb(184, 192, 204);font-size: 12px">综合得分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rank2_box',
  props: {
    rank2_data: {
    },
    index: ''
  },
  data () {
    return {
      rank2_box_data2: {
        img: 'https://i0.hdslb.com/bfs/bangumi/3fc16a667502cbff226e585eb660a96a20c7458c.png@90w_120h.webp',
        title: '多罗罗',
        update: '更新至第20话',
        play: '9044.5万',
        danmu: '37.2万',
        collect: '313.4万',
        grade: '643540'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rank2_box_all
    width 1160px
    height 160px
    float left
    border-bottom 1px solid rgb(229, 233, 239)
    &:hover{
      box-shadow 1px 1px 10px 1px rgb(229, 233, 239)
    }
    .rank2_box_body
      width 1160px
      height 140px
      padding-top 20px
      .rank2_box_left
        width 70px
        height 140px
        line-height 120px
        color rgb(184, 192, 204)
        font-size 36px
        font-weight 700
        text-align center
        float left
      .rank2_box_right
        width 1090px
        height 140px
        float left
        .rank2_box_img
          width 90px
          height 123px
          float left
        .rank2_box_msg
          float left
          margin-left 10px
          width 984px
          height 120px
          padding-bottom 20px
          .rank2_box_title
            color rgb(34,34,34)
            font-weight 700
            font-size 18px
            cursor pointer
            &:hover{
              color rgb(0, 161, 214)
            }
          .rank2_box_update
            display block
            margin-top 15px
            width 984px
            height 16px
            line-height 16px
            color rgb(153, 162, 170)
            font-size 12px
          .rank2_box_detail
            width 984px
            height 16px
            margin-top 24px
</style>
