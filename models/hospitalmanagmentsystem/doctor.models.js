import mangoose from "mangoose"

const doctorSchema =  new mangoose.Schema({},{timestamps: true})

export const Doctor = mangoose.model("Doctor", doctorSchema)