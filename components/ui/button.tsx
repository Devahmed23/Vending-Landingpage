import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // ── Base ──────────────────────────────────────────────────────────────────
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-semibold tracking-[-0.01em] text-sm',
    'transition-all duration-200 ease-out',
    'cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1583F1]/50 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-40',
    'active:scale-[0.97]',
    '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
  ].join(' '),
  {
    variants: {
      variant: {
        // Primary — brand gradient, glow shadow on hover
        default: [
          'gradient-bg text-white',
          'shadow-[0_2px_12px_rgba(21,131,241,0.35)]',
          'hover:opacity-90',
          'hover:shadow-[0_4px_24px_rgba(21,131,241,0.50)]',
        ].join(' '),

        // Outline — brand blue border, fills solid on hover
        outline: [
          'border-2 border-[#1583F1] text-[#1583F1] bg-transparent',
          'hover:bg-[#1583F1] hover:text-white',
          'hover:shadow-[0_4px_16px_rgba(21,131,241,0.30)]',
        ].join(' '),

        // Secondary — light brand tint, used for less prominent actions
        secondary: [
          'bg-[#EBF5FF] text-[#1270D0] border border-[#1583F1]/20',
          'hover:bg-[#D6EBFF] hover:border-[#1583F1]/40',
        ].join(' '),

        // Ghost — minimal, used in navbars
        ghost: [
          'text-foreground/65 bg-transparent border border-transparent',
          'hover:bg-[#1583F1]/8 hover:text-[#1583F1] hover:border-[#1583F1]/15',
        ].join(' '),

        // Destructive
        destructive: [
          'bg-destructive text-white shadow-sm',
          'hover:bg-destructive/90 hover:shadow-md',
        ].join(' '),

        // Link — text only
        link: 'text-[#1583F1] underline-offset-4 hover:underline p-0 h-auto shadow-none',
      },

      size: {
        sm:      'h-9  px-5   text-sm   rounded-full',
        default: 'h-10 px-6   text-sm   rounded-full',
        lg:      'h-12 px-8   text-[15px] rounded-full',
        xl:      'h-14 px-10  text-base  rounded-full',
        icon:    'h-10 w-10  rounded-full',
        'icon-sm': 'h-8 w-8  rounded-full',
        'icon-lg': 'h-12 w-12 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
