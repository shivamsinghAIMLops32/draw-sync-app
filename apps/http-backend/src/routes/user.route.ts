import { Router } from "express";
import {
  loginUser,
  logoutUser,
  signUser,
} from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.post("/signup", signUser);

userRouter.post("/login", loginUser);

userRouter.post("/logout", logoutUser);
