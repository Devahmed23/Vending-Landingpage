'use client';

import { Button } from '@/components/ui/button';
import { Check, TrendingUp, AlertCircle, Zap, BarChart3, ArrowRight, Users, Store, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { m } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';

const metrics = [
  { value: '10K+',  label: 'Active Operators' },
  { value: '$50M+', label: 'Revenue Tracked' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '24/7',  label: 'Live Support' },
];

const featureCards = [
  {
    icon: Users,
    title: 'Simple setup designed for non-technical users',
    description: 'Get started fast with a setup that is easy to understand and simple to use from day one.',
  },
  {
    icon: Store,
    title: 'Built specifically for vending, not generic retail',
    description: 'Vend Savvy is shaped around vending workflows instead of broad retail assumptions.',
  },
  {
    icon: TrendingUp,
    title: 'Real-time visibility into performance',
    description: 'See what is working right now so you can act before small issues become bigger problems.',
  },
  {
    icon: BarChart3,
    title: 'Scales with your business as you grow',
    description: 'Whether you manage a few machines or a large route, the platform grows with your operation.',
  },
  {
    icon: RefreshCcw,
    title: 'Replaces spreadsheets, guesswork, and disconnected systems',
    description: 'Keep your sales, costs, inventory, and reporting in one place instead of scattered tools.',
  },
];

const pricingPlans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '28 days',
    machines: 'Up to 5 Machines',
    features: ['Full platform access', 'No credit card needed', 'Basic reports'],
    highlight: false,
    cta: 'Start Free',
  },
  {
    name: 'Starter',
    price: '$49.99',
    period: '/month',
    machines: 'Up to 5 Machines',
    features: ['Everything in Free', 'Priority support', 'Sales tracking'],
    highlight: false,
    cta: 'Get Starter',
  },
  {
    name: 'Growth',
    price: '$89.99',
    period: '/month',
    machines: '6–20 Machines',
    features: ['Everything in Starter', 'Proactive alerts', 'Advanced analytics'],
    highlight: true,
    cta: 'Get Growth',
  },
  {
    name: 'Pro',
    price: '$149.99',
    period: '/month',
    machines: '21–75 Machines',
    features: ['Everything in Growth', 'API access', 'Custom integrations'],
    highlight: false,
    cta: 'Get Pro',
  },
];

const whatWeDoPoints = [
  'Track sales from every machine in real time',
  'Manage inventory, restocking, and product performance',
  'Log expenses, repairs, and operational costs',
  'View profit & loss per machine, location, or route',
  'Automate reporting so decisions are data-driven, not guesswork',
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-12 pt-10 pb-0 md:pt-16 md:pb-0 overflow-x-clip overflow-y-visible">
        {/* Ambient brand blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[560px] h-[560px] rounded-full bg-[#1583F1]/10 blur-[110px]" />
          <div className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-[#81E8C4]/18 blur-[90px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-[#1583F1]/6 blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left */}
          <div className="pt-6 md:pt-16 pb-10 md:pb-24 text-center md:text-left">
            {/* Gradient pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 mx-auto md:mx-0"
              style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.15))', border: '1px solid rgba(21,131,241,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1583F1] animate-pulse" />
              <span className="gradient-text">28-Day Free Trial — No Credit Card Required</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-5 md:mb-6 text-foreground">
              Manage, Track & Grow<br className="hidden sm:block" />
              <span className="gradient-text"> Your Vending Business</span>
            </h1>

            <p className="text-base md:text-lg text-foreground/65 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Track sales, manage inventory, monitor profits, and grow your vending machine empire — all in one simple platform built for operators.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free 28-Day Trial
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                  See All Features
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <div className="flex -space-x-2">
                {['#1583F1', '#4BA8D8', '#81E8C4', '#1270D0'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: c }}>
                    {['J', 'M', 'A', 'R'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/60">
                <span className="font-semibold text-foreground">2,400+</span> operators trust VendSavvy
              </p>
            </div>
          </div>

          {/* Mobile mockup */}
          <div className="flex md:hidden justify-center pb-10 overflow-visible px-2">
            <div className="relative w-full max-w-[390px] h-[420px] sm:h-[450px] overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] bg-gradient-to-br from-[#1583F1]/20 to-[#81E8C4]/20 blur-3xl rounded-full" />
              </div>
              <div className="absolute left-1 bottom-8 w-[118px] h-[236px] rotate-[-12deg]">
                <Image
                  src="/iPhone 18.png"
                  alt="Analytics Screen"
                  fill
                  sizes="118px"
                  className="object-contain drop-shadow-xl opacity-90"
                />
              </div>
              <div className="absolute left-1/2 bottom-0 z-10 w-[212px] h-[342px] -translate-x-1/2">
                <Image
                  src="/mockup.png"
                  alt="VendSavvy App"
                  fill
                  priority
                  sizes="212px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute right-1 bottom-8 w-[118px] h-[236px] rotate-[12deg]">
                <Image
                  src="/iPhone 17.png"
                  alt="Inventory Screen"
                  fill
                  sizes="118px"
                  className="object-contain drop-shadow-xl opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Desktop 3-phone + vending machine */}
          <div className="hidden md:flex relative items-end justify-center h-[560px] lg:h-[640px] xl:h-[680px] w-full overflow-visible px-2 lg:px-0 translate-y-8 lg:translate-y-10">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[480px] h-[480px] bg-gradient-to-br from-[#1583F1]/15 to-[#81E8C4]/15 blur-3xl rounded-full" />
            </div>
            <Image src="/vending machine.png" alt="Vending machine" width={900} height={720}
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 640px, 560px"
              className="absolute top-0 left-1/2 -translate-x-1/2 z-0 scale-[1.25] opacity-55 select-none pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 z-[1] pointer-events-none" />
            <div className="absolute left-2 lg:left-0 bottom-[60px] z-[2] w-[187px] h-[374px] rotate-[-10deg]">
              <Image
                src="/iPhone 18.png"
                alt="Analytics Screen"
                fill
                sizes="187px"
                className="object-contain drop-shadow-xl opacity-90"
              />
            </div>
            <div className="absolute right-2 lg:right-0 bottom-[60px] z-[2] w-[187px] h-[374px] rotate-[10deg]">
              <Image
                src="/iPhone 17.png"
                alt="Inventory Screen"
                fill
                sizes="187px"
                className="object-contain drop-shadow-xl opacity-90"
              />
            </div>
            <div className="relative z-[3] w-[360px] h-[495px] lg:w-[420px] lg:h-[578px] xl:w-[480px] xl:h-[660px]">
              <Image
                src="/mockup.png"
                alt="Main App"
                fill
                priority
                sizes="(min-width: 1280px) 480px, (min-width: 1024px) 420px, 360px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics — gradient band ───────────────────────────────────────── */}
      <section className="gradient-bg px-6 md:px-12 py-14">
        <StaggerContainer className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/75 text-sm">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section id="features" className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Why Vend Savvy</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Vending Business Needs</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              One platform for everything — so you can focus on growing, not managing chaos.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {featureCards.map((feature, idx) => {
              const isLastOddCard = featureCards.length % 2 === 1 && idx === featureCards.length - 1;

              return (
              <StaggerItem
                key={feature.title}
                className={isLastOddCard ? 'md:col-span-2 md:flex md:justify-center' : ''}
              >
                <m.div
                  className={`group p-8 border border-border rounded-2xl bg-white cursor-default h-full relative overflow-hidden ${
                    isLastOddCard ? 'md:w-[calc(50%-0.75rem)]' : ''
                  }`}
                  whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(21,131,241,0.10)' }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Gradient left accent bar */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] gradient-bg rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {/* Gradient icon container */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.18))' }}>
                    <feature.icon className="w-6 h-6 text-[#1583F1]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
                </m.div>
              </StaggerItem>
              );
            })}
          </StaggerContainer>
          <FadeIn direction="up" delay={0.1} className="text-center mt-10">
            <Link href="/features">
              <Button variant="outline">View All Features</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────────────── */}
      <section id="about" className="px-6 md:px-12 py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute -top-20 left-12 w-[320px] h-[320px] rounded-full bg-[#1583F1]/10 blur-[90px]" />
          <div className="absolute bottom-8 right-12 w-[280px] h-[280px] rounded-full bg-[#81E8C4]/16 blur-[85px]" />
        </div>

        <div className="absolute pointer-events-none right-0 md:right-2 lg:-right-2 xl:-right-2 2xl:-right-8 -top-8 md:-top-4 lg:-top-8 xl:-top-10 2xl:-top-24 w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px] xl:w-[340px] xl:h-[340px] 2xl:w-[460px] 2xl:h-[460px] z-0 2xl:z-20 opacity-35 md:opacity-45 lg:opacity-55 xl:opacity-60 2xl:opacity-100">
          <Image
            src="/app%20icon.png"
            alt=""
            fill
            sizes="(min-width: 1536px) 460px, (min-width: 1280px) 340px, (min-width: 1024px) 300px, (min-width: 768px) 220px, 150px"
            className="object-contain drop-shadow-[0_18px_40px_rgba(21,131,241,0.28)]"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn direction="up" className="text-center mb-12 md:mb-14">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built around the daily reality of vending operations</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Vend Savvy helps operators manage machines, inventory, and financial performance in one connected workflow.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <FadeIn direction="left" className="h-full">
            <m.div
              className="h-full bg-white/95 backdrop-blur-sm rounded-2xl border border-[#1583F1]/20 p-7 md:p-9 relative overflow-hidden"
              whileHover={{ y: -4, boxShadow: '0 18px 40px rgba(21,131,241,0.10)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
              <div className="absolute -right-14 -top-14 w-36 h-36 rounded-full bg-[#1583F1]/8 blur-2xl" />

              <h2 className="text-3xl md:text-4xl font-bold mb-5">Vend Savvy helps vending operators</h2>
              <p className="text-foreground/65 leading-relaxed mb-4">
                Vend Savvy helps vending operators manage day-to-day operations with better visibility and stronger financial control.
              </p>
              <div className="rounded-xl border border-[#1583F1]/25 bg-gradient-to-r from-[#1583F1]/8 to-[#81E8C4]/10 px-4 py-3 inline-block">
                <p className="text-sm font-semibold text-[#1270D0]">Whether you operate 5 machines or 500</p>
              </div>
              <p className="text-foreground/65 leading-relaxed mt-5">
                Vend Savvy gives you a clear financial picture of your vending business.
              </p>
              <div className="mt-7">
                <Link href="/about">
                  <Button variant="outline" className="border-[#1583F1]/30 hover:border-[#1583F1]/60">
                    Learn More 
                  </Button>
                </Link>
              </div>
            </m.div>
          </FadeIn>

          <FadeIn direction="right" delay={0.05} className="h-full">
            <m.div
              className="h-full bg-white/95 backdrop-blur-sm rounded-2xl border border-[#1583F1]/20 p-7 md:p-9 relative overflow-hidden"
              whileHover={{ y: -4, boxShadow: '0 18px 40px rgba(21,131,241,0.10)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
              <div className="absolute -left-14 -bottom-14 w-36 h-36 rounded-full bg-[#81E8C4]/12 blur-2xl" />

              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Built for Vending Operators</h3>
                <p className="text-foreground/70 font-semibold mb-2">We focus exclusively on the vending industry.</p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  That means every feature is designed around how vending businesses actually work:
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm md:text-[15px] text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Route-based operations</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-[15px] text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Location profitability tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-[15px] text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Stock and inventory movement per machine</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-[15px] text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Cash and digital sales tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-[15px] text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Simple onboarding for new machines and locations</span>
                </li>
              </ul>

              <p className="text-sm text-foreground/65 leading-relaxed italic">
                No bloated accounting tools. No unnecessary complexity. Just vending intelligence.
              </p>
            </m.div>
          </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing That Scales</h2>
            <p className="text-foreground/60">Start free. Upgrade when you&apos;re ready.</p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <m.div
                  className={`relative p-6 rounded-2xl border h-full flex flex-col ${
                    plan.highlight
                      ? 'text-white shadow-[0_8px_40px_rgba(21,131,241,0.30)]'
                      : 'border-border bg-white hover:border-[#1583F1]/40'
                  }`}
                  style={plan.highlight ? { background: 'linear-gradient(135deg, #1270D0 0%, #1583F1 50%, #4BBFB0 100%)', borderColor: 'transparent' } : {}}
                  whileHover={plan.highlight ? {} : { y: -5, boxShadow: '0 16px 40px rgba(21,131,241,0.10)' }}
                  transition={{ duration: 0.2 }}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-white text-[#1583F1] text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className={`font-bold text-base mb-3 ${plan.highlight ? 'text-white' : ''}`}>{plan.name}</h3>
                  <div className="mb-1">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : ''}`}>{plan.price}</span>
                    <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/70' : 'text-foreground/55'}`}>{plan.period}</span>
                  </div>
                  <p className={`text-xs mb-6 ${plan.highlight ? 'text-white/70' : 'text-foreground/50'}`}>{plan.machines}</p>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.highlight ? 'bg-white/20' : ''
                        }`}
                          style={!plan.highlight ? { background: 'linear-gradient(135deg, rgba(21,131,241,0.15), rgba(129,232,196,0.20))' } : {}}>
                          <Check className={`w-2.5 h-2.5 ${plan.highlight ? 'text-white' : 'text-[#1583F1]'}`} />
                        </div>
                        <span className={plan.highlight ? 'text-white/90' : 'text-foreground/70'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup">
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
          <FadeIn direction="up" delay={0.1} className="text-center mt-10">
            <Link href="/pricing">
              <Button variant="outline" className="group border-[#1583F1]/30 hover:border-[#1583F1]/60">
                Compare all plan features
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <ScaleIn>
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl p-8 sm:p-10 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #1270D0 0%, #1583F1 45%, #4BBFB0 100%)' }}>
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#81E8C4]/20 rounded-full blur-3xl pointer-events-none" />

            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Get Started Today</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white leading-tight">
              Ready to Scale<br />Your Business?
            </h2>
            <p className="text-lg mb-10 text-white/80 max-w-xl mx-auto">
              Join thousands of vending operators who use VendSavvy to manage and grow smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/signup">
                  <Button size="lg" variant="cta">
                    Start Your Free Trial
                  </Button>
                </Link>
              </m.div>
              <Link href="/pricing">
                <Button size="lg" variant="cta-outline">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-xs mt-6">No credit card required · Cancel anytime · 28 days free</p>
          </div>
        </ScaleIn>
      </section>

      <Footer />
    </div>
  );
}
