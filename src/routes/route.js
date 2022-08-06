const express = require('express');
const abc = require('../introduction/intro')
const abd = require('../logger/logger')
const abt= require('../util/helper')
const abq= require('../validator/formatter')
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

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason