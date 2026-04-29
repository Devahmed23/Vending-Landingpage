# VendSavvy

VendSavvy is a modern vending-machine business website built with Next.js and React. It combines a polished marketing landing page with authentication screens and a dashboard experience for operators to explore product value, pricing, support, and business management features.

## Overview

The project is designed as a premium SaaS-style storefront for vending operators. It focuses on clear messaging, strong visual hierarchy, motion-driven sections, and a theme that feels high-end while staying practical.

The codebase currently includes:

- A branded homepage with hero, metrics, features, pricing, reviews, and CTA sections
- Product pages for about, features, pricing, and contact
- Authentication pages for login and signup
- A dashboard area with nested sections for sales, expenses, refunds, and profile management
- Reusable UI primitives and shared components for layout, animation, and theming

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI components
- Recharts
- `next/font` for custom typography
- Vercel Analytics

## Project Structure

- `app/` - App Router pages and layouts
- `components/` - Shared UI, motion helpers, navigation, footer, and dashboard components
- `components/ui/` - Reusable design system primitives
- `hooks/` - Shared React hooks
- `lib/` - Utility helpers
- `public/` - Static assets such as logos, mockups, icons, and illustrations

## Routes

### Public pages

- `/` - Home page / landing page
- `/about` - Company and product overview
- `/features` - Feature breakdown
- `/pricing` - Plan comparison and pricing details
- `/blogs` - Blog listing
- `/blogs/[slug]` - Individual blog post page
- `/contact` - Contact and FAQ page
- `/login` - Sign in page
- `/signup` - Sign up page

### Dashboard pages

- `/dashboard` - Main dashboard shell
- `/dashboard/sales` - Sales view
- `/dashboard/expenses` - Expense view
- `/dashboard/refunds` - Refunds view
- `/dashboard/profile` - Personal information and account settings

## Key Features

- Premium visual design with layered gradients, soft glows, and motion accents
- Responsive layouts that adapt from mobile to desktop
- Reusable card, button, avatar, chart, dialog, and sidebar primitives
- Dashboard-oriented information architecture for route operators
- Authentication forms for onboarding flow
- Strong brand consistency across marketing and app screens

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run linting:

```bash
npm run lint
```

## Design Notes

- The homepage is intentionally editorial and premium to match a SaaS product pitch.
- The color palette is centered around blue and aqua tones to reinforce trust, clarity, and energy.
- Motion is used to add polish, not distraction.
- Reviews, metrics, and pricing are presented as credibility-building sections.

## Implementation Notes

- The project uses the Next.js App Router with server and client components where appropriate.
- Images are stored in `public/` and referenced directly in the app.
- UI primitives live in `components/ui/` and can be reused across pages.
- Dashboard pages are structured for future data integration.

## Current Status

The repository is front-end focused and does not yet include a production backend, authentication service, or database integration. The UI and content are ready for expansion into a full SaaS product.

## Suggested Next Steps

- Connect forms to a real authentication backend
- Replace placeholder content with live operator data
- Add API routes or external services for metrics, reviews, and subscriptions
- Add tests and CI checks for linting and build stability

