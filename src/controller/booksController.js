const authorModel=require('../models/authorModle')
const publisherModel=require('../models/publusherModel')
const bookModel=require('../models/bookModel')
const { model } = require('mongoose')


const createAuthor=async function(req,res){
    const toatl=await authorModel.create(req.body)
    res.send({data:toatl})
}


const createPublisher=async function(req,res){
    const toatl=await publisherModel.create(req.body)
    res.send({data:toatl})
}

const createBooks=async function(req,res){
    const Btotal=await bookModel.create(req.body)
    for(i=0;i<Btotal.length;i++){
        if(!Btotal[i].author){
        return res.send({State:false, mes:"please give the Id for Author"})
        }else if(!Btotal[i].publisher){
        return res.send({State:false, mes:"please give the Id for Publisher"})  
        }else if(Btotal[i].author!==author._id){
            return req.send({mes:"Please give a valid author ID"})
        }else if(Btotal[i].publisher!==publisher._id){
            return req.send({mes:"Please give a valid Publisher ID"})
        }
    }
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