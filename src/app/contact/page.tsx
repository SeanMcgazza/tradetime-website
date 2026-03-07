"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, MessageSquare, Phone, Send, CheckCircle } from "lucide-react";
import type { FormEvent } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email us",
    description: "We'll respond within 24 hours",
    contact: "hello@tradetime.ie",
    href: "mailto:hello@tradetime.ie",
  },
  {
    icon: MessageSquare,
    title: "Live chat",
    description: "Mon-Fri, 9am-6pm Irish time",
    contact: "Chat with us",
    href: "#",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in Dublin, Ireland",
    contact: "Dublin, Ireland 🇮🇪",
    href: null,
  },
];

const faqs = [
  {
    question: "How quickly do you respond?",
    answer: "We aim to respond to all emails within 24 hours. Pro users get priority support with same-day responses.",
  },
  {
    question: "Do you offer phone support?",
    answer: "Currently we offer email and live chat support. If you need to talk through something complex, we can arrange a call.",
  },
  {
    question: "Can I request a feature?",
    answer: "Absolutely! We love hearing what would make TradeTime better for you. Use the contact form and select 'Feature Request'.",
  },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
    setFormData({ name: "", email: "", subject: "general", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{method.contact}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                Send us a message
              </h2>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message sent!
                  </h3>
                  <p className="text-green-600">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 text-green-700 hover:text-green-800 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="Mick O'Brien"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="mick@example.ie"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      What&apos;s this about?
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white"
                    >
                      <option value="general">General enquiry</option>
                      <option value="support">Support / Help</option>
                      <option value="feature">Feature request</option>
                      <option value="billing">Billing question</option>
                      <option value="partnership">Partnership / Business</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                Common questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-navy-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Support Hours */}
              <div className="mt-8 bg-navy-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-navy-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Support hours</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Email:</strong> 24/7 (response within 24h)
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Live chat:</strong> Mon-Fri, 9am-6pm Irish time
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Pro users:</strong> Priority support, same-day response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Customer Support */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Already a TradeTime user?
            </h2>
            <p className="text-gray-600 mb-6">
              Log in to access the help centre, submit a support ticket, or chat with our team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="btn-secondary">
                Log in to your account
              </Link>
              <Link href="/help" className="btn-outline">
                Visit Help Centre
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to simplify your invoicing?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of Irish tradespeople who&apos;ve made the switch.
          </p>
          <Link href="/signup" className="btn-primary text-lg px-8 py-4">
            Start Free Today
          </Link>
        </div>
      </section>
    </>
  );
}
