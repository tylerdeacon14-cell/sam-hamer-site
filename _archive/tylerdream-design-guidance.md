# tylerdream.com — design + copy guidance
from your creative director. read this, push back on anything, then i ship.

what you just deployed fixes the broken stuff. this doc is the next gear. taste, voice, and where the site stops feeling like "a creator who built a site" and starts feeling like "a brand that knows what it is."

---

## what just shipped on the proof block

i rebuilt it. here's what changed and why.

**before:** 4 stat tiles, "K" cut off on right, no animation, generic sublines like "Across all owned accounts."
**after:**
- `letter-spacing` softened from `-3px` to `-1.5px`. that's what was clipping the K. tight letterspacing makes display type feel premium but it eats trailing characters when you push it too hard.
- font sizes now `clamp(34px, 4.4vw, 54px)` (down from 60px). easier on mobile, still hits desktop. the proof of seriousness is the layout, not the size.
- numbers count up on scroll using IntersectionObserver. that's the "live counting thing" you remembered. fires once, when the section enters view, eases out (not linear) so it feels like real momentum not a metronome.
- `tabular-nums` font-variant means each digit is the same width. no jitter as the counter animates from 0 to 4,104.
- mobile breakpoints reduce the type size again at 900px and 500px so nothing clips on iPhone SE width.
- sublines rewritten:
  - "Starters to full-time top affiliates" → "For creators with 100 to 100K followers" (specific, ICP-clear)
  - "AI · Consumer · Wellness · All active" → "AI, consumer, wellness. All paying." (no dot-separated jargon, "all paying" is direct)
  - "Across all owned accounts" → "Across the accounts I run myself" (first-person, more honest)

---

## the bigger problem with the home page

it tries to be three things at once. that's why nothing hits hard.

**right now home is:**
1. tyler's personal portfolio (hero, accounts, content, journey)
2. a sales page for the build product (pricing card, build CTAs)
3. a sales page for the affiliate program (apply CTAs)

every section serves a different ICP. when a brand exec scrolls and sees "Apply to be an affiliate," they bounce. when a creator sees "i won't post something i wouldn't recommend to a friend," they don't get it because they're not the buyer.

**the move:** the path gate at top is already doing the right work. the rest of the page should serve the user who DID NOT pick a path — the curious browser. think of home as the "what is this place" page. let the specialized pages (`/build`, `/affiliate`, eventual `/brands`) do the selling.

**concrete recommendations:**

a) **kill the journey/timeline section on home.** it belongs on an /about page or inside an affiliate "why trust this guy" block. brands and creators don't care about your journey when they're deciding to convert.

b) **move expertise / accounts further down.** they're proof, not the pitch. lead with social proof (stats) and a single clear visual of "what does Dream do" (one example site, one example brand deal).

c) **the hero copy should not be "Dream content that actually sells."** that's a creator's positioning. on tylerdream.com you're not selling content, you're selling sites + affiliate program. proposed hero:

> **headline:** *Real sites for real creators.*
> **sub:** Built in 48 hours. Live in your DMs. Paid out within the week.
> **CTA:** See an example (links to kristyn's site)

that single sentence covers all three ICPs in their own language:
- brands hear "real creators" (we vet)
- creators hear "real sites" (not templates, not Linktree)
- affiliates hear "paid out within the week" (the proof their money is real)

---

## copy rewrites worth shipping

### hero
**current:** "Dream content *that actually sells.* I study what makes people stop scrolling and buy. Every video I post is a decision. Hook, angle, timing, format."

**proposed:** "*Real sites. Real creators. Real deals.* I build creator media kit sites in 48 hours. I refer creators who don't have one yet to my affiliate network. Both make money."

Why: the current hero is a TikTok bio, not a homepage. it tells me about you, not about what i can get here. flipping to "what you can get" reads as confident.

### "Work With Me" CTA in nav
**current:** "Work With Me →"
**proposed:** "Hire me" or "Brand inquiries" or "DM Tyler"

"Work With Me" is the universal placeholder of every creator portfolio template. you can do better.

### the eyebrow over the proof block
**current:** "Live numbers"
**proposed:** "The receipts"

"Live numbers" implies a leaderboard. "The receipts" implies you can verify it. more on-brand for a TikTok-native creator. casual confidence.

### the proof headline
**current:** "Numbers don't need context."
**proposed:** keep this. it's the strongest line on the page. don't touch.

### the brand inquiry CTA on the contact form button
**current:** "Let's talk. →"
**proposed:** "Send it →" or "Message Tyler →"

"Let's talk" is what bad sales pages say. you don't talk — you respond.

### /build hero
**current:** "The site that makes *brands say yes.* Stop sending brands your TikTok handle. Send them a link that closes."

This one is actually strong. keep it. just stop using "Built from scratch around you" right after — it's filler.

### /affiliate "How it works"
the three-step graphic is solid. but step 1 says "Apply below. I'll confirm you in 48 hours and send you a personal referral link."

**proposed:** "Apply below. Approved in 48. Your code is yours forever."

shorter. owns the timeline. owns the permanence. "yours forever" reads as a benefit, not a promise to maintain.

### footer line (every page)
**current:** "tylerdream.com · Chicago · Do it different."

"Do it different" is a Steve Jobs line. it's been used to death. either remove it or replace with something Tyler-specific:
- "tylerdream.com · Chicago · Built before you scrolled past it"
- "tylerdream.com · Chicago · No templates"
- just leave it at "tylerdream.com · Chicago"

---

## visual / design moves i'd ship next

### 1. the proof block needs a SUB-STAT element

right now the four tiles all look identical. but they're not equal: GMV is the most interesting one (live $4,104). it deserves bigger weight visually. proposal:

- make the GMV tile span 2 columns on desktop (wider)
- the other three stay 1 column each
- add a tiny sparkline graph under "Last 7 days · live" — even fake, even SVG-only, conveys movement
- this draws the eye to the strongest stat without changing the data

### 2. testimonials use letter avatars (M, A, J)
they look placeholder. options:
- get one real headshot per testimonial (better)
- or remove the avatar circle entirely and lead with the name + role in larger type (acceptable)
- the current grey-circle-with-letter is the worst option because it reads "not real"

### 3. the brand strip marquee
right now you have DC24, Phrasly, Black Forest scrolling. if you can add 1-2 more (even just SVG wordmarks of brands you've worked with), the marquee feels populated. 3 logos feels light. 6+ feels established.

### 4. lock down the color system
you have lime `#c8ff00` and mint `#a0edd8`. they're playing well together. but i see purple/violet creeping in on the affiliate page (`#a855f7`, `#ec4899`). either:
- commit: purple is for the affiliate ICP only. lime/mint everywhere else.
- or: remove purple entirely. lime is the brand color, mint is the accent, everything else is grey.

i'd ship option two. simpler brand. purple feels like a creator who couldn't decide.

### 5. mobile hero padding
right now the hero is `padding: 120px 0 60px` on desktop. on mobile that's a lot of dead space above the H1. i tightened it in my mobile-safeguards CSS to 80px/40px. test on phone, push it tighter if needed.

### 6. typography rhythm
your H1 uses `clamp(42px, 6vw, 72px)` with `letter-spacing: -3px`. that tracking is what clipped the K. site-wide rule:
- display sizes (40px+): letter-spacing -1px to -1.5px
- headline sizes (24-39px): -0.5px
- body (under 24px): 0 or 0.3px

never go below -2px unless it's a logo wordmark.

### 7. one more pass on the path gate
the gate is the smartest UX on the site. it could be smarter:

- after a user picks "Brand Partner" once, remember that choice. next visit, skip the gate and land on `#contact` directly. (localStorage, 10 lines of code)
- show a tiny "switch path" link in nav so they can change if they came back for a different reason
- once you've sold this through enough creators, build an `/affiliate-dashboard` mock that shows what someone's earnings page would look like. even a static screenshot. proves the money is real.

---

## copy voice rules — for everything you write going forward

these are the rules a senior copywriter on your team would enforce:

1. **no buzzwords.** never use: leverage, synergy, level up, game-changer, premium, world-class, top-tier, unlock, amplify.
2. **first person.** "I built" not "we built." Tyler is the brand.
3. **specific beats general.** "two sales in 24 hours" beats "instant results."
4. **lowercase for hero subs and microcopy.** capitalized for nav and CTAs.
5. **no em dashes.** ever. you already know.
6. **never apologize in copy.** "if you don't love it, we revise" is fine. "we know this is a lot to ask, but..." is not.
7. **the second paragraph is always shorter than the first.** rhythm matters.
8. **end pages with one CTA, not three.** the eye is tired by then. give it one place to go.

---

## what i need you to push back on

i made calls in the gray areas. tell me where to revert:

a) **hero rewrite from "Dream content that actually sells" to "Real sites. Real creators. Real deals."** — this changes positioning. you might want to keep the personal angle.

b) **killing the journey/timeline on home.** it's clean storytelling but doesn't serve any ICP buying decision.

c) **footer line "Do it different."** — this is your brand. i suggested cutting it but maybe it's load-bearing for you.

d) **the purple on /affiliate.** removing it commits to a 2-color system. keeping it gives the affiliate page its own identity.

push back on any of these in the chat and i'll either revert or commit.

---

## the order i would ship the next round in

if you greenlight everything above, here's the priority:

1. (already shipped today) proof block rebuild + count-up + tighter sublines
2. hero rewrite
3. kill journey section on home
4. tighten footer + nav CTA copy
5. avatar fix on testimonials
6. typography pass: letter-spacing audit
7. localStorage path gate memory
8. /affiliate purple decision
9. sparkline under GMV tile
10. /brands page (separate sprint)

---

i'm not here to ship the most. i'm here to ship the right things.

— dream
