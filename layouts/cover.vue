<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'
import logo from '../assets/logos/haven-logo-white.webp'
import hedgehog from '../assets/mascot/hedgehog.webp'

const props = defineProps({
  background: { type: String },
  logo: { type: Boolean, default: true },
  hedgehog: { type: Boolean, default: true },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout cover haven-forest haven-canopy" :style="style">
    <img v-if="props.logo" :src="logo" class="haven-logo" alt="Hack Club Haven">
    <slot />
    <img v-if="props.hedgehog" :src="hedgehog" class="haven-peek" alt="">
  </div>
</template>
