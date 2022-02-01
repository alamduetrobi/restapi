const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.autorization.split(" ")[1];
    const decode = jwt.verify(token, "SECRET");
    req.user = decode;
    next();
  } catch (error) {
    res.json({
      message: "Authentication Failed",
    });
  }
};

module.exports = authenticate;