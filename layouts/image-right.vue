<script setup lang="ts">
import { resolveAssetUrl } from '../layoutHelper'

const props = defineProps({
  image: { type: String },
  caption: { type: String },
  tilt: { type: [String, Number], default: 2.5 },
  class: { type: String },
})
</script>

<template>
  <div class="slidev-layout image-right haven-split is-right haven-meadow">
    <div class="haven-board" :class="props.class">
      <slot />
    </div>
    <figure v-if="props.image" class="haven-polaroid" :style="{ '--tilt': `${props.tilt}deg` }">
      <img :src="resolveAssetUrl(props.image)" alt="">
      <figcaption v-if="props.caption">{{ props.caption }}</figcaption>
    </figure>
  </div>
</template>
