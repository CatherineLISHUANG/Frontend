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
      socketMessage: "",
      chatText: "",
    };
  },
  mounted() {
    const backend_url = get_environment().backend_url;
    const socker_server_port = get_environment().socker_server_port;
    const url = `http://127.0.0.1:${socker_server_port}`;
    const theSocket = io(url);

    console.log("starting....", url);
    theSocket.on("chat message", function (msg) {
      console.log(`msg=${msg}`);
      this.socketMessage = msg;

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
  },
};
</script>

<style scoped>
.chat {
  border: 1px solid #d4d4d4;
  padding: 10px 15px;
}

#chatMessageDiv {
  height: 100px;
  overflow-y: auto;
}
</style>
