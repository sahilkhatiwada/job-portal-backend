import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companies",
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    vacancies: {
      type: Number,
      default: 1,
    },
    experiences: {
      type: Number,
      default: 0,
    },
    detail: [
      {
        desc: {
          type: String,
          required: true,
        },
      },
    ],
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    application: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    status: {
      type: String,
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);
const jobModel = mongoose.model("Job", jobSchema);
export default jobModel;
