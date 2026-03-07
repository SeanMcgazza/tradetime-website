import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TradeTime - Invoice Clients in Under a Minute | Irish Trades Invoicing",
  description: "Professional invoicing built for Irish electricians, plumbers, and builders. VAT-compliant, mobile-ready, free to start. Create invoices in 60 seconds.",
  keywords: "invoice app Ireland, tradesperson invoicing, Irish VAT invoicing, plumber invoice, electrician invoice, builder invoicing software",
  openGraph: {
    title: "TradeTime - Invoice Clients in Under a Minute",
    description: "Professional invoicing built for Irish tradespeople. VAT-compliant. Mobile-ready. Free to start.",
    type: "website",
    locale: "en_IE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
