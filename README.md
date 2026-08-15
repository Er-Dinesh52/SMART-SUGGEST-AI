# Smart Suggest AI

A hybrid, **explainable** multi-model product recommendation system with an ecommerce-style
storefront UI, price trend charts, buying-behaviour indicators, an in-app chat assistant, and
Supabase-backed user activity tracking (logins, searches, views).

> ⚠️ **About the product data**: This build ships with a curated **sample catalog**
> (`src/data/products.js`) styled like real Amazon/Flipkart listings — realistic names, brands,
> pricing, ratings, and review text. It is **not** a live scrape of Amazon or Flipkart (that would
> violate their Terms of Service, and this build has no internet access at generation time). The
> data shape is production-ready: point `src/data/products.js` at a real product API/feed and every
> other part of the app (recommender, chat assistant, charts, UI) keeps working unchanged.

## What's inside

- **Multi-model recommendation engine** (`src/engine/recommendationEngine.js`)
  - **Content-based filtering** — category/brand/tag/price similarity to what you've viewed
  - **Collaborative filtering** — item-item co-occurrence ("shoppers who viewed this also viewed…")
  - **Popularity / trending model** — rating, review volume, and buying percentage, used for cold start
  - Every recommendation ships with an **explanation** and a **per-model contribution breakdown**
    (see the "Why this?" badge on each product card)
- **Price trend graphs** — 6-month price history per product, rendered with Recharts
- **Buying percentage** — "% of viewers who purchased" meter on every product
- **Chat assistant** (`src/engine/chatAssistant.js`) — rule/intent-based Q&A grounded in the live
  catalog: price, price trend, ratings/reviews, specs, comparisons, delivery/returns
- **Supabase integration** — auth (signup/login), and `user_activity` / `search_history` /
  `wishlist` tables to persist real user behaviour (see `supabase/schema.sql`)
- **Ecommerce-style white UI** — sticky search navbar, category browsing, product grid, detail
  pages, wishlist, cart badge — built with Tailwind CSS

The app runs immediately with **zero configuration** (in "demo mode": activity is tracked in
`localStorage` instead of Supabase) — connecting Supabase just upgrades it to real persistent
accounts and cross-device history.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Connecting Supabase (optional but recommended)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase dashboard, open **SQL Editor → New query**, paste the contents of
   `supabase/schema.sql`, and run it. This creates:
   - `profiles` — one row per user, auto-created on signup
   - `user_activity` — every search / view / click / add-to-cart / purchase event
   - `search_history` — denormalised search log
   - `wishlist` — saved items
   - Row Level Security policies so users only ever see their own data
3. In **Project Settings → API**, copy the **Project URL** and **anon public key**.
4. Copy `.env.example` to `.env` and fill in both values:
   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
5. Restart `npm run dev`. Sign up from the navbar — logins, searches, and product views now
   sync to Supabase and power the collaborative-filtering model at scale.

## Project structure

```
src/
  data/
    products.js            # Sample catalog (swap for a real product feed/API)
    communityActivity.js   # Seed data for collaborative filtering (replace with real Supabase activity later)
  engine/
    recommendationEngine.js  # Hybrid multi-model recommender + explainability
    chatAssistant.js         # Rule-based product chat assistant
  lib/
    supabaseClient.js      # Supabase client (falls back to demo/local mode if unset)
  context/
    AppContext.jsx         # Auth, activity tracking, wishlist/cart state
  components/               # Navbar, ProductCard, PriceTrendChart, BuyingMeter, ChatWidget, etc.
  pages/
    Home.jsx                # Storefront: hero, categories, recommendation rails
    ProductPage.jsx          # Product detail: price trend, buying %, reviews, recommendations
supabase/
  schema.sql                # Full Supabase schema + RLS policies
```

## Extending this project

- **Real product data**: replace `src/data/products.js` with calls to a product API (or a
  compliant, licensed data feed) that returns the same shape (`id, name, brand, category, tags,
  price, mrp, rating, ratingsCount, buyPercentage, description, specs, reviews, priceHistory`).
- **Smarter chat assistant**: `src/engine/chatAssistant.js` is structured so you can swap the
  rule-based `answer()` function for a real LLM call (e.g. the Anthropic API) — keep the catalog
  context as grounding/system data to avoid hallucinated prices or specs.
- **Server-side recommendations**: the recommendation engine currently runs client-side over the
  in-memory catalog; for a large catalog, move `recommendationEngine.js`'s logic to a Supabase Edge
  Function or a backend service and query `user_activity` directly with SQL/vector search.

## Tech stack

React 18 + Vite, React Router, Tailwind CSS, Recharts, Supabase JS client, lucide-react icons.
