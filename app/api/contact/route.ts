import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 2;
const WINDOW_MS = 24 * 60 * 60 * 1000;

function getIP(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT) return false;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br>");
}

function autoReplyHtml(subject: string, description: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f0f13;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f13;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#18181f;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;">

          <tr>
            <td style="padding:28px 36px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <span style="font-size:17px;font-weight:700;color:#fff;letter-spacing:-0.3px;">Velrey Development</span>
            </td>
          </tr>

          <tr>
            <td style="padding:36px 36px 28px;">
              <p style="margin:0 0 8px;font-size:26px;font-weight:800;color:#fff;letter-spacing:-0.5px;line-height:1.2;">Thanks for reaching out.</p>
              <p style="margin:24px 0 0;font-size:15px;color:rgba(255,255,255,0.45);line-height:1.7;">We received your message and will get back to you as soon as possible. Here&apos;s a copy of what you sent:</p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 36px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;color:#818cf8;letter-spacing:2.5px;text-transform:uppercase;">Subject</p>
                    <p style="margin:0 0 22px;font-size:15px;color:#fff;font-weight:500;">${escapeHtml(subject)}</p>
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;color:#818cf8;letter-spacing:2.5px;text-transform:uppercase;">Message</p>
                    <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.6);line-height:1.8;">${escapeHtml(description)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 36px 36px;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.25);line-height:1.7;">This is an automated reply — please don&apos;t respond to this email. For urgent matters, contact us at <a href="mailto:support@velrey.dev" style="color:#818cf8;text-decoration:none;">support@velrey.dev</a>.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 36px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.18);">© 2026 Velrey Development. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const ip = getIP(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, subject, description } = body;

  if (!email || !subject || !description) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (description.trim().length <= 20) {
    return NextResponse.json(
      { error: "Description must be more than 20 characters." },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.batch.send([
      {
        from: "Velrey Contact Form <noreply@velrey.dev>",
        to: "info@velrey.dev",
        replyTo: email,
        subject: `[Contact] ${subject}`,
        text: `New message from: ${email}\n\nSubject: ${subject}\n\nMessage:\n${description}`,
      },
      {
        from: "Velrey Development <noreply@velrey.dev>",
        to: email,
        subject: "We received your message — Velrey Development",
        html: autoReplyHtml(subject, description),
      },
    ]);

    if (sendError) {
      console.error("Resend API error:", sendError);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
