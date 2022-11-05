<script setup>
import get_environment from "../environment.js";
defineProps({
  query_result: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <div class="row">
      <table class="table table-hover table-sm table-striped">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order No.</th>
            <th scope="col">City</th>
            <th scope="col">Product info</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in query_result" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.code }}</td>
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
                class="btn btn-outline-warning"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Edit
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapsePending1"
                  aria-expanded="false"
                  aria-controls="collapsePending1"
                >
                  Details
                </a>
                <a class="dropdown-item" href="#">Cancel Order</a>
              </div>
            </td>
          </tr>
          <tr class="collapse" id="collapsePending3">
            <td colspan="2">Product list</td>
            <td colspan="2">Expected date:</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <br /><br />
    <h3>Past purchases</h3>
    <div class="row">
      <table class="table table-hover table-striped">
        <thead class="thead-light">
          <tr>
            <th scope="col">Invoice No.</th>
            <th scope="col">Content summary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>Lorem Ipsum</td>
            <td>
              <button
                type="button"
                class="btn btn-outline-warning"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Edit
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseProduct1"
                  aria-expanded="false"
                  aria-controls="collapseProduct1"
                >
                  Details
                </a>
                <a class="dropdown-item" href="#">Delete</a>
              </div>
            </td>
          </tr>
          <tr class="collapse" id="collapseProduct1">
            <td>Product list</td>
          </tr>
          <tr>
            <td>654312</td>
            <td>Lorem Ipsum</td>
            <td>
              <button
                type="button"
                class="btn btn-outline-warning"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Edit
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseProduct2"
                  aria-expanded="false"
                  aria-controls="collapseProduct2"
                >
                  Details
                </a>
                <a class="dropdown-item" href="#">Delete</a>
              </div>
            </td>
          </tr>
          <tr class="collapse" id="collapseProduct2">
            <td>Products list</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>
