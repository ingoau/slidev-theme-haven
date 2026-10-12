<!--
  Daven says it: the blockquote becomes a big speech bubble, any paragraph after it is the attribution.

  ---
  layout: quote
  ---

  > Learn something new, meet new friends, and go on an adventure together.

  haven.hackclub.com
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'
import hedgehog from '../assets/mascot/hedgehog.webp'

const props = defineProps({
  background: { type: String },
  hedgehog: { type: Boolean, default: true },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout quote haven-forest" :style="style">
    <slot />
    <img v-if="props.hedgehog" :src="hedgehog" class="haven-peek" alt="">
  </div>
</template>
