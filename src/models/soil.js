const mongoose=require('mongoose')
const soilSchema=new mongoose.Schema({
    OrganicCarbon:{
        type:String
    }
    ,AvailableNitrogen:{
        type:String
    },
    AvailablePhosphourous:{
        type:String
    },
    AvailablePotassium:{
        type:String
    }, 
    CropGroup:{
        type:String
    },
    Crop:{
        type:String
    },
    Variety:{
        type:String
    },
    Season:{
        type:String
    }, SoilType:{
        type:String
    }, Irritation:{
        type:String
    }
})
const soil=new mongoose.model("soil",soilSchema)
module.exports=soil



