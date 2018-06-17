<template>
  <div class="icons">
    <van-swipe :show-indicators="false" class="icon">
      <van-swipe-item
        v-for="page in pages"
        :key="page.id"
        class="icon-wrapper"
      >
        <van-row>
          <van-col span="6" v-for="item in page" :key="item.id">
            <div class="icon-image">
              <img :src="item.imgUrl" width="50" height="50">
            </div>
            <div class="icon-desc">{{item.desc}}</div>
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        swiperOption: {
          loop: false
        }
      }
    },
    props: {
      iconList: {
        type: Array
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles.styl"
  @import "~common/styles/mixins.styl"
  .icons
    margin-top: 10px
    width: 100%
    height: 0
    padding-bottom: 50%
    .icon
      padding: 10px 0
      .van-row
        text-align: center
        .van-col
          margin-bottom: 15px
          .icon-desc
            color: #333
            font-size: 14px
</style>
