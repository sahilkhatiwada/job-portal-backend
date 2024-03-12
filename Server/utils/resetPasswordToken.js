import crypto from "crypto";

const generateResetToken = () => {
  // Generate a random reset token
  const token = crypto.randomBytes(20).toString("hex"); // Generate a random token of 40 characters (20 bytes)

  return token;
};

export default generateResetToken;
