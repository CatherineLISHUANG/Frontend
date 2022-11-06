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
        </div>
      </section>

      <div class="mt-5">
        <AboutView />
      </div>
    </div>
  </main>
</template>
