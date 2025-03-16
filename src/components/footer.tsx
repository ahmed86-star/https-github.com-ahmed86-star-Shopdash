import Link from "next/link";
import { Twitter, Linkedin, Github, BarChart3 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Shopdash</span>
            </div>
            <p className="text-gray-600 max-w-md mb-6">
              Powerful analytics and management tools for e-commerce businesses.
              Streamline operations and boost sales with real-time insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/shopdash"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/shopdash"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/shopdash"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#features"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Analytics Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#inventory"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#orders"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Order Processing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* My Mission Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">My Mission</h3>
              <div className="text-gray-600 text-sm">
                <p className="mb-2">My name is Abdirahman.</p>
                <p className="mb-3">
                  When I set out to create Shopdash, my goal was simple: to
                  build a tool that makes running an online store easier,
                  smarter, and more efficient.
                </p>
                <Link
                  href="/mission"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Read our full story
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Security Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gdpr"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Shopdash, Inc. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-blue-600 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-blue-600 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-blue-600 text-sm"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
