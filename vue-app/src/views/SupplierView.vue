<script setup>
import SupplierTable from '../components/SupplierTable.vue'
import get_environment from '../environment.js';
</script>


<script>
export default {
  name: "supplier-view",
  components: {
    SupplierTable,
  },
  data() {
    this.explore_options()
    return {
      error_feedback: "",
      query_result: [],
    };
  },
  methods: {
    async explore_options() {
      const backend_url = get_environment().backend_url
      const url = `${backend_url}/api/v1/order`;
      const data = await this._get_request(url);
      this.query_result = data.map(d => {
        return d
      }).filter(d => d.status === 'PENDING') // must show only pending items
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
  },
};
</script>

<template>
  <div class="container">
    <h1>Order Log</h1>

    <div class="mt-5">
        <SupplierTable :query_result="query_result" />
    </div>
  </div>
</template>
