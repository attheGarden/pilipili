<template>
  <div class="container">
    <div style="float: left;width: 100%;height: 98px;margin: 20px 0 10px;">
      <div style="width: 48px;height: 48px;float: left;margin-top: 7px;margin-left: 5px;border-radius: 50%;overflow: hidden">
        <img src="https://i0.hdslb.com/bfs/face/616090dda152f3c5f5615abed95be136565ae306.jpg@72w_72h.webp" width="48px" height="48px"/>
      </div>
      <div style="width: 856px;height: 53px;padding: 5px 10px;float: left;margin-left: 10px">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
      <div style="width: 38px;height: 54px;line-height: 27px;text-align: center;padding: 4px 15px;background-color: rgb(0, 161, 214);
      color: #ffffff;float: right;border-radius: 5px;font-size: 14px;cursor: pointer" @click="addComment">
        发表评论
      </div>
    </div>
    <div class="comment" v-for="(item, index) in comments" :key="index">
      <div class="info">
        <img class="avatar" :src="item.user.face" width="36" height="36"/>
        <div class="right">
          <div class="name">{{item.user.name}}</div>
          <div class="date">{{item.create_time}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont">&#xe60d;</i>
          <span class="like-num">{{item.fannum > 0 ? item.fannum + '人赞' : '赞'}}</span>
        </span>
        <span class="comment-reply" @click="showCommentInput1(item, index)">
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="(reply, index1) in item.reply_comments" :key="index1">
          <div class="reply-content">
            <span class="from-name">{{reply.user.name}}</span><span>: </span>
            <span class="to-name" v-if="reply.reply_user === null">@{{item.user.name}}</span>
            <span class="to-name" v-if="reply.reply_user !== null">@{{reply.reply_user.name}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.create_time}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply, index, index1)">
              <span>回复</span>
            </span>
          </div>
        </div>
        <transition name="fade">
        <div class="input-wrapper" v-if="showItemId === item.id">
          <el-input class="gray-bg-input"
                    v-model="inputComment"
                    type="textarea"
                    :rows="3"
                    autofocus
                    placeholder="写下你的评论">
          </el-input>
          <div class="btn-control">
            <span class="cancel" @click="cancel">取消</span>
            <el-button class="btn" type="success" round @click="commitComment">确定</el-button>
          </div>
        </div>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'commentPart',
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  components: {},
  data () {
    return {
      comments_: [],
      inputComment: '',
      showItemId: '',
      reply_index: 0,
      reply_data1: {
        content: '',
        create_time: '2019-06-03 20:06:01',
        id: 9,
        reply_user: null,
        user: {
          face: 'http://i0.hdslb.com/bfs/face/216d7ccd1c907fa596de721221a2c227f06b5a74.jpg',
          fannum: '0',
          follownum: '1',
          gender: 0,
          id: 94,
          info: '这个人比较懒，没有留下任何信息╮(︶﹏︶)╭',
          name: '吴超'
        }
      },
      reply_data2: {
        content: '',
        create_time: '2019-06-03 20:06:01',
        id: 9,
        reply_user: {
          face: 'http://i0.hdslb.com/bfs/face/216d7ccd1c907fa596de721221a2c227f06b5a74.jpg',
          fannum: '0',
          follownum: '1',
          gender: 0,
          id: 94,
          info: '这个人比较懒，没有留下任何信息╮(︶﹏︶)╭',
          name: '吴超'
        },
        user: {
          face: 'http://i0.hdslb.com/bfs/face/216d7ccd1c907fa596de721221a2c227f06b5a74.jpg',
          fannum: '0',
          follownum: '1',
          gender: 0,
          id: 94,
          info: '这个人比较懒，没有留下任何信息╮(︶﹏︶)╭',
          name: '狼洲'
        }
      },
      reply_data_index: 0,
      parent_id_: 0,
      root_id_: 0,
      textarea: ''
    }
  },
  computed: {},
  methods: {
    /**
     * 点赞
     */
    likeClick (item) {
      if (item.isLike === null) {
        Vue.$set(item, 'isLike', true)
        item.likeNum++
      } else {
        if (item.isLike) {
          item.likeNum--
        } else {
          item.likeNum++
        }
        item.isLike = !item.isLike
      }
    },

    /**
     * 点击取消按钮
     */
    cancel () {
      this.showItemId = ''
    },
    addComment () {
      console.log(this.textarea)
      axios({
        method: 'post',
        url: '/api/comment/add_comment',
        data: {
          video_id: 1001,
          content: this.textarea
        },
        transformRequest: [function (data) {
          // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        // console.log(res.data.data)
        alert('评论成功')
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    /**
     * 提交评论
     */
    commitComment () {
      this.reply_data2.content = this.inputComment
      // this.reply_data1.content = this.inputComment
      // console.log(this.reply_data1)
      console.log(this.parent_id_)
      axios({
        method: 'post',
        url: '/api/comment/add_comment',
        data: {
          video_id: 1001,
          content: this.reply_data2.content,
          parent_id: this.parent_id_,
          root_id: this.root_id_
        },
        transformRequest: [function (data) {
          // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        // console.log(res.data.data)
        // console.log(res)
      }).catch(error => {
        console.log(error)
      })
      this.inputComment = ''
      this.showItemId = ''
    },
    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput1 (item, index) {
      this.showItemId = item.id
      this.reply_index = index
      // console.log(this.reply_index)
      this.reply_data1.user.name = item.user.name
      this.reply_data2.reply_user.id = item.id
      this.parent_id_ = 0
      this.root_id_ = item.id
    },
    showCommentInput (item, reply, index, index1) {
      if (reply) {
        console.log(reply)
        this.reply_index = index
        this.reply_data_index = index1
        // console.log(this.reply_data_index)
        this.reply_data2.reply_user.name = reply.user.name
        this.parent_id_ = reply.id
        console.log(reply)
        this.root_id_ = item.id
        // if (reply.reply_user === null) {
        // } else {
        //   this.reply_data2.reply_user.name = reply.user.name
        //   this.reply_data2.reply_user.id = item.id
        // }
      } else {
        this.inputComment = ''
      }
      this.showItemId = item.id
      // console.log(this.reply_index)
    }
  },
  created () {
    // console.log(this.comments)
    this.comments_ = this.comments
    axios({
      method: 'get',
      url: '/api/comment/load_comment',
      params: {
        video_id: '1001',
        page: 1
      }
    }).then(res => {
      // console.log(res.data.data)
      console.log(res)
      this.comments = res.data.data.comments
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="scss">
  .container {
    padding: 0 10px;
    box-sizing: border-box;
    .comment {
      display: flex;
      float: left;
      width: 100%;
      flex-direction: column;
      padding: 10px;
      border-bottom: 1px solid #F2F6FC;
      .info {
        display: flex;
        align-items: center;
        .avatar {
          border-radius: 50%;
        }
        .right {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .name {
            font-size: 16px;
            color: #303133;
            margin-bottom: 5px;
            font-weight: 500;
          }
          .date {
            font-size: 12px;
            color: #909399;
          }
        }
      }
      .content {
        font-size: 16px;
        color: #303133;
        line-height: 20px;
        padding: 10px 0;
      }
      .control {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #909399;
        .like {
          display: flex;
          align-items: center;
          margin-right: 20px;
          cursor: pointer;
          &.active, &:hover {
            color: #303133;
          }
          .iconfont {
            font-size: 14px;
            margin-right: 5px;
          }
        }
        .comment-reply {
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            color: #333;
          }
          .iconfont {
            font-size: 16px;
            margin-right: 5px;
          }
        }

      }
      .reply {
        margin: 10px 0;
        padding-left: 40px;
        border-left: 2px solid #DCDFE6;
        .item {
          margin: 0 10px;
          padding: 10px 0;
          border-bottom: 1px dashed #EBEEF5;
          .reply-content {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #303133;
            .from-name {
              color: #303133;
            }
            .to-name {
              color: #409EFF;
              margin-left: 5px;
              margin-right: 5px;
            }
          }
          .reply-bottom {
            display: flex;
            align-items: center;
            margin-top: 6px;
            font-size: 12px;
            color: #909399;
            .reply-text {
              display: flex;
              align-items: center;
              margin-left: 10px;
              cursor: pointer;
              &:hover {
                color: #333;
              }
              .icon-comment {
                margin-right: 5px;
              }
            }
          }
        }
        .write-reply {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #909399;
          padding: 10px;
          cursor: pointer;
          &:hover {
            color: #303133;
          }
          .el-icon-edit {
            margin-right: 5px;
          }
        }
        .fade-enter-active, fade-leave-active {
          transition: opacity 0.5s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
        .input-wrapper {
          padding: 10px;
          .gray-bg-input, .el-input__inner {
            /*background-color: #67C23A;*/
          }
          .btn-control {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-top: 10px;
            .cancel {
              font-size: 16px;
              color: #606266;
              margin-right: 20px;
              cursor: pointer;
              &:hover {
                color: #333;
              }
            }
            .confirm {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
