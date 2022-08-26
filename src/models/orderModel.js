const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const orderModel=new mongoose.Schema({
	userId:{
        type:ObjectId,
        ref:'user',
        required:true
    },
	productId:{
        type:ObjectId,
        ref:'product',
        required:true
    },
	amount:Number,
	isFreeAppUser:Boolean, 
	date: String
})

module.exports=mongoose.model('order',orderModel)