<template>
    <div class="dy_part_all">
      <div class="dy_part_box">
        <div class="dy_content_item" v-for="(item, index) in dy_video" :key="index" v-if="index<15">
          <div style="float: left;width: 110px;height: 140px">
            <img :src="item.logo" width="110px" height="140px"/>
          </div>
          <div class="dy_content_item_msg">
            <div class="dy_content_item_title" style="overflow: hidden;display: -webkit-box;
            -webkit-box-orient: vertical;-webkit-line-clamp: 1" :title="item.name">{{item.name}}</div>
            <div style="line-height: 20px;color: #222;float: left;font-size: 12px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden">
              {{item.info}}
            </div>
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
  name: 'dyPart',
  props: {
    dy_video: []
  },
  data () {
    return {
      personnal_dy_data: [
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
        },
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
        },
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
        },
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
      ],
      is_have_page_turn: false
    }
  },
  created () {
    if (this.dy_video.length < 15) {
      this.is_have_page_turn = false
    } else {
      this.is_have_page_turn = true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dy_part_all
    width 1240px
    max-height 1066px
    min-height 800px
    float left
    padding 20px
    background-color #fff
    border-radius 5px
    .dy_part_box
      width 1240px
      float left
      .dy_content_item
        width 388px
        height 140px
        margin-bottom 30px
        margin-right 20px
        float left
        .dy_content_item_msg
          width 257px
          min-height 91px
          float left
          margin-left 10px
          .dy_content_item_title
            width 256px
            height 24px
            line-height 24px
            float left
            margin-bottom 10px
            overflow hidden
            font-size 18px
            color #222
            cursor pointer
            &:hover {
              color #00a1d6
            }
</style>
