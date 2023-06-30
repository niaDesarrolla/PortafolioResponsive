/* const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Configuración y middleware de Express.js...

app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes en formato JSON
// Otros middleware y configuraciones...

// Ruta para recibir los datos del formulario
app.post('/formulario', (req, res) => {
    // Aquí puedes acceder a los datos del formulario enviados desde el cliente
    const {nombre, correo, equipo, mensaje} = req.body;
// Configurar el contenido del correo electrónico
const mailOptions = {
    from:correo, 
    to: 'niadesarrolla@gmail.com', // Reemplaza con la dirección de correo electrónico del destinatario
    subject: 'Nuevo mensaje de contacto',
    html: `
      <h3>Información del formulario:</h3>
      <p>Nombre: ${nombre}</p>
      <p>Correo electrónico: ${correo}</p>
      <p>Equipo: ${equipo}</p>
      <p>Mensaje: ${mensaje}</p>
    `,
  };

 // Enviar el correo electrónico
 const transporter = nodemailer.createTransport();
 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ message: 'Error al enviar el formulario' });
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.status(200).json({ message: 'Formulario enviado con éxito' });
    }
  });

 // Enviar una respuesta al cliente
 res.status(200).json({ message: 'Formulario recibido con éxito' });
});
  
// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor Express.js iniciado en el puerto 3000');
}); */