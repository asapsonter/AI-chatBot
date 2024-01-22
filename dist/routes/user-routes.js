import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
const userRoutes = Router(); // router instance
userRoutes.get('/', getAllUsers);
userRoutes.post("/signup", userSignup); //
export default userRoutes;
//# sourceMappingURL=user-routes.js.map