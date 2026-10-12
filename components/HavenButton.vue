<script setup lang="ts">
import arrow from '../assets/ui/signup-arrow.webp'

const props = defineProps({
  href: { type: String },
  ghost: { type: Boolean, default: false },
  arrow: { type: Boolean, default: false },
})
</script>

<template>
  <component :is="props.href ? 'a' : 'span'" :href="props.href" target="_blank" class="haven-btn" :class="{ 'is-ghost': props.ghost }">
    <slot />
    <img v-if="props.arrow" :src="arrow" alt="" style="height: 0.9em">
  </component>
</template>
