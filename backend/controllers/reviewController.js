import Review from "../models/Review.js";
import { handleErr, statusCodes } from "../utils/handleError.js";

export const createReview = async (req, res) => {
    const user = req.user.name;
    const { reviewText, rating } = req.body;

    try {
        const reviewContent = await Review.create({ reviewText, rating, user });
        res.status(statusCodes.successCode).json({
            success: true,
            message: 'Review created successfully',
            data: { reviewContent, user }
        });
    } catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
};

export const getAllReviews = async (req, res) => {
    const currentUser=req.user.name;
    try {
        const allReviews = await Review.find();
        res.status(statusCodes.successCode).json({
            success: true,
            message: 'All Reviews',
            data: { allReviews, currentUser }
        });
    } catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
};