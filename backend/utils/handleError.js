export const handleErr=(err)=>{
    return{
        success:false,
        message:'error occured while doing this operation',
        data:err,
    }
}
export const handleSuccess=(data)=>{
    return {
        success:true,
        message:"operation successful",
        data,
    };
}
export const statusCodes={
    successCode:200,
    errCode:404,
}