'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '30 days',
    description: 'Start your free 30-day trial — full access, no credit card required.',
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
    description: 'Perfect for solo operators running up to 10 machines.',
    machines: 'Up to 10 machines',
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
    description: 'For operators scaling up to 50 machines.',
    machines: 'Up to 50 machines',
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
    description: 'For serious operators running large-scale operations up to 100 machines.',
    machines: 'Up to 100 machines',
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

const comparisonRows = [
  {
    feature: 'Sales Tracking',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'Inventory Management',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'Expense Tracking',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'Profit & Loss Reports',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'Smart Alerts',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'Mobile App Access',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'Priority Support',
    starter: 'Basic',
    growth: 'Priority',
    pro: 'Premium',
  },
  {
    feature: 'Advanced Analytics',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'API / Integrations',
    starter: true,
    growth: true,
    pro: true,
  },
  {
    feature: 'Machine Capacity',
    starter: 'Up to 10',
    growth: 'Up to 50',
    pro: 'Up to 100',
  },
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
              VendSavvy LLC was designed to make professional vending management accessible for operators at every stage—whether you manage a few machines or a growing multi-location operation. 
            </p>
          </FadeIn>

           <div className="relative z-10 mx-auto w-full max-w-[700px]">
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#1583F1]/15 via-[#81E8C4]/10 to-transparent blur-3xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-white/60 ">
                      <Image
                        src="/pricing.png"
                        alt="VendSavvy LLC dashboard mockup"
                        width={1200}
                        height={900}
                        priority
                        sizes="(min-width: 1024px) 700px, (min-width: 768px) 56vw, 100vw"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
        </div>
      </section>

      {/* Pricing overview & trial details */}
      <section className="px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <m.div className="rounded-2xl p-6 md:p-8 lg:p-10 bg-gradient-to-br from-[#F0FAFF] to-white border border-[#E6F3FF] shadow-lg flex flex-col md:flex-row items-start gap-6">
            <div className="md:flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Start a 30-Day Free Trial</h2>
              <p className="text-foreground/75 leading-relaxed mb-3">
                Every plan includes full access to the platform with no hidden fees or complicated contracts. Pricing scales based only on the number of machines you manage, so you can grow your business without paying for features you don’t use.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Start with a 30-day free trial—no credit card required—and experience a simpler, more organized way to run your vending business. After your trial ends, your selected plan will continue automatically based on your chosen machine tier. You can upgrade, adjust, or cancel at any time.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <Link href="/signup">
                  <Button size="lg">Start 30-Day Free Trial</Button>
                </Link>
                <Button asChild variant="link">
                  <Link href="#compare">Compare Plans</Link>
                </Button>
              </div>

              <div className="rounded-lg p-4 bg-white border border-[#EAF7FF] shadow-sm max-w-sm">
                <p className="text-sm text-foreground/70 mb-3 font-semibold">Trial Details</p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#1583F1] mt-0.5" /> Full platform access for 30 days</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#1583F1] mt-0.5" /> No credit card required</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#1583F1] mt-0.5" /> Automatic continuation by machine tier</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#1583F1] mt-0.5" /> Upgrade, adjust, or cancel anytime</li>
                </ul>
              </div>
            </div>

            <div className="md:w-80 lg:w-96 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image src="/mockup.png" alt="VendSavvy LLC app mockup" width={420} height={300} className="object-cover" />
              </div>
            </div>
          </m.div>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.08}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                  <m.div
                    className={`relative p-6 rounded-2xl flex flex-col h-full transition-shadow duration-200 shadow-sm hover:shadow-lg bg-white/70 backdrop-blur-sm border border-white/40`}
                    style={
                      plan.highlight
                        ? { background: 'linear-gradient(135deg, #1270D0 0%, #1583F1 50%, #4BBFB0 100%)', color: '#fff', borderColor: 'transparent' }
                        : undefined
                    }
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    {/* Free Trial badge */}
                    {plan.name === 'Free Trial' && (
                      <div className="absolute -top-3 left-4">
                        <span className="bg-white text-[#1270D0] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          30-Day Free
                        </span>
                      </div>
                    )}
                    {plan.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-white text-[#1583F1] text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? 'text-white' : ''}`}>{plan.name}</h3>
                    <p className={`text-xs mb-4 ${plan.highlight ? 'text-white/80' : 'text-foreground/60'}`}>{plan.description}</p>
                    <div className="mb-2">
                      <span className={`text-3xl font-bold ${plan.highlight ? 'text-white' : ''}`}>{plan.price}</span>
                      <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/70' : 'text-foreground/60'}`}>{plan.period}</span>
                    </div>
                    <p className={`text-xs mb-6 ${plan.highlight ? 'text-white/70' : 'text-foreground/60'}`}>{plan.machines}</p>
                    <Link href="/signup" className="mt-auto">
                      <Button
                        className="w-full"
                        variant={plan.highlight ? 'secondary' : 'outline'}
                        style={
                          plan.highlight
                            ? { backgroundColor: 'rgba(255,255,255,0.18)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }
                            : {}
                        }
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
      <section id="compare" className="px-6 md:px-12 pb-16 md:pb-24">
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
                    {plans.filter((plan) => plan.name !== 'Free Trial').map((plan) => (
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
                  {comparisonRows.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? 'bg-background' : 'bg-foreground/[0.02]'}>
                      <td className="py-3 px-6 text-foreground/80">{row.feature}</td>
                      {['starter', 'growth', 'pro'].map((planKey, planIndex) => {
                        const value = row[planKey as keyof typeof row];
                        const isBoolean = typeof value === 'boolean';

                        return (
                          <td key={planKey} className="py-3 px-4 text-center font-medium">
                            {isBoolean ? (
                              value ? (
                                <m.div
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: (idx + planIndex) * 0.02 }}
                                >
                                  <Check className="w-4 h-4 text-primary mx-auto" />
                                </m.div>
                              ) : (
                                <X className="w-4 h-4 text-foreground/20 mx-auto" />
                              )
                            ) : (
                              <span className="text-foreground/80">{value}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-foreground/5">
                    <td className="py-4 px-6 font-semibold">Machine Limit</td>
                    {plans.filter((plan) => plan.name !== 'Free Trial').map((plan) => (
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
              30 day free trial — No Credit Card Needed
            </h2>
            <p className="text-white/80 mb-8 relative">30 days of full access. No commitments. Cancel anytime.</p>
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
