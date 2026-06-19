# EDGEFORM — React/Vite

Probability intelligence platform. Sports · Crypto · Forex · Stocks · Markets.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → opens at http://localhost:5173

# 3. Build for production
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import the repo
3. Framework preset: **Vite** (Vercel detects this automatically)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy — done

## Add React Bits components later

```bash
# Install shadcn CLI first (one time)
npx shadcn@latest init

# Then add any React Bits component
npx shadcn@latest add https://reactbits.dev/r/SplitText-JS-TW
npx shadcn@latest add https://reactbits.dev/r/Aurora-JS-TW
```

## Project structure

```
src/
  animations/         React Bits–style animations (self-contained)
    SplashCursor.jsx  Cursor particle trail
    SplitText.jsx     Character-by-character headline reveal
    TextAnimations.jsx BlurText, DecryptedText, CountUp, ShinyText
    Aurora.jsx        Soft background glow + spotlight
  components/
    ui/
      Logo.jsx        SVG diagonal logo mark
      EdgeMeter.jsx   Animated probability track — the core component
      PredCard.jsx    Prediction card with CountUp stats
    NavBar.jsx        Desktop glass top nav
    MobileNav.jsx     Liquid glass bottom pill nav (mobile)
  pages/
    Landing.jsx       Column slider + SplitText hero + layer-transform cards
    Dashboard.jsx     Domain tabs + prediction card grid
    PricingAbout.jsx  Pricing tiers + About/pipeline page
  App.jsx             Router + global animation layers
  index.css           Tailwind + custom animations
```
