const mongoose=require('mongoose')
const publisherModel=new mongoose.Schema({
    name:String,
    headQuarter:String,
    
})

module.exports=mongoose.model('publisher',publisherModel)