import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

// isUser middleware to check if user exists in the database and return a 401 error message if not
export const isUser = async (req, res, next) => {
  // extract token from header
  const token = req.headers.authorization;

  // split token from bearer to get the actual token
  const splittedToken = authorization?.split(" ");

  const accessToken = splittedToken?.length === 2 ? splittedToken[1] : null;

  if (!accessToken) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  let payload;

  try {
    payload = jwt.verify(accessToken, "JWT_SECRET_KEY");
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  req.loggedInUser = user;
  next();
};

// isRecruiter middleware to check if user exists in the database and return a 401 error message if not recruiter
// extract token from req.headers
export const isRecruiter = async (req, res, next) => {
  // extract token from header
  const authorization = req.headers.authorization;

  const splittedToken = authorization?.split(" ");
  const token = splittedToken?.length === 2 ? splittedToken[1] : null;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  let payload;

  try {
    payload = await jwt.verify(token, "JWT_SECRET_KEY");
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  //   find user
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  if (user.role !== "recruiter") {
    return res.status(401).send({ message: "Unauthorized." });
  }

  req.loggedInUser = user;
  req.loggedInUserId = user._id;

  next();
};

// isSeeker middleware to check if user exists in the database and return a 401 error message if not
export const isSeeker = async (req, res, next) => {
  // extract token from header
  const authorization = req.headers.authorization;
  const splittedToken = authorization?.split(" ");
  const token = splittedToken?.length === 2 ? splittedToken[1] : null;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  let payload;
  try {
    payload = jwt.verify(token, "JWT_SECRET_KEY");
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  const user = await User.findOne({ email: payload.email });
  if (!user) {
    return res.status(401).send({ message: "Unauthorized." });
  }
  if (user.role !== "seeker") {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // store user data on request object
  req.loggedInUser = user;
  req.loggedInUserId = user._id;
  next();
};
