const mongoose=require('mongoose')

const carmodel=new mongoose.Schema({
    bookname:String,
    author:String,
    year:Number,
    type:[String],
    isPublished:Boolean,
    price:{
        indianPrice:String,
        USAPrice:String
    },
    date:{
        type:Date,
        default:Date.now

    },
    sales:{
        type:Number,
        default:10
    }
},{timestamps:true})

module.exports=mongoose.model('book1', carmodel)

