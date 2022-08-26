const orderModel=require('../models/orderModel')
const userModel=require('../models/userModel')
const productModel=require('../models/productModel')

const createOrder= async function(req,res){
    let set=req.body
    let userID=await userModel.findById(set.userId)
    let productID=await productModel.findById(set.productId)
    if(!set.userId){
        return res.send({data:"userID is required"})
    }else if(!userID){
        return res.send({data:"give the valid UserId"})
    }else if(!set.productId){
        return res.send({data:"productID is required"})
    }else if(!productID){
        return res.send({data:"Give the valid productID"})
    }else if(set.isFreeAppUser!==true){
        
    }
    let createOrder=await orderModel.create(set)
    res.send({data:createOrder})
    
}

// const orderValidation=async function(req,res,next){
//     let orderf=await orderModel.find({isFreeAppUser:false}).populate(['userId','productId'])
//     let ordere=await orderf.
    // let 
    // let fil=orderf.isFreeAppUser
    // let fil1=orderf.userId
    // let fil2=orderf.productId.price
    // let fil4=orderf.amount
    // if(fil==false){
    //     let fil3=fil1-fil2
    //     fil1=fil3
    //     fil2=fil4
    // }
    // console.log(orderf)










 
module.exports.createOrder=createOrder
//module.exports.orderValidation=orderValidation