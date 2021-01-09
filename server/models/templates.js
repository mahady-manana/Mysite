import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TemplatesSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
    },
    category : {
        type : String
    },
    author : {
        type : String
    },
    created : {
        type : Date,
        default : Date.now()
    }
})

export default mongoose.model("Templets", TemplatesSchema)