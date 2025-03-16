import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  BarChart3,
  Package,
  ShoppingCart,
  Users2,
  Settings,
  Zap,
  Shield,
  CheckCircle2,
  Laptop,
  Moon,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your e-commerce business efficiently
              in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Analytics Dashboard",
                description:
                  "Interactive charts and KPIs showing sales trends, customer acquisition, and revenue metrics",
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Inventory Management",
                description:
                  "Grid view of products with search, filter, and quick-edit capabilities",
              },
              {
                icon: <ShoppingCart className="w-6 h-6" />,
                title: "Order Processing",
                description:
                  "Streamlined workflow for viewing, processing, and tracking customer orders",
              },
              {
                icon: <Laptop className="w-6 h-6" />,
                title: "Responsive Design",
                description:
                  "Clean, minimalist UI with dark/light mode toggle and mobile-friendly layouts",
              },
              {
                icon: <Users2 className="w-6 h-6" />,
                title: "Role-based Access",
                description:
                  "Customizable permissions for different team members",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise Security",
                description:
                  "Bank-grade encryption and secure authentication for your business data",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Panel Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Admin Dashboard
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a complete overview of your business with our intuitive admin
              panel.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* This would be an image of the admin dashboard */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl p-4">
              <div className="grid grid-cols-12 gap-4 h-full">
                {/* Sidebar */}
                <div className="col-span-2 bg-gray-900 rounded-lg p-3">
                  <div className="flex flex-col space-y-6">
                    <div className="h-8 w-8 rounded-full bg-blue-500 mx-auto"></div>
                    <div className="h-6 w-full rounded-md bg-gray-700"></div>
                    <div className="h-6 w-full rounded-md bg-blue-600"></div>
                    <div className="h-6 w-full rounded-md bg-gray-700"></div>
                    <div className="h-6 w-full rounded-md bg-gray-700"></div>
                    <div className="h-6 w-full rounded-md bg-gray-700"></div>
                  </div>
                </div>

                {/* Main content */}
                <div className="col-span-10 bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
                    <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  </div>

                  {/* Charts row */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="h-4 w-20 bg-gray-300 rounded-md mb-2"></div>
                      <div className="h-24 bg-blue-100 rounded-md flex items-end">
                        <div className="h-12 w-1/6 bg-blue-500 rounded-t-md mx-0.5"></div>
                        <div className="h-16 w-1/6 bg-blue-500 rounded-t-md mx-0.5"></div>
                        <div className="h-10 w-1/6 bg-blue-500 rounded-t-md mx-0.5"></div>
                        <div className="h-20 w-1/6 bg-blue-500 rounded-t-md mx-0.5"></div>
                        <div className="h-14 w-1/6 bg-blue-500 rounded-t-md mx-0.5"></div>
                        <div className="h-18 w-1/6 bg-blue-500 rounded-t-md mx-0.5"></div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="h-4 w-20 bg-gray-300 rounded-md mb-2"></div>
                      <div className="h-24 w-full bg-blue-100 rounded-md relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="h-4 w-20 bg-gray-300 rounded-md mb-2"></div>
                      <div className="h-24 bg-blue-100 rounded-md">
                        <div className="h-full w-full flex items-center">
                          <div className="h-0.5 w-full bg-blue-500 relative">
                            <div className="absolute top-0 left-1/4 w-1.5 h-1.5 bg-blue-600 rounded-full transform -translate-y-1/2"></div>
                            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full transform -translate-y-1/2"></div>
                            <div className="absolute top-0 left-3/4 w-1.5 h-1.5 bg-blue-600 rounded-full transform -translate-y-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="bg-white rounded-lg shadow-sm p-3">
                    <div className="h-4 w-32 bg-gray-300 rounded-md mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-8 w-full bg-gray-100 rounded-md"></div>
                      <div className="h-8 w-full bg-gray-100 rounded-md"></div>
                      <div className="h-8 w-full bg-gray-100 rounded-md"></div>
                      <div className="h-8 w-full bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark/Light mode toggle overlay */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
              <Moon className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Active Stores</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Orders Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guaranteed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your e-commerce business. No hidden
              fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Streamline Your E-commerce Operations?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of online stores already using Shopdash to manage
            their business efficiently.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Shopdash Now
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
