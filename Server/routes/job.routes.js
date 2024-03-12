import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";

import {
  isRecruiter,
  isSeeker,
  isUser,
} from "../middleware/authentication.middleware.js";
import Job from "../models/jobModel.js";
import {
  JobValidationSchema,
  seekerPaginationSchema,
} from "../validation/job.validation.js";
import { checkMongoIdValidity } from "../middleware/checkMongoIdValidity.js";
import { checkJobOwnership } from "../middleware/check.job.ownership.js";

const router = express.Router();

// register job
router.post(
  "/register/job",
  isRecruiter,
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
// get all jobs for a user
router.get(
  "/job/details/:id",
  isUser,
  checkMongoIdValidity,
  async (req, res) => {
    const jobId = req.params.id;
    // find job
    const jobDetails = await Job.findOne({ _id: jobId });
    if (!jobDetails) {
      return res.status(404).send({ message: "Job not found." });
    }
    // hide ownerId
    jobDetails.ownerId = undefined;
    // send response
    return res.status(200).send(jobDetails);
  }
);

// Delete Jobs
router.delete(
  "/job/delete/:id",
  isRecruiter,
  checkMongoIdValidity,
  checkJobOwnership,
  async (req, res) => {
    // extract id from request parameter
    const jobId = req.params.id;

    // delete product
    await Job.deleteOne({ _id: jobId });

    // send response
    return res.status(200).send({ message: "Job deleted successfully." });
  }
);

// edit job
router.put(
  "/job/edit/:id",
  isRecruiter,
  checkMongoIdValidity,
  validateReqBody(JobValidationSchema),
  checkJobOwnership,
  async (req, res) => {
    // extract id from request parameter
    const jobId = req.params.id;

    // extract new values from request body
    const newJobData = req.body;
    // update job
    await Job.updateOne({ _id: jobId }, { $set: { ...newJobData } });
    // send response
    return res.status(200).send({ message: "Job updated successfully." });
  }
);

// get job list by seeker

router.post(
  "/job/seeker/list",
  isSeeker,
  validateReqBody(seekerPaginationSchema),
  async (req, res) => {
    //  extract pagination details from request body
    const { page, limit, searchText, jobTitle } = req.body;

    // calculate skip
    const skip = (page - 1) * limit;

    // filter stage
    let match = {};

    if (searchText) {
      match = {
        name: { $regex: searchText, $options: "i" },
      };
    }
    if (jobTitle) {
      match = {
        ...match,
        jobTitle: jobTitle,
      };
    }
    // query stage
    const jobs = await Job.aggregate([
      {
        $match: match,
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
      {
        $project: {
          companyName: 1,
          jobTitle: 1,
          education: 1,
          experience: 1,
          salary: 1,
          skills: 1,
          jobDescription: 1,
        },
      },
    ]);

    // Calculate number of pages
    const totalJobs = await Job.countDocuments(match);
    const pageCount = Math.ceil(totalJobs / limit);
    // send response
    return res.status(200).send({
      message: "success",
      jobs: jobs,
      pageCount: pageCount,
    });
  }
);

// get jobs list by Recruiter
router.post("/job/recruiter/list", isRecruiter, async (req, res) => {
  // extract pagination details from request body
  const { page, limit, searchText } = req.body;
  // calculate skip
  const skip = (page - 1) * limit;

  // filter stage
  let match = { ownerId: req.loggedInUserId };

  if (searchText) {
    match = {
      ownerId: req.loggedInUserId,
      name: { $regex: searchText, $options: "i" },
    };
  }
  // query stage
  const jobs = await Job.aggregate([
    {
      $match: match,
    },

    {
      $sort: { createdAt: -1 },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
    {
      $project: {
        companyName: 1,
        jobTitle: 1,
        education: 1,
        experience: 1,
        salary: 1,
        skills: 1,
        description: 1,
      },
    },
  ]);

  // Calculate number of pages
  const totalJob = await Job.find(match).countDocuments();
  const pageCount = Math.ceil(totalJob / limit);
  // send response
  return res.status(200).send({
    message: "success",
    jobs: jobs,
    pageCount: pageCount,
  });
});

export default router;
