import mongoose from "mogoose"
import { Hospital } from "./hospital.models"



const doctorSchema =  new mangoose.Schema({

    name : {
        type: String,
        required : true
    },
    salary : {
        type: String,
        required : true
    },
    qualification : {
        type: String,
        required : true
    },
    exprienceInYears : {
        type: Number,
        required : true
    },
    worksInHospitals : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Hospital
        }
    ]
},{timestamps: true})

export const Doctor = mangoose.model("Doctor", doctorSchema)