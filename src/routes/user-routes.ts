import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";


const userRoutes = Router(); // router instance

userRoutes.get('/',getAllUsers);


export default userRoutes;