import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import generateResetToken from "../utils/resetPasswordToken.js";
import sendResetEmail from "../utils/sendResetEmail.js";

const router = express.Router();

// post to forget password
router.post("/user/forget", async (req, res) => {
  const { email } = req.body;
  // validate email
  if (!email) {
    return res.status(400).send({ message: "Email is required." });
  }
  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // generate a reset token and save token
    const resetToken = generateResetToken(user);
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // expires in 10 mins
    await user.save();

    // send the email with the reset link
    const resetLink = `http://localhost:8000/reset-password/${resetToken}`;
    await sendResetEmail(email, resetLink);

    // return success response
    res.status(200).send({ message: "Reset link sent to your email." });
  } catch (error) {
    res.status(500).send({ message: "Internal server error." });
  }
});

// post to reset password
router.post("/user/reset/password", async (req, res) => {
  const { restToken, newPassword } = req.body;
  //   validate reset Token and new password
  if (!restToken || !newPassword) {
    return res.status(400).send({ message: "All fields are required." });
  }
  try {
    // check if reset token is valid
    const user = await User.findOne({
      resetPasswordToken: restToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    // if not valid, throw error
    if (!user) {
      return res.status(400).send({ message: "Invalid or expired token." });
    }
    // hash the new password
    user.password = await bcrypt.hash(newPassword, 10);
    // delete the reset tokens from the database
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).send({ message: "Password reset successfully." });
  } catch (err) {
    res.status(500).send({ message: "Internal server error." });
  }
});

export default router;
