import mongoose from "mongoose";
const Connection =()=>{
    const url = process.env.MONGO_CONNECTION_URI
    mongoose.connect(url).then(()=>{
        console.log("database Connected");
    }).catch((err=>{
        console.log("error");
    }))


}

export default Connection;