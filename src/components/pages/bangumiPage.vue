<template>
    <div class="bangumiPage_all">
      <header_2_part></header_2_part>
      <div class="bangumiPage_all_top_box">
        <div class="bangumiPage_top_wrap" :style="{backgroundImage: 'url(' + bangumidata.logo + ')', backgroundSize:'cover', backgroundRepeat: 'no-repeat',
          backgroundPositionX: '50%', backgroundPositionY: '50%'}">
        </div>
        <div class="bangumiPage_top_content_box">
          <div class="bangumiPage_top_content">
            <div class="bangumiPage_top_img">
              <img :src="bangumidata.logo" width="225px" height="300px"/>
            </div>
            <div class="bangumiPage_top_msg_top">
              <div class="bangumiPage_top_msg_top_title">{{bangumidata.name}}</div>
              <div class="bangumiPage_top_msg_top_col">
                <div style="height: 34px;float: left;padding-top: 30px;line-height: 12px;font-size: 12px;text-align: left">
                  <div style="padding-right: 20px;float: left;border-right: 1px solid #fff;margin-right: 20px;">
                    <div style="margin-bottom: 5px;float: left;font-weight: 700">总播放数</div>
                    <br>
                    <span style="font-weight: 700">{{bangumidata.playnum}}</span>
                  </div>
                  <div style="padding-right: 20px;float: left;border-right: 1px solid #fff;margin-right: 20px;">
                    <div style="margin-bottom: 5px;float: left;font-weight: 700">追番人数</div>
                    <br>
                    <span style="font-weight: 700">{{bangumidata.fannum}}</span>
                  </div>
                  <div style="padding-right: 20px;float: left;margin-right: 20px;">
                    <div style="margin-bottom: 5px;float: left;font-weight: 700">弹幕总数</div>
                    <br>
                    <span style="font-weight: 700">{{bangumidata.commentnum}}</span>
                  </div>
                </div>
                <div style="width: 190px;height: 40px;float: right;margin-top: 30px">
                  <div style="float: left;width: 40px;height: 60px;color: rgb(255, 167, 38);font-size: 36px;line-height: 36px;
                    text-align: center">
                    {{value*2}}
                  </div>
                  <div style="height: 36px;float: right;width: 130px">
                    <el-rate
                      v-model="value"
                      disabled>
                    </el-rate>
                    <div style="float: left;font-size: 14px;color: #fff;margin-top: 4px">110人点评</div>
                  </div>
                </div>
              </div>
              <div class="bangumiPage_top_msg_top_time">开播时间：{{bangumidata.start_date}}</div>
              <div class="bangumiPage_top_msg_top_info">简介：{{bangumidata.info}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bangumiPage_all_bottom_box">
        <div style="width: 100%;float: left;height: 60px;margin-bottom: 11px;background-color: #fff">
          <div style="width: 1100px;height: 61px;margin: 0 auto;font-size: 16px;line-height: 61px;color: #000000">
            作品详情
          </div>
        </div>
        <div class="bangumiPage_all_bottom">
          <div class="bangumiPage_all_bottom_left">
            <div class="bangumiPage_all_bottom_left_box">
              <div class="bangumiPage_all_bottom_left_bangumi">
                <div style="width: 100%;height: 25px;line-height: 25px;" class="bangumiPage_all_bottom_left_bangumi_title">
                  <div style="float: left;margin-right: 20px">正片</div>
                  <div class="bangumiPage_all_index">
                    <div class="bangumiPage_bangumi_index_on">第1话-第6话</div>
                    <div class="bangumiPage_bangumi_index_not" v-if="bangumidata.total>7">第7话-第12话</div>
                    <div class="bangumiPage_bangumi_index_not" v-if="bangumidata.total>13">第13话-第18话</div>
                    <div class="bangumiPage_bangumi_index_not" v-if="bangumidata.total>18">第18话-第23话</div>
                    <div class="bangumiPage_bangumi_index_not" v-if="bangumidata.total>24">第24话-第29话</div>
                  </div>
                </div>
                <div class="bangumiPage_all_bottom_left_bangumi_all">
                  <div style="width: 203px;height: 58px;float: left;margin: 0 20px 20px 0;background-color: rgb(244,245,247);
                  border: 1px solid rgb(244,245,247);border-radius: 4px" v-for="(item, index) in bangumidata.episodes" :key="index" v-if="(item.piece === (index+1)) && (index<6)">
                    <div style="width: 96px;height: 60px;margin-top: -1px;float: left" @click="goPlay(item.id)">
                      <img :src="item.logo" width="96px" height="60px"/>
                    </div>
                    <div style="width: 88px;height: 38px;float: left;margin-left: 10px">
                      <div style="padding-top: 5px;color: rgb(45,45,45);cursor: pointer;font-size: 12px;height: 16px;line-height: 16px;
                      width: 100%">
                        第{{item.piece}}话
                      </div>
                      <div style="color: rgb(109, 117, 122);font-size: 12px;height: 32px;line-height: 16px;
                      overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2" :title="item.name">
                        {{item.name}}
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bangumiPage_all_bootoom_left_more">
                <div style="width: 100%;height: 24px;line-height: 24px;color: rgb(34,34,34);font-size: 18px;font-weight: 700;
                float: left">
                  更多推荐
                </div>
                <div style="width: 720px;height: 258px;float: left">
                  <div style="width: 160px;height: 258px;float: left;margin-right: 20px" v-for="(item, index) in moreBangumi" :key="index">
                    <div style="width: 160px;margin-top: 20px;float: left">
                      <img :src="item.logo" width="160px" height="214px"/>
                    </div>
                    <div style="width: 160px;height: 24px">
                      <div style="width: 160px;overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;
                        font-size: 12px;color: rgb(34,34,34);height: 16px;line-height: 16px" :title="item.name">
                        {{item.name}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bangumiPage_all_bottom_right">
            <div class="bangumiPage_all_bottom_right_top">
              <div style="width: 310px;height: 24px;line-height: 24px;float: left;color: black;font-size: 18px;
              font-weight: 700;margin-bottom: 6px">
                角色声优
              </div>
              <div style="line-height: 24px;width: 100%;float: left">
                暂无更多信息
              </div>
            </div>
            <div class="bangumiPage_all_bottom_right_bottom">
              <div style="width: 310px;height: 24px;line-height: 24px;float: left;color: black;font-size: 18px;
              font-weight: 700;margin-bottom: 6px">
                STAFF
              </div>
              <div style="width: 310px;height: 192px;float: left;font-size: 14px;line-height: 24px;color: rgb(34,34,34)">
                导演: 下山真吾
                <br>
                脚本: 秋山幸夫
                <br>
                製作: テレビ東京
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%;height: 392px;float: left">
        <footer_part></footer_part>
      </div>
    </div>
</template>

<script>
import header2 from '../component/header2'
import footer_ from '../component/footer'
import axios from 'axios'
export default {
  name: 'bangumiPage',
  components: {
    header_2_part: header2,
    footer_part: footer_
  },
  data () {
    return {
      bangumi_id: 0,
      value: '4.2',
      bangumidata: {
        logo: 'https://i0.hdslb.com/bfs/bangumi/451037aabcdce0379752e087720673609894161a.png',
        name: '辉夜大小姐想让我告白~天才们的恋爱头脑战~',
        playnum: '1.1亿',
        fannum: '389.5万',
        commentnum: '1000',
        start_time: '2019-01-13',
        info: '家庭背景与人品都很棒！！一大群有前途的秀才所聚集的秀知院学园！！在那里的学生会相遇的副会长·四宫辉夜与会长·白银御行原本应该是彼此受到了对方吸引…但想不到都过半年了却仍然什么事情也没发生！！最麻烦的是这两个自尊心超强、无法坦率的家伙，居然开始想着要“设法让对方向自己告白”！？\\n直到恋情有下落之前会很欢乐的故事！！新感觉“斗智”爱情喜剧、就此开战！！',
        total: 12,
        episodes: [
          {
            id: 1101,
            is_bangumi: true,
            logo: 'https://i0.hdslb.com/bfs/archive/02fd2fec265e310b6106248e534fe9fe30407ffa.jpg',
            name: '想被邀请看电影 / 无法阻止的辉夜大小姐 / 辉夜大小姐想品尝',
            piece: 1
          },
          {
            id: 1101,
            is_bangumi: true,
            logo: 'https://i0.hdslb.com/bfs/archive/02fd2fec265e310b6106248e534fe9fe30407ffa.jpg',
            name: '想被邀请看电影 / 无法阻止的辉夜大小姐 / 辉夜大小姐想品尝',
            piece: 2
          },
          {
            id: 1101,
            is_bangumi: true,
            logo: 'https://i0.hdslb.com/bfs/archive/02fd2fec265e310b6106248e534fe9fe30407ffa.jpg',
            name: '想被邀请看电影 / 无法阻止的辉夜大小姐 / 辉夜大小姐想品尝',
            piece: 3
          },
          {
            id: 1101,
            is_bangumi: true,
            logo: 'https://i0.hdslb.com/bfs/archive/02fd2fec265e310b6106248e534fe9fe30407ffa.jpg',
            name: '想被邀请看电影 / 无法阻止的辉夜大小姐 / 辉夜大小姐想品尝',
            piece: 4
          },
          {
            id: 1101,
            is_bangumi: true,
            logo: 'https://i0.hdslb.com/bfs/archive/02fd2fec265e310b6106248e534fe9fe30407ffa.jpg',
            name: '想被邀请看电影 / 无法阻止的辉夜大小姐 / 辉夜大小姐想品尝',
            piece: 5
          },
          {
            id: 1101,
            is_bangumi: true,
            logo: 'https://i0.hdslb.com/bfs/archive/02fd2fec265e310b6106248e534fe9fe30407ffa.jpg',
            name: '想被邀请看电影 / 无法阻止的辉夜大小姐 / 辉夜大小姐想品尝',
            piece: 6
          },
          {
            id: 1101,
            is_bangumi: true,
            logo: 'https://i0.hdslb.com/bfs/archive/02fd2fec265e310b6106248e534fe9fe30407ffa.jpg',
            name: '想被邀请看电影 / 无法阻止的辉夜大小姐 / 辉夜大小姐想品尝',
            piece: 7
          }
        ]
      },
      moreBangumi: [
        {
          name: '辉夜大小姐想让我告白~天才们的恋爱头脑战',
          logo: 'https://i0.hdslb.com/bfs/bangumi/4d9f43eb3dba572797f8915f8f28efce9e58d756.jpg@320w_428h.webp'
        },
        {
          name: '刀剑神域 Alicization',
          logo: 'https://i0.hdslb.com/bfs/bangumi/451037aabcdce0379752e087720673609894161a.png@320w_428h.webp'
        },
        {
          name: '刀剑神域 Alicization',
          logo: 'https://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png@320w_428h.webp'
        },
        {
          name: '刀剑神域 Alicization',
          logo: 'https://i0.hdslb.com/bfs/bangumi/4d9f43eb3dba572797f8915f8f28efce9e58d756.jpg@320w_428h.webp'
        }
      ]
    }
  },
  created () {
    this.bangumi_id = this.$route.query.Aid
    // console.log(this.bangumi_id)
    axios({
      method: 'get',
      url: '/api/bangumi/get_one',
      params: {
        id: this.bangumi_id
      }
    }).then(res => {
      console.log(res)
      this.bangumidata = res.data.data
      this.value = res.data.data.grade
      // this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })
    // 番剧推荐
    axios({
      method: 'get',
      url: '/api/bangumi/get_recommend'
    }).then(res => {
      console.log(res)
      this.moreBangumi = res.data.data.bangumis
      // this.temp_animotion = res.data.data.animations
      // console.log(this.temp_animotion[0].logo)
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    goPlay (id) {
      this.$router.push({path: '/videoPlay', query: {videoId: id, tagId: 2}})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bangumiPage_all
    width 100%
    .bangumiPage_all_top_box
      width 100%
      height 391px
      float left
      .bangumiPage_top_wrap
        width 100%
        height 391px
        float left
        bwidth:100%
        -webkit-filter:blur(15px)
        -moz-filter:blur(15px)
        -o-filter:blur(10px)
        -ms-filter:blur(10px)
        filter: blur(10px)
      .bangumiPage_top_content_box
        background-color rgba(0, 0, 0, 0.4)
        float left
        width 100%
        height 391px
        position relative
        top -391px
        .bangumiPage_top_content
          width 1100px
          height 309px
          padding-top 44px
          padding-bottom 38px
          margin 0 auto
          .bangumiPage_top_img
            width 225px
            height 300px
            border 4px solid #fff
            border-radius 8px
            float left
          .bangumiPage_top_msg_top
            width 792px
            height 229px
            margin-left 25px
            color #ffffff
            float left
            .bangumiPage_top_msg_top_title
              width 100%
              height 26px
              line-height 26px
              font-size 20px
              font-weight 700
              float left
            .bangumiPage_top_msg_top_col
              width 100%
              height 60px
              float left
            .bangumiPage_top_msg_top_time
              width 100%
              height 17px
              margin-top 28px
              font-size 12px
              float left
            .bangumiPage_top_msg_top_info
              width 100%
              height 87px
              margin-top 11px
              line-height 20px
              font-size 12px
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 3
              overflow hidden
              float left
    .bangumiPage_all_bottom_box
      width 100%
      min-height 850px
      background-color rgb(244, 245, 247)
      padding-bottom 20px
      float left
      .bangumiPage_all_bottom
        width 1100px
        min-height 850px
        margin 0 auto
        .bangumiPage_all_bottom_left
          width 740px
          min-height 750px
          color #000
          background-color #fff
          float left
          .bangumiPage_all_bottom_left_box
            width 700px
            min-height 730px
            padding 20px
            float left
            .bangumiPage_all_bottom_left_bangumi
              width 700px
              height 215px
              float left
              .bangumiPage_all_bottom_left_bangumi_title
                .bangumiPage_all_index
                  width 550px
                  height 25px
                  float left
                  .bangumiPage_bangumi_index_on
                    height 20px
                    margin-top 2px
                    margin-right 30px
                    border-bottom 1px solid #00a1d6
                    color #00a1d6
                    float left
                    font-size 12px
                  .bangumiPage_bangumi_index_not
                    height 20px
                    margin-top 2px
                    margin-right 30px
                    color #222
                    float left
                    font-size 12px
              .bangumiPage_all_bottom_left_bangumi_all
                width 720px
                height 160px
                margin-top 20px
                float left
            .bangumiPage_all_bootoom_left_more
              width 700px
              height 282px
              float left
              padding-top 20px
              margin-top 20px
              border-top 1px solid rgb(229,233,239)
        .bangumiPage_all_bottom_right
          width 350px
          min-height 558px
          color #000
          margin-left 10px
          float left
          .bangumiPage_all_bottom_right_top
            width 310px
            height 234px
            padding 20px
            background-color #ffffff
            float left
          .bangumiPage_all_bottom_right_bottom
            width 310px
            height 234px
            padding 20px
            margin-top 10px
            background-color #ffffff
            float left
</style>
