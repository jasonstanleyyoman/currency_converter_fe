<template>
  <div class="container flex-col--center">
    <div class="app">
      <Header v-model="amount" @change="isChangeSrcModalOpen=true" :rate="srcRate"/>
      <Card v-for="(rate, idx) in rates" :rate="rate" :key="idx" @delete="handleDelete"/>
    </div>
    <AddButton @click="isAddRateModalOpen=true"/>
    <RateListModal 
    v-if="isAddRateModalOpen" 
    @close="isAddRateModalOpen=false"
    :rates="ratesAvailable"
    @select="handleAdd"/>
    <RateListModal 
    v-if="isChangeSrcModalOpen" 
    @close="isChangeSrcModalOpen=false"
    :rates="ratesAvailable"
    @select="handleChange"/>
  </div>
</template>

<script>
import _ from "lodash"
import Header from "./components/Header.vue"
import Card from "./components/Card.vue"
import AddButton from "./components/AddButton.vue"
import RateListModal from "./components/RateListModal.vue"
import { GetRates, ConvertSingle, ConvertMultiple } from "./api"
export default {
  name: 'App',
  components: {
    Header,
    Card,
    AddButton,
    RateListModal
  },

  data: function() {
    return {
      rates: [],
      srcRate: {
        long: "Euro Dollar",
        symbol: "EUR",
        rate: 1
      },
      amount: 100,
      ratesAvailable: [],
      isAddRateModalOpen: false,
      isChangeSrcModalOpen: false
    }
  },
  mounted() {
    GetRates()
      .then(response => this.ratesAvailable = response.data.rates)
  },
  watch: {
    amount: _.debounce(function(newValue) {
      const allDest = this.rates.map(rate => rate.to)
      ConvertMultiple(this.srcRate.symbol, allDest, newValue)
        .then(response => {
          if (response.data.results) {
            this.rates = response.data.results
          } else if (response.data.result) {
            this.rates = [response.data.result]
          }
        })
        
      console.log(newValue)
    }, 500)
  },
  methods: {
    handleAdd(rate) {
      this.isAddRateModalOpen = false;
      ConvertSingle(this.srcRate.symbol, rate.symbol, this.amount)
        .then(response => this.rates.push(response.data.result))
    },
    handleChange(newSrc) {
      this.isChangeSrcModalOpen = false;
      this.srcRate = newSrc;
      const allDest = this.rates.map(rate => rate.to)
      ConvertMultiple(this.srcRate.symbol, allDest, this.amount)
        .then(response => {
          if (response.data.results) {
            this.rates = response.data.results
          } else if (response.data.result) {
            this.rates = [response.data.result]
          }
        })
    },
    handleDelete(symbol) {
      this.rates = this.rates.filter(rate => rate.to !== symbol)
    }
  }
}
</script>
<style lang="scss">
@import './styles/main.scss';
body {
  background-color: #141530;
  color: white;
}
</style>
<style lang="scss" scoped>
.container {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 12em;

  .app {
    border-radius: 12px;
    box-shadow: 2px 2px 6px 1px rgba(255, 255, 255, 0.25),
                -2px -2px 6px 1px rgba(255, 255, 255, 0.25);
    margin-bottom: 3em;
    overflow: hidden;
  }
}
</style>
