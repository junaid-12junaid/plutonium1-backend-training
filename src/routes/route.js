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


});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason