<template>
  <div class="city-list" ref="cityList">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!--<div class="button">{{this.$store.state.city}}</div>-->
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="hotCity in hotCities"
               :key="hotCity.id"
               @click="handleCityClick(hotCity.name)"
          >
            <div class="button">{{hotCity.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div
          v-for="(group, key) in cities" :key="key" :ref="key">
          <div class="title">{{key}}</div>
          <div
            class="item-list"
            v-for="item in group"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="item border-1px">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!hotCities.length" class="loading-container">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
  import loading from 'components/city/loading/loading'
  import { mapState } from 'vuex'

  export default {
    props: {
      cities: {
        type: Object
      },
      hotCities: {
        type: Array
      },
      letter: {
        type: String
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.cityList, {click: true, tap: true})
    },
    watch: {
      letter () {
        if (this.letter) {
          this.scroll.scrollToElement(this.$refs[this.letter][0], 300)
        }
      }
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick (city) {
        // 组件派发actions
        this.$store.dispatch('changeCity', city)
        // 编程式导航
        this.$router.push('/')
      }
    },
    components: {
      loading
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/styles/varibles.styl'
  @import '~common/styles/mixins.styl'
  .city-list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
        border-1px(#ccc)

  .loading-container
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
</style>
