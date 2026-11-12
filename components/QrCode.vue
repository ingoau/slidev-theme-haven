<!--
  A crisp SVG QR code. <QrCode value="https://hack.club/vote" size="12rem" />
-->
<script setup lang="ts">
import { computed } from 'vue'
import { renderSVG } from 'uqr'

const props = defineProps({
  value: { type: String, required: true },
  size: { type: String },
  color: { type: String, default: '#000000' },
})

const svg = computed(() => renderSVG(props.value, { border: 0, blackColor: props.color, whiteColor: 'transparent', ecc: 'M' }))
</script>

<template>
  <div class="haven-qrcode" :style="{ width: props.size, height: props.size }" v-html="svg" />
</template>
