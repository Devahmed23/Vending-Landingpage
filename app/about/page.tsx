'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';
import { Target, Heart, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { AboutHero } from '@/components/about-hero';

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
      'We listen to real vending operators — not assumptions. Our roadmap is driven by the people who use VendSavvy LLC every day.',
  },
  {
    icon: Zap,
    title: 'Simple by Design',
    description:
      "No bloated dashboards, no steep learning curves. VendSavvy LLC is powerful enough for a 75-machine operation, simple enough to use on day one.",
  },
  {
    icon: Users,
    title: 'Built to Scale With You',
    description:
      "Whether you're starting your first machine or growing to 50, VendSavvy LLC grows with you — same platform, same simplicity.",
  },
];

const targetAudience = [
  {
    eyebrow: 'New Vendors',
    title: 'New Vendors',
    description:
      'For individuals starting their vending business and trying to avoid early mistakes that cost time and profit.',
    lead:
      'Without the right system, it’s easy to lose track of inventory, underestimate costs, or not know which machines are actually profitable.',
    points: [
      'Track sales, inventory, and expenses from day one in one system',
      'Understand true profit per machine without manual math or spreadsheets',
      'Identify which products actually sell vs. sit idle',
      'Avoid stockouts and over-ordering mistakes',
      'Build consistent tracking habits that scale with your business',
      'Make smarter location decisions early, before losses add up',
    ],
  },
  {
    eyebrow: 'Established Vendors',
    title: 'Established Vendors',
    description:
      'For operators managing multiple machines, routes, or locations who are starting to lose visibility across their operation.',
    lead:
      'At scale, small inefficiencies become expensive - missed restocks, underperforming machines, and unclear profitability by location can quietly reduce margins.',
    points: [
      'See real-time performance across all machines and locations',
      'Identify underperforming machines and routes immediately',
      'Track inventory movement across every stop on your route',
      'Monitor expenses, commissions, and profitability by location',
      'Reduce stockouts and emergency restocking runs',
      'Improve route efficiency and decision-making with clear data',
      'Understand exactly where profit is being made or lost',
    ],
  },
  // {
  //   title: 'Full-Scale Operators',
  //   description: 'You manage 20+ machines across multiple locations. You need reliable data, not guesswork.',
  // },
  // {
  //   title: 'Multi-Industry Vendors',
  //   description: 'Offices, schools, hospitals, gyms — wherever your machines are, VendSavvy LLC has you covered.',
  // },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <AboutHero />

      {/* About Us */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Vend Savvy?</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <p className="text-lg font-semibold text-foreground/85 mb-6">
                VendSavvy LLC was created to solve a problem many vending operators face every day—running an entire business through spreadsheets, handwritten notes, disconnected apps, and guesswork. 
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground/90 mb-1">The Problem We Solve</p>
                    <p className="text-foreground/70">
                      Managing machines across multiple locations should not require hours of manual tracking just to understand sales, inventory, expenses, or profitability. Yet many operators still struggle to see what is actually making money, what needs attention, and where operational inefficiencies are costing them time and revenue. 
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground/90 mb-1">We built VendSavvy LLC to change that. </p>
                    <p className="text-foreground/70">
                      VendSavvy LLC is a modern vending management platform designed specifically for vending operators who want more clarity, organization, and control over their business. Instead of piecing together multiple systems, operators can manage sales, inventory, expenses, machine performance, commissions, and reporting from one centralized platform. 
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <m.div
                className="rounded-2xl p-10 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.08) 0%, rgba(129,232,196,0.12) 100%)', border: '1px solid rgba(21,131,241,0.2)' }}
                whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(21,131,241,0.12)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bg rounded-b-full" />
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#1583F1]/10 blur-2xl" />
                
                <h3 className="text-xl font-bold mb-4 relative z-10">Built for Modern Vending Operators</h3>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/75">Single source of truth for all operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/75">Real-time insights across all machines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/75">Automated reporting and analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/75">Scales from 1 machine to 100+</span>
                  </li>
                </ul>
                <p className="text-sm text-foreground/60 mt-4">
                  Whether you operate a few machines or manage a growing multi-location vending business, VendSavvy LLC helps simplify operations so you can focus less on operational chaos and more on growing a profitable business. 
                </p>
              </m.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="h-full flex items-center">
            <div className="max-w-xl md:py-4">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg font-semibold text-foreground/85 mb-4">
                Helping Vending Operators Scale Smarter
              </p>
              <p className="text-lg font-semibold text-foreground/85 mb-4">
                Our mission is to make professional vending management accessible to operators at every stage of growth.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We believe vending businesses should have access to the same level of operational visibility, organization, and business intelligence used by large enterprise operators, without the complexity or cost of enterprise software. Whether you manage your first vending machine or operate a large multi-location network, VendSavvy LLC is designed to give you the tools, insights, and structure needed to run a smarter, more profitable business. 
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">
              <m.div
                className="rounded-2xl p-10 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.10) 100%)', border: '1px solid rgba(21,131,241,0.15)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <blockquote className="text-xl font-medium text-foreground/80 italic leading-relaxed">
                  &ldquo;You shouldn&apos;t need a finance degree or a tech background to understand your vending
                  business. You just need VendSavvy LLC.&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-foreground/60">— The VendSavvy LLC Team</p>
              </m.div>

              <div className="rounded-2xl border border-[#E6F3FF] bg-[linear-gradient(135deg,rgba(21,131,241,0.06),rgba(129,232,196,0.08))] p-6 md:p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1270D0] mb-3">VendSavvy LLC was built to help operators take control of their business by making it easier to:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 leading-relaxed">
                  <li>Reduce manual tracking and paperwork</li>
                  <li>Understand true machine profitability</li>
                  <li>Improve inventory and route efficiency</li>
                  <li>Simplify commission and location management</li>
                  <li>Make faster, data-driven business decisions</li>
                  <li>Scale operations with confidence and clarity</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, rgba(18,112,208,0.10) 0%, rgba(21,131,241,0.08) 45%, rgba(75,191,176,0.12) 100%)' }}>
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
      <section className="relative overflow-hidden px-6 md:px-12 py-16 md:py-24 bg-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,247,255,0.88)_100%)]" />
        <div className="absolute -left-20 top-0 -z-10 h-72 w-72 rounded-full bg-[#1583F1]/10 blur-3xl" />
        <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-[#81E8C4]/12 blur-3xl" />

        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Who It&apos;s For</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who VendSavvy LLC Is For</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              VendSavvy LLC is built for vending operators who want clarity at every stage. Whether you&apos;re launching your first machine or managing a larger route network, the platform helps you understand what is working, what needs attention, and where your profit is going.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {targetAudience.map((item, idx) => (
              <StaggerItem key={item.title}>
                <m.div
                  className="group relative h-full overflow-hidden rounded-[28px] border border-white/80 bg-white/92 p-8 md:p-9 shadow-[0_22px_64px_rgba(15,23,42,0.10)] backdrop-blur-sm transition-all"
                  whileHover={{ y: -8, boxShadow: '0 34px 82px rgba(21,131,241,0.18)' }}
                  transition={{ duration: 0.22 }}
                >
                  <div className={`absolute inset-0 opacity-90 ${idx === 0 ? 'bg-[radial-gradient(circle_at_top_right,rgba(21,131,241,0.10),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,255,0.96))]' : 'bg-[radial-gradient(circle_at_top_right,rgba(75,191,176,0.10),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,250,247,0.96))]'}`} />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1583F1] via-[#1270D0] to-[#4BBFB0]" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#1583F1]/10 blur-3xl" />
                  <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[#81E8C4]/10 blur-3xl" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 to-transparent" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] shadow-sm ${idx === 0 ? 'border border-[#1583F1]/15 bg-[#F3F9FF] text-[#1270D0]' : 'border border-[#4BBFB0]/15 bg-[#F3FCF9] text-[#0E7C6E]'}`}>
                        {item.eyebrow}
                      </span>
                      <span className="text-sm font-semibold text-foreground/45">{item.points.length} benefits</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-base md:text-[1.05rem] font-medium text-foreground/82 leading-relaxed mb-5 max-w-xl">
                      {item.description}
                    </p>
                    <p className="text-sm md:text-base text-foreground/65 leading-relaxed mb-6 max-w-xl">
                      {item.lead}
                    </p>

                    <div className={`rounded-3xl border p-5 md:p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] ${idx === 0 ? 'border-[#DCEEFF] bg-[linear-gradient(135deg,rgba(21,131,241,0.06),rgba(255,255,255,0.92))]' : 'border-[#D9F5EE] bg-[linear-gradient(135deg,rgba(75,191,176,0.06),rgba(255,255,255,0.92))]'}`}>
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${idx === 0 ? 'text-[#1270D0]' : 'text-[#0E7C6E]'}`}>With VendSavvy LLC, you can</p>
                        <span className={`hidden sm:inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${idx === 0 ? 'bg-[#F3F9FF] text-[#1270D0]' : 'bg-[#F3FCF9] text-[#0E7C6E]'}`}>
                          Smart, clear, scalable
                        </span>
                      </div>
                      <ul className="space-y-3 text-sm md:text-[0.98rem] text-foreground/75 leading-relaxed">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${idx === 0 ? 'bg-[linear-gradient(135deg,rgba(21,131,241,0.15),rgba(129,232,196,0.22))] text-[#1583F1]' : 'bg-[linear-gradient(135deg,rgba(75,191,176,0.16),rgba(21,131,241,0.18))] text-[#0E7C6E]'}`}>
                              ✓
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </m.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Built to Grow With You */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <m.div
            className="relative overflow-hidden rounded-[32px] border border-[#DCEEFF] bg-[linear-gradient(135deg,rgba(18,112,208,0.08),rgba(21,131,241,0.06),rgba(75,191,176,0.10))] p-8 md:p-10 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            whileHover={{ y: -4, boxShadow: '0 30px 84px rgba(21,131,241,0.14)' }}
            transition={{ duration: 0.22 }}
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#1583F1]/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#81E8C4]/12 blur-3xl" />

            <div className="relative z-10 text-center">
              <p className="gradient-text text-sm font-semibold uppercase tracking-[0.28em] mb-4">Built to Grow With You</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">🚀 Built to Grow With You</h2>
              <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-foreground/75">
                Whether you&apos;re operating a handful of machines or scaling into a full vending network, VendSavvy LLC gives you the structure and visibility needed to run a more profitable, controlled, and scalable operation.
              </p>
              <div className="mt-6 inline-flex items-center rounded-full border border-[#1583F1]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[#1270D0] shadow-sm">
                Track more. Know more. Earn more.
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <ScaleIn>
          <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl p-12 text-center"
            style={{ background: 'linear-gradient(135deg, #1270D0 0%, #1583F1 45%, #4BBFB0 100%)' }}>
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#81E8C4]/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl font-bold mb-4 text-white relative">Ready to Take Control of Your Business?</h2>
            <p className="text-white/80 mb-8 relative">
              Join thousands of vending operators already using VendSavvy LLC to manage and grow smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/signup">
                  <Button size="lg" variant="cta" className="w-full sm:w-auto">
                    Start Free 30-Day Trial
                  </Button>
                </Link>
              </m.div>
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/contact">
                  <Button size="lg" variant="cta-outline" className="w-full sm:w-auto">
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
