const mongoose=require('mongoose')
const contactUsSchema=new mongoose.Schema({
    name : {
        type:String
        ,required:true

    },
    email : {
        type:String
        ,required:true
        ,unique:true
        

    },
    subject : {
        type:String
        ,required:true
       

    },
    message:{
        type:String
        ,required:true
    }
})
const ContactUs=new mongoose.model("ContactUs",contactUsSchema)
module.exports=ContactUs



