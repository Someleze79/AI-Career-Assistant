// Import Express
const express = require("express");

// Import Controllers
const {
  getSubscription,
  upgradeSubscription,
} = require(
  "../controllers/subscriptionController"
);

// Import Middleware
const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

// Create Router
const router = express.Router();

// Subscription Routes

// Get current subscription
router.get(
  "/",
  protect,
  getSubscription
);

// Upgrade subscription
router.put(
  "/upgrade",
  protect,
  upgradeSubscription
);

// Import Router
module.exports = router;