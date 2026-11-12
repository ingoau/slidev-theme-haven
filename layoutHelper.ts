import type { CSSProperties } from 'vue'

/** Resolve a frontmatter url against the deck's base url (mirrors @slidev/client) */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

/** Frontmatter `background:` override — a colour or an image url */
export function backgroundStyle(background?: string): CSSProperties {
  if (!background)
    return {}
  if (background[0] === '#' || background.startsWith('rgb'))
    return { background }
  return {
    background: `url("${resolveAssetUrl(background)}") center / cover no-repeat`,
  }
}

/** Official ceremony-deck backdrops, usable as `scene:` on most layouts */
export const scenes = ['meadow', 'flowers', 'forest', 'path', 'plaid', 'picnic', 'team', 'village', 'housekeeping', 'signboard', 'frame', 'fire'] as const

/** Class for a `scene:` frontmatter value, falling back to the layout's own default */
export function sceneClass(scene: string | undefined, fallback: string) {
  const s = scene && (scenes as readonly string[]).includes(scene) ? scene : fallback
  return `haven-scene-${s}`
}
