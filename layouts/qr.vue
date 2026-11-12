<!--
  Big title, a QR code and the link in a pill — "SUBMIT & VOTE / hack.club/vote".
  The QR code is generated from `url`; pass `qr:` to use your own image instead.

  ---
  layout: qr
  url: https://hack.club/vote
  label: hack.club/vote   # defaults to the url without https://
  scene: path
  ---

  # SUBMIT & VOTE
  ## for your favorite games
-->
<script setup lang="ts">
import { computed } from 'vue'
import { backgroundStyle, resolveAssetUrl, sceneClass } from '../layoutHelper'
import QrCode from '../components/QrCode.vue'

const props = defineProps({
  url: { type: String, required: true },
  label: { type: String },
  qr: { type: String },
  scene: { type: String },
  background: { type: String },
})

const label = computed(() => props.label ?? props.url.replace(/^https?:\/\//, '').replace(/\/$/, ''))
const style = computed(() => backgroundStyle(props.background))
</script>

<template>
  <div class="slidev-layout qr" :class="sceneClass(props.scene, 'path')" :style="style">
    <div class="haven-qr-head"><slot /></div>
    <div class="haven-qr-card">
      <img v-if="props.qr" :src="resolveAssetUrl(props.qr)" alt="">
      <QrCode v-else :value="props.url" />
    </div>
    <a :href="props.url" target="_blank" class="haven-qr-pill">{{ label }}</a>
  </div>
</template>
