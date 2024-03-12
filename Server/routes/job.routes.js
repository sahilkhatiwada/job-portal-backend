import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";

import { JobValidationSchema } from "../validation/job.validation.js";
import Job from "../models/jobModel.js";
import { isRecruiter } from "../middleware/authentication.middleware.js";

const router = express.Router();

// register job
router.post(
  "/register/job",
  isRecruiter,
  validateReqBody(JobValidationSchema),
  async (req, res) => {
    // extract new job from request body
    const newJob = req.body;
    // we need logged in user id for job owner id
    newJob.ownerId = req.loggedInUser._Id;

    // create new job
    await Job.create(newJob);

    return res.status(200).send({ message: "Job created successfully." });
  }
);

export default router;
