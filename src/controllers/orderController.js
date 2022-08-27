const orderModel=require('../models/orderModel')
const userModel=require('../models/userModel')
const productModel=require('../models/productModel')

const createOrder= async function(req,res){
    let set=req.body
    let UserID=set.userId
    let ProductID=set.productId
    let FreeUser=req.headers.isfreeappuser
    let userID=await userModel.findById(UserID)
    let productID=await productModel.findById(ProductID)
    if(!UserID){
        return res.send({data:"userID is required"})
    }else if(!userID){
        return res.send({data:"give the valid UserId"})
    }else if(!ProductID){
        return res.send({data:"productID is required"})
    }else if(!productID){
        return res.send({data:"Give the valid productID"})
    }

    let priceV=productID.price
    let userp=userID.balance
    let orderp=set.amount
    // console.log(orderp)
    if(FreeUser=='false'){
        if(userp>priceV){
                let UserU=await userModel.findByIdAndUpdate({_id:UserID},{$inc:{balance:-priceV}},{set:true})
                let ordert=await productModel.findById({_id:ProductID}).select({_id:1,price:1})
                // console.log(ordert)
                set.amount=ordert.price
                let usere=await userModel.findByIdAndUpdate({_id:UserID},{$set:{isFreeAppUser:FreeUser}})
                let ordere=await orderModel.create(set)
                res.send(ordere)
        }else{
            res.send({data:"the balance is insuficient"})
        }
    }else if(FreeUser=='true'){
        set.amount=0
        let useru=await userModel.findByIdAndUpdate({_id:UserID},{$set:{isFreeAppUser:FreeUser}})
        let ordere=await orderModel.create(set)
                res.send(ordere)

    }
}





module.exports.createOrder=createOrder