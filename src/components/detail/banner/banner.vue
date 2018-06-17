<template>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img"
         :src="bannerImg"
    >
    <div class="banner-info">
      <p class="banner-title">{{sightName}}</p>
      <div class="banner-number"><van-icon name="edit" class="banner-icon"></van-icon>39</div>
    </div>
    <fadeAnimation>
      <gallary
        :gallaryImgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClick"
      ></gallary>
    </fadeAnimation>
  </div>
</template>

<script type="text/ecmascript-6">
  import gallary from 'base/gallary/gallary'
  import fadeAnimation from 'base/fade/fade'

  export default {
    props: {
      sightName: {
        type: String
      },
      bannerImg: {
        type: String
      },
      gallaryImgs: {
        type: Array
      }
    },
    data () {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true
      },
      handleGallaryClick () {
        this.showGallary = false
      }
    },
    components: {
      gallary,
      fadeAnimation
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          padding-top: 1px
          padding-right: 10px
</style>
