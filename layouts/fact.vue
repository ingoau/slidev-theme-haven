<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'

const props = defineProps({
  background: { type: String },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout fact haven-forest" :style="style">
    <slot />
  </div>
</template>
