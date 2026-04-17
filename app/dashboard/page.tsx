'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Calendar, ShoppingCart, Users } from 'lucide-react';

const pieData = [
  { name: 'Inventory Cost', value: 50 },
  { name: 'Maintenance', value: 30 },
  { name: 'Rental', value: 15 },
  { name: 'Other', value: 5 },
];

const pieColors = ['#1583F1', '#FF8C42', '#81E8C4', '#C565FF'];

const salesData = [
  { location: 'All Locations', product: 'Product 1', amount: 350, method: 'Card' },
  { location: 'Location 1', product: 'Product 2', amount: 250, method: 'Cash' },
  { location: 'Location 2', product: 'Product 3', amount: 180, method: 'Card' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Month Selector and Summary Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            {['April', 'May', 'June', 'July', 'August', 'September'].map((month) => (
              <Button
                key={month}
                variant={month === 'June' ? 'default' : 'outline'}
                size="sm"
                className={month === 'June' ? 'bg-primary hover:bg-primary/90' : ''}
              >
                {month}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="icon">
            <Calendar className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">$80.50</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-secondary">$200.00</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">Total Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">49</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Location</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Location 1', sales: 4000 },
                { name: 'Location 2', sales: 3000 },
                { name: 'Location 3', sales: 2000 },
                { name: 'Location 4', sales: 2780 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#1583F1" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Sales History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Sale History</CardTitle>
          <div className="flex gap-2">
            {['All Locations', 'Location 1', 'Location 2'].map((location) => (
              <Button
                key={location}
                size="sm"
                variant={location === 'All Locations' ? 'default' : 'outline'}
                className={location === 'All Locations' ? 'bg-primary hover:bg-primary/90' : ''}
              >
                {location}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {salesData.map((sale, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-foreground/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{sale.product}</p>
                    <p className="text-sm text-foreground/60">{sale.method}</p>
                  </div>
                </div>
                <p className="font-semibold text-primary">+${sale.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden flex justify-around items-center py-4 border-t border-border bg-card fixed bottom-0 left-0 right-0">
        <Button variant="ghost" size="icon">
          <Calendar className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Users className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
