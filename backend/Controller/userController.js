import User from '../Model/usermodel.js';
import jwt from 'jsonwebtoken'; 
import dotenv from "dotenv";
dotenv.config();
const JWTKEY = process.env.REACT_APP_JWTKEY;

export const getallusers=(req,res)=>{
    User.find().then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const deleteuser=(req,res)=>{
    User.findByIdAndDelete(req.params.id).then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const updateuser=(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body).then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const getuserbyid=(req,res)=>{
    User.findById(req.params.id).then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const adduser=async (req,res)=>{
    //check if email already exists
      const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.json({ message: "User with this email already exists" });
        }

    User.create(req.body).then(
        (result)=>{
            res.json({status:'success',message:'User added successfully',data:result});
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const userLogin=async (req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user){
       return res.json({message:'User not found'});
    }
    else{
        const isMatch=await User.findOne({email:req.body.email,password:req.body.password});
        if(!isMatch){
           return res.json({message:'Wrong password'});
        }
        const isUser = await User.findOne({email:req.body.email,role:'user'});
        if(isUser){
            const token=jwt.sign({_id:user._id},JWTKEY);
            return res.json({token:token,user:user});
        }
        const isAdmin   = await User.findOne({email:req.body.email,role:'admin'});
        if(isAdmin){
            const token=jwt.sign({_id:user._id},JWTKEY);
            return  res.json({token:token,user:user});
        }
        else{
            return res.json({message:'You do not have Admin privelage'});
        }

    }

}
