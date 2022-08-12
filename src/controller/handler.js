const Userdata=require("../models/userData.js")

const fun1=async function(req,res){
    let data=req.body
    let Userflow=await Userdata.create(data)
    res.send({mes:Userflow})
}


const fun2=async function(req,res){
    let all=await Userdata.find()
    res.send({mes:all})
}

module.exports.fun1=fun1
module.exports.fun2=fun2
