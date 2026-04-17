'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, Camera, Mail, Lock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: 'Carla Botosh',
    email: 'carlabts@email.com',
    password: '••••••••',
    phone: '(+1) 234 567 890',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
  };

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Personal Information</h1>
      </div>

      {/* Profile Picture Section */}
      <Card>
        <CardContent className="p-8 flex flex-col items-center">
          <div className="relative mb-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oUPBsLSMGlfkY2aJH4Bx69xeF00vqe.png" alt="Carla Botosh" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 rounded-full bg-primary hover:bg-primary/90"
            >
              <Camera className="w-5 h-5 text-white" />
            </Button>
          </div>
          <h2 className="text-lg font-semibold">Carla Botosh</h2>
          <Button variant="link" className="text-primary mt-2">
            Change Picture
          </Button>
        </CardContent>
      </Card>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="space-y-4">
        {/* Full Name */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Full Name</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Email */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Email</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Password */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Password</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="pl-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2"
              >
                👁️
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Phone Number */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Phone Number</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button
          type="submit"
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
        >
          Save Changes
        </Button>
      </form>

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden h-24" />
    </div>
  );
}
