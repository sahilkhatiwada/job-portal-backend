import express from "express";
import { validateReqBody } from "../middleware/validation.middleware.js";
import Recruiter from "../models/recruiterModel.js";
import bcrypt from "bcrypt";
import { recruiterRegSchema } from "../validation/recruiter.validation.js";

const router = express.Router();

router.post(
  "/recruiter/register",
  validateReqBody(recruiterRegSchema),
  async (req, res) => {
    const newRecruiterData = req.body;
    // check if recruiter already exists
    const recruiter = await Recruiter.findOne({
      CompanyEmail: newRecruiterData.CompanyEmail,
    });
    // if recruiter exists , throw error
    if (recruiter) {
      return res.status(409).send({
        message: "Recruiter already exists.",
      });
    }
    // hash Password before saving to database
    const hashedPassword = await bcrypt.hash(newRecruiterData.password, 10);
    newRecruiterData.password = hashedPassword;

    // create new recruiter
    await Recruiter.create(newRecruiterData);
    res.status(201).send({
      message: "Recruiter created successfully.",
    });
  }
);

// login router
router.post("/recruiter/login", async (req, res) => {
  const loginCredentials = req.body;
  // find the user by email
  const user = await Recruiter.findOne({
    CompanyEmail: loginCredentials.email,
  });
  if (!user) {
    return res.status(401).send({ message: "User not found." });
  }
  // compare password with the one in db
  const isMatch = await bcrypt.compare(
    loginCredentials.password,
    user.password
  );
  if (!isMatch) {
    return res.status(401).send({ message: "Invalid password." });
  }
  // send back a token for authentication
  const token = jwt.sign(
    { CompanyEmail: user.CompanyEmail },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );
  res.header("auth-token", token).send(
    jwt.decode(token, { complete: true }, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Invalid token." });
      } else {
        return res.json({
          id: user._id,
          name: `${user.FirstName} ${user.LastName}`,
          email: user.companyEmail,
          token: token,
          expiry: decoded.exp,
        });
      }
    })
  );
});
export default router;
