# slidev-theme-haven

A cosy autumn-forest [Slidev](https://sli.dev) theme for **Hack Club Haven**, built from
[haven.hackclub.com](https://haven.hackclub.com/) and the Haven brand assets.

- **Type:** Darumadrop One (display) + Jua (body), bundled locally so decks work offline
- **Palette:** the site's own `--color-haven-*` tokens (green `#b8c220`, orange `#ed5615` / `#fa681b`,
  yellow `#ffd059`, butter `#ffe382`, brown `#b8774a` / `#dda47d`, teal `#2cbf90`)
- **Motifs:** wooden signboards with leaf corners, name plaques, white speech bubbles,
  yellow highlighter, orange picnic cards, Daven the hedgehog peeking in

## Use it

```md
---
theme: ./path/to/slidev-theme-haven   # or `haven` once published as slidev-theme-haven
---
```

Run the demo deck:

```bash
npm install && npm run dev
```

## Layouts

| Layout        | Look                                                                    | Frontmatter                                |
| ------------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| `cover`       | Autumn forest, white Haven logo, hedgehog peeking bottom-right          | `background`, `logo: false`, `hedgehog: false` |
| `default`     | Meadow with a cream signboard; first `# h1` becomes the brown plaque    |                                            |
| `center`      | Small centred signboard                                                 |                                            |
| `two-cols`    | Signboard split in two (`::right::`)                                    |                                            |
| `image-right` / `image-left` | Signboard + taped polaroid                              | `image`, `caption`, `tilt`                 |
| `intro`       | Speaker card with round avatar                                          | `avatar`                                   |
| `section`     | Big signboard on the village-path map                                   | `kicker`, `background`                     |
| `statement`   | Glowing white headline framed by the site's sparkle marks               | `background`                               |
| `bubbles`     | Forest + hedgehog; every paragraph / list item is a speech bubble       | `background`, `hedgehog: false`            |
| `cards`       | Orange picnic-blanket backdrop for `<HavenCard>` grids                  | `background`                               |
| `fact`        | Huge butter-yellow number over the forest                               | `background`                               |
| `quote`       | Cocoa social-post style with leaf canopy + hedgehog                     | `hedgehog: false`                          |
| `end`         | Forest + excited hedgehog                                               | `background`, `hedgehog: false`            |

## Components

```md
<mark>highlighted</mark>  or  <Marker>highlighted</Marker>
<HavenCard title="Scrapyard" image="/photos/x.webp" variant="orange|cream|green">body</HavenCard>
<Step n="1" title="Find a team">Teams of up to 4.</Step>
<HavenButton href="https://haven.hackclub.com" arrow>Sign up!</HavenButton>
<Bubble tail="left|right|none">Speech bubble</Bubble>
<Polaroid src="/photos/x.webp" caption="hi" tilt="-3" max-height="10rem" />
<Sticker tilt="-4">new!</Sticker>
<Daven variant="peek|excited|pixel" bottom="0" right="40px" width="160px" flip />
```

UnoCSS colours are available too: `text-haven-orange`, `bg-haven-butter`, `font-display`, etc.

> `==mark==` syntax isn't enabled in Slidev by default — use `<mark>`.

## Notes

- Background art, mascot and UI pieces come from the haven.hackclub.com site export; photos in
  `public/photos` are only for the demo deck.
- The demo's schedule, workshops and logistics are placeholder content.
