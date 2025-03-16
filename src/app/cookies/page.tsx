import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Shopdash",
  description:
    "Information about how Shopdash uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and provide information to the owners
            of the site. Cookies allow us to recognize your device and remember
            if you've been to our website before.
          </p>
          <p className="text-gray-700">Last updated: June 1, 2023</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">
            Shopdash uses cookies for a variety of purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary
              for the website to function properly. They enable core
              functionality such as security, network management, and account
              access. You may disable these by changing your browser settings,
              but this may affect how the website functions.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These cookies help us
              understand how visitors interact with our website by collecting
              and reporting information anonymously. They help us improve the
              functionality of our website.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies enable the
              website to provide enhanced functionality and personalization.
              They may be set by us or by third-party providers whose services
              we have added to our pages.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> These cookies may
              be set through our site by our advertising partners. They may be
              used by those companies to build a profile of your interests and
              show you relevant advertisements on other sites.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Specific Cookies We Use
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mb-4">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">
                    Cookie Name
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">
                    Purpose
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">
                    Duration
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    _shopdash_session
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Maintains user session state across page requests
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Session
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Essential
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    _shopdash_auth
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Authenticates logged-in users
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    30 days
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Essential
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    _ga, _gid
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Google Analytics cookies used to distinguish users and
                    sessions
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    2 years, 24 hours
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Analytics
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    _fbp
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Used by Facebook to deliver advertisements
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    3 months
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Advertising
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    _shopdash_preferences
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Stores user preferences such as dashboard layout
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    1 year
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm">
                    Functional
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="text-gray-700 mb-4">
            Most web browsers allow you to control cookies through their
            settings preferences. However, if you limit the ability of websites
            to set cookies, you may worsen your overall user experience, since
            it will no longer be personalized to you. It may also stop you from
            saving customized settings like login information.
          </p>
          <p className="text-gray-700">
            To manage cookies in your browser, you can follow these instructions
            for different browsers:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                className="text-blue-600 hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                className="text-blue-600 hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                className="text-blue-600 hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                className="text-blue-600 hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Changes to Our Cookie Policy
          </h2>
          <p className="text-gray-700">
            We may update our Cookie Policy from time to time. We will notify
            you of any changes by posting the new Cookie Policy on this page and
            updating the "Last updated" date. You are advised to review this
            Cookie Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our Cookie Policy, please contact us
            at privacy@shopdash.com or by mail at: Shopdash, Inc., 123
            E-Commerce Street, Suite 500, San Francisco, CA 94105, United
            States.
          </p>
        </section>
      </div>
    </div>
  );
}
