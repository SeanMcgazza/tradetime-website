import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | TradeTime - Tips for Irish Tradespeople",
  description: "Practical guides for Irish electricians, plumbers, and builders. VAT tips, invoicing advice, RCT explained, and more.",
  keywords: "Irish tradespeople blog, tradesperson tips Ireland, VAT guide Ireland, RCT explained, invoicing tips",
  openGraph: {
    title: "TradeTime Blog - Tips for Irish Tradespeople",
    description: "Practical guides for Irish electricians, plumbers, and builders.",
    type: "website",
    locale: "en_IE",
  },
};

const blogPosts = [
  {
    slug: "best-job-management-apps-irish-plumbers-2026",
    title: "Best Job Management Apps for Irish Plumbers 2026",
    description: "Compare the top job management apps for Irish plumbers in 2026. Features, pricing, mobile capabilities, and which app is right for your plumbing business.",
    date: "January 2026",
    readTime: "9 min read",
    category: "Tools & Apps",
  },
  {
    slug: "track-expenses-self-employed-tradesperson-ireland",
    title: "How to Track Expenses as a Self-Employed Tradesperson in Ireland",
    description: "Complete guide to tracking business expenses as a self-employed tradesperson in Ireland. What's deductible, how to keep records, and tools to make it easy.",
    date: "January 2026",
    readTime: "10 min read",
    category: "Tax & Compliance",
  },
  {
    slug: "invoice-software-irish-tradespeople-guide",
    title: "Invoice Software for Irish Tradespeople: Complete Guide",
    description: "Discover the best invoice software options for Irish tradespeople. Compare features, VAT compliance, pricing, and find the right solution for your trade business.",
    date: "January 2025",
    readTime: "7 min read",
    category: "Invoicing",
  },
  {
    slug: "how-to-quote-jobs-tradesperson-ireland",
    title: "How to Quote Jobs as a Tradesperson in Ireland",
    description: "Learn how to create professional quotes that win more work. Pricing strategies, what to include, and tips for Irish electricians, plumbers, and builders.",
    date: "January 2025",
    readTime: "8 min read",
    category: "Business Tips",
  },
  {
    slug: "vat-irish-tradespeople-guide",
    title: "VAT for Irish Tradespeople: What You Need to Know",
    description: "Complete guide to VAT for Irish tradespeople. Learn about 13.5% vs 23% rates, the two-thirds rule, registration thresholds, and how to invoice correctly.",
    date: "January 2025",
    readTime: "9 min read",
    category: "Tax & Compliance",
  },
  {
    slug: "rct-relevant-contracts-tax-subcontractors",
    title: "RCT (Relevant Contracts Tax) Explained for Subcontractors",
    description: "Everything Irish subcontractors need to know about RCT. Registration, the three tax rates, how deductions work, and staying compliant with Revenue.",
    date: "January 2025",
    readTime: "8 min read",
    category: "Tax & Compliance",
  },
  {
    slug: "getting-paid-faster-invoice-tips-tradespeople",
    title: "Getting Paid Faster: Invoice Tips for Tradespeople",
    description: "Practical tips for Irish tradespeople to get paid faster. When to invoice, how to follow up, payment terms, and dealing with late payers.",
    date: "January 2025",
    readTime: "7 min read",
    category: "Invoicing",
  },
];

export default function BlogIndex() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <header className="bg-navy-50 py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            TradeTime Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical guides for Irish electricians, plumbers, and builders. 
            VAT tips, invoicing advice, and everything you need to run your trade business.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-4">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom">
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to simplify your invoicing?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            TradeTime is built specifically for Irish tradespeople. Create professional, VAT-compliant invoices in under 60 seconds.
          </p>
          <Link
            href="https://app.tradetime.ie/signup"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
