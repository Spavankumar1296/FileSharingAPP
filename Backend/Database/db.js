import mongoose from "mongoose";
const Connection =()=>{
    const url="mongodb+srv://Spavankumar:202147898@cluster1.a7oz5bd.mongodb.net/";

    mongoose.connect(url).then(()=>{
        console.log("database Connected");
    }).catch((err=>{
        console.log("error");
    }))


}

export default Connection;