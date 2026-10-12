<script setup lang="ts">
const props = defineProps({
  n: { type: [String, Number], required: true },
  title: { type: String },
})
</script>

<template>
  <div class="haven-step">
    <div class="haven-step-n">{{ props.n }}</div>
    <div v-if="props.title" class="haven-step-title">{{ props.title }}</div>
    <div class="haven-step-body"><slot /></div>
  </div>
</template>
