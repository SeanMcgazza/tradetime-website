import Link from "next/link";
import {
  Clock,
  FileText,
  Receipt,
  CreditCard,
  Users,
  Search,
  Smartphone,
  ArrowRight,
  Check,
  Zap,
  AlertCircle,
  Calculator,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

// Hero Section
function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-navy-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <span>🇮🇪</span>
              <span>Built for Irish Tradespeople</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Invoice clients in{" "}
              <span className="text-orange-500">under a minute.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional invoicing built for Irish electricians, plumbers, and builders. 
              VAT-compliant. Mobile-ready. Free to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                Create Your First Invoice
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
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
                      <p className="text-gray-500 text-xs">15 Jan 2024</p>
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
                
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mt-4 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  Send Invoice
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-3">
                  Created in 47 seconds ⚡
                </p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -left-4 top-20 bg-white rounded-lg shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-medium">VAT Calculated</span>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-32 bg-white rounded-lg shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium">47s average</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pain Points Section
function PainPoints() {
  const problems = [
    {
      icon: Clock,
      title: "Invoicing takes too long",
      problem: "After a long day on site, the last thing you want is paperwork. Handwritten invoices eat into your evening.",
      solution: "TradeTime: 60-second invoices from your phone",
    },
    {
      icon: AlertCircle,
      title: "Invoices look unprofessional",
      problem: "Scribbled invoices don't inspire confidence. Customers question your professionalism.",
      solution: "TradeTime: Clean, branded templates every time",
    },
    {
      icon: Calculator,
      title: "VAT is confusing",
      problem: "Different rates for different services. Getting it wrong means trouble with Revenue.",
      solution: "TradeTime: Automatic Irish VAT calculation",
    },
    {
      icon: MessageSquare,
      title: "Chasing payments is awkward",
      problem: "Following up on unpaid invoices feels uncomfortable. Late payments hurt your cash flow.",
      solution: "TradeTime: One-tap payment reminders",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Sound familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You&apos;re great at your trade. Paperwork shouldn&apos;t slow you down.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.problem}</p>
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <Check className="w-5 h-5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: Zap,
      title: "One-Tap Invoicing",
      description: "Create invoices in under 60 seconds. Finish paperwork before you leave the job site.",
      stat: "47 seconds average",
    },
    {
      icon: Receipt,
      title: "Irish VAT Built In",
      description: "Automatic calculation at 23%, 13.5%, 9%, or 0%. Revenue-ready from day one.",
      stat: "100% compliant",
    },
    {
      icon: Users,
      title: "Customer Database",
      description: "Save customer details once. Two taps and they're pre-filled on future invoices.",
      stat: "Save 5+ min/invoice",
    },
    {
      icon: CreditCard,
      title: "Payment Tracking",
      description: "See who's paid and who owes you at a glance. No more digging through emails.",
      stat: "Real-time status",
    },
    {
      icon: FileText,
      title: "PDF Export & Email",
      description: "Send professional PDF invoices directly from the app. In their inbox in seconds.",
      stat: "Instant delivery",
    },
    {
      icon: Search,
      title: "Invoice History",
      description: "All invoices stored and searchable. Tax time? Pull up any invoice instantly.",
      stat: "Never lose one",
    },
  ];

  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            TradeTime does one thing—invoicing—and does it brilliantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-2xl p-6 lg:p-8 hover:bg-navy-700 transition-colors"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <p className="text-orange-400 font-medium text-sm">{feature.stat}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/features" className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center gap-2">
            See all features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Set Up Your Business",
      description: "Enter your business details once. 2-3 minutes and you're done forever.",
      time: "One time",
    },
    {
      number: "2",
      title: "Add Your Customer",
      description: "Enter their details or select from your saved customers list.",
      time: "30 seconds",
    },
    {
      number: "3",
      title: "Create & Send",
      description: "Add line items, VAT calculates automatically, hit send. Done.",
      time: "60 seconds",
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
            Three steps. Five minutes setup. Professional invoices for life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <p className="text-sm text-orange-600 font-medium">{step.time}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
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

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Up to 3 clients",
        "5 invoices per month",
        "Basic invoice templates",
        "Irish VAT calculation",
        "PDF export",
        "Email support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "€15",
      period: "/month",
      description: "For growing trade businesses",
      features: [
        "Unlimited clients",
        "Unlimited invoices",
        "Custom branding & logo",
        "Payment reminders",
        "Invoice analytics",
        "Priority support",
        "Export for accountant",
        "Recurring invoices",
      ],
      cta: "Start 14-Day Trial",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "bg-navy-900 text-white ring-4 ring-orange-500"
                  : "bg-gray-50 text-navy-900"
              }`}
            >
              {plan.popular && (
                <div className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.popular ? "text-gray-300" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>
              <p className={`mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-orange-400" : "text-green-500"}`} />
                    <span className={plan.popular ? "text-gray-200" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/signup"
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

        <p className="text-center text-gray-500 mt-8">
          All plans include Irish VAT compliance. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "I used to spend Sunday evenings doing invoices. Now I send them from the van before I leave the job. Genuinely changed how I run my business.",
      name: "Mick O'Brien",
      business: "O'Brien Electrical",
      location: "Cork",
    },
    {
      quote: "Customers comment on how professional my invoices look now. Before, I was using Word templates that looked like they were from 1995.",
      name: "Sarah Dunne",
      business: "SD Plumbing & Heating",
      location: "Dublin",
    },
    {
      quote: "The VAT calculation alone is worth it. I was always second-guessing myself on the rates. Now it's automatic and I know it's right.",
      name: "Paddy Fitzgerald",
      business: "Fitzgerald Building Services",
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
            Join hundreds of electricians, plumbers, and builders who&apos;ve simplified their invoicing.
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
                <p className="text-gray-500 text-sm">{testimonial.business}, {testimonial.location}</p>
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
      question: "Is TradeTime free?",
      answer: "Yes, there's a free tier with up to 3 clients and 5 invoices per month. It's enough to try it properly. Paid plans start at €15/month for unlimited everything.",
    },
    {
      question: "Do I need to be VAT registered?",
      answer: "No. TradeTime works for both VAT-registered and non-VAT-registered businesses. If you're not registered, just leave that field blank.",
    },
    {
      question: "Does it work offline?",
      answer: "TradeTime works best with an internet connection. You can view previously loaded invoices offline, and changes sync when you reconnect.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes. All data is encrypted and stored on EU servers. We're GDPR compliant and your data is never sold to third parties.",
    },
    {
      question: "Can I switch from Excel/Word?",
      answer: "Absolutely. Most users switch in under 5 minutes. You add customers as you go—no complicated import needed.",
    },
    {
      question: "What Irish VAT rates are supported?",
      answer: "All of them: 23% (standard), 13.5% (reduced for construction/RCT), 9% (hospitality), and 0% (zero-rated). Select the service type and it applies automatically.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about TradeTime.
          </p>
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
          Ready to invoice like a pro?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Join hundreds of Irish tradespeople who&apos;ve ditched the paperwork. 
          Free to start, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="btn-primary text-lg px-8 py-4">
            Create Your First Invoice
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
          <span>✓ Free to start</span>
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
        </div>
        <p className="mt-8 text-gray-500">
          🇮🇪 Built in Ireland, for Irish tradespeople
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
