const mongoose=require('mongoose');
const Schema=mongoose.Schema

const userSchema=new Schema({
    id:{
        type:Number,  
    },
    Email:{
        type:String
    },
    Name:{
        type:String
    },
    Phone:{
        type:String
    },
    Password:{
        type:String
    },
})

const User=mongoose.model('User',userSchema)
module.exports=User