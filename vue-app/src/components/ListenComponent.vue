<template>
  <div>
    <div class="chat">
      <div id="chatMessageDiv" class="border mb-3"></div>
      <input id="textElem" v-model="chatText" type="text" />
      <button @click="send_message" class="btn btn-sm btn-success ml-2">
        Send
      </button>
    </div>
  </div>
</template>

<script setup>
import { io } from "socket.io-client";
import get_environment from "../environment.js";
</script>

<script>
export default {
  data() {
    return {
      isConnected: false,
      chatText: "",
    };
  },
  mounted() {
    const socker_server_port = get_environment().socker_server_port;
    const url = `http://127.0.0.1:${socker_server_port}`;
    const theSocket = io(url);

    console.log("starting....", url);
    const parentThis = this;
    theSocket.on("chat message", function (msg) {
      console.log(`msg=${msg}`);

      if (msg.includes('order_id=')) {
        const order_id = msg.split('order_id=')[1]
        parentThis.show_order_info_in_chat(order_id)
      }

      const chatMessageDiv = document.getElementById("chatMessageDiv");
      const myDiv = document.createElement("div");

      myDiv.textContent = msg;
      chatMessageDiv.appendChild(myDiv);
    });
    this.our_socket = theSocket;
  },
  methods: {
    send_message() {
      const msg = this.chatText;

      const myPort = get_environment().my_port;
      const whoAmI = myPort == 5173 ? "Supplier" : "Customer";
      this.our_socket.emit("chat message", `${whoAmI} from ${myPort}: ${msg}`);

      this.chatText = "";
    },
    async show_order_info_in_chat(given_id) {
      const backend_url = get_environment().backend_url;
      const url = `${backend_url}/api/v1/order?id=${given_id}`;
      const data = await this._get_request(url);
      const chatMessageDiv = document.getElementById("chatMessageDiv");
      const myDiv = document.createElement("div");

      function isEmpty(obj) {
          return Object.keys(obj).length === 0;
      }

      if (isEmpty(data) != true) {
        const text_class_color = (data.status != 'DENIED') ? 'text-secondary' : 'text-danger'
        console.log(data)
        myDiv.innerHTML = `
        <div class="order-box">
        <h5>Order <small>${data.id}</small></h5>
        <table bordered>
          <thead>
            <tr>
              <th>City</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${data.city.name}</td>
              <td>${data.product.name}</td>
              <td>${data.customer.name}</td>
              <td class="${text_class_color}">${data.status}</td>
            </tr>
          </tbody>
        </table>
        </div>
        `;
      } else {
        myDiv.innerHTML = `<div class="alert alert-warning">Order with ${given_id} id not found. Please try again.</div>`
      }
      chatMessageDiv.appendChild(myDiv);
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
<!-- {"city":{"longitude":"-144.844323","id":"c6ce1eca-8c6a-43ad-9825-b203f1fb01fb","name":"North Vanessa","post_code":"63452","latitude":"-12.850917"},"date":"2011-08-27","product_quantity":787,"product":{"total_volume_m3":8,"product_class":"Harris, Bailey and Hartman","weight_kg":79,"full_info":"Expanded interactive frame (Harris, Bailey and Hartman)","id":"5699d776-1c63-4466-943d-05945e64534d","name":"Expanded interactive frame","code":"365","price":206,"sales_unit":"EUR"},"id":"675e4374-72a2-4b5b-b146-29a73cee4556","customer":{"code":"374","id":"84d50088-fa80-40ab-a318-3086c46e1e11","name":"Jodi Roth","email_address":"kristina98@example.com"},"status":"DENIED","code":"670"} -->
<style scoped>
.chat {
  border: 1px solid #d4d4d4;
  padding: 10px 15px;
}

#chatMessageDiv {
  min-height: 100%;
  overflow-y: auto;
}
</style>
