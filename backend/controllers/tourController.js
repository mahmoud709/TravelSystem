import Tour from '../models/Tour.js';
import { handleErr,handleSuccess,statusCodes} from '../utils/handleError.js';
// Create New Tour
export const createTour=async(req,res)=>{
    try{
        const newTour=await Tour.create(req.body);
        res.status(statusCodes.successCode).json(handleSuccess(newTour));
    }
    catch(err){
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}
// update Tour
export const updateTour=async(req,res)=>{
    const {id} = req.params;
    try{
        const updateTour=await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true});
        if(!updateTour){
            return res.status(404).json({success:false,message:'Not Tour found to update'});
        }
        res.status(statusCodes.successCode).json(handleSuccess(updateTour));
    }
    catch(err){
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}
// get single Tour
export const getSingleTour=async(req,res)=>{
    const { id } = req.params;
    try{
        const singleTour=await Tour.findById(id);
        if(!singleTour){
            return  res.status(404).json({ success: false, message:'No tour found'});
        }
        res.status(statusCodes.successCode).json(handleSuccess(singleTour));
    }
    catch(err){
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}
// dalete Tour
export const deleteTour=async(req,res)=>{
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
export const gatallTours=async(req,res)=>{
    const {limit,page}=req.query;
    const skip=(page-1)*limit;
    try{
        const allTours=await Tour.find().limit(limit).skip(skip)
        res.status(statusCodes.successCode).json(handleSuccess(allTours));
    }
    catch(err){
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
