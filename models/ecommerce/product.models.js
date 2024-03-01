import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
        
    },
    product  : {
        type : String,
        required: true
    },
    productImage  : {
        type : String,
        required: true
    },
    price :{
        type : Number,
        defult: 0
    },
    stock: {
        default: 0,
        type : Number
    },
    category : {
        type : mongoose.Schema.Type.ObjectId,
        ref : "Category",
        required : true
    },
    owner : {
        type : mongoose.Schema.Type.ObjectId,
        ref : "User"
    }


}, {timestamp: true}) // timestamps provide createded time and updated date 


export const Product =  mongoose.model("Product", productSchema)