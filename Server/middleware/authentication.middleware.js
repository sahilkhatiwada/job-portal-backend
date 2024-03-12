import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

const validateAccessToken = async (req, res, next) => {
  // extract token from req.headers

  const authorization = req.headers.authorization;
  const splittedToken = authorization?.split(" ");
  const token = splittedToken?.length === 2 ? splittedToken[1] : null;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  let payload;
  // decrypt token using signature
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }
  // find user from that email

  const user = await User.findOne({ email: payload.email });
  // if user does not exist,throw error

  if (user) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  req.userDetails = user;

  next();
};

export default validateAccessToken;
