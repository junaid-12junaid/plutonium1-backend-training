const authorModel = require("../models/authorModel");
const redis = require("redis");

const { promisify } = require("util");

//Connect to redis
const redisClient = redis.createClient(
  13190,
  "redis-13190.c301.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
redisClient.auth("gkiOIPkytPI3ADi14jHMSWkZEo2J5TDG", function (err) {
  if (err) throw err;
});

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
});



//1. connect to the server
//2. use the commands :

//Connection setup for redis

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);
const EXPIRE_ASYNC=promisify(redisClient.EXPIRE).bind(redisClient)

const createAuthor = async function (req, res) {
  let data = req.body;
  let authorCreated = await authorModel.create(data);
  res.send({ data: authorCreated });
};

// const fetchAuthorProfile = async function (req, res) {
//   let cahcedProfileData = await GET_ASYNC(`${req.params.authorId}`)
//   if(cahcedProfileData) {
//     res.send(cahcedProfileData)
//   } else {
//     let profile = await authorModel.findById(req.params.authorId);
//     await SET_ASYNC(`${req.params.authorId}`, JSON.stringify(profile))
//     res.send({ data: profile });
//   }

// };


const fetchAuthorProfile=async function(req,res){
  try{
  const authorId=req.params.authorId
  const getCache=await GET_ASYNC(`${authorId}`)
  if(getCache){
    return res.status(200).send({status:true,msg:"Getting from cache",data:JSON.parse(getCache)})
  }else{
    const dbget=await authorModel.findOne({_id:authorId})

    if(!dbget) return res.status(404).send({status:false,msg:`No Author is found with this authorId ${authorId}`})
    await SET_ASYNC(`${authorId}`,JSON.stringify(dbget))

    await EXPIRE_ASYNC(`${authorId}`,5)

    return res.status(200).send({status:true,msg:"Getting from DB",data:dbget})

  }
}catch(err){
  return res.status(500).send(err.message)
}
}





module.exports= {createAuthor,fetchAuthorProfile}
