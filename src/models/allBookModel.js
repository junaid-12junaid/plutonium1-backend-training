const mongoose=require('mongoose')

const allBook=new mongoose.Schema({

        name:String,
        author_id:Number,
        price:Number,
        ratings:Number,

},{timestamps:true})


module.exports=mongoose.model('book',allBook)