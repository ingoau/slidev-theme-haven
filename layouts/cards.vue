<!--
  Picnic-blanket backdrop for <HavenCard> grids.

  ---
  layout: cards
  ---

  # Past events

  <div class="grid grid-cols-3 gap-6">
    <HavenCard title="Scrapyard" image="...">...</HavenCard>
  </div>
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'

const props = defineProps({
  background: { type: String },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout cards haven-picnic" :style="style">
    <slot />
  </div>
</template>
