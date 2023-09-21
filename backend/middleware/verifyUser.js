import jwt from 'jsonwebtoken';
import { handleErr, statusCodes } from '../utils/handleError.js';

const verifyToken=(req,res,next)=>{
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(statusCodes.errCode).json({success:false,message:'Please,login'});
    }
    jwt.verify(token, process.env.SECRET_KEY,(err,user)=>{
        if(err){
            return  res.status(statusCodes.errCode).json(handleErr(err));
        }
        req.user=user;
        next();
    })
}
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (err) {
            return res.status(statusCodes.errCode).json(handleErr(err));
        }
        if (req.user.role === 'user' || req.user.role ==="admin" ) {
            next();
        } else {
            return res.status(statusCodes.errCode).json({ success: false, message: 'You are not authenticated' });
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (err) {
            return res.status(statusCodes.errCode).json(handleErr(err));
        }
        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(statusCodes.errCode).json({ success: false, message: 'You are not authorized' });
        }
    });
};
