<template>
  <div>
    <div
      class="item"
      v-for="(item, index) in catagoryList"
      :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <list :catagoryList="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'list', // 用于递归组件
    props: {
      catagoryList: {
        type: Array
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/styles/mixins.styl'
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    ellipsis()
  .item-children
    padding: 0 .2rem
</style>
