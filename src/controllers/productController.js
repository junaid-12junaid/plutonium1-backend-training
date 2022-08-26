const productModel=require("../models/productModel")


const productCreate=async function(req,res){
    let productd=req.body
    let productc=await productModel.create(productd)
    res.send({msg:productc})
}

module.exports.productCreate=productCreate