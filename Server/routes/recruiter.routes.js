import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";
import Recruiter from "../models/recruiterModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { recruiterRegSchema } from "../validation/recruiter.validation.js";

const router = express.Router();

router.post(
  "/recruiter/register",
  validateReqBody(recruiterRegSchema),
  async (req, res) => {
    const newRecruiterData = req.body;
    // check if recruiter already exists
    const recruiter = await Recruiter.findOne({
      CompanyEmail: newRecruiterData.CompanyEmail,
    });
    // if recruiter exists , throw error
    if (recruiter) {
      return res.status(409).send({
        message: "Recruiter already exists.",
      });
    }
    // hash Password before saving to database
    const hashedPassword = await bcrypt.hash(newRecruiterData.password, 10);
    newRecruiterData.password = hashedPassword;

    // create new recruiter
    await Recruiter.create(newRecruiterData);
    res.status(201).send({
      message: "Recruiter created successfully.",
    });
  }
);

// login router
router.post("/recruiter/login", async (req, res) => {
  const loginCredentials = req.body;

  // find the user by email
  const recruiter = await Recruiter.findOne({
    CompanyEmail: loginCredentials.CompanyEmail,
  }).select("-__v -Password");
  // If no such user exist then send error message
  if (!recruiter) {
    return res.status(404).send({ message: "User not found." });
  }
  // compare password with the hashed password in database
  const isMatch = await bcrypt.compare(
    loginCredentials.password,
    recruiter.password
  );
  //if password doesn't match send error
  if (!isMatch) {
    return res.status(401).send({ message: "Invalid password." });
  }
  // generate token and send response
  let token = jwt.sign({ email: recruiter.companyEmail }, "JWT_SECRET_KEY", {
    expiresIn: "1h",
  });
  // remove password from user object before sending it to client side
  recruiter.password = undefined;
  res.status(200).send({ message: "Login successful.", token, recruiter });
});

export default router;
