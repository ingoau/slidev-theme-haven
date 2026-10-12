<!--
  A timeline on a signboard. Mark the current item with `now: true`.

  ---
  layout: agenda
  items:
    - time: "9:00"
      title: Doors open
      note: Breakfast in the hall
    - time: "9:30"
      title: Opening ceremony
      now: true
  ---

  # Saturday
-->
<script setup lang="ts">
import { computed } from 'vue'

interface Item { time?: string, title: string, note?: string, now?: boolean }

const props = defineProps({
  items: { type: Array as () => Item[], default: () => [] },
  columns: { type: [Number, String] },
})

const cols = computed(() => Number(props.columns ?? (props.items.length > 6 ? 2 : 1)))
const rows = computed(() => Math.ceil(props.items.length / cols.value))
</script>

<template>
  <div class="slidev-layout agenda haven-shell haven-meadow">
    <div class="haven-board">
      <slot />
      <ol class="haven-agenda" :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${rows}, auto)` }">
        <li v-for="(item, i) in props.items" :key="i" :class="{ 'is-now': item.now }">
          <span class="haven-agenda-time">{{ item.time }}</span>
          <span class="haven-agenda-dot" />
          <span class="haven-agenda-text">
            <span class="haven-agenda-title">{{ item.title }}</span>
            <span v-if="item.now" class="haven-agenda-now">now!</span>
            <span v-if="item.note" class="haven-agenda-note">{{ item.note }}</span>
          </span>
        </li>
      </ol>
    </div>
  </div>
</template>
