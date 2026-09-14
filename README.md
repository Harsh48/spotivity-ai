# Spotivity AI — landing page

One room for every event. A host opens a room, invites people by email, phone or
WhatsApp, and runs the whole thing from their pocket. AI does the planning.

## Run it

```
npm install
npm run dev        # http://localhost:3000
```

## What's here

A single marketing page (`src/app/page.tsx`) composed from section components in
`src/components`. No CMS, no database.

| Section | File |
| --- | --- |
| Nav | `SiteNav.tsx` |
| Hero + two devices | `Hero.tsx` |
| Brand ticker | `Marquee.tsx` |
| How it works | `HowItWorks.tsx` |
| Event categories | `Categories.tsx` |
| AI planning (dark) | `AiPlanning.tsx` |
| Lifecycle, six stages | `Lifecycle.tsx` |
| Early access + store badges | `GetApp.tsx`, `StoreBadges.tsx` |

## The phone mockups

`PhoneFrame.tsx` draws real iPhone 15 Pro hardware. Every measurement is the
device's point value scaled by `width / 393` — its logical screen width — so the
Dynamic Island (125×36), corner radii (55/44), bezel, side buttons and home
indicator (140×5) stay correct at any size.

Screens live in `AppScreens.tsx` and are authored at the real logical size
(393pt wide); the frame scales them down. Type sizes in there are the same
numbers you would use in the app itself.

## Brand

- **Red `#ff2e4d`** carries the CTAs; sky, mint, violet and sun colour the
  category tiles. Tokens are in `src/app/globals.css`.
- **Figtree**, weights up to 900. Headlines are set with `.display`
  (`-0.045em` tracking, `0.95` leading).
- **The mark** (`Logo.tsx`) is a map pin with a spark cut out of it — pin for
  the spot, spark for the AI. `icon.svg` is the favicon, `apple-icon.png` the
  touch icon.

## Known gaps

- **The waitlist does not persist.** `src/app/api/waitlist/route.ts` validates
  the address and logs it. Wire it to a database or an email provider before
  this goes in front of anyone, or sign-ups are lost silently.
- **Store badges are not links.** The apps are not published; they say coming
  soon and are deliberately not tappable.
- Copy and numbers inside the device screens are illustrative.
