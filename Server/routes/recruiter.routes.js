import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";
import Recruiter from "../models/recruiterModel.js";
import bcrypt from "bcrypt";
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

export default router;
