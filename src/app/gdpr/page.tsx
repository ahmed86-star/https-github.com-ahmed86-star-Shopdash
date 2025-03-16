import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance | Shopdash",
  description:
    "Information about Shopdash's GDPR compliance and data subject rights.",
};

export default function GdprPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">GDPR Compliance</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Our Commitment to GDPR
          </h2>
          <p className="text-gray-700 mb-4">
            Shopdash is committed to protecting the data privacy rights of
            individuals as stipulated by the General Data Protection Regulation
            (GDPR). We have implemented comprehensive measures to ensure
            compliance with this important regulation and to provide our users
            with full control over their personal data.
          </p>
          <p className="text-gray-700">Last updated: June 1, 2023</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Data Controller and Data Processor
          </h2>
          <p className="text-gray-700 mb-4">
            Shopdash acts as a Data Controller for the personal information of
            our customers who use our platform. For the end-customer data that
            our users process through our platform, Shopdash acts as a Data
            Processor, processing this information only on behalf of and under
            the instructions of our users (the Data Controllers).
          </p>
          <p className="text-gray-700">
            We have implemented appropriate Data Processing Agreements (DPAs)
            with our customers to clearly define responsibilities and ensure
            GDPR compliance throughout the data processing chain.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Legal Basis for Processing
          </h2>
          <p className="text-gray-700 mb-4">
            We process personal data on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <strong>Contractual Necessity:</strong> Processing necessary for
              the performance of our contract with you
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Processing necessary for
              our legitimate business interests, such as improving our services,
              preventing fraud, and ensuring network security
            </li>
            <li>
              <strong>Consent:</strong> Processing based on your specific
              consent, which you can withdraw at any time
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing necessary to comply
              with our legal obligations
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Subject Rights</h2>
          <p className="text-gray-700 mb-4">
            Under the GDPR, individuals have the following rights regarding
            their personal data:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              <strong>Right to Access:</strong> You can request a copy of your
              personal data that we process
            </li>
            <li>
              <strong>Right to Rectification:</strong> You can request
              correction of inaccurate or incomplete personal data
            </li>
            <li>
              <strong>Right to Erasure:</strong> You can request deletion of
              your personal data under certain circumstances
            </li>
            <li>
              <strong>Right to Restriction of Processing:</strong> You can
              request that we limit how we use your data
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You can request a
              machine-readable copy of your data to transfer to another service
            </li>
            <li>
              <strong>Right to Object:</strong> You can object to certain types
              of processing, including direct marketing
            </li>
            <li>
              <strong>
                Right to Not Be Subject to Automated Decision-making:
              </strong>{" "}
              You can request human intervention for decisions based solely on
              automated processing
            </li>
          </ul>
          <p className="text-gray-700">
            To exercise any of these rights, please contact our Data Protection
            Officer at dpo@shopdash.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            International Data Transfers
          </h2>
          <p className="text-gray-700 mb-4">
            Shopdash may transfer personal data outside the European Economic
            Area (EEA). When we do, we ensure appropriate safeguards are in
            place to protect your data and comply with GDPR requirements. These
            safeguards include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>
              Standard Contractual Clauses approved by the European Commission
            </li>
            <li>Binding Corporate Rules</li>
            <li>
              Adherence to the EU-U.S. Privacy Shield Framework (where
              applicable)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Data Breach Notification
          </h2>
          <p className="text-gray-700">
            In the event of a personal data breach that is likely to result in a
            risk to the rights and freedoms of individuals, we will notify the
            relevant supervisory authority within 72 hours of becoming aware of
            the breach, where feasible. If the breach is likely to result in a
            high risk to the rights and freedoms of individuals, we will also
            notify the affected individuals without undue delay.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Data Protection Officer
          </h2>
          <p className="text-gray-700">
            We have appointed a Data Protection Officer (DPO) who is responsible
            for overseeing our data protection strategy and implementation to
            ensure compliance with GDPR requirements. If you have any questions
            about our GDPR compliance or wish to exercise your data subject
            rights, you can contact our DPO at dpo@shopdash.com or by mail at:
            Data Protection Officer, Shopdash, Inc., 123 E-Commerce Street,
            Suite 500, San Francisco, CA 94105, United States.
          </p>
        </section>
      </div>
    </div>
  );
}
