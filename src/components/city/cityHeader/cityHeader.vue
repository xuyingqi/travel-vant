<template>
  <div class="city-header">
    <van-nav-bar
      title="城市选择"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
  export default {
    name: 'CityHeader',
    methods: {
      onClickLeft() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/styles/varibles.styl'
  .van-nav-bar >>> .van-icon
    font-size: 20px
    color: #fff
  .van-nav-bar
    height: 46px
    background: $bgColor
    color: #fff
  .van-hairline--bottom::after
    border-bottom-width: 0px
</style>
