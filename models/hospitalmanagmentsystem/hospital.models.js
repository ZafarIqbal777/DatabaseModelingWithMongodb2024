import mangoose from "mangoose"

const hospitalSchema =  new mangoose.Schema({
    name : {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    city : {
        type: String,
        required : true
    },
    pincode : {
        type: String,
        required : true
    },
    speclizedIn : [    {
         type: String,
        required : true
    }]
   
},{timestamps: true})

export const Hospital = mangoose.model("Hospital", hospitalSchema)