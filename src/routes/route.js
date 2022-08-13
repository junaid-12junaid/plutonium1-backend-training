const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


const bookcontrol=require('../controllers/booksController')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



router.post('/bookstore',bookcontrol.fun1)

router.get('/allbooks',bookcontrol.fun2)




module.exports = router;