const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const bookRoutes = require('./routes/Book.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb+srv://verificacfdi:i5YJgDpCQU5HAVIS@cluster0.fttxxbj.mongodb.net/');

app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
