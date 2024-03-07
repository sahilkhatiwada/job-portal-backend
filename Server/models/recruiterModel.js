import mongoose from "mongoose";

const recruiterRegSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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
  contact: {
    type: String,
  },
  location: {
    type: String,
  },
  profileUrl: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  about: {
    type: String,
  },
  jobPosting: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobs",
    },
  ],
});

const companies = mongoose.model("Company", recruiterRegSchema);

export default companies;
