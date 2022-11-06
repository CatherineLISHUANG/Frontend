<script setup>
import SupplierTable from "../components/SupplierTable.vue";
import get_environment from "../environment.js";
import { io } from "socket.io-client";
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
      our_socket: null,
    };
  },

  mounted() {
    const socker_server_port = get_environment().socker_server_port;
    const url = `http://127.0.0.1:${socker_server_port}`;
    const theSocket = io(url);

    console.log("starting....", url);
    this.our_socket = theSocket;
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

    emit_trigger_to_re_query() {
      const msg = "from-supplier-view";
      const myPort = get_environment().my_port;
      const whoAmI = myPort == 5173 ? "Supplier" : "Customer";
      console.log("emitting....emit_trigger_to_re_query");
      this.our_socket.emit(
        "retrigger-query",
        `retrigger instruction ${whoAmI} from ${myPort}: ${msg}`
      );
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
        this.emit_trigger_to_re_query();
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
  <main class="container mt-5" role="main">
    <div class="container">
      <section class="jumbotron text-center">
        <div class="container">
          <img
            src="@/assets/images/warehouse.gif"
            alt="Supplier Icon"
            width="50"
            height="40"
            class="d-inline-block align-text-top"
          />
          <h1 class="jumbotron-heading">Supplier Log</h1>
          <p class="lead text-muted" id="pageDescription">
            The suppliers can check the details of each order and decide if they
            want to accept the order.
          </p>
        </div>
      </section>

    <div v-if="query_result.length == 0">
      <div class="alert alert-info">
        No pending orders.
      </div>
    </div>

    <div class="mt-5">
      <SupplierTable
        @update_order_status="update_order_status"
        :query_result="query_result"
      />
    </div>
  </div>
  </main>
</template>
