'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

type Review = {
  id: string
  name: string
  title?: string
  text: string
  rating: number
  avatar?: string
}

const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Jasmine Cole',
    title: 'Route Manager',
    text: 'VendSavvy LLC cut my route time in half — inventory tracking is effortless and the reports actually help me make money.',
    rating: 5,
    avatar: '/avatars/photo-1438761681033-6461ffad8d80.avif',
  },
  {
    id: 'r2',
    name: 'Marco Diaz',
    title: 'Owner, Campus Vending',
    text: 'Incredible clarity on profits per machine. The dashboard is clean and communicates what matters.',
    rating: 5,
    avatar: '/avatars/close-up-portrait-curly-handsome-european-male_176532-8133.avif',
  },
  {
    id: 'r3',
    name: 'Priya Singh',
    title: 'Operations Lead',
    text: 'Support is fast and the analytics helped us reduce losses from spoilage by 18% in two months.',
    rating: 4,
    avatar: '/avatars/happy-woman-with-down-syndrome_23-2152023605.jpg',
  },
]

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < value ? 'text-[#FFB020]' : 'text-muted-foreground/40'}`}
        />
      ))}
    </div>
  )
}

function ReviewCard({ item }: { item: Review }) {
  return (
    <article className="relative rounded-2xl border border-white/50 bg-white/85 backdrop-blur-md p-6 shadow-[0_14px_40px_rgba(18,112,208,0.10)] hover:shadow-[0_18px_48px_rgba(18,112,208,0.16)] transition-shadow">
      <div className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#1583F1]/10 to-[#81E8C4]/10 blur-md -z-10" />
      <p className="text-foreground/75 text-sm leading-relaxed mb-4">“{item.text}”</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            {item.avatar ? (
              <AvatarImage src={item.avatar} alt={item.name} />
            ) : (
              <AvatarFallback>{item.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <div className="text-sm font-semibold">{item.name}</div>
            {item.title && <div className="text-xs text-foreground/60">{item.title}</div>}
          </div>
        </div>
        <Stars value={item.rating} />
      </div>
    </article>
  )
}

export default function Reviews() {
  return (
    <section
      className="relative px-6 md:px-12 py-16 md:py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.10) 48%, rgba(255,255,255,0.96) 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-[-6rem] h-72 w-72 rounded-full bg-[#1583F1]/12 blur-3xl" />
        <div className="absolute top-10 right-[-5rem] h-80 w-80 rounded-full bg-[#81E8C4]/14 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-1/3 h-64 w-64 rounded-full bg-[#1270D0]/8 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">Trusted by operators</p>
          <h2 className="text-3xl md:text-4xl font-bold">What our customers say</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mt-3">Real feedback from route managers and vending operators using VendSavvy LLC.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.id} item={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
