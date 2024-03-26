const User = require("../models/User");

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    // req.user is set from the authentication middleware
    const user = await User.findById(req.user.id).select("-password");
    console.log("user is :", user);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
