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
      <div class="table-responsive">
        <table class="table table-hover table-sm text-center">
          <thead>
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
              <td><span v-if="row.city">{{ row.city.name }}</span></td>
              <td>
                <p v-if="row.product">{{ row.product.full_info }}</p>
              </td>
              <td v-if="row.status == 'APPROVED'" class="text-success">
                {{ row.status }}
              </td>
              <td v-if="row.status == 'PENDING'" class="text-info">
                {{ row.status }}
              </td>
              <td v-if="row.status == 'DENIED'" class="text-danger">
                {{ row.status }}
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-info"
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
                    data-toggle="modal"
                    :data-target="`#${row.id}-modal`"
                  >
                    Details
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Cancel Order</a>
                </div>
              </td>
              <!-- Modal -->
              <div
                class="modal fade text-left"
                :id="`${row.id}-modal`"
                tabindex="-1"
                role="dialog"
                :aria-labelledby="`${row.id}-modalTitle`"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" :id="`${row.id}-modalLongTitle`">
                        {{ row.id }} full details:
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body" v-if="row.product">
                      <p>{{ row.product.full_info }}</p>
                      <ul>
                        <li>
                          {{ row.product.price }} {{ row.product.sales_unit }}
                        </li>
                        <li>{{ row.product.weight_kg }} kg</li>
                        <li>{{ row.product.total_volume_m3 }} m<sup>3</sup></li>
                      </ul>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <br /><br />
    <h3>Past purchases</h3>
    <div class="row">
      <table class="table table-hover">
        <thead>
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
