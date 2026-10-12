<script setup lang="ts">
const props = defineProps({
  tilt: { type: [String, Number], default: -4 },
})
</script>

<template>
  <span class="haven-sticker" :style="{ '--tilt': `${props.tilt}deg` }"><slot /></span>
</template>
