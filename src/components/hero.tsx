import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  BarChart3,
  Package,
  ShoppingCart,
  Users2,
  Settings,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Shopdash
              </span>{" "}
              - Modern Admin Panel for Online Stores
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A sleek, responsive admin dashboard for e-commerce businesses to
              manage their online operations efficiently with real-time
              insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Try Admin Dashboard
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-5 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">Analytics Dashboard</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Package className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">
                  Inventory Management
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <ShoppingCart className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">Order Processing</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Users2 className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">User Management</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Settings className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
