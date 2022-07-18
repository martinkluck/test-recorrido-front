<script setup lang="ts">
import { RouterView } from "vue-router";
import LogoutButton from "./components/LogoutButton.vue";
</script>

<template>
  <div>
    <LogoutButton />
    <RouterView />
  </div>
</template>
