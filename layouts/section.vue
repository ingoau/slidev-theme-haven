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
  <div class="slidev-layout section haven-path" :style="style">
    <div class="haven-board">
      <div v-if="props.kicker" class="haven-kicker">{{ props.kicker }}</div>
      <slot />
    </div>
  </div>
</template>
