

const mid1=async function(req,res,next){
    let token=req.headers['x-Auth-Token']
    if(!token) {
        token=req.headers['x-auth-token']
    }
    if(!token){
        return res.send({alert:"the token is mandatory"})
    }
    next()
}


module.exports.mid1=mid1