<template>
  <a class="switch" href="javascript:void(0)">
    <div class="onoffswitch">
      <input
        type="checkbox"
        name="onoffswitch"
        class="onoffswitch-checkbox"
        id="myonoffswitch"
        :checked="isLight"
        @change="$emit('toggle')"
      />
      <label class="onoffswitch-label" for="myonoffswitch">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
      </label>
    </div>
  </a>
</template>

<script setup>
defineProps({
  isLight: {
    type: Boolean,
    default: true
  }
})

defineEmits(['toggle'])
</script>