const express = require("express");
// import * as pool from "dbConfig"
const router = express.Router();
const quoteController = require('../controller/quote')

router.get('/', quoteController.quoteList)
router.get('/:id', quoteController.quoteSingle)
router.delete('/:id', quoteController.deleteQuote)
router.post('/new', quoteController.createQuote)
router.put('/:id', quoteController.editQuote)
module.exports = router;
