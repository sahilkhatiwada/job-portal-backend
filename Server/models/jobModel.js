import mongoose from "mongoose";
import {
  EducationLevel,
  Experiences,
  JobTypeOption,
  Salary,
  Skills,
  country,
  jobTitle,
} from "../constants/general.constant.js";

const jobSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companyLocation: {
      type: String,
      required: true,
      trim: true,
    },
    companyPhoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: true,
      enum: jobTitle,
    },
    education: {
      type: String,
      required: true,
      trim: true,
      enum: EducationLevel,
    },
    country: {
      type: String,
      capitalize: true,
      enum: country,
    },
    jobType: {
      type: String,
      required: true,
      enum: JobTypeOption,
    },
    salary: {
      type: String,
      required: true,
      enum: Salary,
    },
    vacancies: {
      type: Number,
      default: 1,
    },
    experiences: {
      type: String,
      required: true,
      enum: Experiences,
    },
    skills: {
      type: String,
      required: true,
      enum: Skills,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Job = mongoose.model("Job", jobSchema);

export default Job;
