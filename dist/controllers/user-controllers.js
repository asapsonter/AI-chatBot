import User from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
    // Get all users
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (err) {
        console.error(err);
        return res.status(200).json({ message: "ERROR", cause: err.message });
    }
    ;
};
//# sourceMappingURL=user-controllers.js.map