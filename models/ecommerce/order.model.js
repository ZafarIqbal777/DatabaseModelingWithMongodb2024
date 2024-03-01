import mongoose  from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productID :{
        type : mongoose.Schema.Types.ObjectID,
        ref: "Product"
    },
    quantity: {
        type : Number,
        required : true 
    } 
})

const orderSchema = new mongoose.Schema({
orderPrice: {
    type : Number,
    require: true 
}, 
customer : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
},
orderItems :{
    type: [orderItemSchema]
},
address :{
    type : String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    default: "PENDING"
}


}, {timestamps: true})


export const Order = mongoose.model("", orderSchema)