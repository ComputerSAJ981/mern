import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


const date = new Date().toLocaleDateString('en-US',{
    year:"numeric",
    month:"2-digit",
    day:"2-digit",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    hour12:true,
    timeZone:'Asia/Karachi'
})



//============Schema for user=================

const SignUpSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    Timestamp:{
        type:String,
        default:date,
    }

})

//==================Schema for Feedback==================


const FeedbackSchema = new mongoose.Schema({
        email:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        },
        Timestamp:{
            type:String,
            default:date,
        }
})

//==================Schema for Login==================


const LoginSchema = new mongoose.Schema({
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        Timestamp:{
            type:String,
            default:date,
        }
})
//==========Pre-Middleware=============

SignUpSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        try {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);

            console.log("Password hashed successfully");
            next();
            
        } catch (error) {
            console.error("Error hashing password:", error);
            next();
        }
    }
})


//================ JWT Token ===============================

SignUpSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userID:this._id.toString(),
            email:this.email
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn:"2d"
        }
    )
    } catch (error) {
        console.log("Error in Token!",error);
    }
}


//================= MODEL for Signup =======================

const Signup = mongoose.model('Signup',SignUpSchema);


//================= MODEL for Feedback =======================

const Feedback = mongoose.model('Feedback',FeedbackSchema);


//================= MODEL for Login =======================

const Login = mongoose.model('Login',LoginSchema);

export {date,Signup,Feedback,Login};