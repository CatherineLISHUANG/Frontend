<script setup>
import get_environment from "../environment.js";
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>


<script>

export default {
  methods: {
    add_to_basket() {
      const item = this.product
      console.log(item)
    }
  }
}
</script>

<template>
  <div class="card">
    <!-- <img class="card-img-top" src="@/assets/images/foo.png" alt="{{ ShortDescription }}" /> -->
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.full_info }}
        <ul>
          <li>{{ product.price }} {{ product.sales_unit }}</li>
          <li>{{ product.weight_kg }} kg</li>
          <li>{{ product.total_volume_m3 }} m3</li>
        </ul>
      </p>
      <button @click="add_to_basket" class="btn btn-success">Add to basket</button>
    </div>
  </div>
</template>
