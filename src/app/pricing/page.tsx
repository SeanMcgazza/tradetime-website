import Link from "next/link";
import { Check, X, ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - TradeTime | Starter, Pro & RetrofitSync Plans",
  description: "Simple, honest pricing for Irish & UK tradespeople. Starter €19/mo, Pro €49/mo, RetrofitSync €149/mo. Pay annually and get 2 months free. 14-day free trial.",
};

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    annualPrice: 190,
    description: "For the sole trader who wants to get paid faster with zero admin",
    features: [
      { name: "Pay Now Button on every invoice", included: true },
      { name: "On-Site Quote Builder", included: true },
      { name: "Rates Library — save rates, quote by tapping", included: true },
      { name: "Quote-to-Invoice in One Tap", included: true },
      { name: "Client Database", included: true },
      { name: "Payment Dashboard", included: true },
      { name: "PDF export & email delivery", included: true },
      { name: "Irish & UK VAT calculation", included: true },
      { name: "Email support", included: true },
      { name: "Automatic Payment Reminders", included: false },
      { name: "GPS Job Timer", included: false },
      { name: "Mileage Tracker", included: false },
      { name: "Materials Tracker", included: false },
      { name: "Service Reminder Engine", included: false },
      { name: "VAT Return Summary (ROS export)", included: false },
      { name: "Profit Per Job analytics", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 490,
    description: "Everything in Starter, plus the tools to run your business properly",
    includesText: "Everything in Starter, plus:",
    features: [
      { name: "Automatic Payment Reminders (Day 7, 14, 21)", included: true },
      { name: "GPS Job Timer — auto-track time on site", included: true },
      { name: "Mileage Tracker — €5,400+/year in deductions", included: true },
      { name: "Materials Tracker — log on site, auto-add to invoice", included: true },
      { name: "Service Reminder Engine — 'Annual service due' emails", included: true },
      { name: "VAT Return Summary — one-click ROS export", included: true },
      { name: "Annual Income Report PDF", included: true },
      { name: "Profit Per Job analytics", included: true },
      { name: "Priority support (same-day)", included: true },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "RetrofitSync",
    monthlyPrice: 149,
    annualPrice: 1490,
    description: "Everything in Pro, plus SEAI grant compliance for registered contractors",
    includesText: "Everything in Pro, plus:",
    features: [
      { name: "Eircode BER Lookup — BER + grant eligibility in 10 seconds", included: true },
      { name: "Grant Evidence Vault — GPS + timestamped photos required", included: true },
      { name: "SEAI Declaration Auto-Fill — 3 mins instead of 45", included: true },
      { name: "Grant Invoice Templates — SEAI-compliant format", included: true },
      { name: "BER Assessor Reminder — auto-chase post-works assessment", included: true },
    ],
    cta: "Start Free Trial",
    popular: false,
    badge: "Launch Price",
    badgeNote: "First 100 contractors — locked for life",
  },
];

const faqs = [
  {
    question: "Do I need to know anything about software to use this?",
    answer: "No. If you can send a WhatsApp, you can use TradeTime. The quote builder takes under 5 minutes to learn. Most customers send their first invoice on the day they sign up.",
  },
  {
    question: "What payment methods can my customers use?",
    answer: "Visa, Mastercard, Google Pay, Apple Pay, and SEPA bank transfer. The Pay Now button handles all of it. Your customer taps, pays, and you get a notification. Funds arrive in your bank account the next business day.",
  },
  {
    question: "How much does Stripe charge?",
    answer: "Stripe charges a processing fee on card payments (currently 1.4% + €0.25 for European cards, 2.9% + €0.25 for non-European). This is separate from your TradeTime subscription. SEPA bank transfer has a lower rate. You can pass this fee to your customer or absorb it — your choice.",
  },
  {
    question: "Does it work in the UK as well as Ireland?",
    answer: "Yes. TradeTime supports Irish VAT rates (23%, 13.5%, 0%) and UK VAT (20%, 5%, 0%). UK tradespeople get the full core platform. The RetrofitSync SEAI features are Ireland-specific. A UK retrofit module (TrustMark/ECO4) is on the roadmap.",
  },
  {
    question: "What is the RetrofitSync tier? Is it just for heat pump installers?",
    answer: "It's for any SEAI-registered contractor: heat pumps, insulation (external wall, internal wall, attic), solar PV, heating controls. If you register with the SEAI and submit grants on behalf of homeowners, RetrofitSync is for you.",
  },
  {
    question: "I already use Xero/QuickBooks. Will TradeTime replace it?",
    answer: "Not entirely, and we don't try to. TradeTime is your on-site tool — for quoting, invoicing, getting paid, and tracking jobs in the field. Xero and QuickBooks are accounting tools. The two work together. TradeTime's VAT summary and income report export directly to formats your accountant can use.",
  },
  {
    question: "Is my data safe? Where is it stored?",
    answer: "TradeTime uses Supabase for data storage, hosted on EU infrastructure (Ireland/EU region). Your data never leaves the EU. We are GDPR compliant and do not sell your data to third parties.",
  },
  {
    question: "What if I want to cancel?",
    answer: "Cancel any time, no questions asked. Monthly subscribers can cancel at the end of their billing period. Annual subscribers can cancel and receive a pro-rated refund for unused months.",
  },
  {
    question: "Does the free trial require a credit card?",
    answer: "No. 14 days free, no card required. You'll only be asked for payment details if you decide to continue after the trial.",
  },
  {
    question: "I have employees / subcontractors. Does that work?",
    answer: "The Pro and RetrofitSync tiers support multi-user accounts (up to 5 users). Team plans for larger contractor businesses are available — contact us.",
  },
];

const comparisonFeatures = [
  { name: "Pay Now Button (Stripe payments)", starter: true, pro: true, retrofit: true },
  { name: "On-Site Quote Builder", starter: true, pro: true, retrofit: true },
  { name: "Rates Library", starter: true, pro: true, retrofit: true },
  { name: "Quote-to-Invoice in One Tap", starter: true, pro: true, retrofit: true },
  { name: "Client Database", starter: true, pro: true, retrofit: true },
  { name: "Payment Dashboard", starter: true, pro: true, retrofit: true },
  { name: "PDF export & email delivery", starter: true, pro: true, retrofit: true },
  { name: "Irish & UK VAT calculation", starter: true, pro: true, retrofit: true },
  { name: "Automatic Payment Reminders", starter: false, pro: true, retrofit: true },
  { name: "GPS Job Timer", starter: false, pro: true, retrofit: true },
  { name: "Mileage Tracker", starter: false, pro: true, retrofit: true },
  { name: "Materials Tracker", starter: false, pro: true, retrofit: true },
  { name: "Service Reminder Engine", starter: false, pro: true, retrofit: true },
  { name: "VAT Return Summary (ROS export)", starter: false, pro: true, retrofit: true },
  { name: "Annual Income Report PDF", starter: false, pro: true, retrofit: true },
  { name: "Profit Per Job analytics", starter: false, pro: true, retrofit: true },
  { name: "Priority support", starter: false, pro: true, retrofit: true },
  { name: "Eircode BER Lookup", starter: false, pro: false, retrofit: true },
  { name: "Grant Evidence Vault", starter: false, pro: false, retrofit: true },
  { name: "SEAI Declaration Auto-Fill", starter: false, pro: false, retrofit: true },
  { name: "Grant Invoice Templates", starter: false, pro: false, retrofit: true },
];

// Client component for toggle would go here - for now showing both prices
export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Simple, honest pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            No hidden fees. No per-job charges. No surprises.
          </p>
          
          {/* Annual/Monthly Toggle Note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            <span>🎉</span>
            <span>Pay annually and get 2 months free</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 lg:p-8 ${
                  plan.popular
                    ? "bg-navy-900 text-white ring-4 ring-orange-500 md:scale-105"
                    : "bg-gray-50 text-navy-900"
                }`}
              >
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3 min-h-[28px]">
                  {plan.popular && (
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  {plan.badge && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                
                {/* Pricing */}
                <div className="mb-1">
                  <span className="text-4xl font-bold">€{plan.monthlyPrice}</span>
                  <span className={plan.popular ? "text-gray-300" : "text-gray-500"}>
                    /month
                  </span>
                </div>
                <p className={`text-sm mb-4 ${plan.popular ? "text-orange-300" : "text-orange-600"}`}>
                  or €{plan.annualPrice}/year (save €{plan.monthlyPrice * 12 - plan.annualPrice})
                </p>
                
                <p className={`mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                <Link
                  href="https://app.tradetime.ie/signup"
                  className={`block text-center py-4 px-6 rounded-lg font-semibold transition-colors mb-6 ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                {plan.includesText && (
                  <p className={`font-medium mb-3 ${plan.popular ? "text-orange-300" : "text-orange-600"}`}>
                    {plan.includesText}
                  </p>
                )}
                
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-orange-400" : "text-green-500"}`} />
                      ) : (
                        <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-gray-600" : "text-gray-300"}`} />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.popular ? "text-gray-200" : "text-gray-700"
                          : plan.popular ? "text-gray-500" : "text-gray-400"
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {plan.badgeNote && (
                  <p className={`text-xs mt-4 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.badgeNote}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">
              All plans include 14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* RetrofitSync Launch Price Banner */}
      <section className="py-6 bg-green-50 border-y border-green-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-navy-900">
                RetrofitSync Launch Price — €149/month locked for life
              </p>
              <p className="text-gray-600">
                First 100 contractors only. After that, the price increases to €199/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Compare plans in detail
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what you get with each plan.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 font-semibold text-navy-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-navy-900 w-28">
                    Starter
                    <span className="block text-sm font-normal text-gray-500">€19/mo</span>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-navy-900 w-28 bg-orange-50 rounded-t-lg">
                    Pro
                    <span className="block text-sm font-normal text-orange-600">€49/mo</span>
                  </th>
                  <th className="text-center py-4 pl-4 font-semibold text-navy-900 w-28">
                    RetrofitSync
                    <span className="block text-sm font-normal text-gray-500">€149/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-gray-700">{feature.name}</td>
                    <td className="py-3 px-4 text-center">
                      {feature.starter ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-orange-50">
                      {feature.pro ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 pl-4 text-center">
                      {feature.retrofit ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Maths Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Is it worth it? Let&apos;s do the maths.
            </h2>
            
            <div className="bg-navy-800 rounded-2xl p-8 text-left space-y-4">
              <p className="text-gray-300">
                You do <span className="text-orange-400 font-semibold">40 jobs a year</span>. 
                Average job value: <span className="text-orange-400 font-semibold">€2,500</span>.
              </p>
              <p className="text-gray-300">
                Right now, you wait <span className="text-red-400 font-semibold">45 days</span> to be paid.
                With TradeTime&apos;s Pay Now button: <span className="text-green-400 font-semibold">3 days</span>.
              </p>
              <p className="text-gray-300">
                That&apos;s <span className="text-orange-400 font-semibold">€100,000 in annual revenue</span> circulating 
                through your business 42 days faster.
              </p>
              
              <div className="border-t border-navy-700 pt-4 mt-6">
                <p className="text-gray-300">
                  The mileage tracker logs <span className="text-orange-400 font-semibold">30,000km/year</span> for 
                  a busy tradesperson. At €0.18/km = <span className="text-green-400 font-semibold">€5,400 in tax deductions</span>. 
                  Most forget to claim it.
                </p>
              </div>
              
              <div className="border-t border-navy-700 pt-4 mt-6">
                <p className="text-xl text-white font-semibold">
                  TradeTime Pro costs €588/year. The ROI is 20x+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg mb-4 shadow-sm"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none p-6">
                  <h3 className="text-lg font-semibold text-navy-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              14-Day Free Trial — No Risk
            </h2>
            <p className="text-gray-600">
              Try any plan free for 14 days. No credit card required. 
              If it&apos;s not right for you, just don&apos;t subscribe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to stop chasing invoices?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join tradespeople across Ireland and the UK who&apos;ve simplified their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.tradetime.ie/signup" className="btn-primary text-lg px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <p className="text-gray-400 mt-6">
            No credit card required • 14 days free • Cancel anytime
          </p>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <HelpCircle className="w-12 h-12 text-orange-500" />
            <div>
              <h3 className="text-xl font-semibold text-navy-900">
                Still have questions?
              </h3>
              <p className="text-gray-600">
                We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <Link href="/contact" className="btn-secondary whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
