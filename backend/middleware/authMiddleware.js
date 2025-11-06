import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//GENERATE JWT TOKEN
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}
export const protect = async (req, res,next) => {
    try {
        let token = req.headers.authorization;
        if (token && token.startsWith("Bearer")) {
            token = token.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } else {
            return res.status(401).json({ message: "Not authorized, no token found" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Not authorized",
            error: "token failed"
        });
    }
};