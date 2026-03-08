import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, User, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// Blog post data
const blogPosts: Record<string, BlogPost> = {
  "invoice-software-irish-tradespeople-guide": {
    title: "Invoice Software for Irish Tradespeople: Complete Guide",
    description: "Discover the best invoice software options for Irish tradespeople. Compare features, VAT compliance, pricing, and find the right solution for your trade business.",
    author: "TradeTime Team",
    date: "January 2025",
    readTime: "7 min read",
    content: `
      <p class="lead">If you're an Irish tradesperson still using Word templates, Excel spreadsheets, or handwritten invoices, you're not alone. But you are leaving money on the table — and spending hours on paperwork that could be automated.</p>

      <p>This guide breaks down everything you need to know about invoice software for Irish trades, including what features actually matter, how to stay compliant with Irish VAT rules, and which options are worth your money in 2025.</p>

      <h2>Why Tradespeople Need Dedicated Invoice Software</h2>

      <p>Generic accounting software like Sage or QuickBooks works well for office-based businesses. But tradespeople have different needs:</p>

      <ul>
        <li><strong>Mobile-first:</strong> You're on-site, not behind a desk. You need to create invoices from your phone or tablet</li>
        <li><strong>Speed matters:</strong> After a long day on-site, the last thing you want is 30 minutes of paperwork</li>
        <li><strong>Irish VAT compliance:</strong> Multiple VAT rates (13.5%, 23%), RCT considerations, and Revenue-ready formatting</li>
        <li><strong>Professional appearance:</strong> Your invoice is often the last impression you leave with a customer</li>
      </ul>

      <h2>Essential Features for Trade Invoicing</h2>

      <p>When evaluating invoice software, focus on these features:</p>

      <h3>1. Irish VAT Calculation</h3>
      <p>Construction services typically attract 13.5% VAT, while materials sold separately are 23%. Good software handles this automatically based on service type. Look for software that understands the two-thirds rule and can apply the correct rates without you thinking about it.</p>

      <h3>2. Mobile App</h3>
      <p>Can you create and send an invoice from your van? If not, you'll fall behind on invoicing. The best trade invoice apps let you complete an invoice in under 60 seconds on your phone.</p>

      <h3>3. Customer Database</h3>
      <p>Repeat customers shouldn't require re-entering details. Once saved, selecting a customer should auto-fill their name, address, email, and any specific payment terms.</p>

      <h3>4. PDF Generation and Email</h3>
      <p>Customers expect professional PDF invoices in their inbox. Manual processes — printing, scanning, emailing — waste time and look unprofessional.</p>

      <h3>5. Payment Tracking</h3>
      <p>Knowing who's paid and who owes you shouldn't require a spreadsheet. Good software shows payment status at a glance and lets you send reminders with one tap.</p>

      <h2>Popular Options for Irish Tradespeople</h2>

      <p>Here's how the main options stack up:</p>

      <h3>TradeTime</h3>
      <p>Built specifically for Irish tradespeople. 60-second invoices, Irish VAT rates built in, mobile-first design. Free tier available with unlimited invoices at €15/month. The standout feature is speed — most users create invoices in under a minute.</p>

      <h3>Xero</h3>
      <p>Powerful accounting software with good invoicing features. €20+/month. Better suited if you need full accounts, but can be overkill for sole traders who just need invoicing.</p>

      <h3>Sage</h3>
      <p>Established Irish presence. Good for larger operations with employees and complex payroll needs. The invoicing features work but aren't designed for speed.</p>

      <h3>Word/Excel Templates</h3>
      <p>Free, but time-consuming and error-prone. No payment tracking, no automatic VAT calculation, and invoices often look unprofessional.</p>

      <h2>VAT Compliance Checklist</h2>

      <p>Your invoices must include:</p>

      <ul>
        <li>Your business name and address</li>
        <li>Your VAT registration number (if registered)</li>
        <li>Customer's name and address</li>
        <li>Invoice number (sequential)</li>
        <li>Date of issue</li>
        <li>Description of goods/services</li>
        <li>VAT rate(s) applied</li>
        <li>VAT amount</li>
        <li>Total including VAT</li>
      </ul>

      <p>Good invoice software handles all of this automatically.</p>

      <h2>Making the Switch</h2>

      <p>Switching from manual invoicing takes about 5 minutes with most modern software. You don't need to import old data — just start fresh and add customers as you invoice them.</p>

      <p>The key is starting. Every day you delay is another day spent on paperwork that could be automated.</p>
    `,
  },
  "how-to-quote-jobs-tradesperson-ireland": {
    title: "How to Quote Jobs as a Tradesperson in Ireland",
    description: "Learn how to create professional quotes that win more work. Pricing strategies, what to include, and tips for Irish electricians, plumbers, and builders.",
    author: "TradeTime Team",
    date: "January 2025",
    readTime: "8 min read",
    content: `
      <p class="lead">A good quote does more than state a price. It shows professionalism, sets clear expectations, and gives the customer confidence to choose you over the competition. Here's how to quote jobs like a pro.</p>

      <h2>The Basics: What Every Quote Needs</h2>

      <p>A professional quote should include:</p>

      <ul>
        <li><strong>Your business details:</strong> Name, address, phone, email, VAT number if registered</li>
        <li><strong>Customer details:</strong> Name and site address</li>
        <li><strong>Date and validity period:</strong> "Valid for 30 days" protects you from price changes</li>
        <li><strong>Detailed scope of work:</strong> Be specific about what's included</li>
        <li><strong>Itemised pricing:</strong> Labour, materials, VAT breakdown</li>
        <li><strong>Payment terms:</strong> When payment is due, accepted methods</li>
        <li><strong>Timeline:</strong> Expected start date and duration</li>
      </ul>

      <h2>Fixed Price vs. Day Rate: Which to Use</h2>

      <h3>Fixed Price Quotes</h3>
      <p>Best for defined jobs where you can accurately estimate time and materials. Customers love them because they know the total upfront. The risk is on you if the job takes longer.</p>

      <p><strong>Use for:</strong> Standard installations, defined renovation work, routine repairs</p>

      <h3>Day Rate / Time and Materials</h3>
      <p>Better for jobs with unknowns — renovation work where you might find surprises, emergency callouts, or ongoing maintenance. Less risk for you, but customers may prefer a cap.</p>

      <p><strong>Use for:</strong> Diagnostic work, renovation with unknowns, ongoing maintenance contracts</p>

      <h2>Pricing Strategies That Work</h2>

      <h3>Know Your Costs</h3>
      <p>Before quoting, calculate your true costs:</p>

      <ul>
        <li><strong>Materials:</strong> Wholesale cost plus markup (typically 15-25%)</li>
        <li><strong>Labour:</strong> Your hourly/daily rate, including time for travel</li>
        <li><strong>Overheads:</strong> Van costs, tools, insurance, phone, etc.</li>
        <li><strong>Profit margin:</strong> You're running a business, not a charity</li>
      </ul>

      <h3>The Three-Quote Rule</h3>
      <p>Many customers get three quotes. Being the cheapest isn't always winning — often it raises suspicion. Being mid-range with better presentation often wins over being cheapest with a scribbled note.</p>

      <h3>Anchor with Options</h3>
      <p>Offering three tiers (basic, standard, premium) helps customers feel in control and often pushes them toward the middle option. Example for a bathroom refit:</p>

      <ul>
        <li><strong>Basic:</strong> Standard fixtures, vinyl flooring — €X</li>
        <li><strong>Standard:</strong> Quality fixtures, tile flooring, heated rail — €Y</li>
        <li><strong>Premium:</strong> High-end fixtures, underfloor heating, premium tiles — €Z</li>
      </ul>

      <h2>Writing Scope of Work That Protects You</h2>

      <p>Be specific. Vague quotes lead to disputes. Instead of "Rewire house," write:</p>

      <blockquote>
        "Full rewire of 3-bed semi-detached property including:
        <br>- New consumer unit (RCBO protection)
        <br>- All new wiring to current regulations
        <br>- 12 double sockets, 8 light points, 2 external lights
        <br>- Certification and notification to Building Control
        <br><br>
        Excludes: Making good (plastering/decorating), moving furniture, floor lifting"
      </blockquote>

      <p>That last line matters. Explicitly stating what's excluded prevents misunderstandings.</p>

      <h2>Follow-Up: Don't Just Send and Forget</h2>

      <p>Most tradespeople lose jobs not because of price, but because they didn't follow up. After sending a quote:</p>

      <ul>
        <li>Call or text after 2-3 days: "Just checking you received the quote — any questions?"</li>
        <li>If no response after a week, follow up once more</li>
        <li>If you don't get the job, politely ask why — it's valuable feedback</li>
      </ul>

      <h2>Converting Quotes to Invoices</h2>

      <p>When the job's done, your invoice should match your quote. Using software like TradeTime, you can convert an accepted quote directly into an invoice — no retyping required.</p>

      <p>The faster you invoice after completing work, the faster you get paid. Ideally, send the invoice before you leave the site.</p>
    `,
  },
  "vat-irish-tradespeople-guide": {
    title: "VAT for Irish Tradespeople: What You Need to Know",
    description: "Complete guide to VAT for Irish tradespeople. Learn about 13.5% vs 23% rates, the two-thirds rule, registration thresholds, and how to invoice correctly.",
    author: "TradeTime Team",
    date: "January 2025",
    readTime: "9 min read",
    content: `
      <p class="lead">VAT is one of the most confusing aspects of running a trades business in Ireland. Different rates for different services, the two-thirds rule, reverse charge VAT — it's enough to make your head spin. This guide explains it in plain English.</p>

      <h2>The Three VAT Rates You'll Use</h2>

      <p>As a tradesperson, you'll mainly deal with three rates:</p>

      <h3>13.5% — The Reduced Rate</h3>
      <p>This is the rate most tradespeople charge most of the time. It applies to:</p>

      <ul>
        <li>Construction services (building, renovating, extending)</li>
        <li>Plumbing, electrical, and heating work</li>
        <li>Plastering, painting, decorating</li>
        <li>Roofing, tiling, flooring</li>
        <li>Kitchen and bathroom fitting</li>
        <li>Any work on "immovable property" (attached to land or buildings)</li>
      </ul>

      <h3>23% — The Standard Rate</h3>
      <p>This applies to:</p>

      <ul>
        <li>Supply of goods only (selling materials without fitting)</li>
        <li>Professional/consultancy services (design, surveying)</li>
        <li>Equipment hire</li>
        <li>Services not connected to immovable property</li>
      </ul>

      <h3>0% — Zero Rate</h3>
      <p>Rare for most tradespeople, but applies to certain exports and specific exempt supplies.</p>

      <h2>The Two-Thirds Rule</h2>

      <p>Here's where it gets interesting. If you supply both goods (materials) and services (labour) together, and the goods make up more than two-thirds of the total value, you must charge 23% VAT on the entire invoice.</p>

      <p><strong>Example:</strong> You fit a new boiler. The boiler costs €2,000 and your labour is €500. The goods are 80% of the total — more than two-thirds. You charge 23% on everything.</p>

      <p><strong>Alternative approach:</strong> Issue two invoices — one for the boiler (23% VAT), one for installation (13.5% VAT). More paperwork, but can save your customer money.</p>

      <h2>Do You Need to Register for VAT?</h2>

      <p>You must register for VAT if your turnover exceeds:</p>

      <ul>
        <li><strong>€37,500</strong> for services (most trade work)</li>
        <li><strong>€75,000</strong> for goods (if you're mainly selling products)</li>
      </ul>

      <p>These are annual thresholds. If you're approaching them, register before you exceed — not after.</p>

      <h3>Should You Register Voluntarily?</h3>

      <p>You can register even below the threshold. Benefits include:</p>

      <ul>
        <li>Reclaim VAT on materials, tools, van costs, etc.</li>
        <li>Appear more professional to business customers</li>
        <li>Required for some commercial contracts</li>
      </ul>

      <p>Downsides: more paperwork, your prices effectively increase for residential customers by 13.5%.</p>

      <h2>What Must Be on a VAT Invoice?</h2>

      <p>A valid VAT invoice must include:</p>

      <ul>
        <li>Your business name and address</li>
        <li>Your VAT registration number</li>
        <li>Customer's name and address</li>
        <li>Sequential invoice number</li>
        <li>Date of issue</li>
        <li>Description of goods/services</li>
        <li>Quantity and unit price (excluding VAT)</li>
        <li>VAT rate(s) applied</li>
        <li>Total VAT amount</li>
        <li>Total amount including VAT</li>
      </ul>

      <h2>VAT Returns and Payment</h2>

      <p>Most small businesses file VAT returns every two months. You'll pay VAT on your sales (output VAT) minus VAT on your purchases (input VAT).</p>

      <p>Keep good records. You need to store invoices for six years. Using invoice software makes this automatic — every invoice is saved and searchable.</p>

      <h2>Common Mistakes to Avoid</h2>

      <ul>
        <li><strong>Wrong rate:</strong> Charging 23% when 13.5% applies (or vice versa)</li>
        <li><strong>Missing details:</strong> Invoices without VAT number or breakdown</li>
        <li><strong>Not understanding two-thirds rule:</strong> Can lead to under/over charging</li>
        <li><strong>Late registration:</strong> Revenue can backdate and charge penalties</li>
      </ul>

      <h2>Simplify with Software</h2>

      <p>Good invoice software like TradeTime has Irish VAT rates built in. Select your service type, and the correct rate applies automatically. No more guessing or googling "what VAT rate for bathroom tiling."</p>
    `,
  },
  "rct-relevant-contracts-tax-subcontractors": {
    title: "RCT (Relevant Contracts Tax) Explained for Subcontractors",
    description: "Everything Irish subcontractors need to know about RCT. Registration, the three tax rates, how deductions work, and staying compliant with Revenue.",
    author: "TradeTime Team",
    date: "January 2025",
    readTime: "8 min read",
    content: `
      <p class="lead">If you work as a subcontractor in Irish construction, you've encountered RCT — Relevant Contracts Tax. It's the system where principal contractors deduct tax from your payments before you receive them. Here's how it works.</p>

      <h2>What Is RCT?</h2>

      <p>Relevant Contracts Tax is a withholding tax for the construction industry. When a principal contractor (the person who hired you) pays you for work, they deduct RCT at a set rate and send that directly to Revenue.</p>

      <p>Think of it like PAYE for the self-employed. Revenue collects tax at source rather than waiting for you to file a return.</p>

      <h2>The Three RCT Rates</h2>

      <p>The rate deducted depends on your tax compliance history:</p>

      <h3>0% — Zero Rate</h3>
      <p>No deduction. You receive full payment. To qualify:</p>
      <ul>
        <li>Good compliance history with Revenue</li>
        <li>Tax affairs fully up to date</li>
        <li>Been in business for at least 3 years</li>
        <li>No outstanding returns or liabilities</li>
      </ul>

      <h3>20% — Standard Rate</h3>
      <p>Most subcontractors fall here. You're registered, tax affairs are generally compliant, but you haven't met all criteria for 0%.</p>

      <h3>35% — Higher Rate</h3>
      <p>Applied if:</p>
      <ul>
        <li>You're not registered for RCT</li>
        <li>Outstanding tax returns</li>
        <li>Poor compliance history</li>
        <li>Revenue can't verify your details</li>
      </ul>

      <p><strong>Important:</strong> RCT isn't extra tax. It's an advance payment against your income tax liability. When you file your annual return, RCT deducted is offset against tax owed.</p>

      <h2>Who Needs to Register?</h2>

      <p>You need to register for RCT if you're a subcontractor doing construction work for a principal contractor. This includes:</p>

      <ul>
        <li>Electricians, plumbers, carpenters, plasterers, painters</li>
        <li>Roofers, tilers, bricklayers</li>
        <li>Any tradesperson hired by a builder, developer, or main contractor</li>
      </ul>

      <p>If you only work directly for homeowners (not through a contractor), RCT doesn't apply to those jobs.</p>

      <h2>How the Process Works</h2>

      <ol>
        <li><strong>You complete work</strong> for a principal contractor</li>
        <li><strong>You submit your invoice</strong> with your RCT details</li>
        <li><strong>The contractor logs into ROS</strong> and notifies Revenue of the payment</li>
        <li><strong>Revenue confirms your rate</strong> (0%, 20%, or 35%)</li>
        <li><strong>The contractor pays you</strong> minus the RCT deduction</li>
        <li><strong>The contractor sends the deduction</strong> to Revenue on your behalf</li>
      </ol>

      <h2>Getting to 0% Rate</h2>

      <p>The 0% rate is the goal. Here's how to get there:</p>

      <ul>
        <li>File all tax returns on time (Income Tax, VAT, RCT, PRCR)</li>
        <li>Pay all tax liabilities when due</li>
        <li>Maintain a clean compliance record for 3+ years</li>
        <li>Keep your ROS profile up to date</li>
      </ul>

      <p>Revenue reviews your status periodically. Maintain compliance and you'll move up; slip, and you'll move down.</p>

      <h2>Your Invoice Requirements</h2>

      <p>When invoicing a principal contractor, include:</p>

      <ul>
        <li>Your name/business name and address</li>
        <li>Tax reference number</li>
        <li>VAT number (if registered)</li>
        <li>Description of work completed</li>
        <li>Amount due (before RCT deduction)</li>
      </ul>

      <h2>Common RCT Mistakes</h2>

      <ul>
        <li><strong>Not registering:</strong> Results in automatic 35% rate</li>
        <li><strong>Wrong details on invoice:</strong> Delays payment verification</li>
        <li><strong>Forgetting to claim back:</strong> RCT deducted reduces your tax bill — make sure to include it in your annual return</li>
        <li><strong>Missing returns:</strong> One late return can bump you from 0% to 20%</li>
      </ul>

      <h2>Tracking RCT Payments</h2>

      <p>Keep records of all RCT deductions. Your principal contractor should give you a deduction summary. At year-end, total deductions offset your tax liability.</p>

      <p>Using invoice software helps — you can track which payments had RCT deducted and ensure nothing's missed when filing returns.</p>
    `,
  },
  "getting-paid-faster-invoice-tips-tradespeople": {
    title: "Getting Paid Faster: Invoice Tips for Tradespeople",
    description: "Practical tips for Irish tradespeople to get paid faster. When to invoice, how to follow up, payment terms, and dealing with late payers.",
    author: "TradeTime Team",
    date: "January 2025",
    readTime: "7 min read",
    content: `
      <p class="lead">Cash flow is the lifeblood of any trade business. Yet many tradespeople wait weeks or months to get paid — often because of invoicing habits that are easy to fix. Here's how to get paid faster.</p>

      <h2>Invoice Immediately</h2>

      <p>The single biggest factor in getting paid quickly? When you send the invoice.</p>

      <p>Studies show invoices sent on the day of completion get paid 30% faster than those sent a week later. Why? The customer's memory is fresh, the value you provided is clear, and there's no "out of sight, out of mind."</p>

      <p><strong>Best practice:</strong> Send the invoice before you leave the site. With mobile invoice software, this takes 60 seconds.</p>

      <h2>Make Payment Easy</h2>

      <p>Remove friction from the payment process:</p>

      <ul>
        <li><strong>Bank transfer details:</strong> Include IBAN and BIC prominently</li>
        <li><strong>Card payments:</strong> Consider accepting cards via SumUp, Square, or Stripe</li>
        <li><strong>Clear instructions:</strong> "Pay by bank transfer to: [details]" is better than hiding payment info</li>
        <li><strong>Multiple options:</strong> Some customers prefer cash, others bank transfer, others card</li>
      </ul>

      <h2>Set Clear Payment Terms</h2>

      <p>Your invoice should state when payment is due:</p>

      <ul>
        <li><strong>"Due on receipt"</strong> — payment expected immediately</li>
        <li><strong>"Net 7"</strong> — due within 7 days</li>
        <li><strong>"Net 14"</strong> — due within 14 days</li>
        <li><strong>"Net 30"</strong> — due within 30 days</li>
      </ul>

      <p>For residential customers, "due on receipt" or "due within 7 days" is standard. Commercial customers may expect Net 30, but you can negotiate.</p>

      <p><strong>Pro tip:</strong> Shorter terms mean faster payment. If you don't specify, customers assume they have unlimited time.</p>

      <h2>The Power of a Deposit</h2>

      <p>For larger jobs, request a deposit upfront:</p>

      <ul>
        <li><strong>30-50% upfront</strong> for jobs over €1,000</li>
        <li><strong>Material costs covered</strong> before ordering expensive items</li>
        <li><strong>Staged payments</strong> for multi-week projects</li>
      </ul>

      <p>Deposits protect your cash flow and show customer commitment. Serious customers don't mind; those who do might be trouble anyway.</p>

      <h2>Follow Up Professionally</h2>

      <p>Most late payments aren't malicious — people forget, lose emails, or genuinely overlook invoices. A polite follow-up usually does the trick:</p>

      <h3>Day 1-3 overdue</h3>
      <p>Quick text or email: "Hi [name], just checking you received my invoice for the [work description]. Let me know if you have any questions."</p>

      <h3>7 days overdue</h3>
      <p>Phone call: "Hi [name], following up on invoice #X sent on [date]. The total was €X and it's now a week past due. Can we sort payment today?"</p>

      <h3>14+ days overdue</h3>
      <p>Firmer email: "This is a reminder that invoice #X for €X is now [X] days overdue. Please arrange payment within 7 days to avoid further action."</p>

      <h2>Use Technology to Your Advantage</h2>

      <p>Modern invoice software offers features that speed up payment:</p>

      <ul>
        <li><strong>Automatic reminders:</strong> Software sends follow-ups so you don't have to</li>
        <li><strong>Payment tracking:</strong> See who's paid at a glance</li>
        <li><strong>Read receipts:</strong> Know when your invoice has been opened</li>
        <li><strong>Online payment links:</strong> Let customers pay with one click</li>
      </ul>

      <h2>Dealing with Persistent Late Payers</h2>

      <p>Some customers are always late. Options include:</p>

      <ul>
        <li><strong>Payment upfront:</strong> "Based on previous experience, I require full payment before starting work"</li>
        <li><strong>Stop extending credit:</strong> Cash on completion only</li>
        <li><strong>Late payment fees:</strong> EU law allows 8% interest plus €40 compensation for late B2B payments</li>
        <li><strong>Fire them:</strong> Some customers aren't worth the hassle</li>
      </ul>

      <h2>Prevention Is Better Than Cure</h2>

      <p>The best approach is avoiding payment problems in the first place:</p>

      <ul>
        <li>Clear quotes with payment terms stated upfront</li>
        <li>Deposits on larger jobs</li>
        <li>Invoice immediately upon completion</li>
        <li>Professional, detailed invoices that are easy to process</li>
        <li>Multiple payment options</li>
      </ul>

      <p>Good invoicing habits don't just speed up payment — they project professionalism that wins more work in the first place.</p>
    `,
  },
};

interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found | TradeTime Blog",
    };
  }

  return {
    title: `${post.title} | TradeTime Blog`,
    description: post.description,
    keywords: `${post.title.toLowerCase()}, Irish tradespeople, invoice software Ireland, tradesperson tips`,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "en_IE",
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 pb-16">
      {/* Header */}
      <header className="bg-navy-50 py-12 md:py-16">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg prose-navy max-w-none
              prose-headings:text-navy-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-li:text-gray-700
              prose-strong:text-navy-900
              prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-navy-900 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to simplify your invoicing?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              TradeTime is built specifically for Irish tradespeople. Create professional, VAT-compliant invoices in under 60 seconds.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Free to start. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
