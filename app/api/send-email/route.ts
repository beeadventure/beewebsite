import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { to, subject, text } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Bee Adventure Tours <${process.env.SMTP_FROM}>`,
      to,
      subject,
      text,
      replyTo: process.env.SMTP_REPLY_TO,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return Response.json({ success: false, error: `${err}` }, { status: 500 });
  }
}
