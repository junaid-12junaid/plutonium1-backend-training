const express = require('express');
const router = express.Router();
const totaldata=require('../controller/booksController')
const authMiddleWare=require('../middleWare/authMidedleWare')

router.post("/createAuthor",totaldata.createAuthor)

router.post("/createPublisher",totaldata.createPublisher)

router.post("/createBooks",totaldata.createBooks)

router.get('/alldetails',totaldata.alldetails)
router.put('/Books',totaldata.updateHardCover)
router.put('/Books1',totaldata.updatePrice)
router.put('/bookrating',totaldata.bookrating)
router.put('/booksumprice',totaldata.booksumprice)
//MiddleWare
//router.put('/authMiddleWare',authfun, authMiddleWare.authfun)


module.exports = router;