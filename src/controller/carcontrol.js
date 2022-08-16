const usercar=require('../module/moduleCars.js')



const fun1=async function(req,res){
    let give=req.body
    let data=await usercar.create(give)
    res.send({message:data})

}

const fun2=async function(req,res){
    let allcar=await usercar.find({author:"TY"})
    res.send(allcar)
}

module.exports.fun1=fun1
module.exports.fun2=fun2