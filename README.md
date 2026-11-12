# slidev-theme-haven

> [!NOTE]
> This theme was generated with AI (Claude), directed and reviewed by a human.

A cosy autumn-forest [Slidev](https://sli.dev) theme for **Hack Club Haven** game jams, built from
the official Haven opening & closing ceremony decks, [haven.hackclub.com](https://haven.hackclub.com/)
and the Haven Brand Guide.

![Cover layout](docs/screenshots/cover.webp)

- **Type:** Jua everywhere, with the official decks' white-with-yellow-outline titles, and
  Pangolin for the hand-lettered housekeeping slides — all bundled so decks work offline.
  Darumadrop One (brand guide) is still available as `font-brand` / `--haven-font-brand`.
- **Artwork:** the official ceremony-deck scenes — autumn forest, picnic blanket, village board,
  wooden signboard, winner frame, the flaming hedgehog — plus the site's art
- **Palette:** the brand guide's colours plus the decks' ink brown `#8C371A` and outline yellow
- **27 layouts** covering both ceremonies and everything between: openers, "raise your hand if…",
  the premise and theme reveal, shipping steps, housekeeping cards, agendas, people, FAQs, a live
  countdown, QR codes for voting, winners, sponsor walls and a send-off

> Community-made for Haven organisers — not an official Hack Club project.

## Install

```bash
npm install slidev-theme-haven
```

```md
---
theme: haven
---

# Welcome to Haven!
```

Requires Slidev 53 or newer. Slidev will also offer to install the theme the first time you use
`theme: haven`.

Want to see every layout? Clone the repo and run the demo deck ([example.md](example.md)):

```bash
npm install && npm run dev
```

## Layouts

Grouped roughly in the order you'd use them in a deck. Every layout name below is what goes in
`layout:`; the screenshots come straight from the demo deck.

### Scenes

Most full-bleed layouts take `scene:` to swap their backdrop for any of the official artworks:
`meadow`, `flowers`, `forest`, `path`, `plaid`, `picnic`, `team`, `village`, `housekeeping`,
`signboard`, `frame`, `fire`. `background:` still takes any colour or image url.

### Village mode

The text-heavy layouts — `default`, `two-cols`, `center`, `agenda`, `faq` and `sponsors` — sit on
the official village backdrop with the brown housekeeping card, like the info slides in the
ceremony decks: the first `# h1` becomes the hand-lettered card title, text is cream, tables get
the yellow cells. Pass `scene: meadow` (or any other scene) to get the wooden signboard instead.

### Openers

#### `cover`
Autumn forest with the gold frame from the official title cards.
Frontmatter: `variant: left | center | corner`, `kicker` (line above the logo in the centred
variant), `logo: white | orange | watercolor | false`, `hedgehog`, `background`.

```yaml
layout: cover
variant: center
kicker: WELCOME TO
---
# IN YOUR CITY
```

![cover](docs/screenshots/cover.webp)

![cover, corner variant](docs/screenshots/cover-corner.webp)

#### `raise-hand`
The official "Raise your hand if…" signboard. A paragraph is the small lead-in, the heading the
big line. Frontmatter: `label` (tab text), `hedgehog: peek | cheer | both | none`.

```md
---
layout: raise-hand
---

this was

# your first ever hackathon
```

![raise-hand](docs/screenshots/raise-hand.webp)

#### `intro`
Speaker card with a round avatar. Frontmatter: `avatar` (defaults to Daven).

![intro](docs/screenshots/intro.webp)

#### `people`
A grid of people on mini signboards. `image` is optional — without one you get coloured
initials. Columns are picked automatically (override with `columns`).

```yaml
layout: people
people:
  - name: Alex Rivera
    pronouns: they/them
    role: Lead organiser
    image: /photos/alex.webp
    description: Ask me about anything.
```

![people](docs/screenshots/people.webp)

`variant: plaques` gives the official "Say hi to the team!" look — name plaques over square
photos on the picnic blanket, with the title underneath (`heading: top` moves it back up).

![people, plaques variant](docs/screenshots/people-plaques.webp)

#### `bubbles`
Forest + hedgehog; every paragraph or list item becomes a speech bubble.
Frontmatter: `background`, `hedgehog: false`.

![bubbles](docs/screenshots/bubbles.webp)

### Structure & emphasis

#### `section`
The "Housekeeping!" banner on the village road. Frontmatter: `kicker`, `background`.

![section](docs/screenshots/section.webp)

#### `statement`
A huge outlined title over the picnic blanket — THE PREMISE, THE THEME IS…, drumroll please.
An `## h2` becomes a smaller outlined line; anything else is centred underneath, which makes it
the place for `<Pill>`s and `<Note>`s. Frontmatter: `scene` (default `plaid`),
`align: center | top | bottom`, `background`.

![statement](docs/screenshots/statement.webp)

![statement with pills](docs/screenshots/statement-info.webp)

![statement with notes](docs/screenshots/statement-voting.webp)

#### `reveal`
The flaming hedgehog. Frontmatter: `text` (default "(click here to reveal)"), `href`.

![reveal](docs/screenshots/reveal.webp)

#### `steps`
An ordered list as orange number circles and white cards — "What's shipping?".
Frontmatter: `scene` (default `flowers`).

![steps](docs/screenshots/steps.webp)

#### `showcase`
Outlined text beside a free-standing image, like the "GET THIS SHIRT!" slide. Frontmatter:
`image` (`shirt` for the bundled Haven tee), `caption`, `reverse`, `scene`.

![showcase](docs/screenshots/showcase.webp)

#### `fact`
A huge butter-yellow number over the forest. Frontmatter: `background`.

![fact](docs/screenshots/fact.webp)

#### `quote`
Daven says it: the blockquote is one big speech bubble, a paragraph after it is the attribution.
Frontmatter: `background`, `hedgehog: false`.

![quote](docs/screenshots/quote.webp)

### Everyday content

#### `default`
The village card (see *Village mode*). With `scene: meadow` it's a wooden signboard whose first
`# h1` becomes the name tab. Tables, lists and code blocks are styled to match either way.

![default](docs/screenshots/default.webp)

![default with code](docs/screenshots/code.webp)

#### `two-cols`
The card split in two (`::right::`). Takes `scene` like `default`.

![two-cols](docs/screenshots/two-cols.webp)

#### `image-right` / `image-left`
Signboard plus a taped polaroid. Frontmatter: `image`, `caption`, `tilt`.

![image-right](docs/screenshots/image-right.webp)

![image-left](docs/screenshots/image-left.webp)

#### `center`
A smaller centred card — good for a single question or a reveal. Takes `scene` like `default`.

![center](docs/screenshots/center.webp)

### Event logistics

#### `village`
The housekeeping card: a brown card on the village board, hand-lettered in Pangolin — code of
conduct, safety, meals, workshops, AI policy. `**bold**` is pale yellow; markdown tables get the
official yellow cells (leave the header row empty to hide it). Frontmatter: `wide`,
`align: center | left`.

```md
---
layout: village
---

# Meal Schedule

Free food, drinks and snacks

| | | |
| --- | --- | --- |
| Day 1 | Lunch (1 PM – 1:30 PM) | Pizza |
```

![village](docs/screenshots/village.webp)

![village with a table](docs/screenshots/village-table.webp)

#### `agenda`
A timeline on the village card. `now: true` highlights the current item; more than 6 items split into
two columns (override with `columns`). Takes `scene`.

```yaml
layout: agenda
items:
  - time: "9:30"
    title: Opening ceremony
    note: Main hall
    now: true
```

![agenda](docs/screenshots/agenda.webp)

#### `notebook`
The site's spiral notebook: the default slot fills the left page, `::right::` fills the right.
Frontmatter: `heading` (white glowing title outside the book). Best with two `<Step>`s per page.

![notebook](docs/screenshots/notebook.webp)

#### `cards`
Orange picnic-blanket backdrop for `<HavenCard>` grids. Frontmatter: `background`.

![cards](docs/screenshots/cards.webp)

#### `faq`
Question cards in the style of the site's FAQ. Frontmatter: `faqs` (list of `q`/`a`), `columns`
(default 2), `scene`, `background`.

![faq](docs/screenshots/faq.webp)

#### `countdown`
A live countdown over the forest — handy on a second screen during the jam. Shows `done` once
the time passes; the slide body appears underneath.

```yaml
layout: countdown
until: 2026-11-15T14:00:00
label: Submissions close in
done: Pencils down! 🎉
```

![countdown](docs/screenshots/countdown.webp)

### Closers

#### `qr`
Big title, a generated QR code and the link in a brown pill — "SUBMIT & VOTE". Frontmatter:
`url` (required), `label` (defaults to the url without `https://`), `qr` (your own image instead),
`scene` (default `path`).

```md
---
layout: qr
url: https://hack.club/vote
---

# SUBMIT & VOTE
## for your favorite games
```

![qr](docs/screenshots/qr.webp)

#### `winner`
A winner in the watercolour frame. Frontmatter: `place`, `game`, `image`, `team` (string or list).

```yaml
layout: winner
place: 1
game: Hedgehog Hop
image: /winners/hedgehog-hop.png
team: [Alex, Priya, Jordan]
```

![winner](docs/screenshots/winner.webp)

#### `sponsors`
A thank-you wall grouped by tier (in the order tiers first appear; earlier tiers get bigger
tiles). `logo` and `url` are optional — without a logo the name is shown. Takes `scene`.

```yaml
layout: sponsors
sponsors:
  - name: Hack Club
    tier: Presented by
  - name: Acme
    logo: /sponsors/acme.svg
    tier: Gold
```

![sponsors](docs/screenshots/sponsors.webp)

#### `end`
Forest + excited hedgehog. Frontmatter: `background`, `hedgehog: false`.

![end](docs/screenshots/end.webp)

## Components

```md
<mark>highlighted</mark>  or  <Marker>highlighted</Marker>
<HavenCard title="Scrapyard" image="/photos/x.webp" variant="orange|cream|green">body</HavenCard>
<PersonCard name="Alex Rivera" pronouns="they/them" role="Lead organiser" image="/photos/alex.webp">Blurb</PersonCard>
<Step n="1" title="Find a team">Teams of up to 4.</Step>
<HavenButton href="https://haven.hackclub.com" arrow>Sign up!</HavenButton>
<Bubble tail="left|right|none">Speech bubble</Bubble>
<Polaroid src="/photos/x.webp" caption="hi" tilt="-3" max-height="10rem" />
<Sticker tilt="-4">new!</Sticker>
<Daven variant="peek|excited|thumbs|pixel" bottom="0" right="40px" width="160px" flip />
<Pill label="Important links">hack.club/hv</Pill>   <Pill dark>WiFi: …</Pill>
<Note title="Group 1:">stays at their tables</Note>
<QrCode value="https://hack.club/vote" size="10rem" />
```

> `==mark==` syntax isn't enabled in Slidev by default — use `<mark>`.

## Palette

From the Haven Brand Guide → Fonts + Colors. Available as CSS variables (`--haven-lime`, …) and
UnoCSS colours (`text-haven-lime`, `bg-haven-banana`, …).

| Role      | Name           | Hex       | Token           |
| --------- | -------------- | --------- | --------------- |
| Primary   | lime green     | `#B8C11F` | `haven-lime`    |
| Primary   | carrot orange  | `#FC8616` | `haven-carrot`  |
| Secondary | banana yellow  | `#F9DD60` | `haven-banana`  |
| Secondary | pumpkin orange | `#E87136` | `haven-pumpkin` |
| Secondary | faded orange   | `#DFA063` | `haven-faded`   |
| Secondary | burnt umber    | `#783D2B` | `haven-umber`   |
| Secondary | lucky green    | `#A8A237` | `haven-lucky`   |

Supporting shades from the site: body text `#ED5615` (`haven-orange-deep`), sign-up button
`#FA681B` (`haven-orange`), highlighter `#FFD059` (`haven-yellow`), signboard wood `#B8774A`
(`haven-brown`), FAQ teal `#2CBF90` (`haven-teal`).

## Brand rules worth knowing

From the Haven Brand Guide's social media guidelines:

- No AI-generated images.
- Every logo must keep the "Hack Club" mark — all three bundled logos do.

## Notes

- Slidev 53.0.0's own CSS breaks the CSS minifier during `slidev build`. The theme ships a
  [vite.config.ts](vite.config.ts) that turns CSS minification off, which Slidev applies to your
  deck too, so builds work out of the box.
- The demo deck is a generic Haven ceremony; its schedule, people and sponsors are
  placeholders.
- `title` is reserved by Slidev in slide frontmatter, which is why `winner` uses `game`.
- Regenerate the screenshots with `npm run screenshot` (needs `npx playwright install chromium`).

## Credits & licence

- Theme code: [MIT](LICENSE).
- Haven artwork, logos and Daven the hedgehog: © [Hack Club](https://hackclub.com), from
  haven.hackclub.com and the Haven Brand Guide, included so organisers can make on-brand decks.
- Ceremony-deck artwork (scenes, stickers, the Haven tee): © Hack Club, from the official Haven
  opening & closing ceremony templates.
- Fonts: [Jua](https://fonts.google.com/specimen/Jua),
  [Pangolin](https://fonts.google.com/specimen/Pangolin) and
  [Darumadrop One](https://github.com/ManiackersDesign/darumadrop), all under the SIL Open Font
  License 1.1 (see `fonts/`).
- Demo photos in `public/photos` are from haven.hackclub.com and are not included in the npm
  package.
