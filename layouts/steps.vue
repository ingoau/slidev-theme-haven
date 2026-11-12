<!--
  Numbered steps as orange circles and white cards — "What's shipping?". Write a plain
  ordered list after the heading.

  ---
  layout: steps
  scene: flowers
  ---

  # What's "shipping"?

  1. Published to **itch.io** as a web-deployed game
  2. Open-source code on **GitHub**
  3. Can be played!!!
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle, sceneClass } from '../layoutHelper'

const props = defineProps({
  scene: { type: String },
  background: { type: String },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout steps" :class="sceneClass(props.scene, 'flowers')" :style="style">
    <slot />
  </div>
</template>
