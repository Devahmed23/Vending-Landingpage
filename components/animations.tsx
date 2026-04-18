'use client';

import { m, useInView, useReducedMotion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

// ─── FadeIn ──────────────────────────────────────────────────────────────────
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-64px' });
  const reduced = useReducedMotion();

  const offsets: Record<string, { x: number; y: number }> = {
    up:    { x: 0,  y: 32 },
    down:  { x: 0,  y: -32 },
    left:  { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none:  { x: 0,  y: 0 },
  };

  const { x, y } = reduced ? { x: 0, y: 0 } : offsets[direction];

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease }}
      className={className}
    >
      {children}
    </m.div>
  );
}

// ─── StaggerContainer ─────────────────────────────────────────────────────────
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.09,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-64px' });
  const reduced = useReducedMotion();

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

// ─── StaggerItem ──────────────────────────────────────────────────────────────
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const reduced = useReducedMotion();
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0 : 0.5, ease },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

// ─── ScaleIn ──────────────────────────────────────────────────────────────────
interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className = '' }: ScaleInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-64px' });
  const reduced = useReducedMotion();

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, scale: reduced ? 1 : 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay, ease }}
      className={className}
    >
      {children}
    </m.div>
  );
}
