const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const bookRoutes = require('./routes/Book.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use(cors({
  origin: 'https://verificacfdi-admin.vercel.app/',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Habilita el intercambio de cookies entre dominios
  optionsSuccessStatus: 204, // Algunos navegadores pueden enviar una solicitud 'preflight' OPTIONS antes de la solicitud real, esta es la respuesta exitosa para la solicitud 'preflight'
}));
app.options('*', cors());

mongoose.connect('mongodb+srv://verificacfdi:i5YJgDpCQU5HAVIS@cluster0.fttxxbj.mongodb.net/');

app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Endpoint  🐥👻')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
