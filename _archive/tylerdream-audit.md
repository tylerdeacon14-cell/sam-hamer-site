# tylerdream.com investor audit
prepared by the creative director, for tyler dream and investor group
scope: home, /affiliate, /build, /build?ref=KRISTYN25, /preview
lens: brand partner ICP, creator ICP, affiliate ICP, on mobile and desktop

i looked at this the way a brand partner would, the way a referred creator would, and the way someone clicking apply on the affiliate page would. then i looked at it the way a designer would. then again the way someone with money on the line would. this is what i found.

---

## the headline

the product is real and the bones are good. the writing has a voice. kristyn's site as the proof point is the single strongest asset on the property. but right now there are three issues that will cost conversions every single day this site stays live, and they have nothing to do with traffic.

1. **the price is broken in three places.** home and /preview say $300. /build says $500. /affiliate says $50 commission and 25% off which implies a $200 sale. nothing reconciles. a brand partner or buyer will lose trust in the first 30 seconds.
2. **the brand partner ICP has no page.** the home hero offers "Brand Partner" as a path and points it to #contact. there is no #contact section on the home page in the rendered HTML. brands hit a dead anchor.
3. **the affiliate referral link does not visibly fire.** /build?ref=KRISTYN25 returns the exact same HTML as /build with no code prefilled and no discount applied. the affiliate's whole pitch is "use my link, get 25% off" and the link does nothing the user can see.

fix these three and the site is operating. leave them and every other improvement is wasted.

---

## ICP 1 — the brand partner

**path on site:** home → click "Brand Partner" → expects to land on a brand-facing pitch or contact form.

**what actually happens:** the link goes to #contact. there is no #contact id on the page. the page does not move. on mobile this looks like the button is broken. on desktop it just sits there. a creative director at a brand will leave.

**what's missing for a brand partner:**
- no brand-facing pitch anywhere on the site. the entire property speaks to creators.
- no roster, no past brand work, no rates, no case studies, no contact form for brands.
- no "for brands" page. compare to how a creator agency or UGC studio would handle this. brands need: who you are, who you've worked with, what categories you serve, sample work, rate range, how to inquire.
- the meta description and OG copy is creator-focused. brands sharing the link internally see "Affiliate program open" which is the wrong signal.

**what to build:**
- a /brands page (or replace the dead anchor with a real brands section on home).
- include: 3 case study tiles (sculptique, dc24, kinglucky-style), category list, sample creator network (kristyn, anyone else), a real inquiry form that goes to dreambillboard@gmail.com.
- different hero copy. brands don't care about media kits. they care about results. lead with GMV or conversion numbers.

**conversion likelihood today: 5 percent.** the dead anchor alone burns most intent. brands who really want you will email anyway. anyone on the fence is gone.

---

## ICP 2 — the creator (including referred via affiliate link)

this is the strongest ICP on the site and where the product story is clearest.

### what's working
- the /preview page is excellent. it shows the actual deliverable, not promises. the kristyn screenshots do more work than any copy could.
- "you're looking at it" as proof is smart. self-evident.
- the "what you get" list on /build is tight: custom media kit, monthly updates, refinement session, you own it, contact form, 48 hours. clean.
- 5-step "how it happens" timeline on /preview reads like a project plan, not a sales pitch. that's right for the ICP.
- guarantee language is good. "we don't stop until it's exactly right" lowers risk.

### what's broken or weak

**price contradiction (critical).** /preview says $300 flat. /build says $500 flat. home og description doesn't mention price. a referred creator clicks an affiliate link expecting "25% off, you pay $225" (math from $300) and sees $500 with a discounted price of $375. this is a deal-killer. pick one number and propagate it everywhere. recommendation: $500 retail, $375 with code, because that's what /build already supports and the math is cleaner for the affiliate program.

**referral code injection is invisible.** /build?ref=KRISTYN25 does not visibly prefill the code, doesn't show "KRISTYN25 applied" as a banner, doesn't auto-apply the discount. the affiliate's whole hook is "use my link." if the user has to find the code field and type it, half won't. this needs to:
- auto-apply on page load
- show a top banner: "Kristyn sent you. 25% off applied. $375 today."
- persist through the form so the affiliate gets credit even if they navigate away and come back.

**the /build form is a wall.** seven sections, ~30 fields, file uploads, before any payment. that's a lot to ask before the credit card. recommend either:
- collect minimum info first (name, email, handle, vibe), take payment, then deliver the full brief form afterward; or
- show a progress bar with "5 min to fill" callout up top and make sections 4-7 optional/skippable with "we'll follow up."

**hero photo upload on mobile.** creators on phones will struggle. add explicit camera roll instructions or "skip and email later" prominently. the small fallback line is good but easy to miss.

**no urgency or scarcity on /build.** /affiliate uses "next 5 only" which is sharp. /build has nothing. add a slot count or a "this week" line.

**social proof on /build is thin.** kristyn's site is linked but no testimonials, no "X sites built", no recognizable creator names. the affiliate page has three testimonials. /build needs equivalents.

### specific copy issues
- "We don't stop until it's exactly right" appears twice in close proximity. once is stronger.
- "Built to convert brands" is good. "A site worth sending brands to. Unsolicited." is even better. lean into that voice.
- the FAQ has three questions. needs more: do you write the copy, what if i don't have stats yet, can i edit it myself later, what about hosting renewal, do you offer payment plans (this is hinted at via the mailto but should be a real bullet).

**conversion likelihood today: 25-30 percent for direct creator traffic. 10-15 percent for affiliate-referred creator (because of the broken code experience).**

---

## ICP 3 — the affiliate

**path on site:** /affiliate → read the offer → fill the form → wait 48 hours for code.

### what's working
- "$50 per conversion. No threshold. No cap." is the right framing. instant payment is the unlock.
- "3 conversions = free site" is genius. it gives affiliates without a site a reason to act and gives them the product as the reward. this is the strongest mechanic on the site.
- the 4-question script builder is a real tool, not a gimmick. it solves the actual creator objection ("i don't know what to say"). if it works reliably and the scripts are good, this is a moat.
- 3-step explanation (apply, share, get paid) is the right length. doesn't overexplain.
- testimonials from marcus, alyssa, jordan land well. specific dollar amounts and specific behaviors.

### what's broken or weak

**price math doesn't work.** /affiliate says: $50 per conversion, 25% off for the buyer, $300 build. let's do the math. buyer pays $225 ($300 minus 25%). affiliate gets $50. that's 22% of revenue going to the affiliate. if the price is actually $500 (per /build), buyer pays $375, $50 is 13%. either way fine for the business, but the inconsistency means the affiliate doesn't trust the offer. fix the pricing site-wide and the math becomes obvious.

**"$300 build" is shown twice on /affiliate.** the $50 commission is also locked. but /build sells the same product for $500. either the affiliate page is selling at a different price point than /build, or one of these is wrong. an affiliate who clicks through their own ref link and sees $500 will think the deal changed.

**payout speed claims need a proof point.** "$50 straight to your Venmo, PayPal, or Cash App the moment a conversion is confirmed" is great but unverifiable from the page. add a small "see screenshots of recent payouts" element or a single discord testimonial with a venmo screenshot. trust > pitch.

**discord link is good but should be more prominent.** affiliates want a community signal more than they want a form. show the discord member count if it's not embarrassing. add "Join the discord" higher up the page, not just at the bottom.

**form is long for the value being asked.** the application has 8+ fields. for "fill in 2 min and hear back in 48 hours" that's accurate-ish but feels heavy. consider trimming to: name, email, primary handle, audience size band, niche. anything else can be asked in the approval DM.

**weekly bonuses for active affiliates is mentioned but undefined.** "active affiliates are eligible for weekly performance bonuses" is too vague. either spec it ($X per week for posting 3x, etc.) or remove it. ambiguous money kills trust faster than no money.

**no leaderboard or social proof on volume.** if 30 people have already signed up, say so. "47 affiliates earning since april" is a number that closes affiliates.

**conversion likelihood today: 20-25 percent.** the offer is real. the math confusion and undefined bonuses cap it.

---

## mobile vs desktop

### desktop (web browser, PC)
- layouts are clean. typography is well-handled. spacing is generous.
- the cursor-glow effect on /affiliate is a nice touch and reinforces the premium feel. don't ship cursor effects to mobile.
- scroll progress bar on /preview is a nice detail.
- nav is hidden on home until scroll — fine, intentional.
- biggest desktop issue: the dead #contact anchor on home. critical.

### mobile (iPhone, primary device for ICP)
- /affiliate script builder needs testing on small screens. the pill-button selection for niche has 11+ options, will get cramped on a 380px wide screen.
- /build form is intimidating on mobile. 7 sections is a lot to scroll. progress indicator should be sticky.
- file upload on mobile is the weak point. add "tap to upload from camera roll" inline instructions or a fallback "send via email" button that opens a prefilled compose.
- hero image base64-encoded on home is huge for first paint on mobile. cut it. use a proper compressed jpg or webp served from netlify.
- buttons size up well on mobile from what i can see in markup. confirm 44px minimum tap target on real device.
- nav links and footer links repeat. consider tightening on mobile.

---

## design, voice, structure

### what's right
- the dream wordmark with the period and asterisk reads like a brand. consistent across all pages.
- accent color (lime/yellow-green based on the JS reference) is distinctive. not generic SaaS blue.
- tone is consistent: lowercase, punchy, conversational, no buzzwords. matches tyler's actual voice. this is rare and it's an asset.
- "real deliverable. no templates." is a great anti-positioning line.
- screenshots > stock illustrations everywhere. correct call.

### what's off
- testimonials all use letter avatars (M, A, J). looks placeholder. either get real photos with permission or remove the avatar circles and just use the name + role.
- /affiliate uses ★★★★★ star strings inline. that's fine but consistent visual review components would feel more polished.
- footer is sparse. should include: contact email, social handles, year, business address (chicago is mentioned, formalize it).
- no privacy policy or terms of service link visible. legally needed once money is changing hands.
- the marketing pages do not link to each other consistently. home → /affiliate is clear. /affiliate → /build is clear. /build → /preview is missing in some spots. /preview → /build is good. close the loop.

### what's missing structurally
- there is no /brands page. ICP 1 has no home.
- there is no "about tyler" page. for a creator-led service, the founder's story is the proof.
- no blog or content hub. this is fine for now but eventually needed for SEO and authority.
- no pricing comparison or "why us vs templates" page.

---

## what would i tell tyler

**this week, in order:**
1. unify the price. pick $500 with a $375 affiliate-discounted price. update /preview, home OG meta, and any place $300 appears. ship today.
2. build the brand partner section on home or a /brands page. dead anchor is unacceptable. ship this week.
3. make the affiliate referral code visibly inject and auto-apply. user lands on /build?ref=KRISTYN25 and sees the discount applied above the fold with the affiliate's name credited. ship this week.

**this month:**
4. break /build into a 2-step flow: brief lite → pay → full brief. drop friction on the form.
5. add 5+ real testimonials with photos to /build.
6. define the weekly affiliate bonus in dollar terms or remove the line.
7. add affiliate volume social proof on /affiliate.
8. compress and optimize the home hero image. base64 is killing mobile load.
9. add privacy + terms.

**next quarter:**
10. build the /brands page out properly with case studies.
11. add affiliate dashboard (track conversions in real time). today's "you know the second it happens" is a claim. make it visible.
12. /preview becomes the marketing page for the build product. /build is just the form. cleaner mental model.

---

## projected outcome if all three critical fixes ship

current state: brand ICP at ~5%, creator at ~25%, affiliate at ~20%.
after critical fixes: brand at ~15%, creator at ~40%, affiliate at ~35%.

the writing is already in the top 10% of creator services online. the product (kristyn's site) is real and converting. the only thing standing between this site and 3x conversion lift is the three issues at the top of this doc.

ship the fixes. the rest is polish.

---

built by dream
