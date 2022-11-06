<script setup>
import Cards from "../components/Cards.vue";
import get_environment from "../environment.js";
</script>

<script>
export default {
  name: "product-catalog-view",
  components: {
    Cards,
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
      const url = `${backend_url}/api/v1/product`;
      const data = await this._get_request(url);
      this.query_result = data;
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
    <section class="jumbotron text-center">
      <div class="container">
        <img
          src="@/assets/images/buy.gif"
          alt="Buy Icon"
          width="50"
          height="40"
          class="d-inline-block align-text-top"
        />
        <h1 class="jumbotron-heading">Product Catalog</h1>
        <p class="lead text-muted" id="pageDescription">
          From this page, the customers can check the information of the
          products and chooce what they want to buy.
        </p>
      </div>
    </section>
  </div>

  <div class="mt-5">
    <div class="card-columns">
      <div v-for="row in query_result" :key="row.id">
        <Cards :product="row" />
      </div>
    </div>
  </div>
</template>
