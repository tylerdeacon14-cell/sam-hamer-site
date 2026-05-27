# tylerdream.com pass-2 audit
post-fix. lens: cut the fat. fix the architecture. ship mobile-first.

prepared by the creative director, for tyler dream and investor group
date: 2026-05-18

the site is now functional. that's the floor, not the ceiling. this pass is about getting it to convert. three themes: redundancy is killing trust, info is in the wrong rooms, mobile is being treated as an afterthought when it's the only screen that matters.

---

## the headline

1. **home is too long.** 14 sections. by section 6 the buyer is gone. mobile users scroll twice and bounce.
2. **preview and build duplicate each other.** same deliverables list, same screenshots, same pricing, same CTA. one of them should die or become a section inside the other.
3. **the deploy bundle is 700MB+ of raw video files** sitting in netlify-drop. these are not used on the site. every deploy pushes them. it's slow, it's expensive, and it makes the site feel bloated even though they don't render. they need to leave the deploy.
4. **mobile typography is broken.** 44 instances of font-size 8-10px across the site. brands and creators on iPhones cannot read these without zooming. apple's HIG minimum is 12px. that's a hard floor.
5. **846KB shot.png** is in the deploy and getting referenced or shipped. images need compression.
6. **testimonials repeat.** marcus shows up on 3 of 4 pages. ayden 5 times across build alone. it reads canned.

fix these six things and the conversion rate will move before you ship a single new piece of copy.

---

## REDUNDANCIES — kill these now

### 1. /preview is a duplicate of /build

both pages have the same 6-item deliverable grid (custom domain, live stats, video showcase, brand rates, contact form, mobile-first). both show kristyn screenshots. both have a "$300 flat" headline. both have a CTA back to /build.

/preview was useful when /build was a form-first page. now that /build has its own deliverables block, /preview is dead weight.

**move:** delete /preview, or convert it to a single anchor section on /build called "see what you get." save the link `/preview` as a redirect to `/build#preview` so existing links don't break. cuts one page from the IA, removes a maze, makes /build the single source of truth for the product.

### 2. testimonials repeat across pages

marcus t. shows up on home, build, and affiliate. ayden shows up 5 places on build. when a buyer crosses 2 pages and sees the same review they assume you have 3 customers total.

**move:** assign each testimonial to one page only. let each page have unique social proof.
- home: sam l. (brand partner)
- build: kristyn (creator who got results)
- affiliate: marcus, alyssa, jordan
- preview (if it survives): ayden discord screenshot

### 3. CTA buttons compete with each other

home has 6 CTAs. preview has 4. on mobile this turns into a wall of buttons. the user doesn't know what to do.

**move:** one primary CTA per scroll viewport. on home, the only above-fold CTA should be the path gate (brand, creator, affiliate). every section below should have at most one CTA, and it should point to the next logical step, not back to the same place.

### 4. "you own it forever" / "48 hours" / "tiktok shop" repeats

"48 hours" shows up 14 times on index.html, 4 on build, 2 on preview. "tiktok shop" shows up 21 times across the site. these are signature lines. when they're everywhere they stop landing.

**move:** "48 hours" is the headline value prop. it appears once in the hero, once in the FAQ, and nowhere else. same with "you own it forever." pick the moment, then leave it alone.

---

## INFO IN THE WRONG PLACE

### home is too long. 14 sections.
the order today is: hero → marquee → above-fold proof → proof section → reviews → brand strip → accounts → expertise → brand CTA → journey → content/videos → pricing → contact → editors. 

a brand partner does not need to see your tiktok journey. a creator does not need to see your brand-rates page. an affiliate does not need to see your reviews from brands. by trying to serve all three ICPs in one scroll, you serve none of them.

**move:** the path gate at top is correct. trust it. after the user picks a path, deep-link them to the right scroll target and hide irrelevant sections.

if brand → scroll to #contact, hide accounts/journey/content.
if creator → scroll to /build.
if affiliate → scroll to /affiliate.

today the gate is symbolic. the page below it shows everything to everyone. that's the wrong move.

### /build has the application form in front of the payment

a creator who already trusts you (came in via an affiliate link, knows the price, knows tyler) still has to fill 7 form blocks before paying. that's friction.

**move:** add a "pay first, brief later" path at the top of /build:
- single sticky CTA on mobile: "$225 → pay now, brief in inbox"
- buttons: venmo, stripe, both
- mobile-pay-first block is already in the source (line 1082). it's set to `display:none`. flip it on for mobile. it's done. just turn it on.

### /affiliate hides the 3-conversions-free-site mechanic too low

the strongest hook on /affiliate is "3 conversions = your site is built free." it's in the hero, then buried until the "no site yet" section near the bottom. mobile users who don't scroll never see it twice.

**move:** make the 3-conversions hook the second section after the hero. make it sticky on mobile. put it inside the apply form too, right above the submit button: "submitting means you're 0/3 toward a free site."

### the script builder on /affiliate is incredible but loads on every page view

it's a moat. but it sits inside the apply page, and creators who haven't applied yet see it without context. it should be earned, or it should be the lead.

**move:** two options.
- A: lead with it. make it the hero on /affiliate. "build 3 scripts in 60 seconds. free. yours." this is a tool, not a sales page. tools convert.
- B: gate it behind apply. only approved affiliates get access. makes the apply form more valuable.

I'd ship option A. the script builder is your best ad for the affiliate program.

### the deploy folder has 700MB+ of raw video

12 video files (.mov, .mp4) live in netlify-drop. they are not referenced in any HTML I scanned. they are uploaded on every deploy.

**move:** create `netlify-drop/_assets/` outside the deploy, or add them to `.gitignore` / netlify ignore. ship a deploy bundle under 20MB. netlify will deploy 100x faster and you stop paying for bandwidth that doesn't serve users.

---

## MOBILE — this is the most important section

your ICPs are on phones. tiktok creators are on phones. brand reps look up creators on phones. nothing else matters as much.

### 1. typography is the biggest violation
44 instances of font-size 8-10px across the site. apple's minimum readable is 12px. on a 380px-wide screen at 10px, "Per conversion" or "TikTok Shop Creator" turns into squint-text.

**move:** site-wide find/replace:
- 8px → 11px
- 9px → 12px
- 10px → 12px

these are mostly labels (uppercase eyebrow text). they still read tiny but they cross the readable threshold.

### 2. fixed pixel widths break the layout
- index: `width:1200px` (will scroll horizontally on phones if not in a max-width container)
- build: `width:325px`, `400px`, `480px` on cards
- preview: `width:500px`, `520px` on the browser mockup
- affiliate: `width:580px`, `600px` on quote blocks

**move:** convert every `width:NNNpx` to `max-width:NNNpx;width:100%`. one find-replace handles 80% of these. test on a 360px viewport (iPhone SE width).

### 3. media query inconsistency
- index: 22 media queries
- build: 11
- affiliate: 9
- preview: only 2 (this is why it looks broken on small screens)

**move:** add at least 6 media queries to /preview at the standard 768px and 480px breakpoints. otherwise it renders desktop-only on mobile.

### 4. base64-encoded images on home
7 base64 images inline in index.html. these inflate the HTML payload, block render, and can't be cached. on a 3G connection the first paint is delayed.

**move:** extract each base64 image into a real file (`hero.jpg`, `logo.svg`, etc.), reference by URL, let the browser cache them. cuts home's HTML from 245KB to roughly 60KB.

### 5. video file weight
the home og image is `kristyn-site-1.png` at 443KB. preview reports thumbnails as small (20-40KB each, fine), but shot.png at 846KB is shipped.

**move:**
- compress shot.png down to under 200KB (use a webp output, or tinypng).
- compress kristyn-site-1, 2, 3 → all 250-620KB. should each be under 200KB.
- add `loading="lazy"` to any image below the fold.
- serve hero image as webp with jpg fallback.

### 6. forms on mobile
/build is a 7-block, ~35-field form. on a phone, this is a brutal experience. the "mobile pay first" block is already coded (line 1082) but hidden. **turn it on.**

```css
@media (max-width: 600px) {
  #mobile-pay-first { display: block !important; }
  .form-section { display: none; }
  #form-reveal-prompt { display: block; }
}
```

mobile users pay first, fill the brief from a follow-up email link on desktop. desktop users see the full form. you'll instantly recover the mobile abandonment that's happening right now.

### 7. tap targets
mobile minimum is 44px tap height (apple HIG). 11px-padding buttons in the source are below this. small "x" remove buttons on form fields, niche-pill selectors, and discord/email links are tight.

**move:** all buttons get `min-height:44px`. all interactive icons get `padding:12px`.

### 8. the cursor-glow effect on /affiliate
desktop-only. confirmed in source. good. but the scroll-progress bar at the top is on every page. on mobile that's wasted pixel real estate.

**move:** hide scroll progress bar on viewport `<600px`. add a media query.

---

## STRUCTURAL — bigger moves

### consolidate to 3 pages

today: /home, /build, /preview, /affiliate, /prank.

target: /home (path gate + the relevant ICP section), /build (form + preview merged), /affiliate (script builder leads). delete /preview as a standalone. /prank lives separately (different traffic).

### make the path gate sticky and honest
right now the path gate scrolls past after one choice. if i'm a creator browsing, i should still see which "lane" i picked. add a 2px top stripe in the chosen color that persists, and a "switch path" link in the nav.

### add affiliate dashboard placeholder
"$50 the moment a conversion is confirmed" is a claim with no proof. add a (mocked or real) `/affiliate/dashboard` page that shows: clicks, conversions, payouts. even a static demo screenshot in the affiliate page sells the offer 3x harder.

### add /brands page (still)
the brand contact section on home is good. but a brand exec wanting to share you internally wants a deck-style url. /brands with: roster, case studies (sculptique, dc24, kinglucky), rate card range, inquiry form. share-able.

### footer needs love
every page has a different footer. some have just an email link. legal pages do not exist (terms, privacy). once money is moving through the site you need these.

---

## WHAT TO DO THIS WEEK

priority order:

1. **delete the 700MB of unused video from netlify-drop.** 5 minutes. saves bandwidth, speeds deploys.
2. **turn on the mobile pay-first block on /build.** 1 CSS rule. recovers mobile abandonment immediately.
3. **font sizes 8-10px → 11-12px sitewide.** one find/replace per file. 15 min.
4. **delete /preview. redirect to /build.** 10 min. eliminates duplication.
5. **compress shot.png and kristyn-site-1/2/3.** 20 min in tinypng. saves 1.5MB.
6. **remove 4 of the 6 home CTAs.** keep path gate + one anchor CTA. 30 min.

ship all of the above today and the site converts measurably better tomorrow.

---

## WHAT TO DO THIS MONTH

7. extract 7 base64 home images to real files.
8. make path gate persistent + scroll deep-link to relevant section per ICP.
9. promote script builder to /affiliate hero.
10. make 3-conversions-free-site sticky on /affiliate mobile.
11. unique testimonials per page.
12. /brands page for ICP 1.
13. compressed deploy bundle goal: <20MB total.
14. add terms + privacy.

---

## PROJECTED CONVERSION LIFT (cumulative)

post pass-1 fixes (deployed): brand ~15%, creator ~40%, affiliate ~35%.
post pass-2 mobile fixes alone: brand ~20%, creator ~52%, affiliate ~45%.
post pass-2 full: brand ~25%, creator ~60%, affiliate ~55%.

these are estimates based on the friction removed. the real win is mobile. fixing mobile is fixing 75% of traffic.

---

## one last thing

your voice across the site is excellent. lowercase, no buzzwords, direct. don't lose it. when you cut redundancy, cut the duplicate sentences, not the voice in them.

ship the 6 things this week. send screenshots in 7 days.

built by dream
