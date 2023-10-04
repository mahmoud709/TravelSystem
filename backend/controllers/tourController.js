import Tour from '../models/Tour.js';
import { handleErr, handleSuccess, statusCodes } from '../utils/handleError.js';
import multer from 'multer'
// Set up Multer storage and file naming
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define the upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Define file naming convention
    },
});
const upload = multer({ storage: storage });

// Create New Tour
export const createTour = async (req, res) => {
    const { title, city, address, desc, price, featured } = req.body;
    const photoPath = req.file.path; // This will contain the path to the uploaded photo
    try {
        const newTour = await Tour.create({
            title,
            city,
            address,
            desc,
            price,
            featured,
            photo: photoPath, // Save the photo path in your database
        });
        res.status(statusCodes.successCode).json(handleSuccess(newTour));
    } catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
};

// update Tour
export const updateTour = async (req, res) => {
    const { id } = req.params;
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        if (!updateTour) {
            return res.status(404).json({ success: false, message: 'Not Tour found to update' });
        }
        res.status(statusCodes.successCode).json(handleSuccess(updateTour));
    }
    catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}
// get single Tour
export const getSingleTour = async (req, res) => {
    const { id } = req.params;
    try {
        const singleTour = await Tour.findById(id).populate('reviews');
        if (!singleTour) {
            return res.status(404).json({ success: false, message: 'No tour found' });
        }
        res.status(statusCodes.successCode).json(handleSuccess(singleTour));
    }
    catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}
// dalete Tour
export const deleteTour = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTour = await Tour.findByIdAndDelete(id);
        res.status(statusCodes.successCode).json(handleSuccess(deleteTour));
    }
    catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}
// get all Tours
export const gatallTours = async (req, res) => {
    const { limit, page } = req.query;
    const skip = (page - 1) * limit;
    try {
        const allTours = await Tour.find({}).populate('reviews').limit(limit).skip(skip);
        if (allTours.length == 0) {
            return res.status(200).json({ message: 'There is no tour to display' });
        }
        res.status(statusCodes.successCode).json(handleSuccess(allTours));

    }
    catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}
// Search by city
export const handleSearch = async (req, res) => {
    const tourTitle = req.query.title;
    const Title = new RegExp(tourTitle, 'i');
    try {
        const searchedCity = await Tour.find({ Title });
        res.status(statusCodes.successCode).json(handleSuccess(searchedCity));
    } catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
};
