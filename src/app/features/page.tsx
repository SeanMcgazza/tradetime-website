import Link from "next/link";
import {
  Zap,
  Receipt,
  Users,
  CreditCard,
  FileText,
  Search,
  Smartphone,
  Clock,
  ArrowRight,
  Check,
  Shield,
  Globe,
  Bell,
  BarChart3,
  Download,
  RefreshCw,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - TradeTime | Invoicing for Irish Tradespeople",
  description: "Discover all TradeTime features: one-tap invoicing, Irish VAT calculation, customer database, payment tracking, and more. Built for electricians, plumbers, and builders.",
};

const mainFeatures = [
  {
    icon: Zap,
    title: "One-Tap Invoicing",
    description: "Create professional invoices from your phone in under a minute. Finish paperwork before you leave the job site.",
    benefits: [
      "47 seconds average creation time",
      "Pre-saved line items for common jobs",
      "One-tap for repeat customers",
      "Send directly from the job site",
    ],
    color: "orange",
  },
  {
    icon: Receipt,
    title: "Irish VAT Built In",
    description: "Automatic VAT calculation at all Irish rates. No more manual calculations or second-guessing.",
    benefits: [
      "23% standard rate",
      "13.5% reduced rate (construction/RCT)",
      "9% hospitality rate",
      "0% zero-rated goods",
    ],
    color: "green",
  },
  {
    icon: Users,
    title: "Customer Database",
    description: "Save customer details once and reuse them forever. Two taps and their info is pre-filled.",
    benefits: [
      "Store unlimited customers",
      "Save addresses and Eircodes",
      "Quick search by name",
      "View customer invoice history",
    ],
    color: "blue",
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description: "Know exactly where your money is. See what's paid, pending, or overdue at a glance.",
    benefits: [
      "Real-time payment status",
      "Overdue invoice alerts",
      "One-tap payment reminders",
      "Cash flow overview",
    ],
    color: "purple",
  },
  {
    icon: FileText,
    title: "PDF Export & Email",
    description: "Send professional PDF invoices directly from the app. In your customer's inbox in seconds.",
    benefits: [
      "Professional PDF format",
      "Direct email delivery",
      "Attach to WhatsApp/SMS",
      "Print-ready if needed",
    ],
    color: "indigo",
  },
  {
    icon: Search,
    title: "Invoice History & Search",
    description: "All your invoices stored and searchable. Tax time? Pull up any invoice instantly.",
    benefits: [
      "Search by customer or date",
      "Filter by payment status",
      "Export for your accountant",
      "Never lose an invoice again",
    ],
    color: "teal",
  },
];

const additionalFeatures = [
  {
    icon: Smartphone,
    title: "Works on Any Device",
    description: "Use your phone on site, laptop at home. Everything syncs automatically.",
  },
  {
    icon: Shield,
    title: "Secure & GDPR Compliant",
    description: "Bank-level encryption. EU servers. Your data is never sold.",
  },
  {
    icon: Globe,
    title: "Works Offline",
    description: "View invoices without signal. Changes sync when you reconnect.",
  },
  {
    icon: Bell,
    title: "Payment Reminders",
    description: "Automatic reminders for overdue invoices. No awkward phone calls.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description: "See your monthly earnings, top customers, and payment trends.",
  },
  {
    icon: Download,
    title: "Export Anytime",
    description: "Download all your data as PDF or CSV. Your data belongs to you.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Invoices",
    description: "Set up recurring invoices for regular maintenance jobs. (Pro)",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Track hours on jobs and convert directly to invoices. (Coming soon)",
  },
];

const useCases = [
  {
    trade: "Electricians",
    scenario: "Finish a consumer unit upgrade, create invoice in the van, send before driving off.",
    benefit: "Invoice sent in 2 minutes. Home for dinner on time.",
  },
  {
    trade: "Plumbers",
    scenario: "4-5 callouts a day, each gets invoiced immediately with photo attached.",
    benefit: "No more chasing scraps of paper. Know exactly what you're owed.",
  },
  {
    trade: "Builders",
    scenario: "Big job with stage payments—deposit, progress, final. Track it all.",
    benefit: "Clear paper trail. No disputes about what's been paid.",
  },
  {
    trade: "Carpenters",
    scenario: "Mix of custom furniture and fit-outs. Different rates, different VAT.",
    benefit: "Correct VAT every time. Professional quotes and invoices.",
  },
];

function getColorClasses(color: string) {
  const colors: Record<string, { bg: string; text: string; light: string }> = {
    orange: { bg: "bg-orange-500", text: "text-orange-500", light: "bg-orange-100" },
    green: { bg: "bg-green-500", text: "text-green-500", light: "bg-green-100" },
    blue: { bg: "bg-blue-500", text: "text-blue-500", light: "bg-blue-100" },
    purple: { bg: "bg-purple-500", text: "text-purple-500", light: "bg-purple-100" },
    indigo: { bg: "bg-indigo-500", text: "text-indigo-500", light: "bg-indigo-100" },
    teal: { bg: "bg-teal-500", text: "text-teal-500", light: "bg-teal-100" },
  };
  return colors[color] || colors.orange;
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Everything you need.{" "}
            <span className="text-orange-500">Nothing you don&apos;t.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            TradeTime is built specifically for Irish tradespeople. Fast invoicing, 
            correct VAT, professional results. No bloat, no complexity.
          </p>
          <Link href="https://app.tradetime.ie/signup" className="btn-primary text-lg px-8 py-4">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center mb-6`}>
                      <feature.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <Check className={`w-5 h-5 ${colors.text}`} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${colors.light} rounded-3xl p-8 lg:p-12 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-navy-900">{feature.title}</span>
                      </div>
                      <div className="space-y-3">
                        {feature.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              And much more
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every feature designed to save you time and make you look professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-navy-800 rounded-xl p-6 hover:bg-navy-700 transition-colors"
              >
                <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Built for every trade
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re an electrician, plumber, builder, or carpenter—TradeTime fits how you work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-4">
                  {useCase.trade}
                </div>
                <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                <div className="flex items-start gap-2 text-green-600">
                  <Check className="w-5 h-5 mt-0.5" />
                  <span className="font-medium">{useCase.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to simplify your invoicing?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start free today. Create your first invoice in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.tradetime.ie/signup" className="btn-primary text-lg px-8 py-4">
              Create Your First Invoice
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
