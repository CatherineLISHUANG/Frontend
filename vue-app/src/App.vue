<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <Navigation />
      </div>
    </header>
    <RouterView />
    <MyFooter />
  </div>
</template>
