<!--
MIT License
Copyright (c) 2026 ATBSPB
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->
<template>
  <div>
    <LoadingScreen />
    <div class="at-filter"></div>
    <div class="at-main">
      <LeftSidebar />
      <div class="at-right">
        <PageHeader :theme="theme" @toggle-theme="toggleTheme" />
        <PageContent />
      </div>
    </div>
    <PageFooter />
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

provide('theme', theme)

onMounted(() => {
  theme.value = getCookie('themeState') || 'Light'
  document.documentElement.dataset.theme = theme.value
})
</script>