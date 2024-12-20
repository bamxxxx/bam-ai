import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { from, name, message } = await request.json();

    const data = await resend.emails.send({
      from: 'AI Consulting <onboarding@resend.dev>',
      to: ['bam.pizza@hey.com'],
      subject: 'New Contact Form Submission - AI Consulting',
      replyTo: from,
      text: `Name: ${name}\nEmail: ${from}\nMessage: ${message}`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}