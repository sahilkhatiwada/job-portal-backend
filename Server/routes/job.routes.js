import { validateReqBody } from "../middleware/validation.middleware.js";
import Job from "../models/jobModel.js";
import express from "express";

import { jobRegSchema } from "../validation/job.validation.js";
import { checkMongoIdValidity } from "../middleware/checkMongoIdValidity.js";

const router = express.Router();

// register job
router.post(
  "/job/register",
  validateReqBody(jobRegSchema),
  async (req, res) => {
    const newJobData = req.body;
    // check if job already exists
    const job = await Job.findOne({ jobTitle: newJobData.jobTitle });
    //   if job exists , throw error
    if (job) {
      return res.status(409).send({
        message: "Job already exists.",
      });
    } else {
      // create new job
      await Job.create(newJobData);
      // send response
      return res.status(201).send({
        message: "Job created successfully.",
      });
    }
  }
);

// update jobs

export default router;
