import Link from "next/link";
import { Check, X, ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - TradeTime | Free & Pro Plans for Irish Tradespeople",
  description: "Simple, transparent pricing. Start free with 5 invoices/month or upgrade to Pro for €15/month with unlimited invoices, custom branding, and priority support.",
};

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Perfect for getting started or occasional invoicing",
    features: [
      { name: "Up to 3 clients", included: true },
      { name: "5 invoices per month", included: true },
      { name: "Basic invoice template", included: true },
      { name: "Irish VAT calculation", included: true },
      { name: "PDF export", included: true },
      { name: "Email invoices", included: true },
      { name: "Payment status tracking", included: true },
      { name: "Email support (48h)", included: true },
      { name: "Custom branding & logo", included: false },
      { name: "Unlimited clients", included: false },
      { name: "Unlimited invoices", included: false },
      { name: "Payment reminders", included: false },
      { name: "Recurring invoices", included: false },
      { name: "Invoice analytics", included: false },
      { name: "Priority support", included: false },
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "€15",
    period: "/month",
    description: "For busy tradespeople who invoice regularly",
    features: [
      { name: "Unlimited clients", included: true },
      { name: "Unlimited invoices", included: true },
      { name: "Premium invoice templates", included: true },
      { name: "Irish VAT calculation", included: true },
      { name: "PDF export", included: true },
      { name: "Email invoices", included: true },
      { name: "Payment status tracking", included: true },
      { name: "Priority support (same-day)", included: true },
      { name: "Custom branding & logo", included: true },
      { name: "Payment reminders", included: true },
      { name: "Recurring invoices", included: true },
      { name: "Invoice analytics", included: true },
      { name: "Export for accountant (CSV)", included: true },
      { name: "Multiple VAT summaries", included: true },
      { name: "Early access to new features", included: true },
    ],
    cta: "Start 14-Day Free Trial",
    popular: true,
  },
];

const faqs = [
  {
    question: "Is the free plan really free forever?",
    answer: "Yes. The free plan includes 3 clients and 5 invoices per month, forever. No credit card required, no time limit. You can use it as long as you like.",
  },
  {
    question: "What happens if I go over my free invoice limit?",
    answer: "You'll be prompted to upgrade, but you won't lose any data. Your existing invoices stay accessible—you just can't create new ones until the next month (or until you upgrade).",
  },
  {
    question: "Can I cancel my Pro subscription anytime?",
    answer: "Yes. No contracts, no cancellation fees. Cancel from your account settings whenever you want. You keep access until the end of your current billing period.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes! Pay annually and get 2 months free—that's €150/year instead of €180 (€12.50/month effective rate).",
  },
  {
    question: "Do you offer discounts for multiple users?",
    answer: "Currently TradeTime is designed for sole traders and small businesses. If you have a team, contact us and we'll work something out.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards (Visa, Mastercard, American Express) through Stripe. All payments are processed securely.",
  },
  {
    question: "Can I export my data if I cancel?",
    answer: "Absolutely. You can export all your invoices as PDF and your customer list as CSV at any time, even after cancelling. Your data belongs to you.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No. No setup fees, no hidden costs. The price you see is the price you pay.",
  },
];

const comparisonCategories = [
  {
    name: "Invoicing",
    features: [
      { name: "Monthly invoices", free: "5", pro: "Unlimited" },
      { name: "Saved clients", free: "3", pro: "Unlimited" },
      { name: "Invoice templates", free: "Basic", pro: "Premium + Custom" },
      { name: "PDF export", free: "✓", pro: "✓" },
      { name: "Email delivery", free: "✓", pro: "✓" },
      { name: "Recurring invoices", free: "✗", pro: "✓" },
    ],
  },
  {
    name: "VAT & Compliance",
    features: [
      { name: "Irish VAT rates (23%, 13.5%, 9%, 0%)", free: "✓", pro: "✓" },
      { name: "VAT number on invoices", free: "✓", pro: "✓" },
      { name: "VAT summary reports", free: "Basic", pro: "Detailed" },
      { name: "Export for accountant", free: "PDF only", pro: "PDF + CSV" },
    ],
  },
  {
    name: "Business Tools",
    features: [
      { name: "Payment tracking", free: "✓", pro: "✓" },
      { name: "Payment reminders", free: "✗", pro: "Automated" },
      { name: "Invoice analytics", free: "✗", pro: "Full dashboard" },
      { name: "Custom branding/logo", free: "✗", pro: "✓" },
    ],
  },
  {
    name: "Support",
    features: [
      { name: "Email support", free: "48h response", pro: "Same-day" },
      { name: "Live chat", free: "✗", pro: "Business hours" },
      { name: "Help documentation", free: "✓", pro: "✓" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-navy-900 text-white ring-4 ring-orange-500 scale-105"
                    : "bg-gray-50 text-navy-900"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-gray-300" : "text-gray-500"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                <Link
                  href="/signup"
                  className={`block text-center py-4 px-6 rounded-lg font-semibold transition-colors mb-8 ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-orange-400" : "text-green-500"}`} />
                      ) : (
                        <X className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-gray-500" : "text-gray-300"}`} />
                      )}
                      <span className={`${
                        feature.included
                          ? plan.popular ? "text-gray-200" : "text-gray-700"
                          : plan.popular ? "text-gray-500" : "text-gray-400"
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">
              All plans include Irish VAT compliance • Cancel anytime • No setup fees
            </p>
          </div>
        </div>
      </section>

      {/* Annual Discount Banner */}
      <section className="py-8 bg-orange-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-navy-900">
                Save 17% with annual billing
              </p>
              <p className="text-gray-600">
                Pay €150/year instead of €180 — that&apos;s 2 months free!
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

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 font-semibold text-navy-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-navy-900 w-32">Free</th>
                  <th className="text-center py-4 pl-4 font-semibold text-navy-900 w-32 bg-orange-50 rounded-t-lg">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="bg-gray-50">
                      <td colSpan={3} className="py-3 px-4 font-semibold text-navy-900">
                        {category.name}
                      </td>
                    </tr>
                    {category.features.map((feature, featIndex) => (
                      <tr key={`feat-${catIndex}-${featIndex}`} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-gray-700">{feature.name}</td>
                        <td className="py-3 px-4 text-center text-gray-600">{feature.free}</td>
                        <td className="py-3 pl-4 text-center text-gray-900 font-medium bg-orange-50">{feature.pro}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Pricing FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We&apos;ve got answers.
            </p>
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
              14-Day Money-Back Guarantee
            </h2>
            <p className="text-gray-600">
              Try Pro risk-free. If it&apos;s not right for you within the first 14 days, 
              we&apos;ll refund your payment in full. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of Irish tradespeople who&apos;ve simplified their invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary text-lg px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <p className="text-gray-400 mt-6">
            No credit card required • Free plan available forever
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
