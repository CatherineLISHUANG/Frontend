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
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
        </div>
      </section>
      <div class="mt-5 mb-5">
        <ListenComponent />
      </div>
    </div>
  </main>
</template>
