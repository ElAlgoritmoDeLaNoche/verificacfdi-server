const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  rfcEmisor: {
    type: String,
    required: true
  },
  rsEmisor: {
    type: String,
    required: true
  },
  rfcReceptor: {
    type: String,
    required: true
  },
  rsReceptor: {
    type: String,
    required: true
  },
  folioFiscal: {
    type: String,
    required: true
  },
  expedicion: {
    type: String,
    required: true
  },
  fechaCertSat: {
    type: String,
    required: true
  },
  pacCertifico: {
    type: String,
    required: true
  },
  totalCfdi: {
    type: String,
    required: true
  },
  efeComprobante: {
    type: String,
    required: true
  },
  estadoCfdi: {
    type: String,
    required: true
  },
  estatusCancelacion: {
    type: String,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
