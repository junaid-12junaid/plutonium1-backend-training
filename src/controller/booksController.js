const authorModel=require('../models/authorModle')
const publisherModel=require('../models/publusherModel')
const bookModel=require('../models/bookModel')
const { model, default: mongoose } = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId


const createAuthor=async function(req,res){
    const toatl=await authorModel.create(req.body)
    res.send({data:toatl})
}


const createPublisher=async function(req,res){
    const toatl=await publisherModel.create(req.body)
    res.send({data:toatl})
}

const createBooks=async function(req,res){
    let set=req.body
    if(!set.author){
        return res.send({State:false, mes:"please give the Id for Author"})
        }
        let author=await authorModel.findById(set.author)
        if(!author){
            return res.send({mes:"author id is not valid"})
        }
        if(!set.publisher){return res.send({data:"Give the if for this publisher"})}
        const publisher=await publisherModel.findById(set.publisher)
        if(!publisher){
            return res.send({
            data:"Give the valid ID for publisher"
        })}
    const Btotal=await bookModel.create(set)
    res.send({data:Btotal})
}
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

const alldetails=async function(req,res){
    const details=await bookModel.find().populate(['author' ,'publisher'])  //.populate('author').populate('publisher')
    res.send({data:details})
}
module.exports.createAuthor=createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBooks=createBooks
module.exports.alldetails=alldetails