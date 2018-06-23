<template>
  <div>
    <v-header></v-header>
    <div class="scroll" ref="scroll">
      <div>
        <swiper :swiperList="swiperList"></swiper>
        <icons :iconList="iconList"></icons>
        <recommend :recommendList="recommendList"></recommend>
        <weekend :weekendList="weekendList"></weekend>
      </div>
    </div>
  </div>
</template>

<script>
  import header from 'components/home/header/header'
  import swiper from 'components/home/swiper/swiper'
  import icons from 'components/home/icons/icons'
  import recommend from 'components/home/recommend/recommend'
  import weekend from 'components/home/weekend/weekend'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
      this._initScroll()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
      this._initScroll()
    },
    computed: {
      // 当前城市
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city=' + this.lastCity)
          .then((res) => {
            res = res.data
            if (res.ret === true) {
              this.swiperList = res.data.swiperList
              this.iconList = res.data.iconList
              this.recommendList = res.data.recommendList
              this.weekendList = res.data.weekendList
            }
          })
      },
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.scroll, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      }
    },
    components: {
      'v-header': header,
      swiper,
      icons,
      recommend,
      weekend
    }
  }
</script>

<style lang="stylus" scoped>
  .scroll
    position: absolute
    overflow: hidden
    left: 0
    right: 0
    bottom: 0
    top: 43px
</style>
