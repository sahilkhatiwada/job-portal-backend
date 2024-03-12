import job from "../models/jobModel.js";

export const checkJobOwnership = async (req, res, next) => {
  const jobId = req.params.id;
  // find job
  const jobDetails = await job.findOne({ _id: jobId });

  // if job not found return 404 error
  if (!jobDetails) {
    return res.status(404).send({ message: "Job not found." });
  }

  // compare the owner of the job with the owner of the user making the request

  const isOwnerOfJob = req.loggedInUserId.equals(jobDetails.owner);
  if (!isOwnerOfJob) {
    return res
      .status(403)
      .send({ message: "You are not authorized to perform this action" });
  }

  // move on to the next middleware
  next();
};
