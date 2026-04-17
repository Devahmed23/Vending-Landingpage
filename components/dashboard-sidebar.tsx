'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, TrendingUp, CreditCard, Settings, LogOut, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home', end: true },
  { href: '/dashboard/sales', icon: TrendingUp, label: 'Sales' },
  { href: '/dashboard/expenses', icon: CreditCard, label: 'Expenses' },
  { href: '/dashboard/refunds', icon: CreditCard, label: 'Refunds' },
  { href: '/dashboard/profile', icon: Settings, label: 'Profile' },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-card border-r border-border h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Image src="/logo.png" alt="VendSavvy" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-lg">VendSavvy</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.end ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-2">
        <Button variant="ghost" className="w-full justify-start text-foreground/70">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
        <Button variant="ghost" className="w-full justify-start text-foreground/70">
          <MoreHorizontal className="w-5 h-5 mr-3" />
          More
        </Button>
      </div>
    </aside>
  );
}
