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

const features = [
  {
    icon: TrendingUp,
    title: 'Sales Tracking',
    description:
      'Monitor every sale across all your machines in real time. See daily, weekly, and monthly revenue trends at a glance. Drill down by machine, location, or product to find your top performers.',
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
    description:
      "Always know what's in stock and what needs restocking. Set custom low-stock thresholds and get alerts before you run out — so you never miss a sale.",
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
    description:
      'Log and categorize every business expense — from inventory purchases to maintenance costs. Know exactly where your money is going so you can cut waste and boost margins.',
    bullets: [
      'Categorized expense logging',
      'Maintenance cost tracking',
      'Supplier invoice management',
      'Monthly expense summaries',
    ],
  },
  {
    icon: BarChart3,
    title: 'Profit & Loss Reporting',
    description:
      'See your real profitability with clear P&L reports. Understand which machines and locations are worth keeping — and which ones to reconsider.',
    bullets: [
      'Automated P&L statements',
      'Per-machine profitability',
      'Exportable reports (PDF/CSV)',
      'Month-over-month comparisons',
    ],
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description:
      'Get notified instantly when something needs your attention — low stock, unusual sales drops, or maintenance due. Stay in control without being glued to a screen.',
    bullets: [
      'Low-stock push notifications',
      'Sales anomaly detection',
      'Maintenance reminders',
      'Custom alert thresholds',
    ],
  },
  {
    icon: MapPin,
    title: 'Multi-Location Management',
    description:
      'Whether you have 2 machines or 75, manage every location from one central dashboard. See performance by site so you know where to focus your energy.',
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
    description:
      'Run your business from your phone. Check sales, update inventory, and view reports on the go — available on iOS and Android.',
    bullets: [
      'iOS & Android apps',
      'Full dashboard on mobile',
      'Offline-friendly design',
      'Push notification support',
    ],
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Your business data is encrypted and backed up automatically. With 99.9% uptime, VendSavvy is always there when you need it.',
    bullets: [
      'End-to-end encryption',
      'Automatic daily backups',
      '99.9% uptime SLA',
      'Role-based access control',
    ],
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.09) 100%)' }}>
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#81E8C4]/12 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full bg-[#1583F1]/8 blur-[90px] pointer-events-none" />
        <FadeIn direction="up" className="max-w-4xl mx-auto text-center relative">
          <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-4">Platform Features</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Run a<br />
            <span className="gradient-text">Profitable Vending Business</span>
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            VendSavvy brings sales tracking, inventory management, expense logging, and profit reporting
            together — in one platform built specifically for vending operators.
          </p>
          <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link href="/signup">
              <Button size="lg">Start Free 28-Day Trial</Button>
            </Link>
          </m.div>
        </FadeIn>
      </section>

      {/* Features alternating rows */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-24">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text side */}
                <FadeIn
                  direction={isEven ? 'left' : 'right'}
                  className={isEven ? '' : 'md:order-2'}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                    style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.18))' }}>
                    <feature.icon className="w-7 h-7 text-[#1583F1]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-foreground/70 mb-6">{feature.description}</p>
                  <StaggerContainer>
                    {feature.bullets.map((bullet) => (
                      <StaggerItem key={bullet}>
                        <li className="flex items-center gap-3 text-sm text-foreground/80 list-none py-1">
                          <m.span
                            className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease }}
                          />
                          {bullet}
                        </li>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeIn>

                {/* Icon illustration side */}
                <FadeIn
                  direction={isEven ? 'right' : 'left'}
                  delay={0.1}
                  className={isEven ? '' : 'md:order-1'}
                >
                  <m.div
                    className="bg-primary/5 rounded-2xl p-10 flex items-center justify-center min-h-[240px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* CSS float — GPU-composited, zero JS thread cost */}
                    <div className="animate-float">
                      <feature.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </m.div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 md:py-24"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <ScaleIn>
          <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl p-12 text-center"
            style={{ background: 'linear-gradient(135deg, #1270D0 0%, #1583F1 45%, #4BBFB0 100%)' }}>
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#81E8C4]/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to See It in Action?</h2>
            <p className="text-white/80 mb-8">
              Start your free 28-day trial — no credit card required. Get full access to every feature from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-[#1583F1] hover:bg-white/90 border-0 w-full sm:w-auto">Start Free Trial</Button>
                </Link>
              </m.div>
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/pricing">
                  <Button size="lg" className="bg-white/10 text-white border border-white/30 hover:bg-white/20 shadow-none w-full sm:w-auto">View Pricing</Button>
                </Link>
              </m.div>
            </div>
          </div>
        </ScaleIn>
      </section>

      <Footer />
    </div>
  );
}
