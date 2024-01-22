import { NextFunction, Request, Response } from "express";
import User from "../models/User.js"

export const getAllUsers = async (
    req: Request,
     res: Response, 
     next: NextFunction) => {
    // Get all users
    try {
        const users = await User.find();
        return res.status(200).json({message: "OK", users});

    } catch (err) {
        console.error(err);
        return res.status(200).json({message: "ERROR", cause: err.message});

    };
}

export const userSignup = async (
    req: Request,
     res: Response, 
     next: NextFunction) => {
    // Get all users
    try {
        const users = await User.find();
        return res.status(200).json({message: "OK", users});

    } catch (err) {
        console.error(err);
        return res.status(200).json({message: "ERROR", cause: err.message});

    };
}