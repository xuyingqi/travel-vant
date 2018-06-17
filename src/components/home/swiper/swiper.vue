<template>
  <div class="wrapper">
    <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, index) in swiperList" :key="index">
      <img :src="item.imgUrl" width="100%"/>
    </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      swiperList: {
        type: Array
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
