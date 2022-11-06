<script setup>
import { RouterLink } from "vue-router";
defineProps({
  basket_items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Weight (kg)</th>
        <th scope="col">Price (EUR)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in basket_items" :key="item.id">
        <th scope="row">{{ item.code }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.weight_kg }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
</template>
