import jwt from "jsonwebtoken";

const checkMe = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, "bruce");
      req.body.userID = decoded.userID;
      next();
    } catch (error) {
      res.status(401).send({ msg: "Unauthorized" });
    }
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
};

export { checkMe };
