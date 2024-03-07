const validateToken = (req, req, next) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log(token);
  //Bearer Token
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userData = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized Please login" });
  }
};

export default validateToken;
