'use client';

import { Button } from '@/components/ui/button';
import { Check, TrendingUp, AlertCircle, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
     <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-border">

  {/* LEFT - LOGO */}
  <div className="flex items-center gap-2">
    <Image src="/logo.png" alt="VendSavvy" width={32} height={32} className="rounded-full" />
    <span className="font-bold text-lg">VendSavvy</span>
  </div>

  {/* CENTER - NAV LINKS */}
  <div className="hidden md:flex items-center gap-8">
    <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
      Features
    </a>
    <a href="#pricing" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
      Pricing
    </a>
    <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
      About
    </a>
    <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
      Contact
    </a>
  </div>

 {/* RIGHT - DOWNLOAD BUTTONS */}
<div className="flex items-center gap-3">

  {/* Google Play */}
  <a href="#" target="_blank">
    <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary transition-all hover:scale-105">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
        <path d="M3 2l13 10-13 10V2zm15.5 9.5l2.5-1.5-2.5-1.5L16 10l2.5 1.5zM16 14l2.5 1.5-2.5 1.5L3 22l13-8z"/>
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] text-foreground/60">Get it on</p>
        <p className="text-sm font-semibold">Google Play</p>
      </div>
    </div>
  </a>

  {/* Apple App Store */}
  <a href="#" target="_blank">
    <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary transition-all hover:scale-105">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
        <path d="M16.365 1.43c0 1.14-.465 2.225-1.25 3.01-.83.83-2.14 1.46-3.31 1.38-.15-1.12.48-2.25 1.25-3.02.83-.83 2.28-1.42 3.31-1.37zM21.36 17.16c-.6 1.4-.88 2.02-1.66 3.27-1.08 1.7-2.6 3.82-4.5 3.84-1.68.02-2.12-1.1-4.4-1.1-2.28 0-2.76 1.08-4.44 1.12-1.9.04-3.32-1.95-4.4-3.64C.56 17.9-.8 12.88 1.6 9.2c1.2-1.8 3.1-2.94 5.16-2.96 1.6-.02 3.12 1.1 4.4 1.1 1.24 0 3.2-1.36 5.4-1.16.92.04 3.52.38 5.2 2.82-4.56 2.5-3.82 8.98-.4 10.16z"/>
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] text-foreground/60">Download on the</p>
        <p className="text-sm font-semibold">App Store</p>
      </div>
    </div>
  </a>

</div>

</nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Manage, Track, and Grow Your Vending Machine Business 
              — All in One Platform
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Track sales, manage inventory, monitor profits, and grow your vending machine empire — all in one simple platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Free 28-Day Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          
{/* RIGHT MOCKUP - MULTI DEVICE */}
<div className="relative flex items-center justify-center h-[750px] w-full overflow-visible">

  {/* Gradient Glow */}
  <div className="absolute w-[550px] h-[550px] bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />

  {/* VENDING MACHINE (CENTER BACK) */}
  <Image
    src="/vending machine.png"
    alt="Vending machine"
    width={1000}
    height={800}
    className="absolute top-25 z-0 scale-160 blur-[1px]"
  />
  {/* LEFT MOCKUP */}
  <Image
    src="/iphone 18.png"
    alt="Analytics Screen"
    width={260}
    height={520}
    className="absolute left-[-30px] top-[150px] z-0 opacity-100 scale-80 rotate-[-12deg] blur-[0px]"
  />

  {/* RIGHT MOCKUP */}
  <Image
    src="/iphone 17.png"
    alt="Inventory Screen"
    width={260}
    height={520}
    className="absolute right-[-30px] top-[150px] z-0 opacity-100 scale-80 rotate-[12deg] blur-[0px]"
  />

  {/* MAIN PHONE (FOCUS) */}
  <Image
    src="/mockup.png"
    alt="Main App"
    width={500}
    height={680}
    priority
    className="relative z-10  top-[150px] drop-shadow-2xl"
  />

</div>
        </div>
      </section>
      {/* Metrics Strip */}
      <section className="bg-primary/5 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-primary mb-2">10K+</p>
            <p className="text-foreground/60">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">$50M+</p>
            <p className="text-foreground/60">Tracked Sales</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-foreground/60">Uptime</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">24/7</p>
            <p className="text-foreground/60">Support</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose VendSavvy?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
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
                title: 'Manage Multiple Machines Easily',
                description: 'See all machines, locations, and performance metrics in one dashboard. Scale without the stress.',
              },
              {
                icon: BarChart3,
                title: 'Understand Your Profit',
                description: 'Built-in profit & loss reports to make smarter decisions about your vending business.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-foreground/5 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple Pricing That Scales</h2>
          <p className="text-center text-foreground/70 mb-16">Choose the plan that fits your business</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: 'Free Trial',
                price: '$0',
                period: '28 days',
                machines: 'Up to 5 Machines',
                features: ['Full Access', 'No Risk', 'Basic Reports'],
                highlight: false,
              },
              {
                name: 'Starter',
                price: '$49.99',
                period: '/month',
                machines: 'Up to 5 Machines',
                features: ['All Free features', 'Priority Support', 'Sales Tracking'],
                highlight: false,
              },
              {
                name: 'Growth',
                price: '$89.99',
                period: '/month',
                machines: '6–20 Machines',
                features: ['All Starter features', 'Proactive Alerts', 'Advanced Analytics'],
                highlight: true,
              },
              {
                name: 'Pro',
                price: '$149.99',
                period: '/month',
                machines: '21–75 Machines',
                features: ['All Growth features', 'API Access', 'Custom Integrations'],
                highlight: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border transition-all ${
                  plan.highlight
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-foreground/60 text-sm ml-2">{plan.period}</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">{plan.machines}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlight ? 'default' : 'outline'}
                  className={plan.highlight ? 'bg-primary hover:bg-primary/90 w-full' : 'w-full'}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Scale Your Business?</h2>
          <p className="text-lg mb-8 text-white/90">Join thousands of vending operators who use VendSavvy to manage and grow their businesses.</p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-foreground/60">
          <p>© 2024 VendSavvy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}