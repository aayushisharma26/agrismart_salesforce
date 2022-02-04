const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://sagarika:sagarika@cluster0.pi2bz.mongodb.net/AgriSmart?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})
    

// ,()=>console.log('Database Connected..'))


