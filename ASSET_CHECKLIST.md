# DIVY LIBRARY — ASSET INVENTORY & CHECKLIST

## 🟢 LIVE ASSETS EXTRACTED FROM DIVYLIBRARY.IN
The following official assets from `https://divylibrary.in/` are now integrated into the website:

1. **Brand Logo** (`images/logo.webp` / `images/logo.jpeg`):
   - Used in the top sticky header, footer card bottom bar, and `success.html` confirmation receipt.
2. **3D eBook Mega Bundle Stack** (`images/ebook-stack.png`):
   - Multi-device 3D transparent mockup showing the 12,000+ volume collection on tablets and e-readers.
   - Featured in the **Hero Visual Switcher** (`[ 📱 3D Digital Collection Stack ]`) and in the **Checkout Terminal** (`#access`) next to the Razorpay order form.
3. **Reader / Creator Presentation** (`images/influencer.png`):
   - Featured as Slide 01 in the **Editorial Story Carousel** (`#story`).
4. **English Bestsellers Collection Collage** (`images/collection-english-1.jpg`):
   - Features *Atomic Habits*, *Think & Grow Rich*, *Ikigai*, *The Alchemist*, *The Monk Who Sold His Ferrari*.
   - Used in the **Look Inside the 12,000+ Collection** gallery and carousel.
5. **Hindi Bestsellers Collection Collage** (`images/collection-hindi-1.jpg`):
   - Features *रिच डैड पुअर डैड*, *जीत आपकी*, *बॉडी लैंग्वेज*, *रहस्य*.
   - Used in the **Look Inside the 12,000+ Collection** gallery and carousel.
6. **Business & Sales Classics Collage** (`images/collection-business.jpg`):
   - Features *Zero to One*, *The 10X Rule*, *Sales Bible*, *Good to Great*, *Start with Why*.
   - Used in the **Look Inside the 12,000+ Collection** gallery and carousel.
7. **Hindi Wealth & Wisdom Collage** (`images/collection-hindi-2.jpg`):
   - Features *द साइकोलॉजी ऑफ मनी*, *चाणक्य नीति*, *अति प्रभावशाली लोगों की 7 आदतें*.
   - Used in the **Look Inside the 12,000+ Collection** gallery and carousel.

---

## 🔴 BEFORE GOING LIVE WITH ADS / RAZORPAY

### Payment Infrastructure
- [ ] **Razorpay account** activated with full KYC — dashboard.razorpay.com
- [ ] **Payment Link created** (₹199, INR, UPI as first option) *or* Key ID pasted into checkout.js
- [ ] **Webhook configured**: payment.captured → email Drive link to buyer
  - Recommended: Razorpay webhook → Zapier/Make → Gmail send
- [ ] **WhatsApp Business number** verified → replace all `+91-9XXXXXXXXX` in code

### Delivery
- [ ] **Google Drive folder** structured into 16 numbered category folders
- [ ] **Drive folder URL** pasted into `success.html` (the access link buyers receive)
- [ ] All 12,000+ files uploaded, folder shared as "Anyone with the link can view"
- [ ] **Category book counts verified** — update numbers in `main.js` CATALOGUE array to match actual folders

### Legal Pages (required for Razorpay approval)
- [ ] `terms.html` — Terms of Service
- [ ] `privacy.html` — Privacy Policy (mention: name, email, phone collected)
- [ ] `refund.html` — Refund Policy (7-day fix-or-refund, no change-of-mind after link opened)
- [ ] `disclaimer.html` — Educational use only, no income guarantee

### Business Details (replace in HTML)
- [ ] `[Business Name]` → your registered business name
- [ ] `[Registered Address, City, State – PIN]` → footer
- [ ] `support@divylibrary.in` → your real support email
- [ ] `+91-9XXXXXXXXX` → your real WhatsApp number

---

## 🟡 IMPORTANT BEFORE RUNNING ADS

### Human Elements
- [ ] **Founder photo** (real, natural, good lighting)
  - Minimum 300×300px, square crop
  - Replace `<div class="founder-photo">` with `<img src="founder.webp" alt="[Name], Founder of Divy Library">`
- [ ] **Founder name** → replace `[Founder Name]` and `[Your name]`
- [ ] **Personalise founder note** if the placeholder text doesn't reflect your real story

### Social Proof (Section 9)
- [ ] **Real testimonials** from actual buyers:
  - Request WhatsApp feedback from 10–20 early/gifted users
  - Screenshot the conversations, crop to show name + message + timestamp
  - Save as `review-1.webp`, `review-2.webp` etc.
  - Replace placeholder `voice-card` elements with real `<figure>` + `<img>`
  - Remove the red disclaimer text once real reviews are live
- [ ] Real buyer count (once you have data) → add to facts bar
- [ ] Real rating (once verified) → add to facts bar

### Drive Mockup (Section 5)
- [ ] **Actual screenshot** of your Google Drive folder showing real category folders
  - Recommended: browser-width at 1280px wide, then crop
  - Convert to WebP (use squoosh.app)
  - Replace the `mockup-frame` div with `<img src="drive-screenshot.webp" alt="…" loading="lazy">`

### Social & OG Image
- [ ] `og-image.jpg` — 1200×630px for social sharing
  - Design: deep forest green background, "Divy Library" in Cormorant Garamond, "12,000+ eBooks · ₹199", gold accent line
  - Upload to root; update `<meta property="og:image">` URL in `index.html`

### Logo
- [ ] `logo.png` — for Razorpay checkout overlay (128×128px min, transparent or white bg)
  - Update `checkout.js` image property

---

## 🟢 NICE TO HAVE

### Tracking
- [ ] **GA4 Measurement ID** (`G-XXXXXXXXXX`) — add to `<head>` before all other scripts:
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```
- [ ] **Meta Pixel ID** — add standard Pixel base code to `<head>`
- [ ] **UTM test** — verify `?utm_source=instagram&utm_medium=reel` is captured in sessionStorage

### Performance
- [ ] Convert all images to **WebP** (squoosh.app)
- [ ] Run **Lighthouse audit** on Chrome DevTools → Mobile
  - Target: Performance 90+, Accessibility 95+
- [ ] Test on real Android device on 4G (or DevTools throttling)
- [ ] `robots.txt` and `sitemap.xml` for SEO

### Content
- [ ] Verify all 16 book counts in `main.js` match your actual Drive folder counts
- [ ] Review and personalise the 8 sample titles per category in `main.js` (CATALOGUE array)
- [ ] Update the offer end date in the top note when changing the deadline

---

## ⚡ FASTEST PATH TO LIVE (24 hours)

| Step | Time |
|------|------|
| Create Razorpay Payment Link (₹199) | 15 min |
| Set up Drive folder with categories | 1–2 hrs |
| Replace buy-btn href with Payment Link | 2 min |
| Write Terms + Privacy + Refund (use termly.io, customise) | 60 min |
| Replace placeholder text: name, email, phone, address | 20 min |
| Add GA4 + Pixel code | 15 min |
| Upload to Netlify/Hostinger (drag and drop) | 15 min |
| Test full purchase on own phone | 15 min |
| **Launch** | — |

---

## FILES TO EDIT

| File | Changes needed |
|------|---------------|
| `index.html` | Founder name/photo, business details, WhatsApp number, OG image URL |
| `main.js` | Verify CATALOGUE counts + titles per category |
| `checkout.js` | Razorpay Key ID OR switch to Payment Link href on button |
| `success.html` | Real Drive folder URL |
| `COPY_DECK.md` | Personalise founder note |
| All `*.html` | Add GA4 + Meta Pixel code in `<head>` |
| `terms.html` etc. | Write your legal pages |
