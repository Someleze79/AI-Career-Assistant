// Import multer
const multer = require("multer");

// Storage Configuration

const storage = multer.diskStorage({

  // Upload destination
  destination: (
    req,
    file,
    cb
  ) => {

    cb(null, "uploads/");
  },

  // File naming
  filename: (
    req,
    file,
    cb
  ) => {

    cb(
      null,
      Date.now() +
      "-" +
      file.originalname
    );
  },
});

// File Filter

const fileFilter = (
  req,
  file,
  cb
) => {

  // Allow only PDFs
  if (
    file.mimetype ===
    "application/pdf"
  ) {

    cb(null, true);

  } else {

    cb(
      new Error(
        "Only PDF files are allowed"
      ),
      false
    );
  }
};

// Create upload middleware
const upload = multer({
  storage,
  fileFilter,
});

// Export middleware
module.exports = upload;