<script setup>
import AboutView from "../components/AboutView.vue";
</script>

<template>
  <main class="container mt-5" role="main">
    <div class="container">
      <section class="jumbotron text-center">
        <div class="container">
          <img
            src="@/assets/images/speech-bubble.gif"
            alt="About Icon"
            width="50"
            height="40"
            class="d-inline-block align-text-top"
          />
          <h1 class="jumbotron-heading">About Us</h1>
          <p class="lead text-muted" id="pageDescription">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
        </div>
      </section>

      <div class="mt-5">
        <AboutView />
      </div>
    </div>
  </main>
</template>
