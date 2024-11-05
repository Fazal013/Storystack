import Review from "../model/review.model.js";

export const getReview=async(req,res)=>{
    try{
        const review=await Review.find()
        res.status(200).json(review)
    }catch (error) {
        console.log("error:",error)
        res.status(500).json({ message: "Error fetching reviews" })

    }
};