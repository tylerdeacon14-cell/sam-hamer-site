# UGC Creator Portfolio Site — Build Playbook

Use this to build a site for any creator. Feed the info below into a new Claude Cowork session and it builds the whole thing.

Reference site (Tyler's): https://tylerdream.netlify.app
Same structure and layout. Different colors and accent treatment per creator.

---

## STEP 1 — Collect this info before opening Claude

Fill this out first. The more complete it is, the faster the build.

```
CREATOR NAME: _______________
CITY: _______________
TAGLINE (1 line, what they do): _______________
EMAIL (for contact form): _______________

TIKTOK ACCOUNTS (up to 4):
  Account 1: @___________ | Followers: ___K | Likes: ___K | Label: TikTok Shop / TikTok / etc.
  Account 2: @___________ | Followers: ___K | Likes: ___K | Label: _______________
  Account 3: @___________ | Followers: ___K | Likes: ___K | Label: _______________
  Account 4: @___________ | Followers: ___K | Likes: ___K | Label: _______________

TIKTOK VIDEO IDs (grab from video URLs — the long number):
  Video 1: _________________ (from @_________)
  Video 2: _________________ (from @_________)
  Video 3: _________________ (from @_________)
  Video 4: _________________ (from @_________)

MAIN PHOTO: [drop JPG/PNG in Kristyn subfolder before session]
PROFILE SCREENSHOTS: [screenshot each TikTok profile header, drop in Kristyn subfolder]
```

---

## STEP 2 — Folder setup (important — keeps Kristyn's files separate from Tyler's)

1. Inside the Dream folder, there is a subfolder called **Kristyn**. All of her files go in there. Nothing touches the root Dream folder.
2. Drop her hero photo in `Dream/Kristyn/` — name it `hero.jpg`
3. Drop her TikTok profile screenshots in `Dream/Kristyn/` — one per account

When you open Cowork, the Dream folder is already selected. Just tell Claude to work inside the Kristyn subfolder.

**To screenshot a TikTok profile:**
- Go to tiktok.com/@[handle] on desktop browser
- Screenshot the top section (profile pic circle + name + follower count + bio)
- Save to `Dream/Kristyn/`

---

## STEP 3 — Paste this into a new Claude Cowork session

Copy everything below and paste it as your first message. Fill in the [brackets].

---

**PASTE THIS:**

> Build a UGC creator portfolio website for a teammate. Work only inside the `Kristyn` subfolder inside the Dream folder — do not touch any other files.
>
> Reference site for layout and structure: https://tylerdream.netlify.app
> Match the layout exactly (same sections, same structure, same single-file approach). But use a different color scheme — pick an accent color that fits her brand (not lime green, that's taken). Keep the dark background (`#080808`), swap the accent. Adjust any other design details to feel like her own site, not a copy.
>
> Single HTML file, self-contained, all images base64 embedded so it works when uploaded as a zip to Netlify.
>
> **Creator info:**
> - Name: [NAME]
> - City: [CITY]
> - Tagline: [TAGLINE]
> - Contact email: [EMAIL]
>
> **Sections to build (same order as reference site):**
> 1. Nav — name + anchor links
> 2. Hero — large headline, tagline, hero photo (from `hero.jpg` in the Kristyn subfolder), CTA button to contact section
> 3. Scrolling marquee — key stats and account names
> 4. Accounts grid (2x2) — one card per TikTok account with profile pic, handle, platform label, follower count, likes, short description. Pull profile pics from the TikTok screenshots in the Kristyn subfolder. Account order: [ACCOUNT 1] top-left, [ACCOUNT 2] top-right, [ACCOUNT 3] bottom-left, [ACCOUNT 4] bottom-right.
> 5. "Why I'm Different" section — 5 numbered points. Confident and specific, not generic.
> 6. Timeline — 5 milestones in her creator journey
> 7. Videos section — 4 TikTok embeds using these video IDs: [VIDEO ID 1], [VIDEO ID 2], [VIDEO ID 3], [VIDEO ID 4]. Embed format: `https://www.tiktok.com/embed/v2/[VIDEO_ID]`
> 8. Contact form — name, email, message. Use Netlify Forms (`netlify` attribute on form tag, `name="contact"`, `action="/?success=true"`). JS to show success message when `?success=true` is in the URL.
> 9. Footer — handles, copyright
>
> **Technical requirements:**
> - Single file. No external CSS/JS, no separate image files.
> - All images base64 encoded directly in the HTML.
> - No em dashes anywhere. Use commas or periods instead.
> - Profile pics: auto-detect and crop the circular profile picture from each TikTok screenshot using PIL/numpy. The circle is in the left portion of the screenshot. Scan columns for a dark gap to find where the circle ends on the right. Scan rows within that range for a dark gap to find where it ends on the bottom (ignore the "Videos" tab bar at the very bottom). Output at 200x200px.
> - After building, zip `index.html` as `newsite.zip` and save it inside the `Kristyn` subfolder.
>
> Start by listing the files in the Kristyn subfolder, then build.

---

## STEP 4 — Deploy to Netlify

**If she has her own Netlify account (recommended):**
1. Go to app.netlify.com, sign up free
2. Drag `newsite.zip` onto the deploy zone
3. Site goes live at a random URL
4. Rename under Site settings > Site details (e.g. kristyncreates.netlify.app)

**If using Tyler's Netlify account:**
- Log into app.netlify.com
- Drag her zip — Netlify creates a new separate site automatically
- Share the link with her
- Her site and Tyler's are completely separate even on the same account

**To update later:**
- Make changes in Claude, rebuild the zip
- Go to app.netlify.com > her site > Deploys tab > drag new zip

---

## STEP 5 — Enable the contact form

After first deploy:
1. Netlify dashboard > her site > Forms tab
2. "contact" form should appear automatically
3. All submissions land there, can set up email notifications

---

## Notes

- **Profile pic cropping**: The script scans each TikTok screenshot for the circular avatar by finding dark column and row gaps. Works on standard desktop screenshots. Make sure the full profile header is captured in each screenshot.
- **Video IDs**: Copy the long number from the end of any TikTok video URL.
- **File size**: Zip will be 100-350KB. No issues with Netlify.
- **Colors**: Don't reuse Tyler's lime green (`#c8ff00`). Good alternatives: white accent (`#ffffff`), soft pink (`#ff6b9d`), electric blue (`#00d4ff`), warm gold (`#ffd700`). Pick based on her vibe.
