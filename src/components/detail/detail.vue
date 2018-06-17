<template>
  <div class="detail">
    <v-header></v-header>
    <banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
    <list :catagoryList="catagoryList"></list>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import banner from 'components/detail/banner/banner'
  import header from 'components/detail/header/header'
  import list from 'components/detail/list/list'

  export default {
    name: 'detail',
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        catagoryList: []
      }
    },
    mounted () {
      this.getDetailInfo()
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        }).then((res) => {
          res = res.data
          if (res.ret === true) {
            this.sightName = res.data.sightName
            this.bannerImg = res.data.bannerImg
            this.gallaryImgs = res.data.gallaryImgs
            this.catagoryList = res.data.catagoryList
            console.log(this.catagoryList)
          }
        })
      }
    },
    components: {
      banner,
      'v-header': header,
      list
    }
  }
</script>

<style lang="stylus" scoped>
</style>
