<template>
  <div class="header">
    <!--<van-icon name="arrow-left"/>-->
    <van-search placeholder="输入城市、景点、游玩主体" background="transparent"/>
    <router-link to="./city">
      <div class="header-right">{{this.city}}<span class="icon-arrow_bottom"></span></div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles.styl"
  .van-search >>> .van-cell
    padding-left: 50px
  .header
    display: flex
    background: $bgColor
    color: $white
    .van-search
      flex: 1
      padding: 8px
    .header-right
      min-width: 62px
      line-height: 42px
      font-size: 10px
      color: #fff
</style>
