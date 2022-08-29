const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

const userC=async function(req,res){
    let set=req.body
    let userc=await userModel.create(set)
    res.send({data:userc})
}


const login=async function(req,res){
    let emailId=req.body.emailId
    let password=req.body.password

    let userC=await userModel.findOne({emailId:emailId,password:password})
    if(!userC){
        return res.send({alert:"the userId or password is Invalid"})
    }

    let token=jwt.sign({
        UserID:userC._id.toString(),
        name:"This is Junaid",
        From:"Bangalore",
        batch:"Plutonium",
        "joind-At":"18-7-2022"
    },"hi-buddy-whatsapp-bro")
    res.setHeader('x-auth-token',token)
    res.send({token:token})
    console.log(token)

}



const userF=async function(req,res){
    let token=req.headers['x-auth-token']
    let token1=jwt.verify(token,'hi-buddy-whatsapp-bro')
if(!token1){
    return res.send({alert:"the token is invalid"})
}
let userId=req.params.userId
//Authorization
    let userlogedIn=token1.UserID
    if(userId!=userlogedIn)
    return res.send("you can't fetch the details of other user")
    let userf=await userModel.findById(userId)
    if(!userf){
        return res.send({alert:"no such user exists"})
    }
res.send({data:userf})
}


const userUp=async function(req,res){
    let token=req.headers['x-auth-token']

    let userId=req.params.userId
    let verifyUser=jwt.verify(token,"hi-buddy-whatsapp-bro")
    let verifyI=verifyUser.UserID
    if(!verifyUser)
    return res.send({data:"the token is not valid"})
    if(userId!=verifyI)
    return res.send({data:"you can't update other user details"})
    let userR=await userModel.findById(userId).select({_id:1})
    if(!userR){
        return res.send({alert:"the user does't exists"})
    }
    let set=req.body
    let useru=await userModel.findOneAndUpdate({_id:userId},{$set:set},{new:true})
    res.send({data:useru})


}

const userD=async function(req,res){
    let userId=req.params.userId
    let token=req.headers['x-auth-token']
    let verify=jwt.verify(token,'hi-buddy-whatsapp-bro')
    if(userId!=verify.UserID)
    return res.send({data:"You can't delete the datails of other user"})
    if(!userId){
        return res.send({data:"the user does't exists"})
    }
    let userDE=await userModel.findByIdAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
    res.send({data:userDE})

}



module.exports.userC=userC
module.exports.login=login
module.exports.userF=userF
module.exports.userUp=userUp
module.exports.userD=userD