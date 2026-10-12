<script setup lang="ts">
import { resolveAssetUrl } from '../layoutHelper'
import daven from '../assets/mascot/hedgehog.webp'

const props = defineProps({
  avatar: { type: String },
})
</script>

<template>
  <div class="slidev-layout intro haven-meadow">
    <div class="haven-board">
      <slot />
    </div>
    <img :src="props.avatar ? resolveAssetUrl(props.avatar) : daven" class="haven-avatar" alt="">
  </div>
</template>
