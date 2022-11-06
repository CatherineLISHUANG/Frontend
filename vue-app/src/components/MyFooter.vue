<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <RouterLink class="nav-link text-secondary" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-secondary" to="/supplier"
            >Supplier</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-secondary" to="/company"
            >Company</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-secondary" to="/catalog"
            >Catalog</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-secondary" to="/chat"
            >Chat</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-secondary" to="/about"
            >About</RouterLink
          >
        </li>
      </ul>
      <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
    </footer>
  </div>
</template>
