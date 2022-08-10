const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();
//const app=express.App();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

//09-08-2022 assignment
//01.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this
 router.get("/sol1", function (req, res) {
	   //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
	   let arr= [1,2,3,5,6,7]
       let sum =0
	   let missingNumber=[]
       for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
}
        n=arr.length+1
        missingNumber=Math.floor(n*(n+1)/2)-sum

	   ///LOGIC WILL GO HERE 
	   res.send(  { data: missingNumber  }  );
 });

 //Q2. 
 // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
         //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
         let arr= [33, 34, 35, 37, 38]
         let missingNumber=[]
        let minum=Math.min(...arr)
        let maxnum=Math.max(...arr)
        for(i=minum;i<maxnum;i++){
            if(arr.indexOf(i)<0){
                missingNumber.push(i)
            }
        }
         ///LOGIC WILL GO HERE 

        return res.send(  { data: missingNumber  }  );
});



router.get('/Charger',function(req,res){
    let type =req.query.type
    let watt=req.query.watt
    console.log("The type is ",type,"The watt is ",watt)
    res.send("Dummy charger")
})

//JSON

router.get('/test-json',function(req,res){
 res.send({a:3,b:4,mess:"this is message in the JSON"})
})

//Post 
router.post('/test-post',function(req,res){
    let id=req.body.User
    let pwd=req.body.Password
    console.log(id,pwd)
    console.log(req.body)

    res.send({a:3,b:4,mess:"this is message in the JSON"})
   })

//Question in post take input and add to array
router.post('/post-qus',function(req,res){
    let arr=[45,58]
    let ele=req.body.value
    arr.push(ele)
    res.send({msg:arr,name:"junaid"})
})

//Assignment 1 of Post

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
        for(i=0;i<players.length;i++){
        if(a.name===players.name){
            return console.log("The name is Repeated Please give another name ")
        }
    }
        players.push(a)
       //LOGIC WILL COME HERE
       res.send(  { data: players , status: true }  )
   })
  


module.exports = router;
//module.exports=app;
// adding this comment for no reason