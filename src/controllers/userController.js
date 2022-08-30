const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

const userC=async function(req,res){
    try{

    let set=req.body
    if(Object.keys(set)!=0){
    let userc=await userModel.create(set)
    res.send({data:userc})
    }else{
        res.status(400).send({Data:"the user Input is empty"})
    }
}
    catch(err){
        console.log("this is the error:" ,err.message)
        res.status(500).send({data:err.message})
    }
}


const login=async function(req,res){
    try{

    let emailId=req.body.emailId
    let password=req.body.password
    if(!emailId && !password){
        res.status(401).send({data:"the emaid and password required"})
    }

    let userC=await userModel.findOne({emailId:emailId,password:password})
    if(userC){
     
    let token=jwt.sign({
        UserID:userC._id.toString(),
        name:"This is Junaid",
        From:"Bangalore",
        batch:"Plutonium",
        "joind-At":"18-7-2022"
    },"hi-buddy-whatsapp-bro")
    res.setHeader('x-auth-token',token)
    //res.header('x-auth-token',token)
    res.send({token:token})
    console.log(token)
}
    else{
        return res.status(400).send({alert:"the userId or password is Invalid"})

    }

}catch(err){
    res.status(500).send({Data:err.message})
}
}


const userF=async function(req,res){
try{
let userId=req.params.userId
    let userf=await userModel.findById(userId)
    if(userf){
        res.send({data:userf})
       
    }else{
        return res.status(404).send({alert:"no such user exists"})
    }

}catch(err){
    res.status(500).send({Error:err.message})
}
}


const userUp=async function(req,res){
    try{
    let userId=req.params.userId
    let userR=await userModel.findById(userId).select({_id:1})
    if(userR){   
        let set=req.body
        let useru=await userModel.findOneAndUpdate({_id:userId},{$set:set},{new:true})
        res.send({data:useru})
      }else{
        return res.status(404).send({alert:"the user does't exists"})
      }
 }catch(err){
        res.status(500).send({data:err.message})
    }
}

const userD=async function(req,res){
    try{
    let userId=req.params.userId
    if(userId){
    let userDE=await userModel.findByIdAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
    res.send({data:userDE})
    }else{
        return res.status(404).send({data:"the user does't exists"})
    }
}
    catch(err){
        res.status(500).send({data:err})
    }

}

module.exports.userC=userC
module.exports.login=login
module.exports.userF=userF
module.exports.userUp=userUp
module.exports.userD=userD