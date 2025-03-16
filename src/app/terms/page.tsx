import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Shopdash",
  description: "Shopdash terms of service and user agreement.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            These Terms of Service constitute a legally binding agreement made
            between you and Shopdash, Inc. ("we," "us," or "our"), concerning
            your access to and use of the Shopdash e-commerce analytics
            platform.
          </p>
          <p className="text-gray-700">Last updated: June 1, 2023</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
          <p className="text-gray-700 mb-4">
            To access certain features of the platform, you must register for an
            account. When you register, you agree to provide accurate, current,
            and complete information and to update this information to maintain
            its accuracy.
          </p>
          <p className="text-gray-700">
            You are responsible for maintaining the confidentiality of your
            account and password and for restricting access to your computer.
            You agree to accept responsibility for all activities that occur
            under your account or password.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Subscription and Billing
          </h2>
          <p className="text-gray-700 mb-4">
            Shopdash offers various subscription plans. By selecting a
            subscription plan, you agree to pay the subscription fees indicated
            for that service. Subscription fees are billed in advance on a
            monthly or annual basis based on the type of subscription you
            select.
          </p>
          <p className="text-gray-700 mb-4">
            Unless you notify us before the end of the applicable subscription
            period that you want to cancel, your subscription will automatically
            renew, and you authorize us to charge your payment method for the
            renewal term.
          </p>
          <p className="text-gray-700">
            All fees are exclusive of all taxes, levies, or duties imposed by
            taxing authorities, and you shall be responsible for payment of all
            such taxes, levies, or duties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Intellectual Property Rights
          </h2>
          <p className="text-gray-700 mb-4">
            The Shopdash platform and its entire contents, features, and
            functionality (including but not limited to all information,
            software, text, displays, images, video, and audio, and the design,
            selection, and arrangement thereof) are owned by Shopdash, Inc., its
            licensors, or other providers of such material and are protected by
            United States and international copyright, trademark, patent, trade
            secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="text-gray-700">
            You must not reproduce, distribute, modify, create derivative works
            of, publicly display, publicly perform, republish, download, store,
            or transmit any of the material on our platform, except as it is
            created and owned by you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
          <p className="text-gray-700 mb-4">
            You may use the Shopdash platform only for lawful purposes and in
            accordance with these Terms of Service. You agree not to use the
            platform:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              In any way that violates any applicable federal, state, local, or
              international law or regulation
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material, including any "junk mail," "chain letter,"
              "spam," or any other similar solicitation
            </li>
            <li>
              To impersonate or attempt to impersonate Shopdash, a Shopdash
              employee, another user, or any other person or entity
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone's
              use or enjoyment of the platform, or which may harm Shopdash or
              users of the platform
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700">
            In no event will Shopdash, its affiliates, or their licensors,
            service providers, employees, agents, officers, or directors be
            liable for damages of any kind, under any legal theory, arising out
            of or in connection with your use, or inability to use, the
            platform, any websites linked to it, any content on the platform or
            such other websites, including any direct, indirect, special,
            incidental, consequential, or punitive damages, including but not
            limited to, personal injury, pain and suffering, emotional distress,
            loss of revenue, loss of profits, loss of business or anticipated
            savings, loss of use, loss of goodwill, loss of data, and whether
            caused by tort (including negligence), breach of contract, or
            otherwise, even if foreseeable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by and defined following the laws of
            the State of California. Shopdash and yourself irrevocably consent
            that the courts of California shall have exclusive jurisdiction to
            resolve any dispute which may arise in connection with these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms of Service, please
            contact us at legal@shopdash.com or by mail at: Shopdash, Inc., 123
            E-Commerce Street, Suite 500, San Francisco, CA 94105, United
            States.
          </p>
        </section>
      </div>
    </div>
  );
}
