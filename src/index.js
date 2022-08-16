const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const mongoose=require('mongoose')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Junaid619-DB:oS4jO8pwUnVaE0Fu@cluster0.4ufpuyj.mongodb.net/book45-DB?retryWrites=true&w=majority",{
useNewUrlParser:true
})
.then(()=>console.log("MongoDB is connected"))
.catch(err =>console.log(err))



app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
