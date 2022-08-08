const express = require('express');
const lodash=require('lodash')
const abc = require('../introduction/intro')
const abd = require('../logger/logger')
const abt= require('../util/helper')
const abq= require('../validator/formatter')
const aqq=require('../new/late')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    abd.hi()
    console.log(abt.da)
    console.log(abt.mon)
    abt.ba()
    abq.tr()
    abq.lo()
    abq.uq()
    console.log(aqq.ah)
    aqq.bh()

    //problem 4
    //Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays

    let arr=['January', 'February',' March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let ch=lodash.chunk(arr,3)
    console.log(ch)

    // Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

    let arr1=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let ta=lodash.tail(arr1)
    console.log(ta)

    // Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console

    let un1=[1,11,8,8]
    let un2=[1,51,4,8]
    let un3=[1,5,5,6]
    let un4=[1,12,2,8]
    let un5=[1,74,74,8]
    let arr2=lodash.union(un1,un2,un3,un4,un5)
    console.log(arr2)

    //Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

    let arr3=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let arr4=lodash.fromPairs(arr3)
    console.log(arr4)



});

router.get('/students/:name/:age',function(req,res){
    let student = req.params
    let st=student.name + student.age
    res.send(st)
})
router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason