# Kenya Welcome Concierge

Kenya Welcome Concierge is a React/Vite website for a personal Kenya travel concierge service. It helps international travellers discover airport arrival support, safaris, accommodation, travel planning, and practical Kenya travel guides.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Helmet Async for SEO metadata
- Framer Motion for animation
- Lucide React for icons

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Current SEO Setup

The site already includes the main technical SEO foundations needed before submitting to Google Search Console:

- Page titles and descriptions through `src/components/Seo.tsx`
- Canonical URLs for pages
- Open Graph and Twitter preview tags
- `TravelAgency`, `WebSite`, `BreadcrumbList`, and article structured data
- `public/robots.txt`
- `public/sitemap.xml`
- Branded favicon at `public/favicon.svg`
- SEO-friendly travel guide URLs

After deployment, submit this sitemap in Google Search Console:

```text
https://kenyawelcomeconcierge.com/sitemap.xml
```

## Launch Checklist

Before serious marketing, make sure these are complete:

- Connect the real domain with HTTPS.
- Verify the site in Google Search Console.
- Submit `/sitemap.xml`.
- Check that `/robots.txt` opens in the browser.
- Test all main pages on mobile.
- Test every WhatsApp link.
- Replace placeholder contact details if needed.
- Add real testimonials as soon as customers are available.
- Add Google Analytics, Plausible, or another analytics tool.
- Create and optimize a Google Business Profile.

## Improvements To Do Later

### 1. Real Booking And Inquiry Backend

The current contact and planner forms are frontend-only. A backend should later collect inquiries, send email notifications, and store leads.

Why it matters: WhatsApp is good for starting, but a backend prevents lost leads and helps track customer requests, dates, budgets, and follow-ups.

### 2. Admin Dashboard

Add an admin area to edit safari packages, accommodation listings, blog posts, testimonials, prices, and FAQs.

Why it matters: the business will change often. An admin dashboard lets you update content without editing code every time.

### 3. Cloudinary Image Hosting

Move important site images to Cloudinary before heavy marketing or paid ads.

Why it matters: Cloudinary can resize, compress, convert to modern formats, and serve images from a CDN. This improves loading speed, Core Web Vitals, mobile experience, and SEO.

Recommendation: this is not urgent before the first basic launch, but it should be done before serious marketing, paid ads, or adding many real photos. Start with founder images, hero images, accommodation images, safari images, and blog images.

### 4. Performance Optimization

Optimize image sizes, lazy-load below-the-fold media, and review JavaScript bundle size.

Why it matters: many travellers browse on mobile networks. Faster pages reduce bounce rate and can help SEO.

### 5. Real Content And Blog Growth

Add detailed articles for searches like Nairobi airport pickup, Kenya SIM card for tourists, M-PESA for tourists, best Kenya safaris, Kenya travel safety, Diani beach stays, and Masai Mara planning.

Why it matters: Google needs useful content to rank. Practical local guides can bring travellers before they are ready to book.

### 6. Testimonials And Trust Signals

Add customer reviews, founder story, photos, partner mentions, safety promises, and clear refund/payment expectations.

Why it matters: travellers booking in a new country need trust before they send money or personal details.

### 7. Online Payments

Add payment links or checkout for deposits once packages are clear.

Why it matters: payments make bookings more serious and reduce back-and-forth.

### 8. Analytics And Conversion Tracking

Track page views, WhatsApp button clicks, form submissions, and traffic sources.

Why it matters: marketing without tracking becomes guesswork. Analytics shows what pages bring leads and where customers drop off.

## Marketing Plan

### Phase 1: Trust And Local Presence

- Create a Google Business Profile.
- Add the founder photo and personal story everywhere customers may check.
- Create Facebook, Instagram, TikTok, LinkedIn, and WhatsApp Business profiles.
- Use the same name, phone number, email, and domain across all platforms.
- Ask every customer for a review and permission to use photos.

### Phase 2: SEO Content

Publish helpful articles every week or two. Focus on practical searches travellers make before arriving in Kenya:

- Nairobi airport pickup for tourists
- JKIA arrival guide
- Kenya SIM card guide
- How M-PESA works for tourists
- Kenya safari costs
- Best time to visit Kenya
- Kenya safety tips
- Diani beach and safari itinerary
- Masai Mara vs Amboseli

Each article should end with a clear WhatsApp call to action.

### Phase 3: Social Media

Post short, useful content:

- Airport arrival tips
- Safari planning tips
- Common tourist mistakes
- Kenya cost breakdowns
- Behind-the-scenes concierge work
- Founder videos introducing the service
- Customer stories and testimonials

The goal is not just views. The goal is to make travellers feel, “This is the person I can trust when I land in Kenya.”

### Phase 4: Partnerships

Reach out to:

- Airbnb hosts
- Small hotels
- Safari guides
- Tour operators
- Travel bloggers
- Expat communities
- Study abroad groups
- Wedding and honeymoon planners

Offer referral commissions or packaged arrival support.

### Phase 5: Paid Ads

Only start paid ads after the site has strong trust signals, analytics, and clear service packages.

Good ad targets:

- People searching for Nairobi airport transfer
- Tourists planning Kenya safaris
- Travellers from the US, UK, Canada, Europe, and Australia
- Honeymooners and first-time Africa travellers

## Cloudinary: Now Or Later?

Use Cloudinary later, but before major marketing.

For the first launch, the current setup is acceptable. The site has one local portrait and many remote images. Cloudinary becomes important when you replace placeholders with your own real photos and start driving real traffic.

Best timing:

1. Launch the site and verify Google indexing.
2. Replace placeholder images with real business images.
3. Move those real images to Cloudinary.
4. Then begin heavier SEO publishing, partnerships, and paid marketing.

This avoids spending time optimizing temporary images that may be replaced soon.
