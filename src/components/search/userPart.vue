<template>
    <div class="userPart_all">
      <search_box4></search_box4>
    </div>
</template>

<script>
import searchbox4 from './searchbox4'
export default {
  name: 'userPart',
  components: {
    search_box4: searchbox4
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .userPart_all
    float left
</style>
