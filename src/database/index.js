import mongoose from "mongoose";

const connectToDB = async ()=>{

    const connectionUrl = "mongodb+srv://abhinavjha10715:axj1234@cluster0.ctgxx.mongodb.net/"

    mongoose.connect(connectionUrl)
    .then(()=>console.log("connection to db success"))
    .catch((e)=>console.log(e))


}
export default connectToDB