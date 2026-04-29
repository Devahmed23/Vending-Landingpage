'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/40 md:hidden transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />

      <nav
        ref={menuRef}
        className="sticky top-0 flex items-center justify-between px-6 md:px-12 py-4 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 z-[100]"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo.png" alt="VendSavvy" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-lg gradient-text">VendSavvy</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition-colors ${
                pathname === link.href
                  ? 'gradient-text font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-foreground/10 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`
            absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl
            origin-top flex flex-col md:hidden overflow-hidden
            transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[max-height,opacity,transform]
            ${mobileOpen ? 'max-h-[560px] opacity-100 translate-y-0 scale-y-100' : 'max-h-0 opacity-0 -translate-y-2 scale-y-95 pointer-events-none'}
          `}
          aria-hidden={!mobileOpen}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold py-3 px-3 rounded-md transition-colors ${
                  pathname === link.href
                    ? 'gradient-text font-semibold bg-[#1583F1]/5'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-3 pt-3 mt-2 border-t border-border">
              <Link href="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="bg-primary hover:bg-primary/90 w-full">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
