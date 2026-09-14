# Spotivity AI — landing page

One room per event. A host opens a room, invites people by email, phone or
WhatsApp, and runs the whole event from there. AI does the planning.

## Run it

```
npm install
npm run dev        # http://localhost:3000
```

## What's here

A single marketing page (`src/app/page.tsx`) composed from section components
in `src/components`. No CMS, no database.

| Section | File |
| --- | --- |
| Masthead | `SiteNav.tsx` |
| Hero + device shot | `Hero.tsx`, `PhoneMock.tsx` |
| Ticker of event names | `Marquee.tsx` |
| 01 The room — invite channels | `Rooms.tsx` |
| 02 Lifecycle — six stages | `Lifecycle.tsx` |
| 03 Planning — what the AI does | `AiPlanning.tsx` |
| 04 Events — types, grouped | `EventTypes.tsx` |
| 05 Early access + store badges | `Waitlist.tsx`, `StoreBadges.tsx` |

Shared primitives (`Shell`, `Rule`, `SectionHead`, buttons) live in
`src/components/ui.tsx`.

## Design

Two inks on paper. Cream ground (`--color-paper`), near-black type
(`--color-ink`), one signal red (`--color-signal`) used sparingly for emphasis
and numbering. Layout is built from hairline rules rather than cards, and the
page is numbered 01–05 so it reads as a programme. Instrument Serif for
display, Archivo for everything else. Tokens are in `src/app/globals.css`.

## Known gaps

- **The waitlist does not persist.** `src/app/api/waitlist/route.ts` validates
  the address and logs it to the server. Wire it to a database or an email
  provider before this goes in front of anyone, or sign-ups are lost silently.
- **Store badges are type, not links.** The apps are not published. They say
  "coming soon" and deliberately are not tappable.
- Copy and numbers in the device shot are illustrative.
