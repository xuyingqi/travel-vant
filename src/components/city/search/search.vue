<template>
  <div>
    <div class="search">
      <input
        v-model="keywords"
        class="search-input"
        type="text"
        placeholder="输入城市或拼音"
      >
    </div>
    <div
      class="search-content"
      v-show="keywords"
      ref="searchContent"
    >
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          class="search-item border-1px"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item" v-show="hasNoDatas">未找到匹配数据</li>
      </ul>
    </div>
    <div v-show="hasNoData" class="loading-container">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import loading from 'components/city/loading/loading'

  export default {
    props: {
      cities: {
        type: Object
      }
    },
    data () {
      return {
        keywords: '',
        list: [],
        hasNoDatas: false,
        hasNoData: false,
        timer: null
      }
    },
    watch: {
      keywords () {
        this.hasNoData = true
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keywords) > -1 ||
                value.name.indexOf(this.keywords) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
          if (this.list.length > 0) {
            this.hasNoDatas = false
            this.hasNoData = false
            return
          }
          this.hasNoData = false
          this.hasNoDatas = true
        }, 100)
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.searchContent, {
        click: true
      })
    },
    methods: {
      handleCityClick(city) {
        // 组件派发actions
        this.$store.dispatch('changeCity', city)
        // 编程式导航
        this.$router.push('/')
        this.keywords = ''
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
  .search
    position: relative
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    z-index: 99
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666

  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
      border-1px(#ccc)

  .loading-content
    position: fixed
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
</style>
