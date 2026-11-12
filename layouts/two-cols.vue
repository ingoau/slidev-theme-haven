<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  // village (default) puts the content on the housekeeping card; meadow / any other scene gives the signboard
  scene: { type: String, default: 'village' },
  class: { type: String },
  layoutClass: { type: String },
})

const village = computed(() => props.scene === 'village')
const sceneCls = computed(() => village.value ? 'haven-scene-village is-village' : `haven-scene-${props.scene}`)
</script>

<template>
  <div class="slidev-layout two-cols haven-shell" :class="[sceneCls, props.layoutClass]">
    <div class="haven-board two-columns">
      <div class="col-left" :class="props.class">
        <slot />
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
