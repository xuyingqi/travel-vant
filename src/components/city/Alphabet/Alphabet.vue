<template>
  <ul class="alphabet-list">
    <li class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick(item)"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      cities: {
        type: Object
      }
    },
    data () {
      return {
        touchState: false
      }
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick (letter) {
        this.$emit('change', letter)
      },
      handleTouchStart () {
        this.touchState = true
      },
      handleTouchMove (e) {
        if (this.touchState) {
          const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          this.$emit('change', this.letters[index])
        }
      },
      handleTouchEnd () {
        this.touchState = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles.styl"
  .alphabet-list
    position: fixed
    display: flex
    flex-direction: column
    justify-content: center
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
