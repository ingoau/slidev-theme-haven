<!--
  Autumn forest title card.

  ---
  layout: cover
  variant: left        # left | center | corner
  kicker: WELCOME TO   # center variant: line above the logo
  logo: white          # white | orange | watercolor | false
  ---

  # IN YOUR CITY
-->
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
  hedgehog: { type: [Boolean, String], default: 'auto' },
  variant: { type: String, default: 'left' },
  kicker: { type: String },
})

const style = computed(() => backgroundStyle(props.background))
const logoSrc = computed(() => props.logo === false ? undefined : ({ white, orange, watercolor } as Record<string, string>)[props.logo === true ? 'white' : props.logo] ?? white)
// the hedgehog only fits the left-aligned card by default
const showHedgehog = computed(() => props.hedgehog === 'auto' ? props.variant === 'left' : props.hedgehog !== false && props.hedgehog !== 'false')
</script>

<template>
  <div class="slidev-layout cover haven-forest" :class="`is-${props.variant}`" :style="style">
    <div v-if="props.kicker" class="haven-kicker-title">{{ props.kicker }}</div>
    <img v-if="logoSrc" :src="logoSrc" class="haven-logo" alt="Hack Club Haven">
    <slot />
    <img v-if="showHedgehog" :src="hedgehog" class="haven-peek" alt="">
  </div>
</template>
