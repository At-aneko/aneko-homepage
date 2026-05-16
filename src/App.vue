<template>
  <div>
    <LoadingScreen />
    <div class="zyyo-filter"></div>
    <div class="zyyo-main">
      <LeftSidebar />
      <div class="zyyo-right">
        <PageHeader :theme="theme" @toggle-theme="toggleTheme" />
        <PageContent />
        <PageFooter />
      </div>
    </div>
    <PopupModal />
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import PageHeader from './components/PageHeader.vue'
import PageContent from './components/PageContent.vue'
import PopupModal from './components/PopupModal.vue'
import PageFooter from './components/PageFooter.vue'
import { getCookie, setCookie } from './utils/cookie.js'

const theme = ref('Light')

function toggleTheme() {
  theme.value = theme.value === 'Dark' ? 'Light' : 'Dark'
  setCookie('themeState', theme.value, 365)
  document.documentElement.dataset.theme = theme.value
}

function applyTheme(t) {
  document.documentElement.dataset.theme = t
  theme.value = t
}

provide('theme', theme)

onMounted(() => {
  const savedTheme = getCookie('themeState') || 'Light'
  applyTheme(savedTheme)

  console.log(
    '%cCopyright © 2026 atbspb.online',
    'background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;'
  )
  console.log('%c   /\\_/\\', 'color: #8B4513; font-size: 20px;')
  console.log('%c  ( o.o )', 'color: #8B4513; font-size: 20px;')
  console.log(' %c  > ^ <', 'color: #8B4513; font-size: 20px;')
  console.log('  %c /  ~ \\', 'color: #8B4513; font-size: 20px;')
  console.log('  %c/______\\', 'color: #8B4513; font-size: 20px;')

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

  const fpsElement = document.createElement('div')
  fpsElement.id = 'fps'
  fpsElement.style.zIndex = '10000'
  fpsElement.style.position = 'fixed'
  fpsElement.style.left = '0'
  document.body.insertBefore(fpsElement, document.body.firstChild)

  let fps = 0
  let last = Date.now()
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }

  function step() {
    const offset = Date.now() - last
    fps += 1
    if (offset >= 1000) {
      last += offset
      fpsElement.textContent = 'FPS: ' + fps
      fps = 0
    }
    requestAnimationFrame(step)
  }
  step()
})
</script>