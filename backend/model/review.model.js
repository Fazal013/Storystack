import mongoose from "mongoose";

const reviewScheme=mongoose.Schema({
    name:String,
    title:String,
    rating:Number,
    description:String,
    category:String
})

const Review=mongoose.model("Review", reviewScheme);

export default Review;