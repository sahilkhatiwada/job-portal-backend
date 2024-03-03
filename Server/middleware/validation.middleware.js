export const validateReqBody = (validationSchema) => {
  return async (req, res, next) => {
    try {
      req.body = await validationSchema.validate(req.body);
      next();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  };
};
