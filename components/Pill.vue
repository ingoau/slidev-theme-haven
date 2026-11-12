<!--
  A white rounded box with brown text, as on the official info slides.
  <Pill label="View our event schedule">haven.hackclub.com/city</Pill>
  <Pill dark>WiFi: Haven · Password: hedgehog</Pill>
-->
<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <div class="haven-pill" :class="{ 'is-dark': props.dark }">
    <div v-if="props.label" class="haven-pill-label">{{ props.label }}</div>
    <div class="haven-pill-body"><slot /></div>
  </div>
</template>
