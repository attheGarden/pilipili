<template>
    <div class="index_all">
      <header_part></header_part>
      <index_parts_ style=""></index_parts_>
      <div style="width: 100%;height: 392px;float: left">
        <footer_part></footer_part>
      </div>
    </div>
</template>

<script>
import indexParts from './indexParts.vue'
import headerpart_ from './component/header'
import footer_ from './component/footer.vue'
export default {
  components: {
    footer_part: footer_,
    header_part: headerpart_,
    index_parts_: indexParts
  },
  data () {
    return {
      isLoginPop: false
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index_all
    width 100%
    padding 0
    margin:0
    border: 0
</style>
