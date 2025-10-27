import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { values, attachment } = await req.json();

    let transporter = nodemailer.createTransport({
      host: 'mail.ctime.dz', // Roundcube SMTP server
      port: 465, // SMTP port for SSL
      secure: true, // Use SSL
      auth: {
        user: 'si@ctime.dz', // Your Roundcube email
        pass: 'tarekogtaxx', // Replace with your Roundcube email password
      },
    });

    const currentYear = new Date().getFullYear();
    const emailContent = `
      <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouvelle Soumission de Formulaire de Contact</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
            .container { padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 4px; background-color: #f9f9f9; }
            .header { font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #b01614; }
            .content { line-height: 1.6; color: #555; }
            .footer { text-align: center; font-size: 14px; margin-top: 20px; color: #999; }
            .highlight { color: #b01614; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="header">Nouvelle Soumission de Formulaire de Contact</h1>
            <p class="content">
              Vous avez reçu un nouveau message de <strong class="highlight">${values.firstname} ${values.lastname}</strong>.
            </p>
            <p class="content">
              <strong>Email :</strong> ${values.email}
            </p>
            <p class="content">
              <strong>Numéro de téléphone :</strong> ${values.number}
            </p>
            <p class="content">
              <strong>Message :</strong><br>
              ${values.message}
            </p>
            ${attachment ? `
              <p class="content">
                <strong>Pièce jointe :</strong> ${attachment.name}
              </p>
            ` : ''}
            <p class="footer">
              &copy; CTIME ${currentYear}. Tous droits réservés.
            </p>
          </div>
        </body>
      </html>
    `;

    let mailOptions = {
      from: values.email, // Set the sender's email as the "from" address
      to: 'contact@ctime.dz', // Your target email address
      subject: 'Nouvelle Soumission de Formulaire de Contact',
      html: emailContent,
      replyTo: values.email, // Ensure replies go to the sender's email
      attachments: attachment
        ? [
            {
              filename: attachment.name,
              content: attachment.data,
              encoding: 'base64',
              contentType: attachment.type,
            },
          ]
        : [],
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
