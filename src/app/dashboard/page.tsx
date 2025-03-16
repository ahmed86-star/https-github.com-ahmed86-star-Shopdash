import DashboardNavbar from "@/components/dashboard-navbar";
import { createClient } from "../../../supabase/server";
import {
  InfoIcon,
  UserCircle,
  BarChart3,
  Package,
  ShoppingCart,
  Users2,
  ShoppingBag,
} from "lucide-react";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { StatsCards } from "@/components/analytics/stats-cards";
import { RealTimeVisitors } from "@/components/analytics/real-time-visitors";
import { LiveSalesFeed } from "@/components/analytics/live-sales-feed";
import { ConnectShopify } from "@/components/shopify/connect-shopify";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const dateRange = {
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  };

  return (
    <SubscriptionCheck>
      <DashboardNavbar />
      <main className="w-full bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Dashboard Overview</h1>
              <Link
                href="/dashboard/analytics"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                <span>View Analytics</span>
              </Link>
            </div>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your store performance.
            </p>
          </header>

          {/* Stats Cards */}
          <StatsCards dateRange={dateRange} />

          {/* Real-time Analytics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RealTimeVisitors />
            <LiveSalesFeed />
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Profile Section */}
            <Card className="md:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <UserCircle size={48} className="text-primary" />
                  <div>
                    <h2 className="font-semibold text-xl">User Profile</h2>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 overflow-hidden">
                  <pre className="text-xs font-mono max-h-48 overflow-auto">
                    {JSON.stringify(user, null, 2)}
                  </pre>
                </div>
                <div className="mt-4">
                  <ConnectShopify />
                </div>
              </CardContent>
            </Card>

            {/* Quick Access Section */}
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-4">Quick Access</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link
                    href="/dashboard/analytics"
                    className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors"
                  >
                    <BarChart3
                      size={24}
                      className="text-blue-600 dark:text-blue-400 mb-2"
                    />
                    <span className="text-sm font-medium">Analytics</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-950/50 transition-colors"
                  >
                    <Package
                      size={24}
                      className="text-green-600 dark:text-green-400 mb-2"
                    />
                    <span className="text-sm font-medium">Products</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-950/50 transition-colors"
                  >
                    <ShoppingCart
                      size={24}
                      className="text-yellow-600 dark:text-yellow-400 mb-2"
                    />
                    <span className="text-sm font-medium">Orders</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-colors"
                  >
                    <Users2
                      size={24}
                      className="text-purple-600 dark:text-purple-400 mb-2"
                    />
                    <span className="text-sm font-medium">Customers</span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex flex-col items-center p-4 bg-red-50 dark:bg-red-950/30 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/50 transition-colors"
                  >
                    <InfoIcon
                      size={24}
                      className="text-red-600 dark:text-red-400 mb-2"
                    />
                    <span className="text-sm font-medium">Subscription</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <ShoppingBag
                      size={24}
                      className="text-gray-600 dark:text-gray-400 mb-2"
                    />
                    <span className="text-sm font-medium">Shopify</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </SubscriptionCheck>
  );
}
