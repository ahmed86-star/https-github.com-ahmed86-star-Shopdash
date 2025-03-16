import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shopdash",
  description: "Shopdash privacy policy and data protection information.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            At Shopdash, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our e-commerce
            analytics platform. Please read this privacy policy carefully. If
            you do not agree with the terms of this privacy policy, please do
            not access the site.
          </p>
          <p className="text-gray-700">Last updated: June 1, 2023</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We collect information that you provide directly to us when you
            register for an account, create or modify your profile, set
            preferences, or make purchases through the platform.
          </p>
          <h3 className="text-xl font-medium mb-2">Personal Data</h3>
          <p className="text-gray-700 mb-4">
            When you register with us, we collect personally identifiable
            information, such as your:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address</li>
            <li>Payment information</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Usage Data</h3>
          <p className="text-gray-700">
            We may also collect information on how the service is accessed and
            used. This usage data may include information such as your
            computer's Internet Protocol address, browser type, browser version,
            the pages of our service that you visit, the time and date of your
            visit, the time spent on those pages, unique device identifiers, and
            other diagnostic data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>
              Send administrative information, such as updates, security alerts,
              and support messages
            </li>
            <li>Respond to comments, questions, and requests</li>
            <li>Provide customer service and technical support</li>
            <li>
              Communicate about new features, products, and special offers
            </li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with our services
            </li>
            <li>
              Detect, investigate, and prevent fraudulent transactions and other
              illegal activities
            </li>
            <li>
              Personalize and improve the services and provide content or
              features that match user profiles or interests
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p className="text-gray-700">
            We will retain your personal information only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use your information to the extent necessary to comply
            with our legal obligations, resolve disputes, and enforce our
            policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Your Data Protection Rights
          </h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have the following data
            protection rights:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              The right to access, update, or delete the information we have on
              you
            </li>
            <li>
              The right of rectification - the right to have your information
              corrected if it is inaccurate or incomplete
            </li>
            <li>The right to object to our processing of your personal data</li>
            <li>
              The right of restriction - the right to request that we restrict
              the processing of your personal information
            </li>
            <li>
              The right to data portability - the right to receive a copy of
              your personal data in a structured, machine-readable format
            </li>
            <li>
              The right to withdraw consent at any time where we relied on your
              consent to process your personal information
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@shopdash.com or by mail at: Shopdash, Inc., 123
            E-Commerce Street, Suite 500, San Francisco, CA 94105, United
            States.
          </p>
        </section>
      </div>
    </div>
  );
}
