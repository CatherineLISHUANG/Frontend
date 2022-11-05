<script setup>
defineProps({
  query_result: {
    type: Array,
    required: true,
  },
});
</script>

<script>
export default {
  mounted() {
    console.log("fofofofofofofoo");
  },
  methods: {
    myFunction() {
      console.log("fidsjfosijfiosjfoisdjiof");
    },
  },
};
</script>

<template>
  <table v-if="query_result.length > 0" class="table table-hover table-sm table-striped">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Order No.</th>
        <th scope="col">Customer</th>
        <th scope="col">City</th>
        <th scope="col">Product info</th>
        <th scope="col">Confirmation</th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="row in query_result" :key="row.id"
      data-toggle="collapse"
      href="#collapse1"
      role="button"
      aria-expanded="false"
      aria-controls="collapse1"
      >
        <th
          scope="row"
          data-toggle="collapse"
          href="#collapse1"
          role="button"
          aria-expanded="false"
          aria-controls="collapse1"
        >
          {{ row.id }}
        </th>
        <td>{{ row.code }}</td>
        <td>{{ row.customer.name }}</td>
        <td>{{ row.city.name }}</td>
        <td>
          <p>{{ row.product.full_info }}</p>
          <ul>
            <li>{{ row.product.price }} {{ row.product.sales_unit }}</li>
            <li>{{ row.product.weight_kg }} kg</li>
            <li>{{ row.product.total_volume_m3 }} m3</li>
          </ul>
        </td>
        <td>
          <button
            type="button"
            @click="myFunction"
            class="btn btn-outline-primary"
          >
            Accept
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Deny
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Too far away</a>
            <a class="dropdown-item" href="#">Waiting list</a>
            <a class="dropdown-item" href="#">Other</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
