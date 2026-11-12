<!--
  Outlined text on the left, a free-standing image on the right — "Make a game & ship it →
  GET THIS SHIRT!". `caption` sits under the image in the same outlined type.

  ---
  layout: showcase
  image: /shirt.png
  caption: GET THIS SHIRT!
  scene: meadow
  ---

  # Make a game & ship it.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle, resolveAssetUrl, sceneClass } from '../layoutHelper'
import shirt from '../assets/stickers/haven-shirt.webp'

const props = defineProps({
  image: { type: String },
  caption: { type: String },
  scene: { type: String },
  background: { type: String },
  reverse: { type: Boolean, default: false },
})

const src = computed(() => props.image === 'shirt' || !props.image ? shirt : resolveAssetUrl(props.image))
const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout showcase" :class="[sceneClass(props.scene, 'meadow'), { 'is-reverse': props.reverse }]" :style="style">
    <div class="haven-showcase-text"><slot /></div>
    <figure class="haven-showcase-figure">
      <img :src="src" alt="">
      <figcaption v-if="props.caption">{{ props.caption }}</figcaption>
    </figure>
  </div>
</template>
