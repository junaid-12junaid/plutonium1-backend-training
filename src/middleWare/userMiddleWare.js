const jwt=require('jsonwebtoken')

const mid1=async function(req,res,next){
    try{
    let token=req.headers['x-Auth-Token']
    if(!token) {
        token=req.headers['x-auth-token']
    }
    if(!token){
        return res.status(401).send({alert:"the token is mandatory"})
    }
    let decode=jwt.verify(token,'hi-buddy-whatsapp-bro')
    if(!decode){
        return res.status(404).send({status:false,data:"The token is invalid"})
    }
    let logedUserId=decode.UserID
    let userId=req.params.userId
    if(userId!=logedUserId){
        return res.status(403).send({status:false,data:"you can't access || update || delete data of other users"})
    }
    next()
}catch(err){
    res.status(500).send({Error:err.message})
}
}


module.exports.mid1=mid1