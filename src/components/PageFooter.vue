<template>
  <footer>
    At - Home Page &copy; {{ currentYear }}
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>