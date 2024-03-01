import mangoose from "mangoose"

const medicalRecordSchema =  new mangoose.Schema({},{timestamps: true})

export const MedicalRecord = mangoose.model("MedicalRecord", medicalRecordSchema)