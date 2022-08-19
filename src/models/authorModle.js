const mongoose=require('mongoose')
const authorModel=new mongoose.Schema({
    authorName:String,
	age:Number,
	address:String,
    rating: Number
})

module.exports=mongoose.model('author',authorModel)