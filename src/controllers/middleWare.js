const tik=async function(req,res){
    res.send({data:"this is controller"})
}
module.exports.tik=tik



const gh=async function(req,res,next){
    console.log("Hi this is controller for next")
    res.send({msg:"gh for next"})
}
 module.exports.gh=gh