'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, RefreshCw, AlertCircle } from 'lucide-react';

const refunds = [
  {
    id: 'REF-001',
    date: 'Jun 15, 2024',
    amount: '$45.00',
    reason: 'Product defect',
    customer: 'John Doe',
    status: 'Completed',
  },
  {
    id: 'REF-002',
    date: 'Jun 14, 2024',
    amount: '$25.50',
    reason: 'Wrong product',
    customer: 'Jane Smith',
    status: 'Pending',
  },
  {
    id: 'REF-003',
    date: 'Jun 13, 2024',
    amount: '$15.00',
    reason: 'Change of mind',
    customer: 'Mike Johnson',
    status: 'Completed',
  },
  {
    id: 'REF-004',
    date: 'Jun 12, 2024',
    amount: '$60.00',
    reason: 'Machine error',
    customer: 'Sarah Wilson',
    status: 'In Progress',
  },
];

const refundStats = [
  { label: 'Total Refunds', value: '$145.50', color: 'text-primary' },
  { label: 'This Month', value: '$145.50', color: 'text-secondary' },
  { label: 'Pending', value: '$25.50', color: 'text-orange-500' },
  { label: 'Completed', value: '$120.00', color: 'text-green-500' },
];

export default function RefundsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Refunds</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Refund
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {refundStats.map((stat, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-foreground/40" />
          <Input
            placeholder="Search refunds..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      {/* Refunds Table */}
      <Card>
        <CardHeader>
          <CardTitle>Refund Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {refunds.map((refund, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{refund.id}</p>
                      <p className="text-sm text-foreground/60">{refund.customer}</p>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-sm font-medium">{refund.reason}</p>
                      <p className="text-xs text-foreground/60">{refund.date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <p className="font-semibold text-orange-500">{refund.amount}</p>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    refund.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : refund.status === 'Pending'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {refund.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold mb-1">Processing Refunds</h3>
            <p className="text-sm text-foreground/70">
              Refunds typically appear in customer accounts within 5-7 business days. For urgent refunds, contact support.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden h-24" />
    </div>
  );
}
