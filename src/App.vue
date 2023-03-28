<template>
  <!-- ADD NAVBAR HERE -->
  <nav-bar />

  <router-view />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";

import NavBar from "./components/Navigation/NavBar.vue";
</script>

<style>
html.dark {
  color-scheme: dark;
}
</style>
