"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const posts = [
  {
    slug: 'how-to-scale-your-route-business',
    title: 'How to Scale Your Vending Route Business',
    excerpt:
      'Actionable steps to expand routes, hire technicians, and keep inventory profitable as you grow.',
    date: 'Mar 10, 2025',
    image: '/blog1.jpeg',
  },
  {
    slug: 'reduce-stockouts-and-boost-sales',
    title: 'Reduce Stockouts and Boost Sales',
    excerpt:
      'Inventory strategies that lower downtime and increase per-machine revenue without extra complexity.',
    date: 'Feb 2, 2025',
    image: '/blog2.jpeg',
  },
  {
    slug: 'pricing-strategies-for-vending-operators',
    title: 'Pricing Strategies for Vending Operators',
    excerpt:
      'Simple pricing experiments that help you find the sweet spot between volume and margin.',
    date: 'Jan 15, 2025',
    image: '/blog3.jpeg',
  },
  {
    slug: 'why-customer-experience-is-key-in-vending',
    title: 'Why Customer Experience is Key in Vending',
    excerpt:
      'How providing an exceptional customer experience can lead to increased loyalty and revenue.',
    date: 'Dec 20, 2024',
    image: '/blog4.jpeg',
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <header className="text-center mb-12">
          <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">From the VendSavvy Team</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Latest Articles & Insights</h1>
          <p className="text-foreground/65 max-w-2xl mx-auto">Tips, case studies, and best practices to run a smarter vending operation.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-44 rounded-lg overflow-hidden mb-2 bg-muted">
                    <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="text-sm text-foreground/65">{post.date}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-foreground/75">{post.excerpt}</p>
                </CardContent>

                <CardFooter>
                  <Link href={`/blogs/${post.slug}`} className="ml-auto">
                    <Button variant="outline" className="group border-[#1583F1]/30 hover:border-[#1583F1]/60 hover:bg-[#1583F1]/5">
                      Read article
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
