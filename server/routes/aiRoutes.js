// Import Express
const express = require("express");

// Import multer middleware
const upload = require("../middleware/multerMiddleware");

// Import auth middleware
const {
  protect,
} = require("../middleware/authMiddleware");

// Import AI controller
const {
  analyzeResume,
  generateCoverLetter,
  analyzeResumePDF,
  generateInterviewQuestions,
  careerCoach,
} = require("../controllers/aiController");

// Create router
const router = express.Router();

// Resume analysis route
router.post(
  "/analyze-resume",
  protect,
  analyzeResume
);

// Cover letter generation route
router.post(
  "/generate-cover-letter",
  protect,
  generateCoverLetter
);

// PDF Resume Analysis Route
router.post(
  "/analyze-resume-pdf",
  protect,
  upload.single("resume"),
  analyzeResumePDF
);

// Interview Questions Route
router.post(
  "/generate-interview-questions",
  protect,
  generateInterviewQuestions
);

// Career Coach
router.post(
  "/career-coach",
  protect,
  careerCoach
);

// Export router
module.exports = router;