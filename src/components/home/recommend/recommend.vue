<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item"
        v-for="item in recommendList"
        :key="item.id"
        :to="'./detail/' + item.id"
      >
        <van-card
          :title=item.title
          :desc=item.desc
          :thumb=item.imgUrl
        >
        </van-card>
        <van-button class="more-detail" size="small">查看详情</van-button>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      recommendList: {
        type: Array
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/mixins.styl"
  .recommend
    .title
      font-size: 14px
      padding: 10px
      background: #ddd
    .item
      position: relative
      .more-detail
        position: absolute
        bottom: 10px
        left: 110px
        width: 90px
        line-height: 26px
        background: #ff9300
        color: #fff
</style>
