import Link from "next/link";
import {
  Clock,
  FileText,
  Receipt,
  CreditCard,
  Users,
  Smartphone,
  ArrowRight,
  Check,
  Zap,
  MapPin,
  Car,
  Bell,
  TrendingUp,
  Package,
  ChevronDown,
} from "lucide-react";

// Hero Section - Updated messaging: payment focus, not speed
function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-navy-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <span>🇮🇪</span>
              <span>Built for Irish & UK Tradespeople</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Stop chasing invoices.{" "}
              <span className="text-orange-500">Start getting paid.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              TradeTime helps tradespeople quote on site, invoice in one tap, 
              and get paid in days — not weeks. No accountant required. No chasing. No spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://app.tradetime.ie/signup" className="btn-primary text-lg px-8 py-4">
                Start Free Trial — 14 Days Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                See Pricing
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Set up in 15 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup - Invoice with Pay Now button */}
          <div className="relative">
            <div className="bg-navy-900 rounded-[3rem] p-4 shadow-2xl max-w-sm mx-auto">
              <div className="bg-white rounded-[2.5rem] p-6 min-h-[500px]">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-navy-900 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-orange-500" />
                  </div>
                  <p className="text-sm text-gray-500">Invoice Preview</p>
                </div>
                
                {/* Mock Invoice */}
                <div className="border border-gray-200 rounded-lg p-4 text-sm">
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="font-semibold text-navy-900">O&apos;Brien Electrical</p>
                      <p className="text-gray-500 text-xs">VAT: IE1234567T</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-navy-900">Invoice #001</p>
                      <p className="text-gray-500 text-xs">8 Mar 2026</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3 mb-3">
                    <p className="text-gray-600 mb-1">Consumer unit replacement</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>13.5% VAT</span>
                      <span>€850.00</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-navy-900">
                      <span>Total (incl. VAT)</span>
                      <span>€964.75</span>
                    </div>
                  </div>
                </div>
                
                {/* Pay Now Button - THE key feature */}
                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold mt-4 flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Pay Now — Card or Apple Pay
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-3">
                  Customer pays in 30 seconds. You get paid tomorrow. ⚡
                </p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -left-4 top-20 bg-white rounded-lg shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-medium">Paid in 3 days avg</span>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-32 bg-white rounded-lg shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium">No more chasing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Bar - Social proof with real numbers
function StatsBar() {
  const stats = [
    { value: "13.9 hrs", label: "Admin per week for the average tradesperson" },
    { value: "82%", label: "of contractors wait 30+ days to be paid" },
    { value: "3 days", label: "Average time to payment with Pay Now" },
    { value: "20x ROI", label: "Return on TradeTime cost in year one" },
  ];

  return (
    <section className="py-8 bg-navy-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">
          Sources: Sage UK Trade Survey, Rabbet 2024, QuickBooks 2025
        </p>
      </div>
    </section>
  );
}

// How It Works - Quote → Invoice → Dashboard flow
function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Quote on Site",
      description: "Build a professional quote from your phone before you leave the customer. Tap your saved rates, add materials, and send. Done in under 2 minutes.",
      time: "Under 2 mins",
    },
    {
      number: "2",
      title: "Invoice in One Tap",
      description: "Job done? Convert your accepted quote to an invoice with one tap. Every invoice has a Pay Now button. Customer pays by card, Google Pay, or Apple Pay.",
      time: "30 seconds",
    },
    {
      number: "3",
      title: "Watch the Dashboard",
      description: "Your payment dashboard shows every invoice: paid, pending, or overdue. Automatic reminders go out at day 7, 14, and 21. You don't lift a finger.",
      time: "Zero effort",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quote, invoice, get paid. That&apos;s it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <p className="text-sm text-orange-600 font-medium">{step.time}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full">
            <Smartphone className="w-5 h-5" />
            <span className="font-medium">Works on any device — phone, tablet, or computer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature Highlights - 4 highest-impact features
function FeatureHighlights() {
  const features = [
    {
      icon: CreditCard,
      title: "Pay Now Button",
      problem: "Customers forget to pay. Bank transfers require them to log in, find your IBAN, create a payee. Most leave it for tomorrow.",
      outcome: "One tap. Customer pays by card on their phone. You get paid next day. No chasing, no awkward calls.",
    },
    {
      icon: FileText,
      title: "On-Site Quote Builder",
      problem: "Slow quotes lose jobs. The first tradesperson to send a professional quote with clear pricing wins, every time.",
      outcome: "Build and send a branded quote from your phone before you leave the customer's house. Takes under 2 minutes.",
    },
    {
      icon: Bell,
      title: "Automatic Reminders",
      problem: "You feel uncomfortable chasing customers. So you don't. Invoices go unpaid for 60, 90 days.",
      outcome: "Day 7, 14, 21 reminders go out automatically. Professional, firm, and you never have to send a single one.",
    },
    {
      icon: TrendingUp,
      title: "Profit Per Job",
      problem: "You don't really know which jobs make money. You quote by feel. Some jobs lose money and you only find out months later.",
      outcome: "See the real margin on every job the moment it closes. Know which customers, job types, and days are most profitable.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            What TradeTime does
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature solves a real problem you&apos;ve felt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 pt-2">
                  {feature.title}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium text-red-600">The problem:</span> {feature.problem}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium text-green-600">The outcome:</span> {feature.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// The Maths Section - ROI Calculator
function TheMaths() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            The maths: what TradeTime is actually worth
          </h2>
          
          <div className="bg-navy-800 rounded-2xl p-8 text-left space-y-4">
            <p className="text-gray-300">
              You do <span className="text-orange-400 font-semibold">40 jobs a year</span>. 
              Average job value: <span className="text-orange-400 font-semibold">€2,500</span>.
            </p>
            <p className="text-gray-300">
              Right now, you wait an average of <span className="text-red-400 font-semibold">45 days</span> to be paid.
            </p>
            <p className="text-gray-300">
              With TradeTime&apos;s Pay Now button, you get paid in <span className="text-green-400 font-semibold">3 days</span>.
            </p>
            <p className="text-gray-300">
              That&apos;s €2,500 sitting in someone else&apos;s bank account for <span className="text-orange-400 font-semibold">42 fewer days</span>. Per job.
            </p>
            <p className="text-gray-300">
              Across 40 jobs: that&apos;s <span className="text-orange-400 font-semibold">€100,000 in annual revenue</span> that 
              circulates through your business 42 days faster.
            </p>
            
            <div className="border-t border-navy-700 pt-4 mt-6">
              <p className="text-gray-300">
                The mileage tracker alone logs an average of <span className="text-orange-400 font-semibold">30,000km/year</span> for 
                a busy tradesperson. At €0.18/km, that&apos;s <span className="text-green-400 font-semibold">€5,400 in tax deductions</span>. 
                Most forget to claim it.
              </p>
            </div>
            
            <div className="border-t border-navy-700 pt-4 mt-6">
              <p className="text-xl text-white font-semibold">
                TradeTime Pro costs €588/year.
              </p>
              <p className="text-gray-300 mt-2">
                The ROI isn&apos;t a percentage. It&apos;s a multiple. Most TradeTime customers get back 
                <span className="text-green-400 font-semibold"> more than 20x</span> what they spend.
              </p>
            </div>
          </div>
          
          <Link href="https://app.tradetime.ie/signup" className="btn-primary text-lg px-8 py-4 mt-8 inline-flex">
            Start Getting Paid Faster
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// All Features Grid
function AllFeatures() {
  const features = [
    { icon: CreditCard, title: "Pay Now Button", description: "Card, Google Pay, Apple Pay. Funds next day." },
    { icon: FileText, title: "On-Site Quotes", description: "Build and send before you leave the job." },
    { icon: Receipt, title: "One-Tap Invoicing", description: "Quote to invoice in one tap." },
    { icon: Bell, title: "Auto Reminders", description: "Day 7, 14, 21 reminders sent for you." },
    { icon: MapPin, title: "GPS Job Timer", description: "Starts when you arrive, stops when you leave." },
    { icon: Car, title: "Mileage Tracker", description: "Auto-log travel for €5,400+ tax deductions." },
    { icon: Package, title: "Materials Tracker", description: "Log on site, added to invoice automatically." },
    { icon: Users, title: "Client Database", description: "Every customer, job, and invoice in one place." },
    { icon: TrendingUp, title: "Profit Per Job", description: "See which jobs actually make money." },
    { icon: Zap, title: "Service Reminders", description: "'Annual boiler service due' sent automatically." },
    { icon: Receipt, title: "VAT Return Summary", description: "One-click export for Revenue's ROS system." },
    { icon: FileText, title: "Annual Income Report", description: "PDF for your accountant. Done in 2 minutes." },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Everything you need to run your business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quote, invoice, track, report — all from your phone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/features" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-2">
            See all features in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Pricing Preview
function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "€19",
      period: "/month",
      annual: "€190/year",
      description: "For the sole trader who wants to get paid faster",
      features: [
        "Pay Now Button on every invoice",
        "On-Site Quote Builder",
        "Quote-to-Invoice in One Tap",
        "Client Database",
        "Payment Dashboard",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      price: "€49",
      period: "/month",
      annual: "€490/year",
      description: "Everything in Starter, plus tools to run your business properly",
      features: [
        "Everything in Starter, plus:",
        "Automatic Payment Reminders",
        "GPS Job Timer",
        "Mileage Tracker (€5,400+ deductions)",
        "Materials Tracker",
        "VAT Return Summary",
        "Profit Per Job",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "RetrofitSync",
      price: "€149",
      period: "/month",
      annual: "€1,490/year",
      description: "Everything in Pro, plus SEAI grant compliance",
      features: [
        "Everything in Pro, plus:",
        "Eircode BER Lookup",
        "Grant Evidence Vault",
        "SEAI Declaration Auto-Fill",
        "Grant Invoice Templates",
      ],
      cta: "Start Free Trial",
      popular: false,
      badge: "Launch Price",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No per-job charges. No surprises.
          </p>
          <p className="text-orange-600 font-medium mt-2">
            Pay annually and get 2 months free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 lg:p-8 ${
                plan.popular
                  ? "bg-navy-900 text-white ring-4 ring-orange-500 scale-105"
                  : "bg-gray-50 text-navy-900"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {plan.popular && (
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                )}
                {plan.badge && (
                  <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                    {plan.badge}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.popular ? "text-gray-300" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-4 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                or {plan.annual} (save 2 months)
              </p>
              <p className={`mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-orange-400" : "text-green-500"}`} />
                    <span className={`text-sm ${plan.popular ? "text-gray-200" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="https://app.tradetime.ie/signup"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/pricing" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-2">
            Compare plans in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      quote: "I used to spend Sunday evenings writing invoices. Now I send them from the driveway before I drive away. I got paid on Tuesday for a job I did on Monday.",
      name: "Darren",
      trade: "Electrician",
      location: "Cork",
    },
    {
      quote: "The SEAI form used to take me the best part of an hour. TradeTime fills it in from my job notes. I just check it and upload. That's it.",
      name: "Aisling",
      trade: "Retrofit Contractor",
      location: "Dublin",
    },
    {
      quote: "I didn't realise I was leaving €4,000 a year on the table in mileage deductions. The tracker just runs in the background. It's free money I was ignoring.",
      name: "Patrick",
      trade: "Plumber",
      location: "Galway",
    },
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Trusted by Irish tradespeople
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join electricians, plumbers, and builders who&apos;ve simplified their business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold text-navy-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.trade}, {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
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
      answer: "Stripe charges a processing fee on card payments (currently 1.4% + €0.25 for European cards, 2.9% + €0.25 for non-European). This is separate from your TradeTime subscription. You can pass this fee to your customer or absorb it — your choice.",
    },
    {
      question: "Does it work in the UK as well as Ireland?",
      answer: "Yes. TradeTime supports Irish VAT rates (23%, 13.5%, 0%) and UK VAT (20%, 5%, 0%). UK tradespeople get the full core platform. The RetrofitSync SEAI features are Ireland-specific.",
    },
    {
      question: "I already use Xero/QuickBooks. Will TradeTime replace it?",
      answer: "Not entirely, and we don't try to. TradeTime is your on-site tool — for quoting, invoicing, getting paid, and tracking jobs in the field. Xero and QuickBooks are accounting tools. The two work together. TradeTime exports to formats your accountant can use.",
    },
    {
      question: "Is my data safe?",
      answer: "TradeTime uses Supabase for data storage, hosted on EU infrastructure (Ireland/EU region). Your data never leaves the EU. We are GDPR compliant and do not sell your data to third parties.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 py-6"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-navy-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="/contact" className="text-orange-500 hover:text-orange-600 font-medium">
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to stop chasing invoices?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          14-day free trial. No credit card. Set up in 15 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://app.tradetime.ie/signup" className="btn-primary text-lg px-8 py-4">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
          <span>✓ No credit card required</span>
          <span>✓ Set up in 15 minutes</span>
          <span>✓ Cancel anytime</span>
        </div>
        <p className="mt-8 text-gray-500">
          🇮🇪 Built in Ireland, for Irish & UK tradespeople
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HowItWorks />
      <FeatureHighlights />
      <TheMaths />
      <AllFeatures />
      <PricingPreview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
