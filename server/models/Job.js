// Import Mongoose
const mongoose = require("mongoose");

// Job Schema

const jobSchema = new mongoose.Schema(
  {
    // User reference
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Company name
    company: {
      type: String,
      required: true,
    },

    // Job title
    position: {
      type: String,
      required: true,
    },

    // Application status
    status: {
      type: String,
      enum: [
        "Applied",
        "Interview",
        "Rejected",
        "Offer",
      ],
      default: "Applied",
    },

    // Optional notes
    notes: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

// Export model
module.exports =
  mongoose.model("Job", jobSchema);