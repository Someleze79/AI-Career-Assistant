// JWT package for verifying tokens
const jwt = require("jsonwebtoken");

// User model
const User = require("../models/User");

// Protect Middleware

// Verifies JWT token and
// attaches authenticated user
// to the request object
const protect = async (
  req,
  res,
  next
) => {

  try {

    // Get Authorization Header

    const authHeader =
      req.headers.authorization;

    // Check if header exists
    // and starts with Bearer
    if (
      !authHeader ||
      !authHeader.startsWith(
        "Bearer "
      )
    ) {

      return res.status(401).json({
        message:
          "No token provided",
      });
    }

    // Extract Token

    const token =
      authHeader.split(" ")[1];

    // Verify Token

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    // Find User

    req.user =
      await User.findById(
        decoded.id
      ).select("-password");

    // User no longer exists
    if (!req.user) {

      return res.status(401).json({
        message:
          "User not found",
      });
    }

    // Continue Request

    next();

  } catch (error) {

    console.log(error);

    return res.status(401).json({
      message:
        "Not authorized",
    });
  }
};

// Export Middleware

module.exports = {
  protect,
};