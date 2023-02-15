const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
require("./db/conn");
const Register=require("./models/login");
const port=process.env.PORT || 3000;

const staticPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

//app.set("view engine","hbs");

app.get("/register", (req,res)=>{
    res.render("index");
});
app.get("/", (req,res)=>{
    res.render("Hello from the Other side...");
});

app.post("/register", async(req,res)=>{
    try{

        //   console.log(req.body.name);
        //   res.send(req.body.name);  
     const registerform= new Register({
        name:req.body.name,
        address:req.body.address,
        email:req.body.email,
        pnumber:req.body.pnumber,
        gender:req.body.gender,
        week:req.body.week
       });

       const saveForm=await registerform.save();
      // console.log(saveForm);
         res.status(201).send("Your Data is Submitted!!");
    }catch(err){
        res.status(400).send(err);
    }
})

app.listen(port,()=>{
    console.log(`Listening from the port no ${port}`);
});