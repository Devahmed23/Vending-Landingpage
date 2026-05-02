'use client';

import { BarChart3, Bell, MapPin, Package, Receipt, Shield, Smartphone, TrendingUp } from 'lucide-react';
import { memo } from 'react';

const features = [
  {
    title: 'Sales Tracking',
    description: 'Live sales visibility across every machine and route.',
    icon: TrendingUp,
    accent: 'from-[#1583F1]/28 via-[#1583F1]/14 to-white',
    chip: 'text-[#1270D0]',
  },
  {
    title: 'Inventory Management',
    description: 'Track stock across multiple vending machines, not just one.',
    icon: Package,
    accent: 'from-[#81E8C4]/28 via-[#81E8C4]/14 to-white',
    chip: 'text-[#0F9F7E]',
  },
  {
    title: 'Expense Tracking',
    description: 'Log machine, route, and maintenance costs in one place.',
    icon: Receipt,
    accent: 'from-[#FFB36B]/26 via-[#FFB36B]/12 to-white',
    chip: 'text-[#C96A22]',
  },
  {
    title: 'Profit & Loss Reporting',
    description: 'See what is profitable and what needs attention fast.',
    icon: BarChart3,
    accent: 'from-[#A78BFA]/26 via-[#A78BFA]/12 to-white',
    chip: 'text-[#6D4EDB]',
  },
  {
    title: 'Smart Alerts',
    description: 'Get helpful alerts before small issues become larger ones.',
    icon: Bell,
    accent: 'from-[#FCD34D]/26 via-[#F59E0B]/12 to-white',
    chip: 'text-[#D97706]',
  },
  {
    title: 'Multi Location Management',
    description: 'Keep routes, locations, and machine groups organized.',
    icon: MapPin,
    accent: 'from-[#34D399]/26 via-[#34D399]/12 to-white',
    chip: 'text-[#0F9F7E]',
  },
  {
    title: 'Mobile App Access',
    description: 'Stay connected to the business from anywhere you go.',
    icon: Smartphone,
    accent: 'from-[#60A5FA]/26 via-[#60A5FA]/12 to-white',
    chip: 'text-[#1D4ED8]',
  },
  {
    title: 'Secure and Reliable System',
    description: 'Built for dependable day-to-day use with a secure foundation.',
    icon: Shield,
    accent: 'from-[#0F172A]/22 via-[#334155]/10 to-white',
    chip: 'text-[#0F172A]',
  },
] as const;

const loop = [...features, ...features];

type Feature = (typeof features)[number];

const FeatureTile = memo(function FeatureTile({ title, description, icon: Icon, accent, chip }: Feature) {
  return (
    <article className="feature-marquee-card group relative flex-shrink-0 overflow-hidden rounded-[1.5rem] border border-white/25 bg-white/95 p-5 sm:p-6 shadow-[0_16px_36px_rgba(8,15,30,0.12)] backdrop-blur-md transition-transform duration-200 hover:-translate-y-1">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,232,196,0.14),transparent_42%)] opacity-100" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} ring-1 ring-white/70 shadow-[0_12px_24px_rgba(21,131,241,0.10)]`}>
            <Icon className="h-6 w-6 text-[#1270D0]" />
          </div>
          <span className={`rounded-full border border-white/20 bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] ${chip}`}>
            Core Feature
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight mb-2">{title}</h3>
          <p className="text-sm leading-relaxed text-foreground/65">{description}</p>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/50">
          <span className="h-2 w-2 rounded-full bg-[#81E8C4]" />
          Live update ready
        </div>
      </div>
    </article>
  );
});

export function FeatureMarquee() {
  return (
    <section className="relative z-10 px-6 sm:px-8 md:px-12 py-16 md:py-20">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/20 bg-[linear-gradient(180deg,rgba(247,251,255,0.98)_0%,rgba(236,246,255,0.96)_48%,rgba(228,249,241,0.98)_100%)] shadow-[0_12px_36px_rgba(21,131,241,0.08)] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-[#1583F1]/16 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#81E8C4]/16 blur-3xl" />
          <div className="absolute left-1/2 bottom-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#1583F1]/10 blur-3xl" />
        </div>

        <div className="relative z-10 px-6 sm:px-8 pt-8 md:pt-10 pb-6 md:pb-7">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#1583F1]/12 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1270D0] mb-4 shadow-sm">
                Platform Highlights
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                A smooth infinite feature stream that matches the brand.
              </h2>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-xl">
                Designed to feel airy, premium, and native to the rest of the site, with no heavy animation library overhead.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 lg:min-w-[22rem]">
              {['Real-time', 'Multi-machine', 'Mobile ready', 'Secure'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/22 bg-white/92 px-4 py-3 shadow-sm backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/42">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-8 md:pb-10">
          <div className="feature-marquee-shell [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="feature-marquee-track">
              <div className="feature-marquee-group">
                {features.map((card) => (
                  <FeatureTile key={card.title} {...card} />
                ))}
              </div>
              <div className="feature-marquee-group" aria-hidden="true">
                {loop.map((card, index) => (
                  <FeatureTile key={`clone-${card.title}-${index}`} {...card} />
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-8 pt-6 md:pt-8">
            <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#81E8C4] shadow-[0_0_0_6px_rgba(129,232,196,0.14)]" />
              <p className="text-sm text-foreground/60">
                Optimized for smooth motion on desktop and a lighter responsive layout on smaller screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
