const jwt=require('jsonwebtoken')

const mid1=async function(req,res,next){
    let token=req.headers['x-Auth-Token']
    if(!token) {
        token=req.headers['x-auth-token']
    }
    if(!token){
        return res.send({alert:"the token is mandatory"})
    }
    let decode=jwt.verify(token,'hi-buddy-whatsapp-bro')
    if(!decode){
        return res.send({status:false,data:"The token is invalid"})
    }
    let logedUserId=decode.UserID
    let userId=req.params.userId
    if(userId!=logedUserId){
        return res.send({status:false,data:"you can't access || update || delete data of other users"})
    }
    next()
}


module.exports.mid1=mid1