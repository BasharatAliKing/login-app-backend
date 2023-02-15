const mongoose=require("mongoose");

// schema
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    pnumber:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
   
});

  // Models
const Register=new mongoose.model("DataRegister", registerSchema);

module.exports=Register;