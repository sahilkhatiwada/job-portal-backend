import { User } from "../models/userModel.js";
import express from "express";
import bcrypt from "bcrypt";
import { userRegSchema } from "../validation/user.validation.js";
import { loginUserSchema } from "../validation/user.validation.js ";
import { validateReqBody } from "../middleware/validation.middleware.js";
import jwt from "jsonwebtoken";
const router = express.Router();
router.post(
  "/user/register",
  validateReqBody(userRegSchema),
  async (req, res) => {
    const newUserData = req.body;
    // check if user already exists
    const user = await User.findOne({ email: newUserData.email });
    //   if user exists , throw error
    if (user) {
      return res.status(409).send({
        message: "User already exists.",
      });
    }
    // hash Password
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);

    newUserData.password = hashedPassword;
    //   create new user
    await User.create(newUserData);
    // send response
    return res.status(201).send({
      message: "User created successfully",
    });
  }
);
// login  user router
router.post(
  "/user/login",
  validateReqBody(loginUserSchema),
  async (req, res) => {
    const loginCredentials = req.body;
    // check if user exists
    const user = await User.findOne({ email: loginCredentials.email });

    // if user does not exist
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // check if password is correct
    const isPasswordValid = await bcrypt.compare(
      loginCredentials.password,
      user.password
    );

    // if password is incorrect
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password." });
    }
    // generate token and send response
    const token = jwt.sign({ email: user.email }, "JWT_SECRET ", {
      expiresIn: "1h",
    });

    // remove password from user
    user.password = undefined;

    // send response
    return res.status(200).send({
      message: "Login successful.",
      user: user,
      token: token,
    });
  }
);

export default router;
