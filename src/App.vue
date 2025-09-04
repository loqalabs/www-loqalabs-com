<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-neutral-900 text-white">
    <NavBar />
    <RouterView />
  </div>
</template>
