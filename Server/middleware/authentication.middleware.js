import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

// isUser middleware to check if user exists in the database and return a 401 error message if not
// export const isUser = async (req, res, next) => {
//   // extract token from req.headers

//   const authorization = req.headers.authorization;
//   const splittedToken = authorization?.split(" ");
//   const token = splittedToken?.length === 2 ? splittedToken[1] : null;
//   // console.log("Token:", token);

//   if (!token) {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   let payload;
//   // decrypt token using signature
//   try {
//     payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     // console.log("Payload:", payload);

//     // find user from that email
//     const user = await User.findOne({ email: payload.email });
//     // console.log("User:", user);

//     // if user does not exist, throw error
//     if (!user) {
//       return res
//         .status(401)
//         .send({ message: "Unauthorized - User not found." });
//     }

//     req.userDetails = user;

//     next();
//   } catch (error) {
//     console.error("Token verification error:", error);
//     return res.status(401).send({ message: "Unauthorized." });
//   }
// };

// isRecruiter middleware to check if user exists in the database and return a 401 error message if not recruiter
// extract token from req.headers
// export const isRecruiter = async (req, res, next) => {
//   // extract token from header
//   const authorization = req.headers.authorization;

//   const splittedToken = authorization?.split(" ");
//   const token = splittedToken?.length === 2 ? splittedToken[1] : null;

//   if (!token) {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   let payload;

//   try {
//     payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
//   } catch (error) {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   //   find user
//   const user = await User.findOne({ email: payload.email });

//   if (!user) {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   if (user.role !== "recruiter") {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   req.userDetails = user;
//   // req.loggedInUserId = user._id;

//   next();
// };

// isSeeker middleware to check if user exists in the database and return a 401 error message if not
// export const isSeeker = async (req, res, next) => {
//   // extract token from header
//   const authorization = req.headers.authorization;
//   const splittedToken = authorization?.split(" ");
//   const token = splittedToken?.length === 2 ? splittedToken[1] : null;

//   if (!token) {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   let payload;
//   try {
//     payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
//   } catch (error) {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   const user = await User.findOne({ email: payload.email });
//   if (!user) {
//     return res.status(401).send({ message: "Unauthorized." });
//   }
//   if (user.role !== "seeker") {
//     return res.status(401).send({ message: "Unauthorized." });
//   }

//   // store user data on request object
//   req.userDetails = user;
//   // req.loggedInUserId = user._id;
//   next();
// };

export const validateAccessToken = async (req, res, next) => {
  // extract token from req.headers

  const authorization = req.headers.authorization;
  const splittedToken = authorization?.split(" ");
  const token = splittedToken?.length === 2 ? splittedToken[1] : null;
  // console.log("Token:", token);

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  let payload;
  // decrypt token using signature
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log("Payload:", payload);

    // find user from that email
    const user = await User.findOne({ email: payload.email });
    // console.log("User:", user);

    // if user does not exist, throw error
    if (!user) {
      return res
        .status(401)
        .send({ message: "Unauthorized - User not found." });
    }

    req.userDetails = user;

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).send({ message: "Unauthorized." });
  }
};
