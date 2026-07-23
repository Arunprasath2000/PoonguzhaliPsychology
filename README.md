# 🅣🅟 Poonguzhali Psychology — Study Assistant

An **offline** Android study app that explains psychology concepts in simple
language and helps students revise with quizzes, oral-exam (viva) practice, and
flashcards. Built with React + Vite + Capacitor; the APK is produced free by
GitHub Actions (no local Android toolchain needed).

> Example questions it answers instantly:
> *“Difference between Bipolar I and Bipolar II”* · *“Explain Freud's defense
> mechanisms.”*

## Features

- **🔎 Smart search** — instant, typo-tolerant, weighted search across every
  topic with highlighted matches (market-style, like a mini study wiki).
- **📚 Explanations** — 40 curated topics across 10 areas, each with a plain-
  language write-up, key points, comparison tables, and a memory hook.
- **📝 Quiz mode** — 38+ MCQs, per-topic filtering, instant explanations, score
  ring, and best-score tracking.
- **🎙️ Viva mode** — examiner-style questions with model answers and likely
  follow-ups, for oral-exam practice.
- **🃏 Flashcards** — flip animation, "got it / review again" tracking, and a
  known-cards counter.
- **⭐ Bookmarks & progress** — saved topics and stats stored on the phone
  (Capacitor Preferences), fully offline.

## Topic areas

Disorders · Psychoanalysis (Freud) · Development · Learning · Cognition ·
Social · Personality · Biological · Therapy · Research methods.

## Tech

- **UI:** React 18 + Vite + TypeScript, a hand-built warm plum/gold theme
  (deliberately not blue), mobile-first.
- **Native shell:** Capacitor 6 (Android), 100% offline & self-contained.
- **Icon:** a gold **"TP"** monogram inside a ring on the app gradient, generated
  at build time (`scripts/gen-icons.mjs` + `@capacitor/assets`).

## Build / run

```bash
npm install
npm run dev        # web preview in a browser
npm run build      # production web build (Vite)
npm run typecheck  # optional: full TypeScript check
```

To get an installable APK, see **HOW-TO-GET-THE-APK.md**. In short: push to
GitHub `main` → the `Build Android APK` workflow produces the
**PoonguzhaliPsychology-apk** artifact → download & install.

## Content note

Explanations are written as a **curated knowledge base** so the app works with
zero internet and no API costs. It is a study aid, **not** a clinical or
diagnostic tool. A future option can add a live-AI mode (bring-your-own API key)
for free-form questions.

## Roadmap

- Live-AI Q&A mode (optional, API-key based)
- More topics + past-paper style questions
- Spaced-repetition scheduling for flashcards
- Signed release build → Google Play
