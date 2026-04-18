'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';
import { Target, Heart, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Target,
    title: 'Built for Clarity',
    description:
      'We believe running a business should be clear, not confusing. Every feature we build is designed to give you a sharper picture of your operation.',
  },
  {
    icon: Heart,
    title: 'Operator-First',
    description:
      'We listen to real vending operators — not assumptions. Our roadmap is driven by the people who use VendSavvy every day.',
  },
  {
    icon: Zap,
    title: 'Simple by Design',
    description:
      "No bloated dashboards, no steep learning curves. VendSavvy is powerful enough for a 75-machine operation, simple enough to use on day one.",
  },
  {
    icon: Users,
    title: 'Built to Scale With You',
    description:
      "Whether you're starting your first machine or growing to 50, VendSavvy grows with you — same platform, same simplicity.",
  },
];

const targetAudience = [
  {
    title: 'Solo Operators',
    description: "You're running 1–5 machines on the side or as your main gig. You need less chaos, more clarity.",
  },
  {
    title: 'Growing Fleets',
    description: "You've scaled to 6–20 machines and spreadsheets aren't cutting it anymore. Time for a real system.",
  },
  {
    title: 'Full-Scale Operators',
    description: 'You manage 20+ machines across multiple locations. You need reliable data, not guesswork.',
  },
  {
    title: 'Multi-Industry Vendors',
    description: 'Offices, schools, hospitals, gyms — wherever your machines are, VendSavvy has you covered.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.09) 100%)' }}>
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#81E8C4]/12 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full bg-[#1583F1]/8 blur-[90px] pointer-events-none" />
        <FadeIn direction="up" className="max-w-3xl mx-auto text-center relative">
          <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Built VendSavvy Because<br />
            <span className="gradient-text">Running Vending Machines Was Too Hard</span>
          </h1>
          <p className="text-lg text-foreground/70">
            Tracking sales in a notebook. Managing inventory in a spreadsheet. Calculating profit in your head.
            There had to be a better way — so we built one.
          </p>
        </FadeIn>
      </section>

      {/* Mission */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-foreground/70 mb-4">
              VendSavvy exists to give vending machine operators — from solo side-hustlers to full-scale
              businesses — the tools they need to run smarter, more profitable operations.
            </p>
            <p className="text-foreground/70 mb-4">
              We saw operators losing money to blind spots: not knowing which machines were underperforming,
              running out of stock without warning, and having no clear picture of their actual profit. We set
              out to fix that.
            </p>
            <p className="text-foreground/70">
              Our goal is simple: give you the clarity to make better decisions, the automation to save you
              time, and the confidence to grow your business.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <m.div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.10) 100%)', border: '1px solid rgba(21,131,241,0.15)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <blockquote className="text-xl font-medium text-foreground/80 italic leading-relaxed">
                &ldquo;You shouldn&apos;t need a finance degree or a tech background to understand your vending
                business. You just need VendSavvy.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-foreground/60">— The VendSavvy Team</p>
            </m.div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-16 md:py-24"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl font-bold">What We Stand For</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <m.div
                  className="bg-background rounded-xl border border-border p-8 h-full"
                  whileHover={{ y: -4, borderColor: 'var(--primary)', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                    style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.18))' }}>
                    <value.icon className="w-6 h-6 text-[#1583F1]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </m.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Who It&apos;s For</p>
            <h2 className="text-3xl font-bold mb-4">Who VendSavvy Is For</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Whether you&apos;re just starting out or running a full-scale operation, VendSavvy is built for you.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, idx) => (
              <StaggerItem key={item.title}>
                <m.div
                  className="p-6 border border-border rounded-xl h-full"
                  whileHover={{ y: -5, borderColor: 'var(--primary)', boxShadow: '0 10px 28px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4 text-white"
                    style={{ background: 'linear-gradient(135deg, #1583F1, #81E8C4)' }}>
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </m.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
            <h2 className="text-3xl font-bold mb-4 text-white relative">Ready to Take Control of Your Business?</h2>
            <p className="text-white/80 mb-8 relative">
              Join thousands of vending operators already using VendSavvy to manage and grow smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-[#1583F1] hover:bg-white/90 border-0 w-full sm:w-auto">
                    Start Free 28-Day Trial
                  </Button>
                </Link>
              </m.div>
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/contact">
                  <Button size="lg" className="bg-white/10 text-white border border-white/30 hover:bg-white/20 shadow-none w-full sm:w-auto">
                    Talk to Us
                  </Button>
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
