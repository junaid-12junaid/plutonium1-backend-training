const isFreeMid=function(req,res,next){

let user=req.headers.isfreeappuser
if(!user)
    return res.send({data:"request is mandatory"})

next()
}
module.exports.isFreeMid=isFreeMid
