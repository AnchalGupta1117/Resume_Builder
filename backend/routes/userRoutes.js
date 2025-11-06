import express from "express";
import { registerUser,loginUser} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();
 
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

//protected route as token will be required
userRouter.get('/profile', protect, (req, res) => {
    res.status(200).json(req.user);
});

export default userRouter;