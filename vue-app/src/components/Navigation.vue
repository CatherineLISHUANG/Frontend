<script setup>
import { RouterLink } from "vue-router";
import Basket from "./Basket.vue";
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
      <button
        class="btn btn-success mr-sm-2"
        type="button"
        data-toggle="modal"
        data-target="#basketModal"
      >
        Basket
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="basketModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="basketModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="basketModalLongTitle">
                Your shopping basket
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Basket />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <RouterLink to="/checkout">
                <button
                  class="btn btn-success"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Pay me!
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
