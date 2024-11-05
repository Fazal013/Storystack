import express from "express"
import { getReview } from "../controller/review.controller.js"
import { get } from "mongoose"

const router=express.Router()

router.get("/",getReview);

export default router;
