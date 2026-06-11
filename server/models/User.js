const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
},

email: {
  type: String,
  required: true,
  unique: true,
},

password: {
  type: String,
  required: true,
},

// Stripe customer ID
stripeCustomerId: {
  type: String,
  default: null,
},

// Stripe subscription ID
stripeSubscriptionId: {
  type: String,
  default: null,
},

// Plan type
subscription: {
  type: String,
  enum: ["free", "pro", "premium"],
  default: "free",
},

// Subscription status
subscriptionStatus: {
  type: String,
  enum: [
    "inactive",
    "active",
    "cancelled",
    "past_due",
  ],
  default: "inactive",
},

// Track free-plan usage
resumeAnalysesUsed: {
  type: Number,
  default: 0,
},

coverLettersUsed: {
  type: Number,
  default: 0,
},

interviewQuestionsUsed: {
  type: Number,
  default: 0,
},

careerCoachMessagesUsed: {
  type: Number,
  default: 0,
},

},
{
timestamps: true,
}
);

module.exports = mongoose.model(
"User",
userSchema
);