const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid=require('../middleWare/userMiddleWare')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/userCreate',userController.userC)


router.post('/login',userController.login)

router.get('/users/:userId',mid.mid1,userController.userF)

router.put('/users/:userId',mid.mid1,userController.userUp)

router.delete('/users/:userId',mid.mid1,userController.userD)
module.exports = router;