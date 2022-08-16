const mongoose=require('mongoose')

const userBook=new mongoose.Schema({
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

module.exports=mongoose.model('bookfind',userBook)



// On similar lines as above(today’s mongodb session APIs), complete this assignment and submit explainer video for the same : Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 