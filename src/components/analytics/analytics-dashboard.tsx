"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SalesChart } from "@/components/analytics/sales-chart";
import { RevenueChart } from "@/components/analytics/revenue-chart";
import { CustomerChart } from "@/components/analytics/customer-chart";
import { StatsCards } from "@/components/analytics/stats-cards";
import { RecentOrders } from "@/components/analytics/recent-orders";
import { TopProducts } from "@/components/analytics/top-products";
import { DateRangePicker } from "@/components/analytics/date-range-picker";

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<{
    from: Date;
    to: Date;
  }>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            View detailed insights about your store performance
          </p>
          <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
        </div>
      </div>

      <StatsCards dateRange={dateRange} />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Revenue</CardTitle>
                <CardDescription>Total revenue over time</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart dateRange={dateRange} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Customers</CardTitle>
                <CardDescription>New vs returning customers</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomerChart dateRange={dateRange} />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Recent Orders
                </CardTitle>
                <CardDescription>Latest transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentOrders />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Top Products
                </CardTitle>
                <CardDescription>Best selling items</CardDescription>
              </CardHeader>
              <CardContent>
                <TopProducts dateRange={dateRange} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Sales Trends
              </CardTitle>
              <CardDescription>Detailed sales analysis</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <SalesChart dateRange={dateRange} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Customer Acquisition
              </CardTitle>
              <CardDescription>How customers find your store</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <CustomerChart dateRange={dateRange} isDetailed={true} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
