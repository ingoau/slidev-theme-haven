<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'
import excited from '../assets/mascot/excited-hedgehog.webp'

const props = defineProps({
  background: { type: String },
  hedgehog: { type: Boolean, default: true },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout end haven-forest haven-canopy" :style="style">
    <slot />
    <img v-if="props.hedgehog" :src="excited" class="haven-mascot" alt="">
  </div>
</template>
