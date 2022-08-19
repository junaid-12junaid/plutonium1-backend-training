const express = require('express');
const router = express.Router();
const totaldata=require('../controller/booksController')

router.post("/createAuthor",totaldata.createAuthor)

router.post("/createPublisher",totaldata.createPublisher)

router.post("/createBooks",totaldata.createBooks)

router.get('/alldetails',totaldata.alldetails)
module.exports = router;