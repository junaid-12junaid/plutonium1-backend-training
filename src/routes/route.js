const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})



//Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

//router.get('/movies', function(req,res){
//     let arr=['Don','3 Idiots','Super 30']
//     res.send(arr)
// })

//Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api


// router.get('/movies/:indexNumber',function(req,res){
// let arr1=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
// let fr=req.params
// let a=fr.indexNumber
// let b=arr1[a]
// res.send(b)
// })


//Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.

// router.get('/movies/:indexNumber',function(req,res){
//     let arr1=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     let fr=req.params
//     let a=fr.indexNumber
//     let b=arr1[a]
//     res.send(b)
//     if(a<=arr1.length){
//     console.log("the value of index is ", b)
// }else{
//     console.log("use the valid index")
// }
//     })


// Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 


// Return the entire array in this api’s response
// router.get('/films',function(req,res){
//     let arr=[ {
//         'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': 2,
//         'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }]
//        res.send(arr)
// })


//Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//     “id”: 3,
//     “name”: “Rang de Basanti”
//    }
//    Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
router.get('/films/:filmId',function(req,res){
        let arr=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
       let a=req.params
       let b=a.filmId
       let c=arr.find(x => x.id === b)
       res.send(c)
})

module.exports = router;