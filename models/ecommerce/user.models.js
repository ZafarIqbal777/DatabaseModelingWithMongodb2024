import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique: true,
        lowercase: true
    },
    email : {
        type : String,
        required : true,
        unique: true,
        lowercase: true
    },
    email : {
        type : String,
        required: true
    }

}, {timestamp: true}) // timestamps provide createded time and updated date 


export const User =  mongoose.model("User", userSchema)
