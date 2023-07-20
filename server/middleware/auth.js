const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  //Access token from request
  //Way can be multiple  
  const token = req.headers["authorization"];

  if (!token || !token.startsWith('Bearer ')) {    
    return res.status(401).send("A token is required for authentication");
  }

  try {    
    const decoded = jwt.verify(token.split(' ')[1], config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;