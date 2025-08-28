import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message, captchaToken } =
      await request.json();

    // Validar que los campos requeridos estén presentes
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos" },
        { status: 400 }
      );
    }

    // Validar que el captcha esté presente
    if (!captchaToken) {
      return NextResponse.json(
        { error: "El captcha es requerido" },
        { status: 400 }
      );
    }

    // Verificar el captcha con Google
    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      {
        method: "POST",
      }
    );

    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { error: "Verificación de captcha fallida" },
        { status: 400 }
      );
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Puedes cambiar esto por otro servicio
      auth: {
        user: process.env.EMAIL_USER, // Tu correo de Gmail
        pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación de Gmail
      },
    });

    // Configurar el contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // El correo se envía a ti mismo
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Nuevo mensaje de contacto - ApoloCode
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Información del contacto:</h3>
            
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #1e40af; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="background-color: #e2e8f0; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Este mensaje fue enviado desde el formulario de contacto de ApoloCode
            </p>
          </div>
        </div>
      `,
      // También incluir una versión en texto plano
      text: `
        Nuevo mensaje de contacto - ApoloCode
        
        Información del contacto:
        Nombre: ${name}
        Email: ${email}
        ${company ? `Empresa: ${company}` : ""}
        
        Mensaje:
        ${message}
        
        Este mensaje fue enviado desde el formulario de contacto de ApoloCode
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Correo enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al enviar el correo" },
      { status: 500 }
    );
  }
}
