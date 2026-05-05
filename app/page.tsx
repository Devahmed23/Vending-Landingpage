'use client';

import { Button } from '@/components/ui/button';
import { Check, TrendingUp, AlertCircle, Zap, BarChart3, ArrowRight, Users, Store, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { m } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FeatureMarquee } from '../components/feature-marquee';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';

const featureCards = [
  {
    icon: Users,
    title: 'Real-Time Business Visibility',
    description: 'Know exactly how your vending business is performing at any moment. Track sales, top-performing machines, locations, inventory levels, and profitability from a single dashboard.',
  },
  {
    icon: Store,
    title: 'Simplified Inventory Management',
    description: 'Avoid stockouts and overstocking. VendSavvy helps you monitor inventory levels, track restocks, and keep every machine properly stocked so your routes run more efficiently.',
  },
  {
    icon: TrendingUp,
    title: 'Expense Tracking & Profit Clarity',
    description: 'Record product costs, repairs, fuel, commissions, and other expenses in one place. Understand your true profit margins and identify what’s actually driving revenue.',
  },
  {
    icon: BarChart3,
    title: 'Automated Commission & Settlement Tracking',
    description: 'Stop manually calculating payouts. VendSavvy automates commission tracking and settlement reporting, making it easy to manage location partners and maintain professional relationships.',
  },
  {
    icon: RefreshCcw,
    title: 'Built for Scale',
    description: 'VendSavvy is designed to support your business as it grows—from a few machines to a full multi-location operation—without adding complexity.',
  },
  {
    icon: RefreshCcw,
    title: 'Mobile-Friendly & On-the-Go Access',
    description: 'Run your vending business from anywhere. Update machines, review performance, and manage operations directly from your phone or tablet.',
  },
];

const socialProofAvatars = [
  '/avatars/close-up-kid-expression-portrait_23-2150193262.avif',
  '/avatars/handsome-sensitive-red-head-man-smiling_23-2149509820.avif',
  '/avatars/photo-1438761681033-6461ffad8d80.avif',
  '/avatars/6788bebd251ae.webp',
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate z-0 px-6 md:px-12 pt-6 pb-0 md:pt-16 md:pb-0 overflow-x-clip overflow-y-visible">
        {/* Hero gradient backdrop */}
        <div className="absolute inset-x-0 top-0 h-[820px] -z-20 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(241,247,255,0.95)_18%,rgba(228,238,252,0.94)_42%,rgba(227,245,239,0.90)_72%,rgba(252,252,252,1)_100%)]" />
        <div className="absolute left-0 top-0 h-full w-[52%] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_left_top,rgba(21,131,241,0.24)_0%,rgba(21,131,241,0.12)_24%,rgba(255,255,255,0)_68%)] animate-float will-change-transform" />
        <div className="absolute right-0 top-0 h-full w-[52%] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_right_top,rgba(129,232,196,0.20)_0%,rgba(129,232,196,0.12)_24%,rgba(255,255,255,0)_68%)] animate-float-delayed will-change-transform" />
        <div className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-[#1583F1]/12 blur-3xl -z-10 pointer-events-none animate-float-slow" />
        <div className="absolute right-[12%] top-[24%] h-40 w-40 rounded-full bg-[#81E8C4]/14 blur-3xl -z-10 pointer-events-none animate-float" />
        <div className="absolute left-1/2 bottom-[16%] h-24 w-24 -translate-x-1/2 rounded-full bg-[#1583F1]/10 blur-2xl -z-10 pointer-events-none animate-float-delayed" />
        <div className="absolute inset-x-0 bottom-0 h-[110px] -z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.7)_100%)]" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left */}
          <div className="pt-4 md:pt-16 pb-4 md:pb-24 text-center md:text-left">
            {/* Gradient pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 mx-auto md:mx-0"
              style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.15))', border: '1px solid rgba(21,131,241,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1583F1] animate-pulse" />
              <span className="gradient-text">30-Day Free Trial — Credit Card Required</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-5 md:mb-6 text-foreground">
              Manage, Track & Scale Your Vending <br className="hidden sm:block" />
              <span className="gradient-text"> Business with Confidence</span>
            </h1>

            <p className="text-base md:text-lg text-foreground/65 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              VendSavvy is an all-in-one vending management platform built for operators who are ready to move beyond spreadsheets, guesswork, and disconnected tools. 
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <div className="flex -space-x-2">
                {socialProofAvatars.map((avatarSrc, i) => (
                  <div key={avatarSrc} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden flex-shrink-0">
                    <Image
                      src={avatarSrc}
                      alt={`VendSavvy operator ${i + 1}`}
                      fill
                      loading="eager"
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/60">
                <span className="font-semibold text-foreground">2,400+</span> operators trust VendSavvy
              </p>
            </div>
          </div>

          {/* Mobile mockup */}
          <div className="flex md:hidden justify-center pb-2 -mt-4 sm:-mt-6 overflow-visible px-2">
            <div className="relative w-full max-w-[390px] h-[320px] sm:h-[360px] overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[280px] h-[280px] bg-gradient-to-br from-[#1583F1]/20 to-[#81E8C4]/20 blur-3xl rounded-full" />
              </div>
              <div className="absolute left-1 bottom-4 w-[108px] h-[216px] rotate-[-12deg]">
                <Image
                  src="/iPhone 18.png"
                  alt="Analytics Screen"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 108px, 108px"
                  className="object-contain drop-shadow-xl opacity-90"
                />
              </div>
              <div className="absolute left-1/2 bottom-[-2px] z-10 w-[188px] h-[304px] -translate-x-1/2">
                <Image
                  src="/mockup.png"
                  alt="VendSavvy App"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 188px, 188px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute right-1 bottom-4 w-[108px] h-[216px] rotate-[12deg]">
                <Image
                  src="/iPhone 17.png"
                  alt="Inventory Screen"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 108px, 108px"
                  className="object-contain drop-shadow-xl opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Desktop 3-phone + vending machine */}
          <div className="hidden md:flex relative items-end justify-center h-[560px] lg:h-[640px] xl:h-[680px] w-full overflow-visible px-2 lg:px-0 translate-y-8 lg:translate-y-10 z-0">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[480px] h-[480px] bg-gradient-to-br from-[#1583F1]/15 to-[#81E8C4]/15 blur-3xl rounded-full" />
            </div>
            <Image src="/vending machine.png" alt="Vending machine" width={900} height={720}
              quality={90}
              priority
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 640px, 560px"
              className="absolute top-0 left-1/2 -translate-x-1/2 z-0 scale-[1.25] opacity-55 select-none pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 z-[1] pointer-events-none" />
            <div className="absolute left-2 lg:left-0 bottom-[60px] z-[2] w-[187px] h-[374px] rotate-[-10deg]">
              <Image
                src="/iPhone 18.png"
                alt="Analytics Screen"
                fill
                priority
                quality={95}
                sizes="(min-width: 1024px) 187px, 150px"
                className="object-contain drop-shadow-xl opacity-90"
              />
            </div>
            <div className="absolute right-2 lg:right-0 bottom-[60px] z-[2] w-[187px] h-[374px] rotate-[10deg]">
              <Image
                src="/iPhone 17.png"
                alt="Inventory Screen"
                fill
                priority
                quality={95}
                sizes="(min-width: 1024px) 187px, 150px"
                className="object-contain drop-shadow-xl opacity-90"
              />
            </div>
            <div className="relative z-[3] w-[360px] h-[495px] lg:w-[420px] lg:h-[578px] xl:w-[480px] xl:h-[660px]">
              <Image
                src="/mockup.png"
                alt="Main App"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 480px, (min-width: 1024px) 420px, 360px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section
        id="features"
        className="relative overflow-hidden px-6 md:px-12 py-20 md:py-28"
        style={{
          background: 'linear-gradient(180deg, rgba(21,131,241,0.05) 0%, rgba(129,232,196,0.08) 100%)',
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#1583F1]/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#81E8C4]/12 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-16 items-start">
            <FadeIn direction="left" className="lg:sticky lg:top-28">
              <div className="max-w-xl">
                <m.div 
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.15))', border: '1px solid rgba(21,131,241,0.25)' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#1583F1] animate-pulse" />
                  <span className="text-foreground/70">Built for operators who want clarity, not clutter</span>
                </m.div>
                <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Why Vend Savvy</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                  Everything Your Vending Business Needs
                </h2>
                <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-lg mb-8">
                  VendSavvy was built specifically for vending operators who need full control over their daily operations without relying on spreadsheets or disconnected tools. Most vending businesses don’t fail from lack of effort—they struggle because their systems aren’t built to show what’s actually happening in real time. VendSavvy solves this by connecting every part of your operation into one system so nothing is missed and every decision is based on accurate data. 
                </p>
                {/* The VendSavvy Advantage */}
                <div className="mb-10">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/70 mb-5">
                    The VendSavvy Advantage
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Reduce manual paperwork and spreadsheets',
                      'Improve planning and efficiency',
                      'Track machine performance in real time',
                      'Prevent inventory shortages',
                      'Gain clear profit visibility',
                      'Simplify location and vendor management',
                      'Make faster, data-driven decisions',
                    ].map((advantage, idx) => (
                      <m.div
                        key={idx}
                        className="flex items-start gap-3 group cursor-default"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.20), rgba(129,232,196,0.25))' }}>
                          <Check className="w-3 h-3 text-[#1583F1]" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-foreground/75 font-medium leading-snug group-hover:text-foreground transition-colors">
                          {advantage}
                        </span>
                      </m.div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/features">
                    <Button variant="outline" className="border-[#1583F1]/30 hover:border-[#1583F1]/60">
                      View All Features
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {featureCards.map((feature, idx) => {
                const isEven = idx % 2 === 0;
                const bgGradient = isEven
                  ? 'linear-gradient(135deg, rgba(21,131,241,0.08) 0%, rgba(255,255,255,0.5) 100%)'
                  : 'linear-gradient(135deg, rgba(129,232,196,0.10) 0%, rgba(255,255,255,0.5) 100%)';
                const borderColor = isEven ? 'rgba(21,131,241,0.30)' : 'rgba(129,232,196,0.30)';

                return (
                  <StaggerItem key={feature.title}>
                    <m.div
                      className="group p-6 rounded-2xl cursor-default h-full relative overflow-hidden border-2 border-l-4 shadow-[0_14px_34px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_48px_rgba(21,131,241,0.10)]"
                      style={{
                        background: bgGradient,
                        borderColor: borderColor,
                        borderLeftColor: isEven ? '#1583F1' : '#81E8C4',
                      }}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{
                        background: isEven
                          ? 'linear-gradient(90deg, #1583F1, rgba(21,131,241,0.3))'
                          : 'linear-gradient(90deg, #81E8C4, rgba(129,232,196,0.3))'
                      }} />
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.18))' }}
                      >
                        <feature.icon className="w-5 h-5 text-[#1583F1]" />
                      </div>
                      <h3 className="text-base font-semibold mb-1 text-foreground">{feature.title}</h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
                    </m.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <FeatureMarquee />

      {/* ── What We Do ───────────────────────────────────────────────────── */}
      <section id="about" className="gradient-bg px-6 sm:px-8 md:px-12 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute -top-20 left-12 w-[320px] h-[320px] rounded-full bg-[#1583F1]/10 blur-[90px]" />
          <div className="absolute bottom-8 right-12 w-[280px] h-[280px] rounded-full bg-[#81E8C4]/16 blur-[85px]" />
        </div>

        <div className="absolute pointer-events-none right-0 sm:right-1 md:right-2 lg:-right-2 xl:-right-2 2xl:-right-8 -top-8 sm:-top-6 md:-top-4 lg:-top-8 xl:-top-10 2xl:-top-24 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px] xl:w-[340px] xl:h-[340px] 2xl:w-[460px] 2xl:h-[460px] z-10 opacity-35 sm:opacity-40 md:opacity-45 lg:opacity-55 xl:opacity-60 2xl:opacity-100">
          <Image
            src="/app%20icon.png"
            alt=""
            fill
            sizes="(min-width: 1536px) 460px, (min-width: 1280px) 340px, (min-width: 1024px) 300px, (min-width: 768px) 220px, (min-width: 640px) 180px, 150px"
            className="object-contain drop-shadow-[0_18px_40px_rgba(21,131,241,0.28)]"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn direction="up" className="text-center mb-12 md:mb-14">
            <p className="text-white text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Built around the daily reality of vending operations</h2>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto">
              Vend Savvy helps operators manage machines, inventory, and financial performance in one connected workflow.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <FadeIn direction="left" className="h-full">
            <m.div
              className="h-full bg-white/95 backdrop-blur-sm rounded-2xl border border-[#1583F1]/20 p-7 md:p-9 relative overflow-hidden shadow-lg"
              whileHover={{ y: -4, boxShadow: '0 18px 40px rgba(21,131,241,0.10)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
              <div className="absolute -right-14 -top-14 w-36 h-36 rounded-full bg-[#1583F1]/8 blur-2xl" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">Vend Savvy helps vending operators</h2>
              <p className="text-sm sm:text-base text-foreground/65 leading-relaxed mb-4">
                Vend Savvy helps vending operators manage day-to-day operations with better visibility and stronger financial control.
              </p>
              <div className="rounded-xl border border-[#1583F1]/25 bg-gradient-to-r from-[#1583F1]/8 to-[#81E8C4]/10 px-4 py-3 inline-block">
                <p className="text-xs sm:text-sm font-semibold text-[#1270D0]">Whether you operate 5 machines or 500</p>
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
              className="h-full bg-white/95 backdrop-blur-sm rounded-2xl border border-[#1583F1]/20 p-7 md:p-9 relative overflow-hidden shadow-lg"
              whileHover={{ y: -4, boxShadow: '0 18px 40px rgba(21,131,241,0.10)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
              <div className="absolute -left-14 -bottom-14 w-36 h-36 rounded-full bg-[#81E8C4]/12 blur-2xl" />

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Built for Vending Operators</h3>
                <p className="text-sm sm:text-base text-foreground/70 font-semibold mb-2">We focus exclusively on the vending industry.</p>
                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                  That means every feature is designed around how vending businesses actually work:
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Route-based operations</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Location profitability tracking</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Stock and inventory movement per machine</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Cash and digital sales tracking</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  <span className="w-2 h-2 rounded-full gradient-bg mt-2.5 flex-shrink-0" />
                  <span>Simple onboarding for new machines and locations</span>
                </li>
              </ul>

              <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed italic">
                No bloated accounting tools. No unnecessary complexity. Just vending intelligence.
              </p>
            </m.div>
          </FadeIn>
          </div>
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
