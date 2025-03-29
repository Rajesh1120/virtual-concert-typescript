import mongoose from "mongoose";

const Userschema= new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String, require:true}
},{timestamps:true});

export default mongoose.model("User", Userschema);