const mongoose=require('mongoose')

const productModel=new mongoose.Schema({
        name:String,
        category:String,
        price:{
            type:Number,
            required:true
        }//mandatory property
})

module.exports=mongoose.model('product',productModel)