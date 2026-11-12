<!--
  The official "Raise your hand if…" signboard. A paragraph is the small lead-in line,
  the heading is the big line.

  ---
  layout: raise-hand
  label: Raise your hand if…   # text on the signboard tab
  hedgehog: peek               # peek | cheer | both | none
  ---

  this was

  # your first ever hackathon
-->
<script setup lang="ts">
import peek from '../assets/stickers/hedgehog-peek.webp'
import cheer from '../assets/stickers/hedgehog-cheer.webp'

const props = defineProps({
  label: { type: String, default: 'Raise your hand if…' },
  hedgehog: { type: [String, Boolean], default: 'peek' },
})
</script>

<template>
  <div class="slidev-layout raise-hand haven-scene-signboard">
    <div class="haven-raise-label">{{ props.label }}</div>
    <div class="haven-raise-body">
      <slot />
    </div>
    <img v-if="props.hedgehog === 'peek' || props.hedgehog === 'both'" :src="peek" class="haven-raise-peek is-left" alt="">
    <img v-if="props.hedgehog === 'both'" :src="peek" class="haven-raise-peek is-right" alt="">
    <img v-if="props.hedgehog === 'cheer'" :src="cheer" class="haven-raise-cheer" alt="">
  </div>
</template>
