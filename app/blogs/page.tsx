"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Download } from 'lucide-react';

const resources = [
  {
    title: 'Vending Operator Playbook',
    type: 'Ebook',
    price: '$19',
    image: '/resources/Resource 1.png',
    description: 'A step-by-step guide to building, organizing, and scaling a profitable vending business.',
    bullets: [
      'Business setup fundamentals',
      'Machine profitability breakdown',
      'Inventory & route management strategies',
      'Scaling from small to multi-location operations',
    ],
  },
  {
    title: 'Digital Business Planner',
    type: 'Planning Tool',
    price: '$9',
    image: '/resources/Resource 2.png',
    description: 'Plan routes, machine servicing, and weekly operations with ease.',
    bullets: [],
  },
  {
    title: 'Profit & Inventory Tracker',
    type: 'Tracker',
    price: '$12',
    image: '/resources/Resource 3.png',
    description: 'Track machine performance, inventory usage, and profitability in a simple system.',
    bullets: [],
  },
  {
    title: 'Digital Business Card Template',
    type: 'Template',
    price: '$5',
    image: '/resources/Resource 4.png',
    description: 'Professional vending business card templates for networking with locations and partners.',
    bullets: [],
  },
  {
    title: 'Operations & Expense Sheet',
    type: 'Sheet',
    price: '$10',
    image: '/resources/Resource 5.png',
    description: 'Track fuel, repairs, product costs, and machine expenses in one place.',
    bullets: [],
  },
];

const bundle = {
  title: 'Vending Starter Kit',
  price: '$29',
  type: 'Bundle',
  description: 'Includes the Ebook, Profit tracker, Inventory sheet, and Operations planner.',
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative overflow-hidden px-6 py-16 md:px-12 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,247,255,0.96)_32%,rgba(234,246,242,0.96)_100%)]" />
        <div className="absolute left-0 top-0 -z-10 h-80 w-80 rounded-full bg-[#1583F1]/10 blur-3xl" />
        <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-[#81E8C4]/14 blur-3xl" />

        <header className="mx-auto mb-14 max-w-5xl text-center">
          <p className="gradient-text mb-4 text-sm font-semibold uppercase tracking-[0.3em]">Resources & Tools for Vending Operators</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">Practical digital tools to help vending operators plan, track, and grow faster.</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
            This section is built as a value and monetization hub, not filler content. All resources are available as one-time purchases, with no subscriptions required.
          </p>
        </header>

        <section className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => {
              return (
                <Card
                  key={resource.title}
                  className="group overflow-hidden border-white/70 bg-white/85 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(21,131,241,0.12)]"
                >
                  <CardHeader className="space-y-4">
                    {resource.image && (
                      <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] bg-[#F7FBFF]">
                        <span className="absolute left-3 top-3 z-10 inline-flex w-fit rounded-full border border-white/50 bg-[linear-gradient(135deg,rgba(18,112,208,0.95),rgba(21,131,241,0.92),rgba(75,191,176,0.9))] px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
                          {resource.type}
                        </span>
                        <Image src={resource.image} alt={`${resource.title} image`} fill className="object-cover object-center" sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
                      </div>
                    )}

                    {!resource.image && (
                      <span className="inline-flex w-fit rounded-full border border-[#1583F1]/20 bg-[linear-gradient(135deg,rgba(18,112,208,0.08),rgba(21,131,241,0.08),rgba(75,191,176,0.08))] px-3 py-1 text-xs font-semibold text-[#1270D0]">
                        {resource.type}
                      </span>
                    )}

                    <div>
                      <CardTitle className="mb-2 text-xl">{resource.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-foreground/65">
                        {resource.description}
                      </CardDescription>
                    </div>

                    <div className="flex items-baseline gap-2 rounded-2xl border border-[#E6F3FF] bg-[#F7FBFF] px-4 py-3">
                      <span className="text-2xl font-bold text-foreground">{resource.price}</span>
                      <span className="text-sm text-foreground/65">one-time purchase</span>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {resource.bullets.length > 0 ? (
                      <ul className="space-y-3 text-sm text-foreground/75">
                        {resource.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(21,131,241,0.15),rgba(129,232,196,0.2))] text-[10px] font-bold text-[#1583F1]">
                              ✓
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-foreground/75">{resource.description}</p>
                    )}
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Link href="/contact" className="ml-auto">
                      <Button variant="outline" className="group border-[#1583F1]/25 hover:border-[#1583F1]/50 hover:bg-[#1583F1]/5">
                        Get this resource
                        <Download className="ml-1 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-[#DCEEFF] bg-gradient-to-r from-[#1270D0] via-[#1583F1] to-[#4BBFB0] p-6 text-white shadow-[0_24px_70px_rgba(21,131,241,0.20)] md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">Optional Bundle</p>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">{bundle.title}</h2>
                <p className="mb-4 leading-relaxed text-white/85">{bundle.description}</p>
                <ul className="grid gap-2 text-sm text-white/90 sm:grid-cols-2">
                  <li>✔ Ebook</li>
                  <li>✔ Profit tracker</li>
                  <li>✔ Inventory sheet</li>
                  <li>✔ Operations planner</li>
                </ul>
              </div>

              <div className="flex min-w-[240px] flex-col items-start gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <div>
                  <p className="text-sm font-semibold text-white/80">{bundle.type}</p>
                  <p className="text-2xl font-bold">{bundle.price}</p>
                </div>
                <Link href="/contact">
                  <Button size="lg" variant="cta">Get the Starter Kit</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}