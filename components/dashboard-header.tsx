'use client';

import { Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface DashboardHeaderProps {
  userName?: string;
  greeting?: string;
}

export function DashboardHeader({
  userName = 'Carla Botosh',
  greeting = 'Good morning',
}: DashboardHeaderProps) {
  return (
    <header className="bg-secondary/20 border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-lg text-foreground/70">{greeting},</h2>
        <p className="text-lg font-semibold">{userName}</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-foreground/60">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-foreground/60">
          <User className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden text-foreground/60">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
