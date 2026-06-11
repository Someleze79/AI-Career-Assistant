// Import Express
const express = require("express");

// Import controllers
const {
  getJobs,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");

// Import auth middleware
const {
  protect,
} = require("../middleware/authMiddleware");

// Create router
const router = express.Router();

// Job Routes

// Get jobs
router.get(
  "/",
  protect,
  getJobs
);

// Create job
router.post(
  "/",
  protect,
  createJob
);

// Delete job
router.delete(
  "/:id",
  protect,
  deleteJob
);

// Update job
router.put(
  "/:id",
  protect,
  updateJob
);

// Export router
module.exports = router;