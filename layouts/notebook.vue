<!--
  The spiral notebook from the "how to join" section. Default slot → left page, ::right:: → right page.
  An optional `heading` sits outside the book in glowing white.

  ---
  layout: notebook
  heading: Here's how it works
  ---

  <Step n="1" title="Sign up">...</Step>

  ::right::

  <Step n="3" title="Build">...</Step>
-->
<script setup lang="ts">
const props = defineProps({
  heading: { type: String },
})
</script>

<template>
  <div class="slidev-layout notebook haven-notebook">
    <div v-if="props.heading" class="haven-notebook-title">{{ props.heading }}</div>
    <div class="haven-page is-left">
      <slot />
      <slot name="left" />
    </div>
    <div class="haven-page is-right">
      <slot name="right" />
    </div>
  </div>
</template>
