<script setup>
import Cards from "../components/Cards.vue";
import get_environment from "../environment.js";
import Basket from "../components/Basket.vue";
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
      basket_items: [],
      total_weight: null,
      total_price: null,
      some_score: null,
    };
  },
  updated() {
    this.total_weight = this.basket_items.reduce((acc, a) => {
      return acc + a.weight_kg
    }, 0)
    this.total_price = this.basket_items.reduce((acc, a) => {
      return acc + a.price
    }, 0)
    this.some_score = this.total_weight * 0.002 + 0.02 * this.total_price
  },
  methods: {
    async explore_options() {
      const backend_url = get_environment().backend_url;
      const url = `${backend_url}/api/v1/organized`;
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
    add_to_basket(item) {
      this.basket_items.push(item)
    }
  },
};
</script>

<template>
  <main class="container mt-5" role="main">

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

    <div v-for="group in query_result" :key="group.id" class="mb-5">
      <h5>{{ group.product_class }}</h5>
      <div class="card-columns">
        <div class="some-card" v-for="row in group.items" :key="row.id">
          <Cards :product="row" @add_to_basket="add_to_basket" />
        </div>
      </div>
    </div>

    <div class="toast mt-5">
        <div class="toast-header">
          <div style="width: 20px; height: 20px; background: #d4d4d4; margin-right: 10px;"></div>
          <strong class="mr-auto">Basket</strong>
          <small class="mr-2">Score:</small>
          <small class="mr-3" v-if="some_score"> - {{ some_score.toFixed(2) }} points</small>
          <small class="mr-2">Total:</small>
          <small class="mr-3" v-if="total_price">{{ total_price.toFixed(2) }} EUR</small>
          <small class="mr-3" v-if="total_weight">{{ total_weight.toFixed(2) }} kg</small>
          <small>{{ basket_items.length }} items</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          <div class="basket">
            <Basket :basket_items="basket_items" />
          </div>
        </div>
    </div>


  </main>
</template>


<style scoped>

.card-columns {
  max-height: 500px;
  display: flex;
  flex-wrap:wrap;
  overflow-y: auto;
  border: 1px solid #d4d4d4;
}

.some-card {
  width: 22%;
}

.toast {
  border: 1px solid #d4d4d4;
  padding: 10px 15px;
  /* position: absolute; */
  /* bottom: 0; */
  /* right: 0; */
}

.toast-header {
  display: flex;
  justify-content: space-between;
}

.basket {
  max-height: 300px;
  border: 1px solid #d4d4d4;
  overflow-y: auto;
}

</style>