const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos del frontend
app.use(express.static('public'));

// Una ruta de API simple
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: "¡Hola desde el backend de Node.js!" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});