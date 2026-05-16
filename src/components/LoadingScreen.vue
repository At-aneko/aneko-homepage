<template>
  <div id="zyyo-loading" ref="loadingRef">
    <div id="zyyo-loading-center"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loadingRef = ref(null)

onMounted(() => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingRef.value) {
        loadingRef.value.style.opacity = '0'
      }
    }, 100)
  })
})
</script>