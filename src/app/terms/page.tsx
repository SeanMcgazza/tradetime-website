import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | TradeTime",
  description: "Terms of Service for TradeTime - Job management and invoicing software for Irish tradespeople.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-navy-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-500 mb-8">
              <strong>Last updated:</strong> 8 March 2026<br />
              <strong>Effective date:</strong> 8 March 2026
            </p>

            <p className="lead text-xl text-navy-700">
              Welcome to TradeTime. These Terms of Service (&quot;Terms&quot;) govern your access to and use of 
              the TradeTime platform operated by TradeTime Limited, a company registered in Ireland 
              (Company Number: [XXXXXX]) with its registered office at [Address], Dublin, Ireland 
              (&quot;TradeTime&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>

            <p>
              By accessing or using TradeTime, you agree to be bound by these Terms. If you do not agree 
              to these Terms, you may not access or use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">1. Definitions</h2>
            <ul>
              <li><strong>&quot;Service&quot;</strong> means the TradeTime web application, mobile applications, APIs, and all related services.</li>
              <li><strong>&quot;User&quot;</strong> or <strong>&quot;you&quot;</strong> means any individual or business entity that accesses or uses the Service.</li>
              <li><strong>&quot;Account&quot;</strong> means the account you create to access the Service.</li>
              <li><strong>&quot;User Content&quot;</strong> means all data, information, and materials you upload, submit, or create through the Service.</li>
              <li><strong>&quot;Subscription&quot;</strong> means a paid plan that provides access to premium features.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">2. Account Registration</h2>
            <h3 className="text-xl font-semibold text-navy-800">2.1 Eligibility</h3>
            <p>
              You must be at least 18 years old and have the legal capacity to enter into a binding 
              contract to use the Service. By registering, you represent that you meet these requirements.
            </p>
            
            <h3 className="text-xl font-semibold text-navy-800">2.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and 
              for all activities that occur under your account. You must:
            </p>
            <ul>
              <li>Provide accurate and complete registration information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorised access to your account</li>
              <li>Not share your account with others or allow others to access your account</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">3. Description of Service</h2>
            <p>
              TradeTime provides a job management and invoicing platform designed for tradespeople 
              in Ireland and the UK. Our Service includes:
            </p>
            <ul>
              <li>Quote and invoice creation with customisable templates</li>
              <li>Client management and contact storage</li>
              <li>Job tracking and scheduling</li>
              <li>Payment tracking and reminders</li>
              <li>VAT calculations and RCT (Relevant Contracts Tax) support for Ireland</li>
              <li>Business reporting and analytics</li>
              <li>Online payment acceptance (via third-party providers)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">4. Subscriptions and Payments</h2>
            <h3 className="text-xl font-semibold text-navy-800">4.1 Free and Paid Plans</h3>
            <p>
              TradeTime offers both free and paid subscription plans. Free plans have feature and usage 
              limitations. Full details of plan features and pricing are available on our{" "}
              <Link href="/pricing" className="text-orange-500 hover:underline">pricing page</Link>.
            </p>

            <h3 className="text-xl font-semibold text-navy-800">4.2 Billing</h3>
            <p>
              Paid subscriptions are billed in advance on a monthly or annual basis, depending on your 
              chosen plan. By subscribing, you authorise us to charge your payment method for all 
              applicable fees.
            </p>

            <h3 className="text-xl font-semibold text-navy-800">4.3 Automatic Renewal</h3>
            <p>
              Subscriptions automatically renew at the end of each billing period unless you cancel 
              before the renewal date. You may cancel at any time through your account settings.
            </p>

            <h3 className="text-xl font-semibold text-navy-800">4.4 Price Changes</h3>
            <p>
              We may change our prices at any time. Price changes will take effect at your next billing 
              cycle. We will give you at least 30 days&apos; notice of any price increase.
            </p>

            <h3 className="text-xl font-semibold text-navy-800">4.5 Refunds</h3>
            <p>
              Subscription fees are generally non-refundable. However, if you are a consumer in the 
              European Union, you have the right to withdraw from a new subscription within 14 days 
              of purchase for a full refund, provided you have not used the Service.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">5. Your Data and Content</h2>
            <h3 className="text-xl font-semibold text-navy-800">5.1 Ownership</h3>
            <p>
              <strong>You retain full ownership of all User Content you create, upload, or store using the Service.</strong> 
              TradeTime does not claim any ownership rights over your data, client information, invoices, 
              quotes, or any other content you create.
            </p>

            <h3 className="text-xl font-semibold text-navy-800">5.2 Licence to TradeTime</h3>
            <p>
              You grant TradeTime a limited, non-exclusive licence to store, process, and display your 
              User Content solely to provide and improve the Service. This licence terminates when you 
              delete your content or close your account.
            </p>

            <h3 className="text-xl font-semibold text-navy-800">5.3 Data Export</h3>
            <p>
              You may export your data at any time through the Service. We provide tools to download 
              your clients, invoices, and business data in standard formats.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">6. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Create fraudulent invoices or conduct financial fraud</li>
              <li>Transmit malicious code, viruses, or harmful software</li>
              <li>Attempt to gain unauthorised access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Use automated systems to access the Service without permission</li>
              <li>Collect or harvest information about other users</li>
              <li>Resell or redistribute the Service without authorisation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">7. Invoicing and Tax Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <p className="text-amber-900 mb-0">
                <strong>Important:</strong> TradeTime provides tools to help you create invoices and calculate 
                VAT and RCT. However, you are solely responsible for ensuring your invoices comply with 
                Irish Revenue requirements and applicable tax laws. TradeTime does not provide tax, legal, 
                or accounting advice. You should consult with a qualified accountant or tax professional 
                for advice specific to your business circumstances.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">8. Third-Party Services</h2>
            <p>
              The Service may integrate with third-party services (such as payment processors, accounting 
              software, or email providers). Your use of these services is subject to their own terms and 
              privacy policies. TradeTime is not responsible for the actions of third-party service providers.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">9. Intellectual Property</h2>
            <p>
              The Service, including its design, features, code, and branding, is protected by copyright, 
              trademark, and other intellectual property laws. All rights not expressly granted are reserved.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">10. Service Availability</h2>
            <p>
              We strive to provide reliable, continuous access to the Service. However, we do not guarantee 
              uninterrupted availability. The Service may be temporarily unavailable for maintenance, 
              updates, or due to circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by Irish and EU law:</p>
            <ul>
              <li>
                <strong>TradeTime shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages</strong>, including loss of profits, data, or business opportunities.
              </li>
              <li>
                Our total liability for any claims arising from your use of the Service shall not exceed 
                the amount you paid to TradeTime in the 12 months preceding the claim.
              </li>
              <li>
                Nothing in these Terms excludes or limits liability for death or personal injury caused 
                by negligence, fraud, or any other liability that cannot be excluded by law.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">12. Termination</h2>
            <p>
              You may close your account at any time through your account settings. We may suspend or 
              terminate your access to the Service if you violate these Terms, engage in harmful conduct, 
              or fail to pay applicable fees. Upon termination, you may request export of your data for 
              up to 30 days.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">13. Privacy</h2>
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed 
              by our <Link href="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link>, 
              which forms part of these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">14. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes by email 
              or through the Service at least 30 days before the changes take effect. Your continued use 
              of the Service after the effective date constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">15. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Ireland. Any disputes 
              arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Ireland.
            </p>
            <p>
              If you are a consumer in the European Union, you may also have access to the European 
              Commission&apos;s Online Dispute Resolution platform at{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-12">16. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <p>
              <strong>TradeTime Limited</strong><br />
              Email: <a href="mailto:legal@tradetime.ie" className="text-orange-500 hover:underline">legal@tradetime.ie</a><br />
              Website: <a href="https://tradetime.ie" className="text-orange-500 hover:underline">https://tradetime.ie</a>
            </p>

            <hr className="my-12 border-gray-200" />

            <p className="text-gray-500 text-sm">
              By using TradeTime, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
