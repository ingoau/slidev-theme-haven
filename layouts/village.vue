<!--
  The housekeeping card from the official opening deck: a brown card on the village board,
  hand-lettered in Pangolin. Good for code of conduct, safety, meals, workshops, AI policy…

  ---
  layout: village
  wide: false   # true stretches the card for bigger tables
  ---

  # Meal Schedule

  Free food, drinks and snacks

  | | | |
  |---|---|---|
  | Day 1 | Lunch (1 PM – 1:30 PM) | Pizza |
-->
<script setup lang="ts">
const props = defineProps({
  wide: { type: Boolean, default: false },
  align: { type: String, default: 'center' }, // center | left
})
</script>

<template>
  <div class="slidev-layout village haven-scene-village">
    <div class="haven-village-card" :class="{ 'is-wide': props.wide, 'is-left': props.align === 'left' }">
      <slot />
    </div>
  </div>
</template>
