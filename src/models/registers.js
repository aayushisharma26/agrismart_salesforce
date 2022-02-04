const mongoose=require('mongoose')
const agriSchema=new mongoose.Schema({
    name : {
        type:String
        ,required:true

    },
    phone: {
        type:Number
        ,required:true

    },
    email : {
        type:String
        ,required:true
        ,unique:true
        

    },
    psw : {
        type:String
        ,required:true
       

    },
    psw_repeat:{
        type:String
        ,required:true
        // ,
    // userSoilDetails:{
    //     type:Object,
    //     required:true

    //     }
        
    }
})
const Register=new mongoose.model("Register",agriSchema)
module.exports=Register



