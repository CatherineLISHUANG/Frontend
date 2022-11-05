<script setup>
import CompanyLog from "../components/CompanyLog.vue";
import get_environment from '../environment.js';
</script>



<script>
export default {
  name: "supplier-view",
  components: {
    CompanyLog,
  },
  data() {
    this.explore_options()
    return {
      error_feedback: "",
      query_result_approved: [],
      query_result_denied: [],
      query_result_pending: [],
    };
  },
  methods: {
    async explore_options() {
      const backend_url = get_environment().backend_url
      const url = `${backend_url}/api/v1/order`;
      const data = await this._get_request(url);
      this.query_result_approved = data.filter(d => d.status == 'APPROVED')
      this.query_result_denied = data.filter(d => d.status == 'DENIED')
      this.query_result_pending = data.filter(d => d.status == 'PENDING')
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
    <h1>Purchase Log</h1>

    <div class="mt-5">
      <h1>Approved</h1>
      <CompanyLog :query_result="query_result_approved" />
    </div>

    <div class="mt-5">
      <h1>Denied</h1>
      <CompanyLog :query_result="query_result_denied" />
    </div>

    <div class="mt-5">
      <h1>Pending</h1>
      <CompanyLog :query_result="query_result_pending" />
    </div>
  </div>
</template>
