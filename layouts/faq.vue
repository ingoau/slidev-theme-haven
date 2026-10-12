<!--
  FAQ cards, styled after the site's FAQ section. Two columns.

  ---
  layout: faq
  faqs:
    - q: Am I eligible?
      a: If you're 13–18, yes!
    - q: Is it free?
      a: Totally free — food included.
  ---

  # FAQ
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'

const props = defineProps({
  faqs: { type: Array as () => { q: string, a: string }[], default: () => [] },
  columns: { type: [Number, String], default: 2 },
  background: { type: String },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout faq haven-meadow" :style="style">
    <slot />
    <div class="haven-faq" :style="{ gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))` }">
      <div v-for="(f, i) in props.faqs" :key="i" class="haven-faq-item">
        <div class="haven-faq-q">{{ f.q }}</div>
        <div class="haven-faq-a">{{ f.a }}</div>
      </div>
    </div>
  </div>
</template>
