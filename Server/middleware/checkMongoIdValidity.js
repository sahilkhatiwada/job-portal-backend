import mongoose from "mongoose";

export const checkMongoIdValidity = (req, res, next) => {
  // extract id from request params
  let id = req.params.id;

  // check for MongoId validity
  const isValidMongoId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidMongoId) {
    return res.status(400).json({ message: "Invalid MongoDB ID." });
  }
  next();
};
