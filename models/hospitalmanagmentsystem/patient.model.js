import mangoose from "mangoose"

const patientSchema =  new mangoose.Schema({
    name : {
        type : String,
        require : true
    },

    diagonsedWith: {
        type: String,
        required : true
    },
    address: {
        type: String,
        required : true
    },

    age: {
        type: Number,
        required : true
    },
    bloodGroup: {
        type: String,
        required : true
    },

    gender: {
        type: String,
        enum  : ["M", "F", "O"],
        required : true
    }, 
    admittedIn : {
        type : mongoose.Schema.Type.ObjectId,
        ref: "Hospital"
    }

},{timestamps: true})

export const Patient = mangoose.model("Patient", patientSchema)