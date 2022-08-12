const mongoose=require('mongoose');

const collection=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:{
        type:String,
        unique:true,
        required:true
    },
    age:Number,
    address:String,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    email:String

},{timestamps:true})

module.exports=mongoose.model("User",collection)