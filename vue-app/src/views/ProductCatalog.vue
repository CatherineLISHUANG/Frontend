<script setup>
import Cards from "../components/Cards.vue";
import get_environment from '../environment.js';
</script>


<script>
export default {
  name: "product-catalog-view",
  components: {
    Cards,
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
      const url = `${backend_url}/api/v1/product`;
      const data = await this._get_request(url);
      this.query_result = data
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
    <h1>Catalog</h1>

    <div class="mt-5">
      <div class="card-columns">
<<<<<<< Updated upstream
        <div
        v-for="row in query_result" :key="row.id"
        >
          <Cards :product="row" />
        </div>
=======
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
>>>>>>> Stashed changes
      </div>
    </div>
  </div>
</template>
