import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Practices | Shopdash",
  description:
    "Learn about Shopdash's security measures and data protection protocols.",
};

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Security Practices</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Our Commitment to Security
          </h2>
          <p className="text-gray-700 mb-4">
            At Shopdash, security is a top priority. We employ industry-leading
            security measures to protect your data and ensure the integrity of
            our platform. Our security practices are regularly reviewed and
            updated to address emerging threats and vulnerabilities.
          </p>
          <p className="text-gray-700">Last updated: June 1, 2023</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Data Protection Measures
          </h2>
          <p className="text-gray-700 mb-4">
            We implement multiple layers of security to protect your data:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <strong>Encryption:</strong> All data transmitted between your
              browser and our servers is encrypted using TLS (Transport Layer
              Security). Sensitive data at rest is encrypted using AES-256
              encryption.
            </li>
            <li>
              <strong>Secure Infrastructure:</strong> Our platform is hosted on
              secure cloud infrastructure with built-in firewalls, DDoS
              protection, and regular security audits.
            </li>
            <li>
              <strong>Database Security:</strong> Database access is strictly
              controlled and monitored. We implement row-level security and data
              partitioning to ensure proper isolation.
            </li>
            <li>
              <strong>Regular Backups:</strong> We perform regular backups of
              all customer data to prevent data loss in case of system failures.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Access Controls</h2>
          <p className="text-gray-700 mb-4">
            We maintain strict access controls to protect your information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <strong>Role-Based Access:</strong> Our employees are granted
              access to customer data on a need-to-know basis, with different
              permission levels based on job responsibilities.
            </li>
            <li>
              <strong>Multi-Factor Authentication:</strong> We require
              multi-factor authentication for all internal systems and encourage
              all customers to enable it for their accounts.
            </li>
            <li>
              <strong>Session Management:</strong> We implement secure session
              handling with automatic timeouts and the ability to view and
              terminate active sessions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Compliance and Certifications
          </h2>
          <p className="text-gray-700 mb-4">
            We comply with industry standards and regulations:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <strong>PCI DSS Compliance:</strong> We follow Payment Card
              Industry Data Security Standard requirements for handling credit
              card information.
            </li>
            <li>
              <strong>SOC 2 Type II:</strong> Our platform has successfully
              completed SOC 2 Type II audits, verifying our security,
              availability, and confidentiality controls.
            </li>
            <li>
              <strong>GDPR Compliance:</strong> We maintain compliance with the
              General Data Protection Regulation for our European users.
            </li>
            <li>
              <strong>Regular Penetration Testing:</strong> We conduct regular
              penetration tests and vulnerability assessments by independent
              security firms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Incident Response</h2>
          <p className="text-gray-700 mb-4">
            We have a comprehensive incident response plan in place to address
            security incidents promptly and effectively:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <strong>24/7 Monitoring:</strong> Our security team monitors our
              systems around the clock for suspicious activities.
            </li>
            <li>
              <strong>Rapid Response:</strong> We have established procedures to
              quickly respond to and mitigate potential security threats.
            </li>
            <li>
              <strong>Notification Process:</strong> In the event of a data
              breach affecting your information, we will notify you in
              accordance with applicable laws and regulations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Security Best Practices for Users
          </h2>
          <p className="text-gray-700 mb-4">
            We recommend the following security practices for all Shopdash
            users:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Enable multi-factor authentication for your account</li>
            <li>
              Use strong, unique passwords and consider using a password manager
            </li>
            <li>
              Regularly review account activity and report any suspicious
              behavior
            </li>
            <li>
              Keep your devices and browsers updated with the latest security
              patches
            </li>
            <li>
              Be cautious of phishing attempts and verify email communications
              from Shopdash
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our security practices or want to
            report a security concern, please contact our security team at
            security@shopdash.com or by mail at: Shopdash Security Team, 123
            E-Commerce Street, Suite 500, San Francisco, CA 94105, United
            States.
          </p>
        </section>
      </div>
    </div>
  );
}
