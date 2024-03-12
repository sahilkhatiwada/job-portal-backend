import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";

import validateRecruiterAccessToken from "../middleware/authentication.middleware.js";
import { JobListValidationSchema } from "../validation/job.validation.js";

const router = express.Router();

// register job
router.post(
  "/job/create",
  validateReqBody(JobListValidationSchema),
  validateRecruiterAccessToken,
  async (req, res) => {
    const newJob = req.body;
    await Job.create(newJob);
    return res.status(201).send({ message: "Job created successfully." });
  }
);

export default router;
