<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="./index.html">
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

            <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/supplier">Supplier</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Features
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./company.html">Company</a>
            <a class="dropdown-item" href="./supplier.html">Supplier</a>
            <a class="dropdown-item" href="./transportation.html"
              >Transportation</a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
