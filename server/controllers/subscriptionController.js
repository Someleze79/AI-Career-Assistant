// Import User model
const User = require("../models/User");

// Get Current Subscription

const getSubscription = async (
  req,
  res
) => {

  try {

    const user =
      await User.findById(
        req.user._id
      ).select(
        "subscription resumeAnalysesUsed coverLettersUsed interviewQuestionsUsed"
      );

    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// Upgrade Subscription

const upgradeSubscription = async (
  req,
  res
) => {

  try {

    const { plan } = req.body;

    if (
      !["free", "pro", "premium"].includes(
        plan
      )
    ) {

      return res.status(400).json({
        message:
          "Invalid subscription plan",
      });
    }

    const user =
      await User.findById(
        req.user._id
      );

    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });
    }

    user.subscription = plan;

    await user.save();

    res.status(200).json({
      message:
        "Subscription updated successfully",
      subscription:
        user.subscription,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// Export Controllers

module.exports = {
  getSubscription,
  upgradeSubscription,
};