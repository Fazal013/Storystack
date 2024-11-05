import express from "express"
import mongoose from "mongoose"


import dotenv from "dotenv"
import cors from "cors"

import reviewRoute  from "./route/review.route.js"

const app = express();
app.use(cors());

dotenv.config();

const PORT=process.env.PORT || 4000; 
const URL=process.env.MongoDBURL;

// conntcting to mongo BD

try{
    mongoose.connect(URL,{
       
        
    });
    console.log("connected to mongoDB");
}catch{
console.log("Error", error);
}

//router defining
app.use("/review",reviewRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})