<template>
  <div class="card col-lg-6 col-md-6">
    <div class="card-header">
      {{ stock.company }}
      <small>Price {{ stock.price }} $</small>
    </div>
    <div class="card-body">
      <p class="card-text">
        <input type="number" class="form-control" v-model="quantity">
      </p>
      <button class="btn btn-primary" @click="buyStocks1" :disabled="quantity <= 0">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        stock: Object
    },
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      buyStocks1() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        console.log(order);
        this.$store.dispatch('buyStocks', order);
      },
    }
}
</script>
