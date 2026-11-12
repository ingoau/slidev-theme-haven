<!--
  The "Housekeeping!" banner on the village road, from the official opening deck.

  ---
  layout: section
  kicker: Part 2
  ---

  # Housekeeping!
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'

const props = defineProps({
  background: { type: String },
  kicker: { type: String },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout section haven-scene-housekeeping" :style="style">
    <div v-if="props.kicker" class="haven-kicker">{{ props.kicker }}</div>
    <div class="haven-banner">
      <slot />
    </div>
  </div>
</template>
