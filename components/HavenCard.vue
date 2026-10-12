<script setup lang="ts">
import { resolveAssetUrl } from '../layoutHelper'

const props = defineProps({
  title: { type: String },
  image: { type: String },
  variant: { type: String, default: 'orange' }, // orange | cream | green
})
</script>

<template>
  <div class="haven-card" :class="`is-${props.variant}`">
    <h3 v-if="props.title">{{ props.title }}</h3>
    <img v-if="props.image" :src="resolveAssetUrl(props.image)" alt="">
    <div class="haven-card-body"><slot /></div>
  </div>
</template>
