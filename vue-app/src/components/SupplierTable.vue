<script setup>
import get_environment from "../environment.js";
defineProps({
  query_result: {
    type: Array,
    required: true,
  },
});
</script>

<script>
export default {
  emits: ["accept-order"],
};
</script>

<template>
  <div>
    <table
      v-if="query_result.length > 0"
      class="table table-hover table-sm text-center"
    >
      <thead>
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
          v-for="row in query_result"
          :key="row.id"
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
          </td>
          <td>{{ row.status }}</td>
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

              <a
                @click="this.$emit('accept-order', row.id)"
                class="dropdown-item"
                href="#"
              >
                Accept
              </a>
              <a
                class="dropdown-item"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                Deny
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Too far away</a>
                <a class="dropdown-item" href="#">Waiting list</a>
                <a class="dropdown-item" href="#">Other</a>
              </div>
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
                <div class="modal-body">
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
</template>
