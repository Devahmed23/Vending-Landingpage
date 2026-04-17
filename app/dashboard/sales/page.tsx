'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const chartData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 2000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
];

const salesByLocation = [
  { location: 'Location 1', revenue: '$4,320.50', machines: 8, trend: '+12%' },
  { location: 'Location 2', revenue: '$3,450.75', machines: 6, trend: '+8%' },
  { location: 'Location 3', revenue: '$2,890.00', machines: 5, trend: '-3%' },
  { location: 'Location 4', revenue: '$1,560.25', machines: 3, trend: '+15%' },
];

export default function SalesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sales</h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-foreground/70">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">$12,221.50</p>
            <p className="text-sm text-green-500 mt-2 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> +5.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-foreground/70">Total Machines</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-secondary">22</p>
            <p className="text-sm text-foreground/60 mt-2">Active machines</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-foreground/70">Avg. Per Machine</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-accent">$555.52</p>
            <p className="text-sm text-foreground/60 mt-2">Monthly average</p>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#1583F1" name="Monthly Sales" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Sales by Location */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Sales by Location</h2>
        <div className="grid gap-4">
          {salesByLocation.map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.location}</h3>
                    <p className="text-sm text-foreground/60">{item.machines} machines</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{item.revenue}</p>
                    <p className={`text-sm ${item.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {item.trend}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden h-24" />
    </div>
  );
}
