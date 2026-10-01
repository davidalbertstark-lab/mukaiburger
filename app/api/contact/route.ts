import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, email, phone, location, brief } = data;

    if (!name || !email || !brief) {
      return NextResponse.json(
        { error: "Name, email, and project brief are required." },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // Dispatch via Web3Forms if access key is configured
    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            phone: phone || "Not specified",
            company: company || "Not specified",
            location: location || "Not specified",
            message: brief,
            subject: `New Project Enquiry: ${name} — ${location || "Nigeria"}`,
            from_name: "Mukaiburger Web Portal",
          }),
        });

        const result = await response.json();
        return NextResponse.json({ success: true, provider: "web3forms", result });
      } catch (err) {
        console.error("Web3Forms delivery failed:", err);
      }
    }

    // Dispatch via Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Mukaiburger Enquiries <onboarding@resend.dev>",
            to: ["mukaiburger.official@gmail.com"],
            reply_to: email,
            subject: `Project Enquiry: ${name} — ${location || "Nigeria"}`,
            html: `
              <h2>New Project Enquiry — Mukaiburger Engineering</h2>
              <p><strong>Client Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || "N/A"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "N/A"}</p>
              <p><strong>Project Location:</strong> ${location || "N/A"}</p>
              <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;" />
              <h3>Project Brief / Scope:</h3>
              <p style="white-space: pre-wrap;">${brief}</p>
            `,
          }),
        });

        const result = await resendRes.json();
        return NextResponse.json({ success: true, provider: "resend", result });
      } catch (err) {
        console.error("Resend delivery failed:", err);
      }
    }

    // Fallback: log to server stdout (accessible via Vercel runtime logs)
    console.log("=== NEW MUKAIBURGER ENQUIRY ===", {
      timestamp: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      location,
      brief,
    });

    return NextResponse.json({
      success: true,
      delivered: false,
      message: "Enquiry received and recorded.",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Server error processing enquiry. Please use direct email or WhatsApp." },
      { status: 500 }
    );
  }
}
