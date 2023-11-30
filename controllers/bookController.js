const Book = require('../models/Book.js');

const createBook = async (req, res) => {
  try {
    const { rfcEmisor, rsEmisor, rfcReceptor, rsReceptor, folioFiscal, expedicion, fechaCertSat, pacCertifico, totalCfdi, efeComprobante, estadoCfdi, estatusCancelacion } = req.body;
    const book = new Book({ rfcEmisor, rsEmisor, rfcReceptor, rsReceptor, folioFiscal, expedicion, fechaCertSat, pacCertifico, totalCfdi, efeComprobante, estadoCfdi, estatusCancelacion });
    await book.save();
    res.status(201).json({ message: 'Libro guardado exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar el libro.' });
  }
};

const searchBookByTitle = async (req, res) => {
  try {
    const { folioFiscal } = req.params; // Utiliza req.params en lugar de req.query
    const book = await Book.findOne({ folioFiscal });
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado.' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el libro.' });
  }
};

module.exports = {
  createBook,
  searchBookByTitle
};
