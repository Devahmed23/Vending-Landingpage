'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '28 days',
    description: 'Test drive VendSavvy with full access — zero risk.',
    machines: 'Up to 5 machines',
    highlight: false,
    cta: 'Start Free Trial',
    features: {
      'Sales Tracking': true,
      'Inventory Management': true,
      'Expense Tracking': true,
      'P&L Reports': true,
      'Smart Alerts': true,
      'Mobile App': true,
      'Priority Support': false,
      'Advanced Analytics': false,
      'API Access': false,
      'Custom Integrations': false,
    },
  },
  {
    name: 'Starter',
    price: '$49.99',
    period: '/month',
    description: 'Perfect for solo operators running a small fleet.',
    machines: 'Up to 5 machines',
    highlight: false,
    cta: 'Get Starter',
    features: {
      'Sales Tracking': true,
      'Inventory Management': true,
      'Expense Tracking': true,
      'P&L Reports': true,
      'Smart Alerts': true,
      'Mobile App': true,
      'Priority Support': true,
      'Advanced Analytics': false,
      'API Access': false,
      'Custom Integrations': false,
    },
  },
  {
    name: 'Growth',
    price: '$89.99',
    period: '/month',
    description: 'For operators scaling up to 20 machines.',
    machines: '6–20 machines',
    highlight: true,
    cta: 'Get Growth',
    features: {
      'Sales Tracking': true,
      'Inventory Management': true,
      'Expense Tracking': true,
      'P&L Reports': true,
      'Smart Alerts': true,
      'Mobile App': true,
      'Priority Support': true,
      'Advanced Analytics': true,
      'API Access': false,
      'Custom Integrations': false,
    },
  },
  {
    name: 'Pro',
    price: '$149.99',
    period: '/month',
    description: 'For serious operators running large-scale operations.',
    machines: '21–75 machines',
    highlight: false,
    cta: 'Get Pro',
    features: {
      'Sales Tracking': true,
      'Inventory Management': true,
      'Expense Tracking': true,
      'P&L Reports': true,
      'Smart Alerts': true,
      'Mobile App': true,
      'Priority Support': true,
      'Advanced Analytics': true,
      'API Access': true,
      'Custom Integrations': true,
    },
  },
];

const featureKeys = [
  'Sales Tracking',
  'Inventory Management',
  'Expense Tracking',
  'P&L Reports',
  'Smart Alerts',
  'Mobile App',
  'Priority Support',
  'Advanced Analytics',
  'API Access',
  'Custom Integrations',
];

export default function PricingPage() {
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
            <p className="gradient-text mb-4 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">Pricing</p>
            <h1 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-[56px] mb-4">
              Simple,
              <br className="hidden sm:block" />
              <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">
              No hidden fees. No long-term contracts. Start free, then scale as you grow.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="relative z-10 mx-auto w-full max-w-[700px]">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#1583F1]/15 via-[#81E8C4]/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] h-56 md:h-[320px]">
              {/* Kept existing decorative blur circles: left intentionally blank for pricing visual */}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.08}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <m.div
                  className={`relative p-6 rounded-xl border flex flex-col h-full ${
                    plan.highlight
                      ? 'text-white shadow-[0_8px_40px_rgba(21,131,241,0.30)]'
                      : 'border-border bg-card'
                  }`}
                  style={plan.highlight ? { background: 'linear-gradient(135deg, #1270D0 0%, #1583F1 50%, #4BBFB0 100%)', borderColor: 'transparent' } : {}}
                  whileHover={plan.highlight ? {} : { y: -8, boxShadow: '0 20px 48px rgba(21,131,241,0.12)' }}
                  transition={{ duration: 0.22 }}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-white text-[#1583F1] text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? 'text-white' : ''}`}>{plan.name}</h3>
                  <p className={`text-xs mb-4 ${plan.highlight ? 'text-white/70' : 'text-foreground/60'}`}>{plan.description}</p>
                  <div className="mb-2">
                    <span className={`text-3xl font-bold ${plan.highlight ? 'text-white' : ''}`}>{plan.price}</span>
                    <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/70' : 'text-foreground/60'}`}>{plan.period}</span>
                  </div>
                  <p className={`text-xs mb-6 ${plan.highlight ? 'text-white/70' : 'text-foreground/60'}`}>{plan.machines}</p>
                  <Link href="/signup" className="mt-auto">
                    <Button
                      className="w-full"
                      variant={plan.highlight ? 'secondary' : 'outline'}
                      style={plan.highlight ? { backgroundColor: 'rgba(255,255,255,0.18)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' } : {}}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </m.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl font-bold">Compare All Plans</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-foreground/5">
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        className={`py-4 px-4 font-semibold text-center ${plan.highlight ? 'text-primary' : ''}`}
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureKeys.map((key, idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-background' : 'bg-foreground/[0.02]'}>
                      <td className="py-3 px-6 text-foreground/80">{key}</td>
                      {plans.map((plan) => (
                        <td key={plan.name} className="py-3 px-4 text-center">
                          {plan.features[key as keyof typeof plan.features] ? (
                            <m.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.02 }}
                            >
                              <Check className="w-4 h-4 text-primary mx-auto" />
                            </m.div>
                          ) : (
                            <X className="w-4 h-4 text-foreground/20 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-foreground/5">
                    <td className="py-4 px-6 font-semibold">Machine Limit</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="py-4 px-4 text-center text-xs text-foreground/70">
                        {plan.machines}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <ScaleIn>
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl p-12 text-center"
            style={{ background: 'linear-gradient(135deg, #1270D0 0%, #1583F1 45%, #4BBFB0 100%)' }}>
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#81E8C4]/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative">
              Start Free — No Credit Card Needed
            </h2>
            <p className="text-white/80 mb-8 relative">28 days of full access. No commitments. Cancel anytime.</p>
            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block relative">
              <Link href="/signup">
                <Button size="lg" variant="cta">
                  Start Free Trial
                </Button>
              </Link>
            </m.div>
          </div>
        </ScaleIn>
      </section>

      <Footer />
    </div>
  );
}
