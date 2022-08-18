const authorModel=require('../models/authorModel')
const bookModel=require('../models/allBookModel')
const router = require('../routes/route')


const funA1=async function(req,res){
    const all=req.body
    const fol=await authorModel.create(all)
    res.send({data:fol})
}

// const funA2=async function(req,res){
//     const result=await authorModel.findOne({author_name:"Chetan Bhagat"})
//     const x=result.author_id
//     const fr=await bookModel.find({author_id:x})
//     res.send({data:fr})
// }



// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )


// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

// const funS1=async function(req,res){
//     const result=await bookModel.findOneAndUpdate({name:"Two states"},
//     {$set:{price:100}},
//     {new:true})
//     const x=result.author_id
//     const price=result.price
//     const result2=await authorModel.find({author_id:x}).select({author_name:1,_id:0})
//     res.send({data:result2,price})
// }



// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

// const funS2=async function(req,res){
//     const result=await bookModel.find({
//         price:{$gte:50,$lte:100}
//     })
//     const result2=result.map(x=>x.author_id)
//     const fol=await authorModel.find({author_id:result2}).select({author_name:1,_id:0})
//     res.send(fol)
// }

//query 2
// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const funA2=async function(req,res){
    const arr=await authorModel.find({author_name:"Chetan Bhagat"})
    let arr1=[]
    for(i=0;i<arr.length;i++){
        const sto=arr[i].author_id
        arr1.push(sto)
    }
    const result2=await bookModel.find({author_id:arr1})
    res.send({data:result2})
}

//query 3
// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const funS1=async function(req,res){
    const result=await bookModel.findOneAndUpdate({name:"Two states"},
        {$set:{price:100}},{new:true})
        const result1=result.author_id
    const updatedPrice=result.price
      const result2=await authorModel.find({author_id:result1}).select({author_name:1,_id:0})
      res.send({data:result2,updatedPrice})
}


//query 3
// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

const funS2=async function (req,res){
    const arr=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let arr1=[]
    
    for(i=0;i<arr.length;i++){
        let so=arr[i].author_id
        arr1.push(so)
    }
    const autn=await authorModel.find({author_id:arr1}).select({author_name:1,_id:0})
    res.send({data:autn})
}







module.exports.funA1=funA1
module.exports.funA2=funA2
module.exports.funS1=funS1
module.exports.funS2=funS2
