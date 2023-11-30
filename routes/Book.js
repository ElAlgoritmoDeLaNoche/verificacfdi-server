const express = require('express');
const bookController = require('../controllers/bookController.js');

const router = express.Router();

router.post('/', bookController.createBook);
router.get('/:folioFiscal', bookController.searchBookByTitle);

module.exports = router;
