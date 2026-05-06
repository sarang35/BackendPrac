import connectDB from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    app.on("error",(err)=>{
        console.log("Server error: ", err);
        throw err;
    });
})
.catch((err)=>{
    console.log("mongoDB connection failed");
    throw err;
});




