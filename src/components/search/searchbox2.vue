<template>
    <div class="searchbox2_all"> <!-- 电影盒子 -->
      <div class="searchbox2_all_box">
        <div class="searchbox2_all_img">
          <img :src="searchbox2_data.img" style="max-width: 160px;max-height: 214px"/>
        </div>
        <div class="searchbox2_all_msg">
          <div class="searchbox2_all_msg_top">
            <div class="searchbox2_all_msg_top_one">电影</div>
            <div class="searchbox2_all_msg_top_two">{{searchbox2_data.title}}</div>
            <div class="searchbox2_all_msg_top_score">
              <div class="searchbox2_all_msg_top_score_grade">{{searchbox2_data.grade}}分</div>
              <div class="searchbox2_all_msg_top_score_num">{{searchbox2_data.people_num}}人点评</div>
            </div>
          </div>
          <div class="searchbox2_all_msg_mid">
            <div class="searchbox2_all_msg_mid_one">
              <div class="searchbox2_all_msg_mid_one_left">
                <a style="color: #99a2aa">风格：</a>
                <a style="color: #222">{{searchbox2_data.style}}</a>
              </div>
              <div class="searchbox2_all_msg_mid_one_right">
                <a style="color: #99a2aa">地区：</a>
                <a style="color: #222">{{searchbox2_data.area}}</a>
              </div>
            </div>
            <div class="searchbox2_all_msg_mid_two">
              <div class="searchbox2_all_msg_mid_two_left">
                <a style="color: #99a2aa">上映时间：</a>
                <a style="color: #222">{{searchbox2_data.play_time}}</a>
              </div>
              <div class="searchbox2_all_msg_mid_two_right">
                <a style="color: #99a2aa">出演：</a>
                <a style="color: #222" :title="searchbox2_data.player">{{searchbox2_data.player}}</a>
              </div>
            </div>
            <div class="searchbox2_all_msg_mid_three">
              <a style="color: #99a2aa">简介：</a>
              <a style="color: #99a2aa" :title="searchbox2_data.introduce">{{searchbox2_data.introduce}}</a>
            </div>
          </div>
          <div class="searchbox2_all_msg_bottom">
            <div class="searchbox2_all_msg_bottom_button">
              <i class="iconfont" style="font-size: 14px">&#xe60a;</i>
              立即观看
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'searchbox2',
  data () {
    return {
      searchbox2_data: {
        img: 'https://i0.hdslb.com/bfs/bangumi/ce73adea52812dff7d5c013c707bd9fa33c3cc12.jpg@180w_240h.webp',
        grade: '8.8',
        people_num: '1882',
        title: '精灵宝可梦：波尔凯尼恩与机巧的玛机雅娜',
        style: '动画/奇幻',
        area: '日本',
        play_time: '2017-11-11',
        player: '山新、沈念如、张圣、阎么么、李璐、黎筱濛、郭盛、邢凯新、李璐、冯盛、杨凝、佟心竹',
        introduce: '\n' +
          '            小智和皮卡丘等一行伙伴在旅途中前行。某日，宝可梦波尔凯尼恩从天而降并被迫与小智锁在了一起。波尔凯尼恩与被人类伤害过的宝可梦们共同生活，因此非常讨厌人类，但这条神奇的锁链却让他们无法分开，奇妙的故事就此开始。小智与皮卡丘又将一起开始新的冒险…… 另一方面，在超级机关城市阿佐特王国，大臣贾维斯得到了常年追求的终极发明——500 年前诞生于阿佐特王国的人造宝可梦玛机雅娜。据说在玛机雅娜体内，有被称为 “魂心”的未知力量，贪婪又邪恶的贾维斯企图利用这股力量来统治王国。小智和波尔凯尼恩将会如何化解彼此的嫌隙？波尔凯尼恩与玛机雅娜又有着怎样的渊源？他们要如何共同对抗贾维斯拯救阿佐特王国？玛机雅娜的最终命运又将如何结局？一场精灵宝可梦史上最伟大的战役即将展开！\n' +
          '          '
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .searchbox2_all
    width 980px
    height 214px
    float left
    margin-top 20px
    .searchbox2_all_box
      width 980px
      height 214px
      float left
      .searchbox2_all_img
        width 160px
        height 214px
        float left
        margin-right 20px
      .searchbox2_all_msg
        width 800px
        height 214px
        float left
        .searchbox2_all_msg_top
          width 800px
          height 24px
          float left
          margin-bottom 15px
          .searchbox2_all_msg_top_one
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
          .searchbox2_all_msg_top_two
            height 22px
            float left
            line-height 22px
            color #222
            font-weight 700
            max-width 600px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
          .searchbox2_all_msg_top_score
            max-width 75px
            height 44px
            float right
            .searchbox2_all_msg_top_score_grade
              color #ffa726
              font-size 20px
              text-align right
              margin-bottom 5px
            .searchbox2_all_msg_top_score_num
              font-size 14px
              text-align right
              color #222
        .searchbox2_all_msg_mid
          width 800px
          height 78px
          float left
          margin-bottom 21px
          .searchbox2_all_msg_mid_one
            width 800px
            height 16px
            float left
            margin-bottom 4px
            .searchbox2_all_msg_mid_one_left
              width 244px
              height 16px
              float left
              font-size 12px
              line-height 16px
            .searchbox2_all_msg_mid_one_right
              width 476px
              height 16px
              float left
              font-size 12px
              line-height 16px
          .searchbox2_all_msg_mid_two
            height 16px
            width 800px
            float left
            margin-bottom 4px
            .searchbox2_all_msg_mid_two_left
              width 244px
              height 16px
              float left
              font-size 12px
              line-height 16px
            .searchbox2_all_msg_mid_two_right
              width 476px
              height 16px
              float left
              font-size 12px
              line-height 16px
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
          .searchbox2_all_msg_mid_three
            width 800px
            height 40px
            line-height 20px
            font-size 12px
            margin-top 3px
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            overflow hidden
        .searchbox2_all_msg_bottom
          width 800px
          height 34px
          float left
          padding-top 42px
          .searchbox2_all_msg_bottom_button
            width 110px
            height 32px
            line-height 32px
            float left
            cursor pointer
            border 1px solid #00a1d6
            text-align center
            color #00a1d6
            font-size 14px
            border-radius 4px
            &:hover{
              color #fff
              background-color #00a1d6
            }
</style>
