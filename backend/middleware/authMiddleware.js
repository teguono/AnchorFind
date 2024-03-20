const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const header = req.header("Authorization");

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).send("Access denied. No token provided.");
  }

  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = auth;
