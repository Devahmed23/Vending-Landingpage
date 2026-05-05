'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from '@/components/animations';
import {
  TrendingUp,
  Package,
  Receipt,
  BarChart3,
  Bell,
  MapPin,
  Smartphone,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: TrendingUp,
    title: 'Sales Tracking',
    mockup: '/sales.png',
    variant: 'primary',
    description:
      'Monitor every sale across all your machines in real time. See daily, weekly, and monthly trends.',
    bullets: [
      'Real-time revenue dashboard',
      'Per-machine sales breakdown',
      'Revenue trend charts',
      'Top-performing product insights',
    ],
  },
  {
    icon: Package,
    title: 'Inventory Management',
    mockup: '/inventory.png',
    description:
      "Always know what's in stock and what needs restocking.",
    bullets: [
      'Live stock levels per machine',
      'Low-inventory alerts',
      'Restock scheduling',
      'Product catalog management',
    ],
  },
  {
    icon: Receipt,
    title: 'Expense Tracking',
    mockup: '/expenses.png',
    size: 'large',
    description:
      'Track and categorize every business expense clearly.',
    bullets: [
      'Categorized expense logging',
      'Maintenance cost tracking',
      'Supplier invoice management',
      'Monthly summaries',
    ],
  },
  {
    icon: BarChart3,
    title: 'Profit & Loss Reporting',
    mockup: '/profitloss.png',
    description:
      'Understand your real profitability across machines.',
    bullets: [
      'Automated P&L reports',
      'Per-machine profitability',
      'Exportable reports',
      'Month-over-month comparisons',
    ],
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    mockup: '/lowinventory.png',
    description:
      'Get notified instantly when something needs attention.',
    bullets: [
      'Low-stock alerts',
      'Sales anomaly detection',
      'Maintenance reminders',
      'Custom alert thresholds',
    ],
  },
  {
    icon: MapPin,
    title: 'Multi-Location Management',
    mockup: '/location.png',
    description:
      'Manage all vending locations from one dashboard.',
    bullets: [
      'All locations in one view',
      'Location-based performance',
      'Route optimization hints',
      'Location comparison tools',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Access',
    mockup: '/mockup.png',
    description:
      'Run your business from your phone.',
    bullets: [
      'iOS & Android apps',
      'Full dashboard access',
      'Offline-friendly design',
      'Push notifications',
    ],
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    mockup: '/mockup3.png',
    description:
      'Your data is protected and always available.',
    bullets: [
      'End-to-end encryption',
      'Automatic backups',
      '99.9% uptime',
      'Role-based access',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - converted to About-style layout with home gradient backdrop */}
      <section className="relative isolate overflow-hidden px-6 md:px-12 pt-6 pb-16 md:pt-16 md:pb-24">
        <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(241,247,255,0.95)_18%,rgba(228,238,252,0.94)_42%,rgba(227,245,239,0.90)_72%,rgba(252,252,252,1)_100%)]" />
        <div className="absolute left-0 top-0 h-full w-[52%] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_left_top,rgba(21,131,241,0.24)_0%,rgba(21,131,241,0.12)_24%,rgba(255,255,255,0)_68%)] animate-float will-change-transform" />
        <div className="absolute right-0 top-0 h-full w-[52%] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_right_top,rgba(129,232,196,0.20)_0%,rgba(129,232,196,0.12)_24%,rgba(255,255,255,0)_68%)] animate-float-delayed will-change-transform" />
        <div className="absolute left-[10%] top-[18%] -z-10 h-32 w-32 rounded-full bg-[#1583F1]/12 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute right-[12%] top-[24%] -z-10 h-40 w-40 rounded-full bg-[#81E8C4]/14 blur-3xl pointer-events-none animate-float" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <FadeIn direction="left" className="text-center md:text-left relative z-10">
            <p className="gradient-text mb-4 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">
              Platform Features
            </p>

            <h1 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
              Everything You Need to Run a
              <br className="hidden sm:block" />
              <span className="gradient-text">Profitable Vending Business</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">
              VendSavvy brings sales tracking, inventory, expenses, and reporting into one powerful platform.
            </p>

            <div className="mt-6">
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/signup">
                  <Button size="lg">Start Free 28-Day Trial</Button>
                </Link>
              </m.div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="relative z-10 mx-auto w-full max-w-[700px]">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#1583F1]/15 via-[#81E8C4]/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] h-56 md:h-[320px]">
              {/* Intentionally left as the existing picture space — placeholder box kept */}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-24">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-10 md:gap-12 items-center"
              >
                {/* TEXT */}
                <FadeIn
                  direction={isEven ? 'left' : 'right'}
                  className={isEven ? '' : 'md:order-2'}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-6 bg-gradient-to-br from-[#1583F1]/10 to-[#81E8C4]/20">
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-[#1583F1]" />
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    {feature.title}
                  </h2>

                  <p className="text-sm sm:text-base text-foreground/70 mb-6">
                    {feature.description}
                  </p>

                  <StaggerContainer>
                    {feature.bullets.map((bullet) => (
                      <StaggerItem key={bullet}>
                        <li className="flex items-center gap-3 text-sm text-foreground/80 list-none py-1">
                          <m.span
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          {bullet}
                        </li>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeIn>

                {/* MOCKUP */}
                <FadeIn
                  direction={isEven ? 'right' : 'left'}
                  delay={0.1}
                  className={isEven ? '' : 'md:order-1'}
                >
                  <m.div className="relative flex items-center justify-center p-4 sm:p-6">
                    
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1583F1]/10 via-[#4BBFB0]/10 to-transparent blur-2xl rounded-2xl" />

                    {/* Floating */}
                    <m.div
                      className="relative w-full animate-float-slow"
                      whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
                      transition={{ type: 'spring', stiffness: 120 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div
                        className={`relative w-full ${
                          feature.size === 'large'
                            ? 'h-[320px] sm:h-[400px] md:h-[560px]'
                            : 'h-[260px] sm:h-[320px] md:h-[500px]'
                        }`}
                      >
                        <Image
                          src={feature.mockup}
                          alt={feature.title}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
                        />
                      </div>
                    </m.div>
                  </m.div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <ScaleIn>
          <div className="max-w-3xl mx-auto rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-[#1270D0] via-[#1583F1] to-[#4BBFB0]">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Ready to See It in Action?
            </h2>

            <p className="text-white/80 mb-8">
              Start your free trial — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="cta">
                  Start Free Trial
                </Button>
              </Link>

              <Link href="/pricing">
                <Button size="lg" variant="cta-outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </ScaleIn>
      </section>

      <Footer />
    </div>
  );
}