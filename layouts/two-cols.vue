<script setup lang="ts">
const props = defineProps({
  class: { type: String },
  layoutClass: { type: String },
})
</script>

<template>
  <div class="slidev-layout two-cols haven-shell haven-meadow" :class="props.layoutClass">
    <div class="haven-board two-columns">
      <div class="col-left" :class="props.class">
        <slot />
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
