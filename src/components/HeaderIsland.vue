<template>
  <PageHeader :theme="theme" @toggle-theme="toggleTheme" />
  <PopupModal />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PageHeader from './PageHeader.vue'
import PopupModal from './PopupModal.vue'
import { setCookie } from '../utils/cookie.js'

const theme = ref('Light')

function toggleTheme() {
  theme.value = theme.value === 'Dark' ? 'Light' : 'Dark'
  setCookie('themeState', theme.value, 365)
  document.documentElement.dataset.theme = theme.value
}

onMounted(() => {
  theme.value = document.documentElement.dataset.theme || 'Light'

  const loading = document.getElementById('at-loading')
  if (!loading) return

  const hideLoading = () => {
    loading.style.opacity = '0'
    window.setTimeout(() => {
      loading.style.display = 'none'
    }, 300)
  }

  if (document.readyState === 'complete') hideLoading()
  else window.addEventListener('load', hideLoading, { once: true })
})
</script>
