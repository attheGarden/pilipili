<template>
    <div class="index_part_all">
      <div class="index_part_left">
        <div class="index_part_left_top_box">
          <div class="index_part_left_top">
            <a style="display: block;float: left; height: 24px;margin-right: 20px;color: rgb(34,34,34);
              cursor: pointer;font-size: 24px">
              {{this.temp_tag}}
            </a>
            <a :class="{index_part_menu_item_on: flags.index_menu_flag.haveNew,
            index_part_menu_item: !(flags.index_menu_flag.haveNew)}" @click="change_menu_item(0)">有新动态</a>
            <a :class="{index_part_menu_item_on: flags.index_menu_flag.theNew,
            index_part_menu_item: !(flags.index_menu_flag.theNew)}" @click="change_menu_item(1)">最新投稿</a>
            <a style="display: block;float: right;height: 45px;font-size: 12px" class="index_part_left_top_buttons">
              <a style="display: block;float: left" class="index_part_left_top_button1">
                <i class="iconfont" style="font-size: 18px;color: black;display: block;float: left">&#xe7b1;</i>
                <i style="font-style: normal;color: black;display: block;float: left;padding-left: 4px">2252条新动态</i>
              </a>
              <a style="display: block;float: left" class="index_part_left_top_button2">
                <i style="display: block;float: left;font-style: normal;">更多</i>
                <i class="iconfont" style="display: block;float: left;font-size: 14px">&#xe62d;</i>
              </a>
            </a>
          </div>
        </div>
        <div class="index_part_left_bottom">
          <div class="index_part_left_bottom_item" v-for="(item, index) in temp_data" :key="index">
            <div class="index_part_left_bottom_item_img">
              <img :src="item.logo" width="160px" height="100px"/>
            </div>
            <div class="index_part_left_bottom_item_msg">
              <div class="part_left_bottom_item_title" :title="item.name">{{item.name}}</div>
              <div class="part_left_bottom_item_play">
                <a style="display: block;float: left;width: 80px">
                  <i class="iconfont" style="font-size: 12px;color: rgb(153, 162, 170);">&#xe72b;</i>
                  <i style="font-size: 12px; color: rgb(153, 162, 170); font-style: normal">{{item.playnum}}</i>
                </a>
                <a style="display: block;float: right;width: 80px">
                  <i class="iconfont" style="font-size: 12px;color: rgb(153, 162, 170);">&#xe665;</i>
                  <i style="font-size: 12px; color: rgb(153, 162, 170); font-style: normal">{{item.commentnum}}</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index_part_right">
        <div class="index_part_right_rank_menu">
          <a style="display: block;float: left;width: 36px;height: 24px;font-size: 18px;color: black">排行</a>
          <a :class="{index_part_right_rank_menu_item: !(flags.index_menu_flag.allRank),
            index_part_right_rank_menu_item_on: flags.index_menu_flag.allRank}" @click="change_part_rank(0)">
            全部
          </a>
          <a :class="{index_part_right_rank_menu_item: !(flags.index_menu_flag.yRank),
          index_part_right_rank_menu_item_on: flags.index_menu_flag.yRank}" @click="change_part_rank(1)">
            原创
          </a>
        </div>
        <div class="index_part_right_rank">
          <div class="rank_first">
            <div style="width: 25px;height: 50px;float: left">
              <div style="padding: 0 3px; float: left;width: 12px; height: 18px;line-height: 18px;
                    text-align: center;background-color: rgb(242,93,142);border-radius: 4px;font-size: 12px;
                    font-weight: 700;color: #fff">
                1
              </div>
            </div>
            <div style="float: left; width: 235px; height: 50px">
              <div style="float: left;width: 80px; height: 50px;margin-right: 5px">
                <img :src="animation_imgs.rank[0].logo" width="80px" height="50px"/>
              </div>
              <div style="width: 150px;height: 50px;float: left">
                <div style="width: 150px;height: 36px;float: left;margin-top: -3px;line-height: 18px;color: rgb(34,34,34);
                  cursor: pointer;font-size: 12px;overflow: hidden" :title="animation_imgs.rank[0].name">
                  {{animation_imgs.rank[0].name}}
                </div>
                <div style="float: left;width: 150px;height: 12px;margin-top: 5px;color: rgb(153,162,170);font-size: 12px">
                  {{animation_imgs.rank[0].score}}
                </div>
              </div>
            </div>
          </div>
          <div class="rank_item" v-for="(item, index) in animation_imgs.rank" v-if="index>0" :key="index">
            <div style="float: left;width: 25px;height: 18px">
              <div style="padding: 0 3px; float: left;width: 12px; height: 18px;line-height: 18px;
                    text-align: center;background-color: rgb(242,93,142);border-radius: 4px;font-size: 12px;
                    font-weight: 700;color: #fff">
                {{index+1}}
              </div>
            </div>
            <div style="float: left;width: 235px;height: 18px;line-height: 18px;overflow: hidden;
              font-size: 12px" :title="item.name">
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="index_part_right_rank_more">
          <i style="display: block;margin: 0 auto;color: rgb(34,34,34);font-size: 12px;font-style: normal;
            line-height: 24px">
            查看更多
            <i class="iconfont" style="font-size: 14px">&#xe62d;</i>
          </i>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'indexPart',
  props: {
    id: 0,
    tag_id: 0
  },
  data () {
    return {
      flags: {
        index_menu_flag: {
          haveNew: true,
          theNew: false,
          allRank: true,
          yRank: false
        }
      },
      data_id: 0,
      temp_imgs: [],
      temp_rank: [],
      part_data: {
        item_img: {
          haveNew_img: [
            {
              img: 'https://i2.hdslb.com/bfs/archive/1b5f5affc3b8ec11c053b7c19a07696065083823.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i2.hdslb.com/bfs/archive/7ed8fab813d25f34a0d0b5170ebd63a665ab0ca5.jpg@160w_100h.webp',
              title: '叶修，我回来了（全程打戏无观众解说）一次打个(｡･∀･)ﾉﾞ嗨',
              plays: '1.5万',
              danmu: '39'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/a3658139adc0cfef8526aad20d503f497ee135a9.jpg@160w_100h.webp',
              title: '【毒奶时刻】第18期 ！啦线出姆吉',
              plays: '26.5万',
              danmu: '389'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/139eff2d38db1f27c644960bcbfa27581eb5337a.jpg@160w_100h.webp',
              title: '神超教你用什么打诺手,一级诺手被打的上头直接交双招上来A！',
              plays: '1.7万',
              danmu: '679'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/82b95d150025813aa9769a8940cebdaf6ce35766.jpg@160w_100h.webp',
              title: '德云色街机游戏：西卡”李二层“是男人就下100层的个人秀',
              plays: '15.5万',
              danmu: '389'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/70dcd96116574d976c7210710059ce27426cc832.jpg@160w_100h.webp',
              title: '【阴阳师】永动玉藻前无限堕天伪神 （仅供娱乐）',
              plays: '85.5万',
              danmu: '254'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/ed0bf5f7e2e7ed68efa22501ebb55000a7279f4e.jpg@160w_100h.webp',
              title: '各大解说版本春季赛 2019.05.26  eStarPro VS RW侠（不灭星辰 VS ）',
              plays: '8.5万',
              danmu: '456'
            },
            {
              img: 'https://i2.hdslb.com/bfs/archive/7ed8fab813d25f34a0d0b5170ebd63a665ab0ca5.jpg@160w_100h.webp',
              title: '叶修，我回来了（全程打戏无观众解说）一次打个(｡･∀･)ﾉﾞ嗨',
              plays: '1.5万',
              danmu: '39'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/a3658139adc0cfef8526aad20d503f497ee135a9.jpg@160w_100h.webp',
              title: '【毒奶时刻】第18期 ！啦线出姆吉',
              plays: '26.5万',
              danmu: '389'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/504768a66d134a98145edb83f55a5711bdd721e3.jpg@160w_100h.jpg',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            }
          ],
          theNew_img: [
            {
              img: 'https://i2.hdslb.com/bfs/archive/19c5206f69a55c566c7126894cf004b93ffe7cdf.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/75fc9e2a0bf6b8998123f706dc840d2d789c34f1.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i2.hdslb.com/bfs/archive/19c5206f69a55c566c7126894cf004b93ffe7cdf.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/75fc9e2a0bf6b8998123f706dc840d2d789c34f1.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i2.hdslb.com/bfs/archive/19c5206f69a55c566c7126894cf004b93ffe7cdf.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/75fc9e2a0bf6b8998123f706dc840d2d789c34f1.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i2.hdslb.com/bfs/archive/19c5206f69a55c566c7126894cf004b93ffe7cdf.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/75fc9e2a0bf6b8998123f706dc840d2d789c34f1.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i2.hdslb.com/bfs/archive/19c5206f69a55c566c7126894cf004b93ffe7cdf.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            },
            {
              img: 'https://i0.hdslb.com/bfs/archive/75fc9e2a0bf6b8998123f706dc840d2d789c34f1.jpg@160w_100h.webp',
              title: '炫神：1v4四杀亚索，我就是众多主播的结合体，这就是杀人王8？',
              plays: '12.5万',
              danmu: '389'
            }
          ]
        },
        item_rank: {
          allRank: [
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '史上最粪！50w人打出0分！无人超越的史诗级差评动画！看完后up主只想口吐芬芳！',
              grade: '综合评分：97.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '史上最粪！50w人打出0分！无人超越的史诗级差评动画！看完后up主只想口吐芬芳！',
              grade: '综合评分：97.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '史上最粪！50w人打出0分！无人超越的史诗级差评动画！看完后up主只想口吐芬芳！',
              grade: '综合评分：97.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            }
          ],
          rank1: [
            {
              img: 'https://i1.hdslb.com/bfs/archive/5ce272cfea7611bec447e6e4c5f45bfa87a9b325.jpg@80w_50h.webp',
              title: '阿斯加德哈克斯静待花开的史诗级差评动画！看完后up主只想口吐芬芳！',
              grade: '综合评分：97.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '史上最粪！50w人打出0分！无人超越的史诗级差评动画！看完后up主只想口吐芬芳！',
              grade: '综合评分：97.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '史上最粪！50w人打出0分！无人超越的史诗级差评动画！看完后up主只想口吐芬芳！',
              grade: '综合评分：97.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            },
            {
              img: 'https://i1.hdslb.com/bfs/archive/aa4e65176f7ba56ba6272de6d843ec4196c293cb.jpg@80w_50h.webp',
              title: '带好耳机，前方高能！无缝衔接 为信仰而战！【混剪/踩点/1080P】 播放:538133 3:31',
              grade: '综合评分：80.5万'
            }
          ]
        }
      },
      temp_data: [],
      temp_tag: '',
      animation_imgs: {
        new_img: [],
        rank: []
      }
    }
  },
  created () {
    this.temp_imgs = this.part_data.item_img.haveNew_img
    this.temp_rank = this.part_data.item_rank.allRank
    axios({
      method: 'get',
      url: '/api/video/get_latest',
      params: {
        tag_id: this.id,
        number: 10
      }
    }).then(res => {
      console.log(res)
      this.temp_data = res.data.data.videos
      this.temp_tag = res.data.data.tag
    }).catch(error => {
      console.log(error)
    })

    // 获取rank
    axios({
      method: 'get',
      url: '/api/video/get_rank',
      params: {
        tag_id: this.tag_id,
        number: 7
      }
    }).then(res => {
      // console.log(res.data.data)
      this.animation_imgs.rank = res.data.data.videos
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    change_menu_item (num) {
      if (num === 0) {
        this.flags.index_menu_flag.haveNew = true
        this.flags.index_menu_flag.theNew = false
        this.temp_imgs = this.part_data.item_img.haveNew_img
      }
      if (num === 1) {
        this.flags.index_menu_flag.haveNew = false
        this.flags.index_menu_flag.theNew = true
        this.temp_imgs = this.part_data.item_img.theNew_img
      }
    },
    change_part_rank (num) {
      if (num === 0) {
        this.flags.index_menu_flag.allRank = true
        this.flags.index_menu_flag.yRank = false
        this.temp_rank = this.part_data.item_rank.allRank
      }
      if (num === 1) {
        this.flags.index_menu_flag.allRank = false
        this.flags.index_menu_flag.yRank = true
        this.temp_rank = this.part_data.item_rank.rank1
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index_part_all
    width 1160px
    height 381px
    padding-bottom 30px
    float left
    .index_part_left
      width 900px
      height 381px
      float left
      .index_part_left_top_box
        width 880px
        height 45px
        float left
        padding-right 20px
        .index_part_left_top
          width 880px
          height 30px
          float left
          padding-bottom 15px
          .index_part_menu_item
            font-size 12px
            width 48px
            height 20px
            line-height 20px
            padding 1px 0 3px 0
            margin 0 4px
            color rgb(34,34,34)
          .index_part_menu_item_on
            font-size 12px
            width 48px
            height 20px
            line-height 20px
            margin 0 4px
            padding 1px 0 1px 0
            color rgb(0,161,214)
            border-bottom 2px solid rgb(0,161,214)
          .index_part_left_top_buttons
            .index_part_left_top_button1
              height 22px
              padding 0 10px
              margin-top 3px
              border 1px solid rgb(204, 208,215)
              border-radius 4px
              line-height 22px
              &:hover{
                background-color rgb(204,208,215)
              }
            .index_part_left_top_button2
              height 22px
              margin-top 3px
              margin-left 10px
              padding 0 10px
              border 1px solid rgb(204, 208,215)
              border-radius 4px
              line-height 22px
              &:hover{
                background-color rgb(204,208,215)
              }
      .index_part_left_bottom
        float left
        width 900px
        height 336px
        .index_part_left_bottom_item
          width 160px
          height 148px
          float left
          margin-bottom 20px
          margin-right 20px
          .index_part_left_bottom_item_img
            width 160px
            height 100px
            float left
            overflow hidden
          .index_part_left_bottom_item_msg
            width 160px
            height 40px
            padding-top 8px
            float left
            .part_left_bottom_item_title
              float left
              width 100%
              height 20px
              line-height 20px
              overflow hidden
              font-size 12px
              color rgb(34,34,34)
              cursor pointer
            .part_left_bottom_item_play
              width 100%
              float left
              height 20px
              cursor pointer
    .index_part_right
      width 260px
      height 381px
      float left
      .index_part_right_rank_menu
        float left
        width 260px
        height 24px
        color black
        font-size 12px
        .index_part_right_rank_menu_item
          display: block
          float left
          width 24px
          height 20px
          color rgb(34,34,34)
          padding 1px 0 3px 0
          margin-left 15px
          margin-right 10px
        .index_part_right_rank_menu_item_on
          display: block
          float left
          width 24px
          height 20px
          padding 1px 0 2px 0
          border-bottom 1px solid rgb(0, 161, 214)
          margin-left 15px
          margin-right 10px
          color rgb(0, 161, 214)
      .index_part_right_rank
        float left
        width 260px
        height 278px
        padding 20px 0 15px 0
        .rank_first
          width 260px
          height 50px
          float left
        .rank_item
          float left
          width 260px
          height 18px
          margin-top 20px
      .index_part_right_rank_more
        float left
        width 258px
        height 24px
        background-color rgb(229, 233, 239)
        border 1px solid rgb(224, 230, 237)
        border-radius 4px
        cursor pointer
        text-align center
</style>
