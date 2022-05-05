const mongoose =require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,//스페이스없애주는 역할
        unique:1
    },
    password:{
        type:String,
        maxlength:50
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default: 0
    }, 
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number//유효기간
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {User}