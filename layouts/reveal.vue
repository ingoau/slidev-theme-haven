<!--
  The flaming-hedgehog reveal card. Link it to your theme video / next slide with `href`.

  ---
  layout: reveal
  text: (click here to reveal)
  href: https://youtu.be/...
  ---
-->
<script setup lang="ts">
const props = defineProps({
  text: { type: String, default: '(click here to reveal)' },
  href: { type: String },
})
</script>

<template>
  <div class="slidev-layout reveal haven-scene-fire">
    <component :is="props.href ? 'a' : 'div'" :href="props.href" target="_blank" class="haven-reveal-text">
      {{ props.text }}
    </component>
    <div class="haven-reveal-body"><slot /></div>
  </div>
</template>
