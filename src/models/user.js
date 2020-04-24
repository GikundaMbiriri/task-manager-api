const mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator')
const Schema=mongoose.Schema
const validator=require('validator');
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')
const Task = require('./task')
const userSchema=new mongoose.Schema({
    name:{
type:String,
required:true,
trim:true
    },
    password:{
        type:String,
        required:true,
        
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot contain "password"')
            }
        }
    }
    ,
    email:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        required:true,
        validate(value){
if(!validator.isEmail(value)){
    throw new Error("Please give a valid email")

}
        }
    },
    age:{
type:Number,
default:0,
validate(value){
    if(value<0){
        throw new Error('please enter a positive number.');
    }
}
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],avatar:{
        type:Buffer
    }
},{
    timestamps:true
})
userSchema.virtual('tasks',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})
userSchema.methods.toJSON= function (){
    const user=this
    const userObject=user.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject
}
userSchema.methods.generateAuthToken= async function(){
    const user = this
const token= await jwt.sign({_id:user._id.toString()},process.env.JWT)
user.tokens=user.tokens.concat({token})
await user.save()
return token
}
userSchema.statics.findByCredentials=async (email,password)=>{
const user = await User.findOne({email})
if(!user){
    throw new Error('Unable to login')
}
const isMatch = await bcrypt.compare(password,user.password)
if(!isMatch){
    throw new Error('Unable to login')
}
return user

}
userSchema.pre('save',async function (next){
    const user=this
    if (user.isModified('password')){
        user.password= await bcrypt.hash(user.password,8)
    }
    next()
})
userSchema.pre('remove',async function(next){
    const user=this
    await Task.deleteMany({owner:user._id})
    next()
})
userSchema.plugin(uniqueValidator)
const User = mongoose.model('User',userSchema
)

module.exports=User