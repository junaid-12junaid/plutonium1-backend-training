const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController")
const bookdata=require('../models/bookModel')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook",async function(req,res){
    let data=req.body
    let allbook=await bookdata.create(data)
    res.send({data:allbook})
})

router.get('/bookList',async function(req,res){
    let form=await bookdata.find().select({bookName:1,authorName:1,_id:0})
    res.send({data:form})
})

router.post('/getBooksInYear',async function(req,res){
    const data=req.query.year
    let form=await bookdata.find({year:data})
    res.send({data:form})
})


router.post('/getParticularBooks',async function(req,res){
    const input=req.query.bookName
    const input1=req.query.year
    const allinput=await bookdata.find(  {bookName:input,year:input1}   )
    res.send({data:allinput})
})

router.get('/getXINRBooks',async function(req,res){
    const rup=await bookdata.find({"prices.indianPrice":{$in:["RS 100","RS 200","RS 500"]}})
    res.send({data:rup})
})

router.get('/getRandomBooks',async function(req,res){
    const ran=await bookdata.find({
        $or:[{totalpages:{$gt:500}},
            {stockAvailable:true}]
    })
    res.send({data:ran})
})


router.get('/practice-q',async function(req,res){
    let faul=await bookdata.find({bookName:/.*after.*/i}).select({bookName:1,_id:0})
    res.send(faul)

})
// bookName: {
//     type:String,
//     required:true
// }, 
// prices: {
// indianPrice: String,
// europePrice: String,
// },
// year:{
// type:Number,
// default:2021
// },
// tags: [String],
// authorName:String,
// totalpages:Number,
// stockAvailable:Boolean





// create the following API’s (write logic in bookController and routes in routes):
// createBook : to create a new entry..use this api to create 11+ entries in your collection
// bookList : gives all the books- their bookName and authorName only 
// getBooksInYear: takes year as input in post request and gives list of all books published that year
// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body
// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
// getRandomBooks - returns books that are available in stock or have more than 500 pages 

module.exports = router;