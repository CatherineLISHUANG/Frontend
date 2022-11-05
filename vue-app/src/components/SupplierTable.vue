<script setup>
import get_environment from '../environment.js';
defineProps({
  query_result: {
    type: Array,
    required: true,
  },
});
</script>

<script>
export default {
  methods: {
    accept_order(order_id) {
      this.update_order_status('APPROVED', order_id)
    },
    async update_order_status(new_status, order_id) {
      const selected_order_for_update = this.query_result.find(d => d.id == order_id)
      const payload = {
        order_id: order_id,
        new_status: new_status,
      };
      const backend_url = get_environment().backend_url
      const is_success = await this._put_request(
        `${backend_url}/api/v1/order`,
        payload
      );
      if (is_success == true) {
        alert(`Updated status of ${selected_order_for_update.code} with ${new_status} successfully.`);
      } else {
        alert(`Failed to update status of ${selected_order_for_update.code} with ${new_status}.`);
      }
    },
    async _put_request(url, data) {
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return true;
      } catch (error) {
        console.error(`Failed to PUT data to backend: ${error}`);
        return false;
      }
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
        <th scope="col">Status</th>
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
        <td>{{ row.status }}</td>
        <td>
          <button
            type="button"
            @click="accept_order(row.id)"
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
