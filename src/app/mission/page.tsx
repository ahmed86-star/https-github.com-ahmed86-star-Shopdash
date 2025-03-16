import { Metadata } from "next";
import {
  BarChart3,
  Lightbulb,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Zap,
  Target,
  Clock,
  LineChart,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission | Shopdash",
  description:
    "The story and vision behind Shopdash - making e-commerce management simpler and more efficient.",
};

export default function MissionPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <p className="text-xl text-gray-600">
          The story behind Shopdash and why we exist
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {/* Founder's Story Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">
              From Frustration to Solution 💡
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              My name is Abdirahman, and when I set out to create Shopdash, my
              goal was simple: to build a tool that makes running an online
              store easier, smarter, and more efficient.
            </p>
            <p className="text-lg text-gray-700">
              I'd seen so many store owners juggling multiple
              systems—spreadsheets for inventory, separate software for orders,
              and clunky tools for analytics. It was overwhelming,
              time-consuming, and honestly, a bit chaotic. I knew there had to
              be a better way.
            </p>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Clock className="mr-3 h-8 w-8 text-red-500" /> The Challenge 🔄
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4 text-4xl">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Time-Consuming</h3>
              <p className="text-gray-600">
                Store owners spending hours switching between different tools
                and manually updating information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Lack of Visibility</h3>
              <p className="text-gray-600">
                Difficult to get a clear picture of business performance without
                digging through multiple reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4 text-4xl">❌</div>
              <h3 className="text-xl font-semibold mb-2">Error-Prone</h3>
              <p className="text-gray-600">
                Manual data entry and disconnected systems leading to mistakes
                and inconsistencies.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Lightbulb className="mr-3 h-8 w-8 text-yellow-500" /> The Solution
            💪
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            That's where Shopdash comes in. It's a modern admin panel designed
            specifically for online stores, bringing everything you need into
            one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <LineChart className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Powerful Analytics 📊
              </h3>
              <p className="text-gray-600">
                See exactly how your business is performing—sales trends,
                customer behavior, and more—all at a glance, without digging
                through complicated reports.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Inventory Management 📦
              </h3>
              <p className="text-gray-600">
                Keep your stock in check, helping you avoid overselling or
                running out of popular items, so you can focus on growing your
                business instead of stressing over stock levels.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <ShoppingCart className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Order Processing 🚚
              </h3>
              <p className="text-gray-600">
                Manage everything from new orders to shipping updates
                seamlessly, saving time and reducing errors.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Target className="mr-3 h-8 w-8 text-blue-600" /> Our Vision 🚀
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            I created Shopdash because I believe online store owners deserve a
            tool that's not just functional, but intuitive and forward-thinking.
            It's about giving you control, clarity, and the confidence to take
            your store to the next level—without the headache.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            That's the 'why' behind Shopdash: to simplify the hard stuff so you
            can focus on what matters most—building a thriving business.
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-lg font-medium"
            >
              <Zap className="mr-2 h-5 w-5" />
              Experience Shopdash
            </Link>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values ✨</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                <p className="text-gray-600">
                  We believe powerful tools don't have to be complicated.
                  Everything we build focuses on ease of use.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600">
                  We're obsessed with saving you time and eliminating
                  unnecessary steps in managing your store.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-4xl">🔍</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We provide clear insights into your business performance with
                  no hidden metrics or confusing jargon.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Growth-Focused</h3>
                <p className="text-gray-600">
                  Everything we build is designed to help your business scale
                  and succeed in the competitive e-commerce landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
