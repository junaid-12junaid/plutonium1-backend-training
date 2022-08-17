const bookModel=require('../models/allBookModel')


const funB1=async function(req,res){
    const all=req.body
    const fol=await bookModel.create(all)
    res.send({data:fol})
}








module.exports.funB1=funB1
//module.exports.funB2=funB2
