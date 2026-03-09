import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TradeTime",
  description: "Privacy Policy for TradeTime - How we collect, use, and protect your personal data in compliance with GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-navy-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-500 mb-8">
              <strong>Last updated:</strong> 8 March 2026<br />
              <strong>Effective date:</strong> 8 March 2026
            </p>

            <p className="lead text-xl text-navy-700">
              TradeTime Limited (&quot;TradeTime&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your 
              privacy and complying with the General Data Protection Regulation (GDPR) and the Irish 
              Data Protection Act 2018. This Privacy Policy explains how we collect, use, store, and 
              protect your personal data when you use our Service.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="mt-0 text-blue-900 text-lg font-semibold">Summary of Key Points</h3>
              <ul className="text-blue-800 mb-0">
                <li>We only collect data necessary to provide our Service</li>
                <li>Your data is stored on EU-based servers</li>
                <li>We never sell your personal data to third parties</li>
                <li>You have full rights over your data under GDPR</li>
                <li>You can export or delete your data at any time</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">1. Who We Are</h2>
            <p>
              TradeTime Limited is the data controller responsible for your personal data. We are 
              registered in Ireland (Company Number: [XXXXXX]).
            </p>
            <p>
              <strong>Contact details:</strong><br />
              TradeTime Limited<br />
              [Address]<br />
              Dublin, Ireland<br />
              Email: <a href="mailto:privacy@tradetime.ie" className="text-orange-500 hover:underline">privacy@tradetime.ie</a>
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">2. Data We Collect</h2>
            <h3 className="text-xl font-semibold text-navy-800">2.1 Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, phone number, password (encrypted)</li>
              <li><strong>Business Information:</strong> Business name, trade type, VAT number, RCT number, business address</li>
              <li><strong>Client Data:</strong> Client names, addresses, phone numbers, email addresses</li>
              <li><strong>Financial Information:</strong> Bank details (IBAN, BIC), payment history</li>
              <li><strong>Job Data:</strong> Job descriptions, photos, notes, materials, pricing</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy-800">2.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, features used, actions taken within the app</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
              <li><strong>Log Data:</strong> IP address, access times, referring URLs</li>
              <li><strong>Cookies:</strong> Essential cookies for session management</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">3. Legal Basis for Processing</h2>
            <p>Under GDPR, we process your personal data based on the following legal grounds:</p>
            <ul>
              <li><strong>Contract Performance:</strong> Providing the Service, processing payments, account management</li>
              <li><strong>Legitimate Interests:</strong> Service improvement, security, fraud prevention, analytics</li>
              <li><strong>Consent:</strong> Marketing communications (optional), non-essential cookies</li>
              <li><strong>Legal Obligation:</strong> Tax reporting, responding to legal requests</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">4. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Provide and maintain the TradeTime Service</li>
              <li>Process your quotes, invoices, and payments</li>
              <li>Send transactional emails (invoice notifications, payment confirmations)</li>
              <li>Provide customer support</li>
              <li>Improve and develop new features</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
              <h3 className="mt-0 text-green-900 text-lg font-semibold">We do NOT:</h3>
              <ul className="text-green-800 mb-0">
                <li>Sell your personal data to third parties</li>
                <li>Use your data for targeted advertising</li>
                <li>Share your client data with other users</li>
                <li>Use automated decision-making that affects your rights</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">5. Data Sharing</h2>
            <p>We share your data only in the following circumstances:</p>

            <h3 className="text-xl font-semibold text-navy-800">5.1 Service Providers</h3>
            <p>
              We use trusted third-party providers to help operate our Service. These providers are 
              contractually bound to protect your data:
            </p>
            <ul>
              <li><strong>Supabase</strong> (Database hosting) — EU-based servers</li>
              <li><strong>Vercel</strong> (Application hosting) — EU edge locations</li>
              <li><strong>Stripe</strong> (Payment processing) — PCI-DSS compliant</li>
              <li><strong>Resend</strong> (Email delivery) — GDPR compliant</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy-800">5.2 Legal Requirements</h3>
            <p>
              We may disclose your data if required by law, court order, or to protect the rights, 
              property, or safety of TradeTime, our users, or the public.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">6. Data Storage and Security</h2>
            <h3 className="text-xl font-semibold text-navy-800">6.1 Location</h3>
            <p>
              Your data is stored on servers located in the <strong>European Union</strong> (Ireland/Frankfurt). 
              We do not transfer your data outside the EEA without appropriate safeguards.
            </p>

            <h3 className="text-xl font-semibold text-navy-800">6.2 Security Measures</h3>
            <p>We implement robust security measures including:</p>
            <ul>
              <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
              <li>Secure password hashing (bcrypt)</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Regular backups with secure storage</li>
              <li>Row-level security in our database</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">7. Data Retention</h2>
            <p>We retain your data for the following periods:</p>
            <ul>
              <li><strong>Active accounts:</strong> Data is retained while your account is active</li>
              <li><strong>Closed accounts:</strong> Account data deleted within 30 days of closure</li>
              <li><strong>Financial records:</strong> Retained for 6 years as required by Irish law</li>
              <li><strong>Usage logs:</strong> Anonymised or deleted after 90 days</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">8. Cookies</h2>
            <p>
              We use strictly necessary cookies for authentication and session management. With your 
              consent, we may use privacy-friendly analytics to understand how users interact with 
              our Service. You can manage your cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">9. Your Rights Under GDPR</h2>
            <p>
              As a data subject in the European Union, you have the following rights:
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
              <h3 className="mt-0 text-orange-900 text-lg font-semibold">Your Data Rights</h3>
              <ul className="text-orange-800 mb-0">
                <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-navy-800">How to Exercise Your Rights</h3>
            <p>
              You can exercise many of these rights directly through your account settings:
            </p>
            <ul>
              <li><strong>Access &amp; Export:</strong> Settings → Export Data</li>
              <li><strong>Rectification:</strong> Settings → Edit Business Profile</li>
              <li><strong>Deletion:</strong> Settings → Delete Account</li>
            </ul>
            <p>
              For other requests, contact us at{" "}
              <a href="mailto:privacy@tradetime.ie" className="text-orange-500 hover:underline">privacy@tradetime.ie</a>. 
              We will respond within 30 days as required by GDPR.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">10. Client Data (Data Processing)</h2>
            <p>
              When you store your clients&apos; personal data in TradeTime (names, addresses, contact details), 
              you are the <strong>data controller</strong> for that data, and TradeTime acts as a 
              <strong> data processor</strong> on your behalf.
            </p>
            <p>
              You are responsible for having a legal basis to store your clients&apos; data, informing your 
              clients about how their data is used, and responding to their data rights requests.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes 
              by email or through the Service at least 30 days before the changes take effect.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, 
              please contact us:
            </p>
            <p>
              <strong>Data Protection Contact</strong><br />
              TradeTime Limited<br />
              Email: <a href="mailto:privacy@tradetime.ie" className="text-orange-500 hover:underline">privacy@tradetime.ie</a>
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">13. Supervisory Authority</h2>
            <p>
              If you are not satisfied with our response to a privacy complaint, you have the right 
              to lodge a complaint with the Irish Data Protection Commission:
            </p>
            <p>
              <strong>Data Protection Commission</strong><br />
              21 Fitzwilliam Square South<br />
              Dublin 2, D02 RD28, Ireland<br />
              Website: <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">www.dataprotection.ie</a><br />
              Phone: +353 1 765 0100
            </p>

            <hr className="my-12 border-gray-200" />

            <p className="text-gray-500 text-sm">
              By using TradeTime, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
