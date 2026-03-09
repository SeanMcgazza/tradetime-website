"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  FileText,
  CreditCard,
  Users,
  Settings,
  HelpCircle,
  BookOpen,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
  Clock,
} from "lucide-react";

const categories = [
  {
    id: "getting-started",
    icon: BookOpen,
    title: "Getting Started",
    description: "New to TradeTime? Start here",
    articles: [
      {
        title: "Creating your first invoice",
        content:
          "Creating an invoice in TradeTime takes under 60 seconds. Simply tap 'New Invoice', select or add a client, add your line items (labour, materials, etc.), set your VAT rate, and hit send. Your client receives a professional PDF invoice instantly via email.",
      },
      {
        title: "Setting up your business profile",
        content:
          "Go to Settings → Business Profile to add your business name, address, logo, and VAT number. This information appears on all your invoices and quotes. Make sure your VAT number is correct for Revenue compliance.",
      },
      {
        title: "Adding your first client",
        content:
          "Tap 'Clients' → 'Add Client' to save a new customer. Enter their name, email, phone, and address. Once saved, you can quickly select them when creating invoices. Their details auto-fill, saving you time on repeat jobs.",
      },
      {
        title: "Understanding the dashboard",
        content:
          "Your dashboard shows key metrics at a glance: unpaid invoices, this month's revenue, and recent activity. Use the quick action buttons to create invoices, quotes, or add clients without navigating through menus.",
      },
    ],
  },
  {
    id: "invoicing",
    icon: FileText,
    title: "Invoicing",
    description: "Create and manage invoices",
    articles: [
      {
        title: "How VAT works on invoices",
        content:
          "TradeTime automatically calculates VAT at your selected rate (23%, 13.5%, 9%, or 0% for exempt items). If you're not VAT registered, you can disable VAT in Settings. The VAT breakdown appears clearly on your invoices for your clients.",
      },
      {
        title: "Sending invoices by email",
        content:
          "When you finish an invoice, tap 'Send' to email it directly to your client. They receive a professional PDF with your branding. You can also download the PDF to send via WhatsApp or print for those who prefer paper.",
      },
      {
        title: "Marking invoices as paid",
        content:
          "When a client pays, find the invoice and tap 'Mark as Paid'. You can record partial payments too. TradeTime keeps track of outstanding balances so you always know who owes what.",
      },
      {
        title: "Creating recurring invoices",
        content:
          "For regular maintenance contracts, you can set up recurring invoices. Go to the invoice and select 'Make Recurring'. Choose weekly, monthly, or custom intervals. TradeTime will automatically generate and optionally send these invoices.",
      },
      {
        title: "Adding discounts to invoices",
        content:
          "You can add percentage or fixed discounts to individual line items or the entire invoice. This is useful for loyal customers or promotional pricing. The discount is clearly shown on the invoice.",
      },
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Track payments and manage billing",
    articles: [
      {
        title: "Tracking overdue payments",
        content:
          "The 'Overdue' tab shows all unpaid invoices past their due date. You can send payment reminders with one tap. TradeTime can also send automatic reminders at intervals you choose.",
      },
      {
        title: "Payment reminder emails",
        content:
          "To send a reminder, open an overdue invoice and tap 'Send Reminder'. The client receives a friendly email with the invoice attached. You can customise the reminder message in Settings.",
      },
      {
        title: "Exporting for your accountant",
        content:
          "Go to Reports → Export to download all your invoices and payments in CSV or PDF format. This is perfect for sharing with your accountant at tax time. Filter by date range to get exactly what you need.",
      },
      {
        title: "Understanding your revenue reports",
        content:
          "The Reports section shows your income over time, broken down by paid and unpaid invoices. You can see trends, identify your best months, and forecast cash flow.",
      },
    ],
  },
  {
    id: "clients",
    icon: Users,
    title: "Managing Clients",
    description: "Organise your customer base",
    articles: [
      {
        title: "Importing existing clients",
        content:
          "If you have clients in a spreadsheet, you can import them via Settings → Import Clients. Upload a CSV file with columns for name, email, phone, and address. TradeTime maps the fields automatically.",
      },
      {
        title: "Viewing client history",
        content:
          "Tap any client to see their complete history: all invoices, quotes, total spend, and payment record. This helps you understand your relationship and spot your best customers.",
      },
      {
        title: "Adding notes to clients",
        content:
          "Add private notes to any client profile. Record things like gate codes, preferred contact times, or special requirements. These notes are only visible to you, not on invoices.",
      },
    ],
  },
  {
    id: "account",
    icon: Settings,
    title: "Account & Settings",
    description: "Manage your TradeTime account",
    articles: [
      {
        title: "Changing your subscription",
        content:
          "Go to Settings → Subscription to view your current plan, upgrade to Pro, or manage payment methods. Changes take effect immediately. You can cancel anytime with no penalties.",
      },
      {
        title: "Customising invoice templates",
        content:
          "Pro users can customise invoice colours, add their logo, and modify the layout. Go to Settings → Invoice Template to make your invoices match your brand.",
      },
      {
        title: "Managing team members",
        content:
          "Pro accounts can invite team members with different permission levels. Go to Settings → Team to add users. You control what each person can see and do.",
      },
      {
        title: "Securing your account",
        content:
          "Protect your account with a strong password. We recommend enabling two-factor authentication in Settings → Security for extra protection. TradeTime encrypts all your data.",
      },
    ],
  },
];

const popularQuestions = [
  {
    question: "Is TradeTime free to use?",
    answer:
      "Yes! TradeTime is free to start with up to 5 invoices per month. For unlimited invoices and premium features like custom branding and team accounts, check out our Pro plan.",
  },
  {
    question: "Can I use TradeTime on my phone?",
    answer:
      "Absolutely. TradeTime is fully mobile-responsive and works great on any smartphone or tablet. Create invoices on-site, right after finishing a job. No app download required.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use bank-level encryption and are fully GDPR compliant. Your data is stored securely in EU data centres. We never share your information with third parties.",
  },
  {
    question: "Can I add my logo to invoices?",
    answer:
      "Yes! Go to Settings → Business Profile to upload your logo. It will appear on all invoices and quotes. Pro users can further customise colours and layouts.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Go to Settings → Subscription → Cancel. Your access continues until the end of your billing period. Your data is kept for 30 days in case you change your mind.",
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("getting-started");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredCategories = searchQuery
    ? categories
        .map((cat) => ({
          ...cat,
          articles: cat.articles.filter(
            (article) =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.content.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.articles.length > 0)
    : categories;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-navy-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Help Centre
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers, guides, and tips to get the most out of TradeTime.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={() => {
                  setExpandedCategory(cat.id);
                  setSearchQuery("");
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-orange-100 rounded-lg text-gray-700 hover:text-orange-600 transition-colors"
              >
                <cat.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{cat.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Categories & Articles */}
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.id ? null : category.id
                      )
                    }
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl font-semibold text-navy-900">
                          {category.title}
                        </h2>
                        <p className="text-gray-500 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {expandedCategory === category.id && (
                    <div className="px-6 pb-6 space-y-3">
                      {category.articles.map((article, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg border border-gray-200"
                        >
                          <button
                            onClick={() =>
                              setExpandedArticle(
                                expandedArticle === `${category.id}-${index}`
                                  ? null
                                  : `${category.id}-${index}`
                              )
                            }
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-navy-900 text-left">
                              {article.title}
                            </span>
                            {expandedArticle === `${category.id}-${index}` ? (
                              <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          {expandedArticle === `${category.id}-${index}` && (
                            <div className="px-4 pb-4">
                              <p className="text-gray-600 leading-relaxed">
                                {article.content}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {searchQuery && filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 mb-4">
                  We couldn&apos;t find anything matching &quot;{searchQuery}&quot;
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {popularQuestions.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-navy-900 text-left">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still need help? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-8">
              Still need help?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  Contact Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us a message and we&apos;ll get back to you within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                >
                  Contact us <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-4">
                  Chat with our support team. Available Mon-Fri, 9am-6pm Irish time.
                </p>
                <p className="inline-flex items-center gap-2 text-gray-500 font-medium">
                  <Clock className="w-4 h-4" />
                  Available during business hours
                </p>
              </div>
            </div>
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
            Join hundreds of Irish tradespeople using TradeTime.
          </p>
          <Link
            href="https://app.tradetime.ie/signup"
            className="btn-primary text-lg px-8 py-4"
          >
            Start Free Today
          </Link>
        </div>
      </section>
    </>
  );
}
