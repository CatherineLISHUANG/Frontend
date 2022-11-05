<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <Navigation />
      </div>
    </header>
    <RouterView />
  </div>
</template>
