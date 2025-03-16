"use client";

import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";

export function StatsCards({ dateRange }: { dateRange: DateRange }) {
  const [stats, setStats] = useState({
    revenue: { value: 0, change: 0 },
    orders: { value: 0, change: 0 },
    customers: { value: 0, change: 0 },
    conversion: { value: 0, change: 0 },
  });

  useEffect(() => {
    // In a real app, you would fetch data based on the date range
    // For demo purposes, we'll generate random data
    setStats({
      revenue: {
        value: Math.floor(Math.random() * 50000) + 20000,
        change: Math.floor(Math.random() * 20) - 5,
      },
      orders: {
        value: Math.floor(Math.random() * 500) + 100,
        change: Math.floor(Math.random() * 15) + 2,
      },
      customers: {
        value: Math.floor(Math.random() * 300) + 50,
        change: Math.floor(Math.random() * 10) + 5,
      },
      conversion: {
        value: Math.floor(Math.random() * 5) + 2,
        change: Math.floor(Math.random() * 2) - 0.5,
      },
    });
  }, [dateRange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Revenue"
        value={`$${stats.revenue.value.toLocaleString()}`}
        change={stats.revenue.change}
        icon={<DollarSign className="h-4 w-4" />}
      />

      <StatCard
        title="Total Orders"
        value={stats.orders.value.toLocaleString()}
        change={stats.orders.change}
        icon={<ShoppingCart className="h-4 w-4" />}
      />

      <StatCard
        title="New Customers"
        value={stats.customers.value.toLocaleString()}
        change={stats.customers.change}
        icon={<Users className="h-4 w-4" />}
      />

      <StatCard
        title="Conversion Rate"
        value={`${stats.conversion.value.toFixed(1)}%`}
        change={stats.conversion.change}
        icon={<TrendingUp className="h-4 w-4" />}
      />
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}) {
  const isPositive = change >= 0;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
          </div>
          <div className="p-2 bg-primary/10 rounded-full">{icon}</div>
        </div>

        <div className="flex items-center mt-4">
          <div
            className={`flex items-center text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}
          >
            {isPositive ? (
              <ArrowUpRight className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDownRight className="h-3 w-3 mr-1" />
            )}
            <span>{Math.abs(change).toFixed(1)}%</span>
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            from previous period
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
