import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
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
    },
    accountType: {
      type: String,
      default: "seeker",
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
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
