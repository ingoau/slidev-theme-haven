import { defineConfig } from 'vite'

// Slidev 53.0.0's own CSS trips lightningcss' minifier on `slidev build`; skip CSS minification.
export default defineConfig({
  build: { cssMinify: false },
})
