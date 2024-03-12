import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";

import { validateAccessToken } from "../middleware/authentication.middleware.js";
import Job from "../models/jobModel.js";
import { JobValidationSchema } from "../validation/job.validation.js";

const router = express.Router();

// register job
router.post(
  "/register/job",
  validateAccessToken,
  validateReqBody(JobValidationSchema),
  async (req, res) => {
    const newJobData = req.body;
    const user = req.userDetails;

    newJobData.userId = user._id;

    // create new job
    await Job.create(newJobData);
    // send response
    return res.status(201).send({
      message: "Job created successfully.",
    });
  }
);

export default router;
