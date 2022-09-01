import express from "express"
// import * as pool from "dbConfig"
const router = express.Router();
import quoteController from "../controller/quote";

router.get('/', quoteController.quoteList)
router.get('/:id', quoteController.quoteSingle)
router.delete('/:id', quoteController.deleteQuote)
router.post('/new', quoteController.createQuote)
router.put('/:id', quoteController.editQuote)

module.exports = router;
