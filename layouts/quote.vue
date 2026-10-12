<script setup lang="ts">
import hedgehog from '../assets/mascot/hedgehog.webp'

const props = defineProps({
  hedgehog: { type: Boolean, default: true },
})
</script>

<template>
  <div class="slidev-layout quote haven-cocoa haven-canopy">
    <slot />
    <img v-if="props.hedgehog" :src="hedgehog" class="haven-peek" alt="">
  </div>
</template>
