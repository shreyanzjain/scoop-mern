const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;

  // if no token is found
  if (!token) {
    return res.status(403).send("Unauthorized.");
  } 
  
  // if token is found
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = data.id;
    req.userEmail = data.email;
    req.userRole = data.userRole;

    // if token is verified
    return next();
  } catch {

    // if there is an error when verifying token
    return res.status(403).send("Unauthorized.");
  }
};

module.exports = { authorization };
