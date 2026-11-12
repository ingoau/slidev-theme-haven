---
theme: ./
title: Haven — Opening Ceremony
info: |
  Demo deck for slidev-theme-haven.
  Swap the schedule, rooms and links for your own Haven's.
transition: slide-left
mdc: true
layout: cover
variant: center
kicker: WELCOME TO
---

# IN YOUR CITY

<!--
Cover layout, centred variant — as on the official opening deck. Try `variant: left` or `variant: corner`.
-->

---
layout: cover
variant: corner
---

# Welcome to Haven!

Opening ceremony · **Nov 14–15, 2026**

A weekend to make a game with friends, in 200+ cities 🎮

---
layout: raise-hand
---

this is

# your first ever hackathon

---
layout: intro
---

# Hi, I'm Daven!

I'm the official Haven hedgehog, and I'll be your guide this weekend.

- I love **games**, snacks, and autumn leaves
- I've never shipped a game before either
- By Sunday, <mark>we both will have</mark>

<Sticker class="mt-4">hedgehog · 13–18 · new to game dev</Sticker>

---
layout: people
people:
  - name: Daven
    pronouns: he/him
    role: Official mascot
    image: /photos/daven.webp
    description: Spiky outside, soft and fuzzy inside.
  - name: Alex Rivera
    pronouns: they/them
    role: Lead organiser
    description: Ask me about anything — rooms, rules, Wi-Fi.
  - name: Priya Shah
    pronouns: she/her
    role: Workshops
    description: Running "your first platformer" on Saturday.
  - name: Jordan Lee
    pronouns: he/they
    role: Food & logistics
    description: Knows where every snack is hidden.
---

# Meet the team

---
layout: people
variant: plaques
people:
  - name: Daven
    image: /photos/daven.webp
  - name: Alex
  - name: Priya
  - name: Jordan
---

# Say hi to the team!

---
layout: statement
---

# THE PREMISE

---
layout: showcase
image: shirt
caption: GET THIS SHIRT!
---

# Make a game & ship it.

---
layout: steps
---

# What's "shipping"?

1. Published to **itch.io** as a web-deployed game
2. Open-source code on **GitHub**
3. <span class="text-3xl text-haven-orange-deep">Can be played!!!</span>

---
layout: statement
---

# THE THEME IS…

---
layout: reveal
---

---
layout: bubbles
---

# Don't game jams sound awesome?

This weekend, <mark>you're part of the world's largest teen game jam</mark>. Yes, you!

You'll <mark>join thousands of teens</mark> making games in 200+ cities at the same time.

Never made a game? No problem — <mark>we have workshops</mark> all weekend.

---
layout: section
---

# Housekeeping!

---
layout: village
---

# CODE OF CONDUCT:

1. Treat each other with kindness & respect
2. <em>Respect the room</em> & environment

Hack Club's Code of Conduct applies HERE at Haven.

[hack.club/conduct](https://hack.club/conduct)

---
layout: village
---

# Meal Schedule

Free food, drinks and snacks

| | | |
| --- | --- | --- |
| Day 1 | Lunch (1 PM – 1:30 PM) | Pizza |
| Day 1 | Dinner (6 PM – 6:30 PM) | Tacos |
| Day 2 | Breakfast (9 AM – 9:30 AM) | Pancakes |

---
layout: agenda
items:
  - time: "9:00"
    title: Doors open
    note: Breakfast in the main hall
  - time: "9:30"
    title: Opening ceremony
    now: true
  - time: "10:00"
    title: Theme reveal + team forming
  - time: "12:30"
    title: Lunch
  - time: "14:00"
    title: "Workshop: your first platformer"
    note: Bring a laptop with Godot installed
  - time: "18:00"
    title: Dinner + playtesting
---

# Saturday

---

# Schedule

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

### Saturday

| Time  | What                          |
| ----- | ----------------------------- |
| 9:00  | Doors open + breakfast        |
| 9:30  | Opening ceremony (you're here!) |
| 10:00 | Theme reveal + team forming   |
| 12:30 | Lunch 🍕                      |
| 14:00 | Workshop: your first platformer |

</div>
<div>

### Sunday

| Time  | What                     |
| ----- | ------------------------ |
| 9:00  | Breakfast + build        |
| 12:30 | Lunch                    |
| 14:00 | <mark>Hard stop</mark> — publish! |
| 14:30 | Demos & voting           |
| 15:30 | Prizes + closing         |

</div>
</div>

<!-- Example times — swap in your own run sheet. -->

---
layout: notebook
heading: Here's how the weekend works
---

<Step n="1" title="Find a team">Teams of up to 4, or go solo.</Step>

<Step n="2" title="Learn something">Drop into workshops or grab an organiser.</Step>

::right::

<Step n="3" title="Build your game">Any engine: Godot, Unity, Scratch, PICO-8…</Step>

<Step n="4" title="Ship it">Publish on <strong>itch.io</strong> before the hard stop.</Step>

---
layout: statement
scene: picnic
align: top
---

# Schedule & Good Info

<div class="flex gap-4 mt-14">
  <Pill label="View our event schedule">haven.hackclub.com</Pill>
  <Pill label="Important links">hack.club/hv</Pill>
</div>

<Pill dark class="mt-2">WiFi: Haven-Guest<br>Password: hedgehogs</Pill>

---
layout: statement
align: top
---

# PEER VOTING

<Pill class="mt-4">The room splits into 2 groups:</Pill>

<div class="flex gap-10 mt-1">
  <Note title="Group 1:">stays at their tables,<br>presenting their games</Note>
  <Note title="Group 2:">walks around the venue,<br>playing group 1's games</Note>
</div>

<Pill class="mt-1">And then switch! <span class="text-haven-carrot">(We'll guide you later)</span></Pill>

---
layout: image-right
image: /photos/step-2.webp
caption: workshops run all weekend
---

# Workshops

New to game dev? Start here.

- **Your first platformer** — movement, jumping, coins
- **Pixel art in 30 minutes**
- **Juice it!** screen shake, particles & sound
- **Shipping to itch.io**

<HavenButton class="mt-4" arrow>Saturday 2pm</HavenButton>

---
layout: image-left
image: /photos/food-1.webp
caption: fuel for game devs
---

# Food & prizes

Free meals all weekend, plus snacks on tap.

- Breakfast, lunch & dinner Saturday
- Breakfast & lunch Sunday
- <mark>Prizes</mark> for the top games, voted by everyone

<Sticker class="mt-3" tilt="3">dietary needs? tell an organiser!</Sticker>

---

# Your first jump

```gdscript {all|4-5|7-8|all}
extends CharacterBody2D

const SPEED := 220.0
const JUMP := -420.0
var gravity := ProjectSettings.get("physics/2d/default_gravity")

func _physics_process(delta):
    velocity.y += gravity * delta
    if Input.is_action_just_pressed("jump") and is_on_floor():
        velocity.y = JUMP
    velocity.x = Input.get_axis("left", "right") * SPEED
    move_and_slide()
```

A complete player controller in Godot — `move_and_slide()` does the hard bit.

---
layout: cards
---

# You're in good company

Hack Club has helped teens run hundreds of events worldwide

<div class="grid grid-cols-3 gap-7 w-full px-6">
  <HavenCard title="Scrapyard" image="/photos/scrapyard-pic.webp">Build wacky stuff, win wacky prizes — 70+ cities</HavenCard>
  <HavenCard title="Daydream" image="/photos/daydream-pic.webp">Student-led game jams in 200 cities</HavenCard>
  <HavenCard title="Campfire" image="/photos/projects-1.webp">10k teens, 1 weekend, making games</HavenCard>
</div>

---
layout: fact
---

# 200+

cities jamming this weekend

---
layout: two-cols
---

# House rules

- Be kind — everyone's learning
- Ask for help early and often
- Hydrate. Eat the snacks.
- Code of conduct: **hackclub.com/conduct**

::right::

### Need help?

<Bubble tail="left" class="mt-2">Grab <mark>any organiser</mark>, or ask in <strong class="whitespace-nowrap">#haven-help</strong> on Slack.</Bubble>

<div class="mt-7 px-10">
  <Polaroid src="/photos/friends-1.webp" tilt="-3" max-height="7rem" caption="your new friends, probably" />
</div>

---
layout: faq
faqs:
  - q: I've never made a game. Is that okay?
    a: Absolutely — most people here haven't. Workshops start from zero.
  - q: Do I need a team?
    a: Nope. Join one at team forming, or go solo.
  - q: What engine should I use?
    a: Whatever you like — Godot, Unity, Scratch, PICO-8, even plain JavaScript.
  - q: What do I submit?
    a: A playable game on itch.io before Sunday's hard stop.
---

# Questions?

---
layout: quote
---

> Learn something new, meet new friends, and go on an adventure together.

haven.hackclub.com

---
layout: countdown
until: 2026-11-15T14:00:00
label: Submissions close in
done: Pencils down! 🎉
---

Publish your game on **itch.io** before time runs out

---
layout: center
---

# Theme reveal

Ready?

<div class="text-6xl font-display text-haven-orange mt-2 mb-4">✨ ??? ✨</div>

<HavenButton>Click to reveal</HavenButton>

---
layout: sponsors
sponsors:
  - name: Hack Club
    tier: Presented by
  - name: Your sponsor
    tier: Gold
  - name: Your sponsor
    tier: Gold
  - name: Local business
    tier: Friends
  - name: Local business
    tier: Friends
  - name: Local business
    tier: Friends
---

# Thank you!

---
layout: qr
url: https://hack.club/vote
---

# SUBMIT & VOTE
## for your favorite games

---
layout: statement
---

# AND THE WINNERS ARE…
## (drumroll please…)

---
layout: winner
place: 1
game: Hedgehog Hop
image: /photos/projects-2.webp
team: [Alex, Priya, Jordan]
---

---
layout: end
---

# Let's jam!

Doors to the build room are open — go make something real

**haven.hackclub.com**
