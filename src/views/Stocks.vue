<template>
  <div class="container">
    <div class="row">
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Stock from '../components/Stock'

export default {
  name: 'Stocks',
  data() {
    return {
      
    }
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
  components: {
    Stock
  },

}
</script>
