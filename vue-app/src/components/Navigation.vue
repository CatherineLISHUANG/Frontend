<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
      <img
        src="@/assets/images/icon.png"
        alt="Logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
      Magic Dashboard
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/catalog">Catalog</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/chat">Chat</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/supplier">Supplier</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/company">Company</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
      </ul>
      <RouterLink to="/basket">
        <button class="btn btn-success mr-sm-2">Basket</button>
      </RouterLink>
    </div>
  </nav>
</template>
