<template>
  <div class="tc" :class="{ active: visible }" @click="close">
    <div class="tc-main" :class="{ active: visible }" @click.stop>
      <img class="tc-img" :src="imageUrl" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { popupEvent } from '../composables/usePopup.js'

const visible = ref(false)
const imageUrl = ref('')

function open(url) {
  imageUrl.value = url
  visible.value = true
}

function close() {
  visible.value = false
}

popupEvent.on('pop', open)
</script>
