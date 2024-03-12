import mongoose from "mongoose";

const recruiterRegSchema = new mongoose.Schema({
  recruiterName: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyContact: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  jobPosting: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobs",
    },
  ],
});

const Recruiter = mongoose.model("Company", recruiterRegSchema);

export default Recruiter;
