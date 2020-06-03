<template>
  <div class="container">
    <div class="row">
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </div>
  </div>
</template>

<script>
import Stock from './Stock';
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    sellStocks(order) {
      this.sellStock(order);
    },
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    }),
  },
  created() {
    this.$store.dispatch('loadPortfolio');
  },
  components: {
    Stock
  }
};
</script>
