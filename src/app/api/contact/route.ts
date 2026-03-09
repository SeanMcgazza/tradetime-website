import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Enquiry",
  support: "Support Request",
  feature: "Feature Request",
  billing: "Billing Question",
  partnership: "Partnership / Business",
  other: "Other",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const subjectLabel = SUBJECT_LABELS[subject] || "Contact Form";

    // Check if Resend is configured
    if (!resend) {
      console.log("Contact form submission (Resend not configured):", { name, email, subject, message });
      return NextResponse.json({ 
        success: true, 
        demo: true,
        message: "Form received (email sending not configured)" 
      });
    }

    // Send email to TradeTime support
    const { data, error } = await resend.emails.send({
      from: "TradeTime Contact <contact@tradetime.ie>",
      to: ["support@tradetime.ie"],
      replyTo: email,
      subject: `[TradeTime] ${subjectLabel} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subjectLabel}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1e3a5f;">Message:</h3>
            <div style="background: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          <p style="color: #6b7280; font-size: 12px;">
            This email was sent from the TradeTime contact form at tradetime.ie
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "TradeTime <noreply@tradetime.ie>",
      to: [email],
      subject: "We received your message - TradeTime",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #1e3a5f; margin: 0;">TradeTime</h1>
          </div>
          
          <h2 style="color: #1e3a5f;">Thanks for getting in touch, ${name}!</h2>
          
          <p style="color: #374151; line-height: 1.6;">
            We've received your message and will get back to you within 24 hours.
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            If you have an urgent issue, you can also check our 
            <a href="https://tradetime.ie/help" style="color: #f97316;">Help Centre</a> 
            for quick answers.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #1e3a5f;">Your message:</p>
            <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #374151;">
            Best,<br/>
            The TradeTime Team
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            TradeTime - Invoice Clients in Under a Minute<br/>
            Made with ☕ in Dublin, Ireland
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
