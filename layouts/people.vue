<!--
  A grid of people. Pass them in frontmatter — image is optional (falls back to initials).

  variant: cards    → mini signboards with round photos (default)
  variant: plaques  → the official "Say hi to the team!" look: name plaques over square photos
                      on the picnic blanket, title underneath

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
import { backgroundStyle, resolveAssetUrl, sceneClass } from '../layoutHelper'
import PersonCard from '../components/PersonCard.vue'

interface Person { name: string, pronouns?: string, image?: string, description?: string, role?: string }

const props = defineProps({
  people: { type: Array as () => Person[], default: () => [] },
  columns: { type: [Number, String] },
  background: { type: String },
  variant: { type: String, default: 'cards' },
  scene: { type: String },
  heading: { type: String }, // top | bottom
})

const plaques = computed(() => props.variant === 'plaques')
const cols = computed(() => {
  if (props.columns)
    return Number(props.columns)
  const n = props.people.length
  if (plaques.value)
    return n <= 5 ? Math.max(n, 1) : Math.ceil(n / 2)
  return n <= 4 ? Math.max(n, 1) : n <= 6 ? 3 : 4
})
const headingPos = computed(() => props.heading ?? (plaques.value ? 'bottom' : 'top'))
const initials = (name: string) => name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase()
const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div
    class="slidev-layout people"
    :class="[sceneClass(props.scene, plaques ? 'team' : 'meadow'), `is-${props.variant}`, `heading-${headingPos}`]"
    :style="style"
  >
    <slot />
    <div v-if="plaques" class="haven-plaque-grid" :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }">
      <div v-for="(p, i) in props.people" :key="i" class="haven-plaque-person">
        <div class="haven-plaque-name">{{ p.name }}</div>
        <img v-if="p.image" :src="resolveAssetUrl(p.image)" class="haven-plaque-photo" alt="">
        <div v-else class="haven-plaque-photo is-empty">{{ initials(p.name) }}</div>
        <div v-if="p.role || p.pronouns" class="haven-plaque-role">{{ [p.pronouns, p.role].filter(Boolean).join(' · ') }}</div>
      </div>
    </div>
    <div v-else class="haven-people-grid" :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }">
      <PersonCard v-for="(p, i) in props.people" :key="i" v-bind="p" />
    </div>
  </div>
</template>
