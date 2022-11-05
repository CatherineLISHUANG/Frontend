<script setup>
import SupplierTable from "../components/SupplierTable.vue";
import get_environment from "../environment.js";
</script>

<script>
export default {
  name: "supplier-view",
  components: {
    SupplierTable,
  },
  data() {
    this.explore_options();
    return {
      error_feedback: "",
      query_result: [],
    };
  },
  methods: {
    async explore_options() {
      const backend_url = get_environment().backend_url;
      const url = `${backend_url}/api/v1/order`;
      const data = await this._get_request(url);
      this.query_result = data
        .map((d) => {
          return d;
        })
        .filter((d) => d.status === "PENDING"); // must show only pending items
    },
    async _get_request(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        this.error_feedback = "Failed to fetch data from backend.";
        return [];
      }
    },

    accept_order(order_id) {
      this.update_order_status("APPROVED", order_id);
    },
    async update_order_status(new_status, order_id) {
      const selected_order_for_update = this.query_result.find(
        (d) => d.id == order_id
      );
      const payload = {
        order_id: order_id,
        new_status: new_status,
      };
      const backend_url = get_environment().backend_url;
      const is_success = await this._put_request(
        `${backend_url}/api/v1/order`,
        payload
      );
      if (is_success == true) {
        alert(
          `Updated status of ${selected_order_for_update.code} with ${new_status} successfully.`
        );
        this.explore_options();
      } else {
        alert(
          `Failed to update status of ${selected_order_for_update.code} with ${new_status}.`
        );
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
  <div class="container">
    <h1>Order Log</h1>

    <div class="mt-5">
      <SupplierTable
        @accept-order="accept_order"
        :query_result="query_result"
      />
    </div>
  </div>
</template>
