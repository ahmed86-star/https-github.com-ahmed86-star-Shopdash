"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  UserCircle,
  Home,
  BarChart3,
  Package,
  ShoppingCart,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export default function DashboardNavbar() {
  const supabase = createClient();
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            prefetch
            className="text-xl font-bold flex items-center gap-2"
          >
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <span className="text-gray-900 dark:text-white">Shopdash</span>
          </Link>

          <div className="hidden md:flex items-center ml-8 space-x-1">
            <Link
              href="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/dashboard") ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            >
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Overview</span>
              </div>
            </Link>

            <Link
              href="/dashboard/analytics"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/dashboard/analytics") ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
              </div>
            </Link>

            <Link
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span>Products</span>
              </div>
            </Link>

            <Link
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Orders</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Connect Shopify</span>
          </Link>

          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>

          <ThemeToggle className="flex items-center justify-center" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.push("/");
                }}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
