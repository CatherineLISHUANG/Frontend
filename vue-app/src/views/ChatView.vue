<script setup>
import ListenComponent from "../components/ListenComponent.vue";
</script>

<template>
  <main class="container mt-5" role="main">
    <div class="container">
      <section class="jumbotron text-center">
        <div class="container">
          <img
            src="@/assets/images/chat.gif"
            alt="Chat Icon"
            width="50"
            height="40"
            class="d-inline-block align-text-top"
          />
          <h1 class="jumbotron-heading">Chat</h1>
          <p class="lead text-muted" id="pageDescription">
            If the customer has some problems, they can reach the suppliers
            directly by using this instant chat function which will make the
            whole process much more efficient.
          </p>
        </div>
      </section>
      <div class="mt-5 mb-5">
        <ListenComponent />
      </div>
    </div>
  </main>
</template>
