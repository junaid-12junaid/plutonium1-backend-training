const userModel=require("../models/userModel.js")


const userCreate=async function(req,res){
    let userd=req.body
    let userc=await userModel.create(userd)
    res.send({msg:userc})
    }


module.exports.userCreate=userCreate