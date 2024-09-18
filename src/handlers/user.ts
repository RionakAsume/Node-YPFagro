import { Request,Response } from "express";
import User from "../models/User.models";

const postUser = async (req:Request,res:Response)=>{
   try {
    const user=await User.create(req.body)
    res.json({data:user})
   } catch (error) {
    console.log(error)
   }
}

export {
    postUser
}