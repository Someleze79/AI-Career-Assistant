// Import Job model
const Job = require("../models/Job");

// Get All Jobs

exports.getJobs = async (
  req,
  res
) => {

  try {

    // Find jobs belonging to user
    const jobs = await Job.find({
      user: req.user._id,
    });

    res.status(200).json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Job

exports.createJob = async (
  req,
  res
) => {

  try {

    const {
      company,
      position,
      status,
      notes,
    } = req.body;

    // Create new job
    const job = await Job.create({
      user: req.user._id,
      company,
      position,
      status,
      notes,
    });

    res.status(201).json(job);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Job

exports.deleteJob = async (
  req,
  res
) => {

  try {

    // Find job
    const job = await Job.findById(
      req.params.id
    );

    // Check if exists
    if (!job) {

      return res.status(404).json({
        message: "Job not found",
      });
    }

    // Verify ownership
    if (
      job.user.toString() !==
      req.user._id.toString()
    ) {

      return res.status(401).json({
        message: "Not authorized",
      });
    }

    // Delete job
    await job.deleteOne();

    res.status(200).json({
      message: "Job deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Job

exports.updateJob = async (
  req,
  res
) => {

  try {

    // Find job
    const job = await Job.findById(
      req.params.id
    );

    // Check if job exists
    if (!job) {

      return res.status(404).json({
        message: "Job not found",
      });
    }

    // Verify ownership
    if (
      job.user.toString() !==
      req.user._id.toString()
    ) {

      return res.status(401).json({
        message: "Not authorized",
      });
    }

    // Update job
    const updatedJob =
      await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    res.status(200).json(
      updatedJob
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to update job",
    });
  }
};