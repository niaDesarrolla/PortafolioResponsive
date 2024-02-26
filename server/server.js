const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");

const app = express();
app.use(express.json());

const OAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground" // URL de redireccionamiento autorizado
);

OAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.post('/formulario', async (req, res) => {
    const { nombre, correo, equipo, mensaje } = req.body;

    try {
        const mailOptions = {
            from: 'niadesarrolla@gmail.com',
            to: correo,
            subject: 'Nuevo mensaje de contacto',
            html: `
            <h3>Información del formulario:</h3>
            <p>Nombre: ${nombre}</p>
            <p>Correo electrónico: ${correo}</p>
            <p>Equipo: ${equipo}</p>
            <p>Mensaje: ${mensaje}</p>
            `,
        };

        const accessToken = await OAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'niadesarrolla@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
                res.status(500).json({ message: 'Error al enviar el formulario' });
            } else {
                console.log('Correo electrónico enviado:', info.response);
                res.status(200).json({ message: 'Formulario enviado con éxito' });
            }
        });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ message: 'Error al enviar el formulario' });
    }
});

app.listen(3000, () => {
    console.log('Servidor Express.js iniciado en el puerto 3000');
});