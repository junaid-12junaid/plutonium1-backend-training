const isFreeMid=function(req,res,next){

let user=req.headers.isfreeappuser
if(!user){
    return res.send({data:"request is mandatory"})
}else{
    req.body["isFreeAppUser"]=Boolean(user)
}
next()
}
module.exports.isFreeMid=isFreeMid
