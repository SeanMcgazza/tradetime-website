import Link from "next/link";
import { ArrowRight, Heart, Target, Users, Zap, Shield, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TradeTime | Our Story",
  description: "Learn why we built TradeTime - invoicing software designed specifically for Irish electricians, plumbers, builders, and carpenters. Built in Ireland, for Ireland.",
};

const values = [
  {
    icon: Zap,
    title: "Simple beats complex",
    description: "We believe invoicing should take seconds, not hours. Every feature we add must make things simpler, not more complicated.",
  },
  {
    icon: Target,
    title: "Built for trades, not accountants",
    description: "We're not trying to be QuickBooks. We're building the best invoicing tool specifically for tradespeople.",
  },
  {
    icon: Heart,
    title: "Respect your time",
    description: "You've already done a full day's work. Your invoicing tool shouldn't feel like a second job.",
  },
  {
    icon: Shield,
    title: "Your data, your business",
    description: "We'll never sell your data or lock you in. Export everything, cancel anytime, no tricks.",
  },
];

const timeline = [
  {
    year: "The Problem",
    title: "We saw the struggle",
    description: "Talking to electricians, plumbers, and builders, we kept hearing the same thing: 'I hate doing invoices.' Word templates, spreadsheets, handwritten notes—everyone had a system, and everyone hated it.",
  },
  {
    year: "The Insight",
    title: "Existing tools weren't built for trades",
    description: "QuickBooks? Too complicated. Generic invoice apps? Missing Irish VAT rates. Desktop software? Can't use it from the van. The tools existed, but none were designed for how tradespeople actually work.",
  },
  {
    year: "The Solution",
    title: "We built TradeTime",
    description: "A mobile-first invoicing app with Irish VAT built in. No accounting degree required. Create an invoice in under a minute, send it before you leave the job site.",
  },
  {
    year: "Today",
    title: "Helping Irish tradespeople get paid",
    description: "Hundreds of electricians, plumbers, builders, and carpenters across Ireland use TradeTime to invoice faster and look more professional. And we're just getting started.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Built in Dublin, Ireland</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              We believe invoicing shouldn&apos;t be{" "}
              <span className="text-orange-500">a second job.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              TradeTime was born from a simple observation: the people who are best at their trade 
              often struggle most with paperwork. We&apos;re here to fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-4"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm text-orange-600 font-semibold mb-1">{item.year}</p>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              &quot;To give every Irish tradesperson the tools to look professional and get paid faster—without 
              the complexity of traditional business software.&quot;
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span>500+ tradespeople</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-400" />
                <span>47 second invoices</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>100% Irish-focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              What we believe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ireland */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Why we&apos;re Ireland-first
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Most invoicing software is built in the US or UK. They treat Irish VAT as an 
                  afterthought—if they support it at all.
                </p>
                <p>
                  We built TradeTime from day one with Irish tradespeople in mind. The 13.5% construction 
                  rate isn&apos;t hidden in a sub-menu. RCT isn&apos;t something you have to Google. It just works 
                  the way you&apos;d expect.
                </p>
                <p>
                  We understand that your accountant wants VAT summaries in a specific format. We know 
                  that your customers expect Eircodes on invoices. We get it because we&apos;re here too.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <div className="text-6xl mb-4">🇮🇪</div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Built for Ireland</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>All Irish VAT rates (23%, 13.5%, 9%, 0%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>RCT-compliant invoicing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Revenue-ready VAT summaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Eircode support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Euro currency by default</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Irish support team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team (placeholder) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              A small team, focused on one thing
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We&apos;re a small, bootstrapped team based in Dublin. We don&apos;t have hundreds of features 
              or enterprise sales teams. We have one goal: make invoicing effortless for Irish tradespeople.
            </p>
            <p className="text-gray-600">
              Want to say hello? We&apos;d love to hear from you.
            </p>
            <Link href="/contact" className="text-orange-500 hover:text-orange-600 font-medium mt-4 inline-block">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to try TradeTime?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of Irish tradespeople who&apos;ve simplified their invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary text-lg px-8 py-4">
              Start Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/features" className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-navy-900">
              See Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
