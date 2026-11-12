<!--
  A big outlined title over the picnic blanket — THE PREMISE, THE THEME IS…, drumroll please.
  Anything after the heading is centred underneath (try <Pill>s and <Note>s).

  ---
  layout: statement
  scene: plaid        # plaid | picnic | team | meadow | flowers | forest | …
  align: center       # center | top | bottom
  ---

  # THE PREMISE
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle, sceneClass } from '../layoutHelper'

const props = defineProps({
  background: { type: String },
  scene: { type: String },
  align: { type: String, default: 'center' },
})

const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout statement" :class="[sceneClass(props.scene, 'plaid'), `is-${props.align}`]" :style="style">
    <slot />
  </div>
</template>
