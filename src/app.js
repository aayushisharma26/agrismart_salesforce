const express =require('express')
const path=require('path')
const app=express();
const hbs=require('hbs')

const Register=require("./models/registers");
const ContactUs=require("./models/contactus");
const soil=require("../src/models/soil")
const { send } = require('process');
const { Db } = require('mongodb');
require("./db/conn")
const port=process.env.PORT || 3000;
const static_path = path.join(__dirname,"../templates")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(express.static(static_path)) 
app.set("view engine","hbs") 
app.set("views",template_path )
hbs.registerPartials(partials_path)
console.log(path.join(__dirname,"../templates/partials"));

app.get("/",(req,res)=>{
    res.render("login")});

app.get('/register',(req,res)=>{
    res.render("register")
})    
app.post('/register',(req,res)=>{
    try{
        // console.log(req.body.name)
        // res.send(req.body.name)
       const password=(req.body.psw)
       const repeat_password=(req.body.psw_repeat)
       if (password===repeat_password){


        const AgriSmart= new Register({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            psw:req.body.psw,
            psw_repeat:req.body.psw_repeat

        })
        // console.log(AgriSmart)
        const registered=  AgriSmart.save();
        res.status(201).render("home")

       }
       else{
           res.send("please correct the password")
       }
      

    }catch(error){
        res.status(400).send(error)
    }
})  
app.get('/login',(req,res)=>{
    res.render("login")
}) 
app.post('/login',async(req,res)=>{
    try{
        const email1=req.body.name
        const psw=req.body.psw
        const useremail=await Register.findOne({email:email1})
        // console.log(`${email1},${psw}`)
        if (useremail.psw===psw){
            res.status(201).render("home")

        }
        else{
            res.send("password do not match")
        }
        
    // res.send(useremail)
    // console.log(useremail)

    }catch(error){
        res.status(400).send("invalid staus")

    }

})

app.post('/contact',(req,res)=>{
    try{
            const ContactUs= new ContactUs({
                name:req.body.name,
                email:req.body.email,
                subject:req.body.subject,
                message:req.body.message
            })
            const registered=  ContactUs.save();
            res.status(201).render("home")

    }catch(error){
        // res.status(400).send(error)
    }
    res.render("home")
})


app.get('/new',(req,res)=>{
    res.render("new")

}) 
app.post('/new',async(req,res)=>{
    try{
        const id=res.body.nid
        const npsw=res.body.npsw
        const cpsw=res.body.cpsw
        res.save()
      

    }catch(err){
     res.send(err)
  
    }
})



app.get('/home',(req,res)=>{
    res.render("home")
}) 

app.get('/about',(req,res)=>{
    res.render("about")
}) 
app.get('/contact',(req,res)=>{
    res.render("contact")
}) 
app.get('/index',(req,res)=>{
    res.render("index")
}) 
app.get('/headers',(req,res)=>{
    res.render("headers")
}) 

app.get('/soil',(req,res)=>{
    res.render("soil")
}) 
app.post('/soil',async(req,res)=>{
    try{  
       

    const mydetails=await new soil({
        OrganicCarbon:req.body.oc,
        AvailableNitrogen:req.body.n,
        AvailablePhosphourous:req.body.p,
        AvailablePotassim:req.body.k,
        CropGRoup: req.body.Group_Code,
        Crop: req.body.Crop_Code1,
        Variety: req.body.Variety_Code,
        Season: req.body.Season_Code,
        SoilType: req.body.Soil_type_code,
        Irritation: req.body.Irrigation_Code,
        // userSoilDetails:soil
    })
    // console.log(mydetails)
    const register=  mydetails.save();

    // const var1="Value 1";
    // // const var2="Value 2";
    // const var3="Value 3";
    // const var4="Value 4";
    // const var5="Value 5";


    res.status(201).render("soil", {showResult: true})

    }catch(err){

        res.send(err)
    }
})
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`)
})