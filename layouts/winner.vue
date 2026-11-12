<!--
  A winner card in the official watercolour frame.

  ---
  layout: winner
  place: 1
  game: Game Title
  image: /winners/game.png
  team: [Name, Name, Name]   # or a string
  ---
-->
<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../layoutHelper'

const props = defineProps({
  place: { type: [String, Number] },
  game: { type: String, default: 'Game Title' },
  image: { type: String },
  team: { type: [String, Array] as unknown as () => string | string[] },
})

const team = computed(() => Array.isArray(props.team) ? props.team.join(', ') : props.team)
</script>

<template>
  <div class="slidev-layout winner haven-scene-frame">
    <div class="haven-winner">
      <h1 class="haven-winner-title">
        <span v-if="props.place" class="haven-winner-place">{{ props.place }})</span>
        {{ props.game }}
      </h1>
      <img v-if="props.image" :src="resolveAssetUrl(props.image)" class="haven-winner-shot" alt="">
      <div v-else class="haven-winner-shot is-empty" />
      <div v-if="team" class="haven-winner-team">By {{ team }}</div>
      <div class="haven-winner-extra"><slot /></div>
    </div>
  </div>
</template>
