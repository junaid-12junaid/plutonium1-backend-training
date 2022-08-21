const express = require('express');
const router = express.Router();
const totaldata=require('../controller/booksController')

router.post("/createAuthor",totaldata.createAuthor)

router.post("/createPublisher",totaldata.createPublisher)

router.post("/createBooks",totaldata.createBooks)

router.get('/alldetails',totaldata.alldetails)
router.put('/Books',totaldata.updateHardCover)
router.put('/Books1',totaldata.updatePrice)
router.put('/bookrating',totaldata.bookrating)
module.exports = router;