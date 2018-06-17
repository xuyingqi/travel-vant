<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      weekendList: {
        type: Array
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/styles/mixins.styl'
  .title
    font-size: 14px
    padding: 10px
    background: #ddd
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: 2px
    .item-title
      line-height: 27px
      font-size: 16px
      ellipsis()
    .item-desc
      line-height: 20px
      color: #ccc
      ellipsis()
</style>
