import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MediaSchema = new Schema({
    filename : {
        type : String,
        required : true
    },
    uploded : {
        type : Date
    }
})

export default mongoose.model("db_media_storage_multer", MediaSchema)