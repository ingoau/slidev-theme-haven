<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  // village (default) puts the content on the housekeeping card; meadow / any other scene gives the signboard
  scene: { type: String, default: 'village' },
})

const village = computed(() => props.scene === 'village')
const sceneCls = computed(() => village.value ? 'haven-scene-village is-village' : `haven-scene-${props.scene}`)
</script>

<template>
  <div class="slidev-layout default haven-shell" :class="sceneCls">
    <div class="haven-board">
      <slot />
    </div>
  </div>
</template>
