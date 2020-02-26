<template>
    <div class="fjPart_all">
      <div class="fjPart_all_item" v-for="(item, index) in bangumiData" :key="index">
        <search_box1 :searchbox1_data="item"></search_box1>
      </div>
    </div>
</template>

<script>
import searchbox1 from './searchbox1'
// import axios from 'axios'
export default {
  name: 'fjPart',
  props: {
    bangumiData: []
  },
  components: {
    search_box1: searchbox1
  },
  data () {
    return {
      fj_data: []
    }
  },
  created () {
    // console.log(this.bangumiData)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fjPart_all
    float left
    margin-top 10px
    min-height 600px
    width 980px
    .fjPart_all_item
      width 980px
      height 270px
      float left
      border-bottom 1px solid rgb(229, 233, 239)
</style>
