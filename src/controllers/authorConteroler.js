const authorModel=require('../models/authorModel')
const bookModel=require('../models/allBookModel')


const funA1=async function(req,res){
    const all=req.body
    const fol=await authorModel.create(all)
    res.send({data:fol})
}

const funA2=async function(req,res){
    const result=await authorModel.find({author_name:"Chetan Bhagat"})
    const fr=await bookModel.find({author_id:result.author_id})
    res.send({data:fr})
}


// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )


// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const funS1=async function(req,res){
    const result=await bookModel.find({name:"Two states"})
    const fr=await authorModel.find({author_id:result.author_id})
    res.send({data:fr})
}



module.exports.funA1=funA1
module.exports.funA2=funA2
module.exports.funS1=funS1
