import mongoose from "mongoose";

const Userschema= new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String, require:true},
    eventTokens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EventToken' }]
},{timestamps:true});

export default mongoose.model("User", Userschema);