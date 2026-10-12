<!--
  A grid of people. Pass them in frontmatter — image is optional (falls back to initials).

  ---
  layout: people
  people:
    - name: Daven
      pronouns: he/him
      role: Mascot
      image: /photos/daven.png
      description: Official hedgehog. Soft, fuzzy, spiky.
  ---

  # Meet the organisers
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle } from '../layoutHelper'
import PersonCard from '../components/PersonCard.vue'

interface Person { name: string, pronouns?: string, image?: string, description?: string, role?: string }

const props = defineProps({
  people: { type: Array as () => Person[], default: () => [] },
  columns: { type: [Number, String] },
  background: { type: String },
})

const cols = computed(() => {
  if (props.columns)
    return Number(props.columns)
  const n = props.people.length
  return n <= 4 ? Math.max(n, 1) : n <= 6 ? 3 : 4
})
const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout people haven-meadow" :style="style">
    <slot />
    <div class="haven-people-grid" :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }">
      <PersonCard v-for="(p, i) in props.people" :key="i" v-bind="p" />
    </div>
  </div>
</template>
