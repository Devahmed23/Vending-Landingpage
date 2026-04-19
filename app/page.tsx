'use client';

import { Button } from '@/components/ui/button';
import { Check, TrendingUp, AlertCircle, Zap, BarChart3, ArrowRight } from 'lucide-react';
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
    icon: TrendingUp,
    title: 'Track Every Dollar',
    description: 'Know exactly how much each machine makes daily. Get detailed insights into your revenue streams.',
  },
  {
    icon: AlertCircle,
    title: 'Never Run Out of Products',
    description: 'Get alerts when inventory is low and manage stock levels across all your machines in one place.',
  },
  {
    icon: Zap,
    title: 'Manage Multiple Machines',
    description: 'See all machines, locations, and performance metrics in one dashboard. Scale without the stress.',
  },
  {
    icon: BarChart3,
    title: 'Understand Your Profit',
    description: 'Built-in profit & loss reports to make smarter decisions about your vending business.',
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

const audienceCards = [
  { label: 'Solo Operators',       desc: 'Starting with 1–5 machines' },
  { label: 'Growing Businesses',   desc: 'Scaling to 6–20 locations' },
  { label: 'Enterprise Operators', desc: 'Managing 20+ machines' },
  { label: 'Multi-Industry',       desc: 'Offices, schools, hospitals & more' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-12 pt-10 pb-0 md:pt-16 md:pb-0 overflow-hidden">
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
          <div className="flex md:hidden justify-center pb-10 overflow-hidden">
            <div className="relative w-full max-w-[390px] h-[430px] overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] bg-gradient-to-br from-[#1583F1]/20 to-[#81E8C4]/20 blur-3xl rounded-full" />
              </div>
              <Image
                src="/iPhone 18.png"
                alt="Analytics Screen"
                width={180}
                height={360}
                priority
                className="absolute left-0 bottom-8 w-[118px] h-auto rotate-[-12deg] drop-shadow-xl opacity-90"
              />
              <Image
                src="/mockup.png"
                alt="VendSavvy App"
                width={260}
                height={420}
                priority
                className="absolute left-1/2 bottom-0 z-10 w-[212px] h-auto -translate-x-1/2 drop-shadow-2xl"
              />
              <Image
                src="/iPhone 17.png"
                alt="Inventory Screen"
                width={180}
                height={360}
                priority
                className="absolute right-0 bottom-8 w-[118px] h-auto rotate-[12deg] drop-shadow-xl opacity-90"
              />
            </div>
          </div>

          {/* Desktop 3-phone + vending machine */}
          <div className="hidden md:flex relative items-end justify-center h-[680px] w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[480px] h-[480px] bg-gradient-to-br from-[#1583F1]/15 to-[#81E8C4]/15 blur-3xl rounded-full" />
            </div>
            <Image src="/vending machine.png" alt="Vending machine" width={900} height={720}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-0 scale-[1.25] opacity-55 select-none pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 z-[1] pointer-events-none" />
            <Image src="/iPhone 18.png" alt="Analytics Screen" width={240} height={480}
              className="absolute left-0 bottom-[60px] z-[2] scale-[0.78] rotate-[-10deg] drop-shadow-xl opacity-90" />
            <Image src="/iPhone 17.png" alt="Inventory Screen" width={240} height={480}
              className="absolute right-0 bottom-[60px] z-[2] scale-[0.78] rotate-[10deg] drop-shadow-xl opacity-90" />
            <Image src="/mockup.png" alt="Main App" width={480} height={660} priority
              className="relative z-[3] drop-shadow-2xl" />
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
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Why VendSavvy</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Business Needs</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              One platform for everything — so you can focus on growing, not managing chaos.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {featureCards.map((feature) => (
              <StaggerItem key={feature.title}>
                <m.div
                  className="group p-8 border border-border rounded-2xl bg-white cursor-default h-full relative overflow-hidden"
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
            ))}
          </StaggerContainer>
          <FadeIn direction="up" delay={0.1} className="text-center mt-10">
            <Link href="/features">
              <Button variant="outline">View All Features</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── About / Who It's For ──────────────────────────────────────────── */}
      <section id="about" className="px-6 md:px-12 py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Operators Who Mean Business
            </h2>
            <p className="text-foreground/65 mb-4 leading-relaxed">
              VendSavvy was created because managing multiple vending machines shouldn&apos;t require a spreadsheet,
              a notebook, and three different apps. We built one platform that does it all.
            </p>
            <p className="text-foreground/65 mb-8 leading-relaxed">
              Whether you&apos;re running 2 machines or 75, VendSavvy gives you the clarity and control to operate
              like a pro and scale with confidence.
            </p>
            <Link href="/about">
              <Button variant="outline">Learn Our Story</Button>
            </Link>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {audienceCards.map((item) => (
              <StaggerItem key={item.label}>
                <m.div
                  className="bg-white p-5 rounded-xl border border-border h-full"
                  whileHover={{ scale: 1.03, borderColor: '#1583F1', boxShadow: '0 8px 24px rgba(21,131,241,0.10)' }}
                  transition={{ duration: 0.18 }}
                >
                  <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-foreground/55">{item.desc}</p>
                </m.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
          <StaggerContainer className="grid md:grid-cols-4 gap-5" staggerDelay={0.08}>
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
              <Button variant="ghost" className="gradient-text">
                Compare all plan features →
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <ScaleIn>
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
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
                  <Button size="lg"
                    className="bg-white text-[#1583F1] hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.20)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.25)] border-0">
                    Start Your Free Trial
                  </Button>
                </Link>
              </m.div>
              <Link href="/pricing">
                <Button size="lg"
                  className="bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/50 shadow-none">
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
