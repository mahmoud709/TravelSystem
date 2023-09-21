import User from "../models/User.js"
import { handleErr, handleSuccess, statusCodes } from "../utils/handleError.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { username, email, password, photo } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
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
export const signin=async(req,res)=>{
    let correctPass;
    const{email,password}=req.body;
    try{
        const logedUser = await User.findOne({ email });
        if (logedUser) {
            correctPass =bcrypt.compareSync(password, logedUser.password);
        }
        if (!logedUser || !correctPass) {
            return res.status(statusCodes.errCode).json({ success: false, message: 'Email or password is incorrect' });
        }
        const token = jwt.sign({ id: logedUser.id, name: logedUser.username,role:logedUser.role }, process.env.SECRET_KEY,{
            expiresIn:"30d"
        })
        res.cookie('accessToken',token,{
            httpsOnly:true,
            expires: token.expiresIn
        });
        res.status(statusCodes.successCode).json({ success: true, message: 'login successfully',data:token,role:logedUser.role });
    }   
    catch(err){
        res.status(statusCodes.errCode).json(handleErr(err))
    }
}


