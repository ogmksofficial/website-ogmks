import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "OG.MK$ Site <onboarding@resend.dev>",
      to: ["ogmksofficial@gmail.com"],
      subject: `Novo Contato do Site: ${name}`,
      replyTo: email,
      html: `
        <h2>Novo contato recebido através do site OG.MK$</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: "Erro ao enviar e-mail." },
      { status: 500 }
    );
  }
}