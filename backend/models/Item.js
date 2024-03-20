const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  category: String,
  location: String,
  datePosted: { type: Date, default: Date.now },
  dateLost: Date,
  images: [String],
  status: { type: String, default: "open" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  claimant: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Item", itemSchema);
