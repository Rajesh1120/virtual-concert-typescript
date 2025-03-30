import { Request, Response } from "express"
import User from '../models/User'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

export const register = async (req : Request, res: Response): Promise<void>=>{
    try{
        const {email, password} = req.body
    // find the user is exists or not
        console.log(email, password)
        let user= await User.findOne({email});
        if (user){
            res.status(400).json({ message: "User already exists"})
            return ;
        }
    // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashpassword= await bcrypt.hash(password, salt)
      

    // creating the user 
        user = new User({email:email, password: hashpassword})
        await user.save();

        res.status(201).json({message:"Created the user successfully"})
        return ;
    }
    catch(error: any){
        console.log(error)
        res.status(500).json(" Internal server error")
        return ;
    }
}

export const login= async(req: Request, res: Response)=>{
    try{
        const { email , password}= req.body
        const user= await User.findOne({email})
        if(!user){
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const isMatch=await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({ message: "Invalid credentials" });
            return ; 
        }
        const token= jwt.sign({user_id:user._id},process.env.JWT_SECRET as string , {expiresIn:'1h'})
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}