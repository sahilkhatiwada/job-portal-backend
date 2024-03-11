import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";

import { validateAccessToken } from "../middleware/authentication.middleware.js";
import { JobListValidationSchema } from "../validation/job.validation.js";

const router = express.Router();

// register job
router.post(
  "/job/register",
  validateReqBody(JobListValidationSchema),
  validateAccessToken,
  async (req, res) => {
    const newJobData = req.body;
    const Job = req.jobDetails;

    newJobData.userId = Job._id;

    // create new job
    await Job.create(newJobData);
    // send response
    return res.status(201).send({
      message: "Job created successfully.",
    });
  }
);

// delete jobs
router.delete("/job/delete/:id", validateAccessToken, async (req, res) => {
  // extract id from request params
  const jobId = req.params.id;

  // check for MongoId validity
  const isValidMongoId = checkMongoIdValidity(jobId);

  // check if not valid mongoId , throw error
  if (!isValidMongoId) {
    return res.status(400).send({
      message: "Invalid MongoId",
    });
  }
  // check if job with that id exists
  const jobInstance = await Job.findOne({ _id: jobId }); // Changed 'job' to 'Job' for the model, and 'job' to 'jobInstance' for the instance
  // if not job , throw error
  if (!jobInstance) {
    return res.status(404).send({
      message: "Job not found.",
    });
  }
  // check if logged in user is the owner of the job
  const tokenUserId = req.userDetails._id;
  const jobUserId = jobInstance.userId; // Changed 'job' to 'jobInstance'
  const isOwnerOfJob = jobUserId.equals(tokenUserId);

  if (!isOwnerOfJob) {
    return res.status(403).send({
      message: "You are not authorized to delete this job.",
    });
  }
  // delete job
  await Job.deleteOne({ _id: jobId }); // Changed 'job' to 'Job'
  // send response
  return res.status(200).send({
    message: "Job deleted successfully.",
  });
});

export default router;
