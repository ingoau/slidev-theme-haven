<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'
import white from '../assets/logos/haven-logo-white.webp'
import orange from '../assets/logos/haven-logo-orange.webp'
import watercolor from '../assets/logos/haven-logo-color.webp'
import hedgehog from '../assets/mascot/hedgehog.webp'

const props = defineProps({
  background: { type: String },
  // white | orange | watercolor | false
  logo: { type: [String, Boolean], default: 'white' },
  hedgehog: { type: Boolean, default: true },
})

const style = computed(() => backgroundStyle(props.background))
const logoSrc = computed(() => props.logo === false ? undefined : ({ white, orange, watercolor } as Record<string, string>)[props.logo === true ? 'white' : props.logo] ?? white)
</script>

<template>
  <div class="slidev-layout cover haven-forest haven-canopy" :style="style">
    <img v-if="logoSrc" :src="logoSrc" class="haven-logo" alt="Hack Club Haven">
    <slot />
    <img v-if="props.hedgehog" :src="hedgehog" class="haven-peek" alt="">
  </div>
</template>
