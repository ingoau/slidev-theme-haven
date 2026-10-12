<!--
  A live countdown over the forest — great on a second screen during the jam.

  ---
  layout: countdown
  until: 2026-11-15T14:00:00+11:00
  label: Submissions close in
  done: Pencils down! 🎉
  ---

  Publish your game on itch.io before time runs out.
-->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { backgroundStyle } from '../layoutHelper'

const props = defineProps({
  until: { type: String, required: true },
  label: { type: String, default: 'Time left' },
  done: { type: String, default: "Time's up!" },
  background: { type: String },
})

const now = ref(Date.now())
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => { timer = setInterval(() => (now.value = Date.now()), 1000) })
onUnmounted(() => clearInterval(timer))

const target = computed(() => new Date(props.until).getTime())
const left = computed(() => Math.max(0, Math.floor((target.value - now.value) / 1000)))
const parts = computed(() => {
  const s = left.value
  const d = Math.floor(s / 86400)
  const units = [
    { n: Math.floor(s / 3600) % 24, u: 'hours' },
    { n: Math.floor(s / 60) % 60, u: 'mins' },
    { n: s % 60, u: 'secs' },
  ]
  return d > 0 ? [{ n: d, u: d === 1 ? 'day' : 'days' }, ...units] : units
})
const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout countdown haven-forest" :style="style">
    <div class="haven-countdown-label">{{ left > 0 ? props.label : '' }}</div>
    <div v-if="left > 0" class="haven-countdown">
      <div v-for="p in parts" :key="p.u" class="haven-countdown-unit">
        <span class="haven-countdown-n">{{ String(p.n).padStart(2, '0') }}</span>
        <span class="haven-countdown-u">{{ p.u }}</span>
      </div>
    </div>
    <div v-else class="haven-countdown-done">{{ props.done }}</div>
    <div class="haven-countdown-body"><slot /></div>
  </div>
</template>
