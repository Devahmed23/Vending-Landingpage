'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { m, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';
import { Check, X, ChevronDown } from 'lucide-react';
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

const faqs = [
  {
    q: 'What is VendSavvy?',
    a: 'VendSavvy is an all-in-one platform designed for vending machine operators to track sales, manage inventory, monitor expenses, and calculate profits across all machines and locations.',
  },
  {
    q: 'Who is VendSavvy for?',
    a: 'VendSavvy is built for new vending machine owners, growing vending businesses, and operators managing multiple machines and locations.',
  },
  {
    q: 'How does VendSavvy help me make more money?',
    a: 'VendSavvy shows exactly how each machine and location is performing, helping you restock smarter, reduce waste, and focus on the most profitable machines.',
  },
  {
    q: 'Can I track multiple machines and locations?',
    a: 'Yes. You can manage all your machines, assign them to locations, and track performance individually or across your entire business.',
  },
  {
    q: 'Does VendSavvy calculate commissions or rent for locations?',
    a: 'Yes. VendSavvy automatically calculates what you owe each location based on commission percentages, flat rent, or hybrid agreements.',
  },
  {
    q: 'Do I need special vending machines to use VendSavvy?',
    a: 'No. VendSavvy works with any vending machine. You can enter data manually or connect supported devices for automatic tracking (coming soon).',
  },
  {
    q: 'Can I track inventory?',
    a: 'Yes. VendSavvy helps you monitor product levels, track restocks, and avoid running out of high-selling items.',
  },
  {
    q: 'Does VendSavvy track expenses?',
    a: 'Yes. You can log expenses like gas, repairs, commissions, and other costs to get a full view of your profits.',
  },
  {
    q: 'What reports are included?',
    a: 'VendSavvy includes profit and loss reports, sales by machine, location performance, and rental/commission settlement reports.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. All plans include a 28-day free trial so you can explore the platform risk-free.',
  },
  {
    q: 'How does pricing work?',
    a: 'Pricing is based on the number of machines you manage: Starter (up to 5 machines), Growth (6–20 machines), and Pro (21–75 machines).',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes. You can upgrade your plan at any time as your business grows.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. VendSavvy uses secure systems to protect your data and keep your business information private.',
  },
  {
    q: 'Do I need accounting experience to use VendSavvy?',
    a: 'No. VendSavvy is designed to be simple and easy to use, even if you have no accounting background.',
  },
  {
    q: 'Can I access VendSavvy on my phone?',
    a: 'Yes. VendSavvy is mobile-friendly, so you can manage your business on the go.',
  },
  {
    q: 'Why not just use spreadsheets?',
    a: 'Spreadsheets are manual, time-consuming, and prone to errors. VendSavvy automates your tracking, calculations, and reporting to save time and help you make better decisions faster.',
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <m.div
      className="border border-border rounded-xl overflow-hidden bg-background"
      whileHover={{ borderColor: 'var(--primary)' }}
      transition={{ duration: 0.18 }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-foreground/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-sm">{q}</span>
        <m.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-4 h-4 text-foreground/50" />
        </m.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-foreground/70 border-t border-border pt-4">
              {a}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 overflow-hidden text-center"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.09) 100%)' }}>
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#81E8C4]/12 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full bg-[#1583F1]/8 blur-[90px] pointer-events-none" />
        <FadeIn direction="up" className="relative">
          <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, <span className="gradient-text">Transparent Pricing</span></h1>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Start free, then scale as you grow.
          </p>
        </FadeIn>
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

      {/* FAQ */}
      <section className="px-6 md:px-12 pb-16 md:pb-24"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <div className="max-w-3xl mx-auto pt-16">
          <FadeIn direction="up" className="text-center mb-10">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </FadeIn>
          <StaggerContainer className="space-y-4">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>
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
