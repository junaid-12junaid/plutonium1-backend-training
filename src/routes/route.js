const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


//Assignment 1 of Post api
//1st approach easy

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {
        let a=req.body
        for(var i in players){
            let everyValue=players[i]
        if(everyValue.name==a.name){
            return res.send("The name is Exist please Enter other Name")
         
            
        }
    }
    
        players.push(a)
        
       //LOGIC WILL COME HERE
       res.send(  { data: players , status: true }  )
   })

   //Assignment 1 of Post api
//2nd  approach by using flag by sir

router.post('/2nd-post-Approach-assignment',function(req,res){
    let a=req.body
    let isNameRepeated=false

    for(i=0;i<players.length;i++){
        if(players[i].name==a.name){
            isNameRepeated=true
        }            
    }
    if(isNameRepeated){
        res.send("the name is Reapeated")
    }else{
    players.push(a)
    res.send({players})
    }
})

//query params
//qestion 1 if marks>40 print pass else fail

router.get("/pass-me",function(req,res){
    let a=req.query.marks
    if(a>40){
        res.send("Pass")
    }else{
        res.send("Fail")
    }
})

//2 in arr i need the greater number or (filter)> number in new array

router.get('/filter-me',function(req,res){
    let a=req.query.num
    let arr1=[]
    let arr=[11,558,4646,54684,741,5884]
   // let arr1=arr.filter(x=>x>a)
    
    for(i=0;i<arr.length;i++){
        if(arr[i]>a){
            arr1.push(arr[i]);
        }
    }
    res.send(arr1)

})

//Assignment 2
let persons=[
    {
        name:"Junaid",
        age:10,
        votingStatus:false
    },
    {
        name:"Suhail",
        age:20,
        votingStatus:false
    },
    {
        name:"aw",
        age:70,
        votingStatus:false
    },
    {
        name:"SC",
        age:5,
        votingStatus:false
    },
    {
        name:"FR",
        age:40,
        votingStatus:false
    }
]
router.post('/vote-me',function(req,res){
    let votingAge=req.query.votingAge
    let arr1=[]
    for(i=0;i<persons.length;i++){
            if(persons[i].age>=votingAge){
            persons[i].votingStatus = true
                arr1.push(persons[i])
             
            
        }
        
    }
    res.send(arr1)
})





module.exports = router;