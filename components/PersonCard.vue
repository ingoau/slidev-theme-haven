<!--
  A person on a little signboard: round photo (or initials), name, pronouns, blurb.

  <PersonCard name="Daven" pronouns="he/him" image="/daven.png">Official hedgehog.</PersonCard>
-->
<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../layoutHelper'

const props = defineProps({
  name: { type: String, required: true },
  pronouns: { type: String },
  image: { type: String },
  description: { type: String },
  role: { type: String },
})

const initials = computed(() => props.name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase())
// stable colour per name so initials avatars don't all look the same
const tint = computed(() => {
  const tints = ['var(--haven-carrot)', 'var(--haven-pumpkin)', 'var(--haven-lucky)', 'var(--haven-faded)', 'var(--haven-teal)']
  let h = 0
  for (const c of props.name) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return tints[h % tints.length]
})
</script>

<template>
  <div class="haven-person">
    <img v-if="props.image" :src="resolveAssetUrl(props.image)" class="haven-person-avatar" alt="">
    <div v-else class="haven-person-avatar is-initials" :style="{ background: tint }">{{ initials }}</div>
    <div class="haven-person-name">{{ props.name }}</div>
    <div v-if="props.pronouns" class="haven-person-pronouns">{{ props.pronouns }}</div>
    <div v-if="props.role" class="haven-person-role">{{ props.role }}</div>
    <div class="haven-person-desc">
      <template v-if="props.description">{{ props.description }}</template>
      <slot />
    </div>
  </div>
</template>
