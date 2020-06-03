<template>
  <div class="card col-lg-6 col-md-6">
    <div class="card-header">
      {{ stock.company }}
      <small>Price {{ stock.price }} $</small>
      <small> | Quantity {{ stock.quantity }}</small>
    </div>
    <div class="card-body">
      <p class="card-text">
        <input type="number" class="form-control" v-model="quantity" />
      </p>
      <button class="btn btn-primary" @click="sellStocks1" :disabled="stock.quantity < quantity || quantity < 0">Sell</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: Object,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    sellStocks1() {
      const order = {
        stockId: this.stock.id,
        quantity: this.quantity,
      };
      console.log(order);
      this.$store.dispatch("sellStocks", order);
    },
  }
};
</script>
