import { validateReqBody } from "../middleware/validation.middleware.js";
import Job from "../models/jobModel.js";
import { jobRegSchema } from "../validation/job.validation.js";
import express from express;
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

// update job
router.put('/jobs/update/:id', async (req, res) => {
    try {
        const jobId = req.params.id;
        const newValues = req.body;

        // Check for valid MongoDB ObjectId
        const isValidMongoId = checkMongoIdValidity(jobId);
        if (!isValidMongoId) {
            return res.status(400).json({ message: 'Invalid MongoDB ID.' });
        }

        // Find the job by ID
        const job = await Job.findOne({ _id: jobId });
        if (!job) {
            return res.status(404).json({ message: 'Job not found.' });
        }

        // Check if the logged-in user is the owner of the job
        const tokenUserId = req.userDetails._id;
        const jobOwnerId = job.userId;
        const isOwnerOfJob = jobOwnerId.equals(tokenUserId);

        if (!isOwnerOfJob) {
            return res.status(403).json({ message: 'You are not the owner of this job.' });
        }

        // Update the job
        await Job.updateOne({ _id: jobId }, { $set: newValues });

        return res.status(200).json({ message: 'Job updated successfully.' });
    } catch (error) {
        console.error('Error updating job:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});


// Delete a job listing
router.delete('/jobs/delete/:id', async (req, res) => {
    try {
        const jobId = req.params.id;

        // Check for valid MongoDB ObjectId
        const isValidMongoId = checkMongoIdValidity(jobId);
        if (!isValidMongoId) {
            return res.status(400).json({ message: 'Invalid MongoDB ID.' });
        }

        // Find the job by ID
        const job = await Job.findOne({ _id: jobId });
        if (!job) {
            return res.status(404).json({ message: 'Job not found.' });
        }

        // Check if the logged-in user is the owner of the job
        const tokenUserId = req.userDetails._id;
        const jobOwnerId = job.userId;
        const isOwnerOfJob = jobOwnerId.equals(tokenUserId);

        if (!isOwnerOfJob) {
            return res.status(403).json({ message: 'You are not the owner of this job.' });
        }

        // Delete the job
        await Job.deleteOne({ _id: jobId });

        return res.status(200).json({ message: 'Job deleted successfully.' });
    } catch (error) {
        console.error('Error deleting job:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});
// Get job details by ID
router.get('/jobs/details/:id', async (req, res) => {
    try {
        const jobId = req.params.id;

        // Check for valid MongoDB ObjectId
        const isValidMongoId = checkMongoIdValidity(jobId);
        if (!isValidMongoId) {
            return res.status(400).json({ message: 'Invalid MongoDB ID.' });
        }

        // Find the job by ID
        const job = await Job.findOne({ _id: jobId });
        if (!job) {
            return res.status(404).json({ message: 'Job not found.' });
        }

        // Check if the logged-in user is the owner of the job
        const tokenUserId = req.userDetails._id;
        const jobOwnerId = job.userId;
        const isOwnerOfJob = jobOwnerId.equals(tokenUserId);

        if (!isOwnerOfJob) {
            return res.status(403).json({ message: 'You are not the owner of this job.' });
        }

        // Remove userId field from the response
        job.userId = undefined;

        return res.status(200).json(job);
    } catch (error) {
        console.error('Error fetching job details:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});
// Get a paginated list of job listings
router.post('/jobs/list', async (req, res) => {
    try {
        const { page, limit } = req.body;

        // Calculate the number of documents to skip
        const skip = (page - 1) * limit;

        // Fetch job listings for the logged-in user
        const userId = req.userDetails._id;
        const jobs = await Job.aggregate([
            { $match: { userId } },
            { $sort: { createdAt: -1 } },
            { $skip: skip },
            { $limit: limit },
            { $project: { userId: 0 } }, // Exclude userId field
        ]);

        return res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching job listings:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});