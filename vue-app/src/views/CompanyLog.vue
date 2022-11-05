<script setup>
import CompanyLog from "../components/CompanyLog.vue";
import get_environment from "../environment.js";
</script>

<script>
export default {
  name: "supplier-view",
  components: {
    CompanyLog,
  },
  data() {
    this.explore_options();
    return {
      error_feedback: "",
      query_result_approved: [],
      query_result_denied: [],
      query_result_pending: [],
    };
  },
  methods: {
    async explore_options() {
      const backend_url = get_environment().backend_url;
      const url = `${backend_url}/api/v1/order`;
      const data = await this._get_request(url);
      this.query_result_approved = data.filter((d) => d.status == "APPROVED");
      this.query_result_denied = data.filter((d) => d.status == "DENIED");
      this.query_result_pending = data.filter((d) => d.status == "PENDING");
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
  <main class="container mt-5" role="main">
    <div class="container">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Purchase Log</h1>
          <p class="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
        </div>
      </section>

      <div class="mt-5">
        <h4>Approved</h4>
        <CompanyLog :query_result="query_result_approved" />
      </div>

      <div class="mt-5">
        <h4>Denied</h4>
        <CompanyLog :query_result="query_result_denied" />
      </div>

      <div class="mt-5">
        <h4>Pending</h4>
        <CompanyLog :query_result="query_result_pending" />
      </div>
    </div>
  </main>
</template>
