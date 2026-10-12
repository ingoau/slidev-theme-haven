<!--
  Daven talks: every paragraph / list item becomes a speech bubble.

  ---
  layout: bubbles
  ---

  # Don't game jams sound awesome?

  This November, <mark>YOU</mark> can join the world's largest teen game jam.

  No experience? No problem — we have workshops.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'
import hedgehog from '../assets/mascot/hedgehog.webp'

const props = defineProps({
  background: { type: String },
  hedgehog: { type: Boolean, default: true },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout bubbles haven-forest" :style="style">
    <slot />
    <img v-if="props.hedgehog" :src="hedgehog" class="haven-peek" alt="">
  </div>
</template>
