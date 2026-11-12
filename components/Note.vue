<!--
  A pale-yellow card with a brown border, like the peer-voting group boxes.
  <Note title="Group 1:">stays at their tables</Note>
-->
<script setup lang="ts">
const props = defineProps({
  title: { type: String },
})
</script>

<template>
  <div class="haven-note">
    <strong v-if="props.title" class="haven-note-title">{{ props.title }}</strong>
    <slot />
  </div>
</template>
