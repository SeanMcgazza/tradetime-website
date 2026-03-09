import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, User, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// Blog post data
const blogPosts: Record<string, BlogPost> = {
  "track-mileage-tax-deductions-ireland": {
    title: "How to Track Mileage for Tax Deductions in Ireland",
    description: "Learn how Irish tradespeople can track mileage for tax deductions. Understand Revenue rules, allowable rates, and the best apps to log your business travel.",
    author: "TradeTime Team",
    date: "March 2025",
    readTime: "7 min read",
    content: `
      <p class="lead">Every kilometre you drive for work is potentially money back in your pocket at tax time. Yet most Irish tradespeople don't track their mileage properly — leaving hundreds or even thousands of euros on the table each year.</p>

      <p>This guide explains exactly how mileage deductions work for Irish tradespeople, what records you need to keep, and the easiest ways to track your business travel.</p>

      <h2>How Mileage Deductions Work in Ireland</h2>

      <p>When you use your own vehicle for business travel, you can claim a deduction against your taxable income. There are two methods:</p>

      <h3>Method 1: Civil Service Mileage Rates</h3>
      <p>You can claim a fixed rate per kilometre based on Revenue-approved civil service rates. For 2025, these are:</p>

      <ul>
        <li><strong>Up to 1,500 km:</strong> 37.95 cent per km</li>
        <li><strong>1,501 – 5,500 km:</strong> 70.00 cent per km</li>
        <li><strong>5,501 – 25,000 km:</strong> 27.55 cent per km</li>
        <li><strong>Over 25,000 km:</strong> 21.36 cent per km</li>
      </ul>

      <p>This method is simpler — you just need to track kilometres driven. No need to keep fuel receipts or calculate depreciation.</p>

      <h3>Method 2: Actual Costs</h3>
      <p>Alternatively, you can claim a proportion of your actual vehicle costs based on business use. This includes:</p>

      <ul>
        <li>Fuel</li>
        <li>Insurance</li>
        <li>Road tax</li>
        <li>Servicing and repairs</li>
        <li>Depreciation or lease costs</li>
        <li>Tolls and parking</li>
      </ul>

      <p>You'll need to calculate what percentage of your total driving is for business and apply that to your costs.</p>

      <h2>Which Method Should You Use?</h2>

      <p>For most tradespeople with a van, <strong>actual costs often work out better</strong> — especially if you're doing high mileage. But the civil service rates are simpler and require less record-keeping.</p>

      <p>Run the numbers both ways (or ask your accountant) to see which gives you the bigger deduction.</p>

      <h2>What Counts as Business Mileage?</h2>

      <p>You can claim mileage for journeys that are <strong>wholly and exclusively for business purposes</strong>:</p>

      <ul>
        <li><strong>Travel to job sites:</strong> Customer locations, construction sites, properties you're working on</li>
        <li><strong>Supplier trips:</strong> Picking up materials from Chadwicks, Screwfix, wholesalers</li>
        <li><strong>Bank and post office:</strong> Business banking, posting quotes</li>
        <li><strong>Meetings:</strong> Accountant visits, client consultations, quotes</li>
        <li><strong>Training:</strong> Courses, certifications, trade events</li>
      </ul>

      <h3>What Doesn't Count</h3>

      <ul>
        <li><strong>Commuting:</strong> Travel from home to your regular place of work (if you have one)</li>
        <li><strong>Personal errands:</strong> Stopping at the supermarket on the way home</li>
        <li><strong>Private use:</strong> Weekend trips, family journeys</li>
      </ul>

      <p><strong>Good news for tradespeople:</strong> If you work from home and travel directly to job sites, that's business mileage — not commuting. This is a significant advantage over office-based workers.</p>

      <h2>What Records Do You Need?</h2>

      <p>Revenue requires you to maintain a <strong>mileage log</strong>. For each business journey, record:</p>

      <ul>
        <li><strong>Date:</strong> When the journey took place</li>
        <li><strong>Starting point:</strong> Where you left from</li>
        <li><strong>Destination:</strong> Where you went</li>
        <li><strong>Purpose:</strong> Why the journey was necessary (e.g., "Job at 12 Main St" or "Collect materials from Chadwicks")</li>
        <li><strong>Kilometres:</strong> Distance travelled</li>
      </ul>

      <p>Keep this log throughout the year. Don't try to reconstruct it from memory in January — Revenue won't accept that.</p>

      <h2>The Easy Way: Mileage Tracking Apps</h2>

      <p>Paper logbooks work but are tedious. Modern apps make tracking effortless:</p>

      <h3>Automatic GPS Tracking</h3>
      <p>Apps like MileIQ, Driversnote, or TradeTime's built-in tracker detect when you're driving and log journeys automatically. At the end of each day, you just swipe to mark trips as business or personal.</p>

      <h3>What to Look For</h3>
      <ul>
        <li><strong>Automatic detection:</strong> Don't rely on remembering to start tracking</li>
        <li><strong>Easy classification:</strong> One tap to mark business vs. personal</li>
        <li><strong>Reports:</strong> Generate summaries for your accountant or Revenue</li>
        <li><strong>Irish support:</strong> Rates and rules that apply here, not the US or UK</li>
      </ul>

      <h2>Calculating Your Deduction</h2>

      <p>Let's work through an example:</p>

      <p><strong>Scenario:</strong> You're a plumber who drives 25,000 km per year, of which 20,000 km is business travel.</p>

      <h3>Using Civil Service Rates:</h3>
      <ul>
        <li>First 1,500 km: 1,500 × €0.3795 = €569</li>
        <li>Next 4,000 km (1,501-5,500): 4,000 × €0.70 = €2,800</li>
        <li>Next 14,500 km (5,501-20,000): 14,500 × €0.2755 = €3,995</li>
        <li><strong>Total deduction: €7,364</strong></li>
      </ul>

      <p>At a 40% marginal tax rate, that's <strong>€2,946 back in your pocket</strong>.</p>

      <h2>Common Mistakes to Avoid</h2>

      <ul>
        <li><strong>Not keeping records:</strong> "I drove about 15,000 business kilometres" isn't good enough. You need a log.</li>
        <li><strong>Claiming personal travel:</strong> That weekend trip to Cork wasn't business, even if you met a potential client.</li>
        <li><strong>Forgetting small trips:</strong> The quick run to the builder's merchant counts. Track everything.</li>
        <li><strong>Double counting:</strong> If you claim mileage rates, you can't also claim fuel receipts for the same vehicle.</li>
        <li><strong>Waiting until year-end:</strong> Start tracking now. Reconstructing a year of travel is impossible.</li>
      </ul>

      <h2>If You Have a Company Van</h2>

      <p>If your business owns or leases the van (not you personally), mileage rates don't apply. Instead, the business claims actual costs as expenses. Keep all receipts for fuel, insurance, repairs, etc.</p>

      <p>However, if you use a company van for personal travel, there may be a Benefit-in-Kind (BIK) tax implication. Talk to your accountant about this.</p>

      <h2>Getting Started Today</h2>

      <ol>
        <li><strong>Download a mileage app</strong> — MileIQ, Driversnote, or TradeTime</li>
        <li><strong>Enable automatic tracking</strong> so you don't forget</li>
        <li><strong>Classify trips daily</strong> — takes 30 seconds</li>
        <li><strong>Run a monthly report</strong> to see your accumulated deduction</li>
      </ol>

      <p>Every kilometre you don't track is money you're giving away. Start today, and your future self (and bank account) will thank you.</p>
    `,
  },
  "vat-tradespeople-simple-guide-ireland": {
    title: "VAT for Tradespeople: A Simple Guide",
    description: "A plain-English guide to VAT for Irish tradespeople. Learn about 13.5% vs 23% rates, when to register, and how to stay compliant without the headaches.",
    author: "TradeTime Team",
    date: "March 2025",
    readTime: "6 min read",
    content: `
      <p class="lead">VAT doesn't have to be complicated. If you're an Irish tradesperson — electrician, plumber, builder, carpenter — this guide cuts through the jargon and explains exactly what you need to know.</p>

      <h2>The Basics: What Is VAT?</h2>

      <p>VAT (Value Added Tax) is a tax on goods and services. As a tradesperson, you collect VAT from your customers on behalf of Revenue, then pay it over (minus the VAT you've paid on your own business purchases).</p>

      <p>Think of yourself as a tax collector. The VAT isn't your money — it's Revenue's. You're just handling it temporarily.</p>

      <h2>Do I Need to Register for VAT?</h2>

      <p>You <strong>must</strong> register if your annual turnover exceeds:</p>

      <ul>
        <li><strong>€42,500</strong> for services (most trade work)</li>
        <li><strong>€85,000</strong> for goods (if you're mainly selling products)</li>
      </ul>

      <p>These are the 2025 thresholds. If you're approaching them, register before you exceed — Revenue doesn't like late registrations.</p>

      <h3>Should I Register Voluntarily?</h3>

      <p>Even below the threshold, voluntary registration can make sense if:</p>

      <ul>
        <li>You buy a lot of materials (you can reclaim the VAT)</li>
        <li>Your customers are businesses (they can reclaim VAT, so your prices don't really go up for them)</li>
        <li>You want to appear more established and professional</li>
      </ul>

      <p>The downside? More paperwork, and residential customers effectively pay more (they can't reclaim VAT).</p>

      <h2>The Two Rates You'll Use</h2>

      <h3>13.5% — For Most Trade Work</h3>

      <p>The reduced rate applies to construction services on buildings. This includes:</p>

      <ul>
        <li>Plumbing, electrical, heating installation</li>
        <li>Building, renovating, extending</li>
        <li>Plastering, painting, decorating</li>
        <li>Roofing, tiling, flooring installation</li>
        <li>Kitchen and bathroom fitting</li>
        <li>Garden landscaping (when attached to a property)</li>
      </ul>

      <p><strong>The key:</strong> If you're working on "immovable property" (buildings, land), it's usually 13.5%.</p>

      <h3>23% — For Goods and Other Services</h3>

      <p>The standard rate applies to:</p>

      <ul>
        <li>Selling materials without fitting them</li>
        <li>Equipment hire</li>
        <li>Professional services (design, consulting)</li>
        <li>Repairs to movable items (appliances, machinery)</li>
      </ul>

      <h2>The Two-Thirds Rule</h2>

      <p>Here's where it gets slightly tricky. If you supply both materials and labour together, and the <strong>materials cost more than two-thirds</strong> of the total, you must charge 23% on everything.</p>

      <p><strong>Example:</strong></p>
      <ul>
        <li>You install a boiler. The boiler costs €2,500, your labour is €600.</li>
        <li>Materials (€2,500) are 81% of the total (€3,100) — that's more than two-thirds.</li>
        <li>You charge 23% VAT on the entire €3,100.</li>
      </ul>

      <p><strong>Workaround:</strong> Issue two invoices — one for the boiler (23%) and one for installation (13.5%). More paperwork, but it can save your customer money.</p>

      <h2>What Goes on a VAT Invoice?</h2>

      <p>Your invoices must include:</p>

      <ul>
        <li>Your name/business name and address</li>
        <li>Your VAT number (format: IE1234567X)</li>
        <li>Customer's name and address</li>
        <li>Invoice number (sequential)</li>
        <li>Date</li>
        <li>Description of work/goods</li>
        <li>Amount before VAT</li>
        <li>VAT rate applied</li>
        <li>VAT amount</li>
        <li>Total including VAT</li>
      </ul>

      <p>Good invoice software like TradeTime handles all of this automatically.</p>

      <h2>VAT Returns: The Basics</h2>

      <p>Most small businesses file VAT returns every two months (bi-monthly). Some file quarterly or annually — Revenue assigns your frequency based on your turnover.</p>

      <p>On your return, you report:</p>
      <ul>
        <li><strong>Output VAT:</strong> VAT you collected from customers</li>
        <li><strong>Input VAT:</strong> VAT you paid on business purchases</li>
        <li><strong>Net amount:</strong> Output minus input — this is what you pay (or claim back)</li>
      </ul>

      <h3>Example:</h3>
      <ul>
        <li>You invoiced €10,000 + €1,350 VAT (13.5%) = €11,350</li>
        <li>You spent €3,000 + €690 VAT on materials and expenses</li>
        <li>You pay Revenue: €1,350 - €690 = €660</li>
      </ul>

      <h2>Keeping Records</h2>

      <p>You must keep VAT records for <strong>6 years</strong>. This includes:</p>

      <ul>
        <li>All sales invoices you issued</li>
        <li>All purchase invoices and receipts</li>
        <li>Bank statements</li>
        <li>VAT returns</li>
      </ul>

      <p>Digital records are fine — you don't need paper files. A photo of a receipt stored in the cloud counts.</p>

      <h2>Common VAT Mistakes</h2>

      <ul>
        <li><strong>Wrong rate:</strong> Charging 23% when 13.5% applies (or vice versa)</li>
        <li><strong>Missing invoice details:</strong> No VAT number or incomplete breakdown</li>
        <li><strong>Forgetting the two-thirds rule:</strong> Results in under- or over-charging</li>
        <li><strong>Late returns:</strong> Revenue charges interest and penalties</li>
        <li><strong>Not claiming input VAT:</strong> You're entitled to reclaim VAT on business purchases — do it!</li>
      </ul>

      <h2>Using Software to Stay Compliant</h2>

      <p>The easiest way to get VAT right is to use software designed for Irish tradespeople. TradeTime has Irish VAT rates built in — select your service type, and the correct rate applies automatically. No more googling "what VAT rate for bathroom tiling."</p>

      <p>When it's time to file your return, the software generates a summary of your VAT collected and paid. Hand that to your accountant or enter it into ROS yourself.</p>

      <h2>When to Talk to an Accountant</h2>

      <p>This guide covers the basics, but talk to an accountant if:</p>

      <ul>
        <li>You're unsure whether to register voluntarily</li>
        <li>You do a mix of work that spans different VAT rates</li>
        <li>You work for other EU countries</li>
        <li>You're dealing with RCT and VAT together</li>
        <li>You've made a mistake and need to correct it</li>
      </ul>

      <p>A good accountant saves you more than they cost — especially with VAT.</p>
    `,
  },
  "getting-paid-faster-invoice-tips-contractors": {
    title: "Getting Paid Faster: Invoice Tips for Irish Contractors",
    description: "Practical tips for Irish contractors to get paid on time. From invoice timing to payment terms, follow-ups, and dealing with slow-paying clients.",
    author: "TradeTime Team",
    date: "March 2025",
    readTime: "6 min read",
    content: `
      <p class="lead">Waiting 60, 90, or even 120 days to get paid is all too common for Irish contractors. But it doesn't have to be this way. Here are proven tactics to speed up payments and protect your cash flow.</p>

      <h2>Invoice the Same Day</h2>

      <p>This is the single most important thing you can do. Studies show invoices sent on the day of completion get paid <strong>30% faster</strong> than those sent a week later.</p>

      <p>Why? The customer remembers the work, sees the value fresh, and your invoice doesn't get buried in a pile. "Out of sight, out of mind" is real — don't let your invoice become invisible.</p>

      <p><strong>Best practice:</strong> Send the invoice before you leave the site. With TradeTime, this takes 60 seconds on your phone.</p>

      <h2>Set Clear Payment Terms</h2>

      <p>If you don't specify when payment is due, customers assume they have unlimited time. State your terms clearly on every invoice:</p>

      <ul>
        <li><strong>"Payment due on receipt"</strong> — expected immediately</li>
        <li><strong>"Due within 7 days"</strong> — standard for residential work</li>
        <li><strong>"Net 14"</strong> — common for smaller commercial jobs</li>
        <li><strong>"Net 30"</strong> — typical for larger commercial contracts</li>
      </ul>

      <p>Shorter terms mean faster payment. If a customer expects Net 30, make sure you've agreed to that <em>before</em> starting the work — not discovered it when chasing payment.</p>

      <h2>Get Deposits Upfront</h2>

      <p>For larger jobs, deposits are essential:</p>

      <ul>
        <li><strong>30-50% upfront</strong> for jobs over €1,000</li>
        <li><strong>Material costs covered</strong> before ordering expensive items</li>
        <li><strong>Stage payments</strong> for multi-week projects (e.g., 40% start, 40% mid-point, 20% completion)</li>
      </ul>

      <p>Deposits protect your cash flow and demonstrate customer commitment. Serious customers understand this; those who refuse might be trouble anyway.</p>

      <h2>Make Payment Frictionless</h2>

      <p>Remove every barrier to payment:</p>

      <ul>
        <li><strong>Multiple options:</strong> Bank transfer, card payment, even cash if needed</li>
        <li><strong>Clear bank details:</strong> IBAN and BIC prominently displayed on every invoice</li>
        <li><strong>Payment links:</strong> Include a "Pay Now" button that takes them straight to payment</li>
        <li><strong>QR codes:</strong> Let customers scan and pay instantly on their phone</li>
      </ul>

      <p>The easier it is to pay, the faster people pay.</p>

      <h2>Follow Up Systematically</h2>

      <p>Most late payments aren't malicious — people forget, lose emails, or deprioritise invoices. A polite follow-up usually works:</p>

      <h3>Day 3 overdue</h3>
      <p>Quick, friendly nudge: "Hi [name], just checking you received my invoice for the work at [address]. Let me know if you have any questions."</p>

      <h3>Day 7 overdue</h3>
      <p>Phone call: "Following up on invoice #123 sent on [date]. The total is €X and it's now a week past due. Can we sort payment today?"</p>

      <h3>Day 14 overdue</h3>
      <p>Firmer email: "This is a reminder that invoice #123 for €X is now 14 days overdue. Please arrange payment within 7 days."</p>

      <h3>Day 21+ overdue</h3>
      <p>Formal notice: "Final notice before escalation. Invoice #123 for €X is now [X] days overdue. If payment isn't received within 7 days, we'll need to pursue further action."</p>

      <p><strong>Automation helps:</strong> TradeTime can send follow-up reminders automatically, so you don't have to remember or feel awkward.</p>

      <h2>Know Your Rights</h2>

      <p>For business-to-business (B2B) transactions, EU late payment rules protect you:</p>

      <ul>
        <li><strong>Interest:</strong> You can charge 8% above the ECB rate on overdue amounts</li>
        <li><strong>Compensation:</strong> You're entitled to €40 minimum for recovery costs</li>
        <li><strong>Payment term limits:</strong> Maximum 60 days for business customers (30 days for public bodies)</li>
      </ul>

      <p>Include a statement on your invoices: "Late payments may incur interest and recovery costs in accordance with the Late Payment in Commercial Transactions Regulations."</p>

      <h2>Deal with Repeat Offenders</h2>

      <p>Some customers are always late. Options include:</p>

      <ul>
        <li><strong>Require payment upfront:</strong> "Based on previous experience, I require full payment before starting work"</li>
        <li><strong>Cash on completion:</strong> No more invoicing — payment before you leave</li>
        <li><strong>Adjust your pricing:</strong> Factor in the cost of chasing payment</li>
        <li><strong>Fire them:</strong> Some customers aren't worth the hassle</li>
      </ul>

      <h2>Prevent Problems Before They Start</h2>

      <ul>
        <li><strong>Clear quotes:</strong> Agree price and payment terms before starting</li>
        <li><strong>Written confirmation:</strong> Email summary of what was agreed</li>
        <li><strong>Check creditworthiness:</strong> For large commercial jobs, do your homework on the client</li>
        <li><strong>Trust your gut:</strong> If something feels off, ask for more upfront</li>
      </ul>

      <h2>Professional Invoices Help</h2>

      <p>A professional invoice signals a professional business. It should include:</p>

      <ul>
        <li>Your business name, address, and contact details</li>
        <li>Clear invoice number and date</li>
        <li>Itemised breakdown of work</li>
        <li>VAT details (if registered)</li>
        <li>Payment terms and due date</li>
        <li>Bank details or payment link</li>
      </ul>

      <p>Handwritten invoices and Word documents look amateur. Use proper invoice software — it pays for itself in faster payments.</p>

      <h2>Action Steps</h2>

      <ol>
        <li><strong>Start invoicing on the day of completion</strong></li>
        <li><strong>Add clear payment terms to every invoice</strong></li>
        <li><strong>Set up automatic payment reminders</strong></li>
        <li><strong>Require deposits on jobs over €1,000</strong></li>
        <li><strong>Follow up promptly and consistently</strong></li>
      </ol>

      <p>Cash flow is the lifeblood of your business. Don't let it depend on customers remembering to pay. Take control, and watch your bank balance improve.</p>
    `,
  },
  "seai-grants-contractors-ireland": {
    title: "SEAI Grants: What Contractors Need to Know",
    description: "Everything Irish contractors need to know about SEAI grants. How the schemes work, how to become a registered contractor, and how grants create opportunities for your trade business.",
    author: "TradeTime Team",
    date: "March 2025",
    readTime: "8 min read",
    content: `
      <p class="lead">SEAI grants are putting billions into Irish homes — upgrading heating systems, insulation, and energy efficiency. For contractors who understand the system, this is one of the biggest opportunities in the Irish trades sector right now.</p>

      <h2>What Is SEAI?</h2>

      <p>The Sustainable Energy Authority of Ireland (SEAI) administers government grants for home energy upgrades. Homeowners can get significant funding towards work like:</p>

      <ul>
        <li>Heat pump installation</li>
        <li>Insulation (attic, wall, floor)</li>
        <li>Windows and doors</li>
        <li>Solar panels (PV systems)</li>
        <li>Heating controls</li>
        <li>Deep retrofits</li>
      </ul>

      <p>For homeowners, grants cover 20-80% of costs depending on the measure. For contractors, this means customers can afford work they'd otherwise skip — and you're at the centre of making it happen.</p>

      <h2>The Main SEAI Grant Schemes</h2>

      <h3>Better Energy Homes Scheme</h3>
      <p>The most common scheme for individual homeowners. Fixed grants for specific measures:</p>

      <ul>
        <li><strong>Attic insulation:</strong> Up to €1,500</li>
        <li><strong>Cavity wall insulation:</strong> Up to €1,700</li>
        <li><strong>External wall insulation:</strong> Up to €8,000</li>
        <li><strong>Internal dry lining:</strong> Up to €4,500</li>
        <li><strong>Heat pump systems:</strong> Up to €6,500</li>
        <li><strong>Solar PV:</strong> Up to €2,100</li>
        <li><strong>Heating controls:</strong> Up to €700</li>
      </ul>

      <p>Homeowners apply online, get approval, then hire a contractor. After the work is done and inspected, SEAI pays the grant.</p>

      <h3>One Stop Shop Service</h3>
      <p>For deeper retrofits, the One Stop Shop model covers everything from assessment to completion. Registered companies handle the entire process — BER assessments, design, project management, and installation.</p>

      <p>Grants are higher (up to 50% of costs), but the work is typically managed through certified One Stop Shop providers rather than individual contractors.</p>

      <h3>Warmer Homes Scheme</h3>
      <p>Free upgrades for homeowners on certain welfare payments. The work is delivered through SEAI's appointed contractors, not the open market.</p>

      <h3>Community Energy Grant</h3>
      <p>Group schemes for communities upgrading together. Larger scale, often coordinated through energy agencies or community groups.</p>

      <h2>How to Become an SEAI Registered Contractor</h2>

      <p>To work on SEAI-funded projects, you need to be on their registered contractor list. Requirements vary by trade:</p>

      <h3>For Heat Pump Installers</h3>
      <ul>
        <li>QQI Level 6 Heat Pump Systems certification (or equivalent)</li>
        <li>Registered with RGII for gas works (if applicable)</li>
        <li>Registered Electrical Contractor (RECI) if doing electrical work</li>
        <li>Insurance: €1.3m minimum public liability</li>
        <li>Tax compliance: current Tax Clearance Certificate</li>
      </ul>

      <h3>For Insulation Contractors</h3>
      <ul>
        <li>NSAI Agrément or NSAI certification for the insulation systems you install</li>
        <li>Appropriate training certifications</li>
        <li>Insurance and tax clearance as above</li>
      </ul>

      <h3>For Solar PV Installers</h3>
      <ul>
        <li>MCS certification (Microgeneration Certification Scheme) or equivalent</li>
        <li>RECI registration for electrical work</li>
        <li>Safe Electric registration</li>
        <li>Insurance and tax clearance</li>
      </ul>

      <p><strong>Application process:</strong> Register through the SEAI contractor portal at <em>www.seai.ie</em>. You'll submit documentation proving qualifications, insurance, and tax compliance. Approval typically takes 2-4 weeks.</p>

      <h2>Why Registration Matters</h2>

      <p>Being an SEAI-registered contractor gives you access to a steady stream of customers who are actively seeking your services and have funding to pay for them.</p>

      <ul>
        <li><strong>Pre-qualified leads:</strong> Customers with approved grants need registered contractors</li>
        <li><strong>Reduced price sensitivity:</strong> Grant funding means customers focus on quality, not just cheapest quote</li>
        <li><strong>Growing market:</strong> Government targets mean demand will increase for years</li>
        <li><strong>Credibility:</strong> SEAI registration signals quality and compliance</li>
      </ul>

      <h2>The Contractor's Role in the Process</h2>

      <p>Here's how a typical SEAI grant job flows:</p>

      <ol>
        <li><strong>Customer applies:</strong> Homeowner applies online for their chosen measures</li>
        <li><strong>SEAI approves:</strong> Grant approval letter issued (usually 2-4 weeks)</li>
        <li><strong>Customer gets quotes:</strong> They contact registered contractors (including you)</li>
        <li><strong>You quote the job:</strong> Full price shown, with grant contribution noted</li>
        <li><strong>Work proceeds:</strong> You complete the installation to SEAI standards</li>
        <li><strong>Declaration of works:</strong> You submit a signed declaration confirming completion</li>
        <li><strong>Inspection (maybe):</strong> SEAI may inspect before payment</li>
        <li><strong>Grant paid:</strong> SEAI pays the grant portion directly to the homeowner or contractor (depending on arrangement)</li>
      </ol>

      <h2>Getting Paid on SEAI Jobs</h2>

      <p>There are two payment models:</p>

      <h3>Customer Pays Full Amount, Claims Grant</h3>
      <p>You invoice the customer for the full amount. They pay you, then SEAI reimburses the grant portion to them. Lower risk for you — full payment before you wait on SEAI.</p>

      <h3>Grant Assigned to Contractor</h3>
      <p>The customer can assign the grant payment directly to you. You invoice for the full amount minus the grant, and SEAI pays you the grant portion directly.</p>

      <p>This is convenient for customers (they pay less upfront) but means you're waiting on SEAI payment — typically 4-6 weeks after inspection.</p>

      <p><strong>Tip:</strong> Build SEAI processing time into your cash flow planning. Don't rely on grant payments to cover immediate costs.</p>

      <h2>Compliance and Quality Requirements</h2>

      <p>SEAI takes quality seriously. Inspections check:</p>

      <ul>
        <li>Work completed as per application</li>
        <li>Materials meet specifications</li>
        <li>Installation follows manufacturer guidelines and building regulations</li>
        <li>Documentation complete (manuals, warranties, certifications)</li>
        <li>Post-work BER shows expected improvement</li>
      </ul>

      <p>Failed inspections delay payment and can lead to removal from the contractor register. Get it right the first time.</p>

      <h2>Marketing Your SEAI Registration</h2>

      <p>Use your registration as a selling point:</p>

      <ul>
        <li><strong>Website:</strong> "SEAI Registered Contractor" badge prominently displayed</li>
        <li><strong>Quotes:</strong> Show the grant value — "Heat pump installation: €12,000 (€6,500 SEAI grant = €5,500 you pay)"</li>
        <li><strong>Social media:</strong> Before/after photos of grant-funded projects</li>
        <li><strong>Local advertising:</strong> Many homeowners don't know grants exist — educate them</li>
      </ul>

      <h2>Opportunities by Trade</h2>

      <h3>Plumbers / Heating Engineers</h3>
      <p>Heat pumps are the biggest opportunity. Demand massively exceeds supply — if you're certified, you'll have more work than you can handle.</p>

      <h3>Electricians</h3>
      <p>Solar PV installations are booming. Heat pump electrical work is substantial too. RECI registration plus solar certification opens doors.</p>

      <h3>Builders / General Contractors</h3>
      <p>Deep retrofits through One Stop Shops involve significant building work. Partner with registered providers or get certified yourself.</p>

      <h3>Insulation Contractors</h3>
      <p>External wall insulation is particularly lucrative — high grant values mean bigger projects. NSAI certification is essential.</p>

      <h2>Getting Started</h2>

      <ol>
        <li><strong>Check your qualifications:</strong> Do you meet the requirements for your trade?</li>
        <li><strong>Get certified:</strong> If not, pursue the necessary training and certification</li>
        <li><strong>Ensure compliance:</strong> Tax clearance, insurance, registration</li>
        <li><strong>Apply to SEAI:</strong> Submit your contractor registration</li>
        <li><strong>Market yourself:</strong> Let customers know you're SEAI registered</li>
      </ol>

      <p>The energy upgrade market in Ireland is only going to grow. Get registered now, and you'll be positioned to ride the wave for years to come.</p>
    `,
  },
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
  "best-job-management-apps-irish-plumbers-2026": {
    title: "Best Job Management Apps for Irish Plumbers 2026",
    description: "Compare the top job management apps for Irish plumbers in 2026. Features, pricing, mobile capabilities, and which app is right for your plumbing business.",
    author: "TradeTime Team",
    date: "January 2026",
    readTime: "9 min read",
    content: `
      <p class="lead">Running a plumbing business in Ireland means juggling jobs, customers, invoices, and a van full of supplies — often while standing in someone's flooded kitchen. The right job management app can transform how you work. Here's our guide to the best options for Irish plumbers in 2026.</p>

      <h2>Why Plumbers Need Job Management Software</h2>

      <p>Paper diaries and mental notes don't scale. As your business grows, you need systems that handle:</p>

      <ul>
        <li><strong>Job scheduling:</strong> Know where you're supposed to be and when</li>
        <li><strong>Customer records:</strong> Previous work, contact details, property notes</li>
        <li><strong>Quoting and invoicing:</strong> Professional documents sent in seconds</li>
        <li><strong>Payment tracking:</strong> Who owes you money at a glance</li>
        <li><strong>Job history:</strong> What you did last time you were at Mrs Murphy's</li>
      </ul>

      <p>The best plumbers in Ireland aren't just skilled — they're organised. And organisation in 2026 means having the right app on your phone.</p>

      <h2>What to Look For</h2>

      <p>Not all job management apps suit plumbing businesses. Here's what matters:</p>

      <h3>Mobile-First Design</h3>
      <p>You're not behind a desk. The app needs to work brilliantly on your phone, even with wet hands or wearing gloves. If it's clunky on mobile, it's useless for plumbers.</p>

      <h3>Offline Capability</h3>
      <p>Basements and rural Irish properties don't always have signal. Good apps work offline and sync when you're back online.</p>

      <h3>Irish VAT Support</h3>
      <p>13.5% for services, 23% for goods sold separately, the two-thirds rule — your app should handle Irish tax without you thinking about it.</p>

      <h3>Speed</h3>
      <p>Creating a quote or invoice shouldn't take 10 minutes. The best apps let you complete common tasks in under 60 seconds.</p>

      <h3>Integration with Accounting</h3>
      <p>Does it connect with your accountant's software? Exporting to Xero, Sage, or CSV saves hours at tax time.</p>

      <h2>Top Job Management Apps for Irish Plumbers</h2>

      <h3>1. TradeTime</h3>
      <p><strong>Best for:</strong> Irish sole traders and small plumbing businesses</p>

      <p>TradeTime is built specifically for Irish tradespeople. It's not a generic business app adapted for Ireland — it was designed from the ground up for plumbers, electricians, and builders working here.</p>

      <p><strong>Key features:</strong></p>
      <ul>
        <li>60-second invoices with Irish VAT built in</li>
        <li>Job scheduling with customer history</li>
        <li>Quote-to-invoice conversion</li>
        <li>Payment tracking and reminders</li>
        <li>Works offline</li>
      </ul>

      <p><strong>Pricing:</strong> Free tier available, Pro from €15/month</p>

      <p><strong>Why plumbers love it:</strong> Speed. Most users create invoices in under a minute, right from their van. The Irish focus means no fiddling with currency, VAT rates, or irrelevant features.</p>

      <h3>2. ServiceM8</h3>
      <p><strong>Best for:</strong> Growing businesses needing advanced scheduling</p>

      <p>Australian-made but works well in Ireland. Strong on job scheduling and dispatch — particularly good if you have multiple plumbers working for you.</p>

      <p><strong>Key features:</strong></p>
      <ul>
        <li>Job dispatch and GPS tracking</li>
        <li>Online booking for customers</li>
        <li>Automated communications</li>
        <li>Forms and checklists</li>
      </ul>

      <p><strong>Pricing:</strong> From €29/month</p>

      <p><strong>Drawback:</strong> Not specifically designed for Irish tax requirements. You'll need to configure VAT settings manually.</p>

      <h3>3. Jobber</h3>
      <p><strong>Best for:</strong> Plumbing businesses with employees and complex scheduling</p>

      <p>Canadian software with a strong following worldwide. Excellent for larger operations with multiple team members.</p>

      <p><strong>Key features:</strong></p>
      <ul>
        <li>Client hub for customer self-service</li>
        <li>Route optimisation</li>
        <li>Team scheduling and time tracking</li>
        <li>Automated follow-ups</li>
      </ul>

      <p><strong>Pricing:</strong> From €49/month (billed in USD)</p>

      <p><strong>Drawback:</strong> Pricey for sole traders. Better suited to businesses with 3+ plumbers.</p>

      <h3>4. Tradify</h3>
      <p><strong>Best for:</strong> All-in-one job management with strong Xero integration</p>

      <p>New Zealand-based app popular with UK and Irish trades. Good balance of features and usability.</p>

      <p><strong>Key features:</strong></p>
      <ul>
        <li>Job tracking from enquiry to invoice</li>
        <li>Purchase orders for suppliers</li>
        <li>Xero and QuickBooks integration</li>
        <li>Photo and note attachments</li>
      </ul>

      <p><strong>Pricing:</strong> From €35/month per user</p>

      <p><strong>Drawback:</strong> Per-user pricing adds up quickly with a team.</p>

      <h3>5. simPRO</h3>
      <p><strong>Best for:</strong> Large plumbing contractors with complex operations</p>

      <p>Enterprise-level software for bigger operations. Asset tracking, project management, inventory control — the works.</p>

      <p><strong>Key features:</strong></p>
      <ul>
        <li>Full project management</li>
        <li>Inventory and asset tracking</li>
        <li>Detailed reporting and analytics</li>
        <li>Multi-location support</li>
      </ul>

      <p><strong>Pricing:</strong> Custom pricing (typically €100+/month)</p>

      <p><strong>Drawback:</strong> Overkill for small businesses. Implementation takes time.</p>

      <h2>Quick Comparison Table</h2>

      <p>Here's how the top apps stack up for Irish plumbers:</p>

      <ul>
        <li><strong>TradeTime:</strong> Best for sole traders, €0-15/month, Irish VAT built-in ✓</li>
        <li><strong>ServiceM8:</strong> Best for growing teams, €29+/month, manual VAT setup</li>
        <li><strong>Jobber:</strong> Best for larger businesses, €49+/month, manual VAT setup</li>
        <li><strong>Tradify:</strong> Best for Xero users, €35+/user, manual VAT setup</li>
        <li><strong>simPRO:</strong> Best for contractors, €100+/month, configurable</li>
      </ul>

      <h2>Features Plumbers Actually Need</h2>

      <p>Don't pay for features you won't use. Most plumbers need:</p>

      <ul>
        <li><strong>Job diary:</strong> What's happening today, tomorrow, next week</li>
        <li><strong>Customer database:</strong> Contact details, property notes, history</li>
        <li><strong>Quoting:</strong> Professional quotes sent quickly</li>
        <li><strong>Invoicing:</strong> Get paid without paperwork headaches</li>
        <li><strong>Payment tracking:</strong> Know who owes what</li>
      </ul>

      <p>Nice-to-haves include GPS tracking, automated reminders, and online booking — but start with the basics.</p>

      <h2>Making the Switch</h2>

      <p>Worried about switching from paper or spreadsheets? Don't be. Modern apps are designed for easy onboarding:</p>

      <ul>
        <li><strong>Start fresh:</strong> You don't need to import old data. Add customers as you go.</li>
        <li><strong>Use it daily:</strong> Force yourself to use the app for every job for two weeks. Habits form quickly.</li>
        <li><strong>Start with invoicing:</strong> If you do nothing else, at least send invoices through the app. The rest follows.</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>For most Irish plumbers — especially sole traders and small businesses — TradeTime offers the best combination of Irish-specific features, ease of use, and value. It's built for how you actually work.</p>

      <p>If you're managing a team of plumbers and need advanced scheduling, ServiceM8 or Jobber might be worth the extra cost. And if you're running a large contracting business, simPRO has the depth you need.</p>

      <p>Whatever you choose, any job management app beats a crumpled notebook. Your future self will thank you.</p>
    `,
  },
  "track-expenses-self-employed-tradesperson-ireland": {
    title: "How to Track Expenses as a Self-Employed Tradesperson in Ireland",
    description: "Complete guide to tracking business expenses as a self-employed tradesperson in Ireland. What's deductible, how to keep records, and tools to make it easy.",
    author: "TradeTime Team",
    date: "January 2026",
    readTime: "10 min read",
    content: `
      <p class="lead">Every euro you spend on your trade business that you don't track is potentially money lost at tax time. Yet most Irish tradespeople leave hundreds — sometimes thousands — of euros on the table each year because they don't track expenses properly. Here's how to fix that.</p>

      <h2>Why Expense Tracking Matters</h2>

      <p>As a self-employed tradesperson, you pay tax on your profits — that's income minus allowable expenses. The more legitimate business expenses you track, the less tax you pay.</p>

      <p><strong>Example:</strong> You earn €60,000 in a year. If you track €15,000 in business expenses, you pay tax on €45,000. If you only track €10,000 (because you lost receipts), you pay tax on €50,000. At 40% marginal rate, that's €2,000 extra tax — just because of poor record-keeping.</p>

      <h2>What Expenses Can You Claim?</h2>

      <p>Here's what Irish tradespeople can typically deduct:</p>

      <h3>Materials and Supplies</h3>
      <ul>
        <li>Pipes, fittings, cables, timber, plasterboard</li>
        <li>Consumables: tape, screws, fixings, sealant</li>
        <li>PPE: safety boots, gloves, hard hats, hi-vis</li>
        <li>Workwear with your business logo</li>
      </ul>

      <h3>Tools and Equipment</h3>
      <ul>
        <li>Hand tools and power tools</li>
        <li>Testing equipment (multimeters, pipe cameras, etc.)</li>
        <li>Ladders, scaffolding, access equipment</li>
        <li>Tool storage (boxes, bags, van racking)</li>
      </ul>

      <p><strong>Note:</strong> Items over €1,000 may need to be depreciated over several years rather than deducted immediately. Ask your accountant.</p>

      <h3>Vehicle Costs</h3>
      <p>Your van is probably your biggest expense. You can claim:</p>
      <ul>
        <li>Fuel for business journeys</li>
        <li>Insurance (business portion)</li>
        <li>Servicing and repairs</li>
        <li>Tolls and parking</li>
        <li>Van lease or purchase costs</li>
      </ul>

      <p><strong>Private use:</strong> If you use your van privately, you'll need to apportion expenses. A simple mileage log helps establish the business/private split.</p>

      <h3>Running Costs</h3>
      <ul>
        <li>Phone bills (business portion)</li>
        <li>Broadband</li>
        <li>Software subscriptions (TradeTime, accounting software)</li>
        <li>Trade association memberships</li>
        <li>Professional certifications and training</li>
      </ul>

      <h3>Insurance</h3>
      <ul>
        <li>Public liability insurance</li>
        <li>Professional indemnity</li>
        <li>Employer's liability (if you have staff)</li>
        <li>Tool and equipment insurance</li>
      </ul>

      <h3>Home Office</h3>
      <p>If you do admin from home (quoting, invoicing, bookkeeping), you can claim a portion of:</p>
      <ul>
        <li>Heating and electricity</li>
        <li>Broadband</li>
        <li>Rent or mortgage interest (proportional to office space)</li>
      </ul>

      <p>Revenue accepts a simple calculation based on the number of rooms used for business.</p>

      <h3>Professional Fees</h3>
      <ul>
        <li>Accountant fees</li>
        <li>Legal fees (for business matters)</li>
        <li>Bank charges on business account</li>
        <li>Credit card processing fees</li>
      </ul>

      <h2>What You Can't Claim</h2>

      <p>Not everything is deductible:</p>

      <ul>
        <li><strong>Personal expenses:</strong> Food (with some exceptions), regular clothing, personal phone use</li>
        <li><strong>Fines and penalties:</strong> Parking tickets, speeding fines</li>
        <li><strong>Personal portion:</strong> If something's used personally and for business, only the business portion is deductible</li>
        <li><strong>Initial capital:</strong> Money you put into the business isn't an expense</li>
      </ul>

      <h2>How to Track Expenses</h2>

      <p>The goal is simple: capture every business expense with proof, organised for easy retrieval.</p>

      <h3>The Old Way (Don't Do This)</h3>
      <p>Shoebox of receipts, sorted once a year in a panic before your accountant deadline. Receipts fade, get lost, or become unreadable. You miss deductions. Your accountant charges extra for the mess.</p>

      <h3>The Better Way</h3>

      <p><strong>1. Separate business and personal banking</strong></p>
      <p>Open a dedicated business account. Every euro in and out is business-related. This alone simplifies tracking enormously.</p>

      <p><strong>2. Photograph receipts immediately</strong></p>
      <p>Thermal receipts fade. Paper gets wet in your van. The moment you get a receipt, photograph it with your phone. Many apps (including TradeTime) let you snap and categorise receipts on the spot.</p>

      <p><strong>3. Use accounting software</strong></p>
      <p>Apps like Xero, QuickBooks, or dedicated expense trackers connect to your bank account and categorise expenses automatically. You just need to review and approve.</p>

      <p><strong>4. Weekly review</strong></p>
      <p>Spend 15 minutes every Friday reviewing the week's expenses. Categorise anything missed, add notes where needed. This is much easier than doing a year's worth in January.</p>

      <h2>Expense Categories for Tradespeople</h2>

      <p>Set up these categories in your accounting software:</p>

      <ul>
        <li><strong>Materials:</strong> Items used on jobs</li>
        <li><strong>Tools:</strong> Equipment purchases</li>
        <li><strong>Vehicle — Fuel:</strong> Diesel/petrol</li>
        <li><strong>Vehicle — Other:</strong> Insurance, repairs, tolls</li>
        <li><strong>Phone & Internet:</strong> Communication costs</li>
        <li><strong>Software:</strong> Subscriptions and apps</li>
        <li><strong>Insurance:</strong> Business insurance</li>
        <li><strong>Training:</strong> Courses and certifications</li>
        <li><strong>Professional Fees:</strong> Accountant, legal</li>
        <li><strong>Office:</strong> Home office and admin costs</li>
        <li><strong>Marketing:</strong> Advertising, website, signage</li>
      </ul>

      <h2>Mileage Tracking</h2>

      <p>If you don't want to track every fuel receipt, you can claim mileage instead. Revenue's civil service rates (2026) are:</p>

      <ul>
        <li><strong>Up to 1,500 km:</strong> 37.95 cent per km</li>
        <li><strong>1,501 - 5,500 km:</strong> 70.00 cent per km</li>
        <li><strong>5,501 - 25,000 km:</strong> 27.55 cent per km</li>
        <li><strong>Over 25,000 km:</strong> 21.36 cent per km</li>
      </ul>

      <p>You'll need a mileage log: date, destination, purpose, kilometres. Apps can track this automatically using GPS.</p>

      <h2>Record Keeping Requirements</h2>

      <p>Revenue requires you to keep records for 6 years. This includes:</p>

      <ul>
        <li>All invoices (sales and purchases)</li>
        <li>Receipts for expenses</li>
        <li>Bank statements</li>
        <li>Mileage logs</li>
        <li>VAT records (if registered)</li>
      </ul>

      <p>Digital records are acceptable — you don't need to keep paper. A photo of a receipt stored in the cloud counts.</p>

      <h2>Common Mistakes to Avoid</h2>

      <ul>
        <li><strong>Not keeping receipts:</strong> "I bought it" isn't proof. Keep the receipt.</li>
        <li><strong>Mixing personal and business:</strong> That lunch wasn't a business meeting. Don't claim it.</li>
        <li><strong>Missing the small stuff:</strong> €5 here, €10 there — it adds up to hundreds over a year.</li>
        <li><strong>Forgetting cash purchases:</strong> Paid cash at the hardware shop? Still need to record it.</li>
        <li><strong>Leaving it until year-end:</strong> By then you've forgotten half of what you spent.</li>
      </ul>

      <h2>Tools That Help</h2>

      <ul>
        <li><strong>TradeTime:</strong> Invoice and expense tracking built for Irish tradespeople</li>
        <li><strong>Xero:</strong> Full accounting with receipt capture</li>
        <li><strong>Dext (formerly ReceiptBank):</strong> Scan and categorise receipts automatically</li>
        <li><strong>Revolut Business:</strong> Business banking with built-in expense categorisation</li>
      </ul>

      <h2>Getting Started Today</h2>

      <p>You don't need a perfect system immediately. Start with these three steps:</p>

      <ol>
        <li><strong>Open a business bank account</strong> if you don't have one</li>
        <li><strong>Download an expense app</strong> and photograph today's receipts</li>
        <li><strong>Set a weekly reminder</strong> to review and categorise expenses</li>
      </ol>

      <p>Even imperfect tracking beats no tracking. Start today, improve over time, and watch your tax bill shrink.</p>
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
              href="https://app.tradetime.ie/signup"
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
