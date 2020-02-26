<template>
    <div class="personal_index_part_all">
      <div class="personal_index_part_left_box">
        <div style="width: 880px;height: 25px;float: left;margin-bottom: 15px;border-bottom: 1px solid rgb(238, 238,238)">
          <span style="color: rgb(0, 161, 214);margin-right: 8px;font-size: 12px">我的粉丝会看到</span>
          <span style="color: #222; font-size: 12px">新访客会看到</span>
        </div>
        <div class="select_video_box">
          <div class="select_video">
            <div style="width: 276px;height: 64px;margin-top: 55px;float: left">
              <div style="width: 40px;height: 40px;margin: 0 118px;float: left">
                <i class="iconfont" style="font-size: 38px;cursor: pointer">&#xe614;</i>
              </div>
              <div style="width: 276px;height: 16px;font-size: 12px;float: left;margin-top: 8px;text-align: center;cursor: pointer">
                设置置顶视频
              </div>
            </div>
          </div>
          <div style="margin-left: 80px;float: left;margin-top: 40px">
            <img src="https://s1.hdslb.com/bfs/static/jinkela/space/asserts/dbz-hint-33.png"/>
          </div>
        </div>
        <div class="my_video_box">
          <div style="font-size: 20px;float: left">我的视频</div>
          <div style="margin-left: 290px;float: left;height: 35px;line-height: 30px">
            <span style="font-size: 12px;color: rgb(153, 162, 170)">还没有上传过视频</span>
            <span style="font-size: 12px;color: #00a1d6">立即上传</span>
          </div>
        </div>
        <div class="my_zl_box">
          <div style="font-size: 20px;float: left">我的专栏</div>
          <div style="margin-left: 290px;float: left;height: 35px;line-height: 30px">
            <span style="font-size: 12px;color: rgb(153, 162, 170)">空间主人还没有投过专栏哦</span>
          </div>
        </div>
        <div class="my_pd_box">
          <div style="font-size: 20px;float: left;width: 880px;height: 35px;padding-bottom: 15px;">我的频道</div>
          <div style="height: 66px;width: 880px;margin-top: 7px;padding-bottom: 30px">
            <div style="width: 880px;height: 14px;float: left;text-align: center;font-size: 12px">投稿视频可以分类展示了</div>
            <div style="width: 880px;height: 40px;float: left;margin-top: 5px">
              <div style="margin: 0 auto;width: 98px">
                <el-button type="primary">创建频道</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="my_collect_box">
          <div class="my_collect_title_box">
            <div style="font-size: 20px;margin-top: 8px;float: left">我的收藏</div>
          </div>
          <div class="my_collect_content_box">
            <div class="my_collect_content_item" v-for="(item, index) in collect_video" :key="index" v-if="index<4">
              <div class="my_collect_content_item_img">
                <img :src="item.logo" width="188px" height="119px"/>
              </div>
              <div class="my_collect_content_item_title">{{item.name}}</div>
              <div class="my_collect_content_item_time">
                收藏于： {{item.create_time}}
              </div>
            </div>
          </div>
        </div>
        <div class="my_dy_box">
          <div class="my_dy_title">订阅番剧</div>
          <div class="my_dy_content">
            <div class="my_dy_content_item" v-for="(item, index) in collect_bangumi" :key="index" v-if="index<4">
              <div style="float: left;width: 110px;height: 144px">
                <img :src="item.logo" width="110px" height="144px"/>
              </div>
              <div class="my_dy_content_item_msg">
                <div class="my_dy_content_item_title">{{item.name}}</div>
                <div style="line-height: 20px;color: #222;float: left;font-size: 12px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden" :title="item.info">
                  {{item.info}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="personal_index_part_right_box">
        <div style="width: 348px;height: 70px;padding: 5px 0 8px 0;border:1px solid rgb(238, 238, 238);border-radius: 5px;float: left;
        background-color: #fff;margin-bottom: 10px">
          <div style="width: 348px;height: 70px;float: left">
            <img src="https://s1.hdslb.com/bfs/static/jinkela/space/asserts/icon-auth.png" height="70px" style="float: left"/>
            <div style="width: 210px;height: 44px;float: left;margin-left: 10px;margin-top: 15px">
              <div style="width: 210px;float: left;height: 20px;margin-bottom: 4px;color: #222;font-size: 18px;text-align: center">
                点击申请pilipili认证
              </div>
              <div style="width: 210px; float: left;color: rgb(153, 162, 170);font-size: 12px;text-align: center">
                获得pilipili认证，享受多重认证福利！
              </div>
            </div>
          </div>
        </div>
        <div class="personal_index_part_right_tg_box">
          <div style="width: 288px;height: 39px;padding: 0 10px 13px 10px;color: #222;line-height: 39px;text-align: center">
            <img src="https://s1.hdslb.com/bfs/static/jinkela/space/asserts/icon_createCenters.png" height="34px"/>
          </div>
          <div class="personal_index_part_right_tg_buttons">
            <div class="personal_index_part_right_tg_buttons_one">视频投稿</div>
            <div class="personal_index_part_right_tg_buttons_two">内容管理</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'personalIndexPart',
  props: {
    collect_video: [],
    collect_bangumi: []
  },
  data () {
    return {
      personnal_index_dy_data: [
        {
          img: 'https://i0.hdslb.com/bfs/bangumi/297063889e7836facea595b63eb6330f51904a24.jpg@110w_144h_100Q_1c.webp',
          title: '精灵宝可梦 无印',
          introduce: '\n' +
            '          这是一篇与原作RPG主角一样从真新镇出发的少年小智，和他的口袋妖怪与皮卡丘，刻画友情与成长的故事。沿...\n' +
            '        '
        },
        {
          img: 'https://i0.hdslb.com/bfs/bangumi/3fc16a667502cbff226e585eb660a96a20c7458c.png@110w_144h_100Q_1c.webp',
          title: '多罗罗',
          introduce: '\n' +
            '          他们向着命运抗争，在那尽头等待他们的是人心，还是业障。\n' +
            '时值乱世。\n' +
            '名为景光的醍醐将军，向某个寺庙殿...\n' +
            '        '
        },
        {
          img: 'https://i0.hdslb.com/bfs/bangumi/de944b7c9306932d8dd3dcaeaf2eeec8670deec5.png@110w_144h_100Q_1c.webp',
          title: '精灵宝可梦 无印',
          introduce: '\n' +
            '          这是一篇与原作RPG主角一样从真新镇出发的少年小智，和他的口袋妖怪与皮卡丘，刻画友情与成长的故事。沿...\n' +
            '        '
        },
        {
          img: 'https://i0.hdslb.com/bfs/bangumi/dfd40bb8ff7c096eb6789dd7548f418eec842fbf.jpg@110w_144h_100Q_1c.webp',
          title: '精灵宝可梦 无印',
          introduce: '\n' +
            '          这是一篇与原作RPG主角一样从真新镇出发的少年小智，和他的口袋妖怪与皮卡丘，刻画友情与成长的故事。沿...\n' +
            '        '
        }
      ]
    }
  },
  created () {
  },
  methods: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personal_index_part_all
    float left
    .personal_index_part_left_box
      width 880px
      min-height 800px
      float left
      padding 15px 20px
      border 1px solid rgb(238, 238, 238)
      background-color #fff
      border-radius 10px
      .select_video_box
        width 880px
        height 175px
        float left
        border-bottom 1px solid rgb(238, 238, 238)
        padding-bottom 20px
        margin-bottom 17px
        .select_video
          width 276px
          height 171px
          float left
          color rgb(184, 192, 204)
          border 2px dashed rgb(184, 192, 204)
          &:hover {
            color #00a1d6
            border 2px dashed #00a1d6
          }
      .my_video_box
        width 880px
        height 35.5px
        padding-bottom 15px
        float left
        border-bottom 1px solid rgb(238, 238, 238)
      .my_zl_box
        width 880px
        height 35.5px
        margin-top 20px
        padding-bottom 15px
        float left
        border-bottom 1px solid rgb(238, 238, 238)
      .my_pd_box
        width 880px
        height 154px
        margin-top 20px
        margin-bottom 17px
        padding-bottom 15px
        float left
        border-bottom 1px solid rgb(238, 238, 238)
      .my_collect_box
        width 880px
        height 268px
        float left
        border-bottom 1px solid rgb(238, 238, 238)
        margin-bottom 17px
        .my_collect_title_box
          width 880px
          height 36px
          padding-bottom 15px
        .my_collect_content_box
          width 880px
          height 217px
          float left
          .my_collect_content_item
            float left
            width 188px
            height 183px
            margin-right 20px
            .my_collect_content_item_img
              width 188px
              height 119px
              float left
              overflow hidden
              border-radius 4px
            .my_collect_content_item_title
              width 188px
              height 38px
              margin-top 6px
              float left
              color rgb(34, 34, 34)
              font-size 12px
              cursor pointer
              line-height 20px
              overflow hidden
            .my_collect_content_item_time
              color rgb(153, 153, 153)
              width 188px
              height 14px
              font-size 12px
              float left
              margin-top 6px
              line-height 14px
      .my_dy_box
        width 880px
        height 399px
        float left
        margin-bottom 17px
        border-bottom 1px solid rgb(238, 238, 238)
        .my_dy_title
          width 880px
          height 36px
          float left
          padding-bottom 15px
          font-size 20px
          cursor pointer
          line-height 36px
          color #000
          &:hover {
            color #00a1d6
          }
        .my_dy_content
          width 900px
          height 348px
          float left
          color #222
          .my_dy_content_item
            width 430px
            height 144px
            margin-bottom 30px
            margin-right 20px
            float left
            .my_dy_content_item_msg
              width 280px
              height 144px
              overflow hidden
              float left
              margin-left 20px
              padding-right 20px
              .my_dy_content_item_title
                width 280px
                height 24px
                line-height 24px
                float left
                margin-bottom 10px
                margin-top -3px
                font-size 18px
                color #222
                cursor pointer
                &:hover {
                  color #00a1d6
                }
    .personal_index_part_right_box
      width 350px
      min-height 800px
      float left
      margin-left 8px
      .personal_index_part_right_tg_box
        width 308px
        height 90px
        padding 15px 20px 18px 20px
        float left
        margin-bottom 10px
        border 1px solid rgb(238, 238, 238)
        background-color #fff
        .personal_index_part_right_tg_buttons
          width 306px
          height 22px
          float left
          border 1px solid rgb(229, 233, 239)
          padding 7px 0
          line-height 22px
          border-radius 5px
          .personal_index_part_right_tg_buttons_one
            width 152px
            height 23px
            line-height 23px
            float left
            border-right 1px solid rgb(109, 117, 122)
            color rgb(109, 117, 122)
            text-align center
            font-size 12px
            cursor pointer
            &:hover {
              color #00a1d6
            }
          .personal_index_part_right_tg_buttons_two
            width 152px
            height 23px
            line-height 23px
            float left
            color rgb(109, 117, 122)
            text-align center
            font-size 12px
            cursor pointer
            &:hover {
              color #00a1d6
            }
</style>
