<script setup lang="ts">
import { resolveAssetUrl } from '../layoutHelper'

const props = defineProps({
  src: { type: String, required: true },
  caption: { type: String },
  tilt: { type: [String, Number], default: 2.5 },
  maxHeight: { type: String },
})
</script>

<template>
  <figure class="haven-polaroid" :style="{ '--tilt': `${props.tilt}deg`, '--max-h': props.maxHeight }">
    <img :src="resolveAssetUrl(props.src)" alt="">
    <figcaption v-if="props.caption">{{ props.caption }}</figcaption>
  </figure>
</template>
