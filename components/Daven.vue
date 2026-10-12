<!--
  The Haven hedgehog. Absolutely positioned — pass any of top/right/bottom/left.

  <Daven variant="thumbs" bottom="0" right="40px" width="180px" />
-->
<script setup lang="ts">
import { computed } from 'vue'
import peek from '../assets/mascot/hedgehog.webp'
import excited from '../assets/mascot/excited-hedgehog.webp'
import pixel from '../assets/mascot/daven.webp'
import thumbs from '../assets/mascot/thumbs-up.webp'

const props = defineProps({
  variant: { type: String, default: 'peek' }, // peek | excited | thumbs | pixel
  top: { type: String },
  right: { type: String },
  bottom: { type: String },
  left: { type: String },
  width: { type: String, default: '160px' },
  flip: { type: Boolean, default: false },
})

const src = computed(() => ({ peek, excited, thumbs, pixel } as Record<string, string>)[props.variant] ?? peek)
const style = computed(() => ({
  top: props.top,
  right: props.right,
  bottom: props.bottom ?? (props.top ? undefined : '-4px'),
  left: props.left,
  width: props.width,
  transform: props.flip ? 'scaleX(-1)' : undefined,
  imageRendering: props.variant === 'pixel' ? 'pixelated' as const : undefined,
}))
</script>

<template>
  <div class="haven-daven" :style="style">
    <img :src="src" alt="">
  </div>
</template>
