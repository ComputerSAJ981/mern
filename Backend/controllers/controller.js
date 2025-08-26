
import { date,Feedback,Signup,Login} from '../models/model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const home = async(req,res)=>{
     try {
        res.send("Welcome to the home page!");
     } catch (error) {
        console.log("Error in home page!");
     }
}

const signup = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        // const hash = await bcrypt.hash(password, salt);
        const emailCheck = await Signup.findOne({email:email});
        if(emailCheck){
            res.status(409).json({message:"Email already Exists."});
        }
        else{
            const newUser = await Signup.create({username,email,password,Timestamp:date})
            const token = await newUser.generateToken();
            newUser.token = token;
            await newUser.save();
            res.status(201).json({
                message:"New User added Successfully",
                token,
                userID:newUser._id.toString()
            })
            console.log({message:"User added successfully!"},newUser);
        }
    } catch (error) {
         res.status(500).json({message:"Internal server Error"})
            console.log("Internal server error", error);
    }
}

const feedback = async(req,res)=>{
    try {
        const {email,message} = req.body;
        const emailCheck = await Signup.findOne({email:email});
        if(!emailCheck){
            res.status(404).json({message:"Please Signup before sending the feedback."});
            console.log("Email not exist!")
        }
        else{
            const newFeed = await Feedback.create({email,message,Timestamp:date})
            res.status(200).json({message:newFeed})
            console.log(newFeed)
        }
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
        console.log("Internal server error", error);
    }
}

const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const emailCheck = await Signup.findOne({email:email});;
        if(!emailCheck){
            return res.status(404).json({
            status: 404,
            message: "User not found! Please signup first.",
            });
        }
        else{
            const isPassValid = await bcrypt.compare(password,emailCheck.password);
            if (!isPassValid) {
                return res.status(401).json({
                status: 401,
                message: "Validation failed!",
                errors: { password: "Invalid password!" }
            });
            }  
            else{
                const user = await Login.create({email,password,Timestamp:date})
                res.status(200).json({message:user})
                console.log(user);
                // 3. Generate a new token
                   const token = await user.generateToken();
                   user.token = token;   // save token in DB
                   await user.save();


                return res.status(200).json({message: "Login successful!",
                    emailCheck:emailCheck.email,
                    userID:emailCheck._id.toString(),
                    token
                })
            }
        }  
    } 
    catch(error){
        res.status(500).json({message:"Internal server Error"})
        console.log("Internal server error", error);
    }
}

export {home,signup,feedback,login};