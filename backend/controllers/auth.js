import User from "../models/User.js"
import { handleErr, handleSuccess, statusCodes } from "../utils/handleError.js"
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password, photo } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(`${process.env.SECRET_KEY}`, salt);
    const existEmail=await User.findOne({email});
    try {
            if(existEmail){
                return res.status(statusCodes.errCode).json({success:false,message:'Email is exist,try onther one'});
            }
            const newUser = await User.create({ username, email, password: hash, photo })
            res.status(statusCodes.successCode).json(handleSuccess(newUser));
    }
    catch (err) {
        res.status(statusCodes.errCode).json(handleErr(err));
    }
}