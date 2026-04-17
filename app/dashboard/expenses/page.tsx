'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowUp, ArrowDown, Plus, BoxIcon, Settings2, Home, RefreshCw } from 'lucide-react';

const categories = [
  {
    name: 'Inventory Cost',
    icon: BoxIcon,
    amount: '$1,372.80',
    transactions: '13 transactions',
    percentage: 86.5,
    trend: 'up',
    color: 'bg-primary',
  },
  {
    name: 'Maintenance Cost',
    icon: Settings2,
    amount: '$572.00',
    transactions: '9 transactions',
    percentage: 61.2,
    trend: 'down',
    color: 'bg-accent',
  },
  {
    name: 'Total Rental Cost',
    icon: Home,
    amount: '$912.80',
    transactions: '6 transactions',
    percentage: 34.2,
    trend: 'up',
    color: 'bg-secondary',
  },
  {
    name: 'Total Refund',
    icon: RefreshCw,
    amount: '$912.80',
    transactions: '6 refunds',
    percentage: 34.2,
    trend: 'up',
    color: 'bg-orange-500',
  },
];

const recentExpenses = [
  { name: 'Expense Name', category: 'Category', amount: '-$500' },
  { name: 'Expense Name', category: 'Category', amount: '-$500' },
];

export default function ExpensesPage() {
  return (
    <div className="space-y-8">
      {/* Header with Time Period Selector */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Expense Management</h1>
        <Button size="icon" variant="outline">
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      {/* Time Period Buttons */}
      <div className="flex gap-2">
        <Button variant="default" className="bg-primary hover:bg-primary/90">
          Week
        </Button>
        <Button variant="outline">Month</Button>
        <Button variant="outline">Year</Button>
        <Button size="icon" variant="outline">
          📅
        </Button>
      </div>

      {/* Total Spending */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Total Spending</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-bold text-primary mb-8">$1,549.00</p>

          {/* Donut Chart */}
          <div className="w-full h-80 flex items-center justify-center relative">
            <svg viewBox="0 0 200 200" className="w-64 h-64">
              {/* Background circle */}
              <circle cx="100" cy="100" r="90" fill="none" stroke="#E5E7EB" strokeWidth="30" />

              {/* Data segments */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#1583F1"
                strokeWidth="30"
                strokeDasharray="282 1256"
                strokeDashoffset="0"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#FF8C42"
                strokeWidth="30"
                strokeDasharray="251 1256"
                strokeDashoffset="-282"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#81E8C4"
                strokeWidth="30"
                strokeDasharray="188 1256"
                strokeDashoffset="-533"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#C565FF"
                strokeWidth="30"
                strokeDasharray="76 1256"
                strokeDashoffset="-721"
                transform="rotate(-90 100 100)"
              />

              {/* White center for donut effect */}
              <circle cx="100" cy="100" r="50" fill="white" />
            </svg>

            {/* Percentages */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-right text-primary absolute top-12 right-16">40%</span>
              <span className="text-left text-orange-500 absolute left-16">20%</span>
              <span className="text-right text-accent absolute bottom-16 right-12">15%</span>
              <span className="text-left text-purple-500 absolute bottom-16 left-12">15%</span>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <span className="text-sm">Inventory Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-accent"></div>
              <span className="text-sm">Maintenance Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="text-sm">Utility Cost</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-4">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card key={idx}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${category.color} bg-opacity-20`}>
                        <Icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <p className="font-semibold">{category.name}</p>
                        <p className="text-sm text-foreground/60">{category.transactions}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{category.amount}</p>
                      <div className="flex items-center gap-1 text-sm">
                        {category.trend === 'up' ? (
                          <>
                            <ArrowUp className="w-3 h-3 text-red-500" />
                            <span className="text-red-500">8.65%</span>
                          </>
                        ) : (
                          <>
                            <ArrowDown className="w-3 h-3 text-green-500" />
                            <span className="text-green-500">6.12%</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <Progress value={category.percentage} className="h-2" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Expenses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Expenses</h3>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
          </Button>
        </div>
        <div className="space-y-2">
          {recentExpenses.map((expense, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-foreground/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BoxIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{expense.name}</p>
                  <p className="text-sm text-foreground/60">{expense.category}</p>
                </div>
              </div>
              <p className="font-semibold text-red-500">{expense.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden h-24" />
    </div>
  );
}
