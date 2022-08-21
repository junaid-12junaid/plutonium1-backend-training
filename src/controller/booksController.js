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
    const set=req.body
    // if(!set.author){
    //     return res.send({data:"The author Id is required"})
    // }
    // const author=await authorModel.findById(set.author)
    // if(!author){
    //     return res.send({data:"The author id is in valid"})
    // }
    // if(!set.publisher){
    //     return res.send({data:"the publisher Id is required"})
    // }
    // const publisher=await publisherModel.findById(set.publisher)
    // if(!publisher){
    //     return res.send({data:"Give the valid ID for the publisher"})
    // }
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


// a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
const updateHardCover=async function(req,res){
    

    const books=await bookModel.find().populate(['author','publisher'])

    const bookOfpublisher=books.filter(x=>(x.publisher.name=="Penguin")||(x.publisher.name=="HarperCollins"))

    const booksname=bookOfpublisher.map(x=>(x.name))
    let arr1=[]
    for(i=0;i<booksname.length;i++){
        let ele=booksname[i]
        let updatedata=await bookModel.findOneAndUpdate({name:ele},{$set:{isHardCover:true}},{new:true})
        arr1.push(updatedata)
    }
    res.send({data:arr1})
}

// b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 
const updatePrice=async function(req,res){
    const alldata=await bookModel.find().populate(['author','publisher'])

    const filterdata=alldata.filter(x=>(x.author.rating>=3.5))

    const mop=filterdata.map(x=>(x.name))
    let arr1=[]

    for(i=0;i<mop.length;i++){
        let rate=mop[i]
        const updatePrice1=await bookModel.findOneAndUpdate({name:rate},{$inc:{price:+10}},{new:true})
        arr1.push(updatePrice1)
    }
    res.send({data:arr1})

}


//if author age is >=50,update the book rating to 10

const bookrating=async function(req,res){
    const books=await bookModel.find().populate('author')
    const bookfilter=books.filter(x=>(x.author.age>=50))
    const bookname=bookfilter.map(x=>x.name)
    let arr1=[]
    for (i=0;i<bookname.length;i++){
        let bookupdate=await bookModel.findOneAndUpdate({name:bookname[i]},{$set:{ratings:10}},{new:true})
        arr1.push(bookupdate)
    }
    // const er=await arr1.find().populate('author')
    res.send({data:arr1})
}


module.exports.createAuthor=createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBooks=createBooks
module.exports.alldetails=alldetails
module.exports.updateHardCover=updateHardCover
module.exports.updatePrice=updatePrice
module.exports.bookrating=bookrating