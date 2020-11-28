const jwt = require('jsonwebtoken');
const config = require('../../config');
const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization.substring(7);
    const verified = jwt.verify(token, config.jwtSecret);
    if (verified) {
      req.user = verified.id;
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
}

module.exports = isLoggedIn;