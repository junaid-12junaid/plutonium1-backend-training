//const address=require('address')
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }
// const mid5=function (req,res,next){
//     const date=new Date()
//     console.log(date,req.path,address.ip())
//     res.send({data:date})
//     next()
// }

// const Mid1=function (req,res,next){
//     console.log("This is first middle ware")
//     next()
// }
// const Mid2=function (req,res,next){
//     console.log("This is second  middle ware")
//     next()
// }
// const mid3=function (req,res,next){
//     console.log("This is Third middle ware")
//     next()
// }
// const mid4=function (req,res,next){
//     console.log("This is fourt middle ware")
//     next()
// }
const mid1=function (req,res,next){
    let logedIn=true
    if(logedIn==true){
        console.log("my first MiddleWare")
        next()
    }else{
        res.send("The person is invalid")
    }
}
const mid2=function(req,res,next){
    console.log('This mid 2')
    next()
}

module.exports.mid1=mid1
module.exports.mid2=mid2




// module.exports.Mid1=Mid1
// module.exports.Mid2= Mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
