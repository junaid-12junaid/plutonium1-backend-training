const axios=require('axios')

const getDistrict=async function(req,res){
    try{
   let district=req.query.district_id
    let date=req.query.date
    let operation={
        method:'get',
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`

    }
    const result=await axios(operation)
    console.log(`the query params are ${district} ${date}`)
    res.status(200).send({data:result.data})
}
catch(err){
    res.status(500).send({data:err.message})
}
}






const weatherData=async function(req,res){
try{
let arr=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
let arr1=[]
for(i=0;i<arr.length;i++){
const operation={
    method:'get',
    url:`http://api.openweathermap.org/data/2.5/weather?q=${arr[i]}&appid=3c5e535bdfe1646fa9af020f711ccb18`
}
let arr3={city:arr[i]}
const datawe=await axios(operation)
arr3.temp=datawe.data.main.temp
arr1.push(arr3)
}
const sortarr=arr1.sort(function(a,b){
    return a.temp-b.temp
})
res.status(200).send({data:sortarr})
}
catch(err){
    res.status(500).send({data:err.message})
}
}


const meme=async function(req,res){
    try{
    let template_id=req.query.template_id
    let text0=req.query.text0
    let text1=req.query.text1
    let username=req.query.username
    let password=req.query.password
let operation={
    method:'post',
    url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
}
const meme1=await axios(operation)

res.status(200).send({data:meme1.data})
    }catch(err){
        res.status(500).send(err.message)
    }
}











module.exports.getDistrict=getDistrict

module.exports.weatherData=weatherData

module.exports.meme=meme