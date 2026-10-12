---
theme: ./
title: Haven — Opening Ceremony
info: |
  Demo deck for slidev-theme-haven.
  Swap the schedule, rooms and links for your own Haven's.
transition: slide-left
mdc: true
---

# Welcome to Haven!

Opening ceremony · **Nov 14–15, 2026**

A weekend to make a game with friends, in 200+ cities 🎮

<!--
Cover layout: forest backdrop, white Haven logo, peeking hedgehog.
-->

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
layout: bubbles
---

# Don't game jams sound awesome?

This weekend, <mark>you're part of the world's largest teen game jam</mark>. Yes, you!

You'll <mark>join thousands of teens</mark> making games in 200+ cities at the same time.

Never made a game? No problem — <mark>we have workshops</mark> all weekend.

---
layout: section
kicker: Part 1
---

# The weekend

What's happening, when, and where to find food

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
---

# Make something real.

Not perfect. Not huge. <mark>Just finished.</mark>

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
  <Polaroid src="/photos/friends-1.webp" tilt="-3" max-height="9.5rem" caption="your new friends, probably" />
</div>

---
layout: quote
---

> Learn something new, meet new friends, and go on an adventure together.

haven.hackclub.com

---
layout: center
---

# Theme reveal

Ready?

<div class="text-6xl font-display text-haven-orange mt-2 mb-4">✨ ??? ✨</div>

<HavenButton>Click to reveal</HavenButton>

---
layout: end
---

# Let's jam!

Doors to the build room are open — go make something real

**haven.hackclub.com**
