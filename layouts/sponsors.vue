<!--
  A thank-you wall, grouped by tier in the order tiers first appear. Logos are optional.

  ---
  layout: sponsors
  sponsors:
    - name: Hack Club
      logo: /logos/hackclub.svg
      tier: Presented by
    - name: Your Sponsor
      tier: Gold
  ---

  # Thank you, sponsors!
-->
<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../layoutHelper'

interface Sponsor { name: string, logo?: string, tier?: string, url?: string }

const props = defineProps({
  sponsors: { type: Array as () => Sponsor[], default: () => [] },
})

const tiers = computed(() => {
  const map = new Map<string, Sponsor[]>()
  for (const s of props.sponsors) {
    const t = s.tier ?? ''
    if (!map.has(t))
      map.set(t, [])
    map.get(t)!.push(s)
  }
  return [...map.entries()].map(([tier, list], i) => ({ tier, list, size: i === 0 ? 'lg' : i === 1 ? 'md' : 'sm' }))
})
</script>

<template>
  <div class="slidev-layout sponsors haven-shell haven-meadow">
    <div class="haven-board">
      <slot />
      <div class="haven-sponsors">
        <section v-for="t in tiers" :key="t.tier" class="haven-sponsor-tier" :class="`is-${t.size}`">
          <div v-if="t.tier" class="haven-sponsor-tier-name">{{ t.tier }}</div>
          <div class="haven-sponsor-row">
            <component :is="s.url ? 'a' : 'div'" v-for="(s, i) in t.list" :key="i" :href="s.url" target="_blank" class="haven-sponsor">
              <img v-if="s.logo" :src="resolveAssetUrl(s.logo)" :alt="s.name">
              <span v-else>{{ s.name }}</span>
            </component>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
