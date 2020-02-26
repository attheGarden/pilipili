<template>
    <div class="searchbox1_all"> <!-- 番剧盒子 -->
      <div class="searchbox1_all_box">
        <div class="searchbox1_all_img">
          <img :src="searchbox1_data.logo" style="max-width: 160px;max-height: 214px"/>
        </div>
        <div class="searchbox1_all_msg">
          <div class="searchbox1_all_msg_top">
            <div class="searchbox1_all_msg_top_one">番剧</div>
            <div class="searchbox1_all_msg_top_two">{{searchbox1_data.name}}</div>
            <div class="searchbox1_all_msg_top_score">
              <div class="searchbox1_all_msg_top_score_grade">{{searchbox1_data.grade}}分</div>
              <div class="searchbox1_all_msg_top_score_num">1202人点评</div>
            </div>
          </div>
          <div class="searchbox1_all_msg_mid">
            <div class="searchbox1_all_msg_mid_one">
              <div class="searchbox1_all_msg_mid_one_left">
                <a style="color: #99a2aa">风格：</a>
                <a style="color: #222">{{searchbox1_data.tag}}</a>
              </div>
              <div class="searchbox1_all_msg_mid_one_right">
                <a style="color: #99a2aa">地区：</a>
                <a style="color: #222">{{searchbox1_data.area}}</a>
              </div>
            </div>
            <div class="searchbox1_all_msg_mid_two">
              <div class="searchbox1_all_msg_mid_two_left">
                <a style="color: #99a2aa">开播时间：</a>
                <a style="color: #222">{{searchbox1_data.start_time}}</a>
              </div>
              <div class="searchbox1_all_msg_mid_two_right">
                <a style="color: #99a2aa">演员：</a>
                <a style="color: #222" :title="searchbox1_data.voice_actors">{{searchbox1_data.voice_actors}}</a>
              </div>
            </div>
            <div class="searchbox1_all_msg_mid_three">
              <a style="color: #99a2aa">简介：</a>
              <a style="color: #99a2aa" :title="searchbox1_data.info">{{searchbox1_data.info}}</a>
            </div>
          </div>
          <div class="searchbox1_all_msg_bottom" @click="showId">
            <div class="searchbox1_all_msg_bottom_box">
              <div class="searchbox1_all_msg_bottom_item_box" v-for="(item,index) in searchbox1_data.episodes" :key="index"
                    v-if="index<9">
                <div @click="showId">{{index+1}}</div>
              </div>
              <div class="searchbox1_all_msg_bottom_item_box">...</div>
              <div class="searchbox1_all_msg_bottom_item_box" v-for="(item,index) in searchbox1_data.episodes" :key="index"
                   v-if="index>(searchbox1_data.episodes.length-2)">
                {{index+1}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'searchbox1',
  props: {
    searchbox1_data: {}
  },
  data () {
    return {
      searchbox1_data1: {
        img: 'https://i0.hdslb.com/bfs/bangumi/297063889e7836facea595b63eb6330f51904a24.jpg@180w_240h.webp',
        grade: '9.8',
        people_num: '1882',
        title: '口袋妖怪 无印',
        style: '热血/战斗/励志',
        area: '日本',
        play_time: '1997-04-01',
        sound: '火箭队的喵喵：犬山イヌコ\n' +
          '小建：小刚：うえだゆうじ\n' +
          '小霞：飯塚雅弓\n' +
          '小次郎：三木眞一郎\n' +
          '武藏：林原めぐみ\n' +
          '小智：松本梨香\n' +
          '小智的皮卡丘：大谷育江\n' +
          '皮卡丘：',
        introduce: '\n' +
          '            这是一篇与原作RPG主角一样从真新镇出发的少年小智，和他的口袋妖怪与皮卡丘，刻画友情与成长的故事。沿袭原作故事节奏展开第一集的冒险故事。\n' +
          '\n' +
          '设定中自然有登场人物与反派角色等，就因为初期这种独特的表达方式，将游戏中的世界观毫不保留的完整呈现在动画中。这可以说是担任系列构成的首藤刚志先生最擅长的方式。首藤也构想出火箭队登场时“既然你诚心诚意的发问了──”的台词。\n' +
          '\n' +
          '创造了跟随小智一起旅行的道馆馆长好友小刚与小霞，也创造出了“老梗新用”的反派角色，敌对组织火箭队的队员武藏与小次郎，更赋予他们有一只能够说人话的罕见口袋妖怪喵喵。\n' +
          '\n' +
          '假如小智没有选择皮卡丘作为最初的口袋妖怪，反而选择最出三只的其中之一的话，或许会让人大失所望。不仅游戏受欢迎，再加上最初的口袋妖怪使用光的三原色，但是如果没有皮卡丘可以选择也一定会逊色许多。\n' +
          '\n' +
          '主角小智与大木博士的孙子，小智的对手小茂的命名，是源自原作RPG“口袋妖怪 红·绿”提供的名字之一，是以该游戏开发者田尻智，任天堂董事宫本茂的名字作为基础。\n' +
          '          ',
        set_num: 275
      }
    }
  },
  methods: {
    showId () {
      console.log(this.searchbox1_data.id)
      this.$router.push({path: '/bangumiPage', query: {Aid: this.searchbox1_data.id}})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .searchbox1_all
    width 980px
    height 214px
    float left
    margin-top 20px
    .searchbox1_all_box
      width 980px
      height 214px
      float left
      .searchbox1_all_img
        width 160px
        height 214px
        float left
        margin-right 20px
      .searchbox1_all_msg
        width 800px
        height 214px
        float left
        .searchbox1_all_msg_top
          width 800px
          height 24px
          float left
          margin-bottom 15px
          .searchbox1_all_msg_top_one
            width 24px
            height 22px
            float left
            line-height 22px
            padding 0 10px
            border 1px solid #979797
            color #979797
            text-align center
            font-size 12px
            border-radius 100px
            margin-right 12px
          .searchbox1_all_msg_top_two
            height 22px
            float left
            line-height 22px
            color #222
            font-weight 700
            max-width 600px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
          .searchbox1_all_msg_top_score
            max-width 75px
            height 44px
            float right
            .searchbox1_all_msg_top_score_grade
              color #ffa726
              font-size 20px
              text-align right
              margin-bottom 5px
            .searchbox1_all_msg_top_score_num
              font-size 14px
              text-align right
              color #222
        .searchbox1_all_msg_mid
          width 800px
          height 78px
          float left
          margin-bottom 21px
          .searchbox1_all_msg_mid_one
            width 800px
            height 16px
            float left
            margin-bottom 4px
            .searchbox1_all_msg_mid_one_left
              width 244px
              height 16px
              float left
              font-size 12px
              line-height 16px
            .searchbox1_all_msg_mid_one_right
              width 476px
              height 16px
              float left
              font-size 12px
              line-height 16px
          .searchbox1_all_msg_mid_two
            height 16px
            width 800px
            float left
            margin-bottom 4px
            .searchbox1_all_msg_mid_two_left
              width 244px
              height 16px
              float left
              font-size 12px
              line-height 16px
            .searchbox1_all_msg_mid_two_right
              width 476px
              height 16px
              float left
              font-size 12px
              line-height 16px
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
          .searchbox1_all_msg_mid_three
            width 800px
            height 40px
            line-height 20px
            font-size 12px
            margin-top 3px
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            overflow hidden
        .searchbox1_all_msg_bottom
          width 800px
          height 50px
          float left
          padding-top 26px
          .searchbox1_all_msg_bottom_box
            width 800px
            height 40px
            padding-top 10px
            float left
            .searchbox1_all_msg_bottom_item_box
              width 56px
              height 34px
              margin-top 6px
              margin-right 6px
              float left
              font-size 12px
              line-height 34px
              text-align center
              color #6c7579
              border-radius 4px
              border 1px solid #e5e9ef
              cursor pointer
              &:hover {
                background-color #00a1d6
                color #fff
              }
</style>
