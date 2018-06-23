<template>
  <div class="city">
    <cityHeader></cityHeader>
    <citySearch :cities="cities"></citySearch>
    <cityList
    :cities="cities"
    :hotCities="hotCities"
    :letter="letter"
  ></cityList>
    <alphabet :cities="cities" @change="changeLetter"></alphabet>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import cityHeader from 'components/city/cityHeader/cityHeader'
  import citySearch from 'components/city/search/search'
  import cityList from 'components/city/cityList/cityList'
  import alphabet from 'components/city/Alphabet/Alphabet'

  export default {
    data () {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    mounted () {
      this.getCityInfo()
    },
    methods: {
      getCityInfo () {
        axios.get('/api/city.json')
          .then((res) => {
            res = res.data
            if (res.ret && res.data) {
              this.cities = res.data.cities
              this.hotCities = res.data.hotCities
            }
          })
      },
      changeLetter(letter) {
        this.letter = letter
      }
    },
    components: {
      cityHeader,
      citySearch,
      cityList,
      alphabet
    }
  }
</script>

<style lang="stylus" scoped>
</style>
