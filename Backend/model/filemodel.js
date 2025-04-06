import mongoose from "mongoose";

const fileSchema=new mongoose.Schema({
    path:{
        type:String,
        requried:true,
    },
    name:{
        type:String,
        requried:true,
    }
})

const fileModel= mongoose.model('files',fileSchema);

export default fileModel;