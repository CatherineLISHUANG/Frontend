<script setup>
import CompanyLog from "../components/CompanyLog.vue";
import get_environment from "../environment.js";
import { io } from "socket.io-client";
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
      num_pending: null,
      num_approved: null,
      num_denied: null,
      our_socket: null,
    };
  },
  mounted() {
    const socker_server_port = get_environment().socker_server_port;
    const url = `http://127.0.0.1:${socker_server_port}`;
    const theSocket = io(url);

    console.log("starting....", url);
    const parentThis = this;
    theSocket.on("retrigger-query", function (context_msg) {
      console.log(`context_msg=${context_msg}`);
      parentThis.explore_options();
    });
    this.our_socket = theSocket;
  },
  methods: {
    async explore_options() {
      const backend_url = get_environment().backend_url;
      const url = `${backend_url}/api/v1/order`;
      const data = await this._get_request(url);
      this.query_result_approved = data.filter((d) => d.status == "APPROVED");
      this.query_result_denied = data.filter((d) => d.status == "DENIED");
      this.query_result_pending = data.filter((d) => d.status == "PENDING");
      this.num_approved = this.query_result_approved.length;
      this.num_denied = this.query_result_denied.length;
      this.num_pending = this.query_result_pending.length;
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
          <h1 class="jumbotron-heading">Company Log</h1>
          <p class="lead text-muted" id="pageDescription">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
        </div>
      </section>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button border-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <div class="title">
              Approved <span>{{ num_approved }}</span>
            </div>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div v-if="num_approved > 0" class="status-box">
              <CompanyLog :query_result="query_result_approved" />
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed border-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <div class="title">
              Pending <span>{{ num_pending }}</span>
            </div>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div v-if="num_pending > 0" class="status-box">
              <CompanyLog :query_result="query_result_pending" />
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed border-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <div class="title">
              Denied <span>{{ num_denied }}</span>
            </div>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div v-if="num_denied > 0" class="status-box">
              <CompanyLog :query_result="query_result_denied" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.accordion-button {
  width: 100%;
}

h5 {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
}

.status-box {
  max-height: 500px;
  overflow: auto;
  border: 1px solid #d4d4d4;
  padding: 15px;
  margin: 10px 0;
}
</style>
