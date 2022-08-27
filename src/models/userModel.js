const mongoose=require('mongoose')

const userM=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:String,
    emailId:String,
    password:String,
    gender:String,
	isDeleted:{
        type:Boolean,
        default:false
    }, //default value is false 
    age:Number,
},{timestamps:true})

module.exports=mongoose.model('user',userM)