<script setup lang="ts">
const props = defineProps({
  tail: { type: String, default: 'right' }, // right | left | none
})
</script>

<template>
  <div class="haven-bubble" :class="`tail-${props.tail}`">
    <slot />
  </div>
</template>
